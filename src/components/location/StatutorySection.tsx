"use client";
import { CityData } from "@/data/cityData";

interface StatutorySectionProps {
    cityData?: CityData;
}

export default function StatutorySection({ cityData }: StatutorySectionProps) {
    if (!cityData) return null;

    const cityName = cityData.name || "Your City";
    const stateName = cityData.state || "State";
    const statutory = cityData.statutory || {
        ptName: "Professional Tax (PT)",
        lwfName: "Labour Welfare Fund (LWF)",
        forms: ["Form 16", "Form 24Q", "EPF ECR", "ESIC Returns"],
        details: "Automated state tax and statutory calculations.",
    };

    return (
        <section className="py-16 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        {/* Left Column: Context & Information */}
                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                                {stateName} Statutory &amp; Payroll Compliance
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Automated Payroll &amp; Statutory Compliance in {cityName}
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Managing payroll in {cityName} requires strict adherence to {stateName} statutory norms, wage boards, and state tax filings. HR Niti eliminates human error by auto-calculating all deductions every month.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                    <h3 className="font-bold text-emerald-950 text-base mb-1">
                                        {statutory.ptName} &amp; {statutory.lwfName}
                                    </h3>
                                    <p className="text-sm text-emerald-900 leading-relaxed">
                                        {statutory.details}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Statutory Form Cards */}
                        <div className="lg:col-span-6">
                            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl"></div>
                                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                    <span>⚖️</span> System-Generated Compliance Files for {cityName}
                                </h3>
                                <p className="text-xs text-gray-300 mb-6">
                                    Ready-to-file electronic statutory statements generated automatically post payroll execution:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {statutory.forms.map((form, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/80 rounded-lg border border-gray-700/60">
                                            <span className="text-emerald-400 font-bold text-sm">✓</span>
                                            <span className="text-sm font-medium text-gray-100">{form}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                                    <span>Updated for 2026 Fiscal &amp; State Rules</span>
                                    <span className="text-emerald-400 font-semibold">Zero Penalties Guarantee</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
