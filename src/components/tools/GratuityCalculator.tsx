"use client";
import { useMemo, useState } from "react";
import { Calculator, Info, RotateCcw } from "lucide-react";

const STATUTORY_CEILING = 2000000; // ₹20,00,000 — current statutory gratuity ceiling under the Payment of Gratuity Act, 1972

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

const DEFAULTS = { basicDA: "30000", years: "7", months: "0", employeeType: "permanent" as const };

export default function GratuityCalculator() {
    const [basicDA, setBasicDA] = useState<string>(DEFAULTS.basicDA);
    const [years, setYears] = useState<string>(DEFAULTS.years);
    const [months, setMonths] = useState<string>(DEFAULTS.months);
    const [employeeType, setEmployeeType] = useState<"permanent" | "fixed-term">(DEFAULTS.employeeType);

    const result = useMemo(() => {
        const basic = parseFloat(basicDA) || 0;
        const y = parseInt(years) || 0;
        const m = parseInt(months) || 0;
        // Standard rounding rule: a part of a year in excess of 6 months counts as a full year
        const effectiveYears = m >= 6 ? y + 1 : y;
        const raw = (basic * 15 * effectiveYears) / 26;
        const capped = Math.min(raw, STATUTORY_CEILING);
        // Fixed-term employees are eligible for gratuity on a pro-rata basis
        // regardless of the 5-year rule, under the Code on Social Security, 2020.
        const eligible = employeeType === "fixed-term" || effectiveYears >= 5;
        return { effectiveYears, raw, capped, eligible };
    }, [basicDA, years, months, employeeType]);

    const reset = () => {
        setBasicDA(DEFAULTS.basicDA);
        setYears(DEFAULTS.years);
        setMonths(DEFAULTS.months);
        setEmployeeType(DEFAULTS.employeeType);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Employee Type</label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setEmployeeType("permanent")}
                                className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${employeeType === "permanent" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                            >
                                👔 Permanent
                            </button>
                            <button
                                onClick={() => setEmployeeType("fixed-term")}
                                className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${employeeType === "fixed-term" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                            >
                                📋 Fixed Term
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Last Drawn Basic + DA (₹/month)
                            <span title="Your last drawn Basic Salary plus Dearness Allowance, before any deductions." className="text-slate-300 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center">?</span>
                        </label>
                        <input
                            type="number"
                            min="0"
                            value={basicDA}
                            onChange={(e) => setBasicDA(e.target.value)}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Years of Service
                                <span title="Total completed years of continuous service with this employer." className="text-slate-300 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center">?</span>
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Extra Months
                                <span title="Months served beyond your last full year. 6+ months rounds up to the next full year." className="text-slate-300 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center">?</span>
                            </label>
                            <input
                                type="number"
                                min="0"
                                max="11"
                                value={months}
                                onChange={(e) => setMonths(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                        Formula used: (Basic + DA) × 15 × years of service ÷ 26, per the Payment of Gratuity Act, 1972,
                        for employees covered under the Act. This is an estimate — consult a professional for exact
                        statutory advice.
                    </div>

                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                        <RotateCcw className="h-3.5 w-3.5" /> Reset to defaults
                    </button>
                </div>

                {/* Result */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-4">
                        <Calculator className="h-4 w-4" /> Estimated Gratuity
                    </div>

                    {!result.eligible && (
                        <div className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-4">
                            Note: Gratuity is typically payable only after 5 years of continuous service (except in
                            case of death, disability, or fixed-term employment). This is a hypothetical estimate.
                        </div>
                    )}
                    {employeeType === "fixed-term" && (
                        <div className="text-xs font-semibold text-emerald-700 bg-emerald-100/60 border border-emerald-200 rounded-lg px-3 py-2 mb-4">
                            Fixed-term employees are eligible for gratuity on a pro-rata basis under the Code on
                            Social Security, 2020 — regardless of completing 5 years.
                        </div>
                    )}

                    <div className="text-4xl font-bold text-slate-900 mb-2">{formatINR(result.capped)}</div>
                    {result.raw > STATUTORY_CEILING && (
                        <div className="text-xs text-slate-500 mb-4">
                            Capped at the statutory ceiling of {formatINR(STATUTORY_CEILING)} (uncapped: {formatINR(result.raw)})
                        </div>
                    )}

                    <div className="space-y-2 text-sm text-emerald-900/80 mt-4 pt-4 border-t border-emerald-100">
                        <div className="flex justify-between"><span>Effective years counted</span><span className="font-semibold">{result.effectiveYears}</span></div>
                        <div className="flex justify-between"><span>Basic + DA used</span><span className="font-semibold">{formatINR(parseFloat(basicDA) || 0)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
