import Link from "next/link";
import React from "react";

const AdBar = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-end gap-5 items-center bg-gray-300 py-1 px-6">
      <Link
        href="/signin"
        className="text-black font-medium text-sm text-center"
      >
        Sign In
      </Link>
      <Link
        href="/signin"
        className="text-black font-medium text-sm text-center"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AdBar;
