# EstateNova – Commercial Customization Guide

Welcome to **EstateNova**, a luxury real estate and private estate website template engineered with pure, standalone **HTML5, CSS3, and Vanilla JavaScript**.

This guide is written specifically for commercial template buyers, web designers, and developers. You can customize the entire site—branding, color theme, listings, agents, contact channels, and content—**without needing Node.js, npm, React, or any build compilation tools**.

---

## Table of Contents

1. [Project Structure Overview](#1-project-structure-overview)
2. [How to Run Locally](#2-how-to-run-locally)
3. [Global Branding & Identity (Brand Name, Logo, Tagline)](#3-global-branding--identity)
4. [Contact Information & Flagship Offices](#4-contact-information--flagship-offices)
5. [Social Media Links](#5-social-media-links)
6. [Theme Colors & Visual Accents](#6-theme-colors--visual-accents)
7. [Typography & Fonts](#7-typography--fonts)
8. [Images & Media Organization](#8-images--media-organization)
9. [Managing Properties & Listings](#9-managing-properties--listings)
10. [Managing Private Agents & Advisors](#10-managing-private-agents--advisors)
11. [Managing Services](#11-managing-services)
12. [Managing Testimonials](#12-managing-testimonials)
13. [Managing FAQs](#13-managing-faqs)
14. [Site Navigation](#14-site-navigation)
15. [Search Engine Optimization (SEO) & OpenGraph](#15-search-engine-optimization-seo--opengraph)
16. [Connecting the Contact Form to a Backend](#16-connecting-the-contact-form-to-a-backend)
17. [Integrating Google Maps](#17-integrating-google-maps)
18. [Production Deployment Checklist](#18-production-deployment-checklist)

---

## 1. Project Structure Overview

```text
estatenova-template/
│
├── index.html               # Homepage with featured hero, search, portfolio & curate
├── properties.html          # Full catalog with dynamic search, filter & sort
├── property-details.html    # Detailed estate view with gallery, floorplans & agent tour
├── agents.html              # Private advisors directory & advisory consultation modal
├── about.html               # Firm heritage, leadership, philosophy & metrics
├── services.html            # 6 Bespoke advisory disciplines & interactive FAQs
├── contact.html             # Client inquiry form, flagship offices & map container
├── favorites.html           # Dedicated saved portfolio shortlist
├── 404.html                 # Elegant 404 error page with portfolio recovery links
│
├── css/
│   └── style.css            # Central stylesheet with customizable CSS variables
│
├── js/
│   ├── config.js            # Central configuration (Brand, contact, social, theme, SEO)
│   ├── data.js              # Business content (Properties, agents, services, reviews, FAQs)
│   └── script.js            # Standalone Vanilla JS controller (Favorites, modals, filters)
│
├── images/                  # All local images, logos, and favicons
│   ├── logo.svg             # Vector luxury monogram brand logo
│   └── favicon.svg          # Browser tab icon
│
├── CUSTOMIZATION.md         # This step-by-step customization manual
└── README.md                # Template documentation and commercial overview
```

---

## 2. How to Run Locally

Because EstateNova is 100% static:

### Option A: Direct Browser Opening (No Server Needed)
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Safari, Edge, Firefox).

### Option B: Using VS Code Live Server (Recommended)
1. Open the template folder in [VS Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch at `http://127.0.0.1:5500/index.html` with instant live reload whenever you save a file.

### Option C: Using Any Lightweight HTTP Server
- **Python 3:** Run `python -m http.server 3000` in the template folder.
- **Node npx:** Run `npx serve .` in the template folder.

---

## 3. Global Branding & Identity

You can rebrand the entire website in seconds by editing `/js/config.js`:

```javascript
// js/config.js
const CONFIG = {
  brand: {
    name: "EstateNova",                      // Your agency name
    legalName: "EstateNova Luxury Real Estate LLC",
    logoText: "EN",                          // 2-character monogram badge
    logoImage: "images/logo.svg",            // Path to custom SVG/PNG logo
    favicon: "images/favicon.svg",
    tagline: "Architectural Elegance & Premier Luxury Living",
    shortDescription: "Curating the world's most distinctive residences...",
    foundedYear: 2014,
    licenseNumber: "DRE #01948201",          // Real estate brokerage license
    brokerageName: "EstateNova International Realty",
  },
  // ...
};
```

### Replacing the Brand Logo
1. Put your logo image into the `/images/` folder (e.g. `images/my-logo.png` or `images/logo.svg`).
2. Update the `logoImage` property in `js/config.js`.
3. To change the gold 2-letter monogram in the navigation bar, update `logoText: "EN"` to your initials.

---

## 4. Contact Information & Flagship Offices

Edit your phone number, sales email, and office locations in `js/config.js`:

```javascript
// js/config.js
contact: {
  phone: "+1 (555) 019-2834",
  phoneDisplay: "+1 (555) 019-2834",
  email: "info@example.com",
  salesEmail: "inquiries@example.com",
  address: "100 Luxury Boulevard, Suite 400",
  city: "Beverly Hills",
  state: "CA",
  zipCode: "90210",
  officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM | Sunday: By Appointment",
  googleMapsEmbedUrl: "",
}
```

Updating these fields automatically refreshes all navigation telephone links, footer contact lines, and modal contact links across every page.

---

## 5. Social Media Links

In `js/config.js`, update the URLs for your brokerage's social channels:

```javascript
// js/config.js
socialLinks: {
  instagram: "https://instagram.com/yourhandle",
  linkedin: "https://linkedin.com/company/youragency",
  youtube: "https://youtube.com/@yourchannel",
  twitter: "https://twitter.com/yourhandle",
  facebook: "https://facebook.com/youragency",
}
```

---

## 6. Theme Colors & Visual Accents

EstateNova uses standard CSS Custom Properties (CSS variables) in `css/style.css` and can also be overridden directly in `js/config.js`.

### Method A: Edit CSS Variables (`css/style.css`)
Open `css/style.css` and modify the `:root` block at lines 8–45:

```css
:root {
  /* Brand Accent Colors */
  --color-accent: #b45309;       /* Primary warm gold (buttons, badges) */
  --color-accent-hover: #d97706; /* Button hover state */
  --color-accent-gold: #fbbf24;  /* Monogram & star gold */

  /* Dark Theme Surfaces */
  --color-primary: #0c0a09;      /* Main dark background / Stone 950 */
  --color-secondary: #1c1917;    /* Card & footer dark / Stone 900 */

  /* Light Theme Surfaces */
  --color-bg-main: #fafaf9;      /* Background light / Stone 50 */
  --color-bg-card: #ffffff;      /* White card background */
}
```

### Method B: Edit Theme in `js/config.js`
Alternatively, edit the `theme` object in `js/config.js`:
```javascript
theme: {
  accentColor: "#0f766e",   // Change to Emerald Green
  accentHover: "#115e59",
  primaryDark: "#022c22",
  // ...
}
```

---

## 7. Typography & Fonts

EstateNova uses Google Fonts:
- **Display Brand:** *Cinzel* (`--font-brand`)
- **Headings & Editorial:** *Playfair Display* (`--font-serif`)
- **Body & Metadata:** *Plus Jakarta Sans* (`--font-sans`)

To switch to a different font pair (e.g. *Cormorant Garamond* and *Inter*):
1. In `css/style.css`, update the Google Fonts `@import` URL on line 1.
2. Update the font family declarations:
```css
:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
}
```

---

## 8. Images & Media Organization

Keep all custom photography organized under the `/images/` directory.

### Recommended Dimensions & Formats:
- **Property Hero Images:** `1920 × 1080 px` (WebP or JPG, compressed < 350KB)
- **Property Gallery Cards:** `1200 × 800 px` (WebP or JPG, compressed < 200KB)
- **Agent Headshots:** `800 × 1000 px` (3:4 ratio portrait, compressed < 150KB)
- **Logo / Icons:** Vector `.svg` or transparent 2x `.png` (`400 × 100 px`)

---

## 9. Managing Properties & Listings

All property listings are centralized in `js/data.js` under the `PROPERTIES_DATA` array.

### Adding a New Property
Copy this template into `PROPERTIES_DATA` inside `js/data.js`:

```javascript
{
  id: "prop-7",
  title: "The Sunset Modernist Promontory",
  slug: "the-sunset-modernist-promontory",
  price: 18900000,
  formattedPrice: "$18,900,000",
  status: "for-sale",                // "for-sale" or "for-rent"
  propertyType: "Modernist Villa",   // "Modernist Villa", "Penthouse", "Waterfront Compound", "Alpine Chalet"
  bedrooms: 5,
  bathrooms: 7,
  squareFeet: 8400,
  lotSize: "1.2 Acres",
  yearBuilt: 2024,
  address: "1240 Sunset Plaza Drive",
  city: "Los Angeles",
  state: "CA",
  zipCode: "90069",
  description: "An extraordinary modern architectural statement with floor-to-ceiling glass...",
  heroImage: "https://your-domain.com/images/property-7-hero.jpg",
  images: [
    "images/prop-7-1.jpg",
    "images/prop-7-2.jpg",
    "images/prop-7-3.jpg"
  ],
  features: [
    "Zero-Edge Horizon Pool",
    "Subterranean 4-Vehicle Turntable",
    "Wine Cellar & Tasting Room",
    "Smart Crestron Automation"
  ],
  featured: true,                    // Set to true to show on homepage
  coordinates: { lat: 34.0982, lng: -118.3756 },
  agent: getAgentById("agent-1")     // Assign one of your advisors
}
```

The catalog filtering, search by city, status tabs ("For Sale", "For Rent"), and modal booking forms automatically reflect any additions or changes!

---

## 10. Managing Private Agents & Advisors

The private client advisory roster is defined in `js/data.js` under `AGENTS_DATA`:

```javascript
{
  id: "agent-1",
  name: "Victoria Vance",
  title: "Managing Director, Private Estates",
  position: "Beverly Hills Flagship",
  bio: "With over 18 years specializing in legendary promontory estates...",
  experienceYears: 18,
  propertiesHandled: 48,
  totalSales: "$120M+",
  phone: "+1 (555) 019-2801",
  email: "victoria.vance@example.com",
  image: "images/agent-1.jpg",
  specialties: [
    "Architectural Sanctuaries",
    "Off-Market Whisper Listings",
    "Celebrity & Family Office Advisory"
  ],
  languages: ["English", "French"],
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
}
```

---

## 11. Managing Services

The 6 bespoke advisory disciplines on `services.html` are configured in `js/data.js` under `SERVICES_DATA`. You can modify the titles, descriptions, and feature bullet points directly in that file.

---

## 12. Managing Testimonials

Client endorsements are stored in `js/data.js` under `TESTIMONIALS_DATA`. You can edit client names, roles, quotes, purchase values, and avatar photos.

---

## 13. Managing FAQs

Frequently asked questions on `services.html` are stored in `js/data.js` under `FAQS_DATA`. You can add as many question/answer pairs as desired.

---

## 14. Site Navigation

The main navigation links are defined in `js/data.js` under `NAVIGATION_DATA`.

---

## 15. Search Engine Optimization (SEO) & OpenGraph

1. Edit the `seo` section in `js/config.js`:
```javascript
seo: {
  defaultTitle: "EstateNova | Luxury Real Estate & Private Estates",
  defaultDescription: "Representing premier luxury architectural residences...",
  defaultKeywords: "luxury real estate, architectural homes, Beverly Hills estates",
  ogImage: "images/social-share.jpg",
  author: "Your Agency Name",
}
```
2. Update the `<title>` and `<meta name="description">` tags in the `<head>` of each HTML file to match your live production domain.

---

## 16. Connecting the Contact Form to a Backend

The contact forms on `contact.html` and the modal forms include full front-end validation and animated submission feedback. **No fake backend is used.**

To connect real email delivery or CRM storage, choose one of these popular no-code services:

### Option A: Formspree (Easiest – 2 Minutes)
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form and copy your form endpoint URL (e.g. `https://formspree.io/f/xvobpqza`).
3. In `contact.html`, add the `action` and `method` attributes to `<form id="private-client-contact-form">`:
```html
<form id="private-client-contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: EmailJS (Direct Email without Backend)
1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Add the EmailJS script in `<head>` of `contact.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. In `js/script.js` inside `initContactPage()`, trigger `emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)`.

### Option C: Custom Node.js, PHP, or Python Backend
Point the form `action` attribute to your server endpoint (e.g. `/api/contact.php` or `https://api.yourdomain.com/v1/leads`).

---

## 17. Integrating Google Maps

### Simple Embed Method:
1. Go to [Google Maps](https://www.google.com/maps) and search for your office address.
2. Click **Share** > **Embed a map**.
3. Copy the URL inside `src="..."` (e.g. `https://www.google.com/maps/embed?pb=...`).
4. Paste this URL into `js/config.js`:
```javascript
contact: {
  // ...
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=YOUR_EMBED_STRING",
}
```
The map container on `contact.html` will automatically display the live interactive Google Map!

---

## 18. Production Deployment Checklist

Before launching your website on a live server:

- [ ] **Config:** Updated `js/config.js` with your real agency name, phone, email, and address.
- [ ] **Data:** Replaced sample properties and agents in `js/data.js` with your real inventory and advisors.
- [ ] **Logos & Images:** Placed your brand logo in `/images/` and updated image paths.
- [ ] **Forms:** Connected `contact.html` and tour modal forms to your email or CRM service (e.g. Formspree).
- [ ] **Domain & Maps:** Added your live Google Maps embed URL to `js/config.js`.
- [ ] **SEO:** Checked meta titles, descriptions, and OpenGraph tags in each HTML `<head>`.
- [ ] **Host:** Upload all files directly to any static web host:
  - **Netlify:** Drag & drop the template folder onto Netlify.
  - **Vercel:** Run `vercel deploy` or connect to GitHub.
  - **GitHub Pages:** Push to repository and enable GitHub Pages in Settings.
  - **cPanel / Apache / Nginx:** Upload all files via FTP or File Manager to your `public_html` directory.

---

*EstateNova Commercial Template — Engineered for elegance, speed, and effortless customization.*
