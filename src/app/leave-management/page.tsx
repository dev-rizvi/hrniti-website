import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveHero from "@/components/leave/LeaveHero";
import LeaveFeatureGrid from "@/components/leave/LeaveFeatureGrid";
import ApprovalWorkflow from "@/components/leave/ApprovalWorkflow";
import LeaveFAQ from "@/components/leave/LeaveFAQ";
import CTASection from "@/components/about/CTASection";
import Link from "next/link";

export const metadata = {
    title: "Leave Management & Absence Tracking HRMS",
    description: "HRMS software for leave management. Automate employee leave management software with customizable leave policies, sandwich rules, multi-level approvals, and mobile self-service.",
    keywords: "HRMS software for leave management, Employee leave management software, HR software for attendance and leave management, leave management system, leave approval software",
    alternates: { canonical: "https://www.hrniti.com/leave-management" },
    openGraph: {
        title: "HRMS Software for Leave Management - HR Niti",
        description: "Automate leave requests, accruals, and multi-level approvals with HR Niti. Configurable policies, sandwich rules, and mobile self-service.",
        type: "website",
        url: "https://www.hrniti.com/leave-management",
    },
};

export default function LeavePage() {
    return (
        <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "HR Niti Leave Management System",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Android, iOS",
              description: "Cloud-based leave management with multi-level approvals and mobile self-service.",
              url: "https://www.hrniti.com/leave-management",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free trial available" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hrniti.com" },
                { "@type": "ListItem", position: 2, name: "Leave Management", item: "https://www.hrniti.com/leave-management" }
              ]
            }
          ])
        }}
      />
            <Navbar />

            <LeaveHero />

            {/* Stats Strip */}
            <section className="bg-slate-950 border-y border-white/5 py-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Companies Trust HR Niti" },
                            { value: "98%", label: "On-Time Approval Rate" },
                            { value: "3 Min", label: "Avg. Leave Response Time" },
                            { value: "50+", label: "Leave Policy Types Supported" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-2xl md:text-3xl font-black text-emerald-400">{stat.value}</div>
                                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeaveFeatureGrid />

            <ApprovalWorkflow />

            {/* Mobile Accessibility Section */}
            <section className="py-20 lg:py-28 overflow-hidden bg-slate-50 border-t border-slate-200/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase">Mobile Access</span>
                                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Apply Leave on the Go</h2>
                            </div>

                            <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>

                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Don&apos;t let absence management tie you to your desk. Employees can check balances and apply for leave from their mobile app, while managers can approve requests instantly with a single tap.
                            </p>

                            <div className="flex gap-4 pt-2">
                                <Link 
                                    href="/contact-us"
                                    id="leave-mobile-demo-btn"
                                    className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-3 rounded-xl font-bold transition-all shadow-md cursor-pointer hover:scale-[1.01]"
                                >
                                    Try Mobile Flow
                                </Link>
                            </div>
                        </div>

                        {/* Interactive Mobile Phone Mockup */}
                        <div className="flex-1 w-full flex justify-center relative">
                            {/* Phone Chassis */}
                            <div className="relative mx-auto w-[290px] h-[580px] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10 overflow-hidden flex flex-col">
                                
                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-auto mr-4"></div>
                                </div>

                                {/* Screen Content Container */}
                                <div className="w-full h-full bg-slate-900 rounded-[30px] overflow-hidden p-4 pt-10 flex flex-col justify-between text-white relative">
                                    
                                    {/* App Bar */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="text-xs font-bold text-slate-400">HR Niti Self-Service</div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    </div>

                                    {/* App Inner Content */}
                                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                                        
                                        {/* Leave Balance List */}
                                        <div className="space-y-3">
                                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Leave Balance</div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="p-2.5 bg-slate-950/60 rounded-xl border border-white/5 text-center">
                                                    <div className="text-[9px] text-slate-500 font-bold">Privilege</div>
                                                    <div className="text-sm font-black text-slate-100 mt-0.5">6 Days</div>
                                                </div>
                                                <div className="p-2.5 bg-slate-950/60 rounded-xl border border-white/5 text-center">
                                                    <div className="text-[9px] text-slate-500 font-bold">Casual</div>
                                                    <div className="text-sm font-black text-slate-100 mt-0.5">5 Days</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone Request Summary Card */}
                                        <div className="p-4 bg-slate-950/40 rounded-xl border border-white/5 space-y-3">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">New Application</div>
                                            <div className="space-y-1">
                                                <div className="text-[11px] text-slate-400">Leave Type</div>
                                                <div className="text-xs font-bold text-slate-100">Privilege Leave (PL)</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                                                <div>
                                                    <div className="text-slate-400">From Date</div>
                                                    <div className="font-bold text-slate-200 mt-0.5">15 Jul 2026</div>
                                                </div>
                                                <div>
                                                    <div className="text-slate-400">To Date</div>
                                                    <div className="font-bold text-slate-200 mt-0.5">17 Jul 2026</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Apply Action Trigger */}
                                        <div className="space-y-2">
                                            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-center text-[10px] font-bold">
                                                Swipe to Send Approval
                                            </div>
                                            <div className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-center font-bold text-xs text-white cursor-pointer select-none">
                                                Submit Leave
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            
                            {/* Ambient background blur */}
                            <div className="absolute -z-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl -bottom-10 -right-10 mix-blend-multiply opacity-55"></div>
                        </div>

                    </div>
                </div>
            </section>

            <LeaveFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
