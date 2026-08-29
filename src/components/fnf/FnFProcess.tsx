"use client";
import { UserMinus, MailCheck, Box, UserCheck, FileBadge } from "lucide-react";

export default function FnFProcess() {
    const steps = [
        {
            id: 1,
            title: "Resignation",
            icon: UserMinus,
            desc: "Employee submits resignation via portal. Workflow triggers for manager acceptance."
        },
        {
            id: 2,
            title: "Acceptance",
            icon: MailCheck,
            desc: "System auto-generates acceptance letter with Last Working Day (LWD) confirmation."
        },
        {
            id: 3,
            title: "Asset Handover",
            icon: Box,
            desc: "IT & Admin notified to recover laptop, ID card, and other company assets."
        },
        {
            id: 4,
            title: "Clearance",
            icon: UserCheck,
            desc: "Digital 'No Dues' required from Finance, Library, and Dept Head to proceed."
        },
        {
            id: 5,
            title: "Service Certificate",
            icon: FileBadge,
            desc: "Settlement pay-out processed and Relieving Letter issued automatically."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">5-Step Exit Workflow</h2>
                    <p className="text-gray-600">Ensure every resignation follows a compliant, standardized process without manual follow-ups.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gray-200 -z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">

                                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                        <step.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="absolute top-0 right-0 lg:right-2 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center shadow-md">
                                        {step.id}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
