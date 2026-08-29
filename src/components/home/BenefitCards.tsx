import { ShieldCheck, BarChart2, Zap, Palette } from "lucide-react";

export default function BenefitCards() {
    const benefits = [
        {
            title: "Unmatched Security",
            desc: "Secure enterprise-grade data centers with 256-bit encryption ensuring your employee data is always safe.",
            icon: ShieldCheck,
            color: "blue"
        },
        {
            title: "Deep Analytics",
            desc: "Transform raw data into actionable insights with our drag-and-drop MIS report builder.",
            icon: BarChart2,
            color: "purple"
        },
        {
            title: "Fast Implementation",
            desc: "Go live in days, not months. Our modular architecture allows for rapid deployment and data migration.",
            icon: Zap,
            color: "yellow"
        },
        {
            title: "User Experience",
            desc: "An interface so intuitive, your employees won't need a manual. Designed for zero-training adoption.",
            icon: Palette,
            color: "pink"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 p-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">What makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">HR Niti unique?</span></h2>
                    <p className="text-lg text-slate-300">
                        Beyond features, we deliver value through our core pillars of excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                <benefit.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
