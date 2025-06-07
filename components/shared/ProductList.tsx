import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const ProductList = ({ title }: { title?: string }) => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="gap-5 mt-5 flex flex-col items-center justify-center">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="font-extrabold text-2xl text-left">
            {title ? title : "Title"}
          </h1>

          <Link href="/products" className="w-fit">
            <p className="font-medium text-base text-right hover:text-primary-red">
              See All
            </p>
          </Link>
        </div>
        <Carousel className="w-full h-full">
          <CarouselContent className="-ml-1">
            <CarouselItem className="basis-1/5 pl-1">
              <ProductCard
                id="1"
                name="Sample Product"
                price={29.99}
                image="/catalogue/img.jpg"
                storeLogoUrl="/catalogue/img.jpg"
                storeName="Sample Store"
                freeShipping
              />
            </CarouselItem>
            <CarouselItem className="basis-1/5 pl-1">
              <ProductCard
                id="1"
                name="Sample Product"
                price={29.99}
                image="/catalogue/img.jpg"
                storeLogoUrl="/catalogue/img.jpg"
                storeName="Sample Store"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/5 pl-1">
              <ProductCard
                id="1"
                name="Sample Product"
                price={29.99}
                image="/catalogue/img.jpg"
                storeLogoUrl="/catalogue/img.jpg"
                storeName="Sample Store"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/5 pl-1">
              <ProductCard
                id="1"
                name="Sample Product"
                price={29.99}
                image="/catalogue/img.jpg"
                storeLogoUrl="/catalogue/img.jpg"
                storeName="Sample Store"
                freeShipping
              />
            </CarouselItem>
            <CarouselItem className="basis-1/5 pl-1">
              <ProductCard
                id="1"
                name="Sample Product"
                price={29.99}
                image="/catalogue/img.jpg"
                storeLogoUrl="/catalogue/img.jpg"
                storeName="Sample Store"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/5 pl-1">
              <ProductCard
                id="1"
                name="Sample Product"
                price={29.99}
                image="/catalogue/img.jpg"
                storeLogoUrl="/catalogue/img.jpg"
                storeName="Sample Store"
                freeShipping
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductList;
