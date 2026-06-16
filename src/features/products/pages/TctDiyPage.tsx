import { useState } from 'react';

import diyTct from '@/assets/images/products/tct/DIY+Pro+Trade.webp';
import woodCuttingImg from '@/assets/images/products/tct/DIY+circlular+saw+blades+-+woodcutting.webp';
import metalCuttingImg from '@/assets/images/products/tct/DIY+circlular+saw+blades+-+metal.webp';
import specialWoodCuttingImg from '@/assets/images/products/tct/DIY+circular+saw+blades+-+special+woodcutting.webp';

import { QuoteModal } from '@/shared/componets/QuoteModal';

const TctDiyPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              DIY & Trade Range
            </p>

            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              DIY Circular Saw Blades
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              High quality Tungsten Carbide Tipped circular saw blades designed
              for professional tradespeople, workshops and DIY users. Suitable
              for wood, sheet materials, aluminium and specialist cutting
              applications.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={diyTct}
              alt="DIY Circular Saw Blade"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="TCT Technology"
            text="Premium tungsten carbide tips for longer blade life and cleaner cuts."
          />

          <FeatureCard
            title="Professional Quality"
            text="Designed for trade users, workshops and demanding DIY applications."
          />

          <FeatureCard
            title="Multiple Materials"
            text="Available for wood, sheet materials, aluminium and non-ferrous metals."
          />
        </div>
      </section>

      {/* WOOD CUTTING */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src={woodCuttingImg}
                alt="Wood Cutting Applications"
                className="w-full rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"
              />
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Wood Cutting Applications
              </h2>

              <p className="mb-6 leading-relaxed text-slate-600">
                Our DIY and Trade blades are available for a wide variety of
                woodworking applications, delivering clean finishes and reliable
                cutting performance.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <Tag>Softwood Rip & Crosscut</Tag>
                <Tag>Hardwood Rip & Crosscut</Tag>
                <Tag>Plywood</Tag>
                <Tag>MDF & Boards</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METAL CUTTING */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Aluminium & Non-Ferrous Cutting
              </h2>

              <p className="mb-6 leading-relaxed text-slate-600">
                Specially designed blades for aluminium, copper, brass and
                other non-ferrous materials. Optimised tooth geometry provides
                smooth cutting and excellent finish quality.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <Tag>Non-Ferrous Sections</Tag>
                <Tag>Extrusions</Tag>
                <Tag>Solid Aluminium</Tag>
                <Tag>Plates</Tag>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={metalCuttingImg}
                alt="Metal Cutting Applications"
                className="w-full rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL WOOD CUTTING */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src={specialWoodCuttingImg}
                alt="Special Wood Cutting Applications"
                className="w-full rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"
              />
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Specialist Wood Cutting Applications
              </h2>

              <p className="mb-6 leading-relaxed text-slate-600">
                We offer specialist blade configurations for reclaimed timber,
                crosscutting and ripping applications where performance and
                durability are essential.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <Tag>Reclaimed Timber</Tag>
                <Tag>Hardwood Crosscut</Tag>
                <Tag>Softwood Crosscut</Tag>
                <Tag>Softwood Ripping</Tag>
                <Tag>Hardwood Ripping</Tag>
                <Tag>Plywood</Tag>
                <Tag>MDF & Boards</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Why Choose Sheffield DIY Blades?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              title="Long Blade Life"
              text="Premium carbide tips engineered for durability."
            />

            <BenefitCard
              title="Clean Cutting"
              text="Optimised tooth geometry for smoother finishes."
            />

            <BenefitCard
              title="Multiple Materials"
              text="Suitable for timber, boards and non-ferrous metals."
            />

            <BenefitCard
              title="Trusted Quality"
              text="Manufactured to Sheffield Industrial Saws standards."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Choosing a DIY Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Contact our team for advice on selecting the correct blade for your
            material and machine.
          </p>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="rounded-xl bg-[#0A4A9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083a7c]"
          >
            Request Quote
          </button>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        source="tct-diy-page"
      />
    </div>
  );
};

function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function BenefitCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

export default TctDiyPage;