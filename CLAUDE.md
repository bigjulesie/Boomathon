# Boomathon

Next.js 15 App Router + Supabase + Tailwind CSS v4 + Framer Motion + shadcn/ui.
Hosted on Netlify. Design assets in `src/assets/boomathon/`.

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

Standard scroll-triggered pattern:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
>
```

- `once: true` — animate only on first scroll into view
- Duration: 0.6–0.8s, stagger delays 0.1–0.5s
- Entrance types: fade (`opacity`), slide (`y`/`x`), scale, rotate

### SEO & Metadata

- Root metadata in `src/app/layout.tsx` (OG tags, canonical, manifest)
- Schema.org markup: Organization in marketing layout, FAQPage in FAQ component
- Static SEO files in `public/`: `robots.txt`, `sitemap.xml`, `llms.txt`

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

## Security Headers (Netlify)

CSP, X-Frame-Options DENY, strict Referrer-Policy, Permissions-Policy (no camera/mic/geo) — configured in `netlify.toml`.
