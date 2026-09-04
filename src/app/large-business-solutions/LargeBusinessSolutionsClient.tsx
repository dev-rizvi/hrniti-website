"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitDemoLeadAction } from "@/app/actions/leadActions";
import BusinessSizeNav from "@/components/solutions/BusinessSizeNav";
import { LARGE_BUSINESS_FAQS, LargeBusinessFAQItem } from "./largeBusinessData";
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
  Factory,
  Database,
  Server,
  Network,
  Cpu,
  UserCheck,
  Share2,
  Activity,
} from "lucide-react";

export default function LargeBusinessSolutionsClient() {
  // Lead form state matching BusinessSizeHero
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "250+",
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
      sourcePage: "Enterprise HRMS & Payroll for Large Businesses",
      sourceUrl: typeof window !== "undefined" ? window.location.href : "/large-business-solutions",
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "250+",
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
    "ERP & Integrations": [4, 5, 6, 14],
    "Shifts & Overtime": [7, 8, 11],
    "Security & Compliance": [0, 3, 9, 10],
    "Scale & Deployment": [1, 2, 12, 13],
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
                <span>250 – 1000+ Employees &bull; Enterprise, Multi-State, Multi-Factory &amp; Complex Workforce</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Enterprise HRMS &amp; Payroll Software for Large Businesses in India
              </h1>

              {/* Subtitle H2 */}
              <h2 className="text-xl md:text-2xl font-bold text-amber-300 leading-snug">
                Manage Enterprise HR, Payroll &amp; Workforce Operations at Scale
              </h2>

              {/* Secondary Lead Copy */}
              <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                HR Niti provides enterprise HRMS &amp; payroll software for large businesses in India, centralizing multi-state statutory payroll, compliance, workforce operations and employee records across your organization. Designed for enterprises with 250–1000+ employees, HR Niti simplifies complex shifts, attendance, employee lifecycle processes, approvals, workforce analytics and enterprise ERP integrations from one unified platform.
              </p>

              {/* Key Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Multi-state statutory payroll workflows",
                  "SAP, Oracle, Workday & Microsoft Dynamics integrations",
                  "Multi-shift rostering and overtime rules",
                  "Granular roles, permissions and audit trails",
                  "Workforce analytics and executive reporting",
                  "Dedicated enterprise support & guaranteed SLA",
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
                    <Factory className="w-3.5 h-3.5" />
                    <span>Multi-Factory</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">24/7 Shift Rotas</div>
                  <div className="text-[11px] text-emerald-200/70">Section 59 overtime</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Database className="w-3.5 h-3.5" />
                    <span>ERP Connect</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">SAP &amp; Oracle</div>
                  <div className="text-[11px] text-emerald-200/70">Bi-directional APIs</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Statutory Vault</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">28 States &amp; UTs</div>
                  <div className="text-[11px] text-emerald-200/70">PF, ESIC, PT, LWF</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Governance</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">RBAC &amp; MFA</div>
                  <div className="text-[11px] text-emerald-200/70">Immutable audit trails</div>
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
                    Enterprise HRMS software is a centralized human-resource management platform designed for large
                    organizations with complex employee structures, multiple locations, departments, payroll rules
                    and approval workflows. It typically combines core HR, attendance, leave, payroll, compliance,
                    employee self-service, reporting, integrations and access controls. For Indian enterprises, an enterprise
                    HRMS also needs to support multi-state statutory requirements and integration with existing ERP,
                    finance and attendance systems.
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
                    250 - 1000+ Employees Demo
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Request Enterprise Solution Demo
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Connect with an Enterprise HR Solutions Architect for custom ERP mapping &amp; architecture review.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50/90 rounded-2xl text-center border border-emerald-200 relative z-10">
                    <span className="text-4xl">🎉</span>
                    <h4 className="text-lg font-bold text-emerald-950 mt-3">Enterprise Request Submitted!</h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      Thank you! Our dedicated enterprise solution architect will connect with you within 15 minutes.
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
                        placeholder="e.g. Anand Mehra"
                        className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Corporate Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="anand@conglomerate.com"
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
                          Enterprise Organization *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Apex Industries Ltd"
                          className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Employee Scale *
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-gray-50/80 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        >
                          <option value="250-500">250 - 500 Employees</option>
                          <option value="501-1000">501 - 1000 Employees</option>
                          <option value="1000+">1000+ Employees (Group)</option>
                          <option value="5000+">5000+ Multi-Factory</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl text-base shadow-xl shadow-emerald-700/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Connecting Solutions Team..." : "Request Enterprise Demo ➔"}
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        256-Bit SSL
                      </span>
                      <span>&bull;</span>
                      <span>SAP / Oracle Ready</span>
                      <span>&bull;</span>
                      <span>Enterprise SLA</span>
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
                Enterprise Architecture Overview
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-3 tracking-tight">
                What Is Enterprise HRMS Software?
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
                A unified workforce operating system built to govern complex organizational hierarchies, multi-state payroll, and ERP environments for 250 to 1,000+ employees.
              </p>
            </div>

            {/* Modern Definition Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border border-emerald-200/80 shadow-xl shadow-emerald-950/5 p-8 md:p-10 mb-10 overflow-hidden">
              {/* Subtle background element */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>

              {/* Tag Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-3 py-1 rounded-full shadow-sm">
                  Enterprise Definition
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  🏭 Multi-Factory Rostering
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  🇮🇳 All 28 States &amp; UTs Compliant
                </span>
                <span className="text-[11px] font-semibold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full shadow-xs">
                  ⚡ SAP &amp; Oracle Integrations
                </span>
              </div>

              {/* Direct AEO Definition Answer */}
              <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6">
                Enterprise HRMS &amp; payroll software for large businesses in India is a centralized workforce operating system
                engineered for organizations with 250 to 1,000+ employees. It unifies complex corporate hierarchies, multi-state
                statutory compliance, 24/7 industrial shift rostering, granular role-based access, and enterprise ERP integrations
                (SAP, Oracle, Workday) into one secure cloud platform.
              </p>

              {/* Bottom Feature Badges Bar */}
              <div className="pt-6 border-t border-emerald-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Unified Multi-Entity Corporate Governance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Bi-Directional SAP, Oracle &amp; Workday APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>Factories Act Section 59 Overtime Automation</span>
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
                    How Enterprise HRMS Differs From SMB HR Software
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    At 250 to 1,000+ employees, basic SMB software collapses under the volume and governance requirements of large Indian corporate groups:
                  </p>

                  <ul className="space-y-3 text-xs text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Multi-Company Consolidation:</strong> Governing parent entities, subsidiaries, and joint ventures under one tenant</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>ERP &amp; Finance Bridges:</strong> Automated journal voucher posting to SAP, Oracle, or Microsoft Dynamics</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Factory Compliance:</strong> Shift differential allowances, continuous rotas, and Section 59 statutory overtime</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Audit &amp; Access Governance:</strong> Granular RBAC, SSO/MFA integration, and immutable transaction audit logs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>High Concurrency:</strong> Sub-second processing for thousands of clock-ins at factory shift changeovers</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Target Range: 250–1,000+ Employees</span>
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
                    What Should an HRMS Handle for 250–1000+ Employees?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    An enterprise workforce management platform must maintain operational precision across white-collar offices and blue-collar industrial environments:
                  </p>

                  <ul className="space-y-3 text-xs text-gray-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Multi-State Payroll:</strong> Automated Professional Tax, LWF, and minimum wage rules across all 28 states &amp; UTs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Industrial Shift Rosters:</strong> 24/7 rotational shifts, split shifts, grace windows, and automated meal break deductions</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Workforce Planning:</strong> Departmental CTC budgeting, overtime leakage audits, and attrition predictive models</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Mass Self-Service:</strong> Native iOS/Android apps handling thousands of mobile payslip downloads and tax proofs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Enterprise Support:</strong> Dedicated onboarding specialist and prioritized multi-channel escalation support</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Architecture: High-Availability Cloud</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. ENTERPRISE HR CHALLENGES HR NITI HELPS SOLVE (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                Enterprise Complexity Barriers
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Enterprise HR Challenges HR Niti Helps Solve
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                As headcount expands across factories, commercial offices, and regional distribution centers,
                HR complexity multiplies across six critical operational fault lines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Challenge 1: Multi-State Compliance */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                      Risk: Inter-State Fines
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-State Compliance</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Operating across 5+ Indian states requires managing differing Professional Tax slabs, seasonal deductions,
                    state Labour Welfare Fund (LWF) filings, and local holiday notifications, creating audit vulnerabilities.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Pre-built statutory rules for all 28 states with automated ECR exports</span>
                  </div>
                </div>
              </div>

              {/* Challenge 2: Complex Organization Structures */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full">
                      Risk: Governance Gaps
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complex Organization Structures</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Large enterprises operate holding entities, multiple GSTINs, specialized business units, and cross-functional
                    matrices. Rigid HR software forces unnatural reporting structures that cause administrative friction.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Multi-entity corporate architecture with cost-center level hierarchy mapping</span>
                  </div>
                </div>
              </div>

              {/* Challenge 3: Multi-Shift Operations */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-rose-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl font-bold group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Factory className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-900 px-2.5 py-0.5 rounded-full">
                      Risk: Overtime Leakage
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Shift Operations</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Continuous 24/7 manufacturing plants require day/night rotational shift planning, shift differential allowances,
                    and precise double-wage overtime calculation under Section 59 of the Factories Act.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Automated rotational shift rostering with hardware biometric integration</span>
                  </div>
                </div>
              </div>

              {/* Challenge 4: ERP Data Synchronization */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl font-bold group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Database className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-900 px-2.5 py-0.5 rounded-full">
                      Risk: Finance Delays
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ERP Data Synchronization</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Finance teams in large enterprises run SAP, Oracle, or Workday. Manually exporting and formatting payroll files
                    delays monthly book close, generates reconciliation errors, and strains cross-team collaboration.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Bi-directional REST API connectors &amp; pre-mapped SAP/Oracle GL vouchers</span>
                  </div>
                </div>
              </div>

              {/* Challenge 5: Access & Audit Requirements */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl font-bold group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <Lock className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-900 px-2.5 py-0.5 rounded-full">
                      Risk: Data Breaches
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Access &amp; Audit Requirements</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    External auditors, tax inspectors, and enterprise IT security teams demand strict role-based access,
                    MFA enforcement, and comprehensive audit logs of every salary adjustment, compensation change, and access event.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> Granular RBAC, SSO/SAML integration, and immutable timestamped audit logs</span>
                  </div>
                </div>
              </div>

              {/* Challenge 6: Large-Scale Employee Self-Service */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                      Risk: Ticket Overload
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Large-Scale Employee Self-Service</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    Supporting 500 to 1,000+ employees across corporate desks and industrial floors leads to massive ticket
                    volumes for payslip downloads, tax declaration updates, leave balance inquiries, and company benefit rules.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Fix:</strong> High-performance iOS/Android ESS mobile app with Niti AI virtual HR assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. ENTERPRISE HRMS CAPABILITIES FOR 250-1000+ EMPLOYEES (H2 & H3s)
         ─────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Enterprise Core Modules
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Enterprise HRMS Capabilities for 250–1000+ Employees
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Built to deliver high-availability workforce automation, deep compliance safeguards, and enterprise system interoperability.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Module 1: Multi-State Payroll & Statutory Compliance */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Multi-State Statutory
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/payroll-software" className="hover:underline">
                      Multi-State Payroll &amp; Statutory Compliance
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Automate high-volume gross-to-net salary processing with multi-state Professional Tax, EPF ceiling allocations, ESIC gross thresholds, Section 192 TDS across Old and New tax regimes, and Labour Welfare Fund (LWF) rules.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/payroll-software"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Multi-State Compliance</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 2: Enterprise ERP & API Integrations */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    System Interoperability
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/payroll-software" className="hover:underline">
                      Enterprise ERP &amp; API Integrations
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Connect HR Niti with SAP S/4HANA, Oracle HCM, Workday, and Microsoft Dynamics. Bi-directionally sync employee master data, cost centers, attendance hours, and general ledger journal vouchers with zero manual effort.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/payroll-software"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Enterprise ERP Connectors</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 3: Multi-Shift Rostering & Overtime */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Industrial Rosters
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/attendance" className="hover:underline">
                      Multi-Shift Rostering &amp; Overtime
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Manage 24/7 continuous plant operations, rotational shifts, split shifts, and weekend relief rotations. Automate Section 59 Factories Act overtime calculations, shift differential premiums, and biometric hardware punch synchronization.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/attendance"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Factory Shift Rostering</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 4: Granular RBAC, Audit Trails & Security */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Governance &amp; RBAC
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/employee-management" className="hover:underline">
                      Granular RBAC, Audit Trails &amp; Security
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Enforce strict data governance across corporate departments and branch plants. Configure custom role-based permissions, SAML 2.0 / Azure AD single sign-on (SSO), and immutable system event logs for regulatory audit defense.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/employee-management"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Enterprise RBAC Security</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 5: Employee Self-Service & Mobile HR */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Mass Employee App
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/employee-self-service" className="hover:underline">
                      Employee Self-Service &amp; Mobile HR
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Deliver consumer-grade employee mobile apps on iOS &amp; Android. Thousands of workers can view attendance records, download digital payslips, submit reimbursement bills, and ask Niti AI routine policy questions 24/7.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/employee-self-service"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Enterprise Mobile ESS</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 6: Workforce Analytics & Headcount Planning */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Workforce Analytics
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/hr-mis-reports" className="hover:underline">
                      Workforce Analytics &amp; Headcount Planning
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Equip C-suite leadership and CHROs with predictive intelligence. Analyze department-wise CTC variances, factory overtime cost leakage, employee attrition trends, and forecast upcoming talent requirements accurately.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/hr-mis-reports"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Workforce MIS Analytics</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 7: Performance, OKRs & Workforce Development */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    PMS &amp; OKRs
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/performance-management-software" className="hover:underline">
                      Performance, OKRs &amp; Workforce Development
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Drive organizational alignment at enterprise scale. Conduct structured annual appraisal cycles, track department OKRs, collect peer 360-degree feedback, and automatically feed ratings into annual compensation adjustments.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/performance-management-software"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Enterprise Performance OKRs</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>

              {/* Module 8: Recruitment & Employee Lifecycle Management */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Lifecycle &amp; ATS
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    <Link href="/employee-management" className="hover:underline">
                      Recruitment &amp; Employee Lifecycle Management
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Manage the entire employee lifecycle from job requisition to offboarding. Standardize candidate screening, automate digital appointment letter release, manage confirmation reviews, and conduct compliant full-and-final (FnF) settlements.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/employee-management"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore Employee Lifecycle ATS</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. HEADCOUNT INTENT SECTIONS (H2s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Enterprise Scale Milestones
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                HRMS for Multi-Location &amp; Multi-Factory Organizations
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Tailored architectures engineered to govern complex workforces from emerging enterprises of 250 staff to conglomerates with 1,000+ workers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* HRMS for 250-500 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Stage 1: Enterprise Scaling
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 250–500 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    At 250 to 500 employees, organizations operate formal HR departments, multiple state locations, and complex approval chains. Replace fragmented point solutions with an integrated platform providing multi-state compliance and bi-directional ERP data synchronization.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-state Professional Tax and Labour Welfare Fund logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-level approval authorization matrices across departments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Standard ERP integration for Tally Prime and QuickBooks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dedicated technical onboarding specialist &amp; guided migration</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Get Started for 250–500 Employees</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for 501-1000 Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-700/10 flex flex-col justify-between relative hover:shadow-2xl transition-all">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular for Enterprises
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Stage 2: Multi-Plant Enterprise
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 501–1000 Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    Organizations with 501 to 1,000 employees typically operate manufacturing plants, corporate centers, and extensive field distribution networks. Manage 24/7 rotational shifts, double-rate overtime under Section 59, and native SAP or Oracle integration.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Industrial 24/7 rotational shift planning with grace windows</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Pre-built bi-directional connectors for SAP ECC and S/4HANA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Section 59 Factories Act overtime rule automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Enterprise SLA with 15-minute priority escalation support</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <span>Explore 501–1000 Employee Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* HRMS for 1000+ Employees */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full uppercase inline-block mb-3">
                    Stage 3: Conglomerate Scale
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    HRMS for 1000+ Employees
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    For conglomerates and large business groups with 1,000+ employees, HR Niti delivers a multi-entity tenant architecture. Consolidate workforce data across sister companies, integrate Oracle HCM or Workday, and enforce strict enterprise access controls.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-company group consolidation with separate legal tenants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Enterprise Workday and Oracle HCM Cloud API synchronization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Custom API webhooks and dedicated hardware integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Executive HR intelligence with predictive attrition modeling</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Scale with 1000+ Conglomerate Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. ENTERPRISE COMPLIANCE & ERP INTEGRATION (H2s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* H2: Enterprise Payroll Across Multiple Indian States */}
            <div>
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Nationwide Statutory Engine
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                  Enterprise Payroll Across Multiple Indian States
                </h2>
                <p className="text-gray-600 text-base max-w-3xl mx-auto font-normal">
                  Large enterprises managing pan-India workforces must comply with distinct state-specific tax laws,
                  varying Professional Tax schedules, and localized welfare fund mandates across all operating branches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Automated State PT Rules</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Pre-configured tax slabs for Maharashtra, Karnataka, Telangana, West Bengal, Tamil Nadu, Gujarat, and other states automatically adjust deductions based on employee location and handle seasonal February variations.
                  </p>
                </div>

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Labour Welfare Fund (LWF)</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Automates employee and employer statutory LWF contributions based on state-specific schedules (annual or bi-annual deductions in June and December), eliminating manual compliance tracking.
                  </p>
                </div>

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Consolidated ECR &amp; 24Q</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    Generates unified electronic challan files for EPFO and ESIC portals alongside quarterly 24Q TDS filing text files, validated for zero formatting errors before government submission.
                  </p>
                </div>
              </div>
            </div>

            {/* H2: HRMS ERP Integration: SAP, Oracle, Workday & Microsoft Dynamics */}
            <div className="pt-8 border-t border-gray-200">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  Enterprise Interoperability
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                  HRMS ERP Integration: SAP, Oracle, Workday &amp; Microsoft Dynamics
                </h2>
                <p className="text-gray-600 text-base max-w-3xl mx-auto font-normal">
                  Connect HR Niti with your global ERP and finance platforms to establish an unbroken digital thread between human resources, plant operations, and financial accounting.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    SAP
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">SAP S/4HANA &amp; ECC</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Bi-directional master data sync and automatic posting of payroll journal vouchers into SAP General Ledger (FI/CO).
                  </p>
                </div>

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    Oracle
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Oracle HCM Cloud</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    REST API integration synchronizing organizational units, job assignments, and localized Indian payroll deduction results.
                  </p>
                </div>

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    Workday
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Workday Integration</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Functions as the localized Indian payroll execution engine for global enterprises operating Workday as their core HR system.
                  </p>
                </div>

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    MSFT
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Microsoft Dynamics 365</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Seamless data exchange with Dynamics Business Central and Finance &amp; Operations for automated compensation reconciliation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. ENTERPRISE SECURITY & IMPLEMENTATION (H2s)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* H2: Enterprise Security & Access Governance */}
            <div>
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                  Information Security &amp; Compliance
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                  Enterprise Security &amp; Access Governance
                </h2>
                <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                  Protecting confidential employee compensation data, banking records, and identity files with verifiable enterprise security controls.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">SAML 2.0 / Azure SSO</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Seamless Single Sign-On integration with Okta, Azure Active Directory, and Google Workspace with mandatory Multi-Factor Authentication (MFA).
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-3">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Enterprise Cloud Infrastructure</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    All employee records and backups are hosted on secure, high-availability enterprise cloud infrastructure with continuous automated disaster recovery.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Granular RBAC Architecture</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Multi-tier permission matrix allowing plant managers to view only local attendance, while corporate payroll retains exclusive compensation authority.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Immutable Audit Logging</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Complete forensic event logs capturing every salary modification, approval override, and report export with timestamped user identity.
                  </p>
                </div>
              </div>
            </div>

            {/* H2: Implementation & Enterprise Support */}
            <div className="pt-8 border-t border-gray-200">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                  White-Glove Deployment
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                  Implementation &amp; Enterprise Support
                </h2>
                <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                  A proven 4-stage implementation framework delivering operational go-live without enterprise disruption.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    01
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Architecture Mapping</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Discovery sessions to map organizational legal entities, cost centers, shift rosters, and statutory deduction policies.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    02
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Data Migration &amp; APIs</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Assisted extraction, cleansing, and bulk migration of historical employee records, leave ledgers, and ERP connector configuration.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    03
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Parallel Payroll Run</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Rigorous parallel testing against current payroll systems to achieve 100% mathematical reconciliation and hardware biometric sync.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    04
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Go-Live &amp; Enterprise Support</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Production rollout with dedicated implementation support, comprehensive administrator training, and ongoing priority assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. MANUAL / LEGACY HR SYSTEMS VS HR NITI – COMPARISON (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Enterprise Operational Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Manual / Legacy HR Systems vs HR Niti
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Compare rigid legacy enterprise software against HR Niti&apos;s agile, cloud-native enterprise workforce platform.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 text-white text-sm md:text-base">
                    <th className="py-4.5 px-6 font-bold">Area</th>
                    <th className="py-4.5 px-6 font-bold bg-gray-800/80 text-gray-300">
                      Legacy / Manual
                    </th>
                    <th className="py-4.5 px-6 font-bold bg-emerald-700/90 text-amber-300">
                      HR Niti
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    {
                      area: "Payroll",
                      legacy: "Separate spreadsheets/systems",
                      hrniti: "Centralized payroll workflows",
                    },
                    {
                      area: "Multi-state compliance",
                      legacy: "State-by-state manual management",
                      hrniti: "Centralized statutory workflows",
                    },
                    {
                      area: "ERP integration",
                      legacy: "Manual exports/re-entry",
                      hrniti: "APIs/connectors where supported",
                    },
                    {
                      area: "Shifts",
                      legacy: "Manual rosters and calculations",
                      hrniti: "Configured shift/roster workflows",
                    },
                    {
                      area: "Access control",
                      legacy: "Broad user access",
                      hrniti: "Role-based permissions",
                    },
                    {
                      area: "Auditability",
                      legacy: "Manual logs",
                      hrniti: "System audit trails",
                    },
                    {
                      area: "Employee service",
                      legacy: "HR-dependent requests",
                      hrniti: "Web/mobile ESS",
                    },
                    {
                      area: "Reporting",
                      legacy: "Excel consolidation",
                      hrniti: "Centralized MIS/analytics",
                    },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="py-4 px-6 font-bold text-gray-900">
                        {row.area}
                      </td>
                      <td className="py-4 px-6 text-gray-600 bg-gray-50/30 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                          <span>{row.legacy}</span>
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
                <span>Result: Elimination of ERP manual data re-entry, 100% factory overtime accuracy, and audit-ready governance.</span>
                <Link href="/demo" className="text-emerald-700 hover:text-emerald-800 font-bold underline">
                  Schedule an enterprise consultation ➔
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. WHY LARGE ORGANIZATIONS CHOOSE HR NITI (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                Enterprise Differentiation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 tracking-tight">
                Why Large Organizations Choose HR Niti
              </h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto font-normal">
                Engineered for industrial resilience, complex multi-state Indian compliance, and frictionless enterprise system integration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🏭
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industrial &amp; Shift Mastery</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Purpose-built for 24/7 manufacturing plants, Section 59 overtime rules, shift rotations, and high-concurrency biometric terminal synchronization.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Enterprise Deployment</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Deploy in 4 to 6 weeks rather than 12 to 18 months, avoiding the multi-crore consulting fees typical of legacy software implementations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🔗
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Native ERP Bridges</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Pre-mapped API connectors and SFTP file gateways for SAP S/4HANA, Oracle HCM, Workday, and Microsoft Dynamics keep finance teams synchronized.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-4 shadow-xs">
                  🤝
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Support &amp; Reliability</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  High-availability cloud infrastructure, dedicated onboarding assistance, and reliable multi-channel priority escalation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          10. FREQUENTLY ASKED QUESTIONS (15 AEO FAQs) (H2)
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
                Everything you need to know about deploying HR Niti for enterprises with 250 to 1,000+ employees.
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
                const faq = LARGE_BUSINESS_FAQS[faqIndex];
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
          11. FINAL CTA SECTION (H2)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-emerald-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-amber-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-inner">
              Tailored Enterprise Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              Request an Enterprise HRMS Walkthrough
            </h2>
            <p className="text-emerald-100/90 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
              Schedule a confidential architecture walkthrough with our enterprise solutions team to review
              multi-state compliance, ERP integrations, and custom factory shift scheduling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 transition-all shadow-xl shadow-emerald-700/20 text-base cursor-pointer"
              >
                <span>Request Enterprise Demo</span>
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
              Custom ERP connectors &bull; Enterprise cloud security &bull; 99.9% uptime SLA
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          12. BUSINESS SIZE NAVIGATION (Scale between Tiers)
         ─────────────────────────────────────────────────────────── */}
      <BusinessSizeNav currentScale="large" />
    </div>
  );
}
