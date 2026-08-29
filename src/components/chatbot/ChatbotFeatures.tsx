import React from "react";
import { Bot, MessageCircle, Clock, FileText, Globe, Smartphone } from "lucide-react";

export default function ChatbotFeatures() {
  const features = [
    {
      title: "Instant Query Resolution",
      desc: "Provide answers instantly for standard company handbooks, holiday lists, expense codes, and leaves.",
      icon: MessageCircle,
      colorClass: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "24/7 Autopilot Support",
      desc: "HR systems operate continuously. Employees can check remaining leaves or query documents anytime, anywhere.",
      icon: Clock,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Transaction Automation",
      desc: "Employees can submit leave requests, regularize attendance punch logs, and update info right in the chat.",
      icon: Bot,
      colorClass: "bg-green-50 text-green-600 border-green-100"
    },
    {
      title: "Secure PDF Retrievals",
      desc: "Verify session identity and get secure links to download monthly payslips or Form-16 reports instantly.",
      icon: FileText,
      colorClass: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      title: "Multilingual Assistance",
      desc: "Leverage Natural Language Processing in multiple regional languages to bridge team communication barriers.",
      icon: Globe,
      colorClass: "bg-pink-50 text-pink-600 border-pink-100"
    },
    {
      title: "Mobile App Conversational Interface",
      desc: "Deliver a fluid WhatsApp-like experience embedded in our native Android and iOS mobile app portals.",
      icon: Smartphone,
      colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-sans">
            Modernize Support with an AI HR Bot
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Minimize standard HR query volumes by 70%. Deliver instant, automated answers directly integrated into leaves, timesheets, and payroll.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-slate-200/80 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${feature.colorClass} group-hover:rotate-6 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors font-sans">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
