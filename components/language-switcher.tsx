"use client";

import { Languages } from "lucide-react";
import { languageOptions } from "@/data/site-content";
import { useLanguageContent } from "@/components/language-provider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguageContent();

  return (
    <div
      className={`flex items-center gap-1 rounded-md border border-coffee-900/12 bg-white p-1 ${className}`}
      aria-label="Language selector"
    >
      <Languages className="hidden h-4 w-4 text-gold-500 sm:block" aria-hidden="true" />
      {languageOptions.map((option) => {
        const active = option.code === language;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            data-language-option={option.code}
            className={`focus-ring min-h-8 rounded px-2.5 text-xs font-black transition ${
              active
                ? "bg-coffee-900 text-white"
                : "text-coffee-900/72 hover:bg-cream-100 hover:text-coffee-900"
            }`}
            aria-label={option.label}
            aria-pressed={active}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
