"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function LeaveFAQ() {
    const faqs = [
        {
            question: "Can I configure different leave policies for different departments?",
            answer: "Yes, HR Niti allows you to create unlimited leave policies and map them to specific grades, departments, or locations. You can set different accrual rules for permanent staff versus interns."
        },
        {
            question: "How does the system handle 'Sandwich Leave'?",
            answer: "The system is intelligent enough to detect holidays or weekends falling between two leave dates. Based on your policy settings, it can either treat them as leave days or holidays automatically."
        },
        {
            question: "Is mobile approval available?",
            answer: "Yes, managers can approve or reject leave requests directly from the mobile app or even through email notification links without logging into the portal."
        },
        {
            question: "What happens to unutilized leaves at year-end?",
            answer: "You can define rules to either lapse unutilized leaves, carry them forward to the next year (with a maximum limit), or encash them based on your company policy."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-white">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">Common Queries</h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl p-6 transition-all duration-300 ${activeIndex === index ? 'border-primary shadow-md bg-emerald-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                id={`leave-faq-btn-${index}`}
                                className="w-full flex items-start justify-between text-left focus:outline-none cursor-pointer"
                            >
                                <span className={`font-bold text-lg ${activeIndex === index ? 'text-primary' : 'text-secondary'}`}>
                                    {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                                )}
                            </button>

                            {/* We use a simple conditional rendering for this grid layout style */}
                            {activeIndex === index && (
                                <div className="mt-4 text-gray-600 leading-relaxed text-sm animate-fade-in">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
