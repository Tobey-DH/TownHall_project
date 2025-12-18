# Brand Guide - Newark AI Community Town Hall

**Date**: December 17, 2025  
**Project**: Newark AI Community Town Hall  
**Design System**: Swiss International Typographic Style

---

## 1. Brand Overview

### Mission
Empowering Newark residents with AI knowledge through free town halls, training sessions, and community support.

### Target Audience
- Newark residents (all ages, all technical backgrounds)
- Local educators and community organizers
- Small business owners
- NJIT student volunteers

### Brand Values
- **Accessible**: Plain language, no jargon, welcoming to beginners
- **Transparent**: Open about AI, privacy, and data use
- **Community-Driven**: Built by and for Newark residents
- **Professional**: Trustworthy, credible, well-designed

---

## 2. Visual Identity

### Logo
**Current Status**: Text-based logo  
**Text**: "Newark AI Community"  
**Treatment**: Clean, sans-serif, black text with red accent available

### Logo Usage Guidelines
- Minimum size: 120px wide for digital
- Clear space: Minimum 20px on all sides
- Do not distort, rotate, or apply effects
- Always maintain readability

---

## 3. Color Palette

### Primary Colors

#### Swiss Black
- **Hex**: `#000000`
- **Usage**: Primary text, headings, structure, borders
- **Contrast**: Use on white/light backgrounds only

#### Swiss White
- **Hex**: `#FFFFFF`
- **Usage**: Backgrounds, cards, contrast elements
- **Contrast**: Pairs with all colors in the palette

#### Swiss Red (Accent)
- **Hex**: `#E53E3E`
- **Usage**: CTAs, links, highlights, featured elements
- **Accessibility**: Meets WCAG AA contrast on white (4.53:1)

### Grayscale Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gray 100 | `#F5F5F5` | Light backgrounds, subtle sections |
| Gray 200 | `#E5E5E5` | Borders, dividers |
| Gray 300 | `#D4D4D4` | Disabled states |
| Gray 400 | `#A3A3A3` | Placeholder text |
| Gray 500 | `#737373` | Secondary text |
| Gray 600 | `#525252` | Body text alternative |
| Gray 700 | `#404040` | Body text |
| Gray 800 | `#262626` | Strong emphasis |
| Gray 900 | `#171717` | Maximum emphasis |

### Color Combinations

**High Contrast (Preferred)**
- Black text on white background (21:1)
- White text on black background (21:1)
- Red on white (4.53:1)

**Do Not Use**
- Red text on black background (poor contrast)
- Gray 400 or lighter for body text
- Multiple colors in a single heading

---

## 4. Typography

### Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Rationale**: System fonts ensure:
- Instant loading (no web font delay)
- Native OS appearance
- Excellent readability
- Performance optimization

### Type Scale (Fluid Typography)

We use `clamp()` for responsive typography:

| Element | Size | CSS Variable |
|---------|------|--------------|
| H1 | `clamp(2.5rem, 5vw, 4rem)` | `--fluid-h1` |
| H2 | `clamp(2rem, 4vw, 3rem)` | `--fluid-h2` |
| H3 | `clamp(1.5rem, 3vw, 2rem)` | `--fluid-h3` |
| H4 | `clamp(1.25rem, 2.5vw, 1.5rem)` | `--fluid-h4` |
| Body Large | `clamp(1.125rem, 2vw, 1.25rem)` | `--fluid-body-lg` |
| Body | `clamp(1rem, 1.5vw, 1.125rem)` | `--fluid-body` |
| Body Small | `0.875rem` | `--fluid-body-sm` |

### Font Weights

- **Regular**: 400 (body text)
- **Semibold**: 600 (subheadings, emphasis)
- **Bold**: 700 (headings, buttons)

### Line Height

- **Headings**: 1.2 (tight for visual impact)
- **Body Text**: 1.6 (comfortable reading)
- **Small Text**: 1.4

### Usage Examples

```css
/* Heading 1 - Page Title */
h1 {
  font-size: var(--fluid-h1);
  font-weight: 700;
  line-height: 1.2;
  color: var(--swiss-black);
}

/* Body Text */
p {
  font-size: var(--fluid-body);
  font-weight: 400;
  line-height: 1.6;
  color: var(--swiss-gray-700);
}

/* Button Text */
button {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
```

---

## 5. Spacing System

### Mathematical Ratios
Based on Swiss design principles using consistent mathematical spacing:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 0.25rem (4px) | Minimal spacing |
| `sm` | 0.5rem (8px) | Tight spacing |
| `md` | 0.75rem (12px) | Small elements |
| `lg` | 1rem (16px) | Base spacing |
| `xl` | 1.5rem (24px) | Medium spacing |
| `2xl` | 2rem (32px) | Large spacing |
| `3xl` | 3rem (48px) | Section spacing |
| `4xl` | 4rem (64px) | Major sections |
| `5xl` | 5rem (80px) | Hero spacing |

### Grid System

**12-Column Grid**
- Container max-width: 1440px
- Gutter: 24px (1.5rem)
- Margin: 16px mobile, 24px tablet, 32px desktop

**Responsive Columns**
- `swiss-col-12`: Full width (1/1)
- `swiss-col-8`: Two-thirds (2/3)
- `swiss-col-7`: 7/12 (primary content)
- `swiss-col-6`: Half (1/2)
- `swiss-col-5`: 5/12 (sidebar)
- `swiss-col-4`: One-third (1/3)
- `swiss-col-3`: One-quarter (1/4)

---

## 6. Components

### Buttons

#### Primary Button (Swiss)
```css
.btn-swiss {
  background-color: var(--swiss-black);
  color: var(--swiss-white);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.25rem;
  transition: all 0.2s;
}
.btn-swiss:hover {
  background-color: var(--swiss-gray-800);
}
```

**Usage**: Main CTAs, primary actions

#### Red Button (Accent)
```css
.btn-swiss-red {
  background-color: var(--swiss-red);
  color: var(--swiss-white);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.25rem;
}
.btn-swiss-red:hover {
  background-color: #C53030; /* Darker red */
}
```

**Usage**: Featured events, urgent actions, highlights

#### Outline Button
```css
.btn-swiss-outline {
  background-color: transparent;
  color: var(--swiss-black);
  border: 2px solid var(--swiss-black);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.25rem;
}
.btn-swiss-outline:hover {
  background-color: var(--swiss-black);
  color: var(--swiss-white);
}
```

**Usage**: Secondary actions, alternative options

### Cards

```css
.swiss-card {
  background: white;
  border: 1px solid var(--swiss-gray-200);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

**Usage**: Event listings, blog posts, content blocks

### Event Cards

```css
.event-card {
  background: white;
  border: 1px solid var(--swiss-gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

**Features**:
- Event type tag (online/in-person)
- Date and time prominent
- Location display
- CTA button

### Tags

```css
.event-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.25rem;
  background-color: var(--swiss-gray-100);
  color: var(--swiss-gray-700);
}

.event-tag.online {
  background-color: #E0F2FE;
  color: #0369A1;
}
```

### Forms

```css
.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--swiss-gray-300);
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: inherit;
}

.form-input:focus {
  outline: 2px solid var(--swiss-red);
  outline-offset: 2px;
  border-color: var(--swiss-red);
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--swiss-black);
}
```

### Section Labels

```css
.swiss-section-label {
  display: block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--swiss-red);
  margin-bottom: 0.5rem;
}
```

**Usage**: Section headers like "Welcome", "Events", "Knowledge Hub"

---

## 7. Layout Principles

### Swiss Design Approach

1. **Grid-Based Layouts**
   - Everything aligns to 12-column grid
   - Consistent margins and gutters
   - Mathematical precision

2. **Hierarchy Through Size & Weight**
   - No color-based hierarchy (except red accent)
   - Use scale and weight for emphasis
   - White space defines relationships

3. **Asymmetric Balance**
   - 7/5 column splits common
   - 8/4 for content/sidebar
   - Avoid perfect 6/6 splits

4. **Minimal Decoration**
   - No gradients or shadows (except subtle card shadows)
   - No rounded corners except subtle (4-8px)
   - Focus on content and typography

### Touch Targets

**Minimum Sizes** (WCAG 2.1 Compliance):
- Buttons: 44x44px minimum
- Links: 44px height with adequate spacing
- Form inputs: 44px minimum height
- Mobile menu items: 48px height

---

## 8. Tone & Voice

### Writing Guidelines

**Characteristics**:
- **Plain Language**: No jargon, explain technical terms
- **Friendly**: Warm but professional
- **Educational**: Teaching, not lecturing
- **Inclusive**: "We" and "you", not "us vs. them"
- **Action-Oriented**: Clear next steps

### Voice Examples

❌ **Don't Say**:
> "Leverage AI-powered ML algorithms to optimize your SMB operational efficiency metrics."

✅ **Do Say**:
> "Use free AI tools to save time on tasks like writing emails, creating social media posts, and organizing customer information."

❌ **Don't Say**:
> "Prerequisites: Basic understanding of computational paradigms"

✅ **Do Say**:
> "No experience needed—just bring your curiosity!"

### Tone by Section

| Section | Tone | Example |
|---------|------|---------|
| Homepage Hero | Welcoming, Clear | "AI Education for Every Newark Resident" |
| Event Listings | Helpful, Specific | "Learn practical AI skills you can use tomorrow" |
| Blog Posts | Educational, Plain | "What is AI? A Simple Explanation" |
| Forms | Supportive, Brief | "We'll send you a confirmation email" |
| About | Mission-Driven | "Empowering Newark residents with AI knowledge" |

### Vocabulary Guidelines

**Use**: Plain English
- "Learn" not "Acquire knowledge"
- "Free" not "No-cost"
- "Easy to use" not "User-friendly"
- "Help" not "Facilitate"

**Avoid**: 
- Corporate jargon
- Academic terminology without explanation
- Acronyms without definition
- Passive voice

---

## 9. Accessibility Standards

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Normal text: Minimum 4.5:1
- Large text (18pt+): Minimum 3:1
- UI components: Minimum 3:1

**Text Size**:
- Base text: Minimum 16px (1rem)
- Small text: Minimum 14px (0.875rem)
- Touch targets: Minimum 44x44px

**Keyboard Navigation**:
- Visible focus indicators (red outline, 2px)
- Logical tab order
- Skip-to-content link

**Screen Readers**:
- Semantic HTML5 elements
- ARIA labels where needed
- Alt text for all images

### Accessibility Checklist

- ✅ Color contrast ratios meet WCAG AA
- ✅ All interactive elements keyboard accessible
- ✅ Focus indicators visible
- ✅ Skip-to-content link present
- ✅ Semantic HTML (header, nav, main, footer)
- ✅ Form labels associated with inputs
- ✅ Alt text for images
- ✅ Responsive text (no horizontal scrolling)

---

## 10. Brand Application Examples

### Event Announcement

**Visual Hierarchy**:
1. Red section label: "UPCOMING EVENT"
2. Black H2: Event title
3. Gray 700 body: Date, time, location
4. Red button: "Register Now"

### Blog Post Card

**Visual Hierarchy**:
1. Gray 600 meta: Date
2. Black H3: Article title (linked, hover to red)
3. Gray 700 body: Excerpt
4. Red link: "Read More →"

### Call-to-Action Section

**Pattern**:
- Light gray background (swiss-gray-100)
- Centered content
- H2 question or statement
- Body text explanation
- Two buttons: Primary (red) + Secondary (outline)

---

## 11. Do's and Don'ts

### Visual Design

✅ **Do**:
- Use black and white as primary colors
- Use red sparingly for emphasis
- Maintain consistent spacing
- Align to grid
- Use plenty of white space

❌ **Don't**:
- Add multiple colors
- Use gradients or effects
- Create decorative elements
- Ignore the grid
- Crowd content

### Typography

✅ **Do**:
- Use system fonts
- Maintain hierarchy through size/weight
- Keep line length 60-80 characters
- Use adequate line height (1.6 for body)

❌ **Don't**:
- Mix multiple font families
- Use all caps for paragraphs
- Set body text below 16px
- Use center alignment for long text

### Content

✅ **Do**:
- Write in plain language
- Explain technical terms
- Use active voice
- Be specific and actionable

❌ **Don't**:
- Use jargon without explanation
- Write in passive voice
- Be vague or generic
- Assume technical knowledge

---

## 12. File Resources

### Design System Implementation

- **CSS Variables**: `src/styles/main.css` (lines 1-50)
- **Tailwind Config**: `tailwind.config.js`
- **Component Examples**: See all `.njk` templates in `src/`

### Reference Documentation

- Swiss Design Reference: `References/css-architecture-notes.md`
- Layout Approach: `References/layout-approach.md`
- Accessibility: `References/accessibility-findings.md`

---

## 13. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | December 17, 2025 | Initial brand guide created |

---

**Questions?** Refer to the project README or design system documentation in `References/`.
