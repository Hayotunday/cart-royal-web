"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { showToast } from "../ui/toast";
import { Input } from "../ui/input";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "../ui/button";

const Footer = () => {
  const { dictionary, isReady } = useLanguage();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you should typically make an API call to subscribe the email
      showToast({
        message: "Thank you for subscribing!",
        type: "success",
      });
      setEmail("");
    }
  };

  if (!isReady) return null; // Ensure the dictionary is ready before rendering

  return (
    <Fragment>
      <div className="bg-[#F3F4F6] py-12">
        <div className="container mx-auto px-4">
          {/* Newsletter Subscription Section */}
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
                <Button
                  onClick={handleSubmit}
                  type="button"
                  className="bg-primary text-white w-[73px] h-[48px] rounded-r-[8px] font-semibold text-sm"
                >
                  SEND
                </Button>
              </div>
              <div className="text-[12px] mt-2 ml-1">
                By subscribing you agree to our{" "}
                <span className="text-primary font-medium">
                  Terms & Conditions and Privacy & Cookies Policy.
                </span>
              </div>
            </div>
          </div>

          <hr className="my-10 bg-gray-900" />

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Cart Royal */}
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Cart Royal"
                  width={150}
                  height={150}
                  className="mr-2"
                />
              </div>
              <p className="mb-6">
                Made with love by our team to provide you with the best shopping
                experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="/visa.svg"
                  width={36}
                  height={12}
                  alt="Visa"
                  className="h-8 w-auto"
                />
                <Image
                  src="/mastercard.svg"
                  width={24}
                  height={15}
                  alt="MasterCard"
                  className="h-8 w-auto"
                />
                <Image
                  src="/paystack.png"
                  width={75}
                  height={15}
                  alt="Paystack"
                  className="h-8 w-auto"
                />
                <Image
                  src="/flutterwave.png"
                  width={120}
                  height={15}
                  alt="Flutterwave"
                  className="h-8 w-auto"
                />
              </div>
            </div>

            {/* Column 2: Shop & Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Shop & Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/category/men"
                    className="hover:text-primary transition-colors"
                  >
                    Men's Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/women"
                    className="hover:text-primary transition-colors"
                  >
                    Women's Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/electronics"
                    className="hover:text-primary transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/home"
                    className="hover:text-primary transition-colors"
                  >
                    Home & Garden
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/kids"
                    className="hover:text-primary transition-colors"
                  >
                    Kids & Baby
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="hover:text-primary transition-colors"
                  >
                    Official Stores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gift-card"
                    className="hover:text-primary transition-colors"
                  >
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Help & Support */}
            <div>
              <h3 className="text-lg font-bold mb-6">Help & Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/info/terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/purchases"
                    className="hover:text-primary transition-colors"
                  >
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-primary transition-colors"
                  >
                    Returns & Replacements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-primary transition-colors"
                  >
                    Shipping Rates & Policies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-primary transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: For Sellers */}
            <div>
              <h3 className="text-lg font-bold mb-6">For Sellers</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/sell"
                    className="hover:text-primary transition-colors"
                  >
                    Sell on CartRoyal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate"
                    className="hover:text-primary transition-colors"
                  >
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/advertise"
                    className="hover:text-primary transition-colors"
                  >
                    Advertise Your Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendor"
                    className="hover:text-primary transition-colors"
                  >
                    Become a CartRoyal Vendor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seller-center"
                    className="hover:text-primary transition-colors"
                  >
                    Seller Center
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Download our app</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="#">
                    <Image
                      src="/google-play.png"
                      alt="Play Store"
                      width={150}
                      height={38}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/apple-store.png"
                      alt="Apple Store"
                      width={150}
                      height={38}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="">
            <div className="w-full flex justify-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Free Tools Section */}
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-6">Our Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <i className="fal fa-map-marker-alt text-primary text-xl mr-3 mt-1"></i>
                <p className="">
                  85 Challenger Road, Ridgefield Park, America NJ07660,
                  Espargos, SAL, Cape Verde Island
                </p>
              </div>
              <div className="flex items-start">
                <i className="fal fa-map-marker-alt text-primary text-xl mr-3 mt-1"></i>
                <p className="">101 Stress Bredford, London, United Kingdom</p>
              </div>
              <div className="flex items-start">
                <i className="fal fa-map-marker-alt text-primary text-xl mr-3 mt-1"></i>
                <p className="">
                  Admiralty Way, Ebaeno Supermarket, Lekki Phase 1, Lagos,
                  Nigeria.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-10 bg-gray-900" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2023 - {new Date().getFullYear()} Cart Royal. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/info/terms"
                className="hover:text-primary text-sm transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/info/privacy"
                className="hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/purchases"
                className="hover:text-primary text-sm transition-colors"
              >
                Order Tracking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
