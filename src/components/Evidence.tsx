"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  skills,
  certifications,
  testimonials,
  articles,
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

function Skills() {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {skills.map((skill, i) => (
          <FadeInOnScroll key={skill} delay={i * 0.03}>
            <span className="px-3 py-1.5 rounded border border-border/50 bg-surface/30 font-mono text-xs text-text-secondary hover:text-accent-active hover:border-accent-active/30 transition-all duration-300">
              {skill}
            </span>
          </FadeInOnScroll>
        ))}
      </div>

      <FadeInOnScroll delay={0.2}>
        <div className="flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <svg
                className="w-4 h-4 text-accent-warm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <span className="font-light">{cert}</span>
            </div>
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, activeIndex]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <div className="border-l-2 border-accent-active/30 pl-6 py-2 relative overflow-hidden">
              {!paused && (
                <motion.div
                  key={`progress-${activeIndex}`}
                  className="absolute left-0 top-0 w-0.5 bg-accent-active"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
              <p className="text-lg font-light leading-relaxed text-text-primary mb-6 italic">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>
              <footer>
                <span className="text-sm text-accent-warm font-normal">
                  {testimonials[activeIndex].author}
                </span>
                <span className="text-text-secondary text-sm font-light">
                  {" "}
                  &mdash; {testimonials[activeIndex].title}
                </span>
              </footer>
            </div>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-accent-active w-6"
                : "bg-border hover:bg-text-secondary w-2"
            }`}
            aria-label={`View testimonial ${i + 1}`}
          />
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
            className="group flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-accent-active/30 bg-surface/20 transition-all duration-300"
          >
            <span className="text-sm font-light text-text-primary group-hover:text-accent-active transition-colors">
              {article.title}
            </span>
            <svg
              className="w-4 h-4 text-text-secondary group-hover:text-accent-active group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </FadeInOnScroll>
      ))}

      <FadeInOnScroll delay={0.3}>
        <a
          href={siteConfig.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-text-secondary hover:text-accent-active transition-colors duration-300"
        >
          <span>Read more on Medium</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </FadeInOnScroll>
    </div>
  );
}

function Contact() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <FadeInOnScroll>
        <div>
          <h3 className="text-xl font-light mb-6">Get in touch</h3>
          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-text-secondary hover:text-accent-active transition-colors duration-300 group"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="text-sm font-light">{siteConfig.email}</span>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-active transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-light">LinkedIn</span>
            </a>

            <a
              href={siteConfig.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-active transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              <span className="text-sm font-light">Medium</span>
            </a>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <form
          action={`https://formspree.io/f/placeholder`}
          method="POST"
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${siteConfig.email}?subject=Portfolio%20Contact&body=${encodeURIComponent(
              `From: ${(e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.value}\nEmail: ${(e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value}\n\n${(e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement)?.value}`
            )}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-border/50 text-text-primary text-sm font-light placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-active/50 transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-border/50 text-text-primary text-sm font-light placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-active/50 transition-colors duration-300"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-border/50 text-text-primary text-sm font-light placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-active/50 transition-colors duration-300 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-accent-active text-base text-sm font-light hover:shadow-[0_0_20px_rgba(111,195,223,0.2)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </FadeInOnScroll>
    </div>
  );
}

export default function Evidence() {
  return (
    <div>
      {/* Skills & Certifications */}
      <section id="skills" className="px-6 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="The toolkit">
            Skills
          </SectionHeading>
          <Skills />
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 sm:px-8 py-24 sm:py-32 bg-surface/20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="What they say">
            Signal
          </SectionHeading>
          <Testimonials />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 sm:px-8 py-24 sm:py-32 bg-surface/20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading subtitle="Let's build">
            Deploy Leverage
          </SectionHeading>
          <Contact />
        </div>
      </section>
    </div>
  );
}
