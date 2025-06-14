"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment" | "review">(
    "shipping"
  );

  // Sample cart data - in a real app, this would come from a state management solution
  const cartItems = [
    {
      id: "1",
      name: "Wireless Bluetooth Earbuds",
      price: 15000,
      quantity: 1,
      image: "/catalogue/img.jpg",
    },
    {
      id: "2",
      name: "Smart Watch with Heart Rate Monitor",
      price: 25000,
      quantity: 2,
      image: "/catalogue/img.jpg",
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = 1500;
  const total = subtotal + shippingFee;

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center ${
              step === "shipping" || step === "payment" || step === "review"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            1
          </div>
          <div
            className={`h-1 w-12 ${
              step === "payment" || step === "review"
                ? "bg-primary"
                : "bg-muted"
            }`}
          ></div>
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center ${
              step === "payment" || step === "review"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            2
          </div>
          <div
            className={`h-1 w-12 ${
              step === "review" ? "bg-primary" : "bg-muted"
            }`}
          ></div>
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center ${
              step === "review"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            3
          </div>
        </div>
      </div>
    );
  };

  const renderShippingStep = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Shipping Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <Input placeholder="Enter your first name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <Input placeholder="Enter your last name" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <Input type="email" placeholder="Enter your email address" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <Input placeholder="Enter your phone number" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <Input placeholder="Enter your street address" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <Input placeholder="Enter your city" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <Input placeholder="Enter your state" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Postal Code
            </label>
            <Input placeholder="Enter your postal code" />
          </div>
        </div>

        <div className="pt-4">
          <Button className="w-full" onClick={() => setStep("payment")}>
            Continue to Payment
          </Button>
        </div>
      </div>
    );
  };

  const renderPaymentStep = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Payment Method</h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 flex items-center space-x-3">
            <input
              type="radio"
              name="payment-method"
              id="card"
              defaultChecked
            />
            <label htmlFor="card" className="flex-1">
              <div className="font-medium">Credit/Debit Card</div>
              <div className="text-sm text-muted-foreground">
                Pay with your card
              </div>
            </label>
            <div className="flex space-x-1">
              <div className="h-6 w-10 bg-muted rounded"></div>
              <div className="h-6 w-10 bg-muted rounded"></div>
              <div className="h-6 w-10 bg-muted rounded"></div>
            </div>
          </div>

          <div className="border rounded-lg p-4 flex items-center space-x-3">
            <input type="radio" name="payment-method" id="bank-transfer" />
            <label htmlFor="bank-transfer" className="flex-1">
              <div className="font-medium">Bank Transfer</div>
              <div className="text-sm text-muted-foreground">
                Pay via bank transfer
              </div>
            </label>
          </div>

          <div className="border rounded-lg p-4 flex items-center space-x-3">
            <input type="radio" name="payment-method" id="pay-on-delivery" />
            <label htmlFor="pay-on-delivery" className="flex-1">
              <div className="font-medium">Pay on Delivery</div>
              <div className="text-sm text-muted-foreground">
                Pay when your order arrives
              </div>
            </label>
          </div>
        </div>

        <div className="pt-4 flex space-x-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setStep("shipping")}
          >
            Back
          </Button>
          <Button className="flex-1" onClick={() => setStep("review")}>
            Continue to Review
          </Button>
        </div>
      </div>
    );
  };

  const renderReviewStep = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Review Your Order</h2>

        <div className="border rounded-lg divide-y">
          <div className="p-4">
            <h3 className="font-medium mb-2">Shipping Information</h3>
            <p className="text-sm">John Doe</p>
            <p className="text-sm">123 Main Street</p>
            <p className="text-sm">Lagos, Nigeria</p>
            <p className="text-sm">+234 123 456 7890</p>
          </div>

          <div className="p-4">
            <h3 className="font-medium mb-2">Payment Method</h3>
            <p className="text-sm">Credit/Debit Card</p>
          </div>

          <div className="p-4">
            <h3 className="font-medium mb-2">Order Summary</h3>
            <div className="space-y-3 mt-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}

              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>₦{shippingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex space-x-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setStep("payment")}
          >
            Back
          </Button>
          <Link href="/purchases" className="flex-1">
            <Button className="w-full">Place Order</Button>
          </Link>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case "shipping":
        return renderShippingStep();
      case "payment":
        return renderPaymentStep();
      case "review":
        return renderReviewStep();
      default:
        return renderShippingStep();
    }
  };

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <Header />

      <div className="container px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

        {renderStepIndicator()}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border p-6">
              {renderCurrentStep()}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-20">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between">
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

              <div className="space-y-3 mt-4 pt-4 border-t">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
