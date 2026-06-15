import heroImage from '@/assets/images/products/Sawmill+circular+saw+blades+(plate+saws).webp';
import applicationImage from '@/assets/images/products/sawmill+saw.webp';
import { QuoteModal } from '@/shared/componets/QuoteModal';
import { useState } from 'react';

export const PlateSawPage = () => {
  const applications = [
    'Soft Wood Rip',
    'Hard Wood Rip',
    'Soft Wood Rip & Crosscut',
    'Hard Wood Rip & Crosscut',
    'Plywood',
    'MDF / Particle Board',
  ];
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const profiles = ['GX Teeth', 'DX Teeth', 'HR Teeth'];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Industrial Circular Saws
            </p>

            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">
              Sawmill Circular Saw Blades
            </h1>

            <p className="leading-relaxed text-lg text-slate-600">
              Manufactured to high quality standards for agricultural machinery,
              ripping and occasional crosscutting applications.
            </p>

            <p className="mt-5 leading-relaxed text-slate-600">
              Made from chrome vanadium steel and carefully tensioned to ensure
              optimum cutting performance and long service life.
            </p>
          </div>

          <div>
            <img
              src={applicationImage}
              alt="Applications"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-slate-900">
            Cutting Applications
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOTH PROFILES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Tooth Profiles
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {profiles.map((profile) => (
            <div
              key={profile}
              className="rounded-2xl border p-8 shadow-sm text-center"
            >
              <h3 className="text-xl font-bold text-slate-900">{profile}</h3>

              <p className="mt-3 text-slate-600">
                Optimised for specific timber cutting applications.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={heroImage} alt="Plate Saw Blade" className="w-full" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Chrome Vanadium Steel"
            text="Manufactured using premium quality chrome vanadium steel."
          />

          <FeatureCard
            title="Precision Tensioned"
            text="Tensioned and hammered to ensure stability throughout the cut."
          />

          <FeatureCard
            title="Large Diameter Capability"
            text="One of the few manufacturers capable of producing large circular saw blades."
          />

          <FeatureCard
            title="Agricultural Machinery"
            text="Ideal for ripping and occasional crosscutting operations."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need A Plate Saw Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Contact our engineering team for sizing, blade specifications and
            recommendations.
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
          source="platesaw-page"
        />
    </div>
  );
};

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>

      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}
