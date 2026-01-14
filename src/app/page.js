import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFeaturedReviews } from '@/data/reviews';
import { getGeneralFaqs } from '@/data/faqs';
import { getRecentBlogs } from '@/data/blogs';
import { media } from '@/data/media';

export default function HomePage() {
  const boroughs = getBoroughs();
  const featuredReviews = getFeaturedReviews(3);
  const generalFaqs = getGeneralFaqs().slice(0, 5);
  const recentBlogs = getRecentBlogs(3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">
                Cosmetic Treatments • London
              </p>
              <h1 className="mt-5 font-display text-display-md md:text-display-lg text-ink-950">
                A quieter, more refined approach to aesthetics.
              </h1>
              <p className="mt-6 text-ink-700 leading-relaxed text-lg max-w-xl">
                Explore premium cosmetic treatments and connect with verified practitioners across Greater London — with a calm, concierge-style experience.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/free-quote" className="btn btn-primary">
                  Book consultation
                </Link>
                <Link href="/treatments" className="btn btn-ghost">
                  View treatments
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
                <div>
                  <div className="font-display text-2xl text-ink-950">London</div>
                  <div className="mt-1 text-xs tracking-wide text-ink-500">Citywide access</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-ink-950">Verified</div>
                  <div className="mt-1 text-xs tracking-wide text-ink-500">Trusted providers</div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display text-2xl text-ink-950">Concierge</div>
                  <div className="mt-1 text-xs tracking-wide text-ink-500">Private requests</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft2 border border-ink-100">
                <Image
                  src={media.home.hero}
                  alt={media.home.heroAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-ink-500">
                <span>Private consultations. Verified practitioners.</span>
                <span className="tracking-[0.18em] uppercase">Cosmetic Treatment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Introduction</p>
            <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
              Cosmetic treatments, with clarity and restraint.
            </h2>
            <div className="mt-5 space-y-4 text-ink-700 leading-relaxed">
              <p>
                Cosmetic Treatment helps you explore non-surgical aesthetic options and connect with trusted practitioners across London.
                Rather than trawling through endless clinic pages, you can compare treatments, understand typical pricing, and request a consultation in a single, calm flow.
              </p>
              <p>
                Whether you&apos;re looking for subtle anti-wrinkle treatments, skin rejuvenation, or injectables, we focus on helping you make an informed choice.
                We keep the experience discreet, straightforward, and designed around the standard you expect from premium providers.
              </p>
              <p>
                If you already know what you want, you can go straight to a treatment and request a quote.
                If you&apos;re still deciding, our guides and comparisons help you move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Treatments</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                A curated selection — designed to feel effortless.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                Browse popular options, compare providers, and request a consultation with a calm, minimal flow.
              </p>
            </div>
            <Link href="/treatments" className="hidden sm:inline-flex text-xs tracking-[0.18em] uppercase text-ink-600 hover:text-ink-950">
              View all <span aria-hidden className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link href="/treatments" className="btn btn-ghost w-full">
              View all treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-porcelain-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Why choose us</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                Premium, not performative.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                We combine an editorial browsing experience with practical, trust-first information.
                The goal is simple: help you find the right treatment and the right provider, without the noise.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-500" />
                  <p className="text-sm text-ink-700 leading-relaxed">Trust signals up front: credentials, reviews and clear expectations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-500" />
                  <p className="text-sm text-ink-700 leading-relaxed">Discreet consultation requests — built for privacy and ease.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-500" />
                  <p className="text-sm text-ink-700 leading-relaxed">A calm, mobile-first experience with premium-level polish.</p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/about" className="btn btn-primary">
                  About the clinic
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-ink-100 shadow-soft2 aspect-[16/10]">
                <Image
                  src={media.home.trust}
                  alt={media.home.trustAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Reviews</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                Words from patients.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                A selection of recent experiences from across London.
              </p>
            </div>
            <Link href="/reviews" className="hidden sm:inline-flex text-xs tracking-[0.18em] uppercase text-ink-600 hover:text-ink-950">
              View all <span aria-hidden className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-18">
          <div className="card p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Locations</p>
                <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                  Across Greater London.
                </h2>
                <p className="mt-4 text-ink-700 leading-relaxed">
                  Find treatments near you — from central boroughs to the surrounding areas.
                </p>
              </div>
              <Link href="/locations" className="btn btn-ghost">
                Browse locations
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {boroughs.slice(0, 12).map((b) => (
                <Link
                  key={b.slug}
                  href={`/locations/${b.slug}`}
                  className="rounded-xl border border-ink-100 bg-white/60 px-4 py-3 text-sm text-ink-800 hover:bg-porcelain-200 transition-colors"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section className="bg-porcelain-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Consultation</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                Begin discreetly.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                Tell us what you’re looking for. We’ll handle the rest with care.
              </p>

              <div className="mt-10 relative rounded-3xl overflow-hidden border border-ink-100 shadow-soft2 aspect-[4/3]">
                <Image
                  src={media.home.treatments}
                  alt={media.home.treatmentsAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-porcelain-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
          <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">FAQ</p>
          <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
            A few details, answered.
          </h2>

          <div className="mt-10">
            <FAQAccordion faqs={generalFaqs} />
          </div>

          <div className="mt-10">
            <Link href="/faq" className="btn btn-ghost w-full sm:w-auto">
              View full FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-porcelain-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-18">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.24em] uppercase text-ink-500">Blog</p>
              <h2 className="mt-4 font-display text-display-sm md:text-display-md text-ink-950">
                Notes on modern aesthetics.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                A short read — trends, guidance and calm explanations.
              </p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex text-xs tracking-[0.18em] uppercase text-ink-600 hover:text-ink-950">
              View all <span aria-hidden className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group block">
                <div className="card card-hover overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    {/* Blog images are excluded from the site-wide image replacement requirement. */}
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-7">
                    <p className="text-[11px] tracking-[0.18em] uppercase text-ink-500">{blog.category}</p>
                    <h3 className="mt-3 font-display text-xl text-ink-950 group-hover:text-ink-900">
                      {blog.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="mt-6 text-xs tracking-[0.18em] uppercase text-ink-600">
                      Read <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
