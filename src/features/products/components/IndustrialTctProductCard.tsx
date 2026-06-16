interface IndustrialTctProductCardProps {
  title: string;
  image: string;
  content: string;
}

export const IndustrialTctProductCard = ({
  title,
  image,
  content,
}: IndustrialTctProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-4 text-xl font-semibold leading-tight text-slate-900">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-600">
          {content}
        </p>
      </div>
    </div>
  );
};