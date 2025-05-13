"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: "", password: "" });

    // Validate form
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Handle login logic here
    console.log("Login submitted:", { email, password, remember });

    // For demo purposes, simulate successful login
    // In a real app, you would verify credentials with your backend
    alert("Login successful!");

    // Redirect to dashboard or home page after successful login
    // router.push('/dashboard')
  };

  return (
    <div className='bg-[#FAF0E6] flex h-screen items-center justify-center'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-sm'>
        <h1 className='mb-6 text-center text-[40px] font-medium text-[#4E5054]'>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='mb-2 block text-lg text-[#6E7176]'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className={`w-full rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } px-4 py-3 focus:border-gray-400 focus:outline-none`}
              placeholder='Enter your email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className='mt-1 text-xs text-red-500'>{errors.email}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='mb-2 block text-lg text-[#6E7176]'
            >
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                className={`w-full rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } px-4 py-3 focus:border-gray-400 focus:outline-none`}
                placeholder='Enter your password...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className='mt-1 text-xs text-red-500'>{errors.password}</p>
            )}
          </div>

          <div className='mb-6 flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='remember'
                className='h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500'
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor='remember' className='ml-2 text-lg text-[#6E7176]'>
                Remember
              </label>
            </div>
            <Link
              href='/forgot-password'
              className='text-base text-[#8B8D91] hover:text-gray-700'
            >
              Forget Password?
            </Link>
          </div>

          <button
            type='submit'
            className='w-full text-lg rounded-lg bg-[#DD7109] py-3 text-white transition-colors hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            Login
          </button>
        </form>

        <div className='mt-6 text-center text-lg text-[#6E7176]'>
          Don&apos;t have account?{" "}
          <Link
            href='/signup'
            className='font-medium text-lg text-[#DD7109] hover:text-[#d35400]'
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}
