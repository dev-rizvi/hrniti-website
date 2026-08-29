import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrgChartHero from "@/components/org-chart/OrgChartHero";
import OrgChartFeatures from "@/components/org-chart/OrgChartFeatures";
import OrgChartUseCases from "@/components/org-chart/OrgChartUseCases";
import InteractiveOrgChart from "@/components/org-chart/InteractiveOrgChart";
import Link from "next/link";

export const metadata = {
    title: "Org Chart & Workforce Planning Software",
    description: "Visualise and plan your organisation with HR Niti — live org charts, scenario planning and headcount planning inside your HRMS.",
    openGraph: {
        title: "Org Chart & Workforce Planning Software India - HR Niti | Visual HRMS",
        description: "Visualise and plan your organisation with HR Niti's interactive org chart tool. Live org charts, scenario planning, and headcount forecasting built into your HRMS.",
        url: "https://www.hrniti.com/org-chart",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Org Chart & Workforce Planning Software India - HR Niti | Visual HRMS" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Org Chart & Workforce Planning Software India - HR Niti | Visual HRMS",
        description: "Visualise and plan your organisation with HR Niti's interactive org chart tool. Live org charts, scenario planning, and headcount forecasting built into your HRMS.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/org-chart" },
    keywords: "org chart software India, organizational chart tool, workforce planning software, headcount planning tool, HR Niti org chart",
};

export default function OrgChartPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <OrgChartHero />

            {/* Interactive Sandbox Section */}
            <section id="interactive-demo" className="py-20 bg-slate-100 border-y border-slate-200/50 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-sm font-black tracking-wider text-emerald-600 uppercase mb-3 block">Live Sandbox Demo</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                            Try the Interactive <span className="text-emerald-600">Org Builder</span>
                        </h2>
                        <p className="text-slate-650 text-base md:text-lg font-medium">
                            Experience headcount planning, vacancy modeling, and manager re-routing in real-time. Use the controls to search, zoom, and modify employee structures.
                        </p>
                    </div>

                    <InteractiveOrgChart />
                </div>
            </section>

            <OrgChartFeatures />

            <OrgChartUseCases />

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-emerald-600 rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-700 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                                Ready to see Org Chart & Planning in action?
                            </h2>
                            <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
                                Book a guided demo or start your 14-day free trial — no credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
                                    Book a Demo
                                </Link>
                                <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-400 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                                    Start Free Trial
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
