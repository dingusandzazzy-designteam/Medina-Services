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
    src: '/images/company.png',
    alt: 'Medina Services owner reviewing work on a Northern Virginia job site',
  },
  'IMG-A1': {
    src: '/images/about-hero.png',
    alt: 'The Medina Services crew loading equipment at the start of a workday',
  },
  'IMG-A2': {
    src: '/images/about-story.png',
    alt: 'Finished craftsmanship and a well-kept property by Medina Services',
  },
  'IMG-G1': { src: '/images/gallery-1.png', alt: 'Finished commercial landscape maintained by Medina Services' },
  'IMG-G2': { src: '/images/gallery-2.png', alt: 'Exterior pressure washing and property improvement' },
  'IMG-G3': { src: '/images/gallery-3.png', alt: 'Freshly painted interior wall and trim' },
  'IMG-G4': { src: '/images/gallery-4.png', alt: 'Finished renovation detail and trim carpentry' },
  'IMG-G5': { src: '/images/gallery-5.png', alt: 'Medina Services contractor coordinating work on a commercial site' },
  'IMG-G6': { src: '/images/gallery-6.png', alt: 'Professional tools, materials, and blueprints prepared for a project' },
};

export default function SlotImage({
  slot,
  ratio,
  fill = false,
  className,
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority = false,
}: {
  slot: string;
  ratio?: string; // e.g. "4 / 3" (ignored when fill)
  fill?: boolean; // fill a sized/positioned parent (hero, gallery item)
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const m = MAP[slot];
  if (!m) return <Placeholder slot={slot} ratio={ratio} className={className} />;

  return (
    <div
      className={`slot-img ${fill ? 'slot-img--fill' : ''} ${className ?? ''}`.trim()}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      <Image src={m.src} alt={m.alt} fill sizes={sizes} style={{ objectFit: 'cover' }} priority={priority} />
    </div>
  );
}
