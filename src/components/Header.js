'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';

function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[13px] tracking-[0.12em] uppercase text-ink-700 hover:text-ink-950 transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const boroughs = getBoroughs();
  const featuredBoroughs = boroughs.slice(0, 10);

  // Close dropdowns on escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setLocationsOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-porcelain-100/85 backdrop-blur-md border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-18 flex items-center justify-between">
            <Link href="/" className="group flex items-baseline gap-3 py-4">
              <span className="font-display text-xl md:text-2xl text-ink-950">
                152 Harley Street
              </span>
              <span className="hidden sm:inline text-[12px] tracking-[0.18em] uppercase text-ink-500 group-hover:text-ink-700 transition-colors">
                Aesthetic Clinic
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen((v) => !v);
                    setLocationsOpen(false);
                  }}
                  className="inline-flex items-center gap-2 text-[13px] tracking-[0.12em] uppercase text-ink-700 hover:text-ink-950 transition-colors"
                  aria-expanded={servicesOpen}
                >
                  Treatments
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 mt-3 w-[22rem]">
                    <div className="card shadow-soft p-3">
                      <div className="px-3 pb-2">
                        <p className="text-[11px] tracking-[0.18em] uppercase text-ink-500">Explore</p>
                      </div>
                      <div className="max-h-[22rem] overflow-auto">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            className="block rounded-xl px-4 py-3 text-sm text-ink-800 hover:bg-porcelain-200 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="font-medium text-ink-950">{service.name}</div>
                            <div className="text-xs text-ink-600 mt-0.5">{service.shortDescription}</div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-3 pt-2">
                        <Link
                          href="/treatments"
                          className="inline-flex items-center gap-2 text-xs text-ink-700 hover:text-ink-950"
                          onClick={() => setServicesOpen(false)}
                        >
                          View all treatments <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLocationsOpen((v) => !v);
                    setServicesOpen(false);
                  }}
                  className="inline-flex items-center gap-2 text-[13px] tracking-[0.12em] uppercase text-ink-700 hover:text-ink-950 transition-colors"
                  aria-expanded={locationsOpen}
                >
                  Locations
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {locationsOpen && (
                  <div className="absolute left-0 mt-3 w-[22rem]">
                    <div className="card shadow-soft p-3">
                      <div className="px-3 pb-2 flex items-center justify-between">
                        <p className="text-[11px] tracking-[0.18em] uppercase text-ink-500">Featured boroughs</p>
                        <Link
                          href="/locations"
                          className="text-[11px] tracking-[0.18em] uppercase text-ink-600 hover:text-ink-950"
                          onClick={() => setLocationsOpen(false)}
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {featuredBoroughs.map((borough) => (
                          <Link
                            key={borough.slug}
                            href={`/locations/${borough.slug}`}
                            className="rounded-xl px-3 py-2 text-sm text-ink-800 hover:bg-porcelain-200 transition-colors"
                            onClick={() => setLocationsOpen(false)}
                          >
                            {borough.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/blog">Journal</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <Link href="/free-quote" className="btn btn-primary">
                Book consultation
              </Link>
            </nav>

            {/* Mobile */}
            <button
              type="button"
              className="lg:hidden p-3 rounded-full hover:bg-porcelain-200 transition-colors"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-porcelain-100 border-b border-ink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="space-y-4">
              <Link href="/treatments" className="block text-sm text-ink-900" onClick={() => setMobileOpen(false)}>
                Treatments
              </Link>
              <Link href="/locations" className="block text-sm text-ink-900" onClick={() => setMobileOpen(false)}>
                Locations
              </Link>
              <Link href="/reviews" className="block text-sm text-ink-900" onClick={() => setMobileOpen(false)}>
                Reviews
              </Link>
              <Link href="/blog" className="block text-sm text-ink-900" onClick={() => setMobileOpen(false)}>
                Journal
              </Link>
              <Link href="/contact" className="block text-sm text-ink-900" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              <div className="pt-2">
                <Link href="/free-quote" className="btn btn-primary w-full" onClick={() => setMobileOpen(false)}>
                  Book consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
