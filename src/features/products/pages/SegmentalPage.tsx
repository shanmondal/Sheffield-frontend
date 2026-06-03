import segmentalHeroImg from "@/assets/images/products/Segmental+Saw+blades.webp";
import applicationsImg from "@/assets/images/products/Segmental-Teeth-Applications.webp";
import toothProfileImg from "@/assets/images/products/Segmental+Tooth+profiles.webp";

export const SegmentalPage = () => {
  const applications = [
    {
      teeth: "2",
      application: "High speed machining of aluminium billets and slabs",
    },
    {
      teeth: "3",
      application: "Solid non-ferrous material > 100mm dia (except brass)",
    },
    {
      teeth: "4",
      application:
        "Soft and medium steel round bars, billets, forgings etc. >75mm",
    },
    {
      teeth: "5/6",
      application:
        "Steel 50 tons tensile and upwards, small bars, cast iron, steel rails, thick walled tubes, construction sections, joists and channels",
    },
    {
      teeth: "8/9",
      application: "Tubes, light steel sections and universal beams",
    },
    {
      teeth: "12/16",
      application: "Light window frame sections etc.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Industrial Circular Saws
            </p>

            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Segmental Saw Blades
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Our Segmental saw blades are recognised in the UK as superior
              blades for cold metal cutting. Preferred by leading steel
              stockholders and fabricators for heavy-duty cutting operations.
            </p>
          </div>

          <div>
            <img
              src={segmentalHeroImg}
              alt="Segmental Saw Blade"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SpecCard title="Diameter" value="250mm - 1820mm" />
          <SpecCard title="Kerf" value="3mm - 15mm" />
          <SpecCard title="Segments" value="12 - 40" />
          <SpecCard title="Material" value="HSS Segments" />
        </div>
      </section>

      {/* APPLICATIONS TABLE */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Applications by Segment Configuration
            </h2>

            <p className="mt-3 text-slate-600">
              Recommended segment configurations for different cutting
              applications.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
            <table className="min-w-full">
              <thead className="bg-[#0A4A9E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Teeth Per Segment</th>
                  <th className="px-6 py-4 text-left">Application</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((item) => (
                  <tr
                    key={item.teeth}
                    className="border-b last:border-0"
                  >
                    <td className="px-6 py-4 font-semibold">
                      {item.teeth}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {item.application}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Blade Body
            </h2>

            <div className="space-y-4 text-slate-600">
              <p>
                Chrome-Vanadium steel bodies are flat ground and finished to
                a fine surface finish.
              </p>

              <p>
                Blades are levelled and tensioned to ensure vibration-free
                operation and accurate cutting performance.
              </p>

              <p>
                Manufactured to maintain stability throughout demanding
                industrial applications.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Segment Design
            </h2>

            <div className="space-y-4 text-slate-600">
              <p>
                Manufactured from HSS with three hardness zones to provide a
                tough joint zone and a hard working zone.
              </p>

              <p>
                Tempered transition zones improve durability and operational
                life.
              </p>

              <p>
                Ground cooling channels allow cutting fluid to penetrate
                efficiently to the cutting edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* APPLICATION IMAGE */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Segment Applications
              </h2>

              <img
                src={applicationsImg}
                alt="Segment Applications"
                className="w-full rounded-xl"
              />
            </div>

            {/* PROFILE IMAGE */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Tooth Profile
              </h2>

              <div className="flex justify-center">
                <img
                  src={toothProfileImg}
                  alt="Segmental Tooth Profile"
                  className="max-h-[350px] object-contain"
                />
              </div>

              <p className="mt-6 text-slate-600">
                Heller triple chip tooth form is standard. The high roughing
                tooth is chamfered on both sides and only cuts in the centre,
                alternating with a lower finishing tooth which completes the
                cut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-[#0A4A9E] p-10 text-white">
          <h2 className="mb-8 text-3xl font-bold">
            Sheffield Industrial Saws Service
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ServiceItem text="Manufacture and supply of segmental saw blades and spare segments" />
            <ServiceItem text="Comprehensive resharpening and repair service" />
            <ServiceItem text="Technical advice on feed, speed and blade specification" />
            <ServiceItem text="Recommendations on Sheffmist spray systems and coolants" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Technical Advice?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Our engineering team can help you choose the correct segmental
            blade specification for your cutting application.
          </p>

          <button className="rounded-lg bg-[#0A4A9E] px-8 py-4 font-semibold text-white hover:bg-[#083a7c]">
            Request Quote
          </button>
        </div>
      </section>
    </div>
  );
};

function SpecCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {value}
      </h3>
    </div>
  );
}

function ServiceItem({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-5">
      <p className="text-blue-100">✓ {text}</p>
    </div>
  );
}