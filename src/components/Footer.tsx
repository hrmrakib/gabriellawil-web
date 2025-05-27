import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto background-color-[#201309] bg-[url('/footer-bg.png')] bg-cover bg-center h-[562px] text-white">
      <div className='relative'>
        <div className='container mx-auto px-4 py-12 md:px-6 md:py-16'>
          <div className='grid gap-10 md:grid-cols-4 pt-10'>
            {/* Logo and Social Media */}
            <div className='flex flex-col gap-6'>
              <Link href='/' className='flex items-center gap-2'>
                <Image
                  src='/logo.svg'
                  width={500}
                  height={500}
                  alt='Logo'
                  className=''
                />
              </Link>
              <div className='mt-2 flex flex-wrap gap-6'>
                <Link
                  href='/'
                  className='h-[27px] w-[116px] flex items-center justify-center gap-1.5 px-3 rounded-full border border-[#F7941E] text-orange-500 transition-colors hover:bg-orange-500 hover:text-white cursor-pointer'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 16 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z'
                      fill='#C8C5C5'
                    />
                    <path
                      d='M8.88634 13.5965V9.13825H10.3735L10.6555 7.29519H8.88634V6.0967C8.88634 5.59313 9.13477 5.09964 9.92704 5.09964H10.7328V3.52851C10.7328 3.52851 10.0009 3.4043 9.30598 3.4043C7.84899 3.4043 6.89557 4.28722 6.89557 5.8852V7.29183H5.27409V9.13489H6.89557V13.5931H8.8897L8.88634 13.5965Z'
                      fill='black'
                    />
                  </svg>

                  <span className='text-[#FFFFFF] text-base'>Facebook</span>
                </Link>
                <Link
                  href='#'
                  className='h-[27px] w-[116px] flex items-center justify-center gap-1.5 px-3 rounded-full border border-[#F7941E] text-orange-500 transition-colors hover:bg-orange-500 hover:text-white cursor-pointer'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 16 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z'
                      fill='#C8C5C5'
                    />
                    <path
                      d='M4.79389 6.62719H6.17031V11.0452H4.79389V6.62719ZM5.4821 4.43164C5.92188 4.43164 6.27773 4.78749 6.27773 5.22727C6.27773 5.66706 5.92188 6.02291 5.4821 6.02291C5.04232 6.02291 4.68311 5.66706 4.68311 5.22727C4.68311 4.78749 5.03896 4.43164 5.4821 4.43164Z'
                      fill='black'
                    />
                    <path
                      d='M7.03314 6.62739H8.34913V7.23167H8.36592C8.55056 6.88253 8.99705 6.5166 9.66512 6.5166C11.055 6.5166 11.3135 7.42974 11.3135 8.62151V11.0453H9.9404V8.89679C9.9404 8.38315 9.93033 7.72516 9.22534 7.72516C8.52034 7.72516 8.40284 8.28244 8.40284 8.85986V11.0453H7.02979V6.62739H7.03314Z'
                      fill='black'
                    />
                  </svg>

                  <span className='text-[#FFFFFF] text-base'>Linkedin</span>
                </Link>
                <Link
                  href='#'
                  className='h-[27px] w-[116px] flex items-center justify-center gap-1.5 px-3 rounded-full border border-[#F7941E] text-orange-500 transition-colors hover:bg-orange-500 hover:text-white cursor-pointer'
                >
                  <svg
                    width='16'
                    height='17'
                    viewBox='0 0 16 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z'
                      fill='#C8C5C5'
                    />
                    <path
                      d='M10.2055 5.82422C9.93688 5.82422 9.71867 6.04243 9.71867 6.311C9.71867 6.57957 9.93688 6.79778 10.2055 6.79778C10.474 6.79778 10.6922 6.57957 10.6922 6.311C10.6922 6.04243 10.474 5.82422 10.2055 5.82422Z'
                      fill='black'
                    />
                    <path
                      d='M8.0337 6.44824C6.90235 6.44824 5.98251 7.36809 5.98251 8.49944C5.98251 9.63078 6.90235 10.5506 8.0337 10.5506C9.16505 10.5506 10.0849 9.63078 10.0849 8.49944C10.0849 7.36809 9.16505 6.44824 8.0337 6.44824ZM8.0337 9.81207C7.30857 9.81207 6.72107 9.22122 6.72107 8.49944C6.72107 7.77766 7.31192 7.18681 8.0337 7.18681C8.75548 7.18681 9.34633 7.77766 9.34633 8.49944C9.34633 9.22122 8.75548 9.81207 8.0337 9.81207Z'
                      fill='black'
                    />
                    <path
                      d='M9.66183 12.6626H6.33829C4.95852 12.6626 3.83724 11.5413 3.83724 10.1615V6.83796C3.83724 5.45819 4.95852 4.33691 6.33829 4.33691H9.66183C11.0416 4.33691 12.1629 5.45819 12.1629 6.83796V10.1615C12.1629 11.5413 11.0416 12.6626 9.66183 12.6626ZM6.33829 5.11912C5.39158 5.11912 4.61945 5.89126 4.61945 6.83796V10.1615C4.61945 11.1082 5.39158 11.8803 6.33829 11.8803H9.66183C10.6085 11.8803 11.3807 11.1082 11.3807 10.1615V6.83796C11.3807 5.89126 10.6085 5.11912 9.66183 5.11912H6.33829Z'
                      fill='black'
                    />
                  </svg>

                  <span className='text-[#FFFFFF] text-base'>Instagram</span>
                </Link>
                <Link
                  href='#'
                  className='h-[27px] w-[116px] flex items-center justify-center gap-1.5 px-3 rounded-full border border-[#F7941E] text-orange-500 transition-colors hover:bg-orange-500 hover:text-white cursor-pointer'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 16 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_175_56)'>
                      <path
                        d='M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z'
                        fill='#C8C5C5'
                      />
                      <path
                        d='M11.8875 7.48569C11.8875 6.54234 11.1254 5.78027 10.1821 5.78027H5.82117C4.87782 5.78027 4.11575 6.54234 4.11575 7.48569V9.51338C4.11575 10.4567 4.87782 11.2188 5.82117 11.2188H10.1821C11.1254 11.2188 11.8875 10.4567 11.8875 9.51338V7.48569ZM9.32264 8.65396L7.3688 9.62081C7.29158 9.6611 7.03308 9.60738 7.03308 9.5201V7.53269C7.03308 7.4454 7.29494 7.38833 7.37215 7.43197L9.24542 8.44918C9.32264 8.49282 9.40656 8.60696 9.32599 8.65061L9.32264 8.65396Z'
                        fill='black'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_175_56'>
                        <rect
                          width='16'
                          height='16'
                          fill='white'
                          transform='translate(0 0.5)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-[#FFFFFF] text-base'>YouTube</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='mb-4 text-2xl font-semibold'>Quick Link</h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/about'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms-condition'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    href='/trust-safety'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Trust & Safety
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className='mb-4 text-2xl font-semibold'>Features</h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/site-explorer'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Site Explorer
                  </Link>
                </li>
                <li>
                  <Link
                    href='/keyword-explorer'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Keyword Explorer
                  </Link>
                </li>
                <li>
                  <Link
                    href='/competitor-analysis'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Competitor Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href='/ai-strategy'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    AI Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/challenges'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Challenges & Leaderboard
                  </Link>
                </li>
                <li>
                  <Link
                    href='/plans'
                    className='text-lg text-[#FFFFFF] hover:text-orange-300'
                  >
                    Plans & Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className='mb-4 text-xl font-semibold'>Contact</h3>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <Mail className='mt-1 h-5 w-5 text-orange-500' />
                  <a
                    href='mailto:info@yourwebsite.com'
                    className='hover:text-orange-300'
                  >
                    info@yourwebsite.com
                  </a>
                </li>
                <li className='flex items-start gap-3'>
                  <Phone className='mt-1 h-5 w-5 text-orange-500' />
                  <a href='tel:866-566-0261' className='hover:text-orange-300'>
                    866-566-0261
                  </a>
                </li>
                <li className='flex items-start gap-3'>
                  <MapPin className='mt-1 h-5 w-5 text-orange-500' />
                  <span>2972 Westheimer Rd. Santa Ana</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rocket Illustration */}
        <div className='hidden md:block absolute bottom-0 left-0 w-24 md:w-44'>
          <Image
            src='/rocket.png'
            alt='Rocket Illustration'
            width={500}
            height={400}
          />
        </div>

        {/* Copyright */}
        <div className='h-[104px] flex items-center justify-center border-t border-[#5A4A35] py-4 text-center'>
          <p className='text-xl text-[#FFFFFF]'>
            Copyright © 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
