"use client" 

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import ProjectPreviewModal from "@/components/ProjectPreviewModal";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Curated Commerce",
    subtitle: "UX/UI • eCommerce Optimization • Conversion",
    brand: "Urban Barn",
    image: "/images/work-1.jpg",
description:"Redesigning the product listing experience through a new grid system and swipeable product imagery to reduce friction, improve product discovery, and increase conversion.",    slug: "curated-commerce",
    previewImages: [
  "/projects/ecommerce/1.webp",
  "/projects/ecommerce/2.gif",
  "/projects/ecommerce/3.webp",
  "/projects/ecommerce/4.gif",
  "/projects/ecommerce/5.webp",
  "/projects/ecommerce/6.gif",]
  },

  {
    title: "Customer Journeys",
    subtitle: "Storytelling • Content Strategy • Product Discovery",
    brand: "Urban Barn",
    image: "/images/work-2.jpg",
    description: "Designing a scalable ecosystem of homepage experiences, landing pages, and seasonal campaigns that improved product discovery and created more engaging customer journeys across the site.",
     slug: "customer-journeys",
      previewImages: [
  "/projects/customer-journeys/1.webp",
  "/projects/customer-journeys/2.webp",
  "/projects/customer-journeys/3.gif",
  "/projects/customer-journeys/4.gif",
  "/projects/customer-journeys/5.webp",
  "/projects/customer-journeys/6.webp",]
  },


  {
    title: "Brand Systems",
    subtitle: "Art Direction • Web • Product Launches",
    brand: "Prodigy Wildfire Solutions",
    description:"Building cohesive digital systems across web, email, and product experiences to strengthen brand consistency.",
    image: "/images/work-3.jpg",
    slug: "brand-systems",
    comingSoon: true,
    previewImages: [
  "/projects/brand-systems/1.webp",
  "/projects/brand-systems/2.gif",
  "/projects/brand-systems/3.webp",
  "/projects/brand-systems/4.webp",]
  },

  {
    title: "Email Evolution",
    subtitle: "Lifecycle Design • CRM Systems • Strategy",
    brand: "Urban Barn",
    description: "Reimagining email experiences through modular design systems and customer-centered storytelling.",
    image: "/images/work-4.jpg",
    slug: "email-evolution",
    comingSoon: true,
    previewImages: [
  "/projects/email/1.webp",
  "/projects/email/2.webp",
  "/projects/email/3.webp",
  "/projects/email/4.webp",]
  },

  {
    title: "AI Product Design",
    subtitle: "UX/UI Design • Prototyping",
    brand: "Outkome Catalyst",
    description:"Exploring AI-powered products through rapid experimentation, interaction design, and product thinking.",
    image: "/images/work-5.jpg",
    slug: "ai-product-design",
    comingSoon: true,
    previewImages: [
  "/projects/ai/1.webp",
  "/projects/ai/2.webp",]
  },

  {
    title: "Meta Ads Strategy",
    subtitle: "Creative Strategy • Paid Media",
    brand: "Prodigy Wildfire Solutions",
    description: "Crafting high-performing campaign concepts and digital assets that blend storytelling with measurable results.",
    image: "/images/work-6.jpg",
    slug: "meta-ads-strategy",
    comingSoon: true,
    previewImages: [
  "/projects/ads/1.webp",
  "/projects/ads/2.webp",
  "/projects/ads/3.webp",
  "/projects/ads/4.webp",
  "/projects/ads/5.webp",
   "/projects/ads/6.webp",
]
  },

  
]

export default function SelectedWork() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isDesktop, setIsDesktop] = useState(false)
  const [selectedProject, setSelectedProject] =
  useState<(typeof projects)[0] | null>(null);
  const router = useRouter();
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
          max-w-[18ch]
        "
      style={{
 fontFamily: "Inter, sans-serif",
      letterSpacing: "-0.08em",
}}

      >
      Curated digital experiences, customer journeys, and
    <span
    className="italic"
    style={{
      fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em",
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
 {/* LEFT ARROW */}
  {current > 0 && (
    <button
      onClick={() => setCurrent(current - 1)}
      className="
        absolute
        left-[-15px]
        top-[35%]
        -translate-y-1/2
        z-20
        w-12
        h-20
        rounded-r-2xl
        bg-[#F7F4FF]/90
        backdrop-blur-sm
        text-[#AAAAA9]
        text-4xl
        flex
        items-center
        justify-center
        shadow-sm
        hover:bg-white
        transition-all
        duration-300
      "
    >
      ‹
    </button>
  )}

  {/* RIGHT ARROW */}
  {current < projects.length - 3 && (
    <button
      onClick={() =>
        setCurrent(
          Math.min(current + 1, projects.length - 3)
        )
      }
      className="
        absolute
        right-[-15px]
        top-[35%]
        -translate-y-1/2
        z-20
        w-12
        h-20
        rounded-l-2xl
        bg-[#F7F4FF]/90
        backdrop-blur-sm
        text-[#AAAAA9]
        text-4xl
        flex
        items-center
        justify-center
        shadow-sm
        hover:bg-white
        transition-all
        duration-300
      "
    >
      ›
    </button>
  )}

  {/* TRACK */}
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
            <button
   key={index}
  onClick={() => setSelectedProject(project)}
  className="
    w-[85vw]
    md:w-[calc(50%-12px)]
    xl:w-[30.5%]
    flex-shrink-0
    text-left
    group
  "
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
                  <div className="p-5">

                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 mb-4">
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

              </button>
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

   <button
  key={index}
onClick={() => {
  if (project.slug === "customer-journeys") {
    router.push("/customer-journeys");
    return;
  }

  setSelectedProject(project);
}}
  className="
    w-[85vw]
    md:w-[calc(50%-12px)]
    xl:w-[30.5%]
    flex-shrink-0
    text-left
    group
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

    </button>

  ))}

</div>

<ProjectPreviewModal
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>
    </section>
  )
}