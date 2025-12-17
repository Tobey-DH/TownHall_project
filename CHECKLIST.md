# 🚀 Getting Started Checklist

Complete this checklist to launch your Newark AI Community Town Hall website.

## ✅ Pre-Launch Checklist

### 1️⃣ Initial Setup (5 minutes)

- [ ] **Install dependencies**
  ```powershell
  npm install
  ```

- [ ] **Start dev server**
  ```powershell
  npm start
  ```
  Visit http://localhost:8080 to see your site!

- [ ] **Verify everything works**
  - [ ] Homepage loads
  - [ ] Events page loads
  - [ ] Blog page loads
  - [ ] Mobile menu works

---

### 2️⃣ Customize Site Information (15 minutes)

- [ ] **Edit `src/_data/site.js`**
  - [ ] Update organization name
  - [ ] Update description
  - [ ] Update email address
  - [ ] Update phone number
  - [ ] Update physical address
  - [ ] Update Discord link
  - [ ] Update social media links (Twitter, LinkedIn, YouTube)

- [ ] **Test the changes**
  - [ ] Check header shows correct name
  - [ ] Check footer has correct info
  - [ ] Check social links work

---

### 3️⃣ Replace Sample Content (30 minutes)

#### Events
- [ ] **Delete sample events** (or keep as examples)
  - [ ] `src/events/ai-basics-town-hall.md`
  - [ ] `src/events/ai-for-small-business.md`
  - [ ] `src/events/ai-safety-privacy.md`

- [ ] **Create your first real event**
  - [ ] Copy a sample event file
  - [ ] Rename it
  - [ ] Update all fields (title, date, location, description)
  - [ ] Add learning outcomes
  - [ ] Save and check it appears on events page

#### Blog Posts
- [ ] **Delete or keep sample posts**
  - [ ] `src/blog/what-is-ai-simple-explanation.md`
  - [ ] `src/blog/ai-help-small-business.md`
  - [ ] `src/blog/ai-privacy-guide.md`

- [ ] **Create your first blog post**
  - [ ] Copy a sample post
  - [ ] Rename it
  - [ ] Update frontmatter (title, description, date)
  - [ ] Write your content
  - [ ] Save and check it appears on blog page

#### About & Get Involved Pages
- [ ] **Edit `src/about.njk`**
  - [ ] Update mission statement
  - [ ] Update team information
  - [ ] Update values if needed

- [ ] **Edit `src/get-involved.njk`**
  - [ ] Update volunteer requirements
  - [ ] Update contact information
  - [ ] Customize volunteer roles

---

### 4️⃣ Add Images & Branding (20 minutes)

- [ ] **Create images folder** (already exists: `src/images/`)

- [ ] **Add your logo**
  - [ ] Save logo as `src/images/logo.png` or `.svg`
  - [ ] Update header in `src/_includes/header.njk` to use logo

- [ ] **Add favicon**
  - [ ] Replace `src/favicon.ico` with your icon
  - [ ] Or use a favicon generator service

- [ ] **Add event/blog images** (optional)
  - [ ] Add images to `src/images/`
  - [ ] Reference in markdown files

---

### 5️⃣ Set Up Integrations (1-2 hours)

#### Email Service (Choose One)

**Option A: HubSpot**
- [ ] Create HubSpot account
- [ ] Create a form
- [ ] Get Portal ID and Form ID
- [ ] Update `src/_data/site.js` with IDs
- [ ] Update form action URLs in templates
- [ ] Test a registration

**Option B: Mailchimp**
- [ ] Create Mailchimp account
- [ ] Create audience
- [ ] Get form action URL
- [ ] Update forms in templates
- [ ] Test a signup

**Option C: Netlify Forms** (Simplest)
- [ ] Add `netlify` attribute to forms
- [ ] Deploy to Netlify
- [ ] Forms automatically work!

#### Discord
- [ ] Create Discord server (or use existing)
- [ ] Create channels: #announcements, #events, #ai-questions, #volunteers
- [ ] Create webhook for #announcements
- [ ] Update `src/_data/site.js` with webhook URL
- [ ] Update Discord invite link in all pages

#### Analytics (Optional)
- [ ] Sign up for Google Analytics 4
- [ ] Get Measurement ID
- [ ] Add tracking code to `src/_includes/base.njk`
- [ ] Test that tracking works

#### Zapier (Optional)
- [ ] Create Zapier account
- [ ] Set up form → email automation
- [ ] Set up form → Discord automation
- [ ] Set up RSS → Discord automation
- [ ] Test each zap

---

### 6️⃣ Test Everything (30 minutes)

#### Desktop Testing
- [ ] Test all navigation links
- [ ] Test event registration form
- [ ] Test volunteer application form
- [ ] Test all external links (social media, Discord)
- [ ] Check all pages load correctly
- [ ] Test mobile menu

#### Mobile Testing
- [ ] Open site on phone
- [ ] Test navigation
- [ ] Test forms (can you type easily?)
- [ ] Test buttons (easy to tap?)
- [ ] Check text is readable
- [ ] Test landscape orientation

#### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)

#### Accessibility Testing
- [ ] Tab through navigation (keyboard only)
- [ ] Test with screen reader (if possible)
- [ ] Check color contrast
- [ ] Test skip-to-content link

---

### 7️⃣ Optimize for SEO (20 minutes)

- [ ] **Update meta descriptions**
  - [ ] Homepage
  - [ ] Events page
  - [ ] Blog page
  - [ ] About page
  - [ ] Get Involved page

- [ ] **Check structured data**
  - [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
  - [ ] Verify Organization schema
  - [ ] Verify Event schema
  - [ ] Verify Blog schema

- [ ] **Verify sitemap**
  - [ ] Visit `/sitemap.xml`
  - [ ] Check all pages are listed

- [ ] **Test robots.txt**
  - [ ] Visit `/robots.txt`
  - [ ] Verify it's correct

---

### 8️⃣ Deploy Your Site (30 minutes)

#### Choose a Hosting Service

**Option A: Netlify** (Recommended)
- [ ] Sign up at netlify.com
- [ ] Connect your GitHub repo
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `_site`
- [ ] Click Deploy
- [ ] Get your site URL (e.g., `yoursite.netlify.app`)

**Option B: Vercel**
- [ ] Sign up at vercel.com
- [ ] Import your GitHub repo
- [ ] Set framework to "Other"
- [ ] Build command: `npm run build`
- [ ] Output directory: `_site`
- [ ] Deploy

**Option C: GitHub Pages**
- [ ] Create `.github/workflows/deploy.yml` (example in docs)
- [ ] Push to GitHub
- [ ] Enable GitHub Pages in settings
- [ ] Wait for deployment

#### After Deployment
- [ ] Visit your live site
- [ ] Test forms work (they send data)
- [ ] Test all links
- [ ] Share with a friend to test

---

### 9️⃣ Set Up Custom Domain (Optional, 20 minutes)

- [ ] Buy domain name (e.g., newarkai.org)
- [ ] Add custom domain in hosting settings
- [ ] Update DNS records
- [ ] Enable HTTPS/SSL
- [ ] Update `src/_data/site.js` with new URL
- [ ] Rebuild and redeploy

---

### 🔟 Post-Launch Tasks (Ongoing)

#### Content
- [ ] Schedule first event
- [ ] Publish first blog post
- [ ] Invite people to Discord
- [ ] Share on social media

#### Monitoring
- [ ] Set up Google Search Console
- [ ] Monitor analytics
- [ ] Check for broken links monthly
- [ ] Update content regularly

#### Community
- [ ] Respond to registrations within 24 hours
- [ ] Send confirmation emails
- [ ] Post in Discord regularly
- [ ] Share event recordings

---

## 📚 Quick Reference Links

**Documentation:**
- Full docs: `README.md`
- Quick start: `QUICKSTART.md`
- Automation: `AUTOMATION_GUIDE.md`
- Structure: `SITE_STRUCTURE.md`

**Common Tasks:**
- Add event: Copy file in `src/events/`
- Add blog post: Copy file in `src/blog/`
- Edit site info: `src/_data/site.js`
- Edit styles: `src/styles/main.css`

**Commands:**
```powershell
npm install          # Install dependencies
npm start           # Start dev server
npm run build       # Build for production
npm run build:css   # Just build CSS
```

---

## 🆘 Troubleshooting

**Site won't build?**
- Check for syntax errors in markdown files
- Make sure all required frontmatter fields are filled
- Run `npm install` again

**Forms not working?**
- Check form action URLs are correct
- Test with a different email address
- Check spam folder
- Verify integration settings

**Styles look wrong?**
- Run `npm run build:css`
- Clear browser cache
- Check for CSS errors in console

**Need help?**
- Check documentation files
- Search error messages online
- Ask in Discord #tech-support

---

## 🎉 Launch Day!

When you're ready to announce:

- [ ] Send email to mailing list
- [ ] Post on social media
- [ ] Share in Discord
- [ ] Update your other websites
- [ ] Tell local partners
- [ ] Celebrate! 🎊

---

**You've got this! The hardest part is done—the site is built and ready. Just follow this checklist and you'll be live in no time.**

Questions? Review the documentation or reach out to the community!

---

## ✅ SANITY + ELEVENTY INTEGRATION - COMPLETED!

### December 16, 2025

All requested tasks have been completed and tested:

#### ✅ Task 1: Update Eleventy to Fetch Content from Sanity
- [x] Modified `.eleventy.js` to use Sanity API
- [x] Created dynamic templates for events and blog posts
- [x] Updated all page templates to reference Sanity data
- [x] Excluded old markdown files from build

#### ✅ Task 2: Test the Integration
- [x] Build process tested (0.4 seconds)
- [x] All 13 pages generate correctly
- [x] Homepage displays featured content ✅
- [x] Events pages render correctly ✅
- [x] Blog pages render correctly ✅
- [x] RSS feed generated ✅
- [x] Sitemap generated ✅
- [x] Dev server working at http://localhost:8080
- [x] Sanity Studio working at http://localhost:3333

#### ✅ Task 3: Migrate Remaining Content
- [x] 3 Events created in Sanity
- [x] 3 Blog Posts created in Sanity
- [x] Site Settings configured
- [x] All content published and live

### Documentation Created
- [x] SANITY_ELEVENTY_GUIDE.md - Content management guide
- [x] INTEGRATION_SUMMARY.md - Complete integration details
- [x] CHANGES_LOG.md - Files and changes documentation
- [x] PROJECT_STATUS.md - Current system status
- [x] INTEGRATION_COMPLETE.md - Visual summary

### Status
🎉 **ALL TASKS COMPLETE - PRODUCTION READY**

The site now uses Sanity as a professional CMS with Eleventy as the static site generator. Content is managed in Sanity Studio and automatically generated into static pages at build time.

**Checklist Version**: 1.1  
**Last Updated**: December 16, 2025
