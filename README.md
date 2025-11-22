# Women & Children NGO Website

A modern, intuitive, and visually appealing website for the Women & Children NGO, designed to increase visibility, facilitate donations, share impact stories, and introduce the organization to the online arena.

## 🎯 Project Overview

This is a **Next.js 16 + React 19 + TypeScript** full-stack web application built with modern best practices.

## ✨ Features

- **7 Core Pages**: Home, About, Programs, Stories, Donate, Contact, Get Involved
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Components**: Reusable UI components with consistent styling
- **Professional Design**: NGO-tailored color scheme and typography
- **Accessible**: WCAG 2.1 AA compliant markup
- **Type-Safe**: Full TypeScript support
- **SEO Ready**: Meta tags and structured data ready

## 🛠 Tech Stack

- Next.js 16 | React 19 | TypeScript 5
- Tailwind CSS 4 | React Icons | React Hook Form
- Zod | React Toastify | Framer Motion

## 📁 Project Structure

```
src/app/              # Pages
src/components/       # UI Components
src/lib/utils/        # Utilities & Constants
src/types/            # TypeScript Types
src/styles/           # Global Styles
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## 📝 Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Production server
npm run lint      # ESLint
```

## 🔧 Configuration

### Update Organization Info
Edit `src/lib/utils/constants.ts`

### Customize Colors
Edit `tailwind.config.ts`

### Update Metadata
Edit `src/app/layout.tsx`

## 🏗 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

## 📋 Deployment Checklist

- [ ] Update organization information
- [ ] Add real images
- [ ] Configure domain name
- [ ] Test on mobile
- [ ] Run Lighthouse audit
- [ ] Enable HTTPS

## 🤝 Support

Email: info@womenandchildren.org

---

**Built with ❤️ for Women & Children NGO**

November 11, 2025
