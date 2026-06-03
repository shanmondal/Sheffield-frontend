import {
  Flame,
  Disc3,
  Scissors,
  Cog,
  Wrench,
  Factory,

} from "lucide-react";

const capabilities = [
  {
    title: "Hot Saw Blades",
    description:
      "Precision engineered hot saw blades for steel mills and high-temperature cutting applications.",
    icon: Flame,
  },
  {
    title: "Friction Saws",
    description:
      "High-performance friction saws designed for demanding industrial environments.",
    icon: Disc3,
  },
  {
    title: "TCT Blades",
    description:
      "Tungsten carbide tipped blades delivering exceptional cutting accuracy and lifespan.",
    icon: Scissors,
  },
  {
    title: "Segmental Blades",
    description:
      "Custom segmental saw solutions manufactured to exact client specifications.",
    icon: Cog,
  },
  {
    title: "Bandsaw Blades",
    description:
      "Reliable industrial bandsaw blades for production cutting and fabrication facilities.",
    icon: Factory,
  },
  {
    title: "Repair & Servicing",
    description:
      "Professional blade refurbishment, sharpening and maintenance services.",
    icon: Wrench,
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#0A4A9E] md:text-sm">
            Our Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Industrial Cutting Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base text-slate-600 md:text-lg">
            Manufacturing, servicing and supplying industrial saw blades
            trusted by steel mills and engineering operations worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4A9E] hover:shadow-xl"
            >
              {/* Number */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-[#0A4A9E]">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};