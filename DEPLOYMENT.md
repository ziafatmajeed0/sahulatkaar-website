# 🚀 SahulatKaar Website - Deployment Guide

This guide will help you deploy the SahulatKaar website to production.

## ✅ Pre-Deployment Checklist

Before deploying, ensure:
- [ ] WhatsApp number is updated (replace 923001234567)
- [ ] Email updated
- [ ] Company information verified
- [ ] All testimonials proofread
- [ ] Cities list is accurate
- [ ] Services descriptions are clear
- [ ] Contact information is correct
- [ ] `.env.local` file is created with your settings
- [ ] All links working locally
- [ ] Performance tested on mobile

## 🌐 Option 1: Vercel (Recommended)

**Best for Next.js projects - FREE tier available**

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/sahulatkaar.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Import project

3. **Configure Environment**
   - In Vercel dashboard: Settings → Environment Variables
   - Add your `.env.local` variables:
     ```
     NEXT_PUBLIC_WHATSAPP_NUMBER
     NEXT_PUBLIC_EMAIL
     NEXT_PUBLIC_PHONE
     NEXT_PUBLIC_GA_ID (optional)
     NEXT_PUBLIC_FB_PIXEL_ID (optional)
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~60 seconds)
   - Get your live URL

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records with Vercel instructions

**Cost:** Free tier includes 100GB bandwidth/month

---

## 🏗️ Option 2: Netlify

**Another great option - very easy**

### Steps:

1. **Connect GitHub to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub
   - Select repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add your variables from `.env.local`

4. **Deploy**
   - Click "Deploy site"
   - Get your live URL

**Cost:** Free tier with decent features

---

## ☁️ Option 3: AWS Amplify

### Steps:

1. Create AWS account
2. Go to AWS Amplify Console
3. Connect GitHub repository
4. Configure build settings
5. Add environment variables
6. Deploy

**Cost:** Free tier available, pay as you grow

---

## 🔧 Option 4: Manual Deployment (VPS/Dedicated Server)

### Prerequisites:
- Ubuntu/Linux server
- Node.js 16+ installed
- Git installed
- Domain name

### Steps:

1. **SSH into your server**
   ```bash
   ssh root@your-server-ip
   ```

2. **Clone repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/sahulatkaar.git
   cd sahulatkaar
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create environment file**
   ```bash
   cp .env.example .env.local
   nano .env.local  # Edit with your details
   ```

5. **Build**
   ```bash
   npm run build
   ```

6. **Install PM2 (for process management)**
   ```bash
   npm install -g pm2
   ```

7. **Start with PM2**
   ```bash
   pm2 start "npm start" --name "sahulatkaar"
   pm2 startup
   pm2 save
   ```

8. **Setup Nginx as reverse proxy**
   ```bash
   sudo apt-get install nginx
   ```
   
   Create `/etc/nginx/sites-available/sahulatkaar`:
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/sahulatkaar /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Setup SSL (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

10. **Setup auto-updates (optional)**
    ```bash
    cd /var/www/sahulatkaar
    git pull origin main
    npm install
    npm run build
    pm2 restart sahulatkaar
    ```

---

## 📊 Post-Deployment Setup

### 1. Analytics

**Add Google Analytics:**
```javascript
// Add to app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
        <Script strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXX');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Facebook Pixel

Add pixel tracking code after closing `</head>` tag in layout.tsx

### 3. WhatsApp Business Integration

- Set up WhatsApp Business Account
- Get Business Phone Number
- Update all links with your actual number
- Consider adding WhatsApp API for automation

### 4. Domain Setup

- Update WhatsApp links to use your custom domain if needed
- Update email to use custom domain email
- Setup email forwarding or SMTP

### 5. SSL Certificate

Most platforms (Vercel, Netlify) give FREE SSL. Others:
- Use Let's Encrypt (free)
- Update to HTTPS everywhere

### 6. Backups & Monitoring

- Enable automatic backups
- Set up uptime monitoring (Uptimerobot.com - free)
- Get alerts if site goes down

---

## 🔍 Testing After Deployment

1. **Mobile Testing**
   ```bash
   # Test on real mobile devices
   # Check all WhatsApp links work
   # Verify buttons are clickable
   ```

2. **Speed Testing**
   - Go to [PageSpeed](https://pagespeed.web.dev)
   - Enter your domain
   - Optimize based on recommendations

3. **SEO Testing**
   - Check Google Search Console
   - Submit sitemap
   - Monitor search rankings

4. **Link Testing**
   - Test all navigation links
   - Verify WhatsApp/Call/Email links
   - Check 404 page

---

## 📈 Performance Optimization

### Caching
```javascript
// In next.config.js
headers: [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ]
  }
]
```

### Image Optimization
- Use Next.js Image component
- Compress images before uploading
- Use WebP format

### Code Splitting
Already handled by Next.js, just ensure:
- No large imports in every page
- Use dynamic imports for large components

---

## 🚨 Troubleshooting Deployment

### Issue: "Vercel build fails"
- Solution: Check `npm run build` locally first
- Check all imports are correct
- Verify environment variables are set

### Issue: "Website is slow"
- Solution: Run PageSpeed analysis
- Optimize images
- Enable caching
- Check server location (CDN helps)

### Issue: "404 on refresh"
- Solution: Add rewrites in `next.config.js` for deployment

### Issue: "WhatsApp links don't work"
- Solution: Check URL encoding
- Verify phone number format
- Test on different devices

---

## 📞 Getting Help

Issues during deployment?

1. Check recent changes in git history
2. Review build logs on your platform
3. Contact platform support
4. WhatsApp SahulatKaar team

---

## 🎉 Congratulations!

Your SahulatKaar website is now live!

### Next Steps:
1. Share with friends/early users
2. Collect feedback
3. Monitor analytics
4. Optimize based on user behavior
5. Plan feature additions

---

**Happy Launching! 🚀**

*"You Rest. We Run."*
