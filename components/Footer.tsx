"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
<footer
  id="footer"
  className="bg-black text-white px-6 md:px-12 py-20 md:py-28 overflow-hidden"
>
      <div className="max-w-[1600px] mx-auto">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
<a
  href="mailto:catalinalozada@gmail.com"
  className="group inline-flex items-end gap-4 text-[12vw] md:text-[8vw] md:text-[8vw] leading-[0.9] tracking-tight font-semibold active:opacity-60 transition-all duration-500"
>

  <span className="relative block">

    {/* DEFAULT TEXT */}
    <span className="block text-[#F7F0ED] transition-opacity duration-500 group-hover:opacity-0">
      Let’s connect and create
    </span>

    {/* IMAGE HOVER TEXT */}
    <span
      className="absolute inset-0 opacity-0 text-[#F6F1EB] transition-opacity duration-500 group-hover:opacity-100 text-transparent bg-clip-text bg-cover bg-center bg-[length:140%]"
      style={{
        backgroundImage: "url('/images/about-editorial.jpg')",
      }}
    >
      Let’s connect and create
    </span>

  </span>

  <span className="text-[5vw] md:text-[2vw] text-[#CBB7F7] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1">
    ↗
  </span>

</a>
        </motion.div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* NAME */}
          <div className="flex items-center gap-3">

    <img
    src="images/footer-icon.png"
    alt="Catalina Lozada"
    className="w-7 h-7 rounded-full"
  />

  <div className="text-[15px] text-[#F7F0ED] uppercase tracking-wide">
    Catalina Lozada
  </div>

</div>

          {/* NAV */}
<div className="flex flex-wrap gap-x-8 gap-y-4 text-[15px] text-white/60">

  {/* WORKS */}
  <a
    href="#selected-work"
    className="group inline-flex items-center gap-2 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    Works
  </a>

  {/* ABOUT */}
  <a
    href="#about"
    className="group inline-flex items-center gap-2 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    About
  </a>

 <div className="flex gap-8 w-full md:w-auto">

  {/* CONTACT */}
  <a
    href="mailto:catalinalozada@gmail.com"
    className="group inline-flex items-center gap-2 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    Get in touch

    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#CBB7F7]">
      ↗
    </span>
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/catalina-lozada/"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 font-normal hover:font-medium hover:gap-3 hover:text-[#CBB7F7] active:opacity-60 transition-all duration-300"
  >
    LinkedIn

    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#CBB7F7]">
      ↗
    </span>
  </a>

</div>
</div>

        </div>

      </div>

    </footer>
  )
}