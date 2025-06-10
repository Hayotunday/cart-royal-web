"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import CartClientPage from "@/components/features/CartClientPage";
import { sampleCartItems, fetchData, CartItemType } from "@/data/index";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[] | null>(null);

  useEffect(() => {
    async function loadCartData() {
      const items = await fetchData(sampleCartItems);
      setCartItems(items);
    }
    loadCartData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <Header />
      {cartItems === null ? (
        <div className="py-10 text-gray-500 min-h-[100vh]">Loading cart...</div>
      ) : (
        <CartClientPage initialCartItems={cartItems} />
      )}
    </main>
  );
}
