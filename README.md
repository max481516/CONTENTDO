# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Migration to Next.js + TypeScript (netlify, Firebase, Netlify Forms) — TODO

- [1] Bootstrap Next.js + TypeScript in this repo

  - [ ] Add Next.js (App Router) with TS; create `app/`
  - [ ] Add `tsconfig.json`, `next-env.d.ts`; update `package.json` scripts to `next dev/build/start`
  - [ ] Create `next.config.ts` with `compiler.styledComponents = true` and `@svgr/webpack` rule

- [2] App structure (single page)

  - [x] Create `app/layout.tsx`; move `src/GlobalStyles.js` → `src/styles/GlobalStyles.ts`
  - [x] Import global CSS (`overlayscrollbars/styles/overlayscrollbars.css`, `react-phone-number-input/style.css`) in `app/layout.tsx`
  - [x] Create `app/page.tsx` composing `Header`, `Hero`, `Portfolio`, `AboutUs`, `PriceInfo`, `ContactUs`, `Footer`

- [3] styled-components SSR

  - [x] Enabled via Next compiler (`next.config.ts` → `compiler.styledComponents = true`)
  - [ ] Optional: add `StyledComponentsRegistry` if hydration issues/FOUC appear

- [4] Client-only boundaries

  - [x] Add `'use client'` to DOM/effect components (Navbar, Hero, Portfolio, Modal)
  - [x] Initialize OverlayScrollbars on `document.body` in a small client provider (`app/OverlayScrollbarsProvider.tsx`, included in `app/layout.tsx`)

- [5] Firebase (keep) and env migration

  - [x] Move `src/firebase/firebaseConfig.js` → `src/lib/firebase.ts`
  - [x] Replace `import.meta.env.VITE_*` with `process.env.NEXT_PUBLIC_*` (set in Netlify env)
  - [x] Guard analytics for browser only (`getAnalytics` only on client)
  - [x] Keep callable `validateFile`; update CORS in `functions/index.js` for `http://localhost:3000` and Netlify preview/prod domains

  Env required (create `.env.local`):

  ```bash
  NEXT_PUBLIC_FIREBASE_API_KEY=
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
  NEXT_PUBLIC_FIREBASE_APP_ID=
  ```

- [6] Netlify Forms (replace Formspree)

  - [x] Remove Formspree usage from `ContactForm` and `OrderForm`
  - [x] Add `data-netlify="true"`, `name="contact"`/`"order"`, `method="POST"`, and hidden `input name="form-name"`
  - [x] Add honeypot: `data-netlify-honeypot="bot-field"` and hidden `input name="bot-field"`
  - [x] Include a hidden static form (same fields) for detection (`app/NetlifyFormsDetect.tsx`, included in `app/layout.tsx`)
  - [x] Keep Firebase Storage uploads; submit file URLs as hidden inputs

- [7] SVGR and assets

  - [x] Configure `@svgr/webpack`; replaced any `*.svg?react` with `import Icon from '.../icon.svg'` (none remained). Added TS module typings: `src/types/svg.d.ts`.
  - [ ] Move large static media to `public/`; consider `next/image`

- [8] Netlify deployment

  - [x] Add `@netlify/plugin-nextjs` to `netlify.toml`
  - [x] Build command: `npm run next:build`; publish directory: `.next`
  - [ ] Add env vars in Netlify UI: `NEXT_PUBLIC_FIREBASE_*`

- [9] Cleanup Vite after Next runs locally

  - [ ] Remove `vite.config.js`, `index.html`, and Vite deps

- [10] QA
  - [ ] Run `tsc --noEmit` and ESLint
  - [ ] Test Firebase uploads + callable function from Netlify domains
  - [ ] Test Netlify Forms submissions (honeypot, required fields)
