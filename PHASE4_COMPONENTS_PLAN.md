# Phase 4: Component Library Updates - PLANNING

**Objective**: Update all shared components with consistent dark mode styling  
**Status**: Not Started  
**Estimated Time**: 2-3 hours  
**Priority**: High (Ensures consistency across all pages)

---

## 🔧 Components to Update

### Core Components in `src/components/common/`

#### 1. **Button.tsx** ⚠️ Priority: HIGH
**Current Status**: Needs review for dark mode
**Required Changes**:
- [ ] Add `dark:bg-neutral-800` to button backgrounds
- [ ] Add `dark:text-white` to button text
- [ ] Add `dark:hover:bg-neutral-700` hover states
- [ ] Add `dark:border-neutral-600` to outlined variants
- [ ] Ensure variant="ghost" works in dark mode
- [ ] Test all size variants (sm, md, lg)

**Location**: `src/components/common/Button.tsx`

---

#### 2. **Card.tsx** ⚠️ Priority: HIGH
**Current Status**: Needs dark mode styling
**Required Changes**:
- [ ] Add `dark:bg-neutral-800` to card background
- [ ] Add `dark:border-neutral-700` to card borders
- [ ] Add `dark:shadow-lg` for card shadows
- [ ] Update hover states: `dark:hover:shadow-xl`, `dark:hover:border-neutral-600`
- [ ] Add `dark:bg-neutral-700` to hover backgrounds
- [ ] Ensure CardTitle inherits dark mode colors
- [ ] Ensure CardDescription inherits dark mode colors

**Location**: `src/components/common/Card.tsx`

---

#### 3. **Footer.tsx** ⚠️ Priority: HIGH
**Current Status**: Unknown - needs audit
**Required Changes**:
- [ ] Add `dark:bg-neutral-900` to main footer
- [ ] Add `dark:text-white` to headings
- [ ] Add `dark:text-neutral-300` to body text
- [ ] Add `dark:border-neutral-700` to dividers
- [ ] Add `dark:hover:text-orange-400` to links
- [ ] Update social icons styling
- [ ] Ensure copyright text is readable

**Location**: `src/components/common/Footer.tsx`

---

#### 4. **Header.tsx** ✅ Partially Complete
**Current Status**: Already has dark mode styling (mostly)
**Required Changes**:
- [ ] Verify all dark mode classes are applied
- [ ] Check mega menu dark mode styling
- [ ] Verify navigation links styling
- [ ] Check ThemeToggle button styling
- [ ] Ensure all dropdowns have dark mode
- [ ] Test responsive mobile menu in dark mode

**Location**: `src/components/common/Header.tsx`

---

#### 5. **Input/Form Components** ⚠️ Priority: HIGH
**Current Status**: Needs dark mode styling
**Files to Update**:
- [ ] `FormInput.tsx` - Add `dark:bg-neutral-800`, `dark:border-neutral-600`, `dark:text-white`
- [ ] `FormSelect.tsx` - Similar dark mode styling
- [ ] `FormTextarea.tsx` - Similar dark mode styling
- [ ] `FormCheckbox.tsx` - Update checkbox styling
- [ ] `FormRadio.tsx` - Update radio button styling

**Required Changes**:
- Add `dark:bg-neutral-800` to input backgrounds
- Add `dark:border-neutral-600` to input borders
- Add `dark:text-white` to input text
- Add `dark:placeholder-neutral-500` to placeholders
- Add `dark:focus:border-orange-500` to focus states
- Add `dark:focus:ring-orange-500` to focus rings

---

#### 6. **AnimatedText.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to text elements
- [ ] Add `dark:text-neutral-300` to secondary text
- [ ] Update gradient text colors for dark mode
- [ ] Add `dark:text-orange-400` to accent text

---

#### 7. **DataVisualization.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Update chart colors for dark mode
- [ ] Add `dark:text-white` to labels
- [ ] Add `dark:bg-neutral-800` to backgrounds
- [ ] Update grid colors

---

#### 8. **DonationCalculator.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add dark mode styling to calculator interface
- [ ] Update button styling: `dark:bg-primary-600`, `dark:hover:bg-primary-500`
- [ ] Add `dark:text-white` to labels
- [ ] Add `dark:border-neutral-600` to dividers

---

#### 9. **BeforeAfterSlider.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to labels
- [ ] Update slider handle styling for dark mode
- [ ] Add `dark:bg-neutral-800` to backgrounds
- [ ] Ensure slider is visible in dark mode

---

#### 10. **DynamicBackground.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:bg-neutral-900` to background
- [ ] Update overlay colors for dark mode
- [ ] Ensure text contrast is maintained

---

#### 11. **FinancialTransparency.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to headings
- [ ] Add `dark:text-neutral-300` to descriptions
- [ ] Update chart/graph colors for dark mode
- [ ] Add `dark:bg-neutral-800` to card backgrounds

---

#### 12. **Testimonials.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to testimonial text
- [ ] Add `dark:text-neutral-400` to author names
- [ ] Update card styling for dark mode
- [ ] Add `dark:bg-neutral-800` to backgrounds

---

#### 13. **TrustBadges.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to badge text
- [ ] Add `dark:bg-neutral-800` to badge backgrounds
- [ ] Update badge styling for dark mode

---

#### 14. **PartnerLogos.tsx** 📋 Priority: LOW
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to text labels
- [ ] Add `dark:bg-neutral-800` to backgrounds
- [ ] Ensure logos are visible in dark mode

---

#### 15. **ExpandableContent.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Add `dark:text-white` to titles
- [ ] Add `dark:text-neutral-300` to content
- [ ] Add `dark:bg-neutral-800` to expandable sections
- [ ] Update chevron/arrow colors

---

#### 16. **GradientText.tsx** 📋 Priority: MEDIUM
**Current Status**: Needs audit
**Required Changes**:
- [ ] Update gradient colors for dark mode
- [ ] Ensure text is readable on dark backgrounds
- [ ] Add `dark:from-orange-400` and `dark:to-orange-500` for orange gradients

---

## 🎨 Color Standards for Components

### Form Elements (Inputs, Selects, Textareas)
```
Dark Mode:
- Background:     dark:bg-neutral-800
- Border:         dark:border-neutral-600
- Text:           dark:text-white
- Placeholder:    dark:placeholder-neutral-500
- Focus Border:   dark:focus:border-orange-500
- Focus Ring:     dark:focus:ring-orange-500
```

### Cards & Containers
```
Dark Mode:
- Background:     dark:bg-neutral-800
- Border:         dark:border-neutral-700
- Shadow:         dark:shadow-lg
- Hover:          dark:hover:bg-neutral-700
- Text:           dark:text-white
```

### Text Elements
```
Dark Mode:
- Headings:       dark:text-white
- Body:           dark:text-neutral-100
- Secondary:      dark:text-neutral-300
- Tertiary:       dark:text-neutral-400
- Muted:          dark:text-neutral-500
```

### Buttons
```
Dark Mode:
- Primary:        dark:bg-primary-600 dark:hover:bg-primary-500
- Secondary:      dark:bg-neutral-700 dark:hover:bg-neutral-600
- Outline:        dark:border-neutral-600 dark:text-white
- Ghost:          dark:hover:bg-neutral-800
```

---

## ✅ Update Checklist

- [ ] Button.tsx - Core button styling
- [ ] Card.tsx - Card container styling
- [ ] Footer.tsx - Footer styling
- [ ] Header.tsx - Verify existing dark mode
- [ ] Form components - All input types
- [ ] AnimatedText.tsx - Text animations
- [ ] DataVisualization.tsx - Charts/graphs
- [ ] DonationCalculator.tsx - Calculator interface
- [ ] BeforeAfterSlider.tsx - Slider styling
- [ ] DynamicBackground.tsx - Background styling
- [ ] FinancialTransparency.tsx - Transparency section
- [ ] Testimonials.tsx - Testimonial cards
- [ ] TrustBadges.tsx - Badge styling
- [ ] PartnerLogos.tsx - Partner section
- [ ] ExpandableContent.tsx - Expandable sections
- [ ] GradientText.tsx - Gradient text styling

---

## 📝 Implementation Strategy

### Priority Order:
1. **HIGH**: Button, Card, Footer, Form Components
2. **MEDIUM**: Testimonials, DonationCalculator, FinancialTransparency, ExpandableContent
3. **LOW**: PartnerLogos, GradientText (lower impact)

### Testing After Each Component:
- [ ] Light mode still works
- [ ] Dark mode colors are correct
- [ ] Contrast ratios are maintained
- [ ] No color bleeding or overflow
- [ ] Responsive design maintained
- [ ] Hover/focus states work

---

## 🚀 Expected Outcome

After Phase 4 completion:
- ✅ All components support light and dark modes
- ✅ Consistent color system across entire application
- ✅ WCAG AAA compliance maintained
- ✅ Smooth visual appearance in both modes
- ✅ Ready for comprehensive browser testing (Phase 5)

---

**Next**: Begin with HIGH priority components (Button, Card, Footer)
