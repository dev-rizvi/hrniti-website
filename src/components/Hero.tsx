import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-accent-light pt-16 pb-24 md:pt-32 md:pb-48">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl xl:text-6xl/none">
                                Simplify Your <span className="text-primary">HR Operations</span>
                            </h1>
                            <p className="max-w-[600px] text-text-light md:text-xl/relaxed">
                                Automate payroll, attendance, and compliance with India's most trusted cloud-based HRMS. Experience the power of AI-driven HR management.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-primary/25 group">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="inline-flex items-center justify-center bg-white border border-gray-200 text-secondary hover:bg-gray-50 px-8 py-3.5 rounded-full font-medium transition-all">
                                <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="pt-4 flex items-center gap-4 text-sm text-text-light">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                ))}
                            </div>
                            <p>Trusted by 10,000+ HR Professionals</p>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative mx-auto lg:ml-auto">
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />

                        {/* Main Image Mockup */}
                        <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="aspect-[4/3] rounded-xl bg-gray-50 overflow-hidden relative">
                                {/* Placeholder for Dashboard Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gradient-to-br from-gray-50 to-gray-100">
                                    <span className="font-medium">HR Dashboard Preview</span>
                                </div>

                                {/* Floating Cards simulating UI */}
                                <div className="absolute top-8 right-8 w-48 p-4 bg-white rounded-lg shadow-xl border border-gray-50 animate-bounce-slow">
                                    <div className="h-2 w-16 bg-green-100 rounded mb-2"></div>
                                    <div className="h-4 w-24 bg-gray-100 rounded"></div>
                                </div>

                                <div className="absolute bottom-8 left-8 w-56 p-4 bg-white rounded-lg shadow-xl border border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-primary">AI</div>
                                        <div>
                                            <div className="h-3 w-20 bg-gray-100 rounded mb-1"></div>
                                            <div className="h-2 w-12 bg-gray-50 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
