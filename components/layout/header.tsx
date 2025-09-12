import React from "react";
import SearchBar from "@/components/shared/search-bar";
import CartSheet from "@/components/shared/cart-sheet";
import ProfileHandler from "@/components/shared/profile-handler";
import SelectLanguages from "@/components/layout/select-language";
import CartRoyalLogo from "@/components/layout/cart-royal-logo";

const Header = ({ viewOnly = false }: { viewOnly?: boolean }) => {
  return !viewOnly ? (
    <header className="w-full h-fit py-0.5 px-5 md:px-10 flex flex-row items-center justify-between">
      <CartRoyalLogo />

      <SearchBar />

      <div className="flex flex-row gap-5 items-center">
        <SelectLanguages />

        <CartSheet />

        <ProfileHandler />
      </div>

      {/* <div className=""></div> */}
    </header>
  ) : (
    <header className="w-full h-fit py-0.5 px-10 flex items-center justify-between">
      <CartRoyalLogo />

      <SelectLanguages />
    </header>
  );
};

export default Header;
