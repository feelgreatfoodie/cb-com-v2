"use client";

import { motion } from "framer-motion";
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
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

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

function CurrentlyBuilding() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {currentlyBuilding.map((project, i) => (
        <FadeInOnScroll key={project.name} delay={i * 0.1}>
          <div className="group p-6 rounded-lg border border-border/50 bg-surface/30 hover:border-accent-active/30 transition-all duration-500">
            <h3 className="text-lg font-light mb-3 group-hover:text-accent-active transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  );
}

function Competencies() {
  return (
    <div className="flex flex-wrap gap-3">
      {competencies.map((comp, i) => (
        <FadeInOnScroll key={comp} delay={i * 0.05}>
          <span className="px-4 py-2 rounded-full border border-border/60 text-sm font-light text-text-secondary hover:border-accent-warm/40 hover:text-accent-warm transition-all duration-300">
            {comp}
          </span>
        </FadeInOnScroll>
      ))}
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
          <div className="p-6 rounded-lg border border-border/50 bg-surface/20 hover:border-accent-warm/30 transition-all duration-500">
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
    <div className="bg-base">
      {/* Journey / Timeline */}
      <section id="journey" className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="From poker tables to data pipelines">
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

      {/* Currently Building */}
      <section id="projects" className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Active projects">
            Currently Building
          </SectionHeading>
          <CurrentlyBuilding />
        </div>
      </section>

      {/* Core Competencies */}
      <section className="px-6 sm:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Core Competencies</SectionHeading>
          <Competencies />
        </div>
      </section>

      {/* Open To */}
      <section className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Roles I'm exploring">
            Open To
          </SectionHeading>
          <OpenTo />
        </div>
      </section>
    </div>
  );
}
