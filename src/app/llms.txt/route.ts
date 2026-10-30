export function GET() {
  const content = `# Christian Bourlier

> Principal AI Systems Architect: production multi-agent orchestration, MCP server development, GCP-native infrastructure

## Background
Principal AI & Data Solutions Architect. Builds production AI-assisted development tools and multi-agent orchestration systems. EVP, Solutions (Americas) at DataTrue. Founder of rezzed.ai (open-source AI developer tools). Co-founded Three Bears Data (2025 to 2026). Former Principal Data & AI Solutions Architect at Monks, MightyHive. Professional poker player turned technologist.

## Systems
- [CacheBash](https://rezzed.ai/cachebash) — 50+ tool MCP server for AI agent coordination: task queues, relay messaging, session monitoring, human-in-the-loop approvals
- [Rezzed.ai](https://rezzed.ai) — Open-source developer tools for bounded AI agent orchestration
- [OptiMeasure](https://optimeasure.com) — Marketing attribution engine

## Writing
- [Blog](https://rezzed.ai/blog) — Posts on AI agent orchestration, MCP development, and production AI systems

## Links
- [LinkedIn](https://linkedin.com/in/christianbourlier)
- [GitHub](https://github.com/rezzedai)
- [Medium](https://medium.com/@christianbourlier)`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
