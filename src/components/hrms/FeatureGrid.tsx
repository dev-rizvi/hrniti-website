import { ArrowRight, Wallet, Clock, Home, Users, Lock, BarChart3, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Wallet,
        title: "HR Niti Payroll",
        description: "Automate complex payroll calculations with 100% statutory compliance. Experience error-free payouts every month.",
        color: "bg-emerald-50 text-emerald-600",
        link: "/payroll-software"
    },
    {
        icon: Clock,
        title: "Smart Attendance",
        description: "Geo-tagging, Selfie Attendance, and Biometric integration for real-time tracking of your remote and onsite workforce.",
        color: "bg-green-50 text-green-600",
        link: "/attendance"
    },
    {
        icon: Home,
        title: "Leave Management",
        description: "Simplified leave policies with multi-level approval workflows. Configure complex leave rules with ease.",
        color: "bg-purple-50 text-purple-600",
        link: "/leave-management"
    },
    {
        icon: Users,
        title: "ESS Portal",
        description: "Empower employees to view payslips, apply for leaves, and track requests through an intuitive self-service portal.",
        color: "bg-orange-50 text-orange-600",
        link: "/employee-self-service"
    },
    {
        icon: Lock,
        title: "Data Security",
        description: "Enterprise-grade security with 256-bit encryption. Granular access controls to keep your sensitive HR data safe.",
        color: "bg-red-50 text-red-600",
        link: "/privacy-policy"
    },
    {
        icon: BarChart3,
        title: "HR Analytics",
        description: "Data-driven insights to make informed decisions. Visual dashboards for headcount, attrition, and expenses.",
        color: "bg-amber-50 text-amber-600",
        link: "/analytics"
    },
    {
        icon: ShieldCheck,
        title: "Statutory Compliance",
        description: "Stay compliant with PF, ESIC, PT, and TDS laws. Automatic updates ensure you never miss a regulatory change.",
        color: "bg-teal-50 text-teal-600",
        link: "/payroll-software"
    },
    {
        icon: UserCheck,
        title: "Onboarding",
        description: "Seamless digital onboarding experience. Paperless documentation and asset allocation for new hires.",
        color: "bg-pink-50 text-pink-600",
        link: "/hiring"
    }
];

export default function FeatureGrid() {
    return (
        <section id="features" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Powerful Modules</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Everything You Need to Manage Your Workforce</h3>
                    <p className="text-lg text-text-light">
                        Our comprehensive suite of modules ensures that every aspect of your HR operations is covered, from hiring to retiring.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-3">{feature.title}</h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {feature.description}
                            </p>
                            <Link href={feature.link} className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
