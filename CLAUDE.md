# Boomathon

Next.js 15 App Router + Supabase + Tailwind CSS + Framer Motion + shadcn/ui.
Hosted on Netlify. Design assets in src/assets/boomathon/.

## Architecture
- (marketing) route group: public-facing pages (landing, about)
- (platform) route group: authenticated participant area (dashboard, leaderboard, team)
- Supabase handles auth, real-time subscriptions, and game stat storage
- External game engine sends stats via webhooks to Supabase Edge Functions

## Brand
- Dark theme with neon accents (see src/assets/boomathon/branding/Boomathon Colour System.md)
- Adventure/extreme sports aesthetic
- Framer Motion for cinematic transitions and micro-interactions
