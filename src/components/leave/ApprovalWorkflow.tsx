import { User, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export default function ApprovalWorkflow() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Description */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                            Transparent <span className="text-green-600">Multi-Level Approvals</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Define hierarchy-based approval workflows. Requests automatically travel from reporting managers to department heads and finally to HR for processing.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                "Configure linear or parallel approval chains.",
                                "Email and WhatsApp notifications at every step.",
                                "Auto-approval settings for specific leave types.",
                                " Delegate approval rights when managers are away."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-secondary font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visualization */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10">
                            <h3 className="text-center font-bold text-gray-400 uppercase tracking-widest text-sm mb-10">Approval Flow</h3>

                            <div className="space-y-8 relative">
                                {/* Line connecting nodes */}
                                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 -z-10"></div>

                                {/* Step 1 */}
                                <div className="flex items-center gap-6 animate-fade-in-up">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-md relative z-10">
                                        <User className="h-7 w-7 text-emerald-600" />
                                    </div>
                                    <div className="bg-emerald-50 p-4 rounded-xl flex-1 border border-emerald-100">
                                        <div className="font-bold text-emerald-900">Employee</div>
                                        <div className="text-sm text-emerald-600">Submits Leave Request</div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex items-center gap-6 animate-fade-in-up delay-100">
                                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md relative z-10">
                                        <ShieldCheck className="h-7 w-7 text-orange-600" />
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-xl flex-1 border border-orange-100">
                                        <div className="font-bold text-orange-900">Manager</div>
                                        <div className="text-sm text-orange-600">Receives Notification & Approves</div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex items-center gap-6 animate-fade-in-up delay-200">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center border-4 border-white shadow-md relative z-10">
                                        <Mail className="h-7 w-7 text-green-600" />
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl flex-1 border border-green-100">
                                        <div className="font-bold text-green-900">System</div>
                                        <div className="text-sm text-green-600">Updates Balance & Notifies All</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
