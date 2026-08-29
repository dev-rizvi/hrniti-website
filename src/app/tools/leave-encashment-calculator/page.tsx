import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import LeaveEncashmentCalculator from "@/components/tools/LeaveEncashmentCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/leave-encashment-calculator`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/leave-encashment-calculator-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "Leave Encashment Calculator India – Calculate Unused Leave Payout | HR Niti",
    },
    description: "Calculate leave encashment online in India. Estimate unused earned-leave payout using salary, eligible leave days and your employer's calculation basis with HR Niti.",
    keywords: "leave encashment calculator, leave encashment calculator India, leave encashment calculation, leave encashment formula, leave salary calculator, earned leave encashment calculator, leave encashment amount calculator, leave encashment tax calculator, leave encashment on resignation, leave encashment on retirement, leave encashment calculation in India",
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
        title: "Leave Encashment Calculator India – Calculate Unused Leave Payout | HR Niti",
        description: "Calculate leave encashment online in India. Estimate unused earned-leave payout using salary, eligible leave days and your employer's calculation basis with HR Niti.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Leave Encashment Calculator India showing leave payout and tax exemption breakdown" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leave Encashment Calculator India – Calculate Unused Leave Payout | HR Niti",
        description: "Calculate leave encashment online in India. Estimate unused earned-leave payout using salary, eligible leave days and your employer's calculation basis with HR Niti.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "What is leave encashment?",
        a: "Leave encashment is the process of converting eligible unused paid leave balance into a lump-sum monetary payout instead of taking days off. It commonly occurs at resignation, retirement, or during active service if permitted by company policy.",
    },
    {
        q: "How is leave encashment calculated?",
        a: "A commonly used leave encashment formula in India is: Leave Encashment = (Eligible Monthly Salary ÷ Dividing Factor) × Eligible Leave Days. The eligible monthly salary is usually Basic Salary + Dearness Allowance (DA).",
    },
    {
        q: "What is the leave encashment formula?",
        a: "The standard formula is: (Basic Salary + DA) ÷ Dividing Factor × Unused Eligible Leave Days. A 30-day divisor is commonly used for calendar-day policies, while some employers use a 26-day divisor for working-day policies.",
    },
    {
        q: "Is leave encashment calculated on basic salary?",
        a: "In most Indian companies, leave encashment is calculated on Basic Salary plus Dearness Allowance (DA). Allowances such as HRA, conveyance, and special allowances are usually excluded unless company policy specifies otherwise.",
    },
    {
        q: "Is leave encashment calculated on gross salary?",
        a: "Not necessarily. Gross salary should not automatically be used unless specified by your employer's leave policy or service rules. Most employers use Basic + DA as the eligible salary basis.",
    },
    {
        q: "Which leaves can be encashed?",
        a: "Earned Leave (EL) or Privilege Leave (PL) is the primary leave category eligible for encashment. Casual Leave (CL) and Sick Leave (SL) usually lapse at the end of the year and are rarely eligible for cash out under standard company policies.",
    },
    {
        q: "Can I encash leave while working?",
        a: "Yes, but only if your employer's company policy or service rules allow in-service leave encashment. However, leave encashment received during active employment is 100% fully taxable as salary income.",
    },
    {
        q: "How is leave encashment calculated on resignation?",
        a: "On resignation, unused earned leave is calculated using your last drawn Basic + DA and the applicable divisor (30 or 26). The payout is credited as a component of your Full and Final (F&F) settlement.",
    },
    {
        q: "How is leave encashment calculated at retirement?",
        a: "At retirement or superannuation, accumulated earned leave is encashed based on eligible leave balance and salary. For tax purposes, retirement leave encashment is eligible for tax exemption under Section 10(10AA).",
    },
    {
        q: "Is leave encashment taxable?",
        a: "It depends on when it is received and employee category. Leave encashment received during employment is fully taxable. On retirement/resignation, government employees get 100% tax exemption, while private employees get exemption up to statutory limits.",
    },
    {
        q: "What is the maximum tax exemption for leave encashment?",
        a: "For non-government private employees receiving leave encashment on retirement or resignation, the maximum tax exemption limit under Section 10(10AA)(ii) is ₹25,00,000 (₹25 Lakhs) for AY 2026-27.",
    },
    {
        q: "Is leave encashment fully tax-free for government employees?",
        a: "Yes! Leave encashment received by Central or State Government employees at retirement or superannuation is 100% fully tax-exempt under Section 10(10AA)(i) of the Income Tax Act.",
    },
    {
        q: "What is the difference between leave encashment and gratuity?",
        a: "Leave encashment is payment for unavailed paid leaves. Gratuity is a statutory exit benefit for long-term continuous service (governed by the Code on Social Security 2020). Both are separate components in an employee's exit settlement.",
    },
    {
        q: "Does leave encashment form part of CTC?",
        a: "No. CTC (Cost to Company) represents your annual gross employment package. Leave encashment is an additional payout computed at exit or in-service based on unused leave balance.",
    },
    {
        q: "What divisor should I use for leave encashment?",
        a: "Use the divisor specified by your employer's leave policy. A 30-day basis is standard for calendar-day policies, while a 26-day basis is used for working-day policies.",
    },
    {
        q: "How much is 10 days of leave worth?",
        a: "Divide your eligible monthly salary by your company's divisor and multiply by 10. For example, with a ₹45,000 salary and 30 divisor: (₹45,000 ÷ 30) × 10 = ₹15,000.",
    },
    {
        q: "How much is 20 days of leave worth?",
        a: "For an eligible monthly salary of ₹45,000 and a 30-day divisor: (₹45,000 ÷ 30) × 20 = ₹30,000.",
    },
    {
        q: "How much is 30 days of leave worth?",
        a: "For an eligible monthly salary of ₹45,000 and a 30-day divisor: (₹45,000 ÷ 30) × 30 = ₹45,000 (equivalent to one month's Basic + DA).",
    },
    {
        q: "Does leave encashment depend on company policy?",
        a: "Yes. Encashment rules, eligible leave caps, carry-forward limits, and calculation divisors vary across organizations and state employment acts.",
    },
    {
        q: "Is unused sick leave automatically encashed?",
        a: "No. Sick leave usually has separate carry-forward rules and is not automatically encashable under standard corporate policies.",
    },
    {
        q: "Is unused casual leave encashed?",
        a: "No. Casual leave generally lapses at the end of each calendar year and cannot be carried forward or encashed.",
    },
    {
        q: "What happens to leave encashment in full-and-final settlement?",
        a: "Eligible encashable leave balance is calculated on your last working day and included as a lump-sum credit in your Full and Final (F&F) settlement statement.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti Leave Encashment Calculator India",
    url: PAGE_URL,
    description: "Calculate leave encashment online in India. Estimate unused earned-leave payout using salary, eligible leave days and your employer's calculation basis with HR Niti.",
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
            name: "Leave Encashment Calculator India",
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
    name: "How to Calculate Leave Encashment Payout in India",
    description: "Step-by-step procedure to calculate unused earned leave cash payout and tax exemption under Indian income tax rules.",
    step: [
        {
            "@type": "HowToStep",
            position: 1,
            name: "Select Encashment Timing",
            text: "Choose whether the leave is being encashed at resignation, retirement, or during active service.",
        },
        {
            "@type": "HowToStep",
            position: 2,
            name: "Enter Last Drawn Basic + DA",
            text: "Enter your monthly Basic Salary plus Dearness Allowance (DA) used by your employer for leave salary calculations.",
        },
        {
            "@type": "HowToStep",
            position: 3,
            name: "Enter Eligible Leave Days",
            text: "Enter the number of unused earned/privilege leave days eligible for encashment under company policy.",
        },
        {
            "@type": "HowToStep",
            position: 4,
            name: "Select Calculation Divisor",
            text: "Select either 30 days (standard calendar) or 26 days (working days) as specified by your company policy.",
        },
        {
            "@type": "HowToStep",
            position: 5,
            name: "View Payout & Tax Exemption",
            text: "Review estimated total leave encashment payout, potential tax-exempt amount under Sec 10(10AA), and potential taxable amount.",
        },
    ],
};

const encashmentExamplesTable = [
    { salary: "₹20,000", d10: "₹6,667", d20: "₹13,333", d30: "₹20,000" },
    { salary: "₹30,000", d10: "₹10,000", d20: "₹20,000", d30: "₹30,000" },
    { salary: "₹40,000", d10: "₹13,333", d20: "₹26,667", d30: "₹40,000" },
    { salary: "₹50,000", d10: "₹16,667", d20: "₹33,333", d30: "₹50,000" },
    { salary: "₹60,000", d10: "₹20,000", d20: "₹40,000", d30: "₹60,000" },
    { salary: "₹75,000", d10: "₹25,000", d20: "₹50,000", d30: "₹75,000" },
    { salary: "₹1,00,000", d10: "₹33,333", d20: "₹66,667", d30: "₹1,00,000" },
];

export default function LeaveEncashmentCalculatorPage() {
    return (
        <main id="main-content" className="leave-encashment-calculator-page min-h-screen bg-white">
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
                            <li aria-current="page" className="text-emerald-300 font-medium">Leave Encashment Calculator India</li>
                        </ol>
                    </nav>

                    <p className="eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-4 text-xs font-semibold text-cyan-200 tracking-wide">
                        🇮🇳 Leave Encashment Calculator India
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        Leave Encashment Calculator India – Calculate Unused Leave Payout
                    </h1>
                    <p className="tool-intro text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">
                        Calculate your unused leave encashment amount online with HR Niti&apos;s free Leave Encashment Calculator India. Enter your eligible salary, unused leave days and your employer&apos;s calculation basis (26 vs 30 days) to estimate leave payout, tax-exempt amount under Section 10(10AA), and potential taxable amount instantly.
                    </p>
                </div>
            </header>

            {/* Calculator Section */}
            <section id="leave-encashment-calculator" aria-labelledby="calculator-title" className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="calculator-card mb-4">
                        <div className="mb-6">
                            <h2 id="calculator-title" className="text-2xl font-bold text-slate-900">
                                Calculate Your Leave Encashment
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Use the calculator below to estimate the value of your unused eligible leave and its tax exemption breakdown.
                            </p>
                        </div>

                        <LeaveEncashmentCalculator />
                    </div>
                </div>
            </section>

            {/* Educational Content for SEO / AEO / GEO */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16 text-slate-700">

                    {/* Freshness Audit */}
                    <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-emerald-700 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0">
                                Last Updated: August 2026
                            </span>
                            <span className="font-semibold text-slate-700">
                                Reviewed periodically to keep calculation guidance, tax references (₹25 Lakh Sec 10(10AA) ceiling), and explanations aligned with applicable Indian rules.
                            </span>
                        </div>
                    </div>

                    {/* Quick Answer: What is Leave Encashment? */}
                    <section id="what-is-leave-encashment" aria-labelledby="what-is-title" className="space-y-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 md:p-8">
                        <h2 id="what-is-title" className="text-2xl font-bold text-slate-900">
                            What Is Leave Encashment?
                        </h2>
                        <p className="leading-relaxed">
                            Leave encashment means converting eligible unused paid leave into money instead of taking the leave. Employees in India may receive leave encashment when they:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-1">
                            {[
                                "Resign from their job",
                                "Retire or superannuate",
                                "Leave employment under another qualifying event",
                                "Use an employer policy that permits encashment during active service",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 bg-white border border-emerald-200 rounded-xl p-3.5 text-sm font-medium text-slate-800">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600 pt-2">
                            Not every type of leave is automatically eligible for encashment. Eligibility depends on the company&apos;s leave policy, employment terms, and applicable law or service rules. For most organizations in India, <strong>earned leave (EL) or privilege leave (PL)</strong> is the primary leave category considered for encashment, while casual leave or sick leave usually lapse.
                        </p>
                    </section>

                    {/* How Is Leave Encashment Calculated? & Formula */}
                    <section id="how-calculated" aria-labelledby="how-calculated-title" className="space-y-4">
                        <h2 id="how-calculated-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Is Leave Encashment Calculated?
                        </h2>
                        <p className="leading-relaxed">
                            A commonly used leave-encashment formula in India is:
                        </p>
                        <div className="bg-slate-900 text-white rounded-xl p-4 font-mono text-sm md:text-base font-bold overflow-x-auto">
                            Leave Encashment = (Eligible Monthly Salary ÷ Dividing Factor) × Eligible Leave Days
                        </div>
                        <p className="leading-relaxed">
                            Where the eligible monthly salary is commonly based on <strong>Basic Salary + Dearness Allowance (DA)</strong>, depending on the employer&apos;s policy and applicable rules.
                        </p>
                        <p className="leading-relaxed text-sm text-slate-600">
                            Many payroll calculations use <strong>30</strong> as the divisor (calendar days basis), while some organizations or specific rules use <strong>26</strong> (working days basis). HR Niti&apos;s calculator allows you to select the applicable dividing factor rather than assuming one value applies to every employer.
                        </p>
                    </section>

                    {/* Leave Encashment Formula & Worked Example */}
                    <section id="formula-example" aria-labelledby="formula-example-title" className="space-y-4 border border-slate-200 rounded-2xl p-6 md:p-8 bg-slate-50/50">
                        <h2 id="formula-example-title" className="text-2xl font-bold text-slate-900">
                            Leave Encashment Formula &amp; Worked Example
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p className="font-bold text-slate-900">Formula:</p>
                            <div className="bg-white border border-slate-200 rounded-xl p-3 font-mono font-bold text-emerald-800">
                                Leave Encashment = (Basic Salary + DA) ÷ Dividing Factor × Unused Eligible Leave Days
                            </div>
                            <p className="font-bold text-slate-900 pt-2">Worked Example:</p>
                            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-slate-700">
                                <p>Suppose an employee has:</p>
                                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                                    <li>Basic Salary + DA = <strong>₹45,000 per month</strong></li>
                                    <li>Unused eligible leave = <strong>20 days</strong></li>
                                    <li>Dividing factor = <strong>30</strong></li>
                                </ul>
                                <div className="pt-2 border-t border-slate-100 font-mono text-xs md:text-sm space-y-1">
                                    <p>Per-day salary: ₹45,000 ÷ 30 = <strong>₹1,500 per day</strong></p>
                                    <p>Encashment payout: ₹1,500 × 20 = <strong>₹30,000</strong></p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 pt-1">
                                Estimated Leave Encashment = <strong>₹30,000</strong>. The final amount can differ if your employer uses a different salary basis, divisor, leave category, or encashment rule.
                            </p>
                        </div>
                    </section>

                    {/* Why Does the 26 vs 30 Divisor Matter? */}
                    <section id="divisor-comparison" aria-labelledby="divisor-title" className="space-y-4">
                        <h2 id="divisor-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Why Does the 26 vs 30 Divisor Matter?
                        </h2>
                        <p className="leading-relaxed">
                            The dividing factor directly changes the value of each leave day. For example, with an eligible monthly salary of <strong className="text-slate-900">₹45,000</strong> and <strong className="text-slate-900">20 eligible leave days</strong>:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-3">
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                                    Using 30 Days (Calendar Basis)
                                </span>
                                <div className="font-mono text-sm text-slate-800">
                                    ₹45,000 ÷ 30 = <strong>₹1,500 per day</strong>
                                </div>
                                <div className="text-lg font-bold text-slate-900 pt-2 border-t border-slate-100">
                                    20-Day Payout: <span className="text-emerald-700">₹30,000</span>
                                </div>
                            </div>

                            <div className="border border-emerald-200 rounded-2xl p-6 bg-emerald-50/50 space-y-3">
                                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md">
                                    Using 26 Days (Working Days Basis)
                                </span>
                                <div className="font-mono text-sm text-slate-800">
                                    ₹45,000 ÷ 26 ≈ <strong>₹1,730.77 per day</strong>
                                </div>
                                <div className="text-lg font-bold text-slate-900 pt-2 border-t border-emerald-200/80">
                                    20-Day Payout: <span className="text-emerald-700">₹34,615</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 pt-1">
                            This creates a difference of <strong>₹4,615</strong> for the exact same leave balance! That is why you should use the divisor specified by your employer&apos;s leave policy or applicable service rules.
                        </p>
                    </section>

                    {/* How to Use the Calculator Steps 1-5 */}
                    <section id="how-to-use-steps" aria-labelledby="steps-title" className="space-y-6">
                        <h2 id="steps-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How to Use the Leave Encashment Calculator
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { step: "Step 1", title: "Select When Leave Is Encashed", desc: "Choose whether the leave is encashed during active service, at resignation, or at retirement." },
                                { step: "Step 2", title: "Select Employee Category", desc: "Choose between Private / Non-Government and Government Employee." },
                                { step: "Step 3", title: "Enter Your Monthly Salary", desc: "Enter your monthly Basic Salary plus Dearness Allowance (DA) used for leave encashment." },
                                { step: "Step 4", title: "Enter Eligible Leave Balance", desc: "Enter unused leave days actually eligible for cash payout under company policy." },
                                { step: "Step 5", title: "Select Dividing Factor", desc: "Choose 30 days (standard calendar) or 26 days (working days) per employer policy." },
                                { step: "Step 6", title: "Calculate Payout & Tax", desc: "Instantly view Estimated Leave Encashment, Tax-Exempt Amount, and Taxable Amount." },
                            ].map((s) => (
                                <div key={s.step} className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">{s.step}</span>
                                    <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Which Leave Can Be Encashed? */}
                    <section id="which-leave" aria-labelledby="which-leave-title" className="space-y-4">
                        <h2 id="which-leave-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Which Leave Can Be Encashed?
                        </h2>
                        <p className="leading-relaxed">
                            Not every leave type is treated in the same way. Organizations commonly distinguish between:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 pt-2">
                            <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50/50 space-y-2">
                                <h3 className="font-bold text-emerald-950 text-lg">Earned Leave / Privilege Leave</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    This is the primary leave category eligible for encashment across Indian companies upon resignation, retirement, or carry-forward caps.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Casual Leave (CL)</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Casual leave is often subject to use-it-or-lose-it rules and is generally not encashable under standard corporate leave policies.
                                </p>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-2">
                                <h3 className="font-bold text-slate-900 text-lg">Sick Leave (SL)</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Sick leave usually has separate carry-forward and lapse rules, and is rarely eligible for cash encashment unless mandated by specific service rules.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Earned Leave & Resignation & Retirement Scenarios */}
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <section id="earned-leave-encashment" aria-labelledby="earned-leave-title" className="space-y-3">
                            <h2 id="earned-leave-title" className="text-xl font-bold text-slate-900">Earned Leave Encashment Example</h2>
                            <p className="text-sm leading-relaxed text-slate-600">
                                If an organization allows earned leave encashment with ₹40,000 eligible salary, 25 leave days, and 30 divisor:
                            </p>
                            <p className="text-xs font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
                                Calculation: ₹40,000 ÷ 30 × 25 = <strong>₹33,333 estimated payout</strong>.
                            </p>
                        </section>

                        <section id="resignation-encashment" aria-labelledby="resignation-title" className="space-y-3">
                            <h2 id="resignation-title" className="text-xl font-bold text-slate-900">Leave Encashment on Resignation</h2>
                            <p className="text-sm leading-relaxed text-slate-600">
                                When an employee resigns, eligible unused leave is calculated and included in the Full &amp; Final (F&amp;F) settlement statement.
                            </p>
                            <p className="text-xs font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
                                Example: Basic+DA = ₹50,000, 18 leave days, 30 divisor → <strong>₹30,000 F&amp;F payout</strong>.
                            </p>
                        </section>
                    </div>

                    {/* Tax Treatment Section (Separated Payout & Exemption) */}
                    <section id="tax-treatment" aria-labelledby="tax-title" className="space-y-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                        <h2 id="tax-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Is Leave Encashment Taxable? Tax Exemption under Sec 10(10AA)
                        </h2>
                        <p className="leading-relaxed">
                            The tax treatment of leave encashment depends on the timing of encashment and employee category:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
                                <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                                    <ShieldCheck className="h-5 w-5 text-emerald-600" /> Government Employees
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Leave encashment received at retirement or superannuation by Central/State Government employees is <strong>100% fully tax-exempt</strong> under Section 10(10AA)(i).
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
                                <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                                    <ShieldCheck className="h-5 w-5 text-indigo-600" /> Non-Government Private Employees
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    For non-government employees receiving leave encashment on retirement or resignation, tax exemption under Section 10(10AA)(ii) is capped at the maximum statutory ceiling of <strong>₹25,00,000 (₹25 Lakhs)</strong> for AY 2026-27.
                                </p>
                            </div>
                        </div>

                        <div className="text-sm bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4">
                            <strong>Important Note for In-Service Encashment:</strong> Leave encashment received while you continue working (during employment) is <strong>100% fully taxable</strong> as salary income for all employees.
                        </div>
                    </section>

                    {/* How Much Is 10, 20, 30 Days Worth? */}
                    <section id="days-worth" aria-labelledby="days-worth-title" className="space-y-6">
                        <h2 id="days-worth-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            How Much Is 10, 20, or 30 Days of Leave Worth?
                        </h2>
                        <p className="leading-relaxed">
                            Assuming an eligible monthly salary of <strong className="text-slate-900">₹45,000</strong> and a <strong className="text-slate-900">30-day calculation basis</strong> (Per-day salary = ₹45,000 ÷ 30 = ₹1,500):
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-slate-200 rounded-2xl p-5 bg-white text-center space-y-2">
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">10 Days of Leave</span>
                                <div className="text-2xl font-extrabold text-slate-900">₹15,000</div>
                                <div className="text-xs text-slate-500 font-mono">₹1,500 × 10</div>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white text-center space-y-2">
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">20 Days of Leave</span>
                                <div className="text-2xl font-extrabold text-slate-900">₹30,000</div>
                                <div className="text-xs text-slate-500 font-mono">₹1,500 × 20</div>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-5 bg-white text-center space-y-2">
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">30 Days of Leave</span>
                                <div className="text-2xl font-extrabold text-slate-900">₹45,000</div>
                                <div className="text-xs text-slate-500 font-mono">₹1,500 × 30</div>
                            </div>
                        </div>
                    </section>

                    {/* Leave Encashment Examples Lookup Table */}
                    <section id="lookup-table" aria-labelledby="table-title" className="space-y-4">
                        <h2 id="table-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                            Leave Encashment Reference Table (India)
                        </h2>
                        <p className="leading-relaxed text-sm text-slate-600">
                            Illustrative calculations using a 30-day divisor across common monthly Basic + DA salary levels:
                        </p>
                        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 border-b border-slate-800">Eligible Monthly Salary</th>
                                        <th className="p-3.5 border-b border-slate-800">10 Leave Days</th>
                                        <th className="p-3.5 border-b border-slate-800">20 Leave Days</th>
                                        <th className="p-3.5 border-b border-slate-800">30 Leave Days</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                                    {encashmentExamplesTable.map((row, idx) => (
                                        <tr key={row.salary} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                                            <td className="p-3.5 font-bold text-slate-900">{row.salary}</td>
                                            <td className="p-3.5 text-slate-700">{row.d10}</td>
                                            <td className="p-3.5 text-slate-700">{row.d20}</td>
                                            <td className="p-3.5 font-bold text-emerald-600">{row.d30}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Leave Encashment and Full & Final Settlement & CTC */}
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <section id="fnf-settlement" aria-labelledby="fnf-title" className="space-y-3">
                            <h2 id="fnf-title" className="text-xl font-bold text-slate-900">Leave Encashment in Full &amp; Final Settlement</h2>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Leave encashment is often included in the employee&apos;s full-and-final settlement upon exit. A typical final settlement includes salary payable, leave encashment, gratuity, variable pay, reimbursements, less deductions and notice adjustments.
                            </p>
                        </section>

                        <section id="leave-and-ctc" aria-labelledby="ctc-title" className="space-y-3">
                            <h2 id="ctc-title" className="text-xl font-bold text-slate-900">Leave Encashment and CTC</h2>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Leave encashment is not the same as CTC. CTC represents overall annual employer cost, while leave encashment is a payout associated with eligible unused leave.
                            </p>
                        </section>
                    </div>

                    {/* Visible FAQ Accordion */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About Leave Encashment
                            </h2>
                            <p className="text-sm text-slate-600">
                                Answers to common questions regarding earned leave encashment, 26 vs 30 divisors, tax limits, and resignation payouts.
                            </p>
                        </div>

                        <ToolFAQ faqs={faqs} />
                    </section>

                    {/* Interconnected HR & Payroll Calculators Cluster Grid (Exact Order requested) */}
                    <section id="related-tools" aria-labelledby="related-tools-title" className="space-y-6 pt-8 border-t border-slate-200">
                        <div className="space-y-2">
                            <h2 id="related-tools-title" className="text-2xl font-bold text-slate-900">
                                Related HR &amp; Payroll Calculators
                            </h2>
                            <p className="text-sm text-slate-600">
                                Explore HR Niti&apos;s interconnected India HR and payroll calculator hub:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Estimate gratuity payout based on last drawn salary & service" },
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
                            Leave Encashment Calculator Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s calculator uses the standard formula: Leave Encashment = (Eligible Monthly Salary ÷ Dividing Factor) × Eligible Leave Days, where the eligible salary and divisor are determined according to the selected calculation method. The calculator is intended to provide an estimate. Final leave encashment should be verified using the employer&apos;s approved leave balance, applicable salary components, company policy, and relevant legal or service rules.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                            <div>
                                <span className="font-bold text-slate-800">Last Updated:</span> August 2026
                            </div>
                            <div>
                                <span className="font-bold text-slate-800">Tax Exemption Ceiling:</span> ₹25 Lakhs (Sec 10(10AA))
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
