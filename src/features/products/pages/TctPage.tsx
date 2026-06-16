import { Link } from "react-router-dom";
import { tctProducts } from "../data/tctProducts";

export function TctPage() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Tungsten Carbide Tipped (TCT) Saw Blades
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            High-performance TCT circular saw blades designed for precision,
            durability and demanding industrial applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {tctProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/products/tct/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#08306B] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {product.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {product.description}
                </p>

                <span className="inline-flex rounded-xl bg-[#0A4A9E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#08306B]">
                  View Product →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}