import { Link, useLocation } from 'react-router-dom';

export default function AdminLeadDetails() {
  const location = useLocation();

  const lead = location.state?.lead;

  if (!lead) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-red-500">Lead data not found.</p>

            <Link to="/admin/leads" className="text-blue-600 mt-4 inline-block">
              ← Back to Leads
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow">
          {/* Header */}
          <div className="border-b p-6">
            <Link to="/admin/leads" className="text-blue-600 hover:underline">
              ← Back to Leads
            </Link>

            <h1 className="text-2xl font-bold mt-4">
              {lead.subject || 'Website Enquiry'}
            </h1>

            <p className="text-gray-500 mt-1">
              Received on {new Date(lead.createdAt).toLocaleString()}
            </p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <div>
              <h2 className="font-semibold text-gray-700">Customer</h2>

              <p className="mt-2 text-lg font-medium">{lead.name}</p>

              <p>{lead.email}</p>

              {lead.phone && <p>{lead.phone}</p>}

              {lead.company && <p>{lead.company}</p>}
            </div>

            <div>
              <h2 className="font-semibold text-gray-700 mb-2">Message</h2>

              <div className="bg-gray-50 border rounded-lg p-4 whitespace-pre-wrap">
                {lead.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
