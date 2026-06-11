import Reveal from '@/components/Reveal';
import SlotImage from '@/components/SlotImage';
import { recentWork } from '@/lib/content';

/** SW — Recent Work gallery (inserted; documentary generated imagery). */
export default function RecentWork() {
  return (
    <section className="section" id="recent-work" aria-labelledby="recent-work-h">
      <div className="container container-wide">
        <div className="section-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">Our Portfolio</span>
          <Reveal as="h2" className="display-h">
            <span id="recent-work-h">
              Recent <em>Work</em>
            </span>
          </Reveal>
          <Reveal as="p" className="lead" index={1}>
            {recentWork.intro}
          </Reveal>
        </div>

        <div className="gallery">
          {recentWork.items.map((slot, i) => (
            <Reveal className="gallery__item" key={slot} variant="clip" index={i}>
              <SlotImage slot={slot} fill sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
