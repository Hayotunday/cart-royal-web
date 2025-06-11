import React, {
  useCallback,
  useState,
  forwardRef,
  useEffect,
  ForwardedRef,
} from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronsUpDown, CheckIcon, Globe } from "lucide-react";
import { CircleFlag } from "react-circle-flags";
import { countries } from "country-data-list";
import { useLanguage } from "@/context/LanguageContext";

type Country = {
  alpha2: string;
  name: string;
  emoji?: string;
  status?: string;
  ioc?: string;
};

interface CountryDropdownProps {
  options?: Country[];
  onChange?: (value: Country | Country[] | null) => void;
  value?: string | string[] | null;
  disabled?: boolean;
  slim?: boolean;
  inline?: boolean;
  multiple?: boolean;
  textSize?: "xs" | "sm" | "base" | "lg" | "xl";
  className?: string;
  [key: string]: any;
}

const textSizeClassMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const CountryDropdownComponent = (
  {
    options = countries.all.filter(
      (country) =>
        country.emoji && country.status !== "deleted" && country.ioc !== "PRK"
    ),
    onChange,
    value,
    disabled = false,
    slim = false,
    inline = false,
    multiple = false,
    textSize = "base",
    className,
    ...props
  }: CountryDropdownProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const { dictionary, isReady } = useLanguage();

  const textSizeClass = textSizeClassMap[textSize] || "text-base";

  useEffect(() => {
    if (!value) {
      if (selectedCountries.length > 0) {
        setSelectedCountries([]);
      }
      return;
    }

    if (multiple && Array.isArray(value)) {
      const currentValues = selectedCountries.map((c) => c.alpha2);
      const hasChanges =
        value.length !== currentValues.length ||
        !value.every((v) => currentValues.includes(v));

      if (hasChanges) {
        const initialCountries = options.filter((country) =>
          value.includes(country.alpha2)
        );
        setSelectedCountries(initialCountries);
      }
    } else if (!multiple && typeof value === "string") {
      const currentValue = selectedCountries[0]?.alpha2;
      if (value !== currentValue) {
        const initialCountry = options.find(
          (country) => country.alpha2 === value
        );
        setSelectedCountries(initialCountry ? [initialCountry] : []);
      }
    }
  }, [value, options, multiple, selectedCountries]);

  const handleSelect = useCallback(
    (country: Country) => {
      if (multiple) {
        const newSelection = selectedCountries.some(
          (c) => c.alpha2 === country.alpha2
        )
          ? selectedCountries.filter((c) => c.alpha2 !== country.alpha2)
          : [...selectedCountries, country];

        setSelectedCountries(newSelection);
        onChange?.(newSelection.length > 0 ? newSelection : null);
      } else {
        setSelectedCountries([country]);
        onChange?.(country);
        setOpen(false);
      }
    },
    [onChange, multiple, selectedCountries]
  );

  const triggerClasses = cn(
    "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-lg border border-gray-300 bg-white px-3 ring-offset-background focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 transition-colors duration-200",
    textSizeClass,
    slim === true && "gap-1 w-min",
    inline && "rounded-r-none border-r-0 gap-1 pr-1 w-min",
    className
  );

  if (!isReady) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        className={triggerClasses}
        disabled={disabled}
        {...props}
      >
        {selectedCountries.length > 0 ? (
          <div className="flex items-center flex-grow gap-2 overflow-hidden">
            {multiple ? (
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedCountries.length} selected
              </span>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-4 h-4 shrink-0 overflow-hidden rounded-full">
                  <CircleFlag
                    countryCode={selectedCountries[0].alpha2.toLowerCase()}
                    height={16}
                  />
                </div>
                {slim === false && !inline && (
                  <span
                    className={`overflow-hidden text-ellipsis whitespace-nowrap text-black ${textSizeClass}`}
                  >
                    {selectedCountries[0].name}
                  </span>
                )}
              </>
            )}
          </div>
        ) : (
          <span
            className={`flex items-center gap-2 text-gray-400 ${textSizeClass}`}
          >
            {inline || slim ? (
              <Globe size={16} />
            ) : (
              dictionary.landingPage.signUpPage.selectCountryPlaceholder
            )}
          </span>
        )}

        {!inline ? (
          <ChevronDown size={16} className="text-black opacity-50" />
        ) : (
          <ChevronsUpDown size={16} className="text-black opacity-50" />
        )}
      </PopoverTrigger>
      <PopoverContent
        collisionPadding={10}
        side="bottom"
        className="min-w-[--radix-popper-anchor-width] p-0"
      >
        <Command className="w-full max-h-[200px] sm:max-h-[270px]">
          <CommandList>
            <div className="sticky top-0 z-10 bg-popover">
              <CommandInput
                placeholder={
                  dictionary.landingPage.signUpPage.searchCountryPlaceholder
                }
                className={`h-12 ${textSizeClass} placeholder:text-gray-400 focus:placeholder:text-gray-400`}
              />
            </div>
            <CommandEmpty>
              {dictionary.landingPage.signUpPage.noCountryFound}
            </CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.name)
                .map((option, key) => (
                  <CommandItem
                    className={`flex items-center w-full gap-2 py-2.5 ${textSizeClass}`}
                    key={key}
                    onSelect={() => handleSelect(option)}
                  >
                    <div className="flex flex-grow space-x-2 overflow-hidden">
                      <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                        <CircleFlag
                          countryCode={option.alpha2.toLowerCase()}
                          height={20}
                        />
                      </div>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4 shrink-0",
                        selectedCountries.some(
                          (c) => c.alpha2 === option.alpha2
                        )
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);
