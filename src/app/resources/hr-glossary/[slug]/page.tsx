import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, BookOpen } from "lucide-react";
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
    const title = `What is ${term.term}? — HR Glossary`;

    return {
        title,
        description: term.shortDef,
        alternates: { canonical: url },
        openGraph: {
            title: `${title} | HR Niti`,
            description: term.shortDef,
            url,
            type: "article",
            images: [{ url: "/og-default.png", width: 1200, height: 630, alt: term.term }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | HR Niti`,
            description: term.shortDef,
            images: ["/og-default.png"],
        },
    };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const term = glossaryTerms.find((t) => t.slug === slug);
    if (!term) notFound();

    const url = `${BASE_URL}/resources/hr-glossary/${term.slug}`;
    const related = (term.related || [])
        .map((r) => glossaryTerms.find((t) => t.slug === r))
        .filter((t): t is NonNullable<typeof t> => Boolean(t));

    // Fallback related terms: same letter, excluding self
    const sameLetter = glossaryTerms.filter((t) => t.letter === term.letter && t.slug !== term.slug).slice(0, 4);
    const relatedToShow = related.length > 0 ? related : sameLetter;

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "DefinedTerm",
                            name: term.term,
                            description: term.definition,
                            url,
                            inDefinedTermSet: `${BASE_URL}/resources/hr-glossary`,
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                                { "@type": "ListItem", position: 2, name: "HR Glossary", item: `${BASE_URL}/resources/hr-glossary` },
                                { "@type": "ListItem", position: 3, name: term.term, item: url },
                            ],
                        },
                    ]),
                }}
            />

            <Navbar />

            <section className="bg-gradient-to-br from-emerald-900 to-indigo-950 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href="/resources/hr-glossary" className="hover:text-white transition-colors">HR Glossary</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-slate-200">{term.term}</span>
                    </nav>

                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
                        <BookOpen className="h-3.5 w-3.5 text-cyan-300" />
                        <span className="text-sm font-medium tracking-wide text-cyan-100">HR Glossary</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{term.term}</h1>
                    <p className="text-lg text-slate-300 leading-relaxed">{term.shortDef}</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="prose-content mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-3">Definition</h2>
                        <p className="text-slate-600 leading-relaxed">{term.definition}</p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 mb-12">
                        <h2 className="text-lg font-bold text-emerald-800 mb-2">Why It Matters</h2>
                        <p className="text-emerald-900/80 text-sm leading-relaxed">{term.whyItMatters}</p>
                    </div>

                    {relatedToShow.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-lg font-bold text-slate-900 mb-4">Related Terms</h2>
                            <div className="flex flex-wrap gap-2">
                                {relatedToShow.map((r) => (
                                    <Link
                                        key={r.slug}
                                        href={`/resources/hr-glossary/${r.slug}`}
                                        className="text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 px-4 py-2 rounded-full transition-colors"
                                    >
                                        {r.term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <Link
                        href="/resources/hr-glossary"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                        <ArrowRight className="h-4 w-4 rotate-180" /> Back to Full Glossary
                    </Link>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
