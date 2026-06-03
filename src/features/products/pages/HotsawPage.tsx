import hotSawHero from "@/assets/images/products/Hotsaw+Blade.webp";
import  toothProfileImg from "@/assets/images/products/Hotsaw+Tooth+profiles.webp";
import flatGroundImg from "@/assets/images/products/Blade+Body+Profile+-+Flat+Ground.webp";
import hollowTurnedImg from "@/assets/images/products/Blade+Body+Profile+-+Hollow+Turned.webp";

 const HotsawPage = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Industrial Hot Cutting
            </p>

            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Hot Saw Blades
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Designed for cutting red hot carbon and alloy steels above 750°C.
              Engineered for extreme temperatures, maximum durability and
              consistent cutting performance.
            </p>
          </div>

          <div>
            <img
              src={hotSawHero}
              alt="Hot Saw Blade"
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
          <SpecCard title="Pitch" value="5mm - 28mm" />
          <SpecCard title="Temperature" value="750°C+" />
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Applications & Materials
          </h2>

          <div className="space-y-6 text-lg text-slate-600">
            <p>
              Large Hot Saws are used for cutting red hot carbon and alloy
              steels. Larger tooth pitch and enhanced gullet clearance help
              prevent filling during cutting.
            </p>

            <p>
              POWERBLADE Carbon Manganese Steel bodies are normalised and flame
              hardened to provide excellent wear resistance and extended blade
              life.
            </p>
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
                <li>• Special Application Tooth Forms</li>
                <li>• Peg Tooth with Land</li>
                <li>• Handsaw Tooth</li>
                <li>• XLR Tooth</li>
                <li>• Skip Tooth</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border bg-white shadow-lg">
              <img
                src={toothProfileImg}
                alt="Hot Saw Tooth Profiles"
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
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <img
                src={flatGroundImg}
                alt="Flat Ground"
                className="mb-6 h-16 object-contain"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Flat Ground
              </h3>

              <p className="text-slate-600">
                Recommended for solid bars and billets.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <img
                src={hollowTurnedImg}
                alt="Hollow Turned"
                className="mb-6 h-16 object-contain"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Hollow Turned
              </h3>

              <p className="text-slate-600">
                Recommended for sections and beams.
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
            vibration-free running and accurate cutting at speeds from
            4267m/min to 7620m/min (14000 to 25000 ft/min).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Selecting a Hot Saw Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Our engineers can recommend the correct blade specification for
            your application.
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
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-xl font-bold">{value}</h3>
    </div>
  );
}
export default HotsawPage;