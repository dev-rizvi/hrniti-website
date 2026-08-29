"use client";
import { useState } from "react";
import { BusinessSizeData } from "@/data/businessSizeData";
import { submitDemoLeadAction } from "@/app/actions/leadActions";

interface BusinessSizeHeroProps {
    data: BusinessSizeData;
}

export default function BusinessSizeHero({ data }: BusinessSizeHeroProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: data.id === "small" ? "1-19" : data.id === "medium" ? "50-250" : "250+",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const res = await submitDemoLeadAction({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            employees: formData.employees,
            sourcePage: data.title,
            sourceUrl: typeof window !== "undefined" ? window.location.href : data.seoSlug,
        });

        setIsSubmitting(false);

        if (res.success) {
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                employees: data.id === "small" ? "1-19" : data.id === "medium" ? "50-250" : "250+",
            });
            setTimeout(() => setSubmitted(false), 7000);
        } else {
            setErrorMessage(res.error || "Failed to submit lead.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 text-white pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT COLUMN: Hero Copy & Value Props */}
                    <div className="lg:col-span-7 space-y-6 text-left">

                        {/* Business Scale Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20 text-emerald-200">
                            <span className="text-amber-400">👥</span>
                            <span>{data.employeeRange} &bull; {data.tagline}</span>
                        </div>

                        {/* H1 Heading */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                            {data.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                            {data.subtitle}
                        </p>

                        {/* Key Benefits Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {data.heroChecklist.map((item, index) => (
                                <div key={index} className="flex items-center gap-2.5 text-sm text-emerald-50">
                                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* AEO Quick Direct Answer Callout Box */}
                        <div className="bg-emerald-900/50 border border-emerald-500/30 backdrop-blur-md rounded-xl p-4 text-left shadow-lg">
                            <div className="flex items-start gap-3">
                                <span className="bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 text-[11px] rounded uppercase tracking-wider mt-0.5 flex-shrink-0">
                                    AI Summary
                                </span>
                                <p className="text-xs md:text-sm text-emerald-100 leading-relaxed">
                                    {data.aeoSummary}
                                </p>
                            </div>
                        </div>

                        {/* Trust Signals Bar */}
                        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs md:text-sm text-emerald-200 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                <span>Automated Statutory Compliance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>100% Cloud Security &amp; Data Encryption</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: UPPER FOLD LEAD FORM */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-900 border border-amber-200/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                            <div className="mb-6 text-center lg:text-left">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                                    {data.employeeRange} Demo
                                </span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
                                    Get Personalized Walkthrough
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    See how HR Niti scales tailored to your company size.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="p-6 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                                    <span className="text-3xl">🎉</span>
                                    <h4 className="text-lg font-bold text-emerald-950 mt-2">Demo Request Submitted!</h4>
                                    <p className="text-xs text-emerald-800 mt-1">
                                        Saved successfully. Our specialist will contact you within 15 minutes.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {errorMessage && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Rahul Sharma"
                                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Work Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="rahul@company.com"
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Company Pvt Ltd"
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                                Employees *
                                            </label>
                                            <select
                                                name="employees"
                                                value={formData.employees}
                                                onChange={handleChange}
                                                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            >
                                                <option value="1-19">1 - 19 Employees</option>
                                                <option value="20-49">20 - 49 Employees</option>
                                                <option value="50-250">50 - 250 Employees</option>
                                                <option value="250+">250+ Employees</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-lg text-base shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Saving Lead Details..." : "Book Customized Solution Demo ➔"}
                                    </button>

                                    <p className="text-[11px] text-gray-400 text-center pt-1">
                                        🔒 100% Privacy Protected &bull; No Credit Card Required
                                    </p>
                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
