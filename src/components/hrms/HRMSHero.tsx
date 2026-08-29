import Link from "next/link";
import { ArrowRight, Network, Globe, Zap, Activity, Layers } from "lucide-react";

const BRANDS = [
  { name: "TechCorp", icon: Network },
  { name: "GlobalSolve", icon: Globe },
  { name: "InnovateInc", icon: Zap },
  { name: "FutureFlow", icon: Activity },
  { name: "BuildSmart", icon: Layers }
];

export default function HRMSHero() {
    return (
        <section className="bg-gradient-to-b from-emerald-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-emerald-100 mb-8 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-semibold text-secondary tracking-wide">AI-Powered HR Automation</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight max-w-5xl mx-auto animate-fade-in-up delay-100">
                    HRMS Software to Streamline Your <span className="text-primary relative inline-block">
                        Entire HR Lifecycle
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-2xl text-text-light mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                    Experience the power of HR Niti innovation. From <span className="text-secondary font-medium">Recruitment to Retirement</span>, manage your workforce with India&apos;s most trusted cloud-based HRMS.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-300">
                    <Link
                        href="/contact-us"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1"
                    >
                        Get Personalized Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                        href="#features"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-secondary border-2 border-gray-200 hover:border-primary/50 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                    >
                        Explore Modules
                    </Link>
                </div>

                {/* Trusted By Strip */}
                <div className="border-t border-gray-100 pt-12 mt-16 max-w-5xl mx-auto animate-fade-in-up delay-500">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Trusted by Industry Leaders</p>
                    <div className="bg-slate-50/50 border border-slate-100/50 rounded-2xl py-6 px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {BRANDS.map((brand) => (
                            <div key={brand.name} className="flex items-center gap-2.5 text-sm md:text-base font-black tracking-tight text-slate-450 hover:text-emerald-700 transition-all duration-300 hover:scale-[1.02]">
                                <div className="p-2 bg-white border border-slate-100 rounded-xl shadow-sm">
                                    <brand.icon className="w-5 h-5 text-slate-400" />
                                </div>
                                <span>{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
