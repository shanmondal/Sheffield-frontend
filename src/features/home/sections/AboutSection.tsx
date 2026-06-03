export const AboutSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              About Sheffield
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
              Decades of Engineering
              <span className="block text-[#0A4A9E]">
                Knowledge & Manufacturing
              </span>
            </h2>

            {/* <p className="mt-8 text-lg leading-8 text-slate-600">
              Sheffield Industrial Saws continues a long tradition of
              manufacturing industrial cutting solutions for steel mills and
              engineering companies worldwide.
            </p> */}

            <p className="mt-6 text-lg leading-8 text-slate-600">
              In 2009 the company acquired the machinery, equipment and skilled
              workforce previously operated by Spear & Jackson International,
              allowing Sheffield Industrial Saws to continue supplying
              specialist industrial blades and repair services to customers
              across the globe.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-[#0A4A9E]">
                  2009
                </div>
                <div className="text-slate-600">
                  Strategic Acquisition
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-[#0A4A9E]">
                  UK
                </div>
                <div className="text-slate-600">
                  Manufacturing Base
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-[#0A4A9E]">
                  Global
                </div>
                <div className="text-slate-600">
                  Customer Network
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <div className="border-l-4 border-[#0A4A9E] pl-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Manufacturing Heritage
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Combining traditional engineering expertise with modern
                  manufacturing processes, Sheffield Industrial Saws delivers
                  precision cutting solutions trusted by steel producers and
                  industrial operators worldwide.
                </p>
              </div>

              <div className="mt-10 border-l-4 border-[#0A4A9E] pl-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Continuous Innovation
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  From hot saw blades and friction saws to repair machinery and
                  refurbishment services, our focus remains delivering reliable
                  performance and long-term value.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};