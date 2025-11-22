#!/bin/bash

# Women & Children NGO Website - Quick Start Guide
# =================================================

# This script provides helpful commands for the development team

echo "🎨 Women & Children NGO Website - Development Guide"
echo "===================================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
    echo "✅ Dependencies installed"
fi

echo ""
echo "📋 Available Commands:"
echo "--------------------"
echo ""
echo "Development & Testing:"
echo "  npm run dev              Start development server (http://localhost:3000)"
echo "  npm run build            Build for production"
echo "  npm start                Start production server"
echo "  npm run lint             Run ESLint"
echo ""
echo "Useful Git Commands:"
echo "  git status               Check git status"
echo "  git add .                Stage all changes"
echo "  git commit -m 'message'  Commit changes"
echo "  git push                 Push to remote"
echo ""
echo "📁 Project Structure:"
echo "-------------------"
echo "  src/app/          - Pages (Home, About, Programs, Stories, Donate, Contact)"
echo "  src/components/   - Reusable UI components"
echo "  src/lib/utils/    - Constants and utilities"
echo "  src/types/        - TypeScript definitions"
echo "  src/styles/       - Global styles and Tailwind"
echo ""
echo "🎯 Next Steps:"
echo "-------------"
echo "1. npm run dev        - Start development server"
echo "2. Visit http://localhost:3000"
echo "3. Update organization info in src/lib/utils/constants.ts"
echo "4. Add real images to public/images/"
echo "5. Customize colors in tailwind.config.ts"
echo ""
echo "📖 Documentation:"
echo "---------------"
echo "See README.md for complete documentation and deployment guide"
echo ""
