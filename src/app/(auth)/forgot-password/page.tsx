"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError("");
    setSuccess(false);

    // Validate email
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, you would call your backend to send the OTP
      // For demo purposes, we'll simulate the process
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Sending OTP to:", email);
      setSuccess(true);

      // Redirect to OTP verification page after a short delay
      setTimeout(() => {
        router.push("/verify");
      }, 2000);
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-[#FAF0E6] flex h-screen items-center justify-center'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-sm'>
        <h1 className='mb-3 text-center text-2xl md:text-[40px] font-semibold text-[#4E5054]'>
          Forgot Password
        </h1>
        <p className='mb-6 text-center text-base text-[#666464]'>
          Enter your email and we&apos;ll send a secure one-time passcode (OTP)
          to reset your password.
        </p>

        {success ? (
          <div className='rounded-md bg-green-50 p-4'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <svg
                  className='h-5 w-5 text-green-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-green-800'>
                  OTP sent successfully! Redirecting to verification page...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='mb-2 block text-xl text-[#6E7176]'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className={`w-full rounded-lg border ${
                  error ? "border-red-500" : "border-gray-300"
                } px-4 py-3 focus:border-gray-400 focus:outline-none`}
                placeholder='Enter your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
            </div>

            <button
              type='submit'
              className='w-full rounded-lg text-lg font-semibold bg-[#DD7109] py-3 text-[#FFFFFF] transition-colors hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70'
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>

            <div className='mt-6 text-center'>
              <Link
                href='/login'
                className='text-base text-[#6E7176] hover:text-gray-800'
              >
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
