import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Layers } from "lucide-react";

export default function HomeHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-800 min-h-[85vh] flex items-center bg-slate-950">

            {/* Clearly Visible Full-Width Background Banner */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/homepage/banner.png"
                    alt="HR Niti Hero Banner Background"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover object-center sm:object-right opacity-90"
                />
                {/* Left-Side Directional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                <div className="grid lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Glassmorphism Floating Text Box */}
                    <div className="lg:col-span-7 space-y-6 text-left bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">

                        {/* Top Pill */}
                        <div className="inline-flex items-center gap-2 bg-emerald-950/90 border border-emerald-500/50 px-4 py-1.5 rounded-full shadow-md">
                            <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
                            <span className="text-xs md:text-sm font-bold tracking-wide text-emerald-200">
                                AI-Powered HRMS &amp; Automated Payroll for Digital India
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-lg">
                            Empowering Your Business with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-200 to-teal-100">
                                Niti AI Engine
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-xl font-medium">
                            Automate monthly payroll, attendance, multi-location compliance, and employee performance with India&apos;s most advanced cloud HR platform.
                        </p>

                        {/* Dual Action CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link
                                href="/demo"
                                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-xl transition-all border border-emerald-400/40 hover:-translate-y-0.5"
                            >
                                Book Free Product Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/payroll-software"
                                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all backdrop-blur-md hover:-translate-y-0.5"
                            >
                                <Layers className="mr-2 h-5 w-5 text-amber-300" />
                                Explore Product Modules
                            </Link>
                        </div>

                        {/* Capability Badges */}
                        <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
                                    <ShieldCheck className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white">Tax Ready</div>
                                    <div className="text-[10px] text-emerald-200 uppercase font-bold">PF, ESIC &amp; PT</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white">Fast Setup</div>
                                    <div className="text-[10px] text-emerald-200 uppercase font-bold">Guided Onboarding</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white">Multi-Sector</div>
                                    <div className="text-[10px] text-emerald-200 uppercase font-bold">Custom Workflows</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="hidden lg:block lg:col-span-5"></div>

                </div>
            </div>
        </section>
    );
}
