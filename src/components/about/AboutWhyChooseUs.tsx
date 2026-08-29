import { Sparkles, Layers, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutWhyChooseUs() {
    const reasons = [
        {
            icon: Sparkles,
            title: "Niti AI Automation Engine",
            description: "GenAI assistant that proactively answers employee questions, processes leave requests, and generates board-ready HR reports.",
        },
        {
            icon: Layers,
            title: "Modular & Scalable Platform",
            description: "Start with essential Core HR & Payroll, then seamlessly activate LMS, Recruitment, and Expense modules as your business grows.",
        },
        {
            icon: ShieldCheck,
            title: "Guided Data Migration",
            description: "Dedicated onboarding managers to clean legacy spreadsheet data and configure statutory rules for zero operational downtime.",
        },
        {
            icon: HeartHandshake,
            title: "Dedicated Indian Support",
            description: "Get prompt telephone, email, and live chat assistance from HR domain specialists based in India.",
        },
    ];

    return (
        <section className="py-20 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            The HR Niti Difference
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                            Why Businesses Choose HR Niti
                        </h2>
                        <p className="text-gray-600 text-base max-w-2xl mx-auto font-medium">
                            Designed to streamline administrative workflows and enhance employee retention.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            {reason.description}
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
