import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "Which mobile operating systems are supported?",
    answer: "The HR Niti application supports Android (Version 8.0 and above) and iOS (iOS 13 and above). The layout is fully responsive and optimized for both mobile phones and tablets."
  },
  {
    question: "Can employees mark their attendance when offline?",
    answer: "Yes, fully. The app runs an offline transaction queue. Punches made offline are recorded with active geolocations and timestamp hashes, and sync back to the directory database automatically once internet connection is restored."
  },
  {
    question: "How secure is the biometric and facial recognition system?",
    answer: "Highly secure. We leverage advanced facial liveness matching algorithms to prevent identity spoofing (e.g. holding up a photo). All face templates are converted to encrypted hashes, and raw photos are never stored."
  },
  {
    question: "How do employees register and log in to the mobile app?",
    answer: "HR managers distribute credentials (Company Code, Username, and Password) directly. Once authenticated, employees can set up secure biometric triggers (Fingerprint or FaceID/TouchID) for fast access."
  }
];

export default function MobileAppFAQ() {
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
            Everything you need to know about the HRMS Mobile App, geofencing systems, and biometric authentications.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              name="mobile-app-faq" 
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
