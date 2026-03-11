// bourlier.ai V2 — content.ts
// Recruiter-first hiring surface. Career-impact proof, then depth on scroll.
// Source of truth: V2 Changeplan (bourlier-ai-v2-changeplan.md)
// Every claim defensible in technical interview.

export const siteConfig = {
  name: "Christian Bourlier",
  title: "Christian Bourlier — AI Systems Architect",
  description:
    "I build the production infrastructure where AI agents do reliable, governed work at scale. 60+ tool MCP server. Multi-agent orchestration. Building on Claude.",
  url: "https://bourlier.ai",
  email: "christian@bourlier.ai",
  linkedin: "https://linkedin.com/in/christianbourlier",
  medium: "https://medium.com/@christianbourlier",
  rezzedai: "https://rezzed.ai",
  github: "https://github.com/rezzedai",
};

export const hero = {
  name: "Christian Bourlier",
  subtitle: "AI Systems Architect",
  tagline: "Bounded AI systems that ship.",
  description:
    "I build the production infrastructure where AI agents do reliable, governed work at scale. Author of CacheBash — a 60+ tool MCP server for multi-agent orchestration.",
  metrics: [
    { value: "60M+", label: "Daily Records Processed" },
    { value: "99.9%", label: "Pipeline Uptime" },
    { value: "8", label: "Engineers Mentored → 75% Promoted" },
    { value: "10x", label: "Throughput Improvement" },
  ],
  availability: "Open to applied AI roles",
  scrollCta: "See what's running",
};

// Tier 1 testimonials — stacked cards in Social Proof section
export const testimonials_tier1 = [
  {
    quote:
      "He does not just build things — he thinks about the whole system. He went from zero familiarity to owning the implementation within weeks. He moves comfortably between the technical and business sides without losing depth in either. That combination is rare.",
    author: "Puneet Gangrade",
    title: "Data Science & Engineering Lead, Monks",
    relationship: "Direct Manager",
  },
  {
    quote:
      "He doesn't just solve the problem in front of him. He solves the one underneath it. Adding Christian to any project improves the room and the results.",
    author: "Michael Neveu",
    title: "AI & Data Transformation Executive",
    relationship: "Direct Manager",
    detail:
      "The client went on to increase their work with us... resulting in multiple six figures in continued work.",
  },
  {
    quote:
      "He isn't just a coder; he's a strategic asset who understands how technical KPIs drive revenue expansions for global companies.",
    author: "Koichi Sakamaki",
    title: "Cloud & Data Lead",
    relationship: "Peer",
    detail:
      "Calm, methodical execution. He doesn't cut corners under pressure; he leans into the documentation and automated monitoring.",
  },
];

// Company logos — credibility strip (grayscale SVGs)
export const companyLogos = [
  { name: "Hyundai", path: "/logos/hyundai.svg" },
  { name: "Mitsubishi", path: "/logos/mitsubishi.svg" },
  { name: "Hootsuite", path: "/logos/hootsuite.svg" },
  { name: "St. Jude", path: "/logos/stjude.svg" },
  { name: "Mattel", path: "/logos/mattel.svg" },
  { name: "Nationwide", path: "/logos/nationwide.svg" },
  { name: "Google", path: "/logos/google.svg" },
  { name: "Samsung", path: "/logos/samsung.svg" },
  { name: "TechSmith", path: "/logos/techsmith.svg" },
  { name: "Spotify", path: "/logos/spotify.svg" },
  { name: "Square", path: "/logos/square.svg" },
  { name: "Sprint", path: "/logos/sprint.svg" },
];

export const systems = [
  {
    name: "CacheBash",
    slug: "mcp-relay + persistent-task-state",
    description:
      "Production MCP server with 60+ tool endpoints for multi-agent coordination on Claude Code. Handles task dispatch, relay messaging, persistent state, sprint orchestration, and fleet telemetry across distributed agent sessions.",
    stack: ["Cloud Run", "Firestore", "TypeScript"],
    url: "https://www.npmjs.com/package/@rezzed.ai/cachebash",
    github: "https://github.com/rezzedai",
    status: "Production" as const,
  },
  {
    name: "Rezzed.ai",
    slug: "bounded-multi-agent-orchestration",
    description:
      "Role-specialized multi-agent system where 10+ LLM-powered agents operate within identity-scoped boundaries, static context budgets, and pre-tool-use policy gates with constitutional safety governance.",
    stack: ["Claude Code", "Vertex AI", "MCP", "Cloud Run"],
    url: "https://rezzed.ai",
    github: "https://github.com/rezzedai",
    status: "Production" as const,
  },
  {
    name: "OptiMeasure",
    slug: "privacy-first-ai-measurement",
    description:
      "Cookieless marketing attribution engine generating channel-level and tactic-level budget recommendations. Compressed modeling latency from 6 months to 6 weeks. Serving 3 enterprise clients in active contracts.",
    stack: ["Python", "Vertex AI", "BigQuery"],
    url: "https://optimeasure.io",
    status: "Production" as const,
  },
];

export const approach = {
  title: "How I Think",
  methodology: [
    { step: "01", label: "DIAGNOSE", description: "Map the system" },
    { step: "02", label: "BOUND", description: "Define constraints" },
    { step: "03", label: "ORCHESTRATE", description: "Wire the agents" },
    { step: "04", label: "INSTRUMENT", description: "Measure everything" },
    { step: "05", label: "DEPLOY", description: "Ship to production" },
    { step: "06", label: "ITERATE", description: "Eval-driven loops" },
  ],
};

export const openSourcePackages = [
  {
    name: "cachebash",
    description: "MCP agent coordination",
    featured: true,
    npmUrl: "https://www.npmjs.com/package/@rezzed.ai/cachebash",
  },
  {
    name: "guardian",
    description: "Safety rails and audit enforcement",
    featured: true,
    npmUrl: "https://www.npmjs.com/package/@rezzed.ai/guardian",
  },
  {
    name: "specfirst",
    description: "Plan-before-build with confidence scoring",
    featured: true,
    npmUrl: "https://www.npmjs.com/package/@rezzed.ai/specfirst",
  },
  { name: "dreamwatch", description: "Overnight autonomous execution with safety rails" },
  { name: "voicekeeper", description: "AI writing detection and voice matching" },
  { name: "dual-auth", description: "Firebase + API key dual authentication" },
  { name: "rate-gate", description: "Sliding window rate limiter" },
  { name: "poll-hooks", description: "Async work-polling with claim semantics" },
  { name: "dispatch", description: "Lightweight MCP task server" },
  { name: "xfetch", description: "Social media content extraction" },
];

export const skillCategories_v2 = [
  {
    label: "AI & Orchestration",
    skills: [
      "MCP Server Development",
      "Multi-Agent Orchestration",
      "System Prompt Engineering",
      "LLM-as-a-Judge Evals",
      "Vertex AI",
      "Claude Code",
      "Policy-Gated Tool Use",
      "Safety & Audit Systems",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      "GCP (Cloud Run, BQ, Firestore)",
      "Terraform",
      "Event-Driven Architecture",
      "GitHub Actions CI/CD",
    ],
  },
];

export const certifications = [
  "GCP Professional Data Engineer",
  "GCP Professional Cloud Architect",
];

export const timeline = [
  {
    year: "2025",
    endYear: "present",
    title: "Founder & Principal Architect — Rezzed.ai",
    description:
      "AI-native tooling studio. CacheBash MCP server, multi-agent orchestration framework, 10 open source packages on npm. Bounded systems that ship.",
  },
  {
    year: "2025",
    endYear: "present",
    title: "Co-Founder & Principal Architect — Three Bears Data",
    description:
      "Marketing measurement studio. Architected OptiMeasure — cookieless attribution engine (Python/Vertex AI). 3 clients in contracts.",
  },
  {
    year: "2021",
    endYear: "2025",
    title: "Data Engineer → Senior Data Engineer — Monks",
    description:
      "High-availability data pipelines processing 60M+ daily records at 99.9% uptime. Privacy-preserving analytics optimizing $10M+ in media spend. Mentored 8 engineers (75% promotion rate).",
  },
  {
    year: "2019",
    endYear: "2021",
    title: "Technical Solutions Engineer → Data Scientist — MightyHive",
    description:
      "Predictive modeling with clean room data. Refactored legacy systems into production microservices — 10x throughput improvement.",
  },
  {
    year: "2018",
    endYear: "2019",
    title: "Software Engineering — Hack Reactor @ Galvanize",
    description:
      "Immersive engineering program. The pivot from operations to code.",
  },
  {
    year: "2002",
    endYear: "2017",
    title: "Prior Career",
    description:
      "Professional poker player for a decade. Risk management, probability modeling, and pattern recognition under pressure — skills that translate directly to building reliable systems. District operations leadership, real estate.",
  },
];

// Tier 2 testimonials — after skills/certs in Evidence section
export const testimonials_tier2 = [
  {
    quote:
      "Christian builds real trust with executives and clients. He communicates clearly, stays calm, and inspires confidence in both the strategy and the delivery. He's the kind of leader who makes teams stronger.",
    author: "Oksana Davydenko",
    title: "Analytics Lead",
    relationship: "Peer",
  },
  {
    quote:
      "You don't just get someone who does the job. You get someone who improves the room. That's what creates lasting results.",
    author: "Rich Luby",
    title: "Career Services Director, Galvanize",
    relationship: "Teacher",
  },
  {
    quote:
      "I wasn't a junior complicating his workday, but a potential asset to the broader team who would benefit from the knowledge and insights of someone more experienced. I left our first 45-minute call with a path forward that I couldn't have hoped to chart on my own.",
    author: "Nyamekye Boaten",
    title: "Senior Analyst, Monks",
    relationship: "Mentee",
  },
];

// Tier 3 testimonials — compact quotes (badge-style)
export const testimonials_tier3: typeof testimonials_tier2 = [];

export const articles = [
  {
    title:
      "The Architecture Review I'd Give Your Multi-Agent System",
    url: "https://medium.com/@christianbourlier/the-architecture-review-id-give-your-multi-agent-system-321e29b7a6d9",
    date: "2026-03-08",
    tags: ["Multi-Agent", "Architecture", "Distributed Systems"],
  },
  {
    title:
      "I Built an MCP Server. Here's What the Docs Don't Tell You.",
    url: "https://medium.com/@christianbourlier/i-built-an-mcp-server-heres-what-the-docs-don-t-tell-you-20a9105e019f",
    date: "2026-03-07",
    tags: ["MCP", "Production", "Developer Tools"],
  },
  {
    title:
      "Notes from the Grid: The Telemetry Nobody's Building for Multi-Agent AI",
    url: "https://medium.com/@christianbourlier/notes-from-the-grid-the-telemetry-nobodys-building-for-multi-agent-ai-fa540a8b55fd",
    date: "2026-03-05",
    tags: ["Observability", "Multi-Agent", "AI"],
  },
];

export const contact = {
  heading: "Get in touch",
  description:
    "Building something that needs bounded AI infrastructure? Let's talk.",
  links: [
    { label: "GitHub", url: "https://github.com/rezzedai" },
    { label: "LinkedIn", url: "https://linkedin.com/in/christianbourlier" },
    { label: "Email", url: "mailto:christian@bourlier.ai" },
    { label: "Medium", url: "https://medium.com/@christianbourlier" },
  ],
};

export const footer = {
  tagline: "Bounded AI systems that ship.",
  signature: "Christian Bourlier",
  endOfLine: "END OF LINE",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Systems", href: "#systems" },
  { label: "Evidence", href: "#evidence" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
