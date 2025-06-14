"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegCircleCheck, FaRegHeart } from "react-icons/fa6";
import { PiWarningBold } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";

// Sample user data - in a real app, this would come from an API
const userData = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+234 123 456 7890",
  joinDate: "June 2023",
  profileImage: "/catalogue/img.jpg",
  points: 2500,
  referralCode: "JOHNDOE25",
  referralLink: "https://cartroyal.com/register?ref=JOHNDOE25",
  referralCount: 8,
  referralEarnings: 4000,
};

// Sample followed stores data - in a real app, this would come from an API
const followedStores = [
  {
    id: "store-1",
    name: "Fashion Store",
    logo: "/catalogue/img.jpg",
    category: "Clothing",
    productCount: 156,
    isOfficial: true,
  },
  {
    id: "store-2",
    name: "Electronics Hub",
    logo: "/catalogue/img.jpg",
    category: "Electronics",
    productCount: 243,
    isOfficial: true,
  },
  {
    id: "store-3",
    name: "Home Decor",
    logo: "/catalogue/img.jpg",
    category: "Home & Living",
    productCount: 189,
    isOfficial: false,
  },
];

// Sample notifications data - in a real app, this would come from an API
const notifications = [
  {
    id: "notif-1",
    type: "order",
    title: "Order Delivered",
    message: "Your order #12345 has been delivered successfully.",
    date: "2025-06-07T14:30:00",
    isRead: false,
  },
  {
    id: "notif-2",
    type: "promotion",
    title: "Flash Sale!",
    message:
      "Don't miss our 24-hour flash sale with up to 70% off on selected items.",
    date: "2025-06-06T10:15:00",
    isRead: true,
  },
  {
    id: "notif-3",
    type: "system",
    title: "Password Changed",
    message: "Your account password was changed successfully.",
    date: "2025-06-05T18:45:00",
    isRead: true,
  },
  {
    id: "notif-4",
    type: "order",
    title: "Order Shipped",
    message: "Your order #12344 has been shipped and is on its way.",
    date: "2025-06-04T09:20:00",
    isRead: true,
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  const [copySuccess, setCopySuccess] = useState(false);

  // Count unread notifications
  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(userData.referralLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return (
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <FiShoppingBag className="text-blue-600" />
          </div>
        );
      case "promotion":
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
            <PiWarningBold className="text-yellow-600" />
          </div>
        );
      case "system":
        return (
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <LuSettings className="text-purple-600" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
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
              className="text-gray-600"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <Header />
      <CategoryNav />

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={userData.profileImage || "/catalogue/img.jpg"}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Member since {userData.joinDate}
                </p>

                <div className="w-full border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Cart Royal Points</span>
                    <span className="font-semibold text-primary">
                      {userData.points.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="w-full border-t border-gray-200 pt-4 mt-4">
                  <Link href="/profile/settings">
                    <Button variant="outline" size="sm" className="w-full mb-2">
                      Settings
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg overflow-hidden">
              <Tabs
                defaultValue="overview"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="flex w-full">
                  <TabsTrigger
                    value="overview"
                    className="px-4 rounded-md flex items-center justify-center"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="followed-stores"
                    className="px-4 rounded-md flex items-center justify-center"
                  >
                    Followed Stores
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="px-4 rounded-md flex items-center justify-center"
                  >
                    Notifications
                    {unreadCount > 0 && (
                      <span className="ml-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </TabsTrigger>
                  <TabsTrigger
                    value="wishlist"
                    className="px-4 rounded-md flex items-center justify-center"
                  >
                    Wishlist
                  </TabsTrigger>
                  <TabsTrigger
                    value="point-history"
                    className="px-4 rounded-md flex items-center justify-center"
                  >
                    Point History
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent
                  value="overview"
                  className="p-6 focus:outline-none"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Profile Overview
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          <div className="p-4">
                            <h3 className="text-lg font-medium mb-3">
                              Personal Information
                            </h3>

                            <div className="space-y-2">
                              <div className="flex">
                                <span className="text-gray-600 w-24">
                                  Name:
                                </span>
                                <span>{userData.name}</span>
                              </div>
                              <div className="flex">
                                <span className="text-gray-600 w-24">
                                  Email:
                                </span>
                                <span>{userData.email}</span>
                              </div>
                              <div className="flex">
                                <span className="text-gray-600 w-24">
                                  Phone:
                                </span>
                                <span>{userData.phone}</span>
                              </div>
                            </div>

                            <div className="mt-4">
                              <Link href="/profile/settings">
                                <Button variant="outline" size="sm">
                                  Edit Profile
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Referral Program */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          <div className="p-4">
                            <h3 className="text-lg font-medium mb-3">
                              Referral Program
                            </h3>

                            <div className="space-y-2 mb-4">
                              <div className="flex">
                                <span className="text-gray-600 w-32">
                                  Referral Code:
                                </span>
                                <span className="font-medium">
                                  {userData.referralCode}
                                </span>
                              </div>
                              <div className="flex">
                                <span className="text-gray-600 w-32">
                                  Referrals:
                                </span>
                                <span>{userData.referralCount} friends</span>
                              </div>
                              <div className="flex">
                                <span className="text-gray-600 w-32">
                                  Earnings:
                                </span>
                                <span>
                                  ₦{userData.referralEarnings.toLocaleString()}
                                </span>
                              </div>
                            </div>

                            <div className="relative">
                              <Input
                                value={userData.referralLink}
                                readOnly
                                className="pr-24"
                              />
                              <Button
                                size="sm"
                                className="absolute right-1 top-1 h-8"
                                onClick={copyReferralLink}
                              >
                                {copySuccess ? "Copied!" : "Copy Link"}
                              </Button>
                            </div>

                            <div className="mt-4 text-sm text-gray-600">
                              Share your referral link with friends and earn
                              ₦500 when they make their first purchase!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium">
                            Recent Activity
                          </h3>
                          <Link href="/profile/activity">
                            <Button variant="link" size="sm">
                              View All
                            </Button>
                          </Link>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <FiShoppingBag className="text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">Order Placed</div>
                              <div className="text-sm text-gray-600">
                                You placed an order for ₦25,000
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                June 7, 2025 • 2:30 PM
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <FaRegCircleCheck className="text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">Points Earned</div>
                              <div className="text-sm text-gray-600">
                                You earned 250 Cart Royal points
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                June 7, 2025 • 2:30 PM
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                              <FaRegHeart className="text-purple-600" />
                            </div>
                            <div>
                              <div className="font-medium">Store Followed</div>
                              <div className="text-sm text-gray-600">
                                You followed Electronics Hub
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                June 6, 2025 • 10:15 AM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Followed Stores Tab */}
                <TabsContent
                  value="followed-stores"
                  className="p-6 focus:outline-none"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Followed Stores
                      </h2>

                      {followedStores.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {followedStores.map((store) => (
                            <Link
                              key={store.id}
                              href={`/store/${store.id}`}
                              className="block group"
                            >
                              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="p-4 flex flex-col items-center text-center">
                                  <div className="w-16 h-16 rounded-full bg-gray-100 mb-3 overflow-hidden">
                                    <img
                                      src={store.logo}
                                      alt={store.name}
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <h3 className="font-semibold mb-1">
                                    {store.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 mb-2">
                                    {store.category}
                                  </p>
                                  <div className="flex items-center mb-2">
                                    <span className="text-xs">
                                      {store.productCount} Products
                                    </span>
                                    {store.isOfficial && (
                                      <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                                        Official
                                      </span>
                                    )}
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      // In a real app, this would unfollow the store via API
                                      alert(`Unfollowed ${store.name}`);
                                    }}
                                  >
                                    Unfollow
                                  </Button>
                                </div>
                              </div>
                            </Link>
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
                            No followed stores
                          </h3>
                          <p className="text-gray-600 mb-4">
                            You haven't followed any stores yet.
                          </p>
                          <Link href="/stores">
                            <Button>Explore Stores</Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent
                  value="notifications"
                  className="p-6 focus:outline-none"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Notifications
                      </h2>

                      {notifications.length > 0 ? (
                        <div className="space-y-4">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`border rounded-lg p-4 ${
                                !notification.isRead
                                  ? "bg-blue-50 border-blue-200"
                                  : "bg-white"
                              }`}
                            >
                              <div className="flex items-start">
                                {getNotificationIcon(notification.type)}
                                <div className="ml-3 flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <div className="font-medium">
                                        {notification.title}
                                      </div>
                                      <div className="text-sm text-gray-600 mt-1">
                                        {notification.message}
                                      </div>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {formatDate(notification.date)}
                                    </div>
                                  </div>
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
                              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium mb-2">
                            No notifications
                          </h3>
                          <p className="text-gray-600">
                            You don't have any notifications yet.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Wishlist Tab */}
                <TabsContent
                  value="wishlist"
                  className="p-6 focus:outline-none"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Wishlist</h2>
                        <Link href="/wishlist">
                          <Button variant="outline" size="sm">
                            Make Special Request
                          </Button>
                        </Link>
                      </div>

                      <div className="text-center py-8">
                        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <FaRegHeart className="text-gray-400 size-6" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                          Your wishlist is empty
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Save items you want to buy later.
                        </p>
                        <Link href="/category/men">
                          <Button>Start Shopping</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Point History Tab */}
                <TabsContent
                  value="point-history"
                  className="p-6 focus:outline-none"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Points History
                      </h2>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
