import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const ProductsPage = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
            Our Products
          </span>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Industrial Saw Blade Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Precision engineered cutting solutions designed
            for steel mills and industrial manufacturing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};