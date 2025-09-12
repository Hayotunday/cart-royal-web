import React from "react";
import { Input } from "@/components/ui/input";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex-1 mx-4 max-w-[500px]">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search products, brands, and categories..."
          className="w-full hidden md:block"
        />

        <MdSearch className="text-3xl text-gray-700 cursor-pointer md:hidden" />
      </div>
    </div>
  );
};

export default SearchBar;
