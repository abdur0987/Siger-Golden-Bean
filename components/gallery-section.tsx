"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";

export function GallerySection() {
  const { content } = useLanguageContent();
  const gallery = content.gallery;

  return (
    <section id="gallery" data-nav-theme="dark" className="bg-coffee-950 py-20 text-white md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
          tone="light"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.items.map(([title, category, image, alt]) => (
            <article
              key={title}
              className="group overflow-hidden rounded-md border border-white/10 bg-white/6"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="font-serif text-xl font-bold text-white">{title}</h3>
                <span className="rounded-md border border-gold-300/40 px-2.5 py-1 text-xs font-bold text-gold-300">
                  {category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
