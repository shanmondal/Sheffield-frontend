import powerRollImg from "@/assets/images/products/POWERROLL+NEW.webp";
import powerRollSecondaryImg from "@/assets/images/products/image-asset.webp";
import { Link } from "react-router-dom";

export const PowerRollPage = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-wide text-slate-900">
            PowerRoll
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Heavy-duty hydraulic tension roll machine designed
            for hot and friction saw blades used in steel mills
            and industrial repair facilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                The Sheffield Industrial Saws POWERROLL has been
                specifically designed to tension hot and friction
                saw blades from 1000mm up to 2400mm diameter.
              </p>

              <p>
                Hydraulically driven motors ensure consistent
                rolling pressure and excellent blade tensioning
                accuracy.
              </p>

              <p>
                Built for reliability, durability and minimal
                maintenance requirements in demanding industrial
                environments.
              </p>
            </div>

            {/* Applications */}
            <div className="mt-10 rounded-2xl bg-slate-50 p-8">

              <h2 className="mb-4 text-xl font-semibold">
                Applications
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Steel mills</li>
                <li>✓ Saw blade repair centres</li>
                <li>✓ Hot saw blade tensioning</li>
                <li>✓ Friction saw blade tensioning</li>
                <li>✓ Heavy industrial blade maintenance</li>
              </ul>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <img
              src={powerRollImg}
              alt="PowerRoll"
              className="w-full rounded-2xl border shadow-sm"
            />

          </div>

        </div>

        {/* Specs */}
        <div className="mt-20">

          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Machine Specifications
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {[
              "Piston force from 2 to 23 tonnes",
              "7 to 90 bar hydraulic rolling pressure",
              "Pressure indication gauge",
              "Hydraulic traverse blade positioning",
              "125mm hydraulic lift",
              "Hydraulic filter blockage indicators",
              "Low hydraulic oil level protection",
              "High temperature hydraulic cut-out",
              "Roller rotation control panel",
              "Foot pedal operation",
              "Emergency stop protection",
              "Industrial electrical control panel",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border p-4 text-slate-700"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* Secondary Section */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <div>

            <img
              src={powerRollSecondaryImg}
              alt="PowerRoll Operation"
              className="w-full rounded-2xl border shadow-sm"
            />

          </div>

          <div className="flex flex-col justify-center">

            <h2 className="mb-5 text-3xl font-bold text-slate-900">
              Designed For Precision
            </h2>

            <p className="mb-6 text-slate-600 leading-8">
              The POWERROLL delivers consistent rolling pressure
              across the blade surface, ensuring optimal tension
              characteristics and extending blade life.
            </p>

            <p className="text-slate-600 leading-8">
              Its robust hydraulic system and industrial-grade
              construction make it suitable for continuous
              operation in demanding repair environments.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-[#0A4A9E] p-10 text-center text-white">

          <h2 className="mb-4 text-3xl font-bold">
            Need More Information?
          </h2>

          <p className="mb-8 text-blue-100">
            Speak with our team about PowerRoll machinery,
            specifications and servicing options.
          </p>

          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-[#0A4A9E]"
          >
            Contact Us
          </Link>

        </div>

      </section>
    </div>
  );
};