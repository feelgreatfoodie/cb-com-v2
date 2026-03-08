# Problem Solver Component

## Overview

The ProblemSolver component provides an interactive "describe your challenge" interface that uses AI to analyze technical problems and provide structured solutions based on Christian's approach to building production AI systems.

## Features

- **Interactive textarea** — 500 character limit, Ctrl+Enter to submit
- **Structured AI responses** — Parses responses into 4 sections:
  - **Diagnosis** — Core technical challenge analysis
  - **Proposed Approach** — Recommended solution strategy
  - **Timeline** — Realistic timeframe for POC/implementation
  - **Relevant Experience** — Christian's specific experience with similar challenges
- **Loading animation** — Three bouncing dots with staggered delays
- **Error handling** — Graceful fallbacks for network errors
- **Design system integration** — Uses bourlier.ai design tokens (CSS variables)

## Architecture

### Frontend (`src/components/ProblemSolver.tsx`)
- React component with local state management
- Regex-based response parser with fallbacks for each section
- Ctrl+Enter keyboard shortcut for submission
- Adapted to cb-com-v2 design system

### Backend (`src/app/api/chat/route.ts`)
- Shares `/api/chat` endpoint with ChatWidget
- Uses `context: 'solver'` to trigger specialized system prompt
- System prompt instructs AI to respond in structured format
- Rate limiting: 15 req/hour production, 100 req/hour dev

## Design Tokens

Uses bourlier.ai's design system:
- `--surface` — Card background
- `--text-primary` — Primary text color
- `--accent-active` — Accent color (cyan: #5bb8d4) for section headings
- `rgba(91, 184, 212, 0.3)` — Border color
- `rgba(226, 232, 240, 0.9)` — Body text color
- `rgba(22, 24, 25, 0.4)` — Input background

## Usage

### Add to a page:
```tsx
import { ProblemSolver } from '@/components/ProblemSolver';

export default function SolverPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <ProblemSolver />
    </div>
  );
}
```

### Or as a section:
```tsx
import { ProblemSolver } from '@/components/ProblemSolver';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Surface />
        <section className="py-20 px-6">
          <ProblemSolver />
        </section>
        <Story />
      </main>
      <Footer />
    </>
  );
}
```

## System Prompt (Solver Context)

The `/api/chat` endpoint prepends this system message when `context: 'solver'`:

> You are a technical solutions advisor helping users understand Christian Bourlier's approach to building production AI systems. Focus on multi-agent orchestration, MCP development, bounded autonomy, system architecture, and strategic implementation.
>
> Respond in exactly this format:
>
> Diagnosis:
> [1-2 sentences analyzing the core technical challenge]
>
> Proposed Approach:
> [2-4 sentences outlining the recommended solution strategy, grounded in Christian's experience with AI systems, data engineering, and production deployments]
>
> Timeline:
> [1 sentence with realistic timeframe for POC or initial implementation]
>
> Relevant Experience:
> [2-3 sentences highlighting Christian's specific experience with similar challenges in CacheBash, Rezzed.ai, OptiMeasure, or other production AI systems]
>
> Be concise, actionable, and specific to Christian's domain expertise.

## Response Parser

The component uses regex to extract sections:
- Matches section headers (case-insensitive)
- Trims whitespace from extracted content
- Provides fallback text if sections are missing
- Supports both colon and newline separators

## Port Details

Ported from `cb-com-v1` to `cb-com-v2`:
- **Design system**: Replaced Tailwind utility classes (`glass`, `border-accent/30`, `bg-background/40`) with inline styles using CSS variables
- **Removed**: Analytics tracking (not set up in v2)
- **Removed**: Button component (uses raw `<button>` with inline styles)
- **Updated**: System prompt to ensure structured output format
- **Maintained**: Core functionality, keyboard shortcuts (Ctrl+Enter), loading animation, error handling, response parsing

## Dependencies

All dependencies already installed in package.json:
- `clsx` + `tailwind-merge` — `cn` utility
- No additional dependencies needed

## Environment Variables

Uses the same environment variables as ChatWidget:
```bash
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

Optional (for chat logging):
```bash
GOOGLE_SHEETS_CLIENT_EMAIL=service_account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=spreadsheet_id_here
```

## Integration Notes

- Component is ready to use, integration point is flexible
- Consider adding as a dedicated route (e.g., `/solver`) or as a section on an existing page
- Shares rate limiting with ChatWidget (15 requests/hour in production)
- No visual conflicts with ChatWidget — can coexist on the same page
