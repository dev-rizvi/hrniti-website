import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BarChart3, Database, Lock, ShieldCheck, Shield, PieChart, Users, TrendingUp, Settings, Cloud, Layers, CheckCircle } from 'lucide-react';
import AnalyticsDashboardSimulator from '@/components/analytics/AnalyticsDashboardSimulator';

export const metadata = {
    title: "HR Reporting & Workforce Analytics Software",
    description: "HR reporting and analytics software for businesses. Turn workforce data into actionable HR MIS reports, headcount analytics, attrition prediction, and board dashboards.",
    keywords: "HR reporting and analytics software, HR MIS reporting software for businesses, people analytics software India, HR dashboard software, workforce analytics",
    alternates: { canonical: "https://www.hrniti.com/analytics" },
    openGraph: {
        title: "HR Reporting and Analytics Software | HR MIS Reports | HR Niti",
        description: "HR reporting and analytics software for businesses. Turn workforce data into actionable HR MIS reports, headcount analytics, attrition prediction, and board dashboards.",
        url: "https://www.hrniti.com/analytics",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Reporting and Analytics Software - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HR Reporting and Analytics Software | HR MIS Reports | HR Niti",
        description: "HR reporting and analytics software for businesses. Turn workforce data into actionable HR MIS reports, headcount analytics, attrition prediction, and board dashboards.",
        images: ["/og-default.png"],
    },
};

export default function AnalyticsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-gradient-to-b from-emerald-50/50 to-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Copy */}
                        <div className="flex-1 text-center lg:text-left z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-6">
                                HRMS · People Analytics
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                                Decisions backed by data <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">with HR Niti.</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                                People Analytics is part of the HR Niti suite — sharing the same data, security and experience as every module, so your team works from one source of truth.
                            </p>
                             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link 
                                    href="/contact-us" 
                                    id="analytics-hero-demo"
                                    className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-center"
                                >
                                    Book a Demo
                                </Link>
                                <Link 
                                    href="/contact-us" 
                                    id="analytics-hero-trial"
                                    className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-emerald-500 text-slate-800 hover:text-emerald-600 font-bold rounded-xl transition-all text-center"
                                >
                                    Start Free Trial
                                </Link>
                            </div>
                        </div>

                         {/* Visual */}
                        <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-teal-100 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-3xl"></div>
                            <AnalyticsDashboardSimulator />
                        </div>
                    </div>
                </div>
            </section>

            {/* Metric Strip */}
            <div className="border-y border-slate-200 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 divide-x divide-slate-100">
                        <div className="text-center px-4">
                            <div className="text-4xl font-black text-slate-900 mb-1">1</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Platform</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl font-black text-slate-900 mb-1">100%</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Audit-ready</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl font-black text-slate-900 mb-1">40%</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">More efficient</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl font-black text-slate-900 mb-1">24/7</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Available</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="inline-block text-emerald-600 font-bold uppercase text-xs tracking-wider mb-2">What you get</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Built for the way <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">people analytics</span> really works.
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 text-emerald-600 p-3 rounded-xl h-fit shrink-0">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dashboards</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Track headcount, cost and attrition on dashboards built for people leaders.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 text-emerald-600 p-3 rounded-xl h-fit shrink-0">
                                    <Settings className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Custom reports</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Slice your workforce data by any dimension and save the reports you rely on.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 text-emerald-600 p-3 rounded-xl h-fit shrink-0">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Trends</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Follow every key metric over time to see what is improving and what is not.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 text-emerald-600 p-3 rounded-xl h-fit shrink-0">
                                    <Cloud className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Exports</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Export board-ready packs and share live insights with leadership in a click.</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <Link href="/contact-us" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                                    See it in a demo <TrendingUp className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                         <div className="relative">
                            <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-2"></div>
                            <div className="relative rounded-3xl shadow-xl border border-slate-200 bg-white p-6 space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                    <div>
                                        <h4 className="font-extrabold text-slate-900 text-sm">Attrition Projections</h4>
                                        <span className="text-[10px] text-slate-500 font-medium">Estimated monthly turnover index</span>
                                    </div>
                                    <span className="text-[10px] text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded">Risk Factor High</span>
                                </div>

                                <div className="flex items-end justify-between h-28 px-3 pt-4">
                                    {[
                                        { month: 'Q1', val: 35, color: 'bg-emerald-400' },
                                        { month: 'Q2', val: 50, color: 'bg-emerald-400' },
                                        { month: 'Q3', val: 80, color: 'bg-amber-400' },
                                        { month: 'Q4', val: 40, color: 'bg-emerald-400' }
                                    ].map((col) => (
                                        <div key={col.month} className="flex flex-col items-center gap-1.5 w-10">
                                            <div className={`w-6 ${col.color} rounded-t-md`} style={{ height: `${col.val}px` }}></div>
                                            <span className="text-[9px] text-slate-400 font-bold">{col.month}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[10px] text-slate-600 leading-relaxed font-medium">
                                    <strong>Trend Alert:</strong> Attrition for core operational software roles shows an upward 1.8% deviation. Suggested mitigation workflows triggered.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-emerald-600 font-bold uppercase text-xs tracking-wider mb-2">Use Cases</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Where People Analytics makes the difference.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Fast-scaling teams</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Keep up with rapid growth without adding administrative headcount — people analytics scales with you from ten people to ten thousand.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Multi-country operations</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Operate consistently across regions and regulations, with one source of truth and local compliance built in.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Regulated industries</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Banks, government and healthcare rely on people analytics for audit-ready records and provable controls.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-emerald-600 font-bold uppercase text-xs tracking-wider mb-2">How it works</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Up and running in <span className="text-emerald-600">three steps.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                                <Database className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">1 · Connect & import</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Bring your existing data in through guided imports and validations — no data loss, no downtime.</p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                                <Layers className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">2 · Configure to your rules</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Model your policies, workflows and approvals exactly — no rigid templates.</p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">3 · Go live & measure</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Launch with a named target metric and track impact from day one.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="inline-block text-emerald-600 font-bold uppercase text-xs tracking-wider mb-2">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                            Everything People Analytics gives your team.
                        </h2>
                        <p className="text-slate-600 font-medium">A complete toolkit for people analytics — not a thin feature list, but the depth real operations need.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Dashboards", desc: "Pre-built and custom views for every HR metric.", icon: PieChart, color: "text-indigo-600", bg: "bg-indigo-50" },
                            { title: "Headcount & attrition", desc: "Track movement and predict flight risk.", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
                            { title: "Diversity insights", desc: "Measure representation and pay equity safely.", icon: BarChart3, color: "text-cyan-600", bg: "bg-cyan-50" },
                            { title: "Custom reports", desc: "Slice any data set without waiting on IT.", icon: Settings, color: "text-amber-600", bg: "bg-amber-50" },
                            { title: "Benchmarks", desc: "Compare your metrics to industry baselines.", icon: TrendingUp, color: "text-violet-600", bg: "bg-violet-50" },
                            { title: "Exports & API", desc: "Push trusted data into BI tools and boards.", icon: Cloud, color: "text-pink-600", bg: "bg-pink-50" },
                        ].map((cap, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                                <div className={`w-10 h-10 ${cap.bg} ${cap.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <cap.icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h4>
                                <p className="text-slate-600 font-medium text-sm">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-emerald-600 font-bold uppercase text-xs tracking-wider mb-2">Trust & Security</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Enterprise-grade by <span className="text-emerald-600">default.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center px-6">
                            <ShieldCheck className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Secure architecture</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">People Analytics runs on the same secure, highly-available and encrypted database foundation as the entire suite.</p>
                        </div>
                        <div className="text-center px-6">
                            <Lock className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Encryption & access</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Data is encrypted in transit and at rest, with granular role-based access and a complete, immutable audit trail.</p>
                        </div>
                        <div className="text-center px-6">
                            <Shield className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Regional compliance</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">GDPR, UAE PDPL and regional data-residency requirements are respected wherever your people work.</p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <PieChart className="w-32 h-32" />
                        </div>
                         <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed mb-6 relative z-10">
                            &quot;Our leadership finally makes people decisions on data, not anecdotes. The attrition model alone paid for itself.&quot;
                        </blockquote>
                        <cite className="block text-emerald-400 font-bold uppercase tracking-wider text-sm relative z-10">
                            — CHRO, Professional Services
                        </cite>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-emerald-600">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Put People Analytics to work this quarter.
                    </h2>
                    <p className="text-emerald-100 text-lg font-medium mb-10">
                        See people analytics configured around your team in a live demo, or start a free 14-day trial — no credit card required.
                    </p>
                     <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link 
                            href="/contact-us" 
                            id="analytics-cta-demo"
                            className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl transition-all hover:bg-emerald-50"
                        >
                            Book a Demo
                        </Link>
                        <Link 
                            href="/contact-us" 
                            id="analytics-cta-trial"
                            className="px-8 py-4 bg-emerald-800 text-white font-bold rounded-xl transition-all hover:bg-emerald-900"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-emerald-600 font-bold uppercase text-xs tracking-wider mb-2">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Common questions.
                        </h2>
                             <div className="grid gap-6">
                        <div id="analytics-faq-0" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">How long does implementation take?</h4>
                            <p className="text-slate-600 font-medium">Most teams are live in weeks, not months. We phase the rollout and prove value against a named metric before expanding.</p>
                        </div>
                        <div id="analytics-faq-1" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Does people analytics work alongside our other systems?</h4>
                            <p className="text-slate-600 font-medium">Yes. HR Niti offers standard integrations and an open API, and as part of the unified suite it shares data natively with every other module.</p>
                        </div>
                        <div id="analytics-faq-2" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Is our data secure?</h4>
                            <p className="text-slate-600 font-medium">HR Niti is built with high-grade security, role-based access, strict encryption protocols, and a full audit trail on every record.</p>
                        </div>
                        <div id="analytics-faq-3" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Can we start small?</h4>
                            <p className="text-slate-600 font-medium">Absolutely — begin with people analytics and add modules as you grow. Everything shares the same secure foundation.</p>
                        </div>
                    </div>                </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
