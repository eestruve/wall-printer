# Option 1: Marketing Hero + Glassmorphism Card

## Overview
Redesign the B2B pages (`PartnersPage.jsx`, `DesignersPage.jsx`, `ArchitectsPage.jsx`) and Knowledge Base pages (`TechUVPrintingPage.jsx`, `TechWallPrepPage.jsx`, `TechPrinterSpecsPage.jsx`) to feature a modern, premium layout that eliminates vertical text overflow and separates headers from heavy text blocks.

## Structural Changes

### 1. `ArticlePages.css` / `B2BPages.css`
- **Hero Section**:
  - Add top padding to account for the fixed header (`padding-top: calc(var(--header-height) + 2rem)`).
  - Center titles, add neon accents (gradient text or badges).
  - Use `max-width: 1000px` to prevent ultra-wide desktop stretching.

### 2. Glassmorphism Content Area
- Wrap main text content (lists, paragraphs) inside a card overlay:
  ```css
  background: var(--glass-bg);
  border: var(--glass-border);
  backdrop-filter: var(--glass-blur);
  padding: 3rem;
  border-radius: 20px;
  ```
- This keeps text highly readable against the dark background while maintaining the "cyber/neon" aesthetic of the site.

### 3. BackButton Placement
- The `BackButton` should sit at the very top of the Hero Section container, aligned left, pushing the title down slightly for visual hierarchy.

## Acceptance Criteria
- No text overflowing the window.
- Consistent padding below the main navigation Header.
- Clean text readability within `glass` cards.
- Mobile responsiveness (padding reduced on smaller screens).
