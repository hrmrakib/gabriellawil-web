"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BarChart,
  Brain,
  ChevronDown,
  FileText,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const features = [
  {
    title: "Site Explorer",
    description: "Get personalized marketing recommendations",
    href: "/site-explorer",
    icon: "Brain",
  },
  {
    title: "Keyword Explorer",
    description: "Track and analyze your competitors",
    href: "/keyword-explorer",
    icon: "BarChart",
  },
  {
    title: "Competitor Analysis",
    description: "Create engaging content with AI",
    href: "/competitor-analysis",
    icon: "FileText",
  },
  {
    title: "Al Strategy",
    description: "Track your marketing performance",
    href: "/ai-strategy",
    icon: "LineChart",
  },
  {
    title: "Plans & Pricing",
    description: "Track your marketing performance",
    href: "/checkout",
    icon: "LineChart",
  },
  {
    title: "Challenges",
    description: "Track your marketing performance",
    href: "/challenges",
    icon: "LineChart",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdown = document.getElementById("features-dropdown");
      if (dropdown && !dropdown.contains(target)) {
        setFeaturesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full h-[100px] flex items-center justify-center border-b border-transparent bg-linear-to-r from-[#b7753d] via-[#3e3632] to-[#6a5035] opacity-85 backdrop-blur-md px-5'>
      <div className='container mx-auto flex h- items-center justify-between'>
        <div className='relative flex items-center gap-2'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/log.svg' alt='Logo' width={145} height={52} />
          </Link>

          <div className='z-10 hidden absolute -left-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <svg
              width='901'
              height='993'
              viewBox='0 0 901 993'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_f_219_4628)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M376.325 481.019C395.391 443.969 400.829 400.872 428.41 372.345C465.871 333.599 512.795 281.123 553.345 297.926C593.907 314.733 584.028 388.816 593.259 440.652C600.408 480.796 613.538 519.465 600.282 561.495C586.432 605.41 556.541 640.478 522.604 664.673C486.548 690.378 447.482 702.765 409.848 697.261C364.402 690.615 303.52 685.72 295.1 631.402C286.598 576.559 349.174 533.78 376.325 481.019Z'
                  fill='#F7941E'
                />
              </g>
              <defs>
                <filter
                  id='filter0_f_219_4628'
                  x='0.212494'
                  y='0.602448'
                  width='899.855'
                  height='992.046'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur
                    stdDeviation='147.05'
                    result='effect1_foregroundBlur_219_4628'
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center md:gap-6'>
          <NavigationMenu>
            <NavigationMenuList className='gap-8'>
              <NavigationMenuItem>
                <Link href='/'>
                  <NavigationMenuLink className='text-lg text-[#FFFFFF]'>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className='relative'>
                  <button
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className='flex items-center gap-1 text-base font-medium text-white hover:text-orange-200'
                  >
                    Features
                    <ChevronDown className='h-4 w-4' />
                  </button>
                  {featuresOpen && (
                    <div
                      id='features-dropdown'
                      className='absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-white py-1 shadow-lg'
                    >
                      {features.map((feature) => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          className='block px-4 py-2 text-lg text-gray-800 hover:bg-orange-100'
                          onClick={() => setFeaturesOpen(false)}
                        >
                          {feature.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/checkout' legacyBehavior passHref>
                  <NavigationMenuLink className='text-base font-medium text-white hover:text-orange-200'>
                    Plans
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/leaderboard' legacyBehavior passHref>
                  <NavigationMenuLink className='text-base font-medium text-white hover:text-orange-200'>
                    Leaderboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <Button
            asChild
            className='hidden md:flex w-[135px] h-[54px] bg-[#DD7109] text-lg text-[#FFFFFF] hover:bg-orange-600'
          >
            <Link href='/login'>Login</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className='flex md:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='border-white bg-transparent text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'
                >
                  <line x1='4' x2='20' y1='12' y2='12' />
                  <line x1='4' x2='20' y1='6' y2='6' />
                  <line x1='4' x2='20' y1='18' y2='18' />
                </svg>
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='bg-linear-to-r from-[#e0812d] via-[#3e3632] to-[#6a5035] opacity-85 p-6'
            >
              <div className='flex flex-col gap-6 pt-6'>
                <Link
                  href='/'
                  className='text-lg font-medium text-white hover:text-orange-200'
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className='flex flex-col gap-2'>
                  <button
                    className='flex items-center justify-between text-lg font-medium text-white hover:text-orange-200'
                    onClick={(e) => {
                      e.preventDefault();
                      const content =
                        document.getElementById("features-content");
                      if (content) {
                        content.classList.toggle("hidden");
                      }
                    }}
                  >
                    Features
                    <ChevronDown className='h-4 w-4' />
                  </button>
                  <div id='features-content' className='hidden pl-4'>
                    {features.map((feature) => {
                      const Icon =
                        feature.icon === "Brain"
                          ? Brain
                          : feature.icon === "BarChart"
                          ? BarChart
                          : feature.icon === "FileText"
                          ? FileText
                          : LineChart;

                      return (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          className='flex items-center gap-2 py-2 text-sm text-white/80 hover:text-orange-200'
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className='h-4 w-4' />
                          {feature.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <Link
                  href='/plans'
                  className='text-lg font-medium text-white hover:text-orange-200'
                  onClick={() => setIsOpen(false)}
                >
                  Plans
                </Link>
                <Link
                  href='/leaderboard'
                  className='text-lg font-medium text-white hover:text-orange-200'
                  onClick={() => setIsOpen(false)}
                >
                  Leaderboard
                </Link>
                <Button
                  asChild
                  className='mt-4 bg-[#DD7109] hover:bg-[#DD7109]'
                >
                  <Link href='/login' onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
