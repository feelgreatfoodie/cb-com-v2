// bourlier.ai — content.ts
// Technical hiring surface. AI Systems Architect identity.
// Source of truth: Career Calibration System (resume-calibration-system.md)
// Every claim here is defensible in a technical interview.

export const siteConfig = {
  name: "Christian Bourlier",
  title: "Christian Bourlier — AI Systems Architect",
  description:
    "I architect production AI systems where autonomous agents perform reliable, governed work at scale. 39-tool MCP server. Multi-agent orchestration. Full audit coverage. Building on Claude.",
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
    "I architect the production infrastructure where LLMs perform reliable, governed work within enterprise constraints. Author of CacheBash — a 39-tool MCP server powering multi-agent orchestration with identity isolation, policy-gated tool use, and full audit coverage.",
  metrics: [
    { value: "4", label: "Production AI Systems" },
    { value: "39", label: "MCP Tools (9 Domains)" },
    { value: "100%", label: "Audit Coverage" },
    { value: "0", label: "Uncontained Failures" },
    { value: "6mo→6wk", label: "Modeling Latency Reduction" },
  ],
  availability: "Open to applied AI roles",
  scrollCta: "See what's running",
};

export const signal = {
  quote:
    "He does not just build things — he thinks about the whole system. He went from zero familiarity to owning the implementation within weeks. He moves comfortably between the technical and business sides without losing depth in either. That combination is rare.",
  author: "Puneet Gangrade",
  title: "Data Science & Engineering Lead, Monks",
  relationship: "Direct Manager",
};

export const systems = [
  {
    name: "CacheBash",
    slug: "mcp-relay + persistent-task-state",
    description:
      "Production MCP server for multi-agent coordination on Claude Code. 39 tool endpoints across 9 operational domains: task orchestration, relay messaging, session management, sprint execution, identity/key management, observability, distributed tracing, program state, and autonomous execution.",
    stack: ["Cloud Run", "Firestore", "TypeScript", "MCP Protocol"],
    details: [
      "Transactional task claiming with dead-letter containment",
      "AES-256 encryption for inter-agent messaging",
      "TTL-based lifecycle management",
      "Identity isolation per agent session",
    ],
    url: "https://www.npmjs.com/package/@rezzed.ai/cachebash",
    github: "https://github.com/rezzedai",
    status: "Production" as const,
  },
  {
    name: "Rezzed.ai",
    slug: "bounded-multi-agent-orchestration",
    description:
      "Role-specialized multi-agent system where 10+ LLM-powered agents operate within identity-scoped boundaries, static context budgets, and pre-tool-use policy gates. Hierarchical Planner\u2192Worker topology routes reasoning to high-capability models and execution to cost-efficient tiers.",
    stack: ["Claude Code", "Vertex AI", "MCP", "Cloud Run"],
    details: [
      "Every tool call policy-gated and audit-logged",
      "100% tool-boundary coverage",
      "Zero uncontained failures",
      "Fleet health monitoring with cost/token rollups",
    ],
    url: "https://rezzed.ai",
    github: "https://github.com/rezzedai",
    status: "Production" as const,
  },
  {
    name: "OptiMeasure",
    slug: "privacy-first-ai-measurement",
    description:
      "Cookieless marketing attribution engine generating channel-level and tactic-level budget reallocation recommendations. Compressed spend-recommendation modeling latency from 6 months (industry-standard MMM) to 6 weeks.",
    stack: ["Python", "Vertex AI", "BigQuery"],
    details: [
      "Privacy-first, no PII dependency",
      "Clean-room compatible",
      "Human-in-the-loop validation layer",
      "3 clients in contracts",
    ],
    url: "https://optimeasure.io",
    status: "Production" as const,
  },
];

export const portfolioSystem = {
  name: "Bourlier.ai",
  slug: "constraint-aware-deployment",
  description: "Production testbed for constraint-aware deployment. Rate limiting, validation, audit logging, and structured output handling.",
  stack: ["Next.js", "Gemini", "Vercel"],
  url: "https://bourlier.ai",
  status: "Production" as const,
};

export const instrumentation = {
  title: "// instrumentation",
  items: [
    "Completion semantics (SUCCESS / FAILED / SKIPPED / CANCELLED)",
    "Error taxonomy \u2014 6 classification tiers",
    "Distributed tracing across agent spans",
    "Cost, token, latency rollups per program and period",
    "Comms delivery metrics and dead letter monitoring",
    "Every agent action reconstructible from audit logs",
  ],
};

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
  governance: {
    title: "Constrained Autonomy",
    tag: "[GOVERNANCE]",
    description:
      "Agents operate within identity boundaries, context budgets, rate limits, and pre-execution policy gates. Safety, evaluation, and dispatch layers enforce bounded execution.",
  },
};

export const openSourcePackages = [
  { name: "cachebash", description: "MCP agent coordination" },
  { name: "guardian", description: "Safety rails and audit enforcement" },
  { name: "specfirst", description: "Plan-before-build with confidence scoring" },
  { name: "dreamwatch", description: "Overnight autonomous execution with safety rails" },
  { name: "voicekeeper", description: "AI writing detection and voice matching" },
  { name: "dual-auth", description: "Firebase + API key dual authentication" },
  { name: "rate-gate", description: "Sliding window rate limiter" },
  { name: "poll-hooks", description: "Async work-polling with claim semantics" },
  { name: "dispatch", description: "Lightweight MCP task server" },
  { name: "xfetch", description: "Social media content extraction" },
];

export const skillCategories = [
  {
    label: "AI & Orchestration",
    skills: [
      "MCP Server Development",
      "Multi-Agent Orchestration",
      "System Prompt Engineering",
      "LLM-as-a-Judge Evals",
      "Vertex AI",
      "Claude Code",
      "Structured Output Validation",
      "Context Window Management",
      "Policy-Gated Tool Use",
      "Safety & Audit Systems",
    ],
  },
  {
    label: "Cloud & Engineering",
    skills: [
      "GCP (Cloud Run, BigQuery, Firestore, Pub/Sub)",
      "Python",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "Docker",
      "Terraform",
      "GitHub Actions CI/CD",
      "Event-Driven Architecture",
      "Firestore Transactions",
      "REST APIs",
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
    title: "Founder & Principal Architect \u2014 Rezzed.ai",
    description:
      "AI-native tooling studio. CacheBash MCP server, multi-agent orchestration framework, 10 open source packages on npm. Bounded systems that ship.",
  },
  {
    year: "2025",
    endYear: "present",
    title: "Co-Founder & Principal Architect \u2014 Three Bears Data",
    description:
      "Marketing measurement studio. Architected OptiMeasure \u2014 cookieless attribution engine (Python/Vertex AI). 3 clients in contracts.",
  },
  {
    year: "2021",
    endYear: "2025",
    title: "Data Engineer \u2192 Senior Data Engineer \u2014 Monks",
    description:
      "High-availability data pipelines processing 60M+ daily records at 99.9% uptime. Privacy-preserving analytics optimizing $10M+ in media spend. Mentored 8 engineers (75% promotion rate).",
  },
  {
    year: "2019",
    endYear: "2021",
    title: "Data Scientist \u2192 Technical Solutions Engineer \u2014 MightyHive",
    description:
      "Predictive modeling with clean room data. Refactored legacy systems into production microservices \u2014 10x throughput improvement.",
  },
  {
    year: "2018",
    endYear: "2019",
    title: "Software Engineering \u2014 Hack Reactor @ Galvanize",
    description:
      "Immersive engineering program. The pivot from operations to code.",
  },
  {
    year: "2002",
    endYear: "2017",
    title: "Prior Career",
    description:
      "Professional poker (10 years), district operations leadership, real estate. Non-traditional path to engineering.",
  },
];

export const testimonials = [
  {
    quote:
      "He does not just build things \u2014 he thinks about the whole system. He went from zero familiarity to owning the implementation within weeks. He moves comfortably between the technical and business sides without losing depth in either. That combination is rare.",
    author: "Puneet Gangrade",
    title: "Data Science & Engineering Lead, Monks",
  },
];

export const articles = [
  {
    title:
      "The Only Part of My AI Stack That Needed Coffee Was Also the Bottleneck",
    url: "https://medium.com/@christianbourlier/the-only-part-of-my-ai-stack-that-needed-coffee-was-also-the-bottleneck",
    date: "2026-02-25",
    tags: ["Software Engineering", "Model Context Protocol", "AI"],
  },
  {
    title:
      "CacheBash: An MCP Server That Lets Your AI Sessions Talk to Each Other",
    url: "https://medium.com/@christianbourlier/cachebash-an-mcp-server-that-lets-your-ai-sessions-talk-to-each-other",
    date: "2026-02-25",
    tags: ["MCP", "Developer Tools", "AI"],
  },
  {
    title: "Your AI Agent Has Amnesia. You're the Cure.",
    url: "https://medium.com/@christianbourlier/your-ai-agent-has-amnesia-youre-the-cure",
    date: "2026-02-23",
    tags: ["Software Development", "AI", "Developer Tools"],
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
