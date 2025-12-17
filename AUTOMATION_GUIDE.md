# Automation & Integration Guide

Complete guide for connecting the Newark AI Town Hall website to HubSpot, Discord, email services, and AI summarization tools.

## 📋 Table of Contents

1. [Event Registration Automation](#event-registration-automation)
2. [Discord Integration](#discord-integration)
3. [Post-Event Automation](#post-event-automation)
4. [AI Summarization](#ai-summarization)
5. [Email Marketing](#email-marketing)
6. [Volunteer Management](#volunteer-management)

---

## 🎫 Event Registration Automation

### Option 1: HubSpot Integration

#### Setup Steps:
1. **Create HubSpot Form**
   - Log into HubSpot
   - Navigate to Marketing → Forms
   - Create new form with fields: Name, Email, Neighborhood, Interest Level
   - Copy Form ID and Portal ID

2. **Update Site Configuration**
   ```javascript
   // src/_data/site.js
   integrations: {
     hubspot: {
       enabled: true,
       portalId: "YOUR_PORTAL_ID",
       formId: "YOUR_FORM_ID",
     }
   }
   ```

3. **Update Form Template**
   ```html
   <!-- src/_includes/event-single.njk -->
   <form 
     action="https://forms.hubspot.com/uploads/form/v2/{{ site.integrations.hubspot.portalId }}/{{ site.integrations.hubspot.formId }}" 
     method="POST"
   >
   ```

4. **Create HubSpot Workflow**
   - Trigger: Form submission
   - Actions:
     - Add contact property: "Community Member"
     - Send confirmation email (template below)
     - Add to event-specific list
     - Create task for team: "Send Discord invite"

#### Confirmation Email Template:
```
Subject: You're registered for {{ event.title }}!

Hi {{ contact.firstname }},

Great news—you're registered for our AI town hall:

📅 Event: {{ event.title }}
📍 Location: {{ event.location }}
🕒 Date & Time: {{ event.date }} at {{ event.time }}

What to Expect:
[Event description]

What to Bring:
- Your questions and curiosity!
- [Any specific items]

Join Our Community:
We'd love to have you in our Discord community for ongoing discussions:
[Discord Invite Link]

See you there!

Newark AI Community Team
```

### Option 2: Netlify Forms (Simpler, No CRM)

1. **Add Netlify Form Attribute**
   ```html
   <form name="event-registration" method="POST" netlify>
   ```

2. **Configure Notifications**
   - In Netlify dashboard → Forms
   - Add email notification
   - Add Zapier webhook (see below)

### Option 3: Zapier Integration (Most Flexible)

**Recommended Zap Flow:**

```
Trigger: Form Submission (via webhook or integration)
  ↓
Action 1: Add to Mailing List (Mailchimp/ConvertKit)
  - List: "Community Members"
  - Tags: "Event Attendee", "[Event Name]"
  ↓
Action 2: Send Email (Gmail/SendGrid)
  - Use confirmation template
  - Include event details
  - Add calendar attachment
  ↓
Action 3: Post to Discord
  - Channel: #announcements
  - Message: "New registration for [Event]!"
  ↓
Action 4: Add to Google Sheets
  - Track all registrations
  - Generate reports
```

#### Setting Up Webhook:
```html
<!-- Add to form -->
<input type="hidden" name="webhook_url" value="https://hooks.zapier.com/hooks/catch/XXXXX/YYYYY/">
```

---

## 💬 Discord Integration

### Auto-Posting New Blog Posts

#### Method 1: Discord Webhook (Manual)

1. **Create Webhook**
   - Discord Server Settings → Integrations → Webhooks
   - Create webhook for #announcements
   - Copy webhook URL

2. **Add to Site Config**
   ```javascript
   // src/_data/site.js
   integrations: {
     discord: {
       enabled: true,
       webhookUrl: "YOUR_WEBHOOK_URL"
     }
   }
   ```

3. **Create Post Script**
   ```javascript
   // scripts/post-to-discord.js
   const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
   
   async function postToDiscord(title, description, url) {
     await fetch(webhookUrl, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         embeds: [{
           title: `📝 New Blog Post: ${title}`,
           description: description,
           url: url,
           color: 15088435, // Red color
           timestamp: new Date()
         }]
       })
     });
   }
   ```

#### Method 2: Zapier Discord Integration

**Zap Flow:**
```
Trigger: RSS Feed (blog/feed.xml)
  ↓
Action: Send Channel Message in Discord
  - Channel: #announcements
  - Message Format:
    📝 **New Blog Post!**
    
    **{{title}}**
    {{description}}
    
    Read more: {{link}}
```

### Volunteer Role Assignment

#### Method 1: MEE6 Bot

1. Install MEE6 bot
2. Setup reaction roles:
   - Post message in #introductions
   - Add reactions for roles (🎓 = Student, 👨‍🏫 = Instructor, etc.)
   - Users react to get role

#### Method 2: Zapier Integration

```
Trigger: Volunteer Form Submission
  ↓
Action: Assign Role in Discord
  - Server: Newark AI Community
  - User: [Email lookup]
  - Role: "Volunteer"
  ↓
Action: Send DM to User
  - Welcome message
  - Onboarding instructions
  - Link to volunteer channel
```

### Discord Invite Generation

For automated invite links:

```javascript
// Generate temporary invite
const inviteCode = 'your-permanent-invite-code'; // Create in Discord
const inviteUrl = `https://discord.gg/${inviteCode}`;

// Or use Discord API for dynamic invites
const response = await fetch(
  `https://discord.com/api/v10/channels/${channelId}/invites`,
  {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      max_age: 604800, // 7 days
      max_uses: 1,
      unique: true
    })
  }
);
```

---

## 📧 Post-Event Automation

### 24-Hour Follow-Up Email

#### HubSpot Workflow:

1. **Trigger**: Contact property "Event Attended" = [Event Name]
2. **Delay**: 24 hours
3. **Send Email** (template below)

#### Email Template:
```
Subject: Thanks for attending {{ event.title }}!

Hi {{ contact.firstname }},

Thank you for joining us at yesterday's AI town hall! Here's what you need:

📹 Recording: [Link]
📊 Slides: [Link]
📝 Key Takeaways:
- [Point 1]
- [Point 2]
- [Point 3]

Resources Mentioned:
- [Resource 1]
- [Resource 2]

What's Next?
1. Join our Discord: [Link]
2. Practice what you learned
3. Join our next event: [Link to events page]

Upcoming Events:
- [Next event 1]
- [Next event 2]

Questions? Reply to this email or ask in Discord!

Best,
Newark AI Community Team
```

### Automated Survey (Optional)

Send 48 hours after event:

```
Subject: Quick feedback on {{ event.title }}

Hi {{ contact.firstname }},

We'd love your feedback! This 2-minute survey helps us improve:

[Survey Link - Google Forms/Typeform]

Questions:
1. How would you rate the session? (1-5 stars)
2. What did you find most valuable?
3. What topics would you like us to cover next?
4. Would you recommend to a friend?

Thank you!
```

---

## 🤖 AI Summarization

### Event Transcript → Blog Post

#### Using OpenAI API:

```javascript
// scripts/summarize-event.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function summarizeEvent(transcript, eventTitle) {
  const prompt = `
    Summarize this AI town hall transcript into a blog post format.
    
    Event: ${eventTitle}
    Transcript: ${transcript}
    
    Create:
    1. A compelling introduction (2-3 paragraphs)
    2. Key topics discussed (bullet points)
    3. Main takeaways (5-7 points)
    4. Audience questions and answers (highlight 3-4)
    5. A call-to-action conclusion
    
    Write in plain language suitable for Newark residents with varying tech literacy.
  `;
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a community educator writing accessible content about AI for Newark residents."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 2000
  });
  
  return response.choices[0].message.content;
}

// Usage
const blogPost = await summarizeEvent(transcript, "AI Basics Town Hall");
// Save to src/blog/[event-name]-recap.md
```

### Generate Social Media Posts

```javascript
async function generateSocialPosts(eventSummary) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Create engaging social media posts about this AI town hall."
      },
      {
        role: "user",
        content: `Event summary: ${eventSummary}\n\nCreate:\n1. Twitter post (280 chars)\n2. LinkedIn post (3 paragraphs)\n3. Instagram caption (2-3 sentences + hashtags)`
      }
    ]
  });
  
  return response.choices[0].message.content;
}
```

### Generate Key Takeaways

```javascript
async function generateTakeaways(transcript) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: `Extract 5-7 key takeaways from this transcript in simple bullet points:\n\n${transcript}`
      }
    ]
  });
  
  return response.choices[0].message.content;
}
```

---

## 📬 Email Marketing

### Mailchimp Integration

1. **Create Audience**
   - Name: "Newark AI Community"
   - Add tags: "Event Attendee", "Volunteer", "Newsletter"

2. **Add to Forms**
   ```html
   <form action="https://[your-list].list-manage.com/subscribe/post" method="POST">
     <input type="hidden" name="u" value="YOUR_USER_ID">
     <input type="hidden" name="id" value="YOUR_LIST_ID">
     <!-- Your form fields -->
   </form>
   ```

3. **Automation Campaigns**
   - Welcome series (3 emails)
   - Weekly newsletter
   - Event reminders (3 days before, 1 day before)

### ConvertKit Alternative

Simpler setup, better for creators:

```html
<form action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions" method="post">
  <!-- Your fields -->
</form>
```

---

## 👥 Volunteer Management

### Volunteer Application Workflow

#### Zapier Setup:

```
Trigger: Volunteer Form Submission
  ↓
Action 1: Create Row in Google Sheets
  - Sheet: "Volunteer Applications"
  - Columns: Name, Email, Role, Experience, Date
  ↓
Action 2: Send Email to Team
  - Notify coordinators of new application
  ↓
Action 3: Send Confirmation to Applicant
  - "We received your application"
  - Timeline for review
  ↓
Filter: If application approved
  ↓
Action 4: Assign Discord Role
  - Role: "Volunteer"
  ↓
Action 5: Send Onboarding Email
  - Welcome package
  - Training materials
  - Next steps
```

### Onboarding Email Template:

```
Subject: Welcome to the Newark AI Community volunteer team!

Hi {{ name }},

Welcome aboard! We're excited to have you join our team of volunteer instructors and coordinators.

Your Next Steps:

1. Join Our Discord 🎮
   [Discord Invite with Volunteer Role]
   Check #volunteers channel for coordination

2. Review Training Materials 📚
   [Link to Google Drive folder]
   - Teaching guidelines
   - AI basics curriculum
   - Community code of conduct

3. Shadow an Event 👀
   Attend one of our upcoming town halls to see how we do it:
   [Next 2-3 events]

4. Schedule Your Training Session 📅
   Book a 30-minute onboarding call:
   [Calendly link]

Questions?
Reply to this email or ping us in Discord!

Looking forward to working with you,
Newark AI Community Team
```

---

## 🔐 Security & Privacy Notes

### API Keys & Environment Variables

Never commit these to Git! Use `.env` file:

```bash
# .env (add to .gitignore)
OPENAI_API_KEY=sk-...
DISCORD_WEBHOOK_URL=https://...
HUBSPOT_API_KEY=...
MAILCHIMP_API_KEY=...
```

Load in your scripts:
```javascript
import 'dotenv/config';
const apiKey = process.env.OPENAI_API_KEY;
```

### Data Privacy

- Never share full registration lists publicly
- Comply with CAN-SPAM for emails
- Provide unsubscribe options
- Store sensitive data securely (use HubSpot/CRM, not spreadsheets)
- Get consent for Discord invites

---

## 📊 Analytics & Tracking

### Track Registration Conversions

Add to event pages:

```javascript
// When form submitted
gtag('event', 'registration', {
  'event_category': 'Event',
  'event_label': '{{ event.title }}',
  'value': 1
});
```

### Track Discord Joins

Use Discord API to monitor:
- New member count
- Role assignments
- Channel activity

---

## 🆘 Troubleshooting

**Form submissions not working?**
- Check form action URL
- Verify API keys
- Test with webhook.site first

**Discord webhook fails?**
- Verify webhook URL is correct
- Check webhook hasn't been deleted
- Test with curl/Postman first

**AI API costs too much?**
- Use GPT-3.5 instead of GPT-4
- Limit max_tokens
- Cache common responses
- Consider alternatives (Claude, Llama)

---

## 📞 Support

Questions about automation? Ask in:
- Discord: #tech-support
- Email: tech@newark-ai-townhall.org

---

**Last Updated**: December 2025  
**Maintained by**: Newark AI Community Tech Team
