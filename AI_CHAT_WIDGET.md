# AI Chat Widget

## Overview

The AI chat widget provides an interactive assistant for visitors to ask questions about Christian's work, systems, and experience. It's a floating chat interface that auto-opens on first visit and includes rate limiting, error handling, and optional conversation logging.

## Features

- **Floating chat button** — Fixed position in bottom-right corner
- **Auto-open on first visit** — Uses localStorage to track and auto-open once
- **Keyboard shortcuts** — Press Escape to close the chat panel
- **Rate limiting** — 15 questions per hour in production (100 in dev)
- **429 handling** — Graceful error messages when rate limit is reached
- **Auto-scroll** — Automatically scrolls to latest message
- **Responsive design** — Adapted to bourlier.ai design tokens

## Architecture

### Frontend (`src/components/ChatWidget.tsx`)
- React component using framer-motion for animations
- Manages chat state, message history, and loading indicators
- Handles keyboard events and auto-focus
- Integrates with bourlier.ai design system

### Backend (`src/app/api/chat/route.ts`)
- Next.js API route with POST endpoint
- In-memory rate limiting (15 req/hour production, 100 req/hour dev)
- Zod schema validation for request body
- Optional Google Sheets logging for chat conversations
- Error handling with fallback responses

### AI Provider (`src/lib/ai/provider.ts`)
- **GeminiProvider** — Uses Google's Gemini 2.0 Flash model
- **MockProvider** — Fallback with pattern-based responses
- System prompt includes Christian's full background, systems, and skills

## Design Tokens

Adapted to bourlier.ai's design system:
- `--base` — Background color
- `--surface` — Panel background
- `--text-primary` — Primary text color
- `--text-secondary` — Secondary text color
- `--accent-active` — Accent color (cyan: #5bb8d4)
- `--border` — Border color

## Environment Variables

Required:
```bash
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

Optional (for chat logging):
```bash
GOOGLE_SHEETS_CLIENT_EMAIL=service_account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=spreadsheet_id_here
```

## System Prompt

The AI assistant is configured with detailed knowledge about:
- Christian's production AI systems (CacheBash, Rezzed.ai, OptiMeasure, Bourlier.ai)
- 58-tool MCP server architecture
- Multi-agent orchestration
- Career history and experience
- Skills and certifications
- Open source packages (11 npm packages)
- Methodology and governance philosophy

The assistant is instructed to:
- Only discuss Christian's professional background and domain
- Keep responses to 2-3 sentences unless more detail is requested
- Direct contact requests to christian@bourlier.ai
- Never answer general knowledge questions or provide coding help

## Rate Limiting

Production:
- 15 requests per hour per IP
- 1 hour window

Development:
- 100 requests per 5 minutes per IP

Rate limiting uses in-memory storage (resets on serverless cold start).

## Error Handling

- **429 Rate Limited** — Shows user-friendly message with contact email
- **400 Bad Request** — Zod validation errors
- **500 Server Error** — Falls back to mock provider or generic error message
- **Network Errors** — Client-side catch with retry suggestion

## Deployment

1. Set `GOOGLE_AI_API_KEY` in Vercel environment variables
2. (Optional) Configure Google Sheets logging credentials
3. Deploy — widget will appear on all pages

## Port Details

Ported from `cb-com-v1` to `cb-com-v2`:
- Adapted design tokens to match bourlier.ai aesthetic
- Removed analytics tracking (not set up in v2)
- Updated system prompt with current Christian's work focus (AI Systems Architect)
- Maintained all core behaviors: auto-open, Escape to close, rate limiting, error handling
- Uses `motion` instead of `m` from framer-motion (v2 convention)

## Dependencies

- `framer-motion` — Animations
- `clsx` + `tailwind-merge` — Class name utilities
- `zod` — Request validation
- `@google/generative-ai` — Gemini provider
- `@googleapis/sheets` + `google-auth-library` — Optional logging

All dependencies are already installed in package.json.
