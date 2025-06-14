import React from "react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="flex-1 mx-4 max-w-[500px]">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search products, brands, and categories..."
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
