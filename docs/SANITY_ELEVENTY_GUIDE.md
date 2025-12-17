# Sanity + Eleventy Integration Guide

## Quick Start

### Start Sanity Studio
```powershell
cd sanity-studio
npm run dev
# Opens at http://localhost:3333
```

### Start Main Website
```powershell
npm start
# Opens at http://localhost:8080
```

### Build for Production
```powershell
npm run build
# Generates static HTML in _site/
```

## How Content Flows

```
1. Edit in Sanity Studio (http://localhost:3333)
2. Publish the document
3. Rebuild the site (npm run build)
4. Static pages are generated at build time
5. Deploy _site/ folder to your hosting
```

## Adding New Content

### Add an Event

1. Go to Sanity Studio → **Events**
2. Click **Create new**
3. Fill in:
   - **Title** (e.g., "AI Workshop for Beginners")
   - **Slug** (auto-generates from title, e.g., "ai-workshop-for-beginners")
   - **Excerpt** (short 1-2 sentence summary)
   - **Event Date & Time** (picker for date/time)
   - **Location** (venue name and address)
   - **Location Type** (select: in-person, online, or hybrid)
   - **Content** (full rich text description)
   - **Learning Outcomes** (array of bullet points)
   - **Capacity** (max number of attendees)
   - **Recording** (URL if you have a recording)
   - **Featured** (toggle to show on homepage)
4. Click **Publish**
5. Rebuild the site: `npm run build`
6. New page appears at `/events/ai-workshop-for-beginners/`

### Add a Blog Post

1. Go to Sanity Studio → **Blog Post**
2. Click **Create new**
3. Fill in:
   - **Title** (e.g., "Introduction to Machine Learning")
   - **Slug** (auto-generates, e.g., "introduction-to-machine-learning")
   - **Description** (SEO description, appears in listings)
   - **Published At** (publication date)
   - **Author** (select from Team Members, optional)
   - **Main Image** (featured image, optional)
   - **Content** (full rich text article)
   - **Tags** (add topics for categorization)
   - **Featured** (toggle to show on homepage)
4. Click **Publish**
5. Rebuild the site: `npm run build`
6. New page appears at `/blog/introduction-to-machine-learning/`

### Add a Team Member (Optional)

1. Go to Sanity Studio → **Team Member**
2. Click **Create new**
3. Fill in:
   - **Name** (full name)
   - **Role** (position/title)
   - **Bio** (short biography)
   - **Image** (profile photo)
   - **Email** (contact email)
   - **Social** (Twitter, LinkedIn, GitHub URLs)
4. Click **Publish**

## Content Schema Reference

### Event Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| title | String | Yes | Event name (50 chars) |
| slug | Slug | Yes | Auto-generated, URL-friendly |
| excerpt | Text | Yes | Short summary for listings |
| eventDate | DateTime | Yes | Full date & time |
| location | String | Yes | Venue name and address |
| locationType | Select | Yes | "in-person" / "online" / "hybrid" |
| content | Portable Text | Yes | Full description (rich text) |
| learningOutcomes | Array | No | List of what people will learn |
| capacity | Number | No | Max attendees |
| recording | URL | No | Link to recorded session |
| featured | Boolean | No | Show on homepage (default: false) |

### Blog Post Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| title | String | Yes | Article title |
| slug | Slug | Yes | Auto-generated, URL-friendly |
| description | Text | Yes | SEO description & listing text |
| publishedAt | DateTime | Yes | Publication date |
| author | Reference | No | Link to Team Member |
| mainImage | Image | No | Featured image |
| content | Portable Text | Yes | Full article (rich text) |
| tags | Array | No | Topic tags |
| featured | Boolean | No | Show on homepage (default: false) |

### Team Member Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | String | Yes | Full name |
| role | String | Yes | Position/title |
| bio | Text | No | Short biography |
| image | Image | No | Profile photo |
| email | String | No | Contact email |
| social.twitter | URL | No | Twitter profile |
| social.linkedin | URL | No | LinkedIn profile |
| social.github | URL | No | GitHub profile |

### Site Settings (Singleton)

Only ONE document exists. Edit directly:

| Field | Type | Notes |
|-------|------|-------|
| title | String | Site name |
| description | String | Site description |
| organization.name | String | Organization name |
| organization.email | String | Contact email |
| organization.phone | String | Phone number |
| organization.address | String | Physical address |
| social.discord | URL | Discord server invite |
| social.twitter | URL | Twitter profile |
| social.linkedin | URL | LinkedIn profile |
| social.youtube | URL | YouTube channel |

## Editing Content

### Update an Existing Event

1. Sanity Studio → **Events**
2. Click the event you want to edit
3. Update any fields
4. Click **Publish** (to overwrite)
5. Rebuild: `npm run build`

### Delete an Event

1. Sanity Studio → **Events**
2. Click the event
3. Click **⋮** (three dots) → **Delete**
4. Confirm deletion
5. Rebuild: `npm run build`

The page will no longer exist on the website after rebuild.

## Publishing Workflow

### Draft vs Published

- **Draft** - Saved but not visible on website
- **Published** - Visible on website after rebuild

Always click **Publish** to make content live!

### Scheduled Publishing

To publish at a specific time:
1. Click **Schedule**
2. Select date/time
3. The document will publish automatically at that time

## Content Best Practices

### Writing for the Web

- **Keep it short** - People scan, they don't read
- **Use headings** - Break up content with H2, H3, H4
- **Short paragraphs** - 2-3 sentences max
- **Keywords** - Include relevant terms for SEO
- **Links** - Add context links to related content
- **Images** - Add visuals to break up text

### Event Descriptions

- Start with "What You'll Learn"
- Explain format/duration
- Mention prerequisites (if any)
- Provide parking/access info for in-person
- Include Zoom link for online events
- Add CTA at the end

### Blog Posts

- Write for beginners (avoid jargon)
- Use examples from real life
- Include action items
- Link to related posts
- Add tags for categorization
- Set featured=true for important posts

## Troubleshooting

### Content doesn't appear after rebuild

**Problem**: I published content but it's not on the website

**Solution**:
1. Verify it's published (not draft) in Sanity Studio
2. Check the slug is correct (no spaces, special chars)
3. Rebuild: `npm run build`
4. Clear browser cache (Ctrl+Shift+Delete)
5. Check `/events/` or `/blog/` page to see if it appears

### Build fails

**Problem**: `npm run build` shows errors

**Solution**:
1. Check `.env` has `SANITY_PROJECT_ID=biz008kr`
2. Check `SANITY_TOKEN` is not expired (request new token in Sanity)
3. Verify Sanity API is accessible
4. Check browser console for errors
5. Try `npm run build` again

### Slug already exists

**Problem**: Can't create a new event because slug is taken

**Solution**:
1. Sanity auto-generates slugs from titles
2. If you have two events with same name, change the slug manually
3. Make slugs unique by adding date or descriptive word
4. Example: `ai-workshop-jan-2026` vs `ai-workshop-feb-2026`

### Image upload fails

**Problem**: Can't upload image to Sanity

**Solution**:
1. Check file size (<10MB)
2. Check file format (JPG, PNG, WebP)
3. Try a different image
4. Check internet connection
5. Restart Sanity Studio

## Commands Reference

```bash
# Start everything
npm start

# Just build
npm run build

# Build and serve
npm start

# Sanity Studio only
cd sanity-studio && npm run dev

# Seed initial content
npm run seed:sanity

# Update Eleventy
npm run build:eleventy

# Update CSS
npm run build:css

# Rebuild everything
npm run clean && npm run build
```

## File Locations

```
Project Root/
├── sanity-studio/          # CMS interface (Sanity Studio)
│   ├── sanity.config.js    # Sanity configuration
│   └── schemas/            # Content type definitions
├── src/                    # Website source files
│   ├── _data/
│   │   └── sanity.js       # API client and queries
│   ├── events/
│   │   ├── index.njk       # Events listing page
│   │   └── event.njk       # Event detail template
│   ├── blog/
│   │   ├── index.njk       # Blog listing page
│   │   ├── post.njk        # Blog post template
│   │   └── feed.njk        # RSS feed
│   └── index.njk           # Homepage
├── _site/                  # Generated static HTML (output)
├── .env                    # Secrets (credentials)
├── .eleventy.js            # Eleventy config
├── package.json            # Dependencies
└── scripts/
    └── seed-sanity.js      # Initial content script
```

## API Reference

The site uses Sanity's GROQ query language. Queries are in `src/_data/sanity.js`:

### Available Functions

```javascript
import { 
  getAllEvents,      // Get all events (upcoming + past)
  getAllPosts,       // Get all blog posts
  getSiteSettings,   // Get site configuration
  getTeamMembers,    // Get team member list
  urlFor,            // Build optimized image URLs
  toPlainText        // Convert portable text to plain text
} from "src/_data/sanity.js"
```

## Monitoring & Analytics

After deployment, you can:
- Check Google Analytics for traffic
- Monitor Sanity usage in Studio settings
- Track page views and user behavior
- Set up email alerts for new published content

## Support

- **Sanity Docs**: https://www.sanity.io/docs
- **Eleventy Docs**: https://www.11ty.dev
- **This Project**: Check `docs/` folder for guides

---

**Last Updated**: December 16, 2025  
**Status**: Production Ready ✅
