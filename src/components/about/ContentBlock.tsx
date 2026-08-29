import { ArrowRight, CheckCircle2, Award, Zap, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

interface ContentBlockProps {
    title: string;
    subtitle?: string;
    description: string;
    imageAlt: string;
    reversed?: boolean; // If true, image is on the left
    showButton?: boolean;
    imageUrl?: string | null;
}

export default function ContentBlock({
    title,
    subtitle,
    description,
    imageAlt,
    reversed = false,
    showButton = false,
    imageUrl
}: ContentBlockProps) {
    return (
        <section className="py-20 lg:py-24 overflow-hidden bg-white border-b border-slate-200/80">
            <div className="container mx-auto px-4 md:px-6">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-6xl mx-auto ${reversed ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Left Column: Text Content */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            {subtitle && (
                                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block">
                                    {subtitle}
                                </span>
                            )}
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                {title}
                            </h2>
                        </div>

                        <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            {description}
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-700">
                                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                                <span>Multi-tenant cloud architecture with zero hardware overhead</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-700">
                                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                                <span>Native statutory tax updates for all Indian states &amp; UTs</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-700">
                                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                                <span>Guided onboarding &amp; dedicated account success manager</span>
                            </div>
                        </div>

                        {showButton && (
                            <div className="pt-2">
                                <Link
                                    href="/demo"
                                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs md:text-sm transition-all shadow-md hover:-translate-y-0.5"
                                >
                                    <span>Book Interactive HRMS Demo</span>
                                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Premium HR Niti Brand Card with Official Logo */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950 p-8 sm:p-10 text-white group">
                            {/* Ambient Lighting Orbs */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 space-y-6">
                                {/* Top Badge */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                                        <Award className="h-3.5 w-3.5 text-amber-300" />
                                        Official Brand Operating System
                                    </span>
                                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                                </div>

                                {/* Official HR Niti Logo Image Block */}
                                <div className="py-6 border-y border-white/10 text-center sm:text-left space-y-3">
                                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/30 inline-block shadow-xl">
                                        <img
                                            src="/uploads/HRNITI_LOGO_opt.webp"
                                            alt="HR Niti Logo"
                                            width={220}
                                            height={56}
                                            className="h-10 sm:h-12 w-auto object-contain"
                                        />
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-emerald-200 uppercase tracking-widest pt-1">
                                        Smart HRMS &amp; Payroll Software
                                    </p>
                                </div>

                                {/* Core Highlights */}
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                                        <Cpu className="h-4 w-4 text-emerald-400 shrink-0" />
                                        <span>Niti AI Conversational Employee Self-Service</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                                        <Zap className="h-4 w-4 text-amber-300 shrink-0" />
                                        <span>Multi-State PF, ESIC, LWF &amp; PT Tax Automation</span>
                                    </div>
                                </div>

                                {/* Footer bar */}
                                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                                    <span>Built for Digital India</span>
                                    <span className="text-emerald-400">100% Tax Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
