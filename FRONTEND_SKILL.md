# Frontend Development Skill — Next.js Portfolio

## Stack
- Next.js 14+ App Router
- TypeScript (strict mode, no `any`)
- Tailwind CSS v3
- Framer Motion
- next-intl (already configured)

---

## Absolute Rules

### Styling
- Use Tailwind utility classes exclusively
- NO inline `style={{}}` on any element unless mathematically impossible with Tailwind
  (acceptable exceptions: dynamic values like `style={{ height: \`${value}px\` }}`)
- NO `className` with arbitrary CSS properties that Tailwind already covers
- All colors must reference the design tokens defined in `tailwind.config.ts`

### TypeScript
- Every component, prop, and function must be strictly typed
- No `any`, no `as unknown`, no non-null assertions (`!`) unless truly unavoidable
- All props interfaces go at the top of each file before the component
- Use `type` for props, `interface` for data models

### Animations (Framer Motion)
- Animate TEXT ELEMENTS only (`<motion.h1>`, `<motion.p>`, `<motion.span>`)
- NEVER animate container divs or section wrappers — this causes double-background artifacts
- All animations must be subtle: fade + slight translateY (max 20px), never scale or rotate
- Use `viewport={{ once: true }}` on all scroll-triggered animations
- Standard animation preset to reuse everywhere:
```ts
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }
```
- Stagger children with `staggerChildren: 0.1` on the parent `variants`

---

## Global CSS (`app/globals.css`)

Define everything in `@layer base` at the start. After that, no font-family or font-size
declarations anywhere else in the codebase.

### Typography scale (define as @layer base on html elements)
```css
@layer base {
  h1 { @apply font-display text-5xl md:text-7xl font-bold tracking-tight leading-tight; }
  h2 { @apply font-display text-3xl md:text-5xl font-bold tracking-tight; }
  h3 { @apply font-display text-xl md:text-2xl font-semibold; }
  h4 { @apply font-display text-lg font-semibold; }
  p  { @apply font-body text-base md:text-lg leading-relaxed text-gray-600; }
  span { @apply font-body; }
}
```

### Font classes (define in globals.css, apply via Tailwind config)
- `font-display` → Wix Madefor Text (headings)
- `font-body` → Wix Madefor Text (body, slightly lighter weight)
- Load fonts via `next/font/google` in `app/layout.tsx` and inject as CSS variables:
  `--font-display` and `--font-body`
- In `tailwind.config.ts` map them:
```ts
  fontFamily: {
    display: ['var(--font-display)', 'sans-serif'],
    body: ['var(--font-body)', 'sans-serif'],
  }
```

---

## Spacing & Layout

### Container
- Define one reusable container class in `globals.css`:
```css
  @layer components {
    .container-site {
      @apply mx-auto px-6 md:px-12 lg:px-20 max-w-7xl;
    }
  }
```
- Use `container-site` on the inner wrapper of EVERY section — never hardcode `px-` on sections directly
- Section vertical padding: always `py-24 md:py-32`

### Consistency rules
- Horizontal padding must be identical across all sections — always via `container-site`
- No magic numbers — use Tailwind's spacing scale exclusively (4, 6, 8, 10, 12, 16, 20, 24...)
- Gap between grid items: `gap-6` (mobile) → `md:gap-8` (desktop)
- Border radius for cards: `rounded-2xl`
- Border radius for buttons: `rounded-full` (pill)

---

## Folder Structure
app/
[locale]/
layout.tsx
page.tsx
globals.css
components/
layout/
Navbar.tsx
Footer.tsx
sections/
Hero.tsx
About.tsx
Services.tsx
Projects.tsx
CTA.tsx
ui/
Button.tsx
ServiceCard.tsx
ProjectCard.tsx
LanguageSwitcher.tsx
lib/
animations.ts       ← all Framer Motion variants live here
types.ts            ← shared TypeScript interfaces
messages/
es.json
en.json

---

## Design Tokens (`tailwind.config.ts`)
```ts
colors: {
  primary: '#FE945C',
  secondary: '#99A4B3',
  accent: '#EBFFB1',
  brand: {
    orange: '#FE945C',
    gray: '#99A4B3',
    lime: '#EBFFB1',
  }
}
```

---

## i18n Rules (next-intl)

- ALL user-visible text must come from `messages/es.json` and `messages/en.json`
- No hardcoded strings in components — use `useTranslations('SectionName')`
- Structure messages by section:
```json
  {
    "Hero": { "label": "...", "title": "...", "subtitle": "..." },
    "About": { "line1": "...", "line2": "...", "body": "..." },
    "Services": { ... },
    ...
  }
```

---

## Component Rules

### Every component must:
1. Have a typed `Props` interface above the component
2. Be a named export (no default exports except pages)
3. Use `useTranslations` if it renders any text
4. Animate only text elements with Framer Motion variants from `lib/animations.ts`

### Buttons (`components/ui/Button.tsx`)
Single reusable component with variants:
- `variant: 'primary' | 'outline' | 'ghost'`
- `size: 'sm' | 'md' | 'lg'`
- Never create one-off button styles in section components

### Cards (`components/ui/ServiceCard.tsx`)
- White background: `bg-white`
- Border: `border border-accent` (default) → `hover:border-primary` on hover
- Rounded: `rounded-2xl`
- Shadow: `shadow-sm hover:shadow-md`
- Transition: `transition-all duration-300`
- Icon circle background: `bg-accent/30`
- Description text: `text-secondary`
- Arrow: `text-primary`

---

## Responsive Breakpoints

Always design mobile-first. Required breakpoints for every section:
- Mobile (default): single column, reduced font sizes, full-width elements
- `md:` (768px): 2-column grids where applicable
- `lg:` (1024px): final desktop layout, max columns

Never skip mobile styles — every class needs its mobile default before `md:` modifier.



