"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample gift card data - in a real app, this would come from an API
const giftCards = [
  {
    id: "gc-1",
    code: "GC-1234-5678",
    amount: 5000,
    status: "unused",
    purchaseDate: "2025-05-15",
    expiryDate: "2026-05-15",
    recipientEmail: "friend@example.com",
    recipientName: "John Doe",
    message: "Happy Birthday!",
  },
  {
    id: "gc-2",
    code: "GC-2345-6789",
    amount: 10000,
    status: "used",
    purchaseDate: "2025-04-10",
    usedDate: "2025-04-25",
    expiryDate: "2026-04-10",
    recipientEmail: "family@example.com",
    recipientName: "Jane Smith",
    message: "Enjoy your shopping!",
  },
  {
    id: "gc-3",
    code: "GC-3456-7890",
    amount: 15000,
    status: "unused",
    purchaseDate: "2025-06-01",
    expiryDate: "2026-06-01",
    recipientEmail: "colleague@example.com",
    recipientName: "Robert Johnson",
    message: "Thank you for your help!",
  },
];

export default function GiftCard() {
  const [activeTab, setActiveTab] = useState("buy");
  const [amount, setAmount] = useState(5000);
  const [quantity, setQuantity] = useState(1);
  const [recipientType, setRecipientType] = useState("someone");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Filter gift cards by status
  const unusedGiftCards = giftCards.filter((card) => card.status === "unused");
  const usedGiftCards = giftCards.filter((card) => card.status === "used");

  const handleBuyGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the gift card purchase to an API
    console.log("Buying gift card:", {
      amount,
      quantity,
      recipientType,
      recipientEmail,
      recipientName,
      deliveryDate,
      message,
    });

    // Show success message or redirect to confirmation page
    alert("Gift card purchased successfully!");
  };

  const handleSendGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCard) {
      alert("Please select a gift card to send");
      return;
    }

    // In a real app, this would send the gift card to the recipient via API
    console.log("Sending gift card:", {
      cardId: selectedCard,
      recipientEmail,
      recipientName,
      message,
    });

    // Show success message
    alert("Gift card sent successfully!");

    // Reset form
    setSelectedCard(null);
    setRecipientEmail("");
    setRecipientName("");
    setMessage("");
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

      <div className="container px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Gift Cards</h1>

        <Tabs
          defaultValue="buy"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="buy">Buy New Gift Card</TabsTrigger>
            <TabsTrigger value="manage">My Gift Cards</TabsTrigger>
            <TabsTrigger value="send">Send Gift Card</TabsTrigger>
          </TabsList>

          {/* Buy New Gift Card Tab */}
          <TabsContent value="buy" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gift Card Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-8">
                <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm aspect-[3/2] flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    Cart Royal
                  </div>
                  <div className="text-xl font-semibold mb-4">Gift Card</div>
                  <div className="text-2xl font-bold">
                    ₦{amount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Gift Card Form */}
              <div>
                <form onSubmit={handleBuyGiftCard} className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      You can't go wrong with a gift card. Choose an amount and
                      write a personalized message to make this gift your own.
                    </h2>

                    <div className="space-y-4">
                      {/* Amount Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Amount
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[5000, 10000, 15000, 20000, 25000].map((value) => (
                            <button
                              key={value}
                              type="button"
                              className={`px-4 py-2 border rounded-md ${
                                amount === value
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                              onClick={() => setAmount(value)}
                            >
                              ₦{value.toLocaleString()}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
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
                            type="button"
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

                      {/* Recipient Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Who is the gift card for?
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            className={`py-2 px-4 border rounded-md ${
                              recipientType === "someone"
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => setRecipientType("someone")}
                          >
                            For someone else
                          </button>
                          <button
                            type="button"
                            className={`py-2 px-4 border rounded-md ${
                              recipientType === "myself"
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => setRecipientType("myself")}
                          >
                            For myself
                          </button>
                        </div>
                      </div>

                      {/* Recipient Details (only if for someone else) */}
                      {recipientType === "someone" && (
                        <>
                          <div>
                            <label
                              htmlFor="recipientEmail"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Recipient Email
                            </label>
                            <Input
                              id="recipientEmail"
                              type="email"
                              value={recipientEmail}
                              onChange={(e) =>
                                setRecipientEmail(e.target.value)
                              }
                              placeholder="Enter recipient's email"
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="recipientName"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Recipient Name
                            </label>
                            <Input
                              id="recipientName"
                              type="text"
                              value={recipientName}
                              onChange={(e) => setRecipientName(e.target.value)}
                              placeholder="Enter recipient's name"
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="deliveryDate"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Delivery Date
                            </label>
                            <Input
                              id="deliveryDate"
                              type="date"
                              value={deliveryDate}
                              onChange={(e) => setDeliveryDate(e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                              required
                            />
                          </div>
                        </>
                      )}

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Add a personal message (optional)"
                          className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      {/* Total */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium">Total:</span>
                          <span className="text-xl font-bold">
                            ₦{(amount * quantity).toLocaleString()}
                          </span>
                        </div>

                        <Button type="submit" className="w-full">
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </TabsContent>

          {/* My Gift Cards Tab */}
          <TabsContent value="manage" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">My Gift Cards</h2>

              <div className="mb-6">
                <Tabs defaultValue="unused">
                  <TabsList>
                    <TabsTrigger value="unused">
                      Unused ({unusedGiftCards.length})
                    </TabsTrigger>
                    <TabsTrigger value="used">
                      Used ({usedGiftCards.length})
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="unused" className="mt-4">
                    {unusedGiftCards.length > 0 ? (
                      <div className="space-y-4">
                        {unusedGiftCards.map((card) => (
                          <div
                            key={card.id}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div>
                                <div className="flex items-center">
                                  <span className="font-semibold mr-2">
                                    Code:
                                  </span>
                                  <span>{card.code}</span>
                                  <button
                                    className="ml-2 text-primary hover:text-primary/80"
                                    onClick={() =>
                                      navigator.clipboard.writeText(card.code)
                                    }
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
                                      <rect
                                        width="14"
                                        height="14"
                                        x="8"
                                        y="8"
                                        rx="2"
                                        ry="2"
                                      />
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                    </svg>
                                  </button>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  <span className="font-medium">Amount:</span> ₦
                                  {card.amount.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">
                                  <span className="font-medium">Expires:</span>{" "}
                                  {card.expiryDate}
                                </div>
                                {card.recipientEmail && (
                                  <div className="text-sm text-gray-600">
                                    <span className="font-medium">
                                      Recipient:
                                    </span>{" "}
                                    {card.recipientName} ({card.recipientEmail})
                                  </div>
                                )}
                              </div>

                              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedCard(card.id);
                                    setActiveTab("send");
                                  }}
                                >
                                  Send
                                </Button>
                                <Button size="sm">Use Now</Button>
                              </div>
                            </div>
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
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                          No unused gift cards
                        </h3>
                        <p className="text-gray-600 mb-4">
                          You don't have any unused gift cards yet.
                        </p>
                        <Button onClick={() => setActiveTab("buy")}>
                          Buy a Gift Card
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="used" className="mt-4">
                    {usedGiftCards.length > 0 ? (
                      <div className="space-y-4">
                        {usedGiftCards.map((card) => (
                          <div
                            key={card.id}
                            className="border rounded-lg p-4 bg-gray-50"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div>
                                <div className="flex items-center">
                                  <span className="font-semibold mr-2">
                                    Code:
                                  </span>
                                  <span className="text-gray-600">
                                    {card.code}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  <span className="font-medium">Amount:</span> ₦
                                  {card.amount.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">
                                  <span className="font-medium">Used on:</span>{" "}
                                  {card.usedDate}
                                </div>
                                {card.recipientEmail && (
                                  <div className="text-sm text-gray-600">
                                    <span className="font-medium">
                                      Recipient:
                                    </span>{" "}
                                    {card.recipientName} ({card.recipientEmail})
                                  </div>
                                )}
                              </div>

                              <div className="mt-4 md:mt-0">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  Used
                                </span>
                              </div>
                            </div>
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
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                          No used gift cards
                        </h3>
                        <p className="text-gray-600">
                          You haven't used any gift cards yet.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </TabsContent>

          {/* Send Gift Card Tab */}
          <TabsContent value="send" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Send a Gift Card</h2>

              {unusedGiftCards.length > 0 ? (
                <form onSubmit={handleSendGiftCard} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select a Gift Card to Send
                    </label>
                    <div className="space-y-3">
                      {unusedGiftCards.map((card) => (
                        <div
                          key={card.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedCard === card.id
                              ? "border-primary bg-primary/5"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedCard(card.id)}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id={`card-${card.id}`}
                              name="giftCard"
                              checked={selectedCard === card.id}
                              onChange={() => setSelectedCard(card.id)}
                              className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                            />
                            <label
                              htmlFor={`card-${card.id}`}
                              className="ml-3 flex-1"
                            >
                              <div className="font-medium">{card.code}</div>
                              <div className="text-sm text-gray-600">
                                ₦{card.amount.toLocaleString()} - Expires:{" "}
                                {card.expiryDate}
                              </div>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sendRecipientEmail"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Recipient Email
                    </label>
                    <Input
                      id="sendRecipientEmail"
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="Enter recipient's email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sendRecipientName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Recipient Name
                    </label>
                    <Input
                      id="sendRecipientName"
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Enter recipient's name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sendMessage"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="sendMessage"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Add a personal message (optional)"
                      className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Gift Card
                  </Button>
                </form>
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
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    No gift cards to send
                  </h3>
                  <p className="text-gray-600 mb-4">
                    You need to purchase a gift card before you can send one.
                  </p>
                  <Button onClick={() => setActiveTab("buy")}>
                    Buy a Gift Card
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
