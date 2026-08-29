"use client";
import Link from "next/link";
import { ArrowRight, Users, UserCheck, Clock, ShieldCheck } from "lucide-react";

export default function EmployeeHero() {
    return (
        <section className="bg-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 p-48 bg-emerald-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-amber-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-green-100">Core HR Database</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Employee Management System with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Advanced ESS</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                            Centralize your workforce data securely. From digital onboarding to exit management, empower your employees with self-service tools and keep your records audit-ready.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg hover:-translate-y-1 shadow-green-600/30"
                            >
                                Request Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Visual - Floating Employee Cards Dashboard Mockup */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                        {/* Abstract Dashboard Base */}
                        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-6 shadow-2xl relative">
                            {/* Header Mockup */}
                            <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"><Users className="h-5 w-5 text-white" /></div>
                                    <span className="font-bold text-lg">Employee Directory</span>
                                </div>
                                <div className="text-xs text-slate-400">Total: 1,240</div>
                            </div>

                            {/* Floating Cards */}
                            <div className="space-y-4">
                                <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-center gap-4 animate-float-slow">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-bold">JD</div>
                                    <div>
                                        <div className="font-bold text-white">John Doe</div>
                                        <div className="text-xs text-slate-400">Software Engineer • ID: 1024</div>
                                    </div>
                                    <div className="ml-auto text-green-400 text-xs font-mono bg-green-900/30 px-2 py-1 rounded">Active</div>
                                </div>

                                <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-center gap-4 animate-float-delayed" style={{ marginLeft: '2rem' }}>
                                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold">AS</div>
                                    <div>
                                        <div className="font-bold text-white">Alice Smith</div>
                                        <div className="text-xs text-slate-400">Product Manager • ID: 1025</div>
                                    </div>
                                    <div className="ml-auto text-yellow-400 text-xs font-mono bg-yellow-900/30 px-2 py-1 rounded">Onboarding</div>
                                </div>

                                <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-center gap-4 animate-float-slow" style={{ marginLeft: '1rem' }}>
                                    <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-xl font-bold">RK</div>
                                    <div>
                                        <div className="font-bold text-white">Raj Kumar</div>
                                        <div className="text-xs text-slate-400">HR Manager • ID: 1026</div>
                                    </div>
                                    <div className="ml-auto text-green-400 text-xs font-mono bg-green-900/30 px-2 py-1 rounded">Active</div>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-slate-900/50 p-3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-white">98%</div>
                                    <div className="text-xs text-slate-400">Profile Completion</div>
                                </div>
                                <div className="bg-slate-900/50 p-3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-white">12</div>
                                    <div className="text-xs text-slate-400">New Joinees</div>
                                </div>
                            </div>

                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl animate-bounce-slow">
                            <div className="flex items-center gap-2 font-bold">
                                <UserCheck className="h-5 w-5 text-green-600" />
                                <span>Self Service</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1">Updates Allowed</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
