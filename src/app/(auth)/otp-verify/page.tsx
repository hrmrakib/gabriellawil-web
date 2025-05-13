"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";

export default function OtpVerificationForm() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle countdown for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    // Take only the last character if multiple characters are pasted
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move focus to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);

      // Focus the last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setError("");

    // Check if OTP is complete
    if (otp.some((digit) => digit === "")) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, you would verify the OTP with your backend
      // For demo purposes, we'll simulate a verification process
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const otpString = otp.join("");
      console.log("Verifying OTP:", otpString);

      // For demo, let's say "123456" is a valid OTP
      if (otpString === "123456") {
        alert("OTP verified successfully!");
        // Redirect to dashboard or home page after successful verification
        // router.push('/dashboard')
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendDisabled) return;

    setResendDisabled(true);
    setCountdown(30); // 30 seconds cooldown

    try {
      // In a real app, you would call your backend to resend the OTP
      // For demo purposes, we'll simulate the process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Resending OTP...");
      alert("A new OTP has been sent to your email");

      // Clear the current OTP fields
      setOtp(Array(6).fill(""));
      // Focus the first input
      inputRefs.current[0]?.focus();
    } catch (error) {
      alert("Failed to resend OTP. Please try again.");
      setResendDisabled(false);
      setCountdown(0);
    }
  };

  return (
    <div className='bg-[#f9eee0] flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-sm'>
        <h1 className='mb-2 text-center text-2xl md:text-[40px] font-semibold text-[#4E5054]'>
          Verify with OTP
        </h1>
        <p className='mb-6 text-center text-base font-medium text-[#666464]'>
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleVerify}>
          <div className='mb-6 flex justify-center space-x-2'>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type='text'
                maxLength={1}
                className='h-12 w-12 rounded-md border border-gray-300 bg-[#f9eee0]/30 text-center text-xl focus:border-gray-400 focus:outline-none sm:h-14 sm:w-14'
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                autoFocus={index === 0}
                inputMode='numeric'
                aria-label={`Digit ${index + 1} of OTP`}
              />
            ))}
          </div>

          {error && (
            <p className='mb-4 text-center text-sm text-red-500'>{error}</p>
          )}

          <button
            type='submit'
            className='w-full rounded-lg bg-[#DD7109] py-3 text-lg text-[#FFFFFF] transition-colors hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70'
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className='mt-6 text-center text-lg text-[#6E7176]'>
          Don&apos;t receive the OTP{" "}
          <button
            type='button'
            onClick={handleResend}
            className={`font-medium ${
              resendDisabled
                ? "text-gray-400"
                : "text-[#DD7109] hover:text-[#d35400]"
            }`}
            disabled={resendDisabled}
          >
            {resendDisabled ? `Resend (${countdown}s)` : "Resend"}
          </button>
        </div>
      </div>
    </div>
  );
}
