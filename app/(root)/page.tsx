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
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-x-30 mx-auto">
        <div className="">
          <h1 className="text-xl font-semibold">Join our newsletter</h1>
          <p className="text-[13px] text-[#6B7280] mt-2">
            Register now to get latest updates on promotions & coupons. Don’t
            worry, we don't spam!
          </p>
        </div>

        <div className="mt-1 md:mt-0">
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-[48px] bg-white border-1 rounded-l-[8px] rounded-r-0"
            />
            <button
              type="button"
              className="bg-primary text-white w-[73px] rounded-r-[8px] font-semibold text-sm"
            >
              SEND
            </button>
          </div>
          <div className="text-[12px] mt-2 ml-1">
            By subscribing you agree to our{" "}
            <span className="text-primary font-medium">
              Terms & Conditions and Privacy & Cookies Policy.
            </span>
          </div>
        </div>
      </div>
      <hr className="my-8 bg-gray-900" />
      <Footer />
    </div>
  );
}
