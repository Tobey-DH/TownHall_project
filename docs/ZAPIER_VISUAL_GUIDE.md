# Zapier Setup Visual Guide (What You'll See)

## Step 1: Zapier Home Screen

```
┌─────────────────────────────────────────────┐
│  Zapier Dashboard                           │
├─────────────────────────────────────────────┤
│                                             │
│  [Create]  [My Apps]  [Zaps]  [Help]       │
│                                             │
│  ┌────────────────────────────────────┐    │
│  │ Create a Zap                       │    │
│  │                                    │    │
│  │ [Create] ← Click this button       │    │
│  │                                    │    │
│  └────────────────────────────────────┘    │
│                                             │
└─────────────────────────────────────────────┘
```

Click the orange **"Create"** button.

---

## Step 2: Trigger Selection Screen

```
┌─────────────────────────────────────────────┐
│  Create a Zap                               │
├─────────────────────────────────────────────┤
│                                             │
│  TRIGGER (What starts it)                   │
│  ┌─────────────────────────────────────┐   │
│  │ Search apps...                      │   │
│  │ (Type: "Netlify")                   │   │
│  │                                     │   │
│  │ ☐ Gmail                            │   │
│  │ ☐ Slack                            │   │
│  │ ☐ Shopify                          │   │
│  │ ☒ Netlify ← Select this            │   │
│  │ ☐ Zapier                           │   │
│  │ ☐ Discord                          │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ACTION (What happens)                      │
│  ┌─────────────────────────────────────┐   │
│  │ (Will set up after trigger)         │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

Type "Netlify" → Click **Netlify** app.

---

## Step 3: Trigger Type Selection

```
┌─────────────────────────────────────────────┐
│  Choose Trigger Type                        │
├─────────────────────────────────────────────┤
│                                             │
│  ☒ New Form Submission ← Select this       │
│  ☐ New Comment                             │
│  ☐ Site Deploy Succeeded                   │
│  ☐ Build Started                           │
│  ☐ Build Failed                            │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Click **"New Form Submission"** → Click **"Continue"**.

---

## Step 4: Authorize Netlify

```
┌─────────────────────────────────────────────┐
│  Connect Your Account                       │
├─────────────────────────────────────────────┤
│                                             │
│  Netlify Authorization                      │
│                                             │
│  [Authorize with Netlify]                   │
│                                             │
│  (This opens Netlify login in new tab)      │
│                                             │
│  You'll see:                                │
│  - Login to Netlify                         │
│  - Authorize Zapier to access               │
│  - Return to Zapier                         │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Click **"Authorize with Netlify"** → Log in → Click **"Continue"**.

---

## Step 5: Select Your Form

```
┌─────────────────────────────────────────────┐
│  Select Form                                │
├─────────────────────────────────────────────┤
│                                             │
│  Site:                                      │
│  ▼ newark-ai-townhall (your site)          │
│                                             │
│  Form:                                      │
│  ▼ volunteer-signup ← Select this          │
│    (other forms in dropdown)                │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Click dropdown → Select **"volunteer-signup"** → Click **"Continue"**.

---

## Step 6: Test the Trigger

```
┌─────────────────────────────────────────────┐
│  Test Your Trigger                          │
├─────────────────────────────────────────────┤
│                                             │
│  [Test trigger]                             │
│                                             │
│  Zapier is waiting for a form submission... │
│                                             │
│  ⏳ Waiting...                              │
│                                             │
│  (Go fill out form on your website now)     │
│                                             │
└─────────────────────────────────────────────┘
```

**Now do this**:
1. Open http://localhost:8080/get-involved/
2. Scroll to "Volunteer Application"
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 555-0100
   - Role: Volunteer Instructor
   - Experience: Testing Zapier
   - Motivation: To help the community
4. Click "Submit Application"

**Back in Zapier, you'll see**:

```
┌─────────────────────────────────────────────┐
│  Test Your Trigger                          │
├─────────────────────────────────────────────┤
│                                             │
│  ✅ Data found!                             │
│                                             │
│  Form Data:                                 │
│  - name: "Test User"                        │
│  - email: "test@example.com"                │
│  - phone: "555-0100"                        │
│  - role: "instructor"                       │
│  - experience: "Testing Zapier"             │
│  - motivation: "To help the community"      │
│  - created_at: "2025-12-16T..."             │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Click **"Continue"**.

---

## Step 7: Action Selection (Discord)

```
┌─────────────────────────────────────────────┐
│  Create a Zap (Action)                      │
├─────────────────────────────────────────────┤
│                                             │
│  ACTION (What happens)                      │
│  ┌─────────────────────────────────────┐   │
│  │ Search apps...                      │   │
│  │ (Type: "Discord")                   │   │
│  │                                     │   │
│  │ ☐ Stripe                           │   │
│  │ ☒ Discord ← Select this            │   │
│  │ ☐ Slack                            │   │
│  │ ☐ Teams                            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Type "Discord" → Click **Discord** → Click **"Continue"**.

---

## Step 8: Discord Action Type

```
┌─────────────────────────────────────────────┐
│  Choose Action Type                         │
├─────────────────────────────────────────────┤
│                                             │
│  ☒ Send Channel Message ← Select this      │
│  ☐ Send Direct Message                     │
│  ☐ Create Thread Message                   │
│  ☐ Add Role to User                        │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Click **"Send Channel Message"** → Click **"Continue"**.

---

## Step 9: Authorize Discord

```
┌─────────────────────────────────────────────┐
│  Connect Your Account                       │
├─────────────────────────────────────────────┤
│                                             │
│  Discord Authorization                      │
│                                             │
│  [Authorize with Discord]                   │
│                                             │
│  (Discord login opens in popup)             │
│                                             │
│  You'll see:                                │
│  - Log in to Discord                        │
│  - "Allow Zapier to access your server?"    │
│  - Click "Authorize"                        │
│  - Return to Zapier                         │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

Click **"Authorize with Discord"** → Authorize → Click **"Continue"**.

---

## Step 10: Configure Discord Message

```
┌─────────────────────────────────────────────┐
│  Configure Discord Message                  │
├─────────────────────────────────────────────┤
│                                             │
│  Server:                                    │
│  ▼ Newark AI Community                      │
│                                             │
│  Channel:                                   │
│  ▼ #submissions ← Select this              │
│    (Shows all channels)                     │
│                                             │
│  Message:                                   │
│  ┌─────────────────────────────────────┐   │
│  │ 🎫 **New Volunteer Signup!**        │   │
│  │                                     │   │
│  │ **Name:** {{ name }}                │   │
│  │ **Email:** {{ email }}              │   │
│  │ **Interest:** {{ role }}            │   │
│  │                                     │   │
│  │ (Add more fields as desired)        │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Continue]                                 │
│                                             │
└─────────────────────────────────────────────┘
```

- Select **#submissions** for Channel
- Paste message template in Message field
- Click **"Continue"**

---

## Step 11: Review & Test

```
┌─────────────────────────────────────────────┐
│  Review Your Zap                            │
├─────────────────────────────────────────────┤
│                                             │
│  TRIGGER: Netlify → New Form Submission     │
│  FILTER: (none)                             │
│  ACTION: Discord → Send Channel Message     │
│                                             │
│  Preview of Discord message:                │
│                                             │
│  🎫 **New Volunteer Signup!**              │
│  **Name:** Test User                        │
│  **Email:** test@example.com                │
│  **Interest:** instructor                   │
│                                             │
│  ✅ Looks good?                             │
│                                             │
│  [Create Zap]                               │
│                                             │
└─────────────────────────────────────────────┘
```

Review looks correct → Click **"Create Zap"**.

---

## Step 12: Activate Your Zap

```
┌─────────────────────────────────────────────┐
│  Zap Details                                │
├─────────────────────────────────────────────┤
│                                             │
│  Volunteer Signup → Discord #submissions    │
│                                             │
│  Status: ⚫ OFF                             │
│          (Click to toggle ON)               │
│                                             │
│  This Zap is:                               │
│  ☐ Enabled                                  │
│  ✓ Configured                               │
│  ✓ Ready to run                             │
│                                             │
│  Click the toggle:                          │
│                                             │
└─────────────────────────────────────────────┘
```

Click the **toggle button** → Changes to **green "ON"** → Zap is LIVE! 🎉

---

## Step 13: Test It End-to-End

### On Your Website

```
1. Open: http://localhost:8080/get-involved/
2. Scroll to: "Volunteer Application"
3. Fill out:
   Name: My Real Name
   Email: my@email.com
   Phone: 555-0101
   Affiliation: Local teacher
   Interest: Volunteer Instructor
   Experience: I know about AI
   Motivation: Help my community

4. Click: "Submit Application"

(Form submits)
```

### In Discord

```
1. Open Discord
2. Go to server: Newark AI Community
3. Click channel: #submissions

You should see:

┌──────────────────────────────────┐
│ 🎫 **New Volunteer Signup!**    │
│                                  │
│ **Name:** My Real Name           │
│ **Email:** my@email.com          │
│ **Interest:** Volunteer          │
│ **Affiliation:** Local teacher   │
│                                  │
│ **Experience:**                  │
│ I know about AI                  │
│                                  │
│ **Motivation:**                  │
│ Help my community                │
│                                  │
│ ---                              │
│ 💬 Reply in Discord to reach out!│
│                                  │
│ 12:45 PM                         │
└──────────────────────────────────┘
```

### Success! ✅

If you see the message in Discord:
- ✅ Zapier is working
- ✅ Form integration complete
- ✅ Automation is live
- ✅ Ready for project submission

---

## What Happens Next

Every time someone submits the volunteer form:
1. Zapier gets notified instantly
2. Picks up all their information
3. Sends rich message to Discord
4. Your team sees it immediately
5. You can respond and onboard them

**All automatic. No manual work. Scales forever.**

---

## If Something Goes Wrong

### Check 1: Is Zap ON?
```
Go to zapier.com → Click your Zap → Is toggle green?
If OFF, click it to turn ON
```

### Check 2: Did you submit the form?
```
Go to http://localhost:8080/get-involved/
Scroll down to volunteer form
Fill out EVERY field
Click "Submit Application"
Wait 5 seconds
```

### Check 3: Are you in the right Discord channel?
```
Open Discord
Click on #submissions (not #announcements)
Look for your message there
```

### Check 4: Check Task History
```
Go to zapier.com
Click your Zap
Click "Task History" tab
Should show recent submissions
Look for green ✅ or red ❌
Red means error - click to see what went wrong
```

---

## Done! 🎊

You've successfully set up:
- ✅ Zapier automation
- ✅ Form to Discord integration
- ✅ Real-time notifications
- ✅ Professional workflow

This is a production-grade automation used by thousands of companies!

**Next step**: Take a screenshot of the Discord message and keep it for your project submission proof! 📸
