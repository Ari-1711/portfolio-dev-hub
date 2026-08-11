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
  /* Mono Primitives (Grayscale) */
  --primitive-white:        #FFFFFF;
  --primitive-gray-100:     #F7F6F3;
  --primitive-gray-200:     #EBE8E1;
  --primitive-gray-300:     #DDD8CD;
  --primitive-gray-400:     #999999;
  --primitive-gray-500:     #82827F;
  --primitive-gray-800:     #404040;
  --primitive-gray-900:     #333333;
  --primitive-black-800:    #282828;
  --primitive-black-900:    #1E1E1E;
  --primitive-black-1000:   #111111;

  /* Brand Primitives */
  --primitive-green-500:    #2FA06A;
  --primitive-orange-500:   #FF6B00;
}
```

### 2.2 Semantic Tokens (Purpose Aliases)

#### Light Mode Theme
```css
[data-theme="light"], :root {
  --color-bg-base:        var(--primitive-gray-200);   /* #EBE8E1 */
  --color-surface-card:   var(--primitive-gray-100);   /* #F7F6F3 */
  --color-surface-border: var(--primitive-gray-300);   /* #DDD8CD */
  --color-text-primary:   var(--primitive-black-1000); /* #111111 */
  --color-text-secondary: var(--primitive-gray-500);   /* #82827F */
  --color-accent:         var(--primitive-green-500);  /* #2FA06A */
  --color-badge-bg:       var(--primitive-white);      /* #FFFFFF */
  --color-badge-text:     var(--primitive-green-500);  /* #2FA06A */
}
```

#### Dark Mode Theme
```css
[data-theme="dark"] {
  --color-bg-base:        var(--primitive-black-900);  /* #1E1E1E */
  --color-surface-card:   var(--primitive-black-800);  /* #282828 */
  --color-surface-border: var(--primitive-gray-900);   /* #333333 */
  --color-text-primary:   var(--primitive-white);      /* #FFFFFF */
  --color-text-secondary: var(--primitive-gray-400);   /* #999999 */
  --color-accent:         var(--primitive-orange-500); /* #FF6B00 */
  --color-badge-bg:       var(--primitive-green-500);  /* #2FA06A */
  --color-badge-text:     var(--primitive-gray-800);   /* #404040 */
}
```

---

## 3. Accessibility & Contrast Verification (WCAG Standards)

- **Light Mode Text Contrast:** Primary Text `#111111` on `#F7F6F3` surface yields high contrast, providing excellent legibility.
- **Dark Mode Text Contrast:** Primary Text `#FFFFFF` on Base `#1E1E1E` & Card `#282828` yields high contrast ratio, providing crisp readability.
- **Button / CTA Affordance:** Primary Accent `#2FA06A` (and `#FF6B00` in Dark Mode) provides clear visual hierarchy and distinct semantic weight.

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
2. **NO EXCESSIVE CARD NESTING:** Maximum 1 level of card container. Do not place cards inside other cards ("Card-in-Card" clutter).
3. **NO GENERIC GRAY-SCALE TEXT:** All primary and secondary text MUST derive from the specified palette.
4. **NO UNHANDLED API STATES:** Every component consuming backend endpoints MUST explicitly handle and render `loading`, `error`, and `success` UI states.
