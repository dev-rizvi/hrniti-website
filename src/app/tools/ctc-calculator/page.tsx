import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import CTCCalculator from "@/components/tools/CTCCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/ctc-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/ctc-calculator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "CTC Calculator India - Calculate Salary Breakup & In-Hand Pay | HR Niti",
    },
    description: "Calculate CTC breakup in India with HR Niti's free CTC Calculator. Estimate Basic, HRA, PF, gratuity, gross salary and monthly take-home pay.",
    keywords: "ctc calculator, ctc calculator India, CTC breakup calculator, salary breakup calculator, salary structure calculator, CTC to in-hand salary calculator, CTC calculation, cost to company calculator, CTC salary calculator, how is CTC calculated, how is Basic Salary calculated from CTC, is CTC same as take-home salary, does CTC include PF, does CTC include gratuity",
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
        title: "CTC Calculator India - Calculate Salary Breakup & In-Hand Pay | HR Niti",
        description: "Calculate your annual CTC breakup and understand Basic, HRA, employer PF, gratuity and estimated salary before employee deductions.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "CTC Calculator India - Calculate Salary Breakup & In-Hand Pay" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "CTC Calculator India - Calculate Salary Breakup & In-Hand Pay | HR Niti",
        description: "Estimate CTC breakup, salary structure and monthly salary from your annual package.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is CTC?",
        a: "CTC stands for Cost to Company and represents the overall annual employer cost associated with an employee.",
    },
    {
        q: "Is CTC the same as salary?",
        a: "No. CTC can contain salary, employer contributions, benefits, variable pay and other components.",
    },
    {
        q: "Is CTC the same as in-hand salary?",
        a: "No. In-hand salary is the net cash credited after applicable employee deductions.",
    },
    {
        q: "What is a CTC calculator?",
        a: "A CTC calculator breaks an annual compensation package into salary and employer-side components using selected assumptions.",
    },
    {
        q: "How is CTC calculated?",
        a: "A simplified model is CTC = Gross Salary + Employer Contributions + Employer Benefits + Variable Pay + Other Applicable Employer Costs.",
    },
    {
        q: "How is Basic Salary calculated from CTC?",
        a: "Basic Salary depends on the employer's compensation structure. There is no universal percentage that applies to every employer.",
    },
    {
        q: "What is HRA?",
        a: "HRA is House Rent Allowance, a salary component provided by many employers. Its structure depends on employer policy.",
    },
    {
        q: "Is HRA always 50% of Basic Salary?",
        a: "No. The HRA percentage depends on the employer's salary structure and applicable rules.",
    },
    {
        q: "Is Employer PF part of CTC?",
        a: "Employer PF can be included in CTC. PF contribution treatment depends on the applicable wage basis and rules.",
    },
    {
        q: "Is INR 1,800 always PF?",
        a: "No. INR 1,800 represents 12% of INR 15,000 and is associated with the statutory wage ceiling in the standard PF framework. Actual PF treatment can differ.",
    },
    {
        q: "Is gratuity included in CTC?",
        a: "It can be. Some employers include a gratuity provision in CTC.",
    },
    {
        q: "Is bonus included in CTC?",
        a: "It can be, especially where bonus or variable pay is part of the stated compensation package.",
    },
    {
        q: "Does variable pay form part of CTC?",
        a: "Yes, variable or performance-linked compensation can form part of CTC.",
    },
    {
        q: "What is the difference between CTC and gross salary?",
        a: "CTC can include employer-side contributions and benefits, while gross salary generally represents salary payable before employee deductions.",
    },
    {
        q: "What is the difference between CTC and net salary?",
        a: "CTC is the employer's total compensation cost, while net salary is the amount received after applicable deductions.",
    },
    {
        q: "How do I calculate monthly salary from CTC?",
        a: "Divide annual CTC by 12 to obtain a monthly CTC equivalent. This is not the same as monthly take-home salary.",
    },
    {
        q: "Why is my in-hand salary lower than CTC?",
        a: "CTC can include employer PF, gratuity, insurance, variable pay and other benefits, and employee deductions can further reduce take-home pay.",
    },
    {
        q: "Can two employees with the same CTC have different in-hand salary?",
        a: "Yes. Their salary structures, PF treatment, tax position, benefits and deductions can differ.",
    },
    {
        q: "How should I compare two CTC offers?",
        a: "Compare total CTC, fixed salary, variable pay, employer contributions, benefits and estimated take-home salary.",
    },
    {
        q: "Is higher CTC always better?",
        a: "Not necessarily. Fixed salary, variable pay, benefits and estimated take-home may be more useful for comparison.",
    },
    {
        q: "Can I use a CTC calculator for a job offer?",
        a: "Yes. It can help you understand how the headline offer is structured.",
    },
    {
        q: "Can I use a CTC calculator for appraisal?",
        a: "Yes. Compare old and revised packages, then use the Salary Hike Calculator for the percentage increase.",
    },
    {
        q: "Does CTC include employer insurance?",
        a: "It can, depending on the compensation structure.",
    },
    {
        q: "Does Basic Salary have to be 50% of CTC?",
        a: "No. The statutory wage framework should not be simplified into a universal requirement that Basic always equals 50% of CTC.",
    },
    {
        q: "What is the 50% wage rule?",
        a: "The wage definition contains rules concerning excluded components and an adjustment mechanism for specified amounts. It is not simply a universal Basic Salary = 50% of CTC rule.",
    },
    {
        q: "What is fixed CTC?",
        a: "Fixed CTC refers to the more predictable annual compensation components that are not dependent on variable performance payouts.",
    },
    {
        q: "What is variable CTC?",
        a: "Variable CTC is compensation linked to performance, targets or other conditions and may not be paid at the full stated amount.",
    },
    {
        q: "Does CTC include Professional Tax?",
        a: "Professional Tax is generally an employee-side deduction where applicable, not a universal CTC component.",
    },
    {
        q: "Does CTC include income tax?",
        a: "Income tax is normally an employee tax liability deducted from salary rather than an employer-side CTC component.",
    },
    {
        q: "How do I calculate CTC to in-hand salary?",
        a: "Identify employer-side CTC components to estimate gross salary, then deduct employee PF, Professional Tax, income tax and other applicable deductions.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti CTC Calculator India",
    url: PAGE_URL,
    description: "Free online CTC calculator for estimating salary breakup, Basic, HRA, employer PF, gratuity, gross salary and package structure in India.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    isAccessibleForFree: true,
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
    },
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "HR Tools", item: `${BASE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "CTC Calculator India", item: PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};

export default function CTCCalculatorPage() {
    return (
        <main id="main-content" className="ctc-calculator-page min-h-screen bg-white">
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
                            <li aria-current="page" className="text-emerald-300 font-medium">CTC Calculator India</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        Free Salary Structure &amp; Payroll Tool
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        CTC Calculator India
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Calculate your salary package breakup and understand how CTC, gross salary and estimated in-hand salary differ.
                    </p>
                </div>
            </header>

            {/* Calculator Card Section */}
            <section id="calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">
                                Calculate Your Salary Package Breakup Instantly
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Enter your annual CTC and customize the salary-structure assumptions used by your employer.
                            </p>
                        </div>

                        <CTCCalculator />
                    </div>
                </div>
            </section>

            {/* Long-form Production Page Content */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16 text-slate-700">

                    {/* Freshness & Trust Block */}
                    <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-emerald-700 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0">
                                Last Updated: August 2026
                            </span>
                            <span className="font-semibold text-slate-700">
                                Reviewed by HR Niti Payroll Team. Important: CTC structures vary by employer. The calculator provides an estimate based on selected assumptions.
                            </span>
                        </div>
                    </div>

                    {/* Section 5: What Is CTC? */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">
                            What Is CTC?
                        </h2>
                        <p className="leading-relaxed">
                            CTC stands for <strong>Cost to Company</strong>. It represents the overall annual cost associated with employing an employee. Depending on the employer, CTC can include direct salary components as well as employer contributions and benefits:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm pt-1">
                            <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1">
                                <strong>Direct &amp; Allowance Components:</strong> Basic Salary, House Rent Allowance (HRA), Special Allowance, Other Allowances.
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1">
                                <strong>Contributions &amp; Variable Pay:</strong> Employer Provident Fund (EPF), Gratuity provision, Insurance, Variable Pay, Bonus, Other benefits.
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-800 pt-1">
                            CTC is therefore not the same as monthly take-home salary.
                        </p>
                    </section>

                    {/* Section 6: How Is CTC Calculated? */}
                    <section id="ctc-formula" aria-labelledby="formula-title" className="space-y-4">
                        <h2 id="formula-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is CTC Calculated?
                        </h2>
                        <p className="leading-relaxed">
                            There is no single salary structure that every employer uses. A simplified model is:
                        </p>
                        <div className="bg-slate-900 text-emerald-300 border border-slate-800 rounded-xl p-4 font-mono text-xs md:text-sm font-bold overflow-x-auto">
                            CTC = Gross Salary + Employer Contributions + Employer Benefits + Variable Pay + Other Applicable Employer Costs
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            The exact CTC components depend on the employer&apos;s compensation structure, the employment agreement and applicable statutory rules. A CTC calculator exposes these assumptions rather than implying that one breakup is mandatory for every employee.
                        </p>
                    </section>

                    {/* Section 7: CTC vs Gross Salary vs In-Hand Salary */}
                    <section id="ctc-vs-salary" aria-labelledby="compare-title" className="space-y-4">
                        <h2 id="compare-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            CTC vs Gross Salary vs In-Hand Salary
                        </h2>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 font-mono text-xs md:text-sm font-bold text-emerald-950 flex flex-wrap items-center gap-2">
                            <span>Simple Flow:</span>
                            <span className="bg-white px-2.5 py-1 rounded border border-emerald-300">CTC</span>
                            <span>→</span>
                            <span className="bg-white px-2.5 py-1 rounded border border-emerald-300">Salary Structure</span>
                            <span>→</span>
                            <span className="bg-white px-2.5 py-1 rounded border border-emerald-300">Gross Salary</span>
                            <span>→</span>
                            <span className="bg-white px-2.5 py-1 rounded border border-emerald-300">Employee Deductions</span>
                            <span>→</span>
                            <span className="bg-emerald-600 text-white px-2.5 py-1 rounded">In-Hand Salary</span>
                        </div>

                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm pt-2">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Term</th>
                                        <th className="p-3.5 border-b border-slate-800">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">CTC</td>
                                        <td className="p-3.5 text-slate-700">Overall employer cost including applicable employer-side components and benefits</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Gross Salary</td>
                                        <td className="p-3.5 text-slate-700">Salary payable before employee-side deductions</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">In-Hand Salary</td>
                                        <td className="p-3.5 text-slate-700">Net amount credited after applicable employee deductions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 8: How to Calculate CTC Breakup */}
                    <section id="breakup" aria-labelledby="breakup-title" className="space-y-4">
                        <h2 id="breakup-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How to Calculate CTC Breakup
                        </h2>
                        <p className="leading-relaxed">
                            Start with annual CTC, then identify the direct salary components and employer-side costs included in the package. A simplified process is:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm">
                            {[
                                "Set the annual total CTC.",
                                "Set Basic Salary according to employer structure.",
                                "Calculate HRA if included (e.g. 50% or 40% of Basic).",
                                "Calculate employer PF using the applicable basis.",
                                "Include gratuity if the employer includes it in CTC.",
                                "Allocate remaining compensation to Special Allowance, variable pay or other components.",
                                "Check that all components add up to the declared CTC.",
                            ].map((step, idx) => (
                                <div key={step} className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3.5 font-medium text-slate-800">
                                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 9: Basic, HRA, Special Allowance, PF & Gratuity */}
                    <section id="components" aria-labelledby="components-title" className="space-y-6">
                        <h2 id="components-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Basic, HRA, Special Allowance, PF &amp; Gratuity
                        </h2>

                        <div className="space-y-4 text-slate-700">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">How Is Basic Salary Calculated From CTC?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Basic Salary is one component of a salary package. There is no universal rule that requires Basic Salary to equal a specific percentage of total CTC for every employer. An employer may structure Basic as a percentage of a salary base or according to its internal compensation design.
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    The Code on Social Security, 2020 defines &quot;wages&quot; to include basic pay and specified components and contains provisions dealing with excluded components and the amount considered for statutory purposes.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">What Is HRA?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    HRA stands for House Rent Allowance. It is a salary component provided by many employers, structured as a percentage of Basic Salary (e.g. 50% for metro cities, 40% for non-metro).
                                </p>
                                <p className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg font-medium">
                                    Example: If Basic Salary is ₹5,00,000 and HRA is 50% of Basic, HRA equals ₹2,50,000/year.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">What Is Special Allowance?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Special Allowance is a flexible salary component that employers use to complete or balance a compensation package after allocating Basic, HRA and other components.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Is Employer PF Part of CTC?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Employer PF can form part of CTC. It is an employer-side contribution rather than an employee-side cash payment. EPFO states that an employee contributes 12% of applicable Basic Wages, with the employer also contributing 12% (3.67% EPF + 8.33% EPS capped at ₹1,250).
                                </p>
                                <p className="text-xs text-slate-500">
                                    Calculate PF contributions in detail with our <Link href="/tools/pf-calculator" className="font-bold text-emerald-700 underline">EPF Calculator</Link>.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Is Gratuity Included in CTC?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    An employer may include a gratuity provision (approx 4.81% of Basic) as part of CTC. This does not mean the same amount is paid as monthly cash salary. The Government announced the four Labour Codes effective from 21 November 2025.
                                </p>
                                <p className="text-xs text-slate-500">
                                    Calculate gratuity eligibility with our <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline">Gratuity Calculator</Link>.
                                </p>
                            </div>
                        </div>

                        {/* What Is Included in CTC Table */}
                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm pt-2">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Category</th>
                                        <th className="p-3.5 border-b border-slate-800">Typical Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Direct Salary</td>
                                        <td className="p-3.5 text-slate-700">Basic, HRA, Special Allowance, other allowances</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Employer Contributions</td>
                                        <td className="p-3.5 text-slate-700">Employer PF and other applicable employer contributions</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Benefits</td>
                                        <td className="p-3.5 text-slate-700">Insurance, other employer-paid benefits</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Deferred / Conditional Pay</td>
                                        <td className="p-3.5 text-slate-700">Variable pay, bonus, incentives</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Other Components</td>
                                        <td className="p-3.5 text-slate-700">Company-specific CTC items</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Fixed CTC vs Variable CTC */}
                    <section id="fixed-vs-variable" aria-labelledby="fixed-variable-title" className="space-y-4">
                        <h2 id="fixed-variable-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Fixed CTC vs Variable CTC
                        </h2>
                        <p className="leading-relaxed">
                            When comparing job offers, separate total CTC from fixed annual compensation:
                        </p>

                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Component</th>
                                        <th className="p-3.5 border-b border-slate-800">What to Check</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Total CTC</td>
                                        <td className="p-3.5 text-slate-700">Headline annual employer cost</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Fixed Salary</td>
                                        <td className="p-3.5 text-slate-700">Guaranteed salary components</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Variable Pay</td>
                                        <td className="p-3.5 text-slate-700">Performance or target-linked compensation</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Employer PF</td>
                                        <td className="p-3.5 text-slate-700">Employer-side contribution</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Gratuity</td>
                                        <td className="p-3.5 text-slate-700">Provision if included in CTC</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Benefits</td>
                                        <td className="p-3.5 text-slate-700">Insurance and other benefits</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* How to Calculate Monthly Salary From CTC */}
                    <section id="monthly-from-ctc" aria-labelledby="monthly-ctc-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="monthly-ctc-title" className="text-2xl font-bold text-slate-900">
                            How to Calculate Monthly Salary From CTC
                        </h2>
                        <p className="leading-relaxed">
                            Dividing annual CTC by 12 gives a monthly CTC equivalent, not monthly take-home salary.
                        </p>
                        <div className="bg-white border border-emerald-200 rounded-xl p-4 font-mono text-xs md:text-sm font-bold text-emerald-950">
                            Example: ₹12,00,000 annual CTC divided by 12 is ₹1,00,000 monthly CTC equivalent. The employee&apos;s gross and in-hand salary can be lower because CTC may include employer PF, gratuity, insurance, variable pay and other benefits.
                        </div>
                        <p className="text-sm font-semibold text-slate-800 pt-1">
                            Estimate post-deduction net pay using HR Niti&apos;s <Link href="/tools/in-hand-salary-calculator" className="font-bold text-emerald-700 underline">In-Hand Salary Calculator</Link>.
                        </p>
                    </section>

                    {/* Section 10: CTC Examples: INR 5 Lakh to INR 25 Lakh */}
                    <section id="examples" aria-labelledby="examples-title" className="space-y-6">
                        <h2 id="examples-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            CTC Examples: INR 5 Lakh to INR 25 Lakh
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { ctc: "5 Lakh CTC", monthly: "₹41,667 / mo CTC", note: "Split into Basic, HRA, Special Allowance & Employer PF" },
                                { ctc: "8 Lakh CTC", monthly: "₹66,667 / mo CTC", note: "Contains fixed salary, employer contributions & benefits" },
                                { ctc: "10 Lakh CTC", monthly: "₹83,333 / mo CTC", note: "Shows monthly CTC, Basic, HRA, Special Allowance & PF" },
                                { ctc: "12 Lakh CTC", monthly: "₹1,00,000 / mo CTC", note: "Separate fixed salary and variable compensation" },
                                { ctc: "15 Lakh CTC", monthly: "₹1,25,000 / mo CTC", note: "Contains Basic, HRA, allowances, employer PF & gratuity" },
                                { ctc: "20 Lakh CTC", monthly: "₹1,66,667 / mo CTC", note: "Inspect fixed vs variable compensation mix carefully" },
                            ].map((ex) => (
                                <div key={ex.ctc} className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-emerald-300 transition-colors space-y-1.5">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                                        ₹{ex.ctc}
                                    </span>
                                    <div className="text-sm font-bold text-slate-900">
                                        Monthly CTC: <span className="text-emerald-700">{ex.monthly}</span>
                                    </div>
                                    <div className="text-xs text-slate-500">{ex.note}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 11: How to Compare Two CTC Offers */}
                    <section id="offers" aria-labelledby="offers-title" className="space-y-4">
                        <h2 id="offers-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How to Compare Two CTC Offers
                        </h2>
                        <p className="leading-relaxed">
                            Compare offers by component rather than headline CTC:
                        </p>

                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Component</th>
                                        <th className="p-3.5 border-b border-slate-800">Offer A</th>
                                        <th className="p-3.5 border-b border-slate-800">Offer B</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Total CTC</td>
                                        <td className="p-3.5 text-slate-700">Headline annual cost</td>
                                        <td className="p-3.5 text-slate-700">Headline annual cost</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Fixed Salary</td>
                                        <td className="p-3.5 text-slate-700">Guaranteed pay</td>
                                        <td className="p-3.5 text-slate-700">Guaranteed pay</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Variable Pay</td>
                                        <td className="p-3.5 text-slate-700">Performance-linked</td>
                                        <td className="p-3.5 text-slate-700">Performance-linked</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Basic Pay</td>
                                        <td className="p-3.5 text-slate-700">Basic salary base</td>
                                        <td className="p-3.5 text-slate-700">Basic salary base</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">HRA</td>
                                        <td className="p-3.5 text-slate-700">Housing allowance</td>
                                        <td className="p-3.5 text-slate-700">Housing allowance</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Employer PF</td>
                                        <td className="p-3.5 text-slate-700">EPF contribution</td>
                                        <td className="p-3.5 text-slate-700">EPF contribution</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Gratuity</td>
                                        <td className="p-3.5 text-slate-700">Provision in CTC</td>
                                        <td className="p-3.5 text-slate-700">Provision in CTC</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Estimated In-Hand</td>
                                        <td className="p-3.5 font-bold text-emerald-700">Monthly bank credit</td>
                                        <td className="p-3.5 font-bold text-emerald-700">Monthly bank credit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 pt-4">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-1.5">
                                <h3 className="font-bold text-slate-900 text-sm">CTC Calculator for Freshers</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Check fixed salary, variable pay, employer contributions and benefits before accepting your first offer.
                                </p>
                            </div>
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-1.5">
                                <h3 className="font-bold text-slate-900 text-sm">CTC Calculator for Experienced</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Compare current CTC with a new offer. Focus on guaranteed fixed pay vs performance bonuses.
                                </p>
                            </div>
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-1.5">
                                <h3 className="font-bold text-slate-900 text-sm">CTC Calculator for Job Offers</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Verify whether headline CTC includes bonus, variable pay, employer PF, gratuity, or insurance.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 15: AEO Answer Blocks */}
                    <section id="aeo-blocks" aria-labelledby="aeo-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="aeo-title" className="text-2xl font-bold text-slate-900">
                                CTC Quick Answer Summary
                            </h2>
                            <p className="text-sm text-slate-600">
                                Direct answers to common questions about Indian CTC calculations:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">What Is CTC?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    CTC, or Cost to Company, is the total annual employer cost associated with an employee&apos;s compensation package. It can include direct salary, employer contributions, benefits, variable pay and other employer costs.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How Is CTC Calculated?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    CTC is calculated by adding the applicable salary components, employer contributions, benefits, variable compensation and other employer costs included in the package. The exact structure varies by employer.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Is CTC the Same as Take-Home Salary?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    No. CTC can include employer PF, gratuity, insurance, variable pay and other benefits. Take-home salary is the net amount credited after applicable employee deductions.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How Is Basic Salary Calculated From CTC?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Basic Salary is determined by the employer&apos;s salary structure. There is no single universal Basic-percentage rule that applies identically to every employer.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Does CTC Include PF?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Employer PF can be part of CTC. Employee PF is an employee-side deduction and normally reduces take-home salary.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Does CTC Include Gratuity?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    It can. Some employers include a gratuity provision in CTC, but that amount is not normally paid as monthly cash salary.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 16: Complete FAQ Section */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About CTC
                            </h2>
                            <p className="text-sm text-slate-600">
                                Complete FAQ guide covering CTC salary breakdowns, HRA, PF, gratuity, and statutory rules.
                            </p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Section 17: Related HR & Payroll Calculators */}
                    <section id="related-tools" aria-labelledby="related-title" className="space-y-6 pt-8 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="related-title" className="text-2xl font-bold text-slate-900">
                                Related HR &amp; Payroll Calculators
                            </h2>
                            <p className="text-sm text-slate-600">
                                Explore HR Niti&apos;s interconnected India HR and payroll calculator hub:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "In-Hand Salary Calculator", href: "/tools/in-hand-salary-calculator", desc: "Calculate monthly net take-home salary" },
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new CTC package" },
                                { title: "PF Calculator", href: "/tools/pf-calculator", desc: "Calculate monthly Provident Fund contributions & maturity" },
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Code on Social Security 2020 gratuity estimation" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out payout" },
                                { title: "Final Settlement Calculator", href: "/tools/final-settlement-calculator", desc: "Calculate exit payout, unpaid salary & gratuity" },
                                { title: "HR Tools", href: "/tools", desc: "Explore all online calculators & tools" },
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

                    {/* Section 18: Methodology & Disclaimer */}
                    <section id="methodology" aria-labelledby="methodology-title" className="space-y-4 pt-8 border-t border-slate-200">
                        <h2 id="methodology-title" className="text-xl font-bold text-slate-900">
                            CTC Calculator Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s CTC Calculator is an informational estimation tool. Actual salary structures, contributions, taxes, benefits and deductions can vary by employer and employee circumstances.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Labour Code:</span> Code on Social Security 2020
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Reviewed by:</span> HR Niti Payroll Team
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
