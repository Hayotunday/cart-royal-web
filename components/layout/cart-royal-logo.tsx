import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartRoyalLogo = () => {
  return (
    <div className="" id="cart-royal-logo">
      <Link href="/">
        <Image
          className="mt-2"
          alt="Cart Royal Logo"
          src={"/logo.png"}
          height={50}
          width={100}
        />
      </Link>
    </div>
  );
};

export default CartRoyalLogo;

// 200 x 200
