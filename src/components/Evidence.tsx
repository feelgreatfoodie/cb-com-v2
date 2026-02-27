"use client";

import { motion } from "framer-motion";
import {
  signal,
  openSourcePackages,
  skillCategories,
  certifications,
  timeline,
  articles,
  contact,
  siteConfig,
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

export function SignalSection() {
  return (
    <section className="px-6 sm:px-8 py-16 sm:py-20 bg-surface/20">
      <div className="mx-auto max-w-4xl">
        <FadeInOnScroll>
          <div className="border-l-2 border-accent-active/30 pl-8 py-2">
            <p className="text-lg sm:text-xl font-light leading-relaxed text-text-primary mb-6 italic">
              &ldquo;{signal.quote}&rdquo;
            </p>
            <footer className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-sm text-accent-active font-normal">
                {signal.author}
              </span>
              <span className="hidden sm:inline text-text-secondary/40">&mdash;</span>
              <span className="text-text-secondary text-sm font-light">
                {signal.title}
              </span>
              <span className="text-text-secondary/40 text-xs font-mono">
                ({signal.relationship})
              </span>
            </footer>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {openSourcePackages.map((pkg, i) => (
        <FadeInOnScroll key={pkg.name} delay={i * 0.03}>
          <a
            href={`https://www.npmjs.com/package/@rezzed.ai/${pkg.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full p-3 rounded-lg border border-border/60 bg-surface/30 hover:border-accent-active/40 transition-all duration-300"
          >
            <span className="block font-mono text-xs text-accent-active/70 group-hover:text-accent-active transition-colors mb-1">
              @rezzed.ai/{pkg.name}
            </span>
            <span className="block text-xs text-text-secondary font-light">
              {pkg.description}
            </span>
          </a>
        </FadeInOnScroll>
      ))}
    </div>
  );
}

function Skills() {
  let globalIndex = 0;

  return (
    <div>
      <div className="space-y-8 mb-10">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <FadeInOnScroll>
              <h3 className="text-sm font-mono text-accent-active/80 tracking-wide mb-3">
                {category.label}
              </h3>
            </FadeInOnScroll>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const delay = globalIndex * 0.03;
                globalIndex++;
                return (
                  <FadeInOnScroll key={skill} delay={delay}>
                    <span className="px-3 py-1.5 rounded border border-border/50 bg-surface/30 font-mono text-xs text-text-secondary hover:text-accent-active hover:border-accent-active/30 transition-all duration-300">
                      {skill}
                    </span>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <FadeInOnScroll delay={0.2}>
        <div className="flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="w-4 h-4 text-accent-active" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span className="font-light">{cert}</span>
            </div>
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}

function Timeline() {
  return (
    <div className="relative mt-12">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border">
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden">
          <div className="absolute left-0 w-full animate-[timeline-light_8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-accent-active/40 to-transparent h-[30%]" />
        </div>
      </div>
      <div className="space-y-8">
        {timeline.map((item, i) => (
          <FadeInOnScroll key={`${item.year}-${item.title}`} delay={i * 0.05}>
            <div className="relative pl-10">
              <div className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border border-border bg-base flex items-center justify-center">
                <div className="w-[5px] h-[5px] rounded-full bg-accent-active/60" />
              </div>
              <span className="font-mono text-xs text-accent-active/80 tracking-widest">
                {item.year} &mdash; {item.endYear === "present" ? "Present" : item.endYear}
              </span>
              <h3 className="text-base font-light mt-1 mb-1 text-text-secondary">{item.title}</h3>
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

function Writing() {
  return (
    <div className="space-y-4">
      {articles.map((article, i) => (
        <FadeInOnScroll key={article.title} delay={i * 0.1}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start sm:items-center justify-between p-5 rounded-lg border border-border/30 hover:border-accent-active/30 bg-surface/20 transition-all duration-300 gap-4"
          >
            <div className="flex-1">
              <span className="block text-sm font-light text-text-primary group-hover:text-accent-active transition-colors mb-2">
                {article.title}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-text-secondary/50">{article.date}</span>
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-text-secondary/40 tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <svg className="w-4 h-4 text-text-secondary group-hover:text-accent-active group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </FadeInOnScroll>
      ))}
      <FadeInOnScroll delay={0.3}>
        <a href={siteConfig.medium} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-text-secondary hover:text-accent-active transition-colors duration-300">
          <span>Read more on Medium</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </FadeInOnScroll>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <FadeInOnScroll>
        <p className="text-text-secondary font-light text-lg mb-8 max-w-xl">{contact.description}</p>
      </FadeInOnScroll>
      <div className="flex flex-wrap gap-6">
        {contact.links.map((link, i) => (
          <FadeInOnScroll key={link.label} delay={i * 0.1}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-border/40 bg-surface/20 hover:border-accent-active/30 transition-all duration-300"
            >
              {link.label === "GitHub" && (
                <svg className="w-4 h-4 text-text-secondary group-hover:text-accent-active transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              )}
              {link.label === "LinkedIn" && (
                <svg className="w-4 h-4 text-text-secondary group-hover:text-accent-active transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              )}
              {link.label === "Email" && (
                <svg className="w-4 h-4 text-text-secondary group-hover:text-accent-active transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              )}
              {link.label === "Medium" && (
                <svg className="w-4 h-4 text-text-secondary group-hover:text-accent-active transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
              )}
              <span className="text-sm font-light text-text-secondary group-hover:text-accent-active transition-colors">{link.label}</span>
            </a>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}

export default function Evidence() {
  return (
    <div>
      <section id="evidence" className="px-6 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Verifiable proof">Evidence</SectionHeading>
          <FadeInOnScroll>
            <h3 className="text-lg font-light mb-6">
              Open Source
              <span className="text-text-secondary/60 font-mono text-sm ml-2">10 packages on npm</span>
            </h3>
          </FadeInOnScroll>
          <Packages />
          <div className="mt-16"><Skills /></div>
          <Timeline />
        </div>
      </section>

      <section id="writing" className="px-6 sm:px-8 py-20 sm:py-24 bg-surface/10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Technical writing">Writing</SectionHeading>
          <Writing />
        </div>
      </section>

      <section id="contact" className="px-6 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>{contact.heading}</SectionHeading>
          <Contact />
        </div>
      </section>
    </div>
  );
}
