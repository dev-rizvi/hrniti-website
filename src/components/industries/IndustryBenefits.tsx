import type { Industry } from "@/lib/industriesData";
import { CheckCircle2, Zap } from "lucide-react";

export default function IndustryBenefits({ industry }: { industry: Industry }) {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
                        <Zap className="h-3.5 w-3.5 text-amber-400" />
                        Key Business Outcomes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Transform HR Operations Across Your {industry.title} Workforce
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
                        From day-to-day HR and attendance tracking to monthly payroll and statutory compliance, here is what changes once HR Niti is deployed.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {industry.benefits.map((b, i) => (
                        <div
                            key={b.title}
                            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 hover:border-emerald-500 hover:bg-slate-900 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                                        0{i + 1}
                                    </span>
                                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                </div>
                                <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                    {b.title}
                                </h3>
                                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                    {b.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
