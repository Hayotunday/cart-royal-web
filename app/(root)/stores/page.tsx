"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import CategoryNav from "@/components/layout/CategoryNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample stores data - in a real app, this would come from an API
const allStores = [
  {
    id: "fashion-store",
    name: "Fashion Store",
    logo: "/placeholder-logo.png",
    category: "Clothing",
    rating: 4.8,
    productCount: 156,
    description: "Official store for trendy fashion items and accessories.",
    featured: true,
  },
  {
    id: "electronics-hub",
    name: "Electronics Hub",
    logo: "/placeholder-logo.png",
    category: "Electronics",
    rating: 4.6,
    productCount: 243,
    description: "Your one-stop shop for all electronics and gadgets.",
    featured: true,
  },
  {
    id: "sports-outlet",
    name: "Sports Outlet",
    logo: "/placeholder-logo.png",
    category: "Sports",
    rating: 4.5,
    productCount: 128,
    description: "Quality sports equipment and athletic wear.",
    featured: true,
  },
  {
    id: "home-decor",
    name: "Home Decor",
    logo: "/placeholder-logo.png",
    category: "Home & Living",
    rating: 4.7,
    productCount: 189,
    description: "Beautiful home decor items to enhance your living space.",
    featured: true,
  },
  {
    id: "beauty-essentials",
    name: "Beauty Essentials",
    logo: "/placeholder-logo.png",
    category: "Beauty",
    rating: 4.4,
    productCount: 112,
    description: "Premium beauty and skincare products.",
    featured: false,
  },
  {
    id: "tech-gadgets",
    name: "Tech Gadgets",
    logo: "/placeholder-logo.png",
    category: "Electronics",
    rating: 4.3,
    productCount: 87,
    description: "Latest tech gadgets and accessories.",
    featured: false,
  },
  {
    id: "kitchen-wonders",
    name: "Kitchen Wonders",
    logo: "/placeholder-logo.png",
    category: "Home & Living",
    rating: 4.6,
    productCount: 94,
    description: "Modern kitchen appliances and cookware.",
    featured: false,
  },
  {
    id: "kids-corner",
    name: "Kids Corner",
    logo: "/placeholder-logo.png",
    category: "Kids",
    rating: 4.5,
    productCount: 143,
    description: "Everything for your little ones - toys, clothes, and more.",
    featured: false,
  },
  {
    id: "outdoor-adventures",
    name: "Outdoor Adventures",
    logo: "/placeholder-logo.png",
    category: "Sports",
    rating: 4.2,
    productCount: 76,
    description: "Gear up for your outdoor adventures.",
    featured: false,
  },
  {
    id: "book-haven",
    name: "Book Haven",
    logo: "/placeholder-logo.png",
    category: "Books",
    rating: 4.9,
    productCount: 312,
    description: "A paradise for book lovers with a vast collection.",
    featured: false,
  },
  {
    id: "pet-supplies",
    name: "Pet Supplies",
    logo: "/placeholder-logo.png",
    category: "Pets",
    rating: 4.7,
    productCount: 128,
    description: "Quality products for your furry friends.",
    featured: false,
  },
  {
    id: "jewelry-box",
    name: "Jewelry Box",
    logo: "/placeholder-logo.png",
    category: "Jewelry",
    rating: 4.8,
    productCount: 95,
    description: "Elegant jewelry pieces for every occasion.",
    featured: false,
  },
];

// Available categories for filtering
const categories = [
  "All Categories",
  "Clothing",
  "Electronics",
  "Sports",
  "Home & Living",
  "Beauty",
  "Kids",
  "Books",
  "Pets",
  "Jewelry",
];

export default function Stores() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState<"name" | "rating" | "products">(
    "rating"
  );

  // Filter and sort stores
  const filteredStores = allStores
    .filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.description.toLowerCase().includes(searchTerm.toLowerCase());
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
        return b.productCount - a.productCount;
      }
    });

  // Featured stores
  const featuredStores = allStores.filter((store) => store.featured);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />

      <div className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Official Stores</h1>

        {/* Featured Stores */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Featured Stores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredStores.map((store) => (
              <Link
                key={store.id}
                href={`/store/${store.id}`}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 mb-4 overflow-hidden">
                      <img
                        src={store.logo}
                        alt={store.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{store.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {store.category}
                    </p>
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400 mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-sm">
                        {store.rating} | {store.productCount} Products
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {store.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search Stores
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search by name or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
                htmlFor="sortBy"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sort By
              </label>
              <select
                id="sortBy"
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "rating" | "products")
                }
              >
                <option value="rating">Highest Rating</option>
                <option value="products">Most Products</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* All Stores */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Stores</h2>
            <p className="text-gray-600">
              {filteredStores.length} stores found
            </p>
          </div>

          {filteredStores.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredStores.map((store) => (
                <Link
                  key={store.id}
                  href={`/store/${store.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gray-100 mb-3 overflow-hidden">
                        <img
                          src={store.logo}
                          alt={store.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold mb-1">{store.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {store.category}
                      </p>
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-yellow-400 mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span className="text-xs">
                          {store.rating} | {store.productCount} Products
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {store.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">No stores found</h2>
              <p className="text-gray-600 max-w-md mb-6">
                Try adjusting your search criteria or browse a different
                category.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
