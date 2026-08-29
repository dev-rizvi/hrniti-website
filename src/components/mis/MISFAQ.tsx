"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function MISFAQ() {
    const faqs = [
        {
            question: "Can I schedule reports to be emailed automatically?",
            answer: "Yes, HR Niti's Report Scheduler allows you to configure daily, weekly, or monthly reports to be automatically generated and emailed to specific stakeholders."
        },
        {
            question: "Are these reports compliant with government formats?",
            answer: "Absolutely. We strictly adhere to statutory formats for PF, ESIC, PT, and LWF across all Indian states. Our system is updated whenever government regulations change."
        },
        {
            question: "Can I build my own custom reports?",
            answer: "Yes, our 'Report Builder' tool gives you drag-and-drop capability to select any data field, apply filters, and design your own output layout in minutes."
        },
        {
            question: "In what formats can I export the data?",
            answer: "You can export reports in multiple formats including Excel (XLS/XLSX), PDF, CSV, XML, and plain text formats required for bank uploads."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-white">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">Reporting FAQs</h2>

                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 text-left border-b border-gray-100 group-last:border-0"
                            >
                                <span className={`text-lg transition-colors ${activeIndex === index ? 'font-bold text-primary' : 'font-medium text-gray-700 group-hover:text-primary'}`}>
                                    {faq.question}
                                </span>
                                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-90 text-primary' : ''}`} />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed text-sm pr-8">
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
