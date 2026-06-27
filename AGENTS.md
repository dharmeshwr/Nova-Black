# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router project. Route files, layouts, API handlers, metadata, and global styles live in `app/`. Public pages are grouped under `app/(pages)/`, dynamic service and checkout routes use `[slug]`, and API endpoints live under `app/api/`. Shared UI components are in `components/`; keep reusable presentation pieces there. Utility code and integrations live in `lib/`, including Paytm and PDF helpers. Static assets, icons, manifest files, and Graphik fonts are in `public/`.

## Build, Test, and Development Commands

Use pnpm, as indicated by `pnpm-lock.yaml`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the local Next.js development server.
- `pnpm build`: create a production build and run Next.js type checks.
- `pnpm start`: serve the production build locally.
- `pnpm lint`: run ESLint with Next.js Core Web Vitals and TypeScript rules.

## Coding Style & Naming Conventions

Write TypeScript and React function components. Use PascalCase for exported components, camelCase for functions and variables, and kebab-case for route folders and component files such as `project-request-form.tsx`. Prefer the `@/` path alias for local imports. Styling is Tailwind CSS v4 in `className` strings, with shared class merging through `cn` from `lib/utils.ts` when conditional classes are needed. Keep server components as the default; add `"use client"` only for hooks, browser APIs, animation state, or event handlers.

## Testing Guidelines

No automated test framework or `test` script is currently configured. For changes today, run `pnpm lint` and `pnpm build` before opening a PR. If tests are added, place route-adjacent tests near the feature or use top-level `__tests__/`, name files `*.test.ts` or `*.test.tsx`, and add the runner command to `package.json`.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style messages, for example `feat: add checkout page`, `fix: pay button redirect`, and `docs: add terms in checkout page`. Use a lowercase type and imperative summary.

Pull requests should include a concise description, affected routes or APIs, screenshots for UI changes, and notes for environment or payment-flow changes. Link related issues when available and mention the verification commands run.

## Security & Configuration Tips

Do not commit secrets. Paytm and site URL settings are read from environment variables such as `PAYTM_ENV`, `PAYTM_TEST_MID`, `PAYTM_TEST_KEY`, `PAYTM_PROD_MID`, `PAYTM_PROD_KEY`, `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_APP_URL`. Keep local values in `.env` and document any new required variables in the PR.
