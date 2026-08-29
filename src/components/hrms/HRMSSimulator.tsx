"use client";
import React, { useState } from "react";
import { 
  UserPlus, Clock, CreditCard, UserCheck, CheckCircle, 
  RefreshCw, Play, Download, Camera, Check, Smartphone, 
  Briefcase, User
} from "lucide-react";
import confetti from "canvas-confetti";
import type { jsPDF } from "jspdf";

interface Candidate {
  id: string;
  name: string;
  role: string;
  dept: string;
  experience: string;
  photoColor: string;
}

interface Employee {
  id: string;
  name: string;
  role: string;
  dept: string;
  monthlyBase: number;
  tenureYears: number;
  unpaidLeaves: number;
}

const CANDIDATES: Candidate[] = [
  { id: "c1", name: "Rohan Verma", role: "Senior Backend Developer", dept: "Engineering", experience: "5.5 Years", photoColor: "from-violet-500 to-indigo-500" },
  { id: "c2", name: "Pooja Sen", role: "Growth Marketing Manager", dept: "Marketing", experience: "4 Years", photoColor: "from-orange-500 to-amber-500" },
  { id: "c3", name: "Devika Nair", role: "Talent Acquisition Associate", dept: "Human Resources", experience: "2 Years", photoColor: "from-emerald-500 to-teal-500" }
];

const EMPLOYEES: Employee[] = [
  { id: "e1", name: "Suresh Kumar", role: "QA Automation Lead", dept: "Engineering", monthlyBase: 110000, tenureYears: 3, unpaidLeaves: 2 },
  { id: "e2", name: "Neha Reddy", role: "VP of Technology", dept: "Engineering", monthlyBase: 280000, tenureYears: 6.2, unpaidLeaves: 0 },
  { id: "e3", name: "Tanmay Shah", role: "Customer Success Lead", dept: "Sales", monthlyBase: 120000, tenureYears: 1.8, unpaidLeaves: 5 },
  { id: "e4", name: "Sameer Deshmukh", role: "Chief Marketing Officer", dept: "Marketing", monthlyBase: 240000, tenureYears: 5.5, unpaidLeaves: 1 }
];

export default function HRMSSimulator() {
  const [mounted, setMounted] = useState(false);
  const jsPDFRef = React.useRef<typeof jsPDF | null>(null);

  React.useEffect(() => {
    setMounted(true);
    import("jspdf").then(m => {
      jsPDFRef.current = m.jsPDF || m.default;
    }).catch(err => console.error("Failed to prefetch jsPDF:", err));
  }, []);

  const [activeTab, setActiveTab] = useState<'onboard' | 'attendance' | 'payslip' | 'exit'>('onboard');

  // --- Tab 1: Onboarding Simulation State ---
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate>(CANDIDATES[0]);
  const [onboardStep, setOnboardStep] = useState<number>(0); // 0: Idle, 1-5: Steps running, 6: Success
  const [onboardProgress, setOnboardProgress] = useState<number>(0);
  const [onboardLog, setOnboardLog] = useState<string[]>([]);

  // --- Tab 2: Attendance Emulator State ---
  const [attendanceState, setAttendanceState] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [punchLog, setPunchLog] = useState<string[]>([]);
  const [leaveType, setLeaveType] = useState<string>("Casual Leave");
  const [leaveDays, setLeaveDays] = useState<number>(3);
  const [leaveReason, setLeaveReason] = useState<string>("");
  const [leaveStatus, setLeaveStatus] = useState<'idle' | 'submitting' | 'approved'>('idle');

  // --- Tab 3: Payroll State ---
  const [payrollEmployee, setPayrollEmployee] = useState<Employee>(EMPLOYEES[0]);
  const [overtimeHours, setOvertimeHours] = useState<number>(10);
  const [performanceBonus, setPerformanceBonus] = useState<number>(15000);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  // --- Tab 4: Exit & F&F State ---
  const [exitEmployee, setExitEmployee] = useState<Employee>(EMPLOYEES[0]);
  const [unusedLeaves, setUnusedLeaves] = useState<number>(12);
  const [buyoutDays, setBuyoutDays] = useState<number>(0);
  const [exitStatus, setExitStatus] = useState<'idle' | 'calculating' | 'settled'>('idle');

  // --- TAB 1: Onboarding Simulation Logic ---
  const triggerOnboarding = () => {
    if (onboardStep > 0 && onboardStep < 6) return; // Already running
    setOnboardStep(1);
    setOnboardProgress(15);
    setOnboardLog([`Initiating onboarding sequence for ${selectedCandidate.name}...`]);

    const steps = [
      { prg: 35, text: "Offer letter digital signature verified by candidate." },
      { prg: 60, text: "Aadhaar, PAN & Form 16 document verification checks completed successfully." },
      { prg: 75, text: "IT Asset allocated: Apple MacBook M3 & Slack workspace invites dispatched." },
      { prg: 90, text: "EPFO Portal registration completed. Corporate bank details generated." },
      { prg: 100, text: "New profile synced to HR Directory. Welcome email sent automatically! 🎉" }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setOnboardStep(index + 2);
        setOnboardProgress(step.prg);
        setOnboardLog(prev => [...prev, step.text]);
        if (index === steps.length - 1) {
          setOnboardStep(6);
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.8 }
          });
        }
      }, (index + 1) * 1000);
    });
  };

  // Onboarding reset handled inline in click handler to prevent cascading renders

  // --- TAB 2: Attendance Selfie Punch Logic ---
  const triggerPunchIn = () => {
    if (attendanceState !== 'idle') return;
    setAttendanceState('scanning');
    
    setTimeout(() => {
      setAttendanceState('success');
      const timeStr = new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setPunchLog(prev => [
        `Checked-in at ${timeStr} (Geo-tag: Bangalore Tech Park, Selfie Verified - Match 98.4%)`,
        ...prev
      ]);
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
    }, 2000);
  };

  const handleLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leaveReason.trim()) {
      alert("Please provide a reason for the leave.");
      return;
    }
    setLeaveStatus('submitting');
    setTimeout(() => {
      setLeaveStatus('approved');
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 2500);
  };

  // Reset leave form
  const resetLeaveForm = () => {
    setLeaveStatus('idle');
    setLeaveReason("");
  };

  // --- TAB 3: Payroll Calculator Logic ---
  // Basic = 50% of base, HRA = 20% of base, Special Allowance = 30% of base
  // Overtime rate: base / 160 hrs * 1.5 multiplier per hour
  const calculatePayroll = () => {
    const base = payrollEmployee.monthlyBase;
    const basic = base * 0.5;
    const hra = base * 0.2;
    const special = base * 0.3;
    const overtimeRate = (base / 160) * 1.5;
    const overtimePay = overtimeHours * overtimeRate;
    const grossSalary = base + overtimePay + performanceBonus;
    
    // Deductions: PF (12% of basic), ESIC (0.75% of Gross if salary < 21000, else 0), TDS (rough scale)
    const pfDeduction = basic * 0.12;
    const tdsTax = grossSalary > 200000 ? grossSalary * 0.15 : grossSalary > 100000 ? grossSalary * 0.08 : grossSalary * 0.03;
    const totalDeductions = pfDeduction + tdsTax;
    const netSalary = grossSalary - totalDeductions;

    return {
      basic,
      hra,
      special,
      overtimePay,
      grossSalary,
      pfDeduction,
      tdsTax,
      totalDeductions,
      netSalary
    };
  };

  const currentPayroll = calculatePayroll();

  const handleDownloadPayslip = () => {
    setIsCalculating(true);
    console.log("handleDownloadPayslip triggered");
    
    setTimeout(async () => {
      try {
        let jsPDFConstructor = jsPDFRef.current;
        if (!jsPDFConstructor) {
          console.log("jsPDF not prefetched yet, loading dynamically...");
          const m = await import("jspdf");
          jsPDFConstructor = m.jsPDF || m.default;
        }
        const pdf = new jsPDFConstructor("p", "mm", "a4");
        
        // Page setup
        pdf.setFont("helvetica", "normal");
        
        // Outer Border
        pdf.setDrawColor(220, 225, 230);
        pdf.rect(10, 10, 190, 277);
        
        // Header
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.text("HR NITI PRIVATE LIMITED", 15, 25);
        
        pdf.setFontSize(8);
        pdf.setFont("helvetica", "normal");
        pdf.text("Mumbai HQ - Corporate Office, Maharashtra", 15, 30);
        pdf.text("GSTIN: 27AABCH1234F1Z0", 15, 34);
        
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "bold");
        pdf.text("PAYSLIP / SALARY STATEMENT", 120, 25);
        
        pdf.setFontSize(8);
        pdf.setFont("helvetica", "normal");
        pdf.text("Pay Period: July 2026", 120, 30);
        pdf.text("Date of Issue: 01-Aug-2026", 120, 34);
        
        // Horizontal line
        pdf.line(10, 40, 200, 40);
        
        // Employee Details Block
        pdf.setFont("helvetica", "bold");
        pdf.text("Employee Name:", 15, 48);
        pdf.text("Employee ID:", 110, 48);
        pdf.text("Department:", 15, 54);
        pdf.text("Designation:", 110, 54);
        
        pdf.setFont("helvetica", "normal");
        pdf.text(payrollEmployee.name, 45, 48);
        pdf.text(`HRN-0${payrollEmployee.id}`, 140, 48);
        pdf.text(payrollEmployee.dept, 45, 54);
        pdf.text(payrollEmployee.role, 140, 54);
        
        // Horizontal line
        pdf.line(10, 60, 200, 60);
        
        // Table Headers
        pdf.setFont("helvetica", "bold");
        pdf.text("EARNINGS", 15, 68);
        pdf.text("AMOUNT", 75, 68);
        pdf.text("DEDUCTIONS", 110, 68);
        pdf.text("AMOUNT", 170, 68);
        
        pdf.line(10, 72, 200, 72);
        
        // Table content
        const basic = currentPayroll.basic;
        const hra = currentPayroll.hra;
        const special = currentPayroll.special;
        const overtimePay = Math.round(currentPayroll.overtimePay);
        const bonus = performanceBonus;
        const gross = Math.round(currentPayroll.grossSalary);
        
        const pf = currentPayroll.pfDeduction;
        const tds = Math.round(currentPayroll.tdsTax);
        const pt = 200;
        const totalDeductions = Math.round(currentPayroll.totalDeductions + pt);
        const net = Math.round(currentPayroll.netSalary - pt);
        
        pdf.setFont("helvetica", "normal");
        let y = 80;
        
        // Basic
        pdf.text("Basic Salary (50%)", 15, y);
        pdf.text(`INR ${basic.toLocaleString('en-IN')}`, 75, y);
        pdf.text("Provident Fund (PF)", 110, y);
        pdf.text(`INR ${pf.toLocaleString('en-IN')}`, 170, y);
        
        y += 8;
        // HRA
        pdf.text("HRA (20%)", 15, y);
        pdf.text(`INR ${hra.toLocaleString('en-IN')}`, 75, y);
        pdf.text("TDS / Income Tax", 110, y);
        pdf.text(`INR ${tds.toLocaleString('en-IN')}`, 170, y);
        
        y += 8;
        // Special
        pdf.text("Special Allowance", 15, y);
        pdf.text(`INR ${special.toLocaleString('en-IN')}`, 75, y);
        pdf.text("Professional Tax (PT)", 110, y);
        pdf.text(`INR ${pt.toLocaleString('en-IN')}`, 170, y);
        
        y += 8;
        // Overtime (if any)
        if (overtimeHours > 0) {
          pdf.text(`Overtime (${overtimeHours} hrs)`, 15, y);
          pdf.text(`INR ${overtimePay.toLocaleString('en-IN')}`, 75, y);
        } else {
          pdf.text("-", 15, y);
          pdf.text("-", 75, y);
        }
        
        y += 8;
        // Bonus (if any)
        if (performanceBonus > 0) {
          pdf.text("Performance Bonus", 15, y);
          pdf.text(`INR ${bonus.toLocaleString('en-IN')}`, 75, y);
        } else {
          pdf.text("-", 15, y);
          pdf.text("-", 75, y);
        }
        
        // Line before totals
        pdf.line(10, 125, 200, 125);
        
        pdf.setFont("helvetica", "bold");
        pdf.text("Gross Earnings:", 15, 132);
        pdf.text(`INR ${gross.toLocaleString('en-IN')}`, 75, 132);
        pdf.text("Total Deductions:", 110, 132);
        pdf.text(`INR ${totalDeductions.toLocaleString('en-IN')}`, 170, 132);
        
        pdf.line(10, 138, 200, 138);
        
        // Net Pay highlight box
        pdf.setDrawColor(5, 150, 105);
        pdf.setFillColor(236, 253, 245);
        pdf.rect(15, 146, 180, 22, "F");
        
        pdf.setTextColor(5, 150, 105);
        pdf.setFontSize(8);
        pdf.text("NET TAKE-HOME PAYOUT", 20, 152);
        
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.text(`INR ${net.toLocaleString('en-IN')}`, 20, 161);
        
        pdf.setTextColor(100, 116, 139);
        pdf.setFontSize(8);
        pdf.text("Calculated by HR Niti Compliance Engine", 125, 161);
        
        // Reset text color
        pdf.setTextColor(0, 0, 0);
        
        // Footer
        pdf.line(10, 180, 200, 180);
        
        pdf.setFont("helvetica", "italic");
        pdf.setFontSize(7.5);
        pdf.text("This is a computer-generated salary slip and does not require a physical signature.", 15, 188);
        pdf.text("Generated via HR Niti Sandbox - Live Simulator.", 15, 193);
        pdf.text("All statutory compliance computations (PF, ESIC, PT, TDS) are verified by the compliance engine.", 15, 198);
        
        pdf.save(`payslip_${payrollEmployee.name.toLowerCase().replace(/\s+/g, '_')}_july_2026.pdf`);
        console.log("PDF saved successfully");
        
        setIsCalculating(false);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (error) {
        console.error("Error generating PDF:", error);
        setIsCalculating(false);
        alert("Error generating PDF: " + (error as Error).message);
      }
    }, 1000);
  };

  // --- TAB 4: Exit F&F Calculator Logic ---
  // Gratuity: 15/26 * Last Drawn monthly base * tenureYears (Only if tenure >= 5 years)
  // Leave Encashment: Unused Leaves * (monthly base / 30)
  // Notice Buyout Days: positive value buyout pay, negative value buyout deduction
  const calculateExitSettlement = () => {
    const base = exitEmployee.monthlyBase;
    const hasGratuity = exitEmployee.tenureYears >= 5.0;
    const gratuity = hasGratuity ? Math.round((15 / 26) * base * exitEmployee.tenureYears) : 0;
    const leaveEncashment = Math.round(unusedLeaves * (base / 30));
    
    // Buyout pay = buyoutDays * (base / 30)
    const buyoutValue = Math.round(buyoutDays * (base / 30));
    const finalMonthSalary = base;
    const grossPayout = finalMonthSalary + gratuity + leaveEncashment - buyoutValue;

    return {
      finalMonthSalary,
      gratuity,
      leaveEncashment,
      buyoutValue,
      grossPayout,
      hasGratuity
    };
  };

  const settlement = calculateExitSettlement();

  const approveSettlement = () => {
    setExitStatus('calculating');
    setTimeout(() => {
      setExitStatus('settled');
      confetti({
        particleCount: 100,
        spread: 80,
        colors: ["#059669", "#10B981", "#34D399"]
      });
    }, 1800);
  };

  if (!mounted) {
    return (
      <div className="w-full bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl p-8 min-h-[450px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <RefreshCw className="w-8 h-8 text-emerald-500 animate-spin mx-auto" />
          <p className="text-slate-400 text-sm font-semibold">Loading Sandbox Environment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl p-6 md:p-8 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* Tab switcher buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 p-1.5 bg-slate-950 rounded-2xl border border-slate-850/80 mb-8 max-w-3xl">
          {(
            [
              { id: 'onboard', label: '1. Hire & Onboard', icon: UserPlus },
              { id: 'attendance', label: '2. Attendance & Leave', icon: Clock },
              { id: 'payslip', label: '3. Pay & Payslip', icon: CreditCard },
              { id: 'exit', label: '4. Performance & Exit', icon: UserCheck }
            ] as const
          ).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- TAB 1: ONBOARDING SIMULATION --- */}
        {activeTab === 'onboard' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Box: Candidate selector */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Step 1: Choose Candidate</span>
                <h3 className="text-2xl font-black text-white">HR Recruitment Pipeline</h3>
                <p className="text-slate-450 text-sm mt-1.5">Select a pre-screened job candidate to trigger their automated onboarding sequence.</p>
              </div>

              <div className="space-y-3">
                {CANDIDATES.map(cand => (
                  <button
                    key={cand.id}
                    onClick={() => {
                      setSelectedCandidate(cand);
                      setOnboardStep(0);
                      setOnboardProgress(0);
                      setOnboardLog([]);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-4 cursor-pointer ${
                      selectedCandidate.id === cand.id
                        ? 'bg-slate-800/80 border-emerald-500 shadow-md shadow-emerald-950/20'
                        : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-tr ${cand.photoColor} flex items-center justify-center font-bold text-sm shrink-0`}>
                      {cand.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-black text-white truncate">{cand.name}</div>
                      <div className="text-xs text-slate-400 truncate mt-0.5">{cand.role}</div>
                      <div className="flex gap-2 items-center mt-2">
                        <span className="text-[9px] font-black text-slate-500 bg-slate-900 px-2 py-0.5 rounded uppercase">{cand.dept}</span>
                        <span className="text-[9px] font-bold text-slate-400">Exp: {cand.experience}</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      selectedCandidate.id === cand.id ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-700'
                    }`}>
                      {selectedCandidate.id === cand.id && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={triggerOnboarding}
                disabled={onboardStep > 0 && onboardStep < 6}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 disabled:text-slate-650 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/10 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                {onboardStep === 0 && `Onboard ${selectedCandidate.name.split(' ')[0]}`}
                {onboardStep > 0 && onboardStep < 6 && "Processing Lifecycle Sync..."}
                {onboardStep === 6 && "Restart Onboarding Process"}
              </button>
            </div>

            {/* Right Box: Pipeline Track */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-slate-850 rounded-3xl p-6 md:p-8 min-h-[420px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-wider">Automated Lifecycle Flow</h4>
                  {onboardStep > 0 && (
                    <span className="text-xs font-bold text-emerald-400 animate-pulse flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      Onboarding Active
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                    <span>Onboarding Completion Progress</span>
                    <span>{onboardProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${onboardProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="space-y-4">
                  {[
                    "Confirm signed contract and initiate background validation checks.",
                    "Verify Aadhaar, PAN card, and past work documents in compliance vault.",
                    "Create corporate profiles: allocate Mac/Windows hardware & Slack workspace.",
                    "Register employee details in EFPO portal & setup corporate payroll accounts.",
                    "Announce welcome in the HR directory and register on Niti AI chatbot."
                  ].map((stepText, index) => {
                    const stepNum = index + 1;
                    const isActive = onboardStep === stepNum;
                    const isDone = onboardStep > stepNum;
                    return (
                      <div 
                        key={index} 
                        className={`flex items-start gap-4 transition-all duration-300 ${
                          isActive ? 'text-white' : isDone ? 'text-slate-400' : 'text-slate-650 opacity-40'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          isDone 
                            ? 'bg-emerald-600 text-white' 
                            : isActive 
                            ? 'bg-emerald-500 text-white ring-4 ring-emerald-950' 
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {isDone ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : stepNum}
                        </div>
                        <p className="text-xs md:text-sm font-semibold leading-relaxed pt-0.5">{stepText}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Log/Output */}
              {onboardLog.length > 0 && (
                <div className="mt-8 pt-4 border-t border-slate-900 text-xs font-mono bg-slate-950 p-4 rounded-xl max-h-32 overflow-y-auto text-emerald-400">
                  {onboardLog.map((log, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-slate-600">[{i+1}]</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- TAB 2: ATTENDANCE & LEAVE ESS MOBILE --- */}
        {activeTab === 'attendance' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Box: Smartphone Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[300px] h-[550px] bg-slate-950 border-[8px] border-slate-800 rounded-[40px] p-5 shadow-2xl relative flex flex-col justify-between overflow-hidden ring-4 ring-slate-850">
                {/* Speaker/Camera notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-900 rounded-full"></div>
                </div>

                {/* Mobile screen header */}
                <div className="pt-4 flex items-center justify-between text-xs text-slate-400 font-bold border-b border-slate-900 pb-3">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-emerald-500" />
                    ESS Portal
                  </span>
                  <span>09:30 AM</span>
                </div>

                {/* Viewfinder scanner */}
                <div className="flex-1 flex flex-col items-center justify-center my-6">
                  {attendanceState === 'idle' && (
                    <div className="text-center space-y-4">
                      <div className="w-36 h-36 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center bg-slate-900/50">
                        <Camera className="w-10 h-10 text-slate-500" />
                      </div>
                      <p className="text-xs text-slate-400 font-bold px-4">Selfie Check-In: Camera is ready. Please position face.</p>
                    </div>
                  )}

                  {attendanceState === 'scanning' && (
                    <div className="text-center space-y-4 relative w-full">
                      <div className="w-36 h-36 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-slate-900/50 mx-auto relative overflow-hidden">
                        {/* Shutter Scan Line */}
                        <div className="absolute inset-x-0 h-0.5 bg-emerald-400 shadow shadow-emerald-500 top-0 animate-bounce"></div>
                        <User className="w-12 h-12 text-emerald-500 opacity-60" />
                      </div>
                      <p className="text-xs text-emerald-400 font-bold animate-pulse">Scanning facial landmarks & geofence coordinates...</p>
                    </div>
                  )}

                  {attendanceState === 'success' && (
                    <div className="text-center space-y-4">
                      <div className="w-36 h-36 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/20">
                        <CheckCircle className="w-12 h-12 text-emerald-500" />
                      </div>
                      <h5 className="text-emerald-400 font-black text-sm">Attendance Verified!</h5>
                      <p className="text-[10px] text-slate-400 px-4 leading-relaxed font-semibold">Matched employee signature. Checked in successfully.</p>
                    </div>
                  )}
                </div>

                {/* Punch Button & logs */}
                <div className="space-y-4">
                  <button
                    onClick={triggerPunchIn}
                    disabled={attendanceState !== 'idle'}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-900 text-white disabled:text-slate-500 font-black py-3 rounded-2xl text-xs transition-colors cursor-pointer"
                  >
                    {attendanceState === 'idle' && "Punch In (Selfie + Geo)"}
                    {attendanceState === 'scanning' && "Punching In..."}
                    {attendanceState === 'success' && "Checked In"}
                  </button>

                  {/* Punch logs */}
                  <div className="text-[9px] font-mono bg-slate-900 p-2.5 rounded-xl max-h-24 overflow-y-auto text-slate-400">
                    <div className="font-bold text-slate-500 border-b border-slate-950 pb-1 mb-1">Punch Logs</div>
                    {punchLog.length === 0 ? (
                      <div className="italic">No punches today yet.</div>
                    ) : (
                      punchLog.map((log, i) => <div key={i} className="truncate">{log}</div>)
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Leave Request Form */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-slate-850 rounded-3xl p-6 md:p-8 min-h-[450px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Leave Management Module</span>
                <h3 className="text-2xl font-black text-white">Apply Leave on the Go</h3>
                <p className="text-slate-450 text-sm mt-1.5 mb-8">Configure policies and test multi-level approval workflows instantly with the live simulator form below.</p>

                {leaveStatus === 'idle' && (
                  <form onSubmit={handleLeaveSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase">Leave Category</label>
                        <select 
                          value={leaveType}
                          onChange={(e) => setLeaveType(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none cursor-pointer"
                        >
                          <option value="Casual Leave">Casual Leave (CL)</option>
                          <option value="Sick Leave">Sick Leave (SL)</option>
                          <option value="Privilege Leave">Privilege Leave (PL)</option>
                          <option value="Maternity Leave">Maternity Leave (ML)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase">Duration (Days)</label>
                        <input 
                          type="number"
                          min="1"
                          max="15"
                          value={leaveDays}
                          onChange={(e) => setLeaveDays(Number(e.target.value))}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-400 uppercase">Reason / Notes</label>
                      <textarea
                        value={leaveReason}
                        onChange={(e) => setLeaveReason(e.target.value)}
                        placeholder="Please write the reason for leave request..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-semibold focus:border-emerald-500 focus:outline-none h-24 resize-none"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
                    >
                      Submit Leave Request
                    </button>
                  </form>
                )}

                {leaveStatus === 'submitting' && (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <RefreshCw className="w-8 h-8 text-emerald-500 animate-spin" />
                    <div>
                      <h5 className="font-bold text-white">Submitting Leave Request</h5>
                      <p className="text-slate-400 text-xs mt-1">Routing request through multi-level approval policy chain...</p>
                    </div>
                  </div>
                )}

                {leaveStatus === 'approved' && (
                  <div className="border border-emerald-800 bg-emerald-950/20 rounded-2xl p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-500 font-bold shrink-0">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">Leave Status: APPROVED</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Approved automatically by Policy: Auto-Approval (Leaves &lt;= 3 days)</p>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-900 rounded-xl space-y-3.5 text-xs text-slate-350">
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="font-bold">Leave Type:</span>
                        <span>{leaveType}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="font-bold">Duration:</span>
                        <span>{leaveDays} days</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="font-bold">Reason:</span>
                        <span className="max-w-[70%] text-right truncate">{leaveReason}</span>
                      </div>
                    </div>

                    <button 
                      onClick={resetLeaveForm}
                      className="w-full py-3 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
                    >
                      Apply for Another Leave
                    </button>
                  </div>
                )}
              </div>

              {attendanceState === 'success' && (
                <div className="mt-8 pt-4 border-t border-slate-900 text-[10px] text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  <span>ESS Sync active: attendance punches & leaves are linked immediately to the Payroll module below.</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- TAB 3: PAYROLL & PAYSLIP CALCULATOR --- */}
        {activeTab === 'payslip' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Box: Customize sliders */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Step 1: Configure Payout</span>
                <h3 className="text-2xl font-black text-white">Payroll Calculation</h3>
                <p className="text-slate-450 text-sm mt-1.5">Select an employee and adjust parameters in real-time to compute dynamic payroll & deductions.</p>
              </div>

              {/* Employee selector */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase">Select Employee</label>
                <select 
                  value={payrollEmployee.id}
                  onChange={(e) => {
                    const emp = EMPLOYEES.find(x => x.id === e.target.value);
                    if (emp) setPayrollEmployee(emp);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  {EMPLOYEES.map(emp => (
                    <option key={emp.id} value={emp.id}>{emp.name} ({emp.role} - {emp.dept})</option>
                  ))}
                </select>
              </div>

              {/* Overtime Slider */}
              <div className="space-y-2.5 p-4 bg-slate-950/60 border border-slate-850 rounded-2xl">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Overtime Hours</span>
                  <span className="text-emerald-400">{overtimeHours} Hrs</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="40"
                  value={overtimeHours}
                  onChange={(e) => setOvertimeHours(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                  <span>0 hrs</span>
                  <span>1.5x Hourly multiplier</span>
                  <span>40 hrs</span>
                </div>
              </div>

              {/* Performance Bonus Input */}
              <div className="space-y-2.5 p-4 bg-slate-950/60 border border-slate-850 rounded-2xl">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Performance Bonus</span>
                  <span className="text-emerald-400">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(performanceBonus)}
                  </span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="50000"
                  step="5000"
                  value={performanceBonus}
                  onChange={(e) => setPerformanceBonus(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                  <span>₹0</span>
                  <span>Tax-deductible bonus</span>
                  <span>₹50,000</span>
                </div>
              </div>

              <button
                onClick={handleDownloadPayslip}
                disabled={isCalculating}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white disabled:text-slate-500 font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/10 transition-colors cursor-pointer"
              >
                {isCalculating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processing payslip generation...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Payslip PDF
                  </>
                )}
              </button>
            </div>

            {/* Right Box: Payslip Sheet view */}
            <div id="payslip-container" className="lg:col-span-7 bg-white text-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200">
              
              {/* Payslip Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-200 pb-5 mb-5">
                <div>
                  <h4 className="text-base font-black text-slate-900 tracking-tight">HR NITI PRIVATE LIMITED</h4>
                  <p className="text-[10px] font-bold text-slate-500 mt-0.5">Mumbai HQ - Corporate Office, Maharashtra</p>
                  <p className="text-[10px] font-bold text-slate-400">GSTIN: 27AABCH1234F1Z0</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-sm font-black text-slate-900 uppercase">Payslip / Salary Statement</div>
                  <div className="text-[10px] font-bold text-slate-500 mt-1">Pay Period: July 2026</div>
                  <div className="text-[10px] font-bold text-slate-400">Date of Issue: 01-Aug-2026</div>
                </div>
              </div>

              {/* Employee Payout Details Grid */}
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-[10px] font-semibold text-slate-600 border-b border-slate-200 pb-5 mb-5">
                <div><span className="font-bold text-slate-400 uppercase block mb-0.5">Employee Name</span> <span className="text-slate-800 font-bold text-xs">{payrollEmployee.name}</span></div>
                <div><span className="font-bold text-slate-400 uppercase block mb-0.5">Employee ID</span> <span className="text-slate-800 font-bold text-xs">HRN-0{payrollEmployee.id}</span></div>
                <div><span className="font-bold text-slate-400 uppercase block mb-0.5">Department</span> <span className="text-slate-800 font-bold">{payrollEmployee.dept}</span></div>
                <div><span className="font-bold text-slate-400 uppercase block mb-0.5">Job Designation</span> <span className="text-slate-800 font-bold">{payrollEmployee.role}</span></div>
              </div>

              {/* Salary Calculation Tables split Earnings vs Deductions */}
              <div className="grid sm:grid-cols-2 gap-8 text-[11px]">
                {/* Earnings Table */}
                <div className="space-y-2.5">
                  <div className="font-black text-slate-400 uppercase tracking-wider text-[9px] border-b border-slate-200 pb-1 mb-2">Earnings</div>
                  
                  <div className="flex justify-between font-bold text-slate-650">
                    <span>Basic Salary (50%)</span>
                    <span>₹{currentPayroll.basic.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-650">
                    <span>HRA (20%)</span>
                    <span>₹{currentPayroll.hra.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-650">
                    <span>Special Allowance</span>
                    <span>₹{currentPayroll.special.toLocaleString('en-IN')}</span>
                  </div>
                  {overtimeHours > 0 && (
                    <div className="flex justify-between font-bold text-slate-650">
                      <span>Overtime ({overtimeHours} hrs)</span>
                      <span>₹{Math.round(currentPayroll.overtimePay).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {performanceBonus > 0 && (
                    <div className="flex justify-between font-bold text-slate-650">
                      <span>Performance Bonus</span>
                      <span>₹{performanceBonus.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                {/* Deductions Table */}
                <div className="space-y-2.5">
                  <div className="font-black text-slate-400 uppercase tracking-wider text-[9px] border-b border-slate-200 pb-1 mb-2">Deductions</div>
                  
                  <div className="flex justify-between font-bold text-slate-650">
                    <span>Provident Fund (PF)</span>
                    <span>₹{currentPayroll.pfDeduction.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-650">
                    <span>TDS / Income Tax</span>
                    <span>₹{Math.round(currentPayroll.tdsTax).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-650">
                    <span>Professional Tax (PT)</span>
                    <span>₹200</span>
                  </div>
                </div>
              </div>

              {/* Total Calculation Row Footer */}
              <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-200 mt-6 pt-5 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-500 mb-1">
                    <span>Gross Earnings:</span>
                    <span>₹{Math.round(currentPayroll.grossSalary).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-500">
                    <span>Total Deductions:</span>
                    <span>₹{Math.round(currentPayroll.totalDeductions + 200).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Net Salary Highlight Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between mt-4 sm:mt-0 shadow-inner">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Net Take-Home</div>
                    <div className="text-lg font-black text-emerald-700 mt-0.5">
                      ₹{Math.round(currentPayroll.netSalary - 200).toLocaleString('en-IN')}
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 border border-emerald-200 rounded uppercase">Calculated</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 4: PERFORMANCE & EXIT --- */}
        {activeTab === 'exit' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Box: Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Step 1: Configure Resignation</span>
                <h3 className="text-2xl font-black text-white">Full & Final Exit</h3>
                <p className="text-slate-450 text-sm mt-1.5">Simulate resignation parameter payouts for an exiting employee in compliance with notice clauses.</p>
              </div>

              {/* Exiting employee selector */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase">Select Exiting Employee</label>
                <select 
                  value={exitEmployee.id}
                  onChange={(e) => {
                    const emp = EMPLOYEES.find(x => x.id === e.target.value);
                    if (emp) setExitEmployee(emp);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  {EMPLOYEES.map(emp => (
                    <option key={emp.id} value={emp.id}>{emp.name} ({emp.role} - {emp.dept})</option>
                  ))}
                </select>
              </div>

              {/* Unused Leave balance */}
              <div className="space-y-2.5 p-4 bg-slate-950/60 border border-slate-850 rounded-2xl">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Unused Leave Balance</span>
                  <span className="text-emerald-400">{unusedLeaves} Days</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="30"
                  value={unusedLeaves}
                  onChange={(e) => setUnusedLeaves(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                  <span>0 days</span>
                  <span>Encashable at basic rate</span>
                  <span>30 days</span>
                </div>
              </div>

              {/* Notice Period Buyout days */}
              <div className="space-y-2.5 p-4 bg-slate-950/60 border border-slate-850 rounded-2xl">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Notice Buyout Days</span>
                  <span className="text-rose-400">{buyoutDays} Days</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="15"
                  value={buyoutDays}
                  onChange={(e) => setBuyoutDays(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                  <span>0 days served</span>
                  <span>Employee buys out notice</span>
                  <span>15 days buy out</span>
                </div>
              </div>

              <button
                onClick={approveSettlement}
                disabled={exitStatus !== 'idle'}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white disabled:text-slate-500 font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/10 transition-colors cursor-pointer"
              >
                {exitStatus === 'idle' && `Approve F&F Settlement`}
                {exitStatus === 'calculating' && `Disbursing payouts...`}
                {exitStatus === 'settled' && `F&F Process Settled!`}
              </button>
            </div>

            {/* Right Box: F&F Settlement Sheet */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-slate-850 rounded-3xl p-6 md:p-8 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Settled Stamp Overlay */}
              {exitStatus === 'settled' && (
                <div className="absolute inset-0 bg-emerald-950/20 backdrop-blur-[2px] z-20 flex items-center justify-center">
                  <div className="border-[6px] border-emerald-500 rounded-2xl px-8 py-4 text-emerald-500 font-black text-3xl uppercase tracking-widest rotate-[-12deg] shadow-lg animate-fadeIn bg-slate-950/95 ring-4 ring-emerald-950">
                    DISBURSED & CLOSED
                  </div>
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-wider">F&F Settlement Report</h4>
                  <span className="text-[10px] font-black text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded uppercase">Final Statement</span>
                </div>

                <div className="space-y-4">
                  {/* Tenure details */}
                  <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-850">
                    <div className="p-3 bg-slate-950 rounded-xl text-slate-400">
                      <Briefcase className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Tenure & Gratuity eligibility</div>
                      <div className="text-xs font-black text-white mt-0.5">
                        {exitEmployee.name} served for {exitEmployee.tenureYears} Years
                      </div>
                      <p className="text-[10px] text-slate-450 mt-1 leading-relaxed">
                        {settlement.hasGratuity 
                          ? "Eligible for Gratuity payout (Completed >= 5.0 years of active tenure)." 
                          : "Not eligible for Gratuity (Tenure is less than the statutory 5.0 years threshold)."}
                      </p>
                    </div>
                  </div>

                  {/* Calculations breakdown sheet */}
                  <div className="p-4 bg-slate-950/40 rounded-2xl space-y-3.5 text-xs text-slate-350">
                    <div className="flex justify-between border-b border-slate-850 pb-2.5">
                      <span className="font-bold">Last Drawn Month Salary:</span>
                      <span className="text-white">₹{settlement.finalMonthSalary.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex justify-between border-b border-slate-850 pb-2.5">
                      <span className="font-bold">Gratuity Payout:</span>
                      <span className={settlement.gratuity > 0 ? "text-emerald-400 font-bold" : "text-slate-500"}>
                        ₹{settlement.gratuity.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-slate-850 pb-2.5">
                      <span className="font-bold">Leave Encashment ({unusedLeaves} days):</span>
                      <span className={settlement.leaveEncashment > 0 ? "text-emerald-400 font-bold" : "text-slate-500"}>
                        ₹{settlement.leaveEncashment.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex justify-between pb-1">
                      <span className="font-bold">Notice Period Buyout Deduction ({buyoutDays} days):</span>
                      <span className={settlement.buyoutValue > 0 ? "text-rose-400 font-bold" : "text-slate-500"}>
                        - ₹{settlement.buyoutValue.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Settlement Amount */}
              <div className="mt-8 pt-5 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Net Settlement Amount</div>
                  <div className="text-2xl font-black text-white mt-1">
                    ₹{settlement.grossPayout.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 text-right max-w-xs font-bold leading-relaxed">
                  Includes Basic, HRA, Gratuity, and Leave Encashment, less applicable Notice buyout deductions.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
