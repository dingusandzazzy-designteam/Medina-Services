import Image from 'next/image';
import Placeholder from './Placeholder';

/**
 * Maps an IA image slot id → generated asset (in /public/images) + descriptive alt.
 * Falls back to <Placeholder> if a slot has no asset yet. Uses next/image (optimized,
 * lazy by default; pass priority for the hero/LCP). See prompts/homepage.md + plan/01.IA.md.
 */
const MAP: Record<string, { src: string; alt: string }> = {
  'IMG-01': {
    src: '/images/hero.png',
    alt: 'A Medina Services crew maintaining the grounds of a Northern Virginia commercial property',
  },
  'IMG-02': {
    src: '/images/grounds.png',
    alt: 'Commercial landscape maintenance in progress at a Northern Virginia property',
  },
  'IMG-03': {
    src: '/images/property.png',
    alt: 'A Medina Services tradesperson performing professional property repair',
  },
  'IMG-04': {
    src: '/images/remodeling.png',
    alt: 'Interior renovation and finish carpentry by a licensed Medina Services contractor',
  },
  'IMG-05': {
    src: '/images/about-us.jpeg',
    alt: 'The owner of Medina Services with his wife — the family behind the company',
  },
  'IMG-A1': {
    src: '/images/about-hero.png',
    alt: 'The Medina Services crew loading equipment at the start of a workday',
  },
  'IMG-A2': {
    src: '/images/about-story.png',
    alt: 'Finished craftsmanship and a well-kept property by Medina Services',
  },
  // Recent Work — real client project photos
  'IMG-G1': { src: '/images/after-landscaping-1.jpg', alt: 'Foundation plantings and shrub beds maintained at a Northern Virginia property' },
  'IMG-G2': { src: '/images/work-patio.jpg', alt: 'A new stamped-concrete patio beside a screened porch' },
  'IMG-G3': { src: '/images/work-painting.jpg', alt: 'A freshly painted interior room with new flooring and trim' },
  'IMG-G4': { src: '/images/work-kitchen.jpg', alt: 'A completed kitchen renovation with new cabinetry, appliances, and flooring' },
  'IMG-G5': { src: '/images/work-basement.jpg', alt: 'A finished basement with recessed lighting and new carpet' },
  'IMG-G6': { src: '/images/work-garage.jpg', alt: 'A garage converted into finished living space with a new door, window, and siding' },
};

export default function SlotImage({
  slot,
  ratio,
  fill = false,
  className,
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority = false,
  objectPosition,
  objectFit = 'cover',
}: {
  slot: string;
  ratio?: string; // e.g. "4 / 3" (ignored when fill)
  fill?: boolean; // fill a sized/positioned parent (hero, gallery item)
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string; // e.g. "bottom" — where cover crops anchor (default centered)
  objectFit?: 'cover' | 'contain'; // 'contain' shows the whole image (e.g. a full portrait)
}) {
  const m = MAP[slot];
  if (!m) return <Placeholder slot={slot} ratio={ratio} className={className} />;

  return (
    <div
      className={`slot-img ${fill ? 'slot-img--fill' : ''} ${className ?? ''}`.trim()}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      <Image
        src={m.src}
        alt={m.alt}
        fill
        sizes={sizes}
        style={{ objectFit, objectPosition }}
        priority={priority}
      />
    </div>
  );
}
