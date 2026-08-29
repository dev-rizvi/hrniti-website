import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Layers, Table, Sparkles, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import ToolFAQ from "@/components/tools/ToolFAQ";
import { comparisonsData } from "@/lib/comparisonsData";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/compare`;

export const metadata: Metadata = {
    title: {
        absolute: "HRMS & Payroll Software Comparisons Hub — HR Niti vs Competitors | HR Niti",
    },
    description: "Compare HR Niti with top Indian HRMS software platforms. Objective feature comparison matrix, pricing analysis, and statutory compliance breakdown for HR Niti vs Keka, greytHR, Zoho Payroll, HROne, and PagarBook.",
    keywords: "HRMS software comparison India, HR Niti vs Keka, HR Niti vs greytHR, HR Niti vs Zoho Payroll, HR Niti vs HROne, HR Niti vs PagarBook, best HRMS comparison India",
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
        type: "website",
        title: "HRMS & Payroll Software Comparisons Hub | HR Niti",
        description: "Objective feature comparison of Indian HRMS & Payroll software platforms.",
        url: PAGE_URL,
        images: [{ url: `${BASE_URL}/assets/img/seo/hr-comparison-og.jpg`, width: 1200, height: 630, alt: "HRMS Software Comparisons Hub" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HRMS & Payroll Software Comparisons Hub | HR Niti",
        description: "Compare Indian HRMS software platforms objectively.",
        images: [`${BASE_URL}/assets/img/seo/hr-comparison-og.jpg`],
    },
};

const faqs = [
    {
        q: "Why compare HR Niti with other Indian HRMS platforms?",
        a: "Evaluating HR software requires analyzing statutory compliance capabilities (PF, ESIC, PT, TDS), mobile attendance features (GPS geofencing, selfie photo proof), ease of use, self-service portals, and transparent per-employee pricing without hidden setup costs.",
    },
    {
        q: "Which HRMS platforms does HR Niti compare against?",
        a: "HR Niti provides detailed objective feature matrix comparisons against Keka HR, greytHR, Zoho Payroll / Zoho People, HROne, and PagarBook.",
    },
    {
        q: "Is HR Niti suitable for small to mid-sized Indian businesses?",
        a: "Yes! HR Niti is built specifically for Indian startups, SMEs, and mid-market companies (10 to 5,000+ employees) requiring compliant 1-click multi-state payroll, flexible leave rules, mobile GPS attendance, and GenAI chatbot self-service.",
    },
];

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "HRMS & Payroll Software Comparisons Hub",
    description: "Objective feature comparisons of top HRMS and payroll software platforms in India.",
    url: PAGE_URL,
    publisher: {
        "@type": "Organization",
        name: "HR Niti",
        url: BASE_URL,
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Comparisons Hub", item: PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function CompareHubPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <Navbar />

            {/* HEADER */}
            <header className="bg-gradient-to-br from-slate-900 via-emerald-950 to-indigo-950 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li className="font-semibold text-slate-200" aria-current="page">Comparisons Hub</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <Table className="h-3.5 w-3.5" /> Objective Platform Comparison Hub
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        Indian HRMS &amp; Payroll Software Comparisons
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                        Transparent, objective feature, compliance, and pricing comparisons of top HR management systems in India to help HR leaders, payroll managers, and business owners select the ideal solution.
                    </p>
                </div>
            </header>

            {/* CONTENT SECTION */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
                
                {/* AEO Quick Summary Box */}
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
                        <Sparkles className="h-4 w-4 text-emerald-600" /> Quick Summary (AEO Answer Box)
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                        HR Niti Software Comparison Overview
                    </h2>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        HR Niti provides an India-focused HRMS and payroll platform featuring automated multi-state payroll (PF, ESIC, PT, TDS), mobile GPS geofenced &amp; selfie attendance, Code on Social Security 2020 gratuity rules, conversational GenAI HR self-service, and a suite of 9 free public HR tools. Compare HR Niti against top providers below:
                    </p>
                </div>

                {/* Featured Buyer Guide Banner */}
                <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
                    <div className="space-y-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Comprehensive Buyer Guide
                        </span>
                        <h2 className="text-xl font-bold text-white">
                            Best HRMS Software in India (2026 Comparison)
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                            Read our full evaluation guide comparing HR Niti, Keka, greytHR, Zoho People, and Darwinbox across 9 functional dimensions.
                        </p>
                    </div>
                    <Link
                        href="/best-hrms-software-india"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 self-start sm:self-center"
                    >
                        View Full Buyer Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Comparison Cards Grid — Rendering ALL 5 Comparisons */}
                <div className="space-y-6">
                    <div className="space-y-1 border-b border-slate-200 pb-3">
                        <h2 className="text-2xl font-bold text-slate-900">
                            All Head-to-Head HRMS Comparisons (5)
                        </h2>
                        <p className="text-xs text-slate-500">
                            Select a competitor comparison below to view side-by-side feature matrices, compliance capabilities, and pricing breakdowns:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {comparisonsData.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/compare/${c.slug}`}
                                className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs border border-emerald-100">
                                            VS
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                                            {c.competitorCategory}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        HR Niti vs {c.competitorName}
                                    </h3>

                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                                        {c.metaDescription}
                                    </p>

                                    <div className="pt-2 space-y-1.5">
                                        {c.whyChooseHRNiti.slice(0, 3).map((point, i) => (
                                            <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                <span className="line-clamp-1">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:gap-2 transition-all">
                                    <span>Compare HR Niti vs {c.competitorName}</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="space-y-6 pt-6 border-t border-slate-200">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <HelpCircle className="h-6 w-6 text-emerald-600" /> Frequently Asked Questions
                        </h2>
                        <p className="text-xs text-slate-500">Common questions about comparing HRMS software in India.</p>
                    </div>

                    <ToolFAQ faqs={faqs} />
                </section>

            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
