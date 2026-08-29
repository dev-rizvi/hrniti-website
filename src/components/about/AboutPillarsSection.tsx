import { Building2, Smartphone, Bot, Rocket } from "lucide-react";

export default function AboutPillarsSection() {
    const pillars = [
        {
            icon: Building2,
            title: "Multi-State Statutory Engine",
            description: "Built for complex Indian tax laws. Automated PF ECR generation, ESIC returns, LWF, and Professional Tax for all 28 states.",
        },
        {
            icon: Smartphone,
            title: "Mobile-First & WhatsApp ESS",
            description: "Empower employees with GPS geo-fencing, facial recognition attendance, and instant salary slip downloads via mobile & WhatsApp.",
        },
        {
            icon: Bot,
            title: "Niti AI Conversational Copilot",
            description: "Smart HR chatbot that answers policy FAQs, checks leave balances, and automates administrative queries 24/7.",
        },
        {
            icon: Rocket,
            title: "Rapid 48-Hour Go-Live",
            description: "Guided migration from spreadsheets or legacy systems. Pre-configured templates ensure your business goes live in days.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Built for India
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                            4 Core Pillars of HR Niti
                        </h2>
                        <p className="text-gray-600 text-base max-w-2xl mx-auto font-medium">
                            Purpose-built technology to solve operational bottlenecks unique to scaling Indian businesses.
                        </p>
                    </div>

                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
