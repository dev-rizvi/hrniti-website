"use client";
import Link from "next/link";
import {
    Factory, Laptop2, ShoppingBag, HeartPulse,
    Users2, Landmark, ArrowRight, CheckCircle2, Sparkles, LucideIcon
} from "lucide-react";
import { industries } from "@/lib/industriesData";

const FEATURED_SLUGS = [
    "information-technology",
    "manufacturing",
    "healthcare",
    "retail",
    "staffing-and-recruitment",
    "financial-services",
];

const ICON_MAP: Record<string, LucideIcon> = {
    "information-technology": Laptop2,
    manufacturing: Factory,
    healthcare: HeartPulse,
    retail: ShoppingBag,
    "staffing-and-recruitment": Users2,
    "financial-services": Landmark,
};

export default function IndustriesSection() {
    const featuredIndustries = industries.filter((ind) => FEATURED_SLUGS.includes(ind.slug));

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 md:px-6">

                {/* Compact Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
                        <Sparkles className="h-3.5 w-3.5" /> Tailored Industry Configurations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        HRMS Engine Built for <span className="text-emerald-600">Your Specific Sector</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-2 leading-relaxed">
                        Pre-configured shift patterns, state compliance rules, and mobile workflows designed for how your industry actually operates.
                    </p>
                </div>

                {/* Sleek 6-Card Compact Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {featuredIndustries.map((ind) => {
                        const Icon = ICON_MAP[ind.slug] || Laptop2;
                        return (
                            <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon & Title Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                            {ind.title}
                                        </span>
                                    </div>

                                    {/* Headline & Summary */}
                                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                                        {ind.headline}
                                    </h3>
                                    <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                                        {ind.summary}
                                    </p>

                                    {/* Compact 2-Bullet Highlights */}
                                    <div className="space-y-1.5 mb-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        {ind.solutions.slice(0, 2).map((s) => (
                                            <div key={s} className="flex items-start gap-1.5 text-[11px] font-semibold text-slate-700">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="line-clamp-1">{s}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer CTA */}
                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                                    <span>Explore {ind.title} HRMS</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom CTA Banner */}
                <div className="text-center mt-12">
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
                    >
                        <span>Explore All 12 Industry Solutions Directory</span>
                        <ArrowRight className="h-4 w-4 text-emerald-400" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
