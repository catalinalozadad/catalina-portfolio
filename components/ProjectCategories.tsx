"use client"

import { motion } from "framer-motion"
import { LayoutGrid, Sparkles, Megaphone } from "lucide-react"


const categories = [
  {
    number: "01",
    title: "UX/UI Design",
    description:
      "Designing intuitive experiences rooted in strategy, systems thinking, and usability.",
    icon: "◫",
    color: "bg-[#E9D9FF]",
    link: "#selected-work",
  },

  {
    number: "02",
    title: "Brand Systems",
    description:
      "Creating cohesive visual identities across digital, print, and campaign experiences.",
    icon: "✦",
    color: "bg-[#FF6A21]",
    link: "#selected-work",
  },

  {
    number: "03",
    title: "Campaign Experience",
    description:
      "Building thoughtful customer journeys through storytelling and visual direction.",
    icon: "↗",
    color: "bg-[#E9D9FF]",
    link: "#selected-work",
  },
]

export default function ProjectCategories() {
  return (
    <section
  id="categories" className="py-20 md:py-32 px-6 md:px-12 bg-[#f7f7f5] relative">

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

    {/* LEFT */}
<div className="lg:w-[44%] flex flex-col justify-between">

  {/* EYEBROW */}
  <div>

    <p className="text-xs uppercase tracking-[0.25em] text-[#B470E7] mb-6">
      Approach
    </p>

    <h2
      className="
        text-[42px]
        md:text-[58px]
        leading-[1.02]
        tracking-[-0.02em]
        text-[#1A1717]
        max-w-[13ch]
      "
         style={{
  fontFamily: "'Lastik', sans-serif",
}}
    >
      Multidisciplinary design across digital, branding, and  <span
    className="italic"
    style={{
      fontFamily: "'Playfair Display', serif",
    }}
  >  experience systems.
   
  </span>  
    </h2>

    <p className="mt-8 text-[17px] leading-[1.9] text-[#5E6472] max-w-[52ch]">
      I combine strategic thinking with visual storytelling to create intentional experiences that connect brands with people and drive meaningful business impact.
    </p>

<a 
  href="#selected-work"
  className="
    group
    inline-flex
    items-center
    mt-16
    gap-2
    text-sm
    text-gray-500
    font-normal
    hover:font-medium
    hover:gap-3
    hover:text-[#BA94F9]
    active:opacity-60
    transition-all
    duration-300
  "
>
  Selected Work

  <span className="transition-transform duration-300 group-hover:-translate-y-1">
    ↑
  </span>

</a>

  </div>

</div>

  {/* RIGHT */}
<div className="lg:w-[56%] relative">

  {/* PURPLE BUTTON */}
  <a
    href="#About"
    className="
      hidden
      lg:flex
      absolute
      -top-24
      right-0
      w-14
      h-14
      rounded-full
      bg-[#EFEDEA]
      items-center
      justify-center
      text-[#1A1717]
      text-2xl
      transition-all
      duration-500
      hover:translate-y-1
      hover:bg-[#DFC8FF]
      z-20
    "
  >
    ↓
  </a>

  {/* CATEGORY CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
className="
  group
  bg-[#f8f8f6]
  rounded-[28px]
  border
  border-black/5
  hover:border-black/10
  transition-all
  duration-500
  p-8
  aspect-[1.1]
  flex
  flex-col
"            >

              <div className="flex flex-col gap-8">

  <div className="flex flex-col gap-8">

  {/* ICON */}
  <div
    className={`
      w-16
      h-16
      rounded-full
      flex
      items-center
      justify-center
      text-2xl
      ${category.color}
    `}
  >
    {category.icon}
  </div>

  {/* NUMBER */}
  <span className="text-sm tracking-[0.12em] text-[#A7A1B2]">
    {category.number}
  </span>

</div>

</div>

              {/* CONTENT */}
              <div className="flex flex-col gap-6 flex-1">

                

                {/* TITLE + DESCRIPTION */}
                <div>

                  <h3 className="text-3xl tracking-tight font-medium mb-4 transition-all duration-300 group-hover:text-[#DBD9D6]">
                    {category.title}
                  </h3>

                  <p className="text-gray-500 leading-[1.8] text-sm">
                    {category.description}
                  </p>

                  <a
  href={category.link}
  className="
    mt-auto
    pt-10
    inline-flex
    items-center
    gap-3
    text-sm
    text-[#1A1717]
    hover:text-[#DBD9D6]
    transition-all
    duration-500
    group
  "
>
  See projects

  <span
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    →
  </span>

</a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
        


      </div>
</div>
    </section>
  )
}