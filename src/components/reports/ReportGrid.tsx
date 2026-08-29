"use client";
import React, { useState, useMemo } from "react";
import { 
    ArrowRight, FileText, Search, X, CheckCircle, 
    BookOpen, Download, HelpCircle, Layers, Mail, 
    Building2, Phone, Sparkles, Star, TrendingUp,
    Shield, Briefcase, GraduationCap
} from "lucide-react";

// Categories definition
const categories = [
    { id: "all", name: "All Reports" },
    { id: "payroll-compliance", name: "Payroll & Compliance" },
    { id: "talent-retention", name: "Talent & Retention" },
    { id: "ai-analytics", name: "AI & Analytics" },
    { id: "hr-ops", name: "HR Operations" }
];

// Reports data (full list of 20 reports with real professional descriptions, categories, metadata, gradients, and custom summaries)
const reports = [
    {
        id: 1,
        title: "Global Time-to-Hire Benchmark 2026",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "24 Pages",
        format: "PDF",
        readingTime: "12 min read",
        downloads: "1.2K+ Downloads",
        description: "An empirical study of hiring speeds across 12 countries. Discover benchmarks by industry, region, and role, plus actionable strategies to streamline your candidate screening and interview scheduling pipelines.",
        coverGradient: "from-emerald-600 to-teal-700",
        coverPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
        featured: true,
        highlights: [
            "The global average time-to-hire has risen to 44 days in 2026, driven by multi-layered compliance verification.",
            "HR departments leveraging GenAI screeners and automatic scheduling shortened their offer cycle from 32 days to 14 days.",
            "Detailed benchmark graphs comparing Healthcare, Technology, Manufacturing, and Retail sectors."
        ]
    },
    {
        id: 2,
        title: "Payroll Compliance Index 2026",
        category: "payroll-compliance",
        categoryName: "Payroll & Compliance",
        pages: "32 Pages",
        format: "PDF",
        readingTime: "16 min read",
        downloads: "940+ Downloads",
        description: "Your guide to navigating statutory amendments, PF/ESI revisions, regional labor mandates, and digital filing regulations in India for 2026.",
        coverGradient: "from-blue-600 to-indigo-700",
        coverPattern: "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]",
        highlights: [
            "Comprehensive breakdown of newly implemented tax slabs and state-specific professional tax adjustments.",
            "How automated validation audits prevent double-entry calculations and save up to ₹4.5L in annual regulatory penalties.",
            "Integration guide linking biometric shift logs to payroll processing without manual CSV edits."
        ]
    },
    {
        id: 3,
        title: "Attrition & Retention Outlook 2026",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "28 Pages",
        format: "PDF",
        readingTime: "14 min read",
        downloads: "1.1K+ Downloads",
        description: "Analyzing survey data from 500+ managers on employee engagement drivers, remote alignment struggles, and standard compensation benchmarks.",
        coverGradient: "from-purple-600 to-indigo-800",
        coverPattern: "bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]",
        highlights: [
            "Lack of growth opportunities remains the primary driver of attrition, cited by 47% of departing employees.",
            "Flexible-first teams recorded a 24% boost in employee Net Promoter Scores (eNPS) over strict hybrid counterparts.",
            "Practical playbooks for structuring continuous feedback loops and pulse surveys to intercept early exit signals."
        ]
    },
    {
        id: 4,
        title: "People Analytics Adoption Report",
        category: "ai-analytics",
        categoryName: "AI & Analytics",
        pages: "18 Pages",
        format: "PDF",
        readingTime: "9 min read",
        downloads: "680+ Downloads",
        description: "How companies leverage workforce data to monitor performance, predict attrition risks, and optimize department headcount budgets.",
        coverGradient: "from-rose-600 to-pink-700",
        coverPattern: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]",
        highlights: [
            "Organizations utilizing predictive talent planning models realized an 8% drop in recruitment overheads.",
            "A structured guide to mapping skills matrices, aligning project requirements, and identifying training requirements.",
            "Standards for securing private employee profiles while processing macro talent analytics."
        ]
    },
    {
        id: 5,
        title: "AI in HR Maturity Report",
        category: "ai-analytics",
        categoryName: "AI & Analytics",
        pages: "20 Pages",
        format: "PDF",
        readingTime: "11 min read",
        downloads: "1.6K+ Downloads",
        description: "Analyzing the transition from simple automated macros to advanced generative AI helpers handling conversational employee queries.",
        coverGradient: "from-cyan-600 to-blue-700",
        coverPattern: "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]",
        featured: true,
        highlights: [
            "AI assistants resolve up to 75% of administrative check-ins (e.g., balance requests, tax receipts) automatically.",
            "Best practices for configuring intent recognition models to parse complex leave descriptions.",
            "Security metrics for hosting private generative models mapped to proprietary company data pools."
        ]
    },
    {
        id: 6,
        title: "Onboarding Effectiveness Benchmark",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "22 Pages",
        format: "PDF",
        readingTime: "10 min read",
        downloads: "750+ Downloads",
        description: "Standardizing the onboarding journey. Learn why a digitized pre-boarding phase increases candidate sign-on success by 30%.",
        coverGradient: "from-amber-600 to-orange-700",
        coverPattern: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]",
        highlights: [
            "Active digital verification tasks prior to Day 1 correlate to a 92% employee onboarding satisfaction index.",
            "Automated background check pipelines shorten the time-to-onboard from 12 days to under 24 hours.",
            "Structured templates for 30-60-90 day manager reviews to secure early employee alignment."
        ]
    },
    {
        id: 7,
        title: "Performance Management Trends 2026",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "26 Pages",
        format: "PDF",
        readingTime: "13 min read",
        downloads: "980+ Downloads",
        description: "Evaluating the departure from static annual performance cycles to dynamic goals, continuous feedback, and modern OKRs.",
        coverGradient: "from-fuchsia-600 to-purple-700",
        coverPattern: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]",
        highlights: [
            "Dynamic quarterly goal updates boosted team agility scores by 18% during business pivots.",
            "The impact of continuous manager check-ins on maintaining individual accountability scores.",
            "Structuring fair peer review loops that minimize central tendency bias."
        ]
    },
    {
        id: 8,
        title: "HR Tech Consolidation Report",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "16 Pages",
        format: "PDF",
        readingTime: "8 min read",
        downloads: "560+ Downloads",
        description: "The financial impact of replacing fragmented software vendors with a single unified HRMS, payroll, and performance suite.",
        coverGradient: "from-emerald-700 to-indigo-700",
        coverPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        highlights: [
            "Consolidated HR operations reduce average vendor subscription fees by up to 32% annually.",
            "Eliminating sync lags between separate logs reduces payroll calculation errors by 98%.",
            "A structured roadmap to audibly review, inventory, and phase out redundant tools."
        ]
    },
    {
        id: 9,
        title: "Workforce Planning Survey 2026",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "24 Pages",
        format: "PDF",
        readingTime: "12 min read",
        downloads: "610+ Downloads",
        description: "A deep dive into capacity planning, hiring forecasting, and org chart design trends for scaling enterprises in 2026.",
        coverGradient: "from-slate-600 to-slate-800",
        coverPattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
        highlights: [
            "How scenario-based headcount planning helps companies prepare for unexpected market shifts.",
            "Using skill mapping models to fill internal vacancies, reducing external hiring costs by 15%.",
            "Designing clean corporate structures to prevent management layers from clogging communication."
        ]
    },
    {
        id: 10,
        title: "Compensation & Pay Transparency Report",
        category: "payroll-compliance",
        categoryName: "Payroll & Compliance",
        pages: "30 Pages",
        format: "PDF",
        readingTime: "15 min read",
        downloads: "890+ Downloads",
        description: "Navigating new pay transparency laws and setting up structured compensation bands to recruit and retain top talent.",
        coverGradient: "from-teal-600 to-indigo-700",
        coverPattern: "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]",
        highlights: [
            "Understanding the impact of public salary range mandates on job application conversion rates.",
            "Structuring competitive and compliant compensation packages with fair allowances.",
            "How pay equity audits prevent talent attrition and maintain high organizational trust."
        ]
    },
    {
        id: 11,
        title: "Diversity Hiring Benchmark",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "20 Pages",
        format: "PDF",
        readingTime: "10 min read",
        downloads: "720+ Downloads",
        description: "Best practices for removing bias from recruitment funnels and building inclusive hiring metrics for scaling teams.",
        coverGradient: "from-pink-600 to-purple-700",
        coverPattern: "bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))]",
        highlights: [
            "Using blind resume screening methods to increase diverse shortlist ratios by 35%.",
            "Structuring inclusive job descriptions to widen your application pool across key demographics.",
            "Tracking retention metrics of diverse talent cohorts to audit your company culture."
        ]
    },
    {
        id: 12,
        title: "Employee Self-Service Adoption Report",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "18 Pages",
        format: "PDF",
        readingTime: "9 min read",
        downloads: "640+ Downloads",
        description: "How giving employees direct access to leave tracking, salary slips, and details improves HR efficiency and trust.",
        coverGradient: "from-sky-600 to-blue-700",
        coverPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]",
        highlights: [
            "Self-service tools cut down simple HR helpdesk ticket volume by an average of 65%.",
            "Why mobile-first employee profiles see 3x higher adoption rates in distributed workforces.",
            "Safeguarding personal data access with modern multi-factor login controls."
        ]
    },
    {
        id: 13,
        title: "Cost-of-HR-Operations Study",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "22 Pages",
        format: "PDF",
        readingTime: "11 min read",
        downloads: "590+ Downloads",
        description: "A study on HR operational expenses, analyzing the cost difference between automated systems and manual data management.",
        coverGradient: "from-amber-600 to-emerald-700",
        coverPattern: "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]",
        highlights: [
            "Manual compliance tracking cost companies up to ₹4,200 per employee per year in resource time.",
            "Transitioning key processes to cloud systems yields an average 3.5x return on investment inside 12 months.",
            "Cost comparison frameworks for choosing between internal operations vs. outsourced payroll models."
        ]
    },
    {
        id: 14,
        title: "Quality-of-Hire Benchmark",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "24 Pages",
        format: "PDF",
        readingTime: "12 min read",
        downloads: "830+ Downloads",
        description: "Metrics and KPIs to evaluate candidate fit, monitor new hire performance, and optimize long-term talent matching.",
        coverGradient: "from-blue-600 to-teal-700",
        coverPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        highlights: [
            "Defining quality-of-hire using employee lifecycle metrics, performance scores, and retention ratios.",
            "Linking candidate assessment scores to 1-year performance yields a 20% higher predictability of fit.",
            "Refining interview structures to test both skills and values consistently."
        ]
    },
    {
        id: 15,
        title: "Compliance Readiness Index",
        category: "payroll-compliance",
        categoryName: "Payroll & Compliance",
        pages: "28 Pages",
        format: "PDF",
        readingTime: "14 min read",
        downloads: "910+ Downloads",
        description: "An audit checklist to test your HR operations for labor laws compliance, ESI/PF registration, and workplace safety requirements.",
        coverGradient: "from-indigo-600 to-purple-800",
        coverPattern: "bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]",
        highlights: [
            "A structured 50-point checklist covering key elements of federal and state compliance requirements.",
            "Why digital registers and paperless reporting logs are vital for tax audits.",
            "Training managers on employee guidelines to minimize company liability."
        ]
    },
    {
        id: 16,
        title: "Remote Workforce Report",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "20 Pages",
        format: "PDF",
        readingTime: "10 min read",
        downloads: "770+ Downloads",
        description: "Strategies for managing distributed teams, tracking work output, and maintaining engagement across varying time zones.",
        coverGradient: "from-rose-600 to-amber-600",
        coverPattern: "bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))]",
        highlights: [
            "Structuring communication protocols to balance operational speed and employee flexibility.",
            "Using geo-fencing tools to authenticate remote hours without micromanaging.",
            "Best tools for digital social spaces to maintain team connection in remote models."
        ]
    },
    {
        id: 17,
        title: "Skills Gap Outlook 2026",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "26 Pages",
        format: "PDF",
        readingTime: "13 min read",
        downloads: "800+ Downloads",
        description: "Mapping the skills required for the AI-driven economy. Insights on upskilling, training budgets, and adaptive talent strategies.",
        coverGradient: "from-violet-600 to-pink-700",
        coverPattern: "bg-[conic-gradient(at_center,_var(--tw-gradient-stops))]",
        highlights: [
            "The demand for technical skills rises by 35%, while prompt design and data logic lead emerging roles.",
            "Designing adaptive learning pathways directly inside your company learning management platform.",
            "Measuring training ROI through performance metrics and team delivery index."
        ]
    },
    {
        id: 18,
        title: "HR ROI Benchmark",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "22 Pages",
        format: "PDF",
        readingTime: "11 min read",
        downloads: "860+ Downloads",
        description: "How to calculate the return on investment for HR initiatives, talent retention programs, and system modernizations.",
        coverGradient: "from-emerald-600 to-blue-700",
        coverPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
        highlights: [
            "A structured ROI calculator for measuring system consolidation benefits and time savings.",
            "Linking HR system investments directly to decreased recruitment costs.",
            "Presenting HR data business cases clearly to senior leadership."
        ]
    },
    {
        id: 19,
        title: "Manager Effectiveness Study",
        category: "talent-retention",
        categoryName: "Talent & Retention",
        pages: "20 Pages",
        format: "PDF",
        readingTime: "10 min read",
        downloads: "950+ Downloads",
        description: "Evaluating manager behaviors that foster psychological safety, boost team productivity, and prevent employee burnout.",
        coverGradient: "from-indigo-650 to-teal-650",
        coverPattern: "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]",
        highlights: [
            "Managers who conduct weekly check-ins report 25% higher team productivity indexes.",
            "Red flags: how to spot signs of team burnout and structure workloads proactively.",
            "Training curricula for managers to master feedback delivery and career progression discussions."
        ]
    },
    {
        id: 20,
        title: "Future of HR Operating Models",
        category: "hr-ops",
        categoryName: "HR Operations",
        pages: "24 Pages",
        format: "PDF",
        readingTime: "12 min read",
        downloads: "700+ Downloads",
        description: "How modern operations transition from centralized processing hubs to self-service models enabled by technology.",
        coverGradient: "from-slate-700 to-indigo-850",
        coverPattern: "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]",
        highlights: [
            "Centralized HR operations transition to agile, self-service centers of excellence.",
            "Empowering local line managers to approve leaves and process team analytics dynamically.",
            "Preparing your HR infrastructure for automation and secure cloud platforms."
        ]
    }
];

function getCategoryColor(category: string) {
    switch (category) {
        case "payroll-compliance":
            return "from-blue-600 to-indigo-850";
        case "talent-retention":
            return "from-purple-600 to-indigo-900";
        case "ai-analytics":
            return "from-cyan-600 to-blue-800";
        case "hr-ops":
            return "from-amber-600 to-orange-700";
        default:
            return "from-emerald-600 to-teal-850";
    }
}

export default function ReportGrid() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeReport, setActiveReport] = useState<typeof reports[0] | null>(null);
    const [leadForm, setLeadForm] = useState({ email: "", company: "", phone: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    // Filter reports based on category and search query
    const filteredReports = useMemo(() => {
        return reports.filter(report => {
            const matchesCategory = selectedCategory === "all" || report.category === selectedCategory;
            const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  report.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Handle report click
    const handleOpenReport = (report: typeof reports[0]) => {
        setActiveReport(report);
        setIsSubmitted(false);
        setDownloadSuccess(false);
        setLeadForm({ email: "", company: "", phone: "" });
    };

    // Close Modal
    const handleCloseModal = () => {
        setActiveReport(null);
    };

    // Submit Lead Form
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setDownloadSuccess(true);
        }, 1200);
    };

    // Find featured report
    const featuredReport = useMemo(() => {
        return reports.find(r => r.featured && r.id === 1) || reports[0];
    }, []);

    return (
        <section className="py-16 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                
                {/* ─── FEATURED REPORT SECTION ─── */}
                {searchQuery === "" && selectedCategory === "all" && (
                    <div className="mb-16">
                        <div className="text-left mb-6">
                            <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                                Featured Research
                            </span>
                        </div>
                        
                        <div 
                            onClick={() => handleOpenReport(featuredReport)}
                            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden grid lg:grid-cols-12 gap-0"
                        >
                            {/* Graphic Cover (Left/Top) */}
                            <div className={`lg:col-span-5 relative bg-gradient-to-br ${getCategoryColor(featuredReport.category)} p-12 flex flex-col justify-between min-h-[300px] lg:min-h-[420px]`}>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                                        <FileText className="w-7 h-7" />
                                    </div>
                                    <span className="bg-white/25 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                                        {featuredReport.categoryName}
                                    </span>
                                </div>
                                <div className="relative z-10 text-white mt-12">
                                    <div className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-2">2026 Annual Report</div>
                                    <h3 className="text-2xl lg:text-3xl font-black leading-tight tracking-tight">
                                        {featuredReport.title}
                                    </h3>
                                </div>
                                <div className="relative z-10 flex gap-4 text-xs text-emerald-100 font-semibold mt-6">
                                    <span>{featuredReport.pages}</span>
                                    <span>·</span>
                                    <span>{featuredReport.readingTime}</span>
                                </div>
                            </div>
                            
                            {/* Body (Right/Bottom) */}
                            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <span className="text-[10px] text-emerald-600 bg-emerald-50 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Featured Benchmark
                                    </span>
                                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-600 transition-colors">
                                        {featuredReport.title}
                                    </h2>
                                    <p className="text-slate-600 text-[15px] leading-relaxed">
                                        {featuredReport.description}
                                    </p>
                                    
                                    <div className="h-px bg-slate-100 my-4"></div>
                                    
                                    {/* Highlights list preview */}
                                    <div className="space-y-2.5">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Takeaways:</div>
                                        {featuredReport.highlights.map((h, i) => (
                                            <div key={i} className="flex gap-2.5 items-start text-sm text-slate-700">
                                                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400">{featuredReport.downloads}</span>
                                    <span className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm tracking-wide uppercase shadow-md shadow-emerald-600/10 group-hover:shadow-emerald-600/35">
                                        Get Report
                                        <ArrowRight className="h-4.5 w-4.5 transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ─── SEARCH & FILTER TABS ─── */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center">
                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        {categories.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setSelectedCategory(c.id)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                    selectedCategory === c.id 
                                        ? "bg-slate-900 text-white shadow-md shadow-slate-950/10" 
                                        : "bg-slate-50 text-slate-600 hover:bg-slate-100/80 hover:text-slate-800"
                                }`}
                            >
                                {c.name}
                            </button>
                        ))}
                    </div>

                    {/* Search box */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search reports..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:border-slate-350 focus:bg-white transition-all text-slate-700 placeholder-slate-400"
                        />
                    </div>
                </div>

                {/* ─── GRID OF REPORTS ─── */}
                {filteredReports.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredReports.map((report) => (
                            <div 
                                key={report.id} 
                                onClick={() => handleOpenReport(report)}
                                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                            >
                                {/* Cover Graphics area with custom gradients & textures */}
                                <div className={`h-40 bg-gradient-to-br ${getCategoryColor(report.category)} relative p-6 flex flex-col justify-between`}>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10">
                                            {report.pages}
                                        </span>
                                    </div>
                                    <div className="relative z-10 text-white">
                                        <div className="text-[10px] text-emerald-200 uppercase tracking-widest font-semibold mb-1">
                                            {report.categoryName}
                                        </div>
                                        <h4 className="font-bold text-base leading-snug line-clamp-2">
                                            {report.title}
                                        </h4>
                                    </div>
                                </div>
                                
                                {/* Body details */}
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div className="space-y-3">
                                        <p className="text-slate-650 text-sm leading-relaxed line-clamp-3">
                                            {report.description}
                                        </p>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold uppercase mt-6">
                                        <span>{report.readingTime}</span>
                                        <div className="flex items-center text-emerald-600 font-bold group-hover:text-emerald-700 transition-colors">
                                            <span>Read</span>
                                            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 p-8 max-w-md mx-auto">
                        <HelpCircle className="w-12 h-12 text-slate-350 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-slate-900 mb-1">No reports found</h4>
                        <p className="text-slate-500 text-sm mb-6">
                            We couldn&apos;t find any research reports matching &ldquo;{searchQuery}&rdquo;. Try another term.
                        </p>
                        <button 
                            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                            className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm"
                        >
                            Reset filters
                        </button>
                    </div>
                )}
            </div>

            {/* ─── DOWNLOAD PREVIEW MODAL / DRAWER ─── */}
            {activeReport && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
                    <div 
                        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fadeIn flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Close Button */}
                        <button 
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 z-55 w-8 h-8 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left Section: Cover Preview & Metadata */}
                        <div className={`md:w-5/12 bg-gradient-to-br ${getCategoryColor(activeReport.category)} p-10 text-white flex flex-col justify-between relative`}>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                            
                            <div className="relative z-10 flex flex-col gap-8 h-full justify-between">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/15">
                                        {activeReport.categoryName}
                                    </span>
                                </div>

                                <div className="my-8">
                                    <span className="text-[10px] text-emerald-200 uppercase tracking-widest font-bold">HR Niti Research</span>
                                    <h3 className="text-xl md:text-2xl font-black leading-tight tracking-tight mt-1">
                                        {activeReport.title}
                                    </h3>
                                </div>

                                <div className="space-y-3 text-xs text-emerald-100 font-semibold pt-4 border-t border-white/10">
                                    <div className="flex justify-between">
                                        <span>Pages</span>
                                        <span>{activeReport.pages}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Read Time</span>
                                        <span>{activeReport.readingTime}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Format</span>
                                        <span>{activeReport.format} (Digital Download)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Details or Download form */}
                        <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
                            {!isSubmitted ? (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                                            {activeReport.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {activeReport.description}
                                        </p>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    {/* Executive highlights preview */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Executive Highlights:</h4>
                                        <div className="space-y-2.5">
                                            {activeReport.highlights.map((h, i) => (
                                                <div key={i} className="flex gap-2.5 items-start text-xs text-slate-700">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-px bg-slate-100"></div>

                                    {/* Lead Generation Form */}
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Fill details to access:</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                                <input 
                                                    type="email" required
                                                    value={leadForm.email}
                                                    onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                                                    placeholder="Work Email *"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                                <input 
                                                    type="text" required
                                                    value={leadForm.company}
                                                    onChange={e => setLeadForm({ ...leadForm, company: e.target.value })}
                                                    placeholder="Company Name *"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                            <input 
                                                type="tel" required
                                                value={leadForm.phone}
                                                onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                                                placeholder="Phone Number *"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700"
                                            />
                                        </div>

                                        <button 
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider cursor-pointer"
                                        >
                                            <Download className="w-4.5 h-4.5" />
                                            <span>Request Access & Download</span>
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col justify-center items-center py-10 space-y-6 text-center">
                                    {!downloadSuccess ? (
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto"></div>
                                            <h4 className="font-bold text-slate-800">Verifying request...</h4>
                                        </div>
                                    ) : (
                                        <div className="space-y-6 max-w-sm">
                                            <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
                                                <CheckCircle className="w-8 h-8" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-bold text-slate-900">Access Granted!</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed">
                                                    Thank you. We have registered your request. You can now download the PDF document directly.
                                                </p>
                                            </div>
                                            <a 
                                                href={`data:text/plain;charset=utf-8,${encodeURIComponent("HR Niti Research Report PDF Download Mock")}`} 
                                                download={`${activeReport.title.replace(/\s+/g, "_")}.pdf`}
                                                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
                                            >
                                                <Download className="w-4.5 h-4.5" />
                                                <span>Download PDF File</span>
                                            </a>
                                            <button 
                                                onClick={handleCloseModal}
                                                className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider block mx-auto"
                                            >
                                                Back to list
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
