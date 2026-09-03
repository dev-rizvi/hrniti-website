"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
    Check, 
    ShieldCheck, 
    ArrowRight, 
    Building2, 
    MapPin, 
    ChevronDown, 
    Laptop, 
    TrendingUp, 
    Layers, 
    Bot, 
    Briefcase,
    ExternalLink,
    FileText,
    Shield,
    Lock
} from "lucide-react";
import { submitDemoLeadAction } from "@/app/actions/leadActions";
import CTASection from "@/components/about/CTASection";
import InterCityNav from "@/components/location/InterCityNav";

export default function DelhiLandingClient() {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "20-49",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // FAQ Accordion
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const res = await submitDemoLeadAction({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            employees: formData.employees,
            cityName: "Delhi NCR",
            sourcePage: "Delhi Location Landing Page",
            sourceUrl: typeof window !== "undefined" ? window.location.href : "https://www.hrniti.com/hrms-payroll-software-in-delhi",
        });

        setIsSubmitting(false);

        if (res.success) {
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                employees: "20-49",
            });
            setTimeout(() => setSubmitted(false), 7000);
        } else {
            setErrorMessage(res.error || "Failed to submit demo request.");
        }
    };

    // 25 Comprehensive FAQs
    const faqs = [
        {
            q: "What is HRMS software?",
            a: "HRMS software is a system used to manage employee information, attendance, leave, payroll, recruitment, HR workflows and workforce reporting from one platform."
        },
        {
            q: "What is payroll software?",
            a: "Payroll software automates salary calculation, deductions, payslips, payroll reports and other recurring payroll processes."
        },
        {
            q: "What is the best HRMS software for a Delhi company?",
            a: "The right HRMS depends on employee count, payroll complexity, attendance requirements, locations, integrations and HR workflows. Businesses should compare payroll automation, attendance, employee self-service, statutory reporting, security and support."
        },
        {
            q: "What is the cost of HRMS software in Delhi?",
            a: "HRMS software in Delhi typically ranges based on team size, deployed modules, and implementation scope. Small businesses (1–50 employees) generally choose standard cloud subscriptions, mid-sized firms (51–250 employees) opt for multi-state payroll and attendance packages, and enterprises require custom integrations. Contact HR Niti for a transparent, customized quote."
        },
        {
            q: "Which payroll software is best for 100 employees in Delhi?",
            a: "For a 100-employee company in Delhi NCR, the best payroll software automates salary processing, integrates biometric/GPS attendance, handles Delhi Labour Welfare Fund (DLWF) and multi-state compliance (for Gurgaon/Noida staff), and provides mobile Employee Self-Service (ESS) for instant payslip downloads."
        },
        {
            q: "Can HRMS software manage Delhi, Gurgaon and Noida employees?",
            a: "Yes. HR Niti allows organizations to manage cross-NCR workforces under a single account, applying location-specific payroll rules, state statutory deductions (Delhi, Haryana, Uttar Pradesh), and regional holiday calendars automatically."
        },
        {
            q: "What payroll compliance does a Delhi company need to manage?",
            a: "Delhi employers must manage Delhi Minimum Wages (revised semi-annually by the Delhi Labour Department), Delhi Labour Welfare Fund (DLWF) contributions, Employees' Provident Fund (EPF), Employees' State Insurance (ESIC), Tax Deducted at Source (TDS/Form 24Q), and annual Form 16 issuance."
        },
        {
            q: "How do I choose payroll software for a Delhi business?",
            a: "When evaluating payroll software in Delhi, check for: (1) native support for Delhi statutory rules and multi-state NCR configurations, (2) biometric and mobile GPS attendance integration, (3) automated salary computation and one-click payslip distribution, (4) robust employee self-service (web and mobile), and (5) responsive local customer onboarding and support."
        },
        {
            q: "Can HR Niti manage employees in Delhi, Gurgaon and Noida?",
            a: "Yes. HR Niti is designed to support organizations with employees across multiple locations and allows payroll and HR configurations to be managed according to workforce requirements."
        },
        {
            q: "Does HR Niti support payroll compliance?",
            a: "HR Niti provides payroll workflows, configured statutory calculations and payroll/statutory reporting features for Indian businesses. Organizations should verify configurations against the latest applicable government requirements."
        },
        {
            q: "Does HR Niti support biometric attendance?",
            a: "Yes. HR Niti supports attendance workflows that can integrate biometric attendance and other supported attendance methods."
        },
        {
            q: "Does HR Niti support GPS attendance?",
            a: "HR Niti provides location-based attendance capabilities for organizations that need workforce attendance visibility outside traditional office environments."
        },
        {
            q: "Can employees access their payslips online?",
            a: "Yes. Employees can access HR information and supported payroll documents through the employee self-service platform."
        },
        {
            q: "Does HR Niti have a mobile app?",
            a: "HR Niti provides mobile employee self-service capabilities for supported HR workflows."
        },
        {
            q: "Can HR Niti manage payroll for multiple states?",
            a: "Yes. HR Niti is designed for multi-location and multi-state workforce management with location-based payroll configurations."
        },
        {
            q: "Can HR Niti integrate with attendance machines?",
            a: "HR Niti supports attendance integration workflows for compatible biometric and attendance systems."
        },
        {
            q: "Can HR Niti manage full and final settlement?",
            a: "Yes. HR Niti includes workflows for employee exit and full-and-final settlement."
        },
        {
            q: "Can HR Niti manage recruitment?",
            a: "Yes. HR Niti includes recruitment and applicant-tracking capabilities including candidate management and recruitment workflows."
        },
        {
            q: "Does HR Niti have AI features?",
            a: "Yes. HR Niti includes AI-powered capabilities across areas such as HR assistance, recruitment, analytics and workforce automation."
        },
        {
            q: "Is HR Niti suitable for small businesses?",
            a: "Yes. HR Niti offers HRMS capabilities for organizations of different sizes, including small and growing businesses."
        },
        {
            q: "Is HR Niti suitable for manufacturing companies?",
            a: "Yes. Manufacturing organizations can use HR Niti for employee management, attendance, shifts, payroll and workforce reporting."
        },
        {
            q: "Is HR Niti suitable for pharma companies?",
            a: "Yes. Pharma organizations can use HR Niti to manage employee records, attendance, payroll, recruitment and HR workflows."
        },
        {
            q: "How long does HRMS implementation take?",
            a: "Implementation time depends on employee count, payroll complexity, integrations, data migration and configuration requirements. HR Niti follows a structured setup and testing process before go-live."
        },
        {
            q: "How can I get a demo of HR Niti?",
            a: "You can request a personalized HRMS and payroll demonstration from the HR Niti team."
        },
        {
            q: "Does HR Niti support Delhi-specific payroll requirements?",
            a: "HR Niti can be configured for relevant Delhi payroll workflows and statutory reporting requirements. Specific statutory configurations should be reviewed against the latest applicable government notifications."
        }
    ];

    // 6 Key Delhi Hubs with practical context
    const hubs = [
        {
            name: "Connaught Place",
            desc: "Central workforce management, attendance, and payroll for corporate headquarters, BFSI, and consulting firms."
        },
        {
            name: "Okhla Industrial Area",
            desc: "HRMS and payroll automation for manufacturing, pharmaceutical, logistics and industrial businesses operating in Okhla."
        },
        {
            name: "Nehru Place",
            desc: "HRMS solutions for IT, technology and professional-services companies managing office-based and hybrid employees."
        },
        {
            name: "Netaji Subhash Place",
            desc: "Cloud HRMS, leave, and attendance management for commercial, trading, and retail enterprise offices."
        },
        {
            name: "South Extension",
            desc: "Automated payroll, leave, and employee self-service for premium healthcare, retail, and corporate services."
        },
        {
            name: "Aerocity",
            desc: "Scalable HRMS, multi-shift rosters, and digital onboarding for hospitality, aviation, and multinational corporate hubs."
        }
    ];

    return (
        <div className="text-gray-800 bg-white">

            {/* ========================================================================= */}
            {/* 1. HERO SECTION (100% Exact Mumbai Design) */}
            {/* ========================================================================= */}
            <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 text-white pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden">
                {/* Background Light Effects */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* LEFT COLUMN: Copy & Value Props */}
                        <div className="lg:col-span-7 space-y-6 text-left">

                            {/* Location Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20 text-emerald-200">
                                <span className="text-amber-400">📍</span>
                                <span>Delhi, Delhi NCR &bull; The Heart of India &amp; National Capital Region</span>
                            </div>

                            {/* H1 Heading */}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                                Best HRMS &amp; Payroll Software in{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-200">
                                    Delhi NCR
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                                Simplify payroll, attendance, leave, employee management and statutory reporting with HR Niti — a cloud HRMS platform for businesses operating across Delhi, Gurgaon, Noida and other locations in India.
                            </p>

                            {/* Key Benefits Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div className="flex items-center gap-2.5 text-sm text-emerald-50">
                                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>1-Click Salary Disbursement</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-emerald-50">
                                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>Automated Statutory Deductions (DLWF, EPF, ESIC)</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-emerald-50">
                                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>Biometric &amp; GPS Geofencing</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-emerald-50">
                                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>iOS / Android ESS App</span>
                                </div>
                            </div>

                            {/* Quick Answer Box (Exact safe wording) */}
                            <div className="bg-emerald-900/50 border border-emerald-500/30 backdrop-blur-md rounded-xl p-4 text-left shadow-lg">
                                <div className="flex items-start gap-3">
                                    <span className="bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 text-[11px] rounded uppercase tracking-wider mt-0.5 flex-shrink-0">
                                        Quick Answer
                                    </span>
                                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed">
                                        HR Niti is a cloud-based HRMS and payroll platform for businesses in Delhi NCR. It helps organizations manage payroll, attendance, employee self-service, recruitment, HR reporting and AI-assisted HR workflows across Delhi, Gurgaon, Noida and other locations in India.
                                    </p>
                                </div>
                            </div>

                            {/* Trust Signals Bar */}
                            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs md:text-sm text-emerald-200 font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                                    <span>Statutory Deductions &amp; Payroll Compliance</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span>Touchless Biometric &amp; GPS Geofencing</span>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: UPPER FOLD DEMO FORM */}
                        <div className="lg:col-span-5" id="demo-form">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-900 border border-amber-200/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                                <div className="mb-6 text-center lg:text-left">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                                        Delhi NCR Solution Demo
                                    </span>
                                    <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
                                        Book Free Delhi Demo
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Experience live multi-state payroll calculations and statutory compliance.
                                    </p>
                                </div>

                                {submitted ? (
                                    <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                                        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                                            <Check className="w-6 h-6 stroke-[3]" />
                                        </div>
                                        <h4 className="text-base font-bold text-emerald-950">Demo Request Submitted!</h4>
                                        <p className="text-xs text-emerald-800">
                                            Our regional specialist will contact you shortly to schedule your personalized product walkthrough.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                                        {errorMessage && (
                                            <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs">
                                                {errorMessage}
                                            </div>
                                        )}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Rajesh Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-600 outline-none text-gray-800 transition-colors"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Work Email *</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="rajesh@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-600 outline-none text-gray-800 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-600 outline-none text-gray-800 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Company Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enterprise Pvt Ltd"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-600 outline-none text-gray-800 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Employee Count *</label>
                                                <select
                                                    value={formData.employees}
                                                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-600 outline-none text-gray-800 transition-colors font-medium"
                                                >
                                                    <option value="1-19">1 - 19 Employees</option>
                                                    <option value="20-49">20 - 49 Employees</option>
                                                    <option value="50-199">50 - 199 Employees</option>
                                                    <option value="200-499">200 - 499 Employees</option>
                                                    <option value="500+">500+ Employees</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-900/20 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? "Submitting..." : "Schedule My Delhi Demo"}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 2. LOCAL HUBS SECTION (100% Exact Mumbai LocalHubs Design) */}
            {/* ========================================================================= */}
            <section className="py-16 bg-emerald-50/50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                Geographic Coverage in Delhi
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                                Serving Businesses Across Key Business Hubs in Delhi
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base">
                                HR Niti provides seamless cloud HRMS, biometric attendance, and automated payroll tailored for companies operating in Delhi&apos;s top commercial and industrial zones.
                            </p>
                        </div>

                        {/* Hub Badges Grid with context */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {hubs.map((hub, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group space-y-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                                            📍
                                        </div>
                                        <span className="font-bold text-gray-900 text-base group-hover:text-emerald-700 transition-colors">
                                            {hub.name}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed pl-11">
                                        {hub.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 3. STATUTORY COMPLIANCE SECTION (100% Exact Mumbai StatutorySection Design) */}
            {/* ========================================================================= */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                            {/* Left Column: Context & Information */}
                            <div className="lg:col-span-6 space-y-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                                    Delhi NCR Statutory &amp; Payroll Compliance
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                    Automated Payroll &amp; Statutory Compliance in Delhi
                                </h2>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    HR Niti helps payroll teams automate salary calculations, statutory deductions, payroll reports and compliance workflows for employees working in Delhi and across multiple states.
                                </p>

                                <div className="space-y-4 pt-2">
                                    <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <h3 className="font-bold text-emerald-950 text-base mb-1">
                                            Delhi Labour Welfare Fund (DLWF) &amp; Multi-State Compliance
                                        </h3>
                                        <p className="text-sm text-emerald-900 leading-relaxed">
                                            Helps payroll teams manage statutory wage-rate updates and multi-state payroll rules for employees working across Delhi, Gurgaon, and Noida.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Statutory Form Cards */}
                            <div className="lg:col-span-6">
                                <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />
                                    <h3 className="text-xl font-bold text-amber-400 mb-2 flex items-center gap-2">
                                        <span>⚖️</span> Compliance-Ready Payroll Reports &amp; Statutory Files for Delhi
                                    </h3>
                                    <p className="text-xs text-gray-300 mb-6">
                                        Ready-to-file electronic statutory statements generated automatically post payroll execution:
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            "Form 16",
                                            "Form 24Q",
                                            "Delhi LWF Return",
                                            "EPF ECR Return",
                                            "ESIC Monthly Return",
                                            "Monthly Salary Register"
                                        ].map((form, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/80 rounded-lg border border-gray-700/60">
                                                <span className="text-emerald-400 font-bold text-sm">✓</span>
                                                <span className="text-sm font-medium text-gray-100">{form}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Delhi Payroll Compliance Guide with Official Links */}
                        <div className="mt-12 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Delhi Payroll Compliance Guide</h3>
                                    <p className="text-xs text-slate-600 mt-0.5">Authoritative references for Delhi Minimum Wages and Statutory Deductions.</p>
                                </div>
                                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                                    Last reviewed: September 2026
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                                    <strong className="text-slate-900 font-bold block">Delhi Minimum Wages</strong>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        Configured wage slabs aligned with official Delhi Labour Department revision orders for unskilled, semi-skilled, skilled, and graduate categories.
                                    </p>
                                </div>

                                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                                    <strong className="text-slate-900 font-bold block">Delhi Labour Welfare Fund (DLWF)</strong>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        Deduction schedules and periodic return files according to statutory Delhi Labour Welfare Fund guidelines.
                                    </p>
                                </div>

                                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                                    <strong className="text-slate-900 font-bold block">EPF &amp; ESIC Returns</strong>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        Automated 12% EPF (with ECR export) and 0.75% / 3.25% ESIC deduction calculations and monthly electronic return file generation.
                                    </p>
                                </div>

                                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                                    <strong className="text-slate-900 font-bold block">TDS &amp; Form 16 / 24Q</strong>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        Old vs New Tax Regime salary tax calculation with quarterly Form 24Q preparation and employee Form 16 issuance.
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200">
                                <strong>Compliance note:</strong> Statutory rules and government requirements can change. Payroll configurations should be reviewed against the latest applicable notifications and official Delhi Labour Department orders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 4. AI CAPABILITIES SUITE (100% Exact Mumbai SmHRtFeatures Design) */}
            {/* ========================================================================= */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                Intelligent HR Suite
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                                AI-Powered HR &amp; Payroll Automation
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                HR Niti combines AI, automation and workforce analytics to reduce repetitive HR tasks and help HR teams make faster, data-informed decisions.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "HR Niti® Automated Payroll",
                                    description: "Automated payroll processing with state statutory rules, 1-click bank transfers, and error detection.",
                                    icon: "💰",
                                    link: "/payroll-software"
                                },
                                {
                                    title: "HR Niti GenAI Copilot",
                                    description: "GenAI-powered HR assistant for instant policy query resolution, ESS helpdesk, and automated workflows.",
                                    icon: "🤖",
                                    link: "/hr-chatbot"
                                },
                                {
                                    title: "HR Niti Biometrics & GPS",
                                    description: "AI-based touchless facial recognition with geofencing and real-time mobile GPS attendance.",
                                    icon: "📱",
                                    link: "/attendance"
                                },
                                {
                                    title: "HR Niti Recruitment & ATS",
                                    description: "AI resume parsing, automated interview scheduling, offer letter generation, and onboarding flows.",
                                    icon: "🎯",
                                    link: "/hiring"
                                },
                                {
                                    title: "HR Niti MIS Analytics",
                                    description: "Headcount analytics, variance reporting, and interactive dashboards for HR & Finance heads.",
                                    icon: "📊",
                                    link: "/analytics"
                                },
                                {
                                    title: "Delhi NCR Multi-State Payroll",
                                    description: "Location-based payroll rules for employees working across Delhi, Gurgaon, and Noida under one platform.",
                                    icon: "🗺️",
                                    link: "/hrms-payroll-software-in-delhi"
                                }
                            ].map((feature, index) => (
                                <Link
                                    key={index}
                                    href={feature.link}
                                    className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:gap-3 transition-all">
                                        <span>Learn more</span>
                                        <span>&rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 5. WHY BUSINESSES CHOOSE HR NITI (100% Exact Mumbai WhyChoose Design) */}
            {/* ========================================================================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Businesses Choose HR Niti
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                HR Niti combines HR management, payroll, attendance, recruitment and workforce analytics in one platform designed for Indian businesses.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🇮🇳",
                                    title: "Built for Indian Payroll",
                                    description: "Manage salary processing, deductions, payslips and payroll reporting through a centralized HRMS."
                                },
                                {
                                    icon: "📍",
                                    title: "Multi-State Workforce",
                                    description: "Manage employees across Delhi, Haryana, Uttar Pradesh and other locations from one platform."
                                },
                                {
                                    icon: "📱",
                                    title: "Employee Self-Service",
                                    description: "Give employees access to attendance, leave, payslips and HR services through web and mobile."
                                },
                                {
                                    icon: "🤖",
                                    title: "AI-Assisted HR",
                                    description: "Use AI-powered tools to support HR queries, recruitment, analytics and repetitive workflows."
                                },
                                {
                                    icon: "🔒",
                                    title: "Secure Access",
                                    description: "Role-based access and controlled employee-data permissions help organizations manage sensitive HR information."
                                },
                                {
                                    icon: "⚡",
                                    title: "Scalable Platform",
                                    description: "Support growing teams, multiple locations and expanding HR workflows from one platform."
                                }
                            ].map((b, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-3xl flex-shrink-0">
                                        {b.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {b.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            {b.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            {/* ========================================================================= */}
            {/* 8. IMPLEMENTATION & PRICING SECTION */}
            {/* ========================================================================= */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Implementation &amp; Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-2">
                            How to Implement HRMS &amp; Payroll in Delhi
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Structured 6-step roadmap from requirement analysis to go-live.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                        {[
                            { num: "01", title: "Requirement Analysis", desc: "Review employee structure and salary components." },
                            { num: "02", title: "HRMS Configuration", desc: "Set up employee groups and state payroll rules." },
                            { num: "03", title: "Data Migration", desc: "Import existing employee information into HR Niti." },
                            { num: "04", title: "Payroll Testing", desc: "Review sample dry-run payroll calculations." },
                            { num: "05", title: "Go Live", desc: "Officially execute live payroll runs." },
                            { num: "06", title: "Ongoing Support", desc: "Continuous assistance for payroll workflows." }
                        ].map((s, idx) => (
                            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                                <span className="font-extrabold text-emerald-600 text-lg">{s.num}</span>
                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{s.title}</h4>
                                <p className="text-[11px] text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pricing Tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                            <h4 className="font-bold text-gray-900 text-base">Small Business</h4>
                            <p className="text-2xl font-extrabold text-emerald-600">1 – 50</p>
                            <p className="text-xs text-gray-600">Core HR, automated payroll, ESS portal, biometric sync.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-500 text-center space-y-2 shadow-sm">
                            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full">Most Popular</span>
                            <h4 className="font-bold text-gray-900 text-base">Growing Business</h4>
                            <p className="text-2xl font-extrabold text-emerald-700">51 – 250</p>
                            <p className="text-xs text-gray-700">Multi-state NCR payroll, recruitment ATS, AI Copilot.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                            <h4 className="font-bold text-gray-900 text-base">Enterprise</h4>
                            <p className="text-2xl font-extrabold text-emerald-600">250+ Employees</p>
                            <p className="text-xs text-gray-600">Custom ERP integrations, dedicated account manager SLA.</p>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <a href="#demo-form" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2">
                            Get a Customized Quote <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 9. FAQ ACCORDION (100% Exact Mumbai CityFaqAccordion Design) */}
            {/* ========================================================================= */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                Frequently Asked Questions
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                                HRMS &amp; Payroll Software FAQs for Delhi
                            </h2>
                            <p className="text-gray-600 text-base">
                                Everything you need to know about implementing HR Niti in your Delhi NCR business.
                            </p>
                        </div>

                        {/* FAQ Accordion List */}
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                                            className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-base md:text-lg hover:text-emerald-700 transition-colors focus:outline-none"
                                            aria-expanded={isOpen}
                                        >
                                            <span>{faq.q}</span>
                                            <span className={`w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "rotate-180 bg-emerald-600 text-white" : ""}`}>
                                                ▼
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-emerald-50/20">
                                                <p>{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* CTA SECTION */}
            {/* ========================================================================= */}
            <CTASection cityName="Delhi NCR" />

            {/* ========================================================================= */}
            {/* 10. INTER-CITY NAVIGATION */}
            {/* ========================================================================= */}
            <InterCityNav />

        </div>
    );
}
