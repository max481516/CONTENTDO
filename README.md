# CONTENTDO — Full-Cycle Video Production

**Official website of the CONTENTDO video production studio**

🎬 Video Production | 🎭 Stunt Performers | 🎥 Stunt Choreography | 📍 Moscow

---

## 📋 About the Project

CONTENTDO is the website of a video production studio specializing in commercials, music videos, action scene staging, and stunt work.

**Key features:**

- 🎥 Video project portfolio with an interactive player
- 📝 Two contact forms (quick contact and project order)
- 📤 Project file upload via Firebase Storage (up to 10 GB)
- 📊 Yandex Metrika analytics integration
- 🔍 Full SEO optimization for the Russian market (Yandex priority)
- ♿ Accessibility (WCAG AA)

---

## 🛠 Tech Stack

### Frontend

- **Next.js 15** (App Router) — React framework with SSR
- **TypeScript** — typed code
- **Styled Components** — CSS-in-JS with SSR support
- **Swiper** — portfolio carousel
- **OverlayScrollbars** — custom scrollbars
- **React Phone Number Input** — international phone input
- **DOMPurify** — sanitization of user-supplied data

### Backend & Services

- **Firebase Storage** — uploaded file storage
- **Firebase Functions** — file validation (Cloud Functions)
- **Netlify Forms** — handling contact forms
- **Cloudinary** — CDN for video

### Analytics & SEO

- **Yandex Metrika** — web analytics (Russian market)
- **Yandex Webmaster** — verification and indexing
- **JSON-LD Structured Data** — Organization, Service, VideoObject schemas
- **Dynamic sitemap.xml** — auto-generated sitemap
- **Dynamic robots.txt** — indexation control

### Tooling

- **ESLint** — code linting
- **Prettier** — code formatting
- **TypeScript Compiler** — type checking

---

## 📁 Project Structure

```
CONTENTDO/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout, global styles, metrics
│   │   ├── page.tsx                 # Home page (single-page site)
│   │   ├── metadata.ts              # SEO metadata (title, OG, Twitter)
│   │   ├── robots.ts                # Dynamic robots.txt
│   │   ├── sitemap.ts               # Dynamic sitemap.xml
│   │   ├── ClientGlobalStyles.tsx   # Global styles (client component)
│   │   ├── StyledComponentsRegistry.tsx  # SSR registry for styled-components
│   │   └── OverlayScrollbarsProvider.tsx # OverlayScrollbars initialization
│   │
│   ├── components/                   # React components
│   │   ├── Header.tsx               # Header with background video
│   │   ├── Navbar.tsx               # Navigation with mobile menu
│   │   ├── Hero.tsx                 # Hero section with CTA
│   │   ├── Portfolio.tsx            # Video projects carousel (Swiper)
│   │   ├── AboutUs.tsx              # About the company
│   │   ├── PriceInfo.tsx            # Pricing information
│   │   ├── Price.tsx                # Animated price
│   │   ├── ContactUs.tsx            # Contacts block
│   │   ├── ContactForm.tsx          # Quick contact form
│   │   ├── OrderForm.tsx            # Project order form with file upload
│   │   ├── Footer.tsx               # Footer
│   │   ├── Modal.tsx                # Modal window
│   │   ├── SocialIcons.tsx          # Social icons (VK, Instagram, YouTube)
│   │   ├── ContactIcons.tsx         # Contact icons (Email, WhatsApp, Telegram)
│   │   ├── SuccessMessage.tsx       # Submission success message
│   │   ├── ErrorMessage.tsx         # Error message
│   │   ├── LoadingSpinner.tsx       # Loading spinner
│   │   │
│   │   ├── Analytics/
│   │   │   └── YandexMetrika.tsx    # Yandex Metrika counter
│   │   │
│   │   └── StructuredData/          # JSON-LD schemas for SEO
│   │       ├── OrganizationSchema.tsx  # Schema.org Organization
│   │       └── ServiceSchema.tsx       # Schema.org Service (×3)
│   │
│   ├── lib/
│   │   └── firebase.ts              # Firebase configuration and init
│   │
│   ├── hooks/
│   │   └── useModal.ts              # Modal state hook
│   │
│   ├── assets/                       # SVG icons and logos
│   │   ├── logo.svg
│   │   ├── VK.svg, Insta.svg, YT.svg, TikTok.svg
│   │   ├── Email.svg, Whatsapp.svg, Telegram.svg
│   │   └── AttachFileIcon.svg
│   │
│   ├── constants/
│   │   └── index.ts                 # Constants (media queries, styles)
│   │
│   └── types/
│       └── svg.d.ts                 # TypeScript types for SVG imports
│
├── public/                           # Static files
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── og-logo.png                  # Open Graph image
│   └── manifest.json                # PWA manifest
│
├── next.config.ts                    # Next.js config (styled-components, SVGR)
├── tsconfig.json                     # TypeScript config
├── netlify.toml                      # Netlify deployment config
├── .env.example                      # Example env variables
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Firebase project (for Storage and Functions)
- Netlify account (for forms and deployment)

### Setup

1. **Clone the repo:**

   ```bash
   git clone <repository-url>
   cd CONTENTDO
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create `.env.local` at the project root:

   ```bash
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the dev server:**

   ```bash
   npm run dev
   ```

   Site opens at `http://localhost:3000`

---

## 📦 Available Scripts

```bash
# Development (dev server with HMR)
npm run dev

# Production build
npm run build

# Run production server locally
npm start

# Lint
npm run lint

# TypeScript type check
npm run type-check
```

---

## 🎯 Core Features

### 1. **Interactive Portfolio**

- Swiper-based project carousel
- Custom video players with overlays
- Auto-pause when switching slides
- Responsive layout for mobile

### 2. **Contact Forms**

- **ContactForm** — quick form (name + phone)
- **OrderForm** — extended form (name + email + phone + description + files)
- Netlify Forms integration
- Honeypot spam protection
- File uploads up to 10 GB via Firebase Storage
- File validation via Firebase Cloud Function
- All inputs sanitized via DOMPurify
- Success/Error states with redirect

### 3. **Firebase Storage**

- File uploads with progress bar
- Public URL generation for attachments
- Server-side file type validation
- File size limit (10 GB)

### 4. **Analytics**

- Yandex Metrika (ID: 104808419)

  - SSR mode
  - Webvisor
  - Click map
  - E-commerce tracking
  - Accurate bounce rate
  - Link tracking

- Noscript fallback (pixel tracking)

---

## 🔍 SEO Optimization

### Implemented techniques:

#### **Metadata**

- ✅ Centralized `metadata.ts` with title, description, keywords
- ✅ Open Graph tags (VK, Telegram, WhatsApp)
- ✅ Twitter Card
- ✅ Canonical URLs
- ✅ Language tags (`lang="ru"`)
- ✅ Yandex Webmaster verification (meta tag)

#### **Structured Data (JSON-LD)**

- ✅ **Organization schema** — company info, social links, location (Moscow)
- ✅ **Service schemas (×3)** — video production, stunt performers/stunts, post-production
- ✅ **VideoObject schemas (×4)** — each portfolio video with `thumbnailUrl`, `contentUrl`, `description`

#### **Technical SEO**

- ✅ Dynamic `robots.txt` with Yandex-specific directives
- ✅ Dynamic `sitemap.xml`
- ✅ PWA manifest (`manifest.json`)
- ✅ Favicons (ico, apple-touch-icon, android-chrome)
- ✅ Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ H1 with aria-label for SEO (“Full-cycle video production in Moscow: stunt performers, stunt choreography”)

#### **Accessibility (a11y)**

- ✅ Video `title` and `aria-label` attributes
- ✅ `aria-label` on navigation and links
- ✅ Keyboard navigation
- ✅ Screen reader support

#### **Performance**

- ✅ Font display swap (Inter, Manrope, Jura)
- ✅ Video preload optimization
- ✅ Lazy loading with Swiper
- ✅ Cloudinary CDN for video

---

## 🌐 Deployment on Netlify

### Configuration (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

```bash
# Automatic deploy on push to main (if Git is connected)
git push origin main

# Or via Netlify CLI
netlify deploy --prod
```

---

## 🎨 Design System

### Color Palette (CSS Variables):

```css
--color-body-primary: #ffffff; /* Primary text */
--color-body-secondary: #9ca3af; /* Secondary text */
--color-details-primary: #d51313; /* Accent red */
--color-details-secondary: #e2ff00; /* Accent yellow */
--color-bg: #000000; /* Background */
```

### Fonts:

- **Jura** — headings & branding (`--font-jura`)
- **Inter** — body text (`--font-inter`)
- **Manrope** — alternate text (`--font-manrope`)

### Breakpoints (media queries):

```typescript
export const QUERIES = {
  mobile: "(max-width: 768px)",
  tabletAndDown: "(max-width: 1024px)",
  largeTabletAndDown: "(max-width: 1200px)",
};
```

---

## 🔒 Security

- ✅ **Honeypot protection** on forms (Netlify Forms)
- ✅ **DOMPurify sanitization** of all user inputs
- ✅ **Firebase Security Rules** for Storage
- ✅ **CORS settings** in Firebase Functions
- ✅ **Server-side file validation** (Cloud Function `validateFile`)
- ✅ **Type safety** via TypeScript
- ✅ **CSP-ready** (Content Security Policy)

---

## 📊 Analytics & Monitoring

### Yandex Metrika

- **Counter ID:** 104808419
- **Goals:** Configure in the Yandex Metrika UI
- **Webvisor:** Enabled (session recording)
- **Ecommerce:** dataLayer integration set up

### Yandex Webmaster

- **Verification code:** 9be8141f525d2eb (meta tag)
- **Sitemap:** `https://contentdo.ru/sitemap.xml`
- **Robots:** `https://contentdo.ru/robots.txt`

### Recommendations:

1. Configure Yandex Metrika goals:

   - Submission of the “Contact” form
   - Submission of the “Order Project” form
   - Click on the “ORDER PROJECT” button
   - Clicks on social links
   - Video views in the portfolio

2. Connect Google Analytics 4 (optional, for international audience)

---

## 🧪 Testing

### Type checking:

```bash
npm run type-check
# or
npx tsc --noEmit
```

### Linting:

```bash
npm run lint
```

### Manual testing checklist:

- [ ] Forms: successful submit, validation, honeypot
- [ ] File upload: progress bar, errors, Firebase URLs
- [ ] Video: playback, pause, overlays
- [ ] Navigation: anchor links, mobile menu
- [ ] Modals: open, close, overlay
- [ ] Responsive: mobile, tablet, desktop
- [ ] SEO: structured data validation (Yandex/Google tools)
- [ ] Analytics: Yandex Metrika events firing

---

## 📞 Contacts

**CONTENTDO**
📍 Moscow, Russia
🌐 [https://contentdo.ru](https://contentdo.ru)
📧 Email: [via the website form]
📱 WhatsApp / Telegram: [via the website form]

**Social media:**

- [VKontakte](https://m.vk.com/contentdo)
- [Instagram](https://www.instagram.com/content_do)
- [YouTube](https://www.youtube.com/@SkillQuant)

---

## 📄 License

© 2025 CONTENTDO — All rights reserved
