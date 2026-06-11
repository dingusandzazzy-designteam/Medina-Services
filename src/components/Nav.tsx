'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { nav } from '@/lib/content';
import { Chevron, Menu, Close } from '@/lib/icons';

function NavLink({ href, label }: { href: string; label: string }) {
  const isHash = href.startsWith('#');
  if (isHash) {
    return (
      <a className="nav__link" href={href}>
        {label}
      </a>
    );
  }
  return (
    <Link className="nav__link" href={href}>
      {label}
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container container-wide nav__inner">
        <Logo />

        <nav aria-label="Primary">
          <ul className={`nav__links ${open ? 'is-open' : ''}`.trim()}>
            {nav.links.map((link) =>
              link.children ? (
                <li className="nav__group" key={link.label}>
                  <a className="nav__link" href={link.href}>
                    {link.label}
                    <Chevron width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </a>
                  <div className="nav__dropdown">
                    {link.children.map((child) => (
                      <a key={child.href} href={child.href} onClick={() => setOpen(false)}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label} onClick={() => setOpen(false)}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              )
            )}
            <li className="nav__cta-mobile">
              <a className="btn btn--primary" href={nav.cta.href} onClick={() => setOpen(false)}>
                {nav.cta.label}
              </a>
            </li>
          </ul>
        </nav>

        <a className="btn btn--primary nav__cta-desktop" href={nav.cta.href}>
          {nav.cta.label}
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
