import logo from "@/assets/images/SHEFFSAWS+LOGO+MAY18+-+WEBSITE.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        {/* <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-20 text-center lg:flex-row lg:text-left">
          
          <div>
            <h2 className="text-4xl font-bold">
              Need a Custom Industrial
              <span className="block text-[#0A4A9E]">
                Cutting Solution?
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Speak with our team about manufacturing,
              servicing or supplying industrial saw blades
              tailored to your requirements.
            </p>
          </div>

          <button className="rounded-lg bg-[#0A4A9E] px-8 py-4 text-lg font-semibold transition hover:bg-[#083a7c]">
            Request Quote
          </button>
        </div> */}
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Company */}
          <div>
            <img
              src={logo}
              alt="Sheffield Industrial Saws"
              className="mb-6 h-20 w-auto"
            />

            <p className="leading-7 text-slate-400">
              Precision engineered industrial saw blades,
              repair services and cutting solutions for
              steel mills and industrial manufacturers worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Products
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Hot Saw Blades</li>
              <li>Friction Saws</li>
              <li>TCT Blades</li>
              <li>Segmental Blades</li>
              <li>Bandsaw Blades</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Blade Repairs</li>
              <li>Refurbishment</li>
              <li>Sharpening</li>
              <li>Technical Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Sheffield, United Kingdom</li>
              <li>sales@sheffieldindustrialsaws.com</li>
              <li>+44 (0) 114 225 0804</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sheffield Industrial Saws.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};