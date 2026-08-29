"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogPostHeroProps {
    title: string;
    category: string;
    readingTime: string;
    publishDate?: string;
    author?: string;
}

export default function BlogPostHero({ title, category, readingTime, publishDate = "January 2026", author = "HR Niti Team" }: BlogPostHeroProps) {
    return (
        <section className="bg-emerald-600 text-white pt-24 pb-12 lg:pt-32 lg:pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center gap-2 text-sm text-white/90">
                        <Link href="/blog" className="hover:text-white transition-colors">
                            Blog
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-white/70">{title}</span>
                    </nav>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
                        {title}
                    </h1>

                    {/* Byline */}
                    <p className="text-sm text-white/80 font-medium">
                        By <span className="text-white font-semibold">{author}</span> · {publishDate} · {readingTime} read
                    </p>

                </div>
            </div>
        </section>
    );
}
