"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  timeline,
  currentlyBuilding,
  competencies,
  approach,
  openTo,
} from "@/config/content";

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

function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border">
        {/* Traveling light */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden">
          <div className="absolute left-0 w-full animate-[timeline-light_8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-accent-active/40 to-transparent h-[30%]" />
        </div>
      </div>

      <div className="space-y-12">
        {timeline.map((item, i) => (
          <FadeInOnScroll key={item.year} delay={i * 0.05}>
            <div className="relative pl-10">
              {/* Dot */}
              <div className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border border-border bg-base flex items-center justify-center">
                <div className="w-[5px] h-[5px] rounded-full bg-accent-active/60" />
              </div>

              <span className="font-mono text-xs text-accent-active tracking-widest">
                {item.year}
              </span>
              <h3 className="text-lg font-light mt-1 mb-2">{item.title}</h3>
              <p className="text-text-secondary font-light leading-relaxed text-sm max-w-xl">
                {item.description}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }: { project: typeof currentlyBuilding[number]; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeInOnScroll delay={delay}>
      <div
        className="group rounded-lg border border-border/50 bg-surface/30 hover:border-accent-active/30 transition-all duration-500 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-light group-hover:text-accent-active transition-colors duration-300">
              {project.name}
            </h3>
            <span className="flex items-center gap-1.5 text-xs font-mono text-accent-active/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-active/60 animate-pulse" />
              {project.status}
            </span>
          </div>
          <p className="text-text-secondary text-sm font-light leading-relaxed">
            {project.description}
          </p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-accent-active/50 hover:text-accent-active transition-colors duration-300"
            >
              <span>{project.url.replace('https://', '')}</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          )}
        </div>

        <AnimatePresence>
          {expanded && project.previewImage && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="rounded-md overflow-hidden border border-border/30 bg-base/50">
                  <Image
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeInOnScroll>
  );
}

function CurrentlyBuilding() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {currentlyBuilding.map((project, i) => (
        <ProjectCard key={project.name} project={project} delay={i * 0.1} />
      ))}
    </div>
  );
}

function Competencies() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (prefersReduced) {
    return (
      <div className="flex flex-wrap gap-3">
        {competencies.map((comp) => (
          <span
            key={comp}
            className="px-4 py-2 rounded-full border border-border/60 text-sm font-light text-text-secondary"
          >
            {comp}
          </span>
        ))}
      </div>
    );
  }

  const cx = 200;
  const cy = 200;
  const radius = 130;
  const satRadius = 40;
  const centerRadius = 44;

  const positions = competencies.map((_, i) => {
    const angle = (Math.PI * 2 * i) / competencies.length - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  const nodeColors = [
    "#6FC3DF",
    "#D4A050",
    "#6FC3DF",
    "#D4A050",
    "#6FC3DF",
    "#D4A050",
  ];

  return (
    <div ref={wrapperRef}>
      <svg
        viewBox="0 0 400 400"
        className="mx-auto w-full max-w-md sm:max-w-lg"
        role="img"
        aria-label="Core competencies radial diagram"
      >
        {/* Connecting lines */}
        {positions.map((pos, i) => (
          <motion.line
            key={`line-${i}`}
            x1={cx}
            y1={cy}
            x2={pos.x}
            y2={pos.y}
            stroke="#6FC3DF"
            strokeOpacity={0.25}
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Center node */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={centerRadius}
          fill="#1a1714"
          stroke="#6FC3DF"
          strokeWidth={1.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <motion.text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          fill="#e8dcc8"
          fontSize={9}
          fontFamily="var(--font-jetbrains-mono), monospace"
          letterSpacing="0.12em"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          CORE
        </motion.text>

        {/* Satellite nodes */}
        {positions.map((pos, i) => (
          <motion.g
            key={`sat-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: "backOut" }}
            style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
          >
            <circle
              cx={pos.x}
              cy={pos.y}
              r={satRadius}
              fill="#1a1714"
              stroke={nodeColors[i]}
              strokeWidth={1.5}
            />
            <text
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              fill="#e8dcc8"
              fontSize={7}
              fontFamily="var(--font-jetbrains-mono), monospace"
            >
              {competencies[i].split(" ").length > 1 ? (
                competencies[i].split(" ").map((word, wi, arr) => (
                  <tspan
                    key={wi}
                    x={pos.x}
                    dy={wi === 0 ? -(((arr.length - 1) * 11) / 2) + 4 : 11}
                  >
                    {word}
                  </tspan>
                ))
              ) : (
                <tspan x={pos.x} dy={4}>{competencies[i]}</tspan>
              )}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function Approach() {
  return (
    <FadeInOnScroll>
      <div className="p-8 rounded-lg border border-border/50 bg-surface/20">
        <h3 className="text-lg font-light mb-4">{approach.title}</h3>
        <p className="font-mono text-accent-active text-sm tracking-wide mb-4">
          {approach.philosophy}
        </p>
        <p className="text-text-secondary font-light leading-relaxed text-sm">
          {approach.description}
        </p>
      </div>
    </FadeInOnScroll>
  );
}

function OpenTo() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {openTo.map((item, i) => (
        <FadeInOnScroll key={item.role} delay={i * 0.1}>
          <div className="p-6 rounded-lg border-l-2 border-l-accent-warm/60 border-y border-r border-y-border/30 border-r-border/30 bg-surface/20 hover:border-l-accent-warm transition-all duration-500">
            <h3 className="text-base font-normal text-accent-warm mb-2">
              {item.role}
            </h3>
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  );
}

export default function Story() {
  return (
    <div>
      {/* Journey / Timeline */}
      <section id="journey" className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Risk. Revenue. Reality.">
            Journey
          </SectionHeading>
          <Timeline />
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 sm:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <Approach />
        </div>
      </section>

      {/* The Lab */}
      <section id="lab" className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Active R&D">
            The Lab
          </SectionHeading>
          <CurrentlyBuilding />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 sm:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Capabilities</SectionHeading>
          <Competencies />
        </div>
      </section>

      {/* Open To */}
      <section className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="How I deploy leverage">
            Open To
          </SectionHeading>
          <OpenTo />
        </div>
      </section>
    </div>
  );
}
