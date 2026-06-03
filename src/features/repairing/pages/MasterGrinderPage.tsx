import masterGrinderImg from "@/assets/images/products/Mastergrinder+saw+blade+repair+machinery.webp";
import { Link } from "react-router-dom";

export const MasterGrinderPage = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Header */}
        <div className="mb-14 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-bold tracking-wide text-slate-900">
            MasterGrinder
          </h1>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT */}
          <div>
            <div className="space-y-5 text-slate-600 leading-8">

              <p>
                The MASTERGRINDER saw sharpening machine is
                specifically built to sharpen hot and friction
                saws from 500mm to 1550mm diameter
                (20" to 60").
              </p>

              <p>
                Ideal for use in steel mills, tube mills and
                repair facilities, this machine has variable
                speed motors to both the grinding head and
                indexing mechanism for maximum efficiency.
              </p>

              <p>
                Built-in dust extraction allows the machine
                to be sited independently.
              </p>

              <p>
                Like all Sheffield Industrial Saws machinery,
                the MASTERGRINDER is user friendly and requires
                minimal maintenance.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 rounded-2xl bg-slate-50 p-6">

              <h2 className="mb-5 text-xl font-semibold text-slate-900">
                Key Features
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Variable grinding head speed</li>
                <li>✓ Variable indexing mechanism</li>
                <li>✓ Hollow shaft dust extraction</li>
                <li>✓ Easy access controls</li>
                <li>✓ No foundations required</li>
                <li>✓ Up to 60% faster grinding times</li>
              </ul>

            </div>
          </div>

          {/* CENTER */}
          <div>

            <img
              src={masterGrinderImg}
              alt="MasterGrinder"
              className="w-full rounded-2xl border shadow-sm"
            />

            <div className="mt-8 rounded-2xl bg-[#0A4A9E] p-8 text-white">

              <h3 className="mb-4 text-xl font-semibold">
                Need More Information?
              </h3>

              <p className="mb-6 text-blue-100">
                Contact us to discuss your sharpening
                requirements and machinery options.
              </p>

              <Link
                to="/contact"
                className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#0A4A9E]"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="rounded-2xl border border-slate-200 p-8">

              <h2 className="mb-6 text-2xl font-semibold text-slate-900">
                Machine Specifications
              </h2>

              <ul className="space-y-4 text-slate-600">

                <li>
                  Variable grinding stroke
                  from 0mm – 30mm
                </li>

                <li>
                  Grinding head speed
                  2670 RPM – 3710 RPM
                </li>

                <li>
                  Variable indexing speeds
                  from 30 to 120 strokes/min
                </li>

                <li>
                  Electrical specification
                  supplied to customer requirements
                </li>

                <li>
                  Up to 20° tilt on grinding head
                </li>

                <li>
                  Individual controls for
                  grinding wheel motor,
                  oscillation motor and
                  dust extraction
                </li>

                <li>
                  Reinforced bellows
                  protecting slideways
                </li>

                <li>
                  Flexible machine light
                  for process visibility
                </li>

                <li>
                  Automated cleaning system
                </li>

                <li>
                  Blade diameter range
                  500mm – 1550mm
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
};