"use client";
import Link from "next/link";
import { BusinessSizeData } from "@/data/businessSizeData";

interface BusinessSizeFeaturesProps {
    data: BusinessSizeData;
}

export default function BusinessSizeFeatures({ data }: BusinessSizeFeaturesProps) {
    return (
        <section className="py-20 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Tailored Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                            Key HRMS &amp; Payroll Modules for {data.employeeRange}
                        </h2>
                        <p className="text-gray-600 text-base max-w-2xl mx-auto">
                            Designed from the ground up to solve operational bottlenecks unique to companies with {data.employeeRange}.
                        </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.features.map((feature, index) => (
                            <Link
                                key={index}
                                href={feature.link || "/demo"}
                                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                                    <span>Learn how it works</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
