import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from '@/assets/images/SHEFFSAWS+LOGO+MAY18+-+WEBSITE.jpeg';
import { QuoteModal } from '../componets/QuoteModal';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Repairing', path: '/reparing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Sheffield Industrial Saws"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `pb-1 text-sm font-semibold transition ${
                  isActive
                    ? 'border-b-2 border-[#0A4A9E] text-[#0A4A9E]'
                    : 'text-slate-700 hover:text-[#0A4A9E]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => setQuoteOpen(true)}
          className="hidden lg:block rounded-lg bg-[#0A4A9E] px-6 py-3 font-semibold text-white transition hover:bg-[#1E63C6]"
        >
          Request Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-blue-50 text-[#0A4A9E]'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => setQuoteOpen(true)}
            className=" rounded-lg bg-[#0A4A9E] px-6 py-3 font-semibold text-white"
          >
            Request Quote
          </button>
        </nav>
      </div>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </header>
  );
};
