"use client";

import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";
import { originProfiles } from "@/data/origin-profiles";

const exploreLabels = {
  en: "Explore This Origin",
  id: "Masuk ke Cerita Origin",
  ar: "استكشف قصة المنشأ"
};

export function OriginSection() {
  const { content, language } = useLanguageContent();
  const origins = content.origins;

  return (
    <section id="origins" className="bg-cream-50 pb-20 pt-12 md:pb-24 md:pt-14">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            eyebrow={origins.eyebrow}
            title={origins.title}
            description={origins.description}
          />
          <div className="rounded-md border border-origin-700/15 bg-origin-900 px-5 py-5 text-cream-100 md:px-6">
            <div className="flex items-center gap-3">
              <MapPinned className="h-6 w-6 text-gold-300" aria-hidden="true" />
              <p className="text-sm font-semibold leading-6">
                {origins.note}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {origins.items.map((origin, index) => {
            const slug = originProfiles[index]?.slug;

            return (
              <article
                key={origin.region}
                className="flex flex-col rounded-md border border-coffee-900/10 bg-white p-5 shadow-[0_12px_35px_rgba(42,23,17,0.06)]"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                  {origin.highlight}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-coffee-950">
                  {origin.region}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/72">{origin.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {origin.coffeeType.map((type) => (
                    <span
                      key={type}
                      className="rounded-md border border-gold-500/20 bg-gold-500/10 px-2.5 py-1 text-xs font-bold text-coffee-900"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-origin-700">
                  {origins.keyAreas}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/66">
                  {origin.areas.join(", ")}
                </p>
                {slug ? (
                  <Link
                    href={`/origins/${slug}`}
                    className="focus-ring mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-coffee-900/12 bg-coffee-950 px-4 py-3 text-sm font-bold text-white transition hover:border-gold-500 hover:bg-gold-500"
                  >
                    {exploreLabels[language]}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
