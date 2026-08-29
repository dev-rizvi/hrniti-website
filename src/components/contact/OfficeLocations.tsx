"use client";
import { MapPin, Mail, Phone } from "lucide-react";
import { officeLocations } from "@/lib/officeData";

export default function OfficeLocations() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Our Head Office
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Visit our official head office in Lucknow, Uttar Pradesh
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {officeLocations.map((location, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200 hover:border-amber-200 group"
                        >
                            {/* City Name */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{location.city}</h3>
                            </div>

                            {/* Address */}
                            <div className="mb-4">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {location.address}
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-2 pt-4 border-t border-slate-200">
                                <a
                                    href={`mailto:${location.email}`}
                                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-amber-600 transition-colors"
                                >
                                    <Mail className="h-4 w-4 text-amber-500" />
                                    <span className="font-medium">{location.email}</span>
                                </a>
                                <a
                                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-amber-600 transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-green-500" />
                                    <span className="font-medium">{location.phone}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
