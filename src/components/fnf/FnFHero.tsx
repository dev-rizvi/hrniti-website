"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Calculator, FileCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function FnFHero() {
    const [calculationState, setCalculationState] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCalculationState(prev => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 p-48 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-green-100">Zero-Touch Exit Process</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Full & Final Settlement</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                            Turn a painful exit process into a smooth farewell. Automate asset recovery, calculate gratuity instantly, and generate compliant clearance letters with one click.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg hover:-translate-y-1 shadow-green-500/30"
                            >
                                Automate Exits Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Visual - Settlement Slip Calculation */}
                    <div className="relative mx-auto w-full max-w-md">

                        {/* Card Container */}
                        <div className="bg-white text-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">

                            {/* Header */}
                            <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-base">Settlement Slip</h4>
                                    <p className="text-xs text-slate-500">Rajesh Kumar • Emp ID: 2045</p>
                                </div>
                                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                                    Draft
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Dynamic Calculation Rows */}
                                <div className="space-y-3">

                                    {/* Earnings */}
                                    <div className={`flex justify-between items-center p-3 rounded-lg transition-colors ${calculationState >= 0 ? 'bg-green-50 border border-green-100' : 'bg-slate-50'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${calculationState >= 0 ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                                                <Calculator className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Total Earnings</p>
                                                <p className="text-xs text-slate-500">Salary + LTA + Bonus</p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-slate-700">₹ 85,000</span>
                                    </div>

                                    {/* Deductions */}
                                    <div className={`flex justify-between items-center p-3 rounded-lg transition-colors ${calculationState >= 1 ? 'bg-red-50 border border-red-100' : 'bg-slate-50'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${calculationState >= 1 ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                                                <AlertCircle className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Deductions</p>
                                                <p className="text-xs text-slate-500">Notice Shortfall, Tax</p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-red-600">- ₹ 12,400</span>
                                    </div>

                                    {/* Gratuity */}
                                    <div className={`flex justify-between items-center p-3 rounded-lg transition-colors ${calculationState >= 2 ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${calculationState >= 2 ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                                                <FileCheck className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Gratuity</p>
                                                <p className="text-xs text-slate-500">5+ Years Service</p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-slate-700">₹ 3,45,000</span>
                                    </div>

                                </div>

                                {/* Final Total */}
                                <div className="pt-4 border-t-2 border-slate-100 flex justify-between items-end">
                                    <span className="text-sm font-bold text-slate-500 uppercase">Net Payable</span>
                                    <div className="text-right">
                                        <span className={`text-2xl font-bold font-mono text-slate-900 transition-opacity duration-500 ${calculationState === 3 ? 'opacity-100' : 'opacity-50'}`}>
                                            ₹ 4,17,600
                                        </span>
                                        {calculationState === 3 && (
                                            <div className="text-xs text-green-600 font-bold flex items-center justify-end gap-1 mt-1 animate-fade-in">
                                                <CheckCircle2 className="h-3 w-3" /> Ready for Disbursement
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-white/5 rounded-2xl border border-white/10 hidden lg:block"></div>

                    </div>

                </div>
            </div>
        </section>
    );
}
