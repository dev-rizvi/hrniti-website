import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "How flexible is the appraisal cycle configuration?",
    answer: "Highly flexible. You can set up Monthly, Quarterly, Semi-Annual, or Annual appraisal cycles. You can also configure separate cycles for different employee grades or departments, and assign custom weight indicators for multiple feedback providers."
  },
  {
    question: "Can employees self-evaluate?",
    answer: "Yes. The performance review cycle starts with employee self-evaluation via their Employee Self-Service (ESS) portal, followed by manager evaluation, multi-rater peer reviews, and optional HOD review states."
  },
  {
    question: "Does it support the Bell Curve normalization method?",
    answer: "Yes. HR Niti allows HR administrators to normalize ratings across the organization or specific departments using a Bell Curve distribution model, preventing rating inflation and ensuring transparent grade awards."
  },
  {
    question: "How are OKRs and KRAs assigned and tracked?",
    answer: "Managers assign targets and assign weights to custom Key Result Areas (KRAs) directly on the portal. Employees update their targets continuously, and overall weights compile into a final performance score."
  },
  {
    question: "Does performance link with Payroll increments and LMS training?",
    answer: "Yes, fully. Final appraisal approvals trigger salary increments and variable payouts directly in the Payroll master engine. Additionally, identified skill gaps automatically enroll employees in relevant training courses inside the LMS."
  }
];

export default function PerformanceFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-[11px] font-extrabold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5" /> Support Center
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about employee performance, appraisals, and system syncs.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              name="performance-faq" 
              className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm open:shadow-md open:border-slate-305 open:border-slate-300 transition-all duration-300"
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer select-none font-extrabold text-slate-900 pr-4">
                <span>{faq.question}</span>
                <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-100 bg-slate-50/50 p-6 text-sm text-slate-605 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
