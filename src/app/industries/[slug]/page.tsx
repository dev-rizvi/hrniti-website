import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import IndustryDetailHero from "@/components/industries/IndustryDetailHero";
import IndustryPainPoints from "@/components/industries/IndustryPainPoints";
import IndustrySubSegments from "@/components/industries/IndustrySubSegments";
import IndustryBenefits from "@/components/industries/IndustryBenefits";
import IndustryProcessWorkflow from "@/components/industries/IndustryProcessWorkflow";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import { industries, getIndustryBySlug } from "@/lib/industriesData";

const BASE_URL = "https://www.hrniti.com";

export function generateStaticParams() {
    const paramsSet = new Set<string>();
    industries.forEach((ind) => {
        paramsSet.add(ind.slug);
        if (ind.aliases) {
            ind.aliases.forEach((alias) => paramsSet.add(alias));
        }
    });
    return Array.from(paramsSet).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) return {};

    const canonicalUrl = `${BASE_URL}/industries/${industry.slug}`;

    return {
        title: industry.metaTitle,
        description: industry.metaDescription,
        keywords: industry.keywords,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: `${industry.metaTitle} | HR Niti`,
            description: industry.metaDescription,
            url: canonicalUrl,
            type: "website",
            images: [{ url: "/og-default.png", width: 1200, height: 630, alt: `HR Niti for ${industry.title}` }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${industry.metaTitle} | HR Niti`,
            description: industry.metaDescription,
            images: ["/og-default.png"],
        },
    };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) notFound();

    const url = `${BASE_URL}/industries/${industry.slug}`;

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                                { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE_URL}/industries` },
                                { "@type": "ListItem", position: 3, name: industry.title, item: url },
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: industry.faqs.map((faq) => ({
                                "@type": "Question",
                                name: faq.q,
                                acceptedAnswer: { "@type": "Answer", text: faq.a },
                            })),
                        },
                    ])
                }}
            />

            <Navbar />
            <IndustryDetailHero industry={industry} />
            <IndustryPainPoints industry={industry} />
            <IndustrySubSegments industry={industry} />
            <IndustryBenefits industry={industry} />
            <IndustryProcessWorkflow industryTitle={industry.title} />
            <IndustryFAQ title={industry.title} faqs={industry.faqs} />
            <CTASection />
            <Footer />
        </main>
    );
}
