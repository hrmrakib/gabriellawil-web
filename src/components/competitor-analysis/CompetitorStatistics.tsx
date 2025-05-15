"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddCompetitorDialog from "./AddCompetitorDialog";

type Competitor = {
  id: string;
  name: string;
  domain: string;
  logo: string;
  domainRating: number;
  backlinks: string;
  referringDomains: number;
  organicKeywords: number;
  monthlyTraffic: string;
};

export default function CompetitorStatistics() {
  const [competitors, setCompetitors] = useState<Competitor[]>([
    {
      id: "1",
      name: "RankNova",
      domain: "ranknova.com",
      logo: "/competitor-statistics/rank-nova.png",
      domainRating: 54,
      backlinks: "4.2K",
      referringDomains: 280,
      organicKeywords: 1200,
      monthlyTraffic: "8.5K",
    },
    {
      id: "2",
      name: "LinkCraft",
      domain: "linkcraft.com",
      logo: "/competitor-statistics/link-craft.png",
      domainRating: 67,
      backlinks: "10.3K",
      referringDomains: 510,
      organicKeywords: 2300,
      monthlyTraffic: "15K",
    },
    {
      id: "3",
      name: "MetricLoop",
      domain: "metricloop.com",
      logo: "/competitor-statistics/metric-loop.png",
      domainRating: 45,
      backlinks: "3.8K",
      referringDomains: 190,
      organicKeywords: 950,
      monthlyTraffic: "5.1K",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCompetitor = (competitor: Competitor) => {
    setCompetitors([...competitors, competitor]);
    setIsDialogOpen(false);
  };

  const handleDeleteCompetitor = (id: string) => {
    setCompetitors(competitors.filter((competitor) => competitor.id !== id));
  };

  return (
    <div className='rounded-lg bg-[#FAF0E6] p-6 shadow-sm pt-8 md:pt-24'>
      <div className='container mx-auto bg-[#FFFFFF] p-6 rounded-lg'>
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-2xl font-semibold text-[#5F5C5C]'>
            Competitor Statistics
          </h2>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className='bg-[#DD7109] hover:bg-[#dd7009f0] text-lg font-semibold text-[#FFFFFF]'
          >
            <span className='mr-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                  stroke='white'
                  strokeWidth='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8 12H16'
                  stroke='white'
                  strokeWidth='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12 16V8'
                  stroke='white'
                  strokeWidth='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </span>{" "}
            Add Competitor
          </Button>
        </div>

        <div className='overflow-x-auto border border-[#FBCE98] rounded-xl'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-b-[#F7941E] text-left'>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Competitor Name
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Domain Rating
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Backlinks
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Referring Domains
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Organic Keywords
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'>
                  Monthly Traffic
                </th>
                <th className='whitespace-nowrap px-4 py-3 text-base font-semibold text-[#5D2F04] text-center border-r border-[#EFBE8E]'></th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor) => (
                <tr key={competitor.id} className='border-b border-b-[#FBCE98]'>
                  <td className='whitespace-nowrap px-4 py-4 text-center border-r border-[#EFBE8E]'>
                    <div className='flex items-center gap-2'>
                      <div className='h-6 w-6 overflow-hidden rounded-sm mr-1'>
                        <Image
                          src={competitor.logo || "/placeholder.svg"}
                          alt={competitor.name}
                          width={24}
                          height={24}
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div>
                        <div className='font-medium text-[#494747]'>
                          {competitor.name}
                        </div>
                        <div className='text-xs text-[#494747]'>
                          {competitor.domain}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {competitor.domainRating}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {competitor.backlinks}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {competitor.referringDomains}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {competitor.organicKeywords}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    {competitor.monthlyTraffic}
                  </td>
                  <td className='whitespace-nowrap px-4 py-4 text-[#494747] text-center border-r border-[#EFBE8E]'>
                    <button
                      onClick={() => handleDeleteCompetitor(competitor.id)}
                      className='text-[#494747] hover:text-[#494747]'
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddCompetitorDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={handleAddCompetitor}
      />
    </div>
  );
}
