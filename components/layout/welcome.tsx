"use client";

import React, { useState } from "react";
import AdBar from "@/components/layout/ad-bar";
import CategoryNav from "./category-nav";
import Header from "./header";
import HomeBackground from "./home-background";
import Sidebar from "./side-bar";

const Welcome = () => {
  const [sideDisplay, setSideDisplay] = useState(false);

  return (
    <div className="w-screen h-fit md:h-screen static flex flex-col">
      <div className="w-screen h-fit fixed top-0 z-50 flex flex-col bg-gray-100">
        <AdBar />
        <Header />
        <CategoryNav
          onClick={() => {
            setSideDisplay(!sideDisplay);
          }}
        />
      </div>
      <div className="flex h-full w-screen">
        {sideDisplay && <Sidebar />}
        <HomeBackground />
      </div>
    </div>
  );
};

export default Welcome;
