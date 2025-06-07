import React from "react";
import StoreCard from "@/components/shared/StoreCard";
import Link from "next/link";

const StoresList = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="gap-5 mt-5 flex flex-col items-center justify-center">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="font-extrabold text-2xl text-left">Official Stores</h1>

          <Link href="/stores" className="w-fit">
            <p className="font-medium text-base text-right hover:text-primary-red">
              See All
            </p>
          </Link>
        </div>
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
