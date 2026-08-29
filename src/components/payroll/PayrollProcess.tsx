"use client";
import { useState } from "react";
import { Calculator, CalendarCheck, CheckCircle, CreditCard, FileText, Search } from "lucide-react";

export default function PayrollProcess() {
    const steps = [
        {
            id: 1,
            title: "Pre-Payroll",
            icon: CalendarCheck,
            desc: "Attendance finalization, leave adjustments, and variable pay inputs.",
            details: [
                "Auto-sync from biometric/mobile",
                "Leave without pay (LWP) calculation",
                "Overtime & shift allowance verification"
            ]
        },
        {
            id: 2,
            title: "Calculation",
            icon: Calculator,
            desc: "Gross-to-net calculation with statutory deductions.",
            details: [
                "TDS estimation & deduction",
                "PF & ESIC computation",
                "Loan & advance recovery"
            ]
        },
        {
            id: 3,
            title: "Verification",
            icon: Search,
            desc: "Maker-Checker process to identifying anomalies.",
            details: [
                "Variance report (current vs last month)",
                "Zero net pay checks",
                "New joiner/exit validation"
            ]
        },
        {
            id: 4,
            title: "Disbursement",
            icon: CreditCard,
            desc: "Bank transfer and payment processing.",
            details: [
                "Bank advice generation (compatible with all major banks)",
                "Cheque printing",
                "Integrations with HDFC, ICICI, SBI"
            ]
        },
        {
            id: 5,
            title: "Post-Payroll",
            icon: FileText,
            desc: "Compliance reporting and employee communication.",
            details: [
                "Payslip publishing on ESS",
                "PF/ESIC Challan generation",
                "Accounting entries (JV)"
            ]
        }
    ];

    const [activeStep, setActiveStep] = useState(1);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">5-Step Automated Cycle</h2>
                    <p className="text-gray-600">From attendance to accounting, our unified flow ensures you never miss a deadline or a decimal.</p>
                </div>

                {/* Stepper Navigation */}
                <div className="relative mb-12">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                id={`payroll-process-step-btn-${step.id}`}
                                onClick={() => setActiveStep(step.id)}
                                className="flex flex-col items-center group focus:outline-none cursor-pointer"
                            >
                                <div className={`
                            w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 mb-4 bg-white
                            ${activeStep === step.id ? 'border-primary text-primary scale-110 shadow-lg' :
                                        activeStep > step.id ? 'border-green-500 text-green-500' : 'border-gray-200 text-gray-400 hover:border-gray-300'}
                        `}>
                                    {activeStep > step.id ? <CheckCircle className="h-6 w-6" /> : <step.icon className="h-6 w-6" />}
                                </div>
                                <span className={`text-sm font-bold transition-colors ${activeStep === step.id ? 'text-primary' : 'text-gray-500'}`}>
                                    {step.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Step Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto animate-fade-in">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <div className="inline-block p-3 rounded-lg bg-emerald-50 text-emerald-600 mb-4">
                                {(() => {
                                    const Icon = steps.find(s => s.id === activeStep)?.icon || Calculator;
                                    return <Icon className="h-8 w-8" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-3">
                                {steps.find(s => s.id === activeStep)?.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                {steps.find(s => s.id === activeStep)?.desc}
                            </p>

                            <ul className="space-y-3">
                                {steps.find(s => s.id === activeStep)?.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual Content for the active step */}
                        <div className="flex-1 w-full bg-gray-50 rounded-2xl p-6 border border-gray-200/60 flex items-center justify-center min-h-[300px]">
                            {activeStep === 1 && (
                                <div className="w-full bg-white rounded-xl border border-slate-200/60 shadow-md p-6 space-y-4">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                                            <span className="text-xs font-bold text-slate-800">Pre-Payroll Validation Checklist</span>
                                        </div>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold">Active Cycle</span>
                                    </div>
                                    <div className="space-y-2.5 text-xs">
                                        <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg border border-slate-100 hover:border-indigo-100 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-500 font-bold">✓</span>
                                                <span className="font-semibold text-slate-700">Biometric Attendance Sync</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-450">1,240 Synced</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg border border-slate-100 hover:border-indigo-100 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-500 font-bold">✓</span>
                                                <span className="font-semibold text-slate-700">Leave Balance Calculations</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-450">0 Pending</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg border border-slate-100 hover:border-indigo-100 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-500 font-bold">✓</span>
                                                <span className="font-semibold text-slate-700">Variable Reimbursements Approval</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-450">₹3,45,200 Approved</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2.5 bg-indigo-50/50 rounded-lg border border-indigo-100">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                                                <span className="font-semibold text-indigo-800">Final Verification logs</span>
                                            </div>
                                            <span className="text-[10px] font-semibold text-indigo-600">Ready to Lock</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeStep === 2 && (
                                <div className="w-full bg-white rounded-xl border border-slate-200/60 shadow-md p-6 space-y-4">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span className="text-xs font-bold text-slate-800">Gross-to-Net Calculation Engine</span>
                                        </div>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Real-time</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-lg">
                                            <div className="font-semibold text-slate-700">TDS & Tax Deductions</div>
                                            <div className="text-emerald-600 font-bold">Auto-calculated</div>
                                        </div>
                                        <div className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-lg">
                                            <div className="font-semibold text-slate-700">Statutory Compliance (PF/ESIC)</div>
                                            <div className="text-emerald-600 font-bold">Computed</div>
                                        </div>
                                        <div className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-lg">
                                            <div className="font-semibold text-slate-700">Loan & Advance Recovery</div>
                                            <div className="text-amber-600 font-bold">Deducted</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeStep === 3 && (
                                <div className="w-full bg-white rounded-xl border border-slate-200/60 shadow-md p-5 space-y-4">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                        <span className="text-xs font-bold text-slate-800">Maker-Checker Audit Logs</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-semibold">Review Required</span>
                                    </div>
                                    <div className="space-y-3 text-xs">
                                        <div className="flex items-start gap-2.5 p-2.5 bg-amber-50/50 rounded-lg border border-amber-100">
                                            <span className="text-amber-600 font-bold">⚠️</span>
                                            <div>
                                                <div className="font-bold text-slate-800 text-[12px]">High Variance Warning</div>
                                                <div className="text-[11px] text-slate-500">Rajesh Kumar&apos;s salary increased by 45% (Promotion applied).</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 bg-rose-50/50 rounded-lg border border-rose-100">
                                            <span className="text-rose-600 font-bold">❌</span>
                                            <div>
                                                <div className="font-bold text-slate-800 text-[12px]">Zero Net Pay Check</div>
                                                <div className="text-[11px] text-slate-500">No issues found. All active employees have net pay &gt; 0.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeStep === 4 && (
                                <div className="w-full bg-white rounded-xl border border-slate-200/60 shadow-md p-5 space-y-4">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                        <span className="text-xs font-bold text-slate-800">Bank Disbursement Gateway</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Ready to Send</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                                            <div>
                                                <div className="text-xs font-bold text-slate-800">Total Net Payout</div>
                                                <div className="text-[11px] text-slate-400">June 2026 Cycle</div>
                                            </div>
                                            <div className="text-lg font-bold text-slate-900">₹24,52,430</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button 
                                                id="payroll-bank-file-btn"
                                                className="flex-1 py-2 text-center text-xs font-semibold rounded bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                                            >
                                                Generate Bank File
                                            </button>
                                            <button 
                                                id="payroll-download-advice-btn"
                                                className="flex-1 py-2 text-center text-xs font-semibold rounded border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                                            >
                                                Download Advice
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeStep === 5 && (
                                <div className="w-full bg-white rounded-xl border border-slate-200/60 shadow-md p-5 space-y-4">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                        <span className="text-xs font-bold text-slate-800">Post-Payroll & Compliance</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Completed</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-xs">
                                        <div className="p-3 bg-slate-50 rounded-lg text-center">
                                            <div className="font-bold text-slate-800">EPF Challan</div>
                                            <div className="text-[10px] text-emerald-600 font-semibold mt-1">Generated ✓</div>
                                        </div>
                                        <div className="p-3 bg-slate-50 rounded-lg text-center">
                                            <div className="font-bold text-slate-800">ESIC Challan</div>
                                            <div className="text-[10px] text-emerald-600 font-semibold mt-1">Generated ✓</div>
                                        </div>
                                        <div className="p-3 bg-slate-50 rounded-lg text-center">
                                            <div className="font-bold text-slate-800">Professional Tax</div>
                                            <div className="text-[10px] text-emerald-600 font-semibold mt-1">Generated ✓</div>
                                        </div>
                                        <div className="p-3 bg-slate-50 rounded-lg text-center">
                                            <div className="font-bold text-slate-800">ESS Payslips</div>
                                            <div className="text-[10px] text-emerald-600 font-semibold mt-1">Published ✓</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
