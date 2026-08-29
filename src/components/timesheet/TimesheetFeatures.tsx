import React from "react";
import { Play, FileText, Smartphone, Users, DollarSign, Clock } from "lucide-react";

export default function TimesheetFeatures() {
  const features = [
    {
      title: "One-Click Timer",
      desc: "Start and stop timers effortlessly from web or mobile. Switch between tasks instantly without losing track of billing logs.",
      icon: Play,
      colorClass: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      title: "Client Billing Reports",
      desc: "Automatically compile audit logs of hours worked per client. Export files to Excel or PDF for seamless customer invoicing.",
      icon: DollarSign,
      colorClass: "bg-green-50 text-green-600 border-green-100"
    },
    {
      title: "Geolocation Tracking",
      desc: "For on-field workers: Capture automated GPS coordinates and location stamps when starting client visits or tasks.",
      icon: Smartphone,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Task Allocation",
      desc: "Assign specific tasks to employees with clear deadlines and maximum budgeted hours. Track resource utilization.",
      icon: Users,
      colorClass: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "Approval Workflows",
      desc: "Establish multi-level timesheet authorization chains. Ensure only verified project hours flow into payroll runs.",
      icon: FileText,
      colorClass: "bg-red-50 text-red-600 border-red-100"
    },
    {
      title: "Overtime Calculation",
      desc: "Automatically calculate overtime rates and flags according to company rules, feeding into payroll calculations.",
      icon: Clock,
      colorClass: "bg-cyan-50 text-cyan-600 border-cyan-100"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Powerful Features for Work Optimization
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            More than just a stopwatch. Get a comprehensive system to analyze where time is spent and optimize company profitability.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${feature.colorClass} group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
