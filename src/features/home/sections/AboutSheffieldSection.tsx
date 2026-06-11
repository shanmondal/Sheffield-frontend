
import heritagebg from "@/assets/images/heritage.jpeg";
import { Factory, Globe2, Award, Wrench } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "UK's Only",
    label: "Hot Saw Blade Producer",
  },
  {
    icon: Globe2,
    value: "50+",
    label: "Countries Supplied",
  },
  {
    icon: Award,
    value: "2009",
    label: "Established",
  },
  {
    icon: Wrench,
    value: "24/7",
    label: "Support",
  },
];
const mobstats = [
  {
    icon: Factory,
    value: "UK's Only",
    label: "Hot Saw Blade Producer",
  },
  {
    icon: Globe2,
    value: "50+",
    label: "Countries Supplied",
  },
  // {
  //   icon: Award,
  //   value: "2009",
  //   label: "Established",
  // },
  // {
  //   icon: Wrench,
  //   value: "24/7",
  //   label: "Support",
  // },
];

export const AboutSheffieldSection = () => {
  return (
    <section className=" py-16 md:py-24 ">
      <div className="mx-auto   w-full">

        <div className="relative overflow-hidden  w-full">

          {/* Background */}
          <img
            src={heritagebg}
            alt="Engineering Heritage"
            className="h-[420px] w-full object-cover md:h-[500px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A4A9E]/80"  />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-5xl px-6 text-center text-white">

              <span className="text-xs font-semibold uppercase tracking-[3px] text-blue-100">
                About Sheffield
              </span>

              <h2 className="mt-4 text-md lg:text-3xl font-bold md:text-5xl">
                Engineering Excellence.
                <br />
                Sheffield Heritage.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-sm leading-5 lg:leading-7 text-blue-50 md:text-lg">
                Sheffield Industrial Saws became the UK's only producer of
                Hot Saw Blades used in steel section mills worldwide after
                acquiring the machinery, equipment and workforce of Spear &
                Jackson International in 2009.
              </p>

              {/* Stats */}
              <div className="mt-10 lg:grid grid-cols-4 gap-4 lg:grid-cols-4 hidden">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                    >
                      <Icon
                        size={20}
                        className="mx-auto mb-2"
                      />

                      <div className="lg:text-xl text-sm font-bold">
                        {stat.value}
                      </div>

                      <div className="mt-1 text-xs text-blue-100">
                        {stat.label}
                      </div>
                    </div>
                    

                  );
                })}
              </div>
           
                  <div className="mt-10 lg:hidden grid grid-cols-2 gap-4 lg:grid-cols-4 ">
                {mobstats.map((mobstat) => {
                  const Icon = mobstat.icon;

                  return (
                    <div
                      key={mobstat.label}
                      className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                    >
                      <Icon
                        size={20}
                        className="mx-auto mb-2"
                      />

                      <div className="lg:text-xl text-sm font-bold">
                        {mobstat.value}
                      </div>

                      <div className="mt-1 text-xs text-blue-100">
                        {mobstat.label}
                      </div>
                    </div>
                    
                    
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

