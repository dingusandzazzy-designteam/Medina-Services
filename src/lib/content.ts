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
  h1: "Northern Virginia's Trusted Contractor for Grounds Maintenance, Remodeling, Construction, and Property Maintenance & Repair",
  sub: 'Delivering dependable grounds care, property maintenance & repair, and full-scale renovations. Serving commercial, government, and residential clients since 2016.',
  primaryCta: { label: 'Request a Free Estimate', href: '#estimate' },
  secondaryCta: { label: 'View Our Services', href: '#services' },
};

// S1.5 — HERO BANNER (Brand Guidelines p.19 Website direction:
// primary tagline p.8 + strong hero statement p.13)
export const heroBanner = {
  lead: 'Quality Craftsmanship',
  emphasis: 'Backed by People You Trust.',
  support:
    'We provide Northern Virginia’s residential, commercial, and government clients with professional grounds maintenance, property repair, and construction services combining the proven capability of a licensed contractor with the honest reliability and personal accountability of a family-owned business.',
};

// S2 — TRUST BAR / CREDENTIALS
export const credentials: { label: string; code?: string }[] = [
  { label: 'Virginia Class A Licensed',        code: '#2705196283' },
  { label: 'SAM.gov Registered',               code: 'UEI: LXG1KCA49SG1 · CAGE: 88GC1' },
  { label: 'Minority-Owned Small Business' },
  { label: 'Virginia SWaM Certified',          code: '#844821' },
  { label: '8(a) Certification',               code: 'In Progress' },
  { label: 'Northern Virginia',                code: 'Since 2016' },
];

// S3 — SERVICES OVERVIEW
export const servicesOverview = {
  h2: 'What We Do',
  intro:
    'From routine repairs and property maintenance to grounds care and full-scale renovations, we take care of your entire property. By providing three distinct service lines through a single licensed contractor, Medina Services eliminates the runaround of managing multiple vendors giving you one trusted partner for the ongoing maintenance, repairs, improvements, and construction your property needs.',
  cards: [
    {
      icon: 'tree',
      image: 'IMG-02',
      title: 'Grounds Maintenance',
      titleLines: ['Grounds', 'Maintenance'],
      body: 'Comprehensive landscape and grounds management for commercial, government, and residential properties. From recurring grounds maintenance to seasonal services and property upkeep, we provide reliable, contract-based solutions tailored to the needs of each property.',
      href: '#grounds',
    },
    {
      icon: 'gear',
      image: 'IMG-03',
      title: 'Property Maintenance & Repair',
      titleLines: ['Property Maintenance', '& Repair'],
      body: 'Reliable repair and maintenance services for residential, commercial, and government properties. From routine maintenance and minor repairs to larger property improvements, Medina Services provides responsive, dependable solutions to keep your property safe, functional, and well maintained.',
      href: '#property',
    },
    {
      icon: 'building',
      image: 'IMG-04',
      title: 'Remodeling & Construction',
      titleLines: ['Remodeling', '& Construction'],
      body: 'Full-scope renovation, remodeling, and construction services for residential, commercial, and government clients. From individual improvements to complete renovations, we manage projects from concept to completion with experienced oversight, quality workmanship, and a commitment to getting the job done right.',
      href: '#remodeling',
    },
  ],
};

// S4–S6 — SERVICE LINE DETAILS
type ServiceDetail = {
  id: string;
  label: string;
  image: string;
  h2: string;
  accent: string;
  paragraphs: string[];
  whoWeServe?: string[];
  bullets: string[];
  ctaLead: string;
  ctas: { label: string; href: string }[];
};
export const serviceDetails: ServiceDetail[] = [
  {
    id: 'grounds',
    label: 'Grounds Maintenance',
    image: 'IMG-02',
    h2: 'Complete Landscape Management for Residential, Commercial & Government Properties',
    accent: 'Landscape Management',
    paragraphs: [
      'Your property’s exterior makes a lasting first impression. Whether it’s a home, commercial property, or government facility, Medina Services delivers consistent, professional grounds maintenance tailored to the needs of your property. From routine upkeep to recurring service contracts, we keep outdoor spaces clean, well-maintained, and looking their best year-round.',
      'Flexible scheduling, dependable crews, and direct owner accountability on every project and account.',
    ],
    whoWeServe: [
      'Property Management Companies',
      'HOAs & Condominium Associations',
      'Office & Retail Properties',
      'Medical & Professional Offices',
      'Churches & Nonprofit Organizations',
      'Municipal & Educational Facilities',
    ],
    bullets: [
      'Mowing, Edging & Turf Care',
      'Fertilization & Weed Control',
      'Aeration, Overseeding & Lawn Restoration',
      'Tree, Shrub & Plant Installation & Maintenance',
      'Pruning & Trimming',
      'Mulching & Landscape Bed Maintenance',
      'Landscape Installation & Enhancements',
      'Spring & Fall Cleanups',
      'Leaf & Debris Removal',
      'Irrigation System Installation & Maintenance',
      'Drainage & Erosion Control',
      'Storm Cleanup & Grounds Restoration',
      'Pressure Washing',
      'Exterior Property Improvements',
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
      'Proactive maintenance protects your property and your budget. Medina Services provides responsive, professional maintenance and repair services that keep your property safe, functional, and compliant without the delays and communication gaps that come with larger contractors.',
      "Every job is documented. Every visit is completed to spec. And when urgent repairs come up, we move fast. That's what it means to work with a contractor who is personally invested in your property.",
    ],
    bullets: [
      'Drywall repair and installation',
      'Interior and exterior painting',
      'Carpentry and trim repair',
      'Door, frame, and hardware repair/replacement',
      'Flooring repair and replacement',
      'Ceiling and wall repairs',
      'Masonry and concrete repair',
      'Exterior siding and trim repair',
      'Caulking, sealing, and weatherproofing',
      'Minor plumbing and electrical repairs',
      'Fixture and hardware installation/replacement',
      'Pressure washing and exterior cleaning',
      'Preventive and recurring maintenance programs',
      'General property repairs and improvements',
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
      'We manage each engagement from start to finish. That means one point of contact, clear timelines, and a Virginia Class A Licensed Contractor with documented past performance.',
    ],
    bullets: [
      'Kitchen remodeling and renovations',
      'Bathroom remodeling and renovations',
      'Basement finishing and remodeling',
      'Whole-home and interior renovations',
      'Commercial buildouts and tenant improvements',
      'Office and facility renovations',
      'Framing, drywall, and interior construction',
      'Flooring installation and finishing',
      'Doors, trim, and finish carpentry',
      'Cabinetry and countertop installation',
      'Fixture and finish installation',
      'Interior and exterior painting',
      'Accessibility and ADA improvements',
      'Structural modifications and alterations',
      'Demolition and site preparation',
      'Exterior renovations and improvements',
    ],
    ctaLead: "Have a project in mind? Let's talk.",
    ctas: [
      { label: 'Book a Consultation', href: '#booking' },
      { label: 'Request an Estimate', href: '#estimate' },
    ],
  },
];

// SW — RECENT WORK (inserted; Requirements-driven, no fabricated claims)
// Captions are factual descriptors of the work shown (the three service lines) —
// NOT fabricated project names/locations/clients. 2 images per service line.
export const recentWork = {
  h2: 'Recent Work',
  intro:
    'A look at the grounds, maintenance, and renovation work we deliver for commercial, government, and residential clients across Northern Virginia.',
  // Documentary gallery slots (4:3) — see prompts/homepage.md (IMG-G1…G7).
  // Categories per client review: the screened-in porch and the stamped patio are new
  // construction (split into two projects), and the basement cabinet/shelving/painting
  // job is remodeling — not property maintenance.
  items: [
    { slot: 'IMG-G1', category: 'Grounds Maintenance', caption: 'Foundation plantings & shrub care' },
    { slot: 'IMG-G7', category: 'Remodeling & Construction', caption: 'Screened-in porch addition' },
    { slot: 'IMG-G2', category: 'Remodeling & Construction', caption: 'Stamped concrete patio' },
    { slot: 'IMG-G3', category: 'Remodeling & Construction', caption: 'Basement cabinets, shelving & painting' },
    { slot: 'IMG-G4', category: 'Remodeling & Construction', caption: 'Kitchen renovation' },
    { slot: 'IMG-G5', category: 'Remodeling & Construction', caption: 'Finished basement' },
    { slot: 'IMG-G6', category: 'Remodeling & Construction', caption: 'Garage-to-living-space conversion' },
  ],
  cta: { label: 'Request a Free Estimate', href: '#estimate' },
};

// Before & After — a recent deck rebuild (client-provided photos, Aug 2026).
export const beforeAfter = {
  intro:
    'A recent deck rebuild in Northern Virginia. Click any photo to open the slider and compare the before and after.',
  pairs: [
    {
      before: '/images/before-deck-1.jpg',
      after: '/images/after-deck-1.jpg',
      caption: 'Rear deck, seen from the yard',
      beforeAlt: 'The back of a townhouse with its original wood deck, stained brown and weathered',
      afterAlt: 'The same townhouse with the deck rebuilt, now with new boards and white railing',
    },
    {
      before: '/images/before-deck-2.jpg',
      after: '/images/after-deck-2.jpg',
      caption: 'Back deck and railing',
      beforeAlt: 'Standing on the old back deck, looking across worn boards and a brown wood railing toward the yard',
      afterAlt: 'The same view after the rebuild, with new boards underfoot and white railing',
    },
    {
      before: '/images/before-deck-3.jpg',
      after: '/images/after-deck-3.jpg',
      caption: 'Front deck, street side',
      beforeAlt: 'The street-side deck before the rebuild, with faded boards and a brown wood railing',
      afterAlt: 'The same street-side deck rebuilt with new boards and white railing',
    },
    {
      before: '/images/before-deck-4.jpg',
      after: '/images/after-deck-4.jpg',
      caption: 'Rear deck and support framing',
      beforeAlt: 'The rear deck before the rebuild, seen from behind the back fence',
      afterAlt: 'The rebuilt rear deck with white railing and new support posts underneath',
    },
    {
      before: '/images/before-deck-5.jpg',
      after: '/images/after-deck-5.jpg',
      caption: 'New boards and railing, back deck',
      beforeAlt: 'Split, sun-faded boards and a brown railing on the back deck',
      afterAlt: 'New boards and white railing in the same spot on the back deck',
    },
    {
      before: '/images/before-deck-6.jpg',
      after: '/images/after-deck-6.jpg',
      caption: 'New boards and railing, front deck',
      beforeAlt: 'Worn deck boards and brown railing on the front deck, with the street beyond',
      afterAlt: 'The front deck after the rebuild, with new boards and white railing',
    },
  ],
};

// S7 — COMPANY OVERVIEW
export const companyOverview = {
  h2: 'Keeping Properties Performing at Their Best.',
  paragraphs: [
    'Medina Services, LLC is a Virginia Class A Licensed, minority-owned contracting firm serving commercial, government, and residential clients throughout Northern Virginia. Since 2016, we have delivered professional grounds maintenance, property repair, and full-scale renovations with the dependability and personal accountability that only a family-owned business can provide. By combining three service lines under a single contractor, we streamline your procurement process and eliminate the hassle of juggling multiple vendors.',
    'When you work with Medina Services, you work directly with our owner. No lost emails, no mid-project handoffs, no subcontracting surprises. Just honest work, done right.',
  ],
  // Factual anchors drawn from the copy/credentials — no fabricated numbers.
  anchors: [
    { value: 'Since 2016', label: 'Serving Northern Virginia' },
    { value: 'Class A', label: 'Virginia Licensed Contractor' },
    { value: 'Owner-Led', label: 'On every project' },
  ],
  cta: { label: 'Learn Our Story', href: '/about' },
};

// S8 — WHY MEDINA SERVICES
export const whyMedina = {
  label: 'Why Medina Services',
  h2: 'Built for Residential, Commercial & Government Clients',
  intro:
    'We bring the credentials, the licenses, and the work ethic to compete for serious contracts and the personal accountability to deliver on them.',
  blocks: [
    {
      title: 'Virginia Class A Licensed — #2705196283',
      body: 'Verified qualifications to perform a full range of contracting work across trades. No subcontracting surprises, no unlicensed crews.',
    },
    {
      title: 'Virginia SWaM Certified — #844821',
      body: 'Proudly recognized by the Commonwealth of Virginia as a certified Small Minority-owned business.',
    },
    {
      title: 'Minority-Owned Business',
      body: 'Helps clients meet diversity spending goals and qualifies us for government contracts reserved for small, minority-owned businesses. 8(a) certification in progress.',
    },
    {
      title: 'SAM.gov Registered — UEI: LXG1KCA49SG1 | CAGE: 88GC1',
      body: 'Fully registered and ready for federal government contracting awards. All NAICS codes on file.',
    },
    {
      title: 'Multi-Trade Capability',
      body: 'One contractor handles grounds, maintenance, and construction. Fewer vendors, less overhead, consistent quality across your entire property.',
    },
    {
      title: 'Direct Owner Involvement',
      body: 'When you work with us, you work directly with leadership. Our owner takes personal pride and full responsibility in every job we do.',
    },
    {
      title: 'Bilingual: English and Spanish',
      body: 'Effective communication across diverse workforces and client teams. No barriers, no miscommunication.',
    },
    {
      title: 'Responsive Scheduling',
      body: 'We move when you need us to. Urgent requests are handled without the runaround.',
    },
    {
      title: 'Family-Owned & Faith-Driven',
      body: 'We operate with honesty, pride, and a long-term view — not just transactional thinking.',
    },
  ],
};

// S9 — TESTIMONIALS
// isPlaceholder=true → the `quotes` below are SAMPLE content for layout only.
// They must be replaced with real client reviews (or the section hidden) before launch.
// Do not present these as real testimonials in production.
export const testimonials = {
  h2: 'What Our Clients Say',
  credibility:
    'Medina Services has delivered grounds maintenance, property repairs, and renovation work for HOAs, residential clients, and commercial properties throughout Northern Virginia. Our work speaks for itself — and our clients keep coming back.',
  isPlaceholder: true,
  quotes: [
    {
      quote:
        'They show up when they say they will, and the grounds always look sharp. Having one contractor handle landscaping and repairs has simplified our vendor management.',
      attribution: 'Facilities Manager, Commercial Property',
    },
    {
      quote:
        'Communication was clear from the estimate through completion, and every visit was documented. An easy recommendation to our board.',
      attribution: 'Board Member, Residential HOA',
    },
    {
      quote:
        'Bilingual crews and direct owner involvement meant nothing was lost between our staff and theirs. Done right the first time.',
      attribution: 'Operations Director, Government Facility',
    },
  ],
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
  'Residential',
  'Commercial',
  'Government',
];

// Brand statement taglines — verbatim from the brand guide (p7, p12, p14).
// Used as large Cormorant "billboard" statement bands between sections.
export const statements = {
  accountability: { lead: 'Professional Service,', emphasis: 'Personal Accountability.' },
  community: { lead: 'Contract-Ready.', emphasis: 'Community-Rooted.' },
  craftsmanship: { lead: 'Quality Craftsmanship', emphasis: 'Backed by People You Trust.' },
  // Supporting tagline (p.8) — used on the mid-page green band so the primary
  // craftsmanship tagline isn't duplicated (it now anchors the HeroIntro section).
  propertyCare: { lead: 'Complete Property Care', emphasis: 'You Can Count On.' },
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
