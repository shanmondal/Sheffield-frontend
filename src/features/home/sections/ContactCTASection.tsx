

export const ContactCTASection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="flex flex-col items-center justify-center gap-16  ">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#0A4A9E]">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Need Technical Advice?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600 md:text-lg">
            Whether you need a replacement blade, repair service,
            machinery support or a custom solution, our team is ready to help.
          </p>
        </div>

        <div className="">

          {/* Contact Info */}
          {/* <div className="lg:col-span-2">

            <div className="rounded-3xl bg-[#0A4A9E] p-8 text-white">

              <h3 className="mb-8 text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5" />

                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">
                      +44 (0) 114 225 0804
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5" />

                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">
                      sales@sheffsaws.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5" />

                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-100">
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

              </div>
            </div>

          </div> */}

          {/* Form */}
          <div className="lg:col-span-3 ">

            <div className="rounded-3xl border border-[#08306B] bg-white p-8 shadow-sm">

              <form className="space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                      required
                      placeholder="Full  Name*"
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

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                    required
                    placeholder="Message*"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-[#0A4A9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083a7c]"
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