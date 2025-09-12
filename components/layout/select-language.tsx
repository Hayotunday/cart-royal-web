"use client";

import { LanguageDropdown } from "@/components/ui/language-dropdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleFlag } from "react-circle-flags";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const SelectLanguages = () => {
  const { locale, setLocale, dictionary } = useLanguage();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLanguageChange = (language: {
    code: string;
    name: string;
    country: string;
  }) => {
    setLocale(language);
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger onClick={() => setIsSheetOpen(true)}>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <CircleFlag
              countryCode={locale?.country?.toLowerCase() || "us"}
              height={20}
            />
          </div>
          <span className="text-sm">
            {locale?.code?.toUpperCase() || "ENG"}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className="pt-2 px-6">
        <SheetHeader>
          <SheetTitle>Change language</SheetTitle>
          <SheetDescription className="invisible">
            Change Language
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          <p className="text-sm text-gray-700 mb-2">Select your language</p>
          <LanguageDropdown
            value={locale?.code}
            onChange={handleLanguageChange}
            placeholder={locale?.name || "Select language"}
            className="focus:border-[#FCA311] hover:border-[#FCA311] h-10"
          />
        </div>
        <div className="mt-6">
          <Button
            onClick={() => setIsSheetOpen(false)}
            className="w-full h-[40px] bg-[#FCA311] text-black hover:text-white"
          >
            {dictionary?.landingPage?.drawers?.selectLanguages?.confirm}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectLanguages;
