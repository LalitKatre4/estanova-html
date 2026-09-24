/**
 * ==============================================================================
 * EstateNova – Content & Business Data (js/data.js)
 * ==============================================================================
 * 
 * Commercial Template Buyers:
 * This file centralizes all business content data:
 * - NAVIGATION_DATA : Desktop and mobile site navigation
 * - SERVICES_DATA   : Bespoke advisory disciplines & client services
 * - TESTIMONIALS_DATA: Client endorsements & transaction reviews
 * - FAQS_DATA       : Frequently asked questions & answers
 * - STATS_DATA      : Highlighted business metrics & track record
 * - AGENTS_DATA     : Private advisors, licenses, volume & contact details
 * - PROPERTIES_DATA : Luxury property listings, specifications, and galleries
 * 
 * Use this file to add, edit, or remove listings, team members, services, and reviews.
 */

// ------------------------------------------------------------------------------
// NAVIGATION DATA
// ------------------------------------------------------------------------------
const NAVIGATION_DATA = [
  { label: "Home", href: "index.html" },
  { label: "Properties", href: "properties.html" },
  { label: "Services", href: "services.html" },
  { label: "Private Agents", href: "agents.html" },
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contact.html" },
  { label: "Saved Shortlist", href: "favorites.html", isShortlist: true },
];

// ------------------------------------------------------------------------------
// BUSINESS STATISTICS
// ------------------------------------------------------------------------------
const STATS_DATA = [
  { label: "Career Volume Transacted", value: "$850M+", description: "In closed luxury residential & estate acquisitions" },
  { label: "Curated Residences", value: "120+", description: "Landmark architectural promontories and penthouses" },
  { label: "Prime Global Destinations", value: "45+", description: "Flagship metropolitan, coastal and alpine markets" },
  { label: "Off-Market Discretion Rating", value: "99.4%", description: "Audited client privacy and fiduciary confidentiality" }
];

// ------------------------------------------------------------------------------
// BESPOKE ADVISORY SERVICES
// ------------------------------------------------------------------------------
const SERVICES_DATA = [
  {
    id: "private-whisper",
    title: "Private Placement Whisper Desk",
    shortDesc: "Discreet acquisition and off-market disposition of trophy estates shielded from public listing syndication.",
    fullDesc: "Over 40% of our transaction volume never enters the public Multiple Listing Service. Our Whisper Desk connects pre-cleared buyers directly with legacy property owners under strict bilateral non-disclosure covenants.",
    icon: "Shield",
    features: [
      "Bilateral non-disclosure protection",
      "Vetted high-net-worth syndicate",
      "Zero digital footprint marketing"
    ],
    ctaLink: "contact.html?service=whisper",
    ctaText: "Inquire On Desk"
  },
  {
    id: "generational-acquisition",
    title: "Generational Estate Acquisition",
    shortDesc: "End-to-end representation for multi-structure compounds, historic acreage, and architectural monuments.",
    fullDesc: "Representing purchasers in securing trophy holdings that withstand macroeconomic volatility. We handle structural analysis, view-corridor easements, and long-range municipal zoning verification.",
    icon: "Building",
    features: [
      "Comprehensive structural underwriting",
      "Title, water & riparian right reviews",
      "Off-market seller negotiation"
    ],
    ctaLink: "contact.html?service=acquisition",
    ctaText: "Inquire On Desk"
  },
  {
    id: "sovereign-structuring",
    title: "Sovereign Structuring & Entity Advisory",
    shortDesc: "Collaborative advisory with private bank fiduciaries and legal counsel to structure anonymous holding mechanisms.",
    fullDesc: "Collaborative advisory with leading private bank fiduciaries and legal counsel to structure anonymous, tax-optimized holding mechanisms for domestic and foreign principals.",
    icon: "FileCheck",
    features: [
      "FIRPTA & cross-border tax compliance",
      "Delaware & Wyoming blind LLC structuring",
      "Sovereign wealth and trust advisory"
    ],
    ctaLink: "contact.html?service=structuring",
    ctaText: "Inquire On Desk"
  },
  {
    id: "architectural-provenance",
    title: "Architectural Provenance & Preservation",
    shortDesc: "Historical archival research, blueprint verification, landmark commission compliance, and structural integrity stewardship.",
    fullDesc: "Authenticating historical pedigree and construction lineage for mid-century moderns, classic estates, and museum-grade masterworks.",
    icon: "Archive",
    features: [
      "Provenance & museum dossier compilation",
      "Historical Mills Act tax credit guidance",
      "Preservation architect vetting"
    ],
    ctaLink: "contact.html?service=provenance",
    ctaText: "Inquire On Desk"
  },
  {
    id: "luxury-leasing",
    title: "Luxury Leasing & Sovereign Asset Care",
    shortDesc: "High-security long-term and seasonal leasing stewardship for diplomatic delegations, entertainment leaders, and sovereign principals.",
    fullDesc: "Providing turnkey concierge-managed estates for seasonal retreats, film productions, and diplomatic relocations across our flagship markets.",
    icon: "Key",
    features: [
      "Thorough principal background vetting",
      "Dedicated estate manager integration",
      "Pre-tenancy photographic inventories"
    ],
    ctaLink: "contact.html?service=leasing",
    ctaText: "Inquire On Desk"
  },
  {
    id: "aviation-concierge",
    title: "White-Glove Aviation & Concierge",
    shortDesc: "Direct private jet charter landings at regional airfields, yacht berth reservations, fine art transport insurance, and security personnel.",
    fullDesc: "Synchronizing international property viewings with private aviation charters, maritime berthing, armored ground logistics, and fine art handling.",
    icon: "Compass",
    features: [
      "Seamless airport tarmac transfers",
      "Art courier security protocols",
      "Immediate turn-key residence staging"
    ],
    ctaLink: "contact.html?service=concierge",
    ctaText: "Inquire On Desk"
  }
];

// ------------------------------------------------------------------------------
// CLIENT TESTIMONIALS
// ------------------------------------------------------------------------------
const TESTIMONIALS_DATA = [
  {
    id: "t-1",
    clientName: "Julian & Vivienne Sterling",
    role: "Founders, Sterling Capital Partners",
    location: "Beverly Hills, CA",
    quote: "EstateNova handled our off-market purchase of the Bel-Air architectural villa with utmost precision. Their discretion, speed, and architectural appreciation set the benchmark.",
    rating: 5,
    avatar: "images/agents/elena-rostova.jpg",
    propertyPurchased: "The Ridgeview Residence, $18.5M"
  },
  {
    id: "t-2",
    clientName: "Dr. Marcus Vance",
    role: "Tech Executive & Philanthropist",
    location: "Miami Beach, FL",
    quote: "Selling a $24M waterfront compound demands an agency that commands genuine respect among global buyers. EstateNova closed the sale in 28 days at 98% of ask.",
    rating: 5,
    avatar: "images/agents/julian-montgomery.jpg",
    propertyPurchased: "Palmetto Point Waterfront, $23.8M"
  },
  {
    id: "t-3",
    clientName: "Elena Rostova",
    role: "Art Collector & Industrialist",
    location: "Manhattan, NY",
    quote: "Finding a gallery-grade penthouse with 14-foot ceilings and private elevator access in Tribeca seemed impossible until the EstateNova team presented a private whisper listing.",
    rating: 5,
    avatar: "images/agents/elena-rostova.jpg",
    propertyPurchased: "Tribeca Sky Gallery Duplex, $14.2M"
  }
];

// ------------------------------------------------------------------------------
// FREQUENTLY ASKED QUESTIONS (FAQS)
// ------------------------------------------------------------------------------
const FAQS_DATA = [
  {
    id: "faq-1",
    question: "How do you safeguard client privacy during an off-market disposition?",
    answer: "We mandate vetted bilateral non-disclosure agreements prior to distributing any property address, interior photography, or owner details. Property showings are conducted with private security escorts, and no photography is permitted during private viewings."
  },
  {
    id: "faq-2",
    question: "Can you facilitate acquisitions through blind trusts or offshore entities?",
    answer: "Yes. Over 60% of our high-value transactions utilize specialized holding vehicles, including Delaware LLCs, Wyoming Statutory Trusts, and international holding companies. Our senior advisors collaborate directly with your family office legal counsel and private bankers."
  },
  {
    id: "faq-3",
    question: "What is the typical timeframe for matching an off-market property?",
    answer: "Because of our pre-vetted buyer syndicate, our historical average from private whisper listing to signed contract is 18 days for properties priced between $15M and $45M."
  },
  {
    id: "faq-4",
    question: "Do you represent clients in cross-border acquisitions outside the United States?",
    answer: "Yes. Through our international syndicate partners, we co-advise on acquisitions in London, Zurich, Lake Como, the French Riviera, and Dubai, offering unified fiduciary oversight across your entire global residential portfolio."
  }
];

// ------------------------------------------------------------------------------
// PRIVATE AGENTS & ADVISORS ROSTER
// ------------------------------------------------------------------------------
const AGENTS_DATA = [
  {
    id: "agent-1",
    name: "Victoria Vance",
    title: "Managing Director, Private Estates",
    position: "Beverly Hills & Montecito Flagship",
    bio: "With over 18 years specializing in legendary promontory estates, mid-century architectural icons, and off-market confidential sales, Victoria has consistently ranked among the region's premier luxury advisors.",
    experienceYears: 18,
    propertiesHandled: 48,
    totalSales: "$120M+",
    phone: "+1 (555) 019-2801",
    email: "victoria.vance@example.com",
    image: "images/agents/victoria-vance.jpg",
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
  },
  {
    id: "agent-2",
    name: "Julian Montgomery",
    title: "Senior Vice President, Manhattan Luxury",
    position: "New York Flagship",
    bio: "Julian provides white-glove brokerage services across Manhattan's most historic co-ops, Tribeca cast-iron lofts, and Central Park luxury towers. A trusted confidant to private clients, founders, and collectors.",
    experienceYears: 15,
    propertiesHandled: 36,
    totalSales: "$95M+",
    phone: "+1 (555) 019-2802",
    email: "julian.montgomery@example.com",
    image: "images/agents/julian-montgomery.jpg",
    specialties: [
      "Trophy Penthouses",
      "Cast-Iron Historic Lofts",
      "Commercial Real Estate Syndication"
    ],
    languages: ["English", "German"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "agent-3",
    name: "Camilla Valente",
    title: "Partner, Waterfront & Island Division",
    position: "Miami Beach & Palm Beach",
    bio: "A native of South Florida and licensed maritime yacht master, Camilla combines deep oceanographic insight with razor-sharp luxury market acumen across coastal and waterfront sanctuaries.",
    experienceYears: 14,
    propertiesHandled: 42,
    totalSales: "$110M+",
    phone: "+1 (555) 019-2803",
    email: "camilla.valente@example.com",
    image: "images/agents/camilla-valente.jpg",
    specialties: [
      "Deepwater Mega-Yacht Estates",
      "Venetian Islands Compounds",
      "Private Island Acquisitions"
    ],
    languages: ["English", "Spanish", "Italian"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "agent-4",
    name: "Harrison Brooks",
    title: "Principal, Alpine & Equestrian Estates",
    position: "Aspen & Vail Mountain Desks",
    bio: "Specializing in legacy ranches, ski-in / ski-out chalets, and equestrian sanctuaries throughout the Colorado Rockies. Harrison's unhurried, data-rich approach is revered by private investors.",
    experienceYears: 16,
    propertiesHandled: 29,
    totalSales: "$88M+",
    phone: "+1 (555) 019-2804",
    email: "harrison.brooks@example.com",
    image: "images/agents/harrison-brooks.jpg",
    specialties: [
      "Ski-in / Ski-out Chalets",
      "Equestrian Acreage",
      "Conservation Easement Properties"
    ],
    languages: ["English"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "agent-5",
    name: "Elena Rostova",
    title: "Senior Partner, European Advisory Desk",
    position: "Geneva, London & New York Liaison",
    bio: "Elena navigates cross-border acquisitions and capital allocations for European fiduciaries and international collectors looking to acquire landmark US trophy real estate.",
    experienceYears: 20,
    propertiesHandled: 54,
    totalSales: "$145M+",
    phone: "+1 (555) 019-2805",
    email: "elena.rostova@example.com",
    image: "images/agents/elena-rostova.jpg",
    specialties: [
      "Cross-Border Sovereign Advisory",
      "Historic Architectural Pedigree",
      "Private Art Gallery Integration"
    ],
    languages: ["English", "Russian", "French"],
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "agent-6",
    name: "Sterling Chen",
    title: "Director, Modernist & Sustainable Architecture",
    position: "Pacific Palisades & Malibu",
    bio: "Trained at MIT School of Architecture, Sterling possesses rare technical insight into high-performance zero-carbon engineering, cantilevered hillside construction, and modernist minimalism.",
    experienceYears: 11,
    propertiesHandled: 27,
    totalSales: "$72M+",
    phone: "+1 (555) 019-2806",
    email: "sterling.chen@example.com",
    image: "images/agents/sterling-chen.jpg",
    specialties: [
      "LEED Platinum Compounds",
      "Cantilevered Coastal Engineering",
      "Biophilic Design Residences"
    ],
    languages: ["English", "Mandarin"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

// Helper to find an agent by ID
function getAgentById(id) {
  return AGENTS_DATA.find(a => a.id === id) || AGENTS_DATA[0];
}

// ------------------------------------------------------------------------------
// LUXURY PROPERTY LISTINGS CATALOG
// ------------------------------------------------------------------------------
const PROPERTIES_DATA = [
  {
    id: "prop-1",
    title: "The Bellagio Architectural Promontory",
    slug: "the-bellagio-architectural-promontory",
    price: 28500000,
    formattedPrice: "$28,500,000",
    status: "for-sale",
    propertyType: "Modernist Villa",
    bedrooms: 6,
    bathrooms: 8,
    squareFeet: 11400,
    lotSize: "1.4 Acres",
    yearBuilt: 2024,
    address: "840 Bellagio Road",
    city: "Bel-Air",
    state: "CA",
    zipCode: "90077",
    description: "Meticulously crafted residence by renowned modernist architect. Features seamless indoor-outdoor water pavilions, floor-to-ceiling motorized Swiss glass walls, a 75-foot cantilevered infinity pool overlooking the city to ocean panorama, and a subterranean 6-vehicle gallery with turntable.",
    heroImage: "images/properties/property-01.jpg",
    images: [
      "images/properties/property-01.jpg",
      "images/properties/property-02.jpg",
      "images/properties/property-03.jpg",
      "images/properties/property-04.jpg",
      "images/properties/property-05.jpg"
    ],
    features: [
      "Zero-Edge Horizon Pool",
      "Subterranean 6-Vehicle Gallery",
      "Temperature-Controlled Wine Cellar",
      "Private Guard House & Dual Gates",
      "Dornbracht & Boffi Kitchen",
      "Integrated Crestron Automation"
    ],
    featured: true,
    coordinates: { lat: 34.0837, lng: -118.4468 },
    agent: getAgentById("agent-1")
  },
  {
    id: "prop-2",
    title: "The Tribeca Sky Duplex Gallery",
    slug: "the-tribeca-sky-duplex-gallery",
    price: 19800000,
    formattedPrice: "$19,800,000",
    status: "for-sale",
    propertyType: "Penthouse",
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 7200,
    lotSize: "Private Rooftop (1,800 sq ft)",
    yearBuilt: 2023,
    address: "68 Franklin Street, PH-B",
    city: "New York",
    state: "NY",
    zipCode: "10013",
    description: "An extraordinary duplex penthouse situated atop one of Tribeca's most celebrated historic cast-iron buildings. Direct elevator opening into a 40-foot double-height salon with restored timber ceilings, steel sash fenestration, and a private landscaped rooftop terrace featuring outdoor kitchen and heated soaking spa.",
    heroImage: "images/properties/property-06.jpg",
    images: [
      "images/properties/property-06.jpg",
      "images/properties/property-07.jpg",
      "images/properties/property-08.jpg",
      "images/properties/property-09.jpg"
    ],
    features: [
      "Direct Keyed Elevator Access",
      "Private Landscaped Roof Terrace",
      "Dual Wood-Burning Fireplaces",
      "Calacatta Vagli Marble Baths",
      "24-Hour Concierge & Doorman",
      "Private Deeded Storage Suite"
    ],
    featured: true,
    coordinates: { lat: 40.7183, lng: -74.0048 },
    agent: getAgentById("agent-2")
  },
  {
    id: "prop-3",
    title: "Villa Di Palma Venetian Waterfront",
    slug: "villa-di-palma-venetian-waterfront",
    price: 34000000,
    formattedPrice: "$34,000,000",
    status: "for-sale",
    propertyType: "Waterfront Compound",
    bedrooms: 7,
    bathrooms: 9,
    squareFeet: 12800,
    lotSize: "0.85 Acres / 100ft Prime Deepwater",
    yearBuilt: 2024,
    address: "240 San Marino Drive",
    city: "Miami Beach",
    state: "FL",
    zipCode: "33139",
    description: "Positioned on the prestigious Venetian Islands with western open-bay sunset orientation. Boasting 100 feet of reinforced seawall capable of berthing a 130-foot superyacht. Highlights include Italian travertine courtyards, reflection pools, full wellness spa, and separate 2-bedroom guest pavilion.",
    heroImage: "images/properties/property-10.jpg",
    images: [
      "images/properties/property-10.jpg",
      "images/properties/property-11.jpg",
      "images/properties/property-12.jpg",
      "images/properties/property-13.jpg"
    ],
    features: [
      "100ft Deepwater Dock with Yacht Lift",
      "Wellness Suite with Steam & Sauna",
      "Bespoke Poliform Master Closets",
      "Full Security Perimeter & Cameras",
      "Separate Two-Bedroom Guest Villa",
      "Sub-Zero & Wolf Commercial Scullery"
    ],
    featured: true,
    coordinates: { lat: 25.7907, lng: -80.1585 },
    agent: getAgentById("agent-3")
  },
  {
    id: "prop-4",
    title: "The Red Mountain Alpine Sanctuary",
    slug: "the-red-mountain-alpine-sanctuary",
    price: 24500000,
    formattedPrice: "$24,500,000",
    status: "for-sale",
    propertyType: "Alpine Chalet",
    bedrooms: 5,
    bathrooms: 7,
    squareFeet: 9100,
    lotSize: "2.8 Private Forested Acres",
    yearBuilt: 2022,
    address: "710 Willoughby Way",
    city: "Aspen",
    state: "CO",
    zipCode: "81611",
    description: "Nestled on Aspen's coveted Red Mountain with unencumbered views of Ajax Mountain and Independence Pass. Architectural masterpiece featuring hand-hewn Montana timbers, Colorado fieldstone, triple-pane heated glass curtain walls, and a heated motor court.",
    heroImage: "images/properties/property-14.jpg",
    images: [
      "images/properties/property-14.jpg",
      "images/properties/property-02.jpg",
      "images/properties/property-05.jpg"
    ],
    features: [
      "Heated Driveway & Ski Locker Room",
      "Panoramic Outdoor Fire Lounge",
      "Oxygen-Enriched Master Suite",
      "Indoor Lap Pool & Cold Plunge",
      "Commercial Crestron Audio/Visual",
      "Direct Backcountry Trail Access"
    ],
    featured: false,
    coordinates: { lat: 39.2012, lng: -106.8285 },
    agent: getAgentById("agent-4")
  },
  {
    id: "prop-5",
    title: "Carbon Beach Contemporary Promontory",
    slug: "carbon-beach-contemporary-promontory",
    price: 45000,
    formattedPrice: "$45,000 / mo",
    status: "for-rent",
    propertyType: "Coastal Modern",
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 5600,
    lotSize: "60ft Beach Frontage",
    yearBuilt: 2023,
    address: "22108 Pacific Coast Highway",
    city: "Malibu",
    state: "CA",
    zipCode: "90265",
    description: "Located on Malibu's ultra-exclusive 'Billionaire's Beach'. This newly completed residence opens entirely to an oceanfront teak deck hovering above the Pacific. Complete with private stairs to the sand, sunset cocktail terrace, and automated louvers.",
    heroImage: "images/properties/property-15.jpg",
    images: [
      "images/properties/property-15.jpg",
      "images/properties/property-03.jpg",
      "images/properties/property-04.jpg"
    ],
    features: [
      "Direct Private Beach Stairway",
      "Expansive Ipe Oceanfront Deck",
      "Automated Solar Louvers",
      "Miele & Gaggenau Chef's Kitchen",
      "Outdoor Heated Shower & Surf Locker",
      "Fully Furnished Turnkey Interiors"
    ],
    featured: false,
    coordinates: { lat: 34.0375, lng: -118.6653 },
    agent: getAgentById("agent-1")
  },
  {
    id: "prop-6",
    title: "The Mandarin Oriental Sky Residence",
    slug: "the-mandarin-oriental-sky-residence",
    price: 65000,
    formattedPrice: "$65,000 / mo",
    status: "for-rent",
    propertyType: "Hotel Residence",
    bedrooms: 3,
    bathrooms: 4,
    squareFeet: 4800,
    lotSize: "Private Balcony",
    yearBuilt: 2022,
    address: "80 Columbus Circle, Residence 64A",
    city: "New York",
    state: "NY",
    zipCode: "10023",
    description: "Corner tower residence hovering 64 stories above Central Park and the Hudson River. Residents enjoy Michelin-starred hotel room service, priority access to the world-renowned spa, 75-foot indoor pool, and personal residential butler service.",
    heroImage: "images/properties/property-07.jpg",
    images: [
      "images/properties/property-07.jpg",
      "images/properties/property-08.jpg",
      "images/properties/property-09.jpg"
    ],
    features: [
      "Unobstructed Central Park Views",
      "Full Mandarin Oriental Hotel Amenities",
      "Private Valet & Concierge",
      "Dedicated Butler Service Included",
      "State-of-the-Art Spa & Fitness Access",
      "Custom Christian Liaigre Furnishings"
    ],
    featured: false,
    coordinates: { lat: 40.7685, lng: -73.9818 },
    agent: getAgentById("agent-2")
  }
];

// Helper to find a property by ID or Slug
function getPropertyById(id) {
  return PROPERTIES_DATA.find(p => p.id === id || p.slug === id) || PROPERTIES_DATA[0];
}

// Attach all data structures to window
window.NAVIGATION_DATA = NAVIGATION_DATA;
window.STATS_DATA = STATS_DATA;
window.SERVICES_DATA = SERVICES_DATA;
window.TESTIMONIALS_DATA = TESTIMONIALS_DATA;
window.FAQS_DATA = FAQS_DATA;
window.AGENTS_DATA = AGENTS_DATA;
window.PROPERTIES_DATA = PROPERTIES_DATA;
window.getPropertyById = getPropertyById;
window.getAgentById = getAgentById;
