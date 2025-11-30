# Sprint Plan: Polish & Reinvent

## 1. Global Design System Rules

### The "Orange" Rule (Dark Mode)
- **Objective**: Ensure text visibility and brand alignment in Dark Mode.
- **Rule**:
    - **Primary Text**: Any text that is **Black** (`#000000` or `text-black` or `text-gray-900`) in Light Mode MUST switch to **Brand Orange** (`#EA580C` or `text-brand-primary`) in Dark Mode when on a dark background.
    - **Secondary/Body Text**: Any text that is **Gray** in Light Mode should **NOT** turn Orange. It should switch to **White** or **Light Gray** (`text-gray-100` / `text-white`) to ensure readability against dark backgrounds.
    - *Note on User Feedback*: "where there is gray text, that text should be black instead of orange" - Interpreted as ensuring distinction. Since Black text on Dark background is invisible, we will use White/Light Gray for secondary text to maintain hierarchy, unless a specific light background is used.

### Iconography Reinvention
- **Objective**: Replace basic icons with a modern, custom SVG set.
- **Action**:
    - Use `react-icons/lu` (Lucide) for a sleek, modern look.
    - Style: Thin strokes, consistent sizing, potentially with a subtle glow in Dark Mode.

### Uniformity (Glassmorphism & Spacing)
- **Objective**: Consistent "Glassmorphism" and spacing across inner pages.
- **Action**:
    - Standardize `GlassCard` component usage.
    - Apply consistent section padding (`py-16` or `py-24`).
    - Ensure consistent border radius (`rounded-2xl` or `rounded-3xl`).

## 2. Homepage Iterations

### Hero Section
- **Action**: Rewrite headline.
- **New Copy**: "Amplifying the voices of women and children."
- **Sub-headline**: "In pursuit of peace, empowerment, and social justice."

### "Urgent Cause" Card
- **Action**: Redesign for subtlety.
- **Design**:
    - Remove loud background colors.
    - Use typography hierarchy (Bold/Light).
    - Add a subtle border or glass effect.

### Donate Button
- **Action**: Invert color logic.
- **Design**:
    - Button Background: Orange (`bg-brand-primary`).
    - Text: White/Light.
    - Shadow/Glow: Black (`shadow-black/20` or similar).

### "Working Together" Section
- **Action**: Replace abstract vectors with realistic imagery.
- **Content**: Use actual photos from `C:\Users\LENOVO\Womenandchildren\Additionals\webview\photos`.
    - Fallback: High-quality stock if specific metaphors aren't found.

### "Trust & Transparency"
- **Action**: Fix contrast.
- **Standard**: WCAG AAA.
- **Fix**: Darker text on light backgrounds, lighter text on dark backgrounds. Ensure sufficient contrast ratio.

## 3. The "Dark Mode" Rescue

### Broken Sections
- **Target**: 'Programs', 'Measurable Progress', 'Core Values'.
- **Issue**: White backgrounds with light text in Dark Mode.
- **Fix**:
    - Invert backgrounds to Deep Charcoal/Black (`bg-surface-dark` / `#0F172A`).
    - Ensure cards have distinct backgrounds (lighter charcoal) or borders.
    - **Text Fix**:
        - Primary Headings (Black in Light) -> **Orange**.
        - Body Text (Gray in Light) -> **White/Light Gray** (per updated rule).

## 4. Page Reinvention

### Stories Page
- **Concept**: "Magazine Layout".
- **Content**: Source from `WCV_CONTENT_MAPPING.md` and photos from `Additionals/webview/photos`.
- **Design**:
    - Large featured image.
    - Pull quotes.
    - Grid of stories with distinct typography.

### Get Involved Page
- **Concept**: Active, dynamic.
- **Design**:
    - Visual Roadmap (Step 1, 2, 3).
    - Dynamic CTA blocks (Volunteer, Partner, Donate).
    - Use imagery to show "action".

## Execution Strategy
1.  **Setup**: Update `SPRINT_PLAN.md` (Done).
2.  **Global Fixes**: Apply Dark Mode rules and Iconography updates.
3.  **Homepage**: Execute specific section updates using new photos.
4.  **Dark Mode**: Fix the broken sections.
5.  **Pages**: Reinvent Stories and Get Involved pages.
