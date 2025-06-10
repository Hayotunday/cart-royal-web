"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [otpError, setOtpError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    message: string;
    color: string;
    feedback: string;
  }>({
    score: 0,
    message: "",
    color: "gray",
    feedback: "",
  });
  const navigate = useRouter();
  const location = usePathname();
  const { dictionary, isReady } = useLanguage();
  const email = new URLSearchParams(window.location.search).get("email") || "";

  useEffect(() => {
    if (!email) {
      // navigate.push("/password/forgot"); uncomment this line to redirect if email is not provided i commented it for testing purposes
    }
  }, [email, navigate]);

  const validateOtp = (otp: string) => otp.length === 6;
  const validatePassword = (password: string) => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
    return strength.score >= 3;
  };

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    let feedback = [];

    if (password.length >= 8) {
      score += 1;
      feedback.push("Length");
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
      feedback.push("Uppercase");
    }
    if (/[a-z]/.test(password)) {
      score += 1;
      feedback.push("Lowercase");
    }
    if (/[0-9]/.test(password)) {
      score += 1;
      feedback.push("Number");
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
      feedback.push("Symbol");
    }

    const strengthMap: Record<number, { message: string; color: string }> = {
      0: { message: "Very Weak", color: "#ff4444" },
      1: { message: "Weak", color: "#ffbb33" },
      2: { message: "Fair", color: "#ffbb33" },
      3: { message: "Good", color: "#00C851" },
      4: { message: "Strong", color: "#007E33" },
      5: { message: "Very Strong", color: "#007E33" },
    };

    return {
      score,
      message: strengthMap[score].message,
      color: strengthMap[score].color,
      feedback: feedback.join(" • "),
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";
    if (name === "otp") {
      if (value && !validateOtp(value)) {
        error = dictionary.landingPage.toasts.otpMinimumLength;
      } else {
        error = "";
      }
      setOtpError(error);
    }

    if (name === "newPassword") {
      if (value && !validatePassword(value)) {
        error = dictionary.landingPage.toasts.passwordStrength;
      } else {
        error = "";
      }
      setNewPasswordError(error);
    }

    if (name === "confirmPassword") {
      if (value && value !== formData.newPassword) {
        error = dictionary.landingPage.toasts.passwordsMismatch;
      } else {
        error = "";
      }
      setConfirmPasswordError(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoading(true);
      setApiError("");
      setSuccessMessage("");

      try {
        // await resetPassword(email, formData.newPassword, formData.otp); // replace with actual API call
        setPasswordChanged(true);
      } catch (error: any) {
        setApiError(error.message || dictionary.landingPage.toasts.resetFailed);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClose = () => {
    navigate.back();
  };

  const handleContinue = () => {
    navigate.push("/login");
  };

  const isFormValid =
    formData.otp &&
    formData.newPassword &&
    formData.confirmPassword &&
    !otpError &&
    !newPasswordError &&
    !confirmPasswordError;

  if (!isReady) {
    return null; // Wait until the language context is ready
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header viewOnly />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-16 pb-3">
        <div className="flex flex-col items-center max-w-md mx-auto w-full">
          {!passwordChanged ? (
            <>
              <h1 className="text-3xl font-medium mb-4">
                {dictionary.landingPage.resetPasswordPage.createNewPassword}
              </h1>
              <p className="text-base text-gray-700 mb-12">
                {
                  dictionary.landingPage.resetPasswordPage
                    .resetPasswordDescription
                }
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

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm mb-2">OTP</label>
                    <input
                      type="number"
                      name="otp"
                      value={formData.otp}
                      maxLength={6}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        otpError ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-[#FCA311] hover:border-[#FCA311]`}
                      placeholder={
                        dictionary.landingPage.resetPasswordPage.enterOTP
                      }
                    />
                    {otpError && (
                      <p className="mt-1 text-red-500 text-xs">{otpError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      {dictionary.landingPage.resetPasswordPage.newPassword}
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 pr-10 rounded-lg border ${
                          newPasswordError
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:border-[#FCA311] hover:border-[#FCA311]`}
                        placeholder={
                          dictionary.landingPage.resetPasswordPage
                            .enterNewPassword
                        }
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showNewPassword ? (
                          <BsEyeSlash className="text-gray-500" />
                        ) : (
                          <BsEye className="text-gray-500" />
                        )}
                      </button>
                    </div>
                    {formData.newPassword && (
                      <div className="mt-2">
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full transition-all duration-300"
                            style={{
                              width: `${(passwordStrength.score / 5) * 100}%`,
                              backgroundColor: passwordStrength.color,
                            }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span
                            className="text-xs"
                            style={{ color: passwordStrength.color }}
                          >
                            {passwordStrength.message}
                          </span>
                          <span className="text-xs text-gray-500">
                            {passwordStrength.feedback}
                          </span>
                        </div>
                      </div>
                    )}
                    {newPasswordError && (
                      <p className="mt-1 text-red-500 text-xs">
                        {newPasswordError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      {dictionary.landingPage.resetPasswordPage.confirmPassword}
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 pr-10 rounded-lg border ${
                          confirmPasswordError
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:border-[#FCA311] hover:border-[#FCA311]`}
                        placeholder={
                          dictionary.landingPage.resetPasswordPage
                            .confirmNewPassword
                        }
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <BsEyeSlash className="text-gray-500" />
                        ) : (
                          <BsEye className="text-gray-500" />
                        )}
                      </button>
                    </div>
                    {confirmPasswordError && (
                      <p className="mt-1 text-red-500 text-xs">
                        {confirmPasswordError}
                      </p>
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
                      ? dictionary.landingPage.resetPasswordPage.processing
                      : dictionary.landingPage.resetPasswordPage.resetPassword}
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-3xl font-medium mb-4">
                {dictionary.landingPage.resetPasswordPage.passwordChanged}
              </h1>
              <p className="text-base text-gray-700 mb-8">
                {
                  dictionary.landingPage.resetPasswordPage
                    .passwordChangedDescription
                }
              </p>
              <i className="fad fa-check-circle text-green-600 text-8xl mx-auto mb-8" />
              <button
                onClick={handleContinue}
                className="w-full py-3 rounded-lg bg-[#FCA311] hover:bg-[#e5940c] text-black text-center transition-colors cursor-pointer"
              >
                {dictionary.landingPage.resetPasswordPage.proceedToLogin}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
