"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Sparkles, ArrowUp } from "lucide-react";

interface KeywordSuggestion {
  phrase: string;
  type: string;
}

export default function KeywordSuggestions() {
  const [topic, setTopic] = useState("Sustainable fashion marketing in us");
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<KeywordSuggestion[]>([
    { phrase: "sustainable fashion campaign ideas", type: "campaign" },
    { phrase: "eco-conscious fashion influencers", type: "influencer" },
    { phrase: "green marketing for clothing brands", type: "marketing" },
  ]);
  const [location, setLocation] = useState("United States");
  const [showMoreSuggestions, setShowMoreSuggestions] = useState(false);
  const [additionalSuggestions, setAdditionalSuggestions] = useState<
    KeywordSuggestion[]
  >([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Function to generate more keyword suggestions
  const generateMoreSuggestions = async () => {
    setIsGenerating(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock additional suggestions
      const newSuggestions: KeywordSuggestion[] = [
        { phrase: "ethical fashion advertising strategies", type: "strategy" },
        { phrase: "sustainable clothing brands marketing", type: "brand" },
        {
          phrase: "eco-friendly fashion social media campaigns",
          type: "social",
        },
        { phrase: "zero waste fashion promotion", type: "promotion" },
        { phrase: "sustainable fashion consumer trends", type: "trends" },
      ];

      setAdditionalSuggestions(newSuggestions);
      setShowMoreSuggestions(true);
    } catch (error) {
      console.error("Error generating suggestions:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Function to handle topic change
  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset previous suggestions
    setSuggestions([]);
    setAdditionalSuggestions([]);
    setShowMoreSuggestions(false);

    // Generate new suggestions based on the topic
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const cleanTopic = topic.toLowerCase().trim();

      // Generate mock suggestions based on the topic
      const newSuggestions = [
        { phrase: `${cleanTopic} campaign ideas`, type: "campaign" },
        {
          phrase: `eco-conscious ${cleanTopic} influencers`,
          type: "influencer",
        },
        {
          phrase: `green marketing for ${cleanTopic} brands`,
          type: "marketing",
        },
      ];

      setSuggestions(newSuggestions);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className='w-full bg-amber-50 py-8 px-4 md:py-24'>
      <div className='max-w-4xl mx-auto'>
        {/* Search input */}
        <form onSubmit={handleSubmit} className='mb-8'>
          <div className='bg-amber-100 rounded-lg p-3 mb-6 inline-block'>
            <span className='text-amber-900'>{topic}</span>
          </div>

          <div className='relative'>
            <input
              ref={inputRef}
              type='text'
              value={topic}
              onChange={handleTopicChange}
              placeholder='Enter your topic...'
              className='w-full p-4 pr-12 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white'
            />
            <button
              type='submit'
              className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors'
              aria-label='Search'
            >
              <ArrowUp className='h-5 w-5' />
            </button>
          </div>
        </form>

        {/* Description */}
        <div className='mb-8'>
          <p className='text-gray-800 text-lg mb-4'>
            Get tailored keyword ideas from AI based on your topic. Dive into
            potential keywords, search intent, and opportunities.
          </p>
          <p className='text-gray-700 mb-2'>
            You asked about:{" "}
            <span className='font-medium'>&quot;{topic.trim()}&quot;</span>
          </p>
          <p className='text-gray-700 flex items-center'>
            Target Location: {location} <span className='ml-2 text-lg'>🇺🇸</span>
          </p>
        </div>

        {/* Loading state */}
        {isGenerating && !showMoreSuggestions && (
          <div className='flex items-center justify-center py-12'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500'></div>
          </div>
        )}

        {/* Keyword suggestions */}
        {suggestions.length > 0 && !isGenerating && (
          <div className='mb-8'>
            <ul className='list-disc pl-6 space-y-2'>
              <li className='text-gray-800 mb-4'>
                <p>
                  For your topic, we&apos;ve found keyword clusters and related
                  long-tail phrases that align with your niche and audience
                  intent
                </p>
              </li>
              {suggestions.map((suggestion, index) => (
                <li key={index} className='text-gray-800'>
                  {suggestion.phrase}
                </li>
              ))}

              {showMoreSuggestions &&
                additionalSuggestions.map((suggestion, index) => (
                  <li key={`additional-${index}`} className='text-gray-800'>
                    {suggestion.phrase}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Ask AI button */}
        <div className='bg-white rounded-lg border border-amber-200 p-4 shadow-sm'>
          <button
            onClick={generateMoreSuggestions}
            disabled={isGenerating || suggestions.length === 0}
            className='w-full bg-amber-50 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-amber-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <Sparkles className='h-5 w-5 text-amber-500' />
            <span className='text-amber-700 flex-1 text-left'>
              Ask AI to suggest seed keywords related to your topic....
            </span>
            {isGenerating && showMoreSuggestions ? (
              <div className='h-5 w-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin'></div>
            ) : (
              <div className='bg-orange-500 rounded-full p-1'>
                <ArrowUp className='h-4 w-4 text-white' />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
