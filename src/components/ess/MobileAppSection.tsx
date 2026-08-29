import { Download, Smartphone } from "lucide-react";

export default function MobileAppSection() {
    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative mx-auto lg:mx-0">
                        {/* Phone Mockup */}
                        <div className="relative z-10 border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl mx-auto flex flex-col">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                {/* Screen Content */}
                                <div className="bg-emerald-600 h-40 pt-12 px-6 rounded-b-[3rem] shadow-lg">
                                    <div className="flex justify-between items-center text-white mb-6">
                                        <div className="w-8 h-8 bg-emerald-500 rounded-full opacity-50"></div>
                                        <div className="w-8 h-8 bg-emerald-500 rounded-full opacity-50"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Hello, User</h3>
                                    <p className="text-emerald-200 text-sm">Full Stack Developer</p>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Leave', 'Payslip', 'Holidays', 'Expense'].map((item) => (
                                            <div key={item} className="aspect-square bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100"></div>
                                                <span className="text-xs font-semibold text-gray-600">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                        <h4 className="font-bold text-orange-800 text-sm mb-1">Upcoming Holiday</h4>
                                        <p className="text-xs text-orange-600">Republic Day - 26th Jan</p>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
                                    <div className="w-6 h-6 bg-emerald-600 rounded-full"></div>
                                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute top-20 -left-10 bg-white text-gray-900 p-3 rounded-xl shadow-xl animate-float hidden md:block">
                            <div className="font-bold text-sm">Geo-Fencing 📍</div>
                        </div>
                        <div className="absolute bottom-40 -right-10 bg-white text-gray-900 p-3 rounded-xl shadow-xl animate-float-delayed hidden md:block">
                            <div className="font-bold text-sm">Face ID Login 🔓</div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-800">
                            <Smartphone className="h-4 w-4" />
                            <span className="text-sm font-medium">Available on iOS & Android</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold">ESS in your Pocket</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Designed for the modern, mobile-first workforce. Our native mobile apps provide a seamless experience, ensuring your employees stay connected even when they are on the field.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                id="ess-download-android"
                                className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                            >
                                <Download className="h-5 w-5" />
                                Download for Android
                            </button>
                            <button 
                                id="ess-download-ios"
                                className="flex items-center justify-center gap-3 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                            >
                                <Download className="h-5 w-5" />
                                Download for iOS
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
