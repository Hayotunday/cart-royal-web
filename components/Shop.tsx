import React from "react";
import Advertisement from "./Advertisement";
import StoresList from "./StoreList";

const Shop = () => {
  return (
    <main className="p-14" id="shop">
      <StoresList />
      <Advertisement />
      <Advertisement />
    </main>
  );
};

export default Shop;
