# CSS Architecture Notes

## Design Philosophy: Swiss International Typographic Style

This portfolio implements **Swiss Design principles** through systematic CSS architecture, minimal color palette, and geometric precision.

## Architecture Overview

### Technology Stack
- **Tailwind CSS 3.x** - Utility-first framework
- **PostCSS** - CSS processing and autoprefixing
- **Custom Components** - Swiss-specific design system
- **CSS Custom Properties** - Design tokens and theming

## Design System Foundation

### Color Palette
```css
:root {
  /* Swiss Core Colors */
  --swiss-black: #000000;     /* Primary text, borders, structure */
  --swiss-white: #FFFFFF;     /* Backgrounds, contrast */
  --swiss-red: #E53E3E;       /* Accent, used sparingly */
  
  /* 9-Step Grayscale */
  --swiss-gray-100: #F5F5F5;  /* Light backgrounds */
  --swiss-gray-200: #E5E5E5;  /* Subtle borders */
  --swiss-gray-300: #D4D4D4;  /* Disabled states */
  --swiss-gray-400: #A3A3A3;  /* Secondary text */
  --swiss-gray-500: #737373;  /* Tertiary text */
  --swiss-gray-600: #525252;  /* Labels, metadata */
  --swiss-gray-700: #404040;  /* Body text */
  --swiss-gray-800: #262626;  /* Headings */
  --swiss-gray-900: #171717;  /* High contrast text */
}
```

### Typography System
```css
/* Fluid Typography Scale */
:root {
  --fluid-display: clamp(3rem, 8vw, 5rem);      /* Hero headlines */
  --fluid-h1: clamp(2.5rem, 6vw, 4rem);         /* Page titles */
  --fluid-h2: clamp(2rem, 5vw, 3rem);           /* Section headers */
  --fluid-h3: clamp(1.5rem, 4vw, 2.25rem);      /* Subsections */
  --fluid-h4: clamp(1.25rem, 3vw, 1.75rem);     /* Card titles */
  --fluid-body: clamp(1rem, 2.5vw, 1.125rem);   /* Body text */
  --fluid-body-lg: clamp(1.125rem, 3vw, 1.25rem); /* Large body */
}
```

### Spacing System
```css
/* Swiss Grid Spacing */
:root {
  --space-xs: 0.25rem;    /* 4px */
  --space-sm: 0.5rem;     /* 8px */
  --space-md: 0.75rem;    /* 12px */
  --space-lg: 1rem;       /* 16px */
  --space-xl: 1.5rem;     /* 24px */
  --space-2xl: 2rem;      /* 32px */
  --space-3xl: 3rem;      /* 48px */
  --space-4xl: 4rem;      /* 64px */
  --space-5xl: 5rem;      /* 80px */
}
```

## Grid System: Swiss Grid

### Base Grid Structure
```css
.swiss-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg);
  max-width: 1440px;
  margin: 0 auto;
  padding-left: var(--swiss-grid-margin);
  padding-right: var(--swiss-grid-margin);
}

/* Column Spans */
.swiss-col-1 { grid-column: span 1; }
.swiss-col-2 { grid-column: span 2; }
/* ... up to .swiss-col-12 */
```

### Responsive Behavior
```css
@media (max-width: 768px) {
  .swiss-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  /* All columns full-width on mobile */
  .swiss-col-1,
  .swiss-col-2,
  /* ... */
  .swiss-col-12 {
    grid-column: span 4;
  }
}
```

## Component System

### Button Components
```css
.btn-swiss {
  @apply inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[56px] 
         font-bold uppercase tracking-wider text-sm border-2 transition-all duration-200;
  
  border-color: var(--swiss-black);
  background-color: var(--swiss-white);
  color: var(--swiss-black);
}

.btn-swiss:hover {
  background-color: var(--swiss-black);
  color: var(--swiss-white);
}

.btn-swiss-primary {
  background-color: var(--swiss-black);
  color: var(--swiss-white);
}

.btn-swiss-accent {
  background-color: var(--swiss-red);
  border-color: var(--swiss-red);
  color: var(--swiss-white);
}
```

### Typography Components
```css
.prose-swiss {
  /* Enhanced typography for content */
  color: var(--swiss-gray-900);
}

.prose-swiss h1 {
  font-weight: 700;
  letter-spacing: -0.025em;
}

.prose-swiss code {
  color: var(--swiss-red);
  background-color: var(--swiss-gray-100);
  padding: 0.25rem 0.375rem;
  border-radius: 0.25rem;
  font-weight: 500;
}
```

### Structural Components
```css
.swiss-divider {
  width: 100%;
  height: 3px;
  background-color: var(--swiss-black);
  margin: var(--space-4xl) 0;
}

.swiss-section-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--swiss-gray-600);
}
```

## Performance Optimizations

### Typography Features
```css
/* Advanced typography features */
html {
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
}

/* Text balancing for headlines */
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/* Hyphenation for narrow viewports */
@media (max-width: 640px) {
  p, li, dd {
    hyphens: auto;
    hyphenate-limit-chars: 6 3 2;
  }
}
```

### Print Optimizations
```css
/* Print stylesheet (separate file) */
@media print {
  .no-print { display: none; }
  
  /* Print-specific typography */
  body { 
    font-size: 12pt; 
    line-height: 1.5; 
  }
  
  /* Ensure page breaks */
  h1, h2, h3 { 
    break-after: avoid; 
  }
}
```

## Tailwind Configuration Integration

### Content Paths
```javascript
content: [
  "./src/**/*.{html,njk,md}",
  "./src/_layouts/**/*.njk",
  "./src/_data/**/*.js"
]
```

### Extended Theme
```javascript
theme: {
  extend: {
    colors: {
      // Swiss palette integrated with Tailwind
      primary: { /* blue scale */ },
      neutral: { /* gray scale */ }
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      mono: ["Fira Code", "monospace"]
    },
    typography: (theme) => ({
      // Custom prose styles
    })
  }
}
```

### Production Optimizations
```javascript
plugins: [
  require("@tailwindcss/typography"),
  require("@headlessui/tailwindcss"),
  require("@tailwindcss/container-queries")
]
```

## Build Process

### CSS Generation
1. **Tailwind Processing**: `tailwind.css` → processed CSS
2. **PostCSS**: Autoprefixing and optimization
3. **Production**: Purging unused styles, minification
4. **Output**: `_site/css/main.css` (optimized)

### File Structure
```
src/css/
├── tailwind.css        # Main Tailwind input
└── print.css          # Print-specific styles

_site/css/
└── main.css           # Generated, optimized output
```

## Mobile-First Responsive Design

### Breakpoint Strategy
- **Mobile**: 375px - 768px (Swiss grid: 4 columns)
- **Tablet**: 768px - 1024px (Swiss grid: 8 columns)  
- **Desktop**: 1024px+ (Swiss grid: 12 columns)

### Touch Targets
```css
/* WCAG-compliant touch targets */
.btn-swiss {
  min-height: 44px;
  min-width: 44px;
}

/* Interactive elements */
a, button, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}
```

## Accessibility Integration

### Focus States
```css
/* Visible focus indicators */
a:focus, button:focus {
  outline: 2px solid var(--swiss-red);
  outline-offset: 2px;
}

/* Custom focus styles for Swiss buttons */
.btn-swiss:focus {
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
}
```

### Color Contrast
- **Primary text**: Black on white (21:1 ratio)
- **Secondary text**: Gray-700 on white (10.4:1 ratio)
- **Red accent**: Meets WCAG AA standards

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Key Architecture Principles

1. **Systematic**: Every design decision follows Swiss design principles
2. **Scalable**: Component-based architecture allows easy expansion
3. **Performance-First**: Minimal CSS, efficient selectors
4. **Accessible**: WCAG 2.1 AA compliance built-in
5. **Maintainable**: Clear naming conventions, logical organization
6. **Mobile-First**: Progressive enhancement from small screens up

---

*Last Updated: December 10, 2025*
