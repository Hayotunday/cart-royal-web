"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { StoreSortOption } from "@/components/features/StoresClientPage"; // Define this type in StoresClientPage

interface StoreFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: StoreSortOption;
  setSortBy: (sort: StoreSortOption) => void;
  categories: string[];
}

const StoreFilters: React.FC<StoreFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="search-stores"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search Stores
          </label>
          <Input
            id="search-stores"
            type="text"
            placeholder="Search by name or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="category-stores"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category-stores"
            className="w-full h-10 px-3 rounded-md border border-input bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="sortby-stores"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Sort By
          </label>
          <select
            id="sortby-stores"
            className="w-full h-10 px-3 rounded-md border border-input bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as StoreSortOption)}
          >
            <option value="rating">Highest Rating</option>
            <option value="products">Most Products</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StoreFilters;
