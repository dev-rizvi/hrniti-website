import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, BookOpen, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import { glossaryTerms } from "@/lib/glossaryData";

const BASE_URL = "https://www.hrniti.com";

export function generateStaticParams() {
    return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const term = glossaryTerms.find((t) => t.slug === slug);
    if (!term) return {};

    const url = `${BASE_URL}/resources/hr-glossary/${term.slug}`;
    const title = `What is ${term.term}? Definition, Meaning & HR Importance | HR Niti`;
    const description = `${term.term}: ${term.shortDef} Learn full definition, why it matters in HR management and statutory compliance.`;

    return {
        title: {
            absolute: title,
        },
        description,
        keywords: `${term.term}, what is ${term.term}, ${term.term} definition, ${term.term} HR meaning, HR glossary ${term.term}, human resources ${term.term}`,
        alternates: { canonical: url },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: [{ url: `${BASE_URL}/assets/img/seo/hr-glossary-og.jpg`, width: 1200, height: 630, alt: `What is ${term.term}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${BASE_URL}/assets/img/seo/hr-glossary-og.jpg`],
        },
    };
}

// Helper to find related tools/features based on term keywords
function getRelatedSolutionLink(termSlug: string, termText: string) {
    const txt = (termSlug + " " + termText).toLowerCase();
    if (txt.includes("pay") || txt.includes("salary") || txt.includes("allowance") || txt.includes("bonus") || txt.includes("tax") || txt.includes("income")) {
        return { name: "HR Niti Payroll Software", href: "/payroll-software", toolName: "Free Payslip Generator", toolHref: "/tools/payslip-generator" };
    }
    if (txt.includes("leave") || txt.includes("accrued") || txt.includes("awol") || txt.includes("absent")) {
        return { name: "HR Niti Leave Management System", href: "/leave-management", toolName: "Leave Encashment Calculator", toolHref: "/tools/leave-encashment-calculator" };
    }
    if (txt.includes("appraisal") || txt.includes("rating") || txt.includes("feedback") || txt.includes("360") || txt.includes("competency")) {
        return { name: "HR Niti Performance Management", href: "/employee-performance-management-software", toolName: "Salary Hike Calculator", toolHref: "/tools/salary-hike-calculator" };
    }
    if (txt.includes("gratuity") || txt.includes("exit") || txt.includes("settlement") || txt.includes("absconding")) {
        return { name: "Full & Final Settlement Software", href: "/full-and-final-settlement", toolName: "Gratuity Calculator", toolHref: "/tools/gratuity-calculator" };
    }
    return { name: "HR Niti Employee Management HRMS", href: "/employee-management", toolName: "All HR Calculators", toolHref: "/tools" };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const term = glossaryTerms.find((t) => t.slug === slug);
    if (!term) notFound();

    const url = `${BASE_URL}/resources/hr-glossary/${term.slug}`;
    const solution = getRelatedSolutionLink(term.slug, term.term);

    const related = (term.related || [])
        .map((r) => glossaryTerms.find((t) => t.slug === r))
        .filter((t): t is NonNullable<typeof t> => Boolean(t));

    // Fallback related terms: same letter, excluding self
    const sameLetter = glossaryTerms.filter((t) => t.letter === term.letter && t.slug !== term.slug).slice(0, 4);
    const relatedToShow = related.length > 0 ? related : sameLetter;

    // Structured FAQ array for Schema & UI
    const termFaqs = [
        {
            q: `What is ${term.term}?`,
            a: `${term.shortDef} ${term.definition}`,
        },
        {
            q: `Why is ${term.term} important in Human Resources?`,
            a: `${term.whyItMatters}`,
        },
        {
            q: `How is ${term.term} managed in modern HR software?`,
            a: `Modern HRMS platforms like HR Niti automate tracking, reporting, and compliance for ${term.term}, removing manual spreadsheet errors and streamlining HR workflows.`,
        },
    ];

    const definedTermSchema = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: term.term,
        description: term.shortDef,
        inDefinedTermSet: `${BASE_URL}/resources/hr-glossary`,
        url,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "HR Glossary", item: `${BASE_URL}/resources/hr-glossary` },
            { "@type": "ListItem", position: 3, name: term.term, item: url },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: termFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <Navbar />

            {/* Header Section */}
            <header className="bg-gradient-to-br from-slate-900 via-emerald-950 to-indigo-950 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li><Link href="/resources/hr-glossary" className="hover:text-emerald-400 transition-colors">HR Glossary</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li className="font-semibold text-slate-200" aria-current="page">{term.term}</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <BookOpen className="h-3.5 w-3.5" /> HR Terms Dictionary
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        What is {term.term}?
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                        {term.shortDef}
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12 text-slate-800">
                    
                    {/* AEO Quick Definition Answer Box (Featured Snippet Optimization) */}
                    <section aria-labelledby="aeo-summary-heading" className="bg-emerald-50/80 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
                        <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
                            <Sparkles className="h-4 w-4 text-emerald-600" /> Quick Definition Summary (AEO)
                        </div>
                        <h2 id="aeo-summary-heading" className="text-xl font-bold text-slate-900 leading-snug">
                            {term.term} Definition
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                            <strong>{term.term}</strong>: {term.shortDef} {term.definition}
                        </p>
                    </section>

                    {/* Section 1: In-Depth Definition */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            Detailed Overview of {term.term}
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed">
                            {term.definition}
                        </p>
                    </section>

                    {/* Section 2: Why It Matters in HR */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            Why {term.term} Matters for HR &amp; Businesses
                        </h2>
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
                            <p className="text-sm text-slate-700 leading-relaxed font-normal">
                                {term.whyItMatters}
                            </p>
                            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Essential for HR Compliance</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Improves Workplace Transparency</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Directly Impacts Employee Experience</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: How HR Software Helps */}
                    <section className="space-y-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="h-4 w-4" /> HR Niti Automation &amp; Solutions
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                            Automating {term.term} with Modern HRMS Software
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Managing {term.term.toLowerCase()} manually using spreadsheets leads to human error, compliance risk, and wasted administrative hours. HR Niti provides modern, automated HRMS tools to streamline workforce management.
                        </p>
                        <div className="pt-3 flex flex-wrap items-center gap-3">
                            <Link
                                href={solution.href}
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md"
                            >
                                Explore {solution.name} <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                            <Link
                                href={solution.toolHref}
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold rounded-xl transition-all border border-white/10"
                            >
                                Try {solution.toolName} <FileText className="h-3.5 w-3.5 text-cyan-300" />
                            </Link>
                        </div>
                    </section>

                    {/* Section 4: Frequently Asked Questions (FAQ UI) */}
                    <section className="space-y-6 pt-4">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                <HelpCircle className="h-6 w-6 text-emerald-600" /> Frequently Asked Questions
                            </h2>
                            <p className="text-xs text-slate-500">Common questions about {term.term} in HR management.</p>
                        </div>

                        <div className="space-y-4">
                            {termFaqs.map((faq, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                                    <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Related Glossary Terms */}
                    {relatedToShow.length > 0 && (
                        <section className="space-y-4 pt-6 border-t border-slate-200">
                            <h2 className="text-lg font-bold text-slate-900">
                                Related HR Terms
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {relatedToShow.map((r) => (
                                    <Link
                                        key={r.slug}
                                        href={`/resources/hr-glossary/${r.slug}`}
                                        className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 px-4 py-2 rounded-xl transition-all"
                                    >
                                        {r.term}
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Back Link */}
                    <div className="pt-4 border-t border-slate-200">
                        <Link
                            href="/resources/hr-glossary"
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            <ArrowRight className="h-3.5 w-3.5 rotate-180" /> Back to Full HR Glossary Dictionary
                        </Link>
                    </div>

                </div>
            </article>

            <CTASection />
            <Footer />
        </main>
    );
}
