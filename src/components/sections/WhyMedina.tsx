import Reveal from '@/components/Reveal';
import { whyMedina } from '@/lib/content';

/** S8 — 7 differentiator blocks. */
export default function WhyMedina() {
  return (
    <section className="section section--alt" id="why" aria-labelledby="why-h">
      <span className="utility-anchor" />
      <div className="container container-wide">
        <div className="section-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">{whyMedina.label}</span>
          <Reveal as="h2" className="display-h">
            <span id="why-h">
              Built for Commercial and <em>Government</em> Clients
            </span>
          </Reveal>
          <Reveal as="p" className="lead" index={1}>
            {whyMedina.intro}
          </Reveal>
        </div>

        <div className="why__list">
          {whyMedina.blocks.map((block, i) => (
            <Reveal className="why__row" key={block.title} index={i % 2}>
              <span className="why__row-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
