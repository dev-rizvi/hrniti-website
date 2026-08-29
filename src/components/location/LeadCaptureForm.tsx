"use client";
import { useState } from "react";

export default function LeadCaptureForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission (email or API)
        console.log("Form submitted:", formData);
        alert("Thank you! We'll get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", company: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-amber-900 overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-2xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Experience Next-Level Employee Engagement
                        </h2>
                        <p className="text-lg text-emerald-100">
                            Get a personalized demo tailored to your business needs
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Official Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                                placeholder="+91 98765 43210"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                                placeholder="Your Company Pvt Ltd"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            Request a Demo
                        </button>

                        {/* Privacy Note */}
                        <p className="text-xs text-gray-500 text-center">
                            By submitting this form, you agree to our privacy policy. We respect your data and never share it with third parties.
                        </p>

                    </form>

                </div>
            </div>
        </section>
    );
}
