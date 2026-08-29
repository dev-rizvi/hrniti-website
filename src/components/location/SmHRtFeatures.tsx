"use client";
import Link from "next/link";

interface SmHRtFeaturesProps {
    cityName?: string;
}

const smHRtFeatures = [
    {
        title: "HR Niti® Automated Payroll",
        description: "ML-based payroll processing with state tax automation, 1-click bank transfers, and error detection.",
        icon: "💰",
        link: "/payroll-software"
    },
    {
        title: "HR Niti GenAI Copilot",
        description: "GenAI-powered HR assistant for instant policy query resolution, ESS helpdesk, and automated workflows.",
        icon: "🤖",
        link: "/hr-chatbot"
    },
    {
        title: "HR Niti Biometrics & GPS",
        description: "AI-based touchless facial recognition with geofencing and real-time mobile GPS attendance.",
        icon: "📱",
        link: "/attendance"
    },
    {
        title: "HR Niti Recruitment & ATS",
        description: "AI resume parsing, automated interview scheduling, offer letter generation, and onboarding flows.",
        icon: "🎯",
        link: "/recruitment-management"
    },
    {
        title: "HR Niti MIS Analytics",
        description: "Predictive headcount analytics, variance reporting, and interactive dashboards for HR & Finance heads.",
        icon: "📊",
        link: "/employee-performance-management-software"
    }
];

export default function SmHRtFeatures({ cityName }: SmHRtFeaturesProps) {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50 border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Intelligent HR Suite
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                            HR Niti® AI Capabilities {cityName ? `for ${cityName} Companies` : ""}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Leveraging cutting-edge AI, ML, and predictive analytics to streamline workforce management and boost productivity.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {smHRtFeatures.map((feature, index) => (
                            <Link
                                key={index}
                                href={feature.link}
                                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                            >
                                {/* Icon */}
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>

                                {/* Learn More Arrow */}
                                <div className="mt-4 flex items-center gap-2 text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                    <span>Explore {feature.title}</span>
                                    <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
