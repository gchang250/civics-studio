import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Civics Studio website and projects.",
};

const UPDATED = "July 20, 2026";

export default function TermsPage() {
  return (
    <div>
      <header className="bg-ink-2 text-paper">
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-12">
          <h1 className="display-sm">Terms of Service</h1>
          <p className="small mt-5 text-muted-ink">Last updated {UPDATED}</p>
        </div>
      </header>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl space-y-11 px-6 py-16">
          <div className="space-y-4">
            <p className="lede max-w-none">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
              Civics Studio website, including the voting records, member
              profiles, and downloadable data we publish (together, the
              &ldquo;Services&rdquo;). By using the Services, you agree to these
              Terms. If you do not agree, please do not use the Services.
            </p>
          </div>

          <Section title="Who we are">
            <p>
              Civics Studio is a youth-led, non-partisan civic education project.
              Our goal is to make politics, economics, and government easier to
              understand for students, educators, and the public in Canada and
              beyond.
            </p>
          </Section>

          <Section title="Use of the Services">
            <p>
              The Services are provided free of charge for personal, educational,
              and non-commercial use. You agree to use the Services lawfully and
              not to:
            </p>
            <ul className="copy mt-4 max-w-none list-disc space-y-2 pl-5">
              <li>Interfere with, disrupt, or attempt to gain unauthorized access to the Services or their systems;</li>
              <li>Scrape, overload, or misuse the Services in a way that harms their availability;</li>
              <li>Misrepresent our content or use it in a misleading way; or</li>
              <li>Use the Services to violate the rights of others or any applicable law.</li>
            </ul>
          </Section>

          <Section title="Non-partisan educational purpose">
            <p>
              Civics Studio does not support any political party or ideology. Our
              content is intended for civic education and is offered in good
              faith. It is provided for general informational purposes and should
              not be taken as legal, financial, or professional advice.
            </p>
          </Section>

          <Section title="Third-party data and accuracy">
            <p>
              The site presents information drawn from open government data,
              chiefly records published by the Parliament of Canada and
              republished by openparliament.ca. We work to present it
              accurately, but we do not guarantee that it is complete,
              error-free, or current. Where we describe what a member
              campaigned on, that is our own sourced reading of their stated
              platform. Always verify important information against the
              original sources, which we link.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              The original content we create, including text, design, and
              software, is owned by Civics Studio unless otherwise noted. You may
              view, share, and use our resources for educational and
              non-commercial purposes with attribution. Third-party data, logos,
              and materials remain the property of their respective owners.
            </p>
          </Section>

          <Section title="User comments and submissions">
            <p>
              Where comments are enabled, you are responsible for what you post
              and must keep it lawful and respectful. We may remove content that
              is abusive, misleading, or otherwise inappropriate, and we are not
              responsible for opinions expressed by users.
            </p>
          </Section>

          <Section title="Third-party links and services">
            <p>
              The Services may link to or rely on third-party websites and
              services, which are governed by their own terms and privacy
              policies. We are not responsible for the content or practices of
              those third parties.
            </p>
          </Section>

          <Section title="Disclaimer of warranties">
            <p>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, whether express or
              implied. We do not warrant that the Services will be uninterrupted,
              secure, or free of errors.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, Civics Studio will not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of, or inability to use, the Services.
            </p>
          </Section>

          <Section title="Changes to these Terms">
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top of this page.
              Your continued use of the Services after changes take effect means
              you accept the updated Terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these Terms? Email us at{" "}
              <a
                href="mailto:civicsstudio@gmail.com"
                className="link"
              >
                civicsstudio@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="h2">{title}</h2>
      <div className="copy mt-4 max-w-none space-y-4">{children}</div>
    </div>
  );
}
