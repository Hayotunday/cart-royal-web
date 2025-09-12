"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function SettingsPage() {
  // Account Management state
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+234 123 456 7890");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Payment Settings state
  const [cards, setCards] = useState([
    {
      id: "card-1",
      type: "visa",
      last4: "4242",
      expiry: "12/26",
      name: "John Doe",
      isDefault: true,
    },
    {
      id: "card-2",
      type: "mastercard",
      last4: "5555",
      expiry: "10/25",
      name: "John Doe",
      isDefault: false,
    },
  ]);

  // Address Book state
  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      name: "John Doe",
      line1: "123 Main Street",
      line2: "Apartment 4B",
      city: "Lagos",
      state: "Lagos State",
      postalCode: "100001",
      country: "Nigeria",
      phone: "+234 123 456 7890",
      isDefault: true,
    },
    {
      id: "addr-2",
      name: "John Doe",
      line1: "456 Work Avenue",
      line2: "Suite 200",
      city: "Abuja",
      state: "FCT",
      postalCode: "900001",
      country: "Nigeria",
      phone: "+234 123 456 7890",
      isDefault: false,
    },
  ]);

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState({
    orders: true,
    promotions: true,
    system: true,
  });

  const [pushNotifications, setPushNotifications] = useState({
    orders: true,
    promotions: false,
    system: true,
  });
  // Close Account state
  const [closeReason, setCloseReason] = useState("");
  const [confirmClose, setConfirmClose] = useState("");
  const [activeTab, setActiveTab] = useState("account");

  // Form submission handlers
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user profile via API
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // In a real app, this would change the password via API
    alert("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleSetDefaultCard = (cardId: string) => {
    setCards(
      cards.map((card) => ({
        ...card,
        isDefault: card.id === cardId,
      }))
    );
  };

  const handleRemoveCard = (cardId: string) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const handleSetDefaultAddress = (addressId: string) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === addressId,
      }))
    );
  };

  const handleRemoveAddress = (addressId: string) => {
    setAddresses(addresses.filter((address) => address.id !== addressId));
  };

  const handleCloseAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmClose !== "DELETE MY ACCOUNT") {
      alert("Please type DELETE MY ACCOUNT to confirm");
      return;
    }
    // In a real app, this would close the account via API
    alert("Account closed successfully. We're sorry to see you go!");
  };

  // Card type icon component
  const CardTypeIcon = ({ type }: { type: string }) => {
    if (type === "visa") {
      return <div className="text-blue-700 font-bold italic">VISA</div>;
    } else if (type === "mastercard") {
      return (
        <div className="flex">
          <div className="h-5 w-5 bg-red-500 rounded-full opacity-80"></div>
          <div className="h-5 w-5 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <main className="min-h-screen flex flex-col w-full">
      <Header />
      <CategoryNav />

      <div className="container px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="w-full">
          <div className="bg-white rounded-lg overflow-hidden">
            <Tabs
              defaultValue="account"
              className="w-full flex flex-col md:flex-row"
              orientation="vertical"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200">
                <TabsList className="flex flex-row md:flex-col justify-start items-start p-2 md:p-4 bg-transparent h-full w-full overflow-x-auto md:overflow-x-visible">
                  <TabsTrigger
                    value="account"
                    className="max-h-16 w-full justify-start px-4 py-3 data-[state=active]:bg-gray-100 rounded-md whitespace-nowrap"
                  >
                    Account Management
                  </TabsTrigger>
                  <TabsTrigger
                    value="payment"
                    className="max-h-16 w-full justify-start px-4 py-3 data-[state=active]:bg-gray-100 rounded-md whitespace-nowrap"
                  >
                    Payment Settings
                  </TabsTrigger>
                  <TabsTrigger
                    value="address"
                    className="max-h-16 w-full justify-start px-4 py-3 data-[state=active]:bg-gray-100 rounded-md whitespace-nowrap"
                  >
                    Address Book
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="max-h-16 w-full justify-start px-4 py-3 data-[state=active]:bg-gray-100 rounded-md whitespace-nowrap"
                  >
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="close"
                    className="max-h-16 w-full justify-start px-4 py-3 data-[state=active]:bg-red-50 data-[state=active]:text-red-700 rounded-md text-red-600 whitespace-nowrap"
                  >
                    Close Account
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="md:w-3/4">
                {/* Account Management Tab */}
                <TabsContent
                  value="account"
                  className="p-6 focus:outline-none mt-0"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Account Management
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Update your personal information and manage your account
                        settings.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div className="rounded-lg border border-gray-200 overflow-hidden">
                        <div className="p-6">
                          <h3 className="text-lg font-medium mb-4">
                            Personal Information
                          </h3>

                          <form
                            onSubmit={handleUpdateProfile}
                            className="space-y-4"
                          >
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Full Name
                              </label>
                              <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Email Address
                              </label>
                              <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Phone Number
                              </label>
                              <Input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            </div>

                            <Button type="submit">Save Changes</Button>
                          </form>
                        </div>
                      </div>

                      <div className="rounded-lg border border-gray-200 overflow-hidden">
                        <div className="p-6">
                          <h3 className="text-lg font-medium mb-4">
                            Change Password
                          </h3>

                          <form
                            onSubmit={handleChangePassword}
                            className="space-y-4"
                          >
                            <div>
                              <label
                                htmlFor="currentPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Current Password
                              </label>
                              <Input
                                id="currentPassword"
                                type="password"
                                value={currentPassword}
                                onChange={(e) =>
                                  setCurrentPassword(e.target.value)
                                }
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="newPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                New Password
                              </label>
                              <Input
                                id="newPassword"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Confirm New Password
                              </label>
                              <Input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                required
                              />
                            </div>

                            <Button type="submit">Change Password</Button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Payment Settings Tab */}
                <TabsContent
                  value="payment"
                  className="p-6 focus:outline-none mt-0"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Payment Settings
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Manage your payment methods and preferences.
                      </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium">
                            Saved Payment Methods
                          </h3>
                          <Button variant="outline" size="sm">
                            Add New Card
                          </Button>
                        </div>

                        {cards.length > 0 ? (
                          <div className="space-y-4">
                            {cards.map((card) => (
                              <div
                                key={card.id}
                                className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="mr-3">
                                      <CardTypeIcon type={card.type} />
                                    </div>
                                    <div>
                                      <div className="font-medium">
                                        •••• •••• •••• {card.last4}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        Expires {card.expiry} • {card.name}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center space-x-2 self-end sm:self-center">
                                    {card.isDefault ? (
                                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                        Default
                                      </span>
                                    ) : (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          handleSetDefaultCard(card.id)
                                        }
                                      >
                                        Set as Default
                                      </Button>
                                    )}

                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                      onClick={() => handleRemoveCard(card.id)}
                                    >
                                      Remove
                                    </Button>
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
                                <rect
                                  width="20"
                                  height="14"
                                  x="2"
                                  y="5"
                                  rx="2"
                                />
                                <line x1="2" x2="22" y1="10" y2="10" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-2">
                              No payment methods
                            </h3>
                            <p className="text-gray-600 mb-4">
                              You haven't added any payment methods yet.
                            </p>
                            <Button>Add Payment Method</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Address Book Tab */}
                <TabsContent
                  value="address"
                  className="p-6 focus:outline-none mt-0"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Address Book
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Manage your shipping and billing addresses.
                      </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium">
                            Saved Addresses
                          </h3>
                          <Button variant="outline" size="sm">
                            Add New Address
                          </Button>
                        </div>

                        {addresses.length > 0 ? (
                          <div className="space-y-4">
                            {addresses.map((address) => (
                              <div
                                key={address.id}
                                className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
                              >
                                <div className="flex flex-col md:flex-row md:items-start justify-between w-full">
                                  <div>
                                    <div className="font-medium">
                                      {address.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {address.line1}
                                      {address.line2 && `, ${address.line2}`}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {address.city}, {address.state}{" "}
                                      {address.postalCode}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {address.country}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {address.phone}
                                    </div>
                                  </div>

                                  <div className="mt-4 sm:mt-0 flex items-center gap-2 self-end sm:self-start flex-shrink-0">
                                    {address.isDefault ? (
                                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                        Default
                                      </span>
                                    ) : (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          handleSetDefaultAddress(address.id)
                                        }
                                      >
                                        Set as Default
                                      </Button>
                                    )}

                                    <Button variant="ghost" size="sm">
                                      Edit
                                    </Button>

                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                      onClick={() =>
                                        handleRemoveAddress(address.id)
                                      }
                                    >
                                      Remove
                                    </Button>
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
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-2">
                              No addresses
                            </h3>
                            <p className="text-gray-600 mb-4">
                              You haven't added any addresses yet.
                            </p>
                            <Button>Add Address</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent
                  value="notifications"
                  className="p-6 focus:outline-none mt-0"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Notification Settings
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Manage how you receive notifications from Cart Royal.
                      </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">
                          Email Notifications
                        </h3>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Order Updates</div>
                              <div className="text-sm text-gray-600">
                                Receive updates about your orders, shipping, and
                                delivery.
                              </div>
                            </div>
                            <Switch
                              checked={emailNotifications.orders}
                              onCheckedChange={(checked) =>
                                setEmailNotifications({
                                  ...emailNotifications,
                                  orders: checked,
                                })
                              }
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">
                                Promotions and Deals
                              </div>
                              <div className="text-sm text-gray-600">
                                Receive information about sales, discounts, and
                                special offers.
                              </div>
                            </div>
                            <Switch
                              checked={emailNotifications.promotions}
                              onCheckedChange={(checked) =>
                                setEmailNotifications({
                                  ...emailNotifications,
                                  promotions: checked,
                                })
                              }
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">
                                System Notifications
                              </div>
                              <div className="text-sm text-gray-600">
                                Receive important updates about your account and
                                security.
                              </div>
                            </div>
                            <Switch
                              checked={emailNotifications.system}
                              onCheckedChange={(checked) =>
                                setEmailNotifications({
                                  ...emailNotifications,
                                  system: checked,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">
                          Push Notifications
                        </h3>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Order Updates</div>
                              <div className="text-sm text-gray-600">
                                Receive updates about your orders, shipping, and
                                delivery.
                              </div>
                            </div>
                            <Switch
                              checked={pushNotifications.orders}
                              onCheckedChange={(checked) =>
                                setPushNotifications({
                                  ...pushNotifications,
                                  orders: checked,
                                })
                              }
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">
                                Promotions and Deals
                              </div>
                              <div className="text-sm text-gray-600">
                                Receive information about sales, discounts, and
                                special offers.
                              </div>
                            </div>
                            <Switch
                              checked={pushNotifications.promotions}
                              onCheckedChange={(checked) =>
                                setPushNotifications({
                                  ...pushNotifications,
                                  promotions: checked,
                                })
                              }
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">
                                System Notifications
                              </div>
                              <div className="text-sm text-gray-600">
                                Receive important updates about your account and
                                security.
                              </div>
                            </div>
                            <Switch
                              checked={pushNotifications.system}
                              onCheckedChange={(checked) =>
                                setPushNotifications({
                                  ...pushNotifications,
                                  system: checked,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Close Account Tab */}
                <TabsContent
                  value="close"
                  className="p-6 focus:outline-none mt-0"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4 text-red-600">
                        Close Account
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Permanently close your Cart Royal account. This action
                        cannot be undone.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded-lg border border-red-200 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
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
                            className="text-red-600"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">
                            Warning
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>Closing your account will:</p>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Delete all your personal information</li>
                              <li>Cancel any active orders</li>
                              <li>Remove access to your order history</li>
                              <li>
                                Forfeit any unused gift cards or store credits
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">
                          Close Your Account
                        </h3>

                        <form
                          onSubmit={handleCloseAccount}
                          className="space-y-4"
                        >
                          <div>
                            <label
                              htmlFor="closeReason"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Why are you closing your account?
                            </label>
                            <select
                              id="closeReason"
                              value={closeReason}
                              onChange={(e) => setCloseReason(e.target.value)}
                              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                              required
                            >
                              <option value="">Select a reason</option>
                              <option value="not_using">
                                I'm not using Cart Royal anymore
                              </option>
                              <option value="too_expensive">
                                It's too expensive
                              </option>
                              <option value="bad_experience">
                                I had a bad experience
                              </option>
                              <option value="found_alternative">
                                I found an alternative
                              </option>
                              <option value="privacy_concerns">
                                Privacy concerns
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="confirmClose"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Type "DELETE MY ACCOUNT" to confirm
                            </label>
                            <Input
                              id="confirmClose"
                              type="text"
                              value={confirmClose}
                              onChange={(e) => setConfirmClose(e.target.value)}
                              placeholder="DELETE MY ACCOUNT"
                              required
                            />
                          </div>

                          <Button
                            type="submit"
                            variant="destructive"
                            className="mt-4"
                          >
                            Permanently Close Account
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
