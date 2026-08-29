import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, Share2, Globe, TrendingUp, Users, ShieldCheck, Shield, Lock, Layers, Database, CheckCircle, PieChart } from 'lucide-react';
import JobPostingSimulator from '@/components/recruitment/JobPostingSimulator';

export const metadata = {
    title: 'Job Posting Software | Multi-Board Posting | HR Niti',
    description: "Publish roles to dozens of job boards from one place with HR Niti job posting software — branded listings, social sharing and source tracking.",
    openGraph: {
        title: "Job Posting Software - Multi-Board Job Distribution India | HR Niti",
        description: "Publish job openings to dozens of job boards from one place with HR Niti's Job Posting Software. Branded listings, social sharing, and applicant source tracking built-in.",
        url: "https://www.hrniti.com/jobposting",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Job Posting Software - Multi-Board Job Distribution India | HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Job Posting Software - Multi-Board Job Distribution India | HR Niti",
        description: "Publish job openings to dozens of job boards from one place with HR Niti's Job Posting Software. Branded listings, social sharing, and applicant source tracking built-in.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/jobposting" },
    keywords: "job posting software, multi board job posting, job board software India, recruitment posting tool, HR Niti job posting",
};

export default function JobPostingPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-gradient-to-b from-violet-50/50 to-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Copy */}
                        <div className="flex-1 text-center lg:text-left z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-800 text-xs font-bold tracking-wider uppercase mb-6">
                                Recruitment · Job Posting
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                                Reach candidates everywhere <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">with HR Niti.</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                                Job Posting is part of the HR Niti suite — sharing the same data, security and experience as every module, so your team works from one source of truth.
                            </p>
                             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link 
                                    href="/contact-us" 
                                    id="jobposting-hero-demo"
                                    className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-600/20 text-center"
                                >
                                    Book a Demo
                                </Link>
                                <Link 
                                    href="/contact-us" 
                                    id="jobposting-hero-trial"
                                    className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-violet-500 text-slate-800 hover:text-violet-600 font-bold rounded-xl transition-all text-center"
                                >
                                    Start Free Trial
                                </Link>
                            </div>
                        </div>

                         {/* Visual */}
                        <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-200 to-fuchsia-105 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-3xl"></div>
                            <JobPostingSimulator />
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
                        <span className="inline-block text-violet-600 font-bold uppercase text-xs tracking-wider mb-2">What you get</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Built for the way <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">job posting</span> really works.
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-violet-100 text-violet-600 p-3 rounded-xl h-fit shrink-0">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Multi-board</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Post a role once and distribute it to 50+ job boards automatically.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-violet-100 text-violet-600 p-3 rounded-xl h-fit shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Branded posts</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Publish job ads in your own look, tone and employer brand every time.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-violet-100 text-violet-600 p-3 rounded-xl h-fit shrink-0">
                                    <Share2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Social share</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Share openings to LinkedIn and social channels with a single click.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-violet-100 text-violet-600 p-3 rounded-xl h-fit shrink-0">
                                    <Send className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Auto-expire</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Automatically close and refresh listings so you never advertise filled roles.</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <Link href="/contact-us" className="inline-flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700 transition-colors">
                                    See it in a demo <TrendingUp className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-2"></div>
                            <div className="relative rounded-3xl shadow-xl border border-slate-200/60 bg-white p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm">
                                        HN
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-900 text-base">Lead Product Designer</h4>
                                        <span className="text-xs text-slate-500 font-medium">HR Niti · Mumbai, IN (Hybrid)</span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                                    <span className="bg-violet-50 text-violet-700 px-2.5 py-1 rounded-md">Full-time</span>
                                    <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">INR 15L - 22L</span>
                                    <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">Actively hiring</span>
                                </div>

                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                    We are looking for a Lead Product Designer to own the visual language of our unified enterprise suite. You will work directly with product managers and engineering...
                                </p>

                                <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                                    <span className="text-[10px] text-slate-400 font-medium">Published 2 hours ago via HR Niti</span>
                                    <button className="bg-violet-600 hover:bg-violet-750 text-white font-bold text-xs py-2 px-4 rounded-lg">
                                        Apply Now
                                    </button>
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
                        <span className="inline-block text-violet-600 font-bold uppercase text-xs tracking-wider mb-2">Use Cases</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Where Job Posting makes the difference.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Fast-scaling teams</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Keep up with rapid growth without adding administrative headcount — job posting scales with you from ten people to ten thousand.</p>
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
                            <p className="text-slate-600 leading-relaxed font-medium">Banks, government and healthcare rely on job posting for audit-ready records and provable controls.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block text-violet-600 font-bold uppercase text-xs tracking-wider mb-2">How it works</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Up and running in <span className="text-violet-600">three steps.</span>
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
                        <span className="inline-block text-violet-600 font-bold uppercase text-xs tracking-wider mb-2">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                            Everything Job Posting gives your team.
                        </h2>
                        <p className="text-slate-600 font-medium">A complete toolkit for job posting — not a thin feature list, but the depth real operations need.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Multi-board posting", desc: "Publish to dozens of boards from one place.", icon: Globe, color: "text-indigo-600", bg: "bg-indigo-50" },
                            { title: "Branded listings", desc: "On-brand posts that attract the right people.", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
                            { title: "Social & referral", desc: "Amplify through staff networks automatically.", icon: Share2, color: "text-cyan-600", bg: "bg-cyan-50" },
                            { title: "Source tracking", desc: "Know which channels actually deliver hires.", icon: PieChart, color: "text-amber-600", bg: "bg-amber-50" },
                            { title: "Sponsored spend", desc: "Manage paid promotion and budgets centrally.", icon: TrendingUp, color: "text-violet-600", bg: "bg-violet-50" },
                            { title: "SEO-ready", desc: "Listings built to be found by candidates.", icon: Globe, color: "text-pink-600", bg: "bg-pink-50" },
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
                        <span className="inline-block text-violet-600 font-bold uppercase text-xs tracking-wider mb-2">Trust & Security</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Enterprise-grade by <span className="text-violet-600">default.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center px-6">
                            <ShieldCheck className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Secure architecture</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Job Posting runs on the same secure, highly-available and encrypted database foundation as the entire suite.</p>
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
                            <Share2 className="w-32 h-32" />
                        </div>
                         <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed mb-6 relative z-10">
                            &quot;One click puts a role everywhere that matters, and we finally know which sources are worth paying for.&quot;
                        </blockquote>
                        <cite className="block text-violet-400 font-bold uppercase tracking-wider text-sm relative z-10">
                            — Recruitment Manager, Retail Group
                        </cite>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-violet-600">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Put Job Posting to work this quarter.
                    </h2>
                    <p className="text-violet-100 text-lg font-medium mb-10">
                        See job posting configured around your team in a live demo, or start a free 14-day trial — no credit card required.
                    </p>
                     <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link 
                            href="/contact-us" 
                            id="jobposting-cta-demo"
                            className="px-8 py-4 bg-white text-violet-900 font-bold rounded-xl transition-all hover:bg-violet-50"
                        >
                            Book a Demo
                        </Link>
                        <Link 
                            href="/contact-us" 
                            id="jobposting-cta-trial"
                            className="px-8 py-4 bg-violet-850 text-white font-bold rounded-xl transition-all hover:bg-violet-900"
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
                        <span className="inline-block text-violet-600 font-bold uppercase text-xs tracking-wider mb-2">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Common questions.
                        </h2>
                             <div className="grid gap-6">
                        <div id="jobposting-faq-0" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">How long does implementation take?</h4>
                            <p className="text-slate-600 font-medium">Most teams are live in weeks, not months. We phase the rollout and prove value against a named metric before expanding.</p>
                        </div>
                        <div id="jobposting-faq-1" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Does job posting work alongside our other systems?</h4>
                            <p className="text-slate-600 font-medium">Yes. HR Niti offers standard integrations and an open API, and as part of the unified suite it shares data natively with every other module.</p>
                        </div>
                        <div id="jobposting-faq-2" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Is our data secure?</h4>
                            <p className="text-slate-600 font-medium">HR Niti is built with high-grade security, role-based access, strict encryption protocols, and a full audit trail on every record.</p>
                        </div>
                        <div id="jobposting-faq-3" className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Can we start small?</h4>
                            <p className="text-slate-600 font-medium">Absolutely — begin with job posting and add modules as you grow. Everything shares the same secure foundation.</p>
                        </div>
                    </div>                </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
