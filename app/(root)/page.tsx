import React from "react";
import Welcome from "@/components/Welcome";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 relative">
      <Welcome />
      <Shop />
      <Footer />
    </div>
  );
}
