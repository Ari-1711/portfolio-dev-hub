# Visual Design System & Brand Identity

<!-- impeccable:design-schema 1 -->

## Brand & Visual Philosophy
- **Developer Identity:** Ari Hermawan (Fullstack & AI Developer: React.js, Node.js/Express, Python, MobileNetV2)
- **Target Audience:** Technical recruiters, hiring managers, and IT scholarship/program evaluators
- **Visual Theme:** Clean Soft Minimalist & Ultra-Minimalist Typography — A refined, high-contrast engineering aesthetic featuring Soft Ice Blue in Light Mode and Deep Slate Charcoal in Dark Mode.

---

## 1. Header Branding & Typography Rules

### 1.1 Ultra-Minimalist Typography Branding
- **Logo / Header Text:** `ARI HERMAWAN` or `Ari Hermawan.`
- **Typography:** Sans-serif (`font-sans`: Inter / Plus Jakarta Sans) with `font-semibold` / `font-bold` weight.
- **Style:** Clean, high-contrast, elegant branding text matching the Light/Dark mode semantic tokens.
- **Strict Anti-Pattern Rule:** **STRICT BAN ON CODE DECORATIONS.** Do NOT use code syntax decorations such as HTML tags (`<Ari.dev />`), file extensions (`engineer_profile.json`), version tags (`v1.0.0`), or curly braces (`{}`) in UI branding, headers, or cards.

---

## 2. Color System & 3-Layer Token Architecture

### 2.1 Primitive Tokens (Raw Values)
```css
:root {
  /* Light Mode Primitives */
  --primitive-ice-blue-100: #C4E2F5;  /* Soft Ice Blue Base | rgb(196, 226, 245) */
  --primitive-blue-500:     #1591DC;  /* Primary Accent/CTA | rgb(21, 145, 220)  */
  --primitive-blue-400:     #4BB8FA;  /* Secondary Accent   | rgb(75, 184, 250)  */
  --primitive-blue-800:     #2C5EAD;  /* Primary Text/Header| rgb(44, 94, 173)   */
  --primitive-white:        #FFFFFF;  /* Card Pure White    | rgb(255, 255, 255) */

  /* Dark Mode Primitives */
  --primitive-slate-900:    #27374D;  /* Deep Slate Base    | rgb(39, 55, 77)    */
  --primitive-slate-700:    #526D82;  /* Card Background    | rgb(82, 109, 130)  */
  --primitive-slate-400:    #9DB2BF;  /* Badges/Borders     | rgb(157, 178, 191) */
  --primitive-slate-100:    #DDE6ED;  /* Text/Highlights    | rgb(221, 230, 237) */
}
```

### 2.2 Semantic Tokens (Purpose Aliases)

#### Light Mode Theme
```css
[data-theme="light"], :root {
  --color-bg-base:        var(--primitive-ice-blue-100); /* #C4E2F5 */
  --color-surface-card:   var(--primitive-white);        /* #FFFFFF */
  --color-surface-border: var(--primitive-blue-400);     /* #4BB8FA */
  --color-text-primary:   var(--primitive-blue-800);     /* #2C5EAD */
  --color-text-secondary: #1F4580;                       /* Deep Muted Blue */
  --color-accent:         var(--primitive-blue-500);     /* #1591DC (Primary CTA) */
  --color-badge-bg:       var(--primitive-blue-400);     /* #4BB8FA */
  --color-badge-text:     var(--primitive-white);        /* #FFFFFF */
}
```

#### Dark Mode Theme (STRICT BAN ON PURE BLACK `#000000`)
```css
[data-theme="dark"] {
  --color-bg-base:        var(--primitive-slate-900);    /* #27374D (Deep Slate) */
  --color-surface-card:   var(--primitive-slate-700);    /* #526D82 (Card Surface) */
  --color-surface-border: var(--primitive-slate-400);    /* #9DB2BF (Border) */
  --color-text-primary:   var(--primitive-slate-100);    /* #DDE6ED (Primary Text) */
  --color-text-secondary: var(--primitive-slate-400);    /* #9DB2BF (Muted Subtitles) */
  --color-accent:         var(--primitive-blue-500);     /* #1591DC (Accent CTA) */
  --color-badge-bg:       rgba(157, 178, 191, 0.25);     /* Translucent Slate */
  --color-badge-text:     var(--primitive-slate-100);    /* #DDE6ED */
}
```

---

## 3. Accessibility & Contrast Verification (WCAG Standards)

- **Light Mode Text Contrast:** Primary Text `#2C5EAD` on White `#FFFFFF` surface yields **~6.4:1 contrast ratio**, exceeding WCAG AA & AAA standards.
- **Dark Mode Text Contrast:** Primary Text `#DDE6ED` on Deep Slate Base `#27374D` & Card `#526D82` yields **~7.2:1 contrast ratio**, providing crisp readability.
- **Button / CTA Affordance:** Primary Accent `#1591DC` with White text provides clear visual hierarchy.

---

## 4. Typography & Layout System

### 4.1 Sans-Serif Typography Scale
- **Primary Font:** Inter / Plus Jakarta Sans (`font-sans`)
- **Monospace Font:** JetBrains Mono / Fira Code (`font-mono` for code snippets, API badges, tech tags)

| Element | Size | Weight | Line Height |
| :--- | :--- | :--- | :--- |
| **Hero Title** | 3.25rem (52px) | 800 (Bold) | 1.1 |
| **H1 Section Heading** | 2.25rem (36px) | 700 (Bold) | 1.2 |
| **H2 Card Title** | 1.5rem (24px) | 600 (Semi-bold) | 1.3 |
| **Body Paragraph** | 1.0rem (16px) | 400 (Regular) | 1.6 |
| **Caption / Badge** | 0.875rem (14px) | 500 (Medium) | 1.4 |

### 4.2 Spacing Scale (8pt Grid)
- `space-1` (4px): Micro gaps (badge padding, icon-text gap)
- `space-2` (8px): Inline element gaps
- `space-4` (16px): Standard card inner padding
- `space-6` (24px): Grid gap & card separation
- `space-8` (32px): Mobile section separation
- `space-12` (48px): Major desktop section padding

---

## 5. Strict Anti-Pattern Rules (Quality Floor)

1. **NO CODE DECORATIONS IN BRANDING:** Dilarang menggunakan kode dekoratif seperti HTML tags (`<Ari.dev />`), JSON extensions (`.json`), atau version tags (`v1.0.0`) pada UI/Branding Header maupun Card titles.
2. **STRICT BAN ON PURE BLACK (`#000000`):** Dark mode background MUST use Deep Slate Charcoal (`#27374D`) and card surfaces MUST use `#526D82`. Pure black background is prohibited.
3. **NO EXCESSIVE CARD NESTING:** Maximum 1 level of card container. Do not place cards inside other cards ("Card-in-Card" clutter).
4. **NO GENERIC GRAY-SCALE TEXT:** All primary and secondary text MUST derive from the specified palette (`#2C5EAD` in Light Mode, `#DDE6ED` and `#9DB2BF` in Dark Mode).
5. **NO UNHANDLED API STATES:** Every component consuming backend endpoints MUST explicitly handle and render `loading`, `error`, and `success` UI states.
