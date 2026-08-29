import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportsHero from "@/components/reports/ReportsHero";
import ReportGrid from "@/components/reports/ReportGrid";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
    title: "Research Reports & Industry Benchmarks - HR Niti",
    description: "Access annual reports, statutory compliance indexes, and workforce analytics benchmarks from the HR Niti research center.",
    openGraph: {
        title: "Research Reports & Industry Benchmarks - HR Niti",
        description: "Access annual reports, statutory compliance indexes, and workforce analytics benchmarks from the HR Niti research center.",
        url: "https://www.hrniti.com/reports",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Research Center" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Research Reports & Industry Benchmarks - HR Niti",
        description: "Access annual reports, statutory compliance indexes, and workforce analytics benchmarks from the HR Niti research center.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/reports" },
    keywords: "HR research, HR benchmarks, payroll compliance index, people analytics reports, HR tech whitepapers",
};

export default function ReportsPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <Navbar />

            <ReportsHero />

            <ReportGrid />

            {/* Premium CTA Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                        {/* Glowing backdrop elements */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
                        
                        <div className="relative z-10 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mx-auto">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Get Started Today</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
                                Ready to see HR Niti in action?
                            </h2>
                            
                            <p className="text-base md:text-lg text-slate-350 max-w-xl mx-auto">
                                Schedule a customized product walkthrough or get instant access with our 14-day free trial.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <Link 
                                    href="/contact-us" 
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/20 text-sm uppercase tracking-wider cursor-pointer"
                                >
                                    <span>Schedule Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link 
                                    href="/pricing" 
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white font-bold rounded-2xl transition-all text-sm uppercase tracking-wider cursor-pointer"
                                >
                                    <span>Start Free Trial</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
