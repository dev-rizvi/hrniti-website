import Link from "next/link";
import { ArrowRight, IndianRupee, SlidersHorizontal, Layers, TrendingUp } from "lucide-react";

const pricingPoints = [
    { title: "Transparent Pricing", desc: "Simple, clear pricing with no hidden costs.", icon: IndianRupee },
    { title: "Pay for What You Need", desc: "Choose only the modules your business actually uses.", icon: SlidersHorizontal },
    { title: "Flexible Plans", desc: "Plans that fit teams of different sizes and needs.", icon: Layers },
    { title: "Scale as You Grow", desc: "Add modules and seats as your workforce grows.", icon: TrendingUp },
];

// TODO: once you have real usage data from paying customers, replace this
// qualitative list with actual measured outcomes (e.g. "X% faster payroll
// cycles") — don't publish numbers you can't back up yet.
const outcomes = [
    "Cut payroll processing from days to hours",
    "Fewer manual errors in attendance and payroll",
    "Less time spent answering routine HR queries",
];

export default function PricingROISection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Pricing pitch */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Cost-Effective Pricing, Built for Growing Teams
                        </h2>
                        <p className="text-slate-600 mb-10">
                            A budget-friendly HRMS with the essential features growing businesses need — without
                            paying for what you'll never use.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {pricingPoints.map((p, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                        <p.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm mb-1">{p.title}</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
                        >
                            See Pricing <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Right: ROI card */}
                    <div className="bg-gradient-to-br from-emerald-900 to-indigo-950 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-2">Maximize Your ROI with HR Niti</h3>
                        <p className="text-slate-300 text-sm mb-8">
                            What teams typically gain by moving off spreadsheets and manual processes.
                        </p>
                        <div className="space-y-4">
                            {outcomes.map((outcome, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-sm text-slate-100">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
