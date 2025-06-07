import React from "react";
import Welcome from "@/components/layout/Welcome";
import Shop from "@/components/shared/Shop";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 relative">
      <Welcome />
      <Shop />
      <Footer />
    </div>
  );
}
