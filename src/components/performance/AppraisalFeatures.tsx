import React from "react";
import { Users, TrendingUp, Target, BookOpen, BarChart3, Medal } from "lucide-react";

export default function AppraisalFeatures() {
  const features = [
    {
      title: "360-Degree Feedback",
      desc: "Gather holistic appraisals from managers, peers, subordinates, and external clients to reduce single-rater bias.",
      icon: Users,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Bell Curve Normalization",
      desc: "Automatically fit employee appraisal scores into team bell curves to maintain fair evaluation standards.",
      icon: TrendingUp,
      colorClass: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "OKR & KRA Tracking",
      desc: "Cascade department objectives to employee dashboards. Set weights, metrics, and progress thresholds.",
      icon: Target,
      colorClass: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      title: "Training Needs ID (TNI)",
      desc: "Suggest upskilling programs in the LMS auto-generated from skill gaps marked during manager evaluations.",
      icon: BookOpen,
      colorClass: "bg-green-50 text-green-600 border-green-100"
    },
    {
      title: "Real-Time Appraisals Tracker",
      desc: "Dashboards display evaluation cycles completion speeds, ratings, and self-review progress live.",
      icon: BarChart3,
      colorClass: "bg-red-50 text-red-600 border-red-100"
    },
    {
      title: "Comp & Performance Integration",
      desc: "Link appraisal outcomes directly to salary master revisions and variable pay payouts in Payroll.",
      icon: Medal,
      colorClass: "bg-yellow-50 text-yellow-650 text-yellow-600 border-yellow-100"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Features for a High-Performance Culture
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Build object-driven reviews. Bridge manager reviews with direct payroll increments and corporate learning pathways.
          </p>
        </div>

        {/* Features Grid */}
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
