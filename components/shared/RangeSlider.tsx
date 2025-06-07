import React, { useState } from "react";
import Slider from "react-slider";

const PriceSlider = () => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues: number[]) => setValues(newValues);

  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow-md w-full">
      <Slider
        thumbClassName="h-5 w-5 bg-blue-500 rounded-full cursor-pointer"
        thumbActiveClassName="h-5 w-5 rounded-full bg-blue-500 cursor-grab shadow-lg"
        trackClassName="bg-blue-200"
        className="h-2 bg-gray-200 rounded-lg mt-1 cursor-pointer"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <div className="flex justify-between w-full gap-1">
        <div className="w-fit">
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div className="w-fit">
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
