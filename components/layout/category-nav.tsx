"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/lib/constants";
import { FaBars } from "react-icons/fa6";
import { Button } from "../ui/button";

const CategoryNav = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex flex-row px-10 gap-5 justify-center items-center w-full max-h-fit border-t border-gray-300 overflow-x-auto">
      <FaBars
        onClick={onClick}
        className="text-gray-700 text-lg cursor-pointer hidden lg:flex bg-transparent hover:bg-transparent"
      />

      <nav className="w-full flex justify-between items-center py-4 gap-2">
        {categories.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className=" hover:text-primary-red px-2 text-nowrap font-bold text-xs transition-colors duration-300"
          >
            {category.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
