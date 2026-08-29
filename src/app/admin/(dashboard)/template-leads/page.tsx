import React from 'react';
import { Download, Mail, Building2, Phone, FileText, Sparkles } from 'lucide-react';
import { getTemplateDownloadLeads } from '@/app/actions/templateActions';

export const dynamic = 'force-dynamic';

export default async function TemplateLeadsPage() {
    const res = await getTemplateDownloadLeads();
    const leads = res.success && res.data ? res.data : [];

    const formatDate = (dateStr: Date | string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Template Download Leads</h1>
                <p className="text-sm text-slate-500 mt-2 font-medium">
                    Visitors who submitted their details to unlock an HR template download.
                </p>
            </div>

            {/* KPI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#006B3F] text-white rounded-3xl p-6 relative overflow-hidden shadow-lg shadow-emerald-900/10">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">Total Leads</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <Download className="h-4 w-4" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">{leads.length}</h2>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-200 uppercase tracking-wide">
                        <Sparkles className="h-3.5 w-3.5" /> All leads stored
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Unique Emails</span>
                    <h2 className="text-4xl font-extrabold tracking-tight mt-4 text-slate-900">
                        {new Set(leads.map((l: { email: string }) => l.email.toLowerCase())).size}
                    </h2>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Templates Requested</span>
                    <h2 className="text-4xl font-extrabold tracking-tight mt-4 text-slate-900">
                        {new Set(leads.map((l: { template_slug: string }) => l.template_slug)).size}
                    </h2>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
                {leads.length === 0 ? (
                    <div className="text-center py-20 px-8">
                        <Download className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-slate-900 mb-1">No leads yet</h4>
                        <p className="text-slate-500 text-sm">
                            Leads will appear here as soon as someone submits the download form on a template page.
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="text-left px-6 py-3 font-bold text-slate-500 uppercase text-xs tracking-wider">Contact</th>
                                    <th className="text-left px-6 py-3 font-bold text-slate-500 uppercase text-xs tracking-wider">Company</th>
                                    <th className="text-left px-6 py-3 font-bold text-slate-500 uppercase text-xs tracking-wider">Template</th>
                                    <th className="text-left px-6 py-3 font-bold text-slate-500 uppercase text-xs tracking-wider">Submitted</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {leads.map((lead: {
                                    id: string; email: string; phone: string; company: string;
                                    template_title: string; template_slug: string; created_at: Date | string;
                                }) => (
                                    <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 font-semibold text-slate-800">
                                                <Mail className="h-3.5 w-3.5 text-slate-400" /> {lead.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                                <Phone className="h-3 w-3" /> {lead.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <Building2 className="h-3.5 w-3.5 text-slate-400" /> {lead.company}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <FileText className="h-3.5 w-3.5 text-slate-400" /> {lead.template_title}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500 text-xs">{formatDate(lead.created_at)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
