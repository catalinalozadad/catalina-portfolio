import {
  FileText,
  LayoutGrid,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

export default function ScaleHighlights() {
  const stats = [
    {
      value: "40+",
      label: "Pages Curated",
      description: "Homepage, PLPs, landing pages and campaign experiences.",
      icon: FileText,
    },
    {
      value: "8+",
      label: "Core Templates",
      description: "Reusable layouts built for consistency and scale.",
      icon: LayoutGrid,
    },
    {
      value: "4",
      label: "Seasonal Launches",
      description: "Spring, Summer, Fall and Holiday campaigns.",
      icon: CalendarDays,
    },
    {
      value: "120%",
      label: "Increase in Key Events",
      description: "Driven through merchandising and journey optimization.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="
              bg-white
              border
              border-[#ECE7E3]
              rounded-[24px]
              p-5 md:p-6
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            {/* ICON */}
            <div
              className="
                w-14
                h-14
                rounded-full
                bg-[#E9D8FD]
                
                flex
                items-center
                justify-center
                mb-5
              "
            >
              <Icon
                size={22}
                strokeWidth={1.8}
                className="text-[#1A1717]"
              />
            </div>

            {/* NUMBER */}
            <p
              className="
                text-[42px]
                leading-none
                tracking-[-0.04em]
                text-[#1A1717]
              "
            >
              {stat.value}
            </p>

            {/* TITLE */}
            <h3
              className="
                mt-3
                text-[20px]
                leading-tight
                text-[#1A1717]
              "
            >
              {stat.label}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-2
                text-[14px]
                leading-relaxed
                text-[#667085]
              "
            >
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}