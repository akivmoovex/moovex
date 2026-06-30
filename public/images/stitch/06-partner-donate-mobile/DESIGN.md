---
name: Moovex Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-alt: '#F8FAFC'
  trust-blue: '#1E293B'
  growth-green: '#22C55E'
  energy-orange: '#FB923C'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

The brand personality for this design system is **Professional Humanism**. It bridges the gap between institutional credibility (for international donors) and vibrant, community-driven energy (for local Zambian entrepreneurs). 

The visual style is **Modern / Corporate** with a specific "soft" twist. It utilizes expansive whitespace and a structured grid to convey organizational maturity, while employing generous corner radii and a warm accent palette to maintain an approachable, human-centric feel. The aesthetic avoids the coldness of traditional fintech by leaning into tactile softness and optimistic color hits, evoking a sense of sustainable growth and shared prosperity.

## Colors

The palette is anchored by **Deep Blue**, used for typography and primary navigation to establish authority and business focus. **Vibrant Green** serves as the primary action color, symbolizing the lush landscape of Zambia and the concept of economic growth. **Warm Orange** is used sparingly as an energetic accent to highlight "Moovement" and entrepreneurial spirit.

Backgrounds primarily utilize **Pure White** to maintain a clean, modern digital-first appearance, while **#F8FAFC (Soft Gray)** is used for sectioning content to create subtle visual rhythm without the harshness of high-contrast borders.

## Typography

This design system uses **Outfit** for headlines to provide a geometric, modern, and welcoming character. Its wide apertures and clean circles reinforce the "rounded" visual theme. 

**Inter** is used for body text and labels to ensure maximum readability across digital devices, particularly in data-heavy impact metrics. Headlines should utilize tighter letter-spacing and heavier weights to command attention, while body text maintains generous line heights to ensure the content feels accessible and non-intimidating.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width of 1280px for desktop environments. We use an 8px spacing scale to maintain a consistent mathematical rhythm. 

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px margins.

Sections are separated by large vertical gaps (80px - 120px) to enhance the feeling of "whitespace" and allow the high-impact imagery and metrics to breathe.

## Elevation & Depth

To achieve the "Modern African Entrepreneurship" look, depth is conveyed through **Tonal Layers** and **Ambient Shadows**. 

Surfaces are primarily flat but "lifted" using very soft, diffused shadows (Blur: 20px-40px, Opacity: 4-6%) with a slight blue tint derived from the primary color. This avoids the "dirty" look of pure black shadows. Interactive elements like cards use a 1px border in a very light neutral shade (#E2E8F0) combined with these shadows to create a sophisticated, tactile feel that suggests the elements are floating just above the soft gray background.

## Shapes

The shape language is defined by **High Circularity**. Standard components like buttons and input fields use a 0.5rem radius, while "Impact Cards" and "Company Profile Cards" use a much larger **2xl radius (1.5rem)** to emphasize warmth and safety. 

Iconography should follow this trend, utilizing rounded terminals and avoid sharp 90-degree angles. This softness is a key differentiator, moving the design away from "stiff" corporate layouts toward a more community-focused aesthetic.

## Components

### Buttons
- **Primary:** Solid Vibrant Green with white text. High-contrast, 0.5rem rounded corners.
- **Secondary:** Deep Blue outline with a 1px stroke. 
- **Interaction:** Subtle lift on hover (shadow increase) rather than a drastic color change.

### Cards
- **Portfolio/Company Cards:** 1.5rem (2xl) rounded corners. White background with a subtle #F1F5F9 border. 
- **Impact Metric Cards:** Large, centered typography for numbers using the Accent Orange color. Icons should be housed in a soft, tinted circular container.

### Forms
- **Inputs:** Soft gray background (#F8FAFC) with a 1px border that turns Deep Blue on focus. Labels are positioned above the field in `label-md` weight.
- **Checkboxes:** Rounded (soft-square) rather than sharp, using the primary Green for the checked state.

### Lists & Navigation
- **Navigation:** Clean horizontal links in Deep Blue. The active state is indicated by a subtle Green dot or underline rather than a bold background change to keep the header lightweight.