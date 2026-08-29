"use client";
import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -80% 0px" }
        );

        items.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    if (items.length === 0) return null;

    return (
        <aside className="hidden lg:block sticky top-24 w-64 shrink-0">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav>
                    <ul className="space-y-2">
                        {items.map((item) => (
                            <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                                <a
                                    href={`#${item.id}`}
                                    className={`block text-sm py-1 transition-colors ${activeId === item.id
                                            ? "text-emerald-600 font-semibold"
                                            : "text-gray-600 hover:text-emerald-600"
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(item.id)?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
