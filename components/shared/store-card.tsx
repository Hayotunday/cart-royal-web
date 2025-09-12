import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Store } from "@/data/index";

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <Link href={`/stores/${store.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg h-full flex flex-col">
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <div className="w-20 h-20 rounded-full bg-gray-100 mb-4 overflow-hidden relative">
            <Image
              src={store.logo || "/catalogue/img.jpg"}
              alt={`${store.name} logo`}
              fill
              className="transform group-hover:scale-110 transition-transform duration-300 object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg mb-1">{store.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{store.category}</p>
          <div className="flex items-center mb-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-400 mr-1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {store.rating.toFixed(1)} | {store.productCount} Products
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 flex-grow-0">
            {store.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
