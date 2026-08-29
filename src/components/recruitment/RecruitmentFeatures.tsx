import React from "react";
import { FileText, Bot, Calendar, Mail, Share2, PieChart } from "lucide-react";

export default function RecruitmentFeatures() {
  const features = [
    {
      title: "Bulk Resume Parsing",
      desc: "Drag and drop hundreds of candidate resumes. Our AI parser automatically extracts contact details, skills, and histories.",
      icon: FileText,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Skill Matching AI",
      desc: "Natively rank incoming applications. Match candidate profiles directly against JD criteria and skill set requirements.",
      icon: Bot,
      colorClass: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "One-Click Scheduling",
      desc: "Coordinate panel calendars and send custom meeting coordinates to candidates without switching browser tabs.",
      icon: Calendar,
      colorClass: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      title: "Salary Offer Logic",
      desc: "Configure complex CTC salary structures, generate approved offer PDF documents, and send them for digital signature.",
      icon: Mail,
      colorClass: "bg-green-50 text-green-600 border-green-100"
    },
    {
      title: "White-Labeled Career Page",
      desc: "Deploy a premium, company-branded career dashboard on your website that directly feeds incoming candidates to your ATS.",
      icon: Share2,
      colorClass: "bg-pink-50 text-pink-600 border-pink-100"
    },
    {
      title: "Hiring Analytics",
      desc: "Evaluate recruiting pipelines with velocity charts: track time-to-hire, source effectiveness, and cost-per-hire analytics.",
      icon: PieChart,
      colorClass: "bg-red-50 text-red-600 border-red-100"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Top Features of HR Niti RMS
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Everything you need to modernize talent acquisition, reduce time-to-hire, and run automated recruitment pipelines.
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
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
