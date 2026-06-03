import frictionBladeImg from "@/assets/images/products/Friction+Saw+Blade.webp";
import toothProfileImg from "@/assets/images/products/Hotsaw+Tooth+profiles.webp";
import flatGroundImg from "@/assets/images/products/Blade+Body+Profile+-+Flat+Ground.webp";
import hollowTurnedImg from "@/assets/images/products/Blade+Body+Profile+-+Hollow+Turned.webp";

export const FrictionSawPage = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Industrial Circular Saws
            </p>

            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Friction Saw Blades
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              High performance friction saw blades designed for cutting cold
              carbon and alloy steels. Engineered for durability, cooling
              efficiency and maximum blade life.
            </p>
          </div>

          <div>
            <img
              src={frictionBladeImg}
              alt="Friction Saw Blade"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SpecCard title="Diameter" value="1000mm - 2400mm" />
          <SpecCard title="Thickness" value="6mm - 16mm" />
          <SpecCard title="Tooth Pitch" value="5mm - 28mm" />
          <SpecCard title="Application" value="Cold Cutting" />
        </div>
      </section>

      {/* APPLICATIONS & MATERIALS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Applications & Materials
          </h2>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Large Friction Saws
              </h3>

              <p className="leading-relaxed text-slate-600">
                Used for friction cutting cold carbon and alloy steels,
                usually multiple pieces. Finer tooth pitches generate
                frictional heat during cutting while high-pressure cooling
                and cleaning ensure optimal blade performance.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Blade Materials
              </h3>

              <p className="leading-relaxed text-slate-600">
                POWERBLADE Carbon Manganese Steel, normalised by body and
                flame hardened teeth. Tough crack-resistant blade body
                combined with hard wear-resistant teeth for significantly
                increased blade life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOTH PROFILES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Tooth Profiles
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Standard 60° Peg Tooth</li>
                <li>• Special tooth form for specific applications</li>
                <li>• 60° Peg with Land</li>
                <li>• Handsaw Tooth</li>
                <li>• XLR Tooth</li>
                <li>• Skip Tooth</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border bg-white shadow-lg">
              <img
                src={toothProfileImg}
                alt="Friction Saw Tooth Profiles"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLADE BODY PROFILES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-slate-900">
            Blade Body Profiles
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <BladeProfileCard
              title="Flat Ground"
              description="Normally recommended for solid bars and billets."
              image={flatGroundImg}
            />

            <BladeProfileCard
              title="Hollow Turned"
              description="Normally recommended for sections and beams."
              image={hollowTurnedImg}
            />
          </div>
        </div>
      </section>

      {/* SMALL DIAMETER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-[#0A4A9E] p-10 text-white">
          <h2 className="mb-6 text-3xl font-bold">
            Small Diameter Friction Saws
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Size Range
              </h3>

              <p className="text-blue-100">
                350mm to 1200mm diameter (14 to 47 inches)
              </p>

              <p className="mt-4 text-blue-100">
                Designed for friction cutting of small steel tubes and
                structural sections.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Materials
              </h3>

              <p className="text-blue-100">
                Chrome Vanadium Steel or Tungsten Molybdenum Steel,
                usually over 600mm diameter.
              </p>

              <p className="mt-4 text-blue-100">
                Hollow profiled for clearance with standard peg or
                special tooth forms available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 p-10">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Performance
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Blades are precisely machined, levelled and tensioned to ensure
            even balance, vibration-free operation and accurate cutting at
            speeds from 4267m/min to 7620m/min (14000 to 25000 ft/min).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Selecting a Friction Saw Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Our engineering team can recommend the correct blade
            specification, tooth profile and operating parameters
            for your application.
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {value}
      </h3>
    </div>
  );
}

function BladeProfileCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <img
        src={image}
        alt={title}
        className="mb-6 h-20 w-full object-contain"
      />

      <h3 className="mb-3 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}