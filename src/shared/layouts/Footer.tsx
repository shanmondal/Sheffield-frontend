import { Link } from 'react-router-dom';
import logo from '@/assets/images/SHEFFSAWS+LOGO+MAY18+-+WEBSITE.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* COMPANY */}
          <div>
            <img
              src={logo}
              alt="Sheffield Industrial Saws"
              className="mb-6 h-16 w-auto"
            />

            <div className="space-y-1 text-sm text-slate-300">
              <p>Sheffield Industrial Saws</p>
              <p>Imperial Works</p>
              <p>Sheffield Road</p>
              <p>Sheffield</p>
              <p>S9 2YL</p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Products
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  to="/products/friction-saw"
                  className="hover:text-white"
                >
                  Friction Saw
                </Link>
              </li>

              <li>
                <Link
                  to="/products/hot-saw"
                  className="hover:text-white"
                >
                  Hot Saw
                </Link>
              </li>

              <li>
                <Link
                  to="/products/tct"
                  className="hover:text-white"
                >
                  TCT Blades
                </Link>
              </li>

              <li>
                <Link
                  to="/products/segmental"
                  className="hover:text-white"
                >
                  Segmental Blades
                </Link>
              </li>

              <li>
                <Link
                  to="/products/high-speed-steel"
                  className="hover:text-white"
                >
                  HSS Blades
                </Link>
              </li>

              <li>
                <Link
                  to="/products/plate-saw"
                  className="hover:text-white"
                >
                  Plate Saws
                </Link>
              </li>

              <li>
                <Link
                  to="/bandsaw"
                  className="hover:text-white"
                >
                  Bandsaw Blades
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Repair Services
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  to="/reparing"
                  className="hover:text-white"
                >
                  Repair Machinery
                </Link>
              </li>

              <li>
                <Link
                  to="/reparing/powergrinder"
                  className="hover:text-white"
                >
                  Power Grinder
                </Link>
              </li>

              <li>
                <Link
                  to="/reparing/powerflame"
                  className="hover:text-white"
                >
                  Power Flame
                </Link>
              </li>

              <li>
                <Link
                  to="/reparing/mastergrinder"
                  className="hover:text-white"
                >
                  Master Grinder
                </Link>
              </li>

              <li>
                <Link
                  to="/reparing/powerroll"
                  className="hover:text-white"
                >
                  Power Roll
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="mb-1 font-medium text-white">
                  Email
                </p>

                <a
                  href="mailto:sales@sheffsaws.com"
                  className="hover:text-white"
                >
                  sales@sheffsaws.com
                </a>
              </div>

              <div>
                <p className="mb-1 font-medium text-white">
                  Call Us
                </p>

                <a
                  href="tel:+441142250804"
                  className="block hover:text-white"
                >
                  +44 (0) 114 225 0804
                </a>

                <a
                  href="tel:+441142752121"
                  className="block hover:text-white"
                >
                  +44 (0) 114 275 2121
                </a>
              </div>

              <Link
                to="/contact"
                className="inline-block rounded-lg bg-[#0A4A9E] px-4 py-2 text-white transition hover:bg-[#083a7c]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Sheffield Industrial Saws.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};