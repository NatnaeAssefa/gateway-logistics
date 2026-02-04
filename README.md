# Gateway Logistics

**B2B Trade, Logistics & Business Facilitation**

Company website for Gateway Logistics — an Ethiopia-based B2B business facilitation and brokerage company supporting organizations in trade, logistics, and cross-border commercial activities.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install and run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Run production server (after build)
npm run lint    # Run ESLint
```

## Project structure

- `src/app/` — App Router pages and layout
  - `page.tsx` — Home page (services, operating model, contact)
  - `layout.tsx` — Root layout and metadata
  - `globals.css` — Global styles and Tailwind
- `public/` — Static assets (images)

## Brand

- **Accent color:** `#c42025` (used in layout and globals)

## Deploy

You can deploy the app to [Vercel](https://vercel.com) or any Node-compatible host. The project uses Next.js default configuration; ensure image domains (e.g. `images.unsplash.com`) are allowed in `next.config.ts` if you add new remote images.
