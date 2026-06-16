import { Link } from "react-router-dom";

interface ProductCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const ProductCard = ({
  slug,
  title,
  description,
  image,
}: ProductCardProps) => {
  return (
    <Link
      to={`/products/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Smaller Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mb-4 text-sm text-slate-600 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <span className="inline-flex rounded-lg bg-[#0A4A9E] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#08306B]">
            View Product →
          </span>
        </div>
      </div>
    </Link>
  );
};