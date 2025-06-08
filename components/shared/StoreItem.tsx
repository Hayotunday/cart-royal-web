import Link from "next/link";
import React from "react";

// Define the props type
interface StoreCardProps {
  title: string;
  img?: string;
}

const StoreItems = ({ title, img }: StoreCardProps) => {
  const imageUrl = img ? img : "/catalogue/img.jpg";

  return (
    <Link href={`/stores/${title}`} className="group cursor-pointer block">
      <div className="relative my-1 w-[200px] h-[125px] overflow-hidden rounded-md shadow-lg">
        <img
          src={imageUrl}
          alt={`${title} store`}
          className="h-full w-full rounded-md object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute overflow-hidden inset-0 h-full w-full rounded-md bg-black/20 transition-colors duration-200 ease-in-out hover:bg-black/40">
          <div className="flex h-full w-full items-center justify-center text-center capitalize text-[#fdfdfd] font-semibold">
            {title ? title : "Official Store"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreItems;
