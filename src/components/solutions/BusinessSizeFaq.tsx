"use client";
import { useState } from "react";
import { BusinessSizeFAQ } from "@/data/businessSizeData";

interface BusinessSizeFaqProps {
    employeeRange: string;
    faqs: BusinessSizeFAQ[];
}

export default function BusinessSizeFaq({ employeeRange, faqs }: BusinessSizeFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
                            Got Questions About HRMS for {employeeRange}?
                        </h2>
                        <p className="text-gray-600 text-base">
                            Everything you need to know about implementing HR Niti for your organization size.
                        </p>
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-base md:text-lg hover:text-emerald-700 transition-colors"
                                    >
                                        <span>{faq.question}</span>
                                        <span className={`w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-extrabold text-lg flex-shrink-0 transition-transform ${isOpen ? "rotate-180 bg-emerald-600 text-white" : ""}`}>
                                            ↓
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-5 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
