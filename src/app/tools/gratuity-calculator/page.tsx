import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import GratuityCalculator from "@/components/tools/GratuityCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/gratuity-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/gratuity-calculator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "Gratuity Calculator India — Code on Social Security 2020 Rules | HR Niti",
    },
    description: "Free Gratuity Calculator India. Calculate gratuity under Code on Social Security 2020 rules for regular, fixed-term (1 year), and contract employees.",
    keywords: "Gratuity Calculator India, Gratuity rules in India, Indian gratuity calculation, Code on Social Security 2020, gratuity calculation formula",
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
        title: "Gratuity Calculator India — Code on Social Security 2020 Rules | HR Niti",
        description: "Free Gratuity Calculator India. Calculate gratuity under Code on Social Security 2020 rules for regular, fixed-term (1 year), and contract employees.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Gratuity Calculator India under Code on Social Security 2020 rules" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gratuity Calculator India — Code on Social Security 2020 Rules | HR Niti",
        description: "Free Gratuity Calculator India. Calculate gratuity under Code on Social Security 2020 rules for regular, fixed-term (1 year), and contract employees.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is gratuity in India?",
        a: "Gratuity is a statutory lump-sum monetary benefit paid by an employer to an employee for continuous services rendered upon exit, retirement, resignation, or termination. It is governed by social-security legislation under the Payment of Gratuity Act, 1972 and consolidated under the Code on Social Security, 2020.",
    },
    {
        q: "How is gratuity calculated in India?",
        a: "For establishments covered under statutory rules, gratuity is calculated using the formula: Gratuity = (Last Drawn Basic Salary + Dearness Allowance) × 15 × Completed Years of Service ÷ 26. Here 15 represents days of wages and 26 represents working days in a month.",
    },
    {
        q: "What is the gratuity calculation formula?",
        a: "The standard statutory formula for covered establishments is: Gratuity = (Eligible Monthly Wages × 15 × Service Years) ÷ 26. For establishments not covered under the Act, the formula uses 30 working days as the divisor: Gratuity = (Eligible Monthly Wages × 15 × Service Years) ÷ 30.",
    },
    {
        q: "Is gratuity calculated on basic salary or total CTC?",
        a: "Gratuity is calculated strictly on Basic Salary + Dearness Allowance (DA), NOT on total Cost to Company (CTC) or take-home pay. Standard allowances such as HRA, transport allowance, and performance bonuses are excluded, unless non-wage components exceed 50% of total CTC under the Code on Social Security 2020.",
    },
    {
        q: "Is 5 years of service mandatory to get gratuity in India?",
        a: "For regular permanent employees, 5 continuous years of service with the same employer is mandatory to qualify for gratuity upon resignation or exit. However, 5 years is NOT required for Fixed-Term Employees (FTE), who are eligible after 1 year of service under the Code on Social Security 2020. The 5-year condition is also completely waived in cases of death or permanent disablement.",
    },
    {
        q: "Are fixed-term employees eligible for gratuity after 1 year?",
        a: "Yes! Under the Code on Social Security, 2020 (enforced 21 November 2025), Fixed-Term Employees (FTE) engaged on a contract basis qualify for gratuity on a pro-rata basis after completing just 1 year of continuous service.",
    },
    {
        q: "How much gratuity will I get after 5 years?",
        a: "Assuming a monthly Basic + DA of ₹40,000, your gratuity after 5 years is calculated as: ₹40,000 × 15 × 5 ÷ 26 = ₹1,15,385. If your Basic + DA is ₹50,000, gratuity is ₹50,000 × 15 × 5 ÷ 26 = ₹1,44,231.",
    },
    {
        q: "How much gratuity will I get after 10 years?",
        a: "With a monthly Basic + DA of ₹50,000 and 10 completed years of service, your gratuity payout will be: ₹50,000 × 15 × 10 ÷ 26 = ₹2,88,462.",
    },
    {
        q: "How are extra months counted in gratuity calculation?",
        a: "For establishments covered under the Gratuity Act, service exceeding 6 months in the final year of employment is rounded up to a full year (+1 year). For example, 4 years and 7 months is counted as 5 years of service. If service in the final year is 6 months or less (e.g. 4 years and 5 months), it is rounded down to 4 years.",
    },
    {
        q: "What is the maximum tax exemption limit for gratuity in India?",
        a: "Under Section 10(10) of the Income Tax Act, gratuity received by non-government private employees is exempt from income tax up to a maximum statutory ceiling of ₹20,00,000 (₹20 Lakhs) over their lifetime. Government employees receive 100% tax exemption on gratuity.",
    },
    {
        q: "What is the 50% wage cap rule under Code on Social Security 2020?",
        a: "The wage definition under the 2020 Labour Codes mandates that basic salary plus DA must constitute at least 50% of the employee's total CTC. If non-wage allowances exceed 50% of total CTC, the excess portion is automatically added back to eligible wages for calculating statutory benefits like gratuity and Provident Fund (PF).",
    },
    {
        q: "What is the difference between covered and non-covered gratuity establishments?",
        a: "Establishments with 10 or more employees are covered under the Gratuity Act and use the 15/26 formula with a 6-month rounding rule. Non-covered establishments (less than 10 employees) use the 15/30 formula and count completed full years only.",
    },
    {
        q: "Does gratuity form part of CTC package in offer letters?",
        a: "Employers often include an annual estimated gratuity contribution (typically 4.81% of Basic + DA) in an employee's total CTC breakup. However, actual gratuity is disbursed only upon exit after satisfying qualifying service criteria.",
    },
    {
        q: "Are contract workers eligible for gratuity payout?",
        a: "Contract workers engaged through a licensed contractor or directly are entitled to gratuity once they complete qualifying service under applicable Labour Codes. The contractor or principal employer is responsible for payment.",
    },
    {
        q: "Can an employer forfeit or withhold gratuity?",
        a: "Gratuity can only be forfeited or withheld if an employee's services are terminated for willful omission, negligence causing financial damage/loss to the employer, or disorderly conduct/violence involving moral turpitude, and only to the extent of actual damage caused.",
    },
    {
        q: "How soon must an employer pay gratuity after resignation or exit?",
        a: "Under statutory rules, the employer must calculate and pay the gratuity amount within 30 days from the date it becomes payable upon exit. Delayed payments beyond 30 days attract simple interest payable by the employer.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti Gratuity Calculator India",
    url: PAGE_URL,
    description: "Free Gratuity Calculator India. Calculate gratuity under Code on Social Security 2020 rules for regular, fixed-term (1 year), and contract employees.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript-enabled web browser",
    isAccessibleForFree: true,
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
    },
    publisher: {
        "@type": "Organization",
        name: "HR Niti Technologies Pvt. Ltd.",
        url: BASE_URL,
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "HR Tools",
            item: `${BASE_URL}/tools`,
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Gratuity Calculator India",
            item: PAGE_URL,
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
        },
    })),
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate Gratuity under Code on Social Security 2020 Rules",
    description: "Step-by-step guide to calculating statutory gratuity payout for Indian employees using eligible monthly wages and continuous service years.",
    step: [
        {
            "@type": "HowToStep",
            position: 1,
            name: "Identify Eligible Monthly Wages (Basic + DA)",
            text: "Obtain your last drawn monthly Basic Salary + Dearness Allowance (DA). If non-wage allowances exceed 50% of CTC, add the excess back to Basic under the 2020 Labour Codes.",
        },
        {
            "@type": "HowToStep",
            position: 2,
            name: "Determine Effective Continuous Service Years",
            text: "Count total completed years of service. For covered establishments, if extra months in the final year exceed 6 months, round up to an extra full year.",
        },
        {
            "@type": "HowToStep",
            position: 3,
            name: "Apply the 15/26 Statutory Gratuity Formula",
            text: "Multiply eligible monthly wages by 15, multiply by effective service years, and divide by 26 working days. Cap the payout at ₹20,00,000 for tax exemption.",
        },
    ],
};

const gratuityTableData = [
    { basic: "₹20,000", y5: "₹57,692", y10: "₹1,15,385", y15: "₹1,73,077", y20: "₹2,30,769", y25: "₹2,88,462", y30: "₹3,46,154" },
    { basic: "₹30,000", y5: "₹86,538", y10: "₹1,73,077", y15: "₹2,59,615", y20: "₹3,46,154", y25: "₹4,32,692", y30: "₹5,19,231" },
    { basic: "₹40,000", y5: "₹1,15,385", y10: "₹2,30,769", y15: "₹3,46,154", y20: "₹4,61,538", y25: "₹5,76,923", y30: "₹6,92,308" },
    { basic: "₹50,000", y5: "₹1,44,231", y10: "₹2,88,462", y15: "₹4,32,692", y20: "₹5,76,923", y25: "₹7,21,154", y30: "₹8,65,385" },
    { basic: "₹75,000", y5: "₹2,16,346", y10: "₹4,32,692", y15: "₹6,49,038", y20: "₹8,65,385", y25: "₹10,81,731", y30: "₹12,98,077" },
    { basic: "₹1,00,000", y5: "₹2,88,462", y10: "₹5,76,923", y15: "₹8,65,385", y20: "₹11,53,846", y25: "₹14,42,308", y30: "₹17,30,769" },
    { basic: "₹1,50,000", y5: "₹4,32,692", y10: "₹8,65,385", y15: "₹12,98,077", y20: "₹17,30,769", y25: "₹20,00,000*", y30: "₹20,00,000*" },
];

export default function GratuityCalculatorPage() {
    return (
        <main id="main-content" className="gratuity-calculator-page min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            <Navbar />

            {/* Hero Header */}
            <header className="tool-hero bg-gradient-to-br from-emerald-900 to-indigo-950 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="breadcrumbs flex items-center gap-2 text-xs text-slate-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-400" /></li>
                            <li><Link href="/tools" className="hover:text-white transition-colors">HR Tools</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-400" /></li>
                            <li aria-current="page" className="text-emerald-300 font-medium">Gratuity Calculator India</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        🇮🇳 Code on Social Security 2020 Rules (Enforced Nov 21, 2025)
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        Gratuity Calculator India — Code on Social Security 2020 Rules
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Free Gratuity Calculator India. Calculate gratuity under Code on Social Security 2020 rules for regular, fixed-term (1 year), and contract employees. Estimate your statutory exit payout, tax exemption limits under Section 10(10), and wage cap adjustments instantly.
                    </p>
                </div>
            </header>

            {/* Calculator Card Section */}
            <section id="gratuity-calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">
                                Calculate Your Statutory Gratuity Payout Instantly
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Select employee category and establishment type, enter your last drawn monthly Basic Salary + Dearness Allowance (DA), and completed years of continuous service.
                            </p>
                        </div>

                        <GratuityCalculator />
                    </div>
                </div>
            </section>

            {/* Long-form Educational Content for SEO / AEO / GEO */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16 text-slate-700">

                    {/* Quick Answer */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">
                            How Is Gratuity Calculated in India?
                        </h2>
                        <p className="leading-relaxed">
                            Under Indian statutory rules (Payment of Gratuity Act, 1972 &amp; Code on Social Security, 2020), gratuity for covered establishments is calculated using the 15/26 formula:
                        </p>
                        <div className="bg-white border border-emerald-200 rounded-xl p-4 font-mono text-sm md:text-base font-bold text-emerald-900 overflow-x-auto">
                            Gratuity = (Last Drawn Monthly Basic + DA) × 15 × Completed Years of Service ÷ 26
                        </div>
                        <div className="space-y-2 pt-2 text-sm">
                            <p className="font-bold text-slate-900">Step-by-Step Example Calculation:</p>
                            <p>Suppose an employee exits after <strong className="text-slate-900">7 years of continuous service</strong> with a last drawn Basic Salary + DA of <strong className="text-slate-900">₹40,000/month</strong>.</p>
                            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                                <li>15 Days Wage Equivalent: <code className="bg-emerald-100/60 px-2 py-0.5 rounded text-emerald-900 font-mono">₹40,000 × 15 / 26 = ₹23,076.92</code></li>
                                <li>Multiply by 7 Service Years: <code className="bg-emerald-100/60 px-2 py-0.5 rounded text-emerald-900 font-mono">₹23,076.92 × 7 = ₹1,61,538</code></li>
                            </ul>
                            <p className="text-slate-600 pt-1">
                                The estimated statutory gratuity payout is <strong>₹1,61,538</strong>. The entire amount is 100% tax-free under Income Tax Act Section 10(10) since it is well within the ₹20,00,000 statutory limit.
                            </p>
                        </div>
                    </section>

                    {/* What is Gratuity? */}
                    <section id="what-is-gratuity" aria-labelledby="gratuity-meaning-title" className="space-y-4">
                        <h2 id="gratuity-meaning-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            What Is Gratuity under Indian Labour Laws?
                        </h2>
                        <p className="leading-relaxed">
                            Gratuity is a statutory financial retirement and exit benefit paid by an employer to express gratitude for an employee&apos;s long-term dedicated service. In India, gratuity is governed by social-security legislation operating under the <strong>Code on Social Security, 2020</strong> (enforced 21 November 2025, consolidating the Payment of Gratuity Act, 1972).
                        </p>
                        <p className="leading-relaxed">
                            Gratuity applies automatically to factories, mines, oilfields, plantations, ports, railway companies, shops, commercial firms, IT companies, and all establishments employing <strong>10 or more workers</strong> on any day in the preceding 12 months.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                            {[
                                "Superannuation / Retirement upon reaching age limit",
                                "Resignation after completing qualifying continuous service",
                                "Termination / Exit after qualifying tenure",
                                "Fixed-Term Contract completion (1-year rule)",
                                "Death of employee (5-year rule waived)",
                                "Permanent disablement due to accident/disease (5-year rule waived)",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-sm font-medium text-slate-800">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gratuity Formula Breakdown */}
                    <section id="gratuity-formula" aria-labelledby="formula-breakdown-title" className="space-y-4">
                        <h2 id="formula-breakdown-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Gratuity Formula Components Explained
                        </h2>
                        <p className="leading-relaxed">
                            To calculate gratuity accurately, it is essential to understand the four core statutory components of the 15/26 formula:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-3">
                                <div className="flex items-center gap-2 font-bold text-lg text-emerald-700">
                                    <FileText className="h-5 w-5" /> 1. Eligible Monthly Wages (Basic + DA)
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    Includes your last drawn monthly Basic Salary and Dearness Allowance (DA). Excludes HRA, overtime, bonus, commission, and special allowances.
                                </p>
                                <div className="text-xs bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 text-emerald-900">
                                    <strong>2020 Labour Code Rule:</strong> If allowances exceed 50% of total CTC, the excess is added back to Basic for gratuity.
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-3">
                                <div className="flex items-center gap-2 font-bold text-lg text-indigo-900">
                                    <Scale className="h-5 w-5" /> 2. The 15/26 Working Days Factor
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    <strong>15</strong> represents 15 days of wages for every completed year of service. <strong>26</strong> represents standard working days in a month (30 calendar days minus 4 weekly off days).
                                </p>
                                <div className="text-xs bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900">
                                    Calculation: Daily Wage = Monthly Basic ÷ 26. Gratuity per year = Daily Wage × 15.
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-3 mt-4">
                            <h3 className="font-bold text-lg text-slate-900">3. Rounding Rule for Service Tenure</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                In covered establishments, continuous service in the final year exceeding 6 months is rounded up to 1 full year. Service of 6 months or less is ignored.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3 text-xs pt-1">
                                <div className="bg-white p-3 rounded-xl border border-slate-200">
                                    <span className="font-bold text-slate-900">7 Years &amp; 7 Months</span> → Counted as <strong>8 Years</strong>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-slate-200">
                                    <span className="font-bold text-slate-900">7 Years &amp; 4 Months</span> → Counted as <strong>7 Years</strong>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Covered vs Non-Covered */}
                    <section id="covered-vs-noncovered" aria-labelledby="coverage-title" className="space-y-4">
                        <h2 id="coverage-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Covered vs Non-Covered Establishments (15/26 vs 15/30 Rule)
                        </h2>
                        <p className="leading-relaxed">
                            Gratuity calculation in India varies depending on whether your employer is covered under the Payment of Gratuity Act / Code on Social Security 2020:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-3 shadow-xs">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
                                    Covered Establishments (10+ Employees)
                                </span>
                                <h3 className="text-xl font-bold text-slate-900">15/26 Statutory Formula</h3>
                                <div className="font-mono text-sm bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-900 font-bold">
                                    Gratuity = (Basic + DA) × 15 × Years ÷ 26
                                </div>
                                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                                    <li>Divisor is 26 working days</li>
                                    <li>6+ extra months rounded up to next full year</li>
                                    <li>Statutory ceiling cap: ₹20,00,000</li>
                                </ul>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-3 shadow-xs">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-md">
                                    Non-Covered Establishments (&lt;10 Employees)
                                </span>
                                <h3 className="text-xl font-bold text-slate-900">15/30 Standard Formula</h3>
                                <div className="font-mono text-sm bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-900 font-bold">
                                    Gratuity = (Basic + DA) × 15 × Years ÷ 30
                                </div>
                                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                                    <li>Divisor is 30 calendar days</li>
                                    <li>Only completed full years counted (no rounding)</li>
                                    <li>Voluntary or contractual benefit payout</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Eligibility Rules: Regular vs Fixed-Term vs Contract */}
                    <section id="eligibility-rules" aria-labelledby="eligibility-title" className="space-y-4">
                        <h2 id="eligibility-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Gratuity Eligibility in India: Is 5 Years Mandatory?
                        </h2>
                        <p className="leading-relaxed">
                            A common myth in Indian HR is that 5 years of service is mandatory for every employee to get gratuity. Under the <strong>Code on Social Security, 2020</strong> (enforced 21 November 2025), eligibility depends on employment category:
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-900 text-lg">1. Regular Permanent Employees</h3>
                                    <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md">5 Years Threshold</span>
                                </div>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Permanent full-time employees require <strong>5 continuous years of service</strong> with the same employer. 4 years and 240 days (or 190 days in 5-day week companies) satisfies the 5-year threshold under judicial precedents.
                                </p>
                            </div>

                            <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50/60 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-emerald-950 text-lg">2. Fixed-Term Employees (FTE)</h3>
                                    <span className="text-xs font-bold bg-emerald-700 text-white px-2.5 py-1 rounded-md">1 Year Threshold (2020 Code)</span>
                                </div>
                                <p className="text-xs md:text-sm text-emerald-900 leading-relaxed">
                                    Under Chapter V, Section 53 of the Code on Social Security 2020, <strong>Fixed-Term Employees (FTE)</strong> engaged for a specific contract duration qualify for gratuity on a <strong>pro-rata basis after completing 1 year of service</strong>.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-900 text-lg">3. Death or Permanent Disablement</h3>
                                    <span className="text-xs font-bold bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md">0 Days Threshold (Waived)</span>
                                </div>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    If service ends due to employee death or permanent disablement caused by accident or disease, the 5-year continuous service rule is <strong>completely waived</strong>. Gratuity is paid on a pro-rata basis to the employee, nominee, or legal heir.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Gratuity Examples */}
                    <section id="gratuity-examples" aria-labelledby="examples-title" className="space-y-6">
                        <h2 id="examples-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Gratuity Payout Examples
                        </h2>
                        <p className="leading-relaxed">
                            Here is a breakdown of statutory gratuity payouts across common service tenures based on a monthly Basic + DA of <strong className="text-slate-900">₹50,000</strong>:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { tenure: "5 Years", payout: "₹1,44,231", formula: "₹50k × 15 × 5 ÷ 26" },
                                { tenure: "7 Years", payout: "₹2,01,923", formula: "₹50k × 15 × 7 ÷ 26" },
                                { tenure: "10 Years", payout: "₹2,88,462", formula: "₹50k × 15 × 10 ÷ 26" },
                                { tenure: "15 Years", payout: "₹4,32,692", formula: "₹50k × 15 × 15 ÷ 26" },
                                { tenure: "20 Years", payout: "₹5,76,923", formula: "₹50k × 15 × 20 ÷ 26" },
                                { tenure: "25 Years", payout: "₹7,21,154", formula: "₹50k × 15 × 25 ÷ 26" },
                            ].map((ex) => (
                                <div key={ex.tenure} className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-emerald-300 transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                                        {ex.tenure} Service
                                    </span>
                                    <div className="mt-3 text-sm font-bold text-slate-900">
                                        Gratuity: <span className="text-emerald-600 text-base">{ex.payout}</span>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono mt-1">
                                        Formula: {ex.formula}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gratuity Table */}
                    <section id="gratuity-table" aria-labelledby="table-title" className="space-y-4">
                        <h2 id="table-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Gratuity Payout Reference Table (India)
                        </h2>
                        <p className="leading-relaxed text-sm text-slate-600">
                            Use this scannable reference table to look up estimated statutory gratuity amounts across different monthly Basic Salary + DA levels and completed service years under the 15/26 formula:
                        </p>
                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Monthly Basic + DA</th>
                                        <th className="p-3.5 border-b border-slate-800">5 Years</th>
                                        <th className="p-3.5 border-b border-slate-800">10 Years</th>
                                        <th className="p-3.5 border-b border-slate-800">15 Years</th>
                                        <th className="p-3.5 border-b border-slate-800">20 Years</th>
                                        <th className="p-3.5 border-b border-slate-800">25 Years</th>
                                        <th className="p-3.5 border-b border-slate-800">30 Years</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    {gratuityTableData.map((row, idx) => (
                                        <tr key={row.basic} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                                            <td className="p-3.5 font-bold text-slate-900">{row.basic}</td>
                                            <td className="p-3.5 text-slate-700">{row.y5}</td>
                                            <td className="p-3.5 text-slate-700">{row.y10}</td>
                                            <td className="p-3.5 text-slate-700">{row.y15}</td>
                                            <td className="p-3.5 text-slate-700">{row.y20}</td>
                                            <td className="p-3.5 text-slate-700">{row.y25}</td>
                                            <td className="p-3.5 font-bold text-emerald-600">{row.y30}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-500 italic pt-1">
                            * Note: Gratuity payout is capped at the statutory tax exemption ceiling of ₹20,00,000 (₹20 Lakhs) under Section 10(10) of the Income Tax Act.
                        </p>
                    </section>

                    {/* Tax Exemption Section */}
                    <section id="tax-exemption" aria-labelledby="tax-title" className="space-y-4">
                        <h2 id="tax-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Gratuity Tax Exemption Rules under Section 10(10) of Income Tax Act
                        </h2>
                        <p className="leading-relaxed">
                            Gratuity received by an employee at the time of retirement or exit is eligible for tax exemption under Section 10(10) of the Income Tax Act, 1961:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
                                <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                                    <ShieldCheck className="h-5 w-5 text-emerald-600" /> Government Employees
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Gratuity received by Central Government, State Government, defense personnel, and local authority employees is <strong>100% fully tax-exempt</strong> without any monetary limit.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
                                <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                                    <ShieldCheck className="h-5 w-5 text-indigo-600" /> Non-Government Private Employees
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    For private sector employees, gratuity is tax-exempt up to the <strong>lowest</strong> of the following three amounts:
                                </p>
                                <ul className="text-xs text-slate-600 list-disc list-inside space-y-1 pt-1">
                                    <li>Actual gratuity amount received</li>
                                    <li>Statutory lifetime ceiling limit of <strong>₹20,00,000 (₹20 Lakhs)</strong></li>
                                    <li>15 days wages per completed year of service (15/26 formula)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 50% Wage Cap Rule */}
                    <section id="50-percent-wage-cap" aria-labelledby="wage-cap-title" className="space-y-3 bg-indigo-950 text-white rounded-2xl p-6 md:p-8">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                            2020 Labour Codes Impact
                        </span>
                        <h2 id="wage-cap-title" className="text-xl md:text-2xl font-bold text-white pt-2">
                            The 50% Wage Cap Rule &amp; Its Impact on Gratuity
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-200">
                            Under the Code on Social Security 2020, an employee&apos;s &quot;Wages&quot; (Basic Salary + DA + retaining allowance) must constitute at least <strong>50% of the total Cost to Company (CTC)</strong>. If special allowances, HRA, and perks exceed 50% of CTC, the excess amount must be added back to eligible wages.
                        </p>
                        <div className="bg-white/10 border border-white/15 rounded-xl p-4 text-xs font-mono text-cyan-100">
                            Example: Total CTC = ₹10,00,000/yr (₹83,333/mo). Current Basic = ₹30,000 (36%). Allowances = ₹53,333 (64%).<br />
                            Excess Allowances over 50% = ₹53,333 - ₹41,666 = ₹11,667.<br />
                            Revised Eligible Wage for Gratuity = ₹30,000 + ₹11,667 = <strong>₹41,667/month</strong>.
                        </div>
                    </section>

                    {/* Visible FAQ Accordion */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About Gratuity Calculation
                            </h2>
                            <p className="text-sm text-slate-600">
                                Detailed answers regarding Indian gratuity rules, 5-year eligibility, 1-year fixed term rules, tax limits, and formulas.
                            </p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Internal Links Grid */}
                    <section id="related-tools" aria-labelledby="related-tools-title" className="space-y-6 pt-8 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="related-tools-title" className="text-2xl font-bold text-slate-900">
                                Related HR &amp; Salary Calculators
                            </h2>
                            <p className="text-sm text-slate-600">
                                Explore live HR Niti tools and calculators to compute compensation, exit settlements, and statutory compliance:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new annual/monthly CTC" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out amount" },
                                { title: "Full & Final Settlement", href: "/full-and-final-settlement", desc: "Automated exit payouts & statutory calculations" },
                                { title: "Payroll & Salary Software", href: "/payroll-software", desc: "1-Click automated salary calculation & net banking" },
                                { title: "HR Policy Templates", href: "/templates", desc: "Ready-to-use offer letters & salary policies" },
                                { title: "HR Glossary", href: "/resources/hr-glossary", desc: "Key CTC, salary, and statutory terms defined" },
                                { title: "All Free HR Tools", href: "/tools", desc: "Explore all online calculators & tools" },
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

                    {/* Methodology & Trust / Freshness */}
                    <section id="methodology" aria-labelledby="methodology-title" className="space-y-4 pt-8 border-t border-slate-200">
                        <h2 id="methodology-title" className="text-xl font-bold text-slate-900">
                            Gratuity Calculator Methodology &amp; Trust Disclaimer
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            This calculator uses standard statutory formulas prescribed under the Payment of Gratuity Act, 1972 and Code on Social Security, 2020. The calculator is intended for salary planning, exit payout estimations, and employee guidance. Actual gratuity disbursement by employers may depend on company policies, service records, and legal agreements.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Statutory Framework:</span> Code on Social Security, 2020 (Enforced Nov 21, 2025)
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Reviewed by:</span> HR Niti Compliance Team
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <section className="py-8 bg-slate-50 text-center border-t border-slate-200">
                <Link href="/tools" className="text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors">
                    ← Back to All HR Tools Hub
                </Link>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
