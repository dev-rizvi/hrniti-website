"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function EmployeeFAQ() {
    const faqs = [
        {
            question: "Is employee data stored securely?",
            answer: "Yes, all data is encrypted using military-grade AES-256 encryption. We are GDPR compliant and host data on secure AWS servers with regular backups."
        },
        {
            question: "Can I customize the employee profile fields?",
            answer: "Absolutely. You can add custom fields (e.g., 'T-Shirt Size', 'Blood Group', 'Emergency Contact') to the employee master database without any coding."
        },
        {
            question: "How does the Digital Onboarding work?",
            answer: "Once a candidate accepts an offer, the system automatically sends a welcome email with a link to the onboarding portal where they can upload documents and fill in personal details before their first day."
        },
        {
            question: "Is the ESS portal available as a mobile app?",
            answer: "Yes, our ESS portal is fully responsive and also available as a dedicated mobile app for both Android and iOS devices."
        },
        {
            question: "What happens to data when an employee leaves?",
            answer: "The data is archived securely for historical reference and compliance audits. You can process full and final settlements and then deactivate the user to free up license count."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">Frequently Asked Questions</h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-secondary">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-green-500 shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
