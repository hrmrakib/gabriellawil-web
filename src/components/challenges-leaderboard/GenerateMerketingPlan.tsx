"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MarketingPlanGenerator() {
  const [formData, setFormData] = useState({
    businessDescription: "",
    industry: "",
    primaryGoal: "",
    competitors: "",
    marketingIntensity: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const marketingIntensityOptions = [
    "Low - Basic marketing efforts",
    "Medium - Moderate marketing campaigns",
    "High - Aggressive marketing strategy",
    "Very High - Maximum marketing push",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);

    // Simulate API call

    // setIsSubmitting(false);
    // setShowSuccess(true);
    console.log("okkkkkkkkkkkkkkkkk");

    router.push("/leaderboard/plan-overview");
    // Reset success message after 3 seconds
  };

  const isFormValid = () => {
    return (
      formData.businessDescription.trim() !== "" &&
      formData.industry.trim() !== "" &&
      formData.primaryGoal.trim() !== "" &&
      formData.competitors.trim() !== "" &&
      formData.marketingIntensity !== ""
    );
  };

  return (
    <div className='min-h-screen bg-orange-50 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 mb-2'>
            Generate Marketing Plan
          </h1>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Business Description */}
          <div>
            <label
              htmlFor='business-description'
              className='block text-lg font-medium text-gray-700 mb-2'
            >
              Tell Us About Your Business
            </label>
            <textarea
              id='business-description'
              rows={4}
              className='bg-[#FFFFFF] w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400 transition-all duration-200'
              placeholder='Describe your business'
              value={formData.businessDescription}
              onChange={(e) =>
                handleInputChange("businessDescription", e.target.value)
              }
              required
            />
          </div>

          {/* Industry */}
          <div>
            <label
              htmlFor='industry'
              className='block text-lg font-medium text-gray-700 mb-2'
            >
              Industry
            </label>
            <input
              type='text'
              id='industry'
              className='bg-[#FFFFFF] w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200'
              placeholder='What space are you in?'
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              required
            />
          </div>

          {/* Primary Goal */}
          <div>
            <label
              htmlFor='primary-goal'
              className='block text-lg font-medium text-gray-700 mb-2'
            >
              Primary Goal
            </label>
            <input
              type='text'
              id='primary-goal'
              className='bg-[#FFFFFF] w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200'
              placeholder='What is your primary goal'
              value={formData.primaryGoal}
              onChange={(e) => handleInputChange("primaryGoal", e.target.value)}
              required
            />
          </div>

          {/* Top 3 Competitors */}
          <div>
            <label
              htmlFor='competitors'
              className='block text-lg font-medium text-gray-700 mb-2'
            >
              Top 3 Competitors
            </label>
            <input
              type='text'
              id='competitors'
              className='bg-[#FFFFFF] w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200'
              placeholder="We'll analyze them and help you stand out"
              value={formData.competitors}
              onChange={(e) => handleInputChange("competitors", e.target.value)}
              required
            />
          </div>

          {/* Marketing Intensity Dropdown */}
          <div>
            <label
              htmlFor='marketing-intensity'
              className='block text-lg font-medium text-gray-700 mb-2'
            >
              Marketing Intensity
            </label>
            <div className='relative'>
              <button
                type='button'
                className='w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-left text-gray-700 bg-white transition-all duration-200 flex items-center justify-between'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span
                  className={
                    formData.marketingIntensity
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  {formData.marketingIntensity || "Select one"}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-orange-600 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className='absolute z-10 w-full mt-1 bg-white border border-orange-200 rounded-lg shadow-lg'>
                  {marketingIntensityOptions.map((option, index) => (
                    <button
                      key={index}
                      type='button'
                      className='w-full px-4 py-3 text-left text-gray-700 hover:bg-orange-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg'
                      onClick={() => {
                        handleInputChange("marketingIntensity", option);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className='pt-4'>
            <button
              type='submit'
              //   disabled={!isFormValid() || isSubmitting}
              className={`w-full sm:w-auto mx-auto  px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                isFormValid() && !isSubmitting
                  ? "bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105"
                  : "bg-[#DD7109] cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className='h-5 w-5' />
                  Generate Plan
                </>
              )}
            </button>
          </div>
        </form>

        {/* Success Message */}
        
        {showSuccess && (
          <div className='mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center'>
            <p className='font-semibold'>Success!</p>
            <p>Your marketing plan has been generated successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
}
