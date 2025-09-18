# Ayurakshak Website - Deployment Guide

## 🚀 Modern Animated Next.js Website

A beautiful, modern, and fully responsive website for Ayurakshak NGO built with Next.js, Tailwind CSS, Shadcn/UI, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, elegant, and minimal design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Beautiful animations using Framer Motion
- **Contact Form**: Working contact form with API endpoint and toast notifications
- **Product Showcase**: Interactive product grid with WhatsApp integration
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Form Validation**: Zod
- **TypeScript**: Full TypeScript support

## 📁 Project Structure

```
ayurakshak/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # Contact form API endpoint
│   │   ├── globals.css             # Global styles with custom animations
│   │   ├── layout.tsx              # Root layout with metadata
│   │   └── page.tsx                # Main page with all components
│   ├── components/
│   │   ├── ui/                     # Shadcn/UI components
│   │   ├── navbar.tsx              # Responsive navigation
│   │   ├── hero.tsx                # Animated hero section
│   │   ├── about.tsx               # About section with stats
│   │   ├── products.tsx            # Product showcase grid
│   │   ├── features.tsx            # Features/benefits section
│   │   ├── contact.tsx             # Contact form
│   │   └── footer.tsx              # Footer with social links
│   └── lib/
│       └── utils.ts                # Utility functions
├── public/
│   ├── AyurRakshakImageLogo.jpeg   # Company logo
│   ├── TeamPicture.jpeg            # Team photo
│   └── Product/                    # Product images
│       ├── DailyPainOil.jpeg
│       ├── DryHairShampoo.jpeg
│       └── InstantPainOil.jpeg
└── package.json
```

## 🚀 Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm start
   ```

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms
The website is compatible with any platform that supports Next.js applications.

## 📱 Features Implemented

### ✅ Navigation
- Responsive navbar with logo
- Mobile-friendly hamburger menu
- Smooth scroll navigation
- Glass effect on scroll

### ✅ Hero Section
- Animated gradient text
- Floating background icons
- Statistics display
- Call-to-action buttons
- Scroll indicator

### ✅ About Section
- Company information from docs
- Animated statistics
- Trust badges
- Team photo integration

### ✅ Product Showcase
- Product grid with hover effects
- WhatsApp integration for purchases
- Product ratings and features
- Responsive design

### ✅ Features Section
- Animated feature cards
- Treatment methods
- Call-to-action section
- Icon animations

### ✅ Contact Form
- Form validation with Zod
- API endpoint (/api/contact)
- Toast notifications with Sonner
- Responsive design

### ✅ Footer
- Social media links
- Contact information
- Quick links
- Emergency contact section
- Scroll to top button

## 🎨 Customization

### Colors
The website uses a green color scheme that can be customized in `globals.css`:
- Primary: Green (600-700)
- Secondary: Emerald (500-600)
- Accent: Teal (500-600)

### Content
All content is easily customizable in the component files. Update text, images, and links as needed.

### Animations
Framer Motion animations can be adjusted in each component file for different effects.

## 📞 Contact Integration

The website includes WhatsApp integration for product inquiries. Update the phone number in:
- `src/components/products.tsx`
- `src/components/navbar.tsx`
- `src/components/footer.tsx`

## 🔧 Environment Variables

For production, you may want to add:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+919259651812
NEXT_PUBLIC_EMAIL=info@ayurakshak.org
```

## 📈 Performance

The website is optimized for performance with:
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size

## 🎯 SEO

Includes proper SEO optimization:
- Meta tags
- Open Graph tags
- Structured data
- Semantic HTML

---

**Built with ❤️ for Ayurakshak NGO**
