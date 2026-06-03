import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { REPAIR_MACHINES } from "../repairMachines";

export const RepairMachineryPage = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
            Sheffield Industrial Saws
          </p>

          <h1 className="text-5xl font-bold text-slate-900">
            Repair Machinery
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Specialist machinery designed for sharpening, hardening,
            tensioning and maintaining industrial circular saw blades.
          </p>
        </div>
      </section>

      {/* MACHINES */}
      <section className="mx-auto max-w-7xl px-6 pb-10">

        <div className="grid gap-6 lg:grid-cols-2">
  {REPAIR_MACHINES.map((machine) => (
    <Link
      key={machine.slug}
      to={`/repair-machinery/${machine.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#0A4A9E] hover:shadow-lg md:flex-row"
    >
      {/* Image */}
      <div className="h-52 md:h-auto md:w-56 flex-shrink-0 overflow-hidden">
        <img
          src={machine.image}
          alt={machine.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="mb-3 text-2xl font-bold text-slate-900">
            {machine.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-7 text-slate-600">
            {machine.description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 font-semibold text-[#0A4A9E]">
          View Details
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  ))}
</div>
      </section>
    </div>
  );
};