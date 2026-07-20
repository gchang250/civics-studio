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
  "Promoting", "government", "transparency",
  "and", "independent", "representation", "in", "Canada.",
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
      className="relative min-h-[92vh] overflow-hidden bg-ink"
    >
      {/* Ambient maple glow */}
      <div className="glow-maple pointer-events-none absolute -top-[10%] right-[6%] h-[70vh] w-[70vh]" />
      <div className="glow-maple pointer-events-none absolute bottom-[-20%] left-[-10%] h-[55vh] w-[55vh] opacity-60" />

      {/* Film-grain noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Thin architectural grid line dividers */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-edge/60 pointer-events-none hidden lg:block" />
      <div className="absolute inset-x-0 bottom-[15%] h-px bg-edge/40 pointer-events-none hidden lg:block" />

      {/* Main layout */}
      <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT — text */}
        <div className="py-20 lg:py-0 pr-0 lg:pr-8">

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
              className="inline-block h-px w-8 origin-left bg-maple"
            />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-maple lowercase">
              advocating for independent representation in canada
            </span>
          </motion.div>

          {/* Word-by-word 3-D flip headline */}
          <h1
            className="serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal italic leading-[1.08] tracking-[-0.02em] text-cream"
            style={{ perspective: "700px" }}
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.2 + i * 0.06,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "bottom center", display: "inline-block", marginRight: "0.24em" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-md text-base leading-8 text-mist"
          >
            Free games, data projects, and learning resources that make
            politics, economics, and government easier to understand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="bg-maple px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition duration-300 hover:shadow-[0_0_34px_-4px_rgba(249,85,61,0.65)]"
            >
              view projects
            </Link>
            <Link
              href="/projects/parliament-tracker"
              className="border border-edge px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-cream transition duration-300 hover:border-maple hover:text-maple-soft"
            >
              parliament tracker
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-14 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-px bg-gradient-to-b from-maple to-transparent"
            />
            <span className="text-[10px] font-medium tracking-[0.25em] text-mist-dim lowercase">
              scroll to explore
            </span>
          </motion.div>
        </div>

        {/* RIGHT — floating lookbook image frames */}
        <div className="relative hidden h-[620px] lg:block">

          {/* Image 1: Media Bias Detector */}
          <motion.div
            style={{ x: x1, y: y1 }}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, zIndex: 30 }}
            className="card-hover absolute left-[-2%] top-[6%] h-[230px] w-[270px] border border-edge bg-panel p-2.5"
          >
            <div className="relative h-[85%] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=650&q=85"
                alt="Folded newspaper representing media bias analysis"
                fill
                sizes="270px"
                className="object-cover transition duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-ink/25 pointer-events-none" />
            </div>
            <div className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-cream lowercase">
              media bias detector
            </div>
          </motion.div>

          {/* Image 2: Parliament */}
          <motion.div
            style={{ x: x2, y: y2 }}
            initial={{ opacity: 0, scale: 0.92, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, zIndex: 30 }}
            className="card-hover absolute right-[2%] top-[20%] z-10 h-[270px] w-[310px] border border-edge bg-panel p-2.5"
          >
            <div className="relative h-[88%] w-full overflow-hidden">
               <Image
                src="https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=750&q=85"
                alt="A beautiful, minimalist view of the Canadian Parliament building and Peace Tower"
                fill
                sizes="310px"
                className="object-cover transition duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-ink/20 pointer-events-none" />
            </div>
            <div className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-cream lowercase">
              parliament tracker
            </div>
          </motion.div>

          {/* Image 3: CanPol Index */}
          <motion.div
            style={{ x: x3, y: y3 }}
            initial={{ opacity: 0, scale: 0.92, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, zIndex: 30 }}
            className="card-hover absolute bottom-[6%] left-[8%] z-20 h-[210px] w-[250px] border border-edge bg-panel p-2.5"
          >
            <div className="relative h-[83%] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=650&q=85"
                alt="Modern house facade representing cost-of-living data"
                fill
                sizes="250px"
                className="object-cover transition duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-ink/25 pointer-events-none" />
            </div>
            <div className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-cream lowercase">
              canpol index
            </div>
          </motion.div>

          {/* "Free · Non-partisan" badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 180, damping: 14 }}
            className="absolute right-[-2%] top-[8%] z-30 border border-maple/40 bg-panel/90 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-[10px] font-semibold tracking-[0.2em] text-maple lowercase">
              free · non-partisan
            </span>
          </motion.div>

          {/* "3 active projects" badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, type: "spring", stiffness: 180, damping: 14 }}
            className="absolute bottom-[22%] right-[2%] z-30 border border-edge bg-panel/90 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-[10px] font-semibold tracking-[0.2em] text-mist lowercase">
              3 active projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
