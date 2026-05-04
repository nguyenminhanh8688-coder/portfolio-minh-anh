# Nguyễn Minh Anh - Portfolio

A modern, animated portfolio website showcasing internal communications and culture strategy work. Built with **React**, **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Features

✨ **Modern Design**
- Navy + accent gradient aesthetic with tech energy
- Smooth animations and transitions
- Responsive across all devices
- Professional-elegant but playful tone

🎯 **Sections**
1. Hero - Bold introduction with gradient background
2. Stats - 3 key metrics (years, CBNV reach, projects)
3. Case Studies - 5 horizontal scrolling project cards
4. About - Bio + Who I am section
5. Skills - 4 skill groups with expertise
6. Contact - Call-to-action + contact info

🚀 **Technology Stack**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Setup & Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Updating Content

### Case Studies

Edit `/src/lib/data.ts` - `caseStudies` array:

```typescript
{
  id: 1,
  company: 'Company Name',
  title: 'Project Title',
  subtitle: 'Short description',
  role: 'Your role',
  timeline: 'MM/YYYY – MM/YYYY',
  results: ['Result 1', 'Result 2', 'Result 3'],
  description: 'Longer description...',
  image: 'https://...',
  color: 'from-color1 to-color2',
}
```

### Skills

Edit `/src/lib/data.ts` - `skills` array to add/remove skill groups.

### Personal Info

Edit `/src/lib/data.ts` - `personal` object to update contact info.

## Updating Images

### Replace Placeholder Images with Real Images

1. **Upload images to Cloudinary** (free, no credit card):
   - Go to https://cloudinary.com
   - Sign up (free)
   - Upload images
   - Copy the image URL

2. **Update in code**:
   - Hero section: Edit `Hero.tsx` if needed
   - About photo: Edit `About.tsx` - replace emoji placeholder
   - Case study images: Edit `/src/lib/data.ts` - `caseStudies[].image`

## Deployment

### Option 1: Vercel (Recommended - Free)

```bash
# Create Git repo
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (create repo first)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-minh-anh.git
git push -u origin main

# Go to vercel.com
# Connect your GitHub repo
# Vercel auto-deploys on push
```

### Option 2: Manual Vercel Deployment

```bash
npm i -g vercel
vercel login
vercel
```

## File Structure

```
portfolio-minh-anh/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Stats.tsx       # Stats section
│   │   ├── CaseStudies.tsx # Projects showcase
│   │   ├── About.tsx       # Bio section
│   │   ├── Skills.tsx      # Skills section
│   │   └── Contact.tsx     # Contact + footer
│   └── lib/
│       └── data.ts         # All portfolio data
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Customization

### Colors

Edit `/tailwind.config.ts`:
```typescript
colors: {
  navy: '#1a3a52',      // Change primary
  accent: '#2c9991',    // Change accent
  // ...
}
```

### Fonts

Change in `/src/app/globals.css` - currently uses system fonts (fast + professional).

### Animations

Adjust in component files - look for `framer-motion` `motion.*` elements.

## Performance

- ⚡ Next.js optimizations
- 🖼️ Image lazy loading
- 📊 Lighthouse score: 90+
- 🚀 Vercel global CDN

## License

© 2026 Nguyễn Minh Anh. All rights reserved.

## Support

For issues or questions, contact:
- Email: nguyenminhanh8688@gmail.com
- Phone: 0336 32 8088
