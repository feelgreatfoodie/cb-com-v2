# bourlier.ai

Source for [bourlier.ai](https://bourlier.ai), Christian Bourlier's hiring site. One long page built for a recruiter who has 30 seconds: the hero states role and proof, then testimonials, systems, evidence and writing follow on scroll.

Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, framer-motion. Hosted on Vercel.

## Run it locally

```bash
npm install --include=dev
NODE_ENV=development npm run dev
```

Open http://localhost:3000.

If your shell exports `NODE_ENV=production`, plain `npm install` skips devDependencies and `next dev` fails with `Cannot find module 'typescript'`. The two flags above avoid that. Next.js may also try to add `typescript` to `package.json` on its own; discard that change.

| Script | What it does |
|---|---|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (one known error in `test-ghost-bubbles.js`) |

## Environment variables

All are optional. Put them in `.env.local`, which git ignores.

| Variable | Used by | Without it |
|---|---|---|
| `GOOGLE_AI_API_KEY` | Chat assistant (Gemini 2.0 Flash) | Chat answers from canned responses in `MockProvider` |
| `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_PRIVATE_KEY`, `GOOGLE_SHEETS_SPREADSHEET_ID` | Chat transcript logging | Chats are not logged |
| `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` | PostHog analytics, proxied through `/ingest` | No analytics |

## Where things live

| Path | Contents |
|---|---|
| `src/config/content.ts` | Every fact on the page: hero, metrics, systems, timeline, testimonials, skills. Edit copy here first. |
| `src/lib/ai/provider.ts` | Chat assistant system prompt and fallback answers. Keep its facts in sync with `content.ts`. |
| `src/app/layout.tsx` | Page metadata, JSON-LD, and the global chat widget, scroll bar and Konami overlay |
| `src/app/opengraph-image.tsx`, `twitter-image.tsx` | Link-preview images, rendered at request time |
| `src/app/llms.txt/route.ts` | Plain-text summary for LLM crawlers at `/llms.txt` |
| `src/app/api/chat/route.ts` | Chat API: Zod validation, in-memory rate limit (30 per hour in production, resets on cold start) |
| `src/app/memory/page.tsx` | `/memory`, a product page for CacheBash agent memory |
| `src/app/globals.css` | Color tokens and animations |
| `src/components/` | Page sections, in render order: `Surface` (hero), `SocialProof`, `Story` (systems, approach), `Evidence` (skills, testimonials, timeline, writing, contact), `Footer` |

`src/components/ProblemSolver.tsx` is not mounted on any page. [PROBLEM_SOLVER.md](PROBLEM_SOLVER.md) and [AI_CHAT_WIDGET.md](AI_CHAT_WIDGET.md) describe those two features in more depth.

## Content rules

- Every claim on the page must hold up in a technical interview.
- The CacheBash tool count is written as "50+". The real count is 58.
- Hero text and metrics render on the server. Avoid animations that start text at opacity 0 or numbers at 0, because crawlers, link previews and LLM screeners read the initial HTML.

## Color tokens

Defined in `src/app/globals.css` against a `#161819` background.

| Token | Value | Contrast | Use |
|---|---|---|---|
| `text-primary` | `#e2e8f0` | about 14:1 | Headings, quotes, body |
| `text-secondary` | `#a3aebb` | about 8:1 | Supporting text |
| `text-tertiary` | `#8b96a3` | about 6:1 | Labels and metadata |
| `accent-active` | `#5bb8d4` | | Links, metrics, timeline years |

Use these tokens for text. Opacity modifiers on text colors (`text-text-secondary/50`) drop contrast below 4.5:1.

## Deploy

Vercel project `bourlier-ai` under the `feelgreatfoodies-projects` team.

- Every pull request gets a preview deployment, linked from the PR's Vercel status check.
- A merge to `main` deploys to production at bourlier.ai.
- Changes go through a branch and pull request. Nothing is pushed straight to `main`.
- Commits are authored as `feelgreatfoodie <feelgreatfoodie@users.noreply.github.com>`.

## Related sites

- [christianbourlier.com](https://christianbourlier.com): personal site with themed palettes
- [rezzed.ai](https://rezzed.ai): Rezzed developer tools and CacheBash
