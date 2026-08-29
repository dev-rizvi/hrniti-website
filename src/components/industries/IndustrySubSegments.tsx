import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import type { Industry } from "@/lib/industriesData";

export default function IndustrySubSegments({ industry }: { industry: Industry }) {
    return (
        <section className="py-20 bg-white border-y border-slate-200/80">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
                    <Layers className="h-3.5 w-3.5" />
                    Sub-Segment Coverage
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    A Scalable Solution for Every {industry.title} Enterprise
                </h2>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                    Whatever niche or sub-sector your business operates in, HR Niti seamlessly configures to your workforce scale without adding operational friction.
                </p>

                {/* Sub-segment Pills Grid */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {industry.subSegments.map((seg) => (
                        <div
                            key={seg}
                            className="inline-flex items-center gap-2 bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all shadow-sm group cursor-default"
                        >
                            <Sparkles className="h-3.5 w-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
                            <span>{seg}</span>
                        </div>
                    ))}
                </div>

                <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                    Request Free {industry.title} Demo <ArrowRight className="h-5 w-5" />
                </Link>

            </div>
        </section>
    );
}
