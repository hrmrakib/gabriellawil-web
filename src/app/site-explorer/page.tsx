"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

export default function SiteExplorer() {
  const [protocol, setProtocol] = useState("http + https");
  const [url, setUrl] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual site analysis functionality
    console.log(
      `Analyzing: ${protocol === "http + https" ? "" : protocol}${url}`
    );
    // You could redirect to results page or fetch data here
  };

  const protocols = ["http + https", "http://", "https://"];

  return (
    <section className='w-full bg-[#FAF0E6] py-16 px-4'>
      <div className='max-w-5xl mx-auto text-center py-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-[#5D2F04] mb-4'>
          Site Explorer
        </h1>
        <p className='text-[#9D5006] text-lg md:text-xl mb-10 max-w-2xl mx-auto'>
          Analyze any website&apos;s performance in seconds. See backlinks,
          keywords, traffic, and domain strength — all in one place.
        </p>

        <form
          onSubmit={handleSubmit}
          className='relative flex flex-col sm:flex-row'
        >
          <div className='relative' ref={dropdownRef}>
            <div
              className='h-14 px-4 border border-[#F9A94B] bg-white rounded-t-lg sm:rounded-t-none sm:rounded-l-lg flex items-center justify-between cursor-pointer min-w-[140px]'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className='text-[#5F5C5C]'>{protocol}</span>
              <svg
                className={`w-4 h-4 text-gray-700 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>

            {isDropdownOpen && (
              <div className='absolute top-full left-0 w-full bg-white border border-[#F9A94B] rounded-b-lg z-10'>
                {protocols.map((p) => (
                  <div
                    key={p}
                    className='px-4 py-2 hover:bg-amber-50 cursor-pointer'
                    onClick={() => {
                      setProtocol(p);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {p}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type='text'
            placeholder='Domain or URL.....'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='flex-1 h-14 px-4 border-t border-b border-r sm:border-l-0 border-[#F9A94B] focus:outline-none focus:ring-1 focus:ring-amber-400'
          />

          <button
            type='submit'
            className='h-14 px-6 bg-[#DD7109] hover:bg-[#dd7009dd] text-white rounded-tr-md rounded-br-md flex items-center justify-center transition-colors'
            aria-label='Search'
          >
            <Search className='w-6 h-6' />
          </button>
        </form>
      </div>
    </section>
  );
}
