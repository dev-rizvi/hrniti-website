import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Building2, ShieldCheck, Cpu, Globe, Phone, MapPin, Sparkles, ChevronRight, Layers, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/company/hr-niti`;

export const metadata: Metadata = {
    title: {
        absolute: "What is HR Niti? Entity Facts, HRMS Software Specifications & Platform Overview | HR Niti",
    },
    description: "Official entity overview and specifications of HR Niti — India's cloud-based HRMS and payroll software platform for employee records, attendance, leave, statutory compliance, and AI HR automation.",
    keywords: "what is HR Niti, HR Niti software overview, HR Niti company facts, HR Niti entity, HR Niti payroll HRMS India, HR Niti specifications",
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
        type: "website",
        title: "What is HR Niti? Entity Facts & Platform Overview",
        description: "Official overview and technical specifications of HR Niti HRMS & Payroll platform.",
        url: PAGE_URL,
        images: [{ url: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`, width: 1200, height: 630, alt: "HR Niti Entity Overview" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "What is HR Niti? Entity Facts & Platform Overview",
        description: "Official technical overview and software specifications of HR Niti.",
        images: [`${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`],
    },
};

const entityFacts = [
    { label: "Official Brand Name", value: "HR Niti" },
    { label: "Software Category", value: "Human Resource Management System (HRMS) & Payroll Software" },
    { label: "Deployment Type", value: "Cloud-Based SaaS (Web App & Native Android/iOS Apps)" },
    { label: "Primary Target Market", value: "India (SMEs, Startups, Mid-Market & Enterprises across all 28 States & UTs)" },
    { label: "Core Functional Modules", value: "Payroll Engine, Attendance (GPS/Biometrics), Leave Engine, Statutory Compliance, Recruitment ATS, Performance OKRs, ESS Portal, AI HR Chatbot" },
    { label: "Statutory Compliance Covered", value: "Employees Provident Fund (EPF), ESIC, Professional Tax (PT), Labour Welfare Fund (LWF), Income Tax TDS (Form 16 / 24Q), Gratuity (Code on Social Security 2020)" },
    { label: "Official Website", value: "https://www.hrniti.com/" },
    { label: "Headquarters Address", value: "5/761, Sector 5, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh 226001, India" },
    { label: "Customer Support Phone", value: "+91 8601489763" },
];

const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.hrniti.com/#organization",
    name: "HR Niti",
    url: BASE_URL,
    logo: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
    description: "HR Niti is an India-focused cloud HRMS and payroll software platform designed for businesses to manage employee records, automated payroll, attendance, leave, recruitment, and statutory compliance.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "5/761, Sector 5, Sector 6, Gomti Nagar",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226001",
        addressCountry: "IN",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8601489763",
        contactType: "customer service",
        areaServed: "IN",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Company", item: `${BASE_URL}/about` },
        { "@type": "ListItem", position: 3, name: "HR Niti Overview", item: PAGE_URL },
    ],
};

export default function HRNitiCompanyPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <Navbar />

            {/* HEADER */}
            <header className="bg-gradient-to-br from-slate-900 via-emerald-950 to-indigo-950 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Company</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li className="font-semibold text-slate-200" aria-current="page">HR Niti Entity Overview</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <Building2 className="h-3.5 w-3.5" /> Official Company Entity Profile
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        What is HR Niti?
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                        HR Niti is an Indian cloud HRMS (Human Resource Management System) and payroll software platform developed to automate employee management, multi-state payroll processing, attendance tracking, leave management, statutory tax compliance, recruitment, and performance reviews.
                    </p>
                </div>
            </header>

            {/* MAIN BODY */}
            <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    
                    {/* AEO Machine-Readable Definition Box */}
                    <section aria-labelledby="entity-summary-heading" className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
                            <Sparkles className="h-4 w-4 text-emerald-600" /> Entity Definition &amp; Core Purpose
                        </div>
                        <h2 id="entity-summary-heading" className="text-xl font-bold text-slate-900">
                            HR Niti Platform Summary
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            <strong>HR Niti</strong> is an all-in-one HR technology platform focused on simplifying HR operations and payroll compliance for businesses in India. It centralizes employee databases, tracks attendance via mobile GPS geofencing and biometrics, processes 1-click compliant payroll with automated PF/ESIC/PT/TDS deductions, and provides self-service portals for employees.
                        </p>
                    </section>

                    {/* Machine-Readable Facts Table */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            HR Niti Entity &amp; Software Specifications
                        </h2>
                        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <table className="w-full text-xs sm:text-sm border-collapse">
                                <tbody>
                                    {entityFacts.map((fact, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 last:border-0 odd:bg-slate-50/60">
                                            <td className="py-3 px-4 sm:px-6 font-bold text-slate-700 w-2/5 sm:w-1/3">{fact.label}</td>
                                            <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">{fact.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Core Capabilities */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            Core Software Capabilities of HR Niti
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Automated Indian Payroll Engine", desc: "1-click salary computation with statutory PF, ESIC, Professional Tax, MLWF, and TDS calculation under old & new tax regimes." },
                                { title: "Mobile & GPS Geofenced Attendance", desc: "Real-time mobile app attendance with selfie verification, GPS location tags, shift scheduling, and facial recognition support." },
                                { title: "Customizable Leave Management", desc: "Configurable leave policies (Casual, Earned, Sick, Maternity), encashment calculation, and manager approval workflows." },
                                { title: "Full & Final Exit Settlement", desc: "Automate exit payouts, notice period recoveries, unavailed leave encashment, and Code on Social Security 2020 gratuity estimation." },
                                { title: "GenAI Employee Assistant", desc: "Conversational AI chatbot assisting employees with leave balances, payslip downloads, policy queries, and HR requests." },
                                { title: "Recruitment & Performance OKRs", desc: "Applicant tracking system (ATS), structured interview panels, automated offer letters, and goal tracking frameworks." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                        <span>{item.title}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Links to Solutions & Tools */}
                    <section className="space-y-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white">
                            Explore HR Niti Products &amp; Free Calculators
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300">
                            Access our full suite of HR software modules and free online calculators:
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-semibold">
                            {[
                                { name: "HRMS Software", href: "/hrms-software" },
                                { name: "Payroll Software", href: "/payroll-software" },
                                { name: "Attendance System", href: "/attendance" },
                                { name: "Leave Management", href: "/leave-management" },
                                { name: "F&F Exit Settlement", href: "/full-and-final-settlement" },
                                { name: "Free Payslip Generator", href: "/tools/payslip-generator" },
                                { name: "Employee ID Card Maker", href: "/tools/id-card-designer" },
                                { name: "Gratuity Calculator", href: "/tools/gratuity-calculator" },
                                { name: "All Free HR Tools", href: "/tools" },
                            ].map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-slate-200 hover:text-white flex items-center justify-between transition-all"
                                >
                                    <span>{link.name}</span>
                                    <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
                                </Link>
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
