"use client";
import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

export default function ROICalculator() {
    const [employees, setEmployees] = useState(75);
    const [avgSalary, setAvgSalary] = useState(45000);

    // ROI Calculations:
    // HR hours saved: ~4.5 hours per employee per year in payroll & attendance work
    const hoursSavedPerMonth = Math.round((employees * 4.5) / 12);
    // Cost savings from error reduction & time savings (~₹450 per employee/mo)
    const monthlySavings = Math.round(employees * 480);
    const annualSavings = monthlySavings * 12;

    return (
        <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-emerald-50/40 relative overflow-hidden border-t border-slate-200">
            {/* Background Aesthetic Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm mb-3">
                        <Calculator className="h-3.5 w-3.5 text-emerald-600" />
                        Interactive ROI Estimator
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Calculate How Much Time &amp; Cost <span className="text-emerald-600">You Save</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                        See how switching from manual spreadsheets to HR Niti&apos;s automated HRMS reduces payroll processing cycles and minimizes error risk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">

                    {/* Left Column: Sliders */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Slider 1: Employee Count */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-xs md:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                                    Number of Employees:
                                </label>
                                <span className="text-xl font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-xl">
                                    {employees} Staff
                                </span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="1000"
                                step="5"
                                value={employees}
                                onChange={(e) => setEmployees(parseInt(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                                <span>10 Staff</span>
                                <span>250 Staff</span>
                                <span>1,000+ Staff</span>
                            </div>
                        </div>

                        {/* Slider 2: Average Monthly CTC */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-xs md:text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                                    Average Salary (₹/month):
                                </label>
                                <span className="text-xl font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-xl">
                                    ₹ {avgSalary.toLocaleString()}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="15000"
                                max="150000"
                                step="5000"
                                value={avgSalary}
                                onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                                <span>₹ 15,000</span>
                                <span>₹ 75,000</span>
                                <span>₹ 1,50,000</span>
                            </div>
                        </div>

                        {/* Value Bullet Points */}
                        <div className="space-y-2.5 pt-2 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>Reduces manual payroll data entry &amp; formula calculation errors</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>Auto-generates PF ECR, ESIC, LWF &amp; PT monthly reporting files</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>Exports pre-formatted Excel files for corporate net-banking salary uploads</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Estimated Savings Card */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-2xl border border-emerald-500/30 text-center flex flex-col justify-between h-full">

                        <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
                                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                                Estimated Value Return
                            </span>

                            <div className="my-4">
                                <div className="text-xs font-bold uppercase tracking-wider text-emerald-200 mb-1">
                                    Annual Productivity Savings
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-amber-300 tracking-tight">
                                    ₹ {annualSavings.toLocaleString()}
                                </div>
                                <div className="text-xs text-emerald-200 mt-1">
                                    (~ ₹ {monthlySavings.toLocaleString()} / month)
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 my-4 border border-white/10 grid grid-cols-2 gap-2 text-center">
                                <div>
                                    <div className="text-xl font-bold text-white flex items-center justify-center gap-1">
                                        <Clock className="h-4 w-4 text-amber-400" /> {hoursSavedPerMonth} hrs
                                    </div>
                                    <div className="text-[10px] text-emerald-200 font-semibold uppercase mt-0.5">HR Hours Saved / mo</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-white flex items-center justify-center gap-1">
                                        <TrendingUp className="h-4 w-4 text-emerald-400" /> 85%
                                    </div>
                                    <div className="text-[10px] text-emerald-200 font-semibold uppercase mt-0.5">Faster Payroll Run</div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/demo"
                            className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 mt-4"
                        >
                            <span>Request Product Demo</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}
