"use client";
import { useState } from "react";
import { Bot, Users, Cloud, Smartphone, CalendarCheck, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FeatureTabs() {
    const features = [
        {
            id: "payroll",
            title: "Automated Payroll",
            desc: "One-click payroll processing with 100% statutory compliance. Handle taxes, PF, ESIC, PT, and salary payout Excel files effortlessly.",
            icon: Cloud,
            color: "emerald",
            link: "/payroll-software",
            imagePath: "/image/homepage/Automated-Payroll.jpg",
            bullets: ["Bank Payout Excel Generator", "PF, ESIC, PT ECR Generator", "Automated TDS Calculation", "Instant Payslip Delivery"],
        },
        {
            id: "core",
            title: "Centralized Core HR",
            desc: "A single source of truth for all employee data across departments and branches. Manage digital onboarding, documents, and lifecycle events.",
            icon: Users,
            color: "teal",
            link: "/employee-management",
            imagePath: "/image/homepage/Centralized-Core-HR.jpg",
            bullets: ["Centralized Employee Master", "Digital Document Vault", "Custom Approval Workflows", "Organisational Hierarchy"],
        },
        {
            id: "mobile",
            title: "Mobile First HR",
            desc: "GPS Geofencing, Selfie Attendance, and Leave/Expense Claims on the go. HR Niti Mobile App keeps your remote and field workforce connected.",
            icon: Smartphone,
            color: "purple",
            link: "/hrms-mobile-app",
            imagePath: "/image/homepage/Mobile-First-HR.jpg",
            bullets: ["GPS & Geofenced Punching", "Face Recognition Check-in", "Mobile Leave & Expense Claims", "Push Roster & Salary Alerts"],
        },
        {
            id: "leave",
            title: "Leave & Employee Experience",
            desc: "Configurable leave policies, automated balance tracking, and 1-tap manager approvals so employee requests are never delayed.",
            icon: CalendarCheck,
            color: "cyan",
            link: "/leave-management",
            imagePath: "/image/homepage/User-Experience.jpg",
            bullets: ["Configurable Leave Rules", "Automated Leave Balances", "Manager Mobile Approvals", "Comp-off & Sandwich Rules"],
        },
        {
            id: "genai",
            title: "GenAI & Real-Time Insights",
            desc: "Niti AI answers policy queries, generates instant HR MIS reports, and delivers real-time workforce analytics using natural language.",
            icon: Bot,
            color: "amber",
            link: "/hr-chatbot",
            imagePath: "/image/homepage/real-time-insights.jpg",
            bullets: ["Niti AI Chat Assistant", "Real-Time Headcount Analytics", "Attrition & Cost Drivers", "Custom Excel Report Export"],
        },
        {
            id: "recruitment",
            title: "Fast Setup & Onboarding",
            desc: "Go live in as little as 48 hours. Visual hiring pipelines, job postings, and paperless digital onboarding for rapid team expansion.",
            icon: Briefcase,
            color: "indigo",
            link: "/recruitment-management",
            imagePath: "/image/homepage/Fast-implementation-dashboard.jpg",
            bullets: ["Visual Applicant Pipeline", "Digital Joining Formalities", "Pre-built Policy Signoffs", "48-Hour Rapid Go-Live"],
        }
    ];

    const [activeTab, setActiveTab] = useState(0);
    const current = features[activeTab];

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
                        ⚡ Unified HR Platform
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Complete HR &amp; Payroll Automation <span className="text-emerald-600">In Action</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                        Explore our core modules engineered to automate every stage of employee lifecycle management.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

                    {/* Left: Vertical Feature Tabs */}
                    <div className="lg:w-5/12 flex flex-col gap-3 w-full">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 group cursor-pointer ${isActive
                                        ? "bg-white border-emerald-500 shadow-xl shadow-emerald-600/10 -translate-x-1"
                                        : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                                        }`}
                                >
                                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${isActive
                                        ? "bg-emerald-600 text-white"
                                        : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
                                        }`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-base font-extrabold mb-1 ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-xs leading-relaxed ${isActive ? "text-slate-600" : "text-slate-500 line-clamp-2"}`}>
                                            {feature.desc}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Active Tab Feature Preview Card with Image */}
                    <div className="lg:w-7/12 w-full">
                        <div key={current.id} className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 animate-fade-in-up">

                            {/* Section Header */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                    {current.title} Module
                                </span>
                                <Link
                                    href={current.link}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                                >
                                    Explore Module <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{current.title}</h3>
                            <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">{current.desc}</p>

                            {/* Feature Image Frame */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md mb-6 bg-slate-900 group">
                                <img
                                    src={current.imagePath}
                                    alt={`${current.title} Preview`}
                                    width={800}
                                    height={450}
                                    className="w-full h-auto max-h-[380px] object-cover object-top transform group-hover:scale-[1.01] transition-transform duration-500"
                                />
                            </div>

                            {/* Bullet Points */}
                            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                                {current.bullets.map((b) => (
                                    <div key={b} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                        <span>{b}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
