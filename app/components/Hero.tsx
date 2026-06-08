"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#0A1628] px-5 py-24 text-center">

      {/* Gold shimmer line across top */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 inset-x-0 h-px origin-left bg-gradient-to-r from-transparent via-[#C9A94B] to-transparent"
      />

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,75,0.08),transparent)]" />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]"
      >
        Civic education, made practical
      </motion.p>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="serif mt-7 max-w-5xl text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white"
      >
        Helping students understand how the world is governed.
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.7 }}
        className="mt-7 max-w-lg text-lg leading-8 text-white/50"
      >
        Free games, data projects, and learning resources that make politics,
        economics, and government easier to understand.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/projects"
          className="bg-[#C9A94B] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#0A1628] transition hover:bg-white"
        >
          View projects
        </Link>
        <Link
          href="/projects/detente"
          className="border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white/80 transition hover:border-[#C9A94B] hover:text-[#C9A94B]"
        >
          Download Detente
        </Link>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[#C9A94B]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
