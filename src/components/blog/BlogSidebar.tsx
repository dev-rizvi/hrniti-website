"use client";
import SearchWidget from "./SearchWidget";
import RecentPostsWidget from "./RecentPostsWidget";

interface RecentPost {
    slug: string;
    title: string;
    category: string;
    imagePath?: string;
}

export default function BlogSidebar({ recentPosts }: { recentPosts: RecentPost[] }) {
    return (
        <aside className="space-y-6 sticky top-24">
            <SearchWidget />
            <RecentPostsWidget recentPosts={recentPosts} />
        </aside>
    );
}
