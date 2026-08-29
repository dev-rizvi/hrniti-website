import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import PFCalculator from "@/components/tools/PFCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/pf-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/epf-calculator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "EPF Calculator India - Calculate PF Contribution, Interest & Maturity | HR Niti",
    },
    description: "Calculate EPF contributions and estimate your PF maturity corpus in India. See employee and employer shares, interest and projected balance with HR Niti.",
    keywords: "EPF calculator, EPF calculator India, PF calculator, Provident Fund calculator, EPF contribution calculator, PF contribution calculator, EPF maturity calculator, EPF interest calculator, EPF balance calculator, PF interest rate, how is EPF interest calculated, how much PF is deducted from salary, how is employer PF contribution split, is EPF maturity tax-free",
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
        title: "EPF Calculator India - Calculate PF Contribution, Interest & Maturity | HR Niti",
        description: "Estimate EPF contributions, employer share, interest and projected PF corpus using your salary and tenure.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "EPF Calculator India - Calculate PF Contribution, Interest & Maturity" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "EPF Calculator India - Calculate PF Contribution, Interest & Maturity | HR Niti",
        description: "Calculate monthly PF contribution and estimate your EPF maturity corpus.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is EPF (Employees' Provident Fund)?",
        a: "EPF is a retirement savings scheme administered by EPFO under India's applicable provident-fund framework.",
    },
    {
        q: "What is the difference between EPF and PF?",
        a: "PF is commonly used as shorthand for provident fund, while EPF refers specifically to the Employees' Provident Fund scheme.",
    },
    {
        q: "How much PF is deducted from monthly salary?",
        a: "For employees covered under the standard framework, the employee contribution is generally 12% of applicable PF wages, subject to the applicable rules and contribution basis.",
    },
    {
        q: "Is PF always 12% of Basic Salary?",
        a: "The standard contribution is generally 12% of applicable PF wages, but the applicable wage definition, ceiling and higher-wage contribution arrangements can affect the actual deduction.",
    },
    {
        q: "What is the PF wage ceiling?",
        a: "EPFO identifies INR 15,000 per month as the statutory wage ceiling for mandatory contribution calculations in the standard framework, while higher-wage contributions can be permitted under applicable arrangements.",
    },
    {
        q: "Is INR 1,800 the maximum PF deduction?",
        a: "INR 1,800 is 12% of INR 15,000 and represents the standard ceiling-based calculation. It is not an automatic universal PF deduction for every employee.",
    },
    {
        q: "How is the employer PF contribution split?",
        a: "Under the standard framework, the employer contribution is allocated between EPF and EPS, commonly represented as 3.67% to EPF and 8.33% to EPS, subject to the applicable wage ceiling and rules.",
    },
    {
        q: "What is EPS?",
        a: "EPS stands for Employees' Pension Scheme. Part of the employer's contribution can be allocated to EPS under the applicable rules.",
    },
    {
        q: "Does the entire employer contribution go into EPF?",
        a: "No. Under the standard framework, part of the employer contribution can be allocated to EPS rather than the EPF balance.",
    },
    {
        q: "What is the current EPF interest rate?",
        a: "The EPF interest rate is declared for each financial year. For FY 2025-26, the CBT recommended 8.25% on 2 March 2026, subject to Government notification before crediting.",
    },
    {
        q: "Is 8.25% the permanent EPF interest rate?",
        a: "No. EPF interest is determined for each relevant financial year and can change.",
    },
    {
        q: "How is EPF interest calculated?",
        a: "EPFO uses monthly running balances for interest calculation and credits the interest according to the applicable annual process.",
    },
    {
        q: "Is EPF interest compounded monthly?",
        a: "The scheme uses monthly running balances, but interest is credited through the prescribed annual crediting process. A calculator may use monthly simulation for projection and should clearly label it as an estimate.",
    },
    {
        q: "How is EPF maturity calculated?",
        a: "Maturity depends on existing balance, future contributions, salary growth, tenure and the assumed or declared interest rate.",
    },
    {
        q: "What is an EPF maturity calculator?",
        a: "An EPF maturity calculator estimates the future provident-fund balance using current balance, contributions, tenure and an interest assumption.",
    },
    {
        q: "How does a salary hike affect EPF?",
        a: "If the applicable PF wage rises, future employee and employer contributions can increase, which can increase the projected EPF corpus.",
    },
    {
        q: "How much PF is deducted on INR 20,000 Basic Salary?",
        a: "It depends on the applicable PF wage basis and whether the standard wage ceiling or higher-wage contribution arrangement applies.",
    },
    {
        q: "How much PF is deducted on INR 30,000 Basic Salary?",
        a: "The actual contribution depends on the applicable PF wage basis, contribution ceiling and employer arrangement.",
    },
    {
        q: "How much PF is deducted on INR 50,000 Basic Salary?",
        a: "A INR 50,000 Basic Salary does not automatically mean the PF deduction is 12% of INR 50,000; the applicable contribution basis must be determined first.",
    },
    {
        q: "Can I apply the INR 15,000 PF cap?",
        a: "Yes, where the standard ceiling-based calculation is appropriate. The calculator should clearly label the cap assumption.",
    },
    {
        q: "Can I calculate EPF without applying the wage cap?",
        a: "The calculator can model higher-wage contribution scenarios where the applicable rules and employer arrangement permit them.",
    },
    {
        q: "Is EPF maturity tax-free?",
        a: "Tax treatment depends on the contribution and withdrawal circumstances and the current tax rules. Not every withdrawal should be described as automatically tax-free.",
    },
    {
        q: "Can EPF be withdrawn before retirement?",
        a: "Certain withdrawals and advances are permitted for specified purposes and conditions under the applicable EPFO rules.",
    },
    {
        q: "Can I transfer EPF when I change jobs?",
        a: "Yes, EPF accounts can be transferred subject to the applicable EPFO process and account conditions.",
    },
    {
        q: "What is UAN?",
        a: "UAN is the Universal Account Number used by EPFO members to manage provident-fund accounts across employments.",
    },
    {
        q: "Should I enter my UAN into the calculator?",
        a: "No. The calculator does not need your UAN, password or account credentials.",
    },
    {
        q: "What happens to the existing EPF balance in a maturity calculation?",
        a: "The existing EPF balance is used as the starting corpus and can materially change the projected maturity value.",
    },
    {
        q: "Does EPS form part of the EPF maturity corpus?",
        a: "The EPS portion is separate from the EPF balance, so it should not automatically be included in the EPF maturity corpus.",
    },
    {
        q: "What is the difference between EPF balance and EPS pension?",
        a: "EPF is the provident-fund balance, while EPS is the pension component under the applicable pension scheme.",
    },
    {
        q: "Is EPF an investment?",
        a: "EPF is a statutory retirement savings mechanism rather than a market-linked investment product.",
    },
    {
        q: "Can my future EPF maturity be guaranteed?",
        a: "No. A calculator projection depends on assumptions about salary, contribution rules, interest and tenure. Future statutory rates and circumstances can change.",
    },
    {
        q: "Why does my EPF balance differ from a calculator projection?",
        a: "Actual balances can differ because of salary changes, contribution timing, transfers, withdrawals, declared interest rates and employer payroll treatment.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti EPF Calculator India",
    url: PAGE_URL,
    description: "Free online EPF calculator for estimating employee and employer PF contributions and projected EPF maturity corpus in India.",
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
        { "@type": "ListItem", position: 3, name: "EPF Calculator India", item: PAGE_URL },
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

export default function PFCalculatorPage() {
    return (
        <main id="main-content" className="epf-calculator-page min-h-screen bg-white">
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
                            <li aria-current="page" className="text-emerald-300 font-medium">EPF Calculator India</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        Free India Provident Fund Tool
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        EPF Calculator India
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Calculate employee and employer PF contributions and estimate your projected EPF balance using salary, tenure and interest assumptions.
                    </p>
                </div>
            </header>

            {/* Calculator Card Section */}
            <section id="calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">
                                Calculate Your EPF Maturity Corpus &amp; Monthly PF Deposits
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Enter the values available from your salary slip or EPFO account (Monthly Basic Salary + DA, Existing EPF Balance, Investment Tenure, expected annual salary increase, and wage cap settings).
                            </p>
                        </div>

                        <PFCalculator />
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
                                Reviewed by HR Niti Payroll Team. Important: EPF interest rates, contribution rules and eligible wage treatment are governed by the applicable EPFO rules.
                            </span>
                        </div>
                    </div>

                    {/* Section 5: What Is EPF? */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">
                            What Is EPF?
                        </h2>
                        <p className="leading-relaxed">
                            EPF stands for <strong>Employees&apos; Provident Fund</strong>. It is a retirement savings scheme administered by the Employees&apos; Provident Fund Organisation (EPFO) under the applicable provident-fund framework.
                        </p>
                        <p className="leading-relaxed text-sm text-slate-600">
                            For eligible employees, contributions are made by the employee and employer. The employee contribution is credited to the provident fund account, while the employer&apos;s contribution is allocated between EPF and the Employees&apos; Pension Scheme (EPS) according to the applicable rules.
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                            EPF is designed to build long-term retirement savings through regular contributions and interest credited to members&apos; accounts.
                        </p>
                    </section>

                    {/* Section 6: How Much PF Is Deducted From Salary? */}
                    <section id="contribution" aria-labelledby="contribution-title" className="space-y-4">
                        <h2 id="contribution-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Much PF Is Deducted From Salary?
                        </h2>
                        <p className="leading-relaxed">
                            For employees covered under the standard EPF contribution rules, the employee contribution is generally 12% of the applicable PF wages, subject to the rules governing the establishment and employee.
                        </p>
                        <p className="leading-relaxed text-sm text-slate-600">
                            The applicable PF wage can include Basic Wages and specified components such as Dearness Allowance and Retaining Allowance. EPFO explains the 12% contribution framework and the statutory wage ceiling of ₹15,000 per month for mandatory contribution purposes.
                        </p>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs md:text-sm text-amber-950 font-semibold">
                            Important: Do not treat ₹1,800 per month as a universal PF deduction. ₹1,800 is 12% of ₹15,000 and reflects the standard ceiling-based calculation, not an automatic result for every employee.
                        </div>

                        {/* Employee PF vs Employer PF Table */}
                        <div className="space-y-2 pt-2">
                            <h3 className="font-bold text-slate-900 text-lg">Employee PF vs Employer PF</h3>
                            <p className="text-sm text-slate-600">
                                The employee&apos;s PF contribution and the employer&apos;s contribution are separate parts of the overall provident-fund contribution:
                            </p>
                            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                            <th className="p-3.5 border-b border-slate-800">Contribution</th>
                                            <th className="p-3.5 border-b border-slate-800">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                        <tr>
                                            <td className="p-3.5 font-bold text-slate-900">Employee share</td>
                                            <td className="p-3.5 text-slate-700">Employee-side PF contribution credited to the applicable provident-fund account</td>
                                        </tr>
                                        <tr className="bg-slate-50/60">
                                            <td className="p-3.5 font-bold text-slate-900">Employer share</td>
                                            <td className="p-3.5 text-slate-700">Employer contribution allocated between EPF and EPS according to applicable rules</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3.5 font-bold text-slate-900">EPS</td>
                                            <td className="p-3.5 text-slate-700">Pension component of the employer contribution, subject to applicable rules and wage basis</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section 8: How Is the Employer's PF Contribution Split? */}
                    <section id="eps" aria-labelledby="eps-title" className="space-y-4">
                        <h2 id="eps-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is the Employer&apos;s PF Contribution Split?
                        </h2>
                        <p className="leading-relaxed">
                            Under the standard contribution structure, the employer contribution is divided between the EPF and EPS components according to the applicable rules. The standard statutory framework commonly uses an employer EPF share of 3.67% and an EPS contribution of 8.33%, subject to the wage ceiling and other applicable provisions.
                        </p>
                        <p className="leading-relaxed text-sm text-slate-600">
                            For employees whose contribution is modeled using the ₹15,000 wage ceiling, 8.33% of ₹15,000 is approximately ₹1,250 for EPS and the remaining standard employer EPF amount is approximately ₹550, giving a total employer contribution of ₹1,800 under that ceiling-based illustration.
                        </p>

                        <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                            <h3 className="font-bold text-slate-900 text-lg">What Is EPS?</h3>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                EPS stands for Employees&apos; Pension Scheme. A portion of the employer&apos;s standard statutory contribution can be allocated to EPS rather than the employee&apos;s EPF balance. This is important when projecting an EPF corpus: the employer&apos;s total contribution should not automatically be added entirely to the EPF balance if a portion is allocated to EPS under the applicable rules.
                            </p>
                        </div>
                    </section>

                    {/* Section 9: How Is EPF Interest Calculated? */}
                    <section id="interest" aria-labelledby="interest-title" className="space-y-4">
                        <h2 id="interest-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is EPF Interest Calculated?
                        </h2>
                        <p className="leading-relaxed">
                            EPF interest is determined at a rate declared for the relevant year. EPFO explains that interest is calculated using monthly running balances, while the interest amount is credited to the member&apos;s account in accordance with the applicable yearly process.
                        </p>

                        <div className="border border-slate-200 rounded-2xl p-5 bg-emerald-50/50 space-y-2">
                            <h3 className="font-bold text-slate-900 text-lg">Current EPF Interest Rate</h3>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                The EPF interest rate is determined for the relevant financial year. For FY 2025-26, the Central Board of Trustees (CBT) recommended an <strong>8.25% annual interest rate</strong> on EPF accumulations on 2 March 2026. The Government of India must officially notify the rate before EPFO credits it to members&apos; accounts.
                            </p>
                        </div>
                    </section>

                    {/* Section 11: How Is EPF Maturity Calculated? */}
                    <section id="maturity" aria-labelledby="maturity-title" className="space-y-4">
                        <h2 id="maturity-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is EPF Maturity Calculated?
                        </h2>
                        <p className="leading-relaxed">
                            EPF maturity depends on several factors: existing EPF balance, employee contribution, employer EPF portion, EPS treatment, contribution period, annual salary growth, and the applicable EPF interest rate.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-base">Why Existing EPF Balance Matters</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Your existing EPF balance already earns interest under applicable rules. Adding an existing balance to the calculation can materially change the projected maturity corpus compared with starting from zero.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                <h3 className="font-bold text-slate-900 text-base">How Salary Hikes Affect EPF</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    If PF is calculated on the applicable salary basis, increases in Basic Salary + DA can increase future employee and employer contributions, compounding your long-term maturity corpus.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 12: EPF Examples & Contribution Tables */}
                    <section id="examples" aria-labelledby="examples-title" className="space-y-6">
                        <h2 id="examples-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            EPF Examples and Contribution Tables
                        </h2>

                        <div className="space-y-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                                <h3 className="font-bold text-slate-900 text-base">EPF Calculation With a ₹15,000 Wage Ceiling</h3>
                                <p className="text-xs md:text-sm text-slate-600">For a ₹15,000 PF wage:</p>
                                <ul className="text-xs text-slate-700 font-mono space-y-1 pl-2">
                                    <li>• Employee PF (12% of ₹15,000) = <strong className="text-slate-900">₹1,800 / month</strong></li>
                                    <li>• Employer EPS (8.33% of ₹15,000) ≈ <strong className="text-slate-900">₹1,250 / month</strong></li>
                                    <li>• Employer EPF (3.67% of ₹15,000) ≈ <strong className="text-slate-900">₹550 / month</strong></li>
                                </ul>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 text-xs">
                                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-1">
                                    <div className="font-bold text-slate-900">₹20,000 Basic Salary</div>
                                    <p className="text-slate-500">Depends on whether ₹15k wage ceiling or actual wage contribution applies.</p>
                                </div>
                                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-1">
                                    <div className="font-bold text-slate-900">₹30,000 Basic Salary</div>
                                    <p className="text-slate-500">Under ₹15k ceiling: ₹1,800 EE PF. Under actual wage: ₹3,600 EE PF.</p>
                                </div>
                                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-1">
                                    <div className="font-bold text-slate-900">₹50,000 Basic Salary</div>
                                    <p className="text-slate-500">Contribution basis must be determined first (capped vs uncapped).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 15: Tax & Withdrawal Explanations */}
                    <section id="tax" aria-labelledby="tax-title" className="space-y-4">
                        <h2 id="tax-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Is EPF Tax-Free?
                        </h2>
                        <p className="leading-relaxed">
                            Tax treatment depends on the circumstances of the contribution and withdrawal, applicable tax rules and the employee&apos;s account history. Under Section 10(11) of the Income Tax Act, EPF withdrawals after 5 years of continuous service are generally tax-free.
                        </p>
                    </section>

                    <section id="withdrawal" aria-labelledby="withdrawal-title" className="space-y-4">
                        <h2 id="withdrawal-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            When Can EPF Be Withdrawn?
                        </h2>
                        <p className="leading-relaxed">
                            Certain withdrawals and advances are permitted for specified purposes and conditions under applicable EPFO rules (e.g. medical treatment, house purchase, marriage, education, or unemployment).
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
                            <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-1">
                                <strong className="text-slate-900">EPF Transfer When Changing Jobs</strong>
                                <p className="text-slate-600">When changing jobs, transferring your EPF account maintains service continuity and compound growth.</p>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-1">
                                <strong className="text-slate-900">EPF Balance &amp; UAN</strong>
                                <p className="text-slate-600">Universal Account Number (UAN) manages EPF accounts. HR Niti&apos;s tool never asks for UAN or passbook passwords.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 17: AEO Quick Answers */}
                    <section id="aeo-blocks" aria-labelledby="aeo-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="aeo-title" className="text-2xl font-bold text-slate-900">
                                EPF Quick Answer Summary
                            </h2>
                            <p className="text-sm text-slate-600">
                                Direct answers to common questions about Indian Employees&apos; Provident Fund rules:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">What Is EPF?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    EPF is a retirement savings scheme administered by EPFO under India&apos;s applicable provident-fund framework.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How Much PF Is Deducted From Salary?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    For employees covered under the standard contribution framework, the employee contribution is generally 12% of applicable PF wages, subject to applicable rules and wage basis.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">Is PF Always 12% of Basic Salary?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    The standard employee contribution is generally 12% of applicable PF wages, but the calculation basis and wage ceiling can affect actual deduction.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How Is the Employer&apos;s PF Contribution Split?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Under the standard framework, employer contribution is allocated between EPF and EPS according to applicable rules, commonly represented as 3.67% to EPF and 8.33% to EPS.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">What Is the Current EPF Interest Rate?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    The EPF interest rate is declared for each financial year. For FY 2025-26, the CBT recommended 8.25% on 2 March 2026, subject to Government notification before crediting.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 18: Complete FAQ Section */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About EPF
                            </h2>
                            <p className="text-sm text-slate-600">
                                Complete FAQ guide covering EPF balance calculations, interest rates, EPS pension, and tax exemption rules.
                            </p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Section 19: Related HR & Payroll Calculators */}
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
                                { title: "CTC Calculator", href: "/tools/ctc-calculator", desc: "Calculate annual Cost to Company package breakup" },
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Code on Social Security 2020 gratuity estimation" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out payout" },
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new CTC package" },
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

                    {/* Section 20: Methodology & Disclaimer */}
                    <section id="methodology" aria-labelledby="methodology-title" className="space-y-4 pt-8 border-t border-slate-200">
                        <h2 id="methodology-title" className="text-xl font-bold text-slate-900">
                            EPF Calculator Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s EPF Calculator is an informational estimation tool. Actual provident fund balances can differ due to contribution timing, salary changes, transfers, withdrawals, declared interest rates and employer payroll treatment.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Interest Rate Status:</span> 8.25% CBT Recommended (FY 25-26)
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
