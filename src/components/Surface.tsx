"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { hero } from "@/config/content";

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-accent-active font-mono tabular-nums">
        {value}
      </span>
      <span className="text-sm text-text-secondary mt-1 tracking-wide">
        {label}
      </span>
    </div>
  );
}

export default function Surface() {
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
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight mb-6">
          {hero.name}
        </h1>

        {/* Identity */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0 }}
          className="font-mono text-sm tracking-[0.2em] uppercase text-accent-active mb-4"
        >
          {hero.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-xl sm:text-2xl font-light text-text-primary max-w-2xl mb-6 leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-base sm:text-lg max-w-2xl mb-6 leading-relaxed"
          style={{ color: "rgba(200, 210, 220, 0.9)" }}
        >
          {hero.description}
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="flex gap-6 mb-16"
        >
          <a
            href="mailto:christian@bourlier.ai"
            className="text-sm text-text-secondary hover:text-accent-active transition-colors duration-200"
          >
            christian@bourlier.ai
          </a>
          <a
            href="https://linkedin.com/in/christianbourlier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-accent-active transition-colors duration-200"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-12 lg:gap-16 mb-24"
        >
          {hero.metrics.map((metric) => (
            <Metric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </motion.div>

        {/* Scroll invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
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
