import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import { glossaryTerms, glossaryLetters } from "@/lib/glossaryData";

const BASE_URL = "https://www.hrniti.com";

export const metadata = {
    title: "HR Glossary — HR & Payroll Terms Explained",
    description:
        "A complete A-Z glossary of HR, payroll, and compliance terms — from Absconding to Wrongful Termination — explained in plain language by HR Niti.",
    keywords: "HR glossary, HR terms, payroll terms India, HR terminology, HRMS glossary, HR dictionary",
    alternates: { canonical: `${BASE_URL}/resources/hr-glossary` },
    openGraph: {
        title: "HR Glossary — HR & Payroll Terms Explained | HR Niti",
        description: "A complete A-Z glossary of HR, payroll, and compliance terms explained in plain language.",
        url: `${BASE_URL}/resources/hr-glossary`,
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti HR Glossary" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HR Glossary — HR & Payroll Terms Explained | HR Niti",
        description: "A complete A-Z glossary of HR, payroll, and compliance terms explained in plain language.",
        images: ["/og-default.png"],
    },
};

export default function HRGlossaryPage() {
    const grouped = glossaryLetters.map((letter) => ({
        letter,
        terms: glossaryTerms.filter((t) => t.letter === letter).sort((a, b) => a.term.localeCompare(b.term)),
    }));

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "DefinedTermSet",
                        name: "HR Niti HR Glossary",
                        description: "A glossary of HR, payroll, and compliance terms.",
                        url: `${BASE_URL}/resources/hr-glossary`,
                        hasDefinedTerm: glossaryTerms.map((t) => ({
                            "@type": "DefinedTerm",
                            name: t.term,
                            description: t.shortDef,
                            url: `${BASE_URL}/resources/hr-glossary/${t.slug}`,
                        })),
                    }),
                }}
            />

            <Navbar />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-900 to-indigo-950 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium tracking-wide text-cyan-100">Resources</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">HR Glossary</h1>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        HR terminology explained in plain language. Whether you're new to HR or a seasoned
                        professional, use this glossary as a quick reference for the words and phrases used every
                        day in HR, payroll, and compliance.
                    </p>
                </div>
            </section>

            {/* A-Z Jump Nav */}
            <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap justify-center gap-1.5">
                        {glossaryLetters.map((letter) => (
                            <a
                                key={letter}
                                href={`#letter-${letter}`}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold text-slate-600 hover:bg-emerald-600 hover:text-white transition-colors"
                            >
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Term Groups */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    {grouped.map((group) => (
                        <div key={group.letter} id={`letter-${group.letter}`} className="mb-12 scroll-mt-40">
                            <h2 className="text-2xl font-bold text-emerald-600 border-b border-slate-100 pb-3 mb-5">
                                {group.letter}
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                {group.terms.map((t) => (
                                    <Link
                                        key={t.slug}
                                        href={`/resources/hr-glossary/${t.slug}`}
                                        className="text-slate-700 hover:text-emerald-600 hover:underline text-sm py-1.5 transition-colors"
                                    >
                                        {t.term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
