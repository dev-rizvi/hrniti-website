"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Info, RotateCcw, ShieldCheck } from "lucide-react";

function formatINR(n: number) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

type TaxRegime = "new" | "old";

const DEFAULTS = {
    ctc: "1200000",
    regime: "new" as TaxRegime,
    basicPct: "50",
    pfCap: true,
    ptaxMonthly: "200",
};

export default function InHandSalaryCalculator() {
    const [ctcInput, setCtcInput] = useState<string>(DEFAULTS.ctc);
    const [regime, setRegime] = useState<TaxRegime>(DEFAULTS.regime);
    const [basicPctInput, setBasicPctInput] = useState<string>(DEFAULTS.basicPct);
    const [pfCap, setPfCap] = useState<boolean>(DEFAULTS.pfCap);
    const [ptaxInput, setPtaxInput] = useState<string>(DEFAULTS.ptaxMonthly);

    const result = useMemo(() => {
        const annualCTC = parseFloat(ctcInput) || 0;
        const basicRatio = (parseFloat(basicPctInput) || 50) / 100;
        const annualBasic = annualCTC * basicRatio;
        const monthlyBasic = annualBasic / 12;

        // Employer PF (12% of Basic, capped at ₹1,800/mo if pfCap is true)
        const monthlyEmployerPF = pfCap ? Math.min(1800, monthlyBasic * 0.12) : monthlyBasic * 0.12;
        const annualEmployerPF = monthlyEmployerPF * 12;

        // Employer Gratuity provision (approx 4.81% of Basic)
        const annualGratuityProvision = annualBasic * 0.0481;

        // Gross Salary = CTC minus Employer contributions
        const annualGrossSalary = Math.max(0, annualCTC - annualEmployerPF - annualGratuityProvision);

        // Employee PF (12% of Basic, capped at ₹1,800/mo if pfCap is true)
        const monthlyEmployeePF = pfCap ? Math.min(1800, monthlyBasic * 0.12) : monthlyBasic * 0.12;
        const annualEmployeePF = monthlyEmployeePF * 12;

        // Professional Tax (default ₹200/mo = ₹2,400/yr)
        const monthlyPTax = parseFloat(ptaxInput) || 0;
        const annualPTax = monthlyPTax * 12;

        // Taxable Income Calculation (Simplified New vs Old Tax Regime for FY 2025-26 / AY 2026-27)
        let stdDeduction = 75000; // ₹75,000 Standard Deduction under New Regime for FY 2025-26
        let taxableIncome = 0;
        let annualTax = 0;

        if (regime === "new") {
            taxableIncome = Math.max(0, annualGrossSalary - stdDeduction);
            // New Regime Slabs FY 2025-26:
            // 0 - 3L: Nil
            // 3L - 7L: 5%
            // 7L - 10L: 10%
            // 10L - 12L: 15%
            // 12L - 15L: 20%
            // Above 15L: 30%
            // Rebate Sec 87A: Full rebate if taxable income <= ₹7,00,000 (tax free up to ₹7.75L gross with std ded)
            if (annualGrossSalary <= 775000) {
                annualTax = 0;
            } else {
                if (taxableIncome > 1500000) {
                    annualTax += (taxableIncome - 1500000) * 0.30;
                    taxableIncome = 1500000;
                }
                if (taxableIncome > 1200000) {
                    annualTax += (taxableIncome - 1200000) * 0.20;
                    taxableIncome = 1200000;
                }
                if (taxableIncome > 1000000) {
                    annualTax += (taxableIncome - 1000000) * 0.15;
                    taxableIncome = 1000000;
                }
                if (taxableIncome > 700000) {
                    annualTax += (taxableIncome - 700000) * 0.10;
                    taxableIncome = 700000;
                }
                if (taxableIncome > 300000) {
                    annualTax += (taxableIncome - 300000) * 0.05;
                }
                // Add 4% Health & Education Cess
                annualTax *= 1.04;
            }
        } else {
            // Old Regime (Standard deduction ₹50k + 80C PF deduction + 80D etc.)
            stdDeduction = 50000;
            const deduction80C = Math.min(150000, annualEmployeePF);
            taxableIncome = Math.max(0, annualGrossSalary - stdDeduction - deduction80C);

            // Old Regime Slabs:
            // 0 - 2.5L: Nil
            // 2.5L - 5L: 5% (Rebate 87A up to 5L)
            // 5L - 10L: 20%
            // Above 10L: 30%
            if (taxableIncome <= 500000) {
                annualTax = 0;
            } else {
                if (taxableIncome > 1000000) {
                    annualTax += (taxableIncome - 1000000) * 0.30;
                    taxableIncome = 1000000;
                }
                if (taxableIncome > 500000) {
                    annualTax += (taxableIncome - 500000) * 0.20;
                    taxableIncome = 500000;
                }
                if (taxableIncome > 250000) {
                    annualTax += (taxableIncome - 250000) * 0.05;
                }
                annualTax *= 1.04;
            }
        }

        const monthlyTax = annualTax / 12;

        // Total Employee Deductions = Employee PF + Professional Tax + Income Tax (TDS)
        const monthlyTotalDeductions = monthlyEmployeePF + monthlyPTax + monthlyTax;
        const monthlyGrossSalary = annualGrossSalary / 12;

        // Net In-Hand Monthly Take-Home = Monthly Gross - Deductions
        const monthlyInHand = Math.max(0, monthlyGrossSalary - monthlyTotalDeductions);
        const annualInHand = monthlyInHand * 12;

        return {
            annualCTC,
            annualBasic,
            annualEmployerPF,
            monthlyEmployerPF,
            annualGrossSalary,
            monthlyGrossSalary,
            annualEmployeePF,
            monthlyEmployeePF,
            annualPTax,
            monthlyPTax,
            annualTax,
            monthlyTax,
            monthlyTotalDeductions,
            monthlyInHand,
            annualInHand,
        };
    }, [ctcInput, regime, basicPctInput, pfCap, ptaxInput]);

    const reset = () => {
        setCtcInput(DEFAULTS.ctc);
        setRegime(DEFAULTS.regime);
        setBasicPctInput(DEFAULTS.basicPct);
        setPfCap(DEFAULTS.pfCap);
        setPtaxInput(DEFAULTS.ptaxMonthly);
    };

    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-6">
                    {/* Income Tax Regime Toggle */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Select Income Tax Regime
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setRegime("new")}
                                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    regime === "new"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                ✨ New Regime (Default FY 25-26)
                            </button>
                            <button
                                type="button"
                                onClick={() => setRegime("old")}
                                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                                    regime === "old"
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                📄 Old Regime (with Deductions)
                            </button>
                        </div>
                    </div>

                    {/* Annual CTC Input */}
                    <div>
                        <label htmlFor="ctc" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                            Annual CTC (Cost to Company in ₹)
                            <span
                                title="Enter your total annual package offer (CTC)."
                                className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                            >
                                ?
                            </span>
                        </label>
                        <input
                            id="ctc"
                            name="annual_ctc"
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="10000"
                            value={ctcInput}
                            onChange={(e) => setCtcInput(e.target.value)}
                            placeholder="e.g. 1200000"
                            aria-describedby="ctc-help"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <p id="ctc-help" className="text-xs text-slate-500 mt-1">
                            Enter your total annual salary package (e.g. ₹12,00,000 for ₹12 Lakhs).
                        </p>
                    </div>

                    {/* Basic Pay % and PF Capping */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="basic-pct" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Basic Salary (% of CTC)
                                <span
                                    title="Typically 40% to 50% of total CTC as per company salary structure."
                                    className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                                >
                                    ?
                                </span>
                            </label>
                            <input
                                id="basic-pct"
                                name="basic_percentage"
                                type="number"
                                inputMode="numeric"
                                min="30"
                                max="70"
                                value={basicPctInput}
                                onChange={(e) => setBasicPctInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="ptax" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
                                Professional Tax (₹/mo)
                                <span
                                    title="Standard professional tax is ₹200/month (₹2,400/year) in most Indian states."
                                    className="text-slate-400 cursor-help text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center font-normal"
                                >
                                    ?
                                </span>
                            </label>
                            <input
                                id="ptax"
                                name="professional_tax"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="300"
                                value={ptaxInput}
                                onChange={(e) => setPtaxInput(e.target.value)}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* PF Cap Checkbox */}
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                        <input
                            id="pf-cap"
                            type="checkbox"
                            checked={pfCap}
                            onChange={(e) => setPfCap(e.target.checked)}
                            className="h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500 border-slate-300 cursor-pointer"
                        />
                        <label htmlFor="pf-cap" className="text-xs font-semibold text-slate-700 cursor-pointer">
                            Restrict Employee PF to statutory cap of ₹1,800/month (Basic wage ceiling ₹15,000)
                        </label>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <Info className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <strong>Take-Home Formula:</strong> Monthly Gross Salary − (Employee PF + Professional Tax + Income Tax TDS). Calculated under {regime === "new" ? "New Tax Regime FY 25-26 with ₹75k Standard Deduction" : "Old Tax Regime with Sec 80C PF deduction"}.
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
                        <div className="flex items-center justify-between gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide mb-3">
                            <span className="flex items-center gap-2">
                                <Calculator className="h-4 w-4" /> Net Monthly In-Hand Salary
                            </span>
                            <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                                {regime === "new" ? "New Tax Regime" : "Old Tax Regime"}
                            </span>
                        </div>

                        {/* Net Monthly In-Hand Cash */}
                        <div className="text-4xl font-extrabold text-slate-900 mb-1">
                            {formatINR(result.monthlyInHand)} <span className="text-sm font-semibold text-slate-500">/ month</span>
                        </div>
                        <div className="text-xs text-slate-500 mb-6">
                            Annual net take-home salary: <strong className="text-slate-900">{formatINR(result.annualInHand)}</strong> (out of {formatINR(result.annualCTC)} CTC)
                        </div>

                        {/* Breakdown List */}
                        <div className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-emerald-200/80">
                            <div className="flex justify-between items-center font-medium">
                                <span className="text-slate-600">Monthly Gross Salary</span>
                                <span className="font-bold text-slate-900">{formatINR(result.monthlyGrossSalary)}</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-600">
                                <span>Employer PF Contribution</span>
                                <span className="font-semibold">{formatINR(result.monthlyEmployerPF)}/mo</span>
                            </div>
                            <div className="flex justify-between items-center text-amber-900 font-medium pt-1 border-t border-emerald-100">
                                <span>Employee PF Deduction</span>
                                <span className="font-bold">−{formatINR(result.monthlyEmployeePF)}/mo</span>
                            </div>
                            <div className="flex justify-between items-center text-amber-900 font-medium">
                                <span>Professional Tax (PT)</span>
                                <span className="font-bold">−{formatINR(result.monthlyPTax)}/mo</span>
                            </div>
                            <div className="flex justify-between items-center text-amber-900 font-medium">
                                <span>Income Tax TDS (Est.)</span>
                                <span className="font-bold">−{formatINR(result.monthlyTax)}/mo</span>
                            </div>
                            <div className="flex justify-between items-center bg-white border border-emerald-200 rounded-lg p-2.5 text-slate-900 font-bold mt-2">
                                <span>Total Monthly Deductions</span>
                                <span className="text-amber-800">−{formatINR(result.monthlyTotalDeductions)}/mo</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium space-y-1.5">
                        <div>
                            Got a salary hike or offer letter?{" "}
                            <Link href="/tools/salary-hike-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate Salary Hike % →
                            </Link>
                        </div>
                        <div>
                            Want detailed breakdown of CTC components?{" "}
                            <Link href="/tools/ctc-calculator" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                                Calculate CTC Salary Breakup →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
