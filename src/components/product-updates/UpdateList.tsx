"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Flame, ArrowRight, HelpCircle, Sparkles } from "lucide-react";

// Categories definitions matching our seeded product updates
const categories = [
    { id: "all", name: "All Updates" },
    { id: "feature release", name: "Feature Releases" },
    { id: "enhancement", name: "Enhancements" },
    { id: "security", name: "Security" },
    { id: "api & integration", name: "API & Integrations" }
];

// Helper to get category style
function getCategoryStyle(category: string) {
    switch (category.toLowerCase()) {
        case "feature release":
            return {
                bg: "bg-emerald-50 text-emerald-700 border-emerald-100",
                line: "from-emerald-500 to-teal-400"
            };
        case "enhancement":
            return {
                bg: "bg-blue-50 text-blue-700 border-blue-100",
                line: "from-blue-500 to-indigo-500"
            };
        case "security":
            return {
                bg: "bg-rose-50 text-rose-700 border-rose-100",
                line: "from-rose-500 to-pink-500"
            };
        case "api & integration":
            return {
                bg: "bg-purple-50 text-purple-700 border-purple-100",
                line: "from-purple-500 to-indigo-500"
            };
        default:
            return {
                bg: "bg-slate-50 text-slate-700 border-slate-100",
                line: "from-slate-500 to-slate-400"
            };
    }
}

interface ProductUpdate {
    id: string;
    title: string;
    slug: string;
    summary: string;
    category: string;
    created_at: Date | string;
}

export default function UpdateList({ initialUpdates }: { initialUpdates: ProductUpdate[] }) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter updates
    const filteredUpdates = useMemo(() => {
        return initialUpdates.filter(update => {
            const matchesCategory = selectedCategory === "all" || update.category.toLowerCase() === selectedCategory;
            const matchesSearch = update.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  update.summary.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery, initialUpdates]);

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
                                    : "bg-slate-50 text-slate-650 hover:bg-slate-100/80 hover:text-slate-800"
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
                        placeholder="Search releases..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:border-slate-350 focus:bg-white transition-all text-slate-700 placeholder-slate-400"
                    />
                </div>
            </div>

            {/* ─── GRID OF UPDATES ─── */}
            {filteredUpdates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredUpdates.map((update) => {
                        const style = getCategoryStyle(update.category);
                        return (
                            <Link 
                                key={update.id} 
                                href={`/product-updates/${update.slug}`}
                                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                            >
                                {/* Category border line */}
                                <div className={`h-2 bg-gradient-to-r ${style.line} w-full`} />
                                
                                <div className="p-8 flex flex-col flex-grow justify-between">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${style.bg}`}>
                                                {update.category}
                                            </span>
                                            <span className="text-[11px] text-slate-450 font-semibold">
                                                {new Date(update.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                                            {update.title}
                                        </h3>
                                        
                                        <p className="text-slate-650 text-sm leading-relaxed line-clamp-4">
                                            {update.summary}
                                        </p>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold uppercase mt-6">
                                        <span>Release Log</span>
                                        <div className="flex items-center text-emerald-600 font-bold group-hover:text-emerald-700 transition-colors">
                                            <span>Read Changes</span>
                                            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 p-8 max-w-md mx-auto">
                    <HelpCircle className="w-12 h-12 text-slate-350 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-1">No updates found</h4>
                    <p className="text-slate-500 text-sm mb-6">
                        We couldn&apos;t find any releases matching &ldquo;{searchQuery}&rdquo;. Try another term.
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
