# Ayurakshak NGO Website - Production Deployment Guide

## 🚀 Quick Deploy

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Railway/Render
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with automatic builds

## 📋 Environment Variables Required

Create a `.env.local` file with:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ayurakshak
```

For local development, you can use:
```
MONGODB_URI=mongodb://localhost:27017/ayurakshak
```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended for Production)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Get connection string
5. Add to environment variables

### Local MongoDB (Development)
1. Install MongoDB locally
2. Start MongoDB service
3. Use local connection string

## 🔧 Build Commands

- **Install**: `npm install`
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm start`
- **Lint**: `npm run lint`

## 📱 Features Included

### ✅ Complete NGO Website
- Responsive navbar with dropdowns
- Hero section with NGO background
- Diseases section with treatment cards
- Patient stories with video testimonials
- Camps & events with today's and upcoming
- Consultation form with database integration
- Contact form with database integration
- Features section (Why Choose Ayurakshak)
- Footer with social media links
- SEO optimized with proper metadata

### ✅ Database Integration
- MongoDB with Mongoose ODM
- Server actions for form submissions
- Data validation with Zod
- Error handling and user feedback
- Form data persistence

### ✅ Modern Tech Stack
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Shadcn/UI components
- Sonner for toast notifications
- Lucide React icons

## 🎨 Customization

### Content Updates
- Update NGO information in component files
- Modify contact details in footer and contact sections
- Add/remove diseases in consultation form
- Update social media links

### Styling
- Modify colors in `globals.css`
- Update component styles in individual files
- Customize animations and transitions

### Database Schema
- Modify models in `src/model/` directory
- Update validation schemas in `src/lib/actions/formActions.ts`

## 🔒 Security Features

- Server-side form validation
- Input sanitization
- Error handling
- Rate limiting considerations
- Secure database connections

## 📊 Form Data Management

### Query Form (Consultation)
- Stores: name, age, gender, location, email, mobile, enquiry
- Validation: Zod schema validation
- Database: QueryForm collection

### Message Form (Contact)
- Stores: name, email, message
- Validation: Zod schema validation  
- Database: MessageForm collection

## 🚀 Production Checklist

- [ ] Set up MongoDB Atlas database
- [ ] Configure environment variables
- [ ] Test form submissions
- [ ] Verify email/phone numbers
- [ ] Check social media links
- [ ] Test responsive design
- [ ] Verify SEO metadata
- [ ] Test performance
- [ ] Set up monitoring

## 📞 Support & Contact

- **Developer**: Kush Vardhan
- **Portfolio**: https://kush-personal-portfolio-my-portfolio.vercel.app/
- **NGO Contact**: +91 92596 51812
- **Email**: ayurakshak2@gmail.com

## 🔄 Updates & Maintenance

- Regular dependency updates
- Database backup procedures
- Form submission monitoring
- Performance optimization
- Security updates

---

**Ready for Production Deployment! 🎉**

The website is now fully synchronized with server actions and ready for deployment. All forms are connected to the database through secure server actions with proper validation and error handling.
