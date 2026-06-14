import { MapPin, Phone } from 'lucide-react';

export const ContactCTASection = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
          {/* Left Side */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
              Contact
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Need Technical
              <br />
              Advice?
            </h2>

            <p className="mt-6 max-w-md text-slate-600 leading-8">
              Whether you need a replacement blade, repair service, machinery
              support or a custom solution, our team is ready to help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <MapPin size={20} className="text-[#0A4A9E]" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Global Headquarters
                  </p>

                  <p className="mt-1 text-slate-600">
                    Imperial Works
                    <br />
                    Sheffield Road
                    <br />
                    Sheffield
                    <br />
                    S9 2YL
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Phone size={20} className="text-[#0A4A9E]" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Technical Support
                  </p>

                  <p className="mt-1 text-slate-600">+44 (0) 114 225 0804</p>

                  <p className="text-slate-600">sales@sheffsaws.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Full Name*"
                      className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Company
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Company*"
                      className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Phone*"
                      className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Subject*"
                    className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    required
                    placeholder="Message*"
                    className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0A4A9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083a7c]"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
