# Zapier Setup Quick Reference

## Your Setup Details

**Project**: Newark AI Community Town Hall  
**Trigger**: Volunteer signup form (name="volunteer-signup")  
**Action**: Send to Discord #submissions  
**Status**: Ready to configure

---

## 5-Minute Quick Start

### 1. Go to Zapier
```
https://zapier.com
Sign up or log in
```

### 2. Click "Create"
```
Orange "Create" button → top left
```

### 3. Set Trigger
```
Search: "Netlify"
Click: Netlify
Select: "New Form Submission"
Click: Continue
```

### 4. Connect Netlify
```
Click: "Connect a new account"
Click: "Authorize with Netlify"
Log in with your Netlify account
Select: Your site
Click: Continue
```

### 5. Select Form
```
Dropdown: Select "volunteer-signup"
Click: Continue

(Website will trigger - fill form at http://localhost:8080/get-involved/)

Click: "Test trigger"
Submit form on website
Wait for "Data found!"
Click: Continue
```

### 6. Set Action
```
Search: "Discord"
Click: Discord
Select: "Send Channel Message"
Click: Continue
```

### 7. Connect Discord
```
Click: "Connect a new account"
Log in with Discord
Click: "Authorize Zapier"
Click: Continue
```

### 8. Configure Message
```
Server: (your Discord server)
Channel: #submissions
Message: Copy/paste template below
Click: Continue
```

### Discord Message Template

```
🎫 **New Volunteer Signup!**

**Name:** {{ name }}
**Email:** {{ email }}
**Interest:** {{ role }}
**Affiliation:** {{ affiliation }}

**Experience:**
{{ experience }}

**Motivation:**
{{ motivation }}

---
💬 Reply in Discord to reach out!
```

### 9. Review & Create
```
Look at preview
Click: "Create Zap"
Toggle: Turn ON (green)
```

### 10. Test It!
```
Go to: http://localhost:8080/get-involved/
Scroll to: Volunteer Application
Fill out form
Click: Submit Application

Check Discord #submissions
Message should appear instantly! ✅
```

---

## Field Reference

Form fields available in Zapier:

```
{{ name }}        → Full Name
{{ email }}       → Email address
{{ phone }}       → Phone number
{{ affiliation }} → School/Organization
{{ role }}        → Volunteer role (instructor/coordinator/content/other)
{{ experience }}  → Relevant experience
{{ motivation }}  → Why they want to volunteer
{{ created_at }}  → Submission timestamp
```

---

## Discord Channel Names

```
#submissions      → Where your messages will go
#announcements    → For blog posts (future)
#events           → For event reminders (future)
#ai-questions     → Community Q&A
#introductions    → New member intros
#volunteers       → Volunteer coordination
```

---

## Test Checklist

- [ ] Zapier account created
- [ ] Zap created and ON
- [ ] Form filled out and submitted
- [ ] Message appeared in Discord #submissions
- [ ] All form fields populated correctly
- [ ] Ready for project submission

---

## Troubleshooting Quick Fixes

**Form not submitting?**
→ Check form has `name="volunteer-signup"` and `netlify` attribute

**Discord not getting message?**
→ Check Zapier toggle is ON (green)
→ Check you're in #submissions channel
→ Check Task History in Zapier for errors

**Can't see form fields in Zapier?**
→ Make sure you tested trigger and got "Data found!"
→ Go back and retest trigger

**Can't connect Discord?**
→ Make sure you're logged into same Discord account
→ Check you have permission in your server
→ Disconnect & reconnect in "My Apps"

---

## After Setup

### What Happens Now

1. Someone visits your site
2. Fills out volunteer form
3. Clicks "Submit Application"
4. ✅ Instantly posts to Discord #submissions
5. Your team is notified
6. You respond and hire them!

### Automation Benefits

- ✅ No manual copying/pasting
- ✅ Real-time notifications
- ✅ Never miss a submission
- ✅ Professional workflow
- ✅ Scales automatically

---

## Next Automations (After You Get First One Working)

**Blog Posts → Discord**
```
Trigger: New blog post published in Sanity
Action: Post to #announcements
Message: Title + link
```

**Events → Discord**
```
Trigger: New event created in Sanity
Action: Post to #events
Message: Event details + join link
```

**Emails → Auto-Reply**
```
Trigger: Volunteer submits form
Action: Send email with Discord link
```

---

## Zapier Costs

- **Free tier**: 100 tasks/month (plenty!)
- **1 form submission** = 1 task
- **100 volunteers/month** = uses free tier completely
- **After 100**: Upgrade to $19/month if needed

For now, free tier is perfect!

---

## Your Links

- **Discord**: https://discord.gg/EqX4PRtkT
- **Form**: http://localhost:8080/get-involved/
- **Zapier**: https://zapier.com
- **Guide**: See ZAPIER_SETUP_GUIDE.md for detailed steps

---

## Ready?

1. Open https://zapier.com
2. Click "Create"
3. Follow the 5-Minute Quick Start above
4. Tell me when you hit any issues!

Good luck! 🚀
