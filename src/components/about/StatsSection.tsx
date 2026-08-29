import { Building2, Users, Clock, ShieldCheck } from "lucide-react";

export default function StatsSection() {
    const pillars = [
        { label: "Multi-State Statutory Tax Engine", value: "Tax Ready", icon: Building2 },
        { label: "GPS & Facial Self-Service ESS", value: "Mobile First", icon: Users },
        { label: "Net Banking Salary Excel Export", value: "1-Click Payout", icon: Clock },
        { label: "Enterprise Security Architecture", value: "SSL Encrypted", icon: ShieldCheck },
    ];

    return (
        <section className="bg-slate-900 py-14 text-white relative overflow-hidden border-b border-slate-800">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800 max-w-6xl mx-auto">
                    {pillars.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="p-4 flex flex-col justify-center items-center group">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-3 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-black mb-1 text-white tracking-tight">
                                    {item.value}
                                </div>
                                <div className="text-slate-300 font-bold text-xs uppercase tracking-wider max-w-[180px]">
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
