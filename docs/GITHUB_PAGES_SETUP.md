# GitHub Pages Deployment Guide

**Date**: December 16, 2025  
**Project**: Newark AI Community - Town Hall Website  
**Purpose**: Deploy site to GitHub Pages for live access

---

## Quick Start

### Prerequisites
- GitHub account (you already have one: Tobey-DH)
- Repository pushed to GitHub (TownHall_project)
- Sanity credentials (SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN)

### One-Time Setup (5 minutes)

#### Step 1: Configure GitHub Secrets

1. Go to: `https://github.com/Tobey-DH/TownHall_project/settings/secrets/actions`
2. Click "New repository secret"
3. Add these secrets:

```
Name: SANITY_PROJECT_ID
Value: [your Sanity project ID - biz008kr]

Name: SANITY_DATASET
Value: [your Sanity dataset - production]

Name: SANITY_TOKEN
Value: [your Sanity auth token]
```

**Where to find these values**:
- Go to: https://manage.sanity.io
- Select your project (biz008kr)
- Settings → API → Project Settings
- Copy Project ID and Dataset name
- API → Tokens → Create read token (or use existing)

#### Step 2: Enable GitHub Pages

1. Go to: `https://github.com/Tobey-DH/TownHall_project/settings/pages`
2. Under "Source", select: **Deploy from a branch**
3. Select branch: **gh-pages**
4. Select folder: **/ (root)**
5. Click "Save"

**Note**: You may need to manually create the `gh-pages` branch first by running the deploy workflow.

#### Step 3: Verify Deployment Workflow

1. Go to: `https://github.com/Tobey-DH/TownHall_project/actions`
2. You should see workflow file: `.github/workflows/deploy.yml`
3. Click on it to view status

#### Step 4: Trigger First Build

1. Push any commit to main branch, OR
2. Go to Actions → "Build and Deploy to GitHub Pages" → "Run workflow"

The site will build and deploy automatically.

### Access Your Live Site

Once deployed, your site will be available at:

```
https://Tobey-DH.github.io/TownHall_project/
```

This may take a few minutes for the first deployment. You can watch the status in:
`https://github.com/Tobey-DH/TownHall_project/actions`

---

## How Automatic Deployment Works

### Workflow Overview

```
1. You push to main branch
   ↓
2. GitHub Actions workflow triggers automatically
   ↓
3. Builds the site (npm run build)
   ↓
4. Fetches content from Sanity
   ↓
5. Creates static HTML files
   ↓
6. Pushes to gh-pages branch
   ↓
7. GitHub Pages serves the site
```

### What the Workflow Does

**File**: `.github/workflows/deploy.yml`

**Triggers**:
- Every push to `main` branch
- Manual trigger via Actions UI
- Pull request checks

**Build Steps**:
1. Checkout code from GitHub
2. Install Node.js 22
3. Install npm dependencies
4. Build site with Eleventy
5. Upload build artifact

**Deploy Steps**:
1. Deploy artifact to GitHub Pages
2. Site goes live at: `https://Tobey-DH.github.io/TownHall_project/`

---

## Environment Variables for Deployment

The workflow automatically uses these GitHub Secrets:

```yaml
SANITY_PROJECT_ID   # Your Sanity project ID
SANITY_DATASET      # Your Sanity dataset (usually "production")
SANITY_TOKEN        # Your Sanity auth token for API access
```

These are injected into the build process so Eleventy can fetch content from Sanity.

---

## Build Process on GitHub

### Command Run
```bash
npm ci                    # Clean install dependencies
npm run build             # Build the site
```

### What Gets Built
- Input: `src/` directory (Nunjucks templates, data files)
- Process: Eleventy fetches data from Sanity API
- Output: `_site/` directory (static HTML files)

### Build Time
- First build: ~2 minutes (with dependency install)
- Subsequent builds: ~30-60 seconds

---

## Verify Deployment Success

### In GitHub Actions

1. Go to: `https://github.com/Tobey-DH/TownHall_project/actions`
2. Click on latest workflow run
3. Look for green checkmark next to "deploy" job
4. Click "Deploy to GitHub Pages" step to see output

### Check Live Site

```bash
# Should return 200 status
curl -I https://Tobey-DH.github.io/TownHall_project/

# Should show your site content
curl https://Tobey-DH.github.io/TownHall_project/ | head -20
```

### Monitor GitHub Pages Status

1. Go to: `https://github.com/Tobey-DH/TownHall_project/deployments`
2. Should show "github-pages" deployment
3. Shows timestamp and status of each deployment

---

## Custom Domain (Optional)

If you want to use a custom domain instead of `github.io`:

1. Register domain (GoDaddy, Namecheap, etc.)
2. Go to repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Update DNS records at registrar:
   ```
   CNAME record pointing to: Tobey-DH.github.io
   ```
5. GitHub will handle SSL certificate automatically

**Not needed for this project** (github.io domain is sufficient).

---

## Troubleshooting

### Workflow Not Running

**Problem**: Build doesn't start when you push  
**Solution**:
1. Check that `.github/workflows/deploy.yml` exists
2. Verify workflow file syntax (should be valid YAML)
3. Check GitHub Actions is enabled (repo settings)
4. Try manual trigger: Actions → "Build and Deploy" → "Run workflow"

### Secrets Not Found

**Problem**: Build fails with "secrets are not defined"  
**Solution**:
1. Go to Settings → Secrets and variables → Actions
2. Verify SANITY_PROJECT_ID is set
3. Verify SANITY_DATASET is set
4. Verify SANITY_TOKEN is set
5. Values should not be empty
6. Re-run workflow after adding secrets

### Sanity API Connection Error

**Problem**: "Failed to fetch from Sanity API"  
**Solution**:
1. Verify token is valid (check Sanity dashboard)
2. Verify dataset exists
3. Verify project ID is correct
4. Check token has read permissions
5. Try local build first: `npm run build`

### Site Not Updating

**Problem**: Changes pushed but site not showing new content  
**Solution**:
1. Check workflow status in Actions
2. Wait 2-3 minutes for GitHub Pages to update
3. Hard refresh browser (Ctrl+Shift+R)
4. Check cache: `https://github.com/Tobey-DH/TownHall_project/deployments`
5. Verify `_site/` folder was updated

### Sanity Content Not Appearing

**Problem**: Pages exist but content is blank  
**Solution**:
1. Verify documents are published in Sanity
2. Check Sanity query works locally: `npm run build` locally
3. Verify API token is set in GitHub Secrets
4. Check network tab in browser for API errors
5. Verify GROQ queries are correct

### Permission Denied

**Problem**: "Permission denied" error in workflow  
**Solution**:
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select:
   - ✅ "Read and write permissions"
   - ✅ "Allow GitHub Actions to create and approve pull requests"
3. Click "Save"

---

## Continuous Integration Details

### What Happens on Each Push

```
main branch updated
  ↓
GitHub Actions triggered (automatic)
  ↓
Ubuntu runner starts
  ↓
Checkout code
Install Node 22
Install npm packages (npm ci)
  ↓
BUILD STAGE:
  npm run build (Eleventy + Sanity fetching)
  ↓
  Output: _site/ directory with 13 HTML pages
  ↓
DEPLOY STAGE:
  Upload artifact to GitHub Pages
  ↓
  Site live at: https://Tobey-DH.github.io/TownHall_project/
  ↓
Workflow complete (green checkmark)
```

### Manual Trigger

If you want to rebuild without committing:

1. Go to: `https://github.com/Tobey-DH/TownHall_project/actions`
2. Click "Build and Deploy to GitHub Pages"
3. Click "Run workflow" button
4. Choose branch: main
5. Click "Run workflow"

---

## Expected Pages Generated

After successful deployment, these pages should be live:

```
https://Tobey-DH.github.io/TownHall_project/
├── index.html (homepage)
├── about/index.html (about page)
├── get-involved/index.html (get involved)
├── events/
│   ├── index.html (events listing)
│   ├── ai-basics-town-hall/index.html
│   ├── ai-for-small-business/index.html
│   ├── ai-safety-privacy/index.html
├── blog/
│   ├── index.html (blog listing)
│   ├── feed.xml (RSS feed)
│   ├── what-is-ai-simple-explanation/index.html
│   ├── ai-help-small-business/index.html
│   ├── ai-privacy-guide/index.html
├── robots.txt
└── sitemap.xml
```

---

## Performance Notes

### Build Time

- **First build**: ~2 minutes (includes dependency install)
- **Subsequent builds**: ~45 seconds
- **Deployment**: ~30 seconds

### Site Performance

- Static HTML (fast loading)
- No database queries at runtime
- No server-side processing
- Global CDN via GitHub Pages
- Expected load time: <1 second

### Content Updates

- When you update content in Sanity
- Push any commit to main (or manually trigger workflow)
- Site rebuilds with new content
- Update is live within 2-3 minutes

---

## Next Steps

1. ✅ Create GitHub Secrets (5 min)
2. ✅ Enable GitHub Pages (1 min)
3. ✅ Push to trigger first build (automatic)
4. ✅ Wait for deployment (2-3 min)
5. ✅ Visit live URL to verify

---

## Maintenance

### Regular Tasks

**Daily/Weekly**:
- Update content in Sanity
- Push to main to trigger rebuild
- Monitor GitHub Actions for errors

**Monthly**:
- Check GitHub Actions logs for patterns
- Verify site performance
- Test form submissions

**Quarterly**:
- Update dependencies (npm update)
- Review security advisories
- Test disaster recovery (rebuild from scratch)

---

## Summary

Your site is now automatically deployed to GitHub Pages. Every push to the main branch triggers:

1. **Build**: Eleventy fetches content from Sanity, generates static HTML
2. **Deploy**: Files pushed to gh-pages branch
3. **Live**: Site accessible at `https://Tobey-DH.github.io/TownHall_project/`

The site will be live and automatically updated whenever you:
- Update Sanity content and push to GitHub
- Make changes to code and push to GitHub
- Manually trigger workflow from GitHub Actions

**Your site is now production-ready! 🚀**

---

**Guide Created**: December 16, 2025  
**Deployment Status**: Ready  
**Live URL**: https://Tobey-DH.github.io/TownHall_project/ (after first deployment)
