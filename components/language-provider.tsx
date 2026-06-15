"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { languageOptions, siteContent, type Language } from "@/data/site-content";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: (typeof siteContent)[Language];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "id" || value === "ar";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("siger-language");
    if (isLanguage(storedLanguage)) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const option = languageOptions.find((item) => item.code === language) ?? languageOptions[0];
  const dir = option.dir;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [dir, language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("siger-language", nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: siteContent[language],
      dir
    }),
    [dir, language]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div dir={dir} lang={language}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguageContent() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContent must be used inside LanguageProvider");
  }

  return context;
}
