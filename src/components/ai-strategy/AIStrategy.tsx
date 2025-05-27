"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AIStrategy() {
  const [formData, setFormData] = useState({
    businessGoal: "",
    budget: "",
    targetAudience: "",
    competitors: "",
    channels: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate API call with timeout

    router.push("/ai-strategy/result");
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-[#FAF0E6]'>
      <div className='w-full max-w-5xl'>
        {!strategy ? (
          <div className='bg-[#f9f1e4] p-6 md:p-10 rounded-xl'>
            <div className='text-center mb-8'>
              <h1 className='text-3xl md:text-5xl font-semibold text-[#5D2F04] mb-4'>
                Your AI-Generated Marketing Strategy
              </h1>
              <p className='max-w-[800px] mx-auto text-[#9D5006] text-base md:text-lg'>
                Based on your goals, budget, and competitor landscape,
                here&apos;s a custom roadmap to grow your traffic, visibility,
                and conversions.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className='space-y-6 max-w-2xl mx-auto'
            >
              <div className='space-y-2'>
                <label
                  htmlFor='businessGoal'
                  className='block text-[#5c3a11] font-medium'
                >
                  Business Goal
                </label>
                <input
                  type='text'
                  id='businessGoal'
                  name='businessGoal'
                  value={formData.businessGoal}
                  onChange={handleChange}
                  placeholder='What do you want to achieve?'
                  className='w-full p-3 bg-[#FFFFFF] border border-[#F9A94B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='budget'
                  className='block text-[#5c3a11] font-medium'
                >
                  Monthly Marketing Budget
                </label>
                <input
                  type='text'
                  id='budget'
                  name='budget'
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder='Enter your estimated spend (in USD)'
                  className='w-full p-3 bg-[#FFFFFF] border border-[#F9A94B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='targetAudience'
                  className='block text-[#5c3a11] font-medium'
                >
                  Target Audience
                </label>
                <input
                  type='text'
                  id='targetAudience'
                  name='targetAudience'
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder='Describe your ideal customer briefly'
                  className='w-full p-3 bg-[#FFFFFF] border border-[#F9A94B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='competitors'
                  className='block text-[#5c3a11] font-medium'
                >
                  Main Competitor(s)
                </label>
                <input
                  type='text'
                  id='competitors'
                  name='competitors'
                  value={formData.competitors}
                  onChange={handleChange}
                  placeholder="List up to 3 competitor URLs you'd like to analyze"
                  className='w-full p-3 bg-[#FFFFFF] border border-[#F9A94B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='channels'
                  className='block text-[#5c3a11] font-medium'
                >
                  Preferred Channels (Optional)
                </label>
                <input
                  type='text'
                  id='channels'
                  name='channels'
                  value={formData.channels}
                  onChange={handleChange}
                  placeholder='Where do you want to focus?'
                  className='w-full p-3 bg-[#FFFFFF] border border-[#F9A94B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e67e22]'
                />
              </div>

              <div className='pt-4'>
                <button
                  type='submit'
                  disabled={isGenerating}
                  className='w-full md:w-auto md:mx-auto md:px-12 flex items-center justify-center py-3 px-6 bg-[#e67e22] hover:bg-[#d35400] text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-70'
                >
                  {isGenerating ? (
                    <>
                      <svg
                        width='28'
                        height='28'
                        viewBox='0 0 28 28'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_112_7865)'>
                          <path
                            d='M14.0001 1.29688C14.0393 2.93059 13.7428 4.55569 13.1275 6.07915C12.5122 7.60262 11.5902 8.99449 10.4143 10.1751C9.23845 11.3558 7.83175 12.3021 6.27477 12.9597C4.7178 13.6173 3.04113 13.9734 1.34073 14.0077'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                          />
                          <path
                            d='M14.0001 1.29688C13.9609 2.93059 14.2574 4.55569 14.8727 6.07915C15.488 7.60262 16.4099 8.99449 17.5858 10.1751C18.7617 11.3558 20.1684 12.3021 21.7254 12.9597C23.2824 13.6173 24.959 13.9734 26.6594 14.0077'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                          />
                          <path
                            d='M14.0001 26.7186C14.0393 25.0849 13.7428 23.4598 13.1275 21.9363C12.5122 20.4129 11.5902 19.021 10.4143 17.8403C9.23845 16.6597 7.83175 15.7134 6.27477 15.0558C4.7178 14.3981 3.04113 14.042 1.34073 14.0078'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                          />
                          <path
                            d='M14.0001 26.7186C13.9609 25.0849 14.2574 23.4598 14.8727 21.9363C15.488 20.4129 16.4099 19.021 17.5858 17.8403C18.7617 16.6597 20.1684 15.7134 21.7254 15.0558C23.2824 14.3981 24.959 14.042 26.6594 14.0078'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
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
                          <clipPath id='clip0_112_7865'>
                            <rect
                              width='27.4286'
                              height='27.4286'
                              fill='white'
                              transform='translate(0.285706 0.285156)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg
                        width='28'
                        height='28'
                        viewBox='0 0 28 28'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_112_7865)'>
                          <path
                            d='M14.0001 1.29688C14.0393 2.93059 13.7428 4.55569 13.1275 6.07915C12.5122 7.60262 11.5902 8.99449 10.4143 10.1751C9.23845 11.3558 7.83175 12.3021 6.27477 12.9597C4.7178 13.6173 3.04113 13.9734 1.34073 14.0077'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                          />
                          <path
                            d='M14.0001 1.29688C13.9609 2.93059 14.2574 4.55569 14.8727 6.07915C15.488 7.60262 16.4099 8.99449 17.5858 10.1751C18.7617 11.3558 20.1684 12.3021 21.7254 12.9597C23.2824 13.6173 24.959 13.9734 26.6594 14.0077'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                          />
                          <path
                            d='M14.0001 26.7186C14.0393 25.0849 13.7428 23.4598 13.1275 21.9363C12.5122 20.4129 11.5902 19.021 10.4143 17.8403C9.23845 16.6597 7.83175 15.7134 6.27477 15.0558C4.7178 14.3981 3.04113 14.042 1.34073 14.0078'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                          />
                          <path
                            d='M14.0001 26.7186C13.9609 25.0849 14.2574 23.4598 14.8727 21.9363C15.488 20.4129 16.4099 19.021 17.5858 17.8403C18.7617 16.6597 20.1684 15.7134 21.7254 15.0558C23.2824 14.3981 24.959 14.042 26.6594 14.0078'
                            stroke='#FDDEB9'
                            strokeWidth='2.28571'
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
                          <clipPath id='clip0_112_7865'>
                            <rect
                              width='27.4286'
                              height='27.4286'
                              fill='white'
                              transform='translate(0.285706 0.285156)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='ml-2 text-[#FFFFFF] font-semibold'>
                        {" "}
                        Generate Strategy
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className='bg-white p-6 md:p-10 rounded-xl shadow-lg'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#5c3a11] mb-6'>
              Your Marketing Strategy
            </h2>
            <div
              className='prose prose-lg max-w-none'
              dangerouslySetInnerHTML={{ __html: strategy }}
            />
            <button
              onClick={() => setStrategy(null)}
              className='mt-8 py-2 px-6 bg-[#DD7109] hover:bg-[#d35400] text-white font-medium rounded-lg transition-colors duration-200'
            >
              Create Another Strategy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
