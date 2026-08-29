"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ESSFAQ() {
    const faqs = [
        {
            question: "Is the ESS portal accessible outside the office network?",
            answer: "Yes, HR Niti is a cloud-based solution. Your employees can access the ESS portal securely from anywhere using any web browser or our dedicated mobile apps."
        },
        {
            question: "Can employees edit their personal details?",
            answer: "Employees can request changes to their personal details like address, phone number, etc. However, you can configure workflows so that these changes require HR approval before reflecting in the master database."
        },
        {
            question: "Is my data secure in the cloud?",
            answer: "Absolutely. We use bank-grade encryption for data transmission and storage. Role-based access controls ensure that employees can only view their own data."
        },
        {
            question: "Can I customize the ESS dashboard?",
            answer: "Yes, the dashboard is modular. You can choose which widgets (Leave Balance, Payslip, Holidays, etc.) to show based on standard company policies."
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
                                id={`ess-faq-button-${index}`}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-secondary">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-purple-600 flex-shrink-0" />
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
