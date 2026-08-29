"use client";
import Link from "next/link";

interface RecentPost {
    slug: string;
    title: string;
    category: string;
    imagePath?: string;
}

export default function RecentPostsWidget({ recentPosts }: { recentPosts: RecentPost[] }) {
    if (!recentPosts || recentPosts.length === 0) return null;

    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Recent Posts</h3>
            <div className="space-y-4">
                {recentPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex gap-3 group"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-amber-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                            {post.imagePath ? (
                                <img src={post.imagePath} alt={post.title} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-300" />
                            ) : null}
                            <span className="text-white text-xs font-bold text-center px-2 relative z-10 bg-black/20 backdrop-blur-sm rounded-full py-0.5">
                                {post.category}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{post.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
