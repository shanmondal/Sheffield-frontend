import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getLeadById } from '@/features/services/lead.service';
export default function AdminLeadDetails() {
  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const loadLead = async () => {
      try {
        if (!id) return;

        const data = await getLeadById(id);

        setLead(data);
      } catch {
        toast.error('Failed to load lead');
      } finally {
        setLoading(false);
      }
    };

    loadLead();
  }, [id]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(lead.email);

      toast.success('Email copied');
    } catch {
      toast.error('Failed to copy email');
    }
  };

  const copyPhone = async () => {
    if (!lead.phone) return;

    try {
      await navigator.clipboard.writeText(lead.phone);

      toast.success('Phone copied');
    } catch {
      toast.error('Failed to copy phone');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="mx-auto max-w-5xl">
          <div className="animate-pulse rounded-xl bg-white p-6 shadow">
            <div className="h-8 w-64 rounded bg-gray-200" />

            <div className="mt-6 h-40 rounded bg-gray-200" />

            <div className="mt-6 h-60 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          {/* Header */}
          <div className="border-b bg-white p-6">
            <Link to="/admin/leads" className="text-blue-600 hover:underline">
              ← Back to Leads
            </Link>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {lead.subject || 'Website Enquiry'}
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Received on {new Date(lead.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    lead.type === 'QUOTE'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {lead.type}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    lead.status === 'NEW'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {lead.status}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 p-6">
            {/* Customer Details */}
            <div className="rounded-xl border bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold">Customer Details</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Name</p>

                  <p className="font-medium">{lead.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="break-all font-medium">{lead.email}</p>
                </div>

                {lead.phone && (
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>

                    <p className="font-medium">{lead.phone}</p>
                  </div>
                )}

                {lead.company && (
                  <div>
                    <p className="text-sm text-gray-500">Company</p>

                    <p className="font-medium">{lead.company}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm text-gray-500">Type</p>

                  <p className="font-medium">{lead.type}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Status</p>

                  <p className="font-medium">{lead.status}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={copyEmail}
                  className="rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-100"
                >
                  Copy Email
                </button>

                {lead.phone && (
                  <button
                    onClick={copyPhone}
                    className="rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-100"
                  >
                    Copy Phone
                  </button>
                )}

                <a
                  href={`mailto:${lead.email}`}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Message */}
            <div>
              <h2 className="mb-3 text-lg font-semibold">Message</h2>

              <div className="rounded-xl border bg-white p-6 leading-7 whitespace-pre-wrap">
                {lead.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
