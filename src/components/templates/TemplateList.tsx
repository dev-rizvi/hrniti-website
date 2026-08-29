"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, FileText, ArrowRight, HelpCircle, Sparkles } from "lucide-react";

// Categories definitions matching our seeded templates
const categories = [
    { id: "all", name: "All Templates" },
    { id: "recruitment", name: "Recruitment" },
    { id: "onboarding", name: "Onboarding" },
    { id: "compliance", name: "Compliance" },
    { id: "performance", name: "Performance" },
    { id: "strategy", name: "Strategy" },
    { id: "offboarding", name: "Offboarding" }
];

// Helper to get category tag color
function getTagColor(tag: string) {
    switch (tag.toLowerCase()) {
        case "recruitment":
            return "bg-blue-50 text-blue-700 border-blue-100";
        case "onboarding":
            return "bg-teal-50 text-teal-700 border-teal-100";
        case "compliance":
            return "bg-rose-50 text-rose-700 border-rose-100";
        case "performance":
            return "bg-purple-50 text-purple-700 border-purple-100";
        case "strategy":
            return "bg-amber-50 text-amber-700 border-amber-100";
        case "offboarding":
            return "bg-slate-50 text-slate-700 border-slate-100";
        default:
            return "bg-emerald-50 text-emerald-700 border-emerald-100";
    }
}

interface Template {
    id: string;
    title: string;
    slug: string;
    description: string;
    tag: string;
    file_url?: string | null;
}

export default function TemplateList({ initialTemplates }: { initialTemplates: Template[] }) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter templates
    const filteredTemplates = useMemo(() => {
        return initialTemplates.filter(template => {
            const matchesCategory = selectedCategory === "all" || template.tag.toLowerCase() === selectedCategory;
            const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  template.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery, initialTemplates]);

    return (
        <div className="space-y-10">
            {/* ─── SEARCH & FILTER TABS ─── */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center">
                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    {categories.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setSelectedCategory(c.id)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                selectedCategory === c.id 
                                    ? "bg-slate-900 text-white shadow-md shadow-slate-950/10" 
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100/80 hover:text-slate-800"
                            }`}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>

                {/* Search box */}
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:border-slate-350 focus:bg-white transition-all text-slate-700 placeholder-slate-400"
                    />
                </div>
            </div>

            {/* ─── TEMPLATE GRID ─── */}
            {filteredTemplates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                        <Link 
                            key={template.id} 
                            href={template.file_url || `/templates/${template.slug}`}
                            target={template.file_url ? "_blank" : "_self"}
                            className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                        >
                            {/* Accent indicator bar */}
                            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 w-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="p-8 flex flex-col flex-grow justify-between">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 rounded-xl flex items-center justify-center transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${getTagColor(template.tag)}`}>
                                            {template.tag}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                                        {template.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                        {template.description}
                                    </p>
                                </div>
                                
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold uppercase mt-6">
                                    <span>Doc Format</span>
                                    <div className="flex items-center text-emerald-600 font-bold group-hover:text-emerald-700 transition-colors">
                                        <span>View Template</span>
                                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 p-8 max-w-md mx-auto">
                    <HelpCircle className="w-12 h-12 text-slate-350 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-1">No templates found</h4>
                    <p className="text-slate-500 text-sm mb-6">
                        We couldn&apos;t find any templates matching &ldquo;{searchQuery}&rdquo;. Try another term.
                    </p>
                    <button 
                        onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                        className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm"
                    >
                        Reset filters
                    </button>
                </div>
            )}
        </div>
    );
}
