<!-- .github/copilot-instructions.md - project-specific guidance for AI coding agents -->
# Repository: e-commerce-ui-2025 — Copilot Instructions

This file gives concise, actionable guidance for AI coding agents working in this repository so you can be productive immediately.

- Project summary: Next.js (App Router) TypeScript app located in `src/app`. Uses Next 15, React 19, Tailwind, and `next/font` for Google fonts. Package manager: `pnpm` (lockfile present).

- Key files:
  - `package.json` — scripts: `dev` (`next dev --turbopack`), `build`, `start`, `lint`.
  - `src/app/layout.tsx` — root layout, font imports via `next/font/google`, and site container.
  - `src/app/page.tsx` — current homepage entry (App Router).
  - `src/app/globals.css` — global CSS and Tailwind integration.
  - `tsconfig.json` — TypeScript configuration; path alias `@/* -> ./src/*`.

- Architecture & conventions (what I observed):
  - App Router: routes and layouts live under `src/app`. Add pages as folder-based routes (e.g. `src/app/products/page.tsx`).
  - Layout composition: global layout defined in `src/app/layout.tsx`. Keep header/footer wrappers there.
  - Styling: Tailwind is the primary styling method — class names appear directly in JSX (see `layout.tsx` and `page.tsx`). `globals.css` holds base Tailwind directives.
  - Fonts: `next/font/google` is used with variables (see `Geist` and `Geist_Mono` in `layout.tsx`). Preserve the `variable` usage when adding new components to keep consistent CSS variable names.
  - Path alias: prefer imports like `import X from '@/components/X'` when referencing `src` files.

- Build & dev workflows (how to run):
  - Install: `pnpm i` (repository has `pnpm-lock.yaml`).
  - Dev: `pnpm dev` => runs `next dev --turbopack`. Note: turbopack flag is explicit in `package.json`.
  - Build: `pnpm build` => `next build`.
  - Start: `pnpm start` => `next start`.
  - Lint: `pnpm lint` => `next lint`.

- Project-specific patterns and examples:
  - Route example: create `src/app/shop/page.tsx` for `/shop` route.
  - Layout example: add shared UI (nav/footer) to `src/app/layout.tsx` so it wraps all routes.
  - Component placement: repository currently uses `src/app` only. If adding reusable components, create `src/components/` and import with alias: `import Button from '@/components/Button'`.
  - Tailwind usage: use utility classes in JSX (e.g. `className="mx-auto p-4 sm:max-w-xl ..."`), and keep global tokens in `globals.css`.

- Integration & external deps observed:
  - No server/backend code in repo — frontend likely consumes external APIs; check environment variables if adding fetch/edge code.
  - Tailwind + PostCSS present (`postcss.config.mjs`) — keep PostCSS plugin usage minimal and compatible with Tailwind v4.

- Developer notes for AI agents (what to do and what to avoid):
  - Prefer minimal, backward-compatible changes: modify `src/app/*` layout or pages rather than changing Next config unless necessary.
  - When adding files, follow the App Router conventions (folder + `page.tsx` for routes, `layout.tsx` for nested layouts).
  - Use the `@/*` import alias for cross-file imports to match `tsconfig.json` paths.
  - Preserve `next/font` variable names when adding fonts or components that rely on them.
  - Do not assume a backend exists; if you add API calls, make them configurable via environment variables and note where to store them.

- Quick examples (copyable):
  - Create a route: `src/app/products/page.tsx`
    ```tsx
    export default function ProductsPage() {
      return <div className="p-4">Products list placeholder</div>
    }
    ```

  - Import using alias: `import Layout from '@/app/layout'` (prefer `@/` for `src` imports)

- Files to check first when working on features/issues:
  - `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `package.json`, `tsconfig.json`, `next.config.ts`.

If anything in this guidance is missing or unclear, tell me which area you'd like expanded (routing conventions, build/debug commands, or import patterns) and I'll iterate.
