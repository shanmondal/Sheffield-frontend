interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-slate-900">{title}</h3>

      <p className="leading-relaxed text-slate-600">{description}</p>
    </div>
  );
};
