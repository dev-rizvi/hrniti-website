"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FnFFAQ() {
    const faqs = [
        {
            question: "How soon can FnF be processed after resignation?",
            answer: "Ideally, it takes 30-45 days. However, with our system, companies can process it as fast as 2 working days after the Last Working Day (LWD), provided all asset clearances are marked complete digitally."
        },
        {
            question: "Does the system handle notice period buyouts?",
            answer: "Yes. If an employee wants to leave early, the system calculates the shortfall days and automatically deducts the 'Notice Pay' from the final settlement amount."
        },
        {
            question: "What about Gratuity calculation?",
            answer: "The gratuity engine checks the Date of Joining vs. LWD. If the service exceeds 5 continuous years, it auto-calculates gratuity using the formula: (15 * Last Drawn Basic * Tenure) / 26."
        },
        {
            question: "Can I hold the settlement if assets are not returned?",
            answer: "Yes, the workflow enforces a 'Stop Payment' logic. The Finance team cannot generate the bank advice until the IT/Admin department marks the 'Assets Returned' checkpoint as cleared."
        },
        {
            question: "Are exit interviews integrated?",
            answer: "Yes, you can trigger an exit interview form to the employee upon resignation acceptance. The feedback is stored securely for HR analytics."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">FnF Questions Answered</h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
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
