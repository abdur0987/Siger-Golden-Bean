"use client";

import { PackageCheck } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";

export function ProductSection() {
  const { content } = useLanguageContent();
  const products = content.products;

  return (
    <section id="products" className="bg-white py-20 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={products.eyebrow}
            title={products.title}
            description={products.description}
          />
          <CtaLink href="#sample" className="md:mb-1">
            {products.askSample}
          </CtaLink>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {products.items.map((product) => (
            <article
              key={product.name}
              className="rounded-md border border-coffee-900/10 bg-cream-50 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-origin-700">
                    {product.origin}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-coffee-950">
                    {product.name}
                  </h3>
                </div>
                <span className="rounded-md bg-coffee-900 px-3 py-1 text-xs font-bold text-white">
                  {product.type}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/72">{product.notes}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                    {products.forms}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.forms.map((form) => (
                      <span
                        key={form}
                        className="rounded-md border border-coffee-900/10 bg-white px-2.5 py-1 text-xs font-semibold text-coffee-900"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                    {products.suitableFor}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    {product.suitableFor.join(", ")}
                  </p>
                </div>
              </div>

              <a
                href="#sample"
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-bold text-gold-500 transition hover:text-coffee-900"
              >
                <PackageCheck className="h-4 w-4" aria-hidden="true" />
                {product.sampleAvailable ? products.sampleAvailable : products.askAvailability}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
