import Link from "next/link";
import { ArrowRight, CheckCircle2, UserCheck, Smartphone } from "lucide-react";

export default function AttendanceHero() {
    return (
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide">Touchless & Biometric Ready</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Attendance Management System for <span className="text-emerald-300">Modern Workforce</span>
                        </h1>

                        <p className="text-lg text-emerald-100 max-w-xl leading-relaxed">
                            Say goodbye to spreadsheets and buddy punching. Experience a highly configurable online attendance system that adapts to your unique shift policies, whether remote or onsite.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg hover:translat-y-1"
                            >
                                Get Personalized Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#features"
                                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all"
                            >
                                Explore Features
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-white/10">
                            <p className="text-sm text-emerald-200 mb-4">Trusted by Leading Brands</p>
                            <div className="flex gap-6 opacity-70 grayscale">
                                {/* Using simple text representations as requested */}
                                {['Le Meridien', 'Max Healthcare', 'IIT Madras'].map(brand => (
                                    <span key={brand} className="font-bold text-lg">{brand}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Content - Floating Card Effect */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-full perspective-1000">

                        {/* Main Phone/Device Mockup */}
                        <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 mx-auto max-w-[320px] transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                            <div className="bg-emerald-500 h-32 relative">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-sm opacity-80">Good Morning,</div>
                                    <div className="text-2xl font-bold">Amit Sharma</div>
                                </div>
                            </div>
                            <div className="p-6 space-y-6 bg-gray-50 h-[400px]">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-gray-500 text-xs mb-1">Current Shift</div>
                                    <div className="font-bold text-gray-800">General Shift (09:00 - 18:00)</div>
                                </div>

                                <button className="w-full bg-green-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 flex items-center justify-center gap-2">
                                    <Smartphone className="h-5 w-5" />
                                    Punch In
                                </button>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-lg text-center border border-gray-100">
                                        <div className="text-2xl font-bold text-gray-800">22</div>
                                        <div className="text-xs text-gray-500">Present</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center border border-gray-100">
                                        <div className="text-2xl font-bold text-red-500">01</div>
                                        <div className="text-xs text-gray-500">Absent</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-20 -right-4 lg:right-10 bg-white p-4 rounded-lg shadow-xl animate-float z-20 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-full text-green-600">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Request Status</div>
                                    <div className="font-bold text-gray-800">Leave Approved</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-32 -left-4 lg:left-0 bg-white p-4 rounded-lg shadow-xl animate-float-delayed z-20 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                                    <UserCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Team Status</div>
                                    <div className="font-bold text-gray-800">42/45 Present</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
