"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const validatePassword = (password: string) => {
    // Password must be at least 8 characters long and contain at least one number
    return password.length >= 8 && /\d/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ newPassword: "", confirmPassword: "" });

    // Validate form
    let isValid = true;
    const newErrors = { newPassword: "", confirmPassword: "" };

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    } else if (!validatePassword(newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters and contain a number";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, you would call your backend to reset the password
      // For demo purposes, we'll simulate the process
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Password reset successful:", { newPassword });
      setSuccess(true);

      // Redirect to login page after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setErrors({
        ...newErrors,
        newPassword: "Failed to reset password. Please try again.",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-[#FFF5E9] flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-sm'>
        <h1 className='mb-3 text-center text-2xl md:text-[40px] font-semibold text-[#4E5054]'>
          Reset Password
        </h1>
        <p className='mb-6 text-center text-base text-[#666464]'>
          Create your new password for your account
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
                  Password reset successful! Redirecting to login page...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='new-password'
                className='mb-2 block text-lg text-[#6E7176]'
              >
                New Password
              </label>
              <div className='relative'>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id='new-password'
                  className={`w-full rounded-lg border ${
                    errors.newPassword ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 focus:border-gray-400 focus:outline-none`}
                  placeholder='Enter your password...'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  aria-label={
                    showNewPassword ? "Hide password" : "Show password"
                  }
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.newPassword && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className='mb-6'>
              <label
                htmlFor='confirm-password'
                className='mb-2 block text-lg text-[#6E7176]'
              >
                Re-enter New Password
              </label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id='confirm-password'
                  className={`w-full rounded-lg border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-4 py-3 focus:border-gray-400 focus:outline-none`}
                  placeholder='Re-enter new password...'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type='submit'
              className='w-full rounded-lg text-lg bg-[#DD7109] py-3 font-semibold text-[#FFF] transition-colors hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70'
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
