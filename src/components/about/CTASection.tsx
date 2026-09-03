import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
    cityName?: string;
    title?: string;
    description?: string;
}

export default function CTASection({ cityName, title, description }: CTASectionProps = {}) {
    const displayTitle = title || (cityName ? `Ready to Transform HR & Payroll in ${cityName}?` : "Ready to Transform Your HR Operations?");
    const displayDescription = description || (cityName ? `Join growing enterprises in ${cityName} using HR Niti to automate statutory payroll and employee management.` : "Join growing enterprises across India using HR Niti to automate multi-state statutory payroll and employee management.");

    return (
        <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 py-16 text-white text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
                    <Sparkles className="w-6 h-6" />
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                    {displayTitle}
                </h2>
                
                <p className="text-emerald-100/90 max-w-lg mx-auto mb-8 font-medium text-lg leading-relaxed">
                    {displayDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/demo"
                        className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-emerald-950 px-10 py-4 rounded-xl font-extrabold text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105 uppercase tracking-wider cursor-pointer"
                    >
                        Book Free Demo
                        <ArrowRight className="ml-2 h-4.5 w-4.5" />
                    </Link>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-extrabold text-sm transition-all backdrop-blur-md uppercase tracking-wider cursor-pointer"
                    >
                        View Pricing Plans
                    </Link>
                </div>
            </div>
        </section>
    );
}
