import { ShieldCheck, Landmark, Lock, Headset, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustSection() {
    const badges = [
        { label: "100% Statutory Compliance", desc: "PF, ESIC, LWF, PT & TDS 192", icon: Landmark },
        { label: "Bank-Grade Encryption", desc: "Data encrypted in transit & at rest", icon: Lock },
        { label: "India Data Localization", desc: "Hosted securely on Indian servers", icon: ShieldCheck },
        { label: "24/7 Human HR Support", desc: "Direct call & WhatsApp assistance", icon: Headset },
    ];

    const recognitions = [
        "Top AI HRMS Platform",
        "Best Indian Payroll System",
        "Fastest Setup Software",
        "Top Employee Self-Service",
    ];

    return (
        <section className="py-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Sub-heading */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
                        <Award className="h-3.5 w-3.5" /> Trusted Across India
                    </span>
                    <p className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                        Built for Indian Enterprise Compliance &amp; Backed by Real Human Support
                    </p>
                </div>

                {/* 4 Trust Pillars */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
                    {badges.map((badge, i) => (
                        <div
                            key={i}
                            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all text-center flex flex-col items-center group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <badge.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xs md:text-sm font-extrabold text-slate-900 mb-1">{badge.label}</h3>
                            <p className="text-[11px] text-slate-500">{badge.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Recognitions & Badges Bar */}
                <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-xl border border-slate-800">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-300">Industry Recognition:</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        {recognitions.map((rec, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                                <span>{rec}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
