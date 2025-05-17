import Image from "next/image";

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-[#f9f1e7] flex items-center justify-center p-4'>
      <div className='container mx-auto w-full py-16 md:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center justify-between'>
          {/* Image Section */}
          <div className='flex justify-center'>
            <div className='relative w-full max-w-md h-[400px] md:h-[500px]'>
              <Image
                src='/about/apa.png'
                alt='Marketer with laptop'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className='flex flex-col space-y-6'>
            <div className='inline-block'>
              <span className='px-6 py-2 text-orange-500 border border-orange-500 rounded-full text-sm font-medium'>
                About Us
              </span>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
              Empowering Marketers and Entrepreneurs with Smart AI Tools
            </h1>

            <p className='text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur. Dictum lectus sem volutpat
              a egestas semper. Libero quam mattis fringilla mattis vel odio
              urna enim. Est a in vel sagittis et amet sit. Felis sit platea
              nunc pellentesque. Lectus accumsan nam laoreet magna elit quis
              faucibus mauris. Nibh faucibus a ornare tempor tristique
              adipiscing dolor. Massa pulvinar duis ornare mattis. Lectus
              hendrerit tempus sed pretium nunc neque donec. Lectus sed sed et
              cras. Placerat non ultrices sem proin a. Vel pellentesque gravida
              imperdiet sit vitae diam tincidunt. Dignissim ridiculus rhoncus
              molestie lectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
