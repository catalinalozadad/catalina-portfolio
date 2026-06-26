"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isCaseStudy = pathname !== "/";
  return (
    <>
      {/* NAV */}
  {/* MOBILE MENU */}
{menuOpen && (

  <div
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
          href={isCaseStudy ? "/#selected-work" : "#selected-work"}
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
         href={isCaseStudy ? "/#about" : "#about"}
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
          href={isCaseStudy ? "/#journefy" : "#journefy"}
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
         href={isCaseStudy ? "/#footer" : "#footer"}
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

    </div>

  )}


<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#F7F3EE]/10 border-b border-black/5">

  <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5">

    {/* NAME */}

<Link
  href="/"
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
</Link>

    {/* DESKTOP NAV */}
    <div className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.14em] uppercase">

      <a
        href={isCaseStudy ? "/#selected-work" : "#selected-work"}
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
         href={isCaseStudy ? "/#about" : "#about"}
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
  href={isCaseStudy ? "/#journefy" : "#journefy"}
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
       href={isCaseStudy ? "/#footer" : "#footer"}
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
    </>
  );
}