import React from "react";
import Advertisement from "./advertisement";
import StoresList from "./store-list";
import ProductList from "./product-list";
import { sampleStoreProducts } from "@/data/index";

const Shop = () => {
  return (
    <main className="p-14" id="shop">
      <StoresList />
      <ProductList title="New Arrivals" products={sampleStoreProducts} />
      <Advertisement />
      <ProductList products={sampleStoreProducts} />
      <ProductList products={sampleStoreProducts} />
      <Advertisement />
      <ProductList products={sampleStoreProducts} />
      <ProductList products={sampleStoreProducts} />
    </main>
  );
};

export default Shop;
