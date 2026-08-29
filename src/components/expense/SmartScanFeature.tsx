import { ScanText, FileCheck, Keyboard, Smartphone } from "lucide-react";

export default function SmartScanFeature() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side */}
                    <div className="flex-1 w-full relative">
                        <div className="relative z-10 bg-slate-900 rounded-3xl p-2 max-w-sm mx-auto shadow-2xl border-4 border-slate-800">
                            {/* Mobile Screen Mockup */}
                            <div className="bg-white rounded-2xl overflow-hidden h-[500px] flex flex-col">
                                <div className="bg-emerald-600 p-4 text-white pb-12">
                                    <h4 className="font-bold">Scan Receipt</h4>
                                    <p className="text-xs opacity-80">Align receipt within frame</p>
                                </div>
                                <div className="flex-1 bg-slate-100 relative -mt-6 rounded-t-2xl p-4">

                                    {/* Receipt Image Placeholder */}
                                    <div className="bg-white p-4 shadow-md rounded-lg mb-4 transform -rotate-1 border border-gray-200">
                                        <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-gray-300 mb-2">
                                            <ScanText className="h-10 w-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-slate-100 rounded"></div>
                                            <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Extracted Data Cards */}
                                    <div className="space-y-2 animate-fade-in-up">
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Amount</span>
                                            <span className="font-bold text-green-700">₹ 850.00</span>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Date</span>
                                            <span className="font-bold text-green-700">22 Oct 2024</span>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Vendor</span>
                                            <span className="font-bold text-green-700">Startbucks Coffee</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-emerald-500/30">
                                        Submit Claim
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 -left-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                    </div>


                    {/* Text Side */}
                    <div className="flex-1 space-y-6">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                            OCR Technology
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                            Stop Typing.<br />Just Start Scanning.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Manual data entry is prone to errors. Our SmartScan OCR technology automatically extracts date, amount, merchant, and tax details from receipt photos in seconds.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                    <Smartphone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Mobile First</h4>
                                    <p className="text-sm text-gray-500">Capture expenses on the go with our Android & iOS apps.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                    <Keyboard className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Zero Entry</h4>
                                    <p className="text-sm text-gray-500">We fill the form for you. Just review and submit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
