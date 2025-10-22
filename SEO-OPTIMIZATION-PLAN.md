# SEO Optimization Plan - CONTENTDO

## Overview
This document tracks the SEO optimization implementation for the CONTENTDO website.

**Target Market**: 🇷🇺 **RUSSIAN MARKET** - Yandex is the primary search engine priority

---

## 1. Metadata & Head Tags

### 1.1 Enhanced Page Metadata
- [x] **Priority: HIGH** ✅ **COMPLETED**
- [x] Add comprehensive meta descriptions (150-160 characters)
- [x] Add proper title tags for each page/section
- [x] Add keywords meta tag (though less important now)
- [x] Add author and copyright meta tags
- [x] Add canonical URLs
- [x] Add language and locale meta tags

**Files created/updated:**
- `src/app/metadata.ts` ✅ (NEW - Centralized metadata config)
- `src/app/layout.tsx` ✅ (UPDATED - Imports metadata)

---

### 1.2 Open Graph Tags
- [x] **Priority: HIGH** ✅ **COMPLETED**
- [x] Add og:title
- [x] Add og:description
- [x] Add og:image (1200x630px recommended)
- [x] Add og:url
- [x] Add og:type
- [x] Add og:site_name
- [x] Add og:locale

**Files to update:**
- `src/app/layout.tsx`

---

### 1.3 Twitter Card Tags
- [x] **Priority: MEDIUM** ✅ **COMPLETED**
- [x] Add twitter:card
- [x] Add twitter:title
- [x] Add twitter:description
- [x] Add twitter:image
- [ ] Add twitter:site (if you have a Twitter handle)

**Files to update:**
- `src/app/layout.tsx`

---

## 2. Structured Data (Schema.org JSON-LD)

### 2.1 Organization Schema
- [ ] **Priority: HIGH**
- [ ] Add Organization schema with company info
- [ ] Add logo, address, contact info
- [ ] Add social media profiles

**Create new file:**
- `src/components/StructuredData/OrganizationSchema.tsx`

---

### 2.2 Video Object Schema
- [ ] **Priority: HIGH**
- [ ] Add VideoObject schema for portfolio items
- [ ] Include name, description, thumbnailUrl, uploadDate
- [ ] Add duration and contentUrl

**Files to update:**
- `src/components/Portfolio.tsx`

---

### 2.3 Service Schema
- [ ] **Priority: MEDIUM**
- [ ] Add Service schema for video production services
- [ ] Include serviceType, provider, areaServed

**Create new file:**
- `src/components/StructuredData/ServiceSchema.tsx`

---

### 2.4 Breadcrumb Schema
- [ ] **Priority: LOW**
- [ ] Add BreadcrumbList schema

**Create new file:**
- `src/components/StructuredData/BreadcrumbSchema.tsx`

---

## 3. Technical SEO

### 3.1 Sitemap
- [x] **Priority: HIGH** ✅ **COMPLETED**
- [x] Generate sitemap.xml
- [x] Include all important pages
- [x] Add lastmod, changefreq, priority

**Create new file:**
- `src/app/sitemap.ts`

---

### 3.2 Robots.txt (Dynamic)
- [x] **Priority: HIGH** ✅ **CREATED**
- [x] Create dynamic `robots.ts` using Next.js MetadataRoute
- [x] Allow/disallow appropriate paths
- [x] Add sitemap reference
- [x] Add Yandex-specific directives
- [x] Use environment variables for flexible deployment
- [x] Add host directive for Yandex

**File created:**
- `src/app/robots.ts` ✅ (Dynamic generation with TypeScript)

---

### 3.3 Favicon & Icons
- [x] **Priority: MEDIUM** ✅ **COMPLETED**
- [x] Add favicon.ico (32x32, 16x16)
- [x] Add apple-touch-icon (180x180)
- [x] Add android-chrome icons (192x192, 512x512)
- [x] Add manifest.json for PWA

**Files to create:**
- `public/favicon.ico`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/manifest.json`

---

## 4. Performance Optimization

### 4.1 Image Optimization
- [ ] **Priority: HIGH**
- [ ] Convert to Next.js Image component
- [ ] Add proper alt text to all images
- [ ] Implement lazy loading
- [ ] Use WebP format where possible
- [ ] Add image dimensions (width/height)

**Files to update:**
- All components using images
- `src/components/Portfolio.tsx` (video posters)

---

### 4.2 Code Splitting & Lazy Loading
- [ ] **Priority: MEDIUM**
- [ ] Implement dynamic imports for heavy components
- [ ] Code split by route
- [ ] Lazy load below-the-fold content

**Files to consider:**
- `src/components/Portfolio.tsx` (Swiper)
- `src/components/Modal.tsx`

---

### 4.3 Font Optimization
- [ ] **Priority: MEDIUM**
- [ ] Already using next/font ✅
- [ ] Verify font-display: swap
- [ ] Preload critical fonts

**Files to verify:**
- `src/app/layout.tsx`

---

## 5. Content SEO

### 5.1 Semantic HTML
- [ ] **Priority: HIGH**
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Add semantic HTML5 tags (already using some ✅)
- [ ] Ensure only one h1 per page
- [ ] Add descriptive link text

**Files to review:**
- `src/components/Hero.tsx`
- `src/components/AboutUs.tsx`
- `src/components/PriceInfo.tsx`

---

### 5.2 Internal Linking
- [ ] **Priority: MEDIUM**
- [ ] Add internal links between sections
- [ ] Create a logical site structure
- [ ] Use descriptive anchor text

**Files to update:**
- All page components

---

### 5.3 Content Quality
- [ ] **Priority: HIGH**
- [ ] Ensure unique, valuable content
- [ ] Add more descriptive text where needed
- [ ] Include target keywords naturally
- [ ] Add video descriptions

**Files to review:**
- `src/components/AboutUs.tsx`
- `src/components/Portfolio.tsx`

---

## 6. Mobile & UX Optimization

### 6.1 Mobile Responsiveness
- [ ] **Priority: HIGH**
- [ ] Test on various devices (already responsive ✅)
- [ ] Verify touch targets are 48x48px minimum
- [ ] Test form usability on mobile

**Files to verify:**
- All components

---

### 6.2 Core Web Vitals
- [ ] **Priority: HIGH**
- [ ] Optimize LCP (Largest Contentful Paint) < 2.5s
- [ ] Optimize FID (First Input Delay) < 100ms
- [ ] Optimize CLS (Cumulative Layout Shift) < 0.1

**Tools to use:**
- Lighthouse
- PageSpeed Insights
- Web Vitals extension

---

## 7. Russian Market Specific (Yandex) 🇷🇺

### 7.1 Yandex.Turbo Pages
- [ ] **Priority: MEDIUM**
- [ ] Create Yandex.Turbo RSS feed for fast mobile pages
- [ ] Optimize for mobile-first indexing

**Create new file:**
- `public/turbo.xml`

---

### 7.2 Yandex.Dzen Integration
- [ ] **Priority: LOW**
- [ ] Consider creating Yandex.Dzen channel for content distribution
- [ ] Cross-link with main site

---

### 7.3 Yandex.Direct (Paid Ads)
- [ ] **Priority: LOW** - For future consideration
- [ ] Set up Yandex.Direct campaigns
- [ ] Add conversion tracking

---

### 7.4 Regional Targeting
- [ ] **Priority: HIGH**
- [ ] Specify region in Yandex Webmaster (Russia)
- [ ] Use proper Russian language and locale
- [ ] Consider .ru domain if not already using

---

## 8. Local SEO (if applicable)

### 8.1 Local Business Schema
- [ ] **Priority: MEDIUM** (if you have physical location)
- [ ] Add LocalBusiness schema
- [ ] Include address, phone, hours
- [ ] Add geo coordinates

---

### 8.2 Yandex.Maps
- [ ] **Priority: MEDIUM** (if applicable)
- [ ] Add business to Yandex.Maps
- [ ] Add consistent NAP (Name, Address, Phone)

---

### 8.3 Google My Business
- [ ] **Priority: LOW** (secondary for Russian market)
- [ ] Claim/optimize Google Business Profile
- [ ] Add consistent NAP

---

## 8. Analytics & Tracking

### 8.1 Yandex Metrica 🇷🇺 (PRIMARY)
- [ ] **Priority: HIGH** - Russian market primary analytics
- [ ] Install Yandex Metrica
- [ ] Set up goals and conversions
- [ ] Track form submissions
- [ ] Set up Session Replay
- [ ] Configure Click map
- [ ] Set up Webvisor

**Create new file:**
- `src/lib/yandex-metrica.ts`

---

### 8.2 Yandex Webmaster 🇷🇺 (PRIMARY)
- [ ] **Priority: HIGH** - Russian market primary search console
- [ ] Verify site ownership in Yandex Webmaster
- [ ] Submit sitemap
- [ ] Monitor indexing status
- [ ] Check for crawl errors
- [ ] Set up region targeting (Russia)
- [ ] Add site mirror (www vs non-www)

---

### 8.3 Google Analytics 4
- [ ] **Priority: MEDIUM** - Secondary analytics
- [ ] Install GA4
- [ ] Set up conversion tracking
- [ ] Track form submissions

**Create new file:**
- `src/lib/analytics.ts`

---

### 8.4 Google Search Console
- [ ] **Priority: MEDIUM** - Secondary search console
- [ ] Verify site ownership
- [ ] Submit sitemap
- [ ] Monitor indexing status

---

## 9. Security & Trust

### 9.1 HTTPS
- [ ] **Priority: HIGH**
- [ ] Ensure SSL certificate is active
- [ ] Force HTTPS redirects

---

### 9.2 Security Headers
- [ ] **Priority: MEDIUM**
- [ ] Add Content-Security-Policy
- [ ] Add X-Frame-Options
- [ ] Add X-Content-Type-Options

**Files to update:**
- `next.config.js`

---

## 10. Additional Optimizations

### 10.1 Loading States
- [ ] **Priority: LOW**
- [ ] Already have LoadingSpinner ✅
- [ ] Add skeleton screens for better perceived performance

---

### 10.2 Error Handling
- [ ] **Priority: MEDIUM**
- [ ] Create custom 404 page
- [ ] Create custom error page
- [ ] Add proper error messages

**Create new files:**
- `src/app/not-found.tsx`
- `src/app/error.tsx`

---

### 10.3 Accessibility (SEO benefit)
- [ ] **Priority: HIGH**
- [ ] Add proper ARIA labels (some already present ✅)
- [ ] Ensure keyboard navigation works
- [ ] Test with screen readers
- [ ] Add skip-to-content link

**Files to review:**
- All interactive components

---

## Implementation Priority

### Phase 1 (Week 1) - Critical SEO 🚨
1. ✅ Dynamic robots.ts (3.2) - **DONE**
2. ✅ Enhanced metadata (1.1) - **DONE**
3. **Yandex Metrica setup** (8.1) - PRIMARY - NEXT
4. **Yandex Webmaster verification** (8.2) - PRIMARY
5. Open Graph & Twitter cards (1.2, 1.3)
6. Sitemap (3.1)
7. Structured data - Organization (2.1)
8. Image optimization (4.1)

### Phase 2 (Week 2) - Performance & Content
1. Video schema (2.2)
2. Core Web Vitals optimization (6.2)
3. Regional targeting in Yandex (7.4)
4. Error pages (10.2)
5. Content quality review (5.3)
6. Google Analytics (secondary) (8.3)

### Phase 3 (Week 3) - Advanced SEO
1. Service schema (2.3)
2. Security headers (9.2)
3. Code splitting (4.2)
4. Internal linking (5.2)
5. Yandex.Turbo pages (7.1)

### Phase 4 (Ongoing) - Monitoring & Refinement
1. Monitor Search Console
2. Track Core Web Vitals
3. A/B test meta descriptions
4. Update content regularly
5. Build backlinks

---

## Success Metrics

### 🇷🇺 Primary (Yandex)
- [ ] **Yandex Webmaster** indexed pages > 0
- [ ] Yandex ICS (Index Citation Score) improving
- [ ] Ranking in Yandex for target keywords
- [ ] Yandex Metrica sessions increasing monthly
- [ ] Form conversion rate > 2%

### 🌍 Secondary (Global)
- [ ] Google Search Console indexed pages > 0
- [ ] Core Web Vitals all in "Good" range
- [ ] Lighthouse SEO score > 95
- [ ] Page load time < 3 seconds
- [ ] Mobile usability score 100%
- [ ] Structured data validation passes
- [ ] Organic traffic increase (track monthly)

---

## Tools & Resources

### 🇷🇺 Primary (Russian Market)
- **Analytics**: Yandex Metrica (primary), Yandex Webmaster
- **SEO Analysis**: Yandex Webmaster Tools, MegaIndex, Pixel Tools
- **Rank Tracking**: TopVisor, Just-Magic
- **Technical SEO**: Yandex.Webmaster, Screaming Frog

### 🌍 Secondary (Global)
- **SEO Analysis**: Lighthouse, SEMrush, Ahrefs
- **Performance**: PageSpeed Insights, WebPageTest, GTmetrix
- **Schema Validation**: Google Rich Results Test, Schema.org validator
- **Mobile Testing**: Google Mobile-Friendly Test
- **Analytics**: GA4 (secondary), Google Search Console (secondary)

---

## Notes

- Site is primarily in Russian - ensure proper lang="ru" attribute ✅
- Video production focus - prioritize video schema markup
- Forms are critical conversion points - ensure they're trackable
- Consider creating a blog for content marketing

---

**Last Updated**: January 19, 2025
**Next Review**: February 19, 2025
