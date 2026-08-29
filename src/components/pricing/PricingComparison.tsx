import { CheckCircle2, TrendingDown, DollarSign, Award, ShieldCheck } from "lucide-react";

export default function PricingComparison() {
    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
                    
                    {/* Left text section */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-3 py-1 mb-4">
                            <TrendingDown className="h-4 w-4 text-green-600" />
                            <span className="text-xs font-bold text-green-800 uppercase tracking-wider">Unmatched Cost Value</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Cut Your HR Software Costs by Up to <span className="text-emerald-600">50%</span>
                        </h2>
                        
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Most HRMS platforms force you into rigid licensing structures and bundle modules you don't even use. HR Niti gives you enterprise-grade workflows and GenAI-powered automation at a fraction of standard market costs.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Zero Implementation Fees</h4>
                                    <p className="text-xs text-slate-500">Unlike competitors charging high setup fees, we migrate your database for free.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Flexible Module Tiers</h4>
                                    <p className="text-xs text-slate-500">Disable advanced modules and only pay for core database and leave-attendance tracking.</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">No Multi-Year Commitments</h4>
                                    <p className="text-xs text-slate-500">Enjoy flexible billing with monthly, quarterly, or annual contracts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right visual comparison card */}
                    <div className="lg:col-span-7">
                        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
                            {/* Accent lighting */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                            
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-emerald-400" />
                                Annual Cost Comparison (100 Employees)
                            </h3>
                            
                            {/* Competitors cost */}
                            <div className="mb-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="text-sm text-slate-450 font-semibold">Other Popular HRMS Tools</span>
                                    <span className="text-lg font-bold text-slate-300">₹1,44,000 / year</span>
                                </div>
                                <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
                                    <div className="bg-slate-550 h-full rounded-full w-full"></div>
                                </div>
                                <span className="text-[11px] text-slate-500 mt-1 block">Based on average pricing of Keka & HROne at ₹120/employee/mo</span>
                            </div>

                            {/* HR Niti cost */}
                            <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="text-sm font-bold text-emerald-400">HR Niti Standard Plan</span>
                                    <span className="text-xl font-extrabold text-emerald-400">₹71,940 / year</span>
                                </div>
                                <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
                                    <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full w-[50%]"></div>
                                </div>
                                <span className="text-[11px] text-slate-400 mt-1 block">Standard base (₹2,995) + 50 extra employees * ₹60 = ₹5,995/mo (Billed Annually)</span>
                            </div>

                            {/* Cost savings badge */}
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/15 border border-green-500/20 rounded-2xl p-5 flex flex-col md:flex-row justify-between items-center gap-4">
                                <div>
                                    <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-0.5">Total Savings</div>
                                    <div className="text-2xl font-black text-white">Save ₹72,060 / yr</div>
                                </div>
                                <div className="bg-green-500 text-slate-950 text-xs font-black px-4 py-2 rounded-xl uppercase tracking-wider shadow-lg shadow-green-500/25">
                                    50% Lower Cost
                                </div>
                            </div>
                            
                            {/* Trust badges */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-800 mt-8 pt-6 text-slate-400 text-xs">
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="h-4 w-4 text-green-400 shrink-0" />
                                    <span>No Setup Fees</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Award className="h-4 w-4 text-yellow-400 shrink-0" />
                                    <span>Free Database Migration</span>
                                </div>
                                <div className="flex items-center gap-1.5 col-span-2 md:col-span-1">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                                    <span>GenAI Assistant Included</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
