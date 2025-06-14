"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Wishlist() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // Sample wishlist requests - in a real app, this would come from an API
  const wishlistRequests = [
    {
      id: "wish-1",
      productName: "Limited Edition Sneakers",
      description:
        'Looking for Nike Air Jordan 4 Retro "Fire Red" (2020) in size 42.',
      budget: 75000,
      urgency: "high",
      status: "pending",
      createdAt: "2025-06-01T10:30:00",
      images: ["/catalogue/img.jpg"],
    },
    {
      id: "wish-2",
      productName: "Vintage Record Player",
      description:
        "Searching for a vintage vinyl record player in good condition, preferably from the 1970s.",
      budget: 50000,
      urgency: "normal",
      status: "fulfilled",
      createdAt: "2025-05-15T14:45:00",
      fulfilledAt: "2025-05-25T09:20:00",
      images: ["/catalogue/img.jpg"],
    },
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages([...images, ...filesArray]);

      // Create URLs for preview
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newImageUrls = [...imageUrls];
    URL.revokeObjectURL(newImageUrls[index]);
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the wishlist request to an API
    console.log("Submitting wishlist request:", {
      productName,
      productDescription,
      budget: parseFloat(budget),
      urgency,
      images,
    });

    // Show success message or redirect to confirmation page
    alert("Wishlist request submitted successfully!");

    // Reset form
    setProductName("");
    setProductDescription("");
    setBudget("");
    setUrgency("normal");
    setImages([]);
    setImageUrls([]);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
      case "fulfilled":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Fulfilled
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "high":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            High
          </span>
        );
      case "normal":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Normal
          </span>
        );
      case "low":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Low
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {urgency}
          </span>
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <Header viewOnly />

      <div className="container px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Wishlist Special Requests</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Make a Special Request
                </h2>
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Submit a special request
                  and we'll try to source it for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="productName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Product Name*
                    </label>
                    <Input
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Enter the name of the product you're looking for"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="productDescription"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Product Description*
                    </label>
                    <Textarea
                      id="productDescription"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      placeholder="Provide details about the product (brand, model, color, size, etc.)"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Budget (₦)*
                    </label>
                    <Input
                      id="budget"
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Enter your budget in Naira"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Urgency
                    </label>
                    <select
                      id="urgency"
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="low">Low - No Rush</option>
                      <option value="normal">Normal - Within a Month</option>
                      <option value="high">High - As Soon as Possible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Images (Optional)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                          >
                            <span>Upload files</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              multiple
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>

                    {imageUrls.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        {imageUrls.map((url, index) => (
                          <div key={index} className="relative">
                            <img
                              src={url}
                              alt={`Preview ${index + 1}`}
                              className="h-24 w-24 object-cover rounded-md"
                            />
                            <button
                              type="button"
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                              onClick={() => removeImage(index)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Request History */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Requests</h2>

                {wishlistRequests.length > 0 ? (
                  <div className="space-y-4">
                    {wishlistRequests.map((request) => (
                      <div
                        key={request.id}
                        className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{request.productName}</h3>
                          {getStatusBadge(request.status)}
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {request.description}
                        </p>

                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="mr-3">
                            ₦{request.budget.toLocaleString()}
                          </span>
                          <span className="mr-3">•</span>
                          {getUrgencyBadge(request.urgency)}
                        </div>

                        <div className="text-xs text-gray-500">
                          Requested on {formatDate(request.createdAt)}
                          {request.fulfilledAt && (
                            <span>
                              {" "}
                              • Fulfilled on {formatDate(request.fulfilledAt)}
                            </span>
                          )}
                        </div>

                        {request.images && request.images.length > 0 && (
                          <div className="mt-3 flex">
                            {request.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`${request.productName} ${index + 1}`}
                                className="h-16 w-16 object-cover rounded-md mr-2"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
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
                    <h3 className="text-lg font-medium mb-2">
                      No requests yet
                    </h3>
                    <p className="text-gray-600">
                      You haven't made any special requests yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
