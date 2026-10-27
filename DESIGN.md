# Design Guide

Lantern-lit, hand-made, slightly wrong. A night lake framed by forest, with painted wooden signs. Brand and audience live in [PRODUCT.md](PRODUCT.md); tokens live in [src/app.css](src/app.css). Use the tokens and never hard-code a color.

## Rules
1. **The world is the interface.** Illustration fills the frame and UI chrome stays small and quiet.
2. **Nothing is straight.** Use chipped clip-paths, brush-stroke lines, torn edges and small tilts. No rounded corners (`--radius: 0`), no hairline borders, no perfect rectangles on show.
3. **Dark only.** Night backgrounds with glow and grain. There is no light theme.
4. **Whimsy in words, dread in the air.** Keep copy playful and the visuals restrained.
5. **Show, don't list.** Use scenes and screenshots, not icon grids, stat badges or feature bullets.

## Color
| Role | Token | Use |
|---|---|---|
| Background | `--night`, `--night-raise`, `--night-deep` | Page, raised panels, forest-dark bands |
| Lines | `--night-line` | Brush rules and dividers |
| Text | `--ink`, `--ink-soft` | Body text, secondary text |
| Accent | `--wisp` (lime) | Primary CTA, links, focus ring, selection. Use it sparingly, at most one per view |
| Warm | `--ember`, `--wax` | Lantern highlights and seals. Rare |
| Wood | `--oak*`, `--iron`, `--parchment-ink` | Plank buttons and signs |

## Type
- **Display:** Grenze Gotisch (`--font-display`), weight 700, line-height 1, `text-wrap: balance`. Use it for h1 to h3 only.
- **Body:** Mali (`--font-body`), base 17px, line-height 1.6, `text-wrap: pretty`.
- Use two families only. Keep display type short.

## Components
- **Buttons:** `.btn` is a chipped oak plank with a slight tilt that straightens on hover. Use `.btn-wisp` for the single primary action and `.btn-ghost` for secondary actions.
- **Links:** `.text-link` has a lime brush-stroke underline.
- **Dividers:** `.brush-rule`. Use `--torn-top` / `--torn-bottom` for section edges.
- **Images:** every slot keeps its aspect ratio with a blank block until the art lands.

## Layout
- Content is capped by `.container` (1320px max) with `--gutter` (16–72px) on the sides.
- Design mobile first: most visitors come from a trailer link on a phone.
- Use generous spacing and few elements per screen.

## Motion
- Ease with `--ease-out`, at 0.2s for color/opacity and 0.3–0.6s for transforms and reveals.
- Parallax and ambient drift should be subtle.
- `prefers-reduced-motion` removes parallax, tilts and ambient animation.

## Accessibility
- Meet WCAG 2.2 AA contrast.
- Every element works by keyboard and shows a visible `--wisp` focus ring.
- Focus rings must never be clipped. Put chipped shapes on pseudo-elements, not on the focusable element.

## Avoid
Gore, splatter or dripping fonts · Steam-style capsule grids · SaaS hero metrics, identical icon cards and eyebrow labels · gradients on text · pure black or white · extra accent colors.
