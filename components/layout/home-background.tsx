"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const HomeBackground = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById("shop");
    if (shopSection) {
      const offset = 90; // Adjust this value to change the offset
      const targetPosition =
        shopSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full flex relative overflow-hidden">
      <div className="min-w-full min-h-full bg-primary-red relative flex flex-col justify-around items-">
        <Image
          src="/gradient-mask.png"
          alt="Gradient Mask Image"
          width={1000}
          height={1000}
          className="absolute -right-1/3 top-5 z-10"
        />
        <div className="justify-between items-center px-20 mt-24 flex z-20">
          <div className="flex flex-col justify-center items-start text-white w-1/2">
            <h1 className="py-1 text-6xl font-extrabold">Buy and Sell</h1>
            <p className="text-white text-sm mt-10">
              Receive the product as described or get a refund <br />
              posting for sale is completely <b>FREE</b>
            </p>
            <button className="bg-white text-primary-red text-center text-xs py-3 px-6 flex items-center shadow-lg hover:bg-primary-red hover:text-white transition-colors duration-300 mt-4">
              READ MORE
            </button>
            {/* <DownloadSource /> */}
          </div>
          <Image
            src="/phones.png"
            alt="Background Phone Image"
            width={400}
            height={400}
            className="mt-20"
          />
        </div>

        <div className="w-full flex justify-center items-center mb-3">
          <Button
            onClick={scrollToShop}
            className="bg-white hover:bg-white text-primary-red font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Let's Shop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBackground;
