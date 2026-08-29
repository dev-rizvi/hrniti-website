"use client";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export default function IndustryProcessWorkflow({ industryTitle }: { industryTitle: string }) {
    const steps: ProcessStep[] = [
        {
            number: "01",
            title: "Data Collection",
            description: "Automatically collect attendance records, tax declarations, leave logs, and shift allowances across all locations.",
        },
        {
            number: "02",
            title: "Payroll Calculation",
            description: "Auto-compute base salaries, CTC components, overtime, shift bonuses, and variable incentive structures.",
        },
        {
            number: "03",
            title: "Compliance Checks",
            description: "Validate state statutory deductions including PF ECR, ESIC, Professional Tax (PT), LWF, and TDS 192/194J rules.",
        },
        {
            number: "04",
            title: "Approval Workflow",
            description: "Submit payroll preview for multi-tier manager and HR leadership signoff with complete audit trail history.",
        },
        {
            number: "05",
            title: "Salary Disbursement",
            description: "Generate bank-approved payment files for ICICI, HDFC, SBI, Axis, and Kotak for instant 1-click salary transfers.",
        },
        {
            number: "06",
            title: "Reporting & Analytics",
            description: "Generate detailed executive reports, CTC variance logs, tax liability summaries, and department cost reports.",
        },
        {
            number: "07",
            title: "Record Keeping & Vault",
            description: "Store digital payslips, tax certificates, and audit logs securely in an encrypted cloud document vault.",
        },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                        7-Step Automated Workflow
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">
                        HR Niti Payroll &amp; HR Process for {industryTitle}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        A structured, end-to-end automated process engineered to eliminate manual errors and guarantee 100% compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-emerald-500 hover:bg-slate-800 transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl font-black text-amber-400 group-hover:scale-110 transition-transform">
                                        {step.number}
                                    </span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
