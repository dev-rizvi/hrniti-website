"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Factory, Laptop2, ShoppingBag, Pill, HeartPulse, Landmark,
    Users2, Hotel, Briefcase, Calculator, HardHat, GraduationCap, Truck,
    ChevronRight, CheckCircle2, LucideIcon, Sparkles, ShieldCheck
} from "lucide-react";
import { industries } from "@/lib/industriesData";
import { submitDemoLeadAction } from "@/app/actions/leadActions";

const ICON_MAP: Record<string, LucideIcon> = {
    Laptop2, Users2, Hotel, Briefcase, Calculator, Landmark,
    HardHat, HeartPulse, GraduationCap, Factory, Truck, ShoppingBag, Pill
};

export default function IndustriesHero() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "Information Technology",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const res = await submitDemoLeadAction({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            employees: "50-250",
            sourcePage: `Industries Landing Page (${formData.industry})`,
            sourceUrl: typeof window !== "undefined" ? window.location.href : "/industries",
        });

        setIsSubmitting(false);

        if (res.success) {
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                industry: "Information Technology",
            });
            setTimeout(() => setSubmitted(false), 7000);
        } else {
            setErrorMessage(res.error || "Failed to submit request.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-indigo-950 text-white pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden border-b border-emerald-800/40">
            {/* Background Aesthetic Glow Elements */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-amber-300 font-semibold">Industry Solutions</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT COLUMN: Main Headline & Industry Fast Selector */}
                    <div className="lg:col-span-7 space-y-6 text-left">

                        {/* Top Pill Badge */}
                        <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-500/40 px-4 py-1.5 rounded-full backdrop-blur-md">
                            <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
                            <span className="text-xs md:text-sm font-semibold text-emerald-200 tracking-wide">
                                Specialized HRMS for 12+ Industry Verticals
                            </span>
                        </div>

                        {/* Main H1 */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                            HR Software Engine <br className="hidden md:inline" />
                            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-200 to-teal-100">Your Specific Sector</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                            Generic HR software forces your business into standard templates. HR Niti configures around your exact shift patterns, compliance rules, field force GPS, and multi-branch payout structures.
                        </p>

                        {/* Key Capabilities Bullet Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2 text-xs md:text-sm text-emerald-100">
                                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                                <span>24/7 Shift &amp; Rotational Rostering</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-emerald-100">
                                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                                <span>100% Multi-State Statutory Compliance</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-emerald-100">
                                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                                <span>Field GPS &amp; Facial Recognition Punch</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-emerald-100">
                                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                                <span>Custom Rate Cards &amp; Billing Sync</span>
                            </div>
                        </div>

                        {/* Fast Industry Selector Chips */}
                        <div className="pt-4">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-amber-400" />
                                Select Your Industry Vertical to Explore:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {industries.map((ind) => {
                                    const Icon = ICON_MAP[ind.iconName] || Laptop2;
                                    return (
                                        <Link
                                            key={ind.slug}
                                            href={`/industries/${ind.slug}`}
                                            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-emerald-500/20 border border-white/15 hover:border-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all text-emerald-100 hover:text-white hover:-translate-y-0.5"
                                        >
                                            <Icon className="h-3.5 w-3.5 text-amber-300" />
                                            {ind.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: UPPER FOLD LEAD CAPTURE FORM */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-slate-900 border border-emerald-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/60 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                            <div className="mb-6 text-center lg:text-left">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                                    Tailored Consultation
                                </span>
                                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                                    Request Industry Demo
                                </h3>
                                <p className="text-xs text-slate-500 mt-1">
                                    See a live walkthrough configured for your specific sector.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="p-6 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                                    <span className="text-3xl">🎉</span>
                                    <h4 className="text-lg font-bold text-emerald-950 mt-2">Demo Request Submitted!</h4>
                                    <p className="text-xs text-emerald-800 mt-1">
                                        Our industry specialist will contact you within 15 minutes.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {errorMessage && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Vikram Verma"
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                                Work Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="vikram@company.com"
                                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Company Name"
                                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                                Select Sector *
                                            </label>
                                            <select
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            >
                                                {industries.map((ind) => (
                                                    <option key={ind.slug} value={ind.title}>
                                                        {ind.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-base shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Submitting..." : "Get Tailored Industry Demo ➔"}
                                    </button>

                                    <p className="text-[11px] text-slate-400 text-center pt-1">
                                        🔒 100% Data Confidentiality &bull; No Obligation
                                    </p>
                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
