import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "How does the Timesheet module integrate with HRMS and Payroll?",
    answer: "HR Niti Timesheets are natively linked with your employee records and the core payroll processing system. Once a timesheet is approved by a manager, verified work hours, project hours, and overtime calculations flow directly into the payroll calculator, automating payroll payouts with zero manual intervention."
  },
  {
    question: "Is the timesheet tracking suitable for remote and field employees?",
    answer: "Yes, absolutely. Employees can track time on the web portal or via the mobile Employee Self-Service (ESS) app. For field sales or service representatives, the system captures GPS coordinates and location stamps when tasks are started, ensuring complete transparency and accountability."
  },
  {
    question: "Can we configure different billing rates per project or resource?",
    answer: "Yes. HR Niti allows you to assign specific hourly billing rates based on the employee's role, client contracts, or project budgets. This structure distinguishes billable from non-billable hours, allowing HR and finance teams to export structured invoice-ready billing sheets."
  },
  {
    question: "How does the system prevent timesheet errors and fraud?",
    answer: "You can define rules to enforce shift timings, set daily or weekly hour caps, and restrict logging hours for future dates. Furthermore, biometric punches or geofenced clock-ins from the attendance module can be cross-verified with logged task hours to highlight discrepancies."
  },
  {
    question: "Can managers configure custom approval workflows?",
    answer: "Yes. Timesheet workflows can be customized to support single-level, multi-level, or department-specific approvals. Managers receive real-time notifications on their dashboards to review, comment on, and approve or reject timesheet entries before payroll runs."
  }
];

export default function TimesheetFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-[11px] font-extrabold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ Center
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about time tracking, client billing, and payroll integrations.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              name="timesheet-faq" 
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
