import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() { 
  return (
    <section className="relative overflow-hidden bg-[url('/hero.png')] bg-cover bg-center h-screen w-full py-12 md:py-24">
      {/* Background decorative elements */}
      <div className='absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/4 rounded-full border border-orange-500/20 opacity-30'></div>
      <div className='absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/4 rounded-full border border-orange-500/20 opacity-30'></div>

      <div className='container mx-auto h-full relative z-10 px-4 md:px-6'>
        <div className='min-h-full grid items-center justify-center gap-6 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl'>
                Unlock the Power of AI-Driven Marketing
              </h1>
              <p className='max-w-[600px] text-lg text-white/80 md:text-xl'>
                Discover personalized strategies to grow your business with
                tailored marketing tasks, competitor insights, and AI
                recommendations
              </p>
              <div className='mt-4'>
                <Button
                  asChild
                  className='group bg-orange-500 px-6 py-6 text-lg hover:bg-orange-600'
                >
                  <Link href='#learn-more' className='flex items-center gap-2'>
                    Learn More
                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* <div className='flex justify-center lg:justify-end'>
            <div className='relative h-[600px] w-[350px] md:h-[500px] md:w-[450px]'>
              <Image
                src='/heroien.png'
                alt='AI-Driven Marketing'
                width={500}
                height={800}
                className='object-contain'
                priority
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
