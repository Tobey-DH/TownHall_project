export default {
  title: "Newark AI Community Town Hall",
  description: "Empowering Newark residents with AI knowledge through free town halls, training sessions, and community support.",
  url: "https://newark-ai-townhall.org",
  author: "Newark AI Community",
  email: "hello@newark-ai-townhall.org",
  
  // Social links
  social: {
    // Discord invite (never expire, no limit)
    discord: "https://discord.gg/2DgC7wm7fn",
    twitter: "https://twitter.com/newarkai",
    linkedin: "https://linkedin.com/company/newark-ai-community",
    youtube: "https://youtube.com/@newarkai",
  },
  // UI links (can point internally for gating flows)
  links: {
    discordCTA: "/get-involved/#volunteer",
  },
  
  // Analytics configuration (gated by consent)
  analytics: {
    enabled: true,
    // "plausible" or "ga4"
    provider: process.env.ANALYTICS_PROVIDER || "plausible",
    // For Plausible
    plausibleDomain: process.env.PLAUSIBLE_DOMAIN || "newark-ai-townhall.org",
    plausibleSrc: process.env.PLAUSIBLE_SRC || "https://plausible.io/js/script.js",
    // For GA4
    ga4MeasurementId: process.env.GA4_MEASUREMENT_ID || "",
  },

  // Cookie consent defaults
  consent: {
    message: "We use minimal analytics to improve this site.",
    acceptText: "Accept",
    declineText: "Decline",
  },

  // Organization info
  organization: {
    name: "Newark AI Community",
    address: "Newark, NJ",
    phone: "(973) 555-0100",
  },
  
  // HubSpot/Integration placeholders
  integrations: {
    hubspot: {
      enabled: false,
      portalId: "YOUR_PORTAL_ID",
      formId: "YOUR_FORM_ID",
    },
    discord: {
      enabled: true,
      // Announcements channel webhook; override via env var in CI/CD
      webhookAnnouncements: process.env.DISCORD_WEBHOOK_ANNOUNCEMENTS || "https://discordapp.com/api/webhooks/1450649664700551238/dkNrDg23z1rEHnw-JlbPe7Kqn4muDkVhzEXUX2S7-4eAQjPQwEGwf77na5_fRmULOxG8",
      // Submissions channel webhook; override via env var in CI/CD
      webhookSubmissions: process.env.DISCORD_WEBHOOK_SUBMISSIONS || "https://discordapp.com/api/webhooks/1450661304619765974/Foe_1uBqZeo0jugAyp5iakTmxcWjZjITvxItI60-40qpAMpYOa6YpKMlO26RMluYpvMW",
    },
    // Zapier webhook for CRM (e.g., Airtable) write
    zapier: {
      enabled: !!process.env.ZAPIER_WEBHOOK_SUBMISSIONS,
      webhookSubmissions: process.env.ZAPIER_WEBHOOK_SUBMISSIONS || "",
    },
  },
  
  // Navigation
  navigation: [
    { label: "Home", url: "/" },
    { label: "Events", url: "/events/" },
    { label: "Blog", url: "/blog/" },
    { label: "Get Involved", url: "/get-involved/" },
    { label: "About", url: "/about/" },
  ],
};
