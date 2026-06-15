import { useState } from 'react';
import { createLead } from '@/shared/services/lead.service';
import { toast } from 'react-toastify';

interface ContactFormProps {
  type?: 'CONTACT' | 'QUOTE';
  source?: string;
  submitText?: string;
  onSuccess?: () => void;
}

export const ContactForm = ({
  type = 'CONTACT',
  source = 'contact-page',

  onSuccess,
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
        type,
        source,
        ...formData,
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
        onSuccess?.();
      }, 1000);
    } catch (error: any) {
      console.error(error);

      const message =
        error?.response?.data?.message ||
        'Failed to submit  request. Please try again.';

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          <label className="mb-2 block text-sm font-medium">Company</label>

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
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message*"
          className="w-full rounded-xl border border-[#08306B] px-4 py-3 outline-none transition focus:border-[#0A4A9E]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#0A4A9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083a7c] disabled:cursor-not-allowed disabled:opacity-60"
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
    </form>
  );
};
