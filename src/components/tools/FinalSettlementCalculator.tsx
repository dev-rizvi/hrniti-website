"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

const STATUTORY_GRATUITY_CEILING = 2000000; // ₹20 Lakhs
const LEAVE_TAX_CEILING = 2500000; // ₹25 Lakhs

const DEFAULTS = {
    basicDA: "50000",
    workedDays: "15",
    workingDaysMonth: "30",
    leaveDays: "24",
    leaveDivisor: "30",
    yearsOfService: "6",
    noticeDeductionDays: "0",
    pendingBonus: "0",
};

export default function FinalSettlementCalculator() {
    const [basicDAInput, setBasicDAInput] = useState<string>(DEFAULTS.basicDA);
    const [workedDaysInput, setWorkedDaysInput] = useState<string>(DEFAULTS.workedDays);
    const [workingDaysMonth, setWorkingDaysMonth] = useState<string>(DEFAULTS.workingDaysMonth);
    const [leaveDaysInput, setLeaveDaysInput] = useState<string>(DEFAULTS.leaveDays);
    const [leaveDivisor, setLeaveDivisor] = useState<string>(DEFAULTS.leaveDivisor);
    const [yearsInput, setYearsInput] = useState<string>(DEFAULTS.yearsOfService);
    const [noticeInput, setNoticeInput] = useState<string>(DEFAULTS.noticeDeductionDays);
    const [bonusInput, setBonusInput] = useState<string>(DEFAULTS.pendingBonus);

    const result = useMemo(() => {
        const basicDA = parseFloat(basicDAInput) || 0;
        const workedDays = parseFloat(workedDaysInput) || 0;
        const monthDays = parseFloat(workingDaysMonth) || 30;
        const leaveDays = parseFloat(leaveDaysInput) || 0;
        const divisor = parseFloat(leaveDivisor) || 30;
        const years = parseInt(yearsInput) || 0;
        const noticeDays = parseFloat(noticeInput) || 0;
        const bonus = parseFloat(bonusInput) || 0;

        // 1. Unpaid Salary for Worked Days in Exit Month
        const perDaySalary = monthDays > 0 ? basicDA / monthDays : 0;
        const unpaidSalary = perDaySalary * workedDays;

        // 2. Leave Encashment Payout
        const perDayLeaveRate = divisor > 0 ? basicDA / divisor : 0;
        const leaveEncashmentPayout = perDayLeaveRate * leaveDays;
        const leaveTaxExempt = Math.min(leaveEncashmentPayout, LEAVE_TAX_CEILING);

        // 3. Statutory Gratuity Payout (Eligible if service >= 5 years under standard rules or 1 yr FTE)
        const gratuityEligible = years >= 5;
        const rawGratuity = gratuityEligible ? (basicDA * 15 * years) / 26 : 0;
        const gratuityPayout = Math.min(rawGratuity, STATUTORY_GRATUITY_CEILING);

        // 4. Gross Exit Payout Earnings
        const totalEarnings = unpaidSalary + leaveEncashmentPayout + gratuityPayout + bonus;

        // 5. Notice Period Recovery / Deductions
        const noticeDeduction = perDaySalary * noticeDays;

        // 6. Net Full & Final Settlement Payout
        const netFnF = Math.max(0, totalEarnings - noticeDeduction);

        return {
            perDaySalary,
            unpaidSalary,
            leaveEncashmentPayout,
            leaveTaxExempt,
            gratuityEligible,
            gratuityPayout,
            bonus,
            totalEarnings,
            noticeDeduction,
            netFnF,
        };
    }, [basicDAInput, workedDaysInput, workingDaysMonth, leaveDaysInput, leaveDivisor, yearsInput, noticeInput, bonusInput]);

    const reset = () => {
        setBasicDAInput(DEFAULTS.basicDA);
        setWorkedDaysInput(DEFAULTS.workedDays);
        setWorkingDaysMonth(DEFAULTS.workingDaysMonth);
        setLeaveDaysInput(DEFAULTS.leaveDays);
        setLeaveDivisor(DEFAULTS.leaveDivisor);
        setYearsInput(DEFAULTS.yearsOfService);
        setNoticeInput(DEFAULTS.noticeDeductionDays);
        setBonusInput(DEFAULTS.pendingBonus);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    {/* Basic + DA Input */}
                    <div>
                        <label htmlFor="fnf-basic" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Monthly Basic Salary + DA (₹)
                            <span
                                title="Your last drawn monthly Basic Salary plus Dearness Allowance."
                                className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                            >
                                ?
                            </span>
                        </label>
                        <input
                            id="fnf-basic"
                            name="monthly_basic"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1000"
                            value={basicDAInput}
                            onChange={(e) => setBasicDAInput(e.target.value)}
                            placeholder="e.g. 50000"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Worked Days in Exit Month */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="worked-days" className="block text-sm font-bold text-slate-700 mb-2">
                                Worked Days in Exit Month
                            </label>
                            <input
                                id="worked-days"
                                name="worked_days"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="31"
                                value={workedDaysInput}
                                onChange={(e) => setWorkedDaysInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="leave-bal" className="block text-sm font-bold text-slate-700 mb-2">
                                Unused Leave Days
                            </label>
                            <input
                                id="leave-bal"
                                name="unused_leave_days"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="300"
                                value={leaveDaysInput}
                                onChange={(e) => setLeaveDaysInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Service Years & Notice Recovery */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="service-yrs" className="block text-sm font-bold text-slate-700 mb-2">
                                Completed Service Years
                            </label>
                            <input
                                id="service-yrs"
                                name="completed_service_years"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="50"
                                value={yearsInput}
                                onChange={(e) => setYearsInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="notice-days" className="block text-sm font-bold text-slate-700 mb-2">
                                Notice Recovery (Days)
                            </label>
                            <input
                                id="notice-days"
                                name="notice_shortfall_days"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="90"
                                value={noticeInput}
                                onChange={(e) => setNoticeInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Pending Bonus / Reimbursements */}
                    <div>
                        <label htmlFor="bonus-input" className="block text-sm font-bold text-slate-700 mb-2">
                            Pending Bonus &amp; Reimbursements (₹)
                        </label>
                        <input
                            id="bonus-input"
                            name="pending_bonus_reimbursements"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1000"
                            value={bonusInput}
                            onChange={(e) => setBonusInput(e.target.value)}
                            placeholder="e.g. 10000"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <strong>F&amp;F Formula:</strong> (Unpaid Salary + Leave Encashment + Gratuity + Reimbursements) − Notice Shortfall Recovery.
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

                {/* Result Card: Net Exit Settlement Credit */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-3">
                            <span className="flex items-center gap-2">
                                <Calculator className="h-4 w-4" /> Net Full &amp; Final Settlement Payout
                            </span>
                            <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                                Exit Settlement
                            </span>
                        </div>

                        <div className="text-4xl font-extrabold text-slate-900 mb-1">
                            {formatINR(result.netFnF)}
                        </div>
                        <div className="text-xs text-slate-500 mb-6">
                            Estimated net monetary credit payable to employee at exit
                        </div>

                        {/* Component Breakdown List */}
                        <div className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-emerald-200/80">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">Unpaid Salary ({workedDaysInput} worked days)</span>
                                <span className="font-bold text-slate-900">+{formatINR(result.unpaidSalary)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">Leave Encashment Payout ({leaveDaysInput} days)</span>
                                <span className="font-bold text-slate-900">+{formatINR(result.leaveEncashmentPayout)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">Statutory Gratuity ({yearsInput} yrs service)</span>
                                <span className="font-bold text-slate-900">
                                    {result.gratuityEligible ? `+${formatINR(result.gratuityPayout)}` : "₹0 (Requires 5 yrs)"}
                                </span>
                            </div>
                            {result.bonus > 0 && (
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600">Pending Bonus &amp; Reimbursements</span>
                                    <span className="font-bold text-slate-900">+{formatINR(result.bonus)}</span>
                                </div>
                            )}
                            {result.noticeDeduction > 0 && (
                                <div className="flex justify-between items-center text-amber-900 font-bold border-t border-emerald-100 pt-2">
                                    <span>Notice Shortfall Recovery ({noticeInput} days)</span>
                                    <span>−{formatINR(result.noticeDeduction)}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1.5">
                        <div>
                            Want detailed standalone statutory gratuity estimate?{" "}
                            <Link href="/tools/gratuity-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Statutory Gratuity →
                            </Link>
                        </div>
                        <div>
                            Want detailed standalone leave encashment breakdown?{" "}
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
