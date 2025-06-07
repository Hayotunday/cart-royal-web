import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdCardGiftcard, MdLogout, MdPerson, MdSettings } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";

const ProfileAvatar = () => {
  return (
    <Avatar>
      <AvatarImage
        className="border-2 border-gray-700"
        src="https://github.com/shadcn.png"
      />
      <AvatarFallback className="border-2 border-gray-700 p-1 flex items-center justify-center text-sm font-semibold">
        CN
      </AvatarFallback>
    </Avatar>
  );
};

const ProfileHandler = () => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return (
    <>
      {isAuthenticated ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ProfileAvatar />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-700">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/profile"
                  className="flex flex-row items-center gap-2"
                >
                  <MdPerson className="text-lg" />
                  <p className="text-center font-semibold">Profile</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/profile/gift-card"
                  className="flex flex-row items-center gap-2"
                >
                  <MdCardGiftcard className="text-lg" />
                  <p className="text-center font-semibold">Gift Card</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/purchases"
                  className="flex flex-row items-center gap-2"
                >
                  <BiSolidPurchaseTag className="text-lg" />
                  <p className="text-center font-semibold">Purchases</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/profile/settings"
                  className="flex flex-row items-center gap-2"
                >
                  <MdSettings className="text-lg" />
                  <p className="text-center font-semibold">Settings</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/signin"
                  className="flex flex-row items-center gap-2"
                >
                  <MdLogout className="text-lg" />
                  <p className="text-center font-semibold">Log out</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link
            href="/signin"
            className="flex flex-row justify-center items-center gap-1"
          >
            <IoPersonCircleSharp className="text-3xl text-gray-700" />
            <p className="text-gray-700 font-semibold">Log in</p>
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileHandler;
