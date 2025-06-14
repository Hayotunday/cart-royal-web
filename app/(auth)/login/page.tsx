"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useRouter();
  const { dictionary, isReady } = useLanguage();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear any previous error messages
    setErrorMessage("");

    if (name === "email") {
      if (value && !validateEmail(value)) {
        setEmailError(dictionary.landingPage.formErrors.invalidEmail);
      } else {
        setEmailError("");
      }
    }

    if (name === "password") {
      if (value && !validatePassword(value)) {
        setPasswordError(dictionary.landingPage.formErrors.minPassword);
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would redirect to home page after successful login
      console.log("Sign in with:", formData.email, formData.password);
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);

    // Simulate Google authentication process
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would handle Google OAuth
      console.log("Sign in with Google");
    }, 1500);
  };

  const isFormValid =
    formData.email && formData.password && !emailError && !passwordError;

  if (!isReady) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header viewOnly />

      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-16">
          <h1 className="text-3xl font-medium mb-12 text-center">
            {dictionary.landingPage.loginPage.logIntoAccount}
          </h1>

          <div className="flex flex-col md:flex-row md:space-x-12 justify-center">
            {/* Form Section */}
            <div className="w-full md:w-[320px]">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm mb-2">
                    {dictionary.landingPage.loginPage.enterEmailAddress}
                  </label>
                  {emailError && (
                    <p className="text-red-500 text-xs my-2" role="alert">
                      {emailError}
                    </p>
                  )}
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      emailError ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-[#FCA311] hover:border-[#FCA311]`}
                    placeholder="myaccount@gmail.com"
                    aria-invalid={emailError ? "true" : "false"}
                    aria-describedby={emailError ? "email-error" : undefined}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="password" className="block text-sm mb-2">
                    {dictionary.landingPage.loginPage.password}
                  </label>
                  {passwordError && (
                    <p className=" text-red-500 text-xs my-2" role="alert">
                      {passwordError}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-10 rounded-lg border ${
                        passwordError ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-[#FCA311] hover:border-[#FCA311]`}
                      placeholder={
                        dictionary.landingPage.loginPage.enterPassword
                      }
                      aria-invalid={passwordError ? "true" : "false"}
                      aria-describedby={
                        passwordError ? "password-error" : undefined
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      aria-label={
                        showPassword
                          ? dictionary.landingPage.loginPage.hidePassword
                          : dictionary.landingPage.loginPage.showPassword
                      }
                    >
                      {showPassword ? (
                        <i className="far fa-eye-slash text-lg text-gray-500" />
                      ) : (
                        <i className="far fa-eye text-lg text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <Alert variant="destructive" className="mt-4">
                    <div className="flex items-start justify-between">
                      <AlertDescription>{errorMessage}</AlertDescription>
                      <button
                        onClick={() => setErrorMessage("")}
                        className="ml-4 text-sm hover:text-gray-900"
                        aria-label="Close error message"
                      >
                        <i className="far fa-close text-lg" />
                      </button>
                    </div>
                  </Alert>
                )}

                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg text-center transition-colors ${
                    isFormValid && !isLoading
                      ? "bg-[#FCA311] hover:bg-[#e5940c] text-black"
                      : "bg-[#FCA31180] text-black cursor-not-allowed"
                  }`}
                  disabled={!isFormValid || isLoading}
                >
                  {isLoading
                    ? dictionary.landingPage.loginPage.processing
                    : dictionary.landingPage.loginPage.continue}
                </button>
              </form>
            </div>

            {/* Divider */}
            <div className="my-8 md:my-0 flex md:flex-col items-center justify-center">
              <div className="flex-1 md:h-full md:w-px border-t md:border-l border-gray-300"></div>
              <span className="px-4 text-gray-500">
                {dictionary.landingPage.loginPage.or}
              </span>
              <div className="flex-1 md:h-full md:w-px border-t md:border-l border-gray-300"></div>
            </div>

            {/* Social Login Section */}
            <div className="md:w-[320px] md:mt-5 flex flex-col items-center justify-center">
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center">
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
                  <span>
                    {dictionary.landingPage.loginPage.continueWithGoogle}
                  </span>
                </div>
                <i className="far fa-arrow-right text-lg" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-1.5">
            <Link
              href="/password/forgot"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {dictionary.landingPage.loginPage.cantLogin}
            </Link>
            <span className="mx-2 text-gray-500">
              <i className="far fa-arrow-right text-sm font-semibold" />
            </span>
            <Link
              href="/register"
              className="text-sm font-medium underline underline-offset-4"
            >
              {dictionary.landingPage.loginPage.createAccount}
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-600 text-center">
            {dictionary.landingPage.loginPage.tosDesc}
            <Link href="/terms" className="underline hover:text-gray-800">
              {dictionary.landingPage.loginPage.tos}
            </Link>{" "}
            {dictionary.landingPage.loginPage.and}{" "}
            <Link href="/privacy" className="underline hover:text-gray-800">
              {dictionary.landingPage.loginPage.privacyPolicy}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
