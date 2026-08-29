import { Sparkles, CheckCircle2, X } from "lucide-react";

const problems = [
    { label: "Excel Sheets for Attendance", rotate: -3 },
    { label: "WhatsApp Leave Approvals", rotate: 2 },
    { label: "Paper Registers & Memos", rotate: -2 },
    { label: "Manual Payroll Calculations", rotate: 3 },
    { label: "Scattered Employee Records", rotate: -1 },
];

const solutions = [
    "Automated Attendance & GPS",
    "1-Tap Mobile Approvals",
    "Digital Document Vault",
    "1-Click Bank Payroll Run",
    "Centralized Core HR Data",
];

const pillars = [
    {
        title: "One Platform, Every Module",
        desc: "Stop stitching together separate tools — payroll, attendance, leave, ATS, and appraisal live under one roof.",
    },
    {
        title: "Built to Scale With You",
        desc: "Configurable from 10 employees up to 1,000+, without migrating systems or re-learning UI.",
    },
    {
        title: "Software + Dedicated Support",
        desc: "An intuitive web and mobile app backed by dedicated HR specialists who pick up the phone when you call.",
    },
];

export default function OneSolutionSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-3">
                        <Sparkles className="h-3.5 w-3.5" /> Unified Platform
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        One Solution for <span className="text-emerald-600">All Your HR Challenges</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                        Replace messy spreadsheets, manual registers, and scattered WhatsApp chats with a single connected cloud system.
                    </p>
                </div>

                {/* Main Feature Layout with Custom Uploaded Centralized Core HR Image */}
                <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto mb-20">

                    {/* Left Column: Problem vs Solution Cards */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Without HR Niti */}
                            <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-6 shadow-sm">
                                <div className="text-xs font-extrabold uppercase tracking-wide text-red-600 mb-4 flex items-center gap-1.5">
                                    <X className="h-4 w-4" /> Without HR Niti
                                </div>
                                <div className="space-y-2.5">
                                    {problems.map((p) => (
                                        <div key={p.label} className="flex items-center gap-2 bg-white border border-red-100 rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs">
                                            <span className="text-red-500 font-bold">✕</span>
                                            <span>{p.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* With HR Niti */}
                            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6 shadow-sm">
                                <div className="text-xs font-extrabold uppercase tracking-wide text-emerald-700 mb-4 flex items-center gap-1.5">
                                    <CheckCircle2 className="h-4 w-4" /> With HR Niti
                                </div>
                                <div className="space-y-2.5">
                                    {solutions.map((s) => (
                                        <div key={s} className="flex items-center gap-2 bg-white border border-emerald-100 rounded-lg px-3.5 py-2 text-xs font-bold text-slate-800 shadow-2xs">
                                            <span className="text-emerald-500 font-bold">✓</span>
                                            <span>{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Custom Uploaded Centralized Core HR Image */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">
                            <img
                                src="/image/homepage/Centralized-Core-HR.webp"
                                alt="Centralized Core HR Platform"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold border border-emerald-500/30 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-amber-300" />
                                Centralized Core HR Dashboard
                            </div>
                        </div>
                    </div>

                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-emerald-400 hover:bg-white hover:shadow-xl transition-all"
                        >
                            <h3 className="font-extrabold text-slate-900 text-lg mb-2">{pillar.title}</h3>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
