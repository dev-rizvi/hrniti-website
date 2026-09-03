"use client";
import Link from "next/link";
import { cityList } from "@/data/cityData";

interface InterCityNavProps {
    currentCity?: string;
}

export default function InterCityNav({ currentCity }: InterCityNavProps) {
    // Filter out current city if provided (match by slug or seoSlug)
    const otherCities = currentCity
        ? cityList.filter(
            city => city.slug !== currentCity.toLowerCase() && city.seoSlug !== currentCity.toLowerCase()
        )
        : cityList;

    return (
        <section className="py-16 bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Pan-India HRMS Locations
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3">
                            Explore HRMS &amp; Payroll Software in Other Major Cities
                        </h2>
                        <p className="text-gray-600 text-base">
                            HR Niti powers fast-scaling startups and enterprises across top commercial hubs in India.
                        </p>
                    </div>

                    {/* City Grid with Keyword Slugs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {otherCities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/${city.seoSlug}`}
                                className="group flex flex-col justify-between p-4 bg-gray-50 hover:bg-emerald-50/80 rounded-xl transition-all border border-gray-200 hover:border-emerald-300 hover:shadow-md"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        📍
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors text-base">
                                            {city.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 truncate">{city.tagline}</p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                                    <span>HRMS &amp; Payroll in {city.name}</span>
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
