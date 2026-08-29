"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function PayrollHero() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    const runPayroll = () => {
        setIsProcessing(true);
        setIsComplete(false);
        setCurrentStepIndex(1);

        setTimeout(() => {
            setCurrentStepIndex(2);
        }, 800);

        setTimeout(() => {
            setCurrentStepIndex(3);
        }, 1600);

        setTimeout(() => {
            setIsProcessing(false);
            setIsComplete(true);
            setCurrentStepIndex(4);
            confetti({
                particleCount: 85,
                spread: 55,
                origin: { y: 0.6 }
            });
        }, 2400);
    };

    const handleReset = () => {
        setIsProcessing(false);
        setIsComplete(false);
        setCurrentStepIndex(0);
    };

    return (
        <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 p-48 bg-purple-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 p-32 bg-emerald-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-emerald-100">AI-Powered Processing</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Error-Free Payroll <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">with HR Niti.</span>
                        </h1>

                        <p className="text-lg text-slate-350 max-w-xl leading-relaxed font-medium">
                            Experience the magic of one-click payroll. Our calculation engine automatically detects anomalies, compiles statutory taxes, and guarantees 100% legal compliance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                id="payroll-hero-demo-btn"
                                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-650 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5 shadow-emerald-500/20"
                            >
                                Get Personalized Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Visual - Payroll Runner */}
                    <div className="relative mx-auto w-full max-w-md bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-2xl">

                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-100">Payroll Run: June 2026</h3>
                                <p className="text-xs text-slate-400 font-medium">1,240 Employees</p>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Est. Cost</div>
                                <div className="text-lg font-mono font-bold text-emerald-400">₹ 4.2 Cr</div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Progress Steps */}
                            <div className="space-y-4">
                                <StepRow 
                                    label="Attendance Validation" 
                                    status={currentStepIndex > 1 ? 'done' : currentStepIndex === 1 ? 'running' : 'waiting'} 
                                />
                                <StepRow 
                                    label="Variable Pay Calculation" 
                                    status={currentStepIndex > 2 ? 'done' : currentStepIndex === 2 ? 'running' : 'waiting'} 
                                />
                                <StepRow 
                                    label="Tax & Deductions (TDS, PF)" 
                                    status={currentStepIndex > 3 ? 'done' : currentStepIndex === 3 ? 'running' : 'waiting'} 
                                />
                            </div>

                            {/* Main Action Area */}
                            <div className="mt-8 pt-4 border-t border-white/5 flex justify-center">
                                {!isComplete ? (
                                    <button
                                        onClick={runPayroll}
                                        id="payroll-run-btn"
                                        disabled={isProcessing}
                                        className={`
                                            relative w-full py-3.5 rounded-xl font-bold text-base transition-all overflow-hidden flex items-center justify-center gap-2 cursor-pointer
                                            ${isProcessing ? 'bg-slate-800 cursor-not-allowed text-slate-500 border border-slate-700' : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20'}
                                        `}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-slate-650 border-t-emerald-400 rounded-full animate-spin"></div>
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Play className="fill-current h-4.5 w-4.5" />
                                                <span>Run One-Click Payroll</span>
                                            </>
                                        )}

                                        {/* Progress Bar background */}
                                        {isProcessing && (
                                            <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 animate-progress-load"></div>
                                        )}
                                    </button>
                                ) : (
                                    <div className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl py-4 flex flex-col items-center justify-center animate-fade-in">
                                        <div className="flex items-center gap-2 text-base font-bold text-emerald-400 mb-1">
                                            <CheckCircle2 className="h-5 w-5" />
                                            <span>Payroll Completed!</span>
                                        </div>
                                        <span className="text-xs font-medium text-slate-400">Payslips generated & sent</span>
                                        <button
                                            onClick={handleReset}
                                            id="payroll-reset-btn"
                                            className="text-xs text-white/40 hover:text-white mt-2 underline cursor-pointer"
                                        >
                                            Reset Demo
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

function StepRow({ label, status }: { label: string, status: 'waiting' | 'running' | 'done' }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors
                    ${status === 'done' ? 'bg-emerald-500 text-black' : status === 'running' ? 'bg-purple-600 text-white animate-pulse' : 'bg-slate-800 text-slate-500'}
                `}>
                    {status === 'done' ? <CheckCircle2 className="h-4 w-4" /> : status === 'running' ? '•' : ''}
                </div>
                <span className={`text-sm font-semibold ${status === 'waiting' ? 'text-slate-500' : 'text-slate-300'}`}>{label}</span>
            </div>
            {status === 'running' && <span className="text-xs text-purple-400 font-mono">Calculating...</span>}
            {status === 'done' && <span className="text-xs text-emerald-400 font-mono font-bold">Done</span>}
        </div>
    );
}
