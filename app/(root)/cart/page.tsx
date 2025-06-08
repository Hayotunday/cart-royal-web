// This is now a Server Component
import React from "react";
import Header from "@/components/layout/Header";
import CartClientPage from "@/components/features/CartClientPage"; // Import the new Client Component
import { fetchData, sampleCartItems, CartItemType } from "@/data/index";

// Simulate fetching cart data on the server
async function getCartData(): Promise<{ cartItems: CartItemType[] }> {
  // In a real app, this would fetch from your backend/API or a cart service
  const items = await fetchData(sampleCartItems);
  return { cartItems: items };
}

export default async function CartPage() {
  const { cartItems } = await getCartData();

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <Header />
      <CartClientPage initialCartItems={cartItems} />
    </main>
  );
}
