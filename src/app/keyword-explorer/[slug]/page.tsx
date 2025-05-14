"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface KeywordData {
  keyword: string;
  difficulty: number;
  searchVolume: number;
  trafficPotential: number;
  globalSearchVolume: number;
  searchTrend: { name: string; value: number }[];
  countryBreakdown: { country: string; flag: string; percentage: number }[];
}

// Mock data for the keyword analysis
const keywordData: KeywordData = {
  keyword: "example keyword",
  difficulty: 37,
  searchVolume: 12000,
  trafficPotential: 9500,
  globalSearchVolume: 18500,
  searchTrend: [
    { name: "Jan", value: 9800 },
    { name: "Feb", value: 10200 },
    { name: "Mar", value: 11000 },
    { name: "Apr", value: 10500 },
    { name: "May", value: 9900 },
    { name: "Jun", value: 11200 },
    { name: "Jul", value: 12500 },
    { name: "Aug", value: 13000 },
    { name: "Sep", value: 12800 },
    { name: "Oct", value: 11500 },
    { name: "Nov", value: 10800 },
    { name: "Dec", value: 12000 },
  ],
  countryBreakdown: [
    { country: "USA", flag: "🇺🇸", percentage: 60 },
    { country: "India", flag: "🇮🇳", percentage: 30 },
    { country: "Sri Lanka", flag: "🇱🇰", percentage: 10 },
  ],
};

export default function KeywordOverview() {
  const [data] = useState<KeywordData>(keywordData);

  // Calculate difficulty color based on the score
  const getDifficultyColor = (score: number) => {
    if (score < 30) return "#FFD700"; // Yellow for easy
    if (score < 60) return "#FF8C00"; // Orange for medium
    return "#FF4500"; // Red for hard
  };

  // Create gauge chart segments for difficulty
  const difficultySegments = [
    { value: 25, color: "#FFD700" }, // Yellow
    { value: 25, color: "#FF8C00" }, // Orange
    { value: 25, color: "#FF4500" }, // Red
    { value: 25, color: "#4169E1" }, // Blue
  ];

  // Create data for the traffic potential gauge
  const trafficPotentialData = [
    { name: "Potential", value: data.trafficPotential / 200 }, // Scale down for visual purposes
    { name: "Remaining", value: 100 - data.trafficPotential / 200 }, // Remaining part of the gauge
  ];

  return (
    <div className='w-full bg-amber-50 py-8 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-800 mb-6'>
            Overview: <span className='text-orange-500'>{data.keyword}</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Keyword Difficulty Card */}
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium text-gray-500'>
                  Keyword Difficulty
                </CardTitle>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='flex justify-center items-center h-[180px] relative'>
                  <PieChart width={180} height={180}>
                    <Pie
                      data={difficultySegments}
                      cx='50%'
                      cy='50%'
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey='value'
                    >
                      {difficultySegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    {/* Active segment based on difficulty score */}
                    <Pie
                      data={[
                        { value: data.difficulty },
                        { value: 100 - data.difficulty },
                      ]}
                      cx='50%'
                      cy='50%'
                      startAngle={180}
                      endAngle={180 - (data.difficulty / 100) * 180}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey='value'
                      stroke='none'
                    >
                      <Cell fill={getDifficultyColor(data.difficulty)} />
                      <Cell fill='transparent' />
                    </Pie>
                  </PieChart>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center bg-amber-50 rounded-full w-24 h-24 flex flex-col items-center justify-center'>
                      <span className='text-2xl font-bold text-gray-800'>
                        {data.difficulty}
                      </span>
                      <span className='text-xs text-gray-500'>/100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search Volume Card */}
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium text-gray-500'>
                  Search Volume
                </CardTitle>
                <CardDescription className='text-2xl font-bold text-gray-800'>
                  {data.searchVolume.toLocaleString()}
                  <span className='text-xs font-normal text-gray-500 ml-1'>
                    searches/month
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='h-[120px] w-full'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart
                      data={data.searchTrend}
                      margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id='colorVolume'
                          x1='0'
                          y1='0'
                          x2='0'
                          y2='1'
                        >
                          <stop
                            offset='5%'
                            stopColor='#FF8C00'
                            stopOpacity={0.8}
                          />
                          <stop
                            offset='95%'
                            stopColor='#FF8C00'
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray='3 3'
                        vertical={false}
                        opacity={0.1}
                      />
                      <XAxis
                        dataKey='name'
                        tick={{ fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        hide
                        domain={["dataMin - 1000", "dataMax + 1000"]}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #f0f0f0",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [
                          `${value.toLocaleString()} searches`,
                          "Volume",
                        ]}
                      />
                      <Area
                        type='monotone'
                        dataKey='value'
                        stroke='#FF8C00'
                        strokeWidth={2}
                        fill='url(#colorVolume)'
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Potential Card */}
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium text-gray-500'>
                  Traffic Potential
                </CardTitle>
                <CardDescription className='text-2xl font-bold text-gray-800'>
                  {data.trafficPotential.toLocaleString()}
                  <span className='text-xs font-normal text-gray-500 ml-1'>
                    visits/month
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='flex justify-center items-center h-[120px]'>
                  <PieChart width={180} height={120}>
                    <Pie
                      data={[{ value: 100 }]}
                      cx='50%'
                      cy='100%'
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey='value'
                      stroke='none'
                    >
                      <Cell fill='#f1f1f1' />
                    </Pie>
                    <Pie
                      data={trafficPotentialData}
                      cx='50%'
                      cy='100%'
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey='value'
                      stroke='none'
                    >
                      <Cell fill='#FF8C00' />
                      <Cell fill='transparent' />
                    </Pie>
                  </PieChart>
                </div>
              </CardContent>
            </Card>

            {/* Global Search Volume Card */}
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium text-gray-500'>
                  Global Search Volume
                </CardTitle>
                <CardDescription className='text-2xl font-bold text-gray-800'>
                  {data.globalSearchVolume.toLocaleString()}
                  <span className='text-xs font-normal text-gray-500 ml-1'>
                    searches/month
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='space-y-3'>
                  {data.countryBreakdown.map((country, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center'>
                        <span className='mr-2 text-lg'>{country.flag}</span>
                        <span className='text-sm text-gray-700'>
                          {country.country}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-24 bg-gray-200 rounded-full h-2 mr-2'>
                          <div
                            className='bg-orange-500 h-2 rounded-full'
                            style={{ width: `${country.percentage}%` }}
                          ></div>
                        </div>
                        <span className='text-sm font-medium text-gray-700'>
                          {country.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
