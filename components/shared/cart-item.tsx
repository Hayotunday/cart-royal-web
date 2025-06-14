import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
  image,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  return (
    <div className="flex items-start space-x-4 py-4 border-b">
      {/* Product Image */}
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <span className="text-xs text-muted-foreground">No image</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">{name}</h3>
            <p className="mt-1 text-sm font-medium text-primary">
              ₦{price.toLocaleString()}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onRemove(id)}
          >
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
              className="h-4 w-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Remove</span>
          </Button>
        </div>

        {/* Quantity Controls */}
        <div className="mt-2 flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-r-none"
            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
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
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
            </svg>
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="flex h-8 w-10 items-center justify-center border-y">
            {quantity}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-l-none"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
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
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
