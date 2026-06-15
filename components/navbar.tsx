"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguageContent } from "@/components/language-provider";

export function Navbar() {
  const { content } = useLanguageContent();

  return (
    <header className="sticky top-0 z-40 border-b border-coffee-900/10 bg-cream-50/92 backdrop-blur">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-3">
        <a href="#home" className="focus-ring flex shrink-0 items-center gap-3 rounded-md">
          <Image
            src="/images/logo/siger-golden-bean-logo-crop.webp"
            alt="Siger Golden Bean logo"
            width={220}
            height={120}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          {content.nav.items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring rounded-md text-sm font-semibold text-coffee-900/76 transition hover:text-gold-500"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <CtaLink href="#sample">{content.nav.requestSample}</CtaLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-coffee-900/15 bg-white text-coffee-900">
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">{content.nav.openMenu}</span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-md border border-coffee-900/10 bg-cream-50 p-3 shadow-soft">
            <div className="grid gap-1">
              <LanguageSwitcher className="mb-2" />
              {content.nav.items.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-coffee-900 hover:bg-cream-200/70"
                >
                  {label}
                </a>
              ))}
              <a
                href="#sample"
                className="focus-ring mt-2 rounded-md bg-gold-500 px-3 py-3 text-center text-sm font-bold text-white"
              >
                {content.nav.requestSample}
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
