"use client";

import { useState } from "react";

type KeywordRank = {
  id: string;
  keyword: string;
  location: string;
  search: number | string;
  rank: number | string;
};

export default function CompetitorRanks() {
  const [keywordRanks, setKeywordRanks] = useState<KeywordRank[]>([
    {
      id: "1",
      keyword: "agile project management",
      location: "Kansas City, MO",
      search: 40,
      rank: 8,
    },
    {
      id: "2",
      keyword: "agile project management software",
      location: "London, UK",
      search: 32,
      rank: 14,
    },
    {
      id: "3",
      keyword: "agile team collaboration tools",
      location: "Toronto, Canada",
      search: 10.18,
      rank: 11,
    },
    {
      id: "4",
      keyword: "scrum project management",
      location: "New York, NY",
      search: 30,
      rank: "> 100",
    },
    {
      id: "5",
      keyword: "agile training certification",
      location: "Sydney, Australia",
      search: 50,
      rank: 6,
    },
  ]);

  return (
    <div className='rounded-lg bg-[#FAF0E6] p-6 shadow-sm pb-8 md:pb-24'>
      <div className='container mx-auto bg-[#FFFFFF] p-6 rounded-lg'>
        <div className='mb-6'>
          <h2 className='text-2xl font-semibold text-[#5F5C5C]'>
            Competitor Ranks
          </h2>
        </div>

        <div className='overflow-x-auto border border-[#FBCE98] rounded-xl'>
          <table className='w-full'>
            <thead>
              <tr className='border-b text-left'>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Keyword
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Location
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Search
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {keywordRanks.map((rank) => (
                <tr key={rank.id} className='border-b'>
                  <td className='whitespace-nowrap px-4 py-4 text-[#9D5006] text-center border-r border-[#EFBE8E]'>
                    {rank.keyword}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {rank.location}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {rank.search}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {rank.rank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
