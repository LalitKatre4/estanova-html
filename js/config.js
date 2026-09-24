/**
 * ==============================================================================
 * EstateNova – Global Site Configuration (js/config.js)
 * ==============================================================================
 * 
 * Commercial Template Buyers:
 * This is your primary configuration file. Edit the values below to instantly
 * rebrand the website, update phone numbers, office addresses, emails, social links,
 * and visual theme accents across ALL pages.
 * 
 * You do NOT need any build step, npm, or framework to customize this template.
 * Simply edit this file and reload your browser!
 */

const CONFIG = {
  // ----------------------------------------------------------------------------
  // BRAND & BROKERAGE IDENTITY
  // ----------------------------------------------------------------------------
  brand: {
    name: "EstateNova",
    legalName: "EstateNova Luxury Real Estate LLC",
    logoText: "EN",                         // 2-character monogram displayed in logo badge
    logoImage: "images/logo.svg",           // Path to your custom image logo (optional)
    favicon: "images/favicon.svg",
    tagline: "Architectural Elegance & Premier Luxury Living",
    shortDescription: "Curating the world's most distinctive residences, coastal estates, and modern architectural sanctuaries for discerning clientele.",
    foundedYear: 2014,
    licenseNumber: "DRE #01948201",         // Real estate brokerage license number
    brokerageName: "EstateNova Private Client Advisory",
  },

  // ----------------------------------------------------------------------------
  // PRIMARY CONTACT DETAILS
  // ----------------------------------------------------------------------------
  contact: {
    phone: "+1 (555) 019-2834",
    phoneDisplay: "+1 (555) 019-2834",
    directPhone: "+1 (555) 019-2835",
    email: "info@example.com",
    salesEmail: "inquiries@example.com",
    pressEmail: "press@example.com",
    address: "100 Luxury Boulevard, Suite 400",
    city: "Beverly Hills",
    state: "CA",
    zipCode: "90210",
    country: "United States",
    officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM | Sunday: By Appointment",
    
    // MAP INTEGRATION:
    // To display a live interactive Google Map on contact.html, paste your embed iframe URL here:
    // Example: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305..."
    googleMapsEmbedUrl: "",
    // Optional Google Maps or Mapbox API Key (if using dynamic JavaScript maps API)
    googleMapsApiKey: "",
  },

  // ----------------------------------------------------------------------------
  // REGIONAL FLAGSHIP DESKS / SALONS
  // ----------------------------------------------------------------------------
  offices: [
    {
      city: "Beverly Hills",
      tagline: "Global Headquarters",
      address: "100 Luxury Boulevard, Suite 400",
      cityStateZip: "Beverly Hills, CA 90210",
      phone: "+1 (555) 019-2834",
      email: "beverlyhills@example.com",
      hours: "Mon – Sat: 9am – 6pm",
      coordinates: "34.0736° N, 118.4004° W",
      isHeadquarters: true,
    },
    {
      city: "Manhattan",
      tagline: "Metropolis Salon",
      address: "740 Madison Avenue, Floor 14",
      cityStateZip: "New York, NY 10065",
      phone: "+1 (555) 019-2835",
      email: "manhattan@example.com",
      hours: "Mon – Fri: 9am – 6pm",
      coordinates: "40.7661° N, 73.9691° W",
      isHeadquarters: false,
    },
    {
      city: "Miami Beach",
      tagline: "Maritime & Island Desk",
      address: "1000 Venetian Way, Suite 800",
      cityStateZip: "Miami Beach, FL 33139",
      phone: "+1 (555) 019-2836",
      email: "miami@example.com",
      hours: "Mon – Sat: 9am – 6pm",
      coordinates: "25.7907° N, 80.1770° W",
      isHeadquarters: false,
    },
    {
      city: "Aspen",
      tagline: "Alpine & Mountain Desk",
      address: "420 South Galena Street, Suite 200",
      cityStateZip: "Aspen, CO 81611",
      phone: "+1 (555) 019-2837",
      email: "aspen@example.com",
      hours: "Daily: 9am – 5pm",
      coordinates: "39.1911° N, 106.8175° W",
      isHeadquarters: false,
    }
  ],

  // ----------------------------------------------------------------------------
  // SOCIAL MEDIA CHANNELS
  // ----------------------------------------------------------------------------
  socialLinks: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },

  // ----------------------------------------------------------------------------
  // WEBSITE URL & CANONICAL HOST
  // ----------------------------------------------------------------------------
  websiteUrl: "https://estatenova.example.com",

  // ----------------------------------------------------------------------------
  // SEARCH ENGINE OPTIMIZATION (SEO) DEFAULTS
  // ----------------------------------------------------------------------------
  seo: {
    defaultTitle: "EstateNova | Luxury Real Estate & Private Architectural Estates",
    titleTemplate: "%s | EstateNova Luxury Real Estate",
    defaultDescription: "Representing premier luxury architectural residences, modern penthouses, and private estates across the world's most coveted destinations.",
    defaultKeywords: "luxury real estate, architectural homes, modern villas, private estates, penthouses, Beverly Hills luxury homes, Manhattan penthouses",
    ogImage: "images/properties/property-01.jpg",
    author: "EstateNova Luxury Real Estate LLC",
  },

  // ----------------------------------------------------------------------------
  // THEME & COLOR CUSTOMIZATION
  // ----------------------------------------------------------------------------
  // Modify these hex codes to adjust the theme accent colors across the template.
  // The JavaScript controller automatically syncs these values with CSS variables.
  theme: {
    accentColor: "#b45309",        // Primary warm gold / amber accent (buttons, badges)
    accentHover: "#d97706",        // Accent hover state
    accentGold: "#fbbf24",         // Monogram & badge bright gold
    primaryDark: "#0c0a09",        // Obsidian dark background / stone 950
    secondaryDark: "#1c1917",      // Dark surface / stone 900
    bgLight: "#fafaf9",            // Light background / stone 50
    textDark: "#1c1917",           // Dark text
    textLight: "#f5f5f4",          // Light text
    fontBrand: "'Cinzel', serif",
    fontSerif: "'Playfair Display', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', -apple-system, sans-serif",
  },

  // ----------------------------------------------------------------------------
  // FOOTER CONTENT
  // ----------------------------------------------------------------------------
  footer: {
    newsletterTitle: "The Monograph Journal",
    newsletterSubtitle: "Receive quarterly market intelligence and prime off-market listings reserved for accredited buyers.",
    copyrightText: "© 2026 EstateNova Luxury Real Estate LLC. All rights reserved.",
    complianceNotice: "Equal Housing Opportunity. All material presented herein is intended for information purposes only.",
  }
};

// Make CONFIG accessible globally in the browser
window.CONFIG = CONFIG;

// Backward-compatibility alias so any code looking for SITE_CONFIG continues to function seamlessly
window.SITE_CONFIG = CONFIG;
