'use client';

import React, { useState, useEffect } from "react";
import { Play, X, Search, Video, Clock, Film } from "lucide-react";

interface VideoItem {
    id: string; // YouTube Video ID
    title: string;
    description: string;
    category: "demo" | "success" | "ai";
    duration: string;
}

export default function VideosClient({ initialVideos }: { initialVideos: any[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<"all" | "demo" | "success" | "ai">("all");
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const videosList = (initialVideos || []).map((v: any) => ({
        id: v.youtubeId,
        title: v.title,
        description: v.description,
        category: v.category,
        duration: v.duration
    }));

    // Handle Escape key to close modal player
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveVideoId(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Filter videos list based on search query and category tab
    const filteredVideos = videosList.filter(video => {
        const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* Header / Hero Section */}
            <section className="bg-slate-900 text-white pt-28 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                        <Film className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-100">Video Resources Library</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                        Product Walkthroughs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Success Stories</span>
                    </h1>

                    <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                        Watch HR Niti in action. Learn how our cloud-based HRMS automation and GenAI co-pilot simplify payroll runs, employee check-ins, and shift configurations.
                    </p>
                </div>
            </section>

            {/* Filter and Search Section */}
            <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("all")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "all"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }`}
                        >
                            All Videos
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("demo")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "demo"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }`}
                        >
                            Product Demos
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("success")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "success"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }`}
                        >
                            Customer Stories
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("ai")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCategory === "ai"
                                    ? "bg-emerald-600 text-white shadow"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }`}
                        >
                            AI Innovations
                        </button>
                    </div>

                    {/* Search bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>
            </section>

            {/* Video Cards Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    {filteredVideos.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {filteredVideos.map((video, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveVideoId(video.id)}
                                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer group"
                                >
                                    {/* Thumbnail container */}
                                    <div className="relative aspect-video bg-slate-950 overflow-hidden">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                        />
                                        
                                        {/* Play icon overlay */}
                                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                                            <div className="w-14 h-14 bg-white/95 text-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                                <Play className="h-6 w-6 fill-current pl-1" />
                                            </div>
                                        </div>

                                        {/* Length badge */}
                                        <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 font-sans">
                                            <Clock className="h-3 w-3" />
                                            {video.duration}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 inline-block
                                            ${video.category === 'ai' 
                                                ? 'text-purple-600' 
                                                : video.category === 'success' 
                                                ? 'text-green-600' 
                                                : 'text-emerald-600'
                                            }
                                        `}>
                                            {video.category === 'ai' 
                                                ? 'Generative AI' 
                                                : video.category === 'success' 
                                                ? 'Customer Story' 
                                                : 'Walkthrough Demo'
                                            }
                                        </span>
                                        
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                                            {video.title}
                                        </h3>
                                        
                                        <p className="text-sm text-slate-650 leading-relaxed line-clamp-3">
                                            {video.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto shadow-sm">
                            <Video className="h-12 w-12 text-slate-350 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-800 mb-1">No videos found</h3>
                            <p className="text-slate-500 text-sm">We couldn't find any videos matching your search criteria.</p>
                            <button
                                type="button"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                                className="mt-4 inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Video Player Modal */}
            {activeVideoId && (
                <div 
                    onClick={() => setActiveVideoId(null)}
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                >
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-800"
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setActiveVideoId(null)}
                            className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-slate-300 p-2 bg-slate-850 hover:bg-slate-800 rounded-full focus:outline-none z-10 transition-colors cursor-pointer"
                            aria-label="Close video player"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        
                        {/* Aspect Video wrapper */}
                        <div className="aspect-video w-full bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-none"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
