# Newark AI Town Hall - Complete Site Structure

## 📁 File Structure

```
TownHall_project/
│
├── 📄 Configuration Files
│   ├── .eleventy.js              # Eleventy site generator config
│   ├── package.json              # Dependencies and scripts
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # CSS processing config
│   ├── .gitignore                # Git ignore rules
│   ├── .env.example              # Environment variables template
│   │
├── 📚 Documentation
│   ├── README.md                 # Complete technical documentation
│   ├── QUICKSTART.md             # 5-minute setup guide
│   ├── AUTOMATION_GUIDE.md       # Integration instructions
│   ├── PROJECT_SUMMARY.md        # This build summary
│   ├── SITE_STRUCTURE.md         # This file
│   │
├── 📖 References/                # Design & optimization references
│   ├── accessibility-findings.md
│   ├── css-architecture-notes.md
│   ├── eleventy-config-analysis.md
│   ├── harvest-notes.md
│   ├── layout-approach.md
│   ├── performance-techniques.md
│   ├── seo-strategy.md
│   └── technical-analysis.md
│
└── 📂 src/                       # Source files (built to _site/)
    │
    ├── 🗂️ _data/                 # Site-wide data
    │   └── site.js               # Global configuration
    │
    ├── 🎨 _includes/             # Templates & components
    │   ├── base.njk              # Base HTML layout
    │   ├── header.njk            # Site header
    │   ├── footer.njk            # Site footer
    │   ├── event-single.njk      # Event detail template
    │   └── blog-single.njk       # Blog post template
    │
    ├── 📅 events/                # Event content
    │   ├── index.njk             # Events listing page
    │   ├── ai-basics-town-hall.md
    │   ├── ai-for-small-business.md
    │   └── ai-safety-privacy.md
    │
    ├── 📝 blog/                  # Blog content
    │   ├── index.njk             # Blog listing page
    │   ├── feed.njk              # RSS feed
    │   ├── what-is-ai-simple-explanation.md
    │   ├── ai-help-small-business.md
    │   └── ai-privacy-guide.md
    │
    ├── 💅 styles/                # CSS files
    │   └── main.css              # Main stylesheet with Swiss design system
    │
    ├── 🎭 js/                    # JavaScript files
    │   └── mobile-menu.js        # Mobile menu functionality
    │
    ├── 🖼️ images/                # Image assets (add your images here)
    │
    ├── 📄 Pages (root level)
    │   ├── index.njk             # Homepage
    │   ├── about.njk             # About page
    │   ├── get-involved.njk      # Volunteer/community page
    │   ├── sitemap.njk           # XML sitemap
    │   ├── robots.txt            # Search engine rules
    │   └── favicon.ico           # Site icon (placeholder)
    │
    └── 🏗️ _site/                 # Generated site (created by build)
        └── (Built HTML, CSS, JS files - do not edit directly)
```

## 🌐 URL Structure

### Main Pages
```
/                           → Homepage
/about/                     → About Us
/get-involved/              → Get Involved (Volunteer)
```

### Events
```
/events/                    → Events listing
/events/ai-basics-town-hall/              → Event detail
/events/ai-for-small-business/            → Event detail
/events/ai-safety-privacy/                → Event detail
```

### Blog
```
/blog/                      → Blog listing
/blog/feed.xml             → RSS feed
/blog/what-is-ai-simple-explanation/      → Blog post
/blog/ai-help-small-business/             → Blog post
/blog/ai-privacy-guide/                   → Blog post
```

### SEO & Utilities
```
/sitemap.xml               → XML sitemap
/robots.txt                → Search engine instructions
```

## 🎨 Design System Components

### Layout Components
- `swiss-grid` - 12-column responsive grid
- `swiss-container` - Content width container
- `swiss-section` - Section spacing wrapper
- `swiss-col-[1-12]` - Grid column spans

### Content Components
- `swiss-card` - Card container
- `event-card` - Event listing card
- `swiss-border-accent` - Red left border accent
- `blog-content` - Blog post content wrapper

### Interactive Components
- `btn-swiss` - Primary button (black)
- `btn-swiss-outline` - Outlined button
- `btn-swiss-red` - Red accent button
- `form-input` - Text input styling
- `form-textarea` - Textarea styling
- `form-select` - Select dropdown styling

### Navigation
- `site-header` - Sticky header
- `site-nav` - Navigation menu
- `mobile-menu-button` - Mobile menu toggle
- `site-footer` - Footer with columns

## 📊 Data Flow

### Collections (Auto-generated by Eleventy)

**Events Collection**
- Source: `src/events/*.md`
- Sorted by: Event date (ascending)
- Split into: `collections.events` (upcoming), `collections.pastEvents`
- Used in: Homepage, Events listing, Event details

**Blog Collection**
- Source: `src/blog/*.md`
- Sorted by: Publish date (descending)
- Used in: Homepage, Blog listing, Blog details, RSS feed

### Site Data (Global)
- Source: `src/_data/site.js`
- Available everywhere as: `site.title`, `site.social.discord`, etc.
- Contains: Site config, navigation, social links, integration settings

## 🔄 Build Process

```
npm start → Development
  ├── Tailwind CSS watch mode
  ├── Eleventy dev server (port 8080)
  ├── Auto-reload on changes
  └── Source maps enabled

npm run build → Production
  ├── Build CSS (minified)
  ├── Generate static HTML
  ├── Optimize images
  ├── Create sitemap
  └── Output to _site/
```

## 🎯 Key Features Map

### For Visitors
- **Homepage** → Discover events & content
- **Events Page** → Browse & register for town halls
- **Blog** → Learn about AI in plain language
- **About** → Understand the mission
- **Get Involved** → Volunteer or join Discord

### For Administrators
- **Add Event** → Create `.md` file in `src/events/`
- **Add Blog Post** → Create `.md` file in `src/blog/`
- **Update Content** → Edit existing `.md` files
- **Configure Site** → Edit `src/_data/site.js`
- **Deploy** → Run `npm run build`, upload `_site/`

### For Developers
- **Components** → `src/_includes/*.njk`
- **Styles** → `src/styles/main.css`
- **Scripts** → `src/js/*.js`
- **Config** → `.eleventy.js`, `tailwind.config.js`

## 🔗 Integration Points

### Forms (Ready for Integration)
- Event Registration → `src/_includes/event-single.njk`
- Volunteer Application → `src/get-involved.njk`
- Action URLs: Update to your form service

### Discord (Setup Required)
- Webhook URL → `src/_data/site.js`
- Auto-post script → See `AUTOMATION_GUIDE.md`
- Channel structure → Documented in About page

### Email (Setup Required)
- Mailing list → Form action URLs
- Confirmation templates → See `AUTOMATION_GUIDE.md`
- HubSpot config → `src/_data/site.js`

### Analytics (Optional)
- Google Analytics → Add to `src/_includes/base.njk`
- Plausible → Add script tag
- Track events → Custom event tracking

## 📱 Responsive Breakpoints

```css
Mobile First (default)
  Base styles for < 768px

@media (min-width: 768px)
  Tablet styles
  8-column grid

@media (min-width: 1024px)
  Desktop styles
  12-column grid
```

## ♿ Accessibility Features

### Semantic Structure
- `<header>` → Site header
- `<nav>` → Navigation menus
- `<main>` → Main content
- `<article>` → Blog posts & events
- `<aside>` → Sidebar content
- `<footer>` → Site footer

### ARIA Landmarks
- `role="banner"` → Header
- `role="navigation"` → Nav
- `role="contentinfo"` → Footer
- `aria-label` → Screen reader labels
- `aria-expanded` → Menu states

### Keyboard Navigation
- Tab order → Logical flow
- Focus visible → Red outline
- Skip to content → Hidden until focused
- Escape key → Close mobile menu

## 🎨 Color Usage

```
Swiss Black (#000000)
  → Headings
  → Borders
  → Primary buttons
  → Navigation

Swiss White (#FFFFFF)
  → Backgrounds
  → Button text
  → Contrast

Swiss Red (#E53E3E)
  → Accent color
  → CTAs
  → Links on hover
  → Event tags (online)

Swiss Gray Scale
  → Body text (gray-700)
  → Metadata (gray-600)
  → Borders (gray-200, gray-300)
  → Backgrounds (gray-100)
```

## 📈 Performance Optimizations

- ✅ Static generation (no server processing)
- ✅ Minimal CSS (~12KB gzipped)
- ✅ Minimal JS (~15KB total)
- ✅ No jQuery or heavy frameworks
- ✅ Lazy loading images
- ✅ Font subsetting (system fonts)
- ✅ Critical CSS inline (if needed)
- ✅ Asset optimization pipeline

## 🔒 Security Considerations

- ✅ No server-side code (static site)
- ✅ Form submissions → External services
- ✅ No database (Markdown files)
- ✅ HTTPS recommended for deployment
- ✅ API keys → Environment variables
- ✅ No sensitive data in repository

---

**Site Structure Version**: 1.0  
**Last Updated**: December 2025  
**Maintained By**: Newark AI Community Team
