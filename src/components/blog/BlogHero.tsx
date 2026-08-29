"use client";
import { BookOpen, TrendingUp } from "lucide-react";

export default function BlogHero() {
    return (
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 p-48 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm font-medium tracking-wide text-green-100">Latest Insights</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        HR Niti <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Knowledge Hub</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Explore expert insights, industry trends, and practical tips for HR and payroll management
                    </p>


                </div>
            </div>
        </section>
    );
}
