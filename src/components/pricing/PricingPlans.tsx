"use client";

import { useMemo } from "react";
import { Check, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

export interface PackageFeature {
    id?: number | string;
    name: string;
    slug?: string;
    group?: string;
    description?: string;
}

export interface PackageItem {
    id: number | string;
    name: string;
    description?: string;
    monthly_price?: number | string;
    yearly_price?: number | string;
    discounted_monthly_price?: number | string;
    discounted_yearly_price?: number | string;
    discount_label?: string;
    max_employees?: number | string;
    price_per_employee?: number | string;
    features?: PackageFeature[];
    is_popular?: boolean;
}

interface PricingPlansProps {
    packages?: PackageItem[];
    currencySymbol?: string;
}

export default function PricingPlans({ packages = [], currencySymbol = "₹" }: PricingPlansProps) {
    // Map dynamic database packages + ensure Enterprise customized package is always included
    const plansList = useMemo(() => {
        let list: any[] = [];

        if (packages && packages.length > 0) {
            list = packages.map((pkg, idx) => {
                const monthly = Number(pkg.discounted_monthly_price ?? pkg.monthly_price ?? 2995);
                const yearly = Number(pkg.discounted_yearly_price ?? pkg.yearly_price ?? (monthly * 12));
                const maxEmp = Number(pkg.max_employees) || 50;

                const isPopular = pkg.is_popular || pkg.name.toLowerCase().includes("growth") || pkg.name.toLowerCase().includes("pro") || idx === 1;

                let featureStrings: string[] = [];
                if (pkg.features && Array.isArray(pkg.features) && pkg.features.length > 0) {
                    featureStrings = pkg.features
                        .filter(f => !['settings', 'employee-inbox', 'admin-inbox', 'branch-user', 'employee-tree'].includes(f.slug || ""))
                        .map(f => f.name || f.slug || "");
                } else {
                    featureStrings = [
                        "Up to " + maxEmp + " Employees Base",
                        "Employee Database (Core HR)",
                        "Leave & Attendance Tracking",
                        "Payroll Processing",
                        "Reports & Document Management"
                    ];
                }

                return {
                    id: pkg.id,
                    name: pkg.name,
                    isCustom: false,
                    price: yearly,
                    period: "/year",
                    maxEmployees: maxEmp,
                    desc: pkg.description || "Perfect for organized HR, payroll and attendance automation.",
                    features: featureStrings,
                    cta: "Start Free Trial",
                    popular: isPopular,
                    color: isPopular ? "purple" : "blue"
                };
            });
        } else {
            list = [
                {
                    id: "standard",
                    name: "Standard",
                    isCustom: false,
                    price: 25449,
                    period: "/year",
                    maxEmployees: 50,
                    desc: "Perfect for startups and small teams getting started with organized HR.",
                    features: [
                        "Up to 50 Employees Base",
                        "Employee Database (Core HR)",
                        "Leave Management",
                        "Attendance Tracking",
                        "Basic Reports",
                        "Mobile App (Lite)",
                        "Email Support"
                    ],
                    cta: "Start Free Trial",
                    popular: false,
                    color: "blue"
                },
                {
                    id: "professional",
                    name: "Professional",
                    isCustom: false,
                    price: 45849,
                    period: "/year",
                    maxEmployees: 50,
                    desc: "Best for growing companies that need payroll automation and compliance.",
                    features: [
                        "Up to 50 Employees Base",
                        "Everything in Standard",
                        "Payroll Processing",
                        "Statutory Compliance (PF/ESIC)",
                        "Expense Requests",
                        "Document Management",
                        "Priority Phone Support"
                    ],
                    cta: "Get Started",
                    popular: true,
                    color: "purple"
                }
            ];
        }

        // Check if an Enterprise package already exists in DB list
        const hasEnterprise = list.some(p => p.name.toLowerCase().includes("enterprise"));

        if (!hasEnterprise) {
            list.push({
                id: "enterprise",
                name: "Enterprise",
                isCustom: true,
                price: 0,
                priceText: "Custom Quote",
                period: "tailored for scale",
                maxEmployees: "Unlimited",
                desc: "For large organizations requiring customization, dedicated infra and SLA.",
                features: [
                    "Unlimited Employees Capacity",
                    "All Core HR & Automated Payroll",
                    "Performance Management (PMS & OKRs)",
                    "GPS Live Field Tracking & Shifts",
                    "Custom ERP & Hardware Biometric Sync",
                    "Dedicated Account Manager & 24/7 SLA",
                    "Custom Role Hierarchy & Audit Trail"
                ],
                cta: "Contact Sales",
                popular: false,
                color: "slate"
            });
        }

        return list;
    }, [packages]);

    const getPlanClasses = (color: string, popular: boolean) => {
        const config: Record<string, { accent: string; textAccent: string; button: string; border: string }> = {
            blue: {
                accent: "bg-emerald-600",
                textAccent: "text-emerald-600",
                button: popular 
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800",
                border: "border-emerald-100 hover:border-emerald-300"
            },
            purple: {
                accent: "bg-purple-600",
                textAccent: "text-purple-600",
                button: popular 
                    ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800",
                border: "border-purple-200 hover:border-purple-400"
            },
            slate: {
                accent: "bg-slate-900",
                textAccent: "text-slate-900",
                button: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/20",
                border: "border-slate-300 hover:border-slate-400"
            }
        };

        return config[color] || config.blue;
    };

    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Plan Cards Grid */}
                <div className={"grid gap-8 max-w-6xl mx-auto " + (
                    plansList.length === 1 ? "grid-cols-1 max-w-md" :
                    plansList.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-4xl" :
                    "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                )}>
                    {plansList.map((plan, index) => {
                        const classes = getPlanClasses(plan.color, plan.popular);

                        return (
                            <div 
                                key={index} 
                                className={`rounded-3xl border ${classes.border} p-8 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                                    plan.popular 
                                        ? "shadow-2xl shadow-purple-900/10 -translate-y-2 border-2 border-purple-500" 
                                        : "shadow-sm hover:shadow-xl hover:-translate-y-1"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 capitalize">
                                            {plan.name}
                                        </h3>
                                        {plan.isCustom && (
                                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                                Custom
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                                        {plan.desc}
                                    </p>

                                    {/* Pricing Block */}
                                    <div className="mb-6 pb-6 border-b border-slate-100">
                                        {plan.isCustom ? (
                                            <div>
                                                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                                    Custom
                                                </div>
                                                <div className="text-xs text-slate-400 font-semibold mt-1">
                                                    Flexible volume pricing for enterprise
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl md:text-4xl font-extrabold text-slate-900">
                                                        {currencySymbol}{plan.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-semibold">
                                                        {plan.period}
                                                    </span>
                                                </div>
                                                <div className="text-[11px] font-bold text-emerald-600 mt-1">
                                                    Includes up to {plan.maxEmployees} base employees
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Features Checklist */}
                                    <div className="space-y-3 mb-8">
                                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                            Included Features:
                                        </div>
                                        <ul className="space-y-2.5">
                                            {plan.features.map((feature: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                                                    <div className={`p-0.5 rounded-full ${plan.popular ? "bg-purple-100 text-purple-600" : (plan.isCustom ? "bg-slate-100 text-slate-900" : "bg-emerald-100 text-emerald-600")} shrink-0 mt-0.5`}>
                                                        <Check className="h-3 w-3" />
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Link
                                    href={plan.isCustom ? "/contact-us" : `/demo?package=${plan.id}`}
                                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center transition-all duration-200 ${classes.button}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
