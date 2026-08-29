import React from "react";
import { Zap, Award, Landmark, BookOpen, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";

export default function IntegrationHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] font-extrabold uppercase tracking-wider">
            <Zap className="h-3 w-3 animate-pulse" /> Core Platform Synergy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stop appraising in isolation: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              The PMS Syncing Goals, Skills, & Payroll
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Annual performance ratings are meaningless without action. HR Niti links performance outcomes directly with payroll increments and LMS learning tracks.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Highlight 1: Variable & Increment Payroll Sync */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Automated Variable & Increments Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Appraisal ratings map directly to variable structures and performance-linked bonus rules. Approved appraisal revisions transfer automatically to the Payroll engine to update salary masters and compute increments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Core Payroll Engine</span>
              <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Increment Synced</span>
            </div>
          </div>

          {/* Highlight 2: LMS Training Trigger Integration */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Training Needs Identification (TNI)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Skill gap scores identified during self or manager reviews feed into the LMS. HR Niti automatically assigns relevant learning courses (e.g. communication or tech skillups) to bridge competency gaps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: LMS Course catalog</span>
              <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Auto-Assigned TNI</span>
            </div>
          </div>

          {/* Highlight 3: Goal Alignment Sync */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Real-Time OKR & KRA Alignment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cascade department OKRs into individual KRA assignments. Employees log task updates in their dashboard, sync logs with progress trackers, and view scorecard updates live on the employee profile.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Employee Portal Profile</span>
              <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Goals Synced</span>
            </div>
          </div>

        </div>

        {/* Performance Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-6xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10">
            <div className="pb-6 md:pb-0">
              <ShieldCheck className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Zero Bias</div>
              <div className="text-xs text-slate-400 mt-1">Multi-rater 360-degree appraisals</div>
            </div>
            <div className="py-6 md:py-0 md:px-4">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Bell Curve</div>
              <div className="text-xs text-slate-400 mt-1">1-click rating normalization algorithm</div>
            </div>
            <div className="pt-6 md:pt-0 md:px-4">
              <BarChart3 className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Dynamic Reports</div>
              <div className="text-xs text-slate-400 mt-1">Real-time organizational performance analytics</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
