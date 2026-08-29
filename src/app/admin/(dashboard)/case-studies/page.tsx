'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Building2,
  Coins,
  GraduationCap
} from 'lucide-react';
import { createClient } from '@/lib/supabase';
import { deleteCaseStudyAction } from './actions';

interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  logoText: string;
  industry: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: string[];
  created_at: string;
}

export default function AdminCaseStudiesPage() {
  const router = useRouter();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const ITEMS_PER_PAGE = 10;

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (err: any) {
      console.error('Error fetching case studies:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to load case studies.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    
    try {
      const result = await deleteCaseStudyAction(id);
      if (!result.success) {
        throw new Error(result.error);
      }

      setMessage({ type: 'success', text: 'Case study deleted successfully!' });
      fetchCaseStudies();
      setTimeout(() => setMessage(null), 4000);
    } catch (err: any) {
      console.error('Error deleting case study:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to delete case study.' });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredCaseStudies = caseStudies.filter(cs => 
    cs.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCaseStudies.length / ITEMS_PER_PAGE);
  const paginatedCaseStudies = filteredCaseStudies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getIcon = (tag: string) => {
    switch (tag) {
      case 'manufacturing': return <Building2 className="h-3.5 w-3.5 text-blue-600" />;
      case 'finance': return <Coins className="h-3.5 w-3.5 text-green-600" />;
      case 'education': return <GraduationCap className="h-3.5 w-3.5 text-purple-600" />;
      default: return <FileText className="h-3.5 w-3.5 text-slate-500" />;
    }
  };

  const getBadgeClass = (tag: string) => {
    switch (tag) {
      case 'manufacturing': return 'bg-blue-50 text-blue-700 border border-blue-100';
      case 'finance': return 'bg-green-50 text-green-700 border border-green-100';
      case 'education': return 'bg-purple-50 text-purple-700 border border-purple-100';
      default: return 'bg-slate-50 text-slate-700 border border-slate-100';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* Header and Add Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Case Studies</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Create and publish client success stories and HR implementation case studies.</p>
        </div>
        <Link
          href="/admin/case-studies/create"
          className="inline-flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md shadow-emerald-700/10 transition-all cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Case Study
        </Link>
      </div>

      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold w-full animate-fadeIn ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
        }`}>
          {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Toolbar & Search */}
      <div className="flex items-center bg-white border border-slate-100 rounded-2xl px-4 py-3 max-w-md shadow-sm">
        <Search className="h-4.5 w-4.5 text-slate-400 mr-3 shrink-0" />
        <input
          type="text"
          placeholder="Search case studies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-xs text-slate-800 bg-transparent outline-none placeholder-slate-400 font-medium"
        />
      </div>

      {/* Case Studies List */}
      {loading ? (
        <div className="flex items-center gap-2 py-12 text-slate-400">
          <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
          <span className="text-sm font-semibold">Loading case studies...</span>
        </div>
      ) : filteredCaseStudies.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center w-full shadow-sm space-y-3">
          <FileText className="h-12 w-12 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800">No case studies found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">Create a new case study to show how companies leverage HR Niti to automate their processes.</p>
        </div>
      ) : (
        <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Industry</th>
                <th className="px-6 py-4">SEO Slug</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/60 text-xs font-semibold text-slate-700">
              {paginatedCaseStudies.map((cs) => (
                <tr key={cs.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                        {cs.logoText}
                      </div>
                      <span className="font-bold text-slate-800">{cs.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <p className="text-slate-800 font-bold truncate" title={cs.title}>{cs.title}</p>
                    <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5" title={cs.challenge}>{cs.challenge}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${getBadgeClass(cs.tag)}`}>
                      {getIcon(cs.tag)}
                      {cs.industry}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-[10px] truncate max-w-[150px]" title={cs.slug}>{cs.slug}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/case-studies/edit/${cs.id}`}
                        className="p-1.5 inline-flex items-center justify-center hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-lg transition-colors cursor-pointer"
                        title="Edit Case Study"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(cs.id)}
                        className="p-1.5 inline-flex items-center justify-center hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                        title="Delete Case Study"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-slate-100 bg-slate-50/20">
              <p className="text-xs text-slate-500 font-medium">
                Showing <span className="font-bold text-slate-800">{Math.min(filteredCaseStudies.length, (currentPage - 1) * ITEMS_PER_PAGE + 1)}</span> to{' '}
                <span className="font-bold text-slate-800">{Math.min(filteredCaseStudies.length, currentPage * ITEMS_PER_PAGE)}</span> of{' '}
                <span className="font-bold text-slate-800">{filteredCaseStudies.length}</span> case studies
              </p>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all disabled:opacity-50 disabled:hover:bg-white cursor-pointer select-none"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1.5 px-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                        currentPage === page
                          ? 'bg-[#006B3F] text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all disabled:opacity-50 disabled:hover:bg-white cursor-pointer select-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
