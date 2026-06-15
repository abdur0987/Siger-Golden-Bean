"use client";

import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";

export function QualitySection() {
  const { content } = useLanguageContent();
  const quality = content.quality;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <SectionHeading
          eyebrow={quality.eyebrow}
          title={quality.title}
          description={quality.description}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {quality.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-md border border-coffee-900/10 bg-cream-50 p-4"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
              <span className="text-sm font-bold text-coffee-950">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
