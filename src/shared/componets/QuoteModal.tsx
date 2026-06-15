// src/shared/components/QuoteModal.tsx

import { X } from 'lucide-react';
import { useState } from 'react';
import { createLead } from '@/shared/services/lead.service';
import { toast } from 'react-toastify';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export const QuoteModal = ({
  isOpen,
  onClose,
  source = 'quote-modal',
}: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await createLead({
        type: 'QUOTE',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        source,
      });

      toast.success(
        "Quote request submitted successfully. We'll get back to you shortly.",
      );

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error: any) {
      console.error(error);

      const message =
        error?.response?.data?.message ||
        'Failed to submit quote request. Please try again.';

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/60 p-3 sm:p-4">
      <div className="flex min-h-full items-center justify-center py-4 sm:py-8">
        <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Request a Quote
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Tell us about your requirements and we'll get back to you.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 transition hover:bg-slate-100"
            >
              <X size={22} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email*"
                  className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Phone</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Subject</label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your requirements..."
                className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
              />
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-[#0A4A9E] px-6 py-3 font-semibold text-white transition hover:bg-[#083a7c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Submitting...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
