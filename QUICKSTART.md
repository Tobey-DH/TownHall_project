# Quick Setup Guide - Newark AI Town Hall Website

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```powershell
npm install
```

This installs:
- Eleventy (static site generator)
- Tailwind CSS (styling)
- All necessary build tools

### 2. Start Development Server
```powershell
npm start
```

This will:
- Build your CSS
- Start Eleventy dev server
- Watch for file changes
- Open browser at http://localhost:8080

### 3. Make Your First Edit

Try editing the homepage:
1. Open `src/index.njk`
2. Change the hero text
3. Save the file
4. See instant changes in browser!

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/_data/site.js` | Site-wide settings (title, email, social links) |
| `src/index.njk` | Homepage |
| `src/events/*.md` | Event pages |
| `src/blog/*.md` | Blog posts |
| `src/styles/main.css` | All styling |
| `.eleventy.js` | Build configuration |

## ✏️ Adding Content

### Add a New Event
1. Copy an existing event from `src/events/`
2. Rename it (e.g., `my-new-event.md`)
3. Update the frontmatter (title, date, location, etc.)
4. Write your event description
5. Save and it automatically appears!

### Add a New Blog Post
1. Copy an existing post from `src/blog/`
2. Rename it (e.g., `my-new-post.md`)
3. Update the frontmatter
4. Write your content
5. Save and it's live!

## 🎨 Customizing Design

### Change Colors
Edit `src/styles/main.css` around line 5:
```css
:root {
  --swiss-red: #E53E3E;  /* Change this to your accent color */
}
```

### Change Site Info
Edit `src/_data/site.js`:
```javascript
{
  title: "Your Organization Name",
  description: "Your description",
  email: "your@email.com",
  // etc...
}
```

## 🌐 Building for Production

When ready to deploy:
```powershell
npm run build
```

This creates the `_site/` folder with your complete website.

## 🔗 Connecting Integrations

### Email Signup (Mailchimp, etc.)
1. Get your form action URL from your email service
2. Edit the form in `src/_includes/event-single.njk`
3. Replace the action URL

### Discord Webhooks
1. Create a webhook in your Discord server
2. Update `src/_data/site.js` with webhook URL
3. Use it to auto-post new content

### Google Analytics
1. Get your GA4 tracking ID
2. Add the script to `src/_includes/base.njk`
3. Place it before the closing `</head>` tag

## ❓ Common Questions

**Q: Can I edit HTML directly?**  
A: Yes! Edit `.njk` files in `src/` and `src/_includes/`

**Q: How do I change the navigation menu?**  
A: Edit the `navigation` array in `src/_data/site.js`

**Q: Can I add custom pages?**  
A: Yes! Create a new `.njk` file in `src/` and add it to navigation

**Q: Where are the images stored?**  
A: Put images in `src/images/` and reference them as `/images/yourimage.jpg`

## 🆘 Getting Help

- Check the full `README.md` for detailed documentation
- Join our Discord community
- Email: hello@newark-ai-townhall.org

## 📋 Pre-Launch Checklist

Before going live:
- [ ] Update all info in `src/_data/site.js`
- [ ] Replace placeholder content with real content
- [ ] Add your logo/images to `src/images/`
- [ ] Test all forms
- [ ] Connect integrations (email, Discord, analytics)
- [ ] Test on mobile devices
- [ ] Run `npm run build` and test the `_site/` folder
- [ ] Deploy to your hosting service

## 🎉 You're Ready!

Your Newark AI Town Hall website is ready to serve your community. Start adding your events and blog posts, and you're good to go!

Need more help? Check the full README.md or reach out to the community.
