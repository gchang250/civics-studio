"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "PARLIAMENT TRACKER", "MEDIA BIAS DETECTOR", "THE CANPOL INDEX", "CYFFL",
  "FREE RESOURCES", "NON-PARTISAN", "CIVIC EDUCATION",
  "OPEN DATA", "DATA PROJECTS", "INDEPENDENT REPRESENTATION",
  "ECONOMIC LITERACY", "POLITICAL LITERACY", "CANADA",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-edge bg-ink-2 py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-12"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-[12px] font-medium tracking-[0.25em] text-mist/40 whitespace-nowrap lowercase">
              {item}
            </span>
            <span className="text-maple/60 text-sm font-semibold">*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
