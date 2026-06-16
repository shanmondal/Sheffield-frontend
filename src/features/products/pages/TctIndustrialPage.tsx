import { industrialTctProducts } from '../data/industrialTctProducts';
import { IndustrialTctProductCard } from '../components/IndustrialTctProductCard';

const TctIndustrialPage = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
            Industrial Quality TCT
          </p>

          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Industrial Quality TCT Circular Saw Blades
          </h1>

          <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
            Premium industrial carbide tipped circular saw blades designed for
            timber processing, aluminium cutting, plastics, food processing and
            specialist manufacturing applications.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="14+" value="Blade Types" />
          <StatCard title="Custom" value="Bore Sizes" />
          <StatCard title="Industrial" value="Quality" />
          <StatCard title="Expert" value="Technical Advice" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Product Categories
          </h2>

          <p className="mt-3 text-slate-600">
            Explore our complete range of industrial quality TCT circular saw
            blades for timber, plastics, aluminium, food processing and
            specialist applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industrialTctProducts.map((product) => (
            <IndustrialTctProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              content={product.content}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="border-t bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Need Help Selecting a Circular Saw Blade?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Our team can recommend the correct blade specification for your
            application and machine requirements.
          </p>

          <button className="rounded-xl bg-[#0A4A9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083a7c]">
            Request Quote
          </button>
        </div>
      </section> */}
    </div>
  );
};

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="text-3xl font-bold text-[#0A4A9E]">{title}</div>

      <div className="mt-2 text-slate-600">{value}</div>
    </div>
  );
}

export default TctIndustrialPage;
