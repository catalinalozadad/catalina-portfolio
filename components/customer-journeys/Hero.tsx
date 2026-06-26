import Placeholder from "./Placeholder";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative max-w-[1400px] mx-auto px-8 lg:px-16 pt-32 pb-8">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="mb-8">
  <p className="text-[11px] uppercase tracking-[0.25em] text-[#B470E7]">
    URBAN BARN • UX/UI LEAD DESIGNER
  </p>

  <p className="text-[11px] uppercase tracking-[0.25em] text-[#A7A0B3] mt-2">
    2021–2025
  </p>
</div>

          <h2
        className="
         text-[52px]
md:text-[72px]
          leading-[1.04]
          tracking-[-0.02em]
          text-[#1A1717]
                "
      style={{
 fontFamily: "Inter, sans-serif",
      letterSpacing: "-0.08em",
}}

      >
      Customer
    <span
    className="italic"
    style={{
      fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em",
    }}
  > Journeys
   
  </span>  
 
      </h2>
      <div className="  w-full
  h-auto
  object-cover
  hover:scale-[1.01]
  transition-transform
  duration-700 lg:hidden mt-10 rounded-[22px] overflow-hidden">
  <Image
    src="/projects/customer-journeys/hero-image.jpg"
    alt="Urban Barn Fall Campaign"
    width={1920}
    height={1080}
    className="w-full h-auto object-cover"
    priority
  />
</div>
        </div>

        <div className="lg:col-span-5">
     <p className="mt-8 text-[17px] text-gray-500 leading-[1.8] max-w-md">
  Designing connected shopping experiences across Urban Barn's
  eCommerce ecosystem through seasonal launches, promotional campaigns,
  and product discovery experiences.
</p>
       <div className="mt-10 flex flex-wrap items-center gap-8 text-sm">
  <a
    href="/#selected-work"
    className="
      group
      inline-flex
      items-center
      gap-2
      text-gray-500
      font-normal
      hover:font-medium
      hover:gap-3
      hover:text-[rgb(186,148,249)]
      active:opacity-60
      transition-all
      duration-300
    "
  >
    Explore More Projects

   <svg
  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M8 7H17V16" />
</svg>
  </a>

  <a
    href="#scale"
    className="
      group
      inline-flex
      items-center
      gap-2
      text-gray-500
      font-normal
      hover:font-medium
      hover:gap-3
      hover:text-[rgb(186,148,249)]
      active:opacity-60
      transition-all
      duration-300
    "
  >
    Read Case Study

    <svg
  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M12 5V19" />
  <path d="M5 12L12 19L19 12" />
</svg>
  </a>
</div>

        </div>
        
      </div>
    

      <div
      
  id="hero-image"
  className="  w-full
  h-auto
  object-cover
  hover:scale-[1.01]
  transition-transform
  duration-700 
  hidden lg:block mt-10 rounded-[22px] overflow-hidden"
>
  <Image
    src="/projects/customer-journeys/hero-image.jpg"
    alt="Urban Barn Fall Campaign"
    width={1920}
    height={1080}
    className="w-full h-auto object-cover"
    priority
  />
</div>

    </section>
  );
}