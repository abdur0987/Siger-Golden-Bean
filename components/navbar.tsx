"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CtaLink } from "@/components/cta-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguageContent } from "@/components/language-provider";

type NavTheme = "light" | "dark";

export function Navbar() {
  const { content } = useLanguageContent();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [navTheme, setNavTheme] = useState<NavTheme>("light");
  const isDark = navTheme === "dark";
  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  useEffect(() => {
    const detectTheme = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section, footer")
      );
      const section = sections.reduce<HTMLElement | null>((activeSection, item) => {
        const rect = item.getBoundingClientRect();
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        );

        if (!activeSection) {
          return visibleHeight > 0 ? item : activeSection;
        }

        const activeRect = activeSection.getBoundingClientRect();
        const activeVisibleHeight = Math.max(
          0,
          Math.min(activeRect.bottom, window.innerHeight) - Math.max(activeRect.top, 0)
        );

        return visibleHeight > activeVisibleHeight ? item : activeSection;
      }, null);
      const nextTheme = section?.dataset.navTheme === "dark" ? "dark" : "light";

      setNavTheme((currentTheme) => (currentTheme === nextTheme ? currentTheme : nextTheme));
    };

    detectTheme();
    window.addEventListener("scroll", detectTheme, { passive: true });
    window.addEventListener("resize", detectTheme);

    return () => {
      window.removeEventListener("scroll", detectTheme);
      window.removeEventListener("resize", detectTheme);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        backgroundColor: isDark ? "rgba(42, 23, 17, 0.78)" : "rgba(252, 250, 244, 0.94)"
      }}
      className={`sticky top-0 z-40 border-b backdrop-blur transition-colors duration-300 ${
        isDark
          ? "border-white/12 text-cream-50 shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
          : "border-coffee-900/10 text-coffee-900"
      }`}
    >
      <nav className="section-shell flex min-h-20 items-center justify-between gap-3">
        <a href={resolveHref("#home")} className="focus-ring flex shrink-0 items-center gap-3 rounded-md">
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
              href={resolveHref(href)}
              data-nav-link="true"
              style={{ color: isDark ? "#FCFAF4" : "#3A1F16" }}
              className={`focus-ring rounded-md text-sm font-semibold transition hover:text-gold-500 ${
                isDark ? "text-cream-50" : "text-coffee-900"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher tone={isDark ? "dark" : "light"} />
          <CtaLink href={resolveHref("#sample")}>{content.nav.requestSample}</CtaLink>
        </div>

        <details className="group relative lg:hidden">
          <summary
            className={`focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border transition-colors ${
              isDark
                ? "border-white/20 bg-white/10 text-white"
                : "border-coffee-900/15 bg-white text-coffee-900"
            }`}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">{content.nav.openMenu}</span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-md border border-coffee-900/10 bg-cream-50 p-3 shadow-soft">
            <div className="grid gap-1">
              <LanguageSwitcher className="mb-2" />
              {content.nav.items.map(([label, href]) => (
                <a
                  key={href}
                  href={resolveHref(href)}
                  style={{ color: "#3A1F16" }}
                  className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-coffee-900 hover:bg-cream-200/70"
                >
                  {label}
                </a>
              ))}
              <a
                href={resolveHref("#sample")}
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
