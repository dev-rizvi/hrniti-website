"use client";

import { CheckCircle2, ShieldAlert, Sparkles, Check } from "lucide-react";
import type { Industry } from "@/lib/industriesData";

export default function IndustryPainPoints({ industry }: { industry: Industry }) {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Ambient Background Blur Objects */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm mb-3">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                        Industry Pain Points &amp; Solutions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Common {industry.title} HR Challenges — <span className="text-emerald-600">Solved</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                        Here is how HR Niti addresses the daily operational bottlenecks and compliance risks {industry.title.toLowerCase()} organizations encounter.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {industry.painPoints.map((point, i) => (
                        <div
                            key={point.title}
                            className="group relative bg-white border border-slate-200/90 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden"
                        >
                            {/* Top Accent Gradient Border */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 opacity-90 group-hover:opacity-100 transition-opacity"></div>

                            <div>
                                {/* Header Badge & Challenge Index */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                                        Challenge #{String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                        <ShieldAlert className="h-3 w-3 text-amber-500" />
                                        Resolved by HR Niti
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                                    {point.title}
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">
                                    {point.desc}
                                </p>

                                {/* Checkmark Bullets Grid */}
                                <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                                        Built-In System Capabilities:
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {point.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                                                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                                                </div>
                                                <span className="leading-snug">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* AI Summary Banner at Bottom */}
                <div className="max-w-4xl mx-auto mt-14 bg-gradient-to-r from-emerald-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-emerald-500/30">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                                Tailored Workforce Guarantee
                            </span>
                            <h4 className="text-xl font-extrabold text-white">
                                Need custom HR workflows for your {industry.title} operations?
                            </h4>
                            <p className="text-xs md:text-sm text-emerald-100 max-w-xl">
                                HR Niti solution architects configure custom attendance rules, shift allowances, and statutory reports to match your exact business model.
                            </p>
                        </div>
                        <a
                            href="#demo"
                            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
                        >
                            Configure My Workflow ➔
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
