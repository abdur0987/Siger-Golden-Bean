"use client";

import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";

export function WhyChooseUs() {
  const { content } = useLanguageContent();
  const why = content.why;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionHeading
          eyebrow={why.eyebrow}
          title={why.title}
          description={why.description}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {why.reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-3 rounded-md border border-coffee-900/10 bg-cream-50 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
              <p className="text-sm font-bold leading-6 text-coffee-950">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
