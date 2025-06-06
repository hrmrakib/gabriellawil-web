import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SiteExplorer() {
  return (
    <section className='w-full bg-[#FFF5E9] py-16 md:py-40'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-20 text-center'>
          <h2 className='text-4xl md:text-[68px] font-bold text-[#5D2F04]'>
            Site{" "}
            <span className='rounded-lg bg-[#FBCE98] px-3 py-1'>Explorer</span>
          </h2>
        </div>

        <div className='flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between'>
          <div className='relative w-full max-w-md'>
            <Image
              src='/site-explorer.png'
              alt='Site Explorer Illustration'
              width={500}
              height={400}
              className='h-auto w-full'
              priority
            />
          </div>

          <div className='flex w-full max-w-[625px] flex-col items-start gap-6'>
            <h3 className='text-3xl md:text-5xl text-[#5D2F04] font-bold'>
              Analyze Any Website Instantly
            </h3>
            <p className='text-xl text-[#885111]'>
              Get performance scores, backlinks, keywords, and monthly traffic
              with just a URL
            </p>
            <Link href='/site-explorer' className='flex items-center gap-2 rounded-lg bg-[#DD7109] px-6 py-3 font-medium text-white transition-all hover:bg-[#D35400]'>
              Explore
              <ArrowRight className='h-5 w-5 -rotate-45' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
