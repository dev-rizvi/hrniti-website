import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import GratuityCalculator from "@/components/tools/GratuityCalculator";
import LeaveEncashmentCalculator from "@/components/tools/LeaveEncashmentCalculator";
import SalaryHikeCalculator from "@/components/tools/SalaryHikeCalculator";
import ToolFAQ from "@/components/tools/ToolFAQ";
import { tools } from "@/lib/toolsData";

const BASE_URL = "https://www.hrniti.com";

const calculators: Record<string, React.ComponentType> = {
    "gratuity-calculator": GratuityCalculator,
    "leave-encashment-calculator": LeaveEncashmentCalculator,
    "salary-hike-calculator": SalaryHikeCalculator,
};

export function generateStaticParams() {
    return tools.filter((t) => t.available).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug && t.available);
    if (!tool) return {};

    const url = `${BASE_URL}/tools/${tool.slug}`;
    return {
        title: tool.metaTitle,
        description: tool.metaDescription,
        keywords: tool.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: `${tool.metaTitle} | HR Niti`,
            description: tool.metaDescription,
            url,
            type: "website",
            images: [{ url: "/og-default.png", width: 1200, height: 630, alt: tool.name }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${tool.metaTitle} | HR Niti`,
            description: tool.metaDescription,
            images: ["/og-default.png"],
        },
    };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug && t.available);
    if (!tool) notFound();

    const CalculatorComponent = calculators[tool.slug];
    const url = `${BASE_URL}/tools/${tool.slug}`;

    const schemas: object[] = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
                { "@type": "ListItem", position: 3, name: tool.name, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: tool.name,
            description: tool.metaDescription,
            url,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        },
    ];
    if (tool.faqs && tool.faqs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tool.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
        });
    }
    schemas.push({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to use the ${tool.name}`,
        description: tool.metaDescription,
        step: [
            { "@type": "HowToStep", position: 1, name: "Enter your details", text: "Fill in the input fields the calculator asks for — no sign-up required." },
            { "@type": "HowToStep", position: 2, name: "Get an instant result", text: "The calculation updates automatically as you type, using the current statutory formula." },
            { "@type": "HowToStep", position: 3, name: "Use or share the result", text: "Copy the figure into your records, or talk to HR Niti about automating this calculation for your whole team." },
        ],
    });

    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

            <Navbar />

            <section className="bg-gradient-to-br from-emerald-900 to-indigo-950 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-slate-200">{tool.name}</span>
                    </nav>

                    {tool.badge && (
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
                            <span className="text-sm font-medium tracking-wide text-cyan-100">{tool.badge}</span>
                        </div>
                    )}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{tool.name}</h1>
                    <p className="text-lg text-slate-300 leading-relaxed">{tool.intro || tool.shortDesc}</p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    {CalculatorComponent && <CalculatorComponent />}
                </div>
            </section>

            {tool.sections && tool.sections.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-10">
                        {tool.sections.map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">{section.heading}</h2>
                                <p className="text-slate-600 leading-relaxed">{section.body}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {tool.faqs && tool.faqs.length > 0 && (
                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <ToolFAQ faqs={tool.faqs} />
                    </div>
                </section>
            )}

            <section className="py-10 bg-white text-center">
                <Link href="/tools" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">
                    ← Back to All Tools
                </Link>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
