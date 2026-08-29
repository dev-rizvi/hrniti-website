import { Database, FolderOpen, Monitor, Award, Briefcase, Share2 } from "lucide-react";

export default function EmployeeDatabaseFeatures() {
    const features = [
        {
            title: "Centralized Records",
            desc: "A single source of truth for all employee data—Personal details, Banking info, and Family background.",
            icon: Database,
            color: "blue"
        },
        {
            title: "Document Vault",
            desc: "Secure, unlimited cloud storage for employee documents with role-based access control.",
            icon: FolderOpen,
            color: "amber"
        },
        {
            title: "Asset Management",
            desc: "Track company assets (Laptops, Phones) assigned to employees and manage returns during exit.",
            icon: Monitor,
            color: "slate"
        },
        {
            title: "Training & Certifications",
            desc: "Maintain records of employee skills, training programs attended, and certificates earned.",
            icon: Award,
            color: "indigo"
        },
        {
            title: "Roles & Permissions",
            desc: "Granular access control. Define who can view or edit sensitive Salary or Bank data.",
            icon: Briefcase,
            color: "red"
        },
        {
            title: "Exit Management",
            desc: "Digital resignation workflow, No-Dues clearance tracking, and automated FnF processing.",
            icon: Share2,
            color: "green"
        }
    ];

    const colorMap: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600",
        amber: "bg-amber-50 text-amber-600",
        slate: "bg-slate-50 text-slate-600",
        indigo: "bg-indigo-50 text-indigo-600",
        red: "bg-red-50 text-red-600",
        green: "bg-green-50 text-green-600",
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Comprehensive Employee Database</h2>
                    <p className="text-gray-600">
                        Move beyond spreadsheets. Secure your workforce data with bank-grade encryption and 99.9% uptime.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => {
                        const colorClass = colorMap[feature.color] || "bg-gray-50 text-gray-600";
                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colorClass}`}>
                                    <feature.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
