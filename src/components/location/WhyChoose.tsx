"use client";

interface WhyChooseProps {
    cityName: string;
}

export default function WhyChoose({ cityName }: WhyChooseProps) {
    const benefits = [
        {
            icon: "🚀",
            title: "Scalable & Flexible",
            description: `Perfect for ${cityName}-based businesses of all sizes - from startups to large enterprises. Our solution grows with your needs.`
        },
        {
            icon: "💡",
            title: "Affordable Innovation",
            description: "Get enterprise-grade AI-powered HRMS at startup-friendly pricing. No compromise on features or quality."
        },
        {
            icon: "🔒",
            title: "Secure & Compliant",
            description: "Role-based access control, encrypted data protection, and full compliance with Indian labor laws."
        },
        {
            icon: "⚡",
            title: "Quick Implementation",
            description: "Get up and running in days, not months. Seamless integration with your existing systems and workflows."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose HR Niti in {cityName}?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We understand the unique requirements of {cityName} businesses and provide
                            tailored HRMS solutions that drive growth and efficiency
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                {/* Icon */}
                                <div className="text-4xl flex-shrink-0">
                                    {benefit.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
