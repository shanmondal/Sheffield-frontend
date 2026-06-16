import { useState } from 'react';

import bandsawHero from '@/assets/images/products/bandsaw/BANDSAW.webp';
import bandsawDiagram from '@/assets/images/products/bandsaw/bandsaw+diagram.webp';

import regularToothImg from '@/assets/images/products/bandsaw/bandfig1.webp';
import hookToothImg from '@/assets/images/products/bandsaw/bandfig2.webp';
import variableToothImg from '@/assets/images/products/bandsaw/bandfig3.webp';
import positiveRakeImg from '@/assets/images/products/bandsaw/bandfig4.webp';
import skipToothImg from '@/assets/images/products/bandsaw/bandfig5.webp';
import rakerSetImg from '@/assets/images/products/bandsaw/bandfig6.webp';

import { QuoteModal } from '@/shared/componets/QuoteModal';

const BandsawPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={bandsawHero}
          alt="Bandsaw Blades"
          className="h-[300px] w-full object-cover md:h-[420px]"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="max-w-4xl text-4xl font-bold text-white md:text-6xl">
              Bandsaw Blades
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Premium bandsaw blades for steel, aluminium, wood, plastics and
              specialist industrial cutting applications.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 ">
        <div className="">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Industrial Bandsaw Solutions
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                We offer a wide range of branded quality manufacturer bandsaw
                blades. The range extends from economical carbon bands through
                traditional Bi-Metal M42 blades to high performance Tungsten
                Carbide Tipped bandsaw blades.
              </p>

              <p>
                Whether cutting steel, aluminium, wood, plastics or specialist
                alloys, Sheffield Industrial Saws can provide the correct blade
                specification for maximum productivity and blade life.
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <BrandCard name="DoALL" />
            <BrandCard name="Lenox" />
            <BrandCard name="Starrett" />
          </div> */}
        </div>
      </section>

      {/* BLADE TYPES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Bandsaw Blade Specifications
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            <SpecCard
              title="Carbon Steel Flexible"
              description="Economical blade for general purpose cutting of low alloy metals and non-ferrous materials."
              sizeMin="6mm x 0.64mm"
              sizeMax="35.5mm x 1.12mm"
            />

            <SpecCard
              title="M42 Bi-Metal"
              description="High cobalt bi-metal blade suited for stainless steel, high alloy steels and interrupted cutting."
              sizeMin="12.7mm x 0.6mm"
              sizeMax="80mm x 1.6mm"
            />

            <SpecCard
              title="Carbide Tipped"
              description="High performance blade for nickel alloys, stainless steel, tool steel and hardened materials."
              sizeMin="12.7mm x 0.6mm"
              sizeMax="80mm x 1.6mm"
            />
          </div>
        </div>
      </section>

      {/* TOOTH DIAGRAM */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={bandsawDiagram}
                alt="Bandsaw Tooth Diagram"
                className="mx-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              />
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Blade Terminology
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                Understanding blade geometry helps select the correct blade for
                the material and cutting application. Tooth pitch, rake angle,
                gullet depth and tooth set all influence cutting performance,
                chip evacuation and blade life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOTH FORMS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Tooth Forms
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <ToothCard
              image={regularToothImg}
              title="Regular Tooth"
              text="Recommended for ferrous metals and general purpose cutting."
            />

            <ToothCard
              image={hookToothImg}
              title="Hook Tooth"
              text="Used for non-ferrous metals and heavier sections."
            />

            <ToothCard
              image={variableToothImg}
              title="Variable Tooth"
              text="Reduces vibration and chatter when cutting pipes and tubes."
            />

            <ToothCard
              image={positiveRakeImg}
              title="Positive Rake Variable Pitch"
              text="Maximum chip evacuation and production cutting."
            />

            <ToothCard
              image={skipToothImg}
              title="Skip Tooth"
              text="Large gullets for wood, plastics and softer materials."
            />

            <ToothCard
              image={rakerSetImg}
              title="Raker Set"
              text="Smooth cutting performance on heavier sections."
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Why Choose Sheffield Industrial Saws?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard title="Technical Support" />
            <BenefitCard title="Premium Brands" />
            <BenefitCard title="Industrial Quality" />
            <BenefitCard title="Fast Supply" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Selecting a Bandsaw Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Speak to our team for advice on blade selection, tooth forms and
            cutting performance.
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
        source="bandsaw-page"
      />
    </div>
  );
};

// function BrandCard({ name }: { name: string }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
//       <h3 className="text-3xl font-bold text-[#0A4A9E]">{name}</h3>
//     </div>
//   );
// }

function SpecCard({
  title,
  description,
  sizeMin,
  sizeMax,
}: {
  title: string;
  description: string;
  sizeMin: string;
  sizeMax: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="mb-4 text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mb-6 text-slate-600">{description}</p>

      <div className="space-y-2 text-sm text-slate-700">
        <p>
          <strong>Min:</strong> {sizeMin}
        </p>

        <p>
          <strong>Max:</strong> {sizeMax}
        </p>
      </div>
    </div>
  );
}

function ToothCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <img
        src={image}
        alt={title}
        className="mb-6 h-12 w-full object-contain"
      />

      <h3 className="mb-3 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function BenefitCard({ title }: { title: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
  );
}

export default BandsawPage;