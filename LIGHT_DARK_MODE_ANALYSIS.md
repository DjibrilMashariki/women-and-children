# Color Visibility & Contrast Analysis - WCV Website

**Date**: November 14, 2025  
**Project**: Optimize Light Mode and Dark Mode Colorways for Maximum Visibility  
**Status**: Analysis & Planning Phase

---

## 📋 Executive Summary

This document outlines a comprehensive approach to ensuring full visibility and optimal user experience across both light and dark modes of the Women & Children's Voice website.

**Current State**: 
- Website has basic light/dark mode support
- Some components may have contrast/visibility issues
- Color schemes not optimized specifically for each mode

**Goal**: 
- Dedicated, optimized color palettes for light mode
- Dedicated, optimized color palettes for dark mode
- Zero visibility issues when switching between modes
- Enhanced visual appeal and accessibility

---

## 🔍 Analysis Framework

### Light Mode Issues to Check
- [ ] Text contrast on white/light backgrounds
- [ ] Button visibility and hover states
- [ ] Card shadows and depth perception
- [ ] Input field focus states
- [ ] Accent color (orange) readability
- [ ] Gradient backgrounds text legibility
- [ ] Border colors visibility
- [ ] Icon contrast

### Dark Mode Issues to Check
- [ ] Text contrast on dark backgrounds
- [ ] Orange accent visibility on dark
- [ ] Card borders and shadows
- [ ] Input field styling and focus
- [ ] Button contrast ratios
- [ ] Gradient backgrounds on dark
- [ ] Icon visibility on dark surfaces
- [ ] Border colors on dark

---

## 📊 Current Color System

### Light Mode Variables (Current)
```css
:root {
  /* Brand */
  --color-orange: #f97316;           /* Primary accent */
  --color-orange-dark: #ea580c;      /* Darker accent */
  --color-black: #171717;            /* Text color */
  --color-white: #ffffff;            /* Background */
  
  /* Backgrounds */
  --bg-primary: #ffffff;             /* Main background */
  --bg-secondary: #fafafa;           /* Secondary background */
  --bg-tertiary: #f5f5f5;            /* Tertiary background */
  
  /* Text */
  --text-primary: #171717;           /* Primary text */
  --text-secondary: #525252;         /* Secondary text */
  --text-tertiary: #737373;          /* Tertiary text */
  
  /* Borders */
  --border-primary: #e5e5e5;         /* Primary border */
  --border-secondary: #d4d4d4;       /* Secondary border */
}
```

### Dark Mode Variables (Current)
```css
.dark {
  /* Brand */
  --color-orange: #fb923c;           /* Brighter orange for dark */
  --color-orange-dark: #f97316;      /* Darker orange */
  --color-black: #0a0a0a;            /* Background */
  --color-white: #fafafa;            /* Text/light elements */
  
  /* Backgrounds */
  --bg-primary: #0a0a0a;             /* Main background */
  --bg-secondary: #171717;           /* Secondary background */
  --bg-tertiary: #262626;            /* Tertiary background */
  
  /* Text */
  --text-primary: #fafafa;           /* Primary text */
  --text-secondary: #d4d4d4;         /* Secondary text */
  --text-tertiary: #a3a3a3;          /* Tertiary text */
  
  /* Borders */
  --border-primary: #262626;         /* Primary border */
  --border-secondary: #404040;       /* Secondary border */
}
```

---

## 🎨 Optimization Strategy

### Light Mode - Enhanced Palette

**Goals**:
- Maximum contrast for readability
- Vibrant but professional orange
- Clear visual hierarchy
- Optimal button and form visibility

**Proposed Variables**:
```css
:root {
  /* Enhanced Brand Colors - Light Mode */
  --color-orange: #f97316;           /* ← Keep: Perfect contrast */
  --color-orange-light: #fed7aa;     /* ← New: Light orange for backgrounds */
  --color-orange-very-light: #fef3c7; /* ← New: Very light for subtle backgrounds */
  
  /* Enhanced Backgrounds - Light Mode */
  --bg-primary: #ffffff;             /* Keep white for max contrast */
  --bg-secondary: #f9f9f9;           /* Slightly lighter gray */
  --bg-tertiary: #f3f3f3;            /* Accessible gray level */
  
  /* Enhanced Text - Light Mode */
  --text-primary: #0d0d0d;           /* ← Darker black for better contrast */
  --text-secondary: #4a4a4a;         /* Clearer secondary text */
  --text-tertiary: #7a7a7a;          /* Distinct tertiary text */
  
  /* Enhanced Borders - Light Mode */
  --border-primary: #d9d9d9;         /* Visible but subtle */
  --border-secondary: #cccccc;       /* Stronger borders when needed */
  
  /* Enhanced Shadows - Light Mode */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Dark Mode - Enhanced Palette

**Goals**:
- Bright orange for accent visibility
- Clear text on dark surfaces
- Proper contrast ratios
- Depth perception with subtle shadows

**Proposed Variables**:
```css
.dark {
  /* Enhanced Brand Colors - Dark Mode */
  --color-orange: #fbbf24;           /* ← Brighter: Better on dark backgrounds */
  --color-orange-light: #fed7aa;     /* ← New: For dark surfaces */
  --color-orange-very-light: #fef3c7; /* ← New: Subtle highlights */
  
  /* Enhanced Backgrounds - Dark Mode */
  --bg-primary: #0a0a0a;             /* Keep pure black */
  --bg-secondary: #1a1a1a;           /* ← Lighter for contrast */
  --bg-tertiary: #2d2d2d;            /* ← More accessible gray */
  
  /* Enhanced Text - Dark Mode */
  --text-primary: #ffffff;           /* ← Pure white for max contrast */
  --text-secondary: #e5e5e5;         /* ← Lighter for better readability */
  --text-tertiary: #bfbfbf;          /* ← Distinct tertiary text */
  
  /* Enhanced Borders - Dark Mode */
  --border-primary: #3a3a3a;         /* Visible on dark */
  --border-secondary: #4d4d4d;       /* Strong borders */
  
  /* Enhanced Shadows - Dark Mode */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
}
```

---

## 📐 Contrast Ratio Targets (WCAG AAA)

| Element Type | Light Mode | Dark Mode | Target |
|--------------|-----------|----------|---------|
| Headings | #0d0d0d on #ffffff | #ffffff on #0a0a0a | 15:1+ |
| Body Text | #0d0d0d on #ffffff | #ffffff on #0a0a0a | 12:1+ |
| Secondary Text | #4a4a4a on #ffffff | #e5e5e5 on #0a0a0a | 7:1+ |
| Buttons | #ffffff on #f97316 | #0a0a0a on #fbbf24 | 10:1+ |
| Borders | #d9d9d9 on #ffffff | #3a3a3a on #0a0a0a | 3:1+ |
| Links | #f97316 on #ffffff | #fbbf24 on #0a0a0a | 8:1+ |

---

## 🔧 Implementation Approach

### Phase 1: Light Mode Optimization

**Files to Modify**:
1. `src/styles/globals.css` - Update CSS variables
2. `app/page.tsx` - Homepage light mode classes
3. `app/about/page.tsx` - About page light mode
4. `app/programs/page.tsx` - Programs page light mode
5. `app/stories/page.tsx` - Stories page light mode
6. `app/donate/page.tsx` - Donate page light mode
7. `app/contact/page.tsx` - Contact page light mode
8. `app/get-involved/page.tsx` - Get Involved page light mode

**Tasks**:
- Update color variable definitions
- Apply enhanced text color classes
- Optimize button and form styling
- Ensure all text meets contrast standards
- Test each page for readability

### Phase 2: Dark Mode Optimization

**Files to Modify**:
1. `src/styles/globals.css` - Dark mode CSS variables
2. All page files - Dark mode color classes
3. Component files - Dark mode styling

**Tasks**:
- Update dark mode variables
- Apply bright orange accent colors
- Ensure text is pure white on dark
- Optimize dark mode shadows
- Test for visibility issues

---

## ✅ Verification Checklist

### Light Mode
- [ ] All headings readable (#0d0d0d on #ffffff)
- [ ] Body text clear and legible
- [ ] Secondary text distinct and visible
- [ ] Orange accent pops without glare
- [ ] Buttons clearly visible and clickable
- [ ] Form inputs easy to spot
- [ ] Card borders subtle but visible
- [ ] No washed-out colors
- [ ] All effects visible
- [ ] WCAG AAA compliant

### Dark Mode
- [ ] All headings visible (#ffffff on #0a0a0a)
- [ ] Body text clear on dark
- [ ] Secondary text distinct
- [ ] Orange accent bright enough (#fbbf24)
- [ ] Buttons stand out
- [ ] Form inputs visible with focus state
- [ ] Card shadows provide depth
- [ ] No blending with background
- [ ] All effects visible
- [ ] WCAG AAA compliant

---

## 📊 Component-Specific Considerations

### Buttons
- **Light**: Orange background (#f97316) with white text
- **Dark**: Bright orange background (#fbbf24) with dark text

### Cards
- **Light**: White background (#ffffff) with light gray borders (#d9d9d9)
- **Dark**: Dark gray background (#1a1a1a) with subtle borders (#3a3a3a)

### Input Fields
- **Light**: White background with dark borders on focus
- **Dark**: Dark background with orange focus ring

### Text Hierarchy
- **Light**: Primary #0d0d0d, Secondary #4a4a4a, Tertiary #7a7a7a
- **Dark**: Primary #ffffff, Secondary #e5e5e5, Tertiary #bfbfbf

### Accents
- **Light**: Orange #f97316 on white
- **Dark**: Bright orange #fbbf24 on dark

---

## 🎯 Next Steps

1. **Identify specific issues** in screenshots
2. **Create detailed fix list** per page per mode
3. **Implement light mode fixes** first (all pages)
4. **Test light mode** thoroughly
5. **Implement dark mode fixes** (all pages)
6. **Test dark mode** thoroughly
7. **Cross-mode testing** (switch between modes)
8. **Final documentation** and delivery

---

## 📝 Notes

- Changes are CSS-only (variable updates)
- No functional changes to components
- Backward compatible with existing markup
- Smooth transitions between modes
- WCAG AAA accessible
- Enhanced visual appeal

---

**Status**: Ready to proceed with Phase 1 (Light Mode Analysis)  
**Next Action**: Analyze light mode screenshots for specific issues
