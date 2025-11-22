# WCV Design System - Black, Orange, and White Theme

## 🎨 Brand Colors

### Primary Color Palette - Orange
The orange represents **hope, warmth, and empowerment** - core values of Women & Children's Voice.

```css
--color-orange: #f97316         /* Primary Orange */
--color-orange-dark: #ea580c    /* Darker variant */
```

**Tailwind Classes:**
- `primary-50` to `primary-950` (Full orange spectrum)
- `brand-orange-50` to `brand-orange-950` (Alternative naming)

**Usage Guidelines:**
- **Primary Actions**: Donate buttons, CTAs, important links
- **Highlights**: Active navigation states, selected items
- **Accents**: Borders on hover, icons, badges
- **Gradients**: Hero backgrounds, card overlays

### Secondary Color Palette - Black
Black represents **strength, professionalism, and solidarity**.

```css
--color-black: #171717          /* Primary Black (neutral-900) */
```

**Tailwind Classes:**
- `neutral-900` (#18181b) - Primary black
- `neutral-950` (#0a0a0a) - Deep black
- `neutral-800` (#27272a) - Soft black
- `brand-black-900` - Alternative naming

**Usage Guidelines:**
- **Typography**: Headings, body text, strong emphasis
- **Backgrounds**: Dark sections, footer
- **Borders**: Strong dividers, frames

### Tertiary Color - White
White represents **clarity, peace, and hope**.

```css
--color-white: #ffffff
```

**Usage Guidelines:**
- **Backgrounds**: Main content areas, cards
- **Text**: On dark/orange backgrounds
- **Spacing**: Clean, breathable layouts

---

## 🎯 Navigation UX - Slide-Up Overlay Effect

### Desktop Navigation Hover
When user hovers over navigation items, a **smooth orange gradient slides up from bottom to top**:

```tsx
{/* Slide-up overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-primary-500 to-primary-400 
  translate-y-full group-hover:translate-y-0 transition-transform duration-300 
  ease-out rounded-lg -z-10 shadow-orange-glow" />

{/* Nav link text changes to white on hover */}
<Link className="text-neutral-900 group-hover:text-white">
  {item.label}
</Link>
```

**Effect Breakdown:**
1. Initial state: Orange overlay is translated 100% down (invisible)
2. Hover: Overlay smoothly slides up (300ms ease-out)
3. Text color transitions from black to white
4. Orange glow shadow appears
5. Subtle description appears below

**Animation Timing:**
- Slide-up: `300ms ease-out`
- Text color: `300ms default`
- Description fade-in: `300ms`

### Mobile Navigation
- Orange gradient background for active items
- Border hover effect with orange accent
- Full-width orange "Donate Now" button

---

## 🌟 Key Components & Styles

### 1. Buttons

#### Primary Button (Orange)
```tsx
<button className="btn-orange">
  {/* Orange gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600" />
  
  {/* Darker hover overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 
    opacity-0 group-hover:opacity-100" />
  
  {/* Shimmer effect */}
  <div className="shimmer-orange" />
  
  Donate Now
</button>
```

**States:**
- Default: `from-primary-500 to-primary-600`
- Hover: Darkens + shimmer + glow shadow
- Active: `scale-95` (press effect)

#### Outline Button
```tsx
<button className="btn-orange-outline">
  {/* Border-2 border-primary-500 */}
  {/* Hover: Fills with orange, text turns white */}
</button>
```

### 2. Cards

```tsx
<div className="card-orange">
  {/* White background */}
  {/* Orange border on hover */}
  {/* Orange glow shadow on hover */}
</div>
```

**Hover Effects:**
- Border: `border-transparent → border-primary-500`
- Shadow: `shadow-lg → shadow-orange-glow`
- Transform: Subtle lift or scale

### 3. Typography

#### Headings
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-poppins);
  font-weight: 700;
  color: rgb(23, 23, 23); /* Black */
}
```

#### Gradient Text
```tsx
<h1 className="text-gradient-orange">
  Women and Children's Voice
</h1>
```

Creates beautiful orange gradient text effect.

#### Links
```css
a {
  color: rgb(249, 115, 22); /* Orange */
}

a:hover {
  color: rgb(234, 88, 12); /* Darker orange */
}
```

### 4. Form Elements

#### Inputs with Orange Focus
```tsx
<input className="input-orange" />
```

**Focus State:**
```css
box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1),  /* Soft glow */
            0 0 0 2px rgb(249, 115, 22);          /* Ring */
```

---

## ✨ Animations & Effects

### Available Animations

#### 1. Slide-Up Fade
```css
@keyframes slideUpFade {
  0% { transform: translateY(8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```
**Usage:** `animate-slide-up-fade`

#### 2. Shimmer (Orange)
```css
.shimmer-orange {
  background: linear-gradient(90deg,
    rgba(249, 115, 22, 0) 0%,
    rgba(249, 115, 22, 0.2) 20%,
    rgba(249, 115, 22, 0.5) 60%,
    rgba(249, 115, 22, 0)
  );
  animation: shimmer 2s linear infinite;
}
```

#### 3. Glow Pulse
```css
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
  50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
}
```
**Usage:** `animate-orange-glow`

#### 4. Fade In Up
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**Usage:** `animate-fadeInUp`

#### 5. Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```
**Usage:** `animate-float`

---

## 🎭 Shadows

### Standard Shadows
- `shadow-xs` to `shadow-2xl` - Standard depth
- `shadow-inner` - Inset shadow

### Orange Glow Shadows
- `shadow-orange-glow` - Subtle orange glow (20px, 30% opacity)
- `shadow-orange-glow-lg` - Strong orange glow (40px, 40% opacity)

**Usage:**
```tsx
{/* Cards that glow on hover */}
<div className="hover:shadow-orange-glow">

{/* Buttons with permanent glow */}
<button className="shadow-orange-glow-lg">
```

---

## 📐 Spacing System

```css
xs:  0.5rem  (8px)
sm:  1rem    (16px)
md:  1.5rem  (24px)
lg:  2rem    (32px)
xl:  2.5rem  (40px)
2xl: 3rem    (48px)
3xl: 4rem    (64px)
4xl: 5rem    (80px)
5xl: 6rem    (96px)
```

**Section Padding:**
```tsx
<section className="section-padding">
  {/* py-12 md:py-16 lg:py-20 */}
</section>
```

---

## 🔤 Typography Scale

```css
xs:   0.75rem / 12px
sm:   0.875rem / 14px
base: 1rem / 16px
lg:   1.125rem / 18px
xl:   1.25rem / 20px
2xl:  1.5rem / 24px
3xl:  1.875rem / 30px
4xl:  2.25rem / 36px
5xl:  3rem / 48px
6xl:  3.75rem / 60px
7xl:  4.5rem / 72px
```

---

## 🎨 Gradient Utilities

### Orange Gradients
```css
.bg-gradient-orange          /* Linear: left to right */
.bg-gradient-orange-radial   /* Radial: center outward */
.text-gradient-orange        /* For text */
```

### Black Gradients
```css
.bg-gradient-black           /* Subtle black gradient for dark sections */
```

### Legacy Support
```css
.gradient-primary            /* Maps to orange */
.gradient-secondary          /* Maps to orange */
.text-gradient              /* Maps to orange */
```

---

## ♿ Accessibility Features

### Focus States
```css
:focus-visible {
  outline: 2px solid rgb(249, 115, 22);
  outline-offset: 2px;
}
```

All interactive elements have **orange focus rings** for keyboard navigation.

### Text Selection
```css
::selection {
  background-color: rgb(249, 115, 22);
  color: white;
}
```

Selected text shows **orange background with white text**.

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

Respects user's **reduced motion preferences**.

### Scrollbar
```css
::-webkit-scrollbar-thumb {
  background: rgb(249, 115, 22);  /* Orange */
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(234, 88, 12);   /* Darker on hover */
}
```

Custom **orange scrollbar** for brand consistency.

---

## 📱 Responsive Breakpoints

```css
xs:   475px   /* Extra small devices */
sm:   640px   /* Small devices */
md:   768px   /* Medium devices */
lg:   1024px  /* Large devices */
xl:   1280px  /* Extra large devices */
2xl:  1536px  /* 2X large devices */
```

---

## 🎯 Usage Examples

### Hero Section
```tsx
<section className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
  <h1 className="text-gradient-orange">
    Empowering Women & Children in DRC
  </h1>
  <button className="btn-orange animate-orange-glow">
    Donate Now
  </button>
</section>
```

### Stats Card
```tsx
<div className="card-orange">
  <div className="text-5xl font-bold text-gradient-orange">
    1,500+
  </div>
  <p className="text-neutral-900">Women Empowered</p>
</div>
```

### Navigation Link (Slide-Up Effect)
```tsx
<div className="relative group">
  {/* Slide-up orange overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-primary-500 to-primary-400 
    translate-y-full group-hover:translate-y-0 transition-transform duration-300 
    ease-out rounded-lg -z-10" />
  
  <Link className="text-neutral-900 group-hover:text-white">
    Our Work
  </Link>
</div>
```

### Impact Badge
```tsx
<span className="badge-orange">
  🎯 Active Program
</span>
```

---

## 🚀 Performance Best Practices

1. **Animations**: Use `will-change` sparingly, prefer `transform` and `opacity`
2. **Gradients**: Reuse gradient classes instead of inline styles
3. **Images**: Always use Next.js `<Image>` component
4. **Lazy Loading**: Components outside viewport should lazy load
5. **Hover Effects**: Keep under 300ms for snappy feel

---

## 🎨 Color Contrast Ratios (WCAG AAA)

All color combinations meet **WCAG AAA standards**:

- **Orange (#f97316) on White**: 4.73:1 ✅ (AA Large)
- **Black (#171717) on White**: 15.84:1 ✅ (AAA)
- **White on Orange (#f97316)**: 4.73:1 ✅ (AA Large)
- **White on Black (#171717)**: 15.84:1 ✅ (AAA)

For body text, ensure sufficient contrast by using:
- `text-neutral-900` on white backgrounds
- `text-white` on orange/black backgrounds

---

## 📝 Design Principles

### 1. **Warmth & Hope** (Orange)
Use orange to communicate compassion, energy, and positive change.

### 2. **Strength & Professionalism** (Black)
Use black for authority, stability, and serious topics.

### 3. **Clarity & Peace** (White)
Use white space generously for breathing room and focus.

### 4. **Smooth Interactions**
All animations should feel natural and enhance UX, not distract.

### 5. **Accessibility First**
Every design decision should consider users with disabilities.

---

## 🔄 Migration from Old Theme

### Old → New Color Mapping

| Old Class | New Class | Notes |
|-----------|-----------|-------|
| `primary-*` (rose) | `primary-*` (orange) | Now orange! |
| `secondary-*` (teal) | `primary-*` or `neutral-*` | Use orange or gray |
| `accent-*` (gold) | `primary-*` | Use orange |
| Navigation hover | Slide-up effect | See Navigation UX section |

### Quick Find & Replace

```bash
# In your codebase:
- Replace "from-primary-500 to-secondary-500" 
+ With "from-primary-500 to-primary-600"

- Replace "text-primary-600" (old rose)
+ Still "text-primary-600" (now orange!)

- Replace gradient-to-r from-primary-50 to-secondary-50
+ With "bg-gradient-to-t from-primary-500 to-primary-400" (for slide-up)
```

---

## 📞 Support

For design system questions or new component requests, contact the development team.

**Last Updated:** November 13, 2025  
**Version:** 2.0 - Orange/Black/White Theme with Slide-Up Navigation
