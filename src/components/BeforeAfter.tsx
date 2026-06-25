'use client';

import { useState } from 'react';

/**
 * Before/After comparison slider. Both images are full-size and stacked; the "before"
 * image is revealed by a clip-path driven by an accessible range input (keyboard-friendly).
 * Drag the handle or use arrow keys. No layout animation; the reveal is user-driven.
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  caption,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="ba">
      <div className="ba__stage" style={{ ['--pos' as string]: `${pos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ba__img" src={after} alt={afterAlt} loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ba__img ba__img--before" src={before} alt={beforeAlt} loading="lazy" />

        <span className="ba__tag ba__tag--before" aria-hidden="true">Before</span>
        <span className="ba__tag ba__tag--after" aria-hidden="true">After</span>

        <input
          className="ba__range"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Reveal the before and after of ${caption ?? 'this project'}. Drag or use arrow keys.`}
        />

        <span className="ba__divider" aria-hidden="true">
          <span className="ba__handle" />
        </span>
      </div>
      {caption && <figcaption className="ba__caption">{caption}</figcaption>}
    </figure>
  );
}
