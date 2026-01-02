import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language } from "~/utils/translations";

interface LanguageContextType {
  language: Language;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    async function detectLocation() {
      try {
        // Try to get location from browser language first as a fallback
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("pt")) {
          setLanguage("pt");
          return;
        }

        // Try to get country via a free API
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        if (data.country_code === "BR" || data.country_code === "PT") {
          setLanguage("pt");
        } else {
          setLanguage("en");
        }
      } catch (error) {
        console.error("Failed to detect location:", error);
      }
    }

    detectLocation();
  }, []);

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
