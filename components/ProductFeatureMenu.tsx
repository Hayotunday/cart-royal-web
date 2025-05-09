import React, { ReactNode, useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const ProductFeatureMenu = ({
  title,
  children,
  disabled = false,
}: {
  title: string;
  children: ReactNode;
  disabled?: boolean;
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 p-3">
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="w-full h-fit px-4 flex flex-row justify-between items-center cursor-pointer bg-gray-100"
      >
        <h1 className="text-xl font-bold text-black text-left">{title}</h1>
        <div className="transition-all duration-300 ease-in-out transform">
          {" "}
          {isOpen ? (
            <FiMinusCircle size={25} />
          ) : (
            <FiPlusCircle size={25} />
          )}{" "}
        </div>
      </div>

      {isOpen && (
        <div className="w-full max-h-40 flex flex-col bg-gray-100 pl-7 py-3 overflow-x-hidden overflow-y-scroll">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProductFeatureMenu;
