/**
 * This file contains shared constants used throughout the application.
 * Centralizing these values makes the code easier to maintain and update.
 */

// Base URL for Cloudinary images. Used by the LazyImage component.
export const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/demo/image/upload";

// Navigation links for the header and footer menus.
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Contact', path: '/contact' },
];

// A collection of image public IDs or full URLs used across the site.
export const IMAGES = {
  hero: 'c_scale,w_1800,f_auto,q_auto/solar-panels-on-roof',
  logo: 'c_scale,w_200,f_auto,q_auto/logos/logo-white',
  serviceResidential: 'https://res.cloudinary.com/de0cllasz/image/upload/v1762879169/homeguide-professional-solar-panel-cleaner-brushing-panels-on-roof_lusldm.jpg',
  serviceCommercial: 'https://res.cloudinary.com/de0cllasz/image/upload/v1762879170/Commercial-Solar-Panel-Cleaning-Services-20-scaled_bi1w0v.webp',
  before1: 'https://res.cloudinary.com/de0cllasz/image/upload/v1762879074/images_acjilj.jpg',
  after1: 'https://res.cloudinary.com/de0cllasz/image/upload/v1762881039/maxresdefault_rmbllr.jpg',
  before2: 'https://res.cloudinary.com/de0cllasz/image/upload/v1762879074/images_4_xticin.jpg',
  after2: 'https://res.cloudinary.com/de0cllasz/image/upload/v1762881039/maxresdefault_rmbllr.jpg',
  team: 'c_scale,w_800,f_auto,q_auto/smiling_construction_workers',
  map: 'c_scale,w_1200,f_auto,q_auto/sample_map',
};

// Details for the cleaning services offered.
export const SERVICES = [
  {
    icon: 'home',
    title: 'Residential Cleaning',
    description: 'Our specialized residential service enhances your home\'s energy efficiency and extends the life of your solar panels, ensuring maximum return on your investment.',
    details: [
      'Pure deionized water treatment',
      'Gentle, non-abrasive cleaning methods',
      'Thorough inspection and performance check',
      'Flexible scheduling to suit your needs'
    ]
  },
  {
    icon: 'building',
    title: 'Commercial Cleaning',
    description: 'We offer scalable cleaning solutions for commercial and industrial solar installations, minimizing downtime and maximizing your energy output and profitability.',
    details: [
      'Comprehensive cleaning for large-scale solar farms',
      'Advanced drone inspection for hard-to-reach areas',
      'Detailed performance and maintenance reporting',
      'Fully insured and certified technicians'
    ]
  }
];

// Customer testimonials for use on the homepage.
export const TESTIMONIALS = [
  {
    quote: "Pristine Solar Cleaning's service was exceptional. Our energy output increased by almost 15% after their first visit. Highly professional and worth every penny.",
    name: 'Sarah L.',
    location: 'Austin, TX',
  },
  {
    quote: "The team was courteous, efficient, and incredibly thorough. They used specialized equipment that left our panels looking brand new. I couldn't be happier.",
    name: 'Michael B.',
    location: 'San Jose, CA',
  },
  {
    quote: 'As a commercial property manager, uptime is critical. Pristine Solar Cleaning worked around our schedule and delivered a flawless service that boosted our entire array\'s performance.',
    name: 'David G.',
    location: 'Phoenix, AZ',
  }
];

// Key selling points for the "Why Choose Us" page.
export const WHY_CHOOSE_US_POINTS = [
  {
    icon: 'shield',
    title: 'Fully Insured & Certified',
    description: 'Our team is fully insured and trained in the latest safety protocols, giving you complete peace of mind.'
  },
  {
    icon: 'leaf',
    title: 'Eco-Friendly Methods',
    description: 'We use 100% deionized water and biodegradable cleaning agents, protecting your investment and the environment.'
  },
  {
    icon: 'chart',
    title: 'Performance Guaranteed',
    description: 'We stand by our work. You\'ll see a measurable improvement in your solar panel efficiency, or we\'ll make it right.'
  },
  {
    icon: 'smile',
    title: 'Customer Focused',
    description: 'From the initial quote to the final inspection, we prioritize clear communication and exceptional service.'
  }
];

// Frequently Asked Questions for the Contact page.
export const FAQS = [
  {
    question: 'How often should I get my solar panels cleaned?',
    answer: 'We recommend professional cleaning every 6 to 12 months. Factors like local dust, pollen levels, and bird activity can affect this. A regular cleaning schedule ensures optimal energy production.'
  },
  {
    question: 'Is it safe to clean solar panels with tap water?',
    answer: 'No, tap water contains minerals that can leave behind residue and spots, which can actually reduce panel efficiency. We use a multi-stage filtration process to produce 100% pure deionized water for a spot-free finish.'
  },
  {
    question: 'What is your cleaning process?',
    answer: 'Our process involves a preliminary inspection, followed by a gentle pre-rinse to loosen debris. We then use specialized, soft-bristled brushes and our deionized water system to scrub the panels clean, finishing with a final pure water rinse.'
  },
  {
    question: 'Are your services insured?',
    answer: 'Absolutely. We carry comprehensive liability insurance to protect your property and our staff. We are happy to provide a certificate of insurance upon request.'
  }
];