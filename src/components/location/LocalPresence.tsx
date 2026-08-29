"use client";

export default function LocalPresence() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Main Heading */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your Trusted HR Partner
                        </h2>
                        <p className="text-lg text-gray-600">
                            Revolutionizing HR management with cutting-edge technology and innovation since our inception
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">

                        {/* Innovation */}
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full">
                                <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">AI-Powered Innovation</h3>
                            <p className="text-gray-600">
                                First to introduce GenAI-based HRMS modules with intelligent automation and predictive analytics
                            </p>
                        </div>

                        {/* Scalability */}
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Highly Scalable</h3>
                            <p className="text-gray-600">
                                From startups to enterprises - our solution grows with your business needs seamlessly
                            </p>
                        </div>

                        {/* Support */}
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">24/7 Support</h3>
                            <p className="text-gray-600">
                                Dedicated support team to ensure smooth operations and quick resolution of queries
                            </p>
                        </div>

                    </div>

                    {/* Key Technologies */}
                    <div className="border-t border-gray-200 pt-8 mt-8">
                        <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Powered by Advanced Technologies</p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-amber-600 text-white text-sm font-semibold rounded-full">
                                Artificial Intelligence
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                                Machine Learning
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-semibold rounded-full">
                                Predictive Analytics
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-semibold rounded-full">
                                Cloud Computing
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
