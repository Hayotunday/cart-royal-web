"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import CartItem from "@/components/shared/CartItem"; // Assuming CartItem is appropriately typed
import { Button } from "@/components/ui/button";
import { CartItemType } from "@/data/index";

interface CartClientPageProps {
  initialCartItems: CartItemType[];
}

export default function CartClientPage({
  initialCartItems,
}: CartClientPageProps) {
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems);

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

  // Calculate totals using useMemo for performance
  const { subtotal, shippingFee, total } = useMemo(() => {
    const currentSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const currentShippingFee = currentSubtotal > 0 ? 1500 : 0; // Example shipping fee
    const currentTotal = currentSubtotal + currentShippingFee;
    return {
      subtotal: currentSubtotal,
      shippingFee: currentShippingFee,
      total: currentTotal,
    };
  }, [cartItems]);

  return (
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
        <div className="flex flex-col items-center justify-center py-16 text-center">
          {/* SVG and empty cart message can be a separate component too */}
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
  );
}
