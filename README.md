# Persona AI

Chat with AI personas modeled after **Hitesh Choudhary** and **Piyush Garg** — two Indian developer-educators known for mentoring students in Hinglish. Pick a persona, ask about coding, careers, system design, or startups, and get short, conversational replies in their public teaching style.

Built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and the **OpenAI API**.

![Persona AI](assets/background.png)

## Features

- **Two personas** — Hitesh (calm mentor) and Piyush (engineering-first, witty senior dev)
- **Hinglish chat** — Natural, short replies; no lecture-style section headers
- **YouTube links** — Recommends specific playlists or videos when a topic matches their content
- **Guardrails** — No code generation, prompt-injection resistance, scoped to each persona's lane
- **Persona-specific rules** — Hitesh redirects jokes to Piyush; Piyush handles banter and philosophy

## Quick start

### Prerequisites

- Node.js 18+
- An [OpenAI API key](https://platform.openai.com/api-keys)

### Setup

```bash
git clone <your-repo-url>
cd personaAI
npm install
```

Copy `.env.example` to `.env` and add your key:

```bash
# macOS / Linux
cp .env.example .env

# Windows (PowerShell)
copy .env.example .env
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Personas

| Persona | Style | Topics |
|---------|-------|--------|
| **Hitesh Choudhary** | Calm, practical mentor. Opens with *"Haan ji!"* | Coding fundamentals, DSA mindset, tech careers, projects |
| **Piyush Garg** | Direct, trade-off focused, dry humor. Opens with *"Hello everyone!"* | System design, Node.js, Docker, startups, life & philosophy |

Both personas explain concepts in words only — they do not write code for you.

### YouTube channels

- Hitesh: [@chaiaurcode](https://www.youtube.com/@chaiaurcode), [@HiteshCodeLab](https://www.youtube.com/@HiteshCodeLab)
- Piyush: [@piyushgargdev](https://www.youtube.com/@piyushgargdev)

When a user asks about a topic with a mapped playlist or video, the persona shares that link in the reply.

## Project structure

```
personaAI/
├── assets/
│   ├── background.png      # Page background image
│   ├── hitesh.jpg          # Hitesh profile photo
│   └── piyush.jpg          # Piyush profile photo
├── src/
│   ├── app/
│   │   ├── api/chat/       # OpenAI chat API route
│   │   ├── globals.css     # Tailwind theme & styles
│   │   ├── layout.tsx
│   │   └── page.tsx        # Home + persona picker
│   ├── components/
│   │   ├── ChatPanel.tsx   # Chat UI
│   │   ├── PersonaCard.tsx
│   │   ├── HeroSection.tsx
│   │   └── ...
│   └── lib/
│       ├── personas.ts           # Persona metadata & topics
│       ├── system-prompts.ts     # Prompt assembly + greetings
│       ├── youtube-resources.ts  # Topic → playlist/video map
│       ├── youtube-context.ts    # Keyword matching for links
│       └── prompts/
│           ├── hitesh.ts         # Hitesh system prompt
│           └── piyush.ts           # Piyush system prompt
├── .env                    # OPENAI_API_KEY (not committed)
└── package.json
```

## Customization

### Edit persona copy

Update names, bios, and topic labels in `src/lib/personas.ts`.

### Edit persona behavior

System prompts live in:

- `src/lib/prompts/hitesh.ts`
- `src/lib/prompts/piyush.ts`

Shared guardrails (no code, anti-injection) are appended in `src/lib/system-prompts.ts`.

### Add YouTube links

Edit `src/lib/youtube-resources.ts`. Each entry needs a title, URL, and keywords:

```ts
{
  title: "Your playlist name",
  url: "https://www.youtube.com/playlist?list=...",
  keywords: ["docker", "containers", "devops"],
}
```

The API matches the user's message against keywords and injects relevant links into the prompt for that request.

### Change background

Replace `assets/background.png`. It is loaded via `src/components/PageBackground.tsx`.

### Change OpenAI model

In `src/app/api/chat/route.ts`, update the `model` field (default: `gpt-4o-mini`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | OpenAI API key for chat completions |


