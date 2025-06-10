"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const STORAGE_KEY = "selectedLanguage";

const defaultLanguage = {
  code: "eng",
  name: "English",
  country: "US",
};

interface LanguageContextType {
  selectedLanguage: { code: string; name: string; country: string };
  updateLanguage: (language: {
    code: string;
    name: string;
    country: string;
  }) => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (savedLanguage) {
      setSelectedLanguage(JSON.parse(savedLanguage));
    }
  }, []);

  const updateLanguage = (language: {
    code: string;
    name: string;
    country: string;
  }) => {
    setSelectedLanguage(language);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(language));
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
