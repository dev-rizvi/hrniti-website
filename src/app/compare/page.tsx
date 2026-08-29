import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Layers, Table, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/compare`;

export const metadata: Metadata = {
    title: {
        absolute: "HRMS & Payroll Software Comparisons | HR Niti",
    },
    description: "Objective comparisons of top HRMS and payroll software platforms in India. Compare HR Niti against Keka, greytHR, Zoho People, and Darwinbox.",
    keywords: "HRMS software comparison India, HR Niti vs Keka, HR Niti vs greytHR, HR Niti vs Zoho People, best HRMS comparison India",
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
        type: "website",
        title: "HRMS & Payroll Software Comparisons | HR Niti",
        description: "Objective feature comparison of Indian HRMS & Payroll software platforms.",
        url: PAGE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: "HRMS & Payroll Software Comparisons | HR Niti",
        description: "Compare Indian HRMS software platforms objectively.",
    },
};

const comparisons = [
    {
        title: "HR Niti vs Keka HR",
        slug: "hr-niti-vs-keka",
        desc: "Compare HR Niti and Keka on Indian payroll automation, mobile GPS attendance, selfie verification, and pricing.",
        features: ["Multi-State Indian Statutory Payroll", "Mobile GPS Geofenced Attendance", "Selfie Verification", "GenAI HR Assistant"],
    },
    {
        title: "HR Niti vs greytHR",
        slug: "hr-niti-vs-greythr",
        desc: "Objective analysis of HR Niti vs greytHR for Indian SMEs, payroll tax compliance, leave policies, and ESS mobile apps.",
        features: ["PF, ESIC, PT & TDS Filing", "Code on Social Security 2020 Gratuity", "Leave Encashment Engine", "Transparent Per-User Pricing"],
    },
    {
        title: "HR Niti vs Zoho People",
        slug: "hr-niti-vs-zoho-people",
        desc: "Compare HR Niti vs Zoho People on Indian statutory compliance engine, custom workflows, and employee self-service.",
        features: ["Indian Statutory Tax Engine", "GPS Geofencing", "F&F Exit Settlement", "Conversational AI Chatbot"],
    },
];

export default function CompareHubPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar />

            {/* HEADER */}
            <header className="bg-gradient-to-br from-slate-900 via-emerald-950 to-indigo-950 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <Table className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Objective Platform Comparison Hub</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        Indian HRMS &amp; Payroll Software Comparisons
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Transparent, objective feature and pricing comparisons of top HR management systems in India to help HR leaders and business owners evaluate the right solution.
                    </p>
                </div>
            </header>

            {/* CONTENT */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
                
                {/* Featured Guide Banner */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
                    <div className="space-y-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                            <Sparkles className="h-4 w-4 text-emerald-600" /> Comprehensive Buyer Guide
                        </span>
                        <h2 className="text-xl font-bold text-slate-900">
                            Best HRMS Software in India (2026 Comparison)
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                            Read our full evaluation matrix comparing HR Niti, Keka, greytHR, Zoho People, and Darwinbox across 9 critical functional dimensions.
                        </p>
                    </div>
                    <Link
                        href="/best-hrms-software-india"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 self-start sm:self-center"
                    >
                        View Full Buyer Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Comparison Cards Grid */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                        Head-to-Head HRMS Comparisons
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {comparisons.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/best-hrms-software-india`}
                                className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm">
                                        VS
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        {c.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {c.desc}
                                    </p>
                                    <div className="pt-2 space-y-1">
                                        {c.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                                                <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:gap-2 transition-all">
                                    <span>Compare Features</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
