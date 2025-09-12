"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shared/product-card";
import { useParams } from "next/navigation";

// Sample product data - in a real app, this would come from an API
const productDetails = {
  id: "1",
  name: "Men's Casual T-Shirt",
  description:
    "A comfortable and stylish casual t-shirt for men. Made with 100% cotton, this t-shirt is perfect for everyday wear. Features a classic crew neck and short sleeves.",
  price: 5000,
  originalPrice: 7500,
  discount: 33,
  images: [
    "/catalogue/img.jpg",
    "/catalogue/img.jpg",
    "/catalogue/img.jpg",
    "/catalogue/img.jpg",
  ],
  brand: "Fashion Brand",
  type: "T-Shirt",
  color: "Blue",
  availableSizes: ["S", "M", "L", "XL"],
  freeShipping: true,
  rating: 4.5,
  reviewCount: 128,
  inStock: true,
  officialStore: true,
  storeLogoUrl: "/catalogue/img.jpg",
  storeName: "Fashion Store",
  storeId: "fashion-store",
  specifications: [
    { name: "Material", value: "100% Cotton" },
    { name: "Fit", value: "Regular Fit" },
    { name: "Neck Type", value: "Crew Neck" },
    { name: "Sleeve Length", value: "Short Sleeve" },
    { name: "Pattern", value: "Solid" },
    { name: "Care Instructions", value: "Machine Wash" },
  ],
};

// Sample related products
const relatedProducts = [
  {
    id: "2",
    name: "Men's Slim Fit Jeans",
    price: 12000,
    image: "/catalogue/img.jpg",
    freeShipping: false,
  },
  {
    id: "3",
    name: "Men's Running Shoes",
    price: 25000,
    image: "/catalogue/img.jpg",
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Sports Outlet",
    freeShipping: true,
  },
  {
    id: "4",
    name: "Men's Formal Shirt",
    price: 8000,
    image: "/catalogue/img.jpg",
    freeShipping: true,
  },
  {
    id: "6",
    name: "Men's Hooded Sweatshirt",
    price: 15000,
    image: "/catalogue/img.jpg",
    freeShipping: true,
  },
];

export default function ProductDetails() {
  const params = useParams<{ id?: string }>();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews"
  >("description");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    // In a real app, this would add the product to the cart
    console.log("Adding to cart:", {
      productId: params.id,
      size: selectedSize,
      quantity,
    });

    // Show success message
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />

      <div className="container px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/category/men" className="hover:text-primary">
            Men
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/category/${productDetails.type.toLowerCase()}`}
            className="hover:text-primary"
          >
            {productDetails.type}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{productDetails.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg border mb-4">
              <div className="absolute inset-0">
                {productDetails.images[selectedImage] ? (
                  <img
                    src={productDetails.images[selectedImage]}
                    alt={productDetails.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
              </div>

              {/* Discount badge */}
              {productDetails.discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  -{productDetails.discount}%
                </div>
              )}
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {productDetails.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-md border ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={image}
                      alt={`${productDetails.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Store info */}
            {productDetails.officialStore && (
              <Link
                href={`/store/${productDetails.storeId}`}
                className="flex items-center mb-4"
              >
                <div className="h-6 w-6 relative mr-2">
                  <img
                    src={productDetails.storeLogoUrl}
                    alt={productDetails.storeName}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm text-primary font-medium">
                  {productDetails.storeName}
                </span>
              </Link>
            )}

            <h1 className="text-2xl font-bold mb-2">{productDetails.name}</h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={
                      i < Math.floor(productDetails.rating)
                        ? "currentColor"
                        : "none"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      i < Math.floor(productDetails.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {productDetails.rating} ({productDetails.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">
                  ₦{productDetails.price.toLocaleString()}
                </span>
                {productDetails.originalPrice && (
                  <span className="ml-2 text-gray-500 line-through">
                    ₦{productDetails.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {productDetails.freeShipping && (
                <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                  Free Shipping
                </span>
              )}
            </div>

            {/* Size selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {productDetails.availableSizes.map((size) => (
                  <button
                    key={size}
                    className={`h-10 min-w-[2.5rem] px-3 rounded-md border ${
                      selectedSize === size
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  className="h-10 w-10 rounded-l-md border border-gray-300 flex items-center justify-center"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div className="h-10 px-4 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </div>
                <button
                  className="h-10 w-10 rounded-r-md border border-gray-300 flex items-center justify-center"
                  onClick={incrementQuantity}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!productDetails.inStock}
              >
                {productDetails.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button variant="outline" className="flex-1">
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
                  className="mr-2"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Add to Favorites
              </Button>
            </div>

            {/* Success message */}
            {addedToCart && (
              <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md mb-6 flex items-center">
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
                  className="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Product added to cart successfully!
              </div>
            )}

            {/* Product details */}
            <div className="border rounded-md overflow-hidden">
              <div className="flex border-b">
                <button
                  className={`flex-1 px-4 py-2 text-sm font-medium ${
                    activeTab === "description"
                      ? "bg-primary/10 text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`flex-1 px-4 py-2 text-sm font-medium ${
                    activeTab === "specifications"
                      ? "bg-primary/10 text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("specifications")}
                >
                  Specifications
                </button>
                <button
                  className={`flex-1 px-4 py-2 text-sm font-medium ${
                    activeTab === "reviews"
                      ? "bg-primary/10 text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </div>

              <div className="p-4">
                {activeTab === "description" && (
                  <p className="text-gray-700">{productDetails.description}</p>
                )}

                {activeTab === "specifications" && (
                  <div className="space-y-2">
                    {productDetails.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 gap-4 py-2 border-b last:border-b-0"
                      >
                        <div className="text-gray-600">{spec.name}</div>
                        <div>{spec.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="text-center py-4">
                    <p className="text-gray-600">Reviews coming soon!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {relatedProducts.map((product) => (
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
        </div>
      </div>
    </main>
  );
}
