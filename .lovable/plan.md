# Mercy Ayigun Portfolio — Build Plan

A single-page portfolio inspired by droppable.app: white background, Playfair Display + Inter, red (#D0302A) accent, generous whitespace, fade-up scroll animations.

## Setup
- Add `framer-motion` dependency
- Load Playfair Display + Inter via `<link>` tags in `src/routes/__root.tsx` head (per Tailwind v4 remote-font rules)
- Update root `head()` title to "Mercy Ayigun | Virtual Assistant", meta description, and add an inline SVG red "M" favicon as data URI
- Extend `src/styles.css` `@theme` with brand tokens: `--color-brand` (#D0302A), `--color-ink` (#111), `--color-body` (#444), `--color-hairline` (#EEEEEE), `--color-surface-soft` (#F9F9F9), `--font-display` (Playfair Display), `--font-sans` (Inter); set `html { scroll-behavior: smooth }`

## Page Structure
Replace placeholder `src/routes/index.tsx` with a composition of section components living in `src/components/portfolio/`:

- `Nav.tsx` — sticky top nav, name left, links right (About, Services, Work, Testimonials, Contact), hamburger sheet on mobile, border-b appears on scroll
- `Hero.tsx` — full-viewport, 2-col grid; red eyebrow label, Playfair italic name, Inter subhead, red pill CTA "Work with Me" → #contact; right: rounded photo placeholder card with red border + replace-photo comment
- `About.tsx` (id="about") — 2-col, heading + 2-paragraph body, circular avatar placeholder
- `Expertise.tsx` (id="services") — full-width #F9F9F9 band, centered heading, 2 columns (Expertise / Soft Skills) split by vertical divider, red Check icons per item
- `Tools.tsx` — centered heading, wrapping flex of pill chips (white bg, red border + text)
- `Work.tsx` (id="work") — heading + subtext, then 7 alternating left/right feature blocks; visual side is a card (#F5F5F5, 4px red left border, centered lucide icon above Playfair title); text side is description; fade-up on scroll
- `Testimonials.tsx` (id="testimonials") — 3 cards in a row (stack on mobile), oversized red Playfair quote mark, italic body, divider, name + red role
- `Contact.tsx` (id="contact") — heading + subtext, 3 clickable cards (Email / Phone-WhatsApp / LinkedIn) with lucide icons; opens mailto / wa.me / linkedin in new tab
- `Footer.tsx` — centered name, tagline, row of red social icons, copyright

A small `FadeUp` wrapper using framer-motion `whileInView` with staggered children handles scroll animations across sections.

## Content
All copy, lists, tool names, testimonials, and contact values pulled verbatim from the spec. No em dashes (rewritten with commas where present). No contact form. No images generated — placeholders with `{/* Replace with actual client photo */}` comments only.

## Technical Notes
- All colors via semantic tokens / arbitrary values referencing CSS vars — no hardcoded hex in components beyond the token definitions in styles.css
- Smooth scroll via native CSS + anchor `href="#id"` links
- Mobile nav uses existing shadcn `sheet` component
- Single route `/` only; SEO meta set in route `head()`
- Favicon: data-URI SVG of red "M" added to root `links`

## Files Created/Modified
- `package.json` (+ framer-motion)
- `src/styles.css` (tokens, smooth scroll)
- `src/routes/__root.tsx` (font links, favicon)
- `src/routes/index.tsx` (compose sections, page meta)
- `src/components/portfolio/{Nav,Hero,About,Expertise,Tools,Work,Testimonials,Contact,Footer,FadeUp}.tsx`
