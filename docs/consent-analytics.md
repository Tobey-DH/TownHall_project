Consent & Analytics Gating

Overview
- Purpose: Load analytics only after explicit user consent to meet privacy/compliance requirements.
- Scope: Supports `plausible` or `ga4` providers via `src/_data/site.js` config and env overrides.

Configure
- Provider: Set `ANALYTICS_PROVIDER` to `plausible` (default) or `ga4`.
- Plausible: Set `PLAUSIBLE_DOMAIN` (e.g., `newark-ai-townhall.org`) and optionally `PLAUSIBLE_SRC`.
- GA4: Set `GA4_MEASUREMENT_ID` (e.g., `G-XXXXXXX`).

Environment (PowerShell)
```powershell
$env:ANALYTICS_PROVIDER = "plausible"
$env:PLAUSIBLE_DOMAIN = "newark-ai-townhall.org"
# For GA4 instead:
# $env:ANALYTICS_PROVIDER = "ga4"; $env:GA4_MEASUREMENT_ID = "G-XXXXXXX"
```

How It Works
- A lightweight consent banner appears until a decision is stored in `localStorage` under `cookieConsent`.
- Accept: Sets `cookieConsent=accepted` and loads the configured analytics script.
- Decline: Sets `cookieConsent=declined`; no analytics are injected.
- You can customize the banner text via `site.consent` in `site.js`.

Proof Checklist
- Screenshot: The banner displayed on first visit.
- Screenshot: DevTools Network tab showing analytics script only after accepting.
- Code reference: `src/_includes/base.njk` (banner + loader) and `src/_data/site.js` (config).

Notes
- No third-party cookie library is required; implementation is framework-agnostic and minimal.
- IP anonymization is enabled for GA4 via `gtag('config', ..., { anonymize_ip: true })`.
```
