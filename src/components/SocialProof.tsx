"use client";

import { motion } from "framer-motion";
import { testimonials_tier1, companyLogos } from "@/config/content";
import Image from "next/image";

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

export default function SocialProof() {
  return (
    <section className="px-6 sm:px-8 py-16 sm:py-20 bg-surface/20">
      <div className="mx-auto max-w-6xl">
        {/* Tier 1 Testimonials — stacked cards */}
        <div className="space-y-8 mb-16">
          {testimonials_tier1.map((testimonial, i) => (
            <FadeInOnScroll key={testimonial.author} delay={i * 0.1}>
              <div className="border-l-2 border-accent-active/20 pl-8 py-4 bg-surface/10 rounded-r">
                <p className="text-base font-light leading-relaxed text-text-primary mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-sm text-accent-active font-medium">
                      {testimonial.author}
                    </span>
                    <span className="hidden sm:inline text-text-secondary/40">
                      &mdash;
                    </span>
                    <span className="text-text-secondary text-sm font-light">
                      {testimonial.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-accent-active/10 text-accent-active/80 rounded border border-accent-active/20 tracking-wide">
                      {testimonial.relationship}
                    </span>
                  </div>
                  {testimonial.detail && (
                    <p className="text-xs text-text-secondary/70 mt-3 font-light italic">
                      {testimonial.detail}
                    </p>
                  )}
                </footer>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Company Logos Strip */}
        <FadeInOnScroll delay={0.3}>
          <div className="border-t border-border/30 pt-12">
            <p className="font-mono text-xs text-secondary/60 tracking-widest uppercase mb-6 text-center">
              Worked with teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {companyLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative h-8 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                  style={{
                    filter: "grayscale(1) brightness(0.7) invert(0.9)",
                  }}
                >
                  <Image
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    height={32}
                    width={120}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
