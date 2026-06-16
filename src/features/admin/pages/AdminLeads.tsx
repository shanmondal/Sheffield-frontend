import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getLeads } from '@/features/services/lead.service';

export default function AdminLeads() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalLeads, setTotalLeads] = useState(0);

  const loadLeads = async () => {
    try {
      setLoading(true);

      const response = await getLeads(page);

      setLeads(response.data);

      setTotalPages(response.pagination.totalPages);

      setTotalLeads(response.pagination.total);
    } catch (error) {
      toast.error('Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [page]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Leads</h1>

              {!loading && (
                <p className="mt-1 text-gray-500">
                  Total Leads: <strong>{totalLeads}</strong>
                </p>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="p-6">
              <p>Loading leads...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="p-6">
              <p className="text-gray-500">No leads found.</p>
            </div>
          ) : (
            <>
              {/* Lead List */}
              <div>
                {leads.map((lead) => (
                  <Link
                    key={lead.id}
                    to={`/admin/leads/${lead.id}`}
                    state={{ lead }}
                    className="block border-b border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {lead.name}
                        </h3>

                        <p className="truncate text-sm text-gray-600">
                          {lead.email}
                        </p>

                        {lead.phone && (
                          <p className="text-sm text-gray-500">{lead.phone}</p>
                        )}

                        {lead.subject && (
                          <p className="mt-2 truncate font-medium text-gray-800">
                            {lead.subject}
                          </p>
                        )}

                        <p className="mt-1 truncate text-sm text-gray-500">
                          {lead.message}
                        </p>
                      </div>

                      <div className="whitespace-nowrap text-sm text-gray-400">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col items-center justify-between gap-4 border-t p-6 sm:flex-row">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                  className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="text-sm font-medium">
                  Page {page} of {totalPages}
                </span>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                  className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
