"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "Curated Commerce",
    subtitle: "UX/UI • eCommerce Optimization",
    brand: "Urban Barn",
    image: "/images/work-1.jpg",
    link: "#",
  },

  {
    title: "Customer Journeys",
    subtitle: "Storytelling • Strategy • Revenue Optimization",
    brand: "Urban Barn",
    image: "/images/work-2.jpg",
    link: "#",
  },

  {
    title: "Brand Systems",
    subtitle: "Art Direction • Web • Email • App Launch",
    brand: "Prodigy Wildfire Solutions",
    image: "/images/work-3.jpg",
    link: "#",
  },

  {
    title: "Email Evolution",
    subtitle: "Lifecycle Design • CRM Systems • Strategy",
    brand: "Urban Barn",
    image: "/images/work-4.jpg",
    link: "#",
  },

  {
    title: "AI Product Design",
    subtitle: "UX/UI Design • Prototyping",
    brand: "Outkome Catalyst",
    image: "/images/work-5.jpg",
    link: "#",
  },

  {
    title: "Meta Ads Strategy",
    subtitle: "Creative Strategy • Paid Media",
    brand: "Prodigy Wildfire Solutions",
    image: "/images/work-6.jpg",
    link: "#",
  },

  
]

export default function SelectedWork() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isDesktop, setIsDesktop] = useState(false)
useEffect(() => {

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1280)
  }

  handleResize()

  window.addEventListener("resize", handleResize)

  return () => window.removeEventListener("resize", handleResize)

}, [])

 
  return (


    <section
  id="selected-work"
  className="pt-12 md:pt-32 pb-32 px-6 md:px-12 bg-white overflow-hidden border-t border-black/5"
>

      <div className="max-w-[1500px] mx-auto flex flex-col gap-16 gap-16 items-start">

        {/* HEADER */}
<div className="w-full">

  {/* TOP ROW */}
  <div className="flex items-start justify-between gap-10">

    {/* LEFT CONTENT */}
    <div className="max-w-[1200px]">

      <p className="text-xs uppercase tracking-[0.25em] text-[#B470E7] mb-6">
        Selected Projects
      </p>

      <h2
        className="
          text-[40px]
          md:text-[58px]
          leading-[1.04]
          tracking-[-0.02em]
          text-[#1A1717]
          max-w-[22ch]
        "
      style={{
  fontFamily: "'Lastik', sans-serif",
}}

      >
      Curated digital experiences, customer journeys, and
    <span
    className="italic"
    style={{
      fontFamily: "'Playfair Display', serif",
    }}
  > human insight.
   
  </span>  
 
      </h2>

    </div>

    {/* ABOUT LINK */}
<div className="md:pb-2 md:pr-6 hidden md:self-end md:flex">

  <a
    href="#about"
    className="
      group
      inline-flex
      items-center
      gap-3
      text-sm
      text-[#1A1717]
      hover:text-[#B470E7]
      transition-all
      duration-500
      flex-shrink-0
    "
  >
    About me

    <span
      className="
        text-lg
        transition-all
        duration-500
        group-hover:translate-y-1
        group-hover:text-[#B470E7]
      "
    >
      ↓
    </span>

  </a>

</div>
  </div>

</div>
        

        {/* RIGHT SIDE */}
        <div className="relative overflow-hidden hidden md:block">

          {/* TRACK */}
          <motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.08}
  whileTap={{ cursor: "grabbing" }}

  onDragEnd={(event, info) => {
    const threshold = 100

    if (
      info.offset.x < -threshold &&
      current < (isDesktop ? projects.length - 3 : projects.length - 2)
    ) {
      setCurrent(current + 1)
    }

    if (info.offset.x > threshold && current > 0) {
      setCurrent(current - 1)
    }
  }}

  animate={{
              x: isDesktop
  ? `-${Math.min(current, projects.length - 3) * 33.5}%`
  : `-${Math.min(current, projects.length - 2) * 51}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex gap-6 cursor-grab"
          >

            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="w-[85vw] md:w-[calc(50%-12px)] xl:w-[calc(32%-16px)] flex-shrink-0 flex-shrink-0 flex-shrink-0 group"
              >

                {/* CARD */}
                <div
  className="
    bg-[#f7f7f5]
    rounded-3xl
    overflow-hidden
    transition-all
    duration-700
    group-hover:-translate-y-1
    group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
  "
>

                  {/* IMAGE */}
                  <div className="relative aspect-[1/0.88] overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 mb-6">
                      {project.subtitle}
                    </p>

                   <div className="flex items-center justify-between mt-6">

  <p className="text-[11px] uppercase tracking-[0.18em] text-[#BA94F9]">
    {project.brand}
  </p>

  <div
    className="
      w-10
      h-10
      rounded-full
      border
      border-[#E5E3DF]
      flex
      items-center
      justify-center
      text-[#AAAAA9]
      text-base
      transition-all
      duration-300
      group-hover:text-[#CBB7F7]
      group-hover:border-[#CBB7F7]
      group-hover:translate-x-1
    "
  >
    →
  </div>

</div> </div>

                </div>

              </a>
            ))}


          </motion.div>

          

          {/* NAVIGATION HINT + DOTS */}
<div className="w-full flex flex-col items-center mt-10">

  <p
    className="
      text-[11px]
      uppercase
      tracking-[0.22em]
      text-[#AAAAA9]
      mb-4
    "
  >
   Explore projects <span className="ml-1 inline-block animate-pulse">
  →
</span>
  </p>

  <div className="flex justify-center items-center gap-2">

  {projects
  .slice(0, isDesktop ? projects.length - 2 : projects.length - 1)
  .map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`h-2 rounded-full transition-all duration-300 ${
        current === index
          ? "w-8 bg-black"
          : "w-2 bg-gray-300 hover:bg-gray-500"
      }`}
      aria-label={`Go to project ${index + 1}`}
    />
  ))}

</div>

        </div>

      </div>
         </div>

      {/* MOBILE STACK */}
<div className="md:hidden flex flex-col gap-6 mt-10">

  {projects.map((project, index) => (

    <a
      key={index}
      href={project.link}
      className="
  group
  transition-all
  duration-700
  active:scale-[0.98]
"
    >

      <div className="bg-[#f7f7f5] rounded-3xl overflow-hidden">

        {/* IMAGE */}
<div className="relative aspect-[1/0.88] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

        </div>

        {/* CONTENT */}
        <div className="p-6">

          <h3 className="text-2xl font-semibold tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-gray-500 mb-6">
            {project.subtitle}
          </p>
          
                   <div className="flex items-center justify-between mt-6">

  <p className="text-[11px] uppercase tracking-[0.18em] text-[#BA94F9]">
    {project.brand}
  </p>
  </div>

          {/* CTA */}
<div className="flex items-center justify-between pt-6">

  <div className="inline-flex items-center gap-2 text-sm">
    View Project
  </div>

  <div
  className="
    w-10
    h-10
    rounded-full
    border
    border-[#CBB7F7]
    flex
    items-center
    justify-center
    text-[#AAAAA9]
    text-base
    transition-all
    duration-300
    group-hover:text-[#CBB7F7]
    group-hover:border-[#CBB7F7]
    group-hover:translate-x-1
  "
>
  →
</div>

</div>

        </div>

      </div>

    </a>

  ))}

</div>

    </section>
  )
}