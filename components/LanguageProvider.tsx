"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Lang, translations } from "@/lib/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("site-lang");
    if (saved === "ru" || saved === "az") {
      setLangState(saved);
    }
  }, []);

  const setLang = (nextLang: Lang) => {
    localStorage.setItem("site-lang", nextLang);
    setLangState(nextLang);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();
  return translations[lang];
}
