"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hero } from "@/config/content";

function parseMetric(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return match
    ? { num: parseInt(match[1]), suffix: match[2] }
    : { num: null, suffix: value };
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
  const [display, setDisplay] = useState(num === null ? value : "0");

  useEffect(() => {
    if (num === null) {
      // Non-numeric value — fade in as-is
      const timeout = setTimeout(() => setDisplay(value), delay);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const duration = 800;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        setDisplay(Math.round(eased * num) + suffix);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [num, suffix, value, delay]);

  return (
    <div className="flex flex-col">
      <span className="text-3xl sm:text-4xl font-light text-accent-active font-mono tabular-nums">
        {display}
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

  useEffect(() => {
    const hour = new Date().getHours();
    const root = document.documentElement;

    if (hour >= 6 && hour < 12) {
      root.style.setProperty("--base", "#181a1f");
      root.style.setProperty("--layer-2", "#14161a");
      root.style.setProperty("--layer-3", "#101215");
    } else if (hour >= 18 || hour < 6) {
      root.style.setProperty("--base", "#151719");
      root.style.setProperty("--layer-2", "#111316");
      root.style.setProperty("--layer-3", "#0e1013");
    }
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("bourlier-visited");
    if (hasVisited) {
      setIsReturning(true);
    }
    localStorage.setItem("bourlier-visited", new Date().toISOString());
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[85vh] flex flex-col justify-center px-6 sm:px-8"
    >
      {/* Ambient background */}
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

        {/* Name */}
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

        {/* Identity */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-mono text-sm tracking-[0.2em] uppercase text-accent-active mb-4"
        >
          {hero.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl sm:text-2xl font-light text-text-secondary max-w-2xl mb-6 leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-sm sm:text-base font-light text-text-secondary/80 max-w-2xl mb-16 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 mb-24"
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

        {/* Scroll invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#systems"
            className="group inline-flex flex-col items-start gap-4 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <span className="tracking-wide">{hero.scrollCta}</span>
            <span className="block w-px h-[60px] origin-top bg-accent-active/40 animate-[scroll-line_3s_ease-in-out_infinite]" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-accent-active/10 to-transparent" />
    </section>
  );
}
