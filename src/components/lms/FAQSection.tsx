import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "How does the HR Niti LMS integrate with the core HRMS and Payroll system?",
    answer: "HR Niti LMS is natively integrated with the core HR Niti HRMS and Payroll database. When a new hire is added to your employee directory, the LMS automatically creates their learning account. Completed courses sync directly with performance appraisal logs, and successful certifications can trigger automated salary increments or compliance approvals in the Payroll module."
  },
  {
    question: "Can we automate POSH and other compliance training assignments?",
    answer: "Yes, fully. You can configure rule-based triggers in the LMS. For instance, you can set a rule to 'Assign POSH Compliance & Gender Sensitization training to all new joiners on Day 1' or 'Assign Leadership Blueprint to employees promoted to a Manager role'. The system handles course assignment, automated nudges, and progress tracking dynamically."
  },
  {
    question: "How do compliance reports help companies during audits?",
    answer: "HR Niti LMS keeps immutable log audits. During statutory filings or external compliance audits (e.g., POSH annual state reports in India), you can download 1-click reports showing employee enrollment logs, completion status, average quiz scores, and issued certificates. This serves as complete proof of compliance for audit teams."
  },
  {
    question: "Can we upload custom course modules or SCORM packages?",
    answer: "Yes. HR Niti LMS supports standard SCORM 1.2 and SCORM 2004 files, MP4 videos, PDF handbooks, slides, and customizable interactive quizzes. You can publish your own custom employee manual, company culture playbook, or product tutorials directly in the manager dashboard."
  },
  {
    question: "Do employees get verifiable certificates upon completion?",
    answer: "Yes, upon passing the course assessments, the system instantly generates a secure digital PDF certificate. Each certificate features your company branding, the employee's details, date of completion, and a verifiable secure QR code for validation."
  }
];

export default function FAQSection() {
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
            Everything you need to know about corporate training, compliance automation, and HRMS-LMS integrations.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              name="lms-faq" 
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
