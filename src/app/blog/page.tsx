import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import CTASection from '@/components/about/CTASection';
import { getPublishedBlogs } from '@/app/actions/blogActions';

export const metadata = {
    title: "HR & Payroll Blog — Insights, Guides & Trends | HR Niti",
    description: "Stay ahead with the latest trends, regulatory updates, payroll automation guides, and human resources insights from HR Niti experts.",
    openGraph: {
        title: "HR & Payroll Blog — Insights, Guides & Trends | HR Niti",
        description: "Stay ahead with the latest trends, regulatory updates, payroll automation guides, and human resources insights from HR Niti experts.",
        url: "https://www.hrniti.com/blog",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Blog Hub" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HR & Payroll Blog — Insights, Guides & Trends | HR Niti",
        description: "Stay ahead with the latest trends, regulatory updates, payroll automation guides, and human resources insights from HR Niti experts.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/blog" },
    keywords: "HR blog, payroll software tips, statutory compliance India, labour codes 2026, employee attendance, HRMS trends",
};

export const revalidate = 0; // Dynamic server rendering to fetch new published blogs immediately

export default async function BlogListingPage() {
    const res = await getPublishedBlogs();
    const blogs = res.success && res.data ? res.data : [];

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        name: "HR Niti Blog",
                        url: "https://www.hrniti.com/blog",
                        description: "Insights, guides, and updates on HR tech, payroll processing, and statutory compliance in India.",
                        blogPost: blogs.map((b: any) => ({
                            "@type": "BlogPosting",
                            headline: b.title,
                            description: b.summary,
                            url: `https://www.hrniti.com/blog/${b.slug}`,
                            datePublished: b.created_at,
                            author: {
                                "@type": "Person",
                                name: b.author || "HR Niti Team"
                            }
                        }))
                    }),
                }}
            />
            <Navbar />
            <BlogHero />
            <BlogGrid dbBlogs={blogs} />
            <CTASection />
            <Footer />
        </main>
    );
}
