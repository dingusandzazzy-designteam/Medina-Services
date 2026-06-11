import Reveal from '@/components/Reveal';
import { testimonials } from '@/lib/content';

/** S9 — PLACEHOLDER testimonial (do not fabricate; per copy). */
export default function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-h">
      <div className="container">
        <figure className="quote">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">Social Proof</span>
          <h2 className="display-h heading-spaced" id="testimonials-h">
            What Our Clients <em>Say</em>
          </h2>
          <p className="quote__credibility">{testimonials.credibility}</p>
          <Reveal variant="clip">
            <blockquote>&ldquo;{testimonials.placeholderQuote}&rdquo;</blockquote>
          </Reveal>
          <figcaption>— {testimonials.placeholderAttribution}</figcaption>
          {testimonials.isPlaceholder && (
            <span className="quote__badge">Placeholder — real client reviews pending</span>
          )}
        </figure>
      </div>
    </section>
  );
}
