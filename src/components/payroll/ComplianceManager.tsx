import { ShieldCheck, FileCheck, Landmark, AlertTriangle } from "lucide-react";

export default function ComplianceManager() {
    const complianceItems = [
        {
            title: "Provident Fund (PF)",
            desc: "Auto-calucation of employee & employer shares. Generates ECR files ready for upload.",
            icon: ShieldCheck,
            color: "blue"
        },
        {
            title: "ESIC",
            desc: "Monthly contribution reports and customized challans as per state regulations.",
            icon: FileCheck,
            color: "green"
        },
        {
            title: "Professional Tax (PT)",
            desc: "State-wise slab updates automatically applied. Supports multi-state operations.",
            icon: Landmark,
            color: "purple"
        },
        {
            title: "TDS / Income Tax",
            desc: "Accurate tax projection, investment proof verification, and Form 16 generation.",
            icon: AlertTriangle,
            color: "orange"
        }
    ];

    const colorThemes: Record<string, { bg: string; text: string }> = {
        blue: { bg: "bg-blue-100", text: "text-blue-600" },
        green: { bg: "bg-green-100", text: "text-green-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600" },
        orange: { bg: "bg-orange-100", text: "text-orange-600" }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Fearless Compliance</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-2 mb-6">
                            100% Statutory Compliance, Zero Stress
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Keeping up with changing labor laws is hard. HR Niti makes it strictly automatic. Our system updates rule engines in real-time so your business never faces a penalty.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {complianceItems.map((item, idx) => {
                                const theme = colorThemes[item.color] || colorThemes.blue;
                                return (
                                    <div key={idx} className="p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all bg-gray-50/50">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${theme.bg} ${theme.text}`}>
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden p-6">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                                <span className="font-bold text-gray-700">Compliance Status</span>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <ShieldCheck className="h-3 w-3" /> Compliant
                                </span>
                            </div>

                            <div className="space-y-4">
                                {['PF Challan Aug-24', 'ESIC Return Q2', 'PT Payment MH', 'TDS Deduction Sep-24'].map((task, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-gray-400">
                                                <FileCheck className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{task}</span>
                                        </div>
                                        <button 
                                            id={`compliance-download-btn-${i}`}
                                            className="text-xs font-bold text-emerald-600 hover:underline cursor-pointer"
                                        >
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100 flex gap-3">
                                <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0" />
                                <div>
                                    <h4 className="text-sm font-bold text-orange-800">Upcoming Deadline</h4>
                                    <p className="text-xs text-orange-700">Quarterly TDS return filing due in 3 days.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
