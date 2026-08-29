"use client";
import { useState } from "react";
import { 
    ShieldAlert, 
    Hash, 
    Wallet, 
    FileText, 
    Cloud, 
    Activity, 
    RefreshCw, 
    Layout, 
    CheckCircle2, 
    AlertTriangle, 
    TrendingUp,
    Check
} from "lucide-react";

export default function ExpenseFeaturesShowcase() {
    const features = [
        {
            id: "fraud",
            name: "Eliminate Fraud",
            short: "Multi-level validation & duplicate detection.",
            desc: "The multi-manager approval workflow, automated policy verification, and duplicate check capabilities help eliminate potential transaction fraud before they happen.",
            details: [
                "Automatic duplicate receipt check using AI.",
                "Cross-references date, vendor, and amount across users.",
                "Multi-stage approval hierarchies (TL -> Manager -> Finance)."
            ],
            icon: ShieldAlert,
            color: "red",
            colorClasses: "bg-red-50 text-red-600 border-red-100 active:bg-red-500 active:text-white"
        },
        {
            id: "serial",
            name: "Auto Serial Allocation",
            short: "Systematic real-time numbering.",
            desc: "Automatically assign unique serial numbers and categories to claims in real time. Pre-set numbering patterns by administrator ensure compliance and easy searching.",
            details: [
                "Customizable formats (e.g., EXP-2026-XXXX).",
                "Automatic categorization (Travel, Medical, Food).",
                "Search and filter claims instantly by serial number."
            ],
            icon: Hash,
            color: "blue",
            colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-100"
        },
        {
            id: "budget",
            name: "Budget Control",
            short: "Pre-set department & project limits.",
            desc: "Define strict or soft budgets for departments, teams, or specific client projects. Receive real-time alerts if expense trends indicate potential overspending.",
            details: [
                "Block claims exceeding standard limit budgets.",
                "Visual warnings and reports for team managers.",
                "Automated cost allocation per project."
            ],
            icon: Wallet,
            color: "green",
            colorClasses: "bg-green-50 text-green-600 border-green-100"
        },
        {
            id: "transparency",
            name: "Enhance Transparency",
            short: "Document attachment compliance.",
            desc: "Build trust and eliminate audit anxiety. Employees are required to attach claims-based supporting documents (PDFs, images) directly within the dashboard.",
            details: [
                "Direct uploads from camera or local files.",
                "Immutable audit trail with timestamp and IP log.",
                "Easy download of full receipt packs for tax purposes."
            ],
            icon: FileText,
            color: "purple",
            colorClasses: "bg-purple-50 text-purple-600 border-purple-100"
        },
        {
            id: "paperless",
            name: "Paperless Management",
            short: "Digitalize evaluations and reporting.",
            desc: "Ditch physically printing bills and stapling receipts. Maintain 100% digital operations, allowing quick digital evaluations, queries, and bulk exports.",
            details: [
                "Reduce storage overhead and paper wastage.",
                "Central cloud database for multi-year receipts retention.",
                "Access historical claims in seconds, anywhere."
            ],
            icon: Cloud,
            color: "indigo",
            colorClasses: "bg-amber-50 text-amber-600 border-amber-100"
        },
        {
            id: "realtime",
            name: "Real-time Operations",
            short: "Notifications and instant exports.",
            desc: "Notify approvers instantly via web app, mobile push, or email. Approvals happen in seconds, allowing faster turnaround times for business reimbursements.",
            details: [
                "Push notification alerts for pending tasks.",
                "Interactive manager approval dashboard.",
                "Real-time download of consolidated expense sheets."
            ],
            icon: Activity,
            color: "amber",
            colorClasses: "bg-amber-50 text-amber-600 border-amber-100"
        },
        {
            id: "integration",
            name: "Seamless Integration",
            short: "Direct sync with ERPs and Payroll.",
            desc: "Export expense reports directly into payroll modules or external accounting tools like Tally, SAP, Zoho, and Oracle to book entries instantly.",
            details: [
                "Ready-to-use CSV/XLS exports aligned with Tally.",
                "Direct integration with HR Niti Payroll module.",
                "Auto-calculation of tax inputs and reimbursement payslips."
            ],
            icon: RefreshCw,
            color: "emerald",
            colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-100"
        },
        {
            id: "ui",
            name: "User-friendly Interface",
            short: "Sleek ESS portal & mobile app experience.",
            desc: "Ensure seamless employee adoption with an intuitive interface. Filing claims is as simple as filling a 3-field form, uploading a receipt, and clicking submit.",
            details: [
                "Requires no training for employee onboarding.",
                "Responsive layout works on desktop, tablet, and mobile.",
                "One-click action for standard claims."
            ],
            icon: Layout,
            color: "pink",
            colorClasses: "bg-pink-50 text-pink-600 border-pink-100"
        }
    ];

    const [activeTab, setActiveTab] = useState("fraud");

    const activeFeature = features.find(f => f.id === activeTab) || features[0];

    // Helper to render interactive visual mockup on the right based on active tab
    const renderVisualMockup = () => {
        switch (activeTab) {
            case "fraud":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">SYSTEM AUDIT LOG</span>
                            <span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded font-bold flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3 animate-pulse" /> Potential Duplicate
                            </span>
                        </div>
                        <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Current Claim:</span>
                                <span className="font-bold text-red-400">₹ 2,450.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Vendor:</span>
                                <span className="font-medium">Starbucks Coffee</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Date:</span>
                                <span className="text-slate-300">12 Jun 2026</span>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-4 text-xs space-y-2">
                            <p className="text-slate-400 font-bold">MATCH FOUND IN DATABASE:</p>
                            <p className="text-slate-300">Employee <span className="font-bold text-slate-200">Rohit M.</span> submitted an identical receipt on 12 Jun 2026 (Claim ID: #EXP-9024).</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[11px] bg-red-500/10 text-red-400 px-2.5 py-1 rounded-full border border-red-500/20">Auto-Rejected Duplicate</span>
                            <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full">Report Sent to Admin</span>
                        </div>
                    </div>
                );
            case "serial":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">SERIAL NUMBER CONFIGURATOR</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded font-bold">Live Preview</span>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <label className="text-[11px] text-slate-400 block mb-1">Prefix Template</label>
                                <div className="bg-slate-800 px-3 py-2 rounded-lg text-sm font-mono border border-slate-700">EXP-[YYYY]-[DEPT]-</div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-slate-400">Generated Sequence Demo:</p>
                                <div className="space-y-1.5 font-mono text-xs">
                                    <div className="flex justify-between bg-slate-950 px-3 py-1.5 rounded text-emerald-300 border-l-2 border-emerald-500">
                                        <span>EXP-2026-SALES-0001</span>
                                        <span className="text-slate-500">Active</span>
                                    </div>
                                    <div className="flex justify-between bg-slate-950 px-3 py-1.5 rounded text-emerald-300 border-l-2 border-emerald-500">
                                        <span>EXP-2026-SALES-0002</span>
                                        <span className="text-slate-500">Active</span>
                                    </div>
                                    <div className="flex justify-between bg-slate-950 px-3 py-1.5 rounded text-emerald-300 border-l-2 border-emerald-500">
                                        <span>EXP-2026-TECH-0001</span>
                                        <span className="text-slate-500">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "budget":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">DEPARTMENT BUDGET STATUS</span>
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded font-bold">Q2 Progress</span>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-slate-400">
                                    <span>Marketing Travel Limit</span>
                                    <span className="font-bold text-slate-200">₹ 85,000 / ₹ 1,00,000</span>
                                </div>
                                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-[85%]" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-slate-400">
                                    <span>Sales Daily Food Cap</span>
                                    <span className="font-bold text-yellow-400">₹ 950 / ₹ 1,000</span>
                                </div>
                                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-yellow-500 h-full w-[95%]" />
                                </div>
                            </div>
                            <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs p-3 rounded-lg flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 shrink-0 text-yellow-400" />
                                <span>Soft-cap limit alert triggered for Sales Team. Approvals will require manager override notes.</span>
                            </div>
                        </div>
                    </div>
                );
            case "transparency":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">ATTACHMENT VERIFICATION</span>
                            <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-0.5 rounded font-bold">Secure Upload</span>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">PDF</div>
                                <div>
                                    <p className="text-xs font-bold text-slate-200">Indigo_Flight_Receipt.pdf</p>
                                    <p className="text-[10px] text-slate-500">1.4 MB • Uploaded via ESS App</p>
                                </div>
                            </div>
                            <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                                <span>MD5 Checksum:</span>
                                <span className="text-slate-300">d41d8cd98f00b204e980</span>
                            </div>
                            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                                <span>Upload IP:</span>
                                <span className="text-slate-300">192.168.1.142</span>
                            </div>
                            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                                <span>Timestamp:</span>
                                <span className="text-slate-300">2026-06-16 11:42 UTC</span>
                            </div>
                        </div>
                    </div>
                );
            case "paperless":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-3 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                            <span className="text-xs text-slate-400 font-mono">DIGITAL ARCHIVE MANAGER</span>
                            <span className="text-[10px] text-slate-500">100% Cloud Retained</span>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between bg-slate-800/50 p-2.5 rounded border border-slate-700/50">
                                <span>Receipts Saved (2025-2026)</span>
                                <span className="font-bold text-emerald-400">14,249 Files</span>
                            </div>
                            <div className="flex items-center justify-between bg-slate-800/50 p-2.5 rounded border border-slate-700/50">
                                <span>Total Paper Weight Saved</span>
                                <span className="font-bold text-green-400">~ 71 kg</span>
                            </div>
                            <div className="flex items-center justify-between bg-slate-800/50 p-2.5 rounded border border-slate-700/50">
                                <span>Audit Retrieval Time</span>
                                <span className="font-bold text-emerald-400">&lt; 2 Seconds</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 rounded transition-colors">
                                Export Full FY Audit Pack (.ZIP)
                            </button>
                        </div>
                    </div>
                );
            case "realtime":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">NOTIFICATION SERVICES</span>
                            <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded font-bold">Push Broadcast</span>
                        </div>
                        <div className="space-y-2.5">
                            <div className="bg-slate-950 p-3 rounded-lg border-l-4 border-amber-500 text-xs space-y-1">
                                <div className="flex justify-between font-bold">
                                    <span className="text-amber-400">APPROVAL ALERTER</span>
                                    <span className="text-[10px] text-slate-500">Just Now</span>
                                </div>
                                <p className="text-slate-300">Sales trip claim for Ankit Sharma (₹8,346) is pending your review.</p>
                            </div>
                            <div className="bg-slate-950 p-3 rounded-lg border-l-4 border-green-500 text-xs space-y-1">
                                <div className="flex justify-between font-bold">
                                    <span className="text-green-400">REIMBURSEMENT SENT</span>
                                    <span className="text-[10px] text-slate-500">10m ago</span>
                                </div>
                                <p className="text-slate-300">Your claim ID #EXP-7721 has been paid out via IMPS bank transfer.</p>
                            </div>
                        </div>
                    </div>
                );
            case "integration":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">ERP & PAYROLL BRIDGING</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded font-bold">Sync Connected</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="bg-slate-850 p-3 rounded-lg border border-slate-800">
                                <span className="block text-slate-500 mb-1">Payroll Module</span>
                                <span className="font-bold text-green-400">Direct Auto-Pay</span>
                            </div>
                            <div className="bg-slate-850 p-3 rounded-lg border border-slate-800">
                                <span className="block text-slate-500 mb-1">Tally / ERP Sync</span>
                                <span className="font-bold text-emerald-400">1-Click GL Posting</span>
                            </div>
                        </div>
                        <div className="bg-slate-950 p-3 rounded text-[11px] font-mono text-slate-300 space-y-1">
                            <div>&gt; Syncing Expense Ledger #40103...</div>
                            <div className="text-emerald-400">&gt; Posting 48 approved claims to Tally successfully.</div>
                            <div className="text-slate-500">&gt; Process complete. Audit ID: ledger_sync_991823.</div>
                        </div>
                    </div>
                );
            case "ui":
                return (
                    <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700/50 space-y-4 shadow-xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-mono">QUICK CLAIM FORM</span>
                            <span className="bg-pink-500/20 text-pink-400 text-xs px-2 py-0.5 rounded font-bold">Easy Submission</span>
                        </div>
                        <div className="space-y-3 text-xs">
                            <div className="space-y-1">
                                <label className="text-slate-400">Expense Category</label>
                                <div className="bg-slate-850 p-2 rounded border border-slate-800 text-slate-300">Travel & Lodging</div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-slate-400">Amount (INR)</label>
                                <div className="bg-slate-850 p-2 rounded border border-slate-800 text-slate-200">₹ 4,300.00</div>
                            </div>
                            <div className="border border-dashed border-slate-800 p-4 rounded text-center text-slate-500 hover:text-slate-300 cursor-pointer">
                                + Drag & Drop Receipt Photo Here
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <span className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Advanced Capabilities
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        What Are The Common Functions Of Expense Management Software?
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Simplify operations, eliminate paperwork, and enforce compliance automatically with a centralized expense tracking workflow.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left side: Interactive Feature List */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                        {features.map((feature) => {
                            const isActive = activeTab === feature.id;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveTab(feature.id)}
                                    className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                                        isActive 
                                        ? "bg-white border-emerald-500 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500" 
                                        : "bg-white border-slate-100 hover:border-slate-300 shadow-sm"
                                    }`}
                                >
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                                            isActive 
                                            ? "bg-emerald-600 text-white" 
                                            : "bg-slate-100 text-slate-700"
                                        }`}>
                                            <feature.icon className="h-5 w-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className={`font-bold text-sm ${isActive ? "text-emerald-700" : "text-slate-850"}`}>{feature.name}</h3>
                                            <p className="text-slate-500 text-xs leading-relaxed">{feature.short}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Subtle hover fill background effect */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right side: Dynamic Visual Dashboard Mockup */}
                    <div className="lg:col-span-5 relative">
                        {/* Decorative background glow behind mockup */}
                        <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{activeFeature.name}</h3>
                                <p className="text-slate-650 text-sm leading-relaxed">{activeFeature.desc}</p>
                            </div>

                            {/* Render active mockup block */}
                            {renderVisualMockup()}

                            {/* Bullet Features */}
                            <div className="space-y-2.5 pt-2 border-t border-slate-100">
                                {activeFeature.details.map((detail, index) => (
                                    <div key={index} className="flex gap-2.5 items-start text-xs text-slate-700">
                                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="h-3 w-3 font-bold" />
                                        </div>
                                        <span>{detail}</span>
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
