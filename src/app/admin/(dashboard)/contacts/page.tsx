'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles,
  Search,
  Mail,
  Phone,
  Trash2,
  CheckCircle,
  Eye,
  RefreshCw,
  AlertCircle,
  MessageSquare,
  Filter,
  Clock
} from 'lucide-react';
import { 
  getInquiriesAction, 
  updateInquiryStatusAction, 
  deleteInquiryAction 
} from './actions';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  created_at: Date | string;
}

export default function ContactInquiriesPage() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [error, setError] = useState('');

  const fetchInquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getInquiriesAction();
      if (res.success && res.inquiries) {
        setInquiries(res.inquiries as unknown as Inquiry[]);
      } else {
        setError(res.error || 'Failed to fetch inquiries.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred while loading inquiries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await updateInquiryStatusAction(id, newStatus);
      if (res.success) {
        setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
      } else {
        alert(res.error || 'Failed to update status.');
      }
    } catch (err: any) {
      alert(err.message || 'An error occurred.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const res = await deleteInquiryAction(id);
      if (res.success) {
        setInquiries(prev => prev.filter(inq => inq.id !== id));
      } else {
        alert(res.error || 'Failed to delete inquiry.');
      }
    } catch (err: any) {
      alert(err.message || 'An error occurred.');
    }
  };

  // Calculations
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter(i => i.status === 'new').length;
  const inProgressInquiries = inquiries.filter(i => i.status === 'in_progress').length;
  const resolvedInquiries = inquiries.filter(i => i.status === 'resolved').length;

  // Filter & Search
  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.includes(searchTerm) ||
      inq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            New
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            In Progress
          </span>
        );
      case 'resolved':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Resolved
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 text-slate-600 border border-slate-100">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Contact Inquiries</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Manage and respond to contact form submissions from your website.</p>
        </div>
        <button 
          onClick={fetchInquiries}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh Data
        </button>
      </div>

      {/* 4 KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Total Inquiries */}
        <div className="bg-[#006B3F] text-white rounded-3xl p-6 relative overflow-hidden group shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all hover:-translate-y-1">
          <div className="absolute right-[-10%] top-[-10%] w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">Total Inquiries</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <MessageSquare className="h-4 w-4" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">{totalInquiries}</h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-200 uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" /> All inquiries stored
          </div>
        </div>

        {/* New Inquiries */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">New Inquiries</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">{newInquiries}</h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" /> Require attention
          </div>
        </div>

        {/* In Progress */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">In Progress</span>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <Clock className="h-4.5 w-4.5" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">{inProgressInquiries}</h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 uppercase tracking-wide">
            <Clock className="h-3.5 w-3.5" /> Actively being handled
          </div>
        </div>

        {/* Resolved */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Resolved</span>
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <CheckCircle className="h-4.5 w-4.5" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">{resolvedInquiries}</h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" /> Completed responses
          </div>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        
        {/* Table Controls (Search & Filter) */}
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, phone, keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 text-sm rounded-2xl pl-10 pr-4 py-3 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-800 placeholder-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <Filter className="h-4 w-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status:</span>
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
              {['all', 'new', 'in_progress', 'resolved'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                    statusFilter === status 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {status.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Area */}
        {error && (
          <div className="p-8 text-center bg-red-50/50 text-red-600 flex flex-col items-center justify-center gap-3">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <p className="font-semibold text-sm">{error}</p>
            <button 
              onClick={fetchInquiries}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {!error && loading ? (
          <div className="py-24 flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-4 border-slate-100 border-t-[#006B3F] rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-slate-400">Loading inquiries...</p>
          </div>
        ) : !error && filteredInquiries.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 shadow-sm">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No inquiries found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
              {searchTerm || statusFilter !== 'all' 
                ? "We couldn't find any inquiries matching your search filters. Try clearing them."
                : "When users submit contact forms on your site, they will show up here in real-time."
              }
            </p>
          </div>
        ) : !error ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100/80">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">User Info</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Inquiry Details</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium">
                {filteredInquiries.map((inq) => (
                  <tr 
                    key={inq.id}
                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                    onClick={() => router.push(`/admin/contacts/${inq.id}`)}
                  >
                    <td className="px-6 py-5 whitespace-nowrap text-xs text-slate-400">
                      {formatDate(inq.created_at)}
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm font-bold text-slate-800">{inq.name}</div>
                      <div className="flex flex-col gap-0.5 text-xs text-slate-400 mt-1">
                        <span className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> {inq.email}</span>
                        <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {inq.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 max-w-xs md:max-w-md">
                      <div className="text-sm font-bold text-slate-700 truncate">{inq.subject}</div>
                      <div className="text-xs text-slate-400 mt-1 truncate max-w-sm font-normal">
                        {inq.message}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <div className="relative inline-block text-left">
                        <select
                          value={inq.status}
                          disabled={updatingId === inq.id}
                          onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                          className="bg-transparent border-0 font-bold p-0 pr-6 text-sm text-slate-800 outline-none cursor-pointer focus:ring-0 appearance-none inline-flex"
                        >
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          {getStatusBadge(inq.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => router.push(`/admin/contacts/${inq.id}`)}
                          className="p-2 text-slate-400 hover:text-[#006B3F] hover:bg-emerald-50 rounded-xl transition-all"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(inq.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                          title="Delete inquiry"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

      </div>

    </div>
  );
}
