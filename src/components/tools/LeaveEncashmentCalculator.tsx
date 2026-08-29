"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw, ShieldCheck } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

type EncashmentTiming = "resignation" | "retirement" | "during-service";
type EmployeeSector = "private" | "government";

const STATUTORY_TAX_CEILING = 2500000; // ₹25,00,000 — CBDT tax exemption ceiling for non-govt leave encashment under Sec 10(10AA)

const DEFAULTS = {
    basicDA: "45000",
    leaveDays: "20",
    workingDays: "30",
    timing: "resignation" as EncashmentTiming,
    sector: "private" as EmployeeSector,
};

export default function LeaveEncashmentCalculator() {
    const [basicDA, setBasicDA] = useState<string>(DEFAULTS.basicDA);
    const [leaveDays, setLeaveDays] = useState<string>(DEFAULTS.leaveDays);
    const [workingDays, setWorkingDays] = useState<string>(DEFAULTS.workingDays);
    const [timing, setTiming] = useState<EncashmentTiming>(DEFAULTS.timing);
    const [sector, setSector] = useState<EmployeeSector>(DEFAULTS.sector);

    const result = useMemo(() => {
        const basic = parseFloat(basicDA) || 0;
        const days = parseFloat(leaveDays) || 0;
        const denom = parseFloat(workingDays) || 30;

        const perDayRate = denom > 0 ? basic / denom : 0;
        const totalPayout = perDayRate * days;

        let taxExempt = 0;
        let taxable = 0;

        if (timing === "during-service") {
            // Encashment during service is 100% fully taxable for both government & private employees
            taxExempt = 0;
            taxable = totalPayout;
        } else {
            // At Retirement or Resignation
            if (sector === "government") {
                // Central/State Government employees get 100% tax exemption on retirement/resignation
                taxExempt = totalPayout;
                taxable = 0;
            } else {
                // Non-Government / Private employees under Sec 10(10AA)(ii)
                // Exempt up to lowest of: actual payout, 10 months avg basic+DA, ₹25 Lakh statutory ceiling
                const tenMonthsSalary = basic * 10;
                taxExempt = Math.min(totalPayout, STATUTORY_TAX_CEILING, tenMonthsSalary);
                taxable = Math.max(0, totalPayout - taxExempt);
            }
        }

        return { perDayRate, totalPayout, taxExempt, taxable };
    }, [basicDA, leaveDays, workingDays, timing, sector]);

    const reset = () => {
        setBasicDA(DEFAULTS.basicDA);
        setLeaveDays(DEFAULTS.leaveDays);
        setWorkingDays(DEFAULTS.workingDays);
        setTiming(DEFAULTS.timing);
        setSector(DEFAULTS.sector);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    {/* Encashment Timing */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            When is the leave being encashed?
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                type="button"
                                onClick={() => setTiming("resignation")}
                                className={`px-2.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    timing === "resignation"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                🚪 At Resignation
                            </button>
                            <button
                                type="button"
                                onClick={() => setTiming("retirement")}
                                className={`px-2.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    timing === "retirement"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                🌅 At Retirement
                            </button>
                            <button
                                type="button"
                                onClick={() => setTiming("during-service")}
                                className={`px-2.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    timing === "during-service"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                💼 During Service
                            </button>
                        </div>
                    </div>

                    {/* Sector selection */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Employee Category
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setSector("private")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    sector === "private"
                                        ? "bg-indigo-900 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                Private / Non-Govt
                            </button>
                            <button
                                type="button"
                                onClick={() => setSector("government")}
                                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    sector === "government"
                                        ? "bg-indigo-900 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                Government Employee
                            </button>
                        </div>
                    </div>

                    {/* Last Drawn Basic + DA */}
                    <div>
                        <label htmlFor="basic-da" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Last Drawn Basic + DA (₹/month)
                            <span
                                title="Enter your monthly Basic Salary plus Dearness Allowance (DA) used for leave salary computation."
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
                            step="1000"
                            value={basicDA}
                            onChange={(e) => setBasicDA(e.target.value)}
                            placeholder="e.g. 45000"
                            aria-describedby="basic-da-help"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <p id="basic-da-help" className="text-xs text-slate-500 mt-1">
                            Enter the monthly salary component used by your employer for leave encashment.
                        </p>
                    </div>

                    {/* Leave Days & Divisor */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="leave-days" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Leave Days to Encash
                                <span
                                    title="Unused eligible earned/privilege leave days to convert to cash."
                                    className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                                >
                                    ?
                                </span>
                            </label>
                            <input
                                id="leave-days"
                                name="leave_days"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="300"
                                value={leaveDays}
                                onChange={(e) => setLeaveDays(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="dividing-factor" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Dividing Factor
                                <span
                                    title="Calculation divisor: 30 days (standard calendar) or 26 days (working days), per company leave policy."
                                    className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                                >
                                    ?
                                </span>
                            </label>
                            <select
                                id="dividing-factor"
                                name="dividing_factor"
                                value={workingDays}
                                onChange={(e) => setWorkingDays(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                            >
                                <option value="30">30 days (Standard)</option>
                                <option value="26">26 days (Working)</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <strong>Formula:</strong> (Basic + DA ÷ {workingDays}) × {leaveDays || 0} days.
                            {timing === "during-service" ? (
                                <span className="text-amber-800 font-medium ml-1">
                                    Encashment during service is fully taxable under Income Tax rules.
                                </span>
                            ) : sector === "government" ? (
                                <span className="text-emerald-800 font-medium ml-1">
                                    Government employees receive 100% tax exemption under Sec 10(10AA)(i).
                                </span>
                            ) : (
                                <span className="text-slate-700 ml-1">
                                    Exempt up to ₹25 Lakh statutory limit under Sec 10(10AA)(ii).
                                </span>
                            )}
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

                {/* Result Card: Separates Payout, Tax-Exempt Amount, and Taxable Amount */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-3">
                            <span className="flex items-center gap-2">
                                <Calculator className="h-4 w-4" /> Estimated Leave Encashment
                            </span>
                            <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                                {workingDays === "30" ? "30-Day Basis" : "26-Day Basis"}
                            </span>
                        </div>

                        {/* Total Leave Encashment Payout */}
                        <div className="text-4xl font-extrabold text-slate-900 mb-1">
                            {formatINR(result.totalPayout)}
                        </div>
                        <div className="text-xs text-slate-500 mb-6">
                            Per-day rate: <strong className="text-slate-800">{formatINR(result.perDayRate)}</strong> ({leaveDays || 0} leave days encashed)
                        </div>

                        {/* Tax Exemption Breakdown Cards */}
                        <div className="space-y-3 pt-4 border-t border-emerald-200/80">
                            <div className="flex items-center justify-between bg-white border border-emerald-200 rounded-xl p-3.5 shadow-2xs">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                    <span>Potential Tax-Exempt Amount</span>
                                </div>
                                <span className="font-extrabold text-emerald-700 text-sm md:text-base">
                                    {formatINR(result.taxExempt)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs">
                                <div className="text-xs font-bold text-slate-700">
                                    <span>Potential Taxable Amount</span>
                                </div>
                                <span className={`font-extrabold text-sm md:text-base ${result.taxable > 0 ? "text-amber-700" : "text-slate-600"}`}>
                                    {formatINR(result.taxable)}
                                </span>
                            </div>
                        </div>

                        {/* Tax Rule Status Notice */}
                        {timing === "during-service" ? (
                            <div className="mt-4 text-xs bg-amber-50 border border-amber-200 text-amber-900 rounded-lg p-3 leading-relaxed font-medium">
                                ⚠️ <strong>Tax Note:</strong> Leave encashment during active service is treated as salary income and is 100% taxable for that financial year.
                            </div>
                        ) : sector === "government" ? (
                            <div className="mt-4 text-xs bg-emerald-100/80 border border-emerald-300 text-emerald-900 rounded-lg p-3 leading-relaxed font-medium">
                                ✅ <strong>Government Exemption:</strong> 100% fully tax-exempt under Section 10(10AA)(i) of the Income Tax Act upon retirement/resignation.
                            </div>
                        ) : (
                            <div className="mt-4 text-xs bg-slate-100 border border-slate-200 text-slate-700 rounded-lg p-3 leading-relaxed">
                                ℹ️ <strong>Sec 10(10AA) Exemption:</strong> Non-government employees receive tax exemption up to the statutory limit of ₹25 Lakhs upon exit/retirement.
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1.5">
                        <div>
                            Estimating statutory exit gratuity?{" "}
                            <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Gratuity Payout →
                            </Link>
                        </div>
                        <div>
                            Calculated hike percentage after appraisal?{" "}
                            <Link href="/tools/salary-hike-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Salary Hike % →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
