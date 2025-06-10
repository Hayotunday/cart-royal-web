"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { showToast } from "../ui/toast";
import { Input } from "../ui/input";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to subscribe the email
      showToast({
        message: t("toast.thanksNewsletter"),
        type: "success",
      });
      setEmail("");
    }
  };

  return (
    <Fragment>
      <div className="p-12 bg-[#F3F4F6] text-black">
        <div className="md:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-x-30 mx-auto">
            <div className="">
              <h1 className="text-xl font-semibold">Join our newsletter</h1>
              <p className="text-[13px] text-[#6B7280] mt-2">
                Register now to get latest updates on promotions & coupons.
                Don’t worry, we don't spam!
              </p>
            </div>

            <div className="mt-1 md:mt-0">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-[48px] bg-white border-1 rounded-l-[8px] rounded-r-0"
                />
                <button
                  type="button"
                  className="bg-primary text-white w-[73px] rounded-r-[8px] font-semibold text-sm"
                >
                  SEND
                </button>
              </div>
              <div className="text-[12px] mt-2 ml-1">
                By subscribing you agree to our{" "}
                <span className="text-primary font-medium">
                  Terms & Conditions and Privacy & Cookies Policy.
                </span>
              </div>
            </div>
          </div>
          <hr className="my-8 bg-gray-900" />
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 2xl:grid-rows-none 2xl:grid-cols-5 gap-y-6 gap-x-10">
            {/* Item 1 */}
            <div className="h-fit">
              <h1 className="font-semibold text-black">Do You Need Help ?</h1>
              <p className="text-[#6B7280] text-[13px] mt-2">
                We are always ready to help. Online 24/7.
              </p>
              <div className="flex items-start gap-6 mt-6">
                <span className="mt-2.5">
                  <i className="fal fa-phone text-2xl" />
                </span>
                <div>
                  <span className="text-[13px] text-[#111827]">
                    Monday-Friday: 8am-9pm
                  </span>
                  <a
                    href="tel:0800300353"
                    className="block font-bold text-black text-[22px]"
                  >
                    0 800 300-353
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 mt-6">
                <span className="mt-2.5">
                  <i className="fal fa-envelope text-2xl" />
                </span>
                <div>
                  <span className="text-[13px] text-[#111827]">
                    Need help with your order?
                  </span>
                  <a
                    href="mailto:cartroyalhq@gmail.com"
                    className="block font-bold text-black text-sm"
                  >
                    cartroyalhq@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <h4 className="font-semibold">Make Money With Us</h4>
              <ul className="text-[13px] text-[#4B5563] mt-2 space-y-1">
                <li>
                  <a href="">Sell on CartRoyal</a>
                </li>
                <li>
                  <a href="">Sell Your Services on CartRoyal</a>
                </li>
                <li>
                  <a href="">Become an Affiliate</a>
                </li>
                <li>
                  <a href="">Advertise Your Products</a>
                </li>
                <li>
                  <a href="">Self-Publish with Us</a>
                </li>
                <li>
                  <a href="">Become a CartRoyal Vendor</a>
                </li>
              </ul>
            </div>

            {/* Item 3 */}
            <div>
              <h4 className="font-semibold">Let Us Help You</h4>
              <ul className="text-[13px] text-[#4B5563] mt-2 space-y-1">
                <li>
                  <a href="">Accessibility Statement</a>
                </li>
                <li>
                  <a href="">Your Orders</a>
                </li>
                <li>
                  <a href="">Returns & Replacements</a>
                </li>
                <li>
                  <a href="">Shopping Rates & Policies</a>
                </li>
                <li>
                  <a href="">Refunds and Returns Policy</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Cookie Settings</a>
                </li>
                <li>
                  <a href="">Help Center</a>
                </li>
              </ul>
            </div>

            {/* Item 4 */}
            <div>
              <h4 className="font-semibold">Get to Know Us</h4>
              <ul className="text-[13px] text-[#4B5563] mt-2 space-y-1">
                <li>
                  <a href="">Careers for CartRoyal</a>
                </li>
                <li>
                  <a href="">About CartRoyal</a>
                </li>
                <li>
                  <a href="">Investor Relations</a>
                </li>
                <li>
                  <a href="">CartRoyal Devices</a>
                </li>
                <li>
                  <a href="">Customer Reviews</a>
                </li>
                <li>
                  <a href="">Social Responsiblity</a>
                </li>
                <li>
                  <a href="">Store Locations</a>
                </li>
              </ul>
            </div>

            {/* Item 5 */}
            <div className="w-full">
              <h4 className="font-semibold">Download our app</h4>
              <div className="flex flex-col text-[11px] text-[#6B7280] mt-2">
                <div className="flex items-center gap-x-4 mt-2">
                  <Image
                    src="/google-play.png"
                    alt="Play Store"
                    width={150}
                    height={38}
                  />
                </div>
                <div className="flex items-center gap-x-4 mt-2">
                  <Image
                    src="/apple-store.png"
                    alt="Apple Store"
                    width={150}
                    height={38}
                  />
                </div>

                <div className="mt-8">
                  <span className="text-[12px] text-[#111827]">
                    Follow us on social media:
                  </span>
                  <div className="flex items-center gap-x-1 mt-2">
                    <a
                      href="#"
                      className="text-primary bg-white h-[36px] rounded-[6px] w-[36px] flex items-center justify-center"
                    >
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-primary bg-white h-[36px] rounded-[6px] w-[36px] flex items-center justify-center"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-primary bg-white h-[36px] rounded-[6px] w-[36px] flex items-center justify-center"
                    >
                      <i className="fab fa-x-twitter text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-primary bg-white h-[36px] rounded-[6px] w-[36px] flex items-center justify-center"
                    >
                      <i className="fab fa-youtube text-xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-primary bg-white h-[36px] rounded-[6px] w-[36px] flex items-center justify-center"
                    >
                      <i className="fab fa-tiktok text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="w-full">
              <h4 className="font-semibold">Our Partners</h4>
              <div className="flex flex-col text-[11px] text-[#6B7280] mt-2">
                <div className="flex items-center gap-x-4 mt-2">
                  <Image
                    src="/noun-logo.png"
                    alt="Visa"
                    width={75}
                    height={12}
                  />
                  <span>National Open University Of Nigeria (NOUN)</span>
                </div>
              </div>
            </div>

            {/* Item 7 */}
            <div className="w-full">
              <h4 className="font-semibold">Our Offices</h4>
              <div className="flex flex-col text-sm text-[#111827] mt-3">
                <ul>
                  <li className="mb-3 flex items-center gap-x-3">
                    <span>
                      <i className="fal fa-map-marker-alt text-black text-2xl" />
                    </span>
                    85 Challenger Road, Ridgefield Park, America NJ07660,
                    Espargos, SAL, Cape Verde Island
                  </li>
                  <li className="my-3 flex items-center gap-x-3">
                    <span>
                      <i className="fal fa-map-marker-alt text-black text-2xl" />
                    </span>
                    101 Stress Bredford, London, United Kingdom
                  </li>
                  <li className="flex items-center gap-x-3">
                    <span>
                      <i className="fal fa-map-marker-alt text-black text-2xl" />
                    </span>
                    Admiralty Way, Ebaeno Supermarket, Lekki Phase 1, Lagos,
                    Nigeria.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-8 bg-gray-900" />
          <div className="text-center text-[13px] text-[#6B7280] flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <span>Copyright 2025 © CartRoyal. All rights reserved.</span>
              <div className="flex items-center gap-x-2 mt-4">
                <Image src={"/visa.svg"} width={36} height={12} alt="Visa" />
                <Image
                  src={"/mastercard.svg"}
                  width={24}
                  height={15}
                  alt="MasterCard"
                />
                <Image
                  src={"/paystack.png"}
                  width={75}
                  height={15}
                  alt="Paystack"
                />
                <Image
                  src={"/flutterwave.png"}
                  width={120}
                  height={15}
                  alt="Flutterwave"
                />
                <Image src={"/usdt.png"} width={25} height={15} alt="USDT" />
                <Image src={"/eth.png"} width={15} height={15} alt="Ethereum" />
                <Image src={"/bnb.svg"} width={25} height={15} alt="BNB" />
              </div>
            </div>

            <div className="flex items-center mt-4 md:mt-7">
              <span className="ml-2 underline underline-offset-4">
                Terms and Conditions
              </span>
              <span className="ml-2 underline underline-offset-4">
                Privacy Policy
              </span>
              <span className="ml-2 underline underline-offset-4">
                Order Tracking
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
