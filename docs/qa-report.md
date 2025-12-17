# QA Report

- Summary: Automated quality checks across performance, accessibility, SEO, bundle size, and core user flows.

## Lighthouse Scores
- Performance: <insert>
- Accessibility: <insert>
- SEO: <insert>

Notes:
- Tested routes: `/`, `/events/`, `/blog/`, `/get-involved/`.

## Bundle Size
- CSS total KB: <insert>
- JS total KB: <insert>
- Thresholds: CSS ≤ 350KB, JS ≤ 200KB.

## Tests (Playwright)
- Home loads and primary CTA visible.
- Navigate to Events page from home.
- Volunteer form happy-path shows success banner (webhooks intercepted).

Command output screenshots: <attach Playwright summary and CI run link>

## Accessibility Notes
- Skip link present.
- Semantic headings on key pages.
- Color contrast conforms to Tailwind defaults.
- Follow-ups: <insert any observed minor issues>.

## Analytics & Consent
- Banner appears on first load, analytics load only after Accept.
- Provider: <plausible|ga4>, env set during run.

## CRM (Zapier → Airtable)
- Zap: Catch Hook → Airtable Create Record.
- Webhook: stored in `ZAPIER_WEBHOOK_SUBMISSIONS` (env-only).
- Proof: <attach Airtable record screenshot>.
