"use client";

import React from "react";
import { Input } from "@/components/ui/input";

interface FilterOption {
  [key: string]: string[];
}

export interface FilterState {
  type: string[];
  brand: string[];
  color: string[];
  size: string[];
  shipping: string[];
  rating: string[];
  seller: string[];
  priceRange: {
    min: number | null;
    max: number | null;
  };
}

export type StringArrayFilterKeys = {
  [K in keyof FilterState]: FilterState[K] extends string[] ? K : never;
}[keyof FilterState];

interface FilterSidebarProps {
  filterOptions: FilterOption;
  filters: FilterState;
  expandedFilters: Record<string, boolean>;
  onToggleFilterSection: (section: string) => void;
  onFilterChange: (filterType: StringArrayFilterKeys, value: string) => void;
  onPriceChange: (type: "min" | "max", value: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filterOptions,
  filters,
  expandedFilters,
  onToggleFilterSection,
  onFilterChange,
  onPriceChange,
}) => {
  const renderFilterSection = (
    title: string,
    filterKey: StringArrayFilterKeys,
    options: string[]
  ) => (
    <div className="border-b pb-4 mb-4">
      <button
        className="flex justify-between items-center w-full font-medium"
        onClick={() => onToggleFilterSection(filterKey)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${
            expandedFilters[filterKey] ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expandedFilters[filterKey] && (
        <div className="mt-2 space-y-1">
          {options.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={`${filterKey}-${option}`}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                checked={(filters[filterKey] as string[]).includes(option)}
                onChange={() => onFilterChange(filterKey, option)}
              />
              <label
                htmlFor={`${filterKey}-${option}`}
                className="ml-2 text-sm text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white rounded-lg border p-4">
        {renderFilterSection("Type", "type", filterOptions.type)}
        {renderFilterSection("Brand", "brand", filterOptions.brand)}
        {renderFilterSection("Color", "color", filterOptions.color)}

        {/* Price Filter */}
        <div className="border-b pb-4 mb-4">
          <button
            className="flex justify-between items-center w-full font-medium"
            onClick={() => onToggleFilterSection("price")}
          >
            Price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${
                expandedFilters.price ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {expandedFilters.price && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange.min ?? ""}
                  onChange={(e) => onPriceChange("min", e.target.value)}
                  className="w-full"
                />
                <span>-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange.max ?? ""}
                  onChange={(e) => onPriceChange("max", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>

        {renderFilterSection("Size", "size", filterOptions.size)}
        {renderFilterSection("Shipping", "shipping", filterOptions.shipping)}
        {renderFilterSection("Product Rating", "rating", filterOptions.rating)}

        {/* Seller Filter - Note: The title was "Official Stores" but filterKey is "seller" */}
        <div className="border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
          <button
            className="flex justify-between items-center w-full font-medium"
            onClick={() => onToggleFilterSection("seller")}
          >
            Official Stores {/* Title can be more generic if options change */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${
                expandedFilters.seller ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {expandedFilters.seller && (
            <div className="mt-2 space-y-1">
              {filterOptions.seller.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`seller-${option}`}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={filters.seller.includes(option)}
                    onChange={() => onFilterChange("seller", option)}
                  />
                  <label
                    htmlFor={`seller-${option}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
