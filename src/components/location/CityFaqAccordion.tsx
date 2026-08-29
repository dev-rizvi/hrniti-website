"use client";
import { useState } from "react";
import { CityFAQ } from "@/data/cityData";

interface CityFaqAccordionProps {
    cityName: string;
    faqs: CityFAQ[];
}

export default function CityFaqAccordion({ cityName, faqs }: CityFaqAccordionProps) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const toggleFaq = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section className="py-16 bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                            HRMS &amp; Payroll Software FAQs for {cityName}
                        </h2>
                        <p className="text-gray-600 text-base">
                            Everything you need to know about implementing HR Niti in your {cityName} business.
                        </p>
                    </div>

                    {/* FAQ Accordion List */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-base md:text-lg hover:text-emerald-700 transition-colors focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <span className={`w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "rotate-180 bg-emerald-600 text-white" : ""}`}>
                                            ▼
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-emerald-50/20">
                                            <p>{faq.answer}</p>
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
