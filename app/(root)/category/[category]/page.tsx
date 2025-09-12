"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import ProductCard from "@/components/shared/product-card";
import FilterSidebar, {
  FilterState,
  StringArrayFilterKeys,
} from "@/components/layout/filter-sidebar";

const allProducts = [
  {
    id: "1",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    type: "T-Shirt",
    color: "Blue",
    size: "M",
    freeShipping: true,
    rating: 4.5,
    officialStore: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "2",
    name: "Men's Slim Fit Jeans",
    price: 12000,
    image: "/catalogue/img.jpg",
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
    image: "/catalogue/img.jpg",
    brand: "SportyFit",
    type: "Shoes",
    color: "Red",
    size: "42",
    freeShipping: true,
    rating: 4.8,
    officialStore: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Sports Outlet",
  },
  {
    id: "4",
    name: "Men's Formal Shirt",
    price: 8000,
    image: "/catalogue/img.jpg",
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
    image: "/catalogue/img.jpg",
    brand: "LeatherCraft",
    type: "Accessory",
    color: "Brown",
    size: "One Size",
    freeShipping: false,
    rating: 4.6,
    officialStore: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Leather Goods",
  },
  {
    id: "6",
    name: "Men's Hooded Sweatshirt",
    price: 15000,
    image: "/catalogue/img.jpg",
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
    image: "/catalogue/img.jpg",
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
    image: "/catalogue/img.jpg",
    brand: "TimeKeeper",
    type: "Accessory",
    color: "Silver",
    size: "One Size",
    freeShipping: true,
    rating: 4.9,
    officialStore: true,
    storeLogoUrl: "/catalogue/img.jpg",
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

export default function Products() {
  const params = useParams<{ category?: string }>();

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

  const fetchRandomProducts = () => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    setProducts(shuffled);
  };

  return (
    <main className="min-h-screen flex flex-col w-full items-center p-4">
      <Header />
      <CategoryNav />

      <div className="container py-6 w-full">
        <h1 className="text-2xl font-bold mb-6">
          {formattedCategoryName} Store
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <FilterSidebar
            filterOptions={filterOptions}
            filters={filters}
            expandedFilters={expandedFilters}
            onToggleFilterSection={toggleFilterSection}
            onFilterChange={handleFilterChange}
            onPriceChange={handlePriceChange}
          />

          {/* Products Grid */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4 px-4">
              <p className="text-gray-600">
                {filteredProducts.length} products found
              </p>
              <Button onClick={fetchRandomProducts} variant="outline">
                Random Products
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
