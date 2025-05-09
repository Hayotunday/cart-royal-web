"use client";

import CategoryNav from "@/components/CategoryNav";
import FilterSideBar from "@/components/FilterSideBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import React from "react";

const Store = () => {
  const { store } = useParams();
  return (
    <div className="w-full h-full relative flex flex-col bg-gray-100">
      <div className="w-full h-fit flex flex-col bg-gray-100">
        <Header />
        <CategoryNav />
      </div>
      <div className="w-full h-full flex flex-col bg-gray-100">
        <div className="my-3">
          <h1 className="text-3xl font-extrabold capitalize text-black">{`${store} Official Store`}</h1>
        </div>
        <div className="w-full h-full flex flex-row bg-gray-100">
          <FilterSideBar category={store as string} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
