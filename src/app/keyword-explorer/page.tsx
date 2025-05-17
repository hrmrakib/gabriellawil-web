"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Search, Sparkles, ChevronDown, ArrowUp } from "lucide-react";
import CommonBanner from "@/components/common/CommonBanner";

// List of countries with their flags
const countries = [
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "India", code: "IN", flag: "🇮🇳" },
];

export default function KeywordExplorer() {
  const [keywords, setKeywords] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle click outside of country dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [keywords]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywords.trim()) return;

    // Here you would implement the actual keyword analysis
    console.log(`Analyzing keywords: ${keywords} for country: ${country.name}`);
    // You could redirect to results page or fetch data here
  };

  const handleAiSuggest = async () => {
    setIsLoading(true);
    setShowSuggestions(true);

    try {
      // Simulate API call for AI suggestions
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock AI suggestions based on input or default suggestions
      const topic = keywords.trim() || "digital marketing";
      const mockSuggestions = [
        `${topic} strategies`,
        `best ${topic} tools`,
        `${topic} for beginners`,
        `${topic} courses`,
        `${topic} certification`,
        `affordable ${topic} services`,
        `${topic} trends 2025`,
        `${topic} case studies`,
      ];

      setAiSuggestions(mockSuggestions);
    } catch (error) {
      console.error("Error getting AI suggestions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addSuggestion = (suggestion: string) => {
    setKeywords((prev) => {
      const newKeywords = prev.trim() ? `${prev}, ${suggestion}` : suggestion;
      return newKeywords;
    });
    setShowSuggestions(false);
  };

  return (
    <>
      <CommonBanner title='Keyword Explorer' path='/keyword-explorer' />

      <section className='w-full bg-amber-50 py-16 px-4'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-amber-900 mb-4'>
            Keyword Explorer
          </h1>
          <p className='text-amber-900 text-lg mb-10 max-w-2xl mx-auto'>
            Find Your Next Winning Keyword. Uncover search volume, ranking
            difficulty, and traffic potential instantly.
          </p>

          <form
            onSubmit={handleSubmit}
            className='bg-white rounded-lg border border-amber-200 p-4 shadow-sm'
          >
            <div className='relative mb-4'>
              <textarea
                ref={textareaRef}
                placeholder='Enter keywords.....'
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className='w-full p-4 min-h-[120px] text-gray-800 border border-amber-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-400 resize-none'
                rows={1}
              />
            </div>

            <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4'>
              <div
                className='bg-amber-50 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-amber-100 transition-colors'
                onClick={handleAiSuggest}
              >
                <Sparkles className='h-5 w-5 text-amber-500' />
                <span className='text-amber-700 flex-1 text-left'>
                  Ask AI to suggest seed keywords related to your topic....
                </span>
                {isLoading ? (
                  <div className='h-5 w-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin'></div>
                ) : (
                  <ArrowUp className='h-5 w-5 text-amber-500' />
                )}
              </div>

              <div className='flex flex-col sm:flex-row gap-3'>
                <div className='relative' ref={countryDropdownRef}>
                  <div
                    className='h-12 px-4 border border-amber-200 bg-white rounded-lg flex items-center justify-between cursor-pointer min-w-[180px]'
                    onClick={() =>
                      setIsCountryDropdownOpen(!isCountryDropdownOpen)
                    }
                  >
                    <div className='flex items-center'>
                      <span className='mr-2'>{country.flag}</span>
                      <span className='text-gray-700'>{country.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-700 transition-transform ${
                        isCountryDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isCountryDropdownOpen && (
                    <div className='absolute top-full left-0 w-full bg-white border border-amber-200 rounded-lg z-10 mt-1 max-h-60 overflow-y-auto'>
                      {countries.map((c) => (
                        <div
                          key={c.code}
                          className='px-4 py-2 hover:bg-amber-50 cursor-pointer flex items-center'
                          onClick={() => {
                            setCountry(c);
                            setIsCountryDropdownOpen(false);
                          }}
                        >
                          <span className='mr-2'>{c.flag}</span>
                          <span>{c.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type='submit'
                  className='h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors'
                >
                  <Search className='w-5 h-5 mr-2' />
                  Search
                </button>
              </div>
            </div>

            {/* AI Suggestions */}
            {showSuggestions && (
              <div className='mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-medium text-amber-900'>
                    AI Suggested Keywords
                  </h3>
                  <button
                    type='button'
                    className='text-amber-700 hover:text-amber-900'
                    onClick={() => setShowSuggestions(false)}
                  >
                    Close
                  </button>
                </div>

                {isLoading ? (
                  <div className='flex justify-center py-4'>
                    <div className='h-8 w-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin'></div>
                  </div>
                ) : (
                  <div className='flex flex-wrap gap-2'>
                    {aiSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type='button'
                        className='bg-white border border-amber-300 rounded-full px-3 py-1 text-sm text-amber-800 hover:bg-amber-100 transition-colors'
                        onClick={() => addSuggestion(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
