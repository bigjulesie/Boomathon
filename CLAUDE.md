# Boomathon

Next.js 16 App Router + Supabase + Tailwind CSS v4 + Framer Motion + shadcn/ui.
Hosted on Netlify. Design assets in `src/assets/boomathon/`.

## Navigation & Section IDs

- **How It Works** → `#how-it-works` (EpicQuest section)
- **The Evidence** → `#the-evidence` (CoreSkills section)
- **Formats** → `#formats` (Stats section)
- **Book a Call** → `#book-a-call` (CTA section)
- **FAQ** → `#faq`

## Stack & Versions

- **Framework:** Next.js 16 (App Router, React 19)
- **Auth & DB:** Supabase (`@supabase/supabase-js`, `@supabase/ssr`)
- **Styling:** Tailwind CSS v4 (new `@theme inline` syntax in `globals.css`, no `tailwind.config`)
- **Animations:** Framer Motion 12
- **Components:** shadcn/ui + Radix UI primitives + CVA
- **Icons:** Lucide React
- **Fonts:** Oxanium (headings), Inter (body), JetBrains Mono (mono), Racing Sans One (display)
- **Deployment:** Netlify (`@netlify/plugin-nextjs`)

## Architecture

```
src/
├── app/
│   ├── (marketing)/     # Public pages: /, /privacy, /terms
│   ├── (platform)/      # Auth'd pages: /dashboard, /leaderboard, /team (stubs)
│   └── api/webhooks/    # Game engine webhook receivers
├── components/
│   ├── marketing/       # Hero, Navbar, EpicQuest, CoreSkills, Stats, Benchmark, CTA, FAQ, Footer
│   ├── platform/        # (future auth'd components)
│   └── ui/              # (shadcn components)
├── lib/
│   ├── utils.ts         # cn() helper (clsx + tailwind-merge)
│   └── supabase/        # (future Supabase client)
└── assets/boomathon/    # Branding SVGs
public/images/           # All runtime images (SVG, PNG, JPG)
```

## Conventions

### Imports & Exports

- **Named exports** for all components: `export function Hero() {}`
- **No barrel exports** — import directly: `import { Hero } from "@/components/marketing/Hero"`
- **Path alias:** `@/*` maps to `./src/*`

### Styling

- Tailwind inline classes only (no CSS modules)
- Brand colors prefixed `boom-`: `bg-boom-pink`, `text-boom-blue-dark`, etc.
- Custom fonts via CSS variable: `font-[family-name:var(--font-oxanium)]`
- Mobile-first responsive: base styles then `sm:`, `md:`, `lg:` overrides
- Max container: `max-w-[1512px]` consistent across sections
- Padding scale: `px-5 sm:px-8 md:px-16 lg:px-[146px]`
- Use `cn()` from `@/lib/utils` for conditional class merging

### Brand Colors

```
--boom-pink: #FF45CE          # Primary accent
--boom-pink-dark: #7E376B     # Darker pink
--boom-blue-dark: #0C2435     # Dark background
--boom-blue-text: #19435D     # Body text blue
--boom-blue-accent: #00ADFF   # Cyan accent
--boom-blue-airforce: #297EA6 # Navy blue
--boom-black: #15171B         # Near-black
--boom-blue-pale: #A9E3FF     # Light cyan
--boom-grey: #8C9AAD          # Muted grey
```

### Components

- Marketing components use `"use client"` (required for Framer Motion)
- Layout components are server components
- Always use Next.js `<Image>` component, never `<img>`
- Semantic HTML: `<section>`, `<nav>`, `<footer>` for landmarks
- Alt text on all images

### Animations (Framer Motion)

Standard scroll-triggered pattern with reduced motion support:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
const prefersReducedMotion = useReducedMotion();
const y = prefersReducedMotion ? 0 : 30;

<motion.div
  initial={{ opacity: 0, y }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
>
```

- `once: true` — animate only on first scroll into view
- `useReducedMotion()` — respect user's OS motion preferences
- Duration: 0.6–0.8s, stagger delays 0.1–0.5s
- Entrance types: fade (`opacity`), slide (`y`/`x`), scale, rotate

### Accessibility

- FAQ accordion uses `aria-expanded`, `aria-controls`, `aria-labelledby`, `role="region"`
- Navbar logo and footer logo have descriptive `aria-label` on their links
- Decorative images use `alt=""`
- Hamburger menu button has dynamic `aria-label`

### SEO & Metadata

- Root metadata in `src/app/layout.tsx` (OG tags, canonical, manifest)
- Schema.org markup: Organization + WebSite in root layout, FAQPage + Service in homepage, Organization in marketing layout
- SEO route handlers in `src/app/`: `robots.ts`, `sitemap.ts` (dynamic, reads `NEXT_PUBLIC_SITE_URL`)
- Static file: `public/llms.txt` (AI crawler context)

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

## Security Headers (Netlify)

CSP, X-Frame-Options DENY, strict Referrer-Policy, Permissions-Policy (no camera/mic/geo) — configured in `netlify.toml`.
