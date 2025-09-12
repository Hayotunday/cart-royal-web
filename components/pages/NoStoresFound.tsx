import React from "react";
import { Button } from "@/components/ui/button";

interface NoStoresFoundProps {
  onClearFilters: () => void;
}

const NoStoresFound: React.FC<NoStoresFoundProps> = ({ onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold mb-2">No stores found</h2>
      <p className="text-gray-600 max-w-md mb-6">
        Try adjusting your search criteria or browse a different category.
      </p>
      <Button onClick={onClearFilters}>Clear Filters</Button>
    </div>
  );
};

export default NoStoresFound;
