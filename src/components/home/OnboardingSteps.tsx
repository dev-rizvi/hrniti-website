import { Settings2, UploadCloud, GraduationCap } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Quick & Guided Setup",
        desc: "Get started with guided implementation and configuration tailored to your HR processes.",
        icon: Settings2,
    },
    {
        number: "02",
        title: "Easy Data Migration",
        desc: "Import your employee, attendance, and payroll data with support from our onboarding team.",
        icon: UploadCloud,
    },
    {
        number: "03",
        title: "Training & Go-Live Support",
        desc: "Get hands-on training for HR and managers, plus dedicated support through go-live.",
        icon: GraduationCap,
    },
];

export default function OnboardingSteps() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        From Setup to Go-Live in <span className="text-emerald-600">3 Simple Steps</span>
                    </h2>
                    <p className="text-slate-600">
                        From demo to rollout, our team helps you evaluate, set up, and launch HR Niti smoothly.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-0.5 bg-emerald-100"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 relative z-10">
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <span className="text-4xl font-black text-slate-300">{step.number}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
