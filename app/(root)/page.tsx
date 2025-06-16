import React from "react";
import Shop from "@/components/shared/shop";
import Welcome from "@/components/layout/welcome";
import Footer from "@/components/layout/footer";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 relative">
      <Welcome />
      <Shop />
      <Footer />
    </div>
  );
}
