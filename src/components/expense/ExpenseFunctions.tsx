import { ShieldAlert, Split, RefreshCcw, HandCoins, Smartphone, LayoutDashboard, ScanLine, Wallet } from "lucide-react";

export default function ExpenseFunctions() {
    const features = [
        {
            title: "Eliminate Fraud",
            desc: "AI detects duplicate bills, altered dates, and non-compliant claims instantly.",
            icon: ShieldAlert,
            color: "red"
        },
        {
            title: "Budget Control",
            desc: "Set department-wise or project-wise budget limits. Get alerts on overspending.",
            icon: Wallet,
            color: "blue"
        },
        {
            title: "Seamless Integration",
            desc: "Expenses sync directly with Payroll for reimbursement and Accounting for booking.",
            icon: RefreshCcw,
            color: "green"
        },
        {
            title: "Paperless Mgmt.",
            desc: "100% digital workflow. No more lost physical receipts or staples.",
            icon: ScanLine,
            color: "purple"
        },
        {
            title: "Partial Payment",
            desc: "Approve partial amounts if a claim exceeds policy limits.",
            icon: Split,
            color: "orange"
        },
        {
            title: "Advance Mgmt.",
            desc: "Issue travel advances and settle them against expenses easily.",
            icon: HandCoins,
            color: "cyan"
        }
    ];

    const colorMap: Record<string, string> = {
        red: "bg-red-50 text-red-600",
        blue: "bg-emerald-50 text-emerald-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
        cyan: "bg-cyan-50 text-cyan-600"
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Core Functions for New-Age HR</h2>
                    <p className="text-gray-600">
                        Automate the boring stuff. Let our system handle the validation while you focus on the strategy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:scale-110 duration-300 ${colorMap[feature.color] || "bg-emerald-50 text-emerald-600"}`}>
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
