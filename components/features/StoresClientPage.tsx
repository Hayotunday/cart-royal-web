"use client";

import React, { useState, useMemo } from "react";
import StoreCard from "@/components/shared/store-card";
import StoreFilters from "@/components/shared/store-filters";
import NoStoresFound from "@/components/features/NoStoresFound";
import { Store } from "@/data/index";

export type StoreSortOption = "name" | "rating" | "products";

interface StoresClientPageProps {
  initialStores: Store[];
  initialCategories: string[];
}

export default function StoresClientPage({
  initialStores,
  initialCategories,
}: StoresClientPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState<StoreSortOption>("rating");

  const featuredStores = useMemo(
    () => initialStores.filter((store) => store.featured),
    [initialStores]
  );

  const filteredAndSortedStores = useMemo(() => {
    return initialStores
      .filter((store) => {
        const nameMatch = store.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const descriptionMatch = store.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesSearch = nameMatch || descriptionMatch;
        const matchesCategory =
          selectedCategory === "All Categories" ||
          store.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "rating") {
          return b.rating - a.rating;
        } else {
          // products
          return (b.productCount || 0) - (a.productCount || 0);
        }
      });
  }, [initialStores, searchTerm, selectedCategory, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSortBy("rating");
  };

  return (
    <div className="container px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Official Stores</h1>

      {/* Featured Stores */}
      {featuredStores.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Featured Stores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <StoreFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={initialCategories}
      />

      {/* All Stores */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Stores</h2>
          <p className="text-gray-600">
            {filteredAndSortedStores.length} stores found
          </p>
        </div>

        {filteredAndSortedStores.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <NoStoresFound onClearFilters={handleClearFilters} />
        )}
      </div>
    </div>
  );
}
