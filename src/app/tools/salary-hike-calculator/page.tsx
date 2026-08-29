import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import SalaryHikeCalculator from "@/components/tools/SalaryHikeCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/salary-hike-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/salary-hike-calculator-og.jpg`;

export const metadata: Metadata = {
    title: "Salary Hike Calculator - Instant Hike % & CTC",
    description: "Use HR Niti's free Salary Hike Calculator to calculate salary hike percentage, new salary, monthly increase and annual CTC increase instantly.",
    keywords: "salary hike calculator, hike calculator, hike percentage calculator, salary hike percentage calculator, ctc hike calculator, how to calculate 30 hike on ctc, how to calculate hike percentage",
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
        title: "Salary Hike Calculator - Calculate Hike %, New Salary & CTC",
        description: "Calculate salary hike percentage, new salary, monthly increase and annual increase with HR Niti's free Salary Hike Calculator.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Salary hike calculator showing current salary, hike percentage and new salary" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Salary Hike Calculator - Calculate Hike %, New Salary & CTC",
        description: "Calculate your salary hike, revised salary, monthly gain and annual increase instantly.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is a salary hike calculator?",
        a: "A salary hike calculator is an online tool that calculates the percentage increase between your current and revised salary. It can also calculate your new salary when you enter a hike percentage.",
    },
    {
        q: "How do I calculate salary hike percentage?",
        a: "Use the formula: Salary Hike % = ((New Salary - Current Salary) / Current Salary) x 100. For example, increasing from INR 5,00,000 to INR 6,00,000 is a 20% hike.",
    },
    {
        q: "How do I calculate salary after a hike?",
        a: "Use: New Salary = Current Salary x (1 + Hike Percentage / 100). For example, a 20% hike on INR 5,00,000 gives a new salary of INR 6,00,000.",
    },
    {
        q: "How do I calculate a 10% hike in salary?",
        a: "Multiply your current salary by 1.10. For example, INR 5,00,000 x 1.10 = INR 5,50,000.",
    },
    {
        q: "How do I calculate a 20% hike in salary?",
        a: "Multiply your current salary by 1.20. For example, INR 5,00,000 x 1.20 = INR 6,00,000.",
    },
    {
        q: "How do I calculate a 30% hike on CTC?",
        a: "Multiply the current CTC by 1.30. For example, INR 8,00,000 x 1.30 = INR 10,40,000.",
    },
    {
        q: "What is a 10% salary hike?",
        a: "A 10% salary hike means your salary increases by an amount equal to 10% of your previous salary. For a salary of INR 6,00,000, a 10% hike increases the salary to INR 6,60,000.",
    },
    {
        q: "What is a 20% salary hike?",
        a: "A 20% salary hike means your salary increases by 20% of your previous salary. For a salary of INR 6,00,000, the new salary is INR 7,20,000.",
    },
    {
        q: "What is a 30% salary hike?",
        a: "A 30% salary hike means your salary increases by 30% of your previous salary. For a salary of INR 6,00,000, the new salary is INR 7,80,000.",
    },
    {
        q: "Is salary hike calculated on CTC or take-home salary?",
        a: "Salary hike calculations can be made using either salary or CTC values, but you should compare the same type of figure before and after the increase. For example, compare old CTC with new CTC rather than comparing old CTC with new take-home salary.",
    },
    {
        q: "Does a CTC hike mean the same increase in take-home salary?",
        a: "No. A CTC increase does not necessarily result in the same percentage increase in take-home pay because compensation structure and deductions can differ.",
    },
    {
        q: "Is salary hike the same as salary increment?",
        a: "The terms are commonly used to describe an increase in salary. The exact terminology may vary between organizations.",
    },
    {
        q: "How is salary hike calculated after a job switch?",
        a: "Compare your current CTC with the new offer: Hike % = ((New CTC - Current CTC) / Current CTC) x 100. For a meaningful comparison, review fixed salary, variable pay, bonuses and benefits as well as total CTC.",
    },
    {
        q: "How do I calculate my monthly salary after a hike?",
        a: "If you are using annual salary, divide the revised annual amount by 12 to get a simple monthly equivalent. Actual monthly take-home salary can differ because of deductions and salary structure.",
    },
    {
        q: "Can I calculate a salary hike using monthly salary?",
        a: "Yes. Enter the old and new monthly salary amounts, provided both values use the same basis.",
    },
    {
        q: "What is the difference between salary hike and salary increase?",
        a: "They generally describe the same concept: an increase in compensation compared with the previous salary.",
    },
    {
        q: "Can I use this calculator for appraisal hikes?",
        a: "Yes. Enter your pre-appraisal and post-appraisal salary or CTC to calculate the percentage increase.",
    },
    {
        q: "Can I use this calculator to compare job offers?",
        a: "Yes. Enter your current CTC and the proposed CTC to calculate the percentage difference. You should also review the fixed and variable components separately.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti Salary Hike Calculator",
    url: PAGE_URL,
    description: "Free online salary hike calculator for calculating salary hike percentage, revised salary, monthly increase and annual increase.",
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
            name: "Salary Hike Calculator",
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

const hikeTableData = [
    { current: "₹3,00,000", h10: "₹3,30,000", h20: "₹3,60,000", h30: "₹3,90,000", h40: "₹4,20,000", h50: "₹4,50,000" },
    { current: "₹4,00,000", h10: "₹4,40,000", h20: "₹4,80,000", h30: "₹5,20,000", h40: "₹5,60,000", h50: "₹6,00,000" },
    { current: "₹5,00,000", h10: "₹5,50,000", h20: "₹6,00,000", h30: "₹6,50,000", h40: "₹7,00,000", h50: "₹7,50,000" },
    { current: "₹6,00,000", h10: "₹6,60,000", h20: "₹7,20,000", h30: "₹7,80,000", h40: "₹8,40,000", h50: "₹9,00,000" },
    { current: "₹8,00,000", h10: "₹8,80,000", h20: "₹9,60,000", h30: "₹10,40,000", h40: "₹11,20,000", h50: "₹12,00,000" },
    { current: "₹10,00,000", h10: "₹11,00,000", h20: "₹12,00,000", h30: "₹13,00,000", h40: "₹14,00,000", h50: "₹15,00,000" },
    { current: "₹12,00,000", h10: "₹13,20,000", h20: "₹14,40,000", h30: "₹15,60,000", h40: "₹16,80,000", h50: "₹18,00,000" },
    { current: "₹15,00,000", h10: "₹16,50,000", h20: "₹18,00,000", h30: "₹19,50,000", h40: "₹21,00,000", h50: "₹22,50,000" },
    { current: "₹20,00,000", h10: "₹22,00,000", h20: "₹24,00,000", h30: "₹26,00,000", h40: "₹28,00,000", h50: "₹30,00,000" },
];

const monthlyHikeData = [
    { current: "₹25,000", h10: "₹27,500", h20: "₹30,000", h30: "₹32,500" },
    { current: "₹30,000", h10: "₹33,000", h20: "₹36,000", h30: "₹39,000" },
    { current: "₹40,000", h10: "₹44,000", h20: "₹48,000", h30: "₹52,000" },
    { current: "₹50,000", h10: "₹55,000", h20: "₹60,000", h30: "₹65,000" },
    { current: "₹60,000", h10: "₹66,000", h20: "₹72,000", h30: "₹78,000" },
    { current: "₹75,000", h10: "₹82,500", h20: "₹90,000", h30: "₹97,500" },
    { current: "₹1,00,000", h10: "₹1,10,000", h20: "₹1,20,000", h30: "₹1,30,000" },
];

export default function SalaryHikeCalculatorPage() {
    return (
        <main id="main-content" className="salary-hike-calculator-page min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                            <li aria-current="page" className="text-emerald-300 font-medium">Salary Hike Calculator</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        Free Salary & CTC Tool
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">Salary Hike Calculator</h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Calculate your salary hike percentage, new salary, monthly increase and annual increase instantly with HR Niti&apos;s free Salary Hike Calculator. Enter your current salary or CTC and your revised salary or expected hike percentage to understand exactly how much your compensation has increased.
                    </p>
                </div>
            </header>

            {/* Calculator Card Section */}
            <section id="salary-hike-calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">Calculate Your Salary Hike Instantly</h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Enter your current salary and revised salary to calculate the hike percentage, or switch to Find New Salary mode and enter your expected hike percentage.
                            </p>
                        </div>

                        <SalaryHikeCalculator />
                    </div>
                </div>
            </section>

            {/* Long-form Educational Content for SEO / AEO / GEO */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16 text-slate-700">

                    {/* Quick Answer */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">How Do You Calculate a Salary Hike?</h2>
                        <p className="leading-relaxed">
                            A salary hike percentage is calculated by comparing your salary before and after the increase using a simple percentage change formula:
                        </p>
                        <div className="bg-white border border-emerald-200 rounded-xl p-4 font-mono text-sm md:text-base font-bold text-emerald-900">
                            Salary Hike % = ((New Salary - Current Salary) / Current Salary) x 100
                        </div>
                        <div className="space-y-2 pt-2 text-sm">
                            <p className="font-bold text-slate-900">Example Calculation:</p>
                            <p>Suppose your current annual CTC is <strong className="text-slate-900">₹6,00,000</strong> and your new CTC is <strong className="text-slate-900">₹7,20,000</strong>.</p>
                            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                                <li>The monetary increase is: <code className="bg-emerald-100/60 px-2 py-0.5 rounded text-emerald-900 font-mono">₹7,20,000 - ₹6,00,000 = ₹1,20,000</code></li>
                                <li>The hike percentage is: <code className="bg-emerald-100/60 px-2 py-0.5 rounded text-emerald-900 font-mono">₹1,20,000 / ₹6,00,000 x 100 = 20%</code></li>
                            </ul>
                            <p className="text-slate-600 pt-1">
                                So, a salary increase from ₹6 lakh to ₹7.2 lakh represents a <strong>20% salary hike</strong>. Use the calculator above to calculate the result automatically.
                            </p>
                        </div>
                    </section>

                    {/* What is a Salary Hike? */}
                    <section id="what-is-a-salary-hike" aria-labelledby="salary-hike-title" className="space-y-4">
                        <h2 id="salary-hike-title" className="text-2xl md:text-3xl font-bold text-slate-900">What Is a Salary Hike?</h2>
                        <p className="leading-relaxed">
                            A salary hike is an increase in an employee&apos;s compensation compared with their previous salary or CTC. Salary hikes can happen for several key organizational reasons, including:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                            {[
                                "Annual performance appraisals",
                                "Promotions and title changes",
                                "Role or responsibility expansion",
                                "Internal salary revisions & equity reviews",
                                "Job changes & employer switches",
                                "Market corrections and inflation adjustments",
                                "Retention adjustments & counter-offers",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-sm font-medium text-slate-800">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="leading-relaxed pt-2">
                            A salary hike may be expressed as a percentage, such as 10%, 15%, 20%, or 30%, or as a fixed monetary amount added on top of your existing package. For example, if your annual salary increases from ₹5,00,000 to ₹5,75,000, your salary increase is ₹75,000 and your salary hike is <strong>15%</strong>.
                        </p>
                    </section>

                    {/* How to Use */}
                    <section id="how-to-use" aria-labelledby="how-to-use-title" className="space-y-4">
                        <h2 id="how-to-use-title" className="text-2xl md:text-3xl font-bold text-slate-900">How to Use the Salary Hike Calculator</h2>
                        <p className="leading-relaxed">
                            HR Niti&apos;s free Hike Calculator offers two convenient modes to fit whichever numbers you currently have:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
                                <h3 className="font-bold text-lg text-emerald-700">1. Find Hike Percentage Mode</h3>
                                <p className="text-sm leading-relaxed">
                                    Choose this option when you know your current salary and your new revised salary figure.
                                </p>
                                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside pt-1">
                                    <li><strong>Current Salary / CTC:</strong> Your previous annual or monthly salary.</li>
                                    <li><strong>New Salary / CTC:</strong> Your revised annual or monthly salary.</li>
                                </ul>
                                <p className="text-xs text-slate-500 italic pt-1">The calculator will display the hike percentage, salary increase, monthly increase, and annual increase.</p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
                                <h3 className="font-bold text-lg text-emerald-700">2. Find New Salary Mode</h3>
                                <p className="text-sm leading-relaxed">
                                    Choose this option when you know your current salary and the expected percentage hike.
                                </p>
                                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside pt-1">
                                    <li><strong>Current Salary / CTC:</strong> Your previous annual or monthly salary.</li>
                                    <li><strong>Expected Hike Percentage:</strong> The percentage increase expected (e.g. 20%).</li>
                                </ul>
                                <p className="text-xs text-slate-500 italic pt-1">The calculator will output your estimated new salary, annual gain, and monthly gain.</p>
                            </div>
                        </div>
                    </section>

                    {/* Annual vs Monthly */}
                    <section id="annual-vs-monthly" aria-labelledby="annual-vs-monthly-title" className="space-y-4">
                        <h2 id="annual-vs-monthly-title" className="text-2xl md:text-3xl font-bold text-slate-900">Annual Salary Hike vs Monthly Salary Hike</h2>
                        <p className="leading-relaxed">
                            A salary hike can be calculated using either annual or monthly salary figures. For example, if your annual CTC is ₹6,00,000, the simple monthly equivalent is:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-sm">
                            Monthly Salary = ₹6,00,000 ÷ 12 = ₹50,000 / month
                        </div>
                        <p className="leading-relaxed">
                            If you receive a 20% hike, the new annual CTC becomes ₹7,20,000, the simple monthly equivalent is ₹60,000, and your monthly increase is ₹10,00,000 / 100 or ₹10,000.
                        </p>
                        <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-4">
                            <strong>Important Tip:</strong> Always compare like with like. If your old salary is expressed annually, use the annual revised salary for the most accurate percentage calculation.
                        </p>
                    </section>

                    {/* Salary Hike Examples */}
                    <section id="salary-hike-examples" aria-labelledby="examples-title" className="space-y-6">
                        <h2 id="examples-title" className="text-2xl md:text-3xl font-bold text-slate-900">Salary Hike Examples</h2>
                        <p className="leading-relaxed">
                            Here is a breakdown of common percentage hikes based on a starting annual salary of <strong className="text-slate-900">₹5,00,000</strong>:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { pct: "10%", hike: "₹50,000", newSal: "₹5,50,000" },
                                { pct: "15%", hike: "₹75,000", newSal: "₹5,75,000" },
                                { pct: "20%", hike: "₹1,00,000", newSal: "₹6,00,000" },
                                { pct: "25%", hike: "₹1,25,000", newSal: "₹6,25,000" },
                                { pct: "30%", hike: "₹1,50,000", newSal: "₹6,50,000" },
                                { pct: "40%", hike: "₹2,00,000", newSal: "₹7,00,000" },
                                { pct: "50%", hike: "₹2,50,000", newSal: "₹7,50,000" },
                            ].map((ex) => (
                                <div key={ex.pct} className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-emerald-300 transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">{ex.pct} Salary Hike</span>
                                    <div className="mt-3 text-sm text-slate-600">
                                        Hike amount: <strong className="text-slate-900">{ex.hike}</strong>
                                    </div>
                                    <div className="text-sm font-bold text-slate-900 mt-1">
                                        New Salary: <span className="text-emerald-600">{ex.newSal}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Salary Hike Percentage Table */}
                    <section id="salary-hike-table" aria-labelledby="table-title" className="space-y-4">
                        <h2 id="table-title" className="text-2xl md:text-3xl font-bold text-slate-900">Salary Hike Percentage Table</h2>
                        <p className="leading-relaxed text-sm text-slate-600">
                            Use this scannable reference table to look up revised annual salaries for common CTC levels across 10%, 20%, 30%, 40%, and 50% hikes:
                        </p>
                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Current Annual Salary</th>
                                        <th className="p-3.5 border-b border-slate-800">10% Hike</th>
                                        <th className="p-3.5 border-b border-slate-800">20% Hike</th>
                                        <th className="p-3.5 border-b border-slate-800">30% Hike</th>
                                        <th className="p-3.5 border-b border-slate-800">40% Hike</th>
                                        <th className="p-3.5 border-b border-slate-800">50% Hike</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    {hikeTableData.map((row, idx) => (
                                        <tr key={row.current} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                                            <td className="p-3.5 font-bold text-slate-900">{row.current}</td>
                                            <td className="p-3.5 text-slate-700">{row.h10}</td>
                                            <td className="p-3.5 text-slate-700">{row.h20}</td>
                                            <td className="p-3.5 text-slate-700">{row.h30}</td>
                                            <td className="p-3.5 text-slate-700">{row.h40}</td>
                                            <td className="p-3.5 font-bold text-emerald-600">{row.h50}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Hike Percentage */}
                    <section id="hike-percentage" aria-labelledby="hike-percentage-title" className="space-y-4">
                        <h2 id="hike-percentage-title" className="text-2xl md:text-3xl font-bold text-slate-900">How to Calculate Hike Percentage</h2>
                        <p className="leading-relaxed">
                            To calculate the percentage increase in your salary, apply the standard formula:
                        </p>
                        <div className="bg-slate-900 text-white rounded-xl p-4 font-mono text-sm">
                            Hike Percentage = ((New Salary - Current Salary) / Current Salary) x 100
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 pt-2">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-1">
                                <h4 className="font-bold text-slate-900">Example 1 (Annual CTC)</h4>
                                <p>Current CTC = ₹8,00,000</p>
                                <p>New CTC = ₹9,60,000</p>
                                <p>Increase = ₹1,60,000</p>
                                <p className="font-bold text-emerald-700 pt-1">Hike % = ₹1,60,000 / ₹8,00,000 x 100 = 20%</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-1">
                                <h4 className="font-bold text-slate-900">Example 2 (Monthly Salary)</h4>
                                <p>Current Monthly = ₹50,000</p>
                                <p>New Monthly = ₹57,500</p>
                                <p>Increase = ₹7,500 / month</p>
                                <p className="font-bold text-emerald-700 pt-1">Hike % = ₹7,500 / ₹50,000 x 100 = 15%</p>
                            </div>
                        </div>
                    </section>

                    {/* How to Calculate Salary After a Hike */}
                    <section id="new-salary" aria-labelledby="new-salary-title" className="space-y-4">
                        <h2 id="new-salary-title" className="text-2xl md:text-3xl font-bold text-slate-900">How to Calculate Salary After a Hike</h2>
                        <p className="leading-relaxed">
                            When you know your current salary and hike percentage, calculate the new revised salary using:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-sm font-bold text-slate-900">
                            New Salary = Current Salary x (1 + Hike Percentage / 100)
                        </div>
                        <p className="text-sm text-slate-600">
                            <strong>Example:</strong> Current salary = ₹6,00,000. Hike = 20%. New salary = ₹6,00,000 x 1.20 = <strong>₹7,20,000</strong>.
                        </p>
                    </section>

                    {/* 10%, 20%, 30% Hikes */}
                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                        <section id="hike-10-percent" aria-labelledby="hike-10-title" className="border border-slate-200 rounded-2xl p-5 space-y-2 bg-slate-50/40">
                            <h2 id="hike-10-title" className="text-lg font-bold text-slate-900">How to Calculate a 10% Hike</h2>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                A 10% salary hike means your new salary is equal to current salary plus 10%.
                            </p>
                            <p className="text-xs font-mono font-bold text-emerald-700">Formula: Current Salary x 1.10</p>
                            <p className="text-xs text-slate-600">For ₹6,00,000: 10% of ₹6L = ₹60,000. New salary = <strong>₹6,60,000</strong>.</p>
                        </section>

                        <section id="hike-20-percent" aria-labelledby="hike-20-title" className="border border-slate-200 rounded-2xl p-5 space-y-2 bg-slate-50/40">
                            <h2 id="hike-20-title" className="text-lg font-bold text-slate-900">How to Calculate a 20% Hike</h2>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                A 20% hike means your salary increases by one-fifth of your current salary.
                            </p>
                            <p className="text-xs font-mono font-bold text-emerald-700">Formula: Current Salary x 1.20</p>
                            <p className="text-xs text-slate-600">For ₹6,00,000: 20% increase = ₹1,20,000. New salary = <strong>₹7,20,000</strong>.</p>
                        </section>

                        <section id="ctc-hike" aria-labelledby="ctc-hike-title" className="border border-slate-200 rounded-2xl p-5 space-y-2 bg-slate-50/40">
                            <h2 id="ctc-hike-title" className="text-lg font-bold text-slate-900">How to Calculate 30% Hike on CTC</h2>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                To calculate a 30% hike on your CTC package:
                            </p>
                            <p className="text-xs font-mono font-bold text-emerald-700">Formula: Current CTC x 1.30</p>
                            <p className="text-xs text-slate-600">For ₹8,00,000 CTC: 30% hike = ₹2,40,000. New CTC = <strong>₹10,40,000</strong> (₹10.4 lakh).</p>
                        </section>
                    </div>

                    {/* CTC Hike Calculator */}
                    <section id="ctc-hike-calculator" aria-labelledby="ctc-calculator-title" className="space-y-4">
                        <h2 id="ctc-calculator-title" className="text-2xl md:text-3xl font-bold text-slate-900">CTC Hike Calculator</h2>
                        <p className="leading-relaxed">
                            A CTC hike calculator helps you compare your previous and revised Cost to Company (CTC) packages. For example:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium">
                            Old CTC = ₹6,00,000 &bull; New CTC = ₹7,50,000 &bull; Increase = ₹1,50,000 &bull; <strong>Hike = 25%</strong>
                        </div>
                        <p className="text-sm text-slate-600">
                            Comparing complete compensation packages? Explore our <Link href="/tools" className="font-bold text-emerald-700 underline">HR tools hub</Link> or review automated <Link href="/payroll-software" className="font-bold text-emerald-700 underline">payroll software</Link>.
                        </p>
                    </section>

                    {/* CTC vs Gross vs Take-Home */}
                    <section id="ctc-vs-take-home" aria-labelledby="ctc-title" className="space-y-4">
                        <h2 id="ctc-title" className="text-2xl md:text-3xl font-bold text-slate-900">CTC vs Gross Salary vs Take-Home Salary</h2>
                        <div className="grid md:grid-cols-3 gap-6 pt-2">
                            <div className="border border-slate-200 rounded-xl p-5 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">CTC (Cost to Company)</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Overall annual cost associated with employing you. Includes basic pay, allowances, employer PF contributions, gratuity, and benefits.
                                </p>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-5 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Gross Salary</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Salary amount before employee-side statutory deductions like Employee PF, Professional Tax (PT), and TDS income tax.
                                </p>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-5 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Take-Home Salary</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Actual net cash amount credited to your bank account every month after all applicable statutory and tax deductions.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 pt-2">
                            Want to estimate statutory exit & gratuity payouts? Use our <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline">Gratuity Calculator</Link> or <Link href="/full-and-final-settlement" className="font-bold text-emerald-700 underline">Full & Final Settlement Tool</Link>.
                        </p>
                    </section>

                    {/* Scenarios: Appraisal & Job Switch */}
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <section id="appraisal" aria-labelledby="appraisal-title" className="space-y-3">
                            <h2 id="appraisal-title" className="text-xl font-bold text-slate-900">Salary Hike After an Annual Appraisal</h2>
                            <p className="text-sm leading-relaxed text-slate-600">
                                An annual appraisal may result in a salary increase based on performance, responsibilities, company performance, and market conditions. Use the calculator to compare pre- and post-appraisal pay.
                            </p>
                            <p className="text-xs font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
                                Example: Previous CTC = ₹9,00,000, Revised CTC = ₹10,35,000. Increase = ₹1,35,000 (15% Hike).
                            </p>
                        </section>

                        <section id="job-switch" aria-labelledby="job-switch-title" className="space-y-3">
                            <h2 id="job-switch-title" className="text-xl font-bold text-slate-900">How to Calculate Salary Hike After a Job Switch</h2>
                            <p className="text-sm leading-relaxed text-slate-600">
                                When switching employers, calculate the percentage increase between your current CTC and the new offer package.
                            </p>
                            <p className="text-xs font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
                                Example: Current CTC = ₹8,00,000, New Offer = ₹10,00,000. Increase = ₹2,00,000 (25% Hike).
                            </p>
                        </section>
                    </div>

                    {/* Is 20% Hike Good */}
                    <section id="is-20-hike-good" aria-labelledby="is-20-hike-title" className="space-y-3">
                        <h2 id="is-20-hike-title" className="text-2xl md:text-3xl font-bold text-slate-900">Is a 20% Salary Hike Good?</h2>
                        <p className="leading-relaxed">
                            There is no single salary-hike percentage that is universally considered good. Whether a 20% hike is attractive depends on your current compensation level, role, industry standards, appraisal vs. job switch context, and fixed vs. variable components. A percentage should always be evaluated alongside the actual monetary salary amount.
                        </p>
                    </section>

                    {/* Monthly Salary Hike Table */}
                    <section id="monthly-hike-examples" aria-labelledby="monthly-table-title" className="space-y-4">
                        <h2 id="monthly-table-title" className="text-2xl md:text-3xl font-bold text-slate-900">Monthly Salary Hike Examples</h2>
                        <p className="text-sm text-slate-600">
                            Quick reference table for monthly salary figures across 10%, 20%, and 30% hikes:
                        </p>
                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Current Monthly Salary</th>
                                        <th className="p-3.5 border-b border-slate-800">10% Hike</th>
                                        <th className="p-3.5 border-b border-slate-800">20% Hike</th>
                                        <th className="p-3.5 border-b border-slate-800">30% Hike</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    {monthlyHikeData.map((row, idx) => (
                                        <tr key={row.current} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                                            <td className="p-3.5 font-bold text-slate-900">{row.current}</td>
                                            <td className="p-3.5 text-slate-700">{row.h10}</td>
                                            <td className="p-3.5 text-slate-700">{row.h20}</td>
                                            <td className="p-3.5 font-bold text-emerald-600">{row.h30}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Increase Amount vs Percentage */}
                    <section id="increase-vs-percentage" aria-labelledby="increase-vs-pct-title" className="space-y-3">
                        <h2 id="increase-vs-pct-title" className="text-2xl md:text-3xl font-bold text-slate-900">What Is the Difference Between Increase Amount and Hike Percentage?</h2>
                        <p className="leading-relaxed">
                            The salary increase amount tells you how much additional money has been added to your compensation (e.g., ₹1,50,000 additional per year). The salary hike percentage tells you how large that increase is relative to your starting salary (e.g., a 15% hike).
                        </p>
                    </section>

                    {/* Take Home Note */}
                    <section id="take-home-note" aria-labelledby="take-home-note-title" className="space-y-3 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                        <h2 id="take-home-note-title" className="text-xl font-bold text-amber-900">Important: Salary Hike Does Not Always Equal Take-Home Increase</h2>
                        <p className="text-sm leading-relaxed text-amber-800">
                            The percentage calculated by this tool represents the increase between the salary or CTC values entered. Your actual take-home pay may differ because of employee contributions (PF, tax slabs), employer contributions included in CTC, bonuses, and variable pay. Need a broader compensation estimate? Explore our <Link href="/tools" className="font-bold underline">HR tools</Link>.
                        </p>
                    </section>

                    {/* Meaning */}
                    <section id="result-meaning" aria-labelledby="result-meaning-title" className="space-y-4">
                        <h2 id="result-meaning-title" className="text-2xl md:text-3xl font-bold text-slate-900">What Does Your Salary Hike Result Mean?</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <h3 className="font-bold text-slate-900">Hike Percentage</h3>
                                <p className="text-xs text-slate-600 mt-1">The percentage increase from your old salary to your new salary.</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <h3 className="font-bold text-slate-900">Annual Increase</h3>
                                <p className="text-xs text-slate-600 mt-1">The additional annual compensation represented by the hike.</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <h3 className="font-bold text-slate-900">Monthly Increase</h3>
                                <p className="text-xs text-slate-600 mt-1">The approximate monthly gain based on the annual change.</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <h3 className="font-bold text-slate-900">New Salary</h3>
                                <p className="text-xs text-slate-600 mt-1">Your revised total salary after applying the hike percentage.</p>
                            </div>
                        </div>
                    </section>

                    {/* Visible FAQ Accordion */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions About Salary Hike Calculators</h2>
                            <p className="text-sm text-slate-600">Answers to common questions regarding salary increments, CTC calculations, and percentage hikes.</p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Internal Links Grid */}
                    <section id="related-tools" aria-labelledby="related-tools-title" className="space-y-6 pt-8 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="related-tools-title" className="text-2xl font-bold text-slate-900">Related HR Tools & Calculators</h2>
                            <p className="text-sm text-slate-600">Explore live HR Niti tools and resources to manage compensation, payouts, and compliance:</p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Estimate gratuity payout based on last drawn salary & service" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out amount" },
                                { title: "Full & Final Settlement", href: "/full-and-final-settlement", desc: "Automated exit payouts & statutory calculations" },
                                { title: "Payroll & Salary Software", href: "/payroll-software", desc: "1-Click automated salary calculation & net banking" },
                                { title: "HR Policy Templates", href: "/templates", desc: "Ready-to-use offer letters & salary policies" },
                                { title: "HR Glossary", href: "/resources/hr-glossary", desc: "Key CTC, salary, and statutory terms defined" },
                                { title: "All Free HR Tools", href: "/tools", desc: "Explore all online calculators & tools" },
                            ].map((item) => (
                                <Link key={item.title} href={item.href} className="group border border-slate-200 rounded-2xl p-4 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all">
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
                        <h2 id="methodology-title" className="text-xl font-bold text-slate-900">Salary Hike Calculator Methodology</h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            This calculator uses standard percentage-increase calculations. The calculator is intended for salary and CTC comparison. Actual payroll and take-home salary may vary depending on salary structure, deductions, taxes, variable compensation and employer-specific components.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Reviewed by:</span> HR Niti Team
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
