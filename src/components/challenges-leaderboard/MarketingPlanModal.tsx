"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function MarketingPlanModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    industry: "",
    goals: "",
    budget: "",
    marketingChannel: "",
    timeframe: "4 weeks",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      industry: "",
      goals: "",
      budget: "",
      marketingChannel: "",
      timeframe: "4 weeks",
    });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg w-full max-w-md relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
        >
          <X className='h-5 w-5' />
        </button>

        <div className='p-6'>
          <h2 className='text-xl font-bold text-[#5c3a11] mb-4'>
            Generate Your Marketing Plan
          </h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='industry'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Your Industry
              </label>
              <input
                type='text'
                id='industry'
                name='industry'
                value={formData.industry}
                onChange={handleChange}
                placeholder='e.g. E-commerce, SaaS, Real Estate'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                required
              />
            </div>

            <div>
              <label
                htmlFor='goals'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Marketing Goals
              </label>
              <input
                type='text'
                id='goals'
                name='goals'
                value={formData.goals}
                onChange={handleChange}
                placeholder='e.g. Increase brand awareness, Generate leads'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                required
              />
            </div>

            <div>
              <label
                htmlFor='budget'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Monthly Budget
              </label>
              <input
                type='text'
                id='budget'
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                placeholder='e.g. $500, $1000, $5000+'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                required
              />
            </div>

            <div>
              <label
                htmlFor='marketingChannel'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Preferred Marketing Channel
              </label>
              <select
                id='marketingChannel'
                name='marketingChannel'
                value={formData.marketingChannel}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                required
              >
                <option value=''>Select a channel</option>
                <option value='Instagram Marketing'>Instagram Marketing</option>
                <option value='Facebook Advertising'>
                  Facebook Advertising
                </option>
                <option value='SEO Strategy'>SEO Strategy</option>
                <option value='Email Marketing'>Email Marketing</option>
                <option value='Content Marketing'>Content Marketing</option>
                <option value='TikTok Marketing'>TikTok Marketing</option>
                <option value='LinkedIn Marketing'>LinkedIn Marketing</option>
              </select>
            </div>

            <div className='pt-4'>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-[#e67e22] hover:bg-[#d35400] text-white font-medium rounded-md transition-colors duration-200'
              >
                Generate Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
