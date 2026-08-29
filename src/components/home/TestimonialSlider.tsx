"use client";
import { useState, useEffect } from "react";
import { Quote, ArrowLeft, ArrowRight, Star, Sparkles, ShieldCheck, Building2, TrendingUp } from "lucide-react";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    industry: string;
    metric: string;
    rating: number;
    initials: string;
    avatarBg: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "HR Niti cut our monthly payroll processing cycle from 4 full days to just 45 minutes. The automated PF ECR generation and developer timesheet sync saved our HR team endless spreadsheet headaches.",
        author: "Tanmay Das",
        role: "VP of HR & Operations",
        company: "TechVision Solutions Pvt Ltd",
        industry: "Information Technology",
        metric: "85% Payroll Run Time Saved",
        rating: 5,
        initials: "TD",
        avatarBg: "bg-emerald-600",
    },
    {
        quote: "Managing multi-client rate cards and statutory filings for 800+ deployed contract workers used to take 2 weeks. HR Niti's bulk bank transfer files and client billing engine made payouts 100% error-free.",
        author: "Dakshit Singh",
        role: "Director of Operations",
        company: "Apex Manpower & Staffing Services",
        industry: "Staffing & Recruitment",
        metric: "100% On-Time Contract Payouts",
        rating: 5,
        initials: "DS",
        avatarBg: "bg-indigo-600",
    },
    {
        quote: "Scheduling 24/7 rotational shifts for our hospital nursing staff and calculating visiting consultant retainers under TDS 194J is completely automated now. NABH audit reports generate in 1 click.",
        author: "Dr. Ritu Sharma",
        role: "Head of People & Compliance",
        company: "CarePlus Multi-Specialty Hospital",
        industry: "Healthcare & Pharma",
        metric: "NABH Audit Ready Vault",
        rating: 5,
        initials: "RS",
        avatarBg: "bg-teal-600",
    },
    {
        quote: "The plant gate facial recognition biometric integration eliminated ghost punches completely. Overtime calculations under the Factory Act are auto-computed with 100% accuracy every shift.",
        author: "Rajesh Kulkarni",
        role: "General Manager HR",
        company: "Precision Auto Components Ltd",
        industry: "Manufacturing & Industrial",
        metric: "Zero Overtime Calculation Leakage",
        rating: 5,
        initials: "RK",
        avatarBg: "bg-amber-600",
    },
    {
        quote: "We engineered HR Niti after watching Indian businesses lose hundreds of hours to manual payroll formulas and multi-state compliance filings. Every module we ship starts from real HR leader workflows.",
        author: "The HR Niti Leadership Team",
        role: "Founders & Solution Architects",
        company: "HR Niti India Platform",
        industry: "Product & Engineering",
        metric: "GenAI-Powered HR Engine",
        rating: 5,
        initials: "HN",
        avatarBg: "bg-slate-900",
    },
];

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, []);

    const slide = testimonials[current];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm mb-3">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                        Verified Customer Success Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Loved by HR Leaders &amp; Founders <span className="text-emerald-600">Across India</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                        Discover how Indian enterprises eliminate manual errors, save 85% payroll processing time, and maintain 100% statutory compliance.
                    </p>
                </div>

                {/* Main Carousel Card Container */}
                <div className="max-w-4xl mx-auto relative">
                    <div key={current} className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 animate-fade-in-up">

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400"></div>

                        {/* Watermark Quote Icon */}
                        <Quote className="absolute top-8 left-8 h-20 w-20 text-emerald-50 pointer-events-none" />

                        {/* Card Header Info */}
                        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-8">

                            {/* Verified Rating & Industry Tag */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                                    <Building2 className="h-3.5 w-3.5 text-emerald-600" />
                                    {slide.industry}
                                </span>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: slide.rating }).map((_, idx) => (
                                        <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>

                            {/* ROI Metric Badge */}
                            <div className="inline-flex items-center gap-1.5 bg-amber-400/15 border border-amber-400/30 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                                <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
                                {slide.metric}
                            </div>

                        </div>

                        {/* Main Quote Content */}
                        <div className="relative z-10 text-center mb-8">
                            <p className="text-lg md:text-2xl font-bold text-slate-800 leading-relaxed italic">
                                &ldquo;{slide.quote}&rdquo;
                            </p>
                        </div>

                        {/* Author Info */}
                        <div className="relative z-10 flex items-center justify-center gap-4 pt-6 border-t border-slate-100">
                            <div className={`w-13 h-13 ${slide.avatarBg} text-white font-extrabold text-lg rounded-2xl flex items-center justify-center shadow-md`}>
                                {slide.initials}
                            </div>
                            <div className="text-left">
                                <div className="font-extrabold text-base text-slate-900 flex items-center gap-1.5">
                                    <span>{slide.author}</span>
                                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                </div>
                                <div className="text-xs font-semibold text-slate-500">{slide.role}</div>
                                <div className="text-xs font-bold text-emerald-700">{slide.company}</div>
                            </div>
                        </div>

                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3.5 bg-white hover:bg-emerald-600 text-slate-700 hover:text-white rounded-full shadow-2xl border border-slate-200 transition-all hover:scale-110 cursor-pointer z-20"
                        aria-label="Previous Testimonial"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3.5 bg-white hover:bg-emerald-600 text-slate-700 hover:text-white rounded-full shadow-2xl border border-slate-200 transition-all hover:scale-110 cursor-pointer z-20"
                        aria-label="Next Testimonial"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>

                    {/* Slide Indicator Dots */}
                    <div className="flex justify-center items-center gap-1 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer select-none"
                                aria-label={`Go to testimonial ${i + 1}`}
                            >
                                <span className={`h-2.5 rounded-full transition-all ${current === i ? "bg-emerald-600 w-8" : "bg-slate-300 hover:bg-slate-400 w-2.5"}`}></span>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
