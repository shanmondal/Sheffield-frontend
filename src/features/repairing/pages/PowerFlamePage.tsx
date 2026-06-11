import powerFlameImg from "@/assets/images/products/POWERFLAME+saw+blade+repair+machinery.webp";
import powerFlameBladeImg from "@/assets/images/products/POWERFLAME.webp"; // second image
import { Link } from "react-router-dom";

export const PowerFlamePage = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 border-b pb-8">
          <h1 className="text-4xl font-bold tracking-wide text-slate-900">
            PowerFlame
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT COLUMN */}
          <div>
            <img
              src={powerFlameImg}
              alt="PowerFlame"
              className="mb-8 w-full rounded-2xl border shadow-sm"
            />

            <h2 className="mb-4 text-2xl font-semibold">
              What is it?
            </h2>

            <div className="space-y-4 text-slate-600 leading-8">
              <p>
                The POWERFLAME has been specifically designed
                to flame harden Hot and Friction Saw Blades
                after grinding.
              </p>

              <p>
                The machine has been developed to work in
                conjunction with the POWERGRINDER in steel mills
                and repair centres.
              </p>

              <p>
                It can accommodate blades from 1000mm up to
                2400mm diameter.
              </p>

              <p>
                Adjustable functions for blade diameter,
                flame temperature and rotation speed ensure
                consistent hardening of any tooth profile.
              </p>
            </div>

            <Link
              to="/reparing/powergrinder"
              className="mt-8 inline-flex rounded-xl border-2 border-[#0A4A9E] px-6 py-3 font-semibold text-[#0A4A9E] transition hover:bg-[#0A4A9E] hover:text-white"
            >
              View PowerGrinder
            </Link>
          </div>

          {/* CENTER COLUMN */}
          <div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h2 className="mb-6 text-2xl font-semibold">
                Key Features
              </h2>

              <ul className="space-y-4 text-slate-600">
                <li>✓ Consistent hardening depth</li>
                <li>✓ Blade follower for even tooth hardening</li>
                <li>✓ Automated operation cycle</li>
                <li>✓ Durable machine construction</li>
                <li>✓ Minimum maintenance</li>
                <li>✓ No specialised foundations required</li>
              </ul>
            </div>

            <img
              src={powerFlameBladeImg}
              alt="PowerFlame Operation"
              className="mt-8 w-full rounded-2xl border shadow-sm"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div>

            <div className="rounded-2xl border p-8">
              <h2 className="mb-6 text-2xl font-semibold">
                Machine Specifications
              </h2>

              <ul className="space-y-4 text-slate-600">
                <li>Variable rotation control</li>

                <li>
                  Fuel combinations:
                  Oxygen & Propane
                  or Oxygen & Natural Gas
                </li>

                <li>
                  2 pre-heat burners
                  and 2 main burners
                </li>

                <li>
                  Flashback arrestors
                </li>

                <li>
                  Automatic flame shut down
                </li>

                <li>
                  Continuous flame monitoring
                </li>

                <li>
                  Auto ignition system
                </li>

                <li>
                  Cycle times between
                  10 and 50 minutes
                </li>

                <li>
                  Adjustable water flow
                  for cooling nozzles
                </li>

                <li>
                  Electrical specification
                  supplied to customer requirements
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-[#0A4A9E] p-8 text-white">

              <h3 className="mb-4 text-xl font-semibold">
                Need Assistance?
              </h3>

              <p className="mb-6 text-blue-100">
                Contact us to find out more about how
                POWERGRINDER and POWERFLAME work together.
              </p>

              <Link
                to="/contact"
                className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#0A4A9E]"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};