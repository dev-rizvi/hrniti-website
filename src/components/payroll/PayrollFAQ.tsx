"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";

export default function PayrollFAQ() {
    const faqs = [
        {
            question: "How does the system handle arrears?",
            answer: "Arrears are calculated automatically based on retrospective salary changes or attendance corrections. You can process arrears separately or include them in the regular payroll cycle."
        },
        {
            question: "Is it compatible with my bank for salary transfers?",
            answer: "Yes, we support bank advice formats for all major banks including HDFC, ICICI, SBI, Axis, and Kotak. You can generate the file and upload it directly to your corporate banking portal."
        },
        {
            question: "Can I handle multiple salary structures?",
            answer: "Absolutely. You can define unlimited salary structures (CTC breakdown) for different grades, locations, or designations using our Formula Builder."
        },
        {
            question: "What happens if income tax laws change?",
            answer: "Our team of compliance experts updates the backend whenever there is a statutory change (like new tax slabs or PF rates). These updates are automatically pushed to your system at no extra cost."
        },
        {
            question: "Is employee data secure?",
            answer: "We use bank-grade encryption (AES-256) for data at rest and during transmission. Access controls allow you to restrict sensitive payroll data visibility to authorized personnel only."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">Payroll FAQs</h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                id={`payroll-faq-btn-${index}`}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="text-lg font-bold text-secondary">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">
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
