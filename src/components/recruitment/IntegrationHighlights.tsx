import React from "react";
import { Zap, UserCheck, Landmark, ShieldCheck, ClipboardCheck, BarChart3 } from "lucide-react";

export default function IntegrationHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider">
            <Zap className="h-3 w-3 animate-pulse" /> Core Platform Synergy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stop Recruiting in a Silo: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              The ATS Built directly into HRMS & Payroll
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Traditional Applicant Tracking Systems end at candidate hiring. HR Niti transitions candidates into active employees, syncing offer structures directly with payroll calculations.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Highlight 1: HRMS Conversion */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                One-Click Employee Profile Conversion
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When a candidate accepts their digital offer letter, click 'Convert to Employee' to instantly create their official profile in the core HRMS database. Resume details, personal info, and documents transition seamlessly with zero data entry.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Core Employee Directory</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">0 Double Entry</span>
            </div>
          </div>

          {/* Highlight 2: Salary Structure Sync */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Offer Letter & Payroll Salary Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Configure offer letter structures with custom CTC breakups, allowances, PF contribution settings, and bonuses. Approved structures transfer immediately to the Payroll module, pre-configuring the new hire's payslip data.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Payroll Master Ledger</span>
              <span className="text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">Salary Synced</span>
            </div>
          </div>

          {/* Highlight 3: Auto-Onboarding */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Automated Onboarding Workflows
              </h3>
              <p className="text-slate-650 text-sm leading-relaxed text-slate-600">
                Trigger onboarding checklists automatically. Map new hires to designated IT assets, assign introductory portal details, and assign mandatory compliance training (e.g. POSH and Information Security) in the LMS on Day 1.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: LMS & Asset Management</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Auto-Triggered</span>
            </div>
          </div>

        </div>

        {/* Performance Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-6xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10">
            <div className="pb-6 md:pb-0">
              <ShieldCheck className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black">90% Faster</div>
              <div className="text-xs text-slate-400 mt-1">Sourcing to onboarding conversion times</div>
            </div>
            <div className="py-6 md:py-0 md:px-4">
              <ClipboardCheck className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black">100% Digital</div>
              <div className="text-xs text-slate-400 mt-1">e-Sign validated offer generation and document collections</div>
            </div>
            <div className="pt-6 md:pt-0 md:px-4">
              <BarChart3 className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Time-To-Hire Charts</div>
              <div className="text-xs text-slate-400 mt-1">Automated recruiter activity and ATS velocity dashboards</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
