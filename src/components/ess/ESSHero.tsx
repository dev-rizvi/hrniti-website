"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, User, Calendar, FileText, Calculator, 
  Lock, Edit2, CheckCircle, Download, Plus
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ESSHero() {
  // Mockup tab state
  const [activeMockTab, setActiveMockTab] = useState<'profile' | 'leave' | 'payslip' | 'tax'>('profile');

  // Interactive state: Profile
  const [isEditingContact, setIsEditingContact] = useState<boolean>(false);
  const [emergencyContact, setEmergencyContact] = useState<string>("+91 98765 43210");
  const [isContactSaved, setIsContactSaved] = useState<boolean>(false);

  // Interactive state: Leave
  const [leaveBalance, setLeaveBalance] = useState<number>(12);
  const [leaveType, setLeaveType] = useState<string>("Casual Leave");
  const [leaveDuration, setLeaveDuration] = useState<number>(1);
  const [leaveRequests, setLeaveRequests] = useState<Array<{type: string, days: number, status: string}>>([
    { type: "Sick Leave", days: 2, status: "Approved" }
  ]);

  // Interactive state: Payslip
  const [downloadingMonth, setDownloadingMonth] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  // Interactive state: Tax Calculator
  const [val80C, setVal80C] = useState<number>(120000);
  const [val80D, setVal80D] = useState<number>(25000);

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingContact(false);
    setIsContactSaved(true);
    setTimeout(() => setIsContactSaved(false), 2000);
    confetti({
      particleCount: 30,
      spread: 40,
      colors: ["#8B5CF6", "#A78BFA"]
    });
  };

  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (leaveBalance < leaveDuration) {
      alert("Insufficient leave balance!");
      return;
    }
    setLeaveBalance(prev => prev - leaveDuration);
    setLeaveRequests(prev => [
      { type: leaveType, days: leaveDuration, status: "Pending Approval" },
      ...prev
    ]);
    confetti({
      particleCount: 50,
      spread: 40,
      colors: ["#10B981", "#34D399"]
    });
  };

  const handleDownloadPayslip = (month: string) => {
    if (downloadingMonth) return;
    setDownloadingMonth(month);
    setDownloadProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        setDownloadProgress(100);
        setTimeout(() => {
          setDownloadingMonth(null);
          confetti({
            particleCount: 60,
            spread: 55,
            colors: ["#8B5CF6", "#A78BFA", "#34D399"]
          });
        }, 600);
      } else {
        setDownloadProgress(progress);
      }
    }, 80);
  };

  // Tax calculations
  const grossSalary = 1000000;
  const standardDeduction = 50000;
  const totalDeductions = Math.min(val80C, 150000) + Math.min(val80D, 25000) + standardDeduction;
  const taxableIncome = Math.max(0, grossSalary - totalDeductions);
  
  // Quick tax computation estimation
  const estTax = taxableIncome <= 300000 ? 0 :
                 taxableIncome <= 600000 ? (taxableIncome - 300000) * 0.05 :
                 taxableIncome <= 900000 ? 15000 + (taxableIncome - 600000) * 0.10 :
                 45000 + (taxableIncome - 900000) * 0.15;

  return (
    <section className="bg-gradient-to-b from-slate-950 via-purple-950/90 to-slate-950 text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Heading Content */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4.5 py-1 text-purple-300">
              <span className="text-xs font-semibold tracking-wider uppercase">Empower Your Workforce</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              User-friendly <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">ESS Portal</span> for Enhanced Engagement
            </h1>

            <p className="text-lg text-slate-350 leading-relaxed max-w-xl">
              Give employees full control over their work life. From downloading payslips to tax planning declarations and instant leave requests, our ESS portal puts everything at their fingertips.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                id="hero-demo-button"
                className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-750 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/20 active:scale-98"
              >
                Get Personalized Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right: High-Fidelity Interactive Sandbox Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Mock Browser Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] text-slate-500 font-mono ml-2">portal.hrniti.com/ess</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md text-[10px] font-mono text-emerald-400">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>SSL SECURE</span>
                </div>
              </div>

              {/* Layout: Sidebar + Tab Workspace */}
              <div className="flex-1 grid grid-cols-12 gap-5 items-stretch min-h-[300px]">
                
                {/* Mockup Sidebar */}
                <div className="col-span-4 bg-slate-950/80 border border-slate-850 p-2.5 rounded-2xl flex flex-col gap-1.5 justify-center">
                  {(
                    [
                      { id: 'profile', label: 'My Profile', icon: User },
                      { id: 'leave', label: 'Leave Tracker', icon: Calendar },
                      { id: 'payslip', label: 'Salary slips', icon: FileText },
                      { id: 'tax', label: 'Tax Declaration', icon: Calculator }
                    ] as const
                  ).map((tab) => {
                    const TabIcon = tab.icon;
                    const isSelected = activeMockTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        id={`mock-tab-${tab.id}`}
                        onClick={() => setActiveMockTab(tab.id)}
                        className={`
                          w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer
                          ${isSelected 
                            ? 'bg-purple-600/10 border border-purple-500/30 text-purple-400' 
                            : 'text-slate-500 hover:text-slate-350 hover:bg-slate-900'
                          }
                        `}
                      >
                        <TabIcon className={`w-4 h-4 ${isSelected ? 'text-purple-400' : 'text-slate-500'}`} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Mockup Main Workspace Panel */}
                <div className="col-span-8 bg-slate-950/40 border border-slate-850/60 rounded-2xl p-5 flex flex-col justify-center relative">
                  
                  {/* TAB 1: PROFILE */}
                  {activeMockTab === 'profile' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-200">Priya Patel</h4>
                          <p className="text-[10px] text-slate-500">Employee ID: HRN-ESS-102</p>
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-slate-850 pt-3 text-[11px] text-slate-400">
                        <p><strong className="text-slate-300">Email:</strong> priya.patel@hrniti.com</p>
                        <p><strong className="text-slate-300">Designation:</strong> QA Analyst</p>
                        
                        {/* Interactive contact field */}
                        <div className="mt-2">
                          <strong className="text-slate-300 block mb-1">Emergency Contact:</strong>
                          {isEditingContact ? (
                            <form onSubmit={handleSaveContact} className="flex gap-2 mt-1">
                              <input 
                                type="text" 
                                id="profile-contact-input"
                                value={emergencyContact}
                                onChange={(e) => setEmergencyContact(e.target.value)}
                                className="bg-slate-900 border border-slate-750 text-white text-[11px] px-2 py-1 rounded w-full focus:outline-none focus:border-purple-500"
                              />
                              <button 
                                type="submit"
                                id="profile-contact-save"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-2.5 py-1 rounded text-[10px] font-bold"
                              >
                                Save
                              </button>
                            </form>
                          ) : (
                            <div className="flex items-center justify-between bg-slate-900/60 border border-slate-850 px-2.5 py-1 rounded mt-1">
                              <span>{emergencyContact}</span>
                              <button 
                                onClick={() => setIsEditingContact(true)}
                                id="profile-contact-edit"
                                className="text-slate-500 hover:text-purple-400"
                              >
                                <Edit2 className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {isContactSaved && (
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 animate-scale-up">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Contact information updated successfully!</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 2: LEAVE TRACKER */}
                  {activeMockTab === 'leave' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between bg-slate-900/60 border border-slate-850 p-3 rounded-xl">
                        <div>
                          <span className="text-[9px] text-slate-500 block uppercase font-bold tracking-wider">Leave Balance</span>
                          <span className="text-lg font-bold text-slate-200">{leaveBalance} Days</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Policy quota: 24/yr</span>
                      </div>

                      {/* Interactive Apply Leave Form */}
                      <form onSubmit={handleApplyLeave} className="space-y-2 border-t border-slate-850 pt-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[9px] text-slate-500 font-bold block mb-1">Leave Type</label>
                            <select 
                              id="leave-type-select"
                              value={leaveType}
                              onChange={(e) => setLeaveType(e.target.value)}
                              className="bg-slate-900 border border-slate-800 text-white text-[10px] p-1.5 rounded-lg w-full focus:outline-none"
                            >
                              <option>Casual Leave</option>
                              <option>Sick Leave</option>
                              <option>Earned Leave</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[9px] text-slate-500 font-bold block mb-1">Days</label>
                            <select 
                              id="leave-days-select"
                              value={leaveDuration}
                              onChange={(e) => setLeaveDuration(Number(e.target.value))}
                              className="bg-slate-900 border border-slate-800 text-white text-[10px] p-1.5 rounded-lg w-full focus:outline-none"
                            >
                              <option value="1">1 Day</option>
                              <option value="2">2 Days</option>
                              <option value="3">3 Days</option>
                            </select>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          id="leave-apply-btn"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Apply Leave
                        </button>
                      </form>

                      {/* Current Request list */}
                      <div className="max-h-[60px] overflow-y-auto space-y-1 pr-1 border-t border-slate-850 pt-2">
                        {leaveRequests.map((req, i) => (
                          <div key={i} className="flex justify-between items-center text-[9px] bg-slate-900/40 px-2 py-1 rounded border border-slate-850">
                            <span className="text-slate-300 font-medium">{req.type} ({req.days}d)</span>
                            <span className={`px-1.5 py-0.5 rounded font-mono ${
                              req.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                            }`}>
                              {req.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: SALARY SLIPS */}
                  {activeMockTab === 'payslip' && (
                    <div className="space-y-3.5 animate-fade-in">
                      <h4 className="font-bold text-xs text-slate-200">Monthly Salary Slips</h4>

                      <div className="space-y-2">
                        {[
                          { month: 'January 2026', code: 'JAN-26' },
                          { month: 'December 2025', code: 'DEC-25' },
                          { month: 'November 2025', code: 'NOV-25' }
                        ].map((slip) => {
                          const isDownloadingThis = downloadingMonth === slip.code;
                          return (
                            <div key={slip.code} className="bg-slate-900 border border-slate-850 p-2.5 rounded-xl flex items-center justify-between text-xs">
                              <div>
                                <span className="font-bold text-slate-300 block text-[11px]">{slip.month}</span>
                                <span className="text-[9px] text-slate-500 font-mono">Disbursed via Direct Deposit</span>
                              </div>
                              
                              <button
                                id={`download-payslip-${slip.code}`}
                                onClick={() => handleDownloadPayslip(slip.code)}
                                disabled={downloadingMonth !== null}
                                className="bg-purple-600/15 border border-purple-500/30 text-purple-400 hover:bg-purple-600 hover:text-white disabled:bg-slate-800 disabled:text-slate-600 disabled:border-transparent p-1.5 rounded-lg transition-colors cursor-pointer"
                              >
                                {isDownloadingThis ? (
                                  <span className="text-[9px] font-mono font-bold">{downloadProgress}%</span>
                                ) : (
                                  <Download className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      {downloadingMonth && (
                        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-purple-500 h-full transition-all duration-100" 
                            style={{ width: `${downloadProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 4: TAX PLANNER */}
                  {activeMockTab === 'tax' && (
                    <div className="space-y-3 animate-fade-in text-[10px]">
                      <div className="flex justify-between items-center bg-slate-900/60 border border-slate-850 p-2 rounded-lg">
                        <span className="font-bold text-slate-200">Est. Tax Liability:</span>
                        <span className="font-mono text-emerald-400 font-bold">INR {Math.round(estTax).toLocaleString()}</span>
                      </div>

                      <div className="space-y-2 border-t border-slate-850 pt-2">
                        {/* 80C Input */}
                        <div>
                          <div className="flex justify-between mb-1">
                            <label className="text-slate-400 font-medium">Sec 80C Investment (Max 1.5L)</label>
                            <span className="text-slate-500">INR {val80C.toLocaleString()}</span>
                          </div>
                          <input 
                            type="range"
                            id="tax-80c-input"
                            min="0"
                            max="150000"
                            step="5000"
                            value={val80C}
                            onChange={(e) => setVal80C(Number(e.target.value))}
                            className="w-full accent-purple-500 bg-slate-900 h-1 rounded-lg cursor-pointer"
                          />
                        </div>

                        {/* 80D Input */}
                        <div>
                          <div className="flex justify-between mb-1">
                            <label className="text-slate-400 font-medium">Sec 80D Health Insurance (Max 25k)</label>
                            <span className="text-slate-500">INR {val80D.toLocaleString()}</span>
                          </div>
                          <input 
                            type="range"
                            id="tax-80d-input"
                            min="0"
                            max="25000"
                            step="1000"
                            value={val80D}
                            onChange={(e) => setVal80D(Number(e.target.value))}
                            className="w-full accent-purple-500 bg-slate-900 h-1 rounded-lg cursor-pointer"
                          />
                        </div>
                      </div>

                      <div className="border-t border-slate-850 pt-2 flex justify-between text-slate-500 text-[9px]">
                        <span>Standard Ded: 50,000</span>
                        <span>Taxable: INR {taxableIncome.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Interactive Footer Alert */}
              <div className="text-center text-[10px] text-slate-500 border-t border-slate-800/50 pt-3 mt-4">
                {activeMockTab === 'profile' && "Keep profile updates synchronized with central payroll data systems."}
                {activeMockTab === 'leave' && "Applied leaves are automatically processed by organizational approval engines."}
                {activeMockTab === 'payslip' && "Disbursed slips are encrypted and compliant with Form-16 specifications."}
                {activeMockTab === 'tax' && "Dynamic simulations only. Submissions integrate with company taxation guidelines."}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
