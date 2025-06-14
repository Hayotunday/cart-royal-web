"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample activity data - in a real app, this would come from an API
const activityData = [
  {
    id: "act-1",
    type: "order",
    title: "Order Placed",
    description: "You placed an order for ₦25,000",
    date: "2025-06-14T14:30:00",
    details: {
      orderId: "ORD-12345",
      items: 3,
      total: 25000,
    },
  },
  {
    id: "act-2",
    type: "points",
    title: "Points Earned",
    description: "You earned 250 Cart Royal points",
    date: "2025-06-14T14:30:00",
    details: {
      points: 250,
      reason: "Purchase",
      orderId: "ORD-12345",
    },
  },
  {
    id: "act-3",
    type: "store",
    title: "Store Followed",
    description: "You followed Electronics Hub",
    date: "2025-06-13T10:15:00",
    details: {
      storeId: "store-2",
      storeName: "Electronics Hub",
    },
  },
  {
    id: "act-4",
    type: "wishlist",
    title: "Wishlist Request",
    description: "You requested a Vintage Record Player",
    date: "2025-06-12T09:20:00",
    details: {
      requestId: "wish-2",
      productName: "Vintage Record Player",
      budget: 50000,
    },
  },
  {
    id: "act-5",
    type: "review",
    title: "Review Posted",
    description: "You reviewed Wireless Headphones",
    date: "2025-06-11T16:45:00",
    details: {
      productId: "prod-123",
      productName: "Wireless Headphones",
      rating: 4,
    },
  },
  {
    id: "act-6",
    type: "account",
    title: "Password Changed",
    description: "You changed your account password",
    date: "2025-06-10T11:30:00",
    details: {
      ipAddress: "192.168.1.1",
      device: "Chrome on Windows",
    },
  },
  {
    id: "act-7",
    type: "gift",
    title: "Gift Card Purchased",
    description: "You purchased a ₦10,000 gift card",
    date: "2025-06-09T13:20:00",
    details: {
      cardId: "gift-123",
      amount: 10000,
      recipient: "Self",
    },
  },
  {
    id: "act-8",
    type: "favorite",
    title: "Product Favorited",
    description: "You added Smart Watch to favorites",
    date: "2025-06-08T09:15:00",
    details: {
      productId: "prod-456",
      productName: "Smart Watch",
    },
  },
  {
    id: "act-9",
    type: "login",
    title: "Account Login",
    description: "You logged in from a new device",
    date: "2025-06-07T08:30:00",
    details: {
      ipAddress: "192.168.1.2",
      device: "Safari on iPhone",
      location: "Lagos, Nigeria",
    },
  },
  {
    id: "act-10",
    type: "referral",
    title: "Referral Successful",
    description: "Your friend John signed up using your referral",
    date: "2025-06-06T14:45:00",
    details: {
      referralId: "ref-123",
      friendName: "John Doe",
      reward: 500,
    },
  },
];

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Filter activities based on active tab and date filter
  const filteredActivities = activityData.filter((activity) => {
    // Filter by type
    if (activeTab !== "all" && activity.type !== activeTab) {
      return false;
    }

    // Filter by date
    if (dateFilter !== "all") {
      const activityDate = new Date(activity.date);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const lastWeek = new Date(today);
      lastWeek.setDate(lastWeek.getDate() - 7);
      const lastMonth = new Date(today);
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      if (
        dateFilter === "today" &&
        activityDate.toDateString() !== today.toDateString()
      ) {
        return false;
      } else if (
        dateFilter === "yesterday" &&
        activityDate.toDateString() !== yesterday.toDateString()
      ) {
        return false;
      } else if (dateFilter === "week" && activityDate < lastWeek) {
        return false;
      } else if (dateFilter === "month" && activityDate < lastMonth) {
        return false;
      }
    }

    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return `Today, ${date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "order":
        return (
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
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
              className="text-blue-600"
              aria-hidden="true"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
        );
      case "points":
        return (
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
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
              className="text-green-600"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        );
      case "store":
        return (
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
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
              className="text-purple-600"
              aria-hidden="true"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        );
      case "wishlist":
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
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
              className="text-yellow-600"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        );
      case "review":
        return (
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
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
              className="text-indigo-600"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
        );
      case "account":
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
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        );
      case "gift":
        return (
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
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
              className="text-red-600"
              aria-hidden="true"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
            </svg>
          </div>
        );
      case "favorite":
        return (
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
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
              className="text-pink-600"
              aria-hidden="true"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        );
      case "login":
        return (
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
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
              className="text-teal-600"
              aria-hidden="true"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>
        );
      case "referral":
        return (
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
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
              className="text-orange-600"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
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
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        );
    }
  };

  const renderActivityDetails = (activity: any) => {
    switch (activity.type) {
      case "order":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Order ID:</span>
              <span className="ml-2">{activity.details.orderId}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Items:</span>
              <span className="ml-2">{activity.details.items}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Total:</span>
              <span className="ml-2">
                ₦{activity.details.total.toLocaleString()}
              </span>
            </div>
            <div className="mt-2">
              <Link href={`/purchases`}>
                <Button variant="link" size="sm" className="px-0">
                  View Order Details
                </Button>
              </Link>
            </div>
          </div>
        );
      case "points":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Points:</span>
              <span className="ml-2">{activity.details.points}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Reason:</span>
              <span className="ml-2">{activity.details.reason}</span>
            </div>
            {activity.details.orderId && (
              <div className="flex items-center text-gray-600">
                <span className="font-medium">Order ID:</span>
                <span className="ml-2">{activity.details.orderId}</span>
              </div>
            )}
            <div className="mt-2">
              <Link href={`/profile`}>
                <Button variant="link" size="sm" className="px-0">
                  View Points History
                </Button>
              </Link>
            </div>
          </div>
        );
      case "store":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Store:</span>
              <span className="ml-2">{activity.details.storeName}</span>
            </div>
            <div className="mt-2">
              <Link href={`/store/${activity.details.storeId}`}>
                <Button variant="link" size="sm" className="px-0">
                  Visit Store
                </Button>
              </Link>
            </div>
          </div>
        );
      case "wishlist":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Product:</span>
              <span className="ml-2">{activity.details.productName}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Budget:</span>
              <span className="ml-2">
                ₦{activity.details.budget.toLocaleString()}
              </span>
            </div>
            <div className="mt-2">
              <Link href={`/wishlist`}>
                <Button variant="link" size="sm" className="px-0">
                  View Request
                </Button>
              </Link>
            </div>
          </div>
        );
      case "review":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Product:</span>
              <span className="ml-2">{activity.details.productName}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Rating:</span>
              <span className="ml-2">
                {Array(activity.details.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                {Array(5 - activity.details.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-gray-300">
                      ★
                    </span>
                  ))}
              </span>
            </div>
            <div className="mt-2">
              <Link href={`/product/${activity.details.productId}`}>
                <Button variant="link" size="sm" className="px-0">
                  View Product
                </Button>
              </Link>
            </div>
          </div>
        );
      case "account":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">IP Address:</span>
              <span className="ml-2">{activity.details.ipAddress}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Device:</span>
              <span className="ml-2">{activity.details.device}</span>
            </div>
            <div className="mt-2">
              <Link href={`/settings`}>
                <Button variant="link" size="sm" className="px-0">
                  Manage Account Settings
                </Button>
              </Link>
            </div>
          </div>
        );
      case "gift":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Amount:</span>
              <span className="ml-2">
                ₦{activity.details.amount.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Recipient:</span>
              <span className="ml-2">{activity.details.recipient}</span>
            </div>
            <div className="mt-2">
              <Link href={`/gift-card`}>
                <Button variant="link" size="sm" className="px-0">
                  View Gift Cards
                </Button>
              </Link>
            </div>
          </div>
        );
      case "favorite":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Product:</span>
              <span className="ml-2">{activity.details.productName}</span>
            </div>
            <div className="mt-2">
              <Link href={`/product/${activity.details.productId}`}>
                <Button variant="link" size="sm" className="px-0">
                  View Product
                </Button>
              </Link>
            </div>
          </div>
        );
      case "login":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">IP Address:</span>
              <span className="ml-2">{activity.details.ipAddress}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Device:</span>
              <span className="ml-2">{activity.details.device}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Location:</span>
              <span className="ml-2">{activity.details.location}</span>
            </div>
            <div className="mt-2">
              <Link href={`/settings`}>
                <Button variant="link" size="sm" className="px-0">
                  Manage Security Settings
                </Button>
              </Link>
            </div>
          </div>
        );
      case "referral":
        return (
          <div className="mt-2 text-sm">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Friend:</span>
              <span className="ml-2">{activity.details.friendName}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Reward:</span>
              <span className="ml-2">
                ₦{activity.details.reward.toLocaleString()}
              </span>
            </div>
            <div className="mt-2">
              <Link href={`/profile`}>
                <Button variant="link" size="sm" className="px-0">
                  View Referral Program
                </Button>
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header viewOnly />
      <CategoryNav />

      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Activity Log</h1>
            <p className="text-gray-600">
              Track your recent activities on Cart Royal
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              aria-label="Filter by date"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="overflow-x-auto">
              <TabsList className="flex border-b border-gray-200 px-6 pt-4">
                <TabsTrigger
                  value="all"
                  className="px-4 py-2 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none whitespace-nowrap"
                >
                  All Activities
                </TabsTrigger>
                <TabsTrigger
                  value="order"
                  className="px-4 py-2 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none whitespace-nowrap"
                >
                  Orders
                </TabsTrigger>
                <TabsTrigger
                  value="points"
                  className="px-4 py-2 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none whitespace-nowrap"
                >
                  Points
                </TabsTrigger>
                <TabsTrigger
                  value="review"
                  className="px-4 py-2 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none whitespace-nowrap"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="px-4 py-2 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none whitespace-nowrap"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="login"
                  className="px-4 py-2 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none whitespace-nowrap"
                >
                  Logins
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="p-6 focus:outline-none">
              {filteredActivities.length > 0 ? (
                <div className="space-y-6">
                  {filteredActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start">
                        {getActivityIcon(activity.type)}
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">
                                {activity.title}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {activity.description}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">
                              {formatDate(activity.date)}
                            </div>
                          </div>

                          {renderActivityDetails(activity)}
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
                      aria-hidden="true"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    No activities found
                  </h3>
                  <p className="text-gray-600">
                    {activeTab === "all"
                      ? "You don't have any activities in the selected time period."
                      : `You don't have any ${activeTab} activities in the selected time period.`}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            This activity log shows your interactions with Cart Royal. For
            privacy information, please see our{" "}
            <Link href="/info/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
