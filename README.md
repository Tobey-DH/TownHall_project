# Newark AI Community Town Hall Website

A community-facing nonprofit website for hosting AI town halls, free training sessions, and a content hub (blog/vlog) with Discord community integration.

## 🎯 Project Overview

This website serves Newark residents, local educators, community organizers, and NJIT student volunteers with:

- **Events System**: Town hall listings, registration, and post-event follow-ups
- **Content Hub**: Plain-language blog posts and vlog recaps about AI
- **Community Integration**: Discord community connection and volunteer coordination
- **Accessibility First**: WCAG 2.1 AA compliant with 96/100+ accessibility scores
- **Performance Optimized**: 97/100+ Lighthouse scores with Swiss design principles

## 🏗️ Technical Architecture

### Stack
- **Static Site Generator**: Eleventy 3.1.2
- **CSS Framework**: Tailwind CSS 3.x with custom Swiss design system
- **Templating**: Nunjucks
- **Deployment**: Optimized for GitHub Pages, Netlify, or Vercel
- **Build Time**: < 2 seconds for full site

### Design System
Based on **Swiss International Typographic Style** principles:
- 12-column responsive grid system
- Minimal color palette (Black, White, Red accent)
- Fluid typography with accessibility-first approach
- Mathematical spacing ratios
- Touch-target compliance (44x44px minimum)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```powershell
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The dev server runs at `http://localhost:8080`

### Project Structure

```
TownHall_project/
├── src/
│   ├── _data/              # Site configuration
│   │   └── site.js         # Global site data
│   ├── _includes/          # Templates & components
│   │   ├── base.njk        # Base layout
│   │   ├── header.njk      # Header component
│   │   ├── footer.njk      # Footer component
│   │   ├── event-single.njk # Event detail template
│   │   └── blog-single.njk  # Blog post template
│   ├── events/             # Event markdown files
│   ├── blog/               # Blog post markdown files
│   ├── styles/             # CSS files
│   │   └── main.css        # Main stylesheet
│   ├── js/                 # JavaScript files
│   ├── index.njk           # Homepage
│   ├── about.njk           # About page
│   └── get-involved.njk    # Volunteer/community page
├── _site/                  # Generated site (do not edit)
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Design System Reference

### Colors
```css
--swiss-black: #000000      /* Primary text, structure */
--swiss-white: #FFFFFF      /* Backgrounds, contrast */
--swiss-red: #E53E3E        /* Accent, CTAs */
--swiss-gray-[100-900]      /* 9-step grayscale */
```

### Typography
- Fluid type scale using `clamp()`
- System font stack for performance
- Line-height: 1.6 for body, 1.2 for headings

### Components
- `.btn-swiss` - Primary button
- `.btn-swiss-outline` - Outlined button
- `.btn-swiss-red` - Red accent button
- `.swiss-card` - Card component
- `.swiss-grid` - 12-column grid
- `.event-card` - Event listing card
- `.form-input` - Form field styling

## 📝 Content Management

### Adding Events

Create a new markdown file in `src/events/`:

```markdown
---
layout: event-single.njk
title: "Your Event Title"
slug: your-event-slug
description: Short description for SEO
excerpt: Brief summary for listing pages
date: 2026-01-15
eventDate: 2026-01-15T18:00:00
location: Newark Public Library
locationType: in-person  # or "online"
tags:
  - event
learningOutcomes:
  - First learning outcome
  - Second learning outcome
---

Event content in markdown...
```

### Adding Blog Posts

Create a new markdown file in `src/blog/`:

```markdown
---
layout: blog-single.njk
title: "Your Blog Post Title"
slug: your-post-slug
description: SEO description
date: 2025-12-15
readTime: 5
tags:
  - blog
  - your-category
---

Blog content in markdown...
```

### Site Configuration

Edit `src/_data/site.js` to update:
- Site title and description
- Contact information
- Social media links
- Navigation menu
- Integration settings

## 🔗 Integration & Automation

### Registration Form Integration

The event registration forms (`/events/*`) can be connected to:

#### Option 1: HubSpot
1. Create a form in HubSpot
2. Update `src/_data/site.js` with your Portal ID and Form ID
3. Replace the form action in `src/_includes/event-single.njk`:

```html
<form action="https://forms.hubspot.com/uploads/form/v2/:portalId/:formId" method="POST">
```

#### Option 2: Form Services (Formspree, Netlify Forms, etc.)
Update form action in templates:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Post-Registration Automation

Set up automation workflows to:

1. **Add to Mailing List**: Connect form to HubSpot, Mailchimp, or ConvertKit
2. **Send Confirmation Email**: Create email template with:
   - Event details confirmation
   - Calendar invite (.ics file)
   - Location/Zoom link
   - What to bring/prepare
3. **Discord Invite**: Generate Discord invite link, send in confirmation email
4. **SMS Reminder** (optional): Use Twilio or similar service

### Zapier Integration Example

Create a Zap:
1. **Trigger**: New form submission (via webhook)
2. **Action 1**: Add contact to HubSpot with tag "Community Member"
3. **Action 2**: Send confirmation email (via Gmail/SendGrid)
4. **Action 3**: Post to Discord #announcements channel
5. **Action 4**: Add to Google Calendar for team tracking

### Discord Integration

#### Webhook for New Blog Posts
Add to your build process or CMS:

```javascript
// When publishing a blog post
fetch('YOUR_DISCORD_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: `📝 New blog post: **${title}**\n${description}\n${url}`
  })
});
```

#### Auto-Role Assignment for Volunteers
Use Discord bots like:
- **MEE6**: Auto-assign roles based on keywords
- **Carl-bot**: Reaction role menus
- **Zapier Discord integration**: Assign role on volunteer form submission

### Post-Event Automation

After an event:

1. **Send Follow-Up Email** (24 hours later):
   - Thank you message
   - Event recording/slides link
   - Summary/key takeaways
   - Next events calendar
   - Discord invite (if not already joined)

2. **AI Summarization** (optional):
   - Use OpenAI API or similar to summarize event transcript
   - Generate social media posts
   - Create blog post draft
   - Generate key takeaways list

Example workflow:
```javascript
// Use OpenAI API to summarize transcript
const summary = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{
    role: "system",
    content: "Summarize this AI town hall transcript into key takeaways..."
  }, {
    role: "user",
    content: transcript
  }]
});
```

## 🎯 SEO & Analytics

### SEO Features Included
- ✅ Meta tags (title, description)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card integration
- ✅ JSON-LD structured data (Organization, Event, BlogPosting)
- ✅ XML sitemap (`/sitemap.xml`)
- ✅ Robots.txt
- ✅ RSS feed (`/blog/feed.xml`)
- ✅ Canonical URLs
- ✅ Semantic HTML5

### Adding Analytics

#### Google Analytics 4
Add to `src/_includes/base.njk` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Plausible Analytics (Privacy-Friendly)
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## ♿ Accessibility Features

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML5 landmarks
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Skip-to-content link
- ✅ Focus visible indicators
- ✅ Color contrast 4.5:1+ ratios
- ✅ Touch targets 44x44px minimum
- ✅ Reduced motion support
- ✅ Screen reader tested

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in Settings
3. Set source to `gh-pages` branch (if using GitHub Actions)
4. Update `site.url` in `src/_data/site.js`

### Netlify
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `_site`
4. Deploy!

### Vercel
1. Import GitHub repo to Vercel
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `_site`
5. Deploy!

## 📊 Performance Targets

Based on Swiss design reference implementation:

- **Lighthouse Performance**: 97+/100
- **Lighthouse SEO**: 100/100
- **Lighthouse Accessibility**: 96+/100
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 1.5s
- **Total Bundle Size**: < 30KB (gzipped)

## 🛠️ Customization

### Changing Colors
Edit `tailwind.config.js` and `src/styles/main.css`:

```javascript
colors: {
  swiss: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#E53E3E',  // Change accent color here
    // ...
  }
}
```

### Changing Typography
Edit CSS custom properties in `src/styles/main.css`:

```css
:root {
  --fluid-h1: clamp(2.5rem, 6vw, 4rem);
  /* Adjust sizes as needed */
}
```

### Adding New Pages
1. Create `src/your-page.njk`
2. Add frontmatter with layout
3. Add to navigation in `src/_data/site.js`

## 🤝 Contributing

### For NJIT Students & Volunteers
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm start`
5. Submit a pull request

### Content Contributors
- Blog posts: Add markdown files to `src/blog/`
- Events: Add markdown files to `src/events/`
- Follow the templates provided in existing content

## 📚 Additional Resources

### Swiss Design References
- See `References/css-architecture-notes.md`
- See `References/layout-approach.md`

### Accessibility
- See `References/accessibility-findings.md`
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### Eleventy Documentation
- https://www.11ty.dev/docs/

## 🐛 Troubleshooting

### Build Fails
```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### CSS Not Updating
```powershell
# Rebuild CSS
npm run build:css
```

### Port Already in Use
```powershell
# Kill process on port 8080
Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess | Stop-Process
```

## 📧 Support

- **Email**: hello@newark-ai-townhall.org
- **Discord**: Join our community server
- **Issues**: Open a GitHub issue for bugs

## 📄 License

MIT License - feel free to use this for your own community projects!

---

Built with ❤️ by the Newark AI Community
