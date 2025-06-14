"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/header";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useRouter();
  const { dictionary, isReady } = useLanguage();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError(dictionary.landingPage.toasts.invalidEmail);
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoading(true);
      setApiError("");
      setSuccessMessage("");

      try {
        // await forgotPassword(email);
        setEmailSent(true);
      } catch (error: any) {
        setApiError(
          error.message || dictionary.landingPage.forgotPasswordPage.sendError
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClose = () => {
    navigate.back();
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    setApiError("");
    setSuccessMessage("");

    try {
      // await forgotPassword(email);
      setSuccessMessage(dictionary.landingPage.forgotPasswordPage.otpResent);
    } catch (error: any) {
      setApiError(
        error.message || dictionary.landingPage.forgotPasswordPage.resendError
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    navigate.push(`/password/reset?email=${encodeURIComponent(email)}`);
  };

  const isFormValid = email && !emailError;

  if (!isReady) {
    return null; // Wait until the language context is ready
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header viewOnly />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-16">
        <div className="flex flex-col items-center max-w-md mx-auto w-full">
          {!emailSent ? (
            <>
              <h1 className="text-3xl font-medium mb-4">
                {dictionary.landingPage.forgotPasswordPage.forgotPassword}
              </h1>
              <p className="text-base text-gray-700 mb-12 text-center">
                {dictionary.landingPage.forgotPasswordPage.enterEmailToReset}
              </p>

              {/* Form Section */}
              <div className="w-full">
                {apiError && (
                  <Alert variant="destructive" className="mb-4">
                    <div className="flex justify-between items-start w-full">
                      <AlertDescription>{apiError}</AlertDescription>
                      <button
                        onClick={() => setApiError("")}
                        className="ml-2 hover:opacity-70 transition-opacity flex-shrink-0"
                      >
                        <IoCloseCircleOutline size={16} />
                      </button>
                    </div>
                  </Alert>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm mb-2">
                      {dictionary.landingPage.forgotPasswordPage.emailAddress}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        emailError ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-[#FCA311] hover:border-[#FCA311]`}
                      placeholder="myaccount@gmail.com"
                    />
                    {emailError && (
                      <p className="mt-1 text-red-500 text-xs">{emailError}</p>
                    )}
                  </div>

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
                      ? dictionary.landingPage.forgotPasswordPage.sending
                      : dictionary.landingPage.forgotPasswordPage.sendOTP}
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-medium mb-4">
                {dictionary.landingPage.forgotPasswordPage.verifyOTP}
              </h1>
              <div className="w-full">
                {apiError && (
                  <Alert variant="destructive" className="mb-4">
                    <div className="flex justify-between items-start w-full">
                      <AlertDescription>{apiError}</AlertDescription>
                      <button
                        onClick={() => setApiError("")}
                        className="ml-2 hover:opacity-70 transition-opacity flex-shrink-0"
                      >
                        <IoCloseCircleOutline size={16} />
                      </button>
                    </div>
                  </Alert>
                )}

                {successMessage && (
                  <Alert className="mb-4 bg-green-50 border-green-200 text-green-800">
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertDescription>{successMessage}</AlertDescription>
                      </div>
                      <button
                        onClick={() => setSuccessMessage("")}
                        className="ml-2 hover:opacity-70 transition-opacity flex-shrink-0"
                      >
                        <IoCloseCircleOutline size={16} />
                      </button>
                    </div>
                  </Alert>
                )}

                <p className="text-base text-gray-700 mb-4 text-center">
                  {dictionary.landingPage.forgotPasswordPage.otpSent}{" "}
                  <span className="font-bold">{email}</span>
                </p>
                <p className="text-base text-gray-700 mb-12 text-center">
                  {dictionary.landingPage.forgotPasswordPage.clickContinue}
                </p>

                <div className="space-y-4">
                  <button
                    onClick={handleContinue}
                    className="w-full py-3 rounded-lg bg-[#FCA311] hover:bg-[#e5940c] text-black text-center transition-colors cursor-pointer"
                  >
                    {dictionary.landingPage.forgotPasswordPage.continue}
                  </button>
                  <button
                    onClick={handleResendEmail}
                    className="w-full py-3 rounded-lg text-blue-600 text-center hover:underline cursor-pointer"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? dictionary.landingPage.forgotPasswordPage.sending
                      : dictionary.landingPage.forgotPasswordPage.resendOTP}
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="mt-6 flex items-center justify-center gap-x-4">
            <span className="text-sm text-gray-600">
              {dictionary.landingPage.forgotPasswordPage.rememberedPassword}{" "}
            </span>
            <span className="text-sm">
              <i className="far fa-arrow-right"></i>
            </span>
            <Link
              href="/login"
              className="text-sm text-blue-600 hover:underline"
            >
              {dictionary.landingPage.forgotPasswordPage.login}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
