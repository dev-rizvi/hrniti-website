"use client";
import React, { useState } from "react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import { submitTemplateDownloadLead } from "@/app/actions/templateActions";
import {
    ArrowLeft, Download, FileText, CheckCircle,
    Calendar, Tag, Clock, Share2, Sparkles,
    Mail, Building2, Phone, ArrowRight, ShieldCheck
} from "lucide-react";

// Parses the template's stored HTML (h3/h4/p/ul/li — the fixed set our
// seed content uses) into plain lines for PDF rendering.
function parseTemplateHtml(html: string): { type: "h3" | "h4" | "p" | "li"; text: string }[] {
    if (typeof window === "undefined" || !html) return [];
    const doc = new DOMParser().parseFromString(html, "text/html");
    const lines: { type: "h3" | "h4" | "p" | "li"; text: string }[] = [];
    doc.body.childNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        const el = node as Element;
        const tag = el.tagName.toLowerCase();
        if (tag === "h3" || tag === "h4" || tag === "p") {
            const text = (el.textContent || "").trim();
            if (text) lines.push({ type: tag as "h3" | "h4" | "p", text });
        } else if (tag === "ul" || tag === "ol") {
            el.querySelectorAll("li").forEach((li) => {
                const text = (li.textContent || "").trim();
                if (text) lines.push({ type: "li", text });
            });
        }
    });
    return lines;
}

function downloadAsPdf(template: { title: string; description: string; tag: string; content: string | null; slug: string }) {
    const pdf = new jsPDF("p", "pt", "a4");
    const marginX = 48;
    const pageWidth = pdf.internal.pageSize.getWidth() - marginX * 2;
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = 56;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    const titleLines = pdf.splitTextToSize(template.title, pageWidth);
    pdf.text(titleLines, marginX, y);
    y += titleLines.length * 22 + 6;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(120);
    pdf.text(`HR Niti Template — ${template.tag}`, marginX, y);
    y += 10;
    pdf.setDrawColor(220);
    pdf.line(marginX, y, marginX + pageWidth, y);
    y += 20;
    pdf.setTextColor(30);

    const lines = parseTemplateHtml(template.content || "");
    for (const line of lines) {
        const isHeading = line.type === "h3" || line.type === "h4";
        const isBullet = line.type === "li";
        pdf.setFont("helvetica", isHeading ? "bold" : "normal");
        pdf.setFontSize(line.type === "h3" ? 14 : line.type === "h4" ? 12 : 10.5);

        const indent = isBullet ? 14 : 0;
        const prefix = isBullet ? "•  " : "";
        const wrapped: string[] = pdf.splitTextToSize(prefix + line.text, pageWidth - indent);

        if (y + wrapped.length * 14 > pageHeight - 48) {
            pdf.addPage();
            y = 56;
        }
        if (isHeading) y += 6;
        pdf.text(wrapped, marginX + indent, y);
        y += wrapped.length * 14 + (isHeading ? 6 : 4);
    }

    pdf.save(`${template.slug}.pdf`);
}

function downloadAsWord(template: { title: string; description: string; content: string | null; slug: string }) {
    // A genuine Word-openable file: HTML wrapped with the MS Office XML
    // namespaces and served as application/msword. Word's HTML import
    // filter opens this correctly — unlike naming raw text ".docx".
    const htmlDoc = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>${template.title}</title></head>
<body>
<h1>${template.title}</h1>
<p><em>${template.description}</em></p>
${template.content || ""}
</body>
</html>`;
    const blob = new Blob(["﻿", htmlDoc], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${template.slug}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

interface Template {
    id: string;
    title: string;
    slug: string;
    description: string;
    tag: string;
    content: string | null;
    file_url?: string | null;
    updated_at: Date | string;
}

interface TemplateViewerProps {
    template: Template;
    relatedTemplates: Template[];
}

export default function TemplateViewer({ template, relatedTemplates }: TemplateViewerProps) {
    const [leadForm, setLeadForm] = useState({ email: "", company: "", phone: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const handleDownloadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setIsSaving(true);
        try {
            const result = await submitTemplateDownloadLead({
                email: leadForm.email,
                company: leadForm.company,
                phone: leadForm.phone,
                template_slug: template.slug,
                template_title: template.title,
            });
            if (!result.success) {
                setSubmitError(result.error || "Something went wrong. Please try again.");
                setIsSaving(false);
                return;
            }
            setIsSubmitted(true);
        } catch {
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                
                {/* ─── BREADCRUMBS & BACK BUTTON ─── */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <Link href="/templates" className="hover:text-emerald-600 transition-colors">Templates</Link>
                        <span>/</span>
                        <span className="text-slate-500">{template.tag}</span>
                        <span>/</span>
                        <span className="text-slate-800 truncate max-w-[200px]">{template.title}</span>
                    </div>

                    <Link 
                        href="/templates" 
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-650 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to all templates
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* ─── LEFT COLUMN: THE LIVE DOCUMENT PREVIEW (8 cols) ─── */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* Page Header Cover */}
                        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-4 border border-emerald-100/50">
                                {template.tag}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                                {template.title}
                            </h1>
                            <p className="text-slate-600 text-base leading-relaxed">
                                {template.description}
                            </p>

                            {/* Meta info tags */}
                            <div className="flex flex-wrap gap-4 items-center pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-slate-500">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-slate-400" />
                                    <span>Last Updated: {new Date(template.updated_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    <span>Reading time: 5 mins</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Tag className="w-4 h-4 text-slate-400" />
                                    <span>Document Type: Template Draft</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Paper Preview Container */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xl overflow-hidden relative">
                            {/* Premium document header banner */}
                            <div className="h-4 bg-gradient-to-r from-emerald-500 to-teal-400 w-full"></div>
                            
                            {/* Document Sheet Body */}
                            <div className="p-8 md:p-12 relative min-h-[500px]">
                                {/* Watermark watermark pattern */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] select-none z-0">
                                    <span className="text-8xl font-black text-slate-950 uppercase rotate-12">HR NITI PREVIEW</span>
                                </div>

                                <div className="relative z-10 space-y-6">
                                    {template.content ? (
                                        <div 
                                            className="space-y-4 text-slate-700 text-[15px] leading-relaxed [&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-4 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-slate-800 [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4 [&_li]:text-slate-600 [&_strong]:font-bold [&_strong]:text-slate-900"
                                            dangerouslySetInnerHTML={{ __html: template.content }} 
                                        />
                                    ) : (
                                        <div className="text-center py-20 text-slate-400">
                                            <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                            <span>No preview content loaded. Download the full template using the form.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* HR Niti CTA Bar below preview */}
                        <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <h4 className="font-bold text-emerald-950 text-sm">Need to automate contract generation?</h4>
                                <p className="text-emerald-800/80 text-xs mt-0.5">HR Niti generates offer letters & payroll items automatically from candidate cards.</p>
                            </div>
                            <Link 
                                href="/contact-us"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl uppercase tracking-wider shrink-0 transition-colors shadow-sm"
                            >
                                Contact Sales Team
                            </Link>
                        </div>
                    </div>

                    {/* ─── RIGHT COLUMN: INTERACTIVE FORM & RELATED (4 cols) ─── */}
                    <div className="lg:col-span-4 space-y-8 sticky top-24">
                        
                        {/* Download Lead Capture Box */}
                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                            
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                                        <Download className="w-4.5 h-4.5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider">Download PDF/DOCX</span>
                                </div>

                                <div className="space-y-1.5">
                                    <h3 className="text-lg font-black tracking-tight leading-snug">Get Free File Access</h3>
                                    <p className="text-slate-400 text-xs">Unlock edit access to customize, fill, or integrate this layout.</p>
                                </div>

                                <div className="h-px bg-slate-800"></div>

                                {!isSubmitted ? (
                                    <form onSubmit={handleDownloadSubmit} className="space-y-4 text-slate-800">
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                            <input 
                                                type="email" required
                                                value={leadForm.email}
                                                onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                                                placeholder="Work Email *"
                                                className="w-full bg-slate-800 text-white border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-emerald-500 transition-all placeholder-slate-500"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                            <input 
                                                type="text" required
                                                value={leadForm.company}
                                                onChange={e => setLeadForm({ ...leadForm, company: e.target.value })}
                                                placeholder="Company Name *"
                                                className="w-full bg-slate-800 text-white border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-emerald-500 transition-all placeholder-slate-500"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                            <input 
                                                type="tel" required
                                                value={leadForm.phone}
                                                onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                                                placeholder="Phone Number *"
                                                className="w-full bg-slate-800 text-white border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-emerald-500 transition-all placeholder-slate-500"
                                            />
                                        </div>

                                        {submitError && (
                                            <p className="text-rose-400 text-xs font-semibold -mt-1">{submitError}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSaving}
                                            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider cursor-pointer shadow-md"
                                        >
                                            {isSaving ? (
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <Download className="w-4.5 h-4.5" />
                                            )}
                                            <span>{isSaving ? "Saving..." : "Get Download Link"}</span>
                                        </button>
                                    </form>
                                ) : (
                                    <div className="py-6 text-center space-y-4">
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
                                                <ShieldCheck className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-bold text-white text-sm">Download Verified!</h4>
                                                <p className="text-slate-450 text-[11px]">Click the buttons below to download your template files.</p>
                                            </div>

                                            <div className="space-y-2">
                                                <button
                                                    type="button"
                                                    onClick={() => downloadAsWord(template)}
                                                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all uppercase tracking-wider cursor-pointer"
                                                >
                                                    <Download className="w-4 h-4" />
                                                    <span>Download Word Document</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => downloadAsPdf(template)}
                                                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-xl text-xs transition-all uppercase tracking-wider border border-slate-700 cursor-pointer"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    <span>Download PDF Version</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Related Templates list */}
                        {relatedTemplates.length > 0 && (
                            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                                    <Sparkles className="w-4.5 h-4.5 text-amber-500" />
                                    Related Templates
                                </h4>
                                <div className="space-y-3">
                                    {relatedTemplates.map((rt) => (
                                        <Link 
                                            key={rt.id} 
                                            href={`/templates/${rt.slug}`}
                                            className="group flex flex-col p-3.5 bg-slate-50 hover:bg-emerald-50/30 rounded-2xl border border-slate-100 hover:border-emerald-100 transition-all duration-300"
                                        >
                                            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1">
                                                {rt.tag}
                                            </span>
                                            <h5 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors line-clamp-1">
                                                {rt.title}
                                            </h5>
                                            <p className="text-slate-500 text-xs line-clamp-2 mt-1 leading-relaxed">
                                                {rt.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
