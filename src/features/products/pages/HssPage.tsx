import hssHeroImg from '@/assets/images/products/HIGH+SPEED+STEEL+(HSS).webp';
import toothGeometryImg from '@/assets/images/products/HSS+Tooth+Geometry.webp';
import { QuoteModal } from '@/shared/componets/QuoteModal';
import { useState } from 'react';

const HssPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
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
              High Speed Steel (HSS)
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Precision manufactured HSS circular saw blades for ferrous,
              non-ferrous metals and specialist cutting applications.
            </p>
          </div>

          <div>
            <img
              src={hssHeroImg}
              alt="HSS Circular Saw Blades"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SpecCard title="Diameter" value="100mm - 500mm" />
          <SpecCard title="Thickness" value="1mm - 4mm" />
          <SpecCard title="Material" value="M2 / M35 Cobalt" />
          <SpecCard title="Applications" value="Metal & Plastics" />
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Applications
              </h2>

              <p className="leading-relaxed text-slate-600">
                General purpose cut-off blades for ferrous and non-ferrous
                metals. Also suitable for selected plastic cutting applications.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Sizes</h2>

              <ul className="space-y-3 text-slate-600">
                <li>Diameter: 100mm to 500mm</li>
                <li>Thickness: 1mm to 4mm</li>
                <li>Available with standard pin hole arrangements</li>
                <li>Available with unislots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Blade Materials
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Standard Material"
            text="M2 Super High Speed Steel."
          />

          <InfoCard
            title="Premium Material"
            text="M35 Cobalt Steel for cutting high alloy steels."
          />
        </div>
      </section>

      {/* SURFACE TREATMENTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-slate-900">
            Surface Treatments
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="mb-4 text-xl font-semibold">
              Steam Treated Oxide Finish
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>• Reduces friction and metal adhesion</li>
              <li>• Improves wear resistance</li>
              <li>• Extends blade life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIALIST COATINGS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Specialist Coatings
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Titanium Nitride (TiN)"
            text="Recommended for mild steel, medium hard steel, hard steel and stainless steels."
          />

          <InfoCard
            title="Titanium Aluminium Nitride (TiAlN)"
            text="Recommended for stainless steel, nickel alloys, titanium and cast iron."
          />

          <InfoCard
            title="Titanium Carbon Nitride (TiCN)"
            text="For mould steels and hardened steels."
          />

          <InfoCard
            title="Hard Chrome"
            text="Recommended for stainless steel, brass, copper and aluminium."
          />
        </div>
      </section>

      {/* TOOTH GEOMETRY + PERFORMANCE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Tooth Geometry */}
            <div className="rounded-3xl border bg-white p-8 shadow-lg">
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Tooth Geometry
              </h2>

              <p className="mb-6 text-slate-600">
                Various tooth forms available to suit specific cutting
                applications.
              </p>

              <img
                src={toothGeometryImg}
                alt="HSS Tooth Geometry"
                className="w-full rounded-xl"
              />
            </div>

            {/* Performance Benefits */}
            <div className="rounded-3xl bg-[#0A4A9E] p-8 text-white shadow-lg">
              <h2 className="mb-6 text-3xl font-bold">Performance Benefits</h2>

              <ul className="space-y-5 text-lg text-blue-100">
                <li>✓ Faster cutting speeds</li>
                <li>✓ Longer blade life</li>
                <li>✓ Improved wear resistance</li>
                <li>✓ Reduced friction and heat generation</li>
                <li>✓ Excellent cut quality</li>
                <li>✓ Precision engineered tooth profiles</li>
                <li>✓ Suitable for high-volume production cutting</li>
              </ul>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Recommended Applications
                </h3>

                <p className="text-blue-100">
                  Ferrous metals, non-ferrous metals, stainless steel, alloy
                  steel, aluminium, brass, copper and selected plastics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Choosing an HSS Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Speak with our engineering team for blade recommendations, coatings
            and cutting specifications.
          </p>

          <button
            className="rounded-lg bg-[#0A4A9E] px-8 py-4 font-semibold text-white hover:bg-[#083a7c]"
            onClick={() => setIsQuoteOpen(true)}
          >
            Request Quote
          </button>
        </div>
      </section>
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        source="hss-page"
      />
    </div>
  );
};

function SpecCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{value}</h3>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>

      <p className="leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

export default HssPage;
