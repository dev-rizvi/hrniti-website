'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft,
  Save, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  Building2,
  FileText
} from 'lucide-react';
import { createCaseStudyAction } from '../actions';

export default function CreateCaseStudyPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    logoText: '',
    industry: '',
    tag: 'manufacturing',
    slug: '',
    title: '',
    challenge: '',
    solution: '',
    metric1: '',
    metric2: '',
    metric3: '',
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const company = e.target.value;
    // Auto-generate logo text from first letters
    const logoText = company
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();

    setFormData(prev => ({
      ...prev,
      company,
      logoText: prev.logoText ? prev.logoText : logoText,
      slug: prev.slug ? prev.slug : generateSlug(company)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    if (!formData.slug.trim()) {
      setMessage({ type: 'error', text: 'Slug is required.' });
      setSaving(false);
      return;
    }

    const metrics = [formData.metric1, formData.metric2, formData.metric3].filter(Boolean);

    try {
      const result = await createCaseStudyAction({
        slug: formData.slug.trim(),
        company: formData.company,
        logoText: formData.logoText.slice(0, 3),
        industry: formData.industry || 'Manufacturing',
        tag: formData.tag,
        title: formData.title,
        challenge: formData.challenge,
        solution: formData.solution,
        metrics,
      });

      if (!result.success) {
        throw new Error(result.error);
      }
      
      setMessage({ type: 'success', text: 'Case study created successfully! Redirecting...' });
      
      setTimeout(() => {
        router.push('/admin/case-studies');
        router.refresh();
      }, 1500);
    } catch (err: any) {
      console.error('Error creating case study:', err);
      setMessage({ type: 'error', text: err.message || 'Error occurred while saving case study.' });
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12 w-full">
      
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/admin/case-studies')}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl transition-all cursor-pointer text-slate-500 hover:text-slate-800"
          title="Go Back"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Add New Case Study</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Create a new client story detailing challenge, solution, and outcomes.</p>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
        }`}>
          {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
          <span>{message.text}</span>
        </div>
      )}

      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-slate-400" /> Client & Industry Info
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleCompanyChange}
                  placeholder="e.g. Star Engineers"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Logo Initials (Max 3 letters)</label>
                <input
                  type="text"
                  required
                  value={formData.logoText}
                  onChange={(e) => setFormData({ ...formData, logoText: e.target.value.toUpperCase().slice(0, 3) })}
                  placeholder="e.g. SE"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Industry Title</label>
                <input
                  type="text"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  placeholder="e.g. Manufacturing, Education"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Industry Category (Filter Tag)</label>
                <select
                  value={formData.tag}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium bg-white"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Finance & Services</option>
                  <option value="education">Education</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">SEO Slug</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                  placeholder="e.g. star-engineers-case-study"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-mono"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-slate-400" /> Case Details
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Case Study Headline / Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Automating Shift Allocation & Payroll for 1,200+ Factory Workers"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">The Challenge</label>
              <textarea
                required
                rows={4}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="Explain the problems the client was facing before implementing HR Niti..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">The Solution</label>
              <textarea
                required
                rows={4}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                placeholder="Describe how HR Niti was implemented and how it solved their problems..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Key Metrics / Outcomes (Displayed as cards)
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Metric 1</label>
                <input
                  type="text"
                  required
                  value={formData.metric1}
                  onChange={(e) => setFormData({ ...formData, metric1: e.target.value })}
                  placeholder="e.g. 99.8% Payroll Run Accuracy"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Metric 2</label>
                <input
                  type="text"
                  required
                  value={formData.metric2}
                  onChange={(e) => setFormData({ ...formData, metric2: e.target.value })}
                  placeholder="e.g. Payroll prep time cut by 70%"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Metric 3 (Optional)</label>
                <input
                  type="text"
                  value={formData.metric3}
                  onChange={(e) => setFormData({ ...formData, metric3: e.target.value })}
                  placeholder="e.g. Zero compliance disputes"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={() => router.push('/admin/case-studies')}
              className="px-5 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/10 cursor-pointer disabled:opacity-55"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4.5 w-4.5 animate-spin" /> Saving...
                </>
              ) : (
                <>
                  <Save className="h-4.5 w-4.5" /> Save Case Study
                </>
              )}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
