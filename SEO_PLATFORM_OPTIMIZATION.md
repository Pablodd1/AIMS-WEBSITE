# AIMS SEO & AI Platform Optimization Guide

## Overview
This document outlines the comprehensive SEO strategy implemented for AIMS website, optimized for Google, AI platforms (ChatGPT, Gemini, Perplexity), Reddit, and social media.

---

## 1. Google SEO Optimization

### Implemented Features

#### Schema Markup (JSON-LD)
- **Organization Schema**: Company info, contact, social profiles
- **SoftwareApplication Schema**: App details, features, ratings
- **FAQ Schema**: 8 comprehensive FAQs for featured snippets
- **HowTo Schema**: Step-by-step usage guide
- **BreadcrumbList Schema**: Navigation hierarchy
- **WebSite Schema**: Search action enabled

#### Core Web Vitals Optimization
- Image optimization with WebP/AVIF formats
- Lazy loading for below-fold content
- Font display swap
- Preconnect to external domains
- Aggressive caching headers
- Code splitting and bundle optimization

#### On-Page SEO
- Semantic HTML5 structure
- Proper heading hierarchy (H1 → H6)
- Meta tags with localized content
- Canonical URLs with hreflang
- Open Graph + Twitter Cards
- Structured data for rich results

---

## 2. AI Platform Optimization

### ChatGPT / GPTBot
```
User-agent: GPTBot
Allow: /
Disallow: /api/
```

### Google Gemini / Google-Extended
```
User-agent: Google-Extended
Allow: /
```

### Claude (Anthropic)
```
User-agent: ClaudeBot
Allow: /
Disallow: /api/
```

### Perplexity
```
User-agent: PerplexityBot
Allow: /
Disallow: /api/
```

### Optimization Strategies

1. **FAQ Schema**: AI platforms cite this for answering questions
2. **HowTo Schema**: Step-by-step guides get featured
3. **Entity Definitions**: Clear brand/product entity definitions
4. **Structured Data**: JSON-LD for easy parsing
5. **Conversational Content**: Natural language patterns
6. **Author Authority**: E-E-A-T signals included

---

## 3. Reddit SEO Optimization

### Reddit Bot Support
```
User-agent: *
Allow: /
```

### Content Strategy for Reddit
- FAQ content formatted for Reddit AMAs
- Clear, actionable information
- Expert-driven content (E-E-A-T)
- Community-focused messaging
- Shareable statistics and metrics
- Infographic-ready data

### Target Subreddits
- r/healthcare
- r/medicine
- r/medicalschool
- r/medical
- r/HealthIT
- r/startups
- r/artificial

---

## 4. Social Media Optimization

### Open Graph Tags
- og:type: website
- og:locale: en_US / es_ES
- og:url: Canonical + alternate languages
- og:image: 1200x630 optimized images
- og:video: Demo video support

### Twitter Cards
- summary_large_image
- App store deep links
- Player card for videos

### Image Specifications
| Platform | Size | Format |
|----------|------|--------|
| OG Image | 1200x630 | JPG/WebP |
| Twitter | 1200x600 | JPG |
| LinkedIn | 1200x627 | JPG |
| Favicon | 32x32 | ICO/PNG |

---

## 5. Structured Data Summary

### Schema Types Implemented
1. Organization
2. SoftwareApplication
3. FAQPage
4. HowTo
5. WebSite
6. BreadcrumbList
7. AggregateRating
8. Review
9. ContactPoint
10. ImageObject

### JSON-LD Locations
- Organization: layout.js
- SoftwareApplication: layout.js
- FAQ: layout.js
- HowTo: layout.js
- WebSite: layout.js
- Breadcrumb: layout.js

---

## 6. Sitemap Configuration

### URLs Indexed
- Homepage (en/es)
- Get Started
- Technology
- About Us
- Articles
- Customer Care
- Policies
- Terms & Conditions
- Blog Articles (dynamic)

### Priority Levels
| Page | Priority |
|------|----------|
| Homepage | 1.0 |
| Get Started | 0.9 |
| Technology | 0.9 |
| About Us | 0.8 |
| Articles | 0.8 |
| Blog Posts | 0.7 |
| Legal Pages | 0.5 |

---

## 7. Security Headers

All security headers configured in next.config.mjs:
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Cross-Origin policies

---

## 8. Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| TTFB | < 600ms |
| FCP | < 1.8s |

---

## 9. Content Guidelines

### For AI Platform Citation
1. Use FAQ schema for common questions
2. Include statistics with sources
3. Expert quotes and testimonials
4. Clear, concise explanations
5. Actionable how-to content

### For Reddit Engagement
1. Share real-world use cases
2. Before/after comparisons
3. ROI calculations
4. Provider testimonials
5. Compliance certifications

---

## 10. Monitoring & Analytics

### Recommended Tools
- Google Search Console
- Google Analytics 4
- Bing Webmaster Tools
- Schema Markup Validator
- Lighthouse CI
- PageSpeed Insights

### Key Metrics to Track
- Impressions & Clicks (Search Console)
- CTR by query
- Featured snippet positions
- AI platform referrals
- Core Web Vitals pass rate
- Schema validation errors

---

## Deployment Checklist

- [ ] Test all schema markup with validator
- [ ] Verify hreflang tags
- [ ] Check canonical URLs
- [ ] Validate Open Graph images
- [ ] Test Twitter Cards
- [ ] Submit sitemap to Search Console
- [ ] Test mobile responsiveness
- [ ] Verify Core Web Vitals
- [ ] Check redirect chains
- [ ] Test language switcher

---

## File Locations

| File | Purpose |
|------|---------|
| app/[LANG]/layout.js | Main SEO metadata & schemas |
| app/[LANG]/globals.css | Design system & animations |
| next.config.mjs | Headers, redirects, optimization |
| public/robots.txt | Bot access rules |
| app/sitemap.js | Dynamic sitemap generation |
| components/NavigationBar.jsx | Header with SEO links |
| components/Footer.jsx | Footer with links |

---

*Last Updated: February 2026*
*Version: 2.0*
