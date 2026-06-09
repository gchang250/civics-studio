"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "DETENTE", "THE FRIED RICE INDEX", "CYFFL",
  "FREE RESOURCES", "NON-PARTISAN", "CIVIC EDUCATION",
  "NEGOTIATION", "DATA PROJECTS", "GAMES",
  "ECONOMIC LITERACY", "POLITICAL LITERACY", "CANADA",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-[#030C18] py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/30 whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#C9A94B]/50 text-xs">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
