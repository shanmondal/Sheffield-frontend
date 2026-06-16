import { useState } from 'react';

import tctHero from '@/assets/images/products/tct/TCT.webp';
import segPic from '@/assets/images/products/tct/segpic.webp';

import { QuoteModal } from '@/shared/componets/QuoteModal';
import { SpecCard } from '@/shared/componets/SpecCard';
import { ServiceCard } from '@/shared/componets/ServiceCard';
import { FeatureCard } from '@/shared/componets/FeatureCard';
import { ProductRangeCard } from '@/shared/componets/ProductRangeCard';


const TctGeneralPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Industrial TCT Solutions
            </p>

            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Tungsten Carbide Tipped (TCT) Saw Blades
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Premium industrial TCT circular saw blades engineered for
              precision cutting, long service life and maximum productivity.
            </p>
          </div>

          <div>
            <img
              src={tctHero}
              alt="TCT Saw Blade"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SpecCard title="Blade Diameter" value="250mm - 1820mm" />
          <SpecCard title="Blade Types" value="Segmental & Solid Body" />
          <SpecCard title="Body Material" value="Chrome Vanadium Steel" />
          <SpecCard title="Applications" value="Multi-Material Cutting" />
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Industry Expertise
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              We are one of the leading UK manufacturers of industrial quality
              TCT circular saw blades. We can supply up to 1820mm saw blades and
              offer free expert technical advice to help customers select the
              most suitable blade for their application.
            </p>

            <p>
              Our engineering team works closely with customers to maximise
              cutting performance, blade life and productivity through correct
              blade specification and application support.
            </p>
          </div>
        </div>
      </section>

      {/* MANUFACTURE & DESIGN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-slate-900">
            Blade Manufacture & Design
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <FeatureCard title="Blade Manufacture">
              <p>
                Tips are brazed with high temperature silver braze and
                free-flowing flux to ensure maximum adhesion and durability.
              </p>

              <p>
                Fine diamond grit grinding wheels are used to create an
                exceptionally smooth finish resulting in lower chip resistance
                and faster cutting.
              </p>
            </FeatureCard>

            <FeatureCard title="Blade Design">
              <p>
                Body materials are selected to provide toughness and resilience
                while supporting carbide tips under heavy load.
              </p>

              <p>
                All blades are levelled and tensioned for optimum performance at
                operating speed.
              </p>

              <p>
                Tooth geometry can be supplied with positive or negative rake
                angles, triple chip designs and chip breakers, including custom
                designs for specific applications.
              </p>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Applications
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            High-speed conventional cutting of ferrous and non-ferrous metals,
            wood, laminates and plastics. Designed for demanding industrial
            environments where accuracy, productivity and blade life are
            critical.
          </p>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-slate-900">
            TCT Product Range
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <ProductRangeCard
              image={segPic}
              title="Segmental Carbide Saw Blade"
              description="Segmental blades tipped with carbide to withstand wear conditions associated with high-speed cutting of abrasive non-ferrous alloys."
              specs={[
                {
                  label: 'Size',
                  value: '250mm - 1820mm (10" - 72")',
                },
                {
                  label: 'Body',
                  value: 'Chrome-Vanadium Steel',
                },
                {
                  label: 'Steel Tips',
                  value: 'P25 - P45 (S6)',
                },
                {
                  label: 'Non-Ferrous Tips',
                  value: 'K10 & K20',
                },
              ]}
            />

            <ProductRangeCard
              image={segPic}
              title="Sheffcarb Saw Blade"
              description="Solid bodied carbide tipped blade designed for arduous steel cutting applications requiring maximum durability and performance."
              specs={[
                {
                  label: 'Size',
                  value: '360mm - 1820mm (14" - 72")',
                },
                {
                  label: 'Body',
                  value: 'Chrome-Vanadium Steel',
                },
                {
                  label: 'Steel Tips',
                  value: 'P25 - P45 (S6)',
                },
                {
                  label: 'Non-Ferrous Tips',
                  value: 'K10 & K20',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-slate-900">
            Sheffield Industrial Saws Service
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <ServiceCard
              title="Manufacture & Supply"
              description="Manufacture and supply of segmental and solid bodied TCT saw blades together with spare carbide tips."
            />

            <ServiceCard
              title="Repair Service"
              description="Comprehensive re-sharpening and repair services to maximise blade life and cutting performance."
            />

            <ServiceCard
              title="Technical Advice"
              description="Advice on feed rates, cutting speeds, blade specification, repairs and optimisation."
            />

            <ServiceCard
              title="Sheffmist Systems"
              description="Recommendations on Sheffmist spray systems and coolant solutions for optimum cutting performance."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Choosing the Right TCT Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Our engineers can recommend the optimum blade specification for your
            application.
          </p>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="rounded-lg bg-[#0A4A9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083a7c]"
          >
            Request Quote
          </button>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        source="tct-general-page"
      />
    </div>
  );
};

export default TctGeneralPage;