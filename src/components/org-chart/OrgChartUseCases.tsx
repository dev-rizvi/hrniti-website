import { Globe, Building2, ShieldCheck } from "lucide-react";

const useCases = [
    {
        icon: Building2,
        title: "Fast-scaling teams",
        description: "Keep up with rapid growth without adding administrative headcount — org chart scales with you from ten people to ten thousand."
    },
    {
        icon: Globe,
        title: "Multi-country operations",
        description: "Operate consistently across regions and regulations, with one source of truth and local compliance built in."
    },
    {
        icon: ShieldCheck,
        title: "Regulated industries",
        description: "Banks, government and healthcare rely on org chart for audit-ready records and provable controls."
    }
];

export default function OrgChartUseCases() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider text-emerald-600 uppercase mb-4 block">Use cases</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                        Where <span className="text-emerald-600">Org Chart & Planning</span> makes the difference.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                                <useCase.icon className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
