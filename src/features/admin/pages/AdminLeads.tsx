import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Search,
  Calendar,
  Download,
  LogOut,
  Inbox,
  ChevronLeft,
  ChevronRight,
  Building2,
  Mail,
  Phone,
} from 'lucide-react';
import {
  getLeads,
  getLeadStats,
  exportLeads,
} from '@/features/services/lead.service';

// ---------------------------------------------------------------------------
// Status badge helper
// ---------------------------------------------------------------------------

const STATUS_STYLES: Record<string, string> = {
  NEW: 'bg-blue-50 text-[#0A4A9E] ring-1 ring-inset ring-blue-100',
  CONTACTED: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100',
  QUALIFIED: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100',
  CLOSED: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200',
};

function StatusBadge({ status }: { status?: string }) {
  const key = (status || 'NEW').toUpperCase();
  const style = STATUS_STYLES[key] ?? STATUS_STYLES.NEW;

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${style}`}
    >
      {key}
    </span>
  );
}

function TypeBadge({ type }: { type?: string }) {
  if (!type) return <span className="text-slate-400">—</span>;

  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
      {type}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Skeleton loaders
// ---------------------------------------------------------------------------

function StatCardSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 sm:rounded-xl sm:p-4">
      <div className="h-2.5 w-8 animate-pulse rounded bg-slate-200 sm:h-3 sm:w-16" />
      <div className="mt-1.5 h-5 w-7 animate-pulse rounded bg-slate-200 sm:mt-3 sm:h-7 sm:w-12" />
    </div>
  );
}

function TableRowSkeleton() {
  return (
    <tr className="border-b border-slate-100">
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} className="px-4 py-4">
          <div className="h-4 w-full max-w-[140px] animate-pulse rounded bg-slate-200" />
        </td>
      ))}
    </tr>
  );
}

function LeadCardSkeleton() {
  return (
    <div className="border-b border-slate-100 p-3 sm:p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-2.5">
          <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-44 animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
        </div>
        <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-20 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
        <Inbox className="h-6 w-6 text-slate-400" strokeWidth={1.75} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-900">
        No leads found
      </h3>

      <p className="mt-1.5 max-w-xs text-sm text-slate-500">
        Try adjusting your search or date range filters to find what you're
        looking for.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 transition hover:border-slate-300 hover:shadow-sm sm:rounded-xl sm:p-4">
      <p className="truncate text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
        {label}
      </p>

      <p className={`mt-0.5 text-lg font-bold tabular-nums sm:mt-1.5 sm:text-2xl ${accent}`}>
        {value}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function AdminLeads() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
  });

  const [exporting, setExporting] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const loadLeads = async () => {
    try {
      setLoading(true);

      const [leadResponse, statsResponse] = await Promise.all([
        getLeads(page, 20, debouncedSearch, startDate, endDate),
        getLeadStats(),
      ]);

      setLeads(leadResponse.data);
      setTotalPages(leadResponse.pagination.totalPages);
      setTotalLeads(leadResponse.pagination.total);
      setStats(statsResponse);
    } catch {
      toast.error('Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debouncedSearch, startDate, endDate]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, startDate, endDate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
  };

  const handleExport = async () => {
    try {
      setExporting(true);
      await exportLeads(search, startDate, endDate);
    } catch {
      toast.error('Export failed');
    } finally {
      setExporting(false);
    }
  };

  const showSkeleton = loading;
  const showEmpty = !loading && leads.length === 0;
  const showData = !loading && leads.length > 0;

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col p-1.5 sm:p-4 lg:p-6">
        <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* ----------------------------------------------------------- */}
          {/* Sticky header                                              */}
          {/* ----------------------------------------------------------- */}
          <div className="sticky top-0 z-20 flex-shrink-0 border-b border-slate-200 bg-white">
            <div className="px-3 pt-3 sm:px-6 sm:pt-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="truncate text-base font-bold text-slate-900 sm:text-2xl">
                    Leads Dashboard
                  </h1>

                  <p className="text-xs text-slate-500 sm:mt-0.5 sm:text-sm">
                    {totalLeads.toLocaleString()} total{' '}
                    {totalLeads === 1 ? 'lead' : 'leads'}
                  </p>
                </div>

                <div className="flex flex-shrink-0 gap-1.5 sm:gap-2">
                  <button
                    onClick={handleExport}
                    disabled={exporting}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:px-3.5 sm:py-2 sm:text-sm"
                  >
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                    <span className="hidden sm:inline">
                      {exporting ? 'Exporting…' : 'Export Excel'}
                    </span>
                    <span className="sm:hidden">
                      {exporting ? '…' : 'Export'}
                    </span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:px-3.5 sm:py-2 sm:text-sm"
                  >
                    <LogOut className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-3 grid grid-cols-4 gap-1.5 sm:mt-5 sm:gap-3">
                {showSkeleton ? (
                  <>
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                  </>
                ) : (
                  <>
                    <StatCard
                      label="Total"
                      value={stats.total}
                      accent="text-slate-900"
                    />
                    <StatCard
                      label="Today"
                      value={stats.today}
                      accent="text-[#0A4A9E]"
                    />
                    <StatCard
                      label="Week"
                      value={stats.thisWeek}
                      accent="text-[#0A4A9E]"
                    />
                    <StatCard
                      label="Month"
                      value={stats.thisMonth}
                      accent="text-[#0A4A9E]"
                    />
                  </>
                )}
              </div>

              {/* Filters */}
              <div className="mt-3 grid grid-cols-2 gap-2 pb-3 sm:mt-5 sm:grid-cols-2 sm:gap-3 sm:pb-5 lg:grid-cols-[2fr_1fr_1fr]">
                <div className="relative col-span-2 lg:col-span-1">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    strokeWidth={2}
                  />
                  <input
                    type="text"
                    placeholder="Search by name, email, company…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0A4A9E] focus:bg-white focus:ring-1 focus:ring-[#0A4A9E]/20 sm:py-2.5"
                  />
                </div>

                <div className="relative">
                  <Calendar
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    strokeWidth={2}
                  />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-2 text-xs text-slate-900 outline-none transition focus:border-[#0A4A9E] focus:bg-white focus:ring-1 focus:ring-[#0A4A9E]/20 sm:py-2.5 sm:pr-3 sm:text-sm"
                  />
                </div>

                <div className="relative">
                  <Calendar
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    strokeWidth={2}
                  />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-2 text-xs text-slate-900 outline-none transition focus:border-[#0A4A9E] focus:bg-white focus:ring-1 focus:ring-[#0A4A9E]/20 sm:py-2.5 sm:pr-3 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* Scrollable content                                         */}
          {/* ----------------------------------------------------------- */}
          <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
            {showEmpty && <EmptyState />}

            {(showSkeleton || showData) && (
              <>
                {/* Desktop table */}
                <div className="hidden overflow-x-auto lg:block">
                  <table className="w-full min-w-[860px] border-collapse text-left">
                    <thead className="sticky top-0 z-10 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <tr>
                        <th className="border-b border-slate-200 px-4 py-3">
                          Date
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3">
                          Name
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3">
                          Company
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3">
                          Type
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3">
                          Email
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {showSkeleton
                        ? Array.from({ length: 8 }).map((_, i) => (
                            <TableRowSkeleton key={i} />
                          ))
                        : leads.map((lead) => (
                            <tr
                              key={lead.id}
                              onClick={() =>
                                (window.location.href = `/admin/leads/${lead.id}`)
                              }
                              className="group cursor-pointer border-b border-slate-100 transition hover:bg-slate-50"
                            >
                              <td className="whitespace-nowrap px-4 py-3.5 text-sm text-slate-500">
                                {new Date(lead.createdAt).toLocaleDateString(
                                  'en-GB',
                                  {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                  },
                                )}
                              </td>

                              <td className="px-4 py-3.5">
                                <Link
                                  to={`/admin/leads/${lead.id}`}
                                  state={{ lead }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-sm font-medium text-slate-900 group-hover:text-[#0A4A9E]"
                                >
                                  {lead.name}
                                </Link>
                              </td>

                              <td className="max-w-[160px] truncate px-4 py-3.5 text-sm text-slate-600">
                                {lead.company || (
                                  <span className="text-slate-400">—</span>
                                )}
                              </td>

                              <td className="px-4 py-3.5">
                                <TypeBadge type={lead.type} />
                              </td>

                              <td className="max-w-[220px] truncate px-4 py-3.5 text-sm text-slate-600">
                                {lead.email}
                              </td>

                              <td className="px-4 py-3.5">
                                <StatusBadge status={lead.status} />
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile / tablet cards */}
                <div className="lg:hidden">
                  {showSkeleton
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <LeadCardSkeleton key={i} />
                      ))
                    : leads.map((lead) => (
                        <Link
                          key={lead.id}
                          to={`/admin/leads/${lead.id}`}
                          state={{ lead }}
                          className="block border-b border-slate-100 p-3 transition active:bg-slate-50 sm:p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="truncate text-sm font-semibold text-slate-900">
                                  {lead.name}
                                </h3>
                              </div>

                              {lead.company && (
                                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                                  <Building2
                                    className="h-3.5 w-3.5 flex-shrink-0"
                                    strokeWidth={2}
                                  />
                                  <span className="truncate">
                                    {lead.company}
                                  </span>
                                </div>
                              )}

                              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                                <Mail
                                  className="h-3.5 w-3.5 flex-shrink-0"
                                  strokeWidth={2}
                                />
                                <span className="truncate">{lead.email}</span>
                              </div>

                              {lead.phone && (
                                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                                  <Phone
                                    className="h-3.5 w-3.5 flex-shrink-0"
                                    strokeWidth={2}
                                  />
                                  <span>{lead.phone}</span>
                                </div>
                              )}

                              {lead.subject && (
                                <p className="mt-2 truncate text-sm font-medium text-slate-800">
                                  {lead.subject}
                                </p>
                              )}

                              {lead.message && (
                                <p className="mt-0.5 truncate text-xs text-slate-500">
                                  {lead.message}
                                </p>
                              )}
                            </div>

                            <div className="flex flex-shrink-0 flex-col items-end gap-2">
                              <span className="whitespace-nowrap text-xs text-slate-400">
                                {new Date(lead.createdAt).toLocaleDateString(
                                  'en-GB',
                                  { day: '2-digit', month: 'short' },
                                )}
                              </span>
                              <StatusBadge status={lead.status} />
                            </div>
                          </div>
                        </Link>
                      ))}
                </div>
              </>
            )}
          </div>

          {/* ----------------------------------------------------------- */}
          {/* Sticky footer / pagination                                 */}
          {/* ----------------------------------------------------------- */}
          <div className="flex-shrink-0 border-t border-slate-200 bg-white px-3 py-2.5 sm:px-6 sm:py-3.5">
            <div className="flex items-center justify-between gap-4">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <span className="text-sm font-medium text-slate-600">
                Page {page} of {totalPages || 1}
              </span>

              <button
                disabled={page === totalPages || totalPages === 0}
                onClick={() => setPage((prev) => prev + 1)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}