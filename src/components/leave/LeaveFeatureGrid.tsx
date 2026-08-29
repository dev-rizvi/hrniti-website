import { Sliders, CalendarClock, Scale, Calculator, AlertCircle, FileStack } from "lucide-react";

export default function LeaveFeatureGrid() {
    const features = [
        {
            icon: Sliders,
            title: "Configurable Policies",
            description: "Define leave types (PL, CL, SL) and set rules for accrual, carry-forward, and expiration based on employee grades.",
        },
        {
            icon: CalendarClock,
            title: "Sandwich Rules",
            description: "Automatically handle complex scenarios like sandwich leave rules where holidays between leaves are counted as leave.",
        },
        {
            icon: Scale,
            title: "Compensatory Off",
            description: "Track extra hours worked and automatically credit compensatory offs (Comp-Off) with expiry settings.",
        },
        {
            icon: Calculator,
            title: "Leave Encashment",
            description: "Simplify year-end processing with automated leave encashment calculations integrated directly with payroll.",
        },
        {
            icon: AlertCircle,
            title: "Exception Management",
            description: "Handle exceptions like 'Loss of Pay' (LOP) automatically when leave balance is exhausted.",
        },
        {
            icon: FileStack,
            title: "Document Management",
            description: "Mandate proof documents for specific leave types like Sick Leave or Maternity Leave exceeding a certain duration.",
        },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3 text-sm">Automated & Compliant</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Comprehensive Leave Policies</h3>
                    <p className="text-lg text-slate-600 font-medium">
                        From simple vacation requests to complex statutory compliances, our system handles every nuance of leave management.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            id={`leave-feature-card-${index}`}
                            className="flex gap-4 items-start p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
