"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/seo/FAQSchema";
import {
    Handshake, TrendingUp, Users, Award, ChevronDown,
    CheckCircle2, ArrowRight, Star, Zap, Globe, Shield,
    Briefcase, BarChart3, HeartHandshake, Building2,
    Megaphone, Code2, GraduationCap, Phone, Mail,
    IndianRupee, Gift, Layers, Sparkles, CheckCircle,
    LineChart, FileText, Cpu, Laptop, ShieldCheck, Scale, Compass
} from "lucide-react";

interface PartnerCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    perks: string[];
    badge?: string;
}

function PartnerCard({
    icon, title, subtitle, description, perks, badge
}: PartnerCardProps) {
    return (
        <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group">
            {badge && (
                <div className="absolute -top-3 left-6">
                    <span className="bg-amber-400 text-emerald-950 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        {badge}
                    </span>
                </div>
            )}
            <div>
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{title}</h3>
                        <p className="text-xs text-emerald-700 font-extrabold uppercase tracking-wider mt-0.5">{subtitle}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium mb-5">{description}</p>
                <div className="h-px bg-gray-100 my-2"></div>
                <ul className="space-y-2.5">
                    {perks.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-emerald-400 bg-emerald-50/40" : "border-gray-200 bg-white"}`}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left transition-colors hover:bg-gray-50"
            >
                <span className="font-bold text-gray-900 text-sm sm:text-base">{q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-emerald-600" : ""}`} />
            </button>
            {open && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 font-medium">
                    {a}
                </div>
            )}
        </div>
    );
}

function StepCard({ num, title, description, icon }: { num: string; title: string; description: string; icon: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col items-center text-center gap-3 relative group">
            <span className="absolute top-3 right-4 text-4xl font-black text-gray-100 select-none">
                {num}
            </span>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold relative z-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {icon}
            </div>
            <h4 className="font-bold text-gray-900 text-base mt-1">{title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">{description}</p>
        </div>
    );
}

export default function PartnersClient() {
    const [formData, setFormData] = useState({
        name: "", company: "", email: "", phone: "", partnerType: "", message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const whyPartnerPoints = [
        {
            icon: <Building2 className="w-6 h-6 text-emerald-600" />,
            title: "Proven Domain Expertise",
            desc: "Engineered specifically for Indian payroll, labour laws, multi-state statutory rules, and workforce management."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            title: "100% Statutory Compliance",
            desc: "Automated PF ECR generation, ESIC returns, Professional Tax slabs for all 28 states, LWF, and Form-16."
        },
        {
            icon: <Cpu className="w-6 h-6 text-emerald-600" />,
            title: "Niti AI Technology",
            desc: "State-of-the-art GenAI assistant providing 24/7 automated employee self-service and smart query resolution."
        },
        {
            icon: <Shield className="w-6 h-6 text-emerald-600" />,
            title: "Enterprise Cloud Security",
            desc: "Bank-ready payout Excel exports, enterprise SSL encryption, and high availability infrastructure."
        }
    ];

    const whoCanPartner = [
        {
            icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
            title: "HR & Payroll / Labour Law Consultant",
            desc: "Expand your advisory services by equipping client organizations with an end-to-end cloud HR platform."
        },
        {
            icon: <Scale className="w-6 h-6 text-emerald-400" />,
            title: "CA & Tax Consultant",
            desc: "Offer tax-compliant payroll software alongside standard audit, GST, and bookkeeping services."
        },
        {
            icon: <Laptop className="w-6 h-6 text-emerald-400" />,
            title: "Tally / ERP / CRM Reseller",
            desc: "Bundle HR Niti with your existing ERP implementations to provide a unified business software stack."
        },
        {
            icon: <Zap className="w-6 h-6 text-emerald-400" />,
            title: "IT Hardware & Biometric Reseller",
            desc: "Connect facial recognition and attendance hardware directly with HR Niti's cloud attendance engine."
        },
        {
            icon: <Code2 className="w-6 h-6 text-emerald-400" />,
            title: "IT Consultant & System Integrator",
            desc: "Integrate customer tech stacks using HR Niti's REST APIs and customizable workflow builders."
        },
        {
            icon: <Globe className="w-6 h-6 text-emerald-400" />,
            title: "Cloud Solution Vendor",
            desc: "Offer supplementary SaaS HR tools to your cloud customer network and earn recurring revenue margins."
        }
    ];

    const benefits = [
        { icon: <IndianRupee className="w-6 h-6 text-emerald-700" />, title: "Attractive Commissions", desc: "Industry-leading payout structures with up to 30% revenue share and recurring renewal payouts." },
        { icon: <BarChart3 className="w-6 h-6 text-emerald-700" />, title: "Real-Time Tracking Portal", desc: "Track leads, check deal status, monitor payouts, and analyze conversions inside your partner dashboard." },
        { icon: <Zap className="w-6 h-6 text-emerald-700" />, title: "Co-Branded Marketing", desc: "Gain ready access to custom co-branded brochures, email decks, templates, and sales playbooks." },
        { icon: <Users className="w-6 h-6 text-emerald-700" />, title: "Relationship Support", desc: "Direct access to dedicated partner managers to assist you in customer pitches, demos, and closing." },
        { icon: <GraduationCap className="w-6 h-6 text-emerald-700" />, title: "Free Product Training", desc: "Interactive training programs and detailed material to get you certified and ready in no time." },
        { icon: <Gift className="w-6 h-6 text-emerald-700" />, title: "Partner Program Perks", desc: "Invites to preview product roadmap, entry to partner meets, and performance reward trips." },
    ];

    const faqs = [
        { q: "Who can join the HR Niti Partner Network?", a: "Anyone can join as a Referral Partner — HR consultants, tax advisors, payroll service providers, software vendors, and company founders. For Reseller or Tech partnerships, we check domain alignment and business credentials." },
        { q: "How are commission payouts handled?", a: "Commissions are computed monthly once customer payments settle. Payouts are made directly to your bank account or via wire transfer in the first week of every month." },
        { q: "Is there any sign-up cost or security deposit?", a: "No, there is zero cost to sign up as a Referral Partner. Certification and training for Reseller or Implementation tracks are also completely free." },
        { q: "How long does the partner onboarding take?", a: "Referral partner accounts are approved within 24–48 hours. Reseller and certified implementation partners usually complete training and setups in 1–2 weeks." },
        { q: "What support do you provide to help me sell?", a: "We support you at every stage: providing customized marketing collaterals, hosting joint online webinars, conducting deep-dive product demos, and providing dedicated account guidance." },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
            <Navbar />

            <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 text-white pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20 text-emerald-200">
                                <span className="text-amber-400">🤝</span>
                                <span>HR Niti Partner Network &bull; High Margin Revenue</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                                Join the HR Niti Partner Network
                            </h1>

                            <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-medium">
                                Partner with HR Niti to unlock growth. Enhance your offerings, expand services, and drive recurring revenue with our modern HR &amp; Payroll solutions for businesses across India.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {[
                                    "Up to 30% Recurring Margins",
                                    "Co-Branded Marketing Decks",
                                    "Dedicated Account Management",
                                    "48 Hours Account Onboarding"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2.5 text-sm text-emerald-50 font-medium">
                                        <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">✓</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-emerald-900/50 border border-emerald-500/30 backdrop-blur-md rounded-xl p-4 text-left shadow-lg">
                                <div className="flex items-start gap-3">
                                    <span className="bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 text-[11px] rounded uppercase tracking-wider mt-0.5 flex-shrink-0">
                                        Partner AI Summary
                                    </span>
                                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed font-medium">
                                        HR Niti provides HR consultants, CA practitioners, Tally resellers, and IT integrators with attractive referral and reseller commission structures, backed by automated statutory engines and 24/7 technical support.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs md:text-sm text-emerald-200 font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                    <span>Predictable Monthly Payouts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                    <span>Zero Entry Fee / Deposit</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-900 border border-amber-200/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                                <div className="mb-6 text-center lg:text-left">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                                        Partner Application
                                    </span>
                                    <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
                                        Partner with Us Now
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1 font-medium">
                                        Fill out your details to receive our partner program deck.
                                    </p>
                                </div>

                                {submitted ? (
                                    <div className="p-6 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                                        <span className="text-3xl">🎉</span>
                                        <h4 className="text-lg font-bold text-emerald-950 mt-2">Application Submitted!</h4>
                                        <p className="text-xs text-emerald-800 mt-1 font-medium">
                                            Our channel manager will contact you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text" required
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g. John Doe"
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-gray-900"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                    Company Name *
                                                </label>
                                                <input
                                                    type="text" required
                                                    value={formData.company}
                                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                    placeholder="Your company"
                                                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-gray-900"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel" required
                                                    value={formData.phone}
                                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+91 98765 43210"
                                                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-gray-900"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Work Email *
                                            </label>
                                            <input
                                                type="email" required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="work@yourcompany.com"
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-gray-900"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Partner Model *
                                            </label>
                                            <select
                                                required
                                                value={formData.partnerType}
                                                onChange={e => setFormData({ ...formData, partnerType: e.target.value })}
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all font-medium text-gray-900"
                                            >
                                                <option value="">Select partner category</option>
                                                <option value="referral">HR &amp; Payroll / Labour Law Consultant</option>
                                                <option value="ca">CA / Tax Consultant</option>
                                                <option value="reseller">Tally / ERP / CRM Reseller</option>
                                                <option value="hardware">IT Hardware &amp; Biometric Reseller</option>
                                                <option value="technology">IT Consultant &amp; System Integrator</option>
                                                <option value="cloud">Cloud Solution Vendor</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-lg text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                                        >
                                            <span>Submit Application</span>
                                            <ArrowRight className="w-4.5 h-4.5" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="why-partner" className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                Advantage HR Niti
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                                Why Partner with HR Niti?
                            </h2>
                            <p className="text-gray-600 text-base max-w-2xl mx-auto font-medium">
                                Engineered specifically for Indian businesses. Partner with us to deliver reliable HR &amp; Payroll tech.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyPartnerPoints.map((pt, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        {pt.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                        {pt.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                        {pt.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-emerald-950 text-white border-y border-emerald-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                                Partner Network Categories
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-3">
                                Who Can Be a Partner?
                            </h2>
                            <p className="text-emerald-100/90 text-base max-w-2xl mx-auto font-medium">
                                We collaborate with domain consultants, IT resellers, and software providers across India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whoCanPartner.map((w, index) => (
                                <div key={index} className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 hover:bg-emerald-900 transition-all flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 border border-emerald-600/40">
                                        {w.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{w.title}</h3>
                                        <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                Partner Support
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                                Everything You Need to Scale
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((b, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        {b.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base mb-1">{b.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed font-medium">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                Onboarding Journey
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                                Simple 4-Step Journey
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <StepCard num="01" title="Apply Online" description="Fill out the partner inquiry form. Our desk reviews your application within 24–48 hours." icon={<Layers className="w-5 h-5" />} />
                            <StepCard num="02" title="Guided Onboarding" description="Get instant access to partner portals, co-branded decks, and product orientation." icon={<GraduationCap className="w-5 h-5" />} />
                            <StepCard num="03" title="Pitch & Register Deals" description="Refer potential clients or resell software under your own business model." icon={<Megaphone className="w-5 h-5" />} />
                            <StepCard num="04" title="Earn Monthly Payouts" description="Receive monthly commission reports and direct bank settlements." icon={<IndianRupee className="w-5 h-5" />} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-14">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Partner Support
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 py-16 text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                        Let’s Achieve Success Together!
                    </h2>
                    <p className="text-emerald-100/90 max-w-lg mx-auto mb-8 font-medium text-lg leading-relaxed">
                        Partner with HR Niti and redefine workforce management for your client ecosystem.
                    </p>
                    <a
                        href="#apply"
                        className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-emerald-950 px-10 py-4 rounded-xl font-extrabold text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105 uppercase tracking-wider cursor-pointer"
                    >
                        Partner with Us Now
                        <ArrowRight className="ml-2 h-4.5 w-4.5" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
