"use client";
import React from "react";
import Link from "next/link";
import { 
    ArrowLeft, Calendar, Tag, Clock, Sparkles,
    ShieldCheck, ArrowRight, AppWindow
} from "lucide-react";

interface ProductUpdate {
    id: string;
    title: string;
    slug: string;
    summary: string;
    category: string;
    content: string | null;
    created_at: Date | string;
    updated_at: Date | string;
}

interface UpdateViewerProps {
    update: ProductUpdate;
    relatedUpdates: ProductUpdate[];
}

export default function UpdateViewer({ update, relatedUpdates }: UpdateViewerProps) {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                
                {/* ─── BREADCRUMBS & BACK BUTTON ─── */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <Link href="/product-updates" className="hover:text-emerald-600 transition-colors">Changelog</Link>
                        <span>/</span>
                        <span className="text-slate-500">{update.category}</span>
                        <span>/</span>
                        <span className="text-slate-800 truncate max-w-[200px]">{update.title}</span>
                    </div>

                    <Link 
                        href="/product-updates" 
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-650 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to changelog
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* ─── LEFT COLUMN: DETAILS & HTML CONTENT (8 cols) ─── */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* Header Details Card */}
                        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-4 border border-emerald-100/50">
                                {update.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                                {update.title}
                            </h1>
                            <p className="text-slate-600 text-base leading-relaxed font-medium border-l-4 border-slate-200 pl-4 my-6 py-1">
                                {update.summary}
                            </p>

                            {/* Meta tags */}
                            <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-slate-100 text-xs font-semibold text-slate-500">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-slate-400" />
                                    <span>Released: {new Date(update.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    <span>Reading time: 3 mins</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Tag className="w-4 h-4 text-slate-400" />
                                    <span>Scope: Core Platform</span>
                                </div>
                            </div>
                        </div>

                        {/* Article body card */}
                        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
                            {/* Accent stripe */}
                            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 w-full" />
                            
                            <div className="p-8 md:p-12 space-y-6">
                                {update.content ? (
                                    <div 
                                        className="space-y-4 text-slate-700 text-[15px] leading-relaxed [&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-4 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-slate-800 [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4 [&_li]:text-slate-650 [&_strong]:font-bold [&_strong]:text-slate-900"
                                        dangerouslySetInnerHTML={{ __html: update.content }} 
                                    />
                                ) : (
                                    <div className="text-center py-20 text-slate-400">
                                        <span>No release details provided.</span>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* ─── RIGHT COLUMN: RELEASE INFO & RELATED (4 cols) ─── */}
                    <div className="lg:col-span-4 space-y-8 sticky top-24">
                        
                        {/* Meta Summary Widget */}
                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[65px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                            
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-2">
                                    <AppWindow className="w-5 h-5 text-emerald-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Release Metadata</span>
                                </div>

                                <div className="space-y-4 text-xs font-semibold text-slate-350">
                                    <div className="flex justify-between py-2 border-b border-slate-800">
                                        <span>Release Status</span>
                                        <span className="text-emerald-450 flex items-center gap-1">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            Active / Production
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-slate-800">
                                        <span>Version Group</span>
                                        <span className="text-white">v2.6.x Stable</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-slate-800">
                                        <span>Target Modules</span>
                                        <span className="text-white">HRMS Core, API</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span>Author</span>
                                        <span className="text-white">HR Niti Team</span>
                                    </div>
                                </div>

                                <Link 
                                    href="/contact-us"
                                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider cursor-pointer shadow-md"
                                >
                                    Schedule a Guided Demo
                                </Link>
                            </div>
                        </div>

                        {/* Related Updates list */}
                        {relatedUpdates.length > 0 && (
                            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                                    <Sparkles className="w-4.5 h-4.5 text-amber-500" />
                                    Recent Releases
                                </h4>
                                <div className="space-y-3">
                                    {relatedUpdates.map((ru) => (
                                        <Link 
                                            key={ru.id} 
                                            href={`/product-updates/${ru.slug}`}
                                            className="group flex flex-col p-3.5 bg-slate-50 hover:bg-emerald-50/30 rounded-2xl border border-slate-100 hover:border-emerald-100 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">
                                                    {ru.category}
                                                </span>
                                                <span className="text-[9px] text-slate-400 font-semibold">
                                                    {new Date(ru.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                </span>
                                            </div>
                                            <h5 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors line-clamp-1">
                                                {ru.title}
                                            </h5>
                                            <p className="text-slate-500 text-xs line-clamp-2 mt-1 leading-relaxed">
                                                {ru.summary}
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
