"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" },
};

const howItWorksSteps = [
  {
    number: "01",
    title: "Store",
    description:
      "Your agents learn patterns during execution. Store them with domain, confidence, and evidence.",
    icon: "💾",
  },
  {
    number: "02",
    title: "Recall",
    description:
      "Query memories by domain or full-text search. Your agent gets smarter every session.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Evolve",
    description:
      "Patterns auto-decay if not reinforced. Knowledge that matters rises. Noise fades.",
    icon: "📈",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "mo",
    features: [
      { label: "Patterns", value: "50" },
      { label: "Domains", value: "5" },
      { label: "Decay Config", value: "Default" },
      { label: "API Rate Limit", value: "100/day" },
      { label: "Support", value: "Community" },
    ],
    cta: "Start Free",
    href: "https://api.cachebash.dev/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "mo",
    badge: "Most Popular",
    features: [
      { label: "Patterns", value: "5,000" },
      { label: "Domains", value: "Unlimited" },
      { label: "Decay Config", value: "Custom" },
      { label: "API Rate Limit", value: "10,000/day" },
      { label: "Support", value: "Priority" },
    ],
    cta: "Upgrade to Pro",
    href: "https://api.cachebash.dev/signup?tier=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      { label: "Patterns", value: "Unlimited" },
      { label: "Domains", value: "Unlimited" },
      { label: "Decay Config", value: "Custom" },
      { label: "API Rate Limit", value: "Custom" },
      { label: "Support", value: "Dedicated" },
    ],
    cta: "Contact Us",
    href: "mailto:christian@rezzed.ai",
    highlighted: false,
  },
];

const codeExample = `import { CacheBashMemory } from '@rezzed.ai/memory';

const memory = new CacheBashMemory({
  apiKey: process.env.CACHEBASH_API_KEY,
  programId: 'my-agent',
});

// Store a learned pattern
await memory.store({
  id: 'pat-001',
  domain: 'customer-support',
  pattern: 'Users asking about billing prefer step-by-step guides over FAQ links',
  confidence: 0.85,
  evidence: 'Observed in 23/30 support interactions this week',
});

// Recall relevant memories
const patterns = await memory.recall({ domain: 'customer-support' });`;

export default function MemoryPage() {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-base">
      {/* Navigation Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-8 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 ambient-layer-1" />
          <div className="absolute inset-0 ambient-layer-2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-6">
            Memory for AI Agents
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Persistent, structured memory that makes your AI agents smarter over
            time. Store patterns, recall context, and build institutional
            knowledge.
          </p>
          <motion.a
            href="https://api.cachebash.dev/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-active text-base font-medium rounded-lg hover:bg-accent-warm transition-colors duration-300"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            Get Started Free
          </motion.a>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 sm:px-8 py-20 border-t border-border">
        <motion.div
          {...staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <motion.h2
            {...fadeInUp}
            className="text-3xl sm:text-4xl font-light text-text-primary text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {howItWorksSteps.map((step) => (
              <motion.div
                key={step.number}
                {...fadeInUp}
                className="relative flex flex-col items-start text-left"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="font-mono text-sm text-text-secondary mb-2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Code Example Section */}
      <section className="relative px-6 sm:px-8 py-20 border-t border-border">
        <motion.div
          {...fadeInUp}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-text-primary text-center mb-12">
            Quick Start
          </h2>
          <div className="relative bg-surface border border-border rounded-xl p-6 overflow-hidden">
            <button
              onClick={handleCopyCode}
              className="absolute top-4 right-4 px-4 py-2 bg-layer-2 hover:bg-layer-3 border border-border text-text-secondary text-sm rounded-md transition-colors duration-200"
              style={{ minHeight: "44px", minWidth: "44px" }}
            >
              {copiedCode ? "Copied!" : "Copy"}
            </button>
            <pre className="text-sm sm:text-base text-text-primary font-mono overflow-x-auto">
              <code className="language-typescript">{codeExample}</code>
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="relative px-6 sm:px-8 py-20 border-t border-border">
        <motion.div
          {...staggerContainer}
          className="mx-auto max-w-7xl"
        >
          <motion.h2
            {...fadeInUp}
            className="text-3xl sm:text-4xl font-light text-text-primary text-center mb-16"
          >
            Pricing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                {...fadeInUp}
                className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-surface border-accent-active shadow-lg shadow-accent-active/10 scale-105"
                    : "bg-layer-2 border-border hover:border-border/70"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-active text-base text-sm font-medium rounded-full">
                    {tier.badge}
                  </div>
                )}
                <h3 className="text-2xl font-light text-text-primary mb-4">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-light text-text-primary">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-text-secondary">/{tier.period}</span>
                  )}
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-text-secondary">
                        {feature.label}
                      </span>
                      <span className="text-text-primary font-medium">
                        {feature.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={tier.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block text-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    tier.highlighted
                      ? "bg-accent-active text-base hover:bg-accent-warm"
                      : "bg-layer-3 text-text-primary hover:bg-surface border border-border"
                  }`}
                  style={{ minHeight: "44px" }}
                >
                  {tier.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-6 sm:px-8 py-20 border-t border-border">
        <motion.div
          {...fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-text-primary mb-8">
            Ready to give your agents memory?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://api.cachebash.dev/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-active text-base font-medium rounded-lg hover:bg-accent-warm transition-colors duration-300"
              style={{ minHeight: "44px", minWidth: "44px" }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="https://docs.cachebash.dev/memory"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-text-primary border border-border font-medium rounded-lg hover:bg-layer-2 transition-colors duration-300"
              style={{ minHeight: "44px", minWidth: "44px" }}
            >
              Read the Docs
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
