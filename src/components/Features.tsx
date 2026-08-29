import { CheckCircle2, Zap, Shield, Users } from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Automated Payroll Processing",
            description: "Say goodbye to spreadsheets. calculate salaries, taxes, and deductions automatically with 100% accuracy and compliance.",
            icon: <Zap className="h-6 w-6 text-white" />,
            imageColor: "bg-emerald-50",
        },
        {
            title: "Smart Attendance Management",
            description: "Track attendance with geo-fencing, facial recognition, and biometric integration. Manage shifts and leaves effortlessly.",
            icon: <CheckCircle2 className="h-6 w-6 text-white" />,
            imageColor: "bg-amber-50",
        },
        {
            title: "Employee Self-Service Portal",
            description: "Empower your workforce. Employees can view payslips, apply for leaves, and update their info anytime, anywhere.",
            icon: <Users className="h-6 w-6 text-white" />,
            imageColor: "bg-sky-50",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-4">
                        Everything you need to <span className="text-primary">manage your team</span>
                    </h2>
                    <p className="text-text-light text-lg">
                        A complete HRMS suite designed to handle every aspect of your workforce management lifecycle.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Side (alternates via grid ordering logic usually, but here manually handled via flex-row-reverse logic if using flex for simpler responsive, but grid cols is safer) */}

                            <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className={`aspect-[4/3] rounded-2xl ${feature.imageColor} border border-gray-100 shadow-lg relative overflow-hidden group`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-gray-400 font-medium">Feature Interactive Preview</span>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary shadow-lg shadow-primary/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">{feature.title}</h3>
                                <p className="text-text-light text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    {["Real-time updates", "Mobile accessible", "Secure data protection"].map((item, i) => (
                                        <li key={i} className="flex items-center text-text-dark font-medium">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
