"use client";
import { useMemo, useState } from "react";
import { Calculator, Info, RotateCcw } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

type EncashmentType = "retirement" | "during-service" | "resignation";

const DEFAULTS = { basicDA: "30000", leaveDays: "15", workingDays: "26", encashmentType: "retirement" as EncashmentType };

const taxNotes: Record<EncashmentType, string> = {
    retirement: "Leave encashment received at retirement or superannuation is partially exempt from tax up to specified limits for non-government employees.",
    "during-service": "Leave encashment received while still employed is generally fully taxable as part of your salary for that year.",
    resignation: "Leave encashment received on resignation is treated similarly to retirement for tax purposes, subject to statutory exemption limits.",
};

export default function LeaveEncashmentCalculator() {
    const [basicDA, setBasicDA] = useState<string>(DEFAULTS.basicDA);
    const [leaveDays, setLeaveDays] = useState<string>(DEFAULTS.leaveDays);
    const [workingDays, setWorkingDays] = useState<string>(DEFAULTS.workingDays);
    const [encashmentType, setEncashmentType] = useState<EncashmentType>(DEFAULTS.encashmentType);

    const result = useMemo(() => {
        const basic = parseFloat(basicDA) || 0;
        const days = parseFloat(leaveDays) || 0;
        const denom = parseFloat(workingDays) || 26;
        const perDayRate = denom > 0 ? basic / denom : 0;
        const total = perDayRate * days;
        return { perDayRate, total };
    }, [basicDA, leaveDays, workingDays]);

    const reset = () => {
        setBasicDA(DEFAULTS.basicDA);
        setLeaveDays(DEFAULTS.leaveDays);
        setWorkingDays(DEFAULTS.workingDays);
        setEncashmentType(DEFAULTS.encashmentType);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">When is it being encashed?</label>
                        <div className="grid grid-cols-3 gap-2">
                            {([
                                { key: "retirement", label: "At Retirement" },
                                { key: "during-service", label: "During Service" },
                                { key: "resignation", label: "At Resignation" },
                            ] as { key: EncashmentType; label: string }[]).map((opt) => (
                                <button
                                    key={opt.key}
                                    onClick={() => setEncashmentType(opt.key)}
                                    className={`px-2 py-2.5 rounded-lg text-xs font-bold transition-colors ${encashmentType === opt.key ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Last Drawn Basic + DA (₹/month)
                            <span title="Your monthly Basic Salary plus Dearness Allowance." className="text-slate-300 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center">?</span>
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
                                Leave Days to Encash
                                <span title="The number of unused earned/privilege leave days being converted to cash." className="text-slate-300 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center">?</span>
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={leaveDays}
                                onChange={(e) => setLeaveDays(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Dividing Factor
                                <span title="The number of days per month used in the calculation — commonly 26 (working days) or 30 (calendar days), per your company policy." className="text-slate-300 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center">?</span>
                            </label>
                            <select
                                value={workingDays}
                                onChange={(e) => setWorkingDays(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                            >
                                <option value="30">30 days</option>
                                <option value="26">26 days</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                        Formula used: (Basic + DA ÷ dividing factor) × leave days encashed. {taxNotes[encashmentType]}
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
                        <Calculator className="h-4 w-4" /> Estimated Leave Encashment
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-6">{formatINR(result.total)}</div>
                    <div className="space-y-2 text-sm text-emerald-900/80 pt-4 border-t border-emerald-100">
                        <div className="flex justify-between"><span>Per-day rate</span><span className="font-semibold">{formatINR(result.perDayRate)}</span></div>
                        <div className="flex justify-between"><span>Leave days encashed</span><span className="font-semibold">{leaveDays || 0}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
