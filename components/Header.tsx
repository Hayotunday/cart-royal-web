import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="">
      <Link href={"/"}>
        <Image
          alt="Cart Royal Logo"
          src={"/logo.png"}
          className=""
          height={200}
          width={200}
        />
      </Link>
    </header>
  );
};

export default Header;
