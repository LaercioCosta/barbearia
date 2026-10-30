---
name: Barbearia Premium
description: Luxury dark editorial identity for a cinematic, responsive barbershop landing page.
colors:
  black: "#0d0d0d"
  canvas: "#080908"
  charcoal: "#151615"
  charcoal-raised: "#1c1c1c"
  aged-gold: "#b89a60"
  gold-light: "#c9a968"
  ivory: "#f4efe6"
  warm-gray: "#c1bbb0"
typography:
  display:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "clamp(28px, 3vw, 42px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.23em"
rounded:
  button: "3px"
  card: "5px"
  image-frame: "4px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.aged-gold}"
    textColor: "#100e09"
    typography: "700 12px DM Sans, Arial, sans-serif"
    rounded: "{rounded.button}"
    height: "44px"
    padding: "0 18px"
  button-outline:
    backgroundColor: "rgba(0,0,0,.45)"
    textColor: "{colors.ivory}"
    typography: "700 12px DM Sans, Arial, sans-serif"
    rounded: "{rounded.button}"
    height: "44px"
    padding: "0 18px"
  service-card:
    backgroundColor: "#121312"
    textColor: "{colors.ivory}"
    rounded: "{rounded.card}"
    padding: "8px"
---

# Design System: Barbearia Premium

## Overview

**Creative North Star: "The Gilded Barber Editorial"**

This visual world faithfully reconstructs the supplied barbershop mockup: a luxury dark editorial canvas, compact cinematic desktop composition, warm amber photography, restrained aged gold, and confident condensed headings. It feels considered and tactile, with a clear visual rhythm that lets the imagery and typography carry the experience.

The desktop page uses the reference's wide centered frame and same section order. At mobile widths it becomes a compact header and a vertically stacked, single-column reading flow while preserving the identity and content hierarchy. Eyebrows sit directly above their associated headings, as approved in the final design review.

**Key Characteristics:**
- Black and charcoal surfaces with thin, quiet gold borders.
- Warm cinematic barber and interior photography, with dark overlays for readable text.
- Ivory Oswald headlines paired with DM Sans navigation, body copy, and controls.
- Dense, image-led sections on desktop; touch-friendly stacked sections on mobile.

## Colors

The palette is near-black and warm-neutral, with aged gold used sparingly for emphasis and navigation cues.

### Primary
- **Aged Gold**: The single defining accent for calls to action, eyebrows, icon marks, focus rings, and restrained borders.
- **Soft Gold**: A lighter gold state for hover and emphasized links.

### Neutral
- **Night Canvas**: The page surround and deepest background, establishing the cinematic frame.
- **Barber Black**: The main shell surface behind the page content.
- **Charcoal Panel**: Raised cards and service surfaces.
- **Deep Charcoal**: Secondary panels and layered surface blocks.
- **Warm Ivory**: Primary text and high-contrast headings.
- **Warm Gray**: Supporting body copy and secondary information.

**The Gold Restraint Rule.** Keep gold as a focused accent; it should guide attention without becoming a broad background color.

## Typography

**Display Font:** Oswald (with Impact, sans-serif fallback)
**Body Font:** DM Sans (with Arial, sans-serif fallback)
**Label/Mono Font:** DM Sans for labels and navigation.

**Character:** Oswald gives section titles a compact, assertive editorial voice. DM Sans keeps navigation, body copy, and controls clear and understated.

### Hierarchy
- **Display** (600, responsive 28–42px, 1.02 line-height): Hero and major section headings; compact to 34px on narrow mobile screens.
- **Title** (600, 24–29px): Section and card-group headings.
- **Body** (400, 14px, 1.5 line-height): Default reading text; supporting copy uses warm-gray color and compact line-height.
- **Label** (700, 12px, 0.23em letter-spacing, uppercase): Eyebrows, concise service labels, and editorial annotations.

**The Two-Voice Rule.** Use Oswald for display headlines and DM Sans for everything that must read quickly, including body text and controls.

## Layout

Center the desktop page in a wide framed canvas (1120px maximum, expanding to 1220px on very wide screens) with a compact editorial rhythm. Preserve the supplied mockup's exact section order and desktop/mobile structure. Sections use a consistent inset and align image grids, text blocks, and calls to action within that frame.

At 850px and below, switch to the compact header and reflow key grids; at 520px and below, use a full-width shell, single-column services and reading flow, and full-width booking control. Keep touch targets at least 44px high. Eyebrow labels remain immediately above their headings at all widths.

## Elevation & Depth

Depth comes from tonal layering, warm photo overlays, and a restrained shadow around the central desktop shell. Use the photographic backdrop as atmosphere, while dark gradients protect text contrast over image-led areas. Borders are subtle and usually warm gold at low opacity; elevation should remain quiet.

## Shapes

Use gently softened, nearly square corners (3–5px) for buttons, cards, and image frames. The overall silhouette is crisp and tailored; reserve circular shapes for small step markers and avatars. Image crops are flush to card edges.

## Components

- **Primary button:** Aged-gold fill, dark text, compact bold DM Sans, subtle corner rounding, and a restrained lighter-gold hover. Keep the 44px minimum height for touch use.
- **Outline button:** Transparent dark fill with a fine gold border; use for secondary actions beside a primary booking action.
- **Navigation:** Quiet ivory links in a compact horizontal desktop row. On mobile, use a compact header and a stacked, full-width disclosure menu.
- **Service card:** Charcoal surface, fine gold edge, flush cropped image, concise uppercase service title, supporting line, and booking action. Avoid decorative elevation.
- **FAQ disclosure:** Dark, thin-bordered native disclosure rows with clear question labels and a gold plus/minus cue.
- **Image viewer:** Dark modal treatment that keeps the selected image central and uses a visible close control.

## Do's and Don'ts

### Do:
- **Do** preserve the approved mockup's section order and desktop/mobile structure.
- **Do** keep eyebrows directly above their associated headings.
- **Do** use warm amber photography with dark overlays wherever text shares the image.
- **Do** preserve keyboard-visible focus and reduced-motion behavior.

### Don't:
- **Don't** introduce bright color accents or broad gold-filled surfaces.
- **Don't** change the condensed display and clean sans-serif pairing.
- **Don't** turn visual placeholders or illustrative content into verified business facts; product details remain configurable until confirmed.
