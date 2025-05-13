"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: "", email: "", password: "" });

    // Validate form
    let isValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

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
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Handle signup logic here
    console.log("Signup submitted:", { name, email, password, remember });

    // For demo purposes, simulate successful signup
    // In a real app, you would send this data to your backend
    alert("Signup successful!");

    // Redirect to login page after successful signup
    // router.push('/login')
  };

  return (
    <div className='bg-[#FAF0E6] flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-sm'>
        <h1 className='mb-6 text-center text-[40px] font-medium text-[#4E5054]'>
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='mb-2 block text-lg text-[#6E7176]'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className={`w-full rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } px-4 py-3 focus:border-gray-400 focus:outline-none`}
              placeholder='Enter your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className='mt-1 text-xs text-red-500'>{errors.name}</p>
            )}
          </div>

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
              <label
                htmlFor='remember'
                className='ml-2 block text-base text-[#6E7176]'
              >
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
            className='w-full rounded-lg text-lg bg-[#DD7109] py-3 text-white transition-colors hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            Signup
          </button>
        </form>

        <div className='mt-6 text-center text-lg text-[#6E7176]'>
          Already have an account?{" "}
          <Link
            href='/login'
            className='font-medium text-lg text-[#DD7109] hover:text-[#d35400]'
          >
            Log in now
          </Link>
        </div>
      </div>
    </div>
  );
}
