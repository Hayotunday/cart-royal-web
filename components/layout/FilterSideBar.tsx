import React from "react";
import ProductFeatureMenu from "../shared/ProductFeatureMenu";
import RangeSlider from "../shared/RangeSlider";

const FilterSideBar = ({ category }: { category: string }) => {
  const handleRangeChange = (values: number[]) => {
    console.log("Selected range:", values);
  };
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
        <div>
          <RangeSlider />
        </div>
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
