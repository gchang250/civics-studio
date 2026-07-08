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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Minimalist modern concrete architecture facade",
    photographer: "Jean-Philippe Delberghe",
    photoHref:
      "https://unsplash.com/photos/minimalist-architecture-with-clean-lines-and-concrete-wall-793K7V0Z8v8",
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
      "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Minimalist black and white newspaper page with fine typography",
    photographer: "Christin Hume",
    photoHref:
      "https://unsplash.com/photos/a-stack-of-newspaper-pages-laying-flat-H9ZhJTDNyKE",
  },
  {
    number: "03",
    type: "Print-and-play game",
    title: "Detente",
    description:
      "A political negotiation game about resources, hidden goals, and the signals every deal sends. Players compete to achieve secret goals while reading each other's motives in real time.",
    cta: "Download free",
    href: "/projects/detente",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Abstract rendering of soft minimalist architectural waves in cream and terracotta",
    photographer: "Google DeepMind",
    photoHref: "https://unsplash.com/photos/abstract-soft-3d-render-curves-nAjil1z3eLk",
  },
  {
    number: "04",
    type: "Data project",
    title: "The Fried Rice Index",
    description:
      "A global affordability index using the price of a bowl of egg fried rice. Everyday prices, compared across cities worldwide, to make cost of living tangible and easy to discuss.",
    cta: "Visit the index",
    href: "/projects/fried-rice-index",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Minimalist ceramic plate and linen fabric napkin on a concrete surface",
    photographer: "Evgeni Tcherkasski",
    photoHref:
      "https://unsplash.com/photos/minimal-white-ceramic-plate-on-beige-linen-cloth-H9ZhJTDNyKE",
  },
  {
    number: "05",
    type: "French literacy program",
    title: "CYFFL",
    description:
      "Free online French learning resources and local academic support for students. Youth-led, accessible, and built to make French less intimidating and more approachable.",
    cta: "Learn more",
    href: "/projects/cyffl",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sleek minimalist white book with blank cover resting in soft sunlight",
    photographer: "Hope House Press",
    photoHref: "https://unsplash.com/photos/white-hardbound-book-on-beige-surface-bxiOjnbjRM0",
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
      <div className="sticky top-0 h-screen overflow-hidden bg-[#faf8f5]">
        <div className="grid h-full lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 relative">
            {/* Fine architectural line dividers */}
            <div className="absolute inset-y-0 right-0 w-px bg-[#e5e0d4]/60 pointer-events-none hidden lg:block" />

            {/* Progress indicators */}
            <div className="mb-14 flex items-center gap-3">
              {projects.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === activeIndex ? 48 : 16,
                    backgroundColor: i === activeIndex ? "#8b1e1e" : "#e5e0d4",
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
                <p className="text-[11px] font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
                  {active.number} · {active.type}
                </p>

                <h2 className="serif mt-5 text-[clamp(2.4rem,4.8vw,3.6rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-[#111f36]">
                  {active.title}
                </h2>

                <p className="mt-6 max-w-md text-base leading-8 text-[#5f697a]">
                  {active.description}
                </p>

                <Link
                  href={active.href}
                  className="mt-10 inline-flex items-center gap-2 border border-[#111f36] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#111f36] transition duration-300 hover:bg-[#8b1e1e] hover:border-[#8b1e1e] hover:text-white bg-transparent lowercase"
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
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.04 }}
                animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#f3efe6]"
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[#8b1e1e]/5" />
                <a
                  href={active.photoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition lowercase"
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
