import { MonitorX, Calculator, FileText, Clock, AlertTriangle, ShieldCheck } from "lucide-react";

export default function FnFFeatures() {
    const features = [
        {
            title: "Asset Recovery Tracking",
            desc: "Never lose a laptop again. Detailed asset checklist ensures 100% recovery before clearance.",
            icon: MonitorX,
            color: "blue"
        },
        {
            title: "Gratuity Automation",
            desc: "System auto-calculates Gratuity based on 5-year tenure rules using the latest Basic DA.",
            icon: Calculator,
            color: "green"
        },
        {
            title: "Notice Period Mgmt",
            desc: "Handles adjustable notice periods, buyout options, and shortfall deductions seamlessly.",
            icon: Clock,
            color: "orange"
        },
        {
            title: "Compliance Forms",
            desc: "Auto-generates Form 16, PF withdrawal forms, and FNF statement for tax filing.",
            icon: FileText,
            color: "purple"
        },
        {
            title: "Negative Settlement",
            desc: "Detects if recovery amount > payable amount and generates a 'Payable by Employee' invoice.",
            icon: AlertTriangle,
            color: "red"
        },
        {
            title: "Legal Protection",
            desc: "Standardized exit documents reduce legal risks associated with wrongful termination claims.",
            icon: ShieldCheck,
            color: "cyan"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Beyond Just Calculation</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-2 mb-6">
                            Complete Closure Compliance
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            FnF is not just about paying salary dues. It involves multiple regulatory checks, asset handovers, and tax filings. Our modular system handles it all.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center bg-${feature.color}-50 text-${feature.color}-600 shrink-0`}>
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 leading-snug">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-[50px] transform rotate-6"></div>
                        <div className="relative bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-8 min-h-[400px] flex flex-col">

                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold text-gray-800">Clearance Status</h3>
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">In Progress</span>
                            </div>

                            <div className="space-y-4 flex-1">
                                {[
                                    { dept: 'IT Dept', status: 'Cleared', date: '22 Oct', icon: MonitorX, color: 'green' },
                                    { dept: 'Admin', status: 'Pending Asset', date: '-', icon: MonitorX, color: 'orange' },
                                    { dept: 'Finance', status: 'Waiting', date: '-', icon: Calculator, color: 'gray' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500`}>
                                                {/* Simple consistent icon for demo */}
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{item.dept}</h4>
                                                <p className={`text-xs font-bold ${item.color === 'green' ? 'text-green-600' : item.color === 'orange' ? 'text-orange-500' : 'text-gray-400'}`}>
                                                    {item.status}
                                                </p>
                                            </div>
                                        </div>
                                        {item.date !== '-' && <span className="text-xs text-gray-400">{item.date}</span>}
                                    </div>
                                ))}
                            </div>

                            <button className="mt-8 w-full py-3 border border-gray-300 rounded-xl text-gray-500 font-bold text-sm hover:bg-gray-50 transition-colors">
                                View Audit Trail
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
