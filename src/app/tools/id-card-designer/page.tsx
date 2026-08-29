import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, IdCard, Layers, CreditCard, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import IDCardDesigner from "@/components/tools/IDCardDesigner";
import ToolFAQ from "@/components/tools/ToolFAQ";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/tools/id-card-designer`;
const OG_IMAGE_URL = `${BASE_URL}/assets/img/seo/id-card-designer-og.jpg`;

export const metadata: Metadata = {
    title: {
        absolute: "Free Employee ID Card Maker Online – Design & Download PDF ID Badges | HR Niti",
    },
    description: "Create professional employee ID cards online for free with HR Niti. Upload logo & photo, pick corporate templates, customize details & download print-ready CR80 PDF ID cards.",
    keywords: "employee ID card maker, free ID card designer online, printable employee ID card template, corporate ID card generator, download ID badge PDF, staff ID card maker India",
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
        title: "Free Employee ID Card Maker Online – Design & Download PDF ID Badges | HR Niti",
        description: "Design professional employee ID cards online for free with HR Niti. Download print-ready CR80 standard PDF badges instantly.",
        url: PAGE_URL,
        images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Free Employee ID Card Maker Online – HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Employee ID Card Maker Online – Design & Download PDF ID Badges | HR Niti",
        description: "Design professional employee ID cards online for free. Download CR80 PDF badges instantly.",
        images: [OG_IMAGE_URL],
    },
};

const faqs = [
    {
        q: "Is HR Niti's Employee ID Card Maker free to use?",
        a: "Yes! HR Niti's Employee ID Card Maker is 100% free. You can design, customize, preview, and download unlimited high-resolution PDF identity badges without any sign-up, watermark, or hidden fees.",
    },
    {
        q: "What dimensions are the downloaded ID card PDFs?",
        a: "Downloaded ID cards adhere to the international CR80 standard (85.6 mm x 54 mm / 3.375 in x 2.125 in), which is the standard size for corporate identity cards, PVC badges, lanyards, and wallet sleeves worldwide.",
    },
    {
        q: "How do I print the downloaded ID card PDF?",
        a: "You can print the downloaded PDF directly on standard paper, cardstock, photo paper using home printers, or print onto PVC plastic cards using thermal ID card printers (such as Zebra, Fargo, Evolis, or Magicard).",
    },
    {
        q: "Can I upload custom employee photos and company logos?",
        a: "Yes! You can upload custom PNG or JPG company logos and employee passport photos directly from your computer or mobile device.",
    },
    {
        q: "What design options and orientations are available?",
        a: "You can choose between Vertical (Portrait) and Horizontal (Landscape) card layouts, select from multiple corporate color themes, and generate both Front and Back sides of the identity card.",
    },
    {
        q: "What information should be included on an employee ID card?",
        a: "A standard employee ID card includes Company Name & Logo, Employee Passport Photo, Full Name, Designation, Department, Employee ID, Joining Date, Blood Group, Emergency Contact Number, Office Address, and an Authorized Signature line.",
    },
    {
        q: "Is my employee data saved on any server?",
        a: "No! All data entry, image processing, and PDF generation happen 100% locally inside your web browser. HR Niti never stores, transmits, or saves your company or employee personal information on any server.",
    },
    {
        q: "Can I use this tool for school, college, or event identity badges?",
        a: "Yes! While optimized for corporate employees, HR Niti's ID Card Maker works great for schools, colleges, non-profit organizations, security staff, contractors, and event attendee badges.",
    },
];

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HR Niti Free Employee ID Card Maker",
    url: PAGE_URL,
    description: "Create professional employee ID cards online for free with HR Niti. Upload logo & photo, pick corporate templates, customize details & download print-ready CR80 PDF ID cards.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript-enabled web browser",
    isAccessibleForFree: true,
    featureList: [
        "Instant online ID card designer",
        "Multiple corporate color themes",
        "Vertical and Horizontal CR80 standard layouts",
        "Company logo and employee photo upload",
        "Front and Back side card preview",
        "High-resolution PDF export",
    ],
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
    },
    author: {
        "@type": "Organization",
        name: "HR Niti",
        url: BASE_URL,
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "Employee ID Card Maker", item: PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
        },
    })),
};

export default function IDCardDesignerPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="print:hidden">
                <Navbar />
            </div>

            {/* Top Breadcrumb & Page Header Header */}
            <header className="bg-slate-900 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-7xl mx-auto space-y-4">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center space-y-0 text-xs text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li><Link href="/tools" className="hover:text-emerald-400 transition-colors">Tools</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li className="font-semibold text-slate-200" aria-current="page">Employee ID Card Maker</li>
                        </ol>
                    </nav>

                    <div className="space-y-3 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="h-3.5 w-3.5" /> Free Printable Employee ID Badge Maker
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                            Free Employee ID Card Maker Online
                        </h1>
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                            Design and download print-ready professional staff identity cards online. Upload company logo, employee passport photo, select corporate color themes, customize vertical or horizontal layouts, and export CR80 standard PDF badges instantly.
                        </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Free &amp; Unlimited Downloads</div>
                        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> CR80 Standard Dimensions (85.6mm x 54mm)</div>
                        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Private Client-Side PDF Export</div>
                    </div>
                </div>
            </header>

            {/* Main Interactive Tool Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                <IDCardDesigner />

                {/* Educational Content & Guides (SEO / AEO / GEO) */}
                <div className="mt-16 space-y-12 max-w-5xl mx-auto text-slate-800">
                    
                    {/* AEO Direct Answer Summary Box */}
                    <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
                        <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-emerald-600" /> Quick Summary: How to Create an Employee ID Card Online
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            To create an employee ID card online for free with HR Niti: Enter company name, tagline, office address, and upload your company logo. Fill in employee details including Full Name, Designation, Department, Employee ID, Joining Date, Blood Group, Emergency Contact, and upload an employee photo. Select a corporate color theme and pick between Vertical (Portrait) or Horizontal (Landscape) layout. Click <strong>&apos;Download Print-Ready CR80 ID Card PDF&apos;</strong> to get a high-resolution 2-page PDF file ready for paper or PVC plastic card printing.
                        </p>
                    </div>

                    {/* Section 1: Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">
                            What Is an Employee ID Card Maker?
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            An Employee ID Card Maker is an online web tool designed for HR managers, startup founders, school administrators, and business owners to create official staff identity badges. It eliminates the need for expensive graphic design software by providing pre-built corporate templates, automatic layout alignment, photo upload, company branding, and instant CR80 standard size PDF downloads.
                        </p>
                    </section>

                    {/* Section 2: Importance */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Why Are Employee ID Cards Important for Organizations?
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Official identity badges play a vital role in workplace security, access control, branding, and professional identity. Key benefits include:
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                            <li className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                                <span className="font-bold text-slate-900 block">🔒 Workplace Security &amp; Access Control</span>
                                <span className="text-xs text-slate-600">Verify staff identity at entry gates, turnstiles, and restricted security areas easily.</span>
                            </li>
                            <li className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                                <span className="font-bold text-slate-900 block">🏢 Corporate Branding</span>
                                <span className="text-xs text-slate-600">Presents a cohesive, trustworthy image when employees meet clients or attend conferences.</span>
                            </li>
                            <li className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                                <span className="font-bold text-slate-900 block">🚑 Emergency Information</span>
                                <span className="text-xs text-slate-600">Displays critical details like Blood Group and Emergency Contact for quick access in medical situations.</span>
                            </li>
                            <li className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                                <span className="font-bold text-slate-900 block">⚡ Digital Attendance &amp; QR Codes</span>
                                <span className="text-xs text-slate-600">Incorporate QR codes for seamless HRMS attendance logging and door access systems.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3: Standard Dimensions */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Standard ID Card Dimensions (CR80 Standard)
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            The standard size for corporate identity cards, badges, and credit cards worldwide is the CR80 specification:
                        </p>
                        <div className="bg-slate-900 text-white rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center">
                            <div className="space-y-1 border-r border-slate-800 last:border-0">
                                <span className="text-xs text-emerald-400 font-bold uppercase">Width</span>
                                <p className="text-xl font-extrabold">85.6 mm</p>
                                <span className="text-[10px] text-slate-400">(3.375 inches)</span>
                            </div>
                            <div className="space-y-1 border-r border-slate-800 last:border-0">
                                <span className="text-xs text-emerald-400 font-bold uppercase">Height</span>
                                <p className="text-xl font-extrabold">53.98 mm</p>
                                <span className="text-[10px] text-slate-400">(2.125 inches)</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-emerald-400 font-bold uppercase">Resolution</span>
                                <p className="text-xl font-extrabold">300 DPI</p>
                                <span className="text-[10px] text-slate-400">High-Res Print Quality</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Key Elements */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Key Elements of a Compliant Employee ID Card
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="border border-slate-200 rounded-2xl p-5 space-y-3 bg-slate-50/50">
                                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                                    <IdCard className="h-5 w-5 text-emerald-600" /> Front Side Elements
                                </h3>
                                <ul className="space-y-2 text-slate-600 text-xs list-disc list-inside">
                                    <li>Company Name &amp; High-Res Logo</li>
                                    <li>Employee Passport Photograph</li>
                                    <li>Employee Full Name &amp; Designation</li>
                                    <li>Department Name &amp; Employee ID Code</li>
                                    <li>Date of Joining / Issue Date</li>
                                </ul>
                            </div>
                            <div className="border border-slate-200 rounded-2xl p-5 space-y-3 bg-slate-50/50">
                                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                                    <Layers className="h-5 w-5 text-emerald-600" /> Back Side Elements
                                </h3>
                                <ul className="space-y-2 text-slate-600 text-xs list-disc list-inside">
                                    <li>Emergency Contact Number &amp; Blood Group</li>
                                    <li>Registered Office Address &amp; Contact Email</li>
                                    <li>QR Code / Barcode for digital scanning</li>
                                    <li>Authorized Signatory Line &amp; Return Instructions</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQs Accordion Section */}
                    <section id="faq" aria-labelledby="faq-title" className="space-y-6 pt-6 border-t border-slate-200">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-slate-900">
                                Frequently Asked Questions About Employee ID Cards
                            </h2>
                            <p className="text-sm text-slate-600">
                                Common questions about ID card design templates, printing instructions, CR80 standards, and security compliance.
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
                                Explore HR Niti&apos;s interconnected India HR and payroll tools hub:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "Payslip Generator", href: "/tools/payslip-generator", desc: "Generate professional salary slips PDF" },
                                { title: "In-Hand Salary Calculator", href: "/tools/in-hand-salary-calculator", desc: "Calculate monthly net take-home salary" },
                                { title: "CTC Calculator", href: "/tools/ctc-calculator", desc: "Calculate annual Cost to Company package breakup" },
                                { title: "EPF Calculator", href: "/tools/pf-calculator", desc: "Calculate monthly Provident Fund contributions & maturity" },
                                { title: "Salary Hike Calculator", href: "/tools/salary-hike-calculator", desc: "Calculate increment % & new CTC package" },
                                { title: "Gratuity Calculator", href: "/tools/gratuity-calculator", desc: "Code on Social Security 2020 gratuity estimation" },
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
                            Employee ID Card Maker Methodology
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600">
                            HR Niti&apos;s Employee ID Card Maker formats input details into standard CR80 vector proportions (85.6 mm x 54 mm). PDF generation is performed client-side using JavaScript vector drawing primitives. No employee photos, corporate logos, or personal data are uploaded or saved to any external servers.
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
