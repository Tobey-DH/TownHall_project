# Zapier Catch Hook → Airtable 5-Step Setup

## Overview

Route volunteer form submissions from your website → Zapier Catch Hook → Airtable automatically.

## Prerequisites

- Airtable base created (see `docs/AIRTABLE_SETUP.md`)
- Zapier account (free plan works)
- Your webhook URL from this Zap (to set in env)

## Step 1: Create New Zap

1. Go to [zapier.com](https://zapier.com) and log in.
2. Click **+ Create** (or **Zaps** → **Create New Zap**).
3. Search for and select **Webhooks by Zapier** as the trigger.
4. Choose **Catch Hook** (the default).
5. Name it something like **"Volunteer Form → Airtable"**.
6. Click **Continue**.

## Step 2: Get Your Webhook URL

1. Under the **Catch Hook** setup, you'll see a unique webhook URL:
   ```
   https://hooks.zapier.com/hooks/catch/XXXX/YYYY
   ```
2. **Copy and save this URL** — you'll add it to your environment as `ZAPIER_WEBHOOK_SUBMISSIONS`.
3. Click **Continue**.

## Step 3: Test the Hook (Optional)

1. Click **Send a Sample Data** if you want, or skip to the next step.
2. The hook is now live and waiting for POST requests from your form.
3. Click **Continue** once ready.

## Step 4: Add Airtable Action

1. Search for **Airtable** as the action app.
2. Select **Create Record**.
3. Authorize with your Airtable account (if not already done).
4. Choose:
   - **Base:** Your **"Volunteer Submissions"** base
   - **Table:** **"Submissions"**
5. Map the incoming webhook fields to your Airtable columns:
   - `name` → **Name**
   - `email` → **Email**
   - `phone` → **Phone**
   - `affiliation` → **Affiliation**
   - `role` → **Role**
   - `experience` → **Experience**
   - `motivation` → **Motivation**
   - `submitted_at` → **Submitted At**
   - `source` → **Source**
6. Leave **Status** empty (Airtable defaults to "New").
7. Click **Continue**.

## Step 5: Publish the Zap

1. Review the test/settings one more time.
2. Click **Publish** (or **Turn on** if it's already published).
3. The Zap is now **live** ✓

## Using It

1. Set your env var:
   ```powershell
   $env:ZAPIER_WEBHOOK_SUBMISSIONS = "https://hooks.zapier.com/hooks/catch/XXXX/YYYY"
   ```
2. Rebuild your site:
   ```powershell
   npm run build
   ```
3. Go to `/get-involved/` in your local or deployed site.
4. Fill out the volunteer form and submit.
5. Check Airtable — a new row should appear in **Submissions** table within 30 seconds.

## Troubleshooting

- **No row appears in Airtable**: Check Zapier's task history (Zap detail page → "Task History") for errors.
- **Field mapping error**: Ensure the field names exactly match your Airtable column names.
- **Webhook not firing**: Verify the `ZAPIER_WEBHOOK_SUBMISSIONS` env var is set before building.

## Optional: Notifications

To receive an email when a new submission arrives, add another action after Airtable:
1. Search for **Gmail** (or your email app).
2. Select **Send Email**.
3. Compose a template notifying your team.

That's it! Your form is now integrated with Airtable.
