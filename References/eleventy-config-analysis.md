# Eleventy Configuration Analysis

## Overview
This portfolio site uses **Eleventy 3.1.2** as the static site generator, configured for optimal performance, SEO, and modern web standards.

## Configuration File: `.eleventy.js`

### Plugins & Extensions
```javascript
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import Image from "@11ty/eleventy-img";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import pluginRss from "@11ty/eleventy-plugin-rss";
```

**Key Plugins:**
- `EleventyHtmlBasePlugin` - URL path management for deployment
- `@11ty/eleventy-img` - Image optimization and responsive images
- `markdown-it` + `markdown-it-anchor` - Enhanced markdown processing with anchor links
- `@11ty/eleventy-plugin-rss` - RSS feed generation

### Directory Structure
```javascript
{
  dir: {
    input: "src",           // Source files
    output: "_site",        // Built site
    includes: "_includes",  // Templates/components
    data: "_data",         // Site data
  },
  templateFormats: ["md", "njk", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk"
}
```

### Collections
**Blog Collection:**
```javascript
eleventyConfig.addCollection("blog", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
});
```

**Projects Collection:**
```javascript
eleventyConfig.addCollection("projects", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/projects/*.md").reverse();
});
```

### Custom Filters

#### Date Handling
- `dateFormat` - Human-readable dates (e.g., "December 10, 2025")
- `readableDate` - Alternative date format
- `dateToISO` - ISO 8601 format for SEO/structured data
- `currentYear` - For copyright notices

#### Content Processing
- `excerpt` - Generate 200-character excerpts from content
- `limit` - Limit arrays to specific number of items
- `baseUrl` - Handle path prefixes for GitHub Pages deployment

#### Navigation
- `getPreviousCollectionItem` - Previous/next post navigation
- `getNextCollectionItem` - Previous/next post navigation

### Image Optimization Shortcode
```javascript
eleventyConfig.addAsyncShortcode("image", async function (src, alt, sizes = "100vw") {
  const metadata = await Image(src, {
    widths: [300, 600, 1200],
    formats: ["webp", "jpeg"],
    outputDir: "./_site/images/",
    urlPath: "/images/",
  });
  
  return Image.generateHTML(metadata, imageAttributes);
});
```

**Features:**
- Multiple widths for responsive images
- WebP format with JPEG fallback
- Lazy loading and async decoding
- Automatic filename generation

### Markdown Configuration
```javascript
const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

md.use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink(),
  slugify: custom_slugify_function
});
```

**Features:**
- HTML in markdown allowed
- Line breaks honored
- Auto-link URLs
- Automatic anchor links for headings
- Custom slug generation

### Static File Handling
```javascript
// Passthrough copies
eleventyConfig.addPassthroughCopy({ "src/images": "images" });
eleventyConfig.addPassthroughCopy("src/assets");
eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
eleventyConfig.addPassthroughCopy({ "src/css/print.css": "css/print.css" });
eleventyConfig.addPassthroughCopy("CNAME");
```

**Note:** CSS and JavaScript are built separately by Tailwind and esbuild, not processed by Eleventy.

### Performance Optimizations
- `setUseGitIgnore(false)` - Custom ignore handling
- Error handling in filters prevents build failures
- Efficient file processing with targeted glob patterns

### Server Configuration
```javascript
serverOptions: {
  port: 8080,
  host: "0.0.0.0"  // Allows external access for testing
}
```

## Key Strengths

1. **Type Safety**: ES modules with proper imports
2. **Error Resilience**: All filters handle null/invalid inputs gracefully
3. **SEO Optimized**: Structured data support, proper date formatting
4. **Performance First**: Image optimization, efficient builds
5. **Developer Experience**: Hot reloading, proper source maps
6. **Deployment Ready**: Path prefix handling for GitHub Pages

## Build Process Integration

The Eleventy configuration works in tandem with:
- **Tailwind CSS** (postcss.config.js, tailwind.config.js)
- **esbuild** (build-alpine.js for JavaScript bundling)
- **npm scripts** (package.json for orchestration)

This creates a modern JAMstack build process with sub-second rebuild times and optimal output.

---

*Last Updated: December 10, 2025*
