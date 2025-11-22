# Deployment Guide - Women & Children NGO Website

## Quick Deployment (3 steps)

### Step 1: Prepare the Project
```bash
cd c:\Users\LENOVO\Womenandchildren
npm run build
```

### Step 2: Choose Your Platform
- **Vercel** (Recommended): 1-click deployment
- **Netlify**: Git-based deployment
- **Docker**: Self-hosted container
- **Traditional Hosting**: Upload static files

### Step 3: Go Live!
Follow the platform-specific instructions below.

---

## Option 1: Vercel (RECOMMENDED) ⭐

**Best for:** Easiest setup, automatic deployments, best Next.js support

### Setup (5 minutes)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel dashboard: Settings > Domains
   - Add your custom domain
   - Update DNS settings with Vercel nameservers

**Result**: Your site is live at your custom domain! 🎉

### Auto-Deployment
- Every push to main automatically deploys
- Preview deployments for pull requests
- Automatic HTTPS and CDN

---

## Option 2: Netlify

**Best for:** Easy setup with form handling

### Setup (5 minutes)

1. **Via Git**
   ```bash
   npm run build
   # Push to GitHub
   ```

2. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub
   - Configure build:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Custom Domain**
   - Site settings > Domain management
   - Add custom domain
   - Update DNS

**Cost**: Free tier available with custom domain

---

## Option 3: Docker (Self-Hosted)

**Best for:** Full control, existing infrastructure

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm install --legacy-peer-deps --production
EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
# Build image
docker build -t women-children:latest .

# Run container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  women-children:latest

# Push to registry (e.g., Docker Hub)
docker tag women-children:latest yourusername/women-children:latest
docker push yourusername/women-children:latest
```

### Deploy to Container Service
- **AWS ECS**: Docker container orchestration
- **Google Cloud Run**: Serverless containers
- **DigitalOcean App Platform**: Simple deployment
- **Heroku**: `git push heroku main` (if using Heroku)

---

## Option 4: Traditional Hosting

**Best for:** Budget hosting with cPanel

### Build and Upload

1. **Build locally**
   ```bash
   npm run build
   npm run start
   # Test at http://localhost:3000
   ```

2. **Package for upload**
   ```bash
   # Create deployment package
   npm run build
   # Zip the .next, node_modules, package.json, public folders
   ```

3. **Upload to Host**
   - Via FTP/SFTP: Upload zipped files
   - Use File Manager in cPanel
   - Extract files on server

4. **Configure**
   - Point domain to server
   - Set NODE_ENV=production
   - Install Node.js on server (check with host)
   - Start application: `npm start`

---

## Pre-Deployment Checklist

### Essential
- [ ] Update `ORG_NAME`, `ORG_EMAIL`, `ORG_PHONE` in constants.ts
- [ ] Update `SOCIAL_LINKS` with real social media URLs
- [ ] Update `ORG_ADDRESS`
- [ ] Replace placeholder images with real images
- [ ] Test all forms work correctly
- [ ] Test all links work correctly
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Enable HTTPS
- [ ] Set up domain name

### Nice to Have
- [ ] Add favicon to `public/favicon.ico`
- [ ] Update site metadata in `src/app/layout.tsx`
- [ ] Set up Google Analytics
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up email service (SendGrid, Mailgun)
- [ ] Configure Supabase for database (optional)

### Performance
- [ ] Run Lighthouse audit (aim for 90+)
- [ ] Compress images
- [ ] Test page load speed
- [ ] Enable caching headers
- [ ] Use CDN for static assets

---

## Post-Deployment Testing

### Functional Testing
```bash
# Test home page loads
curl https://yourdomain.com

# Test forms
# - Try contact form
# - Try donation form
# - Verify email notifications

# Test navigation
# - Click all links
# - Test mobile menu
# - Test all CTAs
```

### SEO Check
- [ ] Meta tags visible in page source
- [ ] Open Graph tags correct
- [ ] Mobile responsive
- [ ] Page loads under 3 seconds
- [ ] No 404 errors

### Security
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] CSP headers configured
- [ ] No sensitive data in console
- [ ] Environment variables not exposed

### Performance
- [ ] Lighthouse score 90+
- [ ] First Contentful Paint < 1s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

---

## Monitoring & Maintenance

### Set Up Monitoring
- **Uptime Monitoring**: Uptimerobot.com or similar
- **Error Tracking**: Sentry.io for JavaScript errors
- **Analytics**: Google Analytics or Plausible
- **Log Monitoring**: View deployment logs regularly

### Regular Updates
```bash
# Keep dependencies up to date
npm update
npm audit fix

# Check for new Next.js versions
npm outdated

# Test after updates
npm run build
npm run dev
```

### Backup Strategy
- Keep GitHub repository updated
- Regular backups of database (if using Supabase)
- Document custom configurations
- Keep environment variables safe

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Port Already in Use
```bash
# Kill process using port 3000
# Windows: netstat -ano | findstr :3000
# Mac/Linux: lsof -i :3000 | kill
```

### 404 Errors
- Verify static files in `public/`
- Check `next.config.ts` configuration
- Verify all imports use correct paths (@/...)

### Forms Not Working
- Check environment variables
- Verify email service configuration
- Test with browser console open
- Check CORS settings if API from different domain

### Performance Issues
- Check Lighthouse report
- Optimize images
- Enable caching
- Use CDN
- Upgrade Node version if needed

---

## Cost Estimates

| Platform | Cost | Best For |
|----------|------|----------|
| **Vercel** | Free-$20/mo | Individuals, small orgs |
| **Netlify** | Free-$19/mo | Static sites, small apps |
| **Docker + DigitalOcean** | $5-20/mo | Budget hosting |
| **AWS/GCP/Azure** | Pay-as-you-go | Enterprise |
| **Traditional Hosting** | $5-20/mo | Simple deployment |

---

## After Deployment

### First Week
- Monitor error logs
- Test all functionality
- Gather user feedback
- Monitor page performance

### First Month
- Optimize based on analytics
- Fix any reported issues
- Update content
- Set up email notifications

### Ongoing
- Regular security updates
- Monitor uptime
- Update dependencies monthly
- Review analytics
- Backup data regularly

---

## Support & Help

### If Something Goes Wrong

1. **Check Logs**
   - Vercel: Deployments tab shows build errors
   - Netlify: Deploys tab shows errors
   - Docker: `docker logs container-id`

2. **Common Issues**
   - Paths: Make sure to use `@/` aliases
   - Env vars: Check environment variables set
   - Node version: Use Node 18+
   - Dependencies: Try `npm install --legacy-peer-deps`

3. **Get Help**
   - Next.js Docs: [nextjs.org](https://nextjs.org)
   - GitHub Issues: Check project Issues
   - Stack Overflow: Tag `next.js`

---

## Congratulations! 🎉

Your Women & Children NGO website is now live and reaching people around the world!

**Next Steps:**
- Share your website with team and supporters
- Monitor performance and user feedback
- Plan content updates and new features
- Consider adding database, payment, and auth features

---

**Questions?** See README.md or PROJECT_SUMMARY.md

**Last Updated**: November 11, 2025
