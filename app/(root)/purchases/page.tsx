"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header";

// Sample purchase data - in a real app, this would come from an API
const purchaseData = [
  {
    id: "ORD-12345",
    date: "2025-06-01",
    total: 52000,
    status: "Delivered",
    items: [
      {
        id: "1",
        name: "Wireless Bluetooth Earbuds",
        price: 15000,
        quantity: 1,
      },
      {
        id: "2",
        name: "Smart Watch with Heart Rate Monitor",
        price: 25000,
        quantity: 1,
      },
      {
        id: "3",
        name: "Portable Bluetooth Speaker",
        price: 12000,
        quantity: 1,
      },
    ],
    tracking: [
      {
        date: "2025-06-01",
        status: "Order Placed",
        description: "Your order has been placed successfully",
      },
      {
        date: "2025-06-01",
        status: "Payment Confirmed",
        description: "Payment has been confirmed",
      },
      {
        date: "2025-06-02",
        status: "Processing",
        description: "Your order is being processed",
      },
      {
        date: "2025-06-03",
        status: "Shipped",
        description: "Your order has been shipped",
      },
      {
        date: "2025-06-05",
        status: "Delivered",
        description: "Your order has been delivered",
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "2025-05-28",
    total: 37000,
    status: "Shipped",
    items: [
      {
        id: "4",
        name: "Wireless Charging Pad",
        price: 8000,
        quantity: 1,
      },
      {
        id: "5",
        name: "HD Webcam for Video Conferencing",
        price: 18000,
        quantity: 1,
      },
      {
        id: "6",
        name: "Premium Leather Wallet",
        price: 7500,
        quantity: 1,
      },
      {
        id: "7",
        name: "Stainless Steel Water Bottle",
        price: 3500,
        quantity: 1,
      },
    ],
    tracking: [
      {
        date: "2025-05-28",
        status: "Order Placed",
        description: "Your order has been placed successfully",
      },
      {
        date: "2025-05-28",
        status: "Payment Confirmed",
        description: "Payment has been confirmed",
      },
      {
        date: "2025-05-29",
        status: "Processing",
        description: "Your order is being processed",
      },
      {
        date: "2025-06-01",
        status: "Shipped",
        description: "Your order has been shipped",
      },
    ],
  },
];

export default function PurchasesPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const getOrderById = (id: string) => {
    return purchaseData.find((order) => order.id === id);
  };

  const renderOrderList = () => {
    return (
      <div className="space-y-4">
        {purchaseData.map((order) => (
          <div
            key={order.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              selectedOrder === order.id
                ? "border-primary bg-primary/5"
                : "hover:bg-muted/50"
            }`}
            onClick={() => setSelectedOrder(order.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{order.id}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(order.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₦{order.total.toLocaleString()}</p>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-800"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
            <p className="text-sm mt-2">
              {order.items.length} {order.items.length === 1 ? "item" : "items"}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderOrderDetails = () => {
    if (!selectedOrder) {
      return (
        <div className="flex flex-col items-center justify-center h-full py-12">
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
            className="h-12 w-12 text-muted-foreground mb-4"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
          </svg>
          <p className="text-muted-foreground">
            Select an order to view details
          </p>
        </div>
      );
    }

    const order = getOrderById(selectedOrder);
    if (!order) return null;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{order.id}</h2>
          <span
            className={`inline-block px-3 py-1 text-sm rounded-full ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-800"
                : order.status === "Shipped"
                ? "bg-blue-100 text-blue-800"
                : order.status === "Processing"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {order.status}
          </span>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted/50 px-4 py-3 font-medium">Order Details</div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Order Date</p>
                <p className="font-medium">
                  {new Date(order.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Total Amount</p>
                <p className="font-medium">₦{order.total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted/50 px-4 py-3 font-medium">Items</div>
          <div className="divide-y">
            {order.items.map((item) => (
              <div key={item.id} className="p-4 flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted/50 px-4 py-3 font-medium">Tracking</div>
          <div className="p-4">
            <div className="relative">
              {order.tracking.map((track, index) => (
                <div key={index} className="flex mb-6 last:mb-0">
                  <div className="mr-4 relative">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        index === 0 ? "bg-primary" : "bg-primary/70"
                      }`}
                    ></div>
                    {index < order.tracking.length - 1 && (
                      <div className="absolute top-4 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/30"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{track.status}</p>
                    <p className="text-sm text-muted-foreground">
                      {track.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(track.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <Header />

      <div className="container px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6">My Purchases</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-20">{renderOrderList()}</div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border p-6 min-h-[400px]">
              {renderOrderDetails()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
