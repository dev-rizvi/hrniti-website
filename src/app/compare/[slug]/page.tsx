import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, ArrowRight, Table, XCircle, Check, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import { comparisonsData } from "@/lib/comparisonsData";

const BASE_URL = "https://www.hrniti.com";

export function generateStaticParams() {
    return comparisonsData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const item = comparisonsData.find((c) => c.slug === slug || c.slugAlt === slug);
    if (!item) return {};

    const url = `${BASE_URL}/compare/${item.slug}`;

    return {
        title: {
            absolute: item.title,
        },
        description: item.metaDescription,
        keywords: item.keywords,
        alternates: { canonical: url },
        robots: { index: true, follow: true, "max-image-preview": "large" },
        openGraph: {
            type: "article",
            title: item.title,
            description: item.metaDescription,
            url,
            images: [{ url: `${BASE_URL}/assets/img/seo/hr-comparison-og.jpg`, width: 1200, height: 630, alt: item.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: item.title,
            description: item.metaDescription,
            images: [`${BASE_URL}/assets/img/seo/hr-comparison-og.jpg`],
        },
    };
}

export default async function ComparisonSinglePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = comparisonsData.find((c) => c.slug === slug || c.slugAlt === slug);
    if (!item) notFound();

    const url = `${BASE_URL}/compare/${item.slug}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: item.title,
        description: item.metaDescription,
        url,
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
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Comparisons", item: `${BASE_URL}/compare` },
            { "@type": "ListItem", position: 3, name: `HR Niti vs ${item.competitorName}`, item: url },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: item.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <Navbar />

            {/* HEADER */}
            <header className="bg-gradient-to-br from-slate-900 via-emerald-950 to-indigo-950 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li><Link href="/compare" className="hover:text-emerald-400 transition-colors">Comparisons</Link></li>
                            <li><ChevronRight className="h-3 w-3 text-slate-600" /></li>
                            <li className="font-semibold text-slate-200" aria-current="page">HR Niti vs {item.competitorName}</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <Table className="h-3.5 w-3.5" /> Objective Feature &amp; Pricing Comparison
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        HR Niti vs {item.competitorName}
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                        {item.heroSubtitle}
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    
                    {/* AEO Executive Summary Box */}
                    <section aria-labelledby="comparison-summary-heading" className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
                        <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
                            <Sparkles className="h-4 w-4 text-emerald-600" /> Executive Summary (AEO Answer Box)
                        </div>
                        <h2 id="comparison-summary-heading" className="text-xl font-bold text-slate-900">
                            HR Niti vs {item.competitorName} Summary
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                            {item.executiveSummary}
                        </p>
                    </section>

                    {/* Feature Comparison Table */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            Detailed Feature Comparison Matrix
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Compare HR Niti and {item.competitorName} across key HRMS, payroll, attendance, and AI functionality:
                        </p>

                        <div className="border border-slate-200 rounded-2xl overflow-x-auto shadow-sm">
                            <table className="w-full text-xs sm:text-sm border-collapse min-w-[550px]">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-bold text-left">
                                        <th className="py-3.5 px-4 w-2/5">Feature / Capability</th>
                                        <th className="py-3.5 px-3 text-center bg-emerald-800 w-1/4">HR Niti</th>
                                        <th className="py-3.5 px-3 text-center w-1/4">{item.competitorName}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.featuresTable.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 last:border-0 odd:bg-slate-50/50 hover:bg-slate-100/50">
                                            <td className="py-3 px-4 font-semibold text-slate-800">
                                                <div>{row.name}</div>
                                                <div className="text-[10.5px] text-slate-500 font-normal">{row.notes}</div>
                                            </td>
                                            <td className="py-3 px-3 text-center font-bold text-emerald-700 bg-emerald-50/60">
                                                {typeof row.hrniti === "boolean" ? (row.hrniti ? <Check className="h-5 w-5 text-emerald-600 mx-auto" /> : <XCircle className="h-5 w-5 text-slate-300 mx-auto" />) : row.hrniti}
                                            </td>
                                            <td className="py-3 px-3 text-center font-semibold text-slate-700">
                                                {typeof row.competitor === "boolean" ? (row.competitor ? <Check className="h-5 w-5 text-slate-600 mx-auto" /> : <XCircle className="h-5 w-5 text-slate-300 mx-auto" />) : row.competitor}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Side-by-Side Pros & Highlights */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                            Key Strengths &amp; Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 border border-emerald-200/80 rounded-2xl p-6 space-y-3">
                                <h3 className="font-bold text-slate-900 text-base text-emerald-800 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-emerald-600" /> Why Choose HR Niti
                                </h3>
                                <ul className="space-y-2 text-xs text-slate-700">
                                    {item.whyChooseHRNiti.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                                    <Table className="h-5 w-5 text-slate-600" /> Why Choose {item.competitorName}
                                </h3>
                                <ul className="space-y-2 text-xs text-slate-700">
                                    {item.whyChooseCompetitor.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Comparison */}
                    <section className="space-y-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            <DollarSign className="h-4 w-4" /> Pricing &amp; Value Analysis
                        </div>
                        <h2 className="text-xl font-bold text-white">
                            Pricing Comparison: HR Niti vs {item.competitorName}
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 space-y-1">
                                <span className="text-xs font-bold text-emerald-400 uppercase">HR Niti Pricing</span>
                                <p className="text-base font-extrabold text-white">{item.pricingOverview.hrnitiPrice}</p>
                            </div>
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 space-y-1">
                                <span className="text-xs font-bold text-slate-400 uppercase">{item.competitorName} Pricing</span>
                                <p className="text-base font-extrabold text-slate-200">{item.pricingOverview.competitorPrice}</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed pt-2">
                            {item.pricingOverview.details}
                        </p>
                    </section>

                    {/* FAQs Section */}
                    <section className="space-y-6 pt-4">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <HelpCircle className="h-6 w-6 text-emerald-600" /> Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {item.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                                    <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Other Comparisons Navigation */}
                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-lg font-bold text-slate-900">
                            Explore Other HRMS Comparisons
                        </h2>
                        <div className="flex flex-wrap gap-2 text-xs font-bold">
                            {comparisonsData
                                .filter((c) => c.slug !== item.slug)
                                .map((c) => (
                                    <Link
                                        key={c.slug}
                                        href={`/compare/${c.slug}`}
                                        className="text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 px-4 py-2 rounded-xl transition-all"
                                    >
                                        HR Niti vs {c.competitorName}
                                    </Link>
                                ))}
                        </div>
                    </section>

                </div>
            </article>

            <CTASection />
            <Footer />
        </main>
    );
}
