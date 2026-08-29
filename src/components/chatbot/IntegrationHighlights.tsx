import React from "react";
import { Zap, Calendar, FileText, ClipboardCheck, ShieldCheck, HelpCircle, BarChart3 } from "lucide-react";

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
            Not just a FAQ bot: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              The AI integrated with your Leaves &amp; Payroll
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Traditional chatbots answer general text. Niti AI communicates directly with HR Niti database models to perform secure, transactional HR workflows in real-time.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Highlight 1: Leave & Attendance Checkers */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Leave Balances &amp; Dynamic Requests
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Employees type &apos;check my leaves&apos; or &apos;apply leave for tomorrow&apos;. Niti AI fetches active leave balance variables (Privilege, Sick, Casual) and submits requests directly to manager approval streams.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Attendance &amp; Leaves</span>
              <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Leaves Synced</span>
            </div>
          </div>

          {/* Highlight 2: Secure Payslip Downloads */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                On-Demand Payslip Downloads
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Employees can request monthly salary slips or Form 16 documents securely. Niti AI performs user session validation, queries compiled payslips, and shares direct secure download cards.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Core Payroll Database</span>
              <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Payslips Synced</span>
            </div>
          </div>

          {/* Highlight 3: Policy Queries Engine */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Instant Handbook Policy Audit
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Parse traveling expense limits, medical insurances, and corporate holiday calendar items. Niti AI reads documents uploaded in administrative settings to answer policy checks in seconds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Corporate Policies</span>
              <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Handbook Synced</span>
            </div>
          </div>

        </div>

        {/* Performance Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-6xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10">
            <div className="pb-6 md:pb-0">
              <ShieldCheck className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Secure Verification</div>
              <div className="text-xs text-slate-400 mt-1">Direct verification before sharing personal info</div>
            </div>
            <div className="py-6 md:py-0 md:px-4">
              <ClipboardCheck className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Ticket Handover</div>
              <div className="text-xs text-slate-400 mt-1">Automatic helpdesk tickets for complex queries</div>
            </div>
            <div className="pt-6 md:pt-0 md:px-4">
              <BarChart3 className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl font-black">70% Ticket Reduction</div>
              <div className="text-xs text-slate-400 mt-1">Automating standard operations on autopilot</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
