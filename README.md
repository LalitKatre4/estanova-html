# EstateNova – Luxury Real Estate HTML Template

EstateNova is a premium, responsive HTML website template designed for luxury real estate agencies, private client advisors, property developers, boutique brokerages and high-end property businesses.

Built with clean HTML5, CSS3 and vanilla JavaScript, EstateNova provides a modern luxury real estate website with property listings, filtering, property details, agent profiles, services, favorites and contact functionality.

The template is designed to be easy to customize without React, TypeScript, Node.js, npm or a build process.

---

## Features

- Premium luxury real estate design
- Fully responsive desktop, tablet and mobile layouts
- Clean HTML5, CSS3 and vanilla JavaScript
- Property listing catalog
- Property search and filtering
- Property status filtering
- Property price sorting
- Property detail pages
- Favorites / saved properties using browser localStorage
- Agent directory
- Agent inquiry functionality
- Services page
- About page
- Contact page
- Responsive navigation
- Interactive modals
- Form validation and frontend status messages
- Centralized website configuration
- Centralized property and business data
- CSS custom properties for easy theme customization
- Organized image assets
- README documentation
- CUSTOMIZATION.md documentation
- No build process required

---

## Included Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Luxury real estate homepage with hero section, featured properties, services, testimonials and CTA sections. |
| Properties | `properties.html` | Property catalog with search, filtering, sorting and property cards. |
| Property Details | `property-details.html` | Detailed property information, gallery, specifications, amenities and inquiry functionality. |
| Private Agents | `agents.html` | Agent directory with advisor information and inquiry functionality. |
| About | `about.html` | Company information, heritage, leadership and business information. |
| Services | `services.html` | Real estate services, advisory information and FAQs. |
| Contact | `contact.html` | Contact form, office information and map section. |
| Favorites | `favorites.html` | Saved property / shortlist page using browser localStorage. |
| 404 | `404.html` | Custom 404 error page. |

---

## Technology

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- CSS Custom Properties
- Inline SVG icons
- Responsive Web Design

No React, Vue, Angular, Bootstrap, jQuery, Vite or other JavaScript frameworks are required.

---

## Folder Structure

```text
estatenova-template/
│
├── index.html
├── properties.html
├── property-details.html
├── agents.html
├── about.html
├── services.html
├── contact.html
├── favorites.html
├── 404.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── config.js
│   ├── data.js
│   └── script.js
│
├── images/
│   ├── logo.svg
│   ├── favicon.svg
│   ├── properties/
│   ├── agents/
│   └── other/
│
├── CUSTOMIZATION.md
└── README.md

The images folder contains the image assets required by the template. Property and agent images are stored locally so the template can be used independently without relying on remote image URLs.

Getting Started

EstateNova does not require a build process.

Option 1 – Open Directly

Open index.html in a modern web browser.

For the best development experience, a local HTTP server is recommended.

Option 2 – Visual Studio Code
Extract the ZIP file.
Open the extracted folder in Visual Studio Code.
Install the Live Server extension if necessary.
Right-click index.html.
Select Open with Live Server.

The website will open in your browser.

Customization

EstateNova uses centralized configuration and data files to make common changes easier.

1. Website Configuration

Open:

js/config.js

This file contains global website information such as:

Brand name
Logo information
Tagline
Phone number
Email address
Business address
Business hours
Social media links
Website URL
SEO information
Google Maps information

Example:

const CONFIG = {
  brand: {
    name: "Your Brand Name",
    logoText: "YB",
    tagline: "Your Luxury Real Estate Partner"
  },

  contact: {
    phone: "+1 (555) 123-4567",
    email: "contact@yourdomain.com",
    address: "Your Street Address, City, State"
  }
};

Replace the example information with your own business information.

2. Properties and Website Content

Open:

js/data.js

This file contains centralized website data including:

Properties
Property information
Agents
Services
Testimonials
FAQs
Other reusable content

You can edit existing entries or add your own content.

3. Images

All website images are organized inside:

images/

Property images are located in:

images/properties/

Agent images are located in:

images/agents/

Replace the provided images with your own images while keeping the filenames and paths consistent, or update the corresponding paths in js/data.js.

For production websites, use images that you own or have appropriate commercial usage rights for.

4. Colors and Theme

Open:

css/style.css

The main theme values are defined using CSS custom properties.

Example:

:root {
  --color-accent: #b45309;
  --color-accent-hover: #d97706;
}

You can customize:

Primary colors
Accent colors
Background colors
Text colors
Border colors
Typography
Border radius
Shadows

The existing values reproduce the included EstateNova design.

5. Fonts

EstateNova uses web typography defined in the stylesheet.

You can replace the font families in:

css/style.css

with your preferred fonts.

If using externally hosted fonts, review the provider's current licensing and usage terms before commercial deployment.

6. Navigation

Navigation links are located in the HTML files and can be updated to match your website structure.

When adding or removing pages, update the relevant navigation links across the template.

7. SEO Information

Default SEO information can be updated through:

js/config.js

You can also update page-specific:

<title>
Meta descriptions
Open Graph information
Page headings
Image alt text

inside the relevant HTML files.

Contact Form

EstateNova includes frontend contact and inquiry forms with validation and interactive status messages.

The template does not include a backend, database or email server.

The forms must be connected to a service or backend before they can receive real customer submissions.

Possible options include:

Formspree
EmailJS
Your own PHP backend
Your own Node.js backend
Your own Python backend
Another form/API service

Example Formspree integration:

<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>

Replace the example endpoint with your own form endpoint.

Google Maps

The contact page contains a map section for displaying the business location.

Update the relevant configuration or embed information with your own Google Maps location.

Before publishing, replace the demo location and business information with your actual information.

Favorites Functionality

The Favorites page uses browser localStorage.

Visitors can save properties from the property catalog and review their saved properties on:

favorites.html

This functionality is client-side only.

No database or user account system is included.

Property Filtering

The Properties page includes client-side functionality for:

Keyword search
Property status filtering
Price sorting
Property card rendering
Property detail navigation

The functionality is handled by the JavaScript files included in the template.

Browser Support

EstateNova is designed for modern browsers including:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari

For the best experience, use a current version of a modern browser.

Requirements
Modern web browser
Code editor such as Visual Studio Code
Basic knowledge of HTML, CSS and JavaScript for customization

No Node.js, npm, database or server-side framework is required for the template itself.

Production Checklist

Before publishing your customized website:

 Replace the demo brand name
 Update contact information
 Update phone number and email
 Update social media links
 Replace demo properties
 Replace demo agent information
 Replace demo services and testimonials
 Replace demo images with properly licensed images
 Update website colors and typography if required
 Update SEO information
 Update Google Maps location
 Connect the contact form to your preferred service or backend
 Test all navigation links
 Test property filtering
 Test property details
 Test favorites functionality
 Test contact and inquiry forms
 Test the website on desktop and mobile devices
 Check all images and assets
 Upload the customized website to your hosting provider
Important Information

EstateNova is provided as a source-code website template.

The template includes frontend functionality only. Backend services, databases, authentication, email delivery and other server-side functionality are not included unless specifically stated.

Demo content, property information, business information, testimonials, images and other placeholder content should be replaced with your own content before production use.

You are responsible for ensuring that all images, fonts, logos and other third-party assets used in your final website have appropriate usage rights.

Documentation

Additional customization instructions are available in:

CUSTOMIZATION.md

The customization guide provides more detailed instructions for editing the template's configuration, content, images, styling, forms, maps and other common settings.

Support

For customization or development questions, refer to the included documentation and the comments within the source files.

Thank you for choosing EstateNova.