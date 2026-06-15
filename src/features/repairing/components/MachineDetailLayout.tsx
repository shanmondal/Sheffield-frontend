import { useNavigate } from "react-router-dom";

interface MachineDetailLayoutProps {
  title: string;
  image: string;
  description: React.ReactNode;
  specifications: string[];
  features?: string[];
}

export const MachineDetailLayout = ({
  title,
  image,
  description,
  specifications,
  features,
}: MachineDetailLayoutProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="mb-12 text-4xl font-bold text-slate-900">
          {title}
        </h1>

        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT */}
          <div className="lg:col-span-1">
            {description}

            {features && (
              <>
                <h2 className="mt-10 mb-4 text-xl font-semibold text-slate-900">
                  Key Features
                </h2>

                <ul className="space-y-3 text-slate-600">
                  {features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* CENTER */}
          <div>
            <img
              src={image}
              alt={title}
              className="w-full rounded-2xl border shadow-sm"
            />

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Need More Information?
              </h3>

              <p className="mb-4 text-slate-600">
                Contact our team for technical advice,
                machine specifications and pricing.
              </p>

              <button 
                className="rounded-lg bg-[#0A4A9E] px-6 py-3 font-semibold text-white" 
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-2xl border p-8">
              <h2 className="mb-6 text-2xl font-semibold">
                Machine Specifications
              </h2>

              <ul className="space-y-4 text-slate-600">
                {specifications.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};