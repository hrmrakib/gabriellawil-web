import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CompetitorAnalysis() {
  return (
    <div className="h-[572px] bg-[url('/banner.png')] bg-cover bg-center pb-20">
      <div className='relative w-full h-fit'>
        <div className='flex items-center justify-center border-8 border-white'>
          <div className='relative z-10 container mx-auto px-4 py-16 md:py-24 border-4 flex items-center'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <div className='w-full md:w-1/2 text-white'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                  Competitor Analysis
                </h1>

                <nav className='flex items-center text-sm md:text-base'>
                  <Link href='/' className='hover:underline'>
                    Home
                  </Link>
                  <ChevronRight className='mx-2 h-4 w-4' />
                  <span>Competitor Analysis</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
