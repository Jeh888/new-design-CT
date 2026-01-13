import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { media } from '@/data/media';

export const metadata = {
  title: 'Treatments | 152 Harley Street',
  description: 'Browse premium aesthetic treatments across London and request a discreet consultation.',
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-22">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Treatments</p>
              <h1 className="mt-5 font-display text-display-md md:text-display-lg text-ink-950">
                Curated, clinic-grade options.
              </h1>
              <p className="mt-6 text-ink-700 leading-relaxed text-lg max-w-xl">
                Explore premium treatments and compare providers across Greater London — designed to feel calm, editorial, and easy to navigate.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/free-quote" className="btn btn-primary">Book consultation</Link>
                <Link href="/locations" className="btn btn-ghost">Browse locations</Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-ink-100 shadow-soft2">
                <Image
                  src={media.treatments.hero}
                  alt={media.treatments.heroAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Consultation</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                Request a private consultation.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                Not sure where to start? Submit your request — we’ll guide you to the right provider.
              </p>
            </div>
            <div className="lg:col-span-7">
              <LeadForm variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
