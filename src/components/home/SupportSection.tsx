import Link from "next/link";
import { PhoneCall, Timer, ArrowRight } from "lucide-react";

export default function SupportSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-gradient-to-br from-emerald-50 to-indigo-50 border border-emerald-100 rounded-3xl p-10 md:p-14">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Talk to a Real Human When You Need Us
                            </h2>
                            <p className="text-slate-600 mb-8">
                                From implementation to everyday queries, our support team helps you get the most out
                                of HR Niti — no ticket black holes, no chasing bots in circles.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
                            >
                                Talk to Us <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                                    <PhoneCall className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">Direct Support Access</h3>
                                <p className="text-sm text-slate-500">Speak directly with our team for personalized, quick resolution.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                                    <Timer className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">Fast Response Times</h3>
                                <p className="text-sm text-slate-500">We keep your HR processes moving without disruption.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
