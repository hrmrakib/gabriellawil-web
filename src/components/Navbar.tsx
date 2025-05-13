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
    title: "AI Marketing Assistant",
    description: "Get personalized marketing recommendations",
    href: "#",
    icon: "Brain",
  },
  {
    title: "Competitor Analysis",
    description: "Track and analyze your competitors",
    href: "#",
    icon: "BarChart",
  },
  {
    title: "Content Generator",
    description: "Create engaging content with AI",
    href: "#",
    icon: "FileText",
  },
  {
    title: "Performance Analytics",
    description: "Track your marketing performance",
    href: "#",
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
    <header className='sticky top-0 z-50 w-full h-[100px] flex items-center justify-center border-b border-transparent bg-[#3f3632] opacity-85 backdrop-blur-md'>
      <div className='container mx-auto flex h- items-center justify-between px-4 md:px-6'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/log.svg' alt='Logo' width={145} height={52} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center md:gap-6'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink className='text-base font-medium text-white hover:text-orange-200'>
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
                          className='block px-4 py-2 text-sm text-gray-800 hover:bg-orange-100'
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
                <Link href='/plans' legacyBehavior passHref>
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
          <Button asChild className='bg-orange-500 hover:bg-orange-600'>
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
                className='border-white text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
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
              className='bg-gradient-to-r from-amber-900 to-orange-800'
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
                  className='mt-4 bg-orange-500 hover:bg-orange-600'
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
