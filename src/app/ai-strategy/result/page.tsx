"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function GrowthStrategy() {
  const [isDownloading, setIsDownloading] = useState(false);

  const channelRecommendations = [
    {
      channel: "SEO",
      priority: 4,
      reason: "High ROI. Your competitor ranks for 90+ keywords.",
    },
    {
      channel: "Paid Ads",
      priority: 3,
      reason: "Fast wins in a competitive space.",
    },
    {
      channel: "Social Media",
      priority: 2,
      reason: "Low engagement from your audience currently.",
    },
  ];

  const recommendedKeywords = [
    "project collaboration tools",
    "remote scrum guide",
    "agile coaching programs",
    "scrum vs kanban for teams",
  ];

  const executionTimeline = [
    {
      phase: "Phase 1 - Setup (Weeks 1-2)",
      tasks: [
        "Audit existing content",
        "Install analytics tools",
        "Run keyword gap analysis",
      ],
    },
    {
      phase: "Phase 2 - Growth (Weeks 3-6)",
      tasks: [
        "Launch blog campaign",
        "Start paid search targeting 3 primary keywords",
        "Optimize 10 low-hanging pages",
      ],
    },
    {
      phase: "Phase 3 - Scale (Weeks 7-12)",
      tasks: [
        "Publish case studies",
        "Double down on converting channels",
        "Run A/B tests on landing pages",
      ],
    },
  ];

  const handleDownloadPDF = async () => {
    setIsDownloading(true);

    try {
      const element = document.getElementById("growth-strategy");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#f9f1e4",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("growth-strategy.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`text-xl ${
            i < count ? "text-[#DD7109]" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <div className='min-h-screen bg-[#f9f1e4] py-12 md:py-24'>
      <div id='growth-strategy' className='container mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-5xl font-semibold text-[#5D2F04] mb-6'>
            Your Growth Strategy in a Nutshell
          </h1>
          <p className='text-[#9D5006] text-base md:text-xl'>
            Here&apos;s a simplified game plan tailored to your goals, budget,
            and competition
          </p>
        </div>

        {/* Channel Recommendations */}
        <div className='bg-white rounded-lg p-6 mb-6 shadow-sm'>
          <h2 className='text-2xl font-semibold text-[#5F5C5C] mb-4'>
            Channel Recommendations
          </h2>

          <div className='overflow-x-auto border border-[#E1E1E1] rounded-xl'>
            <table className='w-full'>
              <thead>
                <tr className='border-b p-5'>
                  <th className='text-left py-2 pr-4 font-semibold text-[#5D2F04] pl-4'>
                    Channel
                  </th>
                  <th className='text-left py-2 pr-4 font-medium text-[#5c3a11] pl-4'>
                    Priority
                  </th>
                  <th className='text-left py-2 font-medium text-[#5c3a11] pl-4'>
                    Why This Matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {channelRecommendations.map((item, index) => (
                  <tr key={index} className='border-b last:border-b-0'>
                    <td className='py-4 pr-4 font-semibold text-[#494747] pl-4'>
                      {item.channel}
                    </td>
                    <td className='py-4 pr-4 font-semibold text-[#494747] pl-4'>
                      {renderStars(item.priority)}
                    </td>
                    <td className='py-4 pl-4 font-semibold text-[#494747]'>
                      {item.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI-Recommended Keywords */}
        <div className='bg-white rounded-lg px-6 py-12 mb-6 shadow-sm'>
          <h2 className='text-2xl font-semibold text-[#5F5C5C] mb-6'>
            AI-Recommended Keywords
          </h2>

          <div className='flex flex-wrap gap-2'>
            {recommendedKeywords.map((keyword, index) => (
              <span
                key={index}
                className='bg-[#FDDEB9] text-[#5c3a11] px-4 py-2 rounded-full text-xl'
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Execution Timeline */}
        <div className='bg-white rounded-lg px-6 py-12 mb-6 shadow-sm'>
          <h2 className='text-2xl font-semibold text-[#5F5C5C] mb-4'>
            Execution Timeline
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {executionTimeline.map((phase, index) => (
              <div
                key={index}
                className='border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-4 first:border-0 first:pt-0 first:pl-0'
              >
                <h3 className='font-semibold text-[#5D2F04] mb-3'>
                  {phase.phase}
                </h3>
                <ul className='space-y-2'>
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className='flex items-start'>
                      <span className='text-[#8b5d29] mr-2'>•</span>
                      <span className='text-base text-[#5F5C5C]'>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className='flex justify-center mt-8 mb-4'>
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className='flex items-center justify-center px-6 py-3 bg-[#DD7109] hover:bg-[#d35400] text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-70'
          >
            {isDownloading ? (
              <>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Generating PDF...
              </>
            ) : (
              <>
                <Download className='mr-2 h-5 w-5' />
                <span className='text-[#FFF] font-semibold'>
                  Download Full Plan as PDF
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
