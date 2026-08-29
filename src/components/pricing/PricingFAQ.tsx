"use client";
import FAQSchema from "@/components/seo/FAQSchema";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
    id?: string;
    question: string;
    answer: string;
}

interface PricingFAQProps {
    faqs?: FAQItem[];
}

const defaultFAQs = [
    {
        question: "Are there any setup or implementation fees?",
        answer: "No, we believe in complete pricing transparency. Our Standard and Professional plans come with zero implementation or data migration fees. For custom Enterprise integrations, a minor setup fee might be applicable depending on complexity."
    },
    {
        question: "Can I change or upgrade my plan at any time?",
        answer: "Yes, you can upgrade from Standard to Professional instantly. If you choose annual billing, we will calculate the price difference on a pro-rata basis for the remainder of your billing cycle."
    },
    {
        question: "Is my employee data secure?",
        answer: "Data security is our top priority. We use bank-grade 256-bit SSL encryption for all data transmissions. Our cloud databases are hosted in secure, redundant AWS servers with strict automated backups."
    },
    {
        question: "Do you offer a free trial period?",
        answer: "Yes! You can try HR Niti's Professional plan features for 14 days completely free. No credit card is required. You can choose to upgrade or cancel at any point during or after the trial."
    },
    {
        question: "What happens if our headcount exceeds the base 50 employees?",
        answer: "You do not need to upgrade plans. Your system scales automatically. Additional employees are billed at a flat incremental rate (₹60/mo per user on Billed Annually, or ₹90/mo on Professional plan Billed Annually)."
    },
    {
        question: "Do you offer custom integrations with accounting tools?",
        answer: "Yes, we support direct integrations with Tally, SAP, Zoho, and other major ERP software. Standard accounting API hooks are available in the Professional plan, while custom endpoints are offered in Enterprise."
    }
];

export default function PricingFAQ({ faqs }: PricingFAQProps) {
    const faqList = faqs || defaultFAQs;
    
    // Manage open state for each index independently
    const [openStates, setOpenStates] = useState<Record<number, boolean>>({ 0: true });

    const toggleIndex = (index: number) => {
        setOpenStates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Split FAQs into two lists for the 2-column layout
    const leftColumnFAQs = faqList.filter((_, i) => i % 2 === 0);
    const rightColumnFAQs = faqList.filter((_, i) => i % 2 !== 0);

    const renderFAQCard = (faq: FAQItem, originalIndex: number) => {
        const isOpen = !!openStates[originalIndex];
        
        return (
            <div
                key={originalIndex}
                className="bg-white rounded-2xl border border-slate-150 p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
                <button
                    type="button"
                    onClick={() => toggleIndex(originalIndex)}
                    className="w-full flex items-start justify-between text-left focus:outline-none group cursor-pointer"
                >
                    <span className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors pr-4 flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        {faq.question}
                    </span>
                    {isOpen ? (
                        <Minus className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                        <Plus className="h-5 w-5 text-slate-400 shrink-0 group-hover:text-emerald-600 mt-0.5" />
                    )}
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[250px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section className="py-20 bg-white">
            <FAQSchema faqs={faqList} />
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600">
                        Everything you need to know about our plans, pricing, and onboarding support.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {leftColumnFAQs.map((faq) => {
                            const originalIndex = faqList.findIndex(f => f.question === faq.question);
                            return renderFAQCard(faq, originalIndex);
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {rightColumnFAQs.map((faq) => {
                            const originalIndex = faqList.findIndex(f => f.question === faq.question);
                            return renderFAQCard(faq, originalIndex);
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
