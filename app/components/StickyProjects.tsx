"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    type: "Print-and-play game",
    title: "Detente",
    description:
      "A political negotiation game about resources, hidden goals, and the signals every deal sends. Players compete to achieve secret goals while reading each other's motives in real time.",
    cta: "Download free",
    href: "/projects/detente",
    image:
      "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Chess pieces on a board",
    photographer: "Felix Mittermeier",
    photoHref: "https://unsplash.com/photos/chess-pieces-nAjil1z3eLk",
  },
  {
    number: "02",
    type: "Data project",
    title: "The Fried Rice Index",
    description:
      "A global affordability index using the price of a bowl of egg fried rice. Everyday prices, compared across cities worldwide, to make cost of living tangible and easy to discuss.",
    cta: "Visit the index",
    href: "/projects/fried-rice-index",
    image:
      "https://images.unsplash.com/photo-1756713545237-7c97075b71da?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Bangkok street food market at night",
    photographer: "GVZ 42",
    photoHref:
      "https://unsplash.com/photos/street-food-stall-at-night-with-neon-signs-H9ZhJTDNyKE",
  },
  {
    number: "03",
    type: "French literacy program",
    title: "CYFFL",
    description:
      "Free online French learning resources and local academic support for students. Youth-led, accessible, and built to make French less intimidating and more approachable.",
    cta: "Learn more",
    href: "/projects/cyffl",
    image:
      "https://images.unsplash.com/photo-1651514645933-c26e0eb4ace3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Group of people in conversation",
    photographer: "Small Group Network",
    photoHref: "https://unsplash.com/photos/a-group-of-people-talking-bxiOjnbjRM0",
  },
];

export default function StickyProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * projects.length), projects.length - 1);
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  const active = projects[activeIndex];

  return (
    <div
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#FAF7F0]">
        <div className="grid h-full lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20">

            {/* Progress indicators */}
            <div className="mb-14 flex items-center gap-3">
              {projects.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === activeIndex ? 48 : 16,
                    backgroundColor: i === activeIndex ? "#C9A94B" : "#D8D0C3",
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-0.5 rounded-full"
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]">
                  {active.number} — {active.type}
                </p>

                <h2 className="serif mt-5 text-[clamp(3rem,5.5vw,4.5rem)] font-bold leading-[1.0] tracking-[-0.045em] text-[#1C3557]">
                  {active.title}
                </h2>

                <p className="mt-6 max-w-md text-lg leading-8 text-[#5E5A54]">
                  {active.description}
                </p>

                <Link
                  href={active.href}
                  className="mt-10 inline-flex items-center gap-2 bg-[#1C3557] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
                >
                  {active.cta}
                  <span>→</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — photo */}
          <div className="relative hidden overflow-hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeIndex}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[#1C3557]/15" />
                <a
                  href={active.photoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
                >
                  Photo: {active.photographer} / Unsplash
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
