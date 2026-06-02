"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
  id="about"
className="py-20 md:py-32 px-6 md:px-12 bg-white"
>

      <div className="max-w-[1500px] mx-auto  relative grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-12 md:gap-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
            About Me
          </p>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

        {/* INTRO BLOCK */}

<div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mb-16">

  {/* PORTRAIT */}
  <div
  className="relative w-[200px] h-[250px] shrink-0 overflow-hidden"
  style={{
    borderRadius: "78px 28px 78px 28px"
  }}
>
    <img
  src="/images/catalina-profile.jpg"
  alt="Catalina Lozada"
  className="
    w-full
    h-full
    object-cover
    object-[center_12%]
    transition-transform
    duration-700
    hover:scale-105
  "
/>
  </div>

  {/* TEXT CONTENT */}
  <div className="flex-1">

    {/* NAME */}
    <h2
      className="
        text-4xl
        whitespace-nowrap
        md:text-7xl
        leading-none
        tracking-tight
        font-semibold
        mb-8
        text-transparent
        bg-clip-text
        bg-cover
        bg-center
        bg-[length:140%]
      "
      style={{
        backgroundImage: "url('/images/about-editorial.jpg')",
      }}
    >
      Catalina Lozada
    </h2>

    {/* SUPPORTING HEADING */}
    <h3
      className="
        text-[25px]
        md:text-[40px]
        leading-[1.15]
        tracking-tight
        text-gray-700
        max-w-4xl
      "
    >
      Applying industrial design thinking to connected experiences.
    </h3>

  </div>

</div>

          {/* SUPPORTING CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div>

              <p className="text-gray-500 leading-[1.8]">

My career began in industrial design, where I learned to understand people, solve real problems, and design with intention. From startups to enterprise organizations, I've led projects across products, brands, and customer experiences with a focus on usability, strategy, and meaningful outcomes.
              </p>

            </div>

            <div>

              <p className="text-gray-500 leading-[1.8]">

                Over the past 15 years, I've evolved that foundation across digital experiences, UX, and product design. Expanding my understanding of development and implementation helped me bridge the gap between strategy and execution, strengthening my ability to design scalable systems that balance user needs, business goals, and technical realities.

              </p>

            </div>

          </div>

         {/* CTA LINKS */}
<div className="mt-20 flex flex-wrap items-center gap-10 text-sm">

  {/* CONTACT */}
  <a
    href="mailto:catalinalozada@gmail.com"
    className="group inline-flex items-center gap-2 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    Contact me

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

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/catalina-lozada/"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 text-gray-500 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    LinkedIn

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

  {/* SELECTED WORK */}
  <a
    href="#selected-work"
    className="group inline-flex items-center gap-2 text-gray-500 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    Selected Projects

    <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1">
      ↑
    </span>
  </a>

</div>
{/* EDITORIAL IMAGE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24 overflow-hidden rounded-3xl"
>


</motion.div>

        </motion.div>
{/* DESKTOP SCROLL TO TOP */}
<a
  href="#top"
  className="
    hidden
    lg:flex
    items-center
    justify-center
    absolute
    bottom-8
    right-8
    w-14
    h-14
    rounded-full
    bg-[#CBB7F7]/40
    backdrop-blur-md
    text-[#1A1717]
    shadow-[0_10px_30px_rgba(203,183,247,0.25)]
    hover:bg-[#CBB7F7]
    active:scale-95
    transition-all
    duration-300
    group
  "
>
  <span
    className="
      text-2xl
      transition-transform
      duration-300
      group-hover:-translate-y-1
    "
  >
    ↑
  </span>
</a>
      </div>

    </section>
  )
}