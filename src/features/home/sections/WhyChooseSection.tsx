const features = [
  {
    value: "UK",
    title: "Manufacturing Excellence",
    description:
      "Designed and manufactured in the United Kingdom with strict quality standards.",
  },
  {
    value: "Global",
    title: "Worldwide Supply",
    description:
      "Serving steel mills and industrial operations across international markets.",
  },
  {
    value: "Custom",
    title: "Engineered Solutions",
    description:
      "Tailor-made blade solutions built around customer requirements.",
  },
  {
    value: "Repair",
    title: "Blade Refurbishment",
    description:
      "Extending blade lifespan through professional servicing and sharpening.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Why Choose Sheffield
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
              Trusted Industrial Cutting
              <span className="block text-[#0A4A9E]">
                Solutions Worldwide
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Sheffield Industrial Saws manufactures and services industrial
              saw blades used in steel mills and engineering operations across
              the world, combining manufacturing expertise with dependable
              support.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 text-4xl font-bold text-[#0A4A9E]">
                  {item.value}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};