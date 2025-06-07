"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import CategoryNav from "@/components/layout/CategoryNav";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample product data - in a real app, this would come from an API
const allProducts = [
  {
    id: "1",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/placeholder-product.png",
    brand: "Fashion Brand",
    type: "T-Shirt",
    color: "Blue",
    size: "M",
    freeShipping: true,
    rating: 4.5,
    officialStore: true,
    storeLogoUrl: "/placeholder-logo.png",
    storeName: "Fashion Store",
  },
  {
    id: "2",
    name: "Men's Slim Fit Jeans",
    price: 12000,
    image: "/placeholder-product.png",
    brand: "Denim Co",
    type: "Jeans",
    color: "Black",
    size: "32",
    freeShipping: false,
    rating: 4.2,
    officialStore: false,
  },
  {
    id: "3",
    name: "Men's Running Shoes",
    price: 25000,
    image: "/placeholder-product.png",
    brand: "SportyFit",
    type: "Shoes",
    color: "Red",
    size: "42",
    freeShipping: true,
    rating: 4.8,
    officialStore: true,
    storeLogoUrl: "/placeholder-logo.png",
    storeName: "Sports Outlet",
  },
  {
    id: "4",
    name: "Men's Formal Shirt",
    price: 8000,
    image: "/placeholder-product.png",
    brand: "Elegance",
    type: "Shirt",
    color: "White",
    size: "L",
    freeShipping: true,
    rating: 4.0,
    officialStore: false,
  },
  {
    id: "5",
    name: "Men's Leather Wallet",
    price: 7500,
    image: "/placeholder-product.png",
    brand: "LeatherCraft",
    type: "Accessory",
    color: "Brown",
    size: "One Size",
    freeShipping: false,
    rating: 4.6,
    officialStore: true,
    storeLogoUrl: "/placeholder-logo.png",
    storeName: "Leather Goods",
  },
  {
    id: "6",
    name: "Men's Hooded Sweatshirt",
    price: 15000,
    image: "/placeholder-product.png",
    brand: "Urban Style",
    type: "Hoodie",
    color: "Gray",
    size: "XL",
    freeShipping: true,
    rating: 4.3,
    officialStore: false,
  },
  {
    id: "7",
    name: "Men's Cargo Shorts",
    price: 9000,
    image: "/placeholder-product.png",
    brand: "Outdoor Life",
    type: "Shorts",
    color: "Khaki",
    size: "34",
    freeShipping: false,
    rating: 4.1,
    officialStore: false,
  },
  {
    id: "8",
    name: "Men's Analog Watch",
    price: 35000,
    image: "/placeholder-product.png",
    brand: "TimeKeeper",
    type: "Accessory",
    color: "Silver",
    size: "One Size",
    freeShipping: true,
    rating: 4.9,
    officialStore: true,
    storeLogoUrl: "/placeholder-logo.png",
    storeName: "Watch World",
  },
];

// Filter options
const filterOptions = {
  type: ["T-Shirt", "Jeans", "Shoes", "Shirt", "Hoodie", "Shorts", "Accessory"],
  brand: [
    "Fashion Brand",
    "Denim Co",
    "SportyFit",
    "Elegance",
    "LeatherCraft",
    "Urban Style",
    "Outdoor Life",
    "TimeKeeper",
  ],
  color: ["Blue", "Black", "Red", "White", "Brown", "Gray", "Khaki", "Silver"],
  size: ["S", "M", "L", "XL", "32", "34", "42", "One Size"],
  shipping: ["Free Shipping", "Paid Shipping"],
  rating: ["4.5 & Above", "4.0 & Above", "3.5 & Above", "3.0 & Above"],
  seller: ["Official Stores", "All Sellers"],
};

interface FilterState {
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

// Utility type to extract keys of FilterState whose values are string arrays
type StringArrayFilterKeys = {
  [K in keyof FilterState]: FilterState[K] extends string[] ? K : never;
}[keyof FilterState];

export default function Products({ params }: { params: { category: string } }) {
  const categoryName = params?.category || "men";
  const formattedCategoryName =
    categoryName.charAt(0).toUpperCase() +
    categoryName.slice(1).replace("-", " & ");

  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [expandedFilters, setExpandedFilters] = useState<
    Record<string, boolean>
  >({
    type: true,
    brand: true,
    color: true,
    price: true,
    size: true,
    shipping: true,
    rating: true,
    seller: true,
  });

  const [filters, setFilters] = useState<FilterState>({
    type: [],
    brand: [],
    color: [],
    size: [],
    shipping: [],
    rating: [],
    seller: [],
    priceRange: {
      min: null,
      max: null,
    },
  });

  // Toggle filter section expansion
  const toggleFilterSection = (section: string) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section],
    });
  };

  // Handle checkbox filter changes
  const handleFilterChange = (
    filterType: StringArrayFilterKeys,
    value: string
  ) => {
    setFilters((prev) => {
      const currentFilters = [...(prev[filterType] as string[])];
      const index = currentFilters.indexOf(value);

      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }

      return {
        ...prev,
        [filterType]: currentFilters,
      };
    });
  };

  // Handle price range changes
  const handlePriceChange = (type: "min" | "max", value: string) => {
    const numValue = value === "" ? null : parseInt(value, 10);

    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: numValue,
      },
    }));
  };

  // Apply filters to products
  useEffect(() => {
    let result = [...products];

    // Filter by type
    if (filters.type.length > 0) {
      result = result.filter((product) => filters.type.includes(product.type));
    }

    // Filter by brand
    if (filters.brand.length > 0) {
      result = result.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }

    // Filter by color
    if (filters.color.length > 0) {
      result = result.filter((product) =>
        filters.color.includes(product.color)
      );
    }

    // Filter by size
    if (filters.size.length > 0) {
      result = result.filter((product) => filters.size.includes(product.size));
    }

    // Filter by shipping
    if (filters.shipping.includes("Free Shipping")) {
      result = result.filter((product) => product.freeShipping);
    } else if (filters.shipping.includes("Paid Shipping")) {
      result = result.filter((product) => !product.freeShipping);
    }

    // Filter by rating
    if (filters.rating.length > 0) {
      const minRating = Math.min(
        ...filters.rating.map((r) => parseFloat(r.split(" ")[0]))
      );
      result = result.filter((product) => product.rating >= minRating);
    }

    // Filter by seller type
    if (filters.seller.includes("Official Stores")) {
      result = result.filter((product) => product.officialStore);
    }

    // Filter by price range
    if (filters.priceRange.min !== null) {
      result = result.filter(
        (product) => product.price >= (filters.priceRange.min || 0)
      );
    }

    if (filters.priceRange.max !== null) {
      result = result.filter(
        (product) => product.price <= (filters.priceRange.max || Infinity)
      );
    }

    setFilteredProducts(result);
  }, [filters, products]);

  // Function to fetch random products (simulated)
  const fetchRandomProducts = () => {
    // In a real app, this would be an API call
    // For now, we'll just shuffle the existing products
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    setProducts(shuffled);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />

      <div className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">
          {formattedCategoryName} Store
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border p-4">
              {/* Type Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("type")}
                >
                  Type
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
                      expandedFilters.type ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expandedFilters.type && (
                  <div className="mt-2 space-y-1">
                    {filterOptions.type.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${option}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={filters.type.includes(option)}
                          onChange={() => handleFilterChange("type", option)}
                        />
                        <label
                          htmlFor={`type-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Brand Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("brand")}
                >
                  Brand
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
                      expandedFilters.brand ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expandedFilters.brand && (
                  <div className="mt-2 space-y-1">
                    {filterOptions.brand.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`brand-${option}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={filters.brand.includes(option)}
                          onChange={() => handleFilterChange("brand", option)}
                        />
                        <label
                          htmlFor={`brand-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Color Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("color")}
                >
                  Color
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
                      expandedFilters.color ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expandedFilters.color && (
                  <div className="mt-2 space-y-1">
                    {filterOptions.color.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`color-${option}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={filters.color.includes(option)}
                          onChange={() => handleFilterChange("color", option)}
                        />
                        <label
                          htmlFor={`color-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("price")}
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
                        value={filters.priceRange.min || ""}
                        onChange={(e) =>
                          handlePriceChange("min", e.target.value)
                        }
                        className="w-full"
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={filters.priceRange.max || ""}
                        onChange={(e) =>
                          handlePriceChange("max", e.target.value)
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Size Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("size")}
                >
                  Size
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
                      expandedFilters.size ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expandedFilters.size && (
                  <div className="mt-2 space-y-1">
                    {filterOptions.size.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`size-${option}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={filters.size.includes(option)}
                          onChange={() => handleFilterChange("size", option)}
                        />
                        <label
                          htmlFor={`size-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Shipping Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("shipping")}
                >
                  Shipping
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
                      expandedFilters.shipping ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expandedFilters.shipping && (
                  <div className="mt-2 space-y-1">
                    {filterOptions.shipping.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`shipping-${option}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={filters.shipping.includes(option)}
                          onChange={() =>
                            handleFilterChange("shipping", option)
                          }
                        />
                        <label
                          htmlFor={`shipping-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Rating Filter */}
              <div className="border-b pb-4 mb-4">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("rating")}
                >
                  Product Rating
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
                      expandedFilters.rating ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expandedFilters.rating && (
                  <div className="mt-2 space-y-1">
                    {filterOptions.rating.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${option}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={filters.rating.includes(option)}
                          onChange={() => handleFilterChange("rating", option)}
                        />
                        <label
                          htmlFor={`rating-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Seller Rating Filter */}
              <div>
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() => toggleFilterSection("seller")}
                >
                  Official Stores
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
                          onChange={() => handleFilterChange("seller", option)}
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

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                {filteredProducts.length} products found
              </p>
              <Button onClick={fetchRandomProducts} variant="outline">
                Random Products
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  storeLogoUrl={product.storeLogoUrl}
                  storeName={product.storeName}
                  freeShipping={product.freeShipping}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
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
                <h2 className="text-xl font-semibold mb-2">
                  No products found
                </h2>
                <p className="text-gray-600 max-w-md mb-6">
                  Try adjusting your filters or search criteria to find what
                  you're looking for.
                </p>
                <Button
                  onClick={() =>
                    setFilters({
                      type: [],
                      brand: [],
                      color: [],
                      size: [],
                      shipping: [],
                      rating: [],
                      seller: [],
                      priceRange: {
                        min: null,
                        max: null,
                      },
                    })
                  }
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
