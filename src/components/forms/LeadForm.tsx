'use client';

import { useState, type FormEvent } from 'react';
import { Arrow } from '@/lib/icons';

type Variant = 'estimate' | 'contact';

type Errors = Record<string, string>;

/**
 * Estimate + Contact form UI with client-side validation and success/error states.
 * NOTE (Phase 4): the actual email routing to info@medinaservices.us and spam protection
 * are NOT implemented yet — onSubmit currently hits a stub. Wire a Next.js Route Handler
 * (e.g. /api/lead → Resend) in Phase 4. Do not treat this as a working backend.
 */
export default function LeadForm({ variant = 'estimate' }: { variant?: Variant }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name) e.name = 'Please enter your name.';
    if (!email) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
    if (!message) e.message = 'Please tell us a little about your needs.';
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      return;
    }
    setStatus('submitting');
    try {
      // TODO Phase 4: POST to /api/lead (Route Handler → email to info@medinaservices.us)
      // Stubbed success so the UI flow is reviewable on staging.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form">
        <div className="form__status" data-kind="success" role="status">
          Thank you — your request has been received. We respond within one business day.
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label={variant === 'estimate' ? 'Request a free estimate' : 'Contact us'}>
      <div className="form__row">
        <div className="field" data-error={Boolean(errors.name)}>
          <label htmlFor="lf-name">
            Name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="lf-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="lf-name-err"
          />
          <span className="field__error" id="lf-name-err">
            {errors.name}
          </span>
        </div>
        <div className="field" data-error={Boolean(errors.email)}>
          <label htmlFor="lf-email">
            Email <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="lf-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="lf-email-err"
          />
          <span className="field__error" id="lf-email-err">
            {errors.email}
          </span>
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="lf-phone">Phone (optional)</label>
          <input id="lf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="lf-service">Service of interest</label>
          <select id="lf-service" name="service" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Grounds Maintenance</option>
            <option>Property Maintenance &amp; Repair</option>
            <option>Remodeling &amp; Construction</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field" data-error={Boolean(errors.message)}>
        <label htmlFor="lf-message">
          {variant === 'estimate' ? 'Tell us about your property and needs' : 'How can we help?'}{' '}
          <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="lf-message"
          name="message"
          rows={4}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby="lf-message-err"
        />
        <span className="field__error" id="lf-message-err">
          {errors.message}
        </span>
      </div>

      {status === 'error' && (
        <div className="form__status" data-kind="error" role="alert">
          Something went wrong. Please call us at (571) 395-3927 or email info@medinaservices.us.
        </div>
      )}

      <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting'
          ? 'Sending…'
          : variant === 'estimate'
            ? 'Request a Free Estimate'
            : 'Send Message'}
        <Arrow />
      </button>
    </form>
  );
}
