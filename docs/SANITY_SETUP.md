# Sanity CMS Setup Guide

## Overview

This project uses Sanity.io as a headless CMS to manage all content (events, blog posts, team members, and site settings). This guide will help you set up and configure Sanity for the Newark AI Community Town Hall website.

## Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Sign up for a free account (use GitHub, Google, or email)
3. Confirm your email address

## Step 2: Create a New Sanity Project

### Option A: Using Sanity CLI (Recommended)

```powershell
# Navigate to the sanity-studio folder
cd sanity-studio

# Login to Sanity
npx sanity login

# Initialize the project
npx sanity init

# Follow the prompts:
# - Create new project: Yes
# - Project name: Newark AI Community Town Hall
# - Use default dataset: Yes (production)
# - Output path: . (current directory)
# - Select schema: Clean project with no predefined schemas
```

### Option B: Using Sanity Dashboard

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create project"
3. Name it "Newark AI Community Town Hall"
4. Choose the free plan
5. Note your **Project ID** (you'll need this)

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env` in the root folder:
   ```powershell
   Copy-Item .env.example .env
   ```

2. Open `.env` and fill in your Sanity credentials:
   ```
   SANITY_PROJECT_ID=your_actual_project_id
   SANITY_DATASET=production
   SANITY_TOKEN=your_token_here
   ```

3. Update `sanity-studio/sanity.config.js` with your project ID:
   ```javascript
   projectId: 'your_actual_project_id',
   ```

## Step 4: Start Sanity Studio

```powershell
# From the sanity-studio folder
cd sanity-studio
npm run dev
```

Sanity Studio will open at `http://localhost:3333`

## Step 5: Add Content to Sanity

### Site Settings (Do this first!)

1. In Sanity Studio, click "Site Settings"
2. Fill in:
   - Site Title: "Newark AI Community"
   - Description: Your site description
   - Organization details (name, email, phone, address)
   - Social media links (Discord, Twitter, LinkedIn, YouTube)
3. Click "Publish"

### Add Team Members (Optional)

1. Click "Team Member" → "Create new"
2. Fill in name, role, bio
3. Upload a photo
4. Add social links
5. Click "Publish"

### Add Events

1. Click "Event" → "Create new"
2. Fill in all required fields:
   - Title
   - Slug (auto-generated)
   - Excerpt (short description)
   - Event Date & Time
   - Location
   - Location Type (in-person/online/hybrid)
   - Content (full description)
   - Learning Outcomes (what people will learn)
3. Click "Publish"

Repeat for multiple events!

### Add Blog Posts

1. Click "Blog Post" → "Create new"
2. Fill in:
   - Title
   - Slug (auto-generated)
   - Description
   - Published Date
   - Author (if you added team members)
   - Content (full article)
   - Tags
3. Optionally upload a main image
4. Click "Publish"

## Step 6: Test Data Fetching

```powershell
# Stop the dev server if it's running (Ctrl+C)
# Then rebuild
npm run build
npm start
```

Visit `http://localhost:8080` - your Sanity content should now appear!

## Content Structure

### Events Schema
- **title**: Event name
- **slug**: URL-friendly identifier
- **excerpt**: Short description for listings
- **eventDate**: Date and time
- **location**: Where it's happening
- **locationType**: in-person, online, or hybrid
- **content**: Full event description (rich text)
- **learningOutcomes**: Array of what attendees will learn
- **capacity**: Max attendees
- **recording**: Link to recording (if past event)
- **featured**: Show prominently on homepage

### Blog Post Schema
- **title**: Article title
- **slug**: URL-friendly identifier
- **description**: SEO description
- **publishedAt**: Publication date
- **author**: Reference to team member
- **mainImage**: Featured image
- **content**: Full article (rich text with images)
- **tags**: Categorization
- **featured**: Show prominently

### Team Member Schema
- **name**: Full name
- **role**: Position/title
- **bio**: Short biography
- **image**: Profile photo
- **email**: Contact email
- **social**: Twitter, LinkedIn, GitHub links

### Site Settings Schema
- **title**: Site name
- **description**: Site description
- **organization**: Name, email, phone, address
- **social**: Discord, Twitter, LinkedIn, YouTube

## How Data Flows

1. **Content Editor** adds/edits content in Sanity Studio
2. **Sanity API** serves content via REST/GROQ
3. **Eleventy Build** fetches content from Sanity (`src/_data/sanity.js`)
4. **Templates** render content using Nunjucks
5. **Static Site** is generated with Sanity content

## Deployment

### Deploy Sanity Studio

```powershell
cd sanity-studio
npm run deploy
```

Your Studio will be available at: `https://your-project.sanity.studio`

### Update Main Site

After adding content in Sanity, rebuild your main site:

```powershell
npm run build
```

## Troubleshooting

### "Project ID not found" error

- Make sure you updated `sanity.config.js` with your actual project ID
- Check that `.env` has the correct `SANITY_PROJECT_ID`

### Content not showing

- Verify content is published (not draft) in Sanity Studio
- Check browser console for API errors
- Ensure Sanity API is accessible (check project permissions)

### Studio won't start

- Make sure you're in the `sanity-studio` folder
- Run `npm install` again
- Check for port conflicts (default port: 3333)

## API Usage Limits

**Free Tier**:
- Unlimited API requests
- 10GB bandwidth/month
- 100GB assets
- 3 dataset instances

This is more than enough for a community site!

## Next Steps

1. ✅ Set up Sanity project
2. ✅ Configure environment variables
3. ✅ Start Sanity Studio
4. ✅ Add site settings
5. ✅ Create 3-5 sample events
6. ✅ Write 3-5 blog posts
7. ✅ Rebuild and test main site
8. ✅ Deploy Studio for team access

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity + Eleventy Guide](https://www.sanity.io/guides/eleventy-and-sanity)
- [Project Schemas](./sanity-studio/schemas/)

## Support

If you encounter issues:
1. Check the Sanity Studio console for errors
2. Review the browser console in your Eleventy site
3. Verify API credentials in `.env`
4. Check [Sanity Slack Community](https://slack.sanity.io/)
