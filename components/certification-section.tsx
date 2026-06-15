"use client";

import { FileCheck2 } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { mailtoUrl } from "@/data/contact";
import { useLanguageContent } from "@/components/language-provider";

export function CertificationSection() {
  const { content } = useLanguageContent();
  const certifications = content.certifications;

  return (
    <section id="certifications" className="bg-cream-50 py-20 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={certifications.eyebrow}
            title={certifications.title}
            description={certifications.description}
          />
          <CtaLink href={mailtoUrl} variant="secondary" className="md:mb-1">
            {certifications.requestDocument}
          </CtaLink>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map(([name, status, description]) => (
            <article
              key={name}
              className="rounded-md border border-coffee-900/10 bg-white p-5"
            >
              <FileCheck2 className="h-6 w-6 text-gold-500" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-coffee-950">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{description}</p>
              <span className="mt-4 inline-flex rounded-md border border-origin-700/20 bg-origin-700/8 px-3 py-1 text-xs font-bold text-origin-700">
                {status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
