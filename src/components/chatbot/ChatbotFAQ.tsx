import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "Is employee personal and salary data secure with the bot?",
    answer: "Yes, absolutely. Niti AI uses strict end-to-end encryption. It performs identity verification checks (such as sending OTPs or authenticating portal sessions) before displaying sensitive variables like payslips, tax data, or personal details."
  },
  {
    question: "Can we train the bot on our custom company policy handbooks?",
    answer: "Yes. Administrators can upload company policy manuals, PDFs, employee handbooks, and custom FAQ templates inside the admin settings. Niti AI is trained instantly on these documents to coordinate accurate answers."
  },
  {
    question: "Does the chatbot support voice command capabilities?",
    answer: "Yes. When used inside the HR Niti mobile application (available on Android and iOS), employees can tap the microphone icon to execute voice-to-text queries, make leave checks, and trigger transaction events."
  },
  {
    question: "What happens if Niti AI cannot resolve an employee's query?",
    answer: "If the bot encounters a complex question outside its trained parameters, it automatically opens an HR support ticket inside the portal and routes it to the designated HR manager for human resolution."
  },
  {
    question: "How long does it take to deploy the HR Chatbot module?",
    answer: "Niti AI comes pre-trained with standard HR scenarios, leaving only specific company policy uploads. The bot can be live for your workforce within 1 to 2 weeks after initial setup."
  }
];

export default function ChatbotFAQ() {
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
            Everything you need to know about AI chatbots, policy search automations, and HR transaction triggers.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              name="chatbot-faq" 
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
