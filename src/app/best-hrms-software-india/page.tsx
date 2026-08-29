import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ChevronRight, Sparkles, ShieldCheck, HelpCircle, ArrowRight, Table, Layers, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/best-hrms-software-india`;

export const metadata: Metadata = {
    title: {
        absolute: "Best HRMS Software in India (2026 Comparison & Buyer's Guide) | HR Niti",
    },
    description: "Compare the top HRMS and payroll software platforms in India for 2026. Objective feature comparison matrix covering HR Niti, Keka, greytHR, Zoho People, and Darwinbox.",
    keywords: "best hrms software in india, top hrms platforms india, best payroll software india, hrniti vs keka, hrniti vs greythr, hr software comparison india, best hrms for small business india",
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
        type: "article",
        title: "Best HRMS Software in India (2026 Guide & Comparison Matrix)",
        description: "Objective comparison of top Indian HRMS software platforms for payroll, attendance & compliance.",
        url: PAGE_URL,
        images: [{ url: `${BASE_URL}/assets/img/seo/best-hrms-software-india-og.jpg`, width: 1200, height: 630, alt: "Best HRMS Software in India Comparison" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best HRMS Software in India (2026 Guide)",
        description: "Objective feature comparison of top HRMS software in India.",
        images: [`${BASE_URL}/assets/img/seo/best-hrms-software-india-og.jpg`],
    },
};

const comparisonMatrix = [
    { feature: "Indian Statutory Payroll (PF, ESIC, PT, TDS)", hrniti: true, keka: true, greythr: true, zoho: true, darwinbox: true },
    { feature: "State-Specific Tax Rules (All 28 States & UTs)", hrniti: true, keka: true, greythr: true, zoho: false, darwinbox: true },
    { feature: "Mobile GPS Geofenced Attendance", hrniti: true, keka: true, greythr: true, zoho: true, darwinbox: true },
    { feature: "Selfie Attendance Verification", hrniti: true, keka: true, greythr: false, zoho: false, darwinbox: false },
    { feature: "Code on Social Security 2020 Gratuity Engine", hrniti: true, keka: true, greythr: true, zoho: false, darwinbox: true },
    { feature: "Full & Final (F&F) Exit Settlement Engine", hrniti: true, keka: true, greythr: true, zoho: true, darwinbox: true },
    { feature: "Conversational GenAI HR Chatbot Assistant", hrniti: true, keka: false, greythr: false, zoho: true, darwinbox: false },
    { feature: "Free Online HR Calculators Suite", hrniti: true, keka: false, greythr: false, zoho: false, darwinbox: false },
    { feature: "Small Business / Startup Transparent Pricing", hrniti: true, keka: true, greythr: true, zoho: true, darwinbox: false },
];

const faqs = [
    {
        q: "What is the best HRMS software in India for small businesses?",
        a: "For small businesses (1–50 employees), popular HRMS platforms in India include HR Niti, greytHR, Keka, and Zoho People. Key evaluation factors include transparent per-employee pricing, mobile GPS attendance, automated 1-click payroll, and Indian statutory tax compliance (PF, ESIC, PT).",
    },
    {
        q: "What features should I look for in Indian HRMS & Payroll software?",
        a: "Essential features for Indian companies include: (1) Automated payroll with PF, ESIC, Professional Tax, and Income Tax TDS calculations; (2) Mobile attendance with GPS geofencing; (3) Flexible leave policy engines; (4) Full & Final exit settlement automation; (5) Form 16 and statutory compliance reporting.",
    },
    {
        q: "How does HR Niti compare to traditional HR software?",
        a: "HR Niti provides an integrated cloud platform with modern Generative AI assistant support, native mobile attendance with selfie/GPS verification, multi-state payroll engine, and a free public HR calculator hub.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best HRMS Software in India (2026 Comparison & Buyer's Guide)",
    description: "Compare top HRMS and payroll software platforms in India for 2026.",
    url: PAGE_URL,
    publisher: {
        "@type": "Organization",
        name: "HR Niti",
        url: BASE_URL,
    },
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

export default function BestHRMSIndiaPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <Navbar />

            {/* HEADER */}
            <header className="bg-gradient-to-br from-slate-900 via-emerald-950 to-indigo-950 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li><Link href="/hrms-software" className="hover:text-emerald-400 transition-colors">HRMS Software</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li className="font-semibold text-slate-200" aria-current="page">Best HRMS Software India</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <Star className="h-3.5 w-3.5" /> 2026 Evaluation &amp; Feature Comparison
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        Best HRMS Software in India: 2026 Buyer&apos;s Guide &amp; Comparison
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                        An objective analysis of top Human Resource Management Systems (HRMS) and payroll software platforms in India for growing startups, SMEs, and enterprise organizations.
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    
                    {/* AEO Summary Box */}
                    <section aria-labelledby="guide-summary-heading" className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
                            <Sparkles className="h-4 w-4 text-emerald-600" /> Executive Summary (AEO Answer Box)
                        </div>
                        <h2 id="guide-summary-heading" className="text-xl font-bold text-slate-900">
                            Top HRMS Software Platforms in India Overview
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Leading HRMS platforms in India for 2026 include <strong>HR Niti</strong>, <strong>Keka</strong>, <strong>greytHR</strong>, <strong>Zoho People</strong>, and <strong>Darwinbox</strong>. Each platform caters to specific organizational sizes and needs: HR Niti specializes in AI-powered HR automation, mobile GPS attendance, and multi-state Indian statutory compliance; greytHR excels for small business payroll; Keka targets mid-market tech firms; Zoho People offers broad ecosystem integrations; and Darwinbox serves large enterprises.
                        </p>
                    </section>

                    {/* Feature Comparison Matrix */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            HRMS Software Feature Comparison Matrix (India)
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            A breakdown of key functional features across top Indian HRMS providers:
                        </p>

                        <div className="border border-slate-200 rounded-2xl overflow-x-auto shadow-sm">
                            <table className="w-full text-xs sm:text-sm border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-left">
                                        <th className="py-3 px-4">Feature / Capability</th>
                                        <th className="py-3 px-3 text-center bg-emerald-800">HR Niti</th>
                                        <th className="py-3 px-3 text-center">Keka</th>
                                        <th className="py-3 px-3 text-center">greytHR</th>
                                        <th className="py-3 px-3 text-center">Zoho People</th>
                                        <th className="py-3 px-3 text-center">Darwinbox</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonMatrix.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 last:border-0 odd:bg-slate-50/50 hover:bg-slate-100/50">
                                            <td className="py-3 px-4 font-semibold text-slate-800">{row.feature}</td>
                                            <td className="py-3 px-3 text-center font-bold text-emerald-700 bg-emerald-50/60">
                                                {row.hrniti ? "✓" : "—"}
                                            </td>
                                            <td className="py-3 px-3 text-center text-slate-700">{row.keka ? "✓" : "—"}</td>
                                            <td className="py-3 px-3 text-center text-slate-700">{row.greythr ? "✓" : "—"}</td>
                                            <td className="py-3 px-3 text-center text-slate-700">{row.zoho ? "✓" : "—"}</td>
                                            <td className="py-3 px-3 text-center text-slate-700">{row.darwinbox ? "✓" : "—"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Detailed Analysis of Top HRMS Systems */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            Overview of Top Indian HRMS Platforms
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg text-emerald-700">1. HR Niti</h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    <strong>Best For:</strong> Modern startups, SMEs, and mid-market enterprises looking for AI-powered HR automation, mobile GPS attendance, and full multi-state Indian statutory compliance.
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>Key Strengths:</strong> Integrated GenAI HR assistant, mobile GPS geofencing &amp; selfie attendance, Code on Social Security 2020 gratuity calculation engine, 1-click multi-state payroll, and a comprehensive suite of free public HR tools.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">2. Keka HR</h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    <strong>Best For:</strong> Mid-market tech startups and growing digital agencies.
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>Key Strengths:</strong> User-friendly UI, strong performance appraisal workflows, and integrated leave tracking.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">3. greytHR</h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    <strong>Best For:</strong> Micro and small businesses needing core payroll processing.
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>Key Strengths:</strong> Established Indian payroll engine, tax compliance reports, and simple payslip generation.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">4. Zoho People</h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    <strong>Best For:</strong> Organizations already embedded in the Zoho software ecosystem.
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>Key Strengths:</strong> Seamless integration with Zoho CRM and Books, custom forms, and flexible workflows.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section className="space-y-6 pt-4">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <HelpCircle className="h-6 w-6 text-emerald-600" /> Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                                    <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </article>

            <CTASection />
            <Footer />
        </main>
    );
}
