"use client";
import Link from "next/link";

interface BusinessSizeNavProps {
    currentScale: string;
}

export default function BusinessSizeNav({ currentScale }: BusinessSizeNavProps) {
    const scales = [
        {
            id: "small",
            name: "Small Business Solutions",
            range: "1 - 50 Employees",
            slug: "/small-business-solutions",
            desc: "Simple, automated payroll & ESS mobile app for early startups & SMBs."
        },
        {
            id: "medium",
            name: "Medium Business Solutions",
            range: "50 - 250 Employees",
            slug: "/medium-business-solutions",
            desc: "Multi-branch compliance, custom approval chains & Tally accounting integration."
        },
        {
            id: "large",
            name: "Large Business Solutions",
            range: "250 - 1000+ Employees",
            slug: "/large-business-solutions",
            desc: "Enterprise SAP/Oracle APIs, 24/7 factory shift rosters & dedicated CSM support."
        }
    ];

    return (
        <section className="py-16 bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Explore Solutions By Scale
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
                            HR Niti Solutions Tailored to Every Business Size
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {scales.map((scale) => {
                            const isActive = scale.id === currentScale;
                            return (
                                <Link
                                    key={scale.id}
                                    href={scale.slug}
                                    className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${isActive ? "bg-emerald-900 text-white border-emerald-700 shadow-xl" : "bg-gray-50 text-gray-900 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"}`}
                                >
                                    <div>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${isActive ? "bg-amber-400 text-emerald-950" : "bg-emerald-100 text-emerald-800"}`}>
                                            {scale.range}
                                        </span>
                                        <h3 className={`text-xl font-bold mt-3 mb-2 ${isActive ? "text-white" : "text-gray-900"}`}>
                                            {scale.name}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${isActive ? "text-emerald-100" : "text-gray-600"}`}>
                                            {scale.desc}
                                        </p>
                                    </div>

                                    <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold ${isActive ? "border-emerald-800 text-amber-300" : "border-gray-200 text-emerald-700"}`}>
                                        <span>{isActive ? "Currently Viewing" : "Explore Solution"}</span>
                                        <span>➔</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
