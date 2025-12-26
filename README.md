# Town & Country Title Guaranty Website

A fully SEO-optimized website for Town & Country Title Guaranty, a Florida-based title insurance company serving all 67 Florida counties since 1976.

## Project Overview

This website was built following modern SEO best practices as demonstrated in Greg Isenberg's video tutorials on using Claude Code for SEO optimization.

### Key Features

- **60+ SEO-Optimized Pages** including:
  - Homepage with hero section and services
  - 8 detailed service pages
  - 67 Florida county location pages
  - 5 blog articles
  - FAQ with schema markup
  - Glossary of terms
  - Legal pages (Privacy, Terms)

- **Technical SEO Implementation**:
  - XML Sitemap (auto-generated)
  - robots.txt with AI crawler rules
  - llms.txt for AI search optimization
  - Schema.org JSON-LD markup
  - Open Graph and Twitter meta tags
  - Canonical URLs
  - Mobile-first responsive design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
town-country-title/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── glossary/
│   │   ├── locations/
│   │   │   └── [slug]/         # Dynamic county pages
│   │   ├── privacy-policy/
│   │   ├── quote/
│   │   ├── services/
│   │   │   └── [slug]/         # Dynamic service pages
│   │   ├── terms-of-service/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/             # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SchemaMarkup.tsx
│   ├── data/                   # Data files
│   │   ├── blog.ts
│   │   ├── company.ts
│   │   ├── counties.ts
│   │   └── services.ts
│   └── lib/                    # Utilities
├── public/
│   ├── llms.txt               # AI crawler guide
│   └── llms-full.txt          # Extended AI information
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## SEO Features

### Page Count: 87+ Pages

| Category | Count |
|----------|-------|
| Main Pages | 10 |
| Service Pages | 8 |
| Location Pages | 67 |
| Blog Posts | 5 |
| **Total** | **87+** |

### Schema Markup

- LocalBusiness (company info)
- FAQPage (FAQ content)
- Article (blog posts)
- BreadcrumbList (navigation)
- WebSite (site search)

### AI Optimization

- `llms.txt` - Quick reference for AI crawlers
- `llms-full.txt` - Detailed company information
- robots.txt allows major AI crawlers (GPTBot, Claude, Perplexity)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

Build the static export:

```bash
npm run build
```

The `out` directory contains the static files.

## Customization

### Company Information

Edit `src/data/company.ts` to update:
- Company name and contact info
- Address and hours
- SEO metadata

### Services

Edit `src/data/services.ts` to modify:
- Service offerings
- Features and benefits
- FAQs per service

### Counties

Edit `src/data/counties.ts` to customize:
- County descriptions
- Major cities
- Local landmarks

## License

Private - All rights reserved.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- SEO strategy inspired by [Greg Isenberg's tutorials](https://www.youtube.com/@gregisenberg)
