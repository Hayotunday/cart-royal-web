import React from "react";
import StoreCard from "@/components/StoreCard";

const StoresList = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="gap-5 mt-5 flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-2xl">Official Stores</h1>
        <div className="flex flex-row flex-wrap justify-between items-center gap-1">
          <StoreCard title="Samsung" />
          <StoreCard title="Adidas" />
          <StoreCard title="Apple" />
          <StoreCard title="Xiaomi" />
          <StoreCard title="Denim" />
          <StoreCard title="Nike" />
          <StoreCard title="Infinix" />
          <StoreCard title="Nivea" />
          <StoreCard title="Rolex" />
          <StoreCard title="Toyota" />
          <StoreCard title="KIA" />
          <StoreCard title="Samsung" />
        </div>
      </div>
    </div>
  );
};

export default StoresList;
