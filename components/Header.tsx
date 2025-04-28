import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="">
      <Image
        alt="Cart Royal Logo"
        src={"/logo.png"}
        className=""
        height={200}
        width={200}
      />
    </header>
  );
};

export default Header;
