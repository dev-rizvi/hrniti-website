import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import InHandSalaryCalculator from "@/components/tools/InHandSalaryCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/in-hand-salary-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/in-hand-salary-calculator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "In-Hand Salary Calculator India – CTC to Take-Home Salary | HR Niti",
    },
    description: "Calculate your estimated in-hand salary from CTC in India. Compare monthly take-home pay after PF, Professional Tax and income tax under the applicable tax regime.",
    keywords: "in hand salary calculator, in hand salary calculator India, take home salary calculator, CTC to in hand salary calculator, salary calculator India, monthly in hand salary calculator, CTC calculator, salary breakup calculator, gross salary calculator, take home salary from CTC, new tax regime salary calculator, old tax regime salary calculator",
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
        title: "In-Hand Salary Calculator India – CTC to Take-Home Salary | HR Niti",
        description: "Estimate your monthly take-home salary from annual CTC after applicable PF, Professional Tax and income tax.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "In-Hand Salary Calculator India – CTC to Take-Home Salary" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "In-Hand Salary Calculator India – CTC to Take-Home Salary | HR Niti",
        description: "Estimate your monthly take-home salary from annual CTC in India.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is in-hand salary?",
        a: "In-hand salary, also called take-home or net salary, is the amount actually credited to an employee's bank account after applicable deductions.",
    },
    {
        q: "How is in-hand salary calculated from CTC?",
        a: "Estimate gross salary after accounting for employer-side CTC components, then subtract applicable employee PF, Professional Tax, income tax/TDS and other deductions.",
    },
    {
        q: "What is the difference between CTC and in-hand salary?",
        a: "CTC is the overall annual employer cost, while in-hand salary is the net amount credited to the employee after applicable deductions.",
    },
    {
        q: "Why is in-hand salary lower than CTC?",
        a: "CTC can include employer PF, gratuity, insurance, variable pay and other benefits that are not paid as monthly cash salary.",
    },
    {
        q: "How much in-hand salary will I get for INR 10 lakh CTC?",
        a: "There is no single universal figure. It depends on salary structure, PF, Professional Tax, tax regime, taxable income and other deductions.",
    },
    {
        q: "How much in-hand salary will I get for INR 12 lakh CTC?",
        a: "The result depends on your salary structure and taxable income. CTC is not the same as taxable income, so the correct result must be calculated from the actual package and tax assumptions.",
    },
    {
        q: "What is the standard deduction under the new tax regime?",
        a: "For AY 2026-27, the standard deduction applicable to salaried taxpayers under the new regime is INR 75,000.",
    },
    {
        q: "Is INR 12 lakh salary tax-free in India?",
        a: "For AY 2026-27, eligible resident individuals can receive the Section 87A rebate where total income is within the applicable INR 12 lakh threshold and the conditions are met. This does not mean every INR 12 lakh CTC package is automatically tax-free.",
    },
    {
        q: "How much PF is deducted from salary?",
        a: "PF depends on the applicable PF wage and contribution rules. A single deduction amount does not apply to every employee.",
    },
    {
        q: "What is Professional Tax in India?",
        a: "Professional Tax is a state-level tax that applies under relevant state rules. Rates and thresholds can vary by state.",
    },
    {
        q: "Does Professional Tax apply to every employee in India?",
        a: "No. Applicability and rates depend on the relevant state or jurisdiction and employee circumstances.",
    },
    {
        q: "Is the new tax regime better than the old tax regime?",
        a: "Not necessarily. The better regime depends on taxable income, eligible deductions and exemptions, and the taxpayer's circumstances.",
    },
    {
        q: "Does employer PF reduce in-hand salary?",
        a: "Employer PF is generally an employer-side CTC component. Employee PF, however, is deducted from salary and reduces monthly take-home pay.",
    },
    {
        q: "Does gratuity reduce in-hand salary?",
        a: "A gratuity provision included in CTC can reduce the amount treated as current gross salary, but gratuity is not normally an employee-side monthly bank deduction.",
    },
    {
        q: "Why do two employees with the same CTC have different in-hand salaries?",
        a: "Their salary structures, PF treatment, taxable income, Professional Tax, variable pay, insurance and other deductions can differ.",
    },
    {
        q: "Can I calculate in-hand salary using monthly CTC?",
        a: "Yes, provided the calculation uses a consistent basis for salary, deductions and the relevant period.",
    },
    {
        q: "Can I use this calculator for a job offer?",
        a: "Yes. Enter the proposed CTC and salary-structure details to estimate take-home salary before comparing offers.",
    },
    {
        q: "Can I use this calculator for an appraisal?",
        a: "Yes. Use the Salary Hike Calculator to calculate the percentage increase, then use this calculator to estimate the resulting take-home amount.",
    },
    {
        q: "Is this an exact payroll calculator?",
        a: "No. It provides an estimate. Final salary depends on employer payroll structure and the deductions applicable to the employee.",
    },
    {
        q: "Does variable pay affect in-hand salary?",
        a: "Yes. Variable pay can affect taxable income and the timing and amount of monthly cash payments.",
    },
    {
        q: "Does HRA affect in-hand salary?",
        a: "HRA can form part of salary and can affect tax calculations depending on the applicable regime and conditions.",
    },
    {
        q: "How can I calculate monthly salary from annual CTC?",
        a: "A simple monthly CTC equivalent is annual CTC divided by 12, but this is not the same as monthly in-hand salary.",
    },
    {
        q: "What is gross salary?",
        a: "Gross salary is the salary payable before applicable employee-side deductions.",
    },
    {
        q: "What is net salary?",
        a: "Net salary is commonly used to mean the amount left after applicable deductions and is generally the same concept as take-home or in-hand salary.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti In-Hand Salary Calculator India",
    url: PAGE_URL,
    description: "Free online calculator to estimate monthly in-hand salary from annual CTC in India after applicable employee deductions.",
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
        { "@type": "ListItem", position: 3, name: "In-Hand Salary Calculator India", item: PAGE_URL },
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

const inHandTableData = [
    { ctc: "₹5,00,000", gross: "₹4,78,400", pf: "₹1,800", pt: "₹200", taxNew: "₹0", inHandNew: "₹37,867/mo" },
    { ctc: "₹8,00,000", gross: "₹7,65,440", pf: "₹1,800", pt: "₹200", taxNew: "₹0", inHandNew: "₹61,787/mo" },
    { ctc: "₹10,00,000", gross: "₹9,56,800", pf: "₹1,800", pt: "₹200", taxNew: "₹2,600", inHandNew: "₹75,133/mo" },
    { ctc: "₹12,00,000", gross: "₹11,48,160", pf: "₹1,800", pt: "₹200", taxNew: "₹5,200", inHandNew: "₹88,480/mo" },
    { ctc: "₹15,00,000", gross: "₹14,35,200", pf: "₹1,800", pt: "₹200", taxNew: "₹10,400", inHandNew: "₹1,07,200/mo" },
    { ctc: "₹20,00,000", gross: "₹19,13,600", pf: "₹1,800", pt: "₹200", taxNew: "₹23,400", inHandNew: "₹1,34,067/mo" },
    { ctc: "₹25,00,000", gross: "₹23,92,000", pf: "₹1,800", pt: "₹200", taxNew: "₹36,400", inHandNew: "₹1,60,933/mo" },
];

export default function InHandSalaryCalculatorPage() {
    return (
        <main id="main-content" className="in-hand-salary-calculator-page min-h-screen bg-white">
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
                            <li aria-current="page" className="text-emerald-300 font-medium">In-Hand Salary Calculator India</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        Free India Salary &amp; Payroll Tool
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        In-Hand Salary Calculator India
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Estimate your monthly in-hand salary from annual CTC after applicable employee deductions and salary-structure assumptions.
                    </p>
                </div>
            </header>

            {/* Calculator Card Section */}
            <section id="calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">
                                Calculate Your Monthly Take-Home Salary
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Enter your annual Cost to Company (CTC), select the applicable income-tax regime, and customize salary and deduction assumptions based on your offer letter or payroll structure.
                            </p>
                        </div>

                        <InHandSalaryCalculator />
                    </div>
                </div>
            </section>

            {/* Long-form Educational Content */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16 text-slate-700">

                    {/* Freshness Audit */}
                    <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-emerald-700 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0">
                                Last Updated: August 2026
                            </span>
                            <span className="font-semibold text-slate-700">
                                Reviewed by HR Niti Payroll Team to reflect applicable Indian tax (AY 2026-27 / FY 2025-26), payroll and salary-structure rules.
                            </span>
                        </div>
                    </div>

                    {/* Section 5: What Is In-Hand Salary? */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">
                            What Is In-Hand Salary?
                        </h2>
                        <p className="leading-relaxed">
                            In-hand salary, also called take-home salary or net salary, is the amount an employee actually receives in their bank account after applicable employee-side deductions are deducted from gross salary.
                        </p>
                        <div className="bg-white border border-emerald-200 rounded-xl p-4 font-mono text-sm md:text-base font-bold text-emerald-900 overflow-x-auto">
                            In-Hand Salary = Gross Salary − Employee Deductions
                        </div>
                        <p className="leading-relaxed text-sm text-slate-600 pt-1">
                            Employee deductions can include Provident Fund, Professional Tax, income tax/TDS, insurance and other payroll deductions where applicable. CTC can include employer contributions and benefits that are not paid as monthly cash. That is why in-hand salary is usually lower than headline CTC.
                        </p>
                    </section>

                    {/* Section 6: How Is In-Hand Salary Calculated From CTC? */}
                    <section id="ctc-to-in-hand" aria-labelledby="ctc-title" className="space-y-4">
                        <h2 id="ctc-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is In-Hand Salary Calculated From CTC?
                        </h2>
                        <p className="leading-relaxed">
                            To estimate take-home salary from CTC, first identify the employer-side contributions and benefits included in the CTC. The remaining amount is used to estimate gross salary. Applicable employee deductions are then subtracted to estimate monthly in-hand salary.
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 font-mono text-sm font-bold text-slate-900">
                            <div>Estimated Gross Salary = CTC − Employer-side CTC Components</div>
                            <div>Estimated Monthly In-Hand = Monthly Gross Salary − Employee Deductions</div>
                        </div>

                        <div className="space-y-4 pt-3">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Why Can&apos;t You Simply Divide CTC by 12?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Dividing annual CTC by 12 gives a monthly CTC equivalent, not a take-home salary. CTC may include employer PF, gratuity provisions, insurance, variable compensation and other benefits.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Why Can Two Employees With the Same CTC Have Different In-Hand Salary?</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Two employees with the same CTC can have different net salary because their basic salary, PF treatment, tax position, Professional Tax, variable pay, insurance and other deductions may differ.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: CTC vs Gross Salary vs In-Hand Salary */}
                    <section id="salary-structure" aria-labelledby="structure-title" className="space-y-4">
                        <h2 id="structure-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            CTC vs Gross Salary vs In-Hand Salary
                        </h2>
                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Term</th>
                                        <th className="p-3.5 border-b border-slate-800">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">CTC (Cost to Company)</td>
                                        <td className="p-3.5 text-slate-700">Overall annual employer cost, including applicable employer-side components and benefits</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Gross salary</td>
                                        <td className="p-3.5 text-slate-700">Salary payable before employee-side deductions</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">In-hand salary</td>
                                        <td className="p-3.5 text-slate-700">Net salary credited after applicable deductions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 8: In-Hand Salary Examples by CTC */}
                    <section id="examples" aria-labelledby="examples-title" className="space-y-6">
                        <h2 id="examples-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            In-Hand Salary Examples by CTC
                        </h2>
                        <p className="leading-relaxed">
                            Use these as illustrative examples only. Exact take-home depends on salary structure, PF, Professional Tax, tax regime and other deductions.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { ctc: "5 Lakh CTC", inhand: "₹37,867 / mo", note: "Zero tax under New Regime with ₹75k std deduction" },
                                { ctc: "8 Lakh CTC", inhand: "₹61,787 / mo", note: "Zero tax under New Regime rebate for AY 2026-27" },
                                { ctc: "10 Lakh CTC", inhand: "₹75,133 / mo", note: "TDS ~₹2,600/mo under New Regime" },
                                { ctc: "12 Lakh CTC", inhand: "₹88,480 / mo", note: "TDS ~₹5,200/mo under New Regime" },
                                { ctc: "15 Lakh CTC", inhand: "₹1,07,200 / mo", note: "TDS ~₹10,400/mo under New Regime" },
                                { ctc: "20 Lakh CTC", inhand: "₹1,34,067 / mo", note: "TDS ~₹23,400/mo under New Regime" },
                            ].map((ex) => (
                                <div key={ex.ctc} className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-emerald-300 transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                                        ₹{ex.ctc}
                                    </span>
                                    <div className="mt-3 text-sm font-bold text-slate-900">
                                        Estimated In-Hand: <span className="text-emerald-600 text-base">{ex.inhand}</span>
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">{ex.note}</div>
                                </div>
                            ))}
                        </div>

                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm mt-4">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Annual CTC</th>
                                        <th className="p-3.5 border-b border-slate-800">Annual Gross</th>
                                        <th className="p-3.5 border-b border-slate-800">Employee PF</th>
                                        <th className="p-3.5 border-b border-slate-800">Prof. Tax</th>
                                        <th className="p-3.5 border-b border-slate-800">Est. TDS/mo</th>
                                        <th className="p-3.5 border-b border-slate-800">Net Monthly In-Hand</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    {inHandTableData.map((row, idx) => (
                                        <tr key={row.ctc} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                                            <td className="p-3.5 font-bold text-slate-900">{row.ctc}</td>
                                            <td className="p-3.5 text-slate-700">{row.gross}</td>
                                            <td className="p-3.5 text-slate-700">{row.pf}</td>
                                            <td className="p-3.5 text-slate-700">{row.pt}</td>
                                            <td className="p-3.5 text-slate-700">{row.taxNew}</td>
                                            <td className="p-3.5 font-bold text-emerald-600">{row.inHandNew}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 9: New Tax Regime vs Old Tax Regime */}
                    <section id="tax-regime" aria-labelledby="tax-title" className="space-y-4">
                        <h2 id="tax-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            New Tax Regime vs Old Tax Regime
                        </h2>
                        <p className="leading-relaxed">
                            Income-tax treatment can change depending on the tax regime selected and the deductions or exemptions available to you.
                        </p>
                        <p className="leading-relaxed">
                            For AY 2026-27, the new-regime slabs begin at ₹4 lakh of taxable income, and the Income Tax Department states that eligible resident individuals can receive a Section 87A rebate where total income is within the applicable ₹12 lakh threshold. Salaried taxpayers can also receive a ₹75,000 standard deduction under the new regime. The exact tax result depends on the taxpayer&apos;s complete income and applicable conditions.
                        </p>

                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm pt-2">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Factor</th>
                                        <th className="p-3.5 border-b border-slate-800">New Regime</th>
                                        <th className="p-3.5 border-b border-slate-800">Old Regime</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Tax structure</td>
                                        <td className="p-3.5 text-slate-700">Current new-regime slab system</td>
                                        <td className="p-3.5 text-slate-700">Different slab system</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Standard deduction</td>
                                        <td className="p-3.5 text-slate-700">Applicable current amount (₹75,000)</td>
                                        <td className="p-3.5 text-slate-700">Applicable old-regime amount (₹50,000)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-bold text-slate-900">Deductions</td>
                                        <td className="p-3.5 text-slate-700">More limited</td>
                                        <td className="p-3.5 text-slate-700">Broader eligible deductions/exemptions (80C, 80D, HRA)</td>
                                    </tr>
                                    <tr className="bg-slate-50/60">
                                        <td className="p-3.5 font-bold text-slate-900">Better for whom?</td>
                                        <td className="p-3.5 text-slate-700">Depends on taxable income</td>
                                        <td className="p-3.5 text-slate-700">Depends on taxable income and deductions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 10: How Does PF Affect In-Hand Salary? */}
                    <section id="pf" aria-labelledby="pf-title" className="space-y-4">
                        <h2 id="pf-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Does PF Affect In-Hand Salary?
                        </h2>
                        <p className="leading-relaxed">
                            Employee PF is an employee-side deduction and therefore normally reduces monthly in-hand salary. Employer PF can form part of CTC even though it is not an employee-side cash deduction.
                        </p>
                        <p className="leading-relaxed">
                            The EPFO states that the statutory wage ceiling for mandatory contribution calculations has been ₹15,000 per month since September 2014, while contribution treatment on higher wages can depend on the applicable provisions and arrangements.
                        </p>
                        <p className="text-sm text-slate-600">
                            Need a dedicated EPF balance and maturity calculation? Use our <Link href="/tools/pf-calculator" className="font-bold text-emerald-700 underline">EPF Calculator</Link>.
                        </p>
                    </section>

                    {/* Section 11: What Is Professional Tax in India? */}
                    <section id="pt" aria-labelledby="pt-title" className="space-y-4">
                        <h2 id="pt-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            What Is Professional Tax in India?
                        </h2>
                        <p className="leading-relaxed">
                            Professional Tax is a state-level tax that applies under relevant state rules. Its applicability, thresholds and rates can vary by state and salary level.
                        </p>
                    </section>

                    {/* Section 12: How Does Gratuity Affect CTC and In-Hand Salary? */}
                    <section id="gratuity" aria-labelledby="gratuity-title" className="space-y-4">
                        <h2 id="gratuity-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Does Gratuity Affect CTC and In-Hand Salary?
                        </h2>
                        <p className="leading-relaxed">
                            An employer may include an estimated gratuity provision in CTC. This does not mean that the same amount is paid to the employee as monthly cash. When converting CTC to gross salary, an employer-side gratuity component can therefore be separated from CTC where it is included in the package.
                        </p>
                        <p className="text-sm text-slate-600">
                            Estimate your statutory exit payout with our <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline">Gratuity Calculator</Link>.
                        </p>
                    </section>

                    {/* Section 13: How Does a Salary Hike Affect In-Hand Pay? */}
                    <section id="salary-hike" aria-labelledby="hike-title" className="space-y-4">
                        <h2 id="hike-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Does a Salary Hike Affect In-Hand Pay?
                        </h2>
                        <p className="leading-relaxed">
                            A salary hike can increase gross salary and take-home pay, but the increase in bank credit does not have to equal the headline CTC percentage increase. A higher CTC can also change taxable income, PF and other deductions.
                        </p>
                        <p className="text-sm text-slate-600">
                            Calculate increment percentages with our <Link href="/tools/salary-hike-calculator" className="font-bold text-emerald-700 underline">Salary Hike Calculator</Link> to estimate resulting take-home salary.
                        </p>
                    </section>

                    {/* Section 14: Why Your Actual Salary Credit May Differ & Salary Slips */}
                    <section id="differs" aria-labelledby="differs-title" className="space-y-4">
                        <h2 id="differs-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Why Your Actual Salary Credit May Differ
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-3 pt-1 text-sm">
                            {[
                                "Your employer may use a different salary structure",
                                "Variable pay may not be paid evenly each month",
                                "PF may use a different eligible wage basis",
                                "Professional Tax varies by state rules",
                                "Your complete taxable-income position may differ from assumptions",
                                "Insurance, loan recovery or other payroll deductions may apply",
                                "Joining, resignation or unpaid-leave adjustments can change pay",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs font-medium text-slate-800">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-3 mt-4">
                            <h3 className="font-bold text-lg text-slate-900">In-Hand Salary and Salary Slips</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Your salary slip is the best source for confirming actual payroll deductions. This calculator is intended to help estimate take-home salary from an offer letter or salary structure before payroll is processed.
                            </p>
                            <p className="text-xs font-bold text-slate-800 pt-1">What to compare on a salary slip:</p>
                            <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
                                <li>Gross Earnings</li>
                                <li>Employee PF</li>
                                <li>Professional Tax</li>
                                <li>TDS (Income Tax)</li>
                                <li>Other Deductions</li>
                                <li>Net Pay (In-Hand Credit)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 15: AEO / Answer-First Blocks */}
                    <section id="aeo-blocks" aria-labelledby="aeo-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="aeo-title" className="text-2xl font-bold text-slate-900">
                                In-Hand Salary Quick Answer Summary
                            </h2>
                            <p className="text-sm text-slate-600">
                                Direct answers to common questions about Indian take-home salary calculations:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">What Is In-Hand Salary?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    In-hand salary is the net amount credited to an employee&apos;s bank account after applicable deductions are made from gross salary.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How Do I Calculate In-Hand Salary From CTC?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Estimate gross salary after accounting for employer-side CTC components, then subtract employee PF, Professional Tax, income tax/TDS and other applicable deductions.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Why Is In-Hand Salary Lower Than CTC?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    CTC may include employer PF, gratuity, insurance, variable pay and other benefits that are not paid as monthly cash salary.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Can I Calculate Take-Home Salary From CTC?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Yes. Enter your CTC and the relevant salary-structure and deduction details into the calculator to estimate monthly take-home pay.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Does a Salary Hike Increase In-Hand Salary?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    It can, but the increase in bank credit may be different from the CTC percentage increase because taxes and other deductions can also change.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 16: Complete FAQ Section */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About In-Hand Salary
                            </h2>
                            <p className="text-sm text-slate-600">
                                Complete FAQ guide covering CTC-to-in-hand conversion, tax regimes, PF, and Professional Tax rules in India.
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
                                { title: "CTC Calculator", href: "/tools/ctc-calculator", desc: "Calculate annual Cost to Company package breakup" },
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new CTC package" },
                                { title: "EPF Calculator", href: "/tools/pf-calculator", desc: "Calculate monthly Provident Fund contributions & maturity" },
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Code on Social Security 2020 gratuity estimation" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out payout" },
                                { title: "Full & Final Settlement Calculator", href: "/tools/final-settlement-calculator", desc: "Calculate exit payout, unpaid salary & gratuity" },
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
                            In-Hand Salary Calculator Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s In-Hand Salary Calculator is an informational estimation tool. It does not provide legal, tax, payroll or financial advice. Actual payroll can differ based on employer policy, employee circumstances and current statutory rules.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Tax Year:</span> AY 2026-27 / FY 2025-26
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
