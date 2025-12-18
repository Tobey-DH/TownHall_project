# Wireframe: Event Detail Page

**Page**: `/events/[slug]/`  
**Purpose**: Primary workflow - Event information and registration  
**Viewport**: Desktop (1440px) and Mobile (375px) shown

---

## Desktop Layout (1440px)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER                                                                  │
│  ┌────────────────┐                           ┌───────────────────────┐ │
│  │ Newark AI      │                           │ Home Events Blog      │ │
│  │ Community      │                           │ Get Involved About    │ │
│  └────────────────┘                           └───────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  BREADCRUMB                                                              │
│                                                                          │
│  Home → Events → AI Basics: A Town Hall for Newark Residents            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  EVENT HEADER SECTION                              [Max-width: 900px]    │
│                                                                          │
│  ┌──────────────────┐  ┌──────────────────────┐                         │
│  │ [Tag: in-person] │  │ [Tag: Featured Event]│                         │
│  │ (gray bg)        │  │ (red bg, white text) │                         │
│  └──────────────────┘  └──────────────────────┘                         │
│                                                                          │
│  H1: AI Basics: A Town Hall for Newark Residents                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  EVENT DETAILS CARD                                [White Card w/Border] │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                                                                      ││
│  │  ┌──────────────────────────┐    ┌──────────────────────────┐      ││
│  │  │ 6 COLUMNS                │    │ 6 COLUMNS                │      ││
│  │  │                          │    │                          │      ││
│  │  │ [Label: Date & Time]     │    │ [Label: Location]        │      ││
│  │  │ (gray, small, bold)      │    │ (gray, small, bold)      │      ││
│  │  │                          │    │                          │      ││
│  │  │ January 15, 2026         │    │ Newark Public Library    │      ││
│  │  │ 6:00 PM                  │    │ Main Branch              │      ││
│  │  │                          │    │ 5 Washington Street      │      ││
│  │  └──────────────────────────┘    └──────────────────────────┘      ││
│  │                                                                      ││
│  │  ┌──────────────────────────────────────────────────────────────┐  ││
│  │  │ [Divider line - gray]                                         │  ││
│  │  └──────────────────────────────────────────────────────────────┘  ││
│  │                                                                      ││
│  │  [Label: Capacity] 50 attendees                                     ││
│  │                                                                      ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  EVENT DESCRIPTION                                  [Max-width: 900px]   │
│                                                                          │
│  [Large Body Text - Gray 700]                                           │
│  New to AI? Start here. This beginner-friendly town hall explains       │
│  what artificial intelligence really is—and isn't—in plain English.     │
│  No tech background needed.                                             │
│                                                                          │
│  [Content Section - Portable Text]                                      │
│                                                                          │
│  H2: What We'll Cover                                                   │
│                                                                          │
│  Paragraph: In this 90-minute session, we'll break down AI in ways      │
│  that make sense. You'll hear from local educators and NJIT students    │
│  who are passionate about making technology accessible.                 │
│                                                                          │
│  H3: Topics Include                                                     │
│                                                                          │
│  • What AI actually is (and common misconceptions)                      │
│  • Real examples of AI you already use every day                        │
│  • How Newark businesses and schools are using AI                       │
│  • Privacy considerations and how to protect yourself                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  LEARNING OUTCOMES                     [Left border accent - red, 4px]   │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                                                                      ││
│  │  H2: What You'll Learn                                              ││
│  │                                                                      ││
│  │  ┌────────────────────────────────────────────────────────────────┐ ││
│  │  │ ✓  What AI actually is (in plain English)                      │ ││
│  │  └────────────────────────────────────────────────────────────────┘ ││
│  │                                                                      ││
│  │  ┌────────────────────────────────────────────────────────────────┐ ││
│  │  │ ✓  3 free AI tools you can start using today                   │ ││
│  │  └────────────────────────────────────────────────────────────────┘ ││
│  │                                                                      ││
│  │  ┌────────────────────────────────────────────────────────────────┐ ││
│  │  │ ✓  How to protect your privacy when using AI                   │ ││
│  │  └────────────────────────────────────────────────────────────────┘ ││
│  │                                                                      ││
│  │  ┌────────────────────────────────────────────────────────────────┐ ││
│  │  │ ✓  Where to get help and continue learning                     │ ││
│  │  └────────────────────────────────────────────────────────────────┘ ││
│  │                                                                      ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  REGISTRATION FORM                                [White Card w/Border]  │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                                                                      ││
│  │  H2: Register for This Event                                        ││
│  │                                                                      ││
│  │  [Body text] Registration is free. We'll send you a reminder        ││
│  │  before the event with all the details you need.                    ││
│  │                                                                      ││
│  │  ┌────────────────────────────────────────────────────────────────┐ ││
│  │  │ [Form]                                                          │ ││
│  │  │                                                                 │ ││
│  │  │ ┌─────────────────────────────────────────────────────────────┐│ ││
│  │  │ │ [Label] Full Name *                                         ││ ││
│  │  │ │ ┌─────────────────────────────────────────────────────────┐ ││ ││
│  │  │ │ │ [Input Field]                                           │ ││ ││
│  │  │ │ │ Your full name                                          │ ││ ││
│  │  │ │ └─────────────────────────────────────────────────────────┘ ││ ││
│  │  │ └─────────────────────────────────────────────────────────────┘│ ││
│  │  │                                                                 │ ││
│  │  │ ┌─────────────────────────────────────────────────────────────┐│ ││
│  │  │ │ [Label] Email Address *                                     ││ ││
│  │  │ │ ┌─────────────────────────────────────────────────────────┐ ││ ││
│  │  │ │ │ [Input Field]                                           │ ││ ││
│  │  │ │ │ you@example.com                                         │ ││ ││
│  │  │ │ └─────────────────────────────────────────────────────────┘ ││ ││
│  │  │ └─────────────────────────────────────────────────────────────┘│ ││
│  │  │                                                                 │ ││
│  │  │ ┌─────────────────────────────────────────────────────────────┐│ ││
│  │  │ │ [Label] Phone Number (optional)                             ││ ││
│  │  │ │ ┌─────────────────────────────────────────────────────────┐ ││ ││
│  │  │ │ │ [Input Field]                                           │ ││ ││
│  │  │ │ │ (973) 555-0100                                          │ ││ ││
│  │  │ │ └─────────────────────────────────────────────────────────┘ ││ ││
│  │  │ └─────────────────────────────────────────────────────────────┘│ ││
│  │  │                                                                 │ ││
│  │  │ ┌─────────────────────────────────────────────────────────────┐│ ││
│  │  │ │ [Label] How did you hear about us?                          ││ ││
│  │  │ │ ┌─────────────────────────────────────────────────────────┐ ││ ││
│  │  │ │ │ [Select Dropdown]                           ▼           │ ││ ││
│  │  │ │ │ Select an option                                        │ ││ ││
│  │  │ │ └─────────────────────────────────────────────────────────┘ ││ ││
│  │  │ └─────────────────────────────────────────────────────────────┘│ ││
│  │  │                                                                 │ ││
│  │  │ ┌─────────────────────────────────────────────────────────────┐│ ││
│  │  │ │ ┌────────────────────────────────────────────────────────┐  ││ ││
│  │  │ │ │ [Red Button - Full Width]                              │  ││ ││
│  │  │ │ │                                                        │  ││ ││
│  │  │ │ │              Register for Event                        │  ││ ││
│  │  │ │ │                                                        │  ││ ││
│  │  │ │ └────────────────────────────────────────────────────────┘  ││ ││
│  │  │ └─────────────────────────────────────────────────────────────┘│ ││
│  │  │                                                                 │ ││
│  │  │ [Small text, gray] By registering, you agree to our            │ ││
│  │  │ [Link: Privacy Policy]                                         │ ││
│  │  │                                                                 │ ││
│  │  └────────────────────────────────────────────────────────────────┘ ││
│  │                                                                      ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  CTA SECTION                                       [Light Gray BG]       │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                         [Centered Content]                           ││
│  │                                                                      ││
│  │              H2: Can't Make This Event?                              ││
│  │                                                                      ││
│  │         Check out our other upcoming sessions or                     ││
│  │         join our Discord to stay updated.                            ││
│  │                                                                      ││
│  │   ┌──────────────────────┐    ┌──────────────────────┐              ││
│  │   │ [Outline Button]     │    │ [Red Button]         │              ││
│  │   │ View All Events      │    │ Join Discord         │              ││
│  │   └──────────────────────┘    └──────────────────────┘              ││
│  │                                                                      ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  FOOTER                                           [Black Background]     │
│  [Same as homepage footer]                                               │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (375px)

```
┌───────────────────────────────┐
│  HEADER                       │
│  ┌────────────┐      ┌──┐    │
│  │ Newark AI  │      │☰ │    │
│  │ Community  │      └──┘    │
│  └────────────┘               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  BREADCRUMB                   │
│                               │
│  Home → Events → AI Basics... │
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  EVENT HEADER                 │
│                               │
│  ┌────────────┐ ┌───────────┐│
│  │ in-person  │ │ Featured  ││
│  └────────────┘ └───────────┘│
│                               │
│  H1: AI Basics:               │
│  A Town Hall                  │
│  for Newark                   │
│  Residents                    │
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  EVENT DETAILS CARD           │
│                               │
│  ┌───────────────────────────┐│
│  │                           ││
│  │ [Label: Date & Time]      ││
│  │ January 15, 2026          ││
│  │ 6:00 PM                   ││
│  │                           ││
│  │ ─────────────────────     ││
│  │                           ││
│  │ [Label: Location]         ││
│  │ Newark Public Library     ││
│  │ Main Branch               ││
│  │ 5 Washington Street       ││
│  │                           ││
│  │ ─────────────────────     ││
│  │                           ││
│  │ [Label: Capacity]         ││
│  │ 50 attendees              ││
│  │                           ││
│  └───────────────────────────┘│
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  EVENT DESCRIPTION            │
│                               │
│  [Large Body]                 │
│  New to AI? Start here.       │
│  This beginner-friendly       │
│  town hall explains what      │
│  artificial intelligence      │
│  really is—and isn't—in       │
│  plain English. No tech       │
│  background needed.           │
│                               │
│  H2: What We'll Cover         │
│                               │
│  In this 90-minute session,   │
│  we'll break down AI in       │
│  ways that make sense...      │
│                               │
│  H3: Topics Include           │
│                               │
│  • What AI actually is        │
│  • Real examples of AI        │
│    you already use            │
│  • How Newark businesses      │
│    are using AI               │
│  • Privacy considerations     │
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  LEARNING OUTCOMES            │
│  [Red left border]            │
│                               │
│  ┌───────────────────────────┐│
│  │                           ││
│  │ H2: What You'll Learn     ││
│  │                           ││
│  │ ✓ What AI actually is     ││
│  │   (in plain English)      ││
│  │                           ││
│  │ ✓ 3 free AI tools you     ││
│  │   can start using today   ││
│  │                           ││
│  │ ✓ How to protect your     ││
│  │   privacy when using AI   ││
│  │                           ││
│  │ ✓ Where to get help and   ││
│  │   continue learning       ││
│  │                           ││
│  └───────────────────────────┘│
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  REGISTRATION FORM            │
│                               │
│  ┌───────────────────────────┐│
│  │                           ││
│  │ H2: Register for          ││
│  │     This Event            ││
│  │                           ││
│  │ Registration is free.     ││
│  │ We'll send you a          ││
│  │ reminder before the       ││
│  │ event.                    ││
│  │                           ││
│  │ ┌───────────────────────┐ ││
│  │ │ Full Name *           │ ││
│  │ │ ┌───────────────────┐ │ ││
│  │ │ │                   │ │ ││
│  │ │ └───────────────────┘ │ ││
│  │ └───────────────────────┘ ││
│  │                           ││
│  │ ┌───────────────────────┐ ││
│  │ │ Email Address *       │ ││
│  │ │ ┌───────────────────┐ │ ││
│  │ │ │                   │ │ ││
│  │ │ └───────────────────┘ │ ││
│  │ └───────────────────────┘ ││
│  │                           ││
│  │ ┌───────────────────────┐ ││
│  │ │ Phone (optional)      │ ││
│  │ │ ┌───────────────────┐ │ ││
│  │ │ │                   │ │ ││
│  │ │ └───────────────────┘ │ ││
│  │ └───────────────────────┘ ││
│  │                           ││
│  │ ┌───────────────────────┐ ││
│  │ │ How did you hear?     │ ││
│  │ │ ┌───────────────────┐ │ ││
│  │ │ │ Select...      ▼  │ │ ││
│  │ │ └───────────────────┘ │ ││
│  │ └───────────────────────┘ ││
│  │                           ││
│  │ ┌───────────────────────┐ ││
│  │ │ [Red Btn-Full Width]  │ ││
│  │ │ Register for Event    │ ││
│  │ └───────────────────────┘ ││
│  │                           ││
│  │ By registering, you       ││
│  │ agree to our              ││
│  │ [Privacy Policy]          ││
│  │                           ││
│  └───────────────────────────┘│
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  CTA SECTION [Light Gray]     │
│                               │
│  H2: Can't Make               │
│      This Event?              │
│                               │
│  Check out other sessions     │
│  or join Discord.             │
│                               │
│  ┌───────────────────────────┐│
│  │ [Outline Btn-Full Width]  ││
│  │ View All Events           ││
│  └───────────────────────────┘│
│                               │
│  ┌───────────────────────────┐│
│  │ [Red Btn-Full Width]      ││
│  │ Join Discord              ││
│  └───────────────────────────┘│
│                               │
└───────────────────────────────┘

┌───────────────────────────────┐
│  FOOTER [Black BG]            │
│  [Same as homepage - stacked] │
└───────────────────────────────┘
```

---

## User Flow

```
1. User arrives from Events listing
        ↓
2. Sees event title + type tag
        ↓
3. Reviews date/time/location details
        ↓
4. Reads event description
        ↓
5. Checks learning outcomes
        ↓
6. Fills out registration form
        ↓
7. Submits form
        ↓
8. Form data sent to:
   • Discord (#submissions)
   • CRM (HubSpot/Airtable via Zapier)
        ↓
9. Success message displayed
        ↓
10. User receives confirmation email
```

---

## Form Validation States

### Empty State
```
┌─────────────────────────────────┐
│ Full Name *                     │
│ ┌─────────────────────────────┐ │
│ │ Your full name              │ │  ← Placeholder text (gray)
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Focus State
```
┌─────────────────────────────────┐
│ Full Name *                     │
│ ┌─────────────────────────────┐ │
│ │                             │ │  ← Red border (2px)
│ │ |                           │ │  ← Cursor visible
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Filled State
```
┌─────────────────────────────────┐
│ Full Name *                     │
│ ┌─────────────────────────────┐ │
│ │ Jane Smith                  │ │  ← Black text
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Error State
```
┌─────────────────────────────────┐
│ Email Address *                 │
│ ┌─────────────────────────────┐ │
│ │ invalid-email               │ │  ← Red border
│ └─────────────────────────────┘ │
│ ⚠ Please enter a valid email   │  ← Error message (red)
└─────────────────────────────────┘
```

### Success State (After Submit)
```
┌─────────────────────────────────────────────────┐
│                                                  │
│  ✓ You're registered!                           │
│                                                  │
│  Check your email for confirmation details.     │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │ [Link: Add to Calendar]                    │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │ [Link: Join our Discord]                   │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## Accessibility Notes

- Form labels programmatically associated with inputs (`for`/`id`)
- Required fields marked with asterisk AND `aria-required="true"`
- Error messages linked with `aria-describedby`
- Focus order: Breadcrumb → Content → Form → CTA → Footer
- Landmark regions: `<main>`, `<form>`, `<section>`
- Heading hierarchy: H1 → H2 → H3 (no skipping)

---

## Design Specifications

| Element | Desktop | Mobile |
|---------|---------|--------|
| Max content width | 900px | 100% - 32px |
| Card padding | 32px | 24px |
| Form input height | 48px | 48px |
| Button height | 48px | 52px |
| Section spacing | 48px | 32px |
| Font: H1 | 48px | 32px |
| Font: H2 | 32px | 24px |
| Font: Body | 18px | 16px |
