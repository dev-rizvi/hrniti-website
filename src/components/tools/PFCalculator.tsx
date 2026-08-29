"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw, TrendingUp } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

const DEFAULTS = {
    basicDA: "30000",
    currentBalance: "100000",
    years: "15",
    annualHikePct: "5",
    pfCap: true,
    interestRate: "8.25", // Current EPFO interest rate
};

export default function PFCalculator() {
    const [basicDAInput, setBasicDAInput] = useState<string>(DEFAULTS.basicDA);
    const [balanceInput, setBalanceInput] = useState<string>(DEFAULTS.currentBalance);
    const [yearsInput, setYearsInput] = useState<string>(DEFAULTS.years);
    const [hikeInput, setHikeInput] = useState<string>(DEFAULTS.annualHikePct);
    const [pfCap, setPfCap] = useState<boolean>(DEFAULTS.pfCap);
    const [rateInput, setRateInput] = useState<string>(DEFAULTS.interestRate);

    const result = useMemo(() => {
        let monthlyBasic = parseFloat(basicDAInput) || 0;
        let currentBalance = parseFloat(balanceInput) || 0;
        const totalYears = parseInt(yearsInput) || 15;
        const annualHike = (parseFloat(hikeInput) || 0) / 100;
        const interestRate = (parseFloat(rateInput) || 8.25) / 100;

        const initialBalance = currentBalance;
        let totalEmployeeContrib = 0;
        let totalEmployerContrib = 0;

        // Month-by-month compounding calculation per EPFO guidelines
        for (let year = 1; year <= totalYears; year++) {
            // Employee PF = 12% of Basic (capped at ₹1,800/mo if pfCap is true)
            const monthlyEEPF = pfCap ? Math.min(1800, monthlyBasic * 0.12) : monthlyBasic * 0.12;

            // Employer PF to EPF = 3.67% of Basic (8.33% capped at ₹1,250 goes to EPS pension fund)
            const monthlyEREPF = pfCap ? Math.min(550, monthlyBasic * 0.0367) : monthlyBasic * 0.0367;

            const monthlyTotalDeposit = monthlyEEPF + monthlyEREPF;

            let yearlyInterest = 0;
            for (let month = 1; month <= 12; month++) {
                currentBalance += monthlyTotalDeposit;
                totalEmployeeContrib += monthlyEEPF;
                totalEmployerContrib += monthlyEREPF;

                // EPFO calculates monthly interest credit compounded annually
                yearlyInterest += (currentBalance * interestRate) / 12;
            }

            // Credit annual interest at year end
            currentBalance += yearlyInterest;

            // Apply annual salary increment
            monthlyBasic += monthlyBasic * annualHike;
        }

        const totalContributions = totalEmployeeContrib + totalEmployerContrib + initialBalance;
        const totalInterestEarned = Math.max(0, currentBalance - totalContributions);

        const currentMonthlyBasic = parseFloat(basicDAInput) || 0;
        const currentMonthlyEEPF = pfCap ? Math.min(1800, currentMonthlyBasic * 0.12) : currentMonthlyBasic * 0.12;
        const currentMonthlyEREPF = pfCap ? Math.min(550, currentMonthlyBasic * 0.0367) : currentMonthlyBasic * 0.0367;

        return {
            initialBalance,
            currentMonthlyEEPF,
            currentMonthlyEREPF,
            totalMonthlyDeposit: currentMonthlyEEPF + currentMonthlyEREPF,
            totalYears,
            maturityCorpus: currentBalance,
            totalEmployeeContrib,
            totalEmployerContrib,
            totalContributions,
            totalInterestEarned,
        };
    }, [basicDAInput, balanceInput, yearsInput, hikeInput, pfCap, rateInput]);

    const reset = () => {
        setBasicDAInput(DEFAULTS.basicDA);
        setBalanceInput(DEFAULTS.currentBalance);
        setYearsInput(DEFAULTS.years);
        setHikeInput(DEFAULTS.annualHikePct);
        setPfCap(DEFAULTS.pfCap);
        setRateInput(DEFAULTS.interestRate);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    {/* Basic + DA Input */}
                    <div>
                        <label htmlFor="pf-basic" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Monthly Basic Salary + DA (₹)
                            <span
                                title="Your monthly Basic Salary plus Dearness Allowance used for EPF contribution."
                                className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                            >
                                ?
                            </span>
                        </label>
                        <input
                            id="pf-basic"
                            name="monthly_basic"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1000"
                            value={basicDAInput}
                            onChange={(e) => setBasicDAInput(e.target.value)}
                            placeholder="e.g. 30000"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Current EPF Balance & Investment Tenure */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="epf-bal" className="block text-sm font-bold text-slate-700 mb-2">
                                Existing EPF Balance (₹)
                            </label>
                            <input
                                id="epf-bal"
                                type="number"
                                min="0"
                                step="10000"
                                value={balanceInput}
                                onChange={(e) => setBalanceInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="duration" className="block text-sm font-bold text-slate-700 mb-2">
                                Investment Tenure (Years)
                            </label>
                            <input
                                id="duration"
                                type="number"
                                min="1"
                                max="40"
                                value={yearsInput}
                                onChange={(e) => setYearsInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Expected Annual Salary Increase % & Interest Rate */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="hike-rate" className="block text-sm font-bold text-slate-700 mb-2">
                                Expected Annual Hike (%)
                            </label>
                            <input
                                id="hike-rate"
                                type="number"
                                min="0"
                                max="30"
                                step="0.5"
                                value={hikeInput}
                                onChange={(e) => setHikeInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="epfo-rate" className="block text-sm font-bold text-slate-700 mb-2">
                                EPFO Interest Rate (% p.a.)
                            </label>
                            <input
                                id="epfo-rate"
                                type="number"
                                min="5"
                                max="12"
                                step="0.05"
                                value={rateInput}
                                onChange={(e) => setRateInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Stat PF Cap toggle */}
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                        <input
                            id="stat-pf-cap"
                            type="checkbox"
                            checked={pfCap}
                            onChange={(e) => setPfCap(e.target.checked)}
                            className="h-4 w-4 text-emerald-600 rounded border-slate-300 cursor-pointer"
                        />
                        <label htmlFor="stat-pf-cap" className="text-xs font-semibold text-slate-700 cursor-pointer">
                            Apply statutory EPF wage cap of ₹15,000 (Max ₹1,800/mo Employee PF)
                        </label>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <strong>EPF Contribution Rule:</strong> Employee contributes 12% of Basic. Employer contributes 3.67% to EPF + 8.33% (max ₹1,250) to EPS Pension Scheme.
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

                {/* Result Card: EPF Maturity & Interest Projection */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-3">
                            <span className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4" /> Projected EPF Maturity Corpus
                            </span>
                            <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                                {yearsInput} Years Horizon
                            </span>
                        </div>

                        <div className="text-4xl font-extrabold text-slate-900 mb-1">
                            {formatINR(result.maturityCorpus)}
                        </div>
                        <div className="text-xs text-slate-500 mb-6">
                            Compounded maturity balance at <strong className="text-slate-900">{rateInput}% p.a. EPFO rate</strong>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-emerald-200/80">
                            <div className="flex justify-between items-center bg-white border border-emerald-200 rounded-xl p-3.5 shadow-2xs">
                                <div className="text-xs font-bold text-slate-700">
                                    <span>Total Interest Earned</span>
                                </div>
                                <span className="font-extrabold text-emerald-700 text-sm md:text-base">
                                    +{formatINR(result.totalInterestEarned)}
                                </span>
                            </div>

                            <div className="space-y-2 text-xs text-slate-700 pt-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600">Current Monthly Deposit (EE + ER)</span>
                                    <span className="font-bold text-slate-900">{formatINR(result.totalMonthlyDeposit)}/mo</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600">Employee Monthly Share (12%)</span>
                                    <span className="font-medium">{formatINR(result.currentMonthlyEEPF)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600">Employer EPF Monthly Share (3.67%)</span>
                                    <span className="font-medium">{formatINR(result.currentMonthlyEREPF)}</span>
                                </div>
                                <div className="flex justify-between items-center font-bold text-slate-900 pt-1 border-t border-emerald-100">
                                    <span>Total Invested Amount</span>
                                    <span>{formatINR(result.totalContributions)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1.5">
                        <div>
                            Want to check your monthly net in-hand salary after PF deduction?{" "}
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
