'use client';

import React, { useState, useEffect } from "react";
import { Search, FileText, Building2, Coins, GraduationCap, X, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

interface CaseStudyItem {
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
}

export default function CaseStudiesClient({ initialCaseStudies }: { initialCaseStudies: any[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<"all" | "manufacturing" | "finance" | "education">("all");
    const [activeCase, setActiveCase] = useState<CaseStudyItem | null>(null);

    // If initialCaseStudies is empty or null, we can fallback to the empty state or handle gracefully.
    // The server component will pass all records fetched from database.
    const caseStudiesList = (initialCaseStudies || []).map((cs: any) => ({
        id: cs.id,
        slug: cs.slug,
        company: cs.company,
        logoText: cs.logoText,
        industry: cs.industry,
        tag: cs.tag,
        title: cs.title,
        challenge: cs.challenge,
        solution: cs.solution,
        metrics: cs.metrics || []
    }));

    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveCase(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const filteredCases = caseStudiesList.filter(item => {
        const matchesCategory = selectedCategory === "all" || item.tag === selectedCategory;
        const matchesSearch = item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.solution.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getIcon = (tag: string) => {
        switch (tag) {
            case "manufacturing": return <Building2 className="h-5 w-5 text-emerald-600" />;
            case "finance": return <Coins className="h-5 w-5 text-green-600" />;
            case "education": return <GraduationCap className="h-5 w-5 text-purple-600" />;
            default: return <FileText className="h-5 w-5 text-slate-600" />;
        }
    };

    const getBadgeClass = (tag: string) => {
        switch (tag) {
            case "manufacturing": return "bg-emerald-50 text-emerald-700 border border-emerald-100";
            case "finance": return "bg-green-50 text-green-700 border border-green-100";
            case "education": return "bg-purple-50 text-purple-700 border border-purple-100";
            default: return "bg-slate-50 text-slate-700 border border-slate-100";
        }
    };

    return (
        <>
            {/* Header section */}
            <section className="bg-slate-900 text-white pt-28 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-100">Client Case Studies</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                        Empowering Teams, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transforming HR</span>
                    </h1>

                    <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                        Read how companies utilize HR Niti to digitize core operations, streamline rotating shifts, run flawless payroll computations, and scale.
                    </p>
                </div>
            </section>

            {/* Sticky Filters & Search */}
            <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("all")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "all"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                        >
                            All Industries
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("manufacturing")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "manufacturing"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                        >
                            Manufacturing
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("finance")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "finance"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                        >
                            Finance & Services
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("education")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "education"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                        >
                            Education
                        </button>
                    </div>

                    {/* Search bar */}
                    <div className="relative w-full md:w-85">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by company or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    {filteredCases.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            {filteredCases.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveCase(item)}
                                    className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer group justify-between"
                                >
                                    <div>
                                        {/* Logo, name & Category header */}
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm uppercase">
                                                    {item.logoText}
                                                </div>
                                                <h3 className="font-bold text-slate-850 group-hover:text-emerald-600 transition-colors">
                                                    {item.company}
                                                </h3>
                                            </div>
                                            
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getBadgeClass(item.tag)}`}>
                                                {getIcon(item.tag)}
                                                {item.industry}
                                            </span>
                                        </div>

                                        <h4 className="text-base font-extrabold text-slate-900 leading-snug mb-3 min-h-[44px]">
                                            {item.title}
                                        </h4>
                                        
                                        <p className="text-sm text-slate-600 line-clamp-3 mb-6">
                                            {item.challenge}
                                        </p>
                                    </div>

                                    {/* Key Results list */}
                                    <div className="border-t border-slate-100 pt-5 mt-auto">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2.5">Key Highlights</span>
                                        <ul className="space-y-1.5 mb-5">
                                            {item.metrics.slice(0, 2).map((m: string, i: number) => (
                                                <li key={i} className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{m}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <button
                                            type="button"
                                            className="inline-flex items-center text-xs font-bold text-emerald-600 group-hover:text-emerald-700 gap-1.5 transition-colors cursor-pointer"
                                        >
                                            Read Case Details
                                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto shadow-sm">
                            <FileText className="h-12 w-12 text-slate-350 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-800 mb-1">No case studies found</h3>
                            <p className="text-slate-500 text-sm">We couldn't find any case studies matching your query.</p>
                            <button
                                type="button"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                                className="mt-4 inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Case Details Reader Modal */}
            {activeCase && (
                <div 
                    onClick={() => setActiveCase(null)}
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                >
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 flex flex-col max-h-[90vh] animate-scaleIn"
                    >
                        {/* Header banner */}
                        <div className="p-6 border-b border-slate-150 bg-slate-55 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm uppercase">
                                    {activeCase.logoText}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{activeCase.company}</h3>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{activeCase.industry} Industry</span>
                                </div>
                            </div>
                            
                            <button
                                type="button"
                                onClick={() => setActiveCase(null)}
                                className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                                aria-label="Close details"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                            <div>
                                <h4 className="text-lg font-extrabold text-slate-900 mb-2">{activeCase.title}</h4>
                                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100">
                                    Success Case Study
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-450 mb-1.5">The Challenge</h5>
                                    <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                        {activeCase.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-450 mb-1.5">The Solution</h5>
                                    <p className="text-sm text-slate-700 leading-relaxed bg-emerald-50/20 rounded-2xl p-4 border border-emerald-50/10">
                                        {activeCase.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Result Metrics */}
                            <div className="border-t border-slate-150 pt-6">
                                <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-450 mb-3">Key Performance Outcomes</h5>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {activeCase.metrics.map((metric, i) => (
                                        <div key={i} className="bg-slate-50 border border-slate-150 p-4 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mb-1.5 shrink-0" />
                                            <span className="text-xs font-bold text-slate-800 leading-snug">
                                                {metric}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer area */}
                        <div className="p-4 border-t border-slate-150 bg-slate-55 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setActiveCase(null)}
                                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl uppercase tracking-wider cursor-pointer"
                            >
                                Close Reader
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
