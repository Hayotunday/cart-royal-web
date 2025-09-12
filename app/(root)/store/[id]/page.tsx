"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import ProductCard from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";

// Sample store data - in a real app, this would come from an API
const storeDetails = {
  id: "fashion-store",
  name: "Fashion Store",
  logo: "/catalogue/img.jpg",
  coverImage: "/catalogue/img.jpg",
  category: "Clothing",
  rating: 4.8,
  followers: 12500,
  productCount: 156,
  description:
    "Official store for trendy fashion items and accessories. We offer a wide range of clothing, footwear, and accessories for men, women, and children. Our products are made with high-quality materials and designed to keep you stylish and comfortable.",
  location: "Lagos, Nigeria",
  joinedDate: "January 2020",
  responseRate: "98%",
  shippingTime: "1-3 days",
  returnPolicy: "7 days return policy",
  contactInfo: {
    email: "contact@fashionstore.com",
    phone: "+234 123 456 7890",
  },
};

// Sample products data - in a real app, this would come from an API
const storeProducts = [
  {
    id: "1",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "2",
    name: "Men's Slim Fit Jeans",
    price: 12000,
    image: "/catalogue/img.jpg",
    brand: "Denim Co",
    freeShipping: false,
  },
  {
    id: "4",
    name: "Men's Formal Shirt",
    price: 8000,
    image: "/catalogue/img.jpg",
    brand: "Elegance",
    freeShipping: true,
  },
  {
    id: "6",
    name: "Men's Hooded Sweatshirt",
    price: 15000,
    image: "/catalogue/img.jpg",
    brand: "Urban Style",
    freeShipping: true,
  },
  {
    id: "7",
    name: "Women's Summer Dress",
    price: 9500,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "8",
    name: "Women's Handbag",
    price: 18000,
    image: "/catalogue/img.jpg",
    brand: "Elegance",
    freeShipping: true,
  },
  {
    id: "9",
    name: "Women's High Heels",
    price: 22000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: false,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "10",
    name: "Women's Casual Sneakers",
    price: 14000,
    image: "/catalogue/img.jpg",
    brand: "Urban Style",
    freeShipping: true,
  },
];

// Available categories for filtering
const categories = [
  "All Categories",
  "Men's Clothing",
  "Women's Clothing",
  "Footwear",
  "Accessories",
];

export default function StoreDetails() {
  const params = useParams<{ id?: string }>();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState<
    "newest" | "price_low" | "price_high" | "popular"
  >("newest");
  const [activeTab, setActiveTab] = useState<"products" | "about">("products");
  const [isFollowing, setIsFollowing] = useState(false);

  // Filter and sort products
  const filteredProducts = storeProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        (selectedCategory === "Men's Clothing" &&
          product.name.toLowerCase().includes("men")) ||
        (selectedCategory === "Women's Clothing" &&
          product.name.toLowerCase().includes("women")) ||
        (selectedCategory === "Footwear" &&
          (product.name.toLowerCase().includes("shoes") ||
            product.name.toLowerCase().includes("sneakers") ||
            product.name.toLowerCase().includes("heels"))) ||
        (selectedCategory === "Accessories" &&
          (product.name.toLowerCase().includes("bag") ||
            product.name.toLowerCase().includes("watch") ||
            product.name.toLowerCase().includes("wallet")));

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price_low") {
        return a.price - b.price;
      } else if (sortBy === "price_high") {
        return b.price - a.price;
      } else if (sortBy === "popular") {
        // In a real app, this would sort by popularity metrics
        return 0;
      } else {
        // newest - in a real app, this would sort by date added
        return 0;
      }
    });

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <main className="min-h-screen max-w-screen flex flex-col w-full items-center">
      <Header />
      <CategoryNav />

      <div className="container px-4 py-6 flex flex-col items-center w-full">
        {/* Store Header */}
        <div className="mb-8 w-full">
          <div className="relative rounded-lg overflow-hidden h-48 md:h-64 mb-6">
            <div className="absolute inset-0">
              <img
                src={storeDetails.coverImage}
                alt={`${storeDetails.name} cover`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row items-start md:items-end">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-white p-1 mr-4">
                  <img
                    src={storeDetails.logo}
                    alt={storeDetails.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{storeDetails.name}</h1>
                  <div className="flex items-center">
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
                      {storeDetails.rating} |{" "}
                      {storeDetails.followers.toLocaleString()} Followers
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:ml-auto">
                <Button
                  variant={isFollowing ? "outline" : "default"}
                  className={
                    isFollowing ? "bg-white text-primary hover:bg-gray-100" : ""
                  }
                  onClick={toggleFollow}
                >
                  {isFollowing ? "Following" : "Follow Store"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex border-b">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "products"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("products")}
            >
              Products ({storeDetails.productCount})
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "about"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <>
            {/* Search and Filter */}
            <div className="bg-white w-full rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Search Products
                  </label>
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search by name or brand"
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
                      setSortBy(
                        e.target.value as
                          | "newest"
                          | "price_low"
                          | "price_high"
                          | "popular"
                      )
                    }
                  >
                    <option value="newest">Newest</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full">
              <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">All Products</h2>
                <p className="text-gray-600">
                  {filteredProducts.length} products found
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
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
                  <h2 className="text-xl font-semibold mb-2">
                    No products found
                  </h2>
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
          </>
        ) : (
          <div className="bg-white w-full rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">
              About {storeDetails.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">{storeDetails.description}</p>

                <h3 className="font-medium text-lg mb-3">Store Information</h3>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Location:</span>
                    <span>{storeDetails.location}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Joined:</span>
                    <span>{storeDetails.joinedDate}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Response Rate:</span>
                    <span>{storeDetails.responseRate}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Shipping Time:</span>
                    <span>{storeDetails.shippingTime}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Return Policy:</span>
                    <span>{storeDetails.returnPolicy}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">
                  Contact Information
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Email:</span>
                    <span>{storeDetails.contactInfo.email}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Phone:</span>
                    <span>{storeDetails.contactInfo.phone}</span>
                  </div>
                </div>

                <h3 className="font-medium text-lg mb-3">Store Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">
                      {storeDetails.productCount}
                    </div>
                    <div className="text-sm text-gray-600">Products</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">
                      {storeDetails.followers.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">
                      {storeDetails.rating}
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">
                      {storeDetails.responseRate}
                    </div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
