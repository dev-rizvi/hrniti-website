import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "What is the difference between an ATS and a Recruitment Management System (RMS)?",
    answer: "An Applicant Tracking System (ATS) primarily focuses on resume storage and candidate progression status. A Recruitment Management System (RMS) is broader—covering external job distribution, collaborative evaluation scorecards, offer letter builders, and direct transition triggers into core HRMS onboarding and Payroll master ledgers."
  },
  {
    question: "Does the system support posting vacancies to multiple job boards?",
    answer: "Yes, fully. You can configure a vacancy profile once in the admin dashboard and distribute it in one click to dozens of premium job channels, social platforms, and your company's career page, tracking candidate sources automatically."
  },
  {
    question: "How does the AI Resume Parser process candidate resumes?",
    answer: "Our parser uses Natural Language Processing (NLP) to read bulk-uploaded resumes in PDF, DOC, and DOCX formats. It automatically extracts credentials, contact details, work history, and key skills into structured directory fields, matching candidates with job descriptions."
  },
  {
    question: "Can we customize candidate evaluation scorecards and feedback forms?",
    answer: "Absolutely. You can build custom interview scorecards and feedback templates per role or department. This ensures interviewers rate candidates on standardized parameters, allowing hiring managers to make data-backed selection choices."
  },
  {
    question: "How does hired candidate data sync with onboarding and payroll?",
    answer: "Once a candidate accepts their digital offer letter, clicking 'Convert to Employee' instantly generates their official employee record. Personal documents, banking details, and salary CTC structures map directly into the Payroll calculator and core HR directory, initiating onboarding steps."
  }
];

export default function RecruitmentFAQ() {
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
            Everything you need to know about Applicant Tracking Systems, recruitment automation, and HRMS transitions.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              name="recruitment-faq" 
              className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm open:shadow-md open:border-slate-300 transition-all duration-300"
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer select-none font-extrabold text-slate-900 pr-4">
                <span>{faq.question}</span>
                <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-100 bg-slate-50/50 p-6 text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
