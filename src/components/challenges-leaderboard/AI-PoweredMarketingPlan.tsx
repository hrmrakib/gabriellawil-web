/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import MarketingPlanModal from "@/components/challenges-leaderboard/MarketingPlanModal";

export default function AIPoweredMarketingPlan() {
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([
    {
      id: 1,
      title: "Instagram Growth",
      icon: "instagram",
      duration: "4 weeks",
      description:
        "Grow brand presence and engagement through Reels, carousels, and stories.",
      progress: 75,
      color: "from-purple-500 via-pink-500 to-yellow-500",
    },
    {
      id: 2,
      title: "Facebook Funnel",
      icon: "facebook",
      duration: "4 weeks",
      description:
        "Build trust and engagement through content, comments, and retargeting",
      progress: 45,
      color: "bg-blue-600",
    },
    {
      id: 3,
      title: "SEO Climb",
      icon: "seo",
      duration: "4 weeks",
      description:
        "Improve keyword rankings, organic traffic, and on-page performance",
      progress: 60,
      color: "bg-gray-200",
    },
  ]);

  const generateNewPlan = (formData: {
    marketingChannel: string;
    industry: any;
  }) => {
    // In a real application, this would call an API to generate a plan based on the form data
    // For demo purposes, we'll just add a new plan to the existing ones

    const newPlan = {
      id: plans.length + 1,
      title: formData.marketingChannel,
      icon: formData.marketingChannel.toLowerCase().includes("instagram")
        ? "instagram"
        : formData.marketingChannel.toLowerCase().includes("facebook")
        ? "facebook"
        : formData.marketingChannel.toLowerCase().includes("seo")
        ? "seo"
        : "generic",
      duration: "4 weeks",
      description: `Custom ${formData.marketingChannel} strategy for ${formData.industry} industry.`,
      progress: 0,
      color: formData.marketingChannel.toLowerCase().includes("instagram")
        ? "from-purple-500 via-pink-500 to-yellow-500"
        : formData.marketingChannel.toLowerCase().includes("facebook")
        ? "bg-blue-600"
        : formData.marketingChannel.toLowerCase().includes("seo")
        ? "bg-gray-200"
        : "bg-orange-500",
    };

    setPlans([...plans, newPlan]);
    setShowModal(false);
  };

  return (
    <div className='min-h-screen bg-[#f9f1e4] p-4 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-5xl font-semibold text-[#5D2F04] mb-3'>
            AI-Powered Marketing Plan
          </h1>
          <p className='text-[#9D5006] text-sm md:text-xl max-w-[850px] mx-auto'>
            Answer a few quick questions and get a strategy tailored to your
            goals, industry, and marketing style — complete with daily tasks and
            progress tracking
          </p>

          <button
            onClick={() => setShowModal(true)}
            className='mt-6 flex items-center justify-center mx-auto px-6 py-3 bg-[#DD7109] hover:bg-[#d35400] text-white font-medium rounded-lg transition-colors duration-200'
          >
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_122_2515)'>
                <path
                  d='M14.0001 1.29688C14.0393 2.93059 13.7428 4.55569 13.1275 6.07915C12.5122 7.60262 11.5902 8.99449 10.4143 10.1751C9.23845 11.3558 7.83175 12.3021 6.27477 12.9597C4.7178 13.6173 3.04113 13.9734 1.34073 14.0077'
                  stroke='#FDDEB9'
                  stroke-width='2.28571'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M14.0001 1.29688C13.9609 2.93059 14.2574 4.55569 14.8727 6.07915C15.488 7.60262 16.4099 8.99449 17.5858 10.1751C18.7617 11.3558 20.1684 12.3021 21.7254 12.9597C23.2824 13.6173 24.959 13.9734 26.6594 14.0077'
                  stroke='#FDDEB9'
                  stroke-width='2.28571'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M14.0001 26.7186C14.0393 25.0849 13.7428 23.4598 13.1275 21.9363C12.5122 20.4129 11.5902 19.021 10.4143 17.8403C9.23845 16.6597 7.83175 15.7134 6.27477 15.0558C4.7178 14.3981 3.04113 14.042 1.34073 14.0078'
                  stroke='#FDDEB9'
                  stroke-width='2.28571'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M14.0001 26.7186C13.9609 25.0849 14.2574 23.4598 14.8727 21.9363C15.488 20.4129 16.4099 19.021 17.5858 17.8403C18.7617 16.6597 20.1684 15.7134 21.7254 15.0558C23.2824 14.3981 24.959 14.042 26.6594 14.0078'
                  stroke='#FDDEB9'
                  stroke-width='2.28571'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <ellipse
                  cx='14.0001'
                  cy='14'
                  rx='3.42857'
                  ry='8'
                  fill='#FDDEB9'
                />
                <ellipse
                  cx='14.0001'
                  cy='13.9989'
                  rx='3.42857'
                  ry='8'
                  transform='rotate(90 14.0001 13.9989)'
                  fill='#FDDEB9'
                />
              </g>
              <defs>
                <clipPath id='clip0_122_2515'>
                  <rect
                    width='27.4286'
                    height='27.4286'
                    fill='white'
                    transform='translate(0.285706 0.285156)'
                  />
                </clipPath>
              </defs>
            </svg>
            <span className='ml-1.5 text-base font-semibold text-[#FFFFFF]'>
              Generate New Plan
            </span>
          </button>
        </div>

        <h2 className='text-2xl md:text-5xl font-bold text-[#5D2F04] mb-10 text-center'>
          Your Current Plan
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className='bg-white rounded-lg shadow-sm overflow-hidden p-3'
            >
              <div
                className={`h-48 flex items-center justify-center rounded-lg ${
                  plan.color.includes("from")
                    ? `bg-gradient-to-r ${plan.color}`
                    : plan.color
                }`}
              >
                {renderIcon(plan.icon)}
              </div>

              <div className='py-5 '>
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='text-2xl font-semibold text-[#494747]'>
                    {plan.title}
                  </h3>
                  <span className='bg-[#e67e22] text-white text-base px-2 py-1 rounded'>
                    {plan.duration}
                  </span>
                </div>

                <p className='text-gray-600 text-base mb-4'>
                  {plan.description}
                </p>

                <div className='w-full bg-gray-200 rounded-full h-2.5'>
                  <div
                    className='bg-[#e67e22] h-2.5 rounded-full'
                    style={{ width: `${plan.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MarketingPlanModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={generateNewPlan}
      />
    </div>
  );
}

function renderIcon(type: string) {
  switch (type) {
    case "instagram":
      return (
        <svg
          className='w-24 h-24 text-white'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className='w-24 h-24 text-white'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z' />
        </svg>
      );
    case "seo":
      return (
        <div className='flex items-center'>
          <span className='text-4xl font-bold'>
            <span className='text-blue-500'>S</span>
            <span className='text-yellow-500'>E</span>
            <span className='text-red-500'>O</span>
          </span>
          <svg
            className='w-10 h-10 text-blue-500 ml-1'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='11' cy='11' r='8' />
            <line x1='21' y1='21' x2='16.65' y2='16.65' />
            <path d='M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z' />
          </svg>
          <svg
            className='w-8 h-8 text-green-500 ml-1'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='23 6 13.5 15.5 8.5 10.5 1 18' />
            <polyline points='17 6 23 6 23 12' />
          </svg>
        </div>
      );
    default:
      return (
        <svg
          className='w-24 h-24 text-white'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
        </svg>
      );
  }
}
