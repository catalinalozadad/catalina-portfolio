"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const insights = [
  {
    quote:
      "Catalina brings a rare balance of strategic thinking and refined visual execution across every project.",
    name: "Creative Partner",
    role: "Brand Strategy",
  },
  {
    quote:
      "Her ability to connect storytelling, UX, and business goals consistently elevated the customer experience.",
    name: "Marketing Lead",
    role: "eCommerce",
  },
  {
    quote:
      "Thoughtful, detail-oriented, and highly collaborative from concept to execution.",
    name: "Design Collaborator",
    role: "Creative Direction",
  },
  {
    quote:
      "Catalina approaches design systems with both emotional intelligence and strategic clarity.",
    name: "Product Team",
    role: "UX/UI",
  },
]

export default function Insights() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === insights.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 px-6 md:px-12 bg-[#f7f7f5] overflow-hidden">

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-16 items-start">

        {/* LEFT */}
        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-4">
            Selected Thoughts
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
            Reflections, collaborations, and creative direction.
          </h2>

          <p className="text-gray-500 leading-relaxed max-w-sm">

            A quieter section focused on collaboration, process, and the thinking behind the work.

          </p>

        </div>

        {/* RIGHT */}
        <div className="relative overflow-hidden">

          {/* TRACK */}
          <motion.div
            animate={{
              x: `-${current * 42}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex gap-6"
          >

            {[...insights, ...insights].map((item, index) => (
              <div
                key={index}
                className="min-w-[82%] md:min-w-[48%] bg-white rounded-3xl p-10 flex flex-col justify-between min-h-[360px]"
              >

                {/* QUOTE */}
                <div>

                  <span className="text-5xl text-gray-200 leading-none">
                    ”
                  </span>

                  <p className="text-2xl md:text-3xl leading-[1.25] tracking-tight mt-8">

                    {item.quote}

                  </p>

                </div>

                {/* FOOTER */}
                <div className="mt-16 border-t border-gray-100 pt-6">

                  <p className="font-medium">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    {item.role}
                  </p>

                </div>

              </div>
            ))}

          </motion.div>

          {/* DOTS */}
          <div className="flex items-center justify-center gap-3 mt-8">

            {insights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-black"
                    : "w-2 bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`Go to insight ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}