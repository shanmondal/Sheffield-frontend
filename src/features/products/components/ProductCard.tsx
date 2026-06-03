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
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mb-6 text-slate-600">
          {description}
        </p>

        <span className="font-semibold text-[#0A4A9E]">
          View Product →
        </span>
      </div>
    </Link>
  );
};