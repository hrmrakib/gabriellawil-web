"use client";

import { useState, useEffect } from "react";

interface WebsiteData {
  url: string;
  domainRating: number;
  backlinks: number;
  keywordRanks: number;
  trafficPerMonth: number;
}

interface SiteResultsProps {
  url?: string;
}

export default function SiteResults({ url = "example.com" }: SiteResultsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WebsiteData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the data from an API
    // This is a simulation of an API call with setTimeout
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock data - in a real app, this would come from your API
        const mockData: WebsiteData = {
          url,
          domainRating: 27,
          backlinks: 1245,
          keywordRanks: 482,
          trafficPerMonth: 5400,
        };

        setData(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch website data. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  if (isLoading) {
    return (
      <div className='w-full bg-[#FAF0E6] py-8 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='bg-white rounded-lg shadow-sm p-6 animate-pulse'>
            <div className='h-6 bg-gray-200 rounded w-3/4 mb-6'></div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className='space-y-3'>
                  <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                  <div className='h-6 bg-gray-200 rounded w-1/3'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-amber-50 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-500'>
            <h2 className='text-lg font-medium text-red-800'>Error</h2>
            <p className='mt-2 text-red-700'>{error}</p>
            <button
              className='mt-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors'
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className='w-full bg-[#FAF0E6] py-28 px-4'>
      <div className='container mx-auto'>
        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-800 mb-6'>
            Overview: <span className='text-orange-500'>{data.url}</span>
          </h2>

          {/* Desktop view - table layout */}
          <div className='hidden md:block'>
            <div className='grid grid-cols-4 gap-4 border-b border-gray-200 pb-3'>
              <div className='text-base font-semibold text-[p#5D2F04]'>
                Domain Rating (DR)
              </div>
              <div className='text-base font-semibold text-[p#5D2F04]'>
                Backlinks
              </div>
              <div className='text-base font-semibold text-[p#5D2F04]'>
                Keyword Ranks For
              </div>
              <div className='text-base font-semibold text-[p#5D2F04]'>
                Traffic per Month
              </div>
            </div>
            <div className='bg-[#FFFCF9] grid grid-cols-4 gap-4 pt-3'>
              <div className='text-base text-[#494747] px-5'>
                {data.domainRating}
              </div>
              <div className='text-base text-[#494747]'>
                {data.backlinks.toLocaleString()}
              </div>
              <div className='text-base text-[#494747]'>
                {data.keywordRanks.toLocaleString()}
              </div>
              <div className='text-base text-[#494747]'>
                {data.trafficPerMonth.toLocaleString()} visitors/mo
              </div>
            </div>
          </div>

          {/* Mobile view - stacked cards */}
          <div className='md:hidden space-y-4'>
            <div className='border-b border-gray-200 pb-3'>
              <div className='font-medium text-gray-800'>
                Domain Rating (DR)
              </div>
              <div className='text-2xl font-bold text-gray-900 mt-1'>
                {data.domainRating}
              </div>
            </div>
            <div className='border-b border-gray-200 pb-3'>
              <div className='font-medium text-gray-800'>Backlinks</div>
              <div className='text-2xl font-bold text-gray-900 mt-1'>
                {data.backlinks.toLocaleString()}
              </div>
            </div>
            <div className='border-b border-gray-200 pb-3'>
              <div className='font-medium text-gray-800'>Keyword Ranks For</div>
              <div className='text-2xl font-bold text-gray-900 mt-1'>
                {data.keywordRanks.toLocaleString()}
              </div>
            </div>
            <div>
              <div className='font-medium text-gray-800'>Traffic per Month</div>
              <div className='text-2xl font-bold text-gray-900 mt-1'>
                {data.trafficPerMonth.toLocaleString()} visitors/mo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
