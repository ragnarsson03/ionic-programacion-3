---
name: Academic Excellence Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#07006c'
  on-tertiary-container: '#7073ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The brand personality is authoritative, innovative, and student-centric. It aims to evoke a sense of reliability and modern academic rigor, moving away from "stuffy" institutional aesthetics toward a sleek, tech-forward educational environment. 

The design style is **Corporate / Modern** with a strong emphasis on **Minimalism**. It utilizes a card-based architecture to organize complex academic data into digestible, high-contrast modules. By combining deep institutional colors with vibrant tech accents, the interface feels both official and cutting-edge, catering to a demographic that values efficiency and professional growth.

## Colors

The palette is anchored by a **Deep Navy Blue** (#0F172A) which provides the structural weight and "Academic" feel. This is paired with a **Vibrant Tech-Blue** (#3B82F6) used exclusively for primary actions, progress indicators, and interactive highlights to draw the user's eye.

Backgrounds utilize a very light gray **Slate** (#F8FAFC) to reduce eye strain during long study sessions, while pure white is reserved for cards and elevated surfaces to create distinct contrast layers. High-contrast ratios (WCAG AAA for body text) are strictly maintained to ensure accessibility across various device brightness levels.

## Typography

This design system utilizes **Inter** for all typographic layers. Inter was chosen for its exceptional legibility in technical contexts and its neutral, utilitarian personality that scales perfectly from small mobile labels to large dashboard headings.

- **Headlines:** Use semi-bold weights with tighter letter spacing to create a sense of professional impact.
- **Body Text:** Maintains a generous line height (1.5-1.6) to ensure long-form academic content is easy to read.
- **Labels:** Utilize slightly heavier weights and occasional uppercase styling to differentiate metadata (like course codes or dates) from primary narrative content.

## Layout & Spacing

The design system employs an **8px linear grid system** to maintain rhythmic consistency across all screens. The layout follows a **fluid-to-fixed** model where card containers expand to fill the horizontal space on mobile but conform to a maximum width on tablet and desktop views to prevent excessive line lengths.

Standardized spacing increments (8, 16, 24, 32, 40) are used for all margins and paddings. Generous white space is prioritized around core content modules to reduce the cognitive load often associated with complex academic management tools.

## Elevation & Depth

Visual hierarchy in the design system is established through a combination of **Tonal Layers** and **Ambient Shadows**. 

1.  **Base Layer:** The canvas (#F8FAFC) serves as the ground.
2.  **Card Level:** White surfaces (#FFFFFF) sit 1-level above the ground with a very soft, diffused shadow (12% opacity, 16px blur) to imply interactivity.
3.  **Active Level:** Items being hovered or actively engaged with increase in shadow depth (18% opacity, 24px blur) and may include a subtle 1px border in the secondary tech-blue color.
4.  **Overlays:** Modals and dropdowns use a "backdrop blur" (12px) to maintain context while focusing the user on the primary task.

## Shapes

The design system uses a **Rounded** (Level 2) shape language to soften the "technical" feel and make the app more approachable for students. 

- **Cards:** Standardized at `rounded-xl` (1.5rem) to create a modern, premium "container" look.
- **Buttons:** Use `rounded-lg` (1rem) for a distinct click-target appearance.
- **Input Fields:** Utilize `rounded-md` (0.5rem) to maintain a slightly more structured and precise look for data entry.
- **Iconography:** Ionicons are used with a "rounded" or "outline" style to match the UI's corner radii.

## Components

### Buttons
Primary buttons use the tech-blue background with white Inter Bold text. Secondary buttons use a transparent background with a navy border. All buttons include a minimum touch target height of 48px and use the `rounded-lg` radius.

### Cards
Cards are the primary container. They must always feature a white background, the standard ambient shadow, and `rounded-xl` corners. Content inside cards should be padded with `spacing.md` (24px) to ensure no information feels cramped.

### Input Fields
Inputs use a light gray stroke (#E2E8F0) that transitions to tech-blue on focus. Error states must include both a red border and an Ionicons "alert" icon for accessibility.

### Chips & Badges
Used for status (e.g., "Enrolled", "Pending", "Completed"). These should use high-contrast text on a light tinted background of the status color (e.g., Success text on a 10% opacity Green background).

### Lists
List items should be separated by clear gutters rather than simple lines, creating a "stacked card" effect that emphasizes the modular nature of the university data.

### Additional Components
- **Progress Bars:** Thin, tech-blue indicators for course completion.
- **Schedule Blocks:** Color-coded time slots for the academic calendar.
- **User Avatar:** Circular with a 2px navy border to denote the primary account holder.