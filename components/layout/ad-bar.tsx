import Link from "next/link";
import React from "react";

const AdBar = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-end gap-5 items-center bg-gray-300 py-1 px-6">
      {/* Container for the scrolling text. It needs to clip its content and take available space. */}
      <div className="w-full flex-grow overflow-hidden">
        <span className="marquee-text-ltr text-gray-700 text-sm">
          Advertisement
        </span>
      </div>

      <Link
        href="/login"
        className="text-black font-medium text-sm text-center text-nowrap"
      >
        Sign In
      </Link>
      <Link
        href="/register"
        className="text-black font-medium text-sm text-center text-nowrap"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AdBar;
