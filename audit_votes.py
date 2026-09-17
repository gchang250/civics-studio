import os
import re
import urllib.request
import json
import time

profiles_dir = "content/mp-profiles"
api_base = "https://api.openparliament.ca"

# Cache for vote ballots: (session, number) -> dict mapping politician slug to ballot
vote_cache = {}

def get_mp_ballots_for_vote(session, number):
    key = (session, number)
    if key in vote_cache:
        return vote_cache[key]
    
    vote_path = f"/votes/{session}/{number}/"
    url = f"{api_base}/votes/ballots/?vote={vote_path}&limit=500&format=json"
    print(f"Fetching ballots for Vote {session}#{number} from {url}...")
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'CivicsStudio Auditor'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            ballots = {}
            for obj in data.get("objects", []):
                pol_url = obj.get("politician_url", "")
                pol_slug = pol_url.strip("/").split("/")[-1]
                ballots[pol_slug] = obj.get("ballot")
            vote_cache[key] = ballots
            # Sleep briefly to be respectful to API
            time.sleep(0.5)
            return ballots
    except Exception as e:
        print(f"Error fetching ballots for {key}: {e}")
        return None

def main():
    files = [f for f in os.listdir(profiles_dir) if f.endswith(".md")]
    files.sort()
    
    inconsistencies = []
    total_checks = 0
    errors = 0
    
    for filename in files:
        filepath = os.path.join(profiles_dir, filename)
        slug = filename[:-3]
        
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Parse frontmatter
        parts = content.split("---")
        if len(parts) < 3:
            continue
        
        frontmatter = parts[1]
        
        # Simple frontmatter parsing
        name_match = re.search(r"^name:\s*(.+)$", frontmatter, re.MULTILINE)
        if not name_match:
            continue
        mp_name = name_match.group(1).strip()
        
        # Extract platformAlignment entries
        # Since it is YAML, we can parse it simple line by line or using a simple regex since it follows a strict structure
        # Entries start with "  - promise:"
        entries = []
        current_entry = None
        
        for line in frontmatter.splitlines():
            if line.strip().startswith("- promise:"):
                if current_entry:
                    entries.append(current_entry)
                promise_text = line.split("promise:", 1)[1].strip().strip('"')
                current_entry = {"promise": promise_text}
            elif current_entry and line.strip().startswith("voteSession:"):
                current_entry["voteSession"] = line.split("voteSession:", 1)[1].strip().strip('"')
            elif current_entry and line.strip().startswith("voteNumber:"):
                current_entry["voteNumber"] = int(line.split("voteNumber:", 1)[1].strip())
            elif current_entry and line.strip().startswith("rating:"):
                current_entry["rating"] = line.split("rating:", 1)[1].strip()
            elif current_entry and line.strip().startswith("explanation:"):
                # Handle single or multiline string
                exp_text = line.split("explanation:", 1)[1].strip().strip('"')
                current_entry["explanation"] = exp_text
                
        if current_entry:
            entries.append(current_entry)
            
        for entry in entries:
            session = entry.get("voteSession")
            number = entry.get("voteNumber")
            explanation = entry.get("explanation", "")
            
            if not session or not number:
                continue
                
            total_checks += 1
            ballots = get_mp_ballots_for_vote(session, number)
            
            if ballots is None:
                errors += 1
                continue
                
            actual_ballot = ballots.get(slug)
            if not actual_ballot:
                # Politician might not have voted, or slug doesn't match
                # Let's search by name if slug fails
                found = False
                for p_slug, b in ballots.items():
                    # Clean slugs and compare
                    if p_slug.replace("-", "") in slug.replace("-", "") or slug.replace("-", "") in p_slug.replace("-", ""):
                        actual_ballot = b
                        found = True
                        break
                if not found:
                    print(f"Warning: MP slug '{slug}' not found in ballots for Vote {session}#{number}")
                    inconsistencies.append({
                        "file": filename,
                        "mp": mp_name,
                        "vote": f"{session}#{number}",
                        "issue": f"Slug '{slug}' not found in openparliament ballots."
                    })
                    continue
            
            # Determine the ballot the explanation claims for THIS MP on THIS vote.
            #
            # Every explanation leads with how the MP voted on the entry's own vote
            # ("Poilievre voted No on ...", "Joly's ballot ... was recorded as 'Paired'").
            # Later sentences may reference *other* votes ("after voting Yes on a failed
            # amendment (#171)") or numeric tallies ("passed 330 to 0"), so scanning the
            # whole string produces false positives. Instead we take the FIRST ballot
            # indicator that appears and compare only that to the live ballot.
            low = explanation.lower()

            def first_index(needles):
                positions = [low.find(n) for n in needles if low.find(n) != -1]
                return min(positions) if positions else None

            indicators = {
                "Yes": first_index(["voted yes", "voting yes", "vote yes"]),
                "No": first_index(["voted no", "voting no", "vote no"]),
                "Didn't vote": first_index(["did not vote", "didn't vote"]),
                "Paired": first_index(["paired"]),
            }
            present = {k: v for k, v in indicators.items() if v is not None}

            claimed = None
            if present:
                claimed = min(present, key=present.get)

            mismatch = False
            if claimed is None:
                # No explicit ballot word (e.g. "supported", "backed"); can't auto-verify
                # the direction, but the vote reference itself is real. Flag softly.
                print(f"NOTE: {mp_name} - Vote {session}#{number} - Actual: {actual_ballot} - no explicit ballot word in explanation")
            elif claimed != actual_ballot:
                mismatch = True

            if mismatch:
                inconsistencies.append({
                    "file": filename,
                    "mp": mp_name,
                    "vote": f"{session}#{number}",
                    "issue": f"MISMATCH: Explanation leads with ballot '{claimed}' but live ballot is '{actual_ballot}'. Explanation: \"{explanation}\""
                })
            else:
                # Also do a quick sanity print
                print(f"OK: {mp_name} - Vote {session}#{number} - Actual: {actual_ballot}")
                
    print("\n" + "="*50)
    print(f"AUDIT COMPLETE: Checked {total_checks} entries across {len(files)} files.")
    print(f"Errors: {errors}")
    print(f"Found {len(inconsistencies)} inconsistencies/issues:")
    for inc in inconsistencies:
        print(f"- {inc['mp']} ({inc['file']}) on Vote {inc['vote']}: {inc['issue']}")
    print("="*50)

if __name__ == "__main__":
    main()
