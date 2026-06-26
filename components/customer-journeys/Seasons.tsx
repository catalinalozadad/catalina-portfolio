import Placeholder from "./Placeholder";
const seasons = [
  {
    name: "Spring",
    title: "Find Your Moment",
    image: "/projects/customer-journeys/spring.gif",
    metric:
      "Refreshed 40+ pages, campaign banners, navigation, and content imagery across the eCommerce ecosystem.",
  },
  {
    name: "Summer",
    title: "Passport to Home",
    image: "/projects/customer-journeys/summer.gif",
    metric:
      "Improved conversion performance through seasonal campaign optimization and merchandising enhancements.",
  },
  {
    name: "Fall",
    title: "Autumn Moods",
    image: "/projects/customer-journeys/fall.gif",
    metric:
      "Promotional campaigns consistently exceeded business goals through targeted merchandising and storytelling.",
  },
];

export default function Seasons() {
  return (
    <section className="pt-8 pb-0">
      {seasons.map((season, index) => (
        <div
          key={season.name}
          className={`max-w-[1400px] mx-auto px-8 lg:px-16 ${
  index !== seasons.length - 1 ? "mb-24" : "mb-0"
}`}
        >
          <div
            className={`grid lg:grid-cols-12 gap-12 items-center ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-9">
  <img
    src={season.image}
    alt={season.title}
    className="
      w-full
      aspect-[16/10]
      object-cover
      rounded-[32px]
      border
      border-[#E8E3DF]
      shadow-sm
    "
  />
</div>

            <div className="lg:col-span-3 text">
           
              <p className="uppercase tracking-[0.3em] text-xs text-[#C8B6FF] mb-4">
  {season.name}
</p>

<h3
  className="
    text-[34px]
    md:text-[48px]
    leading-[1.05]
    tracking-[-0.04em]
    text-[#1A1717]
  "
>
  {season.title}
</h3>

<p
  className="
    mt-4
    text-[15px]
    leading-[1.8]
    text-[#667085]
    max-w-[34ch]
  "
>
  {season.metric}
</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}