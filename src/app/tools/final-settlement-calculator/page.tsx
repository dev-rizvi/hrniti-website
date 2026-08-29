import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import FinalSettlementCalculator from "@/components/tools/FinalSettlementCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/final-settlement-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/final-settlement-calculator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "Full & Final Settlement Calculator India – F&F Exit Payout | HR Niti",
    },
    description: "Calculate Full & Final settlement in India. Estimate unpaid salary, leave encashment, gratuity, bonus, reimbursements and notice recovery with HR Niti.",
    keywords: "full and final settlement calculator, final settlement calculator, F&F settlement calculator, full and final calculation, final settlement after resignation, full and final settlement India, employee final settlement calculator, notice period recovery calculator, leave encashment calculation, gratuity calculation in final settlement, final salary calculation after resignation, F&F settlement timeline",
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
        title: "Full & Final Settlement Calculator India – F&F Exit Payout | HR Niti",
        description: "Estimate employee exit settlement including unpaid salary, leave encashment, gratuity, pending payments and notice recovery.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Full & Final Settlement Calculator India – F&F Exit Payout" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Full & Final Settlement Calculator India – F&F Exit Payout | HR Niti",
        description: "Calculate an estimated Full & Final settlement payout after resignation or employment exit.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is Full & Final Settlement?",
        a: "Full & Final settlement is the process of calculating and settling the amounts due between an employer and employee when employment ends.",
    },
    {
        q: "What is an F&F settlement calculator?",
        a: "An F&F calculator estimates employee exit dues such as unpaid salary, leave encashment, gratuity, pending payments and applicable recoveries.",
    },
    {
        q: "What is included in Full & Final Settlement?",
        a: "It can include unpaid salary, eligible leave encashment, gratuity, pending bonus or incentives, reimbursements and authorized recoveries or deductions.",
    },
    {
        q: "How is Full & Final settlement calculated?",
        a: "A simplified estimate is unpaid salary plus eligible leave encashment, gratuity and pending payments minus authorized recoveries or deductions.",
    },
    {
        q: "How is unpaid salary calculated after resignation?",
        a: "A simplified calculation is applicable salary divided by the employer's payroll divisor multiplied by payable days. The actual divisor depends on the applicable payroll policy.",
    },
    {
        q: "How is notice period recovery calculated?",
        a: "A common simplified approach is applicable daily salary multiplied by unserved notice days, but the actual contractual recovery basis can differ.",
    },
    {
        q: "Can an employer deduct notice-period recovery from F&F?",
        a: "An applicable recovery may be reflected in the final settlement where it is authorized by the employment terms and applicable rules. The exact basis should be checked against the contract and law.",
    },
    {
        q: "When should final wages be paid after resignation in India?",
        a: "Section 17 of the Code on Wages provides that wages payable after resignation, removal, dismissal or retrenchment are to be paid within two working days of the relevant event, subject to the Code's provisions and other applicable law.",
    },
    {
        q: "Does the two-working-day rule cover every F&F component?",
        a: "The statutory provision specifically addresses wages. Other items such as gratuity, reimbursements or other settlement components can have different applicable rules or processes.",
    },
    {
        q: "Is gratuity included in Full & Final Settlement?",
        a: "It can be included when the employee is eligible. Gratuity should be calculated using its applicable statutory rules rather than treated as a generic salary component.",
    },
    {
        q: "Is leave encashment included in F&F settlement?",
        a: "Eligible unused leave can be included when the employer's policy or applicable rules provide for encashment.",
    },
    {
        q: "How is leave encashment calculated in F&F?",
        a: "A common formula is eligible salary divided by the applicable divisor multiplied by eligible leave days.",
    },
    {
        q: "Is bonus included in final settlement?",
        a: "Pending bonus or incentive can be included if the employee is eligible under the applicable policy or contractual terms.",
    },
    {
        q: "Are reimbursements included in F&F?",
        a: "Approved and payable reimbursements can be included, subject to the employer's reimbursement policy and supporting records.",
    },
    {
        q: "Is PF included in Full & Final settlement?",
        a: "The employee's EPF balance is governed by the EPFO process and should not automatically be treated as an employer payroll settlement amount.",
    },
    {
        q: "Is F&F settlement taxable?",
        a: "Different components have different tax treatment. The whole settlement should not automatically be labeled tax-free or fully taxable.",
    },
    {
        q: "Can notice recovery reduce F&F payout?",
        a: "Yes, an authorized notice-period recovery can reduce the amount payable in the final settlement.",
    },
    {
        q: "Can an employee's F&F be negative?",
        a: "A settlement can potentially have deductions or recoveries that exceed certain payable components. The treatment of any resulting amount due from the employee depends on the contract, payroll rules and applicable law.",
    },
    {
        q: "What happens to unused leave when I resign?",
        a: "Unused leave may be encashed if the applicable policy or rules allow it. The final amount depends on eligible leave and the applicable calculation basis.",
    },
    {
        q: "What happens to gratuity when I resign?",
        a: "An eligible employee may receive gratuity when employment ends, subject to the applicable eligibility and statutory conditions.",
    },
    {
        q: "How is F&F calculated after retirement?",
        a: "Retirement settlement can include salary due, leave encashment, gratuity and other payments. Each component should be calculated under its applicable rules.",
    },
    {
        q: "How is F&F calculated after termination?",
        a: "The calculation depends on the reason for termination, employment terms, applicable law and the employee's outstanding dues.",
    },
    {
        q: "What documents should I check before accepting my F&F statement?",
        a: "Compare the F&F statement with your salary slip, employment contract, leave balance, notice terms, bonus records, gratuity calculation and reimbursement records.",
    },
    {
        q: "What is the difference between F&F and monthly in-hand salary?",
        a: "F&F is a one-time employee-exit settlement. In-hand salary is the recurring net salary received during employment.",
    },
    {
        q: "Can HR use this calculator for payroll?",
        a: "It can be used as an estimate or pre-check, but production payroll should rely on the organization's payroll system and employee records.",
    },
    {
        q: "Can an F&F calculation include tax deductions?",
        a: "Yes, applicable tax or other authorized deductions can affect the net amount, but tax should be calculated using the employee's actual circumstances.",
    },
    {
        q: "Is final settlement the same as gratuity?",
        a: "No. Gratuity is one possible component of an F&F settlement; F&F can include many other salary and benefit components.",
    },
    {
        q: "Is final settlement the same as leave encashment?",
        a: "No. Leave encashment is one possible component of F&F. Final settlement combines multiple employee dues and deductions.",
    },
    {
        q: "Does resignation automatically cancel gratuity?",
        a: "No. Gratuity eligibility depends on the applicable legal conditions and employee category; resignation by itself should not be described as automatic forfeiture.",
    },
    {
        q: "How long does full and final settlement take in India?",
        a: "The wage-payment timing under Section 17 of the Code on Wages is two working days for wages payable after resignation, removal, dismissal or retrenchment, subject to the Code and other applicable law. Other settlement components can have separate processing requirements.",
    },
    {
        q: "What if my F&F amount is different from the calculator?",
        a: "Compare the calculation inputs and assumptions with your actual salary structure, leave policy, gratuity eligibility, notice terms, tax deductions and employer records.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti Full & Final Settlement Calculator India",
    url: PAGE_URL,
    description: "Free online calculator to estimate employee Full & Final settlement in India, including unpaid salary, leave encashment, gratuity, pending payments and notice recovery.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript-enabled web browser",
    isAccessibleForFree: true,
    featureList: [
        "Unpaid salary calculation for worked days",
        "Eligible leave encashment payout estimation",
        "Statutory gratuity calculation under Social Security Code 2020",
        "Notice period recovery deduction calculation",
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
        { "@type": "ListItem", position: 3, name: "Full & Final Settlement Calculator India", item: PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    description: "Frequently asked questions about Full & Final (F&F) exit settlement, leave encashment, gratuity, and notice period rules in India.",
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

export default function FinalSettlementCalculatorPage() {
    return (
        <main id="main-content" className="final-settlement-calculator-page min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <a href="#calculator" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-emerald-600 focus:text-white font-bold">
                Skip to calculator
            </a>

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
                            <li aria-current="page" className="text-emerald-300 font-medium">Full &amp; Final Settlement Calculator India</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        Free Exit Settlement &amp; Payroll Tool
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        Full &amp; Final Settlement Calculator India
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Calculate your estimated Full &amp; Final (F&amp;F) exit settlement payout in India with HR Niti&apos;s free online calculator. Estimate unpaid salary for worked days, earned leave encashment, statutory gratuity, pending bonuses, reimbursements, and notice period shortfall recovery instantly.
                    </p>
                </div>
            </header>

            {/* Calculator Card Section */}
            <section id="calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">
                                Calculate Employee Full &amp; Final Settlement
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Enter the information available from your salary slip, HR records or employment documents (Monthly Basic + DA, worked days, unused leave, service years, notice recovery, pending bonus &amp; reimbursements).
                            </p>
                        </div>

                        <FinalSettlementCalculator />
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
                                Reviewed by HR Niti Payroll Team. Important: Full &amp; Final settlement depends on employment contract, salary structure, leave policy, gratuity rules, and exit circumstances.
                            </span>
                        </div>
                    </div>

                    {/* Section 5: What Is Full & Final Settlement? */}
                    <section id="quick-answer" aria-labelledby="quick-answer-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="quick-answer-title" className="text-2xl font-bold text-slate-900">
                            What Is Full &amp; Final Settlement?
                        </h2>
                        <p className="leading-relaxed">
                            Full &amp; Final Settlement, commonly called F&amp;F settlement, is the process of calculating and settling the amounts due between an employer and an employee when employment ends.
                        </p>
                        <p className="leading-relaxed text-sm text-slate-600">
                            Depending on the circumstances, a settlement may include unpaid salary, eligible leave encashment, gratuity, bonus or incentive payments, reimbursements and other contractual or statutory dues, while also accounting for authorized deductions or recoveries.
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                            F&amp;F settlement is therefore not one fixed formula. It is a combination of multiple payroll and employment components.
                        </p>
                    </section>

                    {/* Section 6: What Is Included in F&F Settlement? */}
                    <section id="components" aria-labelledby="components-title" className="space-y-4">
                        <h2 id="components-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            What Is Included in Full &amp; Final Settlement?
                        </h2>
                        <p className="leading-relaxed">
                            The exact components depend on the employee&apos;s circumstances and employer policy. Common components include:
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm">
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                                <strong className="text-emerald-700">Payable Dues &amp; Earnings:</strong>
                                <ul className="list-disc list-inside text-slate-600 space-y-1 pt-1">
                                    <li>Salary payable for the final unpaid period</li>
                                    <li>Eligible leave encashment</li>
                                    <li>Gratuity, where applicable</li>
                                    <li>Pending bonus or incentives</li>
                                    <li>Approved expense reimbursements</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                                <strong className="text-amber-800">Deductions &amp; Recoveries:</strong>
                                <ul className="list-disc list-inside text-slate-600 space-y-1 pt-1">
                                    <li>Notice-period recovery, where applicable</li>
                                    <li>Salary advances or loan recovery</li>
                                    <li>Other authorized deductions or recoveries</li>
                                </ul>
                            </div>
                        </div>

                        {/* Formula Box */}
                        <div className="bg-slate-900 text-emerald-300 border border-slate-800 rounded-xl p-4 font-mono text-xs md:text-sm font-bold overflow-x-auto mt-2">
                            F&amp;F Settlement = Unpaid Salary + Leave Encashment + Gratuity + Pending Payments − Authorized Recoveries/Deductions
                        </div>
                    </section>

                    {/* Section 8: How Is Unpaid Salary Calculated? */}
                    <section id="salary" aria-labelledby="salary-title" className="space-y-4">
                        <h2 id="salary-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is Unpaid Salary Calculated?
                        </h2>
                        <p className="leading-relaxed">
                            When an employee leaves during a salary period, the employer calculates salary payable for the eligible days worked. A simplified daily calculation uses:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs md:text-sm font-bold text-slate-900">
                            Unpaid Salary = Applicable Salary ÷ Payroll Divisor × Payable Days
                        </div>
                        <p className="text-xs md:text-sm text-slate-600">
                            Example: If monthly salary is ₹50,000, payroll divisor is 30, and the employee worked 15 days: <code className="bg-slate-100 px-2 py-0.5 rounded font-mono font-bold">₹50,000 ÷ 30 × 15 = ₹25,000</code>.
                        </p>
                    </section>

                    {/* Section 9: Leave Encashment in Full & Final Settlement */}
                    <section id="leave" aria-labelledby="leave-title" className="space-y-4">
                        <h2 id="leave-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Leave Encashment in Full &amp; Final Settlement
                        </h2>
                        <p className="leading-relaxed">
                            Eligible unused leave may be paid as leave encashment when employment ends, depending on the applicable leave policy.
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs md:text-sm font-bold text-slate-900">
                            Leave Encashment = Eligible Salary ÷ Applicable Dividing Factor × Eligible Leave Days
                        </div>
                        <p className="text-xs text-slate-500">
                            For detailed leave calculations, use HR Niti&apos;s <Link href="/tools/leave-encashment-calculator" className="font-bold text-emerald-700 underline">Leave Encashment Calculator</Link>.
                        </p>
                    </section>

                    {/* Section 10: Gratuity in Full & Final Settlement */}
                    <section id="gratuity" aria-labelledby="gratuity-title" className="space-y-4">
                        <h2 id="gratuity-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Gratuity in Full &amp; Final Settlement
                        </h2>
                        <p className="leading-relaxed">
                            Gratuity is a separate statutory employment benefit that becomes payable when an eligible employee&apos;s employment ends (qualifying service ≥ 5 years or 1 year for Fixed-Term Employees under the Code on Social Security 2020 enforced 21 November 2025).
                        </p>
                        <p className="text-xs text-slate-500">
                            For a dedicated gratuity calculation, link to HR Niti&apos;s <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline">Gratuity Calculator</Link>.
                        </p>
                    </section>

                    {/* Section 11: Notice Period Recovery */}
                    <section id="notice" aria-labelledby="notice-title" className="space-y-4">
                        <h2 id="notice-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Notice Period Recovery in Final Settlement
                        </h2>
                        <p className="leading-relaxed">
                            If an employee leaves before completing the required notice period and employment terms provide for recovery, final settlement includes a notice-period shortfall adjustment:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs md:text-sm font-bold text-slate-900">
                            Notice Recovery = Applicable Daily Salary × Unserved Notice Days
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                            <h3 className="font-bold text-slate-900 text-base">Notice Period Buyout vs Notice Recovery</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                A buyout refers to an arrangement allowing an employee to shorten the notice period by paying or having an amount adjusted according to employment contract terms.
                            </p>
                        </div>
                    </section>

                    {/* Section 13: Two Working Days Legal Payment Rule */}
                    <section id="timeline" aria-labelledby="timeline-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="timeline-title" className="text-2xl font-bold text-slate-900">
                            When Should Final Wages Be Paid After Resignation?
                        </h2>
                        <p className="leading-relaxed">
                            Section 17 of the <strong>Code on Wages, 2019</strong> and Ministry of Labour compliance guidelines provide that where an employee is removed, dismissed, retrenched or has resigned, <strong>wages payable to the employee shall be paid within two working days</strong> of the relevant event.
                        </p>
                        <div className="bg-white border border-emerald-200 rounded-xl p-4 text-xs md:text-sm text-emerald-950 font-semibold">
                            Important: The statutory 2-working-day provision specifically addresses wages. Other settlement components like gratuity, tax forms (Form 16), or complex reimbursements may have separate processing timelines.
                        </div>
                    </section>

                    {/* Section 17: Worked Example Full & Final Settlement */}
                    <section id="worked-example" aria-labelledby="worked-example-title" className="space-y-4">
                        <h2 id="worked-example-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Example Full &amp; Final Settlement Calculation
                        </h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 text-xs md:text-sm">
                            <div className="font-bold text-slate-900 text-base">Sample Exiting Employee Dues:</div>
                            <div className="grid grid-cols-2 gap-2 text-slate-700">
                                <span>Monthly Basic + DA:</span> <strong className="text-slate-900">₹50,000</strong>
                                <span>Worked days in final month:</span> <strong className="text-slate-900">15 days</strong>
                                <span>Eligible unused leave:</span> <strong className="text-slate-900">24 days</strong>
                                <span>Completed service years:</span> <strong className="text-slate-900">6 years</strong>
                            </div>
                            <div className="border-t border-slate-200 pt-3 space-y-1.5 font-mono text-xs">
                                <div className="flex justify-between">
                                    <span>Unpaid Salary (₹50k ÷ 30 × 15):</span>
                                    <span className="font-bold text-slate-900">+₹25,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Leave Encashment (₹50k ÷ 30 × 24):</span>
                                    <span className="font-bold text-slate-900">+₹40,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Statutory Gratuity (₹50k × 15 × 6 ÷ 26):</span>
                                    <span className="font-bold text-slate-900">+₹1,73,077</span>
                                </div>
                                <div className="flex justify-between border-t border-slate-300 pt-2 font-extrabold text-sm text-emerald-700">
                                    <span>Estimated Gross F&amp;F Settlement:</span>
                                    <span>₹2,38,077</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 19: AEO Quick Answers */}
                    <section id="aeo-blocks" aria-labelledby="aeo-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="aeo-title" className="text-2xl font-bold text-slate-900">
                                Full &amp; Final Settlement Quick Answer Summary
                            </h2>
                            <p className="text-sm text-slate-600">
                                Direct answers to common questions about Indian exit settlement rules:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">What is Full &amp; Final Settlement?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Full &amp; Final settlement is the calculation and payment process used to settle an employee&apos;s outstanding salary, benefits, eligible leave, gratuity and other dues when employment ends.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How is F&amp;F settlement calculated?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    A simplified estimate is unpaid salary plus eligible leave encashment, gratuity and pending payments minus authorized recoveries or deductions.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">What is included in full and final settlement?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    It can include unpaid salary, leave encashment, gratuity, pending bonus or incentives, reimbursements and applicable recoveries or deductions.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">How is notice period recovery calculated?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    A simplified calculation is applicable daily salary multiplied by unserved notice days, but the actual basis depends on the employment contract, company policy and applicable law.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1">
                                <h3 className="font-bold text-slate-900 text-base">When should final wages be paid after resignation in India?</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Under Section 17 of the Code on Wages, wages payable after resignation, removal, dismissal or retrenchment are to be paid within two working days of the relevant event, subject to qualifications.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 20: Complete FAQ Section */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About Full &amp; Final Settlement
                            </h2>
                            <p className="text-sm text-slate-600">
                                Complete FAQ guide covering F&amp;F settlement timelines, leave encashment, gratuity, and notice period recoveries.
                            </p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Section 21: Related HR & Payroll Calculators */}
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
                                { title: "EPF Calculator", href: "/tools/pf-calculator", desc: "Calculate monthly Provident Fund contributions & maturity" },
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new CTC package" },
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Code on Social Security 2020 gratuity estimation" },
                                { title: "Leave Encashment Calculator", href: "/tools/leave-encashment-calculator", desc: "Calculate earned leave cash out payout" },
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

                    {/* Section 22: Methodology & Disclaimer */}
                    <section id="methodology" aria-labelledby="methodology-title" className="space-y-4 pt-8 border-t border-slate-200">
                        <h2 id="methodology-title" className="text-xl font-bold text-slate-900">
                            Full &amp; Final Settlement Calculator Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s Full &amp; Final Settlement Calculator provides an estimate for informational and payroll-planning purposes. It is not legal, tax or employment advice. The final amount payable to an employee must be determined from the employer&apos;s payroll records, employment terms, applicable leave and gratuity rules, statutory requirements and the employee&apos;s actual circumstances.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Wage Law:</span> Code on Wages 2019 Sec 17
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
