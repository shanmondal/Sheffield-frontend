import { ArrowRight } from "lucide-react";

import circularImg from "@/assets/images/circular.jpeg";
import bandsawImg from "@/assets/images/bandsaw.jpeg";
import repairImg from "@/assets/images/repair.jpeg";

const offerings = [
  {
    title: "Circular Saw Blades",
    description:
      "Hot Saw, Friction, TCT and Segmental blades manufactured for steel mills and demanding industrial cutting applications.",
    image: circularImg,
  },
  {
    title: "Bandsaw Blades",
    description:
      "High-performance industrial bandsaw blades engineered for precision cutting, fabrication and production environments.",
    image: bandsawImg,
  },
  {
    title: "Repair & Servicing",
    description:
      "Professional blade sharpening, refurbishment, retoothing and maintenance services to maximise blade performance.",
    image: repairImg,
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 lg:py-32 lg:pb-5">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#0A4A9E] md:text-sm">
            Products & Services
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Industrial Saw Blade Solutions
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            From precision-engineered circular saw blades to industrial
            bandsaw solutions and expert repair services trusted by steel
            mills worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {offerings.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden md:h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0A4A9E] transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};