"use client";

import Image from "next/image";
import { contact } from "@/data/contact";
import { useLanguageContent } from "@/components/language-provider";

export function Footer() {
  const { content } = useLanguageContent();

  return (
    <footer data-nav-theme="dark" className="bg-coffee-950 py-12 text-cream-100">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/images/logo/siger-golden-bean-logo-crop.webp"
            alt="Siger Golden Bean logo"
            width={220}
            height={120}
            className="h-16 w-auto rounded-md bg-cream-50 object-contain"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-cream-100/76">
            {content.footer.statement}
          </p>
          <p className="mt-4 text-sm font-bold text-gold-300">
            {content.hero.eyebrow}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-300">
            {content.footer.quickLinks}
          </h2>
          <div className="mt-4 grid gap-2">
            {content.nav.items.slice(1).map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="focus-ring rounded-md text-sm text-cream-100/78 transition hover:text-gold-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-300">
            {content.footer.contact}
          </h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-cream-100/78">
            <p>{contact.whatsappDisplay}</p>
            <p>{contact.email}</p>
            <p>{contact.location}</p>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-5 text-xs text-cream-100/56">
        Copyright {new Date().getFullYear()} Siger Golden Bean. {content.footer.copyright}
      </div>
    </footer>
  );
}
