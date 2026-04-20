# Design Brief

## Direction

Professional Academy — A modern, high-converting educational website for AI Academy using clean design with professional authority and approachable warmth.

## Tone

Light, minimal, and professional with modern tech aesthetics; cool ocean blue primary conveys educational authority while warm orange accents drive enrollment conversions.

## Differentiation

Gradient-accented CTAs, alternating section backgrounds for clear visual hierarchy, and icon-led content organization create an educational experience that feels both premium and welcoming.

## Color Palette

| Token      | OKLCH           | Role                              |
| ---------- | --------------- | --------------------------------- |
| background | 0.98 0.008 230  | Cool off-white, main surface      |
| foreground | 0.18 0.015 230  | Dark cool text                    |
| card       | 1.0 0.004 230   | Pure white elevated cards         |
| primary    | 0.42 0.14 240   | Deep ocean blue, authority/links  |
| accent     | 0.65 0.16 30    | Warm orange, action CTAs          |
| muted      | 0.94 0.01 230   | Light gray, secondary content     |
| border     | 0.9 0.008 230   | Subtle dividers                   |

## Typography

- Display: Space Grotesk — bold, tech-forward headings with tight tracking
- Body: DM Sans — clean, readable paragraphs and UI labels
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl`, label `text-sm font-semibold tracking-widest`

## Elevation & Depth

Subtle shadows create layered depth without visual noise; elevated cards for testimonials/courses, subtle shadows for secondary content, card borders via border token for delicate definition.

## Structural Zones

| Zone    | Background                  | Border                | Notes                                          |
| ------- | --------------------------- | --------------------- | ---------------------------------------------- |
| Header  | `bg-card` with `border-b`   | `border-border`       | Sticky, shadow-subtle on scroll                |
| Hero    | `bg-background` gradient    | —                     | Full-width, gradient accent on CTA buttons     |
| Content | Alternating `bg-background` | —                     | Even sections `bg-muted/30`, odd `bg-background` |
| Footer  | `bg-card`                   | `border-t border-border` | Simple, contact info, links                    |

## Spacing & Rhythm

Grid-based spacing: 16px base unit with 6-8-12-16-24-32 values; loose section gaps (gap-12 md:gap-16) for breathing room; tight component grouping (gap-4) for cohesion.

## Component Patterns

- Buttons: `gradient-accent` or `bg-primary`; rounded-lg; hover scale-105 with shadow-elevated
- Cards: `rounded-lg` with `shadow-subtle`, `border` for edge definition, padding-6
- Badges: inline `bg-accent/10 text-accent` with rounded-full, small text
- Icons: Lucide 24px, color by token (primary for links, accent for actions, muted for secondary)

## Motion

Entrance: `animate-fade-in` (0.5s) staggered per element; Hover: `transition-smooth` on all interactive; Decorative: subtle `animate-slide-up` on cards on viewport entry.

## Constraints

- Never use raw hex or RGB colors; always use CSS token variables
- Lucide icons exclusively for section illustrations (no external icon sets)
- Mobile-first responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Minimum touch target 48px; padding-3 minimum for button interactivity

## Signature Detail

Gradient-accented CTA buttons and alternating section backgrounds create visual rhythm that guides the user journey from awareness through enrollment without distraction.
