"use client";
import Link from "next/link";
import { Clock } from "lucide-react";

interface RelatedPost {
    slug: string;
    title: string;
    category: string;
    readingTime: string;
    imagePath?: string;
}

interface RelatedPostsProps {
    relatedPosts: RelatedPost[];
}

export default function RelatedPosts({ relatedPosts }: RelatedPostsProps) {
    if (!relatedPosts || relatedPosts.length === 0) return null;
    return <RelatedPostsComponent posts={relatedPosts} />;
}

function RelatedPostsComponent({ posts }: { posts: RelatedPost[] }) {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        You May Also Like
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group"
                            >
                                {/* Category Badge / Image */}
                                <div className="h-32 relative bg-gradient-to-br from-emerald-500 to-amber-600 flex items-center justify-center overflow-hidden">
                                    {post.imagePath ? (
                                        <img src={post.imagePath} alt={post.title} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
                                    ) : null}
                                    <span className="text-white font-bold text-sm px-4 py-2 bg-black/30 backdrop-blur-md rounded-full relative z-10">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span>{post.readingTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
