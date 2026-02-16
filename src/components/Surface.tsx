"use client";

import { motion } from "framer-motion";
import { hero } from "@/config/content";

export default function Surface() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base to-surface/30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability badge */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-active animate-pulse" />
              {hero.availability}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight mb-6">
            {hero.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-light text-text-secondary max-w-2xl mb-16 leading-relaxed">
            {hero.tagline}
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-12 sm:gap-16 mb-24"
        >
          {hero.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light text-accent-active font-mono">
                {metric.value}
              </span>
              <span className="text-sm text-text-secondary mt-1 tracking-wide">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#journey"
            className="group inline-flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <span className="tracking-wide">{hero.scrollCta}</span>
            <svg
              className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
