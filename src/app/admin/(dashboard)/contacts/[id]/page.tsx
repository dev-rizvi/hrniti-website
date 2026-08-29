'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft,
  Mail, 
  Phone, 
  Trash2, 
  CheckCircle, 
  Clock, 
  RefreshCw, 
  AlertCircle, 
  Check
} from 'lucide-react';
import { 
  getInquiryByIdAction, 
  updateInquiryStatusAction, 
  deleteInquiryAction 
} from '../actions';

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

export default function ContactDetailPage() {
  const router = useRouter();
  const params = useParams();
  const idString = params?.id as string;
  const inquiryId = idString ? parseInt(idString, 10) : NaN;

  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');

  const fetchInquiry = async () => {
    if (isNaN(inquiryId)) {
      setError('Invalid inquiry ID.');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await getInquiryByIdAction(inquiryId);
      if (res.success && res.inquiry) {
        setInquiry(res.inquiry as unknown as Inquiry);
      } else {
        setError(res.error || 'Failed to fetch inquiry details.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred while loading inquiry.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiry();
  }, [inquiryId]);

  const handleUpdateStatus = async (newStatus: string) => {
    if (!inquiry) return;
    setUpdating(true);
    try {
      const res = await updateInquiryStatusAction(inquiry.id, newStatus);
      if (res.success) {
        setInquiry(prev => prev ? { ...prev, status: newStatus } : null);
      } else {
        alert(res.error || 'Failed to update status.');
      }
    } catch (err: any) {
      alert(err.message || 'An error occurred.');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!inquiry) return;
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const res = await deleteInquiryAction(inquiry.id);
      if (res.success) {
        router.push('/admin/contacts');
      } else {
        alert(res.error || 'Failed to delete inquiry.');
      }
    } catch (err: any) {
      alert(err.message || 'An error occurred.');
    }
  };

  const formatDate = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'long',
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            New
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            In Progress
          </span>
        );
      case 'resolved':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Resolved
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-50 text-slate-600 border border-slate-100">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 w-full animate-fadeIn">
      {/* Back navigation */}
      <div>
        <Link 
          href="/admin/contacts" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Inquiries
        </Link>
      </div>

      {error && (
        <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm">
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
          <p className="font-bold text-slate-800 text-base">{error}</p>
          <Link 
            href="/admin/contacts"
            className="mt-4 inline-block px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
          >
            Go Back
          </Link>
        </div>
      )}

      {loading && !error && (
        <div className="bg-white border border-slate-100 rounded-3xl p-16 text-center shadow-sm flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-4 border-slate-100 border-t-[#006B3F] rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-slate-400">Loading inquiry details...</p>
        </div>
      )}

      {inquiry && !loading && !error && (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Details</p>
              <h1 className="text-xl font-extrabold text-slate-800 mt-1 leading-snug">
                {inquiry.subject}
              </h1>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status:</span>
              {getStatusBadge(inquiry.status)}
            </div>
          </div>

          {/* Details body */}
          <div className="p-8 space-y-8">
            
            {/* Submitter details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Submitted By</p>
                <p className="font-bold text-slate-800 text-base">{inquiry.name}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Date &amp; Time</p>
                <p className="font-bold text-slate-850">{formatDate(inquiry.created_at)}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</p>
                <a href={`mailto:${inquiry.email}`} className="font-bold text-[#006B3F] hover:underline flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  {inquiry.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Phone Number</p>
                <a href={`tel:${inquiry.phone}`} className="font-bold text-[#006B3F] hover:underline flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  {inquiry.phone}
                </a>
              </div>
            </div>

            {/* Message content block */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Message</p>
              <div className="bg-slate-50/20 border border-slate-100 p-6 rounded-2xl text-slate-700 leading-relaxed whitespace-pre-wrap font-normal text-base min-h-40">
                {inquiry.message}
              </div>
            </div>

            {/* Actions footer inside details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Change Status:</span>
                
                {inquiry.status !== 'in_progress' && (
                  <button
                    onClick={() => handleUpdateStatus('in_progress')}
                    disabled={updating}
                    className="px-4 py-2 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/50 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    Mark In Progress
                  </button>
                )}
                
                {inquiry.status !== 'resolved' && (
                  <button
                    onClick={() => handleUpdateStatus('resolved')}
                    disabled={updating}
                    className="px-4 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/50 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Check className="h-3.5 w-3.5" />
                    Mark Resolved
                  </button>
                )}
                
                {inquiry.status !== 'new' && (
                  <button
                    onClick={() => handleUpdateStatus('new')}
                    disabled={updating}
                    className="px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/50 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <RefreshCw className="h-3.5 w-3.5 animate-spin-slow" />
                    Mark New
                  </button>
                )}
              </div>

              <div>
                <button
                  onClick={handleDelete}
                  disabled={updating}
                  className="px-4 py-2 text-xs font-bold text-red-650 bg-red-50 hover:bg-red-100 border border-red-200/50 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  title="Delete Inquiry"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete Entry
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
