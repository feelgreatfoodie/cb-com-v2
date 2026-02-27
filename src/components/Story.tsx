"use client";

import { motion } from "framer-motion";
import { systems, portfolioSystem, instrumentation, approach } from "@/config/content";

function FadeInOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <FadeInOnScroll className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-text-secondary font-light text-lg">{subtitle}</p>
      )}
      <div className="mt-6 w-12 h-px bg-accent-active/40" />
    </FadeInOnScroll>
  );
}

function SystemCard({
  system,
  delay,
}: {
  system: (typeof systems)[number];
  delay: number;
}) {
  return (
    <FadeInOnScroll delay={delay}>
      <div className="group rounded-lg border border-border/50 bg-surface/30 hover:border-accent-active/30 transition-all duration-500">
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-light group-hover:text-accent-active transition-colors duration-300">
              {system.name}
            </h3>
            <span className="flex items-center gap-1.5 text-xs font-mono text-accent-active/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-active/60 animate-pulse" />
              {system.status}
            </span>
          </div>

          <p className="font-mono text-xs text-text-secondary/60 tracking-wide mb-4">
            {system.slug}
          </p>

          <p className="text-text-secondary text-sm font-light leading-relaxed mb-4">
            {system.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {system.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded border border-border/40 bg-surface/50 font-mono text-[11px] text-text-secondary/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-1.5 mb-4">
            {system.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-sm text-text-secondary/80 font-light"
              >
                <span className="text-accent-active/40 mt-1 text-xs">&#9656;</span>
                {detail}
              </li>
            ))}
          </ul>

          {system.url && (
            <a
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-accent-active/50 hover:text-accent-active transition-colors duration-300"
            >
              <span>{system.url.replace("https://", "").replace("www.", "")}</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </FadeInOnScroll>
  );
}

function Instrumentation() {
  return (
    <FadeInOnScroll delay={0.2}>
      <div className="mt-12 p-6 rounded-lg border border-border/30 bg-layer-3/50">
        <h4 className="font-mono text-sm text-accent-active/70 tracking-wide mb-4">
          {instrumentation.title}
        </h4>
        <ul className="space-y-2">
          {instrumentation.items.map((item) => (
            <li key={item} className="font-mono text-xs text-text-secondary/70 leading-relaxed">
              <span className="text-text-secondary/40 mr-2">//</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeInOnScroll>
  );
}

function Methodology() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {approach.methodology.map((item, i) => (
          <FadeInOnScroll key={item.step} delay={i * 0.05}>
            <div className="text-center p-4 rounded-lg border border-border/30 bg-surface/20">
              <span className="block font-mono text-xs text-accent-active/50 mb-2">
                {item.step}
              </span>
              <span className="block text-sm font-mono tracking-wider text-text-primary mb-1">
                {item.label}
              </span>
              <span className="block text-xs text-text-secondary/60 font-light">
                {item.description}
              </span>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      <FadeInOnScroll delay={0.3}>
        <div className="p-6 rounded-lg border-2 border-accent-active/20 bg-surface/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-active/60 tracking-wider">
              {approach.governance.tag}
            </span>
            <h4 className="text-base font-light text-text-primary">
              {approach.governance.title}
            </h4>
          </div>
          <p className="text-sm text-text-secondary font-light leading-relaxed">
            {approach.governance.description}
          </p>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default function Story() {
  return (
    <div>
      <section id="systems" className="px-6 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="What's running in production">
            Systems
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((system, i) => (
              <SystemCard key={system.name} system={system} delay={i * 0.1} />
            ))}
          </div>

          <FadeInOnScroll delay={0.3}>
            <div className="mt-6 rounded-lg border border-border/40 bg-surface/20 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-light group-hover:text-accent-active transition-colors duration-300">{portfolioSystem.name}</h3>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-accent-active/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-active/60 animate-pulse" />
                    {portfolioSystem.status}
                  </span>
                </div>
                <p className="font-mono text-xs text-text-secondary/60 tracking-wide mb-2">{portfolioSystem.slug}</p>
                <p className="text-text-secondary text-sm font-light leading-relaxed">{portfolioSystem.description}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {portfolioSystem.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded border border-border/40 bg-surface/50 font-mono text-[11px] text-text-secondary/70">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={portfolioSystem.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-mono text-accent-active/50 hover:text-accent-active transition-colors duration-300">
                  <span>bourlier.ai</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeInOnScroll>

          <Instrumentation />
        </div>
      </section>

      <section id="approach" className="px-6 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>{approach.title}</SectionHeading>
          <Methodology />
        </div>
      </section>
    </div>
  );
}
