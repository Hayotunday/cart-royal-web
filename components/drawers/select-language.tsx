"use client";

import { LanguageDropdown } from "@/components/ui/language-dropdown";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleFlag } from "react-circle-flags";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18n from "@/lib/i18n";

const SelectLanguages = () => {
  const { t } = useTranslation();
  const { selectedLanguage, updateLanguage } = useLanguage();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLanguageChange = (language: {
    code: string;
    name: string;
    country: string;
  }) => {
    updateLanguage(language);
    i18n.changeLanguage(language.code);
    setIsSheetOpen(false);
  };

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage.code);
    }
  }, []);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger onClick={() => setIsSheetOpen(true)}>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <CircleFlag
              countryCode={selectedLanguage?.country?.toLowerCase() || "us"}
              height={20}
            />
          </div>
          <span className="text-sm">
            {selectedLanguage?.code?.toUpperCase() || "ENG"}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className="pt-2 px-6">
        <SheetHeader>
          <SheetTitle>Change language</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          <p className="text-sm text-gray-700 mb-2">Select your language</p>
          <LanguageDropdown
            value={selectedLanguage?.code}
            onChange={handleLanguageChange}
            placeholder={selectedLanguage?.name || "Select language"}
            className="focus:border-[#FCA311] hover:border-[#FCA311] h-10"
          />
        </div>
        <div className="mt-6">
          <Button
            onClick={() => setIsSheetOpen(false)}
            className="w-full h-[40px] bg-[#FCA311] text-black hover:text-white"
          >
            {t("landingPage.drawers.selectLanguages.confirm")}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectLanguages;
