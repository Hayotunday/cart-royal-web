import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import SearchBar from "@/components/shared/search-bar";
import CartSheet from "@/components/shared/cart-sheet";
import ProfileHandler from "@/components/shared/profile-handler";
import SelectLanguages from "./select-language";

const Header = ({ viewOnly = false }: { viewOnly?: boolean }) => {
  return !viewOnly ? (
    <header className="w-full h-fit py-0.5 px-10 flex flex-row items-center justify-between">
      <Link href="/">
        <Image
          alt="Cart Royal Logo"
          src={"/logo.png"}
          height={200}
          width={200}
        />
      </Link>

      <SearchBar />

      <div className="flex flex-row gap-5 items-center">
        <SelectLanguages />

        <Link href={"/favorites"}>
          <MdFavoriteBorder className="text-3xl text-gray-700" />
        </Link>

        <CartSheet />
        <ProfileHandler />
      </div>
    </header>
  ) : (
    <header className="w-full h-fit py-0.5 px-10 flex items-center justify-between">
      <Image
        className="mt-2"
        alt="Cart Royal Logo"
        src={"/logo.png"}
        height={200}
        width={200}
      />
      <SelectLanguages />
    </header>
  );
};

export default Header;
