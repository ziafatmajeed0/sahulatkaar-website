export const siteConfig = {
  name: 'SahulatKaar',
  shortName: 'SahulatKaar',
  title: 'SahulatKaar | Pakistan Task Support for Families and Overseas Pakistanis',
  description:
    'SahulatKaar helps families and overseas Pakistanis coordinate errands, document follow-ups, shopping, and support tasks across Pakistan.',
  tagline: 'You Rest. We Run.',
  locale: 'en_PK',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sahulatkaar.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923261440088',
  phone: process.env.NEXT_PUBLIC_PHONE || '+923261440088',
  email: process.env.NEXT_PUBLIC_EMAIL || 'help.sahulatkaar@gmail.com',
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM || 'sahulatkaar_3.0',
  appLink:
    process.env.NEXT_PUBLIC_APP_LINK ||
    'https://play.google.com/store/apps/details?id=com.aak.remotepresence',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/services', label: 'Services' },
  { href: '/cities', label: 'Cities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const trustPoints = [
  'WhatsApp-first communication',
  'Updates throughout the task',
  'Support across major Pakistani cities',
] as const;

export const homePainPoints = [
  {
    title: 'No trusted person on-ground',
    description: 'It is hard to coordinate tasks remotely when you are not in Pakistan.',
  },
  {
    title: 'No time for follow-ups',
    description: 'Busy schedules make office visits, shopping, and document collection difficult.',
  },
  {
    title: 'Delays and uncertainty',
    description: 'Government offices and service providers often need repeated follow-up.',
  },
  {
    title: 'Poor visibility',
    description: 'Families want updates, proof of progress, and one clear point of contact.',
  },
] as const;

export const homeSteps = [
  {
    number: '1',
    title: 'Share the task',
    description: 'Send a WhatsApp message with the city, the task, and any documents or photos.',
  },
  {
    number: '2',
    title: 'Review and confirm',
    description: 'We clarify the requirement, share the approach, and confirm the expected cost.',
  },
  {
    number: '3',
    title: 'Track progress',
    description: 'We keep you updated until the task is completed and the proof is shared.',
  },
] as const;

export const homeServices = [
  {
    title: 'Document Support',
    description: 'Collection, submission, and follow-up for common paperwork and office visits.',
  },
  {
    title: 'Shopping and Errands',
    description: 'Purchases, pickups, bill payments, and day-to-day support tasks.',
  },
  {
    title: 'Medicine and Care Support',
    description: 'Medicine pickup, report collection, and family support coordination.',
  },
  {
    title: 'Custom Requests',
    description: 'If your task is local and practical, we can likely coordinate it for you.',
  },
] as const;

export const serviceCategories = [
  {
    title: 'Document Services',
    items: [
      'NADRA follow-ups and document updates',
      'Property and paperwork coordination',
      'Tax form assistance and submissions',
      'Government office visits',
      'Certificate applications',
      'Passport and visa support tasks',
    ],
  },
  {
    title: 'Shopping and Errands',
    items: [
      'Market shopping',
      'Store and mall purchases',
      'Online order pickups',
      'Bill payments',
      'Utility bill submission',
      'Home delivery coordination',
    ],
  },
  {
    title: 'Healthcare Support',
    items: [
      'Medicine pickup from pharmacies',
      'Hospital document collection',
      'Appointment scheduling',
      'Lab report collection',
      'Medical certificate assistance',
      'Urgent family support coordination',
    ],
  },
  {
    title: 'Home Services',
    items: [
      'Maintenance coordination',
      'Repair scheduling',
      'Cleaning service arrangement',
      'Utility connection follow-up',
      'Rent and property support',
      'Inspection coordination',
    ],
  },
  {
    title: 'Business Support',
    items: [
      'Office tasks',
      'Document scanning and organization',
      'Bank visit coordination',
      'Business registration assistance',
      'Contract delivery and collection',
      'Vendor coordination',
    ],
  },
  {
    title: 'Custom Tasks',
    items: [
      'Multi-step coordination',
      'Appointment scheduling',
      'Local research',
      'Event support tasks',
      'Family assistance requests',
      'Other city-based practical errands',
    ],
  },
] as const;

export const serviceProcess = [
  'Tell us what you need done.',
  'Receive a clear quote and timeline.',
  'Confirm and share the required details.',
  'We begin the task and keep you updated.',
  'You receive completion proof and the final update.',
] as const;

export const values = [
  {
    title: 'Trust First',
    description: 'We focus on clear communication, verified updates, and dependable follow-through.',
  },
  {
    title: 'Results Driven',
    description: 'We aim to complete practical tasks properly, not leave them half-done.',
  },
  {
    title: 'People Focused',
    description: 'The work is operational, but the impact is personal for families and loved ones.',
  },
  {
    title: 'Fast and Thoughtful',
    description: 'We move quickly without sacrificing clarity, care, or accountability.',
  },
] as const;

export const milestones = [
  { year: '2022', achievement: 'Service launched for remote task coordination in Pakistan' },
  { year: '2023', achievement: 'Expanded support across more cities and service categories' },
  { year: '2024', achievement: 'Improved WhatsApp-first customer workflow and response coverage' },
  { year: '2025', achievement: 'Continued expansion for families, professionals, and overseas Pakistanis' },
] as const;

export const cities = [
  { name: 'Karachi', province: 'Sindh', coverage: 'Full', areas: 15 },
  { name: 'Lahore', province: 'Punjab', coverage: 'Full', areas: 12 },
  { name: 'Islamabad', province: 'Federal', coverage: 'Full', areas: 8 },
  { name: 'Rawalpindi', province: 'Punjab', coverage: 'Full', areas: 6 },
  { name: 'Faisalabad', province: 'Punjab', coverage: 'Available', areas: 5 },
  { name: 'Multan', province: 'Punjab', coverage: 'Available', areas: 4 },
  { name: 'Peshawar', province: 'KPK', coverage: 'Full', areas: 5 },
  { name: 'Quetta', province: 'Balochistan', coverage: 'Available', areas: 3 },
  { name: 'Hyderabad', province: 'Sindh', coverage: 'Available', areas: 4 },
  { name: 'Gujranwala', province: 'Punjab', coverage: 'Available', areas: 4 },
  { name: 'Sialkot', province: 'Punjab', coverage: 'Available', areas: 3 },
  { name: 'Abbottabad', province: 'KPK', coverage: 'Available', areas: 2 },
] as const;

export const regions = [
  { region: 'Sindh', cityNames: ['Karachi', 'Hyderabad'] },
  { region: 'Punjab', cityNames: ['Lahore', 'Rawalpindi', 'Faisalabad', 'Multan', 'Gujranwala', 'Sialkot'] },
  { region: 'KPK', cityNames: ['Peshawar', 'Abbottabad'] },
  { region: 'Federal', cityNames: ['Islamabad'] },
  { region: 'Balochistan', cityNames: ['Quetta'] },
] as const;

export const faqs = [
  {
    question: 'How quickly do you respond?',
    answer: 'Most WhatsApp enquiries receive a response the same day, often much sooner during working hours.',
  },
  {
    question: 'How is pricing decided?',
    answer: 'Pricing depends on the task, city, urgency, and any direct out-of-pocket cost required to complete it.',
  },
  {
    question: 'Can you help if my city is not listed?',
    answer: 'Yes. Message us with the city name and task details, and we will confirm whether support is available.',
  },
  {
    question: 'Will I receive progress updates?',
    answer: 'Yes. We use WhatsApp to share status updates and completion proof where appropriate.',
  },
  {
    question: 'What information should I send first?',
    answer: 'Share the city, the task summary, the deadline, and any relevant documents or photos.',
  },
  {
    question: 'Is my information handled privately?',
    answer: 'We only use task information to coordinate the requested service and communication around it.',
  },
] as const;

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildInstagramUrl() {
  return `https://instagram.com/${siteConfig.instagramHandle}`;
}
