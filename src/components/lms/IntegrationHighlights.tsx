import React from "react";
import { UserPlus, Target, Landmark, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function IntegrationHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider">
            <Zap className="h-3 w-3" /> Core System Integration
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Integrated E-Learning Matters: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
              The HR Niti Advantage
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Traditional LMS platforms operate in isolated silos, causing double data entry and untracked compliance. HR Niti builds learning directly into your employees' lifecycle.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Highlight 1: Onboarding */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <UserPlus className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Automated Onboarding (HRMS Triggered)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The moment a new employee profile is activated in the core HRMS database, HR Niti automatically maps and assigns mandatory training modules like **POSH compliance, information security, and employee code of conduct**. No manual assignment required.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Trigger: HRMS Onboarding</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Auto-Assigned</span>
            </div>
          </div>

          {/* Highlight 2: Performance Appraisals */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Performance Appraisals & Goal Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bridge the skill gap identified in appraisal review cycles. Managers can directly link specific LMS courses to an employee's Key Result Areas (KRAs) and performance goals. Employee learning progress is visible in performance logs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Trigger: Performance Reviews</span>
              <span className="text-blue-605 bg-blue-50 px-2 py-0.5 rounded text-blue-700">Appraisal Linked</span>
            </div>
          </div>

          {/* Highlight 3: Payroll & Compliance */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Payroll Compliance & Allowances
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect learning milestones directly to your payroll. Complete essential technical accreditations to automatically trigger payroll bonuses, skill allowances, or salary increments. Keep audit logs 100% compliant.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Trigger: Course Completion</span>
              <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Payroll Synced</span>
            </div>
          </div>

        </div>

        {/* Integration Stats Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-6xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10">
            <div className="pb-6 md:pb-0">
              <ShieldCheck className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black">100% Compliant</div>
              <div className="text-xs text-slate-400 mt-1">Automatic POSH and compliance report audits</div>
            </div>
            <div className="py-6 md:py-0 md:px-4">
              <BarChart3 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black">94% Completion</div>
              <div className="text-xs text-slate-400 mt-1">Due to nudges via the mobile Employee Self-Service (ESS) app</div>
            </div>
            <div className="pt-6 md:pt-0 md:px-4">
              <Zap className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-black">0 Double Entry</div>
              <div className="text-xs text-slate-400 mt-1">Synced instantly with Core Employee Directory and hierarchy</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
