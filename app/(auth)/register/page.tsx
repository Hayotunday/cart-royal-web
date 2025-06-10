"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RegisterForm from "@/components/forms/register-form";
import { useLanguage } from "@/context/LanguageContext";

export default function SignUp() {
  const { dictionary, isReady } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState<string | null>(
    null
  );
  const [showSignupMethods, setShowSignupMethods] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useRouter();
  const { t } = useTranslation();

  const [formData, setFormData] = useState<{
    email: string;
    fullName: string;
    password: string;
    confirmPassword: string;
    country: string;
    userType: string | null;
    countryCode: string;
  }>({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    country: "",
    userType: null,
    countryCode: "",
  });

  const [errors, setErrors] = useState<{
    email?: string;
    fullName?: string;
    password?: string;
    confirmPassword?: string;
    country?: string;
  }>({});

  // Validate form data
  const validateForm = () => {
    const newErrors: {
      email?: string;
      fullName?: string;
      password?: string;
      confirmPassword?: string;
      country?: string;
    } = {};

    if (!formData.email) {
      newErrors.email = t("landingPage.formErrors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("landingPage.formErrors.invalidEmail");
    }

    if (!formData.fullName) {
      newErrors.fullName = t("landingPage.formErrors.fullNameRequired");
    }

    if (!formData.password) {
      newErrors.password = t("landingPage.formErrors.passwordRequired");
    } else if (formData.password.length < 8) {
      newErrors.password = t("landingPage.formErrors.minPassword");
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("landingPage.formErrors.passwordsMismatch");
    }

    if (!formData.country) {
      newErrors.country = t("landingPage.formErrors.selectCountry");
    }

    setErrors({
      email: newErrors.email || "",
      fullName: newErrors.fullName || "",
      password: newErrors.password || "",
      confirmPassword: newErrors.confirmPassword || "",
      country: newErrors.country || "",
    });
    return Object.keys(newErrors).length === 0;
  };

  // Handle continue button click
  const handleContinue = () => {
    if (showEmailForm) {
      if (validateForm()) {
        navigate.push("/verify");
      }
    } else {
      setShowSignupMethods(true);
    }
  };

  // Handle email signup button click
  const handleEmailSignup = () => {
    setShowEmailForm(true);
  };

  // Handle back button click
  const handleBack = () => {
    if (showEmailForm) {
      setShowEmailForm(false);
    } else if (showSignupMethods) {
      setShowSignupMethods(false);
    } else {
      navigate.back();
    }
  };

  // Handle account type selection
  const handleAccountTypeSelect = (type: string | null) => {
    setSelectedAccountType(type);
    setFormData((prev) => ({
      ...prev,
      userType: type === "buyer" ? "BUYER" : "SELLER",
    }));
  };

  const handleGoogleSignUp = () => {
    setIsLoading(true);

    // Simulate Google authentication process
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would handle Google OAuth
      console.log("Sign up with Google");
    }, 1500);
  };

  // Account type selection component
  const AccountTypeSelection = () => (
    <>
      <h1 className="text-[32px] font-medium mb-7 text-left pl-6 w-[100%]">
        {dictionary.landingPage.signUpPage.letsCreateAccount}
      </h1>

      <p className="text-base text-gray-700 mb-6 text-left pl-6">
        {dictionary.landingPage.signUpPage.chooseAccountType}
      </p>

      <div className="space-y-4 px-6">
        <button
          className={`w-full flex items-center justify-between p-6 rounded-lg transition-all cursor-pointer ${
            selectedAccountType === "buyer"
              ? "border-[1px] border-black bg-[#F5F5F5]"
              : "bg-[#F5F5F5]"
          }`}
          onClick={() => handleAccountTypeSelect("buyer")}
        >
          <div className="flex items-center">
            <i className="far fa-user text-lh mr-3 text-lg text-gray-700" />
            <span className="text-left text-gray-700 text-sm">
              {dictionary.landingPage.signUpPage.createBuyerAccount}
            </span>
          </div>
          <div
            className={`h-3 w-3 flex items-center justify-center rounded-full ${
              selectedAccountType === "buyer" ? "bg-green-600" : "bg-[#E5E5E5]"
            }`}
            style={{ minWidth: "1rem", minHeight: "1rem" }}
          >
            {selectedAccountType === "buyer" && (
              <i className="far fa-check-circle text-lg text-white" />
            )}
          </div>
        </button>

        <button
          className={`w-full flex items-center justify-between p-6 rounded-lg transition-all cursor-pointer ${
            selectedAccountType === "seller"
              ? "border-[1px] border-black bg-[#F5F5F5]"
              : "bg-[#F5F5F5]"
          }`}
          onClick={() => handleAccountTypeSelect("seller")}
        >
          <div className="flex items-center">
            <i className="far fa-user-tag mr-3 text-lg text-gray-700" />
            <span className="text-left text-gray-700 text-sm">
              {dictionary.landingPage.signUpPage.createSellerAccount}
            </span>
          </div>
          <div
            className={`h-3 w-3 flex items-center justify-center rounded-full ${
              selectedAccountType === "seller" ? "bg-green-600" : "bg-[#E5E5E5]"
            }`}
            style={{ minWidth: "1rem", minHeight: "1rem" }}
          >
            {selectedAccountType === "seller" && (
              <i className="fas fa-check-circle text-md" />
            )}
          </div>
        </button>
      </div>

      <div className="px-6">
        <button
          className={`w-full py-2 mt-8 text-black rounded-lg cursor-pointer ${
            selectedAccountType
              ? "bg-[#FCA311] hover:bg-[#e5940c]"
              : "bg-[#FCA31180] cursor-not-allowed"
          }`}
          disabled={!selectedAccountType}
          onClick={handleContinue}
        >
          {dictionary.landingPage.signUpPage.continue}
        </button>
      </div>
    </>
  );

  // Signup methods component
  const SignupMethods = () => (
    <>
      <h1 className="text-[32px] font-medium mb-10 text-left pl-6 w-[100%]">
        {dictionary.landingPage.signUpPage.letsCreateAccount}
      </h1>

      <p className="text-base text-gray-700 mb-6 text-left pl-6">
        {dictionary.landingPage.signUpPage.chooseSignMethod}
      </p>

      <div className="space-y-4 px-6">
        <button
          onClick={() => handleGoogleSignUp()}
          disabled={loading}
          className="w-[100%] flex items-center justify-between py-3 px-4 rounded-lg bg-[#F5F5F5] hover:bg-[#e5e5e5] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center cursor-pointer w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 mr-3"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700">
              {dictionary.landingPage.loginPage.continueWithGoogle}
            </span>
          </div>
          <i className="far fa-arrow-right text-lg" />
        </button>

        <button
          onClick={handleEmailSignup}
          disabled={loading}
          className="w-[100%] flex items-center justify-between py-3 px-4 rounded-lg bg-[#F5F5F5] hover:bg-[#e5e5e5] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center cursor-pointer w-full">
            <i className="far fa-envelope text-lg mr-3" />
            <span className="text-gray-700">
              {dictionary.landingPage.signUpPage.continueWithEmail}
            </span>
          </div>
          <i className="far fa-arrow-back text-lg" />
        </button>
      </div>
    </>
  );

  if (!isReady) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header viewOnly />

      <div className="mt-14 w-full max-w-md mx-auto">
        {(showSignupMethods || showEmailForm) && (
          <button
            className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full mb-6 cursor-pointer"
            onClick={handleBack}
          >
            <i className="far fa-arrow-left text-lg" />
          </button>
        )}

        {/* Account Type Selection Section */}
        {!showSignupMethods && !showEmailForm && <AccountTypeSelection />}

        {/* Signup Methods Section */}
        {showSignupMethods && !showEmailForm && <SignupMethods />}

        {/* Email Signup Form Section */}
        {showEmailForm && (
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            handleContinue={handleContinue}
          />
        )}

        {/* Error Message Section */}
        {errorMessage && (
          <div className="px-6">
            <p className="mt-4 text-sm text-red-600 text-left w-[100%]">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Login Link Section */}
        {!showEmailForm && (
          <div className="mt-4 px-6 text-sm flex items-center justify-center gap-x-1.5">
            <div className="text-gray-600">
              {dictionary.landingPage.signUpPage.alreadyHaveAccount}
            </div>
            <span className="text-gray-600">
              <i className="far fa-arrow-right mr-1" />
            </span>
            <Link
              href="/login"
              className="underline underline-offset-4 font-medium"
            >
              {dictionary.landingPage.loginPage.logIn}
            </Link>
          </div>
        )}

        {/* Terms and Privacy Policy Section */}
        <p className="text-left mt-3 text-xs text-gray-500 px-6 w-[100%]">
          {dictionary.landingPage.loginPage.tosDesc}{" "}
          <Link href="/term" className="text-black underline">
            {dictionary.landingPage.loginPage.tos}
          </Link>{" "}
          {dictionary.landingPage.loginPage.and}{" "}
          <Link href="/privacy" className="text-black underline">
            {dictionary.landingPage.loginPage.privacyPolicy}
          </Link>
        </p>
        <div className="mb-5"></div>
      </div>
    </main>
  );
}
