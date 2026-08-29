"use client";
import TableOfContents from "./TableOfContents";
import React from "react";

interface BlogPostContentProps {
    content: React.ReactNode;
}

// Simplified: Just render content without ToC extraction
// ToC will be manually added to blog posts that need it
export default function BlogPostContent({ content }: BlogPostContentProps) {
    return (
        <article className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-4 prose-li:my-1">
            {content}
        </article>
    );
}
