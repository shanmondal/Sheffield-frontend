import { useState } from 'react';

import panelScoringHero from '@/assets/images/products/tct/Panel+Scoring+Circular+saws.webp';
import applicationImg from '@/assets/images/products/tct/Scoring+blades+-+veneered+boards+&+plastic+laminated+chip+board.webp';

import { QuoteModal } from '@/shared/componets/QuoteModal';

const TctPanelScoringPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Precision Panel Processing
            </p>

            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Panel Scoring Circular Saw Blades
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Split and solid conical scoring blades designed to work alongside
              the main cutting blade, producing exceptionally clean cuts on
              veneered boards, laminated chipboard and panel materials.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={panelScoringHero}
              alt="Panel Scoring Circular Saw Blades"
              className="max-h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* APPLICATION CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <img
              src={applicationImg}
              alt="Applications"
              className="mx-auto h-auto max-w-full object-contain"
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Typical Applications
            </h2>

            <div className="space-y-4">
              <ApplicationTag title="Veneered Boards" />
              <ApplicationTag title="Plastic Laminated Chipboard" />
              <ApplicationTag title="Furniture Panels" />
              <ApplicationTag title="Decorative Boards" />
              <ApplicationTag title="Panel Processing" />
              <ApplicationTag title="Sliding Table Saws" />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Product Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              title="Application"
              text="Split and solid panel scoring used in conjunction with the main cutting blade."
            />

            <InfoCard
              title="Material"
              text="Veneered boards, laminated boards, singles and packs."
            />

            <InfoCard
              title="Machine"
              text="Panel saws and sliding table saws."
            />

            <InfoCard
              title="Purpose"
              text="Prevent surface chipping and improve cut quality."
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Split & Solid Conical Scoring Blades
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Our split scoring blades with flat teeth and solid scorer blades
                with conical tooth geometry both have long service life and are
                specifically designed for precision panel processing.
              </p>

              <p>
                When used together with the main cutting blade, they ensure a
                clean finish on veneered boards, plastic laminated boards and
                chipboard materials by pre-scoring the surface before the main
                cut is made.
              </p>

              <p>
                This significantly reduces chipping and breakout on delicate
                surface materials, producing a cleaner and more professional
                finish.
              </p>

              <p>
                Our standard panel scoring blades are widely used by furniture
                manufacturers, panel processors and woodworking professionals
                who require the highest quality finish.
              </p>

              <p>
                These blades are particularly popular on panel saws and sliding
                table saws where precision and surface quality are critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Key Benefits
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              title="Reduced Chipping"
              text="Cleaner cuts on veneered and laminated surfaces."
            />

            <BenefitCard
              title="Long Service Life"
              text="High quality manufacturing and durable tooth geometry."
            />

            <BenefitCard
              title="Precision Cutting"
              text="Designed for accurate panel processing operations."
            />

            <BenefitCard
              title="Professional Finish"
              text="Ideal for furniture and decorative board production."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Selecting a Scoring Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Our team can help you select the correct scoring blade and matching
            main blade for your machine and material.
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
        source="panel-scoring-page"
      />
    </div>
  );
};

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-600">
        {text}
      </p>
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
      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-sm text-slate-600">
        {text}
      </p>
    </div>
  );
}

function ApplicationTag({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-medium text-slate-700">
      {title}
    </div>
  );
}

export default TctPanelScoringPage;