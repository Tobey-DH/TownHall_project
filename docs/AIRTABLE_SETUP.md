# Airtable Base Setup for Volunteer Submissions

## Quick Schema

Create a new Airtable base called **"Volunteer Submissions"** with a table named **"Submissions"**.

### Columns (Fields)

| Field Name | Field Type | Notes |
|---|---|---|
| Name | Single line text | Required |
| Email | Email | Required |
| Phone | Phone number | Optional |
| Affiliation | Single line text | e.g., "NJIT student", "Local teacher" |
| Role | Single select | Options: `Instructor`, `Coordinator`, `Content Creator`, `Other` |
| Experience | Long text | Multiline text area |
| Motivation | Long text | Multiline text area |
| Submitted At | Date | ISO 8601 format from Zapier |
| Source | Single line text | Fixed: `website-volunteer-form` |
| Status | Single select | Options: `New`, `Reviewed`, `Accepted`, `Declined` (default: `New`) |

## How to Create in Airtable

1. Log in to [airtable.com](https://airtable.com).
2. Click **+ Add a base** → **Start from scratch** → Name it **"Volunteer Submissions"**.
3. Rename the default table to **"Submissions"** (double-click the tab).
4. Click the **+** button in the field header row to add fields:
   - **Name** (Text) → check "Required"
   - **Email** (Email)
   - **Phone** (Phone number)
   - **Affiliation** (Text)
   - **Role** (Single select) → add options above
   - **Experience** (Long text)
   - **Motivation** (Long text)
   - **Submitted At** (Date)
   - **Source** (Text)
   - **Status** (Single select) → default "New"

5. Copy the **Base ID** and **Table Name** for the next step (found in URL: `airtable.com/appXXXXXXXXXXX/...`).

## Next Step

Use this base with the Zapier Zap setup guide.
