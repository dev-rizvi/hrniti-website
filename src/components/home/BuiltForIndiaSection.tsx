import { Landmark, Smartphone, Building2, CalendarRange, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BuiltForIndiaSection() {
    const pillars = [
        {
            title: "Multi-State Statutory Engine",
            desc: "Automated calculation and ECR file generation for PF, ESIC, LWF, PT, and TDS 192 across Indian states.",
            icon: Landmark,
            color: "emerald",
            highlight: "Statutory Tax & Compliance Ready",
        },
        {
            title: "Mobile First & Self-Service HR",
            desc: "GPS Geofencing, Selfie Attendance, Leave Approvals, and Mobile Payslip downloads for field & office staff.",
            icon: Smartphone,
            color: "purple",
            highlight: "Easy Mobile Adoption",
        },
        {
            title: "Bank-Ready Payout Excel Export",
            desc: "Generate pre-formatted salary payout Excel sheets formatted for upload to major Indian corporate net-banking portals.",
            icon: Building2,
            color: "cyan",
            highlight: "Net Banking Upload Ready",
        },
        {
            title: "24/7 Shift & Overtime Roster Builder",
            desc: "Rotational shift management, night shift allowances, and overtime rule calculation for multi-location teams.",
            icon: CalendarRange,
            color: "amber",
            highlight: "Shift & Overtime Automation",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-y border-slate-800">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        India-Focused HR Engine
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Built for the Way <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200">India Works</span>
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
                        Engineered specifically for Indian business needs — from multi-branch statutory taxes and shop act rules to GPS field staff attendance.
                    </p>
                </div>

                {/* 4 Core Pillars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/40 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-white mb-2 leading-snug">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                        {pillar.desc}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                                    <span>{pillar.highlight}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Bar */}
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-900/60 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
                    <div className="text-center md:text-left">
                        <div className="text-lg font-extrabold text-white mb-1">
                            Ready to simplify payroll and HR for your Indian workforce?
                        </div>
                        <div className="text-xs text-emerald-200">
                            Go live with guided implementation and dedicated onboarding support.
                        </div>
                    </div>
                    <Link
                        href="/demo"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-xs md:text-sm transition-all shadow-lg shrink-0"
                    >
                        <span>Request Free Demo</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
