import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { MdVerified } from "react-icons/md";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  storeLogoUrl?: string;
  storeName?: string;
  freeShipping?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  storeLogoUrl,
  storeName,
  freeShipping = false,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="group flex flex-col w-60 h-72 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          {/* Product image */}
          <div className="relative h-full w-full">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-3 flex flex-col gap-2 h-fit">
          {/* Product name */}
          <h3 className="font-medium text-wrap">{name}</h3>

          {/* Store logo (if from official store) */}
          {storeLogoUrl && (
            <div className="flex flex-row gap-1 items-center">
              <Badge
                asChild
                className="rounded-full shadow-sm size-fit bg-green-600"
              >
                <div className="relative flex flex-row items-center gap-2">
                  <Image
                    src={storeLogoUrl}
                    alt={storeName || "Store logo"}
                    width={12}
                    height={12}
                    className="rounded-full object-cover"
                  />
                  {storeName && storeName}
                </div>
              </Badge>
              <MdVerified className="text-xl text-gray-700" />
            </div>
          )}

          <div className="flex flex-row w-full justify-between items-center">
            {/* Price in Naira */}
            <div className="text-lg font-semibold">
              ₦{price.toLocaleString()}
            </div>

            {/* Free shipping tag */}
            {freeShipping && (
              <div className="">
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                  Free Shipping
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
