# Layout Approach & Swiss Design System

## Design Philosophy: International Typographic Style

This portfolio implements **Swiss International Typographic Style** principles through systematic layout design, emphasizing clarity, functionality, and mathematical precision.

## Core Swiss Design Principles

### 1. Grid-Based Structure
**Mathematical Foundation**: 12-column grid system with consistent spacing ratios

```css
.swiss-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg);
  max-width: 1440px; /* Golden ratio derived */
  margin: 0 auto;
}
```

### 2. Asymmetric Balance
**Visual Hierarchy**: Content distributed according to importance, not symmetry

```html
<!-- Typical Swiss layout pattern -->
<div class="swiss-grid">
  <div class="swiss-col-7">    <!-- Primary content: 58% -->
    <h1>Main Headline</h1>
    <p>Primary content...</p>
  </div>
  <div class="swiss-col-5">    <!-- Secondary content: 42% -->
    <aside>Supporting information</aside>
  </div>
</div>
```

### 3. Minimal Color Palette
**Systematic Color Usage**:
- **Black** (#000000): Structure, text, emphasis
- **White** (#FFFFFF): Space, backgrounds, contrast
- **Red** (#E53E3E): Accent, navigation states, calls-to-action
- **9-step Grayscale**: Hierarchy and subtle differentiation

## Layout System Architecture

### Responsive Grid Strategy

#### Desktop (1024px+): 12-Column Grid
```css
.swiss-grid {
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg); /* 16px */
}

/* Content distribution examples */
.hero-layout { 
  /* 7/5 split for asymmetric balance */ 
}
.content-sidebar { 
  /* 8/4 split for content focus */ 
}
.full-content { 
  /* 12 span for maximum impact */ 
}
```

#### Tablet (768px-1023px): 8-Column Grid
```css
@media (max-width: 1023px) {
  .swiss-grid {
    grid-template-columns: repeat(8, 1fr);
    gap: var(--space-md); /* 12px */
  }
}
```

#### Mobile (< 768px): 4-Column Grid
```css
@media (max-width: 767px) {
  .swiss-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-sm); /* 8px */
  }
  
  /* All elements span full width on mobile */
  .swiss-col-1, .swiss-col-2, /* ... */ .swiss-col-12 {
    grid-column: span 4;
  }
}
```

### Typography Hierarchy

#### Fluid Type Scale
```css
:root {
  /* Swiss-inspired type scale */
  --fluid-display: clamp(3rem, 8vw, 5rem);     /* 48-80px */
  --fluid-h1: clamp(2.5rem, 6vw, 4rem);       /* 40-64px */
  --fluid-h2: clamp(2rem, 5vw, 3rem);         /* 32-48px */
  --fluid-h3: clamp(1.5rem, 4vw, 2.25rem);    /* 24-36px */
  --fluid-h4: clamp(1.25rem, 3vw, 1.75rem);   /* 20-28px */
  --fluid-body: clamp(1rem, 2.5vw, 1.125rem); /* 16-18px */
}
```

#### Swiss Typography Characteristics
```css
/* Font features for premium typography */
html {
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
}

/* Text balancing for headlines */
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
  font-weight: 700; /* Bold, never regular */
  letter-spacing: -0.02em; /* Tight tracking */
}

/* Body text optimization */
p {
  line-height: 1.6;
  font-weight: 400;
  color: var(--swiss-gray-700);
}
```

## Page Layout Patterns

### Homepage Layout
**Asymmetric Hero + Content Paths**

```html
<section class="swiss-grid">
  <!-- Hero: Asymmetric 7/5 split -->
  <div class="swiss-col-7">
    <h1>Director of Enterprise AI at NJIT</h1>
    <p>Building the future of AI education...</p>
  </div>
  <div class="swiss-col-5">
    <dl> <!-- Definition list for structured data -->
      <dt>Mission</dt>
      <dd>Making AI accessible to everyone...</dd>
    </dl>
  </div>
  
  <!-- Four Content Paths: 2x2 Grid -->
  <div class="swiss-col-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article data-path-card>Students</article>
      <article data-path-card>Employers</article>
      <article data-path-card>Educators</article>  
      <article data-path-card>Practitioners</article>
    </div>
  </div>
</section>
```

### Blog Post Layout
**Content-Focused with Structured Navigation**

```html
<article class="swiss-grid">
  <!-- Content: 8/4 split for readability -->
  <div class="swiss-col-8">
    <header>
      <h1>{{ title }}</h1>
      <div class="swiss-divider"></div>
    </header>
    <div class="prose-swiss">
      {{ content | safe }}
    </div>
  </div>
  
  <!-- Sidebar: Table of contents + metadata -->
  <aside class="swiss-col-4">
    <dl class="post-meta">
      <dt>Published</dt>
      <dd>{{ date | readableDate }}</dd>
      <dt>Reading Time</dt>
      <dd>{{ content | readingTime }} min</dd>
    </dl>
  </aside>
</article>
```

### Project Showcase Layout
**Grid-Based Portfolio Display**

```html
<section class="swiss-grid">
  <!-- Header: Full width -->
  <div class="swiss-col-12">
    <h1>Featured Projects</h1>
    <div class="swiss-divider"></div>
  </div>
  
  <!-- Projects: Asymmetric grid -->
  <div class="swiss-col-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
      {% for project in collections.projects %}
      <article class="project-card">
        <span class="project-number">{{ loop.index | padZero }}</span>
        <h2>{{ project.data.title }}</h2>
        <p>{{ project.data.description }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
```

## Component Layout Patterns

### Swiss Card Components
```css
.swiss-card {
  border: 2px solid var(--swiss-black);
  background-color: var(--swiss-white);
  padding: var(--space-3xl);
  position: relative;
}

.swiss-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background-color: var(--swiss-red);
}
```

### Button Layout System
```css
.btn-swiss {
  min-height: 56px;
  padding: 1rem 2rem;
  border: 2px solid var(--swiss-black);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Button grouping */
.btn-group {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}

@media (max-width: 640px) {
  .btn-group {
    flex-direction: column;
    width: 100%;
  }
}
```

### Navigation Layout
```html
<!-- Desktop: Horizontal Swiss Nav -->
<nav class="hidden lg:flex items-center gap-12">
  <a href="/" class="nav-link">Home</a>
  <a href="/blog/" class="nav-link">Blog</a>
  <a href="/projects/" class="nav-link">Projects</a>
</nav>

<!-- Mobile: Full-Screen Swiss Overlay -->
<div id="mobile-menu" class="mobile-nav-overlay">
  <nav class="mobile-nav">
    <ul class="mobile-nav-list">
      <li><a href="/" class="mobile-nav-link">01 Home</a></li>
      <li><a href="/blog/" class="mobile-nav-link">02 Blog</a></li>
      <li><a href="/projects/" class="mobile-nav-link">03 Projects</a></li>
    </ul>
  </nav>
</div>
```

## Spacing System

### Mathematical Spacing Scale
```css
:root {
  /* Base unit: 4px */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 0.75rem;   /* 12px */
  --space-lg: 1rem;      /* 16px */
  --space-xl: 1.5rem;    /* 24px */
  --space-2xl: 2rem;     /* 32px */
  --space-3xl: 3rem;     /* 48px */
  --space-4xl: 4rem;     /* 64px */
  --space-5xl: 5rem;     /* 80px */
}
```

### Vertical Rhythm
```css
/* Consistent vertical spacing */
.section-spacing {
  padding-top: var(--space-5xl);
  padding-bottom: var(--space-5xl);
}

.content-spacing > * + * {
  margin-top: var(--space-lg);
}

.large-spacing > * + * {
  margin-top: var(--space-2xl);
}
```

## Layout Interactions

### Hover States
```css
/* Swiss geometric hover effects */
.swiss-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.swiss-card:hover::before {
  width: 120px; /* Expand red accent line */
}
```

### Focus States
```css
/* Accessible focus indicators */
.swiss-card:focus-within {
  outline: 2px solid var(--swiss-red);
  outline-offset: 4px;
}

/* Swiss button focus */
.btn-swiss:focus {
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
}
```

## Layout Responsive Behavior

### Content Reflow Strategy
```css
/* Desktop: Side-by-side layout */
@media (min-width: 1024px) {
  .content-with-sidebar {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-3xl);
  }
}

/* Tablet: Reduced gap, maintained proportion */
@media (min-width: 768px) and (max-width: 1023px) {
  .content-with-sidebar {
    gap: var(--space-xl);
  }
}

/* Mobile: Stacked layout */
@media (max-width: 767px) {
  .content-with-sidebar {
    display: block;
  }
  
  .content-with-sidebar > * + * {
    margin-top: var(--space-2xl);
  }
}
```

### Swiss Grid Adaptation
```css
/* Grid column adaptation across breakpoints */
.swiss-adaptive {
  /* Desktop: Precise column control */
  grid-column: span 5;
}

@media (max-width: 1023px) {
  .swiss-adaptive {
    /* Tablet: Simplified proportions */
    grid-column: span 4;
  }
}

@media (max-width: 767px) {
  .swiss-adaptive {
    /* Mobile: Full width for clarity */
    grid-column: span 4;
  }
}
```

## Layout Performance

### Layout Optimization
```css
/* Prevent layout shifts */
.swiss-grid {
  min-height: 100vh; /* Stable initial layout */
}

/* Efficient CSS Grid */
.swiss-grid {
  contain: layout style;
}

/* GPU acceleration for animations */
.swiss-card {
  will-change: transform;
  transform: translateZ(0);
}
```

### Critical Layout CSS
```css
/* Above-the-fold layout styles */
.swiss-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--swiss-white);
  border-bottom: 3px solid var(--swiss-black);
}

.swiss-hero {
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-4xl);
}
```

## Layout Accessibility

### Screen Reader Layout
```html
<!-- Logical heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

<!-- Landmark navigation -->
<header role="banner">
<main role="main">
<nav role="navigation">
<footer role="contentinfo">
```

### Keyboard Navigation Layout
```css
/* Focus flow follows visual hierarchy */
.swiss-grid {
  /* Natural tab order matches grid flow */
  grid-auto-flow: row;
}

/* Skip links for keyboard users */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

## Swiss Layout Philosophy

### Key Principles Applied
1. **Function Over Form**: Layout serves content, never decorates
2. **Mathematical Precision**: All spacing based on systematic ratios
3. **Asymmetric Balance**: Visual weight, not symmetrical placement
4. **Negative Space**: White space as active design element
5. **Typographic Hierarchy**: Clear information organization
6. **Grid Constraint**: All elements align to systematic grid

### Layout Decision Framework
**For any layout choice, ask:**
- Does it improve content clarity?
- Is it mathematically systematic?
- Does it reduce cognitive load?
- Is it accessible to all users?
- Does it scale across devices?

---

*Last Updated: December 10, 2025*
*Layout System Version: 1.0*
