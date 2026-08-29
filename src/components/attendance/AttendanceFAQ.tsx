"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function AttendanceFAQ() {
    const faqs = [
        {
            question: "What is an Attendance Management System?",
            answer: "An Attendance Management System (AMS) is a software solution used to track and manage employee work hours, leaves, and presence. It automates the process of recording attendance, ensuring accuracy for payroll processing and compliance."
        },
        {
            question: "Can I track field employees' locations?",
            answer: "Yes, HR Niti's mobile app comes with Geo-tagging and Geo-fencing capabilities. This allows you to track the exact location from where an employee marks their attendance, ensuring accountability."
        },
        {
            question: "Does it support complex shift policies?",
            answer: "Absolutely. Our system is highly configurable and supports multiple shift patterns, including rotational shifts, night shifts, and flexible hours, with automated shift roster management."
        },
        {
            question: "How does biometric integration work?",
            answer: "We provide a utility that connects your biometric devices to our cloud server. The data is pushed in real-time, meaning as soon as an employee punches in, it reflects on the dashboard instantly."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">Frequently Asked Questions</h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-secondary">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
