"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitDemoLeadAction } from "@/app/actions/leadActions";
import BusinessSizeNav from "@/components/solutions/BusinessSizeNav";
import { MEDIUM_BUSINESS_FAQS, MediumBusinessFAQItem } from "./mediumBusinessData";
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
  GitBranch,
  Network,
  Cpu,
  Calculator,
  Server,
  UserCheck,
} from "lucide-react";

export default function MediumBusinessSolutionsClient() {
  // Lead form state matching BusinessSizeHero
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "50-250",
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
      sourcePage: "HRMS & Payroll Software for Medium Businesses",
      sourceUrl: typeof window !== "undefined" ? window.location.href : "/medium-business-solutions",
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "50-250",
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
    "Multi-Branch & Payroll": [0, 1, 3, 4],
    "Approvals & Policies": [2, 5, 10, 12],
    "Integrations & AI": [6, 7, 9, 11],
    "Scale & Onboarding": [8, 13, 14],
  };

  const filteredFaqIndices = faqCategories[selectedFaqCategory] || faqCategories["All"];

  return (
    <div className="bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (Matching Theme of small-business-solutions)
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
                <span>50 – 250 Employees &bull; Mid-Market, Growing Companies &amp; Multi-Branch Teams</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                HRMS &amp; Payroll Software for Medium Businesses in India
              </h1>

              {/* Subtitle H2 */}
              <h2 className="text-xl md:text-2xl font-bold text-amber-300 leading-snug">
                Scale HR, Payroll &amp; Workforce Operations Without Adding Administrative Complexity
              </h2>

              {/* Secondary Lead Copy */}
              <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                Manage multi-branch HR, payroll and approvals from one scalable platform. HR Niti helps growing
                companies with 50–250 employees centralize employee management, attendance, leave, payroll, approvals,
                HR reporting, performance and employee self-service across departments and locations.
              </p>

              {/* Key Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Multi-branch & multi-state HR operations",
                  "Configurable multi-level approvals",
                  "Payroll, attendance & statutory workflows",
                  "HR MIS, workforce analytics & variance reporting",
                  "Employee self-service with Niti AI",
                  "Tally, QuickBooks & accounting integration",
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
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Multi-Branch</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Cross-Location</div>
                  <div className="text-[11px] text-emerald-200/70">Unified state views</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Network className="w-3.5 h-3.5" />
                    <span>Approvals</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Multi-Tier Logic</div>
                  <div className="text-[11px] text-emerald-200/70">Manager hierarchies</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>HR MIS</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Variance Audits</div>
                  <div className="text-[11px] text-emerald-200/70">Cost center analytics</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold">
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Accounting</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Tally Sync</div>
                  <div className="text-[11px] text-emerald-200/70">QuickBooks &amp; Zoho</div>
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
                    HRMS software for a medium-sized business is a centralized system for managing employee records,
                    attendance, leave, payroll, approvals, compliance, reporting and employee self-service as an
                    organization grows. For companies with multiple departments or locations, an HRMS can also centralize
                    branch-level policies, payroll workflows, approvals and workforce analytics without spreadsheet bottlenecks.
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
                    50 - 250 Employees Demo
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
                      Thank you! Our mid-market enterprise specialist will connect with you within 15 minutes.
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
                        placeholder="e.g. Vikram Singhania"
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
                          placeholder="vikram@enterprise.com"
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
                          placeholder="Enterprise India Pvt Ltd"
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
                          <option value="50-100">50 - 100 Employees</option>
                          <option value="101-150">101 - 150 Employees</option>
                          <option value="151-250">151 - 250 Employees</option>
                          <option value="250+">250+ Employees</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl text-base shadow-xl shadow-emerald-700/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Saving Lead Details..." : "Book Personalized Solution Demo ➔"}
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        256-Bit SSL
                      </span>
                      <span>&bull;</span>
                      <span>Dedicated Specialist</span>
                      <span>&bull;</span>
                      <span>Multi-Branch Ready</span>
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
                Mid-Market Operational Blueprint
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-3 tracking-tight">
                What Is HRMS Software for a Medium-Sized Business?
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
                A unified workforce architecture designed to govern multi-department, multi-location companies scaling from 50 to 250 employees.
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
                  🏢 Multi-Branch Architecture
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  🇮🇳 Multi-State Statutory Compliance
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  🤖 Niti AI Employee Copilot
                </span>
              </div>

              {/* Direct AEO Definition Answer */}
              <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6">
                HRMS software for a medium-sized business is a centralized system for managing employee records,
                attendance, leave, payroll, approvals, compliance, reporting and employee self-service as an organization grows.
                For companies with multiple departments or locations, an HRMS can also centralize branch-level policies,
                payroll workflows, approvals and workforce analytics. HR Niti is designed for businesses with approximately
                50–250 employees that need more control and automation than spreadsheet-based HR processes can provide.
              </p>

              {/* Bottom Feature Badges Bar */}
              <div className="pt-6 border-t border-emerald-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Unified Multi-Branch Organization Structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Configurable Multi-Tier Approval Hierarchies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Direct Tally, QuickBooks &amp; Accounting Sync</span>
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
                    When Does a Growing Company Need a More Advanced HRMS?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    As headcounts reach 50 employees and scale toward 250, basic HR tools and founder-handled spreadsheets fail. A mid-market HRMS becomes indispensable when:
                  </p>

                  <ul className="space-y-3 text-xs text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Multiple Locations:</strong> Opening branch offices or retail stores across multiple Indian cities</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Approval Bottlenecks:</strong> Founders can no longer personally review every leave, expense, and salary tweak</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>State Labor Laws:</strong> Navigating differing Professional Tax slabs and holiday lists across states</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Finance Friction:</strong> Accounts team requires pre-mapped journal vouchers for Tally or QuickBooks</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>HR Ticket Overload:</strong> Repetitive payslip and tax questions consuming over 50% of HR manager bandwidth</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Operational Scale: 50–250 Staff</span>
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
                    What Should a 50–250 Employee HRMS Handle?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    A mid-market HRMS platform must bridge the gap between startup agility and enterprise governance without complex, multi-month implementations:
                  </p>

                  <ul className="space-y-3 text-xs text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Hierarchical Permissions:</strong> Granular access controls separating Admin, Finance, Manager, and Employee roles</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Cross-Branch Attendance:</strong> Synchronizing biometric hardware, GPS geofencing, and rotational shifts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Consolidated Statutory Vault:</strong> Automated PF ECR generation, ESIC filing returns, and quarterly 24Q TDS files</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>HR MIS Analytics:</strong> Departmental CTC variance, overtime costs, attrition rates, and headcount forecasts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Appraisal &amp; OKR Engine:</strong> Goal tracking, 360-degree performance reviews, and bonus incentives</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Governance: 100% Audit Ready</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. COMMON HR CHALLENGES FOR MEDIUM BUSINESSES (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                Operational Friction at Scale
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                HR Challenges That Appear as Companies Scale
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                As organizations expand across 50 to 250 employees, manual processes break down into cross-branch silos,
                lost approval requests, and financial reconciliation headaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Challenge 1: Multiple Branches & Locations */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <GitBranch className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                      Risk: Siloed Branches
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multiple Branches &amp; Locations</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Managing attendance, shifts, and leave across branches in different cities leads to fragmented records,
                    inconsistent policy enforcement, and lack of real-time visibility for corporate headquarters.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Unified branch hierarchy with centralized master control</span>
                  </div>
                </div>
              </div>

              {/* Challenge 2: Complex Approval Hierarchies */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Network className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full">
                      Risk: Approval Delays
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complex Approval Hierarchies</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Leave requests, expense bills, and salary increments get delayed in endless email chains or verbal
                    approvals. Managers lack a clear view of subordinate balances, stalling operations.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Multi-tier conditional approval chains with 1-tap mobile action</span>
                  </div>
                </div>
              </div>

              {/* Challenge 3: Payroll Variations */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-rose-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl font-bold group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-900 px-2.5 py-0.5 rounded-full">
                      Risk: Calculation Errors
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Payroll Variations</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Reconciling mid-month joining dates, variable incentives, overtime hours across plants, and differing
                    state Professional Tax deductions in spreadsheets inevitably causes costly payout errors and delays.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Automated gross-to-net payroll engine with statutory auto-slabs</span>
                  </div>
                </div>
              </div>

              {/* Challenge 4: Employee Query Volume */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl font-bold group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-900 px-2.5 py-0.5 rounded-full">
                      Risk: HR Burnout
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Employee Query Volume</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    With 100+ employees, HR teams spend up to 60% of their working hours answering repetitive inquiries
                    about payslips, tax deductions, leave policies, and company benefits.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> 24/7 Mobile ESS with Niti AI virtual HR copilot</span>
                  </div>
                </div>
              </div>

              {/* Challenge 5: HR Reporting */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl font-bold group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-900 px-2.5 py-0.5 rounded-full">
                      Risk: Blind Spots
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">HR Reporting</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Leadership requires monthly department-wise headcount analytics, overtime trends, attrition metrics,
                    and budget variance reports that take days to manually compile from disjointed files.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Real-time HR MIS dashboards and exportable executive analytics</span>
                  </div>
                </div>
              </div>

              {/* Challenge 6: Accounting Reconciliation */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <FileSpreadsheet className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                      Risk: Re-entry Fatigue
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Accounting Reconciliation</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Finance teams manually re-key payroll numbers, PF/ESIC liabilities, and department cost centers into
                    Tally or QuickBooks every month, creating audit mismatches and reconciliation delays.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Structured journal voucher exports directly into Tally &amp; QuickBooks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. CORE FEATURE MODULES: HR NITI FOR 50-250 EMPLOYEES (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Mid-Market Core Modules
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                HR Niti for 50–250 Employees
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Enterprise-grade workforce management capabilities tailored to the operational agility required by mid-sized businesses.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Module 1: Multi-Branch & Multi-State HR Management */}
              <Link
                href="/employee-management"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Multi-Branch Control
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Multi-Branch &amp; Multi-State HR Management
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Centralize workforce governance across headquarters, regional branches, and field sales teams. Establish branch-specific working hours, state holiday lists, and localized statutory configurations while retaining consolidated corporate visibility.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Explore branch management</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 2: Multi-Level Approval Workflows */}
              <Link
                href="/leave-management"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Network className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Workflow Governance
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Multi-Level Approval Workflows
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Delegate operational approvals without losing administrative control. Configure sequential or parallel approval chains for leave, expense claims, attendance regularization, and travel requests based on organizational reporting lines.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Explore approval rules</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 3: Payroll & Statutory Compliance */}
              <Link
                href="/payroll-software"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Statutory Engine
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Payroll &amp; Statutory Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Automate complex payroll processing for 50 to 250 employees. Auto-compute EPF, ESIC, State PT slabs, and TDS under Section 192, producing validated electronic challan files (ECR), Form 16s, and batch bank transfer sheets in minutes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Explore payroll software</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 4: HR MIS & Workforce Analytics */}
              <Link
                href="/hr-mis-reports"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Executive Intelligence
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    HR MIS &amp; Workforce Analytics
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Equip business leaders with actionable intelligence. Generate real-time reports for department CTC costs, overtime spending trends, attrition rates, leave liability valuations, and month-over-month payroll variance audits.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Explore HR MIS reports</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 5: Employee Self-Service & Niti AI */}
              <Link
                href="/employee-self-service"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Employee App &amp; AI
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Employee Self-Service &amp; Niti AI
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Deliver a superior digital employee experience with native iOS &amp; Android apps. Team members check attendance, download payslips, and query company HR policies directly using Niti AI, slashing routine HR ticket volumes by up to 80%.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Explore ESS &amp; Niti AI</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>

              {/* Module 6: Performance Management & OKRs */}
              <Link
                href="/performance-management-software"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Growth &amp; Appraisals
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Performance Management &amp; OKRs
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Align company objectives with individual accountability. Conduct structured quarterly or annual appraisal cycles, track employee OKRs and KPIs, collect 360-degree feedback, and automatically feed appraisal ratings into performance incentive calculations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Explore performance management</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. HOW HR NITI WORKS FOR A GROWING COMPANY (H2 & H3s - 5 Steps)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Mid-Market Implementation Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                How HR Niti Works for a Growing Company
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Deploying HR Niti across a mid-sized organization of 50 to 250 employees follows a structured 5-step operational pathway.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Configure Organization Structure
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Map corporate legal entities, branch offices, departments, cost centers, and designation hierarchies to establish clear governance boundaries.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-700 flex items-center justify-between">
                  <span>Org Structure Setup</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Import Employees
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Bulk-import employee master records, salary structures, leave balance ledgers, and KYC records using assisted Excel templates.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-blue-700 flex items-center justify-between">
                  <span>Assisted Data Migration</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Set Policies &amp; Approval Rules
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Configure branch-specific working hours, rotational shift rosters, sandwich leave rules, and multi-tier approval authorization matrices.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-amber-700 flex items-center justify-between">
                  <span>Approval Matrix Live</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    Run HR &amp; Payroll
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Sync biometric and mobile GPS punches, review monthly leave adjustments, compute gross-to-net pay with statutory deductions, and process salaries.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-purple-700 flex items-center justify-between">
                  <span>1-Click Salary Run</span>
                  <span>➔</span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    05
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    Review MIS &amp; Accounting Outputs
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Export Tally/QuickBooks journal vouchers, download EPFO ECR and ESIC return files, and review executive cost-center analytics.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-teal-700 flex items-center justify-between">
                  <span>Tally Sync &amp; Reports</span>
                  <span>➔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. MULTI-BRANCH & MULTI-STATE PAYROLL MANAGEMENT (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Inter-State Statutory Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Multi-Branch &amp; Multi-State Payroll Management
              </h2>
              <p className="text-gray-600 text-base max-w-3xl mx-auto font-normal">
                When operating multiple locations across India, businesses must comply with distinct state-specific labor enactments,
                differing Professional Tax slabs, and individual branch cost accounting. HR Niti standardizes multi-state complexity into automated rules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">State-Specific Professional Tax</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Automatically detects the workplace location of each employee and applies correct state PT slabs—including Maharashtra, Karnataka, Telangana, Tamil Nadu, West Bengal, and Gujarat—handling seasonal February adjustments without manual intervention.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Branch-Wise Variance Analytics</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Compare month-over-month salary costs, new hire impacts, overtime payouts, and attrition rates across different regional offices. Detect expenditure spikes and payroll anomalies before locking final salary runs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consolidated &amp; Branch Challans</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Generate unified EPFO Electronic Challan cum Return (ECR) text files across all entities or export branch-segregated ESIC returns and statutory deduction registers formatted specifically for commercial tax auditors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. HEADCOUNT INTENT SECTIONS (H2s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Right-Sized Operational Stages
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                HRMS Tailored to Your Headcount
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Whether you are crossing the 50-employee threshold or managing a 200+ multi-office enterprise,
                HR Niti provides the right governance capabilities for your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HRMS for 50-100 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Stage 1: Emerging Mid-Market
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 50–100 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    At 50 to 100 employees, organizations transition from founder-driven HR to their first dedicated HR manager. Eliminate manual attendance reconciliation, establish structured leave policies, and automate statutory PF, ESIC, and PT filings.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Single or multi-biometric machine synchronization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Manager approval hierarchies for leave and expenses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>1-click salary calculations and bank payment files</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Employee self-service mobile apps for payslips</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Get Started for 50–100 Employees</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for 101-150 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-700/10 flex flex-col justify-between relative hover:shadow-2xl transition-all">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Rapid Scaling Stage
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Stage 2: Multi-Department Growth
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 101–150 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    Crossing 100 employees requires formal department structures (Engineering, Sales, Operations, Finance) and multi-level approval matrices. Track rotational shift rosters, automate reimbursement workflows, and export payroll directly into Tally or QuickBooks.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-tier approval workflows with conditional routing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Direct journal voucher export for Tally Prime and QuickBooks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Niti AI employee assistant to resolve routine HR queries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Departmental CTC variance and overtime tracking</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <span>Explore 101–150 Employee Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for 151-250 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Stage 3: Mature Mid-Market
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 151–250 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    At 151 to 250 employees, companies operate complex organizational matrices, performance management review cycles, and multi-state tax compliance across regional branches. Access advanced HR analytics, OKRs, and custom role permissions.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Quarterly OKR and 360-degree appraisal cycles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-state Professional Tax and Labour Welfare Fund logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Executive HR MIS dashboards with attrition forecasting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Granular role-based security separating HR, Finance &amp; Admins</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Scale with 151–250 Employee HRMS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for Multi-Location & Multi-Department Companies */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Multi-Entity Operations
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for Multi-Location &amp; Multi-Department Companies
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    Designed for multi-unit retail chains, distributed engineering centers, manufacturing facilities, and healthcare providers. Establish distinct branch holiday calendars, localized shift timings, and departmental cost allocations on one unified cloud platform.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Centralized master employee registry with branch filtering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Mobile GPS geofencing + facial recognition biometric sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Consolidated executive reporting with branch cost breakups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-state Shops &amp; Establishments statutory compliance</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Explore Multi-Location Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. MANUAL HR SYSTEMS VS HR NITI – COMPARISON TABLE (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Clear Operational Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Manual HR Systems vs HR Niti
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Compare traditional, spreadsheet-driven HR processes against HR Niti&apos;s unified mid-market workforce management platform.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 text-white text-sm md:text-base">
                    <th className="py-4.5 px-6 font-bold">Operational Area</th>
                    <th className="py-4.5 px-6 font-bold bg-gray-800/80 text-gray-300">
                      Traditional / Manual
                    </th>
                    <th className="py-4.5 px-6 font-bold bg-emerald-700/90 text-amber-300">
                      HR Niti
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    {
                      area: "Multi-branch HR",
                      traditional: "Separate files/systems per location",
                      hrniti: "Centralized organization and branch view",
                    },
                    {
                      area: "Approvals",
                      traditional: "Email/WhatsApp/manual sign-off",
                      hrniti: "Configurable multi-level workflows",
                    },
                    {
                      area: "Payroll",
                      traditional: "Branch-wise spreadsheets/reconciliation",
                      hrniti: "Centralized payroll workflows with branch context",
                    },
                    {
                      area: "Employee queries",
                      traditional: "Repeated HR tickets",
                      hrniti: "Employee self-service + AI assistance",
                    },
                    {
                      area: "HR reporting",
                      traditional: "Manual Excel consolidation",
                      hrniti: "Centralized HR MIS and dashboards",
                    },
                    {
                      area: "Accounting",
                      traditional: "Manual re-entry",
                      hrniti: "Configured accounting export/integration",
                    },
                    {
                      area: "Performance",
                      traditional: "Separate appraisal files",
                      hrniti: "Centralized performance and OKR workflows",
                    },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="py-4 px-6 font-bold text-gray-900">
                        {row.area}
                      </td>
                      <td className="py-4 px-6 text-gray-600 bg-gray-50/30 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                          <span>{row.traditional}</span>
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
                <span>Result: Up to 85% reduction in cross-branch administrative workload and zero audit reconciliation errors.</span>
                <Link href="/demo" className="text-emerald-700 hover:text-emerald-800 font-bold underline">
                  See the difference live ➔
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. WHY MID-SIZED COMPANIES CHOOSE HR NITI (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Mid-Market Differentiation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Why Mid-Sized Companies Choose HR Niti
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Purpose-built to deliver enterprise operational control without cumbersome configuration, long rollouts, or hidden consultancy fees.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🏢
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Native Multi-Branch Control</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Manage multiple physical locations, differing state statutory rules, and specialized branch rosters from a single unified administrator console.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2-Week Production Rollout</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Unlike legacy enterprise systems that require 4 to 6 months of IT consulting, HR Niti deploys fully within 10 to 14 business days.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🔗
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Built Accounting Bridges</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Native journal voucher exports for Tally Prime, QuickBooks, and Zoho Books keep your accounts team in total sync without manual ledger entry.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🤝
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Account Manager</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Every mid-market account receives a dedicated Indian payroll specialist for assisted onboarding, data migration, and prompt phone/WhatsApp support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          10. SECURITY, PRIVACY & ACCESS CONTROLS (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Enterprise Data Protection
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Security, Privacy &amp; Access Controls
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Safeguarding sensitive employee payroll, banking, and personal identity records with verifiable enterprise security safeguards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">256-Bit SSL / TLS Encryption</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  All employee personal data, PAN/Aadhaar documents, and salary figures are encrypted in transit via TLS 1.3 and at rest with AES-256 bit protocols.
                </p>
              </div>

              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Enterprise Cloud Infrastructure</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Hosted on secure, high-availability enterprise cloud infrastructure with continuous automated backups, disaster recovery, and 99.9% uptime.
                </p>
              </div>

              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Role-Based Access (RBAC)</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Granular permission matrices ensure branch managers only see their unit&apos;s data, while executive CTC and salary revisions remain strictly confidential.
                </p>
              </div>

              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">Comprehensive Audit Trails</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Immutable system event logging records every salary adjustment, leave override, and permission modification with timestamped administrator attribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          11. FREQUENTLY ASKED QUESTIONS (15 AEO FAQs) (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80">
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
                Everything you need to know about implementing HR Niti for medium businesses with 50 to 250 employees.
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

            {/* Accordion List */}
            <div className="space-y-4">
              {filteredFaqIndices.map((faqIndex) => {
                const faq = MEDIUM_BUSINESS_FAQS[faqIndex];
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
          12. READY TO SCALE YOUR HR OPERATIONS? (CTA Section) (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-emerald-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-amber-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-inner">
              Deploy in 10 to 14 Days
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              Ready to Scale Your HR Operations?
            </h2>
            <p className="text-emerald-100/90 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
              Join leading mid-market Indian enterprises that streamline multi-branch attendance, automate complex multi-state payroll,
              and empower their workforce with HR Niti.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 transition-all shadow-xl shadow-emerald-700/20 text-base cursor-pointer"
              >
                <span>Book a Personalized Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-base cursor-pointer"
              >
                <span>Explore Enterprise Pricing</span>
              </Link>
            </div>

            <p className="text-xs text-emerald-200/80 mt-6 font-medium">
              Assisted data migration &bull; Multi-branch setup &bull; Dedicated account management
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          13. BUSINESS SIZE NAVIGATION (Scale between Tiers)
         ─────────────────────────────────────────────────────────── */}
      <BusinessSizeNav currentScale="medium" />
    </div>
  );
}
