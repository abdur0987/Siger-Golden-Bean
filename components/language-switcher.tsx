"use client";

import { Languages } from "lucide-react";
import { languageOptions } from "@/data/site-content";
import { useLanguageContent } from "@/components/language-provider";

type LanguageSwitcherProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function LanguageSwitcher({
  className = "",
  tone = "light"
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguageContent();
  const isDark = tone === "dark";
  const containerStyle = {
    backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "#FFFFFF",
    borderColor: isDark ? "rgba(252, 250, 244, 0.26)" : "rgba(58, 31, 22, 0.12)"
  };

  return (
    <div
      className={`flex items-center gap-1 rounded-md border p-1 transition-colors ${className}`}
      style={containerStyle}
      data-language-switcher={tone}
      aria-label="Language selector"
    >
      <Languages
        className={`hidden h-4 w-4 sm:block ${isDark ? "text-gold-300" : "text-gold-500"}`}
        aria-hidden="true"
      />
      {languageOptions.map((option) => {
        const active = option.code === language;
        const buttonStyle = active
          ? {
              backgroundColor: isDark ? "#FCFAF4" : "#3A1F16",
              color: isDark ? "#3A1F16" : "#FFFFFF"
            }
          : {
              backgroundColor: "transparent",
              color: isDark ? "#FCFAF4" : "rgba(58, 31, 22, 0.72)"
            };

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            data-language-option={option.code}
            className="focus-ring min-h-8 rounded px-2.5 text-xs font-black transition hover:brightness-110"
            style={buttonStyle}
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
