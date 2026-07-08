export default function SealSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <circle cx="50" cy="50" r="49" fill="none" stroke="#e5e0d4" strokeWidth="1" />
      {/* Brand ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#111f36" strokeWidth="2" />
      {/* Inner thin ring */}
      <circle cx="50" cy="50" r="39" fill="none" stroke="#e5e0d4" strokeWidth="0.8" />

      {/* Laurel — left branch */}
      <ellipse cx="17" cy="67" rx="6" ry="2.3" fill="#111f36" transform="rotate(-18,17,67)" />
      <ellipse cx="11" cy="57" rx="6" ry="2.3" fill="#111f36" transform="rotate(-40,11,57)" />
      <ellipse cx="9"  cy="46" rx="6" ry="2.3" fill="#111f36" transform="rotate(-62,9,46)"  />
      <ellipse cx="11" cy="35" rx="6" ry="2.3" fill="#111f36" transform="rotate(-78,11,35)" />
      <ellipse cx="18" cy="27" rx="6" ry="2.3" fill="#111f36" transform="rotate(-70,18,27)" />

      {/* Laurel — right branch */}
      <ellipse cx="83" cy="67" rx="6" ry="2.3" fill="#111f36" transform="rotate(18,83,67)"  />
      <ellipse cx="89" cy="57" rx="6" ry="2.3" fill="#111f36" transform="rotate(40,89,57)"  />
      <ellipse cx="91" cy="46" rx="6" ry="2.3" fill="#111f36" transform="rotate(62,91,46)"  />
      <ellipse cx="89" cy="35" rx="6" ry="2.3" fill="#111f36" transform="rotate(78,89,35)"  />
      <ellipse cx="82" cy="27" rx="6" ry="2.3" fill="#111f36" transform="rotate(70,82,27)"  />

      {/* Stars */}
      <text x="30" y="22" textAnchor="middle" fill="#111f36" fontSize="7">★</text>
      <text x="50" y="18" textAnchor="middle" fill="#111f36" fontSize="7">★</text>
      <text x="70" y="22" textAnchor="middle" fill="#111f36" fontSize="7">★</text>

      {/* Dome lantern */}
      <line x1="50" y1="22" x2="50" y2="26" stroke="#111f36" strokeWidth="1.5" />
      <rect x="47" y="26" width="6" height="5" fill="none" stroke="#111f36" strokeWidth="1.3" />

      {/* Dome arch */}
      <path d="M31,48 Q50,23 69,48" fill="none" stroke="#111f36" strokeWidth="2.3" strokeLinecap="round" />

      {/* Entablature */}
      <rect x="25" y="48" width="50" height="3" fill="#111f36" rx="0.5" />

      {/* Columns */}
      <rect x="28" y="51" width="2" height="9" fill="#111f36" opacity="0.9" rx="0.3" />
      <rect x="34" y="51" width="2" height="9" fill="#111f36" opacity="0.9" rx="0.3" />
      <rect x="44" y="51" width="2" height="9" fill="#111f36" opacity="0.9" rx="0.3" />
      <rect x="54" y="51" width="2" height="9" fill="#111f36" opacity="0.9" rx="0.3" />
      <rect x="64" y="51" width="2" height="9" fill="#111f36" opacity="0.9" rx="0.3" />
      <rect x="70" y="51" width="2" height="9" fill="#111f36" opacity="0.9" rx="0.3" />

      {/* Steps */}
      <rect x="23" y="60" width="54" height="2"   fill="#111f36" opacity="0.8" rx="0.3" />
      <rect x="21" y="62" width="58" height="1.5" fill="#111f36" opacity="0.5" rx="0.3" />

      {/* Maple leaf */}
      <path
        d="M50,77 L48.5,71 L43,73.5 L45.5,68.5 L39.5,66.5 L44.5,65
           L42,60.5 L47,62 L47,58 L50,63 L53,58 L53,62 L58,60.5
           L55.5,65 L60.5,66.5 L54.5,68.5 L57,73.5 L51.5,71 Z"
        fill="#8b1e1e"
      />
      {/* Stem */}
      <rect x="49.2" y="77" width="2.2" height="7" fill="#8b1e1e" rx="0.5" />
    </svg>
  );
}
