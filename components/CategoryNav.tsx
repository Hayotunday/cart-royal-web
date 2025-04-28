import React from "react";
import Link from "next/link";
import { categories } from "@/lib/constants";

const CategoryNav = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-10 border-y border-gray-300 overflow-x-auto">
      {categories.map((category) => (
        <Link
          key={category.label}
          href={category.href}
          className="text-gray-700 hover:text-primary-red px-2 text-nowrap font-bold text-xs transition-colors duration-300"
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
