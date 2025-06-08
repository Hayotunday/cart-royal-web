// Common Product Interface
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  brand?: string;
  type?: string;
  color?: string;
  availableSizes?: string[];
  size?: string;
  freeShipping?: boolean;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  officialStore?: boolean;
  storeLogoUrl?: string;
  storeName?: string;
  storeId?: string;
  description?: string;
  specifications?: Array<{ name: string; value: string }>;
  quantity?: number; // For cart items
}

// Store Interface
export interface Store {
  id: string;
  name: string;
  logo: string;
  coverImage?: string;
  category: string;
  rating: number;
  followers?: number;
  productCount: number;
  description: string;
  location?: string;
  joinedDate?: string;
  responseRate?: string;
  shippingTime?: string;
  returnPolicy?: string;
  contactInfo?: {
    email: string;
    phone: string;
  };
  featured?: boolean;
  isOfficial?: boolean;
}

// Cart Item Interface
export interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Order Item Interface (for purchases)
export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Tracking Entry Interface (for purchases)
export interface TrackingEntry {
  date: string;
  status: string;
  description: string;
}

// Purchase/Order Interface
export interface Purchase {
  id: string; // Order ID
  date: string;
  total: number;
  status: string;
  items: OrderItem[];
  tracking: TrackingEntry[];
}

// Wishlist Request Interface
export interface WishlistRequest {
  id: string;
  productName: string;
  description: string;
  budget: number;
  urgency: "high" | "normal" | "low" | string;
  status: "pending" | "fulfilled" | "rejected" | string;
  createdAt: string;
  fulfilledAt?: string;
  images: string[];
}

// User Data Interface
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  profileImage: string;
  points: number;
  referralCode: string;
  referralLink: string;
  referralCount: number;
  referralEarnings: number;
}

// Payment Card Interface
export interface PaymentCardInfo {
  id: string;
  type: "visa" | "mastercard" | string;
  last4: string;
  expiry: string;
  name: string;
  isDefault: boolean;
}

// Address Interface
export interface AddressInfo {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

// Notification Settings Interface
export interface NotificationSettings {
  orders: boolean;
  promotions: boolean;
  system: boolean;
}

// Notification Item Interface
export interface NotificationItemData {
  id: string;
  type: "order" | "promotion" | "system" | string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
}

// Gift Card Interface
export interface GiftCardInfo {
  id: string;
  code: string;
  amount: number;
  status: "unused" | "used" | string;
  purchaseDate: string;
  expiryDate: string;
  usedDate?: string;
  recipientEmail?: string;
  recipientName?: string;
  message?: string;
}

// Filter Options for Category Page
export interface CategoryFilterOptions {
  type: string[];
  brand: string[];
  color: string[];
  size: string[];
  shipping: string[];
  rating: string[];
  seller: string[];
}

export interface CheckoutStep {
  id: "shipping" | "payment" | "review";
  name: string;
}

// --- Sample Data ---

// For c:\Work\cart-royal\app\(root)\cart\page.tsx
export const sampleCartItems: CartItemType[] = [
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
  {
    id: "3",
    name: "Portable Bluetooth Speaker",
    price: 12000,
    quantity: 1,
    image: "/catalogue/img.jpg",
  },
];

// For c:\Work\cart-royal\app\(root)\cart\checkout\page.tsx
export const sampleCheckoutCartItems: CartItemType[] = [
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
export const sampleShippingFee = 1500;
export const checkoutSteps: CheckoutStep[] = [
  { id: "shipping", name: "Shipping" },
  { id: "payment", name: "Payment" },
  { id: "review", name: "Review" },
];

// For c:\Work\cart-royal\app\(root)\stores\page.tsx
export const sampleStores: Store[] = [
  {
    id: "fashion-store",
    name: "Fashion Store",
    logo: "/catalogue/img.jpg",
    category: "Clothing",
    rating: 4.8,
    productCount: 156,
    description: "Official store for trendy fashion items and accessories.",
    featured: true,
  },
  {
    id: "electronics-hub",
    name: "Electronics Hub",
    logo: "/catalogue/img.jpg",
    category: "Electronics",
    rating: 4.6,
    productCount: 243,
    description: "Your one-stop shop for all electronics and gadgets.",
    featured: true,
  },
  // ... (add all other stores from stores/page.tsx)
];
export const sampleStoreCategories: string[] = [
  "All Categories",
  "Clothing",
  "Electronics",
  "Sports",
  "Home & Living",
  "Beauty",
  "Kids",
  "Books",
  "Pets",
  "Jewelry",
];

// For c:\Work\cart-royal\app\(root)\stores\[id]\page.tsx
export const sampleStoreDetails: Store = {
  id: "fashion-store",
  name: "Fashion Store",
  logo: "/catalogue/img.jpg",
  coverImage: "/catalogue/img.jpg",
  category: "Clothing",
  rating: 4.8,
  followers: 12500,
  productCount: 156,
  description:
    "Official store for trendy fashion items and accessories. We offer a wide range of clothing, footwear, and accessories for men, women, and children. Our products are made with high-quality materials and designed to keep you stylish and comfortable.",
  location: "Lagos, Nigeria",
  joinedDate: "January 2020",
  responseRate: "98%",
  shippingTime: "1-3 days",
  returnPolicy: "7 days return policy",
  contactInfo: {
    email: "contact@fashionstore.com",
    phone: "+234 123 456 7890",
  },
};
export const sampleStoreProducts: Product[] = [
  {
    id: "1",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "2",
    name: "Men's Black Jeans",
    price: 7000,
    image: "/catalogue/img.jpg",
    brand: "Jeans Co",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Jeans Co Store",
  },
  {
    id: "3",
    name: "Women's Casual Training Suit",
    price: 15000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "4",
    name: "Women's Casual Training Suit",
    price: 15000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "5",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "6",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "7",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  {
    id: "8",
    name: "Men's Casual T-Shirt",
    price: 5000,
    image: "/catalogue/img.jpg",
    brand: "Fashion Brand",
    freeShipping: true,
    storeLogoUrl: "/catalogue/img.jpg",
    storeName: "Fashion Store",
  },
  // ... (add other products for this store)
];
export const sampleProductCategoriesForStorePage: string[] = [
  "All Categories",
  "Men's Clothing",
  "Women's Clothing",
  "Footwear",
  "Accessories",
];

// For c:\Work\cart-royal\app\(root)\wishlist\page.tsx
export const sampleWishlistRequests: WishlistRequest[] = [
  {
    id: "wish-1",
    productName: "Limited Edition Sneakers",
    description:
      'Looking for Nike Air Jordan 4 Retro "Fire Red" (2020) in size 42.',
    budget: 75000,
    urgency: "high",
    status: "pending",
    createdAt: "2025-06-01T10:30:00",
    images: ["/catalogue/img.jpg"],
  },
  // ... (add other wishlist requests)
];

// For c:\Work\cart-royal\app\(root)\purchases\page.tsx
export const samplePurchaseData: Purchase[] = [
  {
    id: "ORD-12345",
    date: "2025-06-01",
    total: 52000,
    status: "Delivered",
    items: [
      /* ... OrderItem ... */
    ],
    tracking: [
      /* ... TrackingEntry ... */
    ],
  },
  // ... (add other purchases)
];

// For c:\Work\cart-royal\app\(root)\profile\settings\page.tsx
export const sampleUserProfileSettings: UserProfile = {
  /* ... user data ... */ id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+234 123 456 7890",
  joinDate: "June 2023",
  profileImage: "/catalogue/img.jpg",
  points: 2500,
  referralCode: "JOHNDOE25",
  referralLink: "https://cartroyal.com/ref/JOHNDOE25",
  referralCount: 8,
  referralEarnings: 4000,
};
export const samplePaymentCards: PaymentCardInfo[] = [
  /* ... card data ... */
];
export const sampleAddresses: AddressInfo[] = [
  /* ... address data ... */
];
export const sampleEmailNotificationSettings: NotificationSettings = {
  orders: true,
  promotions: true,
  system: true,
};
export const samplePushNotificationSettings: NotificationSettings = {
  orders: true,
  promotions: false,
  system: true,
};

// For c:\Work\cart-royal\app\(root)\products\[id]\page.tsx
export const sampleProductDetails: Product = {
  /* ... detailed product data ... */ id: "1",
  name: "Men's Casual T-Shirt",
  price: 5000,
  image: "/catalogue/img.jpg" /* ... more fields ... */,
};
export const sampleRelatedProducts: Product[] = [
  /* ... related product data ... */
];

// For c:\Work\cart-royal\app\(root)\profile\page.tsx
export const sampleUserProfileData: UserProfile = {
  /* ... user data ... */ id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+234 123 456 7890",
  joinDate: "June 2023",
  profileImage: "/catalogue/img.jpg",
  points: 2500,
  referralCode: "JOHNDOE25",
  referralLink: "https://cartroyal.com/ref/JOHNDOE25",
  referralCount: 8,
  referralEarnings: 4000,
};
export const sampleFollowedStores: Store[] = [
  /* ... store data ... */
];
export const sampleNotifications: NotificationItemData[] = [
  /* ... notification data ... */
];

// For c:\Work\cart-royal\app\(root)\favorites\page.tsx
export const sampleFavoriteItems: Product[] = [
  /* ... product data ... */
];

// For c:\Work\cart-royal\app\(root)\gift-card\page.tsx
export const sampleGiftCards: GiftCardInfo[] = [
  /* ... gift card data ... */
];

// For c:\Work\cart-royal\app\(root)\category\[category]\page.tsx
export const sampleCategoryProducts: Product[] = [
  /* ... product data for categories ... */
];
export const sampleCategoryFilterOptions: CategoryFilterOptions = {
  type: ["T-Shirt", "Jeans", "Shoes", "Shirt", "Hoodie", "Shorts", "Accessory"],
  brand: [
    "Fashion Brand",
    "Denim Co",
    "SportyFit",
    "Elegance",
    "LeatherCraft",
    "Urban Style",
    "Outdoor Life",
    "TimeKeeper",
  ],
  color: ["Blue", "Black", "Red", "White", "Brown", "Gray", "Khaki", "Silver"],
  size: ["S", "M", "L", "XL", "32", "34", "42", "One Size"],
  shipping: ["Free Shipping", "Paid Shipping"],
  rating: ["4.5 & Above", "4.0 & Above", "3.5 & Above", "3.0 & Above"],
  seller: ["Official Stores", "All Sellers"],
};

// Generic products for ProductList component
export const genericProductList: Product[] = [
  {
    id: "p1",
    name: "Generic T-Shirt",
    price: 19.99,
    image: "/catalogue/img.jpg",
    storeName: "Generic Store",
    freeShipping: true,
  },
  {
    id: "p2",
    name: "Generic Jeans",
    price: 49.99,
    image: "/catalogue/img.jpg",
    storeName: "Generic Store",
  },
  {
    id: "p3",
    name: "Generic Hat",
    price: 15.0,
    image: "/catalogue/img.jpg",
    storeName: "Generic Store",
    freeShipping: true,
  },
  {
    id: "p4",
    name: "Generic Shoes",
    price: 79.99,
    image: "/catalogue/img.jpg",
    storeName: "Generic Store",
  },
  {
    id: "p5",
    name: "Generic Watch",
    price: 120.0,
    image: "/catalogue/img.jpg",
    storeName: "Generic Store",
    freeShipping: true,
  },
  {
    id: "p6",
    name: "Generic Bag",
    price: 35.5,
    image: "/catalogue/img.jpg",
    storeName: "Generic Store",
  },
];

/**
 * Simulates fetching data. In a real app, this would be an API call.
 * @param data The data to return after a short delay.
 */
export async function fetchData<T>(data: T): Promise<T> {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 50)); // Optional: simulate delay
  return data;
}
