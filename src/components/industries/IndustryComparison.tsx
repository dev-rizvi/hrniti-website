"use client";

import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

export default function IndustryComparison() {
    const comparisons = [
        {
            feature: "Shift & Rostering Engine",
            generic: "Rigid 9-to-5 schedules with manual overtime entries",
            hrniti: "24/7 rotational, split-shift, and night differential rosters",
        },
        {
            feature: "Attendance Verification",
            generic: "Basic web punch prone to proxy check-ins",
            hrniti: "GPS geofencing, offline facial biometrics & WhatsApp check-in",
        },
        {
            feature: "Statutory Compliance",
            generic: "Standard PF calculation; manual state filings",
            hrniti: "Multi-state automated PF, ESIC, LWF, PT & Factory Act ECR returns",
        },
        {
            feature: "Payout & Billing Models",
            generic: "Single fixed salary structure across all employees",
            hrniti: "Client rate cards, daily wages, doctor retainers & trip allowances",
        },
        {
            feature: "Onboarding & Document Vault",
            generic: "Manual email attachments & physical paperwork",
            hrniti: "Instant mobile digital onboarding, NDA signoff & audit vault",
        },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Why Industry Configuration Matters
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
                        Generic HRMS vs HR Niti Tailored Engine
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Discover why leading Indian enterprises switch from generic one-size-fits-all platforms to HR Niti&apos;s industry-configured workforce system.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-12 bg-slate-800 p-4 border-b border-slate-700 font-bold text-xs md:text-sm uppercase tracking-wider">
                        <div className="col-span-4 text-slate-300">Feature Area</div>
                        <div className="col-span-4 text-red-400 flex items-center gap-1">
                            <XCircle className="h-4 w-4" /> Generic HRMS
                        </div>
                        <div className="col-span-4 text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" /> HR Niti Industry Engine
                        </div>
                    </div>

                    <div className="divide-y divide-slate-700/60">
                        {comparisons.map((c, index) => (
                            <div key={index} className="grid grid-cols-12 p-4 md:p-5 text-xs md:text-sm items-center hover:bg-slate-800/50 transition-colors">
                                <div className="col-span-4 font-extrabold text-white pr-2">
                                    {c.feature}
                                </div>
                                <div className="col-span-4 text-slate-400 pr-2 flex items-start gap-1.5">
                                    <span className="text-red-400 mt-0.5">✕</span>
                                    <span>{c.generic}</span>
                                </div>
                                <div className="col-span-4 text-emerald-300 font-medium flex items-start gap-1.5">
                                    <span className="text-emerald-400 mt-0.5">✓</span>
                                    <span>{c.hrniti}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
