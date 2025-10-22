# Yandex Setup Guide 🇷🇺

Quick start guide for setting up Yandex services for the Russian market.

---

## 1. Yandex Metrica (Analytics) - PRIMARY

### Step 1: Create Account
1. Go to https://metrica.yandex.ru/
2. Sign up or log in with Yandex account
3. Click "Add tag" or "Добавить счётчик"

### Step 2: Get Tracking Code
1. Enter site name and URL
2. Get your Tag ID (e.g., 12345678)
3. Copy the tracking code

### Step 3: Install in Next.js
```typescript
// src/lib/yandex-metrica.ts
export const YANDEX_METRICA_ID = 'YOUR_TAG_ID';

export const initYandexMetrica = () => {
  if (typeof window !== 'undefined') {
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],
      k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
    ym(YANDEX_METRICA_ID, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  }
};
```

### Step 4: Add to Layout
```typescript
// src/app/layout.tsx
import { initYandexMetrica } from '@/lib/yandex-metrica';
import { useEffect } from 'react';

// In your component:
useEffect(() => {
  initYandexMetrica();
}, []);
```

### Step 5: Configure Goals
1. In Yandex Metrica dashboard, go to "Goals"
2. Create goals for:
   - Form submissions (contact form, order form)
   - Video plays
   - Button clicks

---

## 2. Yandex Webmaster (Search Console) - PRIMARY

### Step 1: Verify Site Ownership
1. Go to https://webmaster.yandex.ru/
2. Click "Add site" or "Добавить сайт"
3. Enter your domain

### Step 2: Verification Methods
Choose one:

**Option A: HTML File** (Recommended)
1. Download verification file
2. Upload to `/public/` folder
3. Click "Verify"

**Option B: Meta Tag**
1. Copy meta tag
2. Add to `layout.tsx` in `<head>`
3. Click "Verify"

**Option C: DNS Record**
1. Add TXT record to domain DNS
2. Wait for propagation
3. Click "Verify"

### Step 3: Submit Sitemap
1. Once verified, go to "Indexing" → "Sitemap files"
2. Add: `https://yourdomain.ru/sitemap.xml`

### Step 4: Set Regional Targeting
1. Go to "Settings" → "Regional settings"
2. Select "Russia" as primary region
3. Save changes

### Step 5: Configure Site Settings
- Set main mirror (www vs non-www)
- Enable HTTPS preference
- Check mobile version compatibility

---

## 3. Yandex.Turbo Pages (Optional - Phase 3)

### What is it?
Fast-loading mobile pages for Yandex search results.

### Setup
1. Create RSS feed at `/public/turbo.xml`
2. Add in Yandex Webmaster: "Turbo pages" → "Add RSS feed"
3. Include your most important pages

Example structure:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru" 
     xmlns:media="http://search.yahoo.com/mrss/" 
     version="2.0">
  <channel>
    <title>CONTENTDO</title>
    <link>https://yourdomain.ru</link>
    <description>Видеопродакшн</description>
    
    <item turbo="true">
      <title>О нас</title>
      <link>https://yourdomain.ru#AboutUs</link>
      <turbo:content>
        <![CDATA[
          <header>
            <h1>О нас</h1>
          </header>
          <!-- Your content -->
        ]]>
      </turbo:content>
    </item>
  </channel>
</rss>
```

---

## 4. Key Differences: Yandex vs Google

### Ranking Factors
| Factor | Yandex | Google |
|--------|--------|--------|
| **User Behavior** | Very important | Important |
| **Domain Age** | More important | Less important |
| **Regional Factors** | Critical | Important |
| **Links Quality** | Quality over quantity | Quality + quantity |
| **Content Freshness** | Very important | Important |

### Yandex Specific Tips
1. **Behavioral Factors Matter Most**
   - Low bounce rate is critical
   - Time on site affects rankings
   - Click-through rate in search results

2. **Regional Relevance**
   - Set region in Webmaster
   - Use .ru domain if possible
   - Russian language content

3. **Links**
   - Quality Russian sites > international links
   - Natural link growth (slow is better)
   - Avoid link exchanges

4. **Content**
   - Update regularly
   - Long-form content (1000+ words)
   - Structured text with headings

---

## 5. Tracking Form Conversions

### Yandex Metrica Goal Setup

**For Contact Form:**
```typescript
// When form submits successfully
ym(YANDEX_METRICA_ID, 'reachGoal', 'contact-form-submit');
```

**For Order Form:**
```typescript
// When order form submits successfully
ym(YANDEX_METRICA_ID, 'reachGoal', 'order-form-submit');
```

**In your form component:**
```typescript
// src/components/ContactForm.tsx
if (response.ok) {
  // Track conversion
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YANDEX_METRICA_ID, 'reachGoal', 'contact-form-submit');
  }
  router.push("/?success=contact");
}
```

---

## 6. Yandex.Maps (if you have physical location)

1. Go to https://business.yandex.ru/
2. Add your business
3. Fill in all information:
   - Address
   - Phone
   - Working hours
   - Photos
   - Services
4. Verify ownership
5. Add link to your website

---

## 7. Common Yandex SEO Mistakes to Avoid

❌ **Don't:**
- Buy links from link farms
- Copy content from other sites
- Use hidden text or cloaking
- Stuff keywords
- Redirect users based on user-agent
- Create too many similar pages

✅ **Do:**
- Focus on user experience
- Create unique, valuable content
- Build natural links gradually
- Update content regularly
- Optimize for mobile
- Use proper Russian grammar

---

## 8. Useful Yandex Tools

- **Yandex.Wordstat**: https://wordstat.yandex.ru/ - Keyword research
- **Yandex.XML**: API for search results
- **Yandex.Metrica**: https://metrica.yandex.ru/ - Analytics
- **Yandex.Webmaster**: https://webmaster.yandex.ru/ - Search Console
- **Yandex.Direct**: https://direct.yandex.ru/ - Paid ads

---

## 9. Quick Implementation Checklist

- [ ] Create Yandex account
- [ ] Set up Yandex Metrica
- [ ] Add Metrica tracking code to site
- [ ] Configure Webvisor and click maps
- [ ] Set up conversion goals
- [ ] Verify site in Yandex Webmaster
- [ ] Submit sitemap to Yandex
- [ ] Set regional targeting to Russia
- [ ] Check mobile compatibility
- [ ] Monitor indexing status

---

## 10. Support & Resources

- **Yandex Help**: https://yandex.ru/support/
- **Webmaster Help**: https://yandex.ru/support/webmaster/
- **Metrica Help**: https://yandex.ru/support/metrica/
- **SEO Blog**: https://yandex.ru/blog/webmaster-en

---

**Next Steps:**
1. ✅ robots.txt already created
2. Set up Yandex Metrica (30 min)
3. Verify in Yandex Webmaster (15 min)
4. Configure goals and tracking (20 min)
5. Submit sitemap (5 min)

**Total time**: ~70 minutes to get fully set up!
