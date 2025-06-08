"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

// Sample favorite items data - in a real app, this would come from an API
const initialFavorites = [
  {
    id: "1",
    name: "Wireless Bluetooth Earbuds",
    price: 15000,
    image: "/catalogue/img.jpg",
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Electronics Hub",
    freeShipping: true,
  },
  {
    id: "2",
    name: "Smart Watch with Heart Rate Monitor",
    price: 25000,
    image: "/catalogue/img.jpg",
    freeShipping: false,
  },
  {
    id: "3",
    name: "Portable Bluetooth Speaker",
    price: 12000,
    image: "/catalogue/img.jpg",
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Sound Masters",
    freeShipping: true,
  },
  {
    id: "4",
    name: "Wireless Charging Pad",
    price: 8000,
    image: "/catalogue/img.jpg",
    freeShipping: false,
  },
  {
    id: "5",
    name: "HD Webcam for Video Conferencing",
    price: 18000,
    image: "/catalogue/img.jpg",
    freeShipping: true,
  },
];

export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setFavorites([]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />

      <div className="container px-4 py-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Favorites</h1>
            <p className="text-gray-600 mt-1">{favorites.length} items saved</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="flex items-center space-x-2 border rounded-md p-1">
              <button
                className={`p-2 rounded ${
                  view === "grid" ? "bg-gray-100" : ""
                }`}
                onClick={() => setView("grid")}
                aria-label="Grid view"
              >
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
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                className={`p-2 rounded ${
                  view === "list" ? "bg-gray-100" : ""
                }`}
                onClick={() => setView("list")}
                aria-label="List view"
              >
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
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>

            {favorites.length > 0 && (
              <Button variant="outline" onClick={handleClearAll}>
                Clear All
              </Button>
            )}
          </div>
        </div>

        {favorites.length > 0 ? (
          <>
            {view === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-gray-200 rounded-lg overflow-hidden group"
                  >
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      storeLogoUrl={item.storeLogoUrl}
                      storeName={item.storeName}
                      freeShipping={item.freeShipping}
                    />
                    <button
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveFavorite(item.id)}
                      aria-label="Remove from favorites"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="flex border rounded-lg overflow-hidden bg-white"
                  >
                    <div className="w-32 h-32 relative flex-shrink-0">
                      <div className="absolute inset-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 p-4 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.storeName && (
                            <p className="text-sm text-gray-600">
                              Sold by {item.storeName}
                            </p>
                          )}
                        </div>
                        <button
                          className="p-1 text-gray-400 hover:text-red-500"
                          onClick={() => handleRemoveFavorite(item.id)}
                          aria-label="Remove from favorites"
                        >
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
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-auto flex justify-between items-end">
                        <div>
                          <p className="text-lg font-semibold">
                            ₦{item.price.toLocaleString()}
                          </p>
                          {item.freeShipping && (
                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                              Free Shipping
                            </span>
                          )}
                        </div>

                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
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
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Your favorites list is empty
            </h2>
            <p className="text-gray-600 max-w-md mb-6">
              Items added to your favorites will appear here. Start browsing to
              find products you love!
            </p>
            <Button>Start Shopping</Button>
          </div>
        )}
      </div>
    </main>
  );
}
