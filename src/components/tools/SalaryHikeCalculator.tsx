"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

type Mode = "knowNew" | "knowPercent";
type Period = "annual" | "monthly";

const DEFAULTS = { currentCTC: "600000", newCTC: "720000", hikePercent: "20", mode: "knowNew" as Mode, period: "annual" as Period };

export default function SalaryHikeCalculator() {
    const [mode, setMode] = useState<Mode>(DEFAULTS.mode);
    const [period, setPeriod] = useState<Period>(DEFAULTS.period);
    const [currentInput, setCurrentInput] = useState<string>(DEFAULTS.currentCTC);
    const [newInput, setNewInput] = useState<string>(DEFAULTS.newCTC);
    const [hikePercent, setHikePercent] = useState<string>(DEFAULTS.hikePercent);

    const result = useMemo(() => {
        const multiplier = period === "monthly" ? 12 : 1;
        const currentAnnual = (parseFloat(currentInput) || 0) * multiplier;

        let newAnnual: number;
        let percent: number;
        if (mode === "knowNew") {
            newAnnual = (parseFloat(newInput) || 0) * multiplier;
            percent = currentAnnual > 0 ? ((newAnnual - currentAnnual) / currentAnnual) * 100 : 0;
        } else {
            percent = parseFloat(hikePercent) || 0;
            newAnnual = currentAnnual + (currentAnnual * percent) / 100;
        }

        const hikeAmountAnnual = newAnnual - currentAnnual;
        return {
            currentAnnual,
            newAnnual,
            hikeAmountAnnual,
            percent,
            currentMonthly: currentAnnual / 12,
            newMonthly: newAnnual / 12,
            hikeAmountMonthly: hikeAmountAnnual / 12,
        };
    }, [mode, period, currentInput, newInput, hikePercent]);

    const changePeriod = (next: Period) => {
        if (next === period) return;
        const factor = next === "monthly" ? 1 / 12 : 12; // going annual->monthly divides, monthly->annual multiplies
        const convert = (v: string) => {
            const n = parseFloat(v);
            return Number.isFinite(n) ? String(Math.round(n * factor)) : v;
        };
        setCurrentInput((v) => convert(v));
        setNewInput((v) => convert(v));
        setPeriod(next);
    };

    const reset = () => {
        setMode(DEFAULTS.mode);
        setPeriod(DEFAULTS.period);
        setCurrentInput(DEFAULTS.currentCTC);
        setNewInput(DEFAULTS.newCTC);
        setHikePercent(DEFAULTS.hikePercent);
    };

    const scalePercent = Math.max(0, Math.min(100, result.percent));

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setMode("knowNew")}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${mode === "knowNew" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                    Find Hike %
                </button>
                <button
                    onClick={() => setMode("knowPercent")}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${mode === "knowPercent" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                    Find New Salary
                </button>
                <div className="ml-auto flex gap-1 bg-slate-100 rounded-lg p-1">
                    <button
                        onClick={() => changePeriod("annual")}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${period === "annual" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500"}`}
                    >
                        Annually
                    </button>
                    <button
                        onClick={() => changePeriod("monthly")}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${period === "monthly" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500"}`}
                    >
                        Monthly
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="calculator-field">
                        <label htmlFor="current-ctc" className="block text-sm font-bold text-slate-700 mb-2">
                            Current {period === "annual" ? "Annual CTC (INR ₹)" : "Monthly Salary (INR ₹)"}
                        </label>
                        <input
                            id="current-ctc"
                            name="current_ctc"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1000"
                            autoComplete="off"
                            aria-describedby="current-ctc-help"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <p id="current-ctc-help" className="text-xs text-slate-500 mt-1">
                            Enter your current {period === "annual" ? "annual CTC" : "monthly salary"} before the hike.
                        </p>
                    </div>

                    {mode === "knowNew" ? (
                        <div className="calculator-field">
                            <label htmlFor="new-ctc" className="block text-sm font-bold text-slate-700 mb-2">
                                New {period === "annual" ? "Annual CTC (INR ₹)" : "Monthly Salary (INR ₹)"}
                            </label>
                            <input
                                id="new-ctc"
                                name="new_ctc"
                                type="number"
                                inputMode="decimal"
                                min="0"
                                step="1000"
                                autoComplete="off"
                                aria-describedby="new-ctc-help"
                                value={newInput}
                                onChange={(e) => setNewInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <p id="new-ctc-help" className="text-xs text-slate-500 mt-1">
                                Enter the revised {period === "annual" ? "annual CTC" : "monthly salary"} from your appraisal or offer letter.
                            </p>
                        </div>
                    ) : (
                        <div className="calculator-field">
                            <label htmlFor="hike-percent" className="block text-sm font-bold text-slate-700 mb-2">Expected Hike Percentage (%)</label>
                            <input
                                id="hike-percent"
                                name="hike_percent"
                                type="number"
                                inputMode="decimal"
                                min="0"
                                step="0.5"
                                autoComplete="off"
                                aria-describedby="hike-percent-help"
                                value={hikePercent}
                                onChange={(e) => setHikePercent(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <p id="hike-percent-help" className="text-xs text-slate-500 mt-1">
                                Enter your expected hike percentage.
                            </p>
                        </div>
                    )}

                    <div>
                        <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                            <span>0%</span>
                            <span className="text-emerald-600">Hike Scale</span>
                            <span>100%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${scalePercent}%` }}></div>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                        Hike % = (New CTC − Current CTC) ÷ Current CTC × 100. This calculates gross CTC change only —
                        actual take-home change depends on your salary structure and tax slab.
                    </div>

                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                        <RotateCcw className="h-3.5 w-3.5" /> Reset to defaults
                    </button>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-4">
                        <Calculator className="h-4 w-4" /> Result
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-1">{result.percent.toFixed(1)}% Hike</div>
                    <div className="text-sm text-slate-500 mb-6">{formatINR(result.hikeAmountAnnual)} increase per year</div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-emerald-900/80 pt-4 border-t border-emerald-100">
                        <div>
                            <div className="text-xs text-emerald-700/70 mb-0.5">Current CTC</div>
                            <div className="font-bold text-slate-800">{formatINR(result.currentAnnual)}</div>
                        </div>
                        <div>
                            <div className="text-xs text-emerald-700/70 mb-0.5">New CTC</div>
                            <div className="font-bold text-slate-800">{formatINR(result.newAnnual)}</div>
                        </div>
                        <div>
                            <div className="text-xs text-emerald-700/70 mb-0.5">Current / Month</div>
                            <div className="font-bold text-slate-800">{formatINR(result.currentMonthly)}</div>
                        </div>
                        <div>
                            <div className="text-xs text-emerald-700/70 mb-0.5">New / Month</div>
                            <div className="font-bold text-slate-800">{formatINR(result.newMonthly)}</div>
                        </div>
                        <div>
                            <div className="text-xs text-emerald-700/70 mb-0.5">Monthly Gain</div>
                            <div className="font-bold text-emerald-700">+{formatINR(result.hikeAmountMonthly)}</div>
                        </div>
                        <div>
                            <div className="text-xs text-emerald-700/70 mb-0.5">Annual Gain</div>
                            <div className="font-bold text-emerald-700">+{formatINR(result.hikeAmountAnnual)}</div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1">
                        <div>
                            Want to calculate statutory exit payouts?{" "}
                            <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Gratuity →
                            </Link>
                        </div>
                        <div>
                            Or convert unused earned leave to cash?{" "}
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

