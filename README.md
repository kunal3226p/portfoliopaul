# Kunal Paul — Modern Full Stack Developer Portfolio

A responsive, high-performance developer portfolio built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and **Framer Motion**. Designed with a mobile-first, developer-centric aesthetic featuring dark mode by default, glassmorphic cards, custom gradient blobs, interactive CSS browser mockups, animated counters, and an integrated contact form.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & Server Components)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom glassmorphism & gradients
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts via `next/font` (`Space Grotesk` for headings, `Inter` for body)
- **Email Delivery**: [Nodemailer](https://nodemailer.com/) via Next.js API Route (`/api/contact`)
- **Deployment**: [Vercel](https://vercel.com/) ready

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js 18.17+** or higher installed.

```bash
node -v
npm -v
```

### 2. Installation

Clone or open the project directory and install dependencies:

```bash
cd kunal-portfolio
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Populate the following variables for email delivery:

```env
# Email Configuration (Nodemailer - Gmail / SMTP)
EMAIL_USER=paulk3226@gmail.com
EMAIL_PASS=your_gmail_app_password
CONTACT_RECEIVER_EMAIL=paulk3226@gmail.com
EMAIL_SERVICE=gmail

# Alternative: Resend (Optional)
# RESEND_API_KEY=re_123456789
```

> **Note on Gmail App Password**:
> If using Gmail, enable 2-Step Verification in your Google Account and generate an **App Password** under Security Settings. Use that generated 16-character string for `EMAIL_PASS`.
> 
> *When credentials are not configured, the contact form operates in simulated developer mode, logging inquiries to the console and returning a friendly success response so you can test the UI immediately.*

---

## 📁 Project Structure

```
kunal-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js         # API route for sending contact emails
│   ├── globals.css              # Custom scrollbars, glass utilities & variables
│   ├── icon.svg                 # Dynamic browser favicon
│   ├── layout.jsx               # Space Grotesk & Inter fonts, JSON-LD Schema, SEO
│   ├── not-found.jsx            # Cosmic developer 404 page
│   └── page.jsx                 # Main page assembling all sections
├── components/
│   ├── AnimatedCounter.jsx      # Scroll-triggered statistical counter
│   ├── BackgroundBlobs.jsx      # Subtle ambient indigo & cyan blurred blobs
│   ├── Footer.jsx               # Footer with back-to-top, copyright & socials
│   ├── Navbar.jsx               # Sticky desktop nav & animated mobile drawer
│   ├── ProjectCard.jsx          # CSS-browser mockup card with tilt and live links
│   ├── SkillCard.jsx            # Glassmorphic skill category card with chips
│   ├── ThemeToggle.jsx          # Dark / Light theme switch button
│   ├── TimelineItem.jsx         # Responsive vertical timeline node
│   └── Toast.jsx                # Form submission status toast
├── data/
│   └── portfolio.js             # Centralized config for all text, projects & links
├── public/
│   ├── avatar.jpg               # Kunal's hero profile picture
│   ├── kunal-paul.jpg           # High-resolution hero image
│   ├── resume.pdf               # Downloadable resume PDF
│   ├── robots.txt               # Search engine crawler instructions
│   └── sitemap.xml              # XML Sitemap for SEO indexing
├── tailwind.config.js           # Custom colors, fonts, shadows, and animations
└── next.config.js               # Next.js production optimizations
```

---

## ✏️ Easily Editing Content

All personal data, links, projects, skills, education, and experience are isolated in a single file:
👉 **`data/portfolio.js`**

To update your projects, skills, or contact info, simply edit that file without modifying component logic.

---

## 🌐 Deploying to Vercel

### Option 1: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to connect your project.

### Option 2: Deploy via Vercel Dashboard (GitHub)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kunal Paul portfolio"
   git branch -M main
   git remote add origin https://github.com/paulk3226/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Add the Environment Variables (`EMAIL_USER`, `EMAIL_PASS`) in the project settings.
5. Click **"Deploy"**. Your portfolio will be live on a global CDN in under 2 minutes!

---

## 🧪 Production Build & Verification

To verify production bundle compilation locally:

```bash
npm run build
npm run start
```
