import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-[60] bg-footer-blue p-5 w-full">
      <div className="flex flex-row justify-around items-center">
        <div className="">
          <h1 className="text-6xl font-extrabold">Get the App</h1>
          <p className="text-base font-medium">Buy and Sell Anything</p>
          <p className="text-base font-medium">
            Posting of Sales is Completly Free
          </p>
          {/* <DownloadSource /> */}
        </div>
        <Image
          className="self-end pl-5 max-w-lg"
          alt="Background Phone Image"
          width={400}
          height={400}
          src="/phones.png"
        />
      </div>

      <div className="w-full flex flex-row justify-around items-start flex-wrap gap-10 py-5">
        <div className="flex flex-col justify-start items-start">
          <p className="font-extrabold text-base py-3">CONTACT US</p>
          {/* <Button leftIcon={<House variant='Bold' />} fontWeight={300} textAlign={'left'} bg={'none'} fontSize={'10px !important'}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                            voluptatem porro perspiciatis, veniam consequatur.
                        </Button> <br />
                        <Button leftIcon={<Call variant='Bold' ></Call>} fontWeight={300} bg={'none'} fontSize={'10px !important'}>
                            Tel : +2349015061171
                        </Button> <br />
                        <Button leftIcon={<MessageProgramming variant='Bold' />} fontWeight={300} bg={'none'} fontSize={'10px !important'}>
                            Email : CartRoyal@gmail.com
                        </Button> */}
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-extrabold text-base py-3">SUPPORT</p>
          <p className="text-sm">How it Works</p>
          <p className="text-sm">Become a Seller</p>
          <p className="text-sm">Help Center / FAQs</p>
          <p className="text-sm">Gurantee for Buyers</p>
          <p className="text-sm">Feedback</p>
          <p className="text-sm">Operation Rules</p>
          <p className="text-sm">Conflict Resolution Policy</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-extrabold text-base py-3">ABOUT</p>
          <p className="text-sm">About Us</p>
          <p className="text-sm">Contact US</p>
          <p className="text-sm">My Profile</p>
          <p className="text-sm">Favorites</p>
          <p className="text-sm">Messages</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-extrabold text-base py-3">FOLLOW US</p>
          <div className="flex flex-row gap-5 justify-center items-center">
            {/* <IconButton bg={'none'} p={3} icon={<FaFacebook size={20} />} aria-label={''} />
                            <IconButton bg={'none'} p={3} icon={<FaInstagram size={20} />} aria-label={''} />
                            <IconButton bg={'none'} p={3} icon={<FaTwitter size={20} />} aria-label={''} /> */}
          </div>
        </div>
      </div>

      <hr></hr>

      <div className=" w-full flex flex-row text-sm py-4 justify-around items-center gap-y-5 flex-wrap">
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Terms of Service</Link>
        <Link href={"/"}>Prohibited Items</Link>
        <Link href={"/"}>Prohibited Conduct</Link>
        <Link href={"/"}>Communication Policy</Link>
        <Link href={"/"}>Safety Guidelines</Link>
      </div>

      <hr></hr>

      <p className="pt-5 pb-10 text-base text-center">
        2023 CartRoyal All Rigths Reserved
      </p>
    </footer>
  );
};

export default Footer;
