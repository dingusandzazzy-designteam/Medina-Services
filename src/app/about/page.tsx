import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SlotImage from '@/components/SlotImage';
import TrustBar from '@/components/sections/TrustBar';
import { about } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Medina Services, LLC — a Virginia Class A Licensed, family-owned and minority-owned contracting firm serving Northern Virginia since 2016. Owner-accountable, faith-led, craftsmanship-driven.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{about.eyebrow}</span>
          <h1>{about.h1}</h1>
          <p>{about.intro}</p>
        </div>
      </section>

      <TrustBar />

      <section className="section">
        <div className="container">
          <div className="svc">
            <div className="svc__media">
              <Reveal variant="clip">
                <SlotImage slot="IMG-A1" ratio="4 / 3" priority sizes="(max-width: 900px) 100vw, 50vw" />
              </Reveal>
            </div>
            <div className="svc__body">
              <span className="eyebrow">{about.storyHeading}</span>
              <Reveal as="h2" className="h2" index={1}>
                The contractor your property deserves.
              </Reveal>
              <div className="prose">
                {about.story.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="h2">Built on values, delivered with accountability</h2>
          </div>
          <div className="cards">
            {about.values.map((v, i) => (
              <Reveal className="card" key={v.title} index={i}>
                <h3 className="h3">{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="company__grid">
            <div>
              <span className="eyebrow">Ready When You Are</span>
              <Reveal as="h2" className="h2">
                Let&rsquo;s get to work on your property.
              </Reveal>
              <div className="btn-row btn-row--spaced">
                <Button href="/#estimate" variant="on-navy" withArrow>
                  Request a Free Estimate
                </Button>
                <Button href="/contact" variant="outline-light">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="company__media">
              <Reveal variant="clip" index={1}>
                <SlotImage slot="IMG-A2" ratio="4 / 5" sizes="(max-width: 900px) 100vw, 40vw" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
