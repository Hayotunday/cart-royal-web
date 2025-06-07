import React from "react";
import AuthBar from "../shared/AuthBar";
import CategoryNav from "./CategoryNav";
import Header from "./Header";
import HomeBackground from "./HomeBackground";

const Welcome = () => {
  return (
    <div className="w-full h-screen static flex flex-col">
      <div className="w-full h-fit fixed top-0 z-50 flex flex-col bg-gray-100">
        {/* <AuthBar /> */}
        <Header />
        <CategoryNav />
      </div>
      <HomeBackground />
    </div>
  );
};

export default Welcome;
