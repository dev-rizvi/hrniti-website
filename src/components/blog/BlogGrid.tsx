"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
    title: string;
    excerpt: string;
    readingTime: string;
    slug: string;
    imagePath: string;
    category?: string;
}

export default function BlogGrid({ dbBlogs }: { dbBlogs?: any[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const mergedBlogs = (dbBlogs || []).map(b => ({
        title: b.title,
        excerpt: b.summary,
        readingTime: "3 minutes",
        slug: b.slug,
        imagePath: b.featured_image || "/blog/default.webp",
        category: b.category || "General",
    }));

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(mergedBlogs.map(b => b.category).filter(Boolean) as string[]))];

    // Filter blogs based on selected category
    const filteredBlogs = selectedCategory === "All" 
        ? mergedBlogs 
        : mergedBlogs.filter(b => b.category === selectedCategory);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Latest Articles
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Stay updated with the latest trends, tips, and insights in HR and payroll management
                    </p>
                </div>

                {/* Categories Filter */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                                    selectedCategory === category
                                        ? "bg-amber-600 text-white shadow-md scale-105"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Blog Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredBlogs.map((post, index) => (
                            <BlogCard
                                key={index}
                                title={post.title}
                                excerpt={post.excerpt}
                                readingTime={post.readingTime}
                                slug={post.slug}
                                imagePath={post.imagePath}
                                category={post.category}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100 max-w-7xl mx-auto">
                        <p className="text-slate-500 font-medium">No articles found in this category.</p>
                        <button 
                            onClick={() => setSelectedCategory("All")}
                            className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded-lg text-amber-600 font-semibold hover:text-amber-700 shadow-sm"
                        >
                            View All Articles
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
