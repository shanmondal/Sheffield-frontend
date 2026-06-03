import heroBanner from "@/assets/images/hero-banner.webp.png";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] max-w-[1400px] items-center px-5 sm:px-8">
        <div className="max-w-3xl">

          {/* Tag */}
          <span className="mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
            Sheffield • UK Manufacturing
          </span>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Precision Engineered
            <span className="block text-[#0A4A9E]">
              Industrial Saw Blades
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            Manufacturing Hot Saw, Friction, TCT, HSS and Segmental
            Saw Blades for steel mills and industrial operations worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* <button className="rounded-lg bg-[#0A4A9E] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#083a7c] sm:px-8 sm:py-4 sm:text-lg">
              Request Quote
            </button> */}

            <button
              onClick={() => navigate("/products")}
              className="rounded-lg bg-[#0A4A9E] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#083a7c] sm:px-8 sm:py-4 sm:text-lg"
            >
              View Products
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-14 sm:flex sm:gap-12">
            <div>
              <p className="text-2xl font-bold text-[#0A4A9E] sm:text-3xl lg:text-4xl">
                UK
              </p>

              <p className="text-xs text-slate-600 sm:text-sm">
                Manufacturing
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#0A4A9E] sm:text-3xl lg:text-4xl">
                Global
              </p>

              <p className="text-xs text-slate-600 sm:text-sm">
                Supply
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#0A4A9E] sm:text-3xl lg:text-4xl">
                Custom
              </p>

              <p className="text-xs text-slate-600 sm:text-sm">
                Solutions
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};