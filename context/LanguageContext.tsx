"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getDictionary } from "../lib/getDictionary";

type Dictionary = Record<string, any>;

interface LanguageContextType {
  locale: { code: string; name: string; country: string };
  dictionary: Dictionary;
  setLocale: (language: {
    code: string;
    name: string;
    country: string;
  }) => void;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedLocale";

const defaultLanguage = {
  code: "eng",
  name: "English",
  country: "US",
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isReady, setIsReady] = useState(false);
  const [locale, setLocaleState] = useState(defaultLanguage);
  const [dictionary, setDictionary] = useState<Dictionary>({});

  // Load locale from localStorage on first render
  useEffect(() => {
    const savedLocale =
      typeof window !== "undefined"
        ? localStorage.getItem(LOCAL_STORAGE_KEY)
        : null;
    if (savedLocale) setLocaleState(JSON.parse(savedLocale));
  }, []);

  // Update dictionary whenever locale changes

  useEffect(() => {
    setIsReady(false);
    getDictionary(locale).then((dict) => {
      setDictionary(dict);
      setIsReady(true);
    });
  }, [locale]);

  const setLocale = (newLocale: {
    code: string;
    name: string;
    country: string;
  }) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLocale));
    }
  };

  return (
    <LanguageContext.Provider
      value={{ locale, dictionary, setLocale, isReady }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
