"use client";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
    title: string;
    excerpt: string;
    readingTime: string;
    slug: string;
    imagePath: string;
    category?: string;
}

export default function BlogCard({ title, excerpt, readingTime, slug, imagePath, category }: BlogCardProps) {
    return (
        <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200 hover:border-amber-200">
            {/* Featured Image */}
            <div className="relative h-48 bg-gradient-to-br from-amber-100 to-purple-100 overflow-hidden">
                {imagePath ? (
                    <img src={imagePath} alt={title} width={400} height={192} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                        </div>
                    </div>
                )}
                {category && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {category}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Reading Time */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
                    {excerpt}
                </p>

                {/* Read More Link */}
                <Link
                    href={`/blog/${slug}`}
                    aria-label={`Read full article: ${title}`}
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </article>
    );
}
