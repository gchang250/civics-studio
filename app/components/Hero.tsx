"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const WORDS = [
  "Helping", "students", "understand",
  "how", "the", "world", "is", "governed.",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      rawX.set((e.clientX - left) / width);
      rawY.set((e.clientY - top) / height);
    },
    [rawX, rawY]
  );

  const x1 = useSpring(useTransform(rawX, [0, 1], [28, -28]), { stiffness: 55, damping: 18 });
  const y1 = useSpring(useTransform(rawY, [0, 1], [18, -18]), { stiffness: 55, damping: 18 });

  const x2 = useSpring(useTransform(rawX, [0, 1], [16, -16]), { stiffness: 75, damping: 22 });
  const y2 = useSpring(useTransform(rawY, [0, 1], [10, -10]), { stiffness: 75, damping: 22 });

  const x3 = useSpring(useTransform(rawX, [0, 1], [9, -9]),   { stiffness: 95, damping: 28 });
  const y3 = useSpring(useTransform(rawY, [0, 1], [6, -6]),   { stiffness: 95, damping: 28 });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] overflow-hidden bg-[#0A1628]"
    >
      {/* Film-grain noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient gradient orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 left-[5%] h-[700px] w-[700px] rounded-full bg-[#C9A94B]/[0.035] blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="pointer-events-none absolute bottom-[-10%] right-[15%] h-[500px] w-[500px] rounded-full bg-[#1C3557]/40 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute top-1/3 right-[10%] h-[300px] w-[300px] rounded-full bg-[#C9A94B]/[0.02] blur-[80px]"
      />

      {/* Orbital rings */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center translate-x-[15%]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-[580px] w-[580px] rounded-full"
            style={{ border: "1px dashed rgba(201,169,75,0.10)" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute h-[400px] w-[400px] rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.04)" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute h-[240px] w-[240px] rounded-full"
            style={{ border: "1.5px solid rgba(201,169,75,0.16)" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-[580px] w-[580px]"
          >
            <div className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A94B] shadow-[0_0_12px_4px_rgba(201,169,75,0.55)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute h-[240px] w-[240px]"
          >
            <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear", delay: -22.5 }}
            className="absolute h-[580px] w-[580px]"
          >
            <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A94B]/60 shadow-[0_0_6px_2px_rgba(201,169,75,0.3)]" />
          </motion.div>
        </div>
      </div>

      {/* Gold shimmer at top */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#C9A94B] to-transparent"
      />

      {/* Main layout */}
      <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT — text */}
        <div className="py-24 lg:py-0">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="mb-8 flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block h-px w-8 origin-left bg-[#C9A94B]"
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]">
              Advocating for Independent Representation in Canada
            </span>
          </motion.div>

          {/* Word-by-word 3-D flip headline */}
          <h1
            className="serif text-[clamp(2.6rem,5.8vw,4.8rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white"
            style={{ perspective: "700px" }}
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 52, rotateX: -45, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.28 + i * 0.075,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "bottom center", display: "inline-block", marginRight: "0.26em" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-7 max-w-md text-lg leading-8 text-white/45"
          >
            Free games, data projects, and learning resources that make
            politics, economics, and government easier to understand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#0A1628] transition hover:bg-[#C9A94B]"
            >
              View Projects
            </Link>
            <Link
              href="/projects/detente"
              className="border border-white/15 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/65 transition hover:border-white/40 hover:text-white"
            >
              Download Détente
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-14 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-px bg-gradient-to-b from-[#C9A94B]/60 to-transparent"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/20">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* RIGHT — floating image collage */}
        <div className="relative hidden h-[620px] lg:block">

          {/* Image 1: Chess */}
          <motion.div
            style={{ x: x1, y: y1 }}
            initial={{ opacity: 0, scale: 0.82, rotate: -22, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: -13, y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="absolute left-[-5%] top-[4%] h-[210px] w-[290px] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.75)]"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative -top-[7%] h-[114%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=650&q=85"
                alt="Chess pieces"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A94B]/15 to-transparent" />
            </motion.div>
            <div className="absolute bottom-2.5 left-3 z-10 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A94B]">
              Detente
            </div>
          </motion.div>

          {/* Image 2: Parliament */}
          <motion.div
            style={{ x: x2, y: y2 }}
            initial={{ opacity: 0, scale: 0.82, rotate: 12, y: 70 }}
            animate={{ opacity: 1, scale: 1, rotate: 7, y: 0 }}
            transition={{ delay: 0.72, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="absolute right-[2%] top-[18%] z-10 h-[250px] w-[330px] overflow-hidden shadow-[0_32px_90px_rgba(0,0,0,0.85)]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="relative -top-[7%] h-[114%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=750&q=85"
                alt="Canadian Parliament"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1C3557]/25" />
            </motion.div>
            <div className="absolute bottom-2.5 left-3 z-10 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A94B]">
              Parliament Tracker
            </div>
          </motion.div>

          {/* Image 3: Bangkok */}
          <motion.div
            style={{ x: x3, y: y3 }}
            initial={{ opacity: 0, scale: 0.82, rotate: -9, y: 80 }}
            animate={{ opacity: 1, scale: 1, rotate: -4, y: 0 }}
            transition={{ delay: 0.88, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="absolute bottom-[4%] left-[10%] z-20 h-[200px] w-[270px] overflow-hidden shadow-[0_28px_75px_rgba(0,0,0,0.8)]"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="relative -top-[7%] h-[114%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1756713545237-7c97075b71da?auto=format&fit=crop&w=650&q=85"
                alt="Bangkok street food market"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
            </motion.div>
            <div className="absolute bottom-2.5 left-3 z-10 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A94B]">
              Fried Rice Index
            </div>
          </motion.div>

          {/* "Free · Non-partisan" badge — rectangular (official) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.25, type: "spring", stiffness: 180, damping: 14 }}
            className="absolute right-[-2%] top-[6%] z-30 border border-[#C9A94B]/25 bg-[#0A1628]/85 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A94B]">
              Free · Non-partisan
            </span>
          </motion.div>

          {/* "3 active projects" badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 180, damping: 14 }}
            className="absolute bottom-[18%] right-[1%] z-30 border border-white/10 bg-[#0A1628]/80 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              5 active projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
