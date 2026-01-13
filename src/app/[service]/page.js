import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFaqsByTreatment } from '@/data/faqs';
import { media } from '@/data/media';

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  return {
    title: `${service.name} London | 152 Harley Street`,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const boroughs = getBoroughs();
  const faqs = getFaqsByTreatment(service.slug).slice(0, 8);

  return (
    <>
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-22">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Treatment</p>
              <h1 className="mt-5 font-display text-display-md md:text-display-lg text-ink-950">
                {service.name}
              </h1>
              <p className="mt-6 text-ink-700 leading-relaxed text-lg max-w-xl">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-ink-200 bg-white/70 px-4 py-2 text-xs text-ink-800">
                  {service.priceRange}
                </span>
                <span className="rounded-full border border-ink-200 bg-white/70 px-4 py-2 text-xs text-ink-800">
                  London • Greater London
                </span>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/free-quote" className="btn btn-primary">
                  Book consultation
                </Link>
                <Link href="/treatments" className="btn btn-ghost">
                  Browse all treatments
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-ink-100 shadow-soft2">
                <Image
                  src={media.service.hero}
                  alt={media.service.heroAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="card p-10">
                <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Overview</p>
                <h2 className="mt-4 font-display text-3xl text-ink-950">What to expect</h2>
                <p className="mt-4 text-ink-700 leading-relaxed">
                  {service.longDescription}
                </p>

                {service.benefits?.length ? (
                  <div className="mt-8">
                    <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Benefits</p>
                    <ul className="mt-4 space-y-3">
                      {service.benefits.slice(0, 6).map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-700">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-champagne-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-10 pt-8 border-t border-ink-100 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                  <Link href="/free-quote" className="btn btn-primary">
                    Request consultation
                  </Link>
                  <Link href="/reviews" className="text-xs tracking-[0.18em] uppercase text-ink-600 hover:text-ink-950">
                    Read patient notes <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="card p-8">
                <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Find a location</p>
                <h3 className="mt-3 font-display text-2xl text-ink-950">Choose your borough</h3>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  See providers and pricing guidance near you.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {boroughs.slice(0, 10).map((b) => (
                    <Link
                      key={b.slug}
                      href={`/locations/${b.slug}/${service.slug}`}
                      className="rounded-xl border border-ink-100 bg-white/60 px-3 py-2 text-sm text-ink-800 hover:bg-porcelain-200 transition-colors"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/locations" className="text-xs tracking-[0.18em] uppercase text-ink-600 hover:text-ink-950">
                    View all locations <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              <div className="card p-8">
                <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Next step</p>
                <h3 className="mt-3 font-display text-2xl text-ink-950">Request a discreet consult</h3>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Share what you’re considering and your preferred area — we’ll guide you to a suitable provider.
                </p>
                <div className="mt-6">
                  <Link href="/free-quote" className="btn btn-primary w-full">Start request</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {faqs?.length ? (
        <section className="bg-porcelain-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
            <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">FAQ</p>
            <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
              {service.name}, answered.
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Consultation</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                A calm, private start.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                Tell us what you’d like to improve, your timeline, and your preferred location.
              </p>
            </div>
            <div className="lg:col-span-7">
              <LeadForm preselectedService={service.slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
