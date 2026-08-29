"use client";
import { CityData } from "@/data/cityData";

interface LocalHubsProps {
    cityData?: CityData;
}

export default function LocalHubs({ cityData }: LocalHubsProps) {
    if (!cityData) return null;

    const cityName = cityData.name || "Your City";
    const hubs = cityData.hubs || [];

    if (hubs.length === 0) return null;

    return (
        <section className="py-16 bg-emerald-50/50 border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Geographic Coverage in {cityName}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                            Serving Businesses Across Key Business Hubs in {cityName}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base">
                            HR Niti provides seamless cloud HRMS, biometric attendance, and automated payroll tailored for companies operating in {cityName}&apos;s top commercial and industrial zones.
                        </p>
                    </div>

                    {/* Hub Badges Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {hubs.map((hub, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                                    📍
                                </div>
                                <span className="font-semibold text-gray-800 text-sm group-hover:text-emerald-700 transition-colors">
                                    {hub}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
