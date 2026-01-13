import Link from 'next/link';

export default function ServiceCard({ service, location = null }) {
  const href = location
    ? `/locations/${location}/${service.slug}`
    : `/${service.slug}`;

  return (
    <Link href={href} className="group block h-full">
      <div className="card card-hover p-7 h-full flex flex-col">
        <div className="flex-1">
          <p className="text-[11px] tracking-[0.18em] uppercase text-ink-500">
            Treatment
          </p>
          <h3 className="mt-3 font-display text-xl text-ink-950 group-hover:text-ink-900">
            {service.name}
          </h3>
          <p className="mt-3 text-sm text-ink-700 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-100 flex items-center justify-between">
          <span className="text-sm text-ink-950 font-medium">{service.priceRange}</span>
          <span className="text-xs tracking-[0.18em] uppercase text-ink-600 group-hover:text-ink-950 transition-colors">
            View <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
