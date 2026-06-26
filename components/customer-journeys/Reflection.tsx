export default function Reflection() {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 lg:px-16 pt-20 pb-32">

      <div className="max-w-[800px]">
<div className="border-t border-[#E8E3DF] mb-20" />

        <p className="text-xs uppercase tracking-[0.25em] text-[#C8B6FF] mb-6">
          Reflection
        </p>

        <h2
          className="
            text-[40px]
            md:text-[58px]
            leading-[1.04]
            tracking-[-0.05em]
            text-[#1A1717]
            max-w-[18ch]
            mb-10
          "
        >
          Designing systems,
          <br />
          not just{" "}
          <span
            className="italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            pages.
          </span>
        </h2>

        <p
          className="
            text-[18px]
            leading-[1.9]
            text-[#667085]
          "
        >
          Building seasonal campaigns at scale reinforced the importance of
          creating reusable experiences rather than isolated pages. By aligning
          content, navigation, merchandising, and storytelling, the ecosystem
          became easier to manage, faster to launch, and more engaging for
          customers.
        </p>
<div className="mt-12 flex flex-wrap items-center gap-10">

  <a
    href="/"
    className="
      group
      inline-flex
      items-center
      gap-2
      text-[#667085]
      hover:text-[#B470E7]
      transition-all
      duration-300
    "
  >
    ← Back to Home
  </a>

  <a
     href="/#selected-work"
    className="
      group
      inline-flex
      items-center
      gap-2
      text-[#1A1717]
      hover:text-[#B470E7]
      transition-all
      duration-300
    "
  >
    Explore More Work
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </a>
<a
  href="#top"
  className="
    flex
    items-center
    justify-center
    absolute
    bottom-6
    right-6
    lg:bottom-12
    lg:right-16
    w-12
    h-12
    lg:w-14
    lg:h-14
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
    z-20
  "
>
  <span
    className="
      text-xl
      lg:text-2xl
      transition-transform
      duration-300
      group-hover:-translate-y-1
    "
  >
    ↑
  </span>
</a>
</div>
      </div>

    </section>
  );
}