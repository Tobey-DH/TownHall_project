# Zapier Setup Guide: Form to Discord Automation

**Date**: December 16, 2025  
**Project**: Newark AI Community Town Hall  
**Goal**: Send form submissions from website → Discord #submissions channel

---

## Step 1: Create Zapier Account (5 minutes)

### Sign Up
1. Go to **https://zapier.com**
2. Click "Sign up"
3. Use your email address
4. Create password
5. Verify email

### Home Screen
After login, you'll see the Zapier dashboard with:
- "Create" button (to make new Zaps)
- "My Apps" (connected accounts)
- "Zaps" (your automations)

---

## Step 2: Create Your First Zap (3 minutes)

### Click "Create"
1. Click orange **"Create"** button (top left)
2. You'll see "Create a Zap" page
3. Three sections:
   - **Trigger** (what starts it)
   - **Action** (what happens)
   - **Test & Review**

---

## Step 3: Set Up the Trigger (Form Submission)

### Choose Trigger App

You have two options depending on your form:

**Option A: If using Netlify Forms** (Recommended)
```
1. In Trigger section, search: "Netlify"
2. Click "Netlify"
3. Select trigger: "New Form Submission"
4. Click "Continue"
```

**Option B: If using Formspree**
```
1. In Trigger section, search: "Formspree"
2. Click "Formspree"
3. Select trigger: "New Submission"
4. Click "Continue"
```

**Option C: If using custom HTML form**
```
1. Search: "Webhooks"
2. Click "Webhooks by Zapier"
3. Select: "Catch Hook"
4. Note the webhook URL (you'll add to your form)
5. Click "Continue"
```

### Connect Your Account

For Netlify:
```
1. Click "Connect a new account"
2. Click "Authorize with Netlify"
3. Log into your Netlify account
4. Click "Authorize Zapier"
5. Select your site: "newark-ai-townhall" (or your site name)
6. Click "Continue"
```

### Select Your Form

```
1. Under "Form", click dropdown
2. Select: "volunteer-signup" or "event-registration"
   (whichever form you want to connect)
3. Click "Continue"
```

### Test the Trigger

```
1. Click "Test trigger"
2. Zapier will wait for a new submission
3. Go to your website (http://localhost:8080)
4. Fill out the form and submit
5. Return to Zapier - you should see "Data found!"
6. Click "Continue"
```

---

## Step 4: Set Up the Action (Discord Message)

### Choose Action App

```
1. In "Action" section, search: "Discord"
2. Click "Discord"
3. Select action: "Send Channel Message"
4. Click "Continue"
```

### Connect Discord Account

```
1. Click "Connect a new account"
2. A Discord login window appears
3. Log in with your Discord account
4. Authorize Zapier to access Discord
5. You'll be back in Zapier with green checkmark
6. Click "Continue"
```

### Configure Discord Message

```
1. Select "Server": Your Discord server
2. Select "Channel": #submissions
3. In "Message" field, you'll create your message template
4. Click "Continue"
```

### Create Message Template

This is where the magic happens! You'll map form fields to Discord message.

**Click in Message field** and build your template:

```
Raw template (click "Message" field):

🎫 New Volunteer Signup!

Name: [INSERT FROM PREVIOUS STEP]
Email: [INSERT FROM PREVIOUS STEP]
Interest: [INSERT FROM PREVIOUS STEP]
Timestamp: [INSERT DATE]

---

How to add fields:
1. Start typing your message
2. When you want to add a form field, type "{{ "
3. A dropdown shows all available form fields
4. Select the field (e.g., "Name", "Email", "Interest")
5. It becomes like: "{{ name }}"
6. Continue typing your message
```

**Example Complete Message**:
```
🎫 New Volunteer Signup!

**Name:** {{ name }}
**Email:** {{ email }}
**Interest:** {{ interest }}
**Time:** {{ created_at }}

---
Join our Discord: https://discord.gg/EqX4PRtkT
```

### Available Form Fields

When you click in the Message field, Zapier shows you ALL available fields:
- {{ name }} - Volunteer's name
- {{ email }} - Their email
- {{ message }} - Their message
- {{ interest }} - Their area of interest
- {{ created_at }} - When they submitted

**Pro Tip**: Use bold with **{{ name }}** for better Discord formatting

### Example Messages

**Minimal**:
```
New submission from {{ name }} ({{ email }})
```

**Detailed**:
```
🎫 **New Volunteer!**
Name: {{ name }}
Email: {{ email }}
Interest: {{ interest }}
```

**Rich Format**:
```
✨ **New Town Hall Volunteer** ✨

👤 **Name:** {{ name }}
📧 **Email:** {{ email }}
💡 **Interest:** {{ interest }}
⏰ **Submitted:** {{ created_at }}

[Join Discord](https://discord.gg/EqX4PRtkT)
```

### Click Continue

Once you're happy with your message template, click **"Continue"**

---

## Step 5: Test the Automation

### Zapier will show test data

```
1. You'll see a preview of what the Discord message will look like
2. It uses YOUR ACTUAL form data from earlier
3. Check that all fields populated correctly
4. Read through the message
5. Make sure it looks good
```

### Verify It Matches

```
Discord message should show:
✓ Form submitter's name
✓ Their email
✓ Their answer
✓ Timestamp
✓ All readable
```

### Click "Create Zap"

If everything looks good, click **"Create Zap"** (bottom right)

---

## Step 6: Activate Your Zap

### You'll see "Zap Details"

```
1. Your Zap name: "Volunteer Signup → Discord"
   (You can rename it at top)
2. Status toggle: Currently OFF
3. Click the toggle to turn it ON
```

### When it's ON

```
✅ Status: "On"
✅ Light turns green
✅ Now live and listening for form submissions
```

### Congratulations! 🎉

Your automation is now active and will:
1. Watch for new form submissions on your website
2. When someone submits → Instantly post to Discord #submissions
3. Include all their information
4. Continue forever (until you turn it off)

---

## Step 7: Test It End-to-End

### Go to Your Website

```
1. Open http://localhost:8080
2. Navigate to Get Involved page
3. Scroll to volunteer form
4. Fill out:
   - Name: "Test User"
   - Email: "test@example.com"
   - Interest: "Event Planning"
   - Message: "I want to help!"
5. Click "Submit"
```

### Check Discord

```
1. Open Discord
2. Go to your server
3. Go to #submissions channel
4. You should see the message appear instantly!

Example:
🎫 New Volunteer Signup!
Name: Test User
Email: test@example.com
Interest: Event Planning
Time: Dec 16, 2025
```

### Success! ✅

If you see the message in Discord:
- ✅ Zapier is working
- ✅ Form submission working
- ✅ Discord integration complete
- ✅ Ready for project submission

---

## Troubleshooting

### Message not appearing in Discord?

**Check 1: Is your Zap ON?**
```
Go to zapier.com → Click your Zap → Check toggle is green/ON
```

**Check 2: Did you submit the form?**
```
Go to website → Fill form completely → Click Submit
(Don't just type and leave)
```

**Check 3: Are you in the right Discord channel?**
```
Open Discord → Click on #submissions
(Make sure you're in the correct channel)
```

**Check 4: Check Zapier Task History**
```
In Zapier, click your Zap → "Task History" tab
Shows all submissions and if they succeeded or failed
Look for errors/red indicators
```

### Form not submitting?

```
Check 1: Form has netlify attribute
<form name="volunteer-signup" method="POST" netlify>

Check 2: Input fields have name attributes
<input name="name" required>

Check 3: Site is running
npm start (in your project)

Check 4: Check browser console for errors
Right-click → Inspect → Console tab
```

### Discord channel not showing in Zapier?

```
Solution: Make sure you're logged into correct Discord account
1. In Zapier, go to My Apps
2. Disconnect Discord
3. Reconnect with correct Discord account
4. Try again
```

---

## Advanced: Send to Multiple Channels

Want to also announce to #announcements? Easy!

```
1. After first action works, click "+"
2. Add another "Send Channel Message" action
3. Select #announcements channel
4. Create different message for announcements:

"📢 New volunteer interest!
{{ name }} wants to help with {{ interest }}"

3. Activate both actions
```

Now submissions go to BOTH #submissions and #announcements!

---

## Advanced: Rich Discord Embeds

Want fancy Discord embeds instead of plain messages?

```
Use Discord action: "Send Channel Message with Embeds"
Instead of plain text, you get:
- Title
- Description
- Fields (Key-value pairs)
- Color
- Thumbnail/Image
- Footer

This creates more professional-looking Discord notifications.
```

---

## Advanced: Filter Submissions

Only want to post certain submissions to Discord?

Example: Only post if Interest = "Volunteering"

```
1. After Trigger, click "+"
2. Add a "Filter" step
3. Set condition: Interest = Volunteering
4. Only submissions matching will go to Discord
```

---

## Next Steps

### You Now Have:

✅ Zapier account created  
✅ Zap set up (Trigger + Action)  
✅ Form → Discord automation working  
✅ Discord receives submissions in real-time  
✅ Meets project requirements  

### For Project Submission:

1. **Screenshot the Zap**
   ```
   Go to zapier.com → Click your Zap → Take screenshot
   Shows automation is live and active
   ```

2. **Screenshot Discord message**
   ```
   Go to Discord → #submissions
   Take screenshot showing test submission appeared
   ```

3. **Document in your project**
   ```
   Add to docs/DISCORD_AUTOMATION.md:
   - Screenshots
   - How it works
   - Where to find settings
   ```

4. **You're done!** 🎉
   ```
   ✅ Automation set up
   ✅ Live and working
   ✅ Meets "Discord + Automation" requirement
   ✅ Ready for submission
   ```

---

## Zapier Free Tier

**Included**:
- ✅ Up to 100 tasks/month
- ✅ Unlimited Zaps
- ✅ All major apps
- ✅ No credit card needed

**That's plenty for testing!** Each form submission = 1 task.

If you get 100+ submissions/month, upgrade to:
- $19-29/month for more tasks
- But free tier is perfect for now

---

## Congratulations! 🎊

You now have professional-grade automation:
- Website form submits
- Instantly posts to Discord
- Team notified immediately
- Zero manual work
- Scales automatically

This is a real production feature used by thousands of communities!

---

## Quick Reference: Your Setup

```
Trigger: Form submission to volunteer-signup
  ↓
Zapier: Receives submission data
  ↓
Action: Send to Discord #submissions
  ↓
Result: Discord message with all details
```

**Your Discord**: https://discord.gg/EqX4PRtkT  
**Your Form**: http://localhost:8080/get-involved/  
**Your Zap Status**: [Check zapier.com after creating]

---

**Questions? Next steps? Ready to test?** Let me know!
