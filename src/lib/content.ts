/**
 * Site content — extracted VERBATIM from the closed/final copy:
 * `Documents/03. Copy/Medina Services- Website Redesign Copy.md`.
 * Do not rewrite, invent claims, or fabricate testimonials. Single source for copy in the build.
 */

export const company = {
  name: 'Medina Services, LLC',
  phone: '(571) 395-3927',
  phoneHref: 'tel:+15713953927',
  email: 'info@medinaservices.us',
  emailHref: 'mailto:info@medinaservices.us',
  website: 'medinaservices.us',
  address: '3544 Finish Line Drive, Gainesville, VA',
  serviceArea: 'Northern Virginia',
  since: 2016,
  license: 'Virginia Class A Licensed Contractor #2705196283',
  sam: 'SAM.gov Registered — UEI: LXG1KCA49SG1 | CAGE: 88GC1',
} as const;

// S1 — HERO
export const hero = {
  h1: "Northern Virginia's Trusted Contractor for Grounds, Maintenance, and Construction",
  sub: 'Delivering dependable grounds care, property repair, and full-scale renovations. Serving commercial, government, and residential clients since 2016.',
  primaryCta: { label: 'Request a Free Estimate', href: '#estimate' },
  secondaryCta: { label: 'View Our Services', href: '#services' },
};

// S2 — TRUST BAR / CREDENTIALS
export const credentials: { label: string; code?: string }[] = [
  { label: 'Virginia Class A Licensed',        code: '#2705196283' },
  { label: 'SAM.gov Registered',               code: 'UEI: LXG1KCA49SG1 · CAGE: 88GC1' },
  { label: 'Minority-Owned Small Business' },
  { label: '8(a) & SWaM Certification',        code: 'In Progress' },
  { label: 'Northern Virginia',                code: 'Since 2016' },
];

// S3 — SERVICES OVERVIEW
export const servicesOverview = {
  h2: 'What We Do',
  intro:
    'From keeping the grounds pristine to managing a full commercial renovation, we take care of your entire property. By providing three distinct service lines through a single licensed contractor, we eliminate the runaround of managing multiple vendors.',
  cards: [
    {
      icon: 'tree',
      image: 'IMG-02',
      title: 'Grounds Maintenance',
      titleLines: ['Grounds', 'Maintenance'],
      body: 'Recurring commercial landscape management for HOAs, government facilities, and institutional campuses. We show up on schedule and keep your property looking its best every visit, every season.',
      href: '#grounds',
    },
    {
      icon: 'gear',
      image: 'IMG-03',
      title: 'Property Maintenance & Repair',
      titleLines: ['Property Maintenance', '& Repair'],
      body: 'Preventive and corrective maintenance that keeps commercial and government properties in top operating condition. Professional execution, responsive scheduling, and documented work completion.',
      href: '#property',
    },
    {
      icon: 'building',
      image: 'IMG-04',
      title: 'Remodeling & Construction',
      titleLines: ['Remodeling', '& Construction'],
      body: 'Full-scope interior renovation for commercial, institutional, and residential clients. Managed from concept to completion, with a Virginia Class A Licensed contractor overseeing every phase.',
      href: '#remodeling',
    },
  ],
};

// S4–S6 — SERVICE LINE DETAILS
export const serviceDetails = [
  {
    id: 'grounds',
    label: 'Grounds Maintenance',
    image: 'IMG-02',
    h2: 'Complete Landscape Management for Commercial Properties and Government Facilities',
    accent: 'Landscape Management',
    paragraphs: [
      "Your property's exterior is the first thing clients, tenants, and inspectors see. Medina Services delivers consistent, professional grounds maintenance under a recurring service contract — so your outdoor spaces always reflect the standard your organization requires.",
      'We serve HOAs, commercial office parks, government facilities, institutional campuses, and property management firms throughout Northern Virginia. Flexible scheduling, dependable crews, and direct owner accountability on every account.',
    ],
    bullets: [
      'Mowing, edging, and turf care',
      'Fertilization and weed control',
      'Shrub and tree trimming',
      'Mulching and seasonal color',
      'Seasonal cleanup (spring and fall)',
      'Debris removal',
      'Irrigation system maintenance',
      'Pressure washing',
      'Exterior property improvements',
    ],
    ctaLead: 'Ready to put your grounds on a reliable maintenance schedule?',
    ctas: [
      { label: 'Request an Estimate', href: '#estimate' },
      { label: 'Book a Consultation', href: '#booking' },
    ],
  },
  {
    id: 'property',
    label: 'Property Maintenance & Repair',
    image: 'IMG-03',
    h2: 'Responsive Maintenance Services That Keep Your Property Running Smoothly',
    accent: 'Running Smoothly',
    paragraphs: [
      'Deferred maintenance costs more than staying ahead of it. Medina Services provides responsive, professional maintenance and repair services that keep your property safe, functional, and compliant without the delays and communication gaps that come with larger contractors.',
      "Every job is documented. Every visit is completed to spec. And when urgent repairs come up, we move fast. That's what it means to work with a contractor who is personally invested in your property.",
    ],
    bullets: [
      'Drywall repair and installation',
      'Interior and exterior painting',
      'Wall and surface repair',
      'Masonry repair',
      'General property repairs',
      'Preventive maintenance programs',
      'Pressure washing',
      'Exterior repairs and improvements',
    ],
    ctaLead: 'Let us take the maintenance burden off your plate.',
    ctas: [
      { label: 'Request an Estimate', href: '#estimate' },
      { label: 'Contact Us Today', href: '/contact' },
    ],
  },
  {
    id: 'remodeling',
    label: 'Remodeling & Construction',
    image: 'IMG-04',
    h2: 'Full-Scope Renovation and Construction Services',
    accent: 'Renovation',
    paragraphs: [
      'Whether you’re renovating a commercial office, completing a government facility buildout, or remodeling a kitchen for a residential client, Medina Services brings the same standard of licensed craftsmanship and personal accountability to every project.',
      'We manage each engagement from start to finish. That means one point of contact, clear timelines, and a Virginia Class A Licensed contractor with documented past performance on commercial and residential renovation work.',
    ],
    bullets: [
      'Kitchen remodeling',
      'Bathroom renovations',
      'Basement finishing',
      'Flooring installation and finishing',
      'Trim carpentry and finish work',
      'Fixture installation',
      'Interior painting',
      'Commercial space buildouts and tenant improvements',
    ],
    ctaLead: "Have a project in mind? Let's talk.",
    ctas: [
      { label: 'Book a Consultation', href: '#booking' },
      { label: 'Request an Estimate', href: '#estimate' },
    ],
  },
];

// SW — RECENT WORK (inserted; Requirements-driven, no fabricated claims)
export const recentWork = {
  h2: 'Recent Work',
  intro:
    'A look at the grounds, maintenance, and renovation work we deliver for commercial, government, and residential clients across Northern Virginia.',
  // 6 documentary gallery slots — see prompts/homepage.md (IMG-G1…G6)
  items: ['IMG-G1', 'IMG-G2', 'IMG-G3', 'IMG-G4', 'IMG-G5', 'IMG-G6'],
};

// S7 — COMPANY OVERVIEW
export const companyOverview = {
  h2: 'The Contractor Your Property Deserves',
  paragraphs: [
    'Medina Services, LLC is a Virginia Class A Licensed, minority-owned contracting firm serving commercial, government, and residential clients throughout Northern Virginia. Since 2016, we have delivered professional grounds maintenance, property repair, and full-scale renovations with the dependability and personal accountability that only a family-owned business can provide. By combining three service lines under a single contractor, we streamline your procurement process and eliminate the hassle of juggling multiple vendors.',
    'When you work with Medina Services, you work directly with our owner. No lost emails, no mid-project handoffs, no subcontracting surprises. Just honest work, done right.',
  ],
  cta: { label: 'Learn Our Story', href: '/about' },
};

// S8 — WHY MEDINA SERVICES
export const whyMedina = {
  label: 'Why Medina Services',
  h2: 'Built for Commercial and Government Clients',
  intro:
    'We bring the credentials, the licenses, and the work ethic to compete for serious contracts and the personal accountability to deliver on them.',
  blocks: [
    {
      title: 'Virginia Class A Licensed — #2705196283',
      body: 'Verified qualifications to perform a full range of contracting work across trades. No subcontracting surprises, no unlicensed crews.',
    },
    {
      title: 'Minority-Owned Business',
      body: 'Helps clients meet diversity spending goals and qualifies us for government contracts reserved for small, minority-owned businesses. 8(a) and SWaM certifications in progress.',
    },
    {
      title: 'SAM.gov Registered — UEI: LXG1KCA49SG1 | CAGE: 88GC1',
      body: 'Fully registered and ready for federal and state government contracting awards. All NAICS codes on file.',
    },
    {
      title: 'Multi-Trade Capability',
      body: 'One contractor handles grounds, maintenance, and construction. Fewer vendors, less overhead, consistent quality across your entire property.',
    },
    {
      title: 'Direct Owner Involvement',
      body: 'When you work with us, you work with leadership. Our owner takes personal responsibility for every project we take on.',
    },
    {
      title: 'Bilingual: English and Spanish',
      body: 'Effective communication across diverse workforces and client teams. No barriers, no miscommunication.',
    },
    {
      title: 'Responsive Scheduling',
      body: 'We move when you need us to. Urgent requests are handled without the runaround.',
    },
  ],
};

// S9 — TESTIMONIALS (PLACEHOLDER — do not fabricate)
export const testimonials = {
  h2: 'What Our Clients Say',
  credibility:
    'Medina Services has delivered grounds maintenance, property repairs, and renovation work for HOAs, residential clients, and commercial properties throughout Northern Virginia. Our work speaks for itself — and our clients keep coming back.',
  placeholderQuote:
    'The team at Medina Services is professional, fast, and easy to work with. Their bilingual communication meant nothing was lost in translation between our staff and their crews. Everything was done right the first time.',
  placeholderAttribution: 'Operations Director, Government Facility',
  isPlaceholder: true,
};

// S10 — CONTACT
export const contact = {
  h2: "Let's Get to Work",
  intro:
    'Serving commercial, government, and residential clients throughout Northern Virginia. Ready to discuss your property needs? We respond within one business day.',
  ctas: [
    { label: 'Request a Free Estimate', href: '#estimate' },
    { label: 'Book a Consultation', href: '#booking' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

// Audiences served — derived from the copy ("commercial, government, and residential";
// "HOAs, government facilities, institutional campuses, property management firms").
// Not new claims — segmentation of who the copy already names.
export const serves = [
  'Commercial',
  'Government',
  'Institutional',
  'HOA',
  'Residential',
];

// Brand statement taglines — verbatim from the brand guide (p7, p12, p14).
// Used as large Cormorant "billboard" statement bands between sections.
export const statements = {
  accountability: { lead: 'Professional Service,', emphasis: 'Personal Accountability.' },
  community: { lead: 'Contract-Ready.', emphasis: 'Community-Rooted.' },
  craftsmanship: { lead: 'Quality Craftsmanship', emphasis: 'Backed by People You Trust.' },
};

// ABOUT — "Our Story" is verbatim client-approved text from the brand guide (p2),
// not fabricated. Supplemented by the S7 company overview + credentials.
export const about = {
  eyebrow: 'About Medina Services',
  h1: 'Honest work, done right — since 2016.',
  intro:
    'A Virginia Class A Licensed, family-owned and minority-owned contracting firm serving commercial, government, and residential clients across Northern Virginia.',
  storyHeading: 'Our Story',
  story: [
    'Medina Services, LLC was founded in 2016 by a family with deep roots in hard work, craftsmanship, and faith. Our founder, originally from El Salvador, built this company from the ground up with a simple belief: that every property deserves care, and every client deserves someone they can count on.',
    'What began as a commitment to the communities of Northern Virginia has grown into a full-service contracting firm providing grounds maintenance, property maintenance and repair, and full-scale renovation and construction services to commercial businesses, government agencies, and institutional clients.',
    'We are a family-owned, minority-owned small business. We show up, we do the work right, and we treat every project as if it were our own property. We operate this way every single day, guided by faith, integrity, and a genuine pride in what we do.',
  ],
  values: [
    { title: 'Faith & Integrity', body: 'The values our founder built the company on, present in every job.' },
    { title: 'Personal Accountability', body: 'You work directly with our owner — leadership takes responsibility for every project.' },
    { title: 'Craftsmanship', body: 'We treat every property as if it were our own. Done right the first time.' },
  ],
};

export const nav = {
  links: [
    {
      label: 'Services',
      href: '#services',
      children: [
        { label: 'Grounds Maintenance', href: '#grounds' },
        { label: 'Property Maintenance & Repair', href: '#property' },
        { label: 'Remodeling & Construction', href: '#remodeling' },
      ],
    },
    { label: 'Why Us', href: '#why' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Request a Free Estimate', href: '#estimate' },
};
