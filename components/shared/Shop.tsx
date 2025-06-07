import React from "react";
import Advertisement from "./Advertisement";
import StoresList from "./StoreList";
import ProductList from "./ProductList";

const Shop = () => {
  return (
    <main className="p-14" id="shop">
      <StoresList />
      <ProductList title="New Arrivals" />
      <Advertisement />
      <ProductList />
      <ProductList />
      <Advertisement />
      <ProductList />
      <ProductList />
    </main>
  );
};

export default Shop;
