"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hero } from "@/config/content";

function parseMetric(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return match
    ? { num: parseInt(match[1]), suffix: match[2] }
    : { num: 0, suffix: value };
}

function CountUpMetric({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  const { num, suffix } = parseMetric(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 800;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        setDisplay(Math.round(eased * num));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [num, delay]);

  return (
    <div className="flex flex-col">
      <span className="text-3xl sm:text-4xl font-light text-accent-active font-mono tabular-nums">
        {display}
        {suffix}
      </span>
      <span className="text-sm text-text-secondary mt-1 tracking-wide">
        {label}
      </span>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function Surface() {
  const [isReturning, setIsReturning] = useState(false);

  // B1: Time-of-day palette shift
  useEffect(() => {
    const hour = new Date().getHours();
    const root = document.documentElement;

    if (hour >= 6 && hour < 12) {
      root.style.setProperty("--base", "#1b1815");
      root.style.setProperty("--layer-2", "#171410");
      root.style.setProperty("--layer-3", "#141210");
    } else if (hour >= 18 || hour < 6) {
      root.style.setProperty("--base", "#181719");
      root.style.setProperty("--layer-2", "#141316");
      root.style.setProperty("--layer-3", "#111015");
    }
  }, []);

  // B2: Return visitor memory
  useEffect(() => {
    const hasVisited = localStorage.getItem("cb-visited");
    if (hasVisited) {
      setIsReturning(true);
    }
    localStorage.setItem("cb-visited", new Date().toISOString());
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8"
    >
      {/* Ambient background — slow-drifting gradient layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 ambient-layer-1" />
        <div className="absolute inset-0 ambient-layer-2" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full py-32">
        {/* Return visitor greeting */}
        {isReturning && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block text-xs font-mono text-text-secondary/50 tracking-widest mb-6"
          >
            Welcome back.
          </motion.span>
        )}

        {/* Availability badge with radar ping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-text-secondary">
            <span className="relative flex items-center justify-center w-4 h-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-active" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-accent-active animate-[radar-ping_4s_ease-out_infinite]" />
            </span>
            {hero.availability}
          </span>
        </motion.div>

        {/* Name — letter stagger entrance */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {hero.name.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
              style={char === " " ? { width: "0.25em" } : undefined}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Three identities */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-mono text-sm tracking-[0.2em] uppercase text-accent-active mb-6"
        >
          {hero.subtitle}
        </motion.p>

        {/* Tagline — premise */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl sm:text-2xl font-light text-text-secondary max-w-2xl mb-16 leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* Metrics — count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-12 sm:gap-16 mb-24"
        >
          {hero.metrics.map((metric, i) => (
            <CountUpMetric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              delay={700 + i * 100}
            />
          ))}
        </motion.div>

        {/* Scroll invitation — extending vertical line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#journey"
            className="group inline-flex flex-col items-start gap-4 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <span className="tracking-wide">{hero.scrollCta}</span>
            <span className="block w-px h-[60px] origin-top bg-accent-active/40 animate-[scroll-line_3s_ease-in-out_infinite]" />
          </a>
        </motion.div>
      </div>

      {/* Depth cue — threshold line at bottom of viewport */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-accent-active/10 to-transparent" />
    </section>
  );
}
