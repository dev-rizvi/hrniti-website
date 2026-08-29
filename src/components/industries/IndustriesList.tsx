"use client";
import { useState } from "react";
import Link from "next/link";
import {
    Factory, Laptop2, ShoppingBag, Pill, HeartPulse, Landmark,
    Users2, Hotel, Briefcase, Calculator, HardHat, GraduationCap, Truck,
    ArrowRight, CheckCircle2, Search, LucideIcon, Sparkles, Filter
} from "lucide-react";
import { industries } from "@/lib/industriesData";

const ICON_MAP: Record<string, LucideIcon> = {
    Laptop2, Users2, Hotel, Briefcase, Calculator, Landmark,
    HardHat, HeartPulse, GraduationCap, Factory, Truck, ShoppingBag, Pill
};

const CATEGORIES = [
    { id: "all", label: "All 12 Sectors" },
    { id: "tech", label: "Tech & Corporate Services" },
    { id: "industrial", label: "Industrial & Manufacturing" },
    { id: "healthcare", label: "Healthcare & Education" },
    { id: "retail", label: "Retail & Hospitality" },
];

export default function IndustriesList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredIndustries = industries.filter((ind) => {
        const query = searchTerm.toLowerCase().trim();
        const matchesSearch =
            !query ||
            ind.title.toLowerCase().includes(query) ||
            ind.summary.toLowerCase().includes(query) ||
            ind.subSegments.some((sub) => sub.toLowerCase().includes(query));

        let matchesCat = true;
        if (selectedCategory === "tech") {
            matchesCat = ["information-technology", "human-resources", "professional-services", "financial-services", "staffing-and-recruitment"].includes(ind.slug);
        } else if (selectedCategory === "industrial") {
            matchesCat = ["manufacturing", "construction", "logistics"].includes(ind.slug);
        } else if (selectedCategory === "healthcare") {
            matchesCat = ["healthcare", "education"].includes(ind.slug);
        } else if (selectedCategory === "retail") {
            matchesCat = ["hospitality", "retail"].includes(ind.slug);
        }

        return matchesSearch && matchesCat;
    });

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        Comprehensive Industry Directory
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
                        Tailored HR Solutions Across Every Industry Vertical
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Select your sector to see how HR Niti addresses specific compliance requirements, shift structures, and workforce operations.
                    </p>
                </div>

                {/* Filter Controls Bar */}
                <div className="max-w-4xl mx-auto mb-12 space-y-4">
                    {/* Search Input */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search sector, sub-segment, or solution (e.g. IT, Healthcare, Retail, Staffing, Factory)..."
                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none shadow-sm transition-all"
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${selectedCategory === cat.id
                                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                                    : "bg-white border border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredIndustries.map((ind) => {
                        const Icon = ICON_MAP[ind.iconName] || Laptop2;
                        return (
                            <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                className="group relative bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-1.5 transition-all flex flex-col justify-between overflow-hidden"
                            >
                                {/* Top Accent Gradient Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                                <div>
                                    {/* Icon & Category Tag */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-700 p-3 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/60">
                                            {ind.title}
                                        </span>
                                    </div>

                                    {/* Headline & Summary */}
                                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                                        {ind.headline}
                                    </h3>
                                    <p className="text-xs md:text-sm text-slate-600 mb-5 leading-relaxed">
                                        {ind.summary}
                                    </p>

                                    {/* Key Capabilities */}
                                    <div className="space-y-2 mb-6">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Capabilities:</p>
                                        <ul className="space-y-2">
                                            {ind.solutions.slice(0, 3).map((s) => (
                                                <li key={s} className="flex items-start gap-2 text-xs text-slate-600">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span className="leading-snug">{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Sub-Segments Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {ind.subSegments.slice(0, 3).map((sub) => (
                                            <span key={sub} className="text-[10px] bg-emerald-50 text-emerald-800 font-medium px-2 py-0.5 rounded border border-emerald-100">
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer CTA Link */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                                    <span>Explore {ind.title} Solutions</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {filteredIndustries.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 max-w-md mx-auto">
                        <Filter className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-slate-800">No industry match found</h4>
                        <p className="text-slate-500 text-xs mt-1">Try searching with a different term or clear your category filter.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
                            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors"
                        >
                            Reset Search &amp; Filters
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
