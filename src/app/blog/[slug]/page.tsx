import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogSidebar from '@/components/blog/BlogSidebar';
import RelatedPosts from '@/components/blog/RelatedPosts';
import CTASection from '@/components/about/CTASection';
import { getBlogBySlug, getRecentBlogs } from '@/app/actions/blogActions';

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const res = await getBlogBySlug(slug);
    if (!res.success || !res.data) return {};

    const blog = res.data;
    const title = blog.meta_title?.trim() ? blog.meta_title.trim() : `${blog.title} | HR Niti`;
    const description = blog.meta_description || blog.summary;
    const url = `https://www.hrniti.com/blog/${blog.slug}`;

    return {
        title: {
            absolute: title,
        },
        description,
        keywords: blog.meta_keywords || undefined,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'article',
            publishedTime: blog.created_at.toISOString(),
            modifiedTime: blog.updated_at.toISOString(),
            authors: [blog.author || 'HR Niti Team'],
            images: blog.featured_image ? [{ url: blog.featured_image, alt: blog.title }] : [{ url: '/og-default.png', width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: blog.featured_image ? [blog.featured_image] : ['/og-default.png'],
        },
    };
}

export default async function BlogPostViewerPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const res = await getBlogBySlug(slug);

    if (!res.success || !res.data) {
        notFound();
    }

    const blog = res.data;

    // Fetch recent posts for sidebar & related section
    const recentRes = await getRecentBlogs(6);
    const recentPosts = (recentRes.success && recentRes.data ? recentRes.data : [])
        .filter((b: any) => b.slug !== slug)
        .map((b: any) => ({
            slug: b.slug,
            title: b.title,
            category: b.category || 'General',
            readingTime: '3 min read',
            imagePath: b.featured_image || '/blog/default.webp',
        }));

    // Calculate approx reading time
    const wordCount = (blog.content || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
    const readingTimeText = `${readingTimeMinutes} min`;

    const formattedDate = new Intl.DateTimeFormat('en-IN', {
        month: 'long',
        year: 'numeric'
    }).format(new Date(blog.created_at));

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: blog.title,
                        description: blog.summary,
                        image: blog.featured_image ? [blog.featured_image] : undefined,
                        datePublished: blog.created_at.toISOString(),
                        dateModified: blog.updated_at.toISOString(),
                        author: {
                            "@type": "Person",
                            name: blog.author || "HR Niti Team"
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "HR Niti",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.hrniti.com/uploads/1781778053575-HRNITI_LOGO.png"
                            }
                        },
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://www.hrniti.com/blog/${blog.slug}`
                        }
                    }),
                }}
            />
            <Navbar />

            {/* Hero Section */}
            <BlogPostHero
                title={blog.title}
                category={blog.category || "General"}
                readingTime={readingTimeText}
                publishDate={formattedDate}
                author={blog.author || "HR Niti Team"}
            />

            {/* Article & Sidebar Container */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
                        
                        {/* Main Content Column */}
                        <div className="lg:col-span-8">
                            {blog.featured_image && (
                                <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-slate-100 max-h-[440px]">
                                    <img
                                        src={blog.featured_image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Blog HTML Body */}
                            <BlogPostContent
                                content={
                                    <div
                                        className="blog-rendered-content text-slate-800 leading-relaxed text-base [&>h1]:text-2xl [&>h1]:font-extrabold [&>h1]:text-slate-900 [&>h1]:mb-4 [&>h1]:mt-8 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-3 [&>h2]:mt-6 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mb-2 [&>h3]:mt-5 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>li]:mb-1.5 [&>blockquote]:border-l-4 [&>blockquote]:border-emerald-600 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4 [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>th]:border [&>th]:border-slate-300 [&>th]:p-2.5 [&>th]:bg-slate-50 [&>td]:border [&>td]:border-slate-200 [&>td]:p-2.5"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                    />
                                }
                            />

                            {/* Author Box */}
                            <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                                    {(blog.author || 'HR')[0]}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Written By</div>
                                    <div className="font-extrabold text-slate-900 text-base">{blog.author || 'HR Niti Team'}</div>
                                    <p className="text-xs text-slate-500 mt-0.5">HR technology specialist & payroll research contributor at HR Niti.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-4">
                            <BlogSidebar recentPosts={recentPosts.slice(0, 5)} />
                        </div>

                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {recentPosts.length > 0 && (
                <RelatedPosts relatedPosts={recentPosts.slice(0, 3)} />
            )}

            <CTASection />
            <Footer />
        </main>
    );
}
