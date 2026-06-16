interface SpecCardProps {
  title: string;
  value: string;
}

export const SpecCard = ({ title, value }: SpecCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <h3 className="mt-2 text-xl font-bold text-slate-900">{value}</h3>
    </div>
  );
};
