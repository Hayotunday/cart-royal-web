import React from "react";
import Advertisement from "../shared/advertisement";
import StoresList from "../shared/store-list";
import ProductList from "../shared/product-list";
import { sampleStoreProducts } from "@/data/index";

const Shop = () => {
  return (
    <main className="p-5 md:p-14 w-screen" id="shop">
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
