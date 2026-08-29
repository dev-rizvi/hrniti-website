import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import PayslipGenerator from "@/components/tools/PayslipGenerator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/payslip-generator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/payslip-generator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "Free Payslip Generator India – Create & Download Salary Slips | HR Niti",
    },
    description: "Generate professional, ready-to-download employee payslips online for free with HR Niti. Input Basic, HRA, PF, PT, TDS & get instant PDF salary slips.",
    keywords: "payslip generator, free payslip generator, salary slip generator, online payslip generator India, employee payslip maker, download salary slip pdf",
    alternates: {
        canonical: PAGE_URL,
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
    },
    openGraph: {
        type: "website",
        title: "Free Payslip Generator India – Create & Download Salary Slips | HR Niti",
        description: "Generate professional, ready-to-download employee payslips online for free with HR Niti.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Free Payslip Generator India – HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Payslip Generator India – Create & Download Salary Slips | HR Niti",
        description: "Generate professional, ready-to-download employee payslips online for free.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is a payslip (salary slip)?",
        a: "A payslip is an official document issued by an employer to an employee every month that details total earnings (Basic, HRA, allowances), statutory deductions (PF, PT, TDS), and the final net take-home salary deposited into their bank account.",
    },
    {
        q: "Is HR Niti's Payslip Generator free to use?",
        a: "Yes! HR Niti's Payslip Generator is 100% free to use. You can generate unlimited professional salary slips and download them directly as PDF files without sign-up or watermarks.",
    },
    {
        q: "What details are required to generate a valid payslip?",
        a: "A standard Indian payslip requires company details (Name & Address), employee information (Name, Employee ID, Designation, Pay Period, Bank Details), earnings breakdown (Basic, HRA, Special Allowance), and deductions (Employee PF, Professional Tax, TDS).",
    },
    {
        q: "How do I download or print the payslip as a PDF?",
        a: "Fill out the company and employee fields, review the live preview on screen, and click the 'Download / Print Payslip PDF' button. Your browser's print dialog will open allowing you to select 'Save as PDF'.",
    },
    {
        q: "Does a payslip require a digital signature?",
        a: "Computer-generated payslips issued electronically by HR software or online tools generally include a statement stating 'Computer Generated Document - No Signature Required'. However, an authorized stamp or signature can also be placed.",
    },
    {
        q: "Why do banks ask for payslips when applying for loans?",
        a: "Banks and financial institutions require the last 3 to 6 months' payslips as official proof of employment, steady monthly income, and statutory tax compliance before approving home loans, car loans, or credit cards.",
    },
    {
        q: "How is net pay calculated on a payslip?",
        a: "Formula: Net Salary Payable = Total Monthly Earnings (Basic + HRA + Allowances + Bonus) − Total Deductions (Employee PF + Professional Tax + Income Tax TDS).",
    },
    {
        q: "Can I use this tool for small business payroll?",
        a: "Yes! Small businesses, startups, HR managers, and freelancers can use HR Niti's Payslip Generator to generate professional, compliant monthly salary slips for their team instantly.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti Free Payslip Generator India",
    url: PAGE_URL,
    description: "Generate professional, ready-to-download employee payslips online for free with HR Niti. Input Basic, HRA, PF, PT, TDS & get instant PDF salary slips.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript-enabled web browser",
    isAccessibleForFree: true,
    featureList: [
        "Instant online payslip generation",
        "PDF download and browser print support",
        "Automatic Gross and Net Salary computation",
        "Automatic number to words conversion in Indian Rupees",
    ],
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
    },
    author: {
        "@type": "Organization",
        name: "HR Niti Payroll Team",
        url: BASE_URL,
    },
    publisher: {
        "@type": "Organization",
        name: "HR Niti",
        url: BASE_URL,
        logo: `${BASE_URL}/assets/img/logo.png`,
    },
    datePublished: "2026-08-01",
    dateModified: "2026-08-30",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "HR Tools", item: `${BASE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "Payslip Generator", item: PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    description: "Frequently asked questions about online payslip generation, salary slip components, tax deductions, and PDF downloads in India.",
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#quick-answer-title", "#quick-answer p", "#aeo-blocks h3", "#aeo-blocks p"],
    },
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};

export default function PayslipGeneratorPage() {
    return (
        <main id="main-content" className="payslip-generator-page min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <a href="#generator" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-emerald-600 focus:text-white font-bold">
                Skip to generator
            </a>

            <Navbar />

            {/* Hero Header */}
            <header className="tool-hero bg-gradient-to-br from-emerald-900 to-indigo-950 text-white pt-32 pb-16 print:hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="breadcrumbs flex items-center gap-2 text-xs text-slate-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-400" /></li>
                            <li><Link href="/tools" className="hover:text-white transition-colors">HR Tools</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-400" /></li>
                            <li aria-current="page" className="text-emerald-300 font-medium">Payslip Generator</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        📄 Professional Salary Slip Maker
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        Free Payslip Generator India – Create &amp; Download Salary Slips
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Generate professional, ready-to-download employee payslips online for free with HR Niti. Customize company details, employee information, earnings, deductions, and print or download clean PDF salary slips in seconds.
                    </p>
                </div>
            </header>

            {/* Generator Component Section */}
            <section id="generator" aria-labelledby="generator-title" className="py-12 bg-slate-50 border-b border-slate-100 print:bg-white print:py-0 print:border-none">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl print:p-0 print:m-0 print:max-w-none">
                    <PayslipGenerator />
                </div>
            </section>

            {/* Educational Content */}
            <div className="py-16 bg-white print:hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16 text-slate-700">

                    {/* Freshness & Trust Block */}
                    <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-emerald-700 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0">
                                Last Updated: August 2026
                            </span>
                            <span className="font-semibold text-slate-700">
                                Reviewed by HR Niti Payroll Team to comply with Indian statutory payroll standards (PF, PT, TDS).
                            </span>
                        </div>
                    </div>

                    {/* What is a Payslip */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">
                            What Is an Employee Payslip?
                        </h2>
                        <p className="leading-relaxed">
                            A payslip (also called a salary slip) is an official monthly statement given by an employer to an employee. It serves as legal proof of employment and salary income, itemizing all monthly earnings (Basic Pay, HRA, Special Allowance), statutory deductions (Employee PF, Professional Tax, Income Tax TDS), and the net take-home salary.
                        </p>
                        <div className="bg-white border border-emerald-200 rounded-xl p-4 font-mono text-xs md:text-sm font-bold text-emerald-950">
                            Net Pay = Total Monthly Earnings − Total Statutory &amp; Tax Deductions
                        </div>
                    </section>

                    {/* Key Components of an Indian Payslip */}
                    <section id="components" aria-labelledby="components-title" className="space-y-4">
                        <h2 id="components-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Key Components of a Standard Indian Payslip
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-base text-emerald-700">1. Monthly Earnings</h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-1">
                                    <li><strong>Basic Pay:</strong> Core taxable component of salary.</li>
                                    <li><strong>HRA:</strong> House Rent Allowance given for housing.</li>
                                    <li><strong>Special Allowance:</strong> Balancing allowance component.</li>
                                    <li><strong>Conveyance / Medical:</strong> Transport and medical allowance.</li>
                                </ul>
                            </div>
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-base text-amber-800">2. Monthly Deductions</h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-1">
                                    <li><strong>Employee PF:</strong> 12% statutory provident fund contribution.</li>
                                    <li><strong>Professional Tax (PT):</strong> State-level employee tax (max ₹200/mo).</li>
                                    <li><strong>Income Tax (TDS):</strong> Tax deducted at source based on tax regime.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* AEO Quick Answers */}
                    <section id="aeo-blocks" aria-labelledby="aeo-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="aeo-title" className="text-2xl font-bold text-slate-900">
                                Payslip Generator Quick Answer Summary
                            </h2>
                            <p className="text-sm text-slate-600">
                                Direct answers to common questions about generating salary slips online:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How do I create a salary slip online?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Fill in your company name, employee details, monthly earnings, and deductions in HR Niti&apos;s free Payslip Generator, then click &apos;Download / Print Payslip PDF&apos; to save a clean PDF copy.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Are payslips generated by this tool legally valid?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Yes! Payslips generated with accurate company, employee, earnings, and statutory deduction details serve as valid salary statements for employment verification and internal HR records.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Visible FAQ Accordion */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About Payslips
                            </h2>
                            <p className="text-sm text-slate-600">
                                Answers to common questions regarding salary slip components, PDF downloads, and bank loan documentation.
                            </p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Related Tools Cluster Grid */}
                    <section id="related-tools" aria-labelledby="related-title" className="space-y-6 pt-8 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="related-title" className="text-2xl font-bold text-slate-900">
                                Related HR &amp; Payroll Tools
                            </h2>
                            <p className="text-sm text-slate-600">
                                Explore HR Niti&apos;s interconnected India HR and payroll calculator hub:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "In-Hand Salary Calculator", href: "/tools/in-hand-salary-calculator", desc: "Calculate monthly net take-home salary" },
                                { title: "CTC Calculator", href: "/tools/ctc-calculator", desc: "Calculate annual Cost to Company package breakup" },
                                { title: "EPF Calculator", href: "/tools/pf-calculator", desc: "Calculate monthly Provident Fund contributions & maturity" },
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new CTC package" },
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Code on Social Security 2020 gratuity estimation" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out payout" },
                                { title: "Full & Final Settlement", href: "/tools/final-settlement-calculator", desc: "Calculate exit payout, unpaid salary & gratuity" },
                                { title: "HR Tools Hub", href: "/tools", desc: "Explore all online calculators & tools" },
                            ].map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group border border-slate-200 rounded-2xl p-4 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all"
                                >
                                    <div className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm flex items-center justify-between">
                                        <span>{item.title}</span>
                                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1 capitalize">{item.desc}</div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Methodology */}
                    <section id="methodology" aria-labelledby="methodology-title" className="space-y-4 pt-8 border-t border-slate-200">
                        <h2 id="methodology-title" className="text-xl font-bold text-slate-900">
                            Payslip Generator Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s Payslip Generator computes gross salary by summing all monthly earnings and calculates net pay by subtracting employee statutory deductions. PDF generation is rendered client-side directly in your browser without saving sensitive employee payroll data to any server.
                        </p>
                    </section>

                </div>
            </div>

            <section className="py-8 bg-slate-50 text-center border-t border-slate-200 print:hidden">
                <Link href="/tools" className="text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors">
                    ← Back to All HR Tools Hub
                </Link>
            </section>

            <div className="print:hidden">
                <CTASection />
                <Footer />
            </div>
        </main>
    );
}
