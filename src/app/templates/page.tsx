import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTemplates } from '@/app/actions/templateActions';
import CTASection from '@/components/about/CTASection';
import TemplateList from '@/components/templates/TemplateList';
import { Sparkles } from 'lucide-react';

export const metadata = {
    title: "HR Templates, Policies, and Document Drafts",
    description: "Download ready-to-use HR templates, onboarding checklists, employment contracts, performance appraisals, and mutual NDAs.",
    openGraph: {
        title: "HR Templates, Policies, and Document Drafts - HR Niti",
        description: "Download ready-to-use HR templates, onboarding checklists, employment contracts, performance appraisals, and mutual NDAs.",
        url: "https://www.hrniti.com/templates",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Templates Hub" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HR Templates, Policies, and Document Drafts - HR Niti",
        description: "Download ready-to-use HR templates, onboarding checklists, employment contracts, performance appraisals, and mutual NDAs.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/templates" },
    keywords: "HR templates free, job offer letter doc, employee onboarding checklist, performance appraisal forms, exit interview questions",
};

export const revalidate = 0; // Disable static rendering since it's dynamic

export default async function TemplatesPage() {
    const res = await getTemplates();
    const templates = res.success && res.data ? res.data : [];

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: templates.map((t: { title: string; slug: string }, i: number) => ({
                            "@type": "ListItem",
                            position: i + 1,
                            name: t.title,
                            url: `https://www.hrniti.com/templates/${t.slug}`,
                        })),
                    }),
                }}
            />
            <Navbar />

            {/* Premium Hero Section */}
            <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-55 via-white to-emerald-55/30 border-b border-slate-100">
                {/* Background design accents */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-6 animate-fadeIn">
                        <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
                        <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Resource Center</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                        Ready-to-use <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">HR templates.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
                        Download and customize standard HR letters, checklists, workplace policies, and appraisal rubrics to standardize your people operations.
                    </p>
                </div>
            </section>

            {/* List Grid Section */}
            <section className="py-16 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <TemplateList initialTemplates={templates} />
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
