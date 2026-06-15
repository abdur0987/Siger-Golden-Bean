"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";

export function ProcessSection() {
  const { content } = useLanguageContent();
  const process = content.process;

  return (
    <section id="process" className="bg-cream-100 py-20 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {process.steps.map(([title, description], index) => (
            <article
              key={title}
              className="grid grid-cols-[44px_1fr] gap-4 rounded-md border border-coffee-900/10 bg-white p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gold-500 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-base font-bold text-coffee-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-origin-700/14 bg-origin-900 p-5 text-cream-100">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
            <p className="text-sm leading-6">
              {process.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
