import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OrgChartHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            HRMS · Org Chart & Planning
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Visualise and plan your org <span className="text-emerald-600">with HR Niti.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                            Org Chart & Planning is part of the HR Niti suite — sharing the same data, security and experience as every module, so your team works from one source of truth.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#interactive-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02]">
                                Try Live Sandbox
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-lg hover:border-slate-350 hover:bg-slate-50 transition-all hover:scale-[1.02]">
                                Book a Demo
                            </Link>
                        </div>
                    </div>

                    {/* Right Mockup Preview */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {/* Decorative backing */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
                            
                            {/* Static HTML/CSS Mockup Tree */}
                            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 p-8 flex flex-col items-center justify-center min-h-[380px] overflow-hidden select-none">
                                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
                                
                                <div className="relative z-10 flex flex-col items-center">
                                    {/* CEO Card */}
                                    <div className="w-48 bg-white rounded-xl shadow-md border border-amber-200 border-l-4 border-l-amber-500 p-3.5 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">VS</div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-black text-slate-800 truncate">Vikram Sharma</div>
                                            <div className="text-[10px] font-bold text-slate-400 truncate">Chief Executive</div>
                                        </div>
                                    </div>
                                    
                                    {/* Line down */}
                                    <div className="w-px h-8 bg-slate-300 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-sm">-</div>
                                    </div>
                                    
                                    {/* Horizontal Connection */}
                                    <div className="relative w-full flex justify-center">
                                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-slate-300"></div>
                                        
                                        {/* Row of Children */}
                                        <div className="w-full flex justify-around gap-8 pt-8">
                                            {/* Left Child: CTO */}
                                            <div className="flex flex-col items-center relative">
                                                <div className="w-px h-8 bg-slate-300 absolute -top-8"></div>
                                                <div className="w-44 bg-white rounded-xl shadow-md border border-violet-200 border-l-4 border-l-violet-500 p-3 flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">NR</div>
                                                    <div className="min-w-0">
                                                        <div className="text-[11px] font-black text-slate-800 truncate">Neha Reddy</div>
                                                        <div className="text-[9px] font-bold text-slate-400 truncate">Chief Tech Officer</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Right Child: CMO */}
                                            <div className="flex flex-col items-center relative">
                                                <div className="w-px h-8 bg-slate-300 absolute -top-8"></div>
                                                <div className="w-44 bg-white rounded-xl shadow-md border border-orange-200 border-l-4 border-l-orange-500 p-3 flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">SD</div>
                                                    <div className="min-w-0">
                                                        <div className="text-[11px] font-black text-slate-800 truncate">Sameer D.</div>
                                                        <div className="text-[9px] font-bold text-slate-400 truncate">Chief Marketing</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Metric Strip */}
                <div className="mt-20 pt-10 border-t border-slate-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl font-black text-slate-900 mb-1">1</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">platform</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl font-black text-slate-900 mb-1">100%</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">audit-ready</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl font-black text-slate-900 mb-1">40%</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">more efficient</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl font-black text-slate-900 mb-1">24/7</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">available</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
