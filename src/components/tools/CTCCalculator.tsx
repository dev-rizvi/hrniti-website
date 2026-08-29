"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

const DEFAULTS = {
    ctc: "1000000",
    basicPct: "50",
    hraPct: "50",
    includeGratuity: true,
    pfCap: true,
};

export default function CTCCalculator() {
    const [ctcInput, setCtcInput] = useState<string>(DEFAULTS.ctc);
    const [basicPctInput, setBasicPctInput] = useState<string>(DEFAULTS.basicPct);
    const [hraPctInput, setHraPctInput] = useState<string>(DEFAULTS.hraPct);
    const [includeGratuity, setIncludeGratuity] = useState<boolean>(DEFAULTS.includeGratuity);
    const [pfCap, setPfCap] = useState<boolean>(DEFAULTS.pfCap);

    const result = useMemo(() => {
        const annualCTC = parseFloat(ctcInput) || 0;
        const basicRatio = (parseFloat(basicPctInput) || 50) / 100;
        const hraRatio = (parseFloat(hraPctInput) || 50) / 100;

        const annualBasic = annualCTC * basicRatio;
        const monthlyBasic = annualBasic / 12;

        const annualHRA = annualBasic * hraRatio;
        const monthlyHRA = annualHRA / 12;

        // Employer PF (12% of Basic, capped at ₹1,800/mo if pfCap is true)
        const monthlyEmployerPF = pfCap ? Math.min(1800, monthlyBasic * 0.12) : monthlyBasic * 0.12;
        const annualEmployerPF = monthlyEmployerPF * 12;

        // Employer Gratuity provision (4.81% of Basic)
        const annualGratuity = includeGratuity ? annualBasic * 0.0481 : 0;
        const monthlyGratuity = annualGratuity / 12;

        // Special Allowance (Balancing component to equal CTC)
        const annualSpecialAllowance = Math.max(
            0,
            annualCTC - annualBasic - annualHRA - annualEmployerPF - annualGratuity
        );
        const monthlySpecialAllowance = annualSpecialAllowance / 12;

        // Gross Salary = Basic + HRA + Special Allowance
        const annualGross = annualBasic + annualHRA + annualSpecialAllowance;
        const monthlyGross = annualGross / 12;

        // Employee PF Deduction (12% of Basic, capped at ₹1,800/mo)
        const monthlyEmployeePF = monthlyEmployerPF;
        const annualEmployeePF = annualEmployerPF;

        // Professional Tax (approx ₹200/mo)
        const monthlyPTax = 200;
        const annualPTax = monthlyPTax * 12;

        // Estimated Monthly Take-Home Salary (before income tax TDS)
        const monthlyInHandBeforeTax = Math.max(0, monthlyGross - monthlyEmployeePF - monthlyPTax);

        return {
            annualCTC,
            monthlyCTC: annualCTC / 12,
            annualBasic,
            monthlyBasic,
            annualHRA,
            monthlyHRA,
            annualSpecialAllowance,
            monthlySpecialAllowance,
            annualEmployerPF,
            monthlyEmployerPF,
            annualGratuity,
            monthlyGratuity,
            annualGross,
            monthlyGross,
            annualEmployeePF,
            monthlyEmployeePF,
            monthlyPTax,
            monthlyInHandBeforeTax,
        };
    }, [ctcInput, basicPctInput, hraPctInput, includeGratuity, pfCap]);

    const reset = () => {
        setCtcInput(DEFAULTS.ctc);
        setBasicPctInput(DEFAULTS.basicPct);
        setHraPctInput(DEFAULTS.hraPct);
        setIncludeGratuity(DEFAULTS.includeGratuity);
        setPfCap(DEFAULTS.pfCap);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label htmlFor="ctc-input" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Total Annual CTC (Cost to Company in ₹)
                            <span
                                title="Total annual salary package offered by the employer."
                                className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                            >
                                ?
                            </span>
                        </label>
                        <input
                            id="ctc-input"
                            name="ctc_amount"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="10000"
                            value={ctcInput}
                            onChange={(e) => setCtcInput(e.target.value)}
                            placeholder="e.g. 1000000"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="basic-ratio" className="block text-sm font-bold text-slate-700 mb-2">
                                Basic Pay (% of CTC)
                            </label>
                            <input
                                id="basic-ratio"
                                type="number"
                                min="30"
                                max="70"
                                value={basicPctInput}
                                onChange={(e) => setBasicPctInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="hra-ratio" className="block text-sm font-bold text-slate-700 mb-2">
                                HRA (% of Basic)
                            </label>
                            <input
                                id="hra-ratio"
                                type="number"
                                min="30"
                                max="50"
                                value={hraPctInput}
                                onChange={(e) => setHraPctInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                            <input
                                id="gratuity-check"
                                type="checkbox"
                                checked={includeGratuity}
                                onChange={(e) => setIncludeGratuity(e.target.checked)}
                                className="h-4 w-4 text-emerald-600 rounded border-slate-300 cursor-pointer"
                            />
                            <label htmlFor="gratuity-check" className="text-xs font-semibold text-slate-700 cursor-pointer">
                                Include Employer Gratuity Contribution (4.81% of Basic) in CTC
                            </label>
                        </div>

                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                            <input
                                id="pf-cap-check"
                                type="checkbox"
                                checked={pfCap}
                                onChange={(e) => setPfCap(e.target.checked)}
                                className="h-4 w-4 text-emerald-600 rounded border-slate-300 cursor-pointer"
                            />
                            <label htmlFor="pf-cap-check" className="text-xs font-semibold text-slate-700 cursor-pointer">
                                Restrict Employer PF to statutory cap (₹1,800/month)
                            </label>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <strong>50% Wage Rule under Code on Social Security 2020:</strong> Basic salary must be at least 50% of CTC to ensure proper PF &amp; gratuity contributions.
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                        <RotateCcw className="h-3.5 w-3.5" /> Reset to defaults
                    </button>
                </div>

                {/* Result Card: CTC Salary Component Breakup Table */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-3">
                            <span className="flex items-center gap-2">
                                <Calculator className="h-4 w-4" /> CTC Salary Breakup
                            </span>
                            <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                                Annual &amp; Monthly
                            </span>
                        </div>

                        <div className="text-3xl font-extrabold text-slate-900 mb-1">
                            {formatINR(result.annualCTC)} <span className="text-xs font-semibold text-slate-500">/ year</span>
                        </div>
                        <div className="text-xs text-slate-500 mb-4">
                            Monthly Total CTC: <strong className="text-slate-900">{formatINR(result.monthlyCTC)}</strong>
                        </div>

                        <div className="overflow-x-auto bg-white rounded-xl border border-emerald-200/80 p-3 shadow-2xs space-y-2 text-xs">
                            <div className="grid grid-cols-3 font-bold text-slate-900 border-b border-slate-100 pb-2">
                                <span>Component</span>
                                <span className="text-right">Monthly</span>
                                <span className="text-right">Annual</span>
                            </div>
                            <div className="grid grid-cols-3 text-slate-700">
                                <span className="font-semibold text-slate-900">Basic Pay ({basicPctInput}%)</span>
                                <span className="text-right font-medium">{formatINR(result.monthlyBasic)}</span>
                                <span className="text-right font-medium">{formatINR(result.annualBasic)}</span>
                            </div>
                            <div className="grid grid-cols-3 text-slate-700">
                                <span>HRA ({hraPctInput}%)</span>
                                <span className="text-right">{formatINR(result.monthlyHRA)}</span>
                                <span className="text-right">{formatINR(result.annualHRA)}</span>
                            </div>
                            <div className="grid grid-cols-3 text-slate-700">
                                <span>Special Allowance</span>
                                <span className="text-right">{formatINR(result.monthlySpecialAllowance)}</span>
                                <span className="text-right">{formatINR(result.annualSpecialAllowance)}</span>
                            </div>
                            <div className="grid grid-cols-3 text-slate-900 font-bold border-t border-slate-100 pt-1.5">
                                <span>Gross Salary</span>
                                <span className="text-right text-emerald-700">{formatINR(result.monthlyGross)}</span>
                                <span className="text-right text-emerald-700">{formatINR(result.annualGross)}</span>
                            </div>
                            <div className="grid grid-cols-3 text-slate-600">
                                <span>Employer PF</span>
                                <span className="text-right">{formatINR(result.monthlyEmployerPF)}</span>
                                <span className="text-right">{formatINR(result.annualEmployerPF)}</span>
                            </div>
                            {includeGratuity && (
                                <div className="grid grid-cols-3 text-slate-600">
                                    <span>Gratuity (4.81%)</span>
                                    <span className="text-right">{formatINR(result.monthlyGratuity)}</span>
                                    <span className="text-right">{formatINR(result.annualGratuity)}</span>
                                </div>
                            )}
                        </div>

                        <div className="mt-4 bg-emerald-100/70 border border-emerald-300 rounded-xl p-3.5 text-xs text-emerald-950 flex justify-between items-center font-bold">
                            <span>Estimated Salary Before Employee Deductions</span>
                            <span className="text-base text-emerald-800">{formatINR(result.monthlyInHandBeforeTax)}/mo</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1.5">
                        <div>
                            Want exact monthly take-home after income tax?{" "}
                            <Link href="/tools/in-hand-salary-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate In-Hand Salary →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
