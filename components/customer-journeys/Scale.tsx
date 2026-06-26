import ScaleHighlights from "./ScaleHighlights";
export default function Scale() {
  return (
    <section id="scale" className="max-w-[1600px] mx-auto px-8 lg:px-16 pt-8 pb-24">
     <div className="mb-16 max-w-[1200px]">

  <p className="text-xs uppercase tracking-[0.25em] text-[#C8B6FF] mb-6">
    Scale
  </p>

  <h2
    className="
      text-[40px]
      md:text-[58px]
      leading-[1.04]
      tracking-[-0.05em]
      text-[#1A1717]
      max-w-[24ch]
    "
    style={{
      fontFamily: "Inter, sans-serif",
    }}
  >
    40+ pages curated across seasonal launches
     promotional campaigns, and  <span
      className="italic"
      style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "-0.02em",
      }}
    >
      {" "}product discovery.
    </span>
  
  </h2>

</div>
      <div className="rounded-[32px] overflow-hidden">
    {/* SCALE BOARD */}
<div className="rounded-[32px] overflow-hidden">

  {/* Mobile */}
  <div className="block md:hidden">
    <img
      src="/projects/customer-journeys/scale-board-mobile.png"
      alt="Customer journey ecosystem board"
      className="
        w-full
        rounded-[32px]
        border
        border-[#E8E3DF]
        shadow-sm
      "
    />
  </div>

  {/* Desktop */}
  <div className="hidden md:block">
    <img
      src="/projects/customer-journeys/scale-board.png"
      alt="Customer journey ecosystem board"
      className="
        w-full
        rounded-[32px]
        border
        border-[#E8E3DF]
        shadow-sm
      "
    />
  </div>

</div>

<ScaleHighlights />
      </div>
    </section>
  );
}
