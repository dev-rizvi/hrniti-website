import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTemplateBySlug, getTemplates } from '@/app/actions/templateActions';
import TemplateViewer from '@/components/templates/TemplateViewer';

export const revalidate = 0;

const BASE_URL = "https://www.hrniti.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const res = await getTemplateBySlug(slug);
    if (!res.success || !res.data) {
        return {
            title: "Template Not Found",
        };
    }
    const template = res.data;
    const url = `${BASE_URL}/templates/${template.slug}`;
    return {
        title: `${template.title} — Free HR Template`,
        description: template.description,
        alternates: { canonical: url },
        openGraph: {
            title: `${template.title} — Free HR Template | HR Niti`,
            description: template.description,
            url,
            type: "article",
            images: [{ url: "/og-default.png", width: 1200, height: 630, alt: template.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${template.title} — Free HR Template | HR Niti`,
            description: template.description,
            images: ["/og-default.png"],
        },
    };
}

export default async function TemplateDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // 1. Fetch current template
    const res = await getTemplateBySlug(slug);
    if (!res.success || !res.data) {
        notFound();
    }
    const template = res.data;

    // 2. Fetch all templates to extract related recommendations
    const allRes = await getTemplates();
    const allTemplates = allRes.success && allRes.data ? allRes.data : [];
    
    // Pick 3 related templates with the same tag (excluding the current one)
    const relatedTemplates = allTemplates
        .filter((t: any) => t.id !== template.id && t.tag.toLowerCase() === template.tag.toLowerCase())
        .slice(0, 3);
        
    // Fallback if not enough matching tags
    if (relatedTemplates.length < 3) {
        const fallbacks = allTemplates
            .filter((t: any) => t.id !== template.id && t.tag.toLowerCase() !== template.tag.toLowerCase())
            .slice(0, 3 - relatedTemplates.length);
        relatedTemplates.push(...fallbacks);
    }

    // Format output date objects to string for client transfer
    const formattedTemplate = {
        id: template.id,
        title: template.title,
        slug: template.slug,
        description: template.description,
        tag: template.tag,
        content: template.content,
        file_url: template.file_url,
        updated_at: template.updated_at.toISOString()
    };

    const formattedRelated = relatedTemplates.map((t: any) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        description: t.description,
        tag: t.tag,
        content: t.content,
        file_url: t.file_url,
        updated_at: t.updated_at.toISOString()
    }));

    const url = `${BASE_URL}/templates/${template.slug}`;

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                                { "@type": "ListItem", position: 2, name: "HR Templates", item: `${BASE_URL}/templates` },
                                { "@type": "ListItem", position: 3, name: template.title, item: url },
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "CreativeWork",
                            name: template.title,
                            description: template.description,
                            url,
                            dateModified: template.updated_at.toISOString(),
                            about: template.tag,
                            isAccessibleForFree: true,
                            publisher: { "@type": "Organization", name: "HR Niti", url: BASE_URL },
                        },
                    ]),
                }}
            />

            <Navbar />

            <TemplateViewer
                template={formattedTemplate}
                relatedTemplates={formattedRelated}
            />

            <Footer />
        </main>
    );
}
