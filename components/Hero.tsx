"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
  id="top"
  className="min-h-screen bg-white relative overflow-hidden">

  {/* NAV */}
  {/* MOBILE MENU */}
<AnimatePresence>

  {menuOpen && (

    <motion.div
 className="
  fixed
  top-[72px]
  left-0
  w-full
  bg-transparent
  backdrop-blur-xl
  z-40
  md:hidden
"
    >

      <div
  className="
    mx-4
    mt-4
    rounded-3xl
    border
    overflow-hidden
    border-white/20
    backdrop-blur-none
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    flex
    flex-col
    px-6
    pt-8 pb-12
    gap-6
  "
>

        <a
          href="#selected-work"
          onClick={() => setMenuOpen(false)}
          className="
            uppercase
            tracking-[0.14em]
            text-[13px]
            text-[#171414]
          "
        >
          Projects       </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="
            uppercase
            tracking-[0.14em]
            text-[13px]
            text-[#171414]
          "
        >
          About
        </a>

        <a
          href="#journefy"
          onClick={() => setMenuOpen(false)}
          className="
            uppercase
            tracking-[0.14em]
            text-[13px]
            text-[#171414]
          "
        >
          Journe
           <span
    className="italic font-bold inline-block"
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.25em",
      textTransform: "none",
      marginLeft: "-1px",
    }}
  >
    fy
  </span>
        </a>

        <a
          href="#footer"
          onClick={() => setMenuOpen(false)}
          className="
            mt-2
            inline-flex
            items-center
            justify-center
            px-6
            py-3
            rounded-full
            bg-[#BA94F9]
            text-[#FFFFFF]
            uppercase
            tracking-[0.14em]
            text-[12px]
            font-medium
          "
        >
          Contact
        </a>

      </div>

    </motion.div>

  )}

</AnimatePresence>

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#F7F3EE]/10 border-b border-black/5">

  <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5">

    {/* NAME */}
    <a
      href="#top"
      className="
        text-[15px]
        md:text-[16px]
        font-semibold
        tracking-[0.1em]
        uppercase
        text-[#1A1717]
      "
    >
      Catalina Lozada
    </a>

    {/* DESKTOP NAV */}
    <div className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.14em] uppercase">

      <a
        href="#selected-work"
        className="
          font-medium
          text-[#1A1717]
          hover:text-[#BA94F9]
          transition-all
          duration-300
        "
      >
        Projects
      </a>

      <a
        href="#about"
        className="
          font-medium
          text-[#1A1717]
          hover:text-[#BA94F9]
          transition-all
          duration-300
        "
      >
        About
      </a>

    <a
  href="#journefy"
  className="
    font-medium
    text-[#1A1717]
    hover:text-[#BA94F9]
    transition-all
    duration-300
  "
>
  Journe
  <span
    className="italic font-bold inline-block"
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.25em",
      textTransform: "none",
      marginLeft: "-1px",
    }}
  >
    fy
  </span>
</a>

      <a
        href="#footer"
        className="
          inline-flex
          items-center
          justify-center
          px-7
          py-3
          rounded-full
          border
          border-[#BA94F9]
          text-[#BA94F9]
          uppercase
          tracking-[0.14em]
          text-[12px]
          font-medium
          hover:bg-[#BA94F9]
          hover:text-white
          transition-all
          duration-300
        "
      >
        Contact
      </a>

    </div>

    {/* MOBILE HAMBURGER */}
   {/* MOBILE HAMBURGER */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    md:hidden
    flex
    items-center
    justify-center
    w-12
    h-12
    rounded-full
    border
    border-black/10
    bg-white/20
    backdrop-blur-xl
    hover:border-black/20
    transition-all
    duration-300
  "
>

  <div className="flex flex-col justify-center gap-1.5">

    <span
      className={`
        w-5
        h-[1.5px]
        bg-[#1A1717]
        rounded-full
        transition-all
        duration-300

        ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}
      `}
    />

    <span
      className={`
        w-5
        h-[1.5px]
        bg-[#1A1717]
        rounded-full
        transition-all
        duration-300

        ${menuOpen ? "opacity-0" : ""}
      `}
    />

    <span
      className={`
        w-5
        h-[1.5px]
        bg-[#1A1717]
        rounded-full
        transition-all
        duration-300

        ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
      `}
    />

  </div>

</button>

  </div>

</nav>


      {/* HERO */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 pt-28 md:pt-32">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

            
{/* LEFT — EDITORIAL GRID */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="order-2 lg:order-1"
>

  {/* DESKTOP GRID */}
  <div className="hidden md:grid grid-cols-2 gap-4">

    {/* LEFT COLUMN */}
    <div className="space-y-4">

      <img
        src={images[0]}
        className="w-full h-[400px] object-cover rounded-2xl brightness-[0.98] contrast-[0.98] saturate-[0.92]"
      />

      <img
        src={images[1]}
        className="w-full h-[260px] object-cover rounded-2xl brightness-[0.98] contrast-[0.98] saturate-[0.92]"
      />

    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-4">

      <img
        src={images[2]}
        className="w-full h-[260px] object-cover rounded-2xl brightness-[0.98] contrast-[0.98] saturate-[0.92]"
      />

      <img
        src={images[3]}
        className="w-full h-[400px] object-cover rounded-2xl brightness-[0.98] contrast-[0.98] saturate-[0.92]"
      />

    </div>

  </div>

 {/* MOBILE VERTICAL CAROUSEL */}
<div className="md:hidden overflow-hidden h-[760px] relative">

  <motion.div
    animate={{
      y: ["0%", "-50%"],
    }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex flex-col gap-4"
  >

    {[
      images[0],
      images[1],
      images[3],
      images[2],
      images[0],
      images[1],
      images[3],
      images[2],
    ].map((image, index) => {

      const isShort = index % 4 === 1
      const isNatural = index % 4 === 3

      return (
        <img
          key={index}
          src={image}
          className={`
            w-full
            object-cover
            object-center
            rounded-2xl
            brightness-[0.98]
            contrast-[0.98]
            saturate-[0.92]

            ${
              isNatural
                ? "h-auto"
                : isShort
                ? "h-[260px]"
                : "h-[400px]"
            }
          `}
        />
      )
    })}

  </motion.div>

</div>

</motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
           className="
  order-1 lg:order-2 sticky top-32 pb-16 lg:pb-0"
          >

            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
              Product Design • UX/UI • Digital Experiences
            </p>

 <h1
  className="
    text-[56px]
    sm:text-[64px]
    md:text-[96px]
    leading-[0.92]
    md:leading-[0.88]
    tracking-[-0.05em]
    text-[#1A1717]
  "
>
  <span
    className="italic"
    style={{
      fontFamily: "'Playfair Display', serif",
    }}
  >
    Designing
  </span>

  <br />

  <span
    style={{
      fontFamily: "Inter, sans-serif",
      letterSpacing: "-0.08em",
    }}
  >
    thoughtful
  </span>

  <br />

  <span
    className="text-[#BDB8B4]"
    style={{
      fontFamily: "Inter, sans-serif",
      letterSpacing: "-0.08em",
    }}
  >
    experiences
  </span>

  <span className="text-[#BA94F9]">
    .
  </span>
</h1>

            <p className="mt-8 text-[17px] text-gray-500 leading-[1.8] max-w-md">
Senior Product Designer and UX strategist creating intuitive digital experiences that balance user needs, business goals, and technical realities. Specializing in customer journeys, design systems, eCommerce, and scalable digital products.            </p>

            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-10 flex items-center gap-8 text-sm"
>

  <a
    href="#about"
   className="group inline-flex items-center gap-2 font-normal hover:font-medium hover:gap-3 hover:text-[rgb(186,148,249)] active:opacity-60 transition-all duration-300"
  >
    About me
    <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
  ↓
</span>
  </a>

  <a
    href="#selected-work"
className="group inline-flex items-center gap-2 text-gray-500 font-normal hover:font-medium hover:gap-3 hover:text-[rgb(186,148,249)] active:opacity-60 transition-all duration-300">    Selected Projects
    <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
  ↓
</span>
  </a>

</motion.div>

          </motion.div>

        </div>

      </div>


{/* MOBILE SCROLL */}
<div className="lg:hidden max-w-[1500px] mx-auto px-6 md:px-12 pt-6 pb-10 flex justify-end">

  <a
    href="#selected-work"
    className="
      group
      flex
      items-center
      justify-center
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
    "
  >
    <span
      className="
        text-2xl
        transition-transform
        duration-300
        group-hover:translate-y-1
      "
    >
      ↓
    </span>
  </a>

</div>

{/* DESKTOP SCROLL */}
<a
  href="#selected-work"
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
      group-hover:translate-y-1
    "
  >
    ↓
  </span>
</a>

    </section>
  )
}
