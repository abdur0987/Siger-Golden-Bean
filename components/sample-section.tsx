"use client";

import { ArrowRight, Coffee, Package, Scale } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { mailtoUrl, whatsappUrl } from "@/data/contact";
import { useLanguageContent } from "@/components/language-provider";

const sampleIcons = [Scale, Coffee, Package];

export function SampleSection() {
  const { content } = useLanguageContent();
  const sample = content.sample;

  return (
    <section id="sample" className="bg-origin-900 py-20 text-white md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={sample.eyebrow}
            title={sample.title}
            description={sample.description}
            tone="light"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={whatsappUrl} target="_blank" rel="noreferrer">
              {content.nav.requestSample} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={mailtoUrl} variant="ghost" className="bg-white/10 text-white hover:bg-white">
              {sample.requestQuotation}
            </CtaLink>
          </div>
        </div>

        <div className="grid gap-4">
          {sample.points.map(([title, body], index) => {
            const Icon = sampleIcons[index] ?? Package;

            return (
            <article
              key={title}
              className="rounded-md border border-white/12 bg-white/8 p-5"
            >
              <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-cream-100/78">{body}</p>
            </article>
            );
          })}
          <p className="rounded-md border border-gold-300/30 bg-gold-300/10 p-4 text-sm leading-6 text-cream-100">
            {sample.note}
          </p>
        </div>
      </div>
    </section>
  );
}
