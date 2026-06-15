"use client";

import Image from "next/image";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { mailtoUrl, whatsappUrl } from "@/data/contact";
import { useLanguageContent } from "@/components/language-provider";

export function HeroSection() {
  const { content } = useLanguageContent();
  const hero = content.hero;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-coffee-950 text-white"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-[0.34]"
        style={{ backgroundImage: "url('/images/gallery/origin-lampung.webp')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(42,23,17,0.94),rgba(42,23,17,0.72),rgba(25,51,40,0.62))]"
        aria-hidden="true"
      />

      <div className="section-shell grid min-h-[calc(82svh-80px)] items-center gap-10 py-6 md:grid-cols-[1.02fr_0.98fr] lg:min-h-[calc(80svh-80px)]">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-300">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-bold leading-[0.98] text-white md:text-7xl"
          >
            {hero.title}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-cream-100 md:text-3xl">
            {hero.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-cream-100/86 md:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="#sample">
              {content.nav.requestSample} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={mailtoUrl} variant="ghost" className="bg-white/12 text-white hover:bg-white">
              <Download className="h-4 w-4" aria-hidden="true" />
              {hero.catalog}
            </CtaLink>
            <CtaLink href={whatsappUrl} variant="secondary" target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {hero.whatsapp}
            </CtaLink>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-y border-white/14 py-5">
            {hero.stats.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-bold uppercase tracking-wider text-gold-300">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden justify-center md:flex md:justify-end">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-x-10 bottom-2 h-12 rounded-full bg-black/28 blur-2xl" />
            <Image
              src="/images/logo/siger-golden-bean-logo-crop.webp"
              alt="Siger Golden Bean Sumatran Premium Coffee Export brand logo"
              width={704}
              height={384}
              priority
              className="relative w-full rounded-md border border-white/10 bg-cream-50/95 shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
