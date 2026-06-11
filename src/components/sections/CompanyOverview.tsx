import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SlotImage from '@/components/SlotImage';
import { companyOverview } from '@/lib/content';

/** S7 — editorial statement on navy + owner/team image. */
export default function CompanyOverview() {
  return (
    <section className="section section--navy company" id="company" aria-labelledby="company-h">
      <div className="container">
        <div className="company__grid">
          <div className="company__body">
            <span className="ornament" aria-hidden="true" />
            <span className="eyebrow">Who We Are</span>
            <Reveal as="h2" variant="clip">
              <span id="company-h">
                The Contractor Your Property <em>Deserves</em>
              </span>
            </Reveal>
            <div className="prose">
              {companyOverview.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Button href={companyOverview.cta.href} variant="on-navy" withArrow>
              {companyOverview.cta.label}
            </Button>
          </div>

          <div className="company__media">
            <Reveal variant="clip" index={1}>
              <SlotImage slot="IMG-05" ratio="4 / 5" sizes="(max-width: 900px) 100vw, 40vw" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
