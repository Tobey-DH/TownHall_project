# Information Architecture - Newark AI Community Town Hall

**Date**: December 17, 2025  
**Project**: Newark AI Community Town Hall  
**Purpose**: Document the complete site structure, content models, and navigation architecture

---

## 1. Site Overview

### Project Goals
- Educate Newark residents about AI through free town halls and training
- Provide plain-language educational content (blog/resources)
- Enable event registration and community engagement
- Connect residents to Discord community and volunteer opportunities

### Target Users
- **Primary**: Newark residents with low-to-moderate tech literacy
- **Secondary**: Local educators, community organizers
- **Tertiary**: Small business owners, NJIT student volunteers

---

## 2. Site Structure (Sitemap)

```
Newark AI Community Town Hall
│
├── Home (/)
│   ├── Hero Section
│   ├── What You'll Get
│   ├── Upcoming Events Preview (3 events)
│   ├── Featured Blog Posts (3 posts)
│   └── Community CTA
│
├── Events (/events/)
│   ├── Events Listing
│   │   ├── Upcoming Events (filtered by date)
│   │   └── Past Events Archive
│   │
│   └── Event Detail (/events/[slug]/)
│       ├── Event Header (title, tags)
│       ├── Event Details Card (date, time, location, capacity)
│       ├── Event Description
│       ├── Learning Outcomes
│       ├── Registration Form
│       └── Related Events
│
├── Blog (/blog/)
│   ├── Blog Listing
│   │   └── All Posts (newest first)
│   │
│   ├── Blog Post Detail (/blog/[slug]/)
│   │   ├── Article Header (title, date, author)
│   │   ├── Article Content
│   │   ├── Tags
│   │   └── CTA (View Events / More Articles)
│   │
│   └── RSS Feed (/blog/feed.xml)
│
├── Get Involved (/get-involved/)
│   ├── Why Volunteer Section
│   ├── Ways to Help
│   ├── Volunteer Roles
│   ├── Volunteer Application Form
│   └── Discord Community Link
│
├── About (/about/)
│   ├── Mission & Vision
│   ├── Our Approach
│   ├── Who We Serve
│   ├── Team/Partners
│   └── Contact Information
│
├── Privacy Policy (/privacy/)
│   ├── Data Collection
│   ├── How Data is Used
│   ├── Third-Party Services
│   ├── User Rights (GDPR/CCPA)
│   └── Contact for Privacy Requests
│
└── Utility Pages
    ├── Sitemap (/sitemap.xml)
    └── Robots (/robots.txt)
```

---

## 3. Page Inventory

| Page | Template | URL Pattern | Content Source | Priority |
|------|----------|-------------|----------------|----------|
| Homepage | `src/index.njk` | `/` | Mixed (CMS + static) | High |
| Events Listing | `src/events/index.njk` | `/events/` | Sanity CMS | High |
| Event Detail | `src/events/event.njk` | `/events/[slug]/` | Sanity CMS | High |
| Blog Listing | `src/blog/index.njk` | `/blog/` | Sanity CMS | High |
| Blog Post | `src/blog/post.njk` | `/blog/[slug]/` | Sanity CMS | High |
| Get Involved | `src/get-involved.njk` | `/get-involved/` | Static | Medium |
| About | `src/about.njk` | `/about/` | Static | Medium |
| Privacy Policy | `src/privacy.md` | `/privacy/` | Static | Medium |
| RSS Feed | `src/blog/feed.njk` | `/blog/feed.xml` | Sanity CMS | Low |
| Sitemap | `src/sitemap.njk` | `/sitemap.xml` | Generated | Low |

**Total Pages**: 9 templates + dynamic pages (3 events + 3 blog posts = ~15 total pages)

---

## 4. Content Models

### 4.1 Event Content Type

**Sanity Schema**: `sanity-studio/schemas/event.js`

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| `title` | String | Yes | Event name |
| `slug` | Slug | Yes | URL identifier |
| `excerpt` | Text | Yes | Short description (150-200 chars) |
| `eventDate` | DateTime | Yes | When event occurs |
| `location` | String | Yes | Physical address or online platform |
| `locationType` | Select | Yes | "in-person", "online", or "hybrid" |
| `content` | Portable Text | No | Full event description |
| `learningOutcomes` | Array[String] | No | Bullet list of what attendees learn |
| `capacity` | Number | No | Maximum attendees |
| `recording` | URL | No | Link to recorded session (post-event) |
| `featured` | Boolean | No | Show on homepage |

**Display Logic**:
- Upcoming events: `eventDate >= now()`
- Past events: `eventDate < now()`
- Featured events: `featured == true` (max 3 on homepage)

**Sample Event**:
```yaml
title: "AI Basics: A Town Hall for Newark Residents"
slug: ai-basics-town-hall
excerpt: "New to AI? Start here. Learn what AI is..."
eventDate: 2026-01-15T18:00:00
location: "Newark Public Library, Main Branch"
locationType: "in-person"
learningOutcomes:
  - "What AI actually is (in plain English)"
  - "3 free tools you can use today"
  - "How to protect your privacy"
capacity: 50
featured: true
```

---

### 4.2 Blog Post Content Type

**Sanity Schema**: `sanity-studio/schemas/post.js`

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| `title` | String | Yes | Article title |
| `slug` | Slug | Yes | URL identifier |
| `description` | Text | Yes | SEO description (150-160 chars) |
| `publishedAt` | DateTime | Yes | Publication date |
| `author` | Reference | No | Links to Team Member |
| `mainImage` | Image | No | Featured image |
| `content` | Portable Text | Yes | Article body |
| `tags` | Array[String] | No | Topic tags |
| `featured` | Boolean | No | Show on homepage |

**Display Logic**:
- All posts: `publishedAt <= now()`, sorted newest first
- Featured posts: `featured == true` (max 3 on homepage)
- Tags: Filter posts by topic

**Sample Post**:
```yaml
title: "What is AI? A Simple Explanation for Newark Residents"
slug: what-is-ai-simple-explanation
description: "Artificial intelligence doesn't have to be complicated..."
publishedAt: 2026-01-10T09:00:00
author: {reference to author}
tags: ["ai-basics", "for-beginners"]
featured: true
```

---

### 4.3 Site Settings Content Type

**Sanity Schema**: `sanity-studio/schemas/siteSettings.js`

| Field | Type | Purpose |
|-------|------|---------|
| `organizationName` | String | Site title |
| `description` | Text | Site description |
| `email` | String | Contact email |
| `phone` | String | Contact phone |
| `address` | Object | Physical location |
| `socialLinks` | Object | Discord, Twitter, LinkedIn, YouTube |
| `featuredEventIds` | Array[Reference] | Which events to feature |
| `featuredPostIds` | Array[Reference] | Which posts to feature |

---

### 4.4 Team Member Content Type

**Sanity Schema**: `sanity-studio/schemas/teamMember.js`

| Field | Type | Purpose |
|-------|------|---------|
| `name` | String | Full name |
| `role` | String | Position/title |
| `bio` | Text | Short biography |
| `photo` | Image | Headshot |
| `email` | String | Contact email |

**Used For**: Blog post authors, about page team section

---

## 5. Navigation Architecture

### 5.1 Primary Navigation

**Location**: Site header (persistent across all pages)

```javascript
// Defined in src/_data/site.js
navigation: [
  { label: "Home", url: "/" },
  { label: "Events", url: "/events/" },
  { label: "Blog", url: "/blog/" },
  { label: "Get Involved", url: "/get-involved/" },
  { label: "About", url: "/about/" }
]
```

**Behavior**:
- Desktop: Horizontal list in header
- Mobile: Hamburger menu (collapsible)
- Active state: Current page highlighted
- Keyboard accessible with focus indicators

---

### 5.2 Footer Navigation

**Structure**:

**Column 1: About**
- Organization name
- Mission statement (brief)
- Contact info (address, phone)

**Column 2: Quick Links**
- Upcoming Events → `/events/`
- Blog & Resources → `/blog/`
- Get Involved → `/get-involved/`
- About Us → `/about/`

**Column 3: Community**
- Discord Community → External link
- Join a Town Hall → `/events/`
- Volunteer → `/get-involved/#volunteer`
- Privacy Policy → `/privacy/`

**Column 4: Contact**
- Email link
- Phone number
- Social media icons (Discord, Twitter, LinkedIn, YouTube)

---

### 5.3 Breadcrumbs

**Used On**: Detail pages (event detail, blog post)

**Pattern**:
```
Home → Events → [Event Title]
Home → Blog → [Post Title]
```

**Purpose**: Help users understand location in site hierarchy

---

### 5.4 Internal Linking Strategy

| From Page | To Page | Link Text | Purpose |
|-----------|---------|-----------|---------|
| Homepage | Events Listing | "View Upcoming Events" | Primary CTA |
| Homepage | Get Involved | "Get Involved" | Secondary CTA |
| Event Detail | Events Listing | "View All Events" | Navigation aid |
| Event Detail | Get Involved | "Volunteer With Us" | Cross-promotion |
| Blog Post | Events Listing | "View Upcoming Events" | Conversion |
| Blog Post | Blog Listing | "Read More Articles" | Content discovery |
| Any Page | Privacy | "Privacy Policy" (footer) | Legal compliance |

---

## 6. URL Structure

### 6.1 URL Patterns

| Page Type | URL Pattern | Example |
|-----------|-------------|---------|
| Homepage | `/` | `https://site.com/` |
| Events Listing | `/events/` | `https://site.com/events/` |
| Event Detail | `/events/[slug]/` | `https://site.com/events/ai-basics-town-hall/` |
| Blog Listing | `/blog/` | `https://site.com/blog/` |
| Blog Post | `/blog/[slug]/` | `https://site.com/blog/what-is-ai-simple-explanation/` |
| RSS Feed | `/blog/feed.xml` | `https://site.com/blog/feed.xml` |
| Static Pages | `/[page-name]/` | `https://site.com/about/` |

### 6.2 URL Guidelines

**Best Practices**:
- Use lowercase only
- Use hyphens (not underscores)
- Keep slugs short but descriptive (3-6 words)
- Include keywords when natural
- Trailing slashes for consistency

**Examples**:
- ✅ `/events/ai-basics-town-hall/`
- ✅ `/blog/what-is-ai-simple-explanation/`
- ❌ `/events/Event1/`
- ❌ `/blog/post_123/`

---

## 7. Content Relationships

### 7.1 Homepage Relationships

**Pulls From**:
- Events collection (3 featured/upcoming)
- Blog collection (3 featured/recent)
- Site settings (organization info, social links)

**Links To**:
- Events listing
- Get Involved
- All featured events
- All featured blog posts

---

### 7.2 Event Detail Relationships

**Links To**:
- Registration form → Discord webhook
- Registration form → CRM (HubSpot/Airtable via Zapier)
- "View All Events" → Events listing
- "Get Involved" → Get Involved page

**Related Content**:
- Other upcoming events in same category
- Blog posts with related tags

---

### 7.3 Blog Post Relationships

**Links To**:
- Author bio (if author reference exists)
- Related posts by tag
- Events listing (CTA)
- More blog posts (CTA)

**Metadata Connections**:
- Tags (for filtering/grouping)
- Categories (if implemented)
- Author (team member reference)

---

## 8. User Flows

### 8.1 Primary Flow: Event Registration

```
1. User lands on homepage
   ↓
2. Sees upcoming events section
   ↓
3. Clicks "View Upcoming Events" OR clicks specific event card
   ↓
4. Arrives at Events listing OR Event detail
   ↓
5. Clicks "Learn More & Register" on event card
   ↓
6. Reads event details, learning outcomes
   ↓
7. Fills out registration form (name, email, phone)
   ↓
8. Submits form
   ↓
9. Form data sent to:
   - Discord (#submissions channel)
   - CRM (HubSpot/Airtable via Zapier)
   ↓
10. Success message displayed
    ↓
11. User receives confirmation email (external automation)
```

**Touchpoints**: Homepage → Events → Event Detail → Form → Confirmation

---

### 8.2 Secondary Flow: Content Discovery

```
1. User searches Google for "what is AI"
   ↓
2. Arrives at blog post from organic search
   ↓
3. Reads article in plain language
   ↓
4. Sees CTA: "Want to Learn More? Join our free AI town halls"
   ↓
5. Clicks "View Upcoming Events"
   ↓
6. Arrives at Events listing
   ↓
7. Registers for event (follows primary flow)
```

**Touchpoints**: Search → Blog Post → Events → Registration

---

### 8.3 Tertiary Flow: Volunteer Sign-Up

```
1. User lands on homepage
   ↓
2. Clicks "Get Involved" in navigation OR hero CTA
   ↓
3. Reads about volunteer opportunities
   ↓
4. Fills out volunteer application form
   ↓
5. Submits form
   ↓
6. Form data sent to:
   - Discord (#volunteer-apps channel)
   - CRM with "volunteer" tag
   ↓
7. Success message + Discord invite link displayed
   ↓
8. User clicks Discord invite
   ↓
9. Joins Discord community
```

**Touchpoints**: Homepage → Get Involved → Form → Discord

---

## 9. Search & Filtering

### 9.1 Events Filtering

**Available Filters** (future enhancement):
- Location type: In-person, Online, Hybrid
- Topic: AI Basics, Privacy, Business, etc.
- Date range: This week, This month, Upcoming

**Current Implementation**: Automatic separation
- Upcoming events (date >= now)
- Past events (date < now)

---

### 9.2 Blog Filtering

**Available Filters** (future enhancement):
- Tags: Filter by topic tags
- Date: Archive by month/year
- Author: Filter by team member

**Current Implementation**: Chronological listing (newest first)

---

## 10. Mobile Considerations

### 10.1 Mobile Navigation

**Collapsed Menu**:
- Hamburger icon (☰) in top-right
- Full-screen overlay when opened
- Large touch targets (48px height)
- Close button (X) clearly visible

**Mobile-Specific Adjustments**:
- Homepage hero: Simplified layout
- Event cards: Stack vertically
- Forms: Full-width inputs
- Footer: Stacked columns

---

### 10.2 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, stacked content |
| Tablet | 768px - 1023px | 2-column grids, simplified navigation |
| Desktop | 1024px+ | Full 12-column grid, horizontal nav |

---

## 11. SEO Architecture

### 11.1 Meta Tags (All Pages)

```html
<title>[Page Title] | Newark AI Community Town Hall</title>
<meta name="description" content="[Page-specific description]">
<link rel="canonical" href="[Page URL]">
```

### 11.2 Structured Data

**Organization Schema** (All pages):
```json
{
  "@type": "Organization",
  "name": "Newark AI Community",
  "url": "https://site.com",
  "address": { "addressLocality": "Newark", "addressRegion": "NJ" }
}
```

**Event Schema** (Event pages):
```json
{
  "@type": "Event",
  "name": "[Event Title]",
  "startDate": "[ISO Date]",
  "location": { "@type": "Place" or "VirtualLocation" }
}
```

**BlogPosting Schema** (Blog pages):
```json
{
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "datePublished": "[ISO Date]",
  "author": { "@type": "Organization" }
}
```

---

### 11.3 Sitemap Structure

**Generated**: `sitemap.xml` at root

**Includes**:
- Homepage (priority: 1.0, changefreq: weekly)
- Events listing (priority: 0.9, changefreq: daily)
- All event pages (priority: 0.8, changefreq: weekly)
- Blog listing (priority: 0.9, changefreq: daily)
- All blog posts (priority: 0.7, changefreq: monthly)
- Static pages (priority: 0.6, changefreq: monthly)

---

## 12. Analytics & Tracking

### 12.1 Key Metrics

**Page Views**:
- Homepage (baseline traffic)
- Events listing (interest in events)
- Event detail pages (engagement)
- Blog posts (content discovery)

**Events**:
- Form submissions (conversion)
- External links (Discord, social media)
- File downloads (if added: slides, handouts)

**User Behavior**:
- Time on page
- Scroll depth
- Bounce rate

---

### 12.2 Conversion Goals

| Goal | Page/Action | Success Metric |
|------|-------------|----------------|
| Event Registration | Form submission on event detail | Number of submissions |
| Volunteer Sign-Up | Form submission on Get Involved | Number of volunteer apps |
| Discord Join | Click on Discord link | Click-through rate |
| Content Engagement | Time on blog post > 2 minutes | Avg. time on page |

---

## 13. Content Updates & Maintenance

### 13.1 Update Frequency

| Content Type | Update Frequency | Owner |
|--------------|------------------|-------|
| Events | Weekly (new events added) | Content Manager |
| Blog Posts | Bi-weekly (2 posts/month) | Content Team |
| Homepage | Monthly (featured content rotation) | Content Manager |
| About Page | Quarterly (team updates) | Admin |
| Privacy Policy | As needed (legal changes) | Admin |

---

### 13.2 Content Workflow

**Adding New Event**:
1. Log into Sanity Studio (localhost:3333)
2. Create new Event document
3. Fill in all required fields
4. Publish (goes live immediately)
5. Site rebuilds automatically (GitHub Actions)
6. Event appears on events listing

**Adding New Blog Post**:
1. Log into Sanity Studio
2. Create new Post document
3. Write content in rich text editor
4. Add tags and author reference
5. Publish
6. Site rebuilds automatically
7. Post appears on blog listing and RSS feed

---

## 14. Future Enhancements

### Phase 2 Additions
- Search functionality (Algolia or Pagefind)
- Event filtering by topic/location type
- Blog tag pages (e.g., `/blog/tag/ai-basics/`)
- User accounts (save events, track attendance)
- Event calendar view (monthly grid)

### Phase 3 Additions
- Multi-language support (Spanish translation)
- Video content library
- Resource downloads (PDF guides, checklists)
- Event recordings archive with search
- Community forum integration

---

## 15. Technical Implementation

### 15.1 File Structure Mapping

| IA Component | Implementation File |
|--------------|---------------------|
| Homepage | `src/index.njk` |
| Events Listing | `src/events/index.njk` |
| Event Detail | `src/events/event.njk` (dynamic) |
| Blog Listing | `src/blog/index.njk` |
| Blog Post | `src/blog/post.njk` (dynamic) |
| Navigation | `src/_includes/header.njk` + `site.js` |
| Footer | `src/_includes/footer.njk` |
| Base Template | `src/_includes/base.njk` |

---

### 15.2 Data Flow

```
Sanity Studio (Content Creation)
         ↓
Sanity API (Content Delivery)
         ↓
src/_data/sanity.js (Data Fetching)
         ↓
.eleventy.js (Collections Creation)
         ↓
Template Files (.njk) (Rendering)
         ↓
_site/ (Static HTML Output)
         ↓
GitHub Pages (Deployment)
```

---

## 16. Accessibility Considerations

### 16.1 Navigation Accessibility

- Skip-to-content link (first focusable element)
- Semantic HTML5 landmarks (header, nav, main, footer)
- ARIA labels on mobile menu toggle
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators visible (red outline, 2px)

---

### 16.2 Content Accessibility

- Heading hierarchy (H1 → H2 → H3, no skipping)
- Alt text for all images (descriptive)
- Form labels associated with inputs
- Error messages clear and specific
- Color not sole indicator (use icons + text)

---

## 17. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | December 17, 2025 | Initial information architecture document |

---

**Questions or Updates?** Contact the project lead or refer to technical documentation in `References/` folder.
