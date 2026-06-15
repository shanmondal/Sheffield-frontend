// src/shared/components/QuoteModal.tsx

import { X } from 'lucide-react';
import { useState } from 'react';
import { createLead } from '@/shared/services/lead.service';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
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
      await createLead({
        type: 'QUOTE',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        source: 'quote-modal',
      });

      alert('Quote request submitted successfully');

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert('Failed to submit quote request');
    }
  };
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4">
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
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              className="h-12 rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#0A4A9E]"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="h-12 rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#0A4A9E]"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="h-12 rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#0A4A9E]"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="h-12 rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#0A4A9E]"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#0A4A9E]"
          />

          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            required
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0A4A9E]"
          />

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
              className="rounded-xl bg-[#0A4A9E] px-6 py-3 font-semibold text-white transition hover:bg-[#083a7c]"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
