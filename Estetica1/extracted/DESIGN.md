---
name: Lumina Gallery
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#434656'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#104af0'
  primary: '#0040df'
  on-primary: '#ffffff'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#006058'
  on-tertiary: '#ffffff'
  tertiary-container: '#007b71'
  on-tertiary-container: '#b2fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
  section-gap: 120px
---

## Brand & Style
This design system is built upon a **Hyper-Minimalist Gallery** aesthetic. It prioritizes the "canvas" over the interface, ensuring that user content remains the focal point while the UI acts as a sophisticated, high-precision frame. 

The personality is intellectual, curated, and expansive. By utilizing an off-white foundation, the interface avoids the sterile coldness of pure white, opting instead for a subtle warmth that feels premium and intentional. The emotional response should be one of clarity and focus, where "less" is mathematically balanced to feel "more." The style blends **Minimalism** with high-precision **Modern** accents, using vibrant bursts of color to guide the eye toward critical actions and data points.

## Colors
The palette is anchored by a neutral off-white background (`#FDFDFB`) and a slightly deeper surface color (`#F9F9F7`) to create subtle structural differentiation. 

- **Primary (Electric Blue):** Reserved for high-priority calls to action and active states.
- **Secondary (Deep Purple):** Used for creative highlights, secondary navigational elements, and luxury accents.
- **Tertiary (Teal):** Applied to success states, data visualizations, and environmental feedback.
- **Neutrals:** A range of warm grays that maintain legibility without breaking the minimalist harmony.

High-saturation accents must be used sparingly—appearing as surgical strikes of color against the expansive neutral canvas.

## Typography
The system utilizes **Space Grotesk** across all levels to lean into its technical, sharp, and geometric nature. 

- **Display & Headlines:** Use tight letter-spacing and heavy weights to create a "logo-like" feel for titles.
- **Body Text:** Maintain a generous line height (1.6) to preserve the "Gallery" feel and ensure readability against the light background.
- **Labels:** Small, uppercase labels with increased letter-spacing provide a modern, architectural metadata aesthetic.
- **Visual Rhythm:** Headlines should be followed by significant whitespace to emphasize the modularity of the design.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the "curated gallery" look, transitioning to a fluid model for mobile.

- **Whitespace:** Use aggressive vertical spacing (`section-gap`) to separate distinct content blocks. 
- **The 8px Rule:** All dimensions, padding, and margins must be multiples of 8px.
- **Margins:** Desktop margins are exceptionally wide (64px+) to create a sense of exclusivity and breathability around the content.
- **Alignment:** Strict left-alignment for text, while visual assets may break the grid or use asymmetric positioning to create dynamic interest.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layers** and **Ambient Shadows**. We avoid heavy dropshadows in favor of "Soft-Depth."

- **Elevation 1 (Surface):** Default background.
- **Elevation 2 (Cards/Containers):** Uses a subtle shadow (0px 4px 20px rgba(0,0,0,0.04)) and a thin 1px border (`#F1F1EF`) to separate from the background.
- **Elevation 3 (Modals/Popovers):** Uses a more pronounced but highly diffused shadow (0px 12px 40px rgba(0,0,0,0.08)).
- **Interactive Depth:** When hovering over interactive elements, the shadow should slightly expand while the element shifts -2px on the Y-axis, creating a "lifted" effect.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the geometric typography, making the interface feel approachable without losing its professional, sharp character.

- **Small Components:** Buttons and input fields use a `0.25rem` radius.
- **Large Components:** Cards and content containers use `0.5rem` (`rounded-lg`).
- **Icons:** Should follow a 2px stroke weight with consistent terminal ends (rounded) to match the UI's radius.

## Components
- **Buttons:** Primary buttons are solid Electric Blue with white text. Secondary buttons use a ghost style (transparent background, 1px neutral border) that fills with a light gray on hover.
- **Input Fields:** Minimalist design with only a bottom border that transitions to Electric Blue on focus. Labels sit 8px above the input in the "label-md" style.
- **Chips:** Small, Pill-shaped with a light neutral fill (`#F1F1EF`) and `label-md` typography. Active chips use a Tertiary (Teal) background.
- **Lists:** Clean, borderless rows separated by 24px of whitespace. Use a subtle hover state (`#F9F9F7`).
- **Cards:** The primary vehicle for content. Cards should have no visible border unless they contain an image, in which case a 1px internal stroke is used to define the image boundary.
- **Visual Content:** Images should always feature a "skeleton" loader that matches the neutral surface color (`#F9F9F7`) before the asset resolves.