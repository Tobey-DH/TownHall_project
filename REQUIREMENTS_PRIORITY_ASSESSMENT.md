# Requirements Priority Assessment

**Date**: December 16, 2025  
**Purpose**: Clarify which audit items are REQUIRED vs OPTIONAL for final submission

---

## Quick Answer

Based on a typical university capstone project, here are the **TRULY REQUIRED** deliverables:

### 🔴 MUST-HAVE (Non-negotiable)

1. **CMS Evaluation Report** (`docs/cms-evaluation.md`)
   - Sanity vs 2+ alternatives
   - Comparison matrix + justification
   - **Why**: This demonstrates architectural decision-making

2. **Analytics Evaluation Report** (`docs/analytics-evaluation.md`)
   - Multiple analytics tools compared
   - GDPR/privacy considerations
   - Selection + implementation plan
   - **Why**: Shows you evaluated privacy-first solutions

3. **Privacy Policy Page** (`src/privacy.md`)
   - Data collection practices
   - GDPR compliance
   - **Why**: Legal requirement + requirement specification

4. **AI Usage Documentation** (`docs/ai-usage.md`)
   - Track AI assistance throughout project
   - **Why**: Academic integrity + demonstrates thinking process

5. **Working Eleventy + Sanity Site**
   - Multi-page structure ✅ (Already done)
   - CMS integration ✅ (Already done)
   - Content seeded ✅ (Already done)
   - **Why**: Core project deliverable

### 🟡 SHOULD-HAVE (Strongly Recommended)

6. **Deployed Live URL**
   - GitHub Pages / Vercel / Netlify
   - Prove site works in production
   - **Why**: Shows professional completion

7. **Cookie Consent Banner** (if targeting EU users)
   - vanilla-cookieconsent implementation
   - Privacy policy + cookie banner together
   - **Why**: Legal compliance + user trust

8. **Playwright Tests** (minimum 1-2)
   - Homepage test
   - Blog/events test
   - **Why**: QA + shows testing knowledge

9. **GitHub Actions CI/CD** (basic)
   - Automated build verification
   - Run on every push
   - **Why**: Demonstrates automation + DevOps knowledge

### 🟢 NICE-TO-HAVE (Polish/Optional)

10. **QA Report** (`docs/qa-report.md`)
    - Lighthouse scores
    - Bundle analysis
    - **Why**: Professional documentation

11. **Wireframes + Brand Guide** (`docs/ux/`)
    - UX deliverables
    - Design documentation
    - **Why**: Shows design thinking (not required if site is already built)

12. **Form Automation Testing**
    - HubSpot/Discord integration proof
    - **Why**: Demonstrates full-stack automation (nice bonus)

---

## Requirement-by-Requirement Analysis

### 1. CMS EVALUATION 🔴 REQUIRED

**Status**: ❌ NOT CREATED

**What it needs**:
```markdown
# CMS Evaluation: Sanity vs Alternatives

## Candidates Evaluated
1. **Sanity** (Chosen)
   - Schema/data modeling: Flexible JSON documents
   - Query language: GROQ (powerful + Eleventy-friendly)
   - Editorial UX: Visual Studio with real-time preview
   - Developer experience: Excellent (JS-based, npm packages)
   - Pricing: $99/month for production
   - Eleventy integration: Native via @sanity/client

2. **Strapi** (Alternative)
   - Schema/data modeling: Relational + flexible
   - Query language: GraphQL + REST
   - Editorial UX: Good but more code-first
   - Developer experience: Good (Node.js based)
   - Pricing: Free/open-source
   - Eleventy integration: Via REST API or GraphQL

3. **Contentful** (Alternative)
   - Schema/data modeling: Relational
   - Query language: GraphQL only
   - Editorial UX: Excellent
   - Developer experience: Very good
   - Pricing: $489/month for production
   - Eleventy integration: Native support

## Comparison Matrix

| Feature | Sanity | Strapi | Contentful |
|---------|--------|--------|-----------|
| GROQ/GraphQL | GROQ (better) | Both | GraphQL only |
| Real-time preview | Yes | No | Limited |
| Free tier | Yes | Yes | Yes |
| Eleventy integration | Excellent | Good | Good |
| Learning curve | Medium | Medium | Medium |

## Final Selection: Sanity

**Justification**:
- GROQ is superior to GraphQL for simple queries
- Real-time preview improves editor experience
- Excellent Eleventy ecosystem
- Free tier sufficient for this project
```

**Time to create**: 1-2 hours  
**Necessity**: YES - Shows thoughtful architectural decision

---

### 2. ANALYTICS EVALUATION 🔴 REQUIRED

**Status**: ❌ NOT CREATED

**What it needs**:
```markdown
# Analytics Evaluation: GDPR-Compliant Options

## Candidates Evaluated
1. **Google Analytics 4**
   - GDPR compliance: Requires consent mode
   - Cost: Free
   - Setup: Moderate (requires DataLayer)
   - Privacy concerns: Sends data to Google (US)
   - Eleventy integration: Script tag + consent wrapper

2. **Plausible Analytics**
   - GDPR compliance: GDPR-compliant by design
   - Cost: $20/month
   - Setup: Very simple (one script tag)
   - Privacy concerns: None (EU-hosted)
   - Eleventy integration: One script tag

3. **Fathom**
   - GDPR compliance: GDPR-compliant by design
   - Cost: $14/month
   - Setup: Simple (one script tag)
   - Privacy concerns: None (EU-hosted)
   - Eleventy integration: One script tag

## Comparison Matrix

| Feature | GA4 | Plausible | Fathom |
|---------|-----|-----------|--------|
| GDPR-compliant | No (consent req) | Yes | Yes |
| Cost | Free | $20/mo | $14/mo |
| Setup time | 30 min | 5 min | 5 min |
| Privacy-first | No | Yes | Yes |
| EU-hosted | No (US) | Yes | Yes |

## Final Selection: Plausible Analytics

**Justification**:
- GDPR-compliant out of box
- No consent banner required
- Simple implementation
- Perfect for EU audience
```

**Time to create**: 1-2 hours  
**Necessity**: YES - Shows privacy-first thinking

---

### 3. PRIVACY POLICY 🔴 REQUIRED

**Status**: ❌ NOT CREATED

**What it needs**:
```markdown
# Privacy Policy

## Data We Collect
- Page views (via analytics)
- Form submissions (names, emails)
- Cookie preferences (your consent choices)

## Where Data is Stored
- Analytics: Plausible Analytics (EU servers)
- Form submissions: HubSpot CRM (US servers)
- Site content: Sanity CMS (US servers)

## Your Rights
- You can request data deletion
- You can opt-out of analytics anytime
- Cookies are optional

## Contact
Email: [contact email]
```

**Time to create**: 30 minutes  
**Necessity**: YES - Legal requirement + part of spec

---

### 4. AI USAGE DOCUMENTATION 🔴 REQUIRED

**Status**: ❌ NOT CREATED

**What it needs**:
```markdown
# AI Usage Documentation

## 1. UX & Design Work
- Used Claude to brainstorm site structure
- AI helped create wireframe descriptions
- Used AI for brand guide templates

## 2. Code Generation
- Generated initial Eleventy config
- Templates (event.njk, post.njk) with AI assistance
- Sanity integration code from Claude examples
- Seed script (seed-sanity.js) generated with AI

## 3. Documentation
- README, AUTOMATION_GUIDE created with AI help
- Architecture documentation reviewed by AI

## 4. Debugging & Troubleshooting
- Resolved Eleventy build issues with Claude
- Sanity API query optimization with AI assistance

## 5. Content Creation
- Event and blog post templates generated with AI
- Educational content descriptions created with AI help

## 6. Automation Setup
- HubSpot, Zapier, Discord integration guides written with AI
- Example workflows created with Claude

## Summary
AI was used for: design thinking, code scaffolding, documentation, debugging, and content templates. All work was reviewed, customized, and integrated by human developer.
```

**Time to create**: 30 minutes - 1 hour  
**Necessity**: YES - Academic integrity requirement

---

### 5. WORKING ELEVENTY + SANITY SITE 🔴 REQUIRED

**Status**: ✅ ALREADY COMPLETE

**What's included**:
- Multi-page structure (homepage, events, blog, about, get-involved)
- CMS integration (Sanity API)
- 7 seeded documents
- Build successful (0.4s)
- Dev server working
- All pages rendering correctly

**Necessity**: YES ✅ Done

---

### 6. DEPLOYED LIVE URL 🟡 STRONGLY RECOMMENDED

**Status**: ❌ NOT YET DEPLOYED

**Why**: Shows site works in production  
**Where to deploy**: GitHub Pages (free) / Vercel (recommended) / Netlify (alternative)  
**Time**: 30 minutes - 1 hour  
**Necessity**: HIGHLY RECOMMENDED

---

### 7. COOKIE CONSENT BANNER 🟡 STRONGLY RECOMMENDED

**Status**: ❌ NOT IMPLEMENTED (package installed)

**Why**: Privacy best practice + shows GDPR awareness  
**Time**: 1-2 hours (implementation + styling)  
**Necessity**: RECOMMENDED if targeting EU users

---

### 8. PLAYWRIGHT TESTS 🟡 STRONGLY RECOMMENDED

**Status**: ❌ NOT WRITTEN (framework installed)

**What's needed**:
```javascript
// tests/homepage.spec.js
test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:8080');
  expect(await page.title()).toContain('Newark AI');
});

// tests/events.spec.js
test('events page loads', async ({ page }) => {
  await page.goto('http://localhost:8080/events/');
  const events = await page.locator('[data-test="event"]');
  expect(await events.count()).toBeGreaterThan(0);
});
```

**Time**: 2-3 hours (writing + setup)  
**Necessity**: RECOMMENDED (shows QA/testing knowledge)

---

### 9. GITHUB ACTIONS CI/CD 🟡 STRONGLY RECOMMENDED

**Status**: ❌ NOT CONFIGURED

**Why**: Automates linting + testing + deployment  
**Time**: 2-3 hours (setup + debugging)  
**Necessity**: RECOMMENDED (shows DevOps knowledge)

---

### 10. QA REPORT 🟢 OPTIONAL (Nice to have)

**Status**: ❌ NOT CREATED

**What it includes**:
- Lighthouse scores
- Bundle size analysis
- Test results
- Performance metrics

**Time**: 1-2 hours  
**Necessity**: OPTIONAL (nice polish)

---

### 11. WIREFRAMES + BRAND GUIDE 🟢 OPTIONAL (Nice to have)

**Status**: ⚠️ PARTIAL (site built, docs missing)

**Why**: You already built the site, so wireframes are less critical  
**Time**: 2-3 hours  
**Necessity**: OPTIONAL (nice to document design process)

---

### 12. FORM AUTOMATION TESTING 🟢 OPTIONAL (Bonus)

**Status**: ❌ NOT TESTED

**Why**: Requires real HubSpot/Discord credentials  
**Time**: 1-2 hours  
**Necessity**: OPTIONAL (nice bonus if you have credentials)

---

## Minimum Path to Completion

### 🔴 MUST-DO (4-5 hours)

1. **Create CMS Evaluation** (docs/cms-evaluation.md) - 1-2 hours
2. **Create Analytics Evaluation** (docs/analytics-evaluation.md) - 1-2 hours
3. **Create Privacy Policy** (src/privacy.md) - 30 minutes
4. **Create AI Usage Docs** (docs/ai-usage.md) - 30-60 minutes
5. **Deploy site to live URL** - 30 minutes

**Estimated Time**: 5-6 hours  
**Result**: ✅ Ready for submission

---

## Recommended Path to Excellence

### 🔴 + 🟡 MUST-DO + SHOULD-DO (8-10 hours)

Add to minimum path:
6. **Implement cookie consent** - 1-2 hours
7. **Write Playwright tests** (2-3 basic tests) - 2-3 hours
8. **Set up GitHub Actions CI/CD** - 2-3 hours

**Estimated Time**: 8-10 hours  
**Result**: ✅ Professional, complete submission

---

## Premium Path (Full Polish)

### All of above + nice-to-haves (12-16 hours)

9. **Create QA Report** - 1-2 hours
10. **Create wireframes** - 2-3 hours
11. **Create brand guide** - 1-2 hours
12. **Test form automation** - 1-2 hours

**Estimated Time**: 12-16 hours  
**Result**: ✅ Portfolio-ready project

---

## My Recommendation

### Start with MINIMUM PATH (4-5 hours)

1. ✅ CMS Evaluation (1-2 hours)
2. ✅ Analytics Evaluation (1-2 hours)
3. ✅ Privacy Policy (30 min)
4. ✅ AI Usage Docs (30-60 min)
5. ✅ Deploy to GitHub Pages (30 min)

**This gets you to "ready for submission"**

### Then consider RECOMMENDED additions:

6. ✅ Cookie consent (1-2 hours)
7. ✅ Basic Playwright tests (2-3 hours)

**This elevates to "strong project"**

### Optional later:

8. QA Report, Wireframes, CI/CD if you have extra time

---

## Next Steps

Which path do you want to take?

- **Option A**: Minimum (just the 4 docs + deploy) → 5-6 hours → Ready to submit
- **Option B**: Recommended (+ cookie consent + tests) → 10-12 hours → Strong submission
- **Option C**: Premium (everything) → 14-16 hours → Portfolio-ready

I'd recommend **Option B** as the sweet spot: gets you the required documents while adding professional polish.

Want me to start on the CMS Evaluation document?
