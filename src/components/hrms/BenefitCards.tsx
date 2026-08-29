import { TrendingUp, DollarSign, MessageCircle, FileCheck } from "lucide-react";

export default function BenefitCards() {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Increased Productivity",
            description: "Automate repetitive tasks and free up your HR team to focus on strategic initiatives and employee engagement.",
        },
        {
            icon: DollarSign,
            title: "Cost Effective",
            description: "Reduce administrative overheads and eliminate payroll errors. Pay only for what you use with our scalable cloud model.",
        },
        {
            icon: MessageCircle,
            title: "Improved Communication",
            description: "Bridge the gap between management and employees with seamless communication tools and self-service portals.",
        },
        {
            icon: FileCheck,
            title: "Aligned with Compliance",
            description: "Never worry about changing labor laws. Our system updates automatically to keep you 100% compliant with regulations.",
        }
    ];

    return (
        <section className="py-20 bg-secondary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8 text-white">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Why Choose <br />
                            <span className="text-primary">HR Niti?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-lg">
                            We don't just provide software; we provide a partnership for your growth. Here is how we add value to your business:
                        </p>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-primary mb-1">96%</div>
                            <div className="text-sm text-gray-400">Client Retention Rate</div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
