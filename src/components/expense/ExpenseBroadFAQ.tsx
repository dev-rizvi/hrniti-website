"use client";
import FAQSchema from "@/components/seo/FAQSchema";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ExpenseBroadFAQ() {
    const faqs = [
        {
            question: "What is Expense Management?",
            answer: "Expense management is the process of managing company expenditures by tracking employee business-related expenses (like travel, client entertainment, medical allowance, and remote operations) and reimbursing them according to company policies. A dedicated digital system like HR Niti automates the upload of receipt invoices, validation limits, and status tracking to keep the entire process transparent."
        },
        {
            question: "Which steps are required for employee reimbursement?",
            answer: "The typical reimbursement process involves: (1) Employee submits the digital claim form along with attached receipt documents. (2) Compliance check by the system checks if it matches policy limits. (3) Manager or Team Lead reviews and approves the request. (4) Financial controller completes final checks. (5) Payout is processed instantly and employee is notified automatically."
        },
        {
            question: "Does my start-up or small business require an Expense Management System?",
            answer: "While tiny teams can manage manually with spreadsheets, any growing start-up with complex travel expenses, international client dealings, or remote hubs will benefit greatly from an automated tool. It saves hours of finance audit work, prevents double submissions, and keeps spending logs organized."
        },
        {
            question: "How does HR Niti help in simplifying the expense reimbursement process?",
            answer: "HR Niti automates receipt validation using SmartScan OCR, which extracts amounts, dates, and vendors without manual data entry. It also runs real-time checks against policy rules, allows multi-level approvals in a single click, and syncs directly with Payroll and Accounting logs, reducing reimbursement cycles by up to 70%."
        },
        {
            question: "Can I set limits for different employee grades or departments?",
            answer: "Yes, you can define customized expense policies based on grades, departments, or physical locations. For example, 'Sales Executives' can be assigned a daily food limit of ₹500, whereas 'Managers' are capped at ₹1200. The system automatically flags or blocks violations in real-time."
        },
        {
            question: "What types of expenses can be tracked with the software?",
            answer: "You can track a wide variety of expenses including project-specific costs, travel and flights, hotel lodging, fuel and mileage tracker distance, client entertainment, medical reimbursements, professional learning courses, and office utility allowances."
        },
        {
            question: "Is the expense management software secure?",
            answer: "Absolutely. Security is our top priority. The HR Niti platform employs bank-grade data encryption, multi-factor user authentication, role-based access permissions, complete patch maintenance, and regular secure backups on cloud servers to safeguard financial logs."
        },
        {
            question: "Can the software help with compliance and audit policy enforcement?",
            answer: "Yes, the system enforces compliance by verifying receipts prior to submission. It flags duplicate bills, verifies if date lies within valid dates, warns managers of soft budget breaches, and generates audit-ready reports instantly for financial regulatory compliance."
        },
        {
            question: "Does it support multi-currency expenses and mileage tracking?",
            answer: "Yes. Employees can file claims in USD, EUR, or other global currencies, and the system automatically converts them to your base currency (INR) using daily exchange rates. Our mobile app also supports automatic mileage tracking using phone GPS for field trips."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <FAQSchema faqs={faqs} />
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Help & Support
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-650 text-base">
                        Get quick answers to common questions about employee reimbursements, setup procedures, policy rules, and system safety.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border transition-all duration-300 ${
                                    isOpen 
                                    ? "border-emerald-200 shadow-lg shadow-emerald-500/5" 
                                    : "border-slate-100 hover:border-slate-300 hover:shadow-sm"
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-base md:text-lg font-bold text-slate-800 pr-4">{faq.question}</span>
                                    {isOpen ? (
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                            <Minus className="h-4 w-4" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                                            <Plus className="h-4 w-4" />
                                        </div>
                                    )}
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? 'max-h-72 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
