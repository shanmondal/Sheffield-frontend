import { ContactForm } from '@/shared/componets/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A4A9E] to-[#083a7c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 uppercase tracking-[3px] text-blue-200">
            Contact Sheffield Industrial Saws
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Let's Discuss Your
            <span className="block text-blue-200">Cutting Requirements</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-blue-100">
            Whether you need a new saw blade, repair service, sharpening, or
            technical advice, our team is ready to help.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border p-8">
            <Phone className="mb-5 text-[#0A4A9E]" size={28} />
            <h3 className="mb-2 text-xl font-semibold">Call Us</h3>
            <p className="text-slate-600">+44 (0) 114 225 0804</p>
          </div>

          <div className="rounded-3xl border p-8">
            <Mail className="mb-5 text-[#0A4A9E]" size={28} />
            <h3 className="mb-2 text-xl font-semibold">Email</h3>
            <p className="text-slate-600">sales@sheffsaws.com</p>
          </div>

          <div className="rounded-3xl border p-8">
            <MapPin className="mb-5 text-[#0A4A9E]" size={28} />
            <h3 className="mb-2 text-xl font-semibold">Address</h3>
            <p className="text-slate-600">Sheffield, United Kingdom</p>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <ContactForm
              type="CONTACT"
              source="contact-page"
              submitText="Send Enquiry"
            />
          </div>
          {/* MAP */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Sheffield Industrial Saws"
              src="https://maps.google.com/maps?q=Imperial Works, Sheffield Road, Sheffield S9 2YL,United Kingdom&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-[600px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border bg-white p-10">
          <h2 className="mb-8 text-3xl font-bold">Why Work With Us?</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-semibold">UK Manufacturing</h3>

              <p className="text-slate-600">
                Precision engineered saw blades manufactured to the highest
                standards.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Technical Expertise
              </h3>

              <p className="text-slate-600">
                Experienced team helping you choose the right blade solution.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Worldwide Supply</h3>

              <p className="text-slate-600">
                Supporting customers across steel, engineering and manufacturing
                industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-[#0A4A9E] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Need a Quote?
          </h2>

          <p className="mt-4 text-blue-100">
            Contact our team today and receive expert advice
            for your cutting application.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-[#0A4A9E]">
            Request Quote
          </button>
        </div>
      </section> */}
    </div>
  );
};
