import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdShoppingCart } from "react-icons/md";

const CartSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="relative">
            <MdShoppingCart className="text-3xl text-gray-700 cursor-pointer" />
            <Badge
              variant="destructive"
              className="absolute top-0 right-0 text-white text-xs font-bold size-4"
            >
              0
            </Badge>
          </div>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[400px] p-3">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription className="invisible">Cart</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <div className="flex flex-col space-y-4">
              <p className="text-center text-muted-foreground py-8">
                Your cart is empty
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-auto">
            <div className="flex flex-row w-full gap-5">
              <Button variant="outline" className="w-1/2 border">
                Clear Cart
              </Button>
              <Link href="/cart" className="w-1/2">
                <Button variant="outline" className="w-full border">
                  View Cart
                </Button>
              </Link>
            </div>
            <Link href="/cart/checkout" className="w-full">
              <Button className="w-full">Checkout</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CartSheet;
