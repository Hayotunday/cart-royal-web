import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { Product } from "@/data/index";

interface ProductListProps {
  title?: string;
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="gap-5 mt-5 flex flex-col items-center justify-center">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="font-extrabold text-2xl text-left">
            {title ? title : "Title"}
          </h1>

          <Link href="/products/all?q=options" className="w-fit">
            <p className="font-medium text-base text-right hover:text-primary-red">
              See All
            </p>
          </Link>
        </div>
        <Carousel className="w-full h-full">
          <CarouselContent className="-ml-1">
            {products.length > 0 ? (
              products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-1 md:basis-1/3 lg:basis-1/5"
                >
                  {" "}
                  {/* Adjusted basis for responsiveness */}
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    storeLogoUrl={product.storeLogoUrl}
                    storeName={product.storeName}
                    freeShipping={product.freeShipping}
                  />
                </CarouselItem>
              ))
            ) : (
              <p className="pl-1 text-center w-full text-muted-foreground">
                No products to display in this list.
              </p>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductList;
