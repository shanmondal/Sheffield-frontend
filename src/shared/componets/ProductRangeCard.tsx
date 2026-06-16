interface ProductRangeCardProps {
  image: string;
  title: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const ProductRangeCard = ({
  image,
  title,
  description,
  specs,
}: ProductRangeCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img src={image} alt={title} className="h-72 w-full object-cover" />

      <div className="p-8">
        <h3 className="mb-4 text-2xl font-bold text-slate-900">{title}</h3>

        <p className="mb-6 text-slate-600">{description}</p>

        <div className="space-y-3 text-slate-700">
          {specs.map((spec) => (
            <p key={spec.label}>
              <strong>{spec.label}:</strong> {spec.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
