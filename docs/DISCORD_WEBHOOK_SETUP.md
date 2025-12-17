# Discord Webhook Setup (Direct - No Netlify Needed)

This is the simplest way to connect your form to Discord. No Zapier account needed, no Netlify needed.

**Total time: 10 minutes**

---

## What is a Discord Webhook?

A webhook is like a direct phone line from your form to Discord. When someone submits the form, it automatically sends a message to your Discord channel.

```
Form Submit → Discord Channel (instant)
```

No middleman apps. Direct connection.

---

## Step 1: Create a Discord Channel for Form Submissions

1. Open Discord
2. Go to your server: **Newark AI Community**
3. Right-click in the channel list
4. Click **"Create Channel"**
5. Name it: **#submissions** (or #volunteers, #form-submissions, whatever you like)
6. Click **"Create"**

Now you have a dedicated channel for form submissions! ✅

---

## Step 2: Create a Webhook

This is the special link that will receive form data.

**In Discord:**

1. Go to your **#submissions** channel
2. Click the gear icon ⚙️ (channel settings)
3. Look for **"Integrations"** in the left menu
4. Click **"Webhooks"**
5. Click **"New Webhook"**
6. Give it a name: **"Form Submissions"**
7. Click **"Create"**

You'll see a webhook URL. It looks like:
```
https://discord.com/api/webhooks/123456789/abcdefghijklmnop
```

**COPY THIS ENTIRE URL** - you'll need it in a moment.

Click **"Copy Webhook URL"** button.

✅ Webhook created!

---

## Step 3: Test the Webhook (Optional but Recommended)

Before connecting your form, let's make sure the webhook works.

**Open a Terminal/PowerShell** and run this command:

```powershell
$webhook = "https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE"
$body = @{
    "content" = "🎉 Test message from webhook!"
} | ConvertTo-Json

Invoke-WebRequest -Uri $webhook -Method POST -ContentType "application/json" -Body $body
```

Replace `YOUR_WEBHOOK_URL_HERE` with the actual webhook URL you copied.

**Check Discord:** You should see the message appear in #submissions instantly! ✅

If it works, continue to Step 4.

---

## Step 4: Update Your Form HTML

Now we need to make the form send to Discord when someone submits it.

The easiest way is to add JavaScript to handle the form submission.

**Open: `src/get-involved.njk`**

Find this line (around line 81):
```html
<form name="volunteer-signup" method="POST" class="space-y-6" netlify>
```

**Replace it with:**
```html
<form id="volunteer-form" name="volunteer-signup" method="POST" class="space-y-6" netlify>
```

Now find the submit button (around line 153):
```html
<button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
  Submit Application
</button>
```

**Right after the closing `</form>` tag** (around line 154), add this JavaScript:

```html
<script>
document.getElementById('volunteer-form').addEventListener('submit', async function(e) {
  // Get form values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value || 'Not provided';
  const affiliation = document.querySelector('input[name="affiliation"]').value;
  const role = document.querySelector('select[name="role"]').value;
  const experience = document.querySelector('textarea[name="experience"]').value;
  const motivation = document.querySelector('textarea[name="motivation"]').value;

  // Your Discord webhook URL
  const webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE';

  // Create Discord message
  const discordMessage = {
    "content": `🎫 **New Volunteer Signup!**`,
    "embeds": [{
      "title": name,
      "color": 3447003,
      "fields": [
        {
          "name": "📧 Email",
          "value": email,
          "inline": true
        },
        {
          "name": "📱 Phone",
          "value": phone,
          "inline": true
        },
        {
          "name": "🏢 Affiliation",
          "value": affiliation,
          "inline": true
        },
        {
          "name": "👤 Role Interest",
          "value": role,
          "inline": true
        },
        {
          "name": "📚 Relevant Experience",
          "value": experience,
          "inline": false
        },
        {
          "name": "💡 Why Volunteer",
          "value": motivation,
          "inline": false
        }
      ],
      "footer": {
        "text": new Date().toLocaleString()
      }
    }]
  };

  try {
    // Send to Discord
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage)
    });
    
    console.log('Message sent to Discord!');
  } catch (error) {
    console.error('Error sending to Discord:', error);
  }
});
</script>
```

**Important:** Replace `YOUR_WEBHOOK_URL_HERE` with your actual webhook URL from Step 2.

---

## Step 5: Save and Test

1. Save the file
2. Go to `http://localhost:8080/get-involved/`
3. Fill out the volunteer form with test data
4. Click **"Submit Application"**
5. Open Discord and check **#submissions** channel

**You should see a nicely formatted message with all the form data!** ✅

---

## What You Just Built

```
User fills form on localhost:8080
           ↓
Form submitted
           ↓
JavaScript runs
           ↓
Discord webhook triggered
           ↓
Message appears in #submissions channel
           ↓
Your team is notified instantly
```

This is production-ready automation!

---

## Customization Ideas

**Want to change the message format?** Edit the JavaScript in the script tag:
- Change the emoji (🎫 → 📝 or whatever you like)
- Change colors (3447003 is blue, try 16711680 for red)
- Add/remove fields
- Change the message title

**Want to send to multiple channels?** Create multiple webhooks and add more fetch calls:

```javascript
// Send to #submissions
await fetch(webhookUrl1, { ... });

// Send to #announcements
await fetch(webhookUrl2, { ... });
```

**Want to add a button to reply?** Discord webhooks support buttons via embeds:

```javascript
"components": [{
  "type": 1,
  "components": [{
    "type": 2,
    "label": "Reply to Volunteer",
    "style": 5,
    "url": "https://discord.com/channels/SERVER_ID/CHANNEL_ID"
  }]
}]
```

---

## Security Note

Your webhook URL is sensitive - anyone with it can post to that channel. 

**For production:**
- Use environment variables instead of hardcoding
- Store in `.env` file
- Only use on your deployed site (not in public code on GitHub)

**For local testing:** It's fine as-is.

---

## If It Doesn't Work

**Check 1: Did you replace the webhook URL?**
```
Find this line in the JavaScript:
const webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE';

Make sure it has the ACTUAL webhook URL, not the placeholder!
```

**Check 2: Is Discord webhook enabled?**
- Go to #submissions channel
- Settings → Integrations → Webhooks
- Make sure your webhook is listed there

**Check 3: Check browser console**
- Open your form page
- Press F12 to open developer tools
- Click "Console" tab
- Submit the form
- Look for error messages

**Check 4: Verify webhook works**
- Use the PowerShell test from Step 3 again
- Make sure message appears in Discord

---

## You're Done! 🎉

Your form is now connected to Discord with **zero external dependencies**.

This is exactly what professional teams use for form submissions. No Zapier fees, no Netlify forms, just pure direct integration.

**Next steps:**
1. Test with a few form submissions
2. Take a screenshot of the Discord message for your project submission
3. Optional: Set up webhooks for other channels (#announcements for blog posts, etc.)

---

## Full Example (Complete Code to Add)

Here's the complete code block to add after your form closing tag:

```html
</form>

<script>
document.getElementById('volunteer-form').addEventListener('submit', async function(e) {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value || 'Not provided';
  const affiliation = document.querySelector('input[name="affiliation"]').value;
  const role = document.querySelector('select[name="role"]').value;
  const experience = document.querySelector('textarea[name="experience"]').value;
  const motivation = document.querySelector('textarea[name="motivation"]').value;

  const webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE';

  const discordMessage = {
    "content": `🎫 **New Volunteer Signup!**`,
    "embeds": [{
      "title": name,
      "color": 3447003,
      "fields": [
        { "name": "📧 Email", "value": email, "inline": true },
        { "name": "📱 Phone", "value": phone, "inline": true },
        { "name": "🏢 Affiliation", "value": affiliation, "inline": true },
        { "name": "👤 Role Interest", "value": role, "inline": true },
        { "name": "📚 Relevant Experience", "value": experience, "inline": false },
        { "name": "💡 Why Volunteer", "value": motivation, "inline": false }
      ],
      "footer": { "text": new Date().toLocaleString() }
    }]
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordMessage)
    });
    console.log('Message sent to Discord!');
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>
```

That's it! Ready to go! 🚀
