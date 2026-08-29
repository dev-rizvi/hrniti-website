"use client";
import { BusinessSizeData } from "@/data/businessSizeData";

interface BusinessSizeComparisonProps {
    data: BusinessSizeData;
}

export default function BusinessSizeComparison({ data }: BusinessSizeComparisonProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                            Why Companies with {data.employeeRange} Choose HR Niti
                        </h2>
                        <p className="text-gray-600 text-base max-w-2xl mx-auto">
                            See how HR Niti replaces legacy spreadsheets and disjointed software with a single unified cloud system.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-900 text-white text-sm md:text-base">
                                    <th className="py-4 px-6 font-bold">Operational Metric</th>
                                    <th className="py-4 px-6 font-bold bg-gray-800 text-gray-300">Traditional / Manual Process</th>
                                    <th className="py-4 px-6 font-bold bg-emerald-700 text-amber-300">HR Niti Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                {data.comparisonRows.map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="py-4 px-6 font-bold text-gray-900">
                                            {row.metric}
                                        </td>
                                        <td className="py-4 px-6 text-gray-600 bg-gray-50/50">
                                            <div className="flex items-center gap-2">
                                                <span className="text-red-500 font-bold">✕</span>
                                                <span>{row.traditional}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-emerald-950 bg-emerald-50/50">
                                            <div className="flex items-center gap-2">
                                                <span className="text-emerald-600 font-bold">✓</span>
                                                <span>{row.hrniti}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
}
