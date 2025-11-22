# 🚀 COLOR VISIBILITY - Quick Reference Guide

**Date**: November 14, 2025  
**Purpose**: Fast reference during page implementation  
**Status**: Ready to use

---

## 📌 Copy-Paste Color Values

### Light Mode Colors
```
Text Primary:      #0d0d0d
Text Secondary:    #4a4a4a
Text Tertiary:     #7a7a7a
Background:        #ffffff
Card Background:   #f9f9f9
Section BG:        #f3f3f3
Orange Accent:     #f97316
Orange Light:      #fed7aa
Border Primary:    #d9d9d9
Border Secondary:  #cccccc
```

### Dark Mode Colors
```
Text Primary:      #ffffff
Text Secondary:    #e5e5e5
Text Tertiary:     #bfbfbf
Background:        #0a0a0a
Card Background:   #1a1a1a
Section BG:        #2d2d2d
Orange Accent:     #fbbf24 ← BRIGHT (critical!)
Orange Light:      #fed7aa
Border Primary:    #3a3a3a
Border Secondary:  #4d4d4d
Focus Ring:        #fbbf24
```

---

## 🎨 CSS Snippets to Apply

### Apply Light Mode to Text Elements
```tsx
className="text-neutral-900"           // #0d0d0d
className="text-neutral-600"           // #4a4a4a (secondary)
className="text-neutral-500"           // #7a7a7a (tertiary)
className="dark:text-white"            // Dark mode: white

// Or use variables:
className="text-[--text-primary]"
className="dark:text-[--text-primary]"
```

### Apply Dark Mode to Components
```tsx
// Dark background
className="bg-neutral-950 dark:bg-[#0a0a0a]"

// Dark card
className="bg-white dark:bg-[#1a1a1a]"

// Dark borders
className="border-neutral-200 dark:border-[#3a3a3a]"

// Orange button
className="bg-orange-500 dark:bg-yellow-400"

// White text in dark mode
className="text-neutral-900 dark:text-white"
```

---

## ✅ Verification Checklist for Each Page

Use this when updating each page:

### Before Making Changes
- [ ] Page opens without errors
- [ ] Identify all text elements
- [ ] Identify all buttons
- [ ] Identify all forms/inputs
- [ ] Identify all cards/containers

### Light Mode Update
- [ ] Text colors using dark (#0d0d0d) or grays
- [ ] Buttons orange (#f97316) on white
- [ ] Forms have visible inputs
- [ ] Cards have visible borders (#d9d9d9)
- [ ] All elements readable

### Dark Mode Update
- [ ] Text colors white (#ffffff) or light gray
- [ ] Buttons bright orange (#fbbf24)
- [ ] Forms have visible inputs on dark
- [ ] Cards have visible borders (#3a3a3a)
- [ ] Orange elements BRIGHT and visible

### Final Verification
- [ ] Light mode: All readable
- [ ] Dark mode: All readable
- [ ] Orange: Bright and visible in both modes
- [ ] Focus rings: Visible and orange
- [ ] Hover effects: Working

---

## 🔄 Common Patterns to Update

### Pattern 1: Text Colors
**From**: `text-gray-700` (too light in dark mode)  
**To**: `text-neutral-900 dark:text-white`

### Pattern 2: Button Colors
**From**: `bg-orange-500` (not bright enough in dark mode)  
**To**: `bg-orange-500 dark:bg-yellow-400` (bright in dark)

### Pattern 3: Card Background
**From**: `bg-white` (needs dark mode)  
**To**: `bg-white dark:bg-[#1a1a1a]`

### Pattern 4: Borders
**From**: `border-gray-200` (invisible in dark mode)  
**To**: `border-gray-200 dark:border-[#3a3a3a]`

### Pattern 5: Focus States
**From**: `focus:ring-orange-500` (may not show well in dark)  
**To**: `focus:ring-orange-500 dark:ring-yellow-400`

---

## 🎯 What to Look For in Each Page Type

### Homepage
- [ ] Hero text readable
- [ ] Stat cards have visible numbers
- [ ] Buttons clickable
- [ ] Icons visible
- [ ] CTAs prominent

### About Page
- [ ] Journey section readable
- [ ] Values cards distinct
- [ ] Statistics large and clear
- [ ] Images have good contrast

### Programs Page
- [ ] Category filters work
- [ ] Program cards distinct
- [ ] Images visible
- [ ] Impact metrics clear

### Stories Page
- [ ] Featured story text readable
- [ ] Story grid organized
- [ ] Metadata visible
- [ ] Images have contrast

### Donate Page
- [ ] Calculator readable
- [ ] Donation tiers distinct
- [ ] Form inputs visible
- [ ] Buttons prominent

### Contact Page
- [ ] Contact info readable
- [ ] Form fields visible
- [ ] Phone numbers copyable
- [ ] Email visible

### Get Involved Page
- [ ] Ways to help distinct
- [ ] Volunteer cards clear
- [ ] CTA buttons visible
- [ ] Application clear

---

## 🧪 Testing Commands

### Manual Testing Procedure

1. **In Light Mode**:
   - Open page in browser
   - System: Light
   - Zoom: 100%
   - Check all text readable
   - Check all buttons clickable

2. **In Dark Mode**:
   - Toggle system to dark
   - Refresh page
   - Check all text readable
   - Check all orange elements bright
   - Check forms visible

3. **Contrast Check**:
   - Use WebAIM contrast checker
   - Test main text: Need 7:1 minimum
   - Test buttons: Need 4.5:1 minimum
   - Report any failures

---

## 🔗 CSS Variables Used

In `src/styles/globals.css`:

```css
:root {
  --text-primary: #0d0d0d;
  --text-secondary: #4a4a4a;
  --text-tertiary: #7a7a7a;
  --bg-primary: #ffffff;
  --bg-secondary: #f9f9f9;
  --bg-tertiary: #f3f3f3;
  --border-primary: #d9d9d9;
  --border-secondary: #cccccc;
  --color-orange: #f97316;
}

.dark {
  --text-primary: #ffffff;
  --text-secondary: #e5e5e5;
  --text-tertiary: #bfbfbf;
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2d2d2d;
  --border-primary: #3a3a3a;
  --border-secondary: #4d4d4d;
  --color-orange: #fbbf24;
}
```

Use: `color: var(--text-primary);` in CSS

---

## ⚡ Quick Fixes for Common Issues

### Issue: Text invisible in light mode
**Fix**: Use `#0d0d0d` instead of gray, ensure white background

### Issue: Text invisible in dark mode
**Fix**: Use `#ffffff` instead of light gray, ensure dark background

### Issue: Orange not visible in dark mode
**Fix**: Change to `#fbbf24` (bright yellow-orange), not `#fb923c`

### Issue: Buttons hard to click in dark mode
**Fix**: Ensure orange background with dark text, add focus ring

### Issue: Forms hard to use
**Fix**: Dark input backgrounds (#2d2d2d), light labels (#ffffff), orange focus

### Issue: Cards blend into background
**Fix**: Add visible border (#3a3a3a in dark), contrast background

### Issue: Animations not visible
**Fix**: Use bright orange (#fbbf24) for glow, ensure high opacity

---

## 📊 Before/After Examples

### Example 1: Text Color
```
Before: className="text-gray-600"
After:  className="text-neutral-900 dark:text-white"
```

### Example 2: Button
```
Before: className="bg-orange-500 text-white"
After:  className="bg-orange-500 dark:bg-yellow-400 text-white dark:text-neutral-900"
```

### Example 3: Card
```
Before: className="bg-white border border-gray-200"
After:  className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#3a3a3a]"
```

### Example 4: Form Input
```
Before: className="input border border-gray-300"
After:  className="input border border-gray-300 dark:border-[#3a3a3a] dark:bg-[#2d2d2d] dark:text-white"
```

---

## 🎨 Color Palette Visual

```
LIGHT MODE                    DARK MODE
═══════════════════════════════════════════════

Text
┌─────────────────┐          ┌──────────────────┐
│ #0d0d0d         │          │ #ffffff          │
│ (Main Text)     │          │ (Main Text)      │
└─────────────────┘          └──────────────────┘
┌─────────────────┐          ┌──────────────────┐
│ #4a4a4a         │          │ #e5e5e5          │
│ (Secondary)     │          │ (Secondary)      │
└─────────────────┘          └──────────────────┘
┌─────────────────┐          ┌──────────────────┐
│ #7a7a7a         │          │ #bfbfbf          │
│ (Tertiary)      │          │ (Tertiary)       │
└─────────────────┘          └──────────────────┘

Backgrounds
┌─────────────────┐          ┌──────────────────┐
│ #ffffff         │          │ #0a0a0a          │
│ (Main)          │          │ (Main)           │
└─────────────────┘          └──────────────────┘
┌─────────────────┐          ┌──────────────────┐
│ #f9f9f9         │          │ #1a1a1a          │
│ (Cards)         │          │ (Cards)          │
└─────────────────┘          └──────────────────┘

Accents
┌─────────────────┐          ┌──────────────────┐
│ #f97316         │          │ #fbbf24 ← BRIGHT │
│ (Orange)        │          │ (Orange)         │
└─────────────────┘          └──────────────────┘
```

---

## 📋 Page Checklist Template

Copy for each page:

```
Page: ________________
File: app/XXX/page.tsx

LIGHT MODE REVIEW:
- [ ] All headings readable
- [ ] All body text readable
- [ ] Buttons visible
- [ ] Forms usable
- [ ] Icons visible
- [ ] Borders visible
- [ ] No blending

DARK MODE REVIEW:
- [ ] All headings readable
- [ ] All body text readable
- [ ] Orange buttons bright
- [ ] Forms usable
- [ ] Icons visible
- [ ] Borders visible
- [ ] Animations visible

CONTRAST CHECK:
- [ ] Text: 7:1+ ratio
- [ ] Buttons: 4.5:1+ ratio
- [ ] All elements: WCAG AAA

STATUS: ___ TODO / ___ IN PROGRESS / ___ COMPLETE
```

---

## 🚀 Implementation Workflow

1. **Open page file**
   ```
   cd src/app/XXX/
   open page.tsx
   ```

2. **Read current code**
   - Note all color classes
   - Note all text elements
   - Note all buttons

3. **Update colors**
   - Replace text colors with dark variants
   - Replace buttons with orange + dark variants
   - Replace backgrounds with dark variants
   - Replace borders with visible dark variants

4. **Test in browser**
   - Light mode: All readable?
   - Dark mode: All readable?
   - Orange: Bright and visible?

5. **Verify contrast**
   - Use WebAIM checker
   - Report ratios
   - Move to next page

---

## 📞 Support & Questions

**Color Values**: See "Copy-Paste Color Values" section  
**Patterns**: See "Common Patterns to Update" section  
**Testing**: See "Testing Commands" section  
**Issues**: See "Quick Fixes for Common Issues" section

---

**Last Updated**: November 14, 2025  
**Status**: Ready for use  
**Next Step**: Start with Homepage (app/page.tsx)

Print this guide or keep it open while implementing!
