import React from "react";
import StoreItem from "@/components/shared/store-item";
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
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 w-full h-full flex-wrap justify-between items-center gap-1">
          <StoreItem title="Samsung" />
          <StoreItem title="Adidas" />
          <StoreItem title="Apple" />
          <StoreItem title="Xiaomi" />
          <StoreItem title="Denim" />
          <StoreItem title="Nike" />
          <StoreItem title="Infinix" />
          <StoreItem title="Nivea" />
          <StoreItem title="Rolex" />
          <StoreItem title="Toyota" />
          <StoreItem title="KIA" />
          <StoreItem title="Samsung" />
        </div>
      </div>
    </div>
  );
};

export default StoresList;
