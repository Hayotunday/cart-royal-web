"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import CartItem from "@/components/shared/CartItem";
import { Button } from "@/components/ui/button";

// Sample cart data - in a real app, this would come from a state management solution
const initialCartItems = [
  {
    id: "1",
    name: "Wireless Bluetooth Earbuds",
    price: 15000,
    quantity: 1,
    image: "/placeholder-product.png",
  },
  {
    id: "2",
    name: "Smart Watch with Heart Rate Monitor",
    price: 25000,
    quantity: 2,
    image: "/placeholder-product.png",
  },
  {
    id: "3",
    name: "Portable Bluetooth Speaker",
    price: 12000,
    quantity: 1,
    image: "/placeholder-product.png",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = subtotal > 0 ? 1500 : 0; // Example shipping fee
  const total = subtotal + shippingFee;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Cart Items ({cartItems.length})
                </h2>

                <div className="divide-y">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      image={item.image}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
                    />
                  ))}
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handleClearCart}>
                    Clear Cart
                  </Button>

                  <Link href="/">
                    <Button variant="outline">Continue Shopping</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg border p-6 sticky top-20">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping Fee</span>
                    <span>₦{shippingFee.toLocaleString()}</span>
                  </div>

                  <div className="pt-3 border-t flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link href="/cart/checkout" className="block mt-6">
                  <Button className="w-full">Proceed to Checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
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
              className="h-16 w-16 text-muted-foreground mb-4"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link href="/">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
