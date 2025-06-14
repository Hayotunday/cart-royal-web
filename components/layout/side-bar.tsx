import Link from "next/link";
import React from "react";
import { categories } from "@/lib/constants";

const Sidebar = () => {
  return (
    <nav className="w-1/6 flex flex-col justify-end items-center gap-4.5 pt-4 pb-4 px-5 border-t border-gray-300 overflow-x-auto animate-out transition-all duration-300 ease-in-out">
      {categories.map((category) => (
        <Link
          key={category.label}
          href={category.href}
          className=" hover:text-primary-red w-full text-left text-nowrap font-bold text-xs border-t pt-3 border-gray-300 transition-colors duration-300"
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
