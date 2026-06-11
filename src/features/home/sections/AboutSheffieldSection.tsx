import warehouse from "@/assets/images/warehouse.jpeg";
import blades from "@/assets/images/blade.jpeg";

export const AboutSheffieldSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
            About Sheffield
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Engineering Excellence.
            <br />
            Sheffield Heritage.
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">

          {/* Row 1 */}
          <div className="relative h-[220px] flex items-center justify-center gap-0 mb-10 ">

            <div className="w-[360px] h-full overflow-hidden rounded-3xl lg:rounded-r-none shadow-lg">
              <img
                src={warehouse}
                alt="Sheffield Workshop"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-[520px] h-[220px] lg:rounded-l-none  rounded-3xl bg-[#f5f3f3] p-6 text-black shadow-[0_15px_30px_rgba(15,23,42,0.35)]">
              <h3 className="mb-3 text-2xl font-bold">
                Who Are We?
              </h3>

              <p className="text-sm leading-7 text-black/80">
                The company took over the machinery, equipment and labour force
                previously owned by Spear & Jackson International in 2009.
              </p>

              <p className="mt-3 text-sm leading-7 text-black/80">
                We are the UK's only producer of Hot Saw Blades used in steel
                section mills worldwide.
              </p>
            </div>

          </div>

          {/* Row 2 */}
          <div className="relative h-[220px] flex items-center justify-center  ">

            <div className=" h-full   w-[520px]  rounded-3xl rounded-r-none bg-[#f5f3f3] p-6 text-white shadow-[0_15px_30px_rgba(15,23,22,0.35)]">
              <h3 className="mb-3 text-2xl font-bold text-black">
                What Do We Do?
              </h3>

              <p className="text-sm leading-7 text-black/80">
                We provide products for every type of industrial cutting
                application throughout the UK and worldwide.
              </p>

              <p className="mt-3 text-sm leading-7 text-black/80">
                We offer blade repair, servicing and Hot Saw Blade repair
                machines for companies with regular maintenance requirements.
              </p>
            </div>

            <div className="w-[360px] h-full overflow-hidden rounded-3xl lg:rounded-l-none shadow-lg">
              <img
                src={blades}
                alt="Industrial Saw Blades"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* Mobile */}
        <div className="space-y-8 lg:hidden">
<div className="flex flex-col ">
<div className="overflow-hidden rounded-3xl  rounded-b-none shadow-lg">
            <img
              src={warehouse}
              alt="Workshop"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="rounded-3xl rounded-t-none bg-[#f5f3f3] p-6 text-black shadow-xl">
            <h3 className="mb-3 text-2xl font-bold">
              Who Are We?
            </h3>

            <p className="leading-7 text-black/80">
              The company took over the machinery, equipment and labour force
              previously owned by Spear & Jackson International in 2009.
              We are the UK's only producer of Hot Saw Blades used in steel
              section mills worldwide.
            </p>
          </div>
</div>
          
<div className="flex flex-col ">
          <div className="overflow-hidden rounded-3xl rounded-b-none shadow-lg">
            <img
              src={blades}
              alt="Saw Blades"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="rounded-3xl rounded-t-none bg-[#f3f3f3] p-6 text-white shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-black">
              What Do We Do?
            </h3>

            <p className="leading-7  text-black/80">
              We provide industrial cutting solutions worldwide, including
              saw blade manufacturing, repair services and specialist Hot Saw
              Blade repair machinery.
            </p>
          </div>
</div>
        </div>

      </div>
    </section>
  );
};