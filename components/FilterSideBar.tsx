import React from "react";
import ProductFeatureMenu from "./ProductFeatureMenu";

const FilterSideBar = ({ category }: { category: string }) => {
  return (
    <div className="w-1/5 h-full mt-2 mb-5">
      <ProductFeatureMenu title="Type">
        <div>{"Short"}</div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Brand">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Color">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Price">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Size">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Shipping">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Shipped From">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Product Rating">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Seller Rating">
        <div></div>
      </ProductFeatureMenu>
      <ProductFeatureMenu title="Official Stores">
        <div></div>
      </ProductFeatureMenu>
    </div>
  );
};

export default FilterSideBar;
