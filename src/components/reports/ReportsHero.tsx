import React from "react";
import { Sparkles, FileText } from "lucide-react";

export default function ReportsHero() {
    return (
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 border-b border-slate-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-6 animate-fadeIn">
                    <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">HR Niti Research Center</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                    In-depth research and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">industry benchmarks.</span>
                </h1>
                
                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
                    Access our collection of whitepapers, compliance indexes, and performance benchmarks to build modern, data-driven workforce strategies.
                </p>
            </div>
        </section>
    );
}
