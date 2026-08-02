# RevelationSigns

Long-term website project built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project structure

```
RevelationSigns/
├── docs/                    # Project documentation
│   ├── blueprint/           # Master Blueprint and design specs
│   ├── architecture/        # Technical architecture decisions
│   └── guides/              # Development and deployment guides
├── public/                  # Static public media (served at root URL)
│   ├── media/
│   │   ├── images/
│   │   ├── videos/
│   │   └── audio/
│   ├── fonts/
│   └── icons/
└── src/
    ├── app/                 # Next.js App Router
    ├── assets/              # Internal assets (imported in code)
    │   ├── icons/
    │   ├── images/
    │   └── fonts/
    ├── components/          # Reusable UI components
    │   ├── common/
    │   ├── layout/
    │   └── ui/
    ├── sections/            # Page-level section modules
    │   ├── home/
    │   ├── about/
    │   └── shared/
    ├── animations/          # Framer Motion presets and utilities
    │   ├── hooks/
    │   ├── transitions/
    │   └── variants/
    ├── constants/           # App-wide constants
    ├── hooks/               # Shared React hooks
    ├── lib/                 # Utilities and helpers
    ├── styles/              # Global styles and design tokens
    └── types/               # Shared TypeScript types
```

## Getting started

```bash
npm install
npm run dev
```

## Conventions

- **`public/`** — Static files referenced by URL path (e.g. `/media/images/hero.jpg`).
- **`src/assets/`** — Files imported directly in components via `@/assets/...`.
- **`components/`** — Small, reusable building blocks.
- **`sections/`** — Composed page sections that assemble components.
- **`animations/`** — Framer Motion variants, transitions, and animation hooks.
