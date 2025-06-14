// This is now a Server Component
import React from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import StoresClientPage from "@/components/features/StoresClientPage";
import {
  fetchData,
  sampleStores,
  sampleStoreCategories,
  Store,
} from "@/data/index";

async function getStoresPageData(): Promise<{
  stores: Store[];
  categories: string[];
}> {
  const stores = await fetchData(sampleStores);
  const categories = await fetchData(sampleStoreCategories);
  return { stores, categories };
}

export default async function StoresPage() {
  const { stores, categories } = await getStoresPageData();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />
      <StoresClientPage initialStores={stores} initialCategories={categories} />
    </main>
  );
}
