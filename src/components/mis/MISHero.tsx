import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, TrendingUp } from "lucide-react";

export default function MISHero() {
    return (
        <section className="bg-gradient-to-br from-emerald-900 via-amber-900 to-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 p-48 bg-emerald-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-emerald-100">Analytics Driven HR</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Data-Backed Decisions with <span className="text-emerald-400">Intelligent MIS</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                            Transform raw HR data into actionable insights. Generate statutory reports, track workforce trends, and predict attrition with our comprehensive reporting engine.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg hover:-translate-y-1 shadow-emerald-500/30"
                            >
                                Start Your Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#templates"
                                className="inline-flex items-center justify-center bg-transparent border border-gray-600 hover:border-emerald-400 text-white hover:text-emerald-300 px-8 py-3.5 rounded-lg font-bold text-lg transition-all"
                            >
                                View Sample Reports
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content - Floating Data Cards */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-xl h-[400px] flex items-center justify-center">

                        {/* Central Graph Card */}
                        <div className="absolute z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-72 shadow-2xl animate-float">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-white">Attrition Rate</h3>
                                <TrendingUp className="text-red-400 h-5 w-5" />
                            </div>
                            <div className="flex items-end gap-2 h-32">
                                {[40, 60, 45, 70, 50, 65, 30].map((h, i) => (
                                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400 rounded-t" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-gray-400">
                                <span>Jan</span>
                                <span>Jul</span>
                            </div>
                        </div>

                        {/* Pie Chart Card */}
                        <div className="absolute top-10 right-0 lg:-right-10 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl w-48 animate-float-delayed z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <PieChart className="text-green-400 h-4 w-4" />
                                <span className="text-sm font-bold text-gray-300">Demographics</span>
                            </div>
                            <div className="relative w-24 h-24 mx-auto my-2 rounded-full border-4 border-slate-600"
                                style={{
                                    background: 'conic-gradient(#4ade80 0% 60%, #3b82f6 60% 85%, #f472b6 85% 100%)'
                                }}
                            ></div>
                            <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400 mt-2">
                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full"></div>Male</div>
                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div>Female</div>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="absolute bottom-0 left-0 lg:-left-4 bg-white p-4 rounded-xl shadow-xl w-48 animate-float z-30">
                            <div className="flex items-center gap-2 mb-1">
                                <BarChart3 className="text-purple-500 h-5 w-5" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Headcount</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900">1,245</div>
                            <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                                +12% <span className="text-gray-400 font-normal">vs last month</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
