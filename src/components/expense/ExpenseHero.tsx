"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, FileText, UserCheck, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ExpenseHero() {
    const [approvalStage, setApprovalStage] = useState(0); // 0: Pending TL, 1: Pending Manager, 2: Pending Finance, 3: Paid

    const stages = [
        { name: "Team Lead", role: "Ravi H.", status: "Approved" },
        { name: "Manager", role: "Priya S.", status: "Pending" },
        { name: "Finance", role: "Accounts", status: "Waiting" }
    ];

    const handleApprove = () => {
        if (approvalStage < 3) {
            setApprovalStage(prev => prev + 1);
        }
    };

    const resetDemo = () => {
        setApprovalStage(0);
    };

    return (
        <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 p-48 bg-emerald-600/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-purple-600/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-emerald-100">Paperless & Instant</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Enhanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expense Management</span> for Modern Teams
                        </h1>

                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                            Simplify claims with multi-level approvals, AI-driven fraud detection, and instant policy checks. Reimburse your employees faster, without the paperwork.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg hover:-translate-y-1 shadow-emerald-500/30"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Visual - Approval Workflow */}
                    <div className="relative mx-auto w-full max-w-md">

                        {/* Expense Card */}
                        <div className="bg-white text-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">
                            <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">AS</div>
                                    <div>
                                        <h4 className="font-bold text-sm">Ankit Sharma</h4>
                                        <p className="text-xs text-slate-500">Sales Team • Client Visit</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs text-slate-500">Total Claim</span>
                                    <span className="block font-bold text-lg text-slate-900">₹ 8,346.00</span>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Line Items */}
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                        <span className="text-slate-600 flex items-center gap-2"><FileText className="h-3 w-3" /> Hotel Stay</span>
                                        <span className="font-medium">₹ 5,700</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                        <span className="text-slate-600 flex items-center gap-2"><FileText className="h-3 w-3" /> Flight (BLR-MUM)</span>
                                        <span className="font-medium">₹ 2,646</span>
                                    </div>
                                </div>

                                {/* Timeline Interaction */}
                                <div className="relative pl-4 border-l-2 border-slate-100 space-y-6">
                                    {stages.map((stage, index) => {
                                        let state = 'waiting'; // waiting, active, done
                                        if (index < approvalStage) state = 'done';
                                        else if (index === approvalStage) state = 'active';

                                        return (
                                            <div key={index} className="relative">
                                                <div className={`
                                        absolute -left-[21px] top-0 w-3 h-3 rounded-full border-2 
                                        ${state === 'done' ? 'bg-green-500 border-green-500' :
                                                        state === 'active' ? 'bg-white border-emerald-500 animate-pulse' : 'bg-slate-200 border-slate-200'}
                                    `}></div>

                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className={`text-xs font-bold uppercase ${state === 'active' ? 'text-emerald-600' : 'text-slate-400'}`}>{stage.name}</p>
                                                        <p className="text-sm font-medium">{stage.role}</p>
                                                    </div>
                                                    {state === 'done' && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                                                    {state === 'active' && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Pending Approval</span>}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                                {approvalStage < 3 ? (
                                    <>
                                        <button
                                            onClick={handleApprove}
                                            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                                        >
                                            <CheckCircle2 className="h-4 w-4" /> Approve
                                        </button>
                                        <button className="flex-1 bg-white border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                                            <XCircle className="h-4 w-4" /> Reject
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={resetDemo}
                                        className="w-full bg-green-100 text-green-700 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
                                    >
                                        <ShieldCheck className="h-4 w-4" /> Reimbursement Processed
                                    </button>
                                )}
                            </div>

                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -right-8 top-20 bg-white p-3 rounded-lg shadow-lg animate-float hidden lg:block">
                            <div className="flex items-center gap-2">
                                <UserCheck className="h-5 w-5 text-green-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Auto-Policy Check</p>
                                    <p className="text-sm font-bold text-slate-800">Passed</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
