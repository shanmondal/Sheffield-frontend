import { type ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  children: ReactNode;
}

export const FeatureCard = ({ title, children }: FeatureCardProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="mb-5 text-2xl font-semibold text-slate-900">{title}</h3>

      <div className="space-y-4 leading-relaxed text-slate-600">{children}</div>
    </div>
  );
};
