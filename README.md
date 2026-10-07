<p align="center">
  <img src="public/logo.png" alt="Cart Royal Logo" width="200"/>
</p>

<h1 align="center">Cart Royal — Web Frontend</h1>

<p align="center">
  A modern, multilingual e-commerce platform built for Nigerian and global shoppers.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/i18n-29%20Languages-green?style=flat-square" />
</p>

---

## What Is Cart Royal?

**Cart Royal** is a full-featured e-commerce web application — a Nigerian-first marketplace that lets buyers discover products from both official brand stores and independent sellers, browse by category, manage a cart and wishlist, track orders, and check out securely in Naira (₦).

Think of it as the Nigerian answer to Jumia or Amazon — but with an emphasis on localization, multi-language accessibility, and a clean, modern user experience built for scale.

---

## The Problem It Solves

Online shopping in Nigeria (and much of West Africa) faces several friction points:

- **Language barriers** — most platforms are English-only, excluding huge segments of the population
- **Poor mobile UX** — existing platforms often have bloated, slow-loading interfaces
- **Trust deficit** — buyers struggle to distinguish official brand stores from random sellers
- **Payment fragmentation** — no unified support for local payment gateways (Paystack, Flutterwave) alongside global options (Visa, Mastercard)
- **Discoverability** — finding products across categories with meaningful filters is painful

Cart Royal addresses all of these by providing a responsive, fast, filterable marketplace with 29-language support, verified official store badges, and a multi-gateway payment system.

---

## My Specific Contribution

This repository contains the **buyer-facing web frontend**, which I built from scratch. My contributions include:

- Full Next.js 15 App Router architecture with route grouping
- Custom multilingual system (29 languages, no external i18n library dependency)
- Complete component library (layout, forms, shared UI, Radix UI primitives)
- Buyer user flows: registration → browsing → cart → checkout → order tracking
- Store discovery, product filtering, wishlist requests, and gift cards
- TypeScript type system for all domain models (Product, Store, Order, Cart, etc.)
- Zod-validated forms with real-time password strength indicator
- Responsive layout system with mobile sidebar and sticky header

---

## Architecture

```
cart-royal-web/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group (no main nav)
│   │   ├── login/
│   │   ├── register/
│   │   └── password/
│   ├── (root)/                   # Main buyer routes (with header/nav)
│   │   ├── cart/                 # Cart + Checkout (multi-step)
│   │   ├── category/[category]/  # Filtered category pages
│   │   ├── favorites/            # Saved items
│   │   ├── gift-card/            # Gift card management
│   │   ├── products/[id]/        # Product detail page
│   │   ├── profile/              # User profile, settings, activity
│   │   ├── purchases/            # Order history & tracking
│   │   ├── shop/                 # Main shop page
│   │   ├── store/                # Single store page
│   │   ├── stores/               # Store directory
│   │   ├── waitlist/             # Pre-launch waitlist
│   │   └── wishlist/             # Wishlist request manager
│   ├── (info)/                   # Static info pages
│   │   ├── faq/
│   │   ├── privacy/
│   │   └── terms/
│   ├── layout.tsx                # Root layout with LanguageProvider
│   └── providers.tsx             # Global React providers
│
├── components/
│   ├── forms/                    # Form components (register, etc.)
│   ├── layout/                   # Header, Footer, Nav, Sidebar, etc.
│   ├── pages/                    # Page-level client components
│   ├── shared/                   # Reusable feature components
│   └── ui/                       # Primitive UI components (Radix-based)
│
├── context/
│   └── LanguageContext.tsx        # Global i18n context + localStorage persistence
│
├── data/
│   └── index.ts                   # TypeScript interfaces + sample data layer
│
├── lib/
│   ├── constants.ts               # Shared constants (nav categories, etc.)
│   ├── getDictionary.ts           # Dynamic locale loader
│   └── utils.ts                   # Utility functions (cn, etc.)
│
├── locales/                       # 29 JSON language dictionaries
│   ├── eng.json
│   ├── fra.json
│   ├── ara.json
│   └── ... (26 more)
│
└── public/                        # Static assets (logos, payment icons, flags)
```

### Route Groups

Next.js **route groups** (`(auth)`, `(root)`, `(info)`) are used to share layouts without polluting URL paths. The `(auth)` group uses a minimal header for a clean sign-in experience; `(root)` wraps all buyer-facing pages with the full navigation shell.

### Data Flow

```
LanguageContext (global state)
  └── locale (code, name, country)  ← persisted to localStorage
  └── dictionary (JSON)             ← dynamically loaded from /locales/
      └── consumed by any component via useLanguage()
```

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **Next.js 15** (App Router + Turbopack) | SSR, routing, image optimization |
| Language | **TypeScript 5** | Type safety across all models |
| Styling | **Tailwind CSS v4** | Utility-first responsive styling |
| UI Components | **Radix UI** | Accessible headless primitives |
| Validation | **Zod** | Form schema validation |
| Icons | **Lucide React** + **React Icons** | Consistent iconography |
| Carousel | **Embla Carousel** | Smooth product image carousels |
| Notifications | **Sonner** | Toast notification system |
| i18n | **Custom Context + JSON** | 29-language dictionary system |
| Flags | **react-circle-flags** | Country flag rendering |
| Country Data | **country-data-list** | Country/phone-code lookup |
| Theming | **next-themes** | Light/dark mode support |
| Animation | **tw-animate-css** | CSS animation utilities |
| Slider | **react-slider** | Price range filter UI |

---

## Key Technical Decisions

### 1. Custom i18n Instead of a Library
Rather than using `next-intl` or `react-i18next`, a lightweight custom `LanguageContext` was built that:
- Loads locale JSON dynamically via `import()` (code-split per language)
- Persists the selected language to `localStorage` across sessions
- Exposes an `isReady` flag to prevent hydration flashes
- Works entirely on the client without middleware or URL-based locale routing

This keeps the bundle lean and avoids complex configuration, while still supporting 29 languages.

### 2. Next.js Route Groups for Layout Sharing
Route groups (`(auth)`, `(root)`, `(info)`) cleanly separate layout concerns — the auth pages get a minimal view-only header, main buyer pages get the full navigation shell, and info pages are isolated. This avoids prop drilling layouts and keeps each group independently layoutable.

### 3. Centralised Data Layer (`data/index.ts`)
All TypeScript interfaces and sample/mock data live in a single `data/index.ts` file with a generic `fetchData<T>()` async wrapper. This makes it trivial to swap mock data for real API calls — every page just calls `fetchData(sampleX)` and the interface contract is already defined.

### 4. Component Separation by Concern
Components are split into four layers:
- **`ui/`** — headless, unstyled primitives (wrapping Radix)
- **`layout/`** — structural chrome (Header, Footer, Nav, Sidebar)
- **`shared/`** — domain-aware reusable components (ProductCard, CartItem, StoreCard)
- **`pages/`** — full client-side page components (CartClientPage, StoresClientPage)

### 5. Multi-step Checkout Architecture
The checkout flow supports a 3-step sequence (`shipping → payment → review`) defined as typed `CheckoutStep` objects, making it straightforward to add/remove/reorder steps without changing logic.

---

## Key Features

### Shopping
- **Browsing & Discovery** — Home feed, category nav (11 categories), and a full stores directory
- **Product Cards** — Ratings, free shipping badges, brand info, discount display, and official store indicators
- **Product Detail** — Image gallery with carousel, specifications, related products
- **Advanced Filtering** — Filter by type, brand, color, size, shipping, rating, seller type, and price range (with collapsible sidebar)
- **Search** — Global search bar in the sticky header

### Cart & Checkout
- **Slide-out Cart Sheet** — Instant cart preview from any page with badge count
- **Full Cart Page** — Editable quantities, item removal, subtotal calculation
- **Multi-step Checkout** — Shipping → Payment → Review flow with progress indicator
- **Payment Options** — Paystack, Flutterwave, Visa, Mastercard, PayPal, Klarna, Skrill, and crypto (USDT, ETH, BNB)

### User Account
- **Registration** — Buyer or Seller account type selection, Google OAuth option, country picker, real-time password strength meter, Zod validation
- **Profile** — Personal info, loyalty points, referral code & earnings, followed stores, notifications
- **Activity** — Full order history and purchase tracking with status timelines
- **Settings** — Payment card management, address book, email & push notification preferences

### Store Management
- **Store Directory** — Browse all stores with category filtering, ratings, product counts
- **Store Profile** — Cover image, follower count, response rate, shipping time, return policy
- **Official Store Badges** — Visual trust indicators for verified brand stores

### Additional Features
- **Wishlist Requests** — Submit a product sourcing request with description, budget, urgency level; track fulfillment status
- **Favorites** — Save products for later
- **Gift Cards** — Purchase, manage, and redeem gift cards
- **Waitlist** — Pre-launch email capture page with social share buttons
- **Newsletter** — Footer subscription form with toast confirmation
- **Dark/Light Mode** — Full theme support via `next-themes`
- **Multilingual UI** — 29 languages including Arabic (RTL), Japanese, Korean, Hindi, Chinese, and more

---

## Supported Languages (29)

| Code | Language | Code | Language |
|------|----------|------|----------|
| `eng` | English | `fra` | French |
| `spa` | Spanish | `por` | Portuguese |
| `deu` | German | `ita` | Italian |
| `ara` | Arabic | `hin` | Hindi |
| `ben` | Bengali | `rus` | Russian |
| `ukr` | Ukrainian | `jpn` | Japanese |
| `kor` | Korean | `zho` | Chinese |
| `vie` | Vietnamese | `tha` | Thai |
| `ind` | Indonesian | `msa` | Malay |
| `fil` | Filipino | `tur` | Turkish |
| `pol` | Polish | `nld` | Dutch |
| `swe` | Swedish | `nor` | Norwegian |
| `dan` | Danish | `fin` | Finnish |
| `hun` | Hungarian | `ron` | Romanian |
| `ces` | Czech | | |

---

## What Makes This Technically Interesting

1. **Zero-overhead i18n** — Custom dictionary loading via dynamic `import()` means only the active language JSON is ever loaded, with no runtime i18n library overhead.

2. **Locale persistence without cookies** — Language preference survives page refreshes via `localStorage`, avoiding the need for server-side session handling or URL locale prefixes.

3. **Turbopack-powered dev server** — Using Next.js 15 with `--turbopack` flag for sub-second HMR during development.

4. **Type-safe domain models** — The entire domain (Product, Store, Order, Cart, Wishlist, GiftCard, UserProfile, etc.) is fully typed in TypeScript, including discriminated union types for order statuses and urgency levels.

5. **Headless + Accessible UI** — All interactive components (Dialogs, Dropdowns, Sheets, Tabs, Tooltips, Popovers) are built on Radix UI primitives, ensuring keyboard navigation and screen-reader accessibility out of the box.

6. **Collapsible filter architecture** — The `FilterSidebar` uses a generic `FilterState` type with computed `StringArrayFilterKeys` to enable type-safe, DRY filter toggle logic across any filter dimension.

---

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| Hydration mismatch from localStorage | Added `isReady` flag to `LanguageContext` — components render `null` until dictionary is hydrated |
| Supporting 29 languages without bundle bloat | Dynamic `import()` for locale JSON — each file is a separate code-split chunk |
| Complex filter state with multiple dimensions | Single `FilterState` interface + `StringArrayFilterKeys` computed type for generic filter toggle handler |
| Auth vs. main-app layout sharing | Next.js route groups with independent `layout.tsx` per group |
| Country/language picker UX | Custom `LanguageDropdown` + `CountryDropdown` components with search, using `react-circle-flags` for visual flag rendering |

---

## Screenshots

> Screenshots will be added once the live environment is available.

---

## Live Demo

> A live demo link will be added upon deployment.

---

## Setup Instructions

### Prerequisites

- **Node.js** >= 18
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Hayotunday/cart-royal-web.git
cd cart-royal-web

# Install dependencies
npm install
# or
yarn install
```

### Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The dev server uses **Turbopack** for fast HMR.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Project Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start dev server with Turbopack |
| Build | `npm run build` | Build production bundle |
| Start | `npm run start` | Run production server |
| Lint | `npm run lint` | Run ESLint |

---

## Routes Overview

| Route | Description |
|---|---|
| `/` | Home — hero section, product feed, footer |
| `/shop` | Full shop page |
| `/category/[category]` | Filtered category page with sidebar |
| `/products/[id]` | Product detail page |
| `/stores` | Store directory |
| `/store/[id]` | Individual store page |
| `/cart` | Cart page |
| `/cart/checkout` | Multi-step checkout |
| `/favorites` | Saved favorites |
| `/wishlist` | Wishlist requests |
| `/gift-card` | Gift card page |
| `/purchases` | Order history & tracking |
| `/profile` | User profile |
| `/profile/settings` | Account settings |
| `/profile/activity` | Activity feed |
| `/login` | Login page |
| `/register` | Registration (buyer/seller) |
| `/password` | Password reset |
| `/waitlist` | Pre-launch waitlist |
| `/faq` | FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |

---

## Related Repositories

- **[cart-royal-sellers](https://github.com/Hayotunday/cart-royal-sellers)** — Seller dashboard frontend
- **Cart Royal API** — Backend (coming soon)

---

## License

© 2023–2026 Cart Royal. All rights reserved.
