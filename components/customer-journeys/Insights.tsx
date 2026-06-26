export default function Insights() {
  const insights = [
    {
      number: "01",
      title: "Product Discovery",
      description:
        "Customers relied heavily on category pages and promotional landing pages to navigate large assortments and discover products across the site.",
    },
    {
      number: "02",
      title: "Mobile Navigation",
      description:
        "With most browsing occurring on mobile devices, navigation and campaign entry points were simplified to help customers reach products faster.",
    },
    {
      number: "03",
      title: "Campaign Storytelling",
      description:
        "Seasonal campaigns combined merchandising and storytelling to create more engaging shopping experiences and support promotional goals.",
    },
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-8 lg:px-16 py-32">

      {/* Header */}
      <div className="max-w-[900px] mb-16 md:mb-20">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8B6FF] mb-6">
          Key Insights
        </p>

     <h2
  className="
    text-[40px]
    md:text-[58px]
    leading-[1.04]
    tracking-[-0.05em]
    text-[#1A1717]
    max-w-[22ch]
  "
>
  Design decisions informed by{" "}
  <span
    className="italic"
    style={{
      fontFamily: "'Playfair Display', serif",
      letterSpacing: "-0.02em",
    }}
  >
    customer behavior
  </span>
  <br />
  and business goals.
</h2>
      </div>

      {/* Insights */}
      <div className="space-y-12 md:space-y-16">

        {insights.map((item, index) => (
          <div key={item.number}>

            <div className="grid md:grid-cols-[120px_1fr] gap-8">

              {/* Number */}
              <div>
                <p
                  className="
                    text-[56px]
                    md:text-[80px]
                    leading-none
                    tracking-[-0.08em]
                    text-[#E8D9FF]
                    font-light
                  "
                >
                  {item.number}
                </p>
              </div>

              {/* Content */}
              <div className="pt-4 md:pt-8">
                <h3
                  className="
                  text-[28px]
                  md:text-[34px]
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-[#1A1717]
                    mb-6
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[18px]
                    leading-[1.9]
                    text-[#667085]
                    max-w-[60ch]
                  "
                >
                  {item.description}
                </p>
              </div>

            </div>

            {/* Divider */}
            {index !== insights.length - 1 && (
              <div className="border-t border-[#E8E3DF] mt-10 md:mt-12"></div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}