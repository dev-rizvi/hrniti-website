import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import { tools } from "@/lib/toolsData";

const BASE_URL = "https://www.hrniti.com";

export const metadata = {
    title: "Free HR Calculators & Tools",
    description:
        "Free online HR tools and calculators — gratuity calculator, leave encashment calculator, salary hike calculator, and more from HR Niti.",
    keywords: "HR tools, HR calculators, gratuity calculator, leave encashment calculator, salary hike calculator India",
    alternates: { canonical: `${BASE_URL}/tools` },
    openGraph: {
        title: "Free HR Calculators & Tools | HR Niti",
        description: "Free online HR tools and calculators for Indian HR and payroll professionals.",
        url: `${BASE_URL}/tools`,
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Tools" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free HR Calculators & Tools | HR Niti",
        description: "Free online HR tools and calculators for Indian HR and payroll professionals.",
        images: ["/og-default.png"],
    },
};

export default function ToolsPage() {
    const available = tools.filter((t) => t.available);
    const comingSoon = tools.filter((t) => !t.available);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-gradient-to-br from-emerald-900 to-indigo-950 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium tracking-wide text-cyan-100">Free Tools</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">HR Calculators & Tools</h1>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Quick, free calculators for common HR and payroll math — no spreadsheets, no sign-up
                        required.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                        {available.map((tool) => (
                            <Link
                                key={tool.slug}
                                href={`/tools/${tool.slug}`}
                                className="group bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <tool.icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-lg font-bold text-slate-900 mb-2">{tool.name}</h2>
                                <p className="text-sm text-slate-500 mb-5 leading-relaxed">{tool.shortDesc}</p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 group-hover:gap-2.5 transition-all">
                                    Calculate Now <ArrowRight className="h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {comingSoon.length > 0 && (
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6 text-center">More Tools — Coming Soon</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {comingSoon.map((tool) => (
                                    <div
                                        key={tool.slug}
                                        className="bg-slate-50 border border-slate-100 rounded-2xl p-5 opacity-70"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-slate-200 text-slate-500 flex items-center justify-center mb-3">
                                            <tool.icon className="h-4.5 w-4.5" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-700 mb-1">{tool.name}</h3>
                                        <p className="text-xs text-slate-500">{tool.shortDesc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
