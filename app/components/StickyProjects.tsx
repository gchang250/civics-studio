"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    type: "Data project",
    title: "Parliament Tracker",
    description:
      "Live MP roster, ridings, and real vote records pulled straight from Parliament's open data, flagging when an MP's ballot broke from their own party's whip.",
    cta: "Explore the tracker",
    href: "/projects/parliament-tracker",
    image:
      "https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A beautiful, minimalist view of the Canadian Parliament building and Peace Tower",
    photographer: "Dennis Zhang",
    photoHref:
      "https://unsplash.com/photos/the-canadian-parliament-building-stands-tall-LYKUm-VRJPs",
  },
  {
    number: "02",
    type: "AI tool",
    title: "Media Bias Detector",
    description:
      "Paste in any article or transcript and get a non-partisan, AI-assisted read on loaded language, framing, insinuation, and where it sits on the political spectrum.",
    cta: "Analyze an article",
    href: "/projects/media-bias-tracker",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Minimalist newspaper lying flat on a clean table surface",
    photographer: "Roman Kraft",
    photoHref:
      "https://unsplash.com/photos/a-folded-newspaper-lying-on-a-surface-H9ZhJTDNyKE",
  },
  {
    number: "03",
    type: "Data project",
    title: "The CanPol Index",
    description:
      "A cost-of-living index mapped across Canada's 338 federal electoral districts. See how housing, food, and transport costs differ riding by riding — and what your MP is representing.",
    cta: "Visit the index",
    href: "/projects/fried-rice-index",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Minimalist modern house facade with wood panels and warm lighting",
    photographer: "Qingbao Meng",
    photoHref:
      "https://unsplash.com/photos/a-modern-house-exterior-facade-with-wood-panels",
  },
  {
    number: "04",
    type: "French literacy program",
    title: "CYFFL",
    description:
      "A youth-led bridge preserving French culture and bilingual identity. Provides free tutoring and lessons to support students amidst a national deficit of 10,000 qualified French teachers.",
    cta: "Learn more",
    href: "/projects/cyffl",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Close-up of a person reading an elegant classic open book under soft window light",
    photographer: "Carolyn V",
    photoHref: "https://unsplash.com/photos/person-reading-book-bxiOjnbjRM0",
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
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <div className="grid h-full lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 relative">
            {/* Fine architectural line dividers */}
            <div className="absolute inset-y-0 right-0 w-px bg-edge/60 pointer-events-none hidden lg:block" />

            {/* Progress indicators */}
            <div className="mb-14 flex items-center gap-3">
              {projects.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === activeIndex ? 48 : 16,
                    backgroundColor: i === activeIndex ? "#f9553d" : "#253048",
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-0.5 rounded-full"
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] font-semibold tracking-[0.25em] text-maple lowercase">
                  {active.number} · {active.type}
                </p>

                <h2 className="serif mt-5 text-[clamp(2.4rem,4.8vw,3.6rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-cream">
                  {active.title}
                </h2>

                <p className="mt-6 max-w-md text-base leading-8 text-mist">
                  {active.description}
                </p>

                <Link
                  href={active.href}
                  className="mt-10 inline-flex items-center gap-2 bg-maple px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition duration-300 hover:shadow-[0_0_30px_-4px_rgba(249,85,61,0.6)] lowercase"
                >
                  {active.cta}
                  <span>→</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — photo */}
          <div className="relative hidden overflow-hidden lg:block border-l border-edge">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeIndex}`}
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.04 }}
                animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-panel"
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <a
                  href={active.photoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-2 right-3 text-[10px] text-cream/40 hover:text-cream/70 transition lowercase"
                >
                  photo: {active.photographer} / unsplash
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
