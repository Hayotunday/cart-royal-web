import Link from "next/link";
import React from "react";

const AdBar = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-end gap-5 items-center bg-gray-300 py-1 px-6">
      <marquee
        behavior="scroll"
        direction="rtl"
        className="text-gray-700 text-sm"
      >
        Advertisement
      </marquee>

      <Link
        href="/login"
        className="text-black font-medium text-sm text-center"
      >
        Sign In
      </Link>
      <Link
        href="/register"
        className="text-black font-medium text-sm text-center"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AdBar;
