"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitDemoLeadAction } from "@/app/actions/leadActions";
import BusinessSizeNav from "@/components/solutions/BusinessSizeNav";
import { SMALL_BUSINESS_FAQS, FAQItem } from "./smallBusinessData";
import {
  Users,
  CalendarCheck,
  CreditCard,
  Calendar,
  Receipt,
  Smartphone,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Code2,
  Briefcase,
  Layers,
  Store,
  FileSpreadsheet,
  Clock,
  Building,
  AlertTriangle,
  FileText,
  TrendingUp,
  Zap,
  Shield,
  Laptop,
  Lock,
  ChevronDown,
  Check,
} from "lucide-react";

export default function SmallBusinessSolutionsClient() {
  // Lead form state matching BusinessSizeHero in medium-business-solutions
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "1-19",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // FAQ State & Category Filter
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitDemoLeadAction({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      employees: formData.employees,
      sourcePage: "HRMS & Payroll Software for Small Businesses",
      sourceUrl: typeof window !== "undefined" ? window.location.href : "/small-business-solutions",
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "1-19",
      });
      setTimeout(() => setSubmitted(false), 7000);
    } else {
      setErrorMessage(res.error || "Failed to submit lead.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // FAQ Categories Mapping for interactive filtering
  const faqCategories: { [key: string]: number[] } = {
    All: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    "Payroll & Taxes": [3, 4, 5, 8],
    "Attendance & Mobile": [6, 7, 9, 10],
    "Setup & Pricing": [0, 1, 2, 11],
    "Scale & Automation": [12, 13, 14],
  };

  const filteredFaqIndices = faqCategories[selectedFaqCategory] || faqCategories["All"];

  return (
    <div className="bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (Matching Theme of medium-business-solutions)
         ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-emerald-500 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-teal-400 rounded-full blur-[120px] opacity-40"></div>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Hero Copy & Value Props */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Business Scale Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20 text-emerald-200 shadow-inner">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span>1 – 50 Employees &bull; Simple, Affordable &amp; 100% Compliant for Startups &amp; SMBs</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                HRMS &amp; Payroll Software for Small Businesses in India
              </h1>

              {/* Subtitle H2 */}
              <h2 className="text-xl md:text-2xl font-bold text-amber-300 leading-snug">
                Simple HR &amp; Payroll Management for Growing Businesses
              </h2>

              {/* Secondary Lead Copy */}
              <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                Run payroll, attendance and everyday HR from one simple platform. HR Niti helps startups
                and small businesses manage employees, attendance, leave, payroll, expenses and statutory
                payroll workflows without relying on spreadsheets and disconnected HR tools.
              </p>

              {/* Key Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Automated payroll workflows",
                  "PF, ESIC, PT & TDS support",
                  "Mobile attendance & employee self-service",
                  "Digital payslips, leave & expense management",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-sm text-emerald-50">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Floating Live SaaS Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>1-Click Run</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Salary Payouts</div>
                  <div className="text-[11px] text-emerald-200/70">Attendance auto-sync</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>100% Safety</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">PF &amp; ESIC ECR</div>
                  <div className="text-[11px] text-emerald-200/70">Ready-to-file exports</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile ESS</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">GPS &amp; Selfie</div>
                  <div className="text-[11px] text-emerald-200/70">No hardware needed</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Fast Setup</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">&lt;48 Hours</div>
                  <div className="text-[11px] text-emerald-200/70">Excel bulk import</div>
                </div>
              </div>

              {/* AEO Quick Direct Answer Callout Box */}
              <div className="bg-emerald-950/50 border border-emerald-500/30 backdrop-blur-xl rounded-2xl p-4.5 text-left shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-start gap-3">
                  <span className="bg-amber-400 text-emerald-950 font-extrabold px-2 py-0.5 text-[10px] rounded uppercase tracking-wider mt-0.5 flex-shrink-0 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Quick Answer
                  </span>
                  <p className="text-xs md:text-sm text-emerald-100 leading-relaxed font-normal">
                    HRMS software for small businesses is a cloud-based system that helps companies manage
                    employee records, attendance, leave, payroll, expenses and employee self-service from one
                    platform. For Indian businesses, a small-business HRMS can also automate payroll
                    workflows involving PF, ESIC, Professional Tax and TDS without manual spreadsheet calculations.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: UPPER FOLD LEAD FORM */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-gray-900 border border-amber-200/60 relative overflow-hidden ring-1 ring-black/5">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/70 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-100/70 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                <div className="mb-6 text-center lg:text-left relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200/60 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    1 - 50 Employees Demo
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Get Personalized Walkthrough
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    See how HR Niti scales tailored to your company size in a 15-minute live preview.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50/90 rounded-2xl text-center border border-emerald-200 relative z-10">
                    <span className="text-4xl">🎉</span>
                    <h4 className="text-lg font-bold text-emerald-950 mt-3">Demo Request Submitted!</h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      Thank you! Our small business payroll specialist will connect with you within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rahul@company.com"
                          className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Pvt Ltd"
                          className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Employees *
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        >
                          <option value="1-19">1 - 19 Employees</option>
                          <option value="20-49">20 - 49 Employees</option>
                          <option value="50-250">50 - 250 Employees</option>
                          <option value="250+">250+ Employees</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl text-base shadow-xl shadow-emerald-700/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Saving Lead Details..." : "Book Customized Solution Demo ➔"}
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        256-Bit SSL
                      </span>
                      <span>&bull;</span>
                      <span>No Credit Card</span>
                      <span>&bull;</span>
                      <span>14-Day Free Trial</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. AEO DEFINITION SECTION (Placed Near the Top - Modern Redesign)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Core Architecture &amp; Overview
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-3 tracking-tight">
                What Is HRMS Software for Small Businesses?
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
                A single unified cloud platform replacing manual registers, Excel formulas, and scattered WhatsApp requests.
              </p>
            </div>

            {/* Modern Definition Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border border-emerald-200/80 shadow-xl shadow-emerald-950/5 p-8 md:p-10 mb-10 overflow-hidden">
              {/* Subtle background element */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>

              {/* Tag Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-3 py-1 rounded-full shadow-sm">
                  Official Definition
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  ☁️ 100% Cloud-Based
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  🇮🇳 Indian Statutory Ready
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  📱 Mobile ESS App
                </span>
              </div>

              {/* Direct AEO Definition Answer */}
              <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6">
                HRMS software for small businesses is a cloud-based system that helps companies manage
                employee records, attendance, leave, payroll, expenses and employee self-service from one
                platform. For Indian businesses, a small-business HRMS can also automate payroll
                workflows involving PF, ESIC, Professional Tax and TDS. Instead of maintaining employee
                information across spreadsheets, emails and separate applications, businesses can
                manage routine HR operations through a centralized system.
              </p>

              {/* Bottom Feature Badges Bar */}
              <div className="pt-6 border-t border-emerald-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Unified Central Employee Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>1-Click Salary Payouts &amp; Payslips</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>EPF, ESIC, PT &amp; TDS Automation</span>
                </div>
              </div>
            </div>

            {/* Two Column H3 Modern Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-lg shadow-gray-200/40 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    What Does a Small Business HRMS Manage?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    A dedicated small-business HRMS manages the complete employee lifecycle from recruitment to exit, replacing manual administrative friction with automated workflows:
                  </p>

                  <ul className="space-y-3 text-xs text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Digital Onboarding:</strong> KYC document collection (PAN, Aadhaar, Bank)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Attendance Tracking:</strong> Mobile GPS geofencing &amp; biometric machine sync</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Leave Management:</strong> Real-time accruals, sandwich rules &amp; 1-tap approvals</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Salary Processing:</strong> Gross-to-net pay calculation &amp; bank transfer sheets</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Employee Self-Service:</strong> 24/7 mobile app for payslips and tax projections</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Lifecycle Coverage: 100% Digital</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-lg shadow-gray-200/40 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    Why Small Businesses Need HR Automation
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    Early-stage businesses with 1–50 employees cannot afford dedicated HR teams or compliance fines. Automation creates immediate operational leverage:
                  </p>

                  <ul className="space-y-3 text-xs text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Zero Math Errors:</strong> Eliminates 90% of manual spreadsheet calculation bugs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Time Savings:</strong> Saves 15–20 hours of founder and manager time every month</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Statutory Protection:</strong> Avoids costly late filing penalties for PF, ESIC &amp; PT</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Fewer Inquiries:</strong> Cuts repetitive salary and leave questions by over 85%</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Professional Brand:</strong> Delivers a modern first impression to attract top talent</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Founder Time Saved: 20 hrs/mo</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. COMMON HR CHALLENGES FOR SMALL BUSINESSES (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                The Reality of Manual Operations
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Common HR Challenges for Small Businesses
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Managing 10 to 50 employees on spreadsheets inevitably leads to administrative chaos,
                costly payroll mistakes, and statutory compliance penalties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Challenge 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                      Risk: Proxy Punches
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manual Attendance</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Tracking punches in physical registers or Excel sheets makes calculating late arrivals, early
                    departures, overtime, and shift penalties extremely time-consuming and prone to proxy punching.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Mobile GPS geofencing &amp; biometric auto-sync</span>
                  </div>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-rose-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl font-bold group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <FileSpreadsheet className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-900 px-2.5 py-0.5 rounded-full">
                      Risk: Salary Errors
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Spreadsheet Payroll</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Calculating salary manually in Excel with custom formulas frequently causes math errors,
                    unaccounted loss-of-pay (LWP) days, incorrect tax brackets, and delayed salary disbursements at month-end.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> 1-click salary run with verified attendance data</span>
                  </div>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full">
                      Risk: WhatsApp Clutter
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Leave &amp; Approval Delays</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Leaves requested across WhatsApp messages, emails, and verbal conversations get missed. Employees
                    lack real-time visibility into leave balances, leading to disputes and friction with founders.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> 1-tap mobile approvals with live balance tracking</span>
                  </div>
                </div>
              </div>

              {/* Challenge 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl font-bold group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-900 px-2.5 py-0.5 rounded-full">
                      Risk: Scattered Files
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Employee Documents</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Scattered PAN, Aadhaar, previous employment certificates, and appointment letters across Google Drive,
                    email inboxes, and desktop folders make background audits and employee offboarding stressful.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Encrypted digital employee document vault</span>
                  </div>
                </div>
              </div>

              {/* Challenge 5 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-red-400 hover:shadow-xl transition-all md:col-span-2 lg:col-span-2 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center text-xl font-bold group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-900 px-2.5 py-0.5 rounded-full">
                      Risk: Legal Notices &amp; Fines
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Payroll Compliance</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Navigating complex Indian labor laws—such as EPF contribution rates, ESIC wage thresholds,
                    state-specific Professional Tax (PT) slabs, and TDS under Section 192—leads to penalties, notices,
                    and legal headaches when handled manually.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Built-in Indian statutory formulas &amp; automated ECR generation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. EVERYTHING YOUR SMALL BUSINESS NEEDS (H2 & H3s)
             (Matching BusinessSizeFeatures in medium-business-solutions)
         ─────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Tailored Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Everything Your Small Business Needs to Manage HR
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Key HRMS &amp; payroll modules designed to solve operational bottlenecks unique to companies with 1 to 50 employees.
              </p>
            </div>

            {/* Feature Cards Grid (Exact styling of BusinessSizeFeatures) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Module 1: Employee Management */}
              <Link
                href="/employee-management"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Core Database
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Employee Management
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Centralize employee records, KYC documents, bank account details, and employment history in a secure digital database. Issue appointment letters, manage probation, and organize hierarchies without paper files.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 2: Attendance Management */}
              <Link
                href="/attendance"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Time &amp; Tracking
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Attendance Management
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Capture staff attendance across office, hybrid, or field work. Support biometric devices, mobile GPS geotagged punches with geofencing, and selfie verification, with automated overtime and late calculation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 3: Payroll Management */}
              <Link
                href="/payroll-software"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Salary Engine
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Payroll Management
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Process error-free salaries in minutes. Automatically compute gross salaries, statutory deductions, bonuses, and loss of pay from verified attendance. Generate 1-click batch bank payout sheets.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 4: Leave Management */}
              <Link
                href="/leave-management"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Leave Policies
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Leave Management
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Set up custom leave policies for CL, SL, and PL. Configure monthly balance accruals, carry-forward limits, and sandwich rules. Managers review and approve requests with one tap on mobile.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 5: Expense Management */}
              <Link
                href="/expense-management-software"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Reimbursements
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Expense Management
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Eliminate lost receipts and chaotic reimbursements. Employees snap photos of bills on mobile, submit claims, and managers approve digitally with payments settling right into monthly payroll.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 6: Employee Self-Service */}
              <Link
                href="/employee-self-service"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Mobile ESS App
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Employee Self-Service
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Empower your team with intuitive Android &amp; iOS mobile apps. Employees view punch histories, apply for leave, download encrypted payslips, and check TDS forecasts, reducing HR queries by 85%.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 7: Payroll Compliance */}
              <Link
                href="/payroll-software"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Statutory Filing
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Payroll Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    100% compliant with Indian labor laws without expensive third-party payroll agencies. Calculate EPF, ESIC, State PT, and Section 192 TDS, producing ready-to-upload electronic challans (ECR).
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 8: HR Reports & Analytics */}
              <Link
                href="/hr-mis-reports"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Executive MIS
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    HR Reports &amp; Analytics
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Gain instant workforce visibility. Generate MIS reports for headcount growth, attrition, monthly payroll spends, attendance percentages, and statutory registers cleanly formatted for audits.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn how it works</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. PAYROLL COMPLIANCE FOR SMALL BUSINESSES IN INDIA (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Statutory Accuracy Without Legal Headaches
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Payroll Compliance for Small Businesses in India
              </h2>
              <p className="text-gray-600 text-base max-w-3xl mx-auto font-normal">
                Indian payroll compliance has strict calculation formulas and filing schedules.
                HR Niti automates the math based on authoritative regulations, avoiding penalties
                while preserving full audit readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PF */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">PF (Provident Fund)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                      EPFO ECR
                    </span>
                  </div>
                  <div className="inline-block bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    12% EPF + 12% EPS &bull; ₹15,000 Ceiling
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Automates EPF deductions (12% employee share and 12% employer share allocated across EPF and EPS)
                    under the standard statutory wage ceiling of ₹15,000, with support for voluntary PF contributions and
                    ready-to-upload electronic challan return (ECR) text files.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated monthly ECR file generation</span>
                </div>
              </div>

              {/* ESIC */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">ESIC (Employee State Insurance)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                      ESIC Portal
                    </span>
                  </div>
                  <div className="inline-block bg-blue-50 text-blue-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    0.75% + 3.25% &bull; ₹21,000 Gross Limit
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Calculates ESIC contributions (0.75% employee and 3.25% employer share) for all eligible staff earning
                    up to the statutory threshold of ₹21,000 gross wages per month, providing monthly return contribution
                    sheets for simple compliance submission.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Monthly ESIC contribution returns</span>
                </div>
              </div>

              {/* Professional Tax */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Professional Tax (PT)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                      All Indian States
                    </span>
                  </div>
                  <div className="inline-block bg-amber-50 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    State Slabs &amp; Feb Adjustments
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Maintains up-to-date state-level tax slabs across India, including Maharashtra, Karnataka, Telangana,
                    West Bengal, Gujarat, and Tamil Nadu, automatically applying monthly salary thresholds and specific
                    annual adjustments (e.g., February deductions in Maharashtra).
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Configured by employee workplace state</span>
                </div>
              </div>

              {/* TDS */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">TDS (Tax Deducted at Source)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                      Section 192
                    </span>
                  </div>
                  <div className="inline-block bg-purple-50 text-purple-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    Old vs New Regime Comparisons
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Computes salary TDS under Section 192 across both Old and New Tax Regimes. Manages employee investment
                    declarations (80C, 80D, HRA, home loan interest), proof submissions, and monthly tax deduction forecasts
                    to avoid year-end salary shock.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Automated Section 192 tax forecasts</span>
                </div>
              </div>

              {/* Form 16 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Form 16</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full">
                      Annual Tax Return
                    </span>
                  </div>
                  <div className="inline-block bg-teal-50 text-teal-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    Part A &amp; Part B ESS Downloads
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Simplifies annual tax closing by aggregating quarterly 24Q TDS filing records and generating digitized,
                    downloadable Form 16 Part A and Part B salary certificates that employees can access directly from
                    their self-service dashboard.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Available in employee ESS portal</span>
                </div>
              </div>

              {/* State-Specific Payroll */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:border-rose-400 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">State-Specific Payroll</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full">
                      Labour Acts
                    </span>
                  </div>
                  <div className="inline-block bg-rose-50 text-rose-800 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    Shops Act &amp; LWF Support
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Adapts wage structures and minimum wage thresholds to State Shops &amp; Commercial Establishments Acts,
                    Labour Welfare Fund (LWF) contributions, and local festival holiday schedules across diverse operating branches.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Multi-location &amp; branch support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. HOW HR NITI WORKS (H2 & H3s - 5 STEP WORKFLOW)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                5-Step Onboarding Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                How HR Niti Works
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                From initial employee setup to final salary payout and payslip distribution,
                HR Niti streamlines your entire monthly operations in 5 clear steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Step 1 */}
              <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Add Employees
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Bulk import your current team from an Excel spreadsheet in seconds, or invite new hires to upload their own PAN, Aadhaar, and bank accounts.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] font-bold text-emerald-700 flex items-center justify-between">
                  <span>Setup in &lt;20 min</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Configure HR Policies
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Set work hours, shifts, and leave quotas (CL, SL, PL). Configure statutory deduction defaults (PF, ESIC, PT) with Indian legal templates.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] font-bold text-blue-700 flex items-center justify-between">
                  <span>Guided Indian Defaults</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Manage Attendance &amp; Leave
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Punches flow in automatically from mobile GPS or biometrics. Managers approve leaves and overtime in real-time with one tap.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] font-bold text-amber-700 flex items-center justify-between">
                  <span>100% Real-Time Sync</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    Process Payroll
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Calculate gross-to-net pay, PF, ESIC, PT, and TDS in 1 click. Preview statements and generate batch bank transfer files for ICICI, HDFC, SBI.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] font-bold text-purple-700 flex items-center justify-between">
                  <span>&lt;5 min monthly run</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    05
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    Share Payslips &amp; Reports
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Automate password-protected payslip delivery via app &amp; email. Download EPFO ECR files, ESIC returns, and statutory MIS registers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] font-bold text-teal-700 flex items-center justify-between">
                  <span>100% Audit Ready</span>
                  <span>➔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. EMPLOYEE-COUNT INTENT SECTIONS (H2s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Right-Sized Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                HRMS Tailored to Your Headcount
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Whether you are an early 5-member team or scaling toward 50 employees,
                HR Niti adapts to your specific growth stage and statutory obligations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* HRMS for 1-10 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200/90 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Micro-Teams &amp; Early Startups
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 1–10 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    For micro-teams, founders handle HR personally. Replace messy WhatsApp leave threads, spreadsheet errors,
                    and manual salary slips with an instant mobile-first HR system that takes less than 20 minutes to set up.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero hardware or IT team needed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Mobile GPS clock-ins &amp; digital payslips</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Affordable per-employee monthly pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Professional offer letters for new hires</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Get Started for 1–10 Employees</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for 11-25 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-700/10 flex flex-col justify-between relative hover:shadow-2xl transition-all">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular for Startups
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Fast Growth Stage
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 11–25 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    Crossing 10 to 20 employees triggers mandatory Indian statutory thresholds (EPF, ESIC, and State PT).
                    HR Niti automates compliance calculations and delegates leave approvals to emerging team leads.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Automated EPF (at 20 employees) &amp; ESIC thresholds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Manager approval hierarchies &amp; leave policies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Digital employee expense receipt workflows</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Biometric machine &amp; mobile app synchronization</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <span>Explore 11–25 Employee Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for 26-50 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200/90 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Scaling SMBs &amp; Multi-Branch
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 26–50 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    At 26 to 50 employees, organizations operate distinct departments (Sales, Tech, Operations) and multi-state
                    offices. Gain complete workforce reporting, audit-ready compliance registers, and optional productivity insights.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-state Professional Tax &amp; branch calendars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Executive MIS analytics &amp; payroll cost reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Form 16 digital generation &amp; TDS tax declarations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Seamless scalability to 50+ enterprise tiers</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Scale with 26–50 Employee HRMS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. BUILT FOR INDIAN STARTUPS & SMALL BUSINESSES (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Industry Tailored Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Built for Indian Startups &amp; Small Businesses
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Whether you are an engineering team in Bengaluru, a digital marketing agency in Mumbai,
                or a multi-store retailer in Delhi, HR Niti is tailored to your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Startups */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Startups
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    High-growth startups need rapid hiring, digital onboarding, and zero HR overhead. HR Niti gives you
                    equity-friendly salary structures, automated probation management, and professional payslips that impress talent.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <Link href="/demo" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                    <span>Startups Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* IT & Software Companies */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-xs">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    IT &amp; Software Companies
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Designed for tech companies with flexible working hours, hybrid arrangements, and remote developers.
                    Integrate attendance with project timesheets and optional Windows productivity intelligence.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <Link
                    href="/employee-monitoring-productivity-software"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <span>Explore Workforce Intelligence</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Agencies */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors shadow-xs">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    Agencies
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Creative, digital marketing, and design agencies need transparent client billable hours, freelance
                    retainer management, and fast expense reimbursement for shoots, tools, and client meetings.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <Link href="/timesheet-management" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                    <span>Timesheet Tracking</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Consulting */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors shadow-xs">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    Consulting
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Management, financial, and legal consulting firms benefit from rigorous attendance records, multi-state
                    professional tax compliance, and automated travel expense workflows for on-site client assignments.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <Link href="/expense-management-software" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                    <span>Expense Automation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Professional Services */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-xs">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Professional Services
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    CA firms, architectural studios, and law offices require accurate documentation storage, time-tracking,
                    and compliant salary processing for partners, associates, and articled trainees.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <Link href="/demo" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Retail & Other SMBs */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-rose-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors shadow-xs">
                    <Store className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors">
                    Retail &amp; Other SMBs
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Retail showrooms, distribution hubs, and small manufacturing units with multiple shifts rely on mobile
                    GPS geofencing or physical biometrics to stop proxy punching and track store staff attendance.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <Link href="/attendance" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                    <span>Biometric &amp; GPS Setup</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. MANUAL HR VS HR NITI – COMPARISON TABLE
             (Matching BusinessSizeComparison in medium-business-solutions)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Clear Operational Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Manual HR vs HR Niti
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                See how replacing manual Excel spreadsheets, paper registers, and WhatsApp threads
                with HR Niti fundamentally transforms your operations.
              </p>
            </div>

            {/* Comparison Table (Exact styling of BusinessSizeComparison) */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 text-white text-sm md:text-base">
                    <th className="py-4.5 px-6 font-bold">HR Process</th>
                    <th className="py-4.5 px-6 font-bold bg-gray-800/80 text-gray-300">
                      Manual Approach
                    </th>
                    <th className="py-4.5 px-6 font-bold bg-emerald-700/90 text-amber-300">
                      With HR Niti
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    { metric: "Employee records", manual: "Excel/files", hrniti: "Centralized employee database" },
                    { metric: "Attendance", manual: "Spreadsheet/manual register", hrniti: "Mobile/GPS/biometric options" },
                    { metric: "Leave", manual: "WhatsApp/email", hrniti: "Digital approval workflow" },
                    { metric: "Payroll", manual: "Manual calculations", hrniti: "Automated payroll workflows" },
                    { metric: "Payslips", manual: "Manually shared", hrniti: "Digital employee access/delivery" },
                    { metric: "Expenses", manual: "Paper/Excel", hrniti: "Digital claims & approvals" },
                    { metric: "Compliance", manual: "Manual calculations", hrniti: "Automated statutory calculations" },
                    { metric: "Reports", manual: "Manual Excel reports", hrniti: "HR & payroll reports" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="py-4 px-6 font-bold text-gray-900">
                        {row.metric}
                      </td>
                      <td className="py-4 px-6 text-gray-600 bg-gray-50/30 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                          <span>{row.manual}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-emerald-950 bg-emerald-50/30">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                          <span>{row.hrniti}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="p-4 bg-emerald-50/60 border-t border-emerald-100 flex items-center justify-between text-xs font-semibold text-emerald-900">
                <span>Result: Over 80% reduction in administrative effort and 0% statutory penalty risk.</span>
                <Link href="/demo" className="text-emerald-700 hover:text-emerald-800 font-bold underline">
                  See the difference live ➔
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          10. WHY CHOOSE HR NITI FOR YOUR SMALL BUSINESS? (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                The HR Niti Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Why Choose HR Niti for Your Small Business?
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                We built HR Niti specifically to overcome the frustrations small businesses experience
                with slow, overpriced enterprise HR software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🇮🇳
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Indian Compliance</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Native statutory rules for EPF, ESIC, State PT, and TDS Section 192. Always updated with current budget
                  notifications so you stay compliant.
                </p>
              </div>

              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">&lt;48-Hour Onboarding</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Import employees easily via Excel. No weeks of configuration or mandatory implementation consultants.
                  Run your first payroll in 2 days.
                </p>
              </div>

              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  💰
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fair, Transparent Pricing</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Affordable per-employee-per-month pricing. No enterprise setup fees, no lock-ins, and no paying for
                  features your small business doesn't need.
                </p>
              </div>

              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🤝
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Human Support</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Direct phone and WhatsApp support from Indian payroll specialists who understand local statutory
                  audits and tax filing deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          11. FREQUENTLY ASKED QUESTIONS (15 AEO FAQs with Categories)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base font-normal">
                Everything you need to know about implementing HR Niti for businesses with 1 to 50 employees.
              </p>
            </div>

            {/* Interactive FAQ Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {Object.keys(faqCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFaqCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                    selectedFaqCategory === category
                      ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-400 hover:text-emerald-700"
                  }`}
                >
                  {category} ({faqCategories[category].length})
                </button>
              ))}
            </div>

            {/* Accordion List (Exact styling of BusinessSizeFaq) */}
            <div className="space-y-4">
              {filteredFaqIndices.map((faqIndex) => {
                const faq = SMALL_BUSINESS_FAQS[faqIndex];
                const isOpen = openFaqIndex === faqIndex;
                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faqIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-base md:text-lg hover:text-emerald-700 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span
                        className={`w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-extrabold text-lg flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-emerald-600 text-white" : ""
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          12. READY TO SIMPLIFY YOUR SMALL BUSINESS HR? (CTA Section)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-emerald-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-amber-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-inner">
              Get Started in &lt; 48 Hours
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              Ready to Simplify Your Small Business HR?
            </h2>
            <p className="text-emerald-100/90 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
              Join hundreds of growing Indian startups and SMBs that run payroll on time, ensure
              100% statutory compliance, and delight their employees with HR Niti.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 transition-all shadow-xl shadow-emerald-700/20 text-base cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-base cursor-pointer"
              >
                <span>View Transparent Pricing</span>
              </Link>
            </div>

            <p className="text-xs text-emerald-200/80 mt-6 font-medium">
              No credit card required &bull; 48-hour assisted onboarding &bull; Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          13. BUSINESS SIZE NAVIGATION (Scale between Tiers)
         ─────────────────────────────────────────────────────────── */}
      <BusinessSizeNav currentScale="small" />
    </div>
  );
}
