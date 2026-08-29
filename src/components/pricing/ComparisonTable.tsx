import { Check, Minus } from "lucide-react";

interface ComparisonFeature {
    id?: string;
    category?: string;
    name: string;
    slug?: string;
    std_value?: string;
    pro_value?: string;
    ent_value?: string;
    display_order?: number;
}

interface PackageItem {
    id: number | string;
    name: string;
    features?: any[];
}

interface ComparisonTableProps {
    features?: ComparisonFeature[];
    packages?: PackageItem[];
    addons?: any[];
}

export default function ComparisonTable({ packages = [] }: ComparisonTableProps) {
    
    let colNames = ["Basic Plan", "Growth Plan", "Enterprise"];

    if (packages && packages.length > 0) {
        colNames = packages.map(p => p.name);
        if (!colNames.some(n => n.toLowerCase().includes("enterprise"))) {
            colNames.push("Enterprise");
        }
    }

    const isFeatureIncluded = (pkg: PackageItem | undefined, keyword: string) => {
        if (!pkg) return false;
        if (!pkg.features || !Array.isArray(pkg.features)) return false;
        return pkg.features.some(f => {
            const s = (f.slug || "").toLowerCase();
            const n = (f.name || "").toLowerCase();
            const kw = keyword.toLowerCase();
            return s.includes(kw) || n.includes(kw);
        });
    };

    const pkg0 = packages[0];
    const pkg1 = packages[1] || packages[0];

    const categories = [
        {
            name: "Core HR",
            features: [
                { name: "Employee Database", std: isFeatureIncluded(pkg0, 'core') || true, pro: isFeatureIncluded(pkg1, 'core') || true, ent: true },
                { name: "Onboarding & Letters", std: isFeatureIncluded(pkg0, 'letter'), pro: isFeatureIncluded(pkg1, 'letter') || true, ent: true },
                { name: "Asset Management", std: isFeatureIncluded(pkg0, 'asset'), pro: isFeatureIncluded(pkg1, 'asset'), ent: true },
                { name: "Helpdesk & Employee Support", std: isFeatureIncluded(pkg0, 'helpdesk') || isFeatureIncluded(pkg0, 'ticket'), pro: isFeatureIncluded(pkg1, 'helpdesk') || isFeatureIncluded(pkg1, 'ticket'), ent: true },
            ]
        },
        {
            name: "Leave & Attendance",
            features: [
                { name: "Leave Policy & Approvals", std: isFeatureIncluded(pkg0, 'leave') || true, pro: isFeatureIncluded(pkg1, 'leave') || true, ent: true },
                { name: "Web Attendance Portal", std: isFeatureIncluded(pkg0, 'attendance') || true, pro: isFeatureIncluded(pkg1, 'attendance') || true, ent: true },
                { name: "Shift & Roster Scheduling", std: isFeatureIncluded(pkg0, 'shift') || true, pro: isFeatureIncluded(pkg1, 'shift') || true, ent: true },
                { name: "GPS Live Field Tracking", std: isFeatureIncluded(pkg0, 'map'), pro: isFeatureIncluded(pkg1, 'map'), ent: true },
            ]
        },
        {
            name: "Payroll & Compliance",
            features: [
                { name: "Automated Salary Processing", std: isFeatureIncluded(pkg0, 'payroll') || true, pro: isFeatureIncluded(pkg1, 'payroll') || true, ent: true },
                { name: "Statutory PF / ESIC Calculations", std: isFeatureIncluded(pkg0, 'payroll') || true, pro: isFeatureIncluded(pkg1, 'payroll') || true, ent: true },
                { name: "Loans & Advance Salary", std: isFeatureIncluded(pkg0, 'loan'), pro: isFeatureIncluded(pkg1, 'loan'), ent: true },
                { name: "Expense & Reimbursements", std: isFeatureIncluded(pkg0, 'expense'), pro: isFeatureIncluded(pkg1, 'expense'), ent: true },
            ]
        },
        {
            name: "Advanced Modules & Customization",
            features: [
                { name: "Performance Management (PMS)", std: isFeatureIncluded(pkg0, 'appraisal'), pro: isFeatureIncluded(pkg1, 'appraisal'), ent: true },
                { name: "Recruitment & ATS Portal", std: isFeatureIncluded(pkg0, 'recruitment'), pro: isFeatureIncluded(pkg1, 'recruitment'), ent: true },
                { name: "Learning Management (LMS)", std: isFeatureIncluded(pkg0, 'lms'), pro: isFeatureIncluded(pkg1, 'lms'), ent: true },
                { name: "Dedicated 24/7 SLA & Custom ERP Sync", std: false, pro: false, ent: true },
            ]
        }
    ];

    const renderValue = (val: boolean | string) => {
        if (val === true) return <Check className="h-5 w-5 text-green-500 mx-auto" />;
        if (val === false) return <Minus className="h-5 w-5 text-slate-300 mx-auto" />;
        return <span className="font-bold text-slate-700 text-sm">{val}</span>;
    };

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Compare Features Side-by-Side
                    </h2>
                    <p className="text-slate-600">
                        Check detailed capabilities of each plan to choose the right fit.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
                    <div className="overflow-x-auto scrollbar-thin">
                        <div className="min-w-[768px]">
                            {/* Header */}
                            <div className="grid grid-cols-4 bg-slate-900 text-white p-6 items-center">
                                <div className="font-extrabold text-base">Features matrix</div>
                                <div className="text-center font-extrabold text-base text-slate-300 capitalize">{colNames[0] || "Basic"}</div>
                                <div className="text-center font-extrabold text-base text-purple-400 capitalize">{colNames[1] || "Growth"}</div>
                                <div className="text-center font-extrabold text-base text-slate-300 capitalize">{colNames[2] || "Enterprise"}</div>
                            </div>

                            {/* Body */}
                            <div className="divide-y divide-slate-100">
                                {categories.map((cat, catIdx) => (
                                    <div key={catIdx}>
                                        <div className="bg-slate-50/70 px-6 py-3.5 font-bold text-slate-500 text-xs uppercase tracking-widest border-y border-slate-100">
                                            {cat.name}
                                        </div>
                                        {cat.features.map((feat: any, featIdx: number) => (
                                            <div key={featIdx} className="grid grid-cols-4 px-6 py-4 hover:bg-slate-50/30 transition-colors items-center">
                                                <div className="text-sm font-semibold text-slate-800">
                                                    {feat.name}
                                                </div>
                                                <div className="text-center">{renderValue(feat.std)}</div>
                                                <div className="text-center bg-purple-50/20 -my-4 py-4 border-x border-purple-50/50">{renderValue(feat.pro)}</div>
                                                <div className="text-center">{renderValue(feat.ent)}</div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
