import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-porcelain-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-2xl text-ink-950">Cosmetic Treatment</div>
            <p className="mt-4 text-ink-700 leading-relaxed max-w-md">
              A quiet, editorial approach to aesthetics — refined treatments, verified practitioners, and a concierge-style experience.
            </p>

            <div className="mt-8">
              <Link href="/free-quote" className="btn btn-primary">
                Request a consultation
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-ink-500">Explore</div>
              <div className="mt-4 space-y-3">
                <Link href="/treatments" className="block text-sm text-ink-700 hover:text-ink-950">Treatments</Link>
                <Link href="/locations" className="block text-sm text-ink-700 hover:text-ink-950">Locations</Link>
                <Link href="/reviews" className="block text-sm text-ink-700 hover:text-ink-950">Reviews</Link>
                <Link href="/faq" className="block text-sm text-ink-700 hover:text-ink-950">FAQ</Link>
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-ink-500">Company</div>
              <div className="mt-4 space-y-3">
                <Link href="/about" className="block text-sm text-ink-700 hover:text-ink-950">About</Link>
                <Link href="/blog" className="block text-sm text-ink-700 hover:text-ink-950">Blog</Link>
                <Link href="/contact" className="block text-sm text-ink-700 hover:text-ink-950">Contact</Link>
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-ink-500">Legal</div>
              <div className="mt-4 space-y-3">
                <Link href="/sitemap.xml" className="block text-sm text-ink-700 hover:text-ink-950">Sitemap</Link>
                <Link href="/robots.txt" className="block text-sm text-ink-700 hover:text-ink-950">Robots</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-xs text-ink-500 tracking-wide">© {year} Cosmetic Treatment. All rights reserved.</p>
          <p className="text-xs text-ink-500">
            Designed for a premium, editorial experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
