"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CalendarDays, Umbrella, ShieldAlert, Check, X, ClipboardCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface LeaveBalance {
    used: number;
    total: number;
    color: string;
    icon: React.ElementType;
}

interface PendingRequest {
    id: string;
    type: string;
    days: number;
    reason: string;
    status: "pending" | "approved" | "rejected";
}

export default function LeaveHero() {
    const [balances, setBalances] = useState<Record<string, LeaveBalance>>({
        PL: { used: 12, total: 18, color: "orange", icon: Umbrella },
        CL: { used: 5, total: 10, color: "emerald", icon: CalendarDays },
        SL: { used: 4, total: 8, color: "rose", icon: ShieldAlert }
    });

    const [leaveType, setLeaveType] = useState<string>("PL");
    const [daysToApply, setDaysToApply] = useState<number>(3);
    const [reason, setReason] = useState<string>("Family personal work");
    const [queue, setQueue] = useState<PendingRequest[]>([
        { id: "1", type: "PL", days: 2, reason: "Dental checkup and rest", status: "pending" }
    ]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        if (daysToApply <= 0) return;

        setIsSubmitting(true);
        setTimeout(() => {
            const newReq: PendingRequest = {
                id: Date.now().toString(),
                type: leaveType,
                days: daysToApply,
                reason: reason || "Personal reasons",
                status: "pending"
            };
            setQueue(prev => [...prev, newReq]);
            setIsSubmitting(false);
            setReason("");
        }, 600);
    };

    const handleApprove = (reqId: string, type: string, days: number) => {
        // Trigger Confetti
        confetti({
            particleCount: 70,
            spread: 50,
            origin: { y: 0.6 }
        });

        // Deduct from Balance
        setBalances(prev => {
            const current = prev[type];
            if (!current) return prev;
            // Calculate new used (capped at total)
            const nextUsed = Math.min(current.used + days, current.total);
            return {
                ...prev,
                [type]: {
                    ...current,
                    used: nextUsed
                }
            };
        });

        // Update Request Status
        setQueue(prev => prev.map(r => r.id === reqId ? { ...r, status: "approved" as const } : r));
    };

    const handleReject = (reqId: string) => {
        setQueue(prev => prev.map(r => r.id === reqId ? { ...r, status: "rejected" as const } : r));
    };

    return (
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative border-b border-emerald-950/60">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 p-48 bg-emerald-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 p-32 bg-teal-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-1 border border-emerald-500/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-sm font-semibold tracking-wide text-emerald-300">Timely Approvals</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Highly Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Leave Management.</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
                            Automate leave requests, accruals, and approvals in real-time. Define custom grade structures, carry-forward thresholds, and sandwich rules with zero manual effort.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                id="leave-hero-demo-btn"
                                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5 shadow-emerald-500/20 cursor-pointer"
                            >
                                Get Personalized Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#features"
                                id="leave-hero-features-btn"
                                className="inline-flex items-center justify-center bg-white/5 border-2 border-white/10 hover:border-emerald-500 text-white hover:text-emerald-400 px-8 py-3.5 rounded-xl font-bold text-lg transition-all cursor-pointer"
                            >
                                View Features
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content - Interactive Leave Request & Balances Simulator */}
                    <div className="relative mx-auto w-full max-w-lg bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
                        
                        {/* Tab Header */}
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <div className="flex items-center gap-2">
                                <ClipboardCheck className="text-emerald-400 w-5 h-5" />
                                <h3 className="text-base font-bold text-slate-100">Leave Portal Simulator</h3>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">Self-Service</span>
                        </div>

                        {/* Top: Accrual Balances Display */}
                        <div className="grid grid-cols-3 gap-3">
                            {Object.entries(balances).map(([key, bal]) => {
                                const Icon = bal.icon;
                                const remaining = bal.total - bal.used;
                                const pct = (remaining / bal.total) * 100;
                                const colorClass = bal.color === "orange" ? "bg-orange-500" : bal.color === "rose" ? "bg-rose-500" : "bg-emerald-500";
                                const borderClass = bal.color === "orange" ? "border-orange-500/20" : bal.color === "rose" ? "border-rose-500/20" : "border-emerald-500/20";
                                const textClass = bal.color === "orange" ? "text-orange-400" : bal.color === "rose" ? "text-rose-400" : "text-emerald-400";
                                
                                return (
                                    <div key={key} className={`p-3 bg-slate-950/60 rounded-xl border ${borderClass} text-center`}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-bold text-slate-400">{key === "PL" ? "Privilege" : key === "CL" ? "Casual" : "Sick"}</span>
                                            <Icon className={`w-3.5 h-3.5 ${textClass}`} />
                                        </div>
                                        <div className="text-lg font-black text-slate-100">{remaining} <span className="text-[10px] font-normal text-slate-500">/ {bal.total}d</span></div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                            <div className={`h-full ${colorClass} transition-all duration-500`} style={{ width: `${pct}%` }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Middle: Interactive Leave Request Form */}
                        <form onSubmit={handleApply} className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-4">
                            <div className="text-xs font-bold text-slate-300">Apply for Leave</div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Leave Type</label>
                                    <select
                                        value={leaveType}
                                        onChange={(e) => setLeaveType(e.target.value)}
                                        id="leave-type-select"
                                        className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 text-xs rounded-lg p-2 outline-none text-white cursor-pointer"
                                    >
                                        <option value="PL">Privilege Leave (PL)</option>
                                        <option value="CL">Casual Leave (CL)</option>
                                        <option value="SL">Sick Leave (SL)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Days to Apply</label>
                                    <input
                                        type="number"
                                        min={1}
                                        max={10}
                                        value={daysToApply}
                                        onChange={(e) => setDaysToApply(parseInt(e.target.value) || 1)}
                                        id="leave-days-input"
                                        className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 text-xs rounded-lg p-2 outline-none text-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Reason for Leave</label>
                                <input
                                    type="text"
                                    placeholder="Enter reason..."
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    id="leave-reason-input"
                                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 text-xs rounded-lg p-2 outline-none text-white placeholder-slate-600"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                id="leave-submit-request-btn"
                                disabled={isSubmitting}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-3.5 h-3.5 border-2 border-slate-700 border-t-white rounded-full animate-spin"></div>
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <span>Submit Leave Request</span>
                                )}
                            </button>
                        </form>

                        {/* Bottom: Manager Approval Live Queue */}
                        <div className="space-y-3">
                            <div className="text-xs font-bold text-slate-300 flex justify-between items-center">
                                <span>Manager Approvals Queue</span>
                                <span className="text-[10px] text-slate-500 font-mono">({queue.filter(q => q.status === "pending").length} Pending)</span>
                            </div>
                            
                            <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
                                {queue.length === 0 ? (
                                    <div className="text-center py-6 text-xs text-slate-500 bg-slate-950/30 rounded-xl border border-white/5">
                                        No pending leave approvals
                                    </div>
                                ) : (
                                    queue.map((req) => (
                                        <div key={req.id} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between text-xs transition-all duration-300">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-slate-200">Rahul Sharma</span>
                                                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-bold uppercase">{req.type}</span>
                                                </div>
                                                <div className="text-slate-400 text-[10px]">Reason: {req.reason} • <span className="font-bold text-slate-200">{req.days} days</span></div>
                                            </div>

                                            <div>
                                                {req.status === "pending" ? (
                                                    <div className="flex items-center gap-1.5">
                                                        <button
                                                            onClick={() => handleApprove(req.id, req.type, req.days)}
                                                            id={`leave-approve-btn-${req.id}`}
                                                            className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                                                            title="Approve"
                                                        >
                                                            <Check className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleReject(req.id)}
                                                            id={`leave-reject-btn-${req.id}`}
                                                            className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white transition-all cursor-pointer"
                                                            title="Reject"
                                                        >
                                                            <X className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                ) : req.status === "approved" ? (
                                                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                                                        <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] font-bold text-rose-400 flex items-center gap-1">
                                                        <X className="w-3.5 h-3.5" /> Rejected
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
