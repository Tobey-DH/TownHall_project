 import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import Image from "@11ty/eleventy-img";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { getAllEvents, getAllPosts, toPlainText } from "./src/_data/sanity.js";

export default async function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginRss);

  // Exclude old markdown files - now using Sanity as content source
  eleventyConfig.ignores.add("src/blog/*.md");
  eleventyConfig.ignores.add("src/events/*.md");

  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Collections from Sanity
  eleventyConfig.addCollection("blog", async function () {
    const posts = await getAllPosts();
    return posts;
  });

  eleventyConfig.addCollection("events", async function () {
    const events = await getAllEvents();
    const now = new Date();
    return events.filter(event => new Date(event.eventDate) >= now);
  });

  eleventyConfig.addCollection("pastEvents", async function () {
    const events = await getAllEvents();
    const now = new Date();
    return events
      .filter(event => new Date(event.eventDate) < now)
      .sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));
  });

  // Filters
  eleventyConfig.addFilter("dateFormat", function (date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("timeFormat", function (date) {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  });

  eleventyConfig.addFilter("dateToISO", function (date) {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("currentYear", function () {
    return new Date().getFullYear();
  });

  eleventyConfig.addFilter("excerpt", function (content) {
    if (!content) return "";
    const text = content.replace(/<[^>]+>/g, "");
    return text.substring(0, 200) + (text.length > 200 ? "..." : "");
  });

  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("baseUrl", function (url) {
    const pathPrefix = process.env.PATH_PREFIX || "";
    return pathPrefix + url;
  });

  eleventyConfig.addFilter("toPlainText", function (portableText) {
    return toPlainText(portableText);
  });

  // Shortcodes
  eleventyConfig.addAsyncShortcode("image", async function (src, alt, sizes = "100vw") {
    try {
      const metadata = await Image(src, {
        widths: [300, 600, 1200],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/images/",
        urlPath: "/images/",
      });

      const imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(metadata, imageAttributes);
    } catch (error) {
      console.error(`Error processing image ${src}:`, error);
      return `<img src="${src}" alt="${alt}" loading="lazy">`;
    }
  });

  // Markdown configuration
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  md.use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [1, 2, 3, 4],
  });

  eleventyConfig.setLibrary("md", md);

  // Watch targets
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/js/");

  return {
    pathPrefix: "/TownHall_project/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
