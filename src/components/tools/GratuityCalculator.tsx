"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw } from "lucide-react";

const STATUTORY_CEILING = 2000000; // ₹20,00,000 — current statutory gratuity ceiling under Payment of Gratuity Act / Code on Social Security 2020

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

type EmployeeType = "permanent" | "fixed-term" | "contract";
type EstablishmentType = "covered" | "non-covered";

const DEFAULTS = {
    basicDA: "30000",
    years: "7",
    months: "0",
    employeeType: "permanent" as EmployeeType,
    establishmentType: "covered" as EstablishmentType,
};

export default function GratuityCalculator() {
    const [basicDA, setBasicDA] = useState<string>(DEFAULTS.basicDA);
    const [years, setYears] = useState<string>(DEFAULTS.years);
    const [months, setMonths] = useState<string>(DEFAULTS.months);
    const [employeeType, setEmployeeType] = useState<EmployeeType>(DEFAULTS.employeeType);
    const [establishmentType, setEstablishmentType] = useState<EstablishmentType>(DEFAULTS.establishmentType);

    const result = useMemo(() => {
        const basic = parseFloat(basicDA) || 0;
        const y = parseInt(years) || 0;
        const m = parseInt(months) || 0;

        // Standard rounding rule under Gratuity Act / Social Security Code:
        // A part of a year in excess of 6 months counts as a full year for covered establishments.
        // For non-covered, exact full completed years are taken.
        const effectiveYears = establishmentType === "covered" ? (m >= 6 ? y + 1 : y) : y;
        const divisor = establishmentType === "covered" ? 26 : 30;

        const raw = (basic * 15 * effectiveYears) / divisor;
        const capped = Math.min(raw, STATUTORY_CEILING);

        // Fixed-term employees (FTE) are eligible for gratuity on a pro-rata basis after 1 year of service
        // under the Code on Social Security, 2020. Permanent/contract employees generally require 5 years.
        const eligible = employeeType === "fixed-term" ? effectiveYears >= 1 : effectiveYears >= 5;

        const taxExempt = Math.min(capped, STATUTORY_CEILING);
        const taxable = Math.max(0, raw - STATUTORY_CEILING);

        return { effectiveYears, divisor, raw, capped, eligible, taxExempt, taxable };
    }, [basicDA, years, months, employeeType, establishmentType]);

    const reset = () => {
        setBasicDA(DEFAULTS.basicDA);
        setYears(DEFAULTS.years);
        setMonths(DEFAULTS.months);
        setEmployeeType(DEFAULTS.employeeType);
        setEstablishmentType(DEFAULTS.establishmentType);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    {/* Employee Type Selection */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Employee Category / Type
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                type="button"
                                onClick={() => setEmployeeType("permanent")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    employeeType === "permanent"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                👔 Regular / Permanent
                            </button>
                            <button
                                type="button"
                                onClick={() => setEmployeeType("fixed-term")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    employeeType === "fixed-term"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                📋 Fixed-Term (1 Yr)
                            </button>
                            <button
                                type="button"
                                onClick={() => setEmployeeType("contract")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    employeeType === "contract"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                👷 Contract Worker
                            </button>
                        </div>
                    </div>

                    {/* Establishment Type */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Establishment Coverage
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setEstablishmentType("covered")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    establishmentType === "covered"
                                        ? "bg-indigo-900 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                Covered under Act (÷26)
                            </button>
                            <button
                                type="button"
                                onClick={() => setEstablishmentType("non-covered")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    establishmentType === "non-covered"
                                        ? "bg-indigo-900 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                Non-Covered (÷30)
                            </button>
                        </div>
                    </div>

                    {/* Basic + DA Input */}
                    <div>
                        <label htmlFor="basic-da" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Last Drawn Basic + DA (₹/month)
                            <span
                                title="Your last drawn Basic Salary plus Dearness Allowance (DA). Under Code on Social Security 2020, if allowances exceed 50% of CTC, excess is added to wage."
                                className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                            >
                                ?
                            </span>
                        </label>
                        <input
                            id="basic-da"
                            name="basic_da"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="500"
                            value={basicDA}
                            onChange={(e) => setBasicDA(e.target.value)}
                            placeholder="e.g. 30000"
                            aria-describedby="basic-da-help"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <p id="basic-da-help" className="text-xs text-slate-500 mt-1">
                            Enter monthly Basic Salary plus Dearness Allowance before deductions.
                        </p>
                    </div>

                    {/* Years & Months Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="years" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Completed Years
                                <span
                                    title="Total completed continuous years of service."
                                    className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                                >
                                    ?
                                </span>
                            </label>
                            <input
                                id="years"
                                name="years_of_service"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="60"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="months" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Extra Months
                                <span
                                    title="Months served in the final year. 6 or more months round up to 1 full year for covered establishments."
                                    className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                                >
                                    ?
                                </span>
                            </label>
                            <input
                                id="months"
                                name="extra_months"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="11"
                                value={months}
                                onChange={(e) => setMonths(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Statutory Note Box */}
                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <strong>Formula used:</strong> (Basic + DA) × 15 × {result.effectiveYears} ÷ {result.divisor}.
                            {establishmentType === "covered"
                                ? " (Covered under Payment of Gratuity Act / Code on Social Security 2020: 26 working days/month)."
                                : " (Non-covered establishment: 30 days/month basis)."}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                        <RotateCcw className="h-3.5 w-3.5" /> Reset to default values
                    </button>
                </div>

                {/* Result Card */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-4">
                            <span className="flex items-center gap-2">
                                <Calculator className="h-4 w-4" /> Estimated Gratuity Payout
                            </span>
                            <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                                {establishmentType === "covered" ? "15/26 Rule" : "15/30 Rule"}
                            </span>
                        </div>

                        {!result.eligible && (
                            <div className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 leading-relaxed">
                                ⚠️ <strong>Eligibility Note:</strong> Standard regular & contract employees usually require 5 continuous years of service (unless waived for death/disability). Fixed-term employees qualify after 1 year under the Code on Social Security 2020.
                            </div>
                        )}

                        {employeeType === "fixed-term" && (
                            <div className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-200 rounded-lg p-3 mb-4 leading-relaxed">
                                ✅ <strong>Fixed-Term Employee (FTE) Rule:</strong> Under Code on Social Security 2020, fixed-term employees are eligible for gratuity on a pro-rata basis after completing just 1 year of service.
                            </div>
                        )}

                        {employeeType === "contract" && (
                            <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-4 leading-relaxed">
                                ℹ️ <strong>Contract Worker Rule:</strong> Payable by contractor or principal employer upon completing qualifying service under Social Security rules.
                            </div>
                        )}

                        <div className="text-4xl font-extrabold text-slate-900 mb-1">
                            {formatINR(result.capped)}
                        </div>
                        <div className="text-xs text-slate-500 mb-6">
                            {result.raw > STATUTORY_CEILING ? (
                                <span className="text-amber-700 font-medium">
                                    Capped at statutory ceiling of {formatINR(STATUTORY_CEILING)} (uncapped total: {formatINR(result.raw)})
                                </span>
                            ) : (
                                <span>Statutory exit payout estimate under 2020 Social Security rules</span>
                            )}
                        </div>

                        <div className="space-y-2.5 text-sm text-emerald-950 pt-4 border-t border-emerald-200/80">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">Effective Service Years Counted</span>
                                <span className="font-bold text-slate-900">{result.effectiveYears} years</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">Eligible Monthly Basic + DA</span>
                                <span className="font-bold text-slate-900">{formatINR(parseFloat(basicDA) || 0)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">Tax Exemption Ceiling (Sec 10(10))</span>
                                <span className="font-bold text-emerald-700">Up to ₹20,00,000</span>
                            </div>
                            {result.taxable > 0 && (
                                <div className="flex justify-between items-center text-amber-800">
                                    <span>Taxable Portion (Above ₹20L)</span>
                                    <span className="font-bold">{formatINR(result.taxable)}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1.5">
                        <div>
                            Planning a job switch or salary appraisal?{" "}
                            <Link href="/tools/salary-hike-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Salary Hike % →
                            </Link>
                        </div>
                        <div>
                            Encashing accrued earned leaves at exit?{" "}
                            <Link href="/tools/leave-encashment-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Leave Encashment →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
