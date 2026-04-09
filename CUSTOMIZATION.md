# 🎨 SahulatKaar Website - Customization Guide

Complete guide to customize every aspect of the SahulatKaar website.

## 📋 Quick Changes

### 1. Update WhatsApp Number

**All Files to Update:**
1. `components/Navigation.jsx` → Line with `https://wa.me/923001234567`
2. `components/Footer.jsx` → Multiple occurrences
3. `components/StickyWhatsAppButton.jsx` → WhatsApp link
4. `app/page.tsx` → Multiple CTAs
5. `app/how-it-works/page.tsx` → CTA section
6. `app/services/page.tsx` → CTA section
7. `app/cities/page.tsx` → CTA section
8. `app/about/page.tsx` → CTA section
9. `app/contact/page.tsx` → Contact links

**Better Way (Use Environment Variable):**
1. Create `.env.local`:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
   ```
2. Use in components:
   ```javascript
   const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
   ```

### 2. Update Phone Number

Replace `+923001234567` with your actual number in:
- `components/Footer.jsx`
- `app/contact/page.tsx`
- And anywhere you see it

### 3. Update Email

Replace `info@sahulatkaar.com` with your email:
- `components/Footer.jsx`
- `app/contact/page.tsx`
- `app/layout.tsx`

---

## 🎨 Design & Colors

### Change Brand Colors

**File:** `tailwind.config.js`

```javascript
// Current colors
colors: {
  primary: '#10b981',    // Green (trust) - Change this
  secondary: '#f97316',  // Orange (energy) - Change this
  accent: '#1e3a8a',     // Dark Blue (professional) - Change this
}
```

**Example: Blue & Yellow Theme**
```javascript
colors: {
  primary: '#3b82f6',    // Blue
  secondary: '#fbbf24',  // Yellow
  accent: '#1f2937',     // Dark Gray
}
```

Then all colors are automatically updated throughout the site!

### Change Fonts

**File:** `app/globals.css`

```css
body {
  font-family: 'Your-Font-Name', sans-serif;
}

.section-title {
  font-family: 'Your-Bold-Font', sans-serif;
  font-weight: 700;
}
```

Or use Google Fonts (add to `app/layout.tsx`):
```typescript
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 📝 Content Changes

### Homepage - Hero Section

**File:** `app/page.tsx` → Lines ~15-40

```typescript
// Change these:
<h1 className="text-4xl md:text-5xl font-bold mb-4">
  Pakistan mein kaam atka hua hai?  {/* Change this headline */}
</h1>

<p className="text-xl md:text-2xl mb-6 text-green-100">
  SahulatKaar aap ke liye sab kuch manage karta hai  {/* Change this subheading */}
</p>

<p className="text-lg mb-8 opacity-90">
  Overseas ho, busy professional ho, ya alag city mein - hum hain aapke har kaam ke liye.
</p>
```

### Update Testimonials

**File:** `app/page.tsx` → Lines ~45-60

```typescript
const testimonials = [
  {
    name: "Ahmed Ali",        // Change name
    city: "Dubai",            // Change city
    text: "Mera property...", // Change testimonial
    rating: 5                 // Change rating
  },
  // Add more...
]
```

### Update Services List

**File:** `app/services/page.tsx` → Lines ~30-50

```typescript
const serviceCategories = [
  {
    category: "📄 Document Services",
    color: "from-blue-500 to-blue-600",
    items: [
      "Add your services here",
      "Each item is one service",
      // ...
    ]
  }
]
```

### Update Cities

**File:** `app/cities/page.tsx` → Lines ~10-30

```typescript
const cities = [
  { name: "Karachi", province: "Sindh", coverage: "100%", neighborhoods: 15 },
  { name: "Lahore", province: "Punjab", coverage: "100%", neighborhoods: 12 },
  // Add or remove cities here
]
```

### Update About Us Content

**File:** `app/about/page.tsx` → Lines ~50-80

Change all text content in the story section

---

## 📱 Layout Customization

### Change Navigation Links

**File:** `components/Navigation.jsx` → Desktop Menu section

```typescript
<Link href="/your-new-page" className="text-gray-700 hover:text-primary">
  Your New Page
</Link>
```

### Add New Navigation Item

1. Create new page: `app/your-page/page.tsx`
2. Add link in `components/Navigation.jsx`
3. Add same link in mobile menu

### Change Logo

**File:** `components/Navigation.jsx` → Line ~17

```typescript
<Link href="/" className="flex items-center">
  <span className="text-2xl font-bold text-primary">SahulatKaar</span>
  {/* OR use an image */}
  <img src="/logo.png" alt="Logo" className="h-10" />
</Link>
```

---

## 🖼️ Add Images

### Hero Image

1. Save image to `public/hero.jpg`
2. Update `app/page.tsx` → Hero section:

```typescript
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Pakistan tasks"
  width={500}
  height={400}
  className="rounded-lg"
/>
```

### Logo

1. Save logo to `public/logo.png`
2. Update `components/Navigation.jsx`

### Background Images

```css
section {
  background-image: url('/pattern.png');
  background-size: cover;
  background-position: center;
}
```

---

## 🔧 Component Customization

### Modify Sticky WhatsApp Button

**File:** `components/StickyWhatsAppButton.jsx`

```typescript
export default function StickyWhatsAppButton() {
  return (
    <a
      href="https://wa.me/923001234567?text=Custom%20message"  // Change message
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-40 transition transform hover:scale-110 animate-pulse"
      title="Chat on WhatsApp"  // Change tooltip
    >
      <MessageCircle size={28} />  {/* Change icon */}
    </a>
  )
}
```

### Modify Navigation Styling

**File:** `components/Navigation.jsx`

```typescript
// Change colors by modifying Tailwind classes:
className="sticky top-0 z-50 bg-white shadow-md"
// Can be:
className="sticky top-0 z-50 bg-primary text-white shadow-lg"
// Or gradient:
className="sticky top-0 z-50 bg-gradient-to-r from-primary to-secondary shadow-lg"
```

### Customize Footer

**File:** `components/Footer.jsx`

- Change colors, links, content
- Add social media icons
- Update copyright year
- Add/remove sections

---

## 📄 Create New Pages

### Create a Blog Page

1. Create `app/blog/page.tsx`:

```typescript
export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Your blog content */}
        </div>
      </section>
    </div>
  )
}
```

2. Add link in navigation and footer

### Create FAQ Page

Similar to blog, create `app/faq/page.tsx` with FAQ sections

### Create Pricing Page

Create `app/pricing/page.tsx` with pricing tiers

---

## ⚡ Advanced Customization

### Add Contact Form Functionality

**File:** `app/contact/page.tsx`

Currently the form submits to WhatsApp. To send emails:

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Create API route `app/api/contact/route.ts`:

```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

export async function POST(request: Request) {
  const { name, email, city, taskDescription } = await request.json()
  
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_EMAIL,
    subject: `New Order from ${name}`,
    html: `<h2>New Order</h2><p>Name: ${name}</p><p>City: ${city}</p><p>Task: ${taskDescription}</p>`
  })
  
  return Response.json({ success: true })
}
```

### Add Dark Mode

```typescript
// In app/layout.tsx
import { useEffect, useState } from 'react'

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false)
  
  return (
    <html className={isDark ? 'dark' : ''}>
      <body>{children}</body>
    </html>
  )
}
```

### Add Multiple Languages

```typescript
// Create i18n config
// Install next-i18next
npm install next-i18next

// Create translations in /public/locales
// Wrap components with useTranslation hook
```

---

## 🔍 SEO Customization

### Update Meta Tags

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  keywords: 'your, keywords, here'
}
```

### Update Per-Page SEO

In each page file, export metadata:

```typescript
export const metadata: Metadata = {
  title: 'Services - SahulatKaar',
  description: 'Explore all services...'
}
```

### Add Structured Data

```typescript
// In app/layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'SahulatKaar'
    })
  }}
/>
```

---

## 🚀 Performance Customization

### Optimize Images

Use Next.js Image component with sizes:

```typescript
<Image
  src="/image.jpg"
  alt="Description"
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
  quality={85}
/>
```

### Lazy Load Components

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### Reduce Bundle Size

- Remove unused dependencies
- Use tree-shaking
- Code splitting (Next.js does this automatically)

---

## 📊 Analytics Customization

### Add Google Analytics

```typescript
// In app/layout.tsx
import Script from 'next/script'

<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
        page_path: window.location.pathname,
      });
    `,
  }}
/>
```

### Track WhatsApp Clicks

```typescript
const trackWhatsApp = () => {
  gtag.event('whatsapp_click', {
    'category': 'engagement',
    'label': 'contact'
  })
}
```

---

## 🎯 Conversion Optimization

### A/B Test Headlines

Keep two versions of key sections and measure which converts better

### Improve CTA Buttons

- Use contrasting colors
- Add urgency: "Order Now!", "Limited Time!"
- Use action verbs

### Reduce Friction

- One-click WhatsApp (already implemented)
- Pre-fill form fields when possible
- Add social proof (testimonials, numbers)

---

## 🐛 Debugging Customization

### Check Build Issues

```bash
npm run build
```

### Check Runtime Errors

```bash
npm run dev
# Check browser console (F12)
```

### Validate Changes

```bash
# Check for TypeScript errors
npm run build

# Format code
npm run lint
```

---

## 💾 Backup Before Changes

```bash
git add .
git commit -m "Before major customization"
git branch backup-v1
```

---

## 🎉 Common Customization Scenarios

### Scenario: Change From Freelancer to Agency

1. Update testimonials to agency clients
2. Change language from "I" to "We/Team"
3. Add team page
4. Update pricing structure

### Scenario: Add New Service Category

1. Add to `app/services/page.tsx`
2. Create detailed service page
3. Add FAQs about service
4. Update homepage services section

### Scenario: Expand to Multiple Cities

1. Update `app/cities/page.tsx` with all cities
2. Add city-specific pages: `/app/cities/[city]/page.tsx`
3. Update coverage statistics

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Happy Customizing! 🎨**

If you get stuck, check the original files or reach out to the team.
