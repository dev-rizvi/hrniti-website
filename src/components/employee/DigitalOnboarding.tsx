"use client";
import React, { useState } from "react";
import { 
  Mail, Upload, Fingerprint, UserCheck, 
  FileText, CheckCircle, Clock, Check, 
  Lock, ArrowUpRight, User
} from "lucide-react";
import confetti from "canvas-confetti";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string;
}

export default function DigitalOnboarding() {
  const [activeStep, setActiveStep] = useState<number>(0);
  
  // Custom states for interactive mockups
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(65);
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verifying' | 'verified'>('pending');
  const [isBadgeActivated, setIsBadgeActivated] = useState<boolean>(false);

  const steps: Step[] = [
    {
      id: 0,
      title: "Offer Acceptance",
      subtitle: "Day -15",
      icon: Mail,
      desc: "Candidate accepts offer digitally.",
      details: "Automated triggers send welcome email with portal credentials immediately after digital acceptance."
    },
    {
      id: 1,
      title: "Doc Upload",
      subtitle: "Day -10",
      icon: Upload,
      desc: "Candidate uploads KYC & Certs.",
      details: "Mobile-friendly interface for uploading Aadhar, PAN, and Educational certificates."
    },
    {
      id: 2,
      title: "Verification",
      subtitle: "Day -5",
      icon: Fingerprint,
      desc: "HR/Admin verifies documents.",
      details: "Ops team receives alerts to verify documents. Background verification APIs triggered."
    },
    {
      id: 3,
      title: "Ready to Work",
      subtitle: "Day 1",
      icon: UserCheck,
      desc: "Employee ID generated.",
      details: "System auto-generates Employee Code, Email ID request, and assigns Asset allocation tasks."
    }
  ];

  const handleSignOffer = () => {
    setIsSigned(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const handleSimulateUpload = () => {
    if (isUploadComplete) return;
    
    let current = 65;
    const interval = setInterval(() => {
      current += 5;
      if (current >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setIsUploadComplete(true);
        confetti({
          particleCount: 50,
          spread: 40,
          colors: ["#10B981", "#34D399"]
        });
      } else {
        setUploadProgress(current);
      }
    }, 100);
  };

  const handleSimulateVerification = () => {
    setVerificationStatus('verifying');
    setTimeout(() => {
      setVerificationStatus('verified');
      confetti({
        particleCount: 60,
        spread: 50,
        colors: ["#10B981", "#059669"]
      });
    }, 2000);
  };

  const handleActivateBadge = () => {
    setIsBadgeActivated(true);
    confetti({
      particleCount: 100,
      spread: 70,
      colors: ["#10B981", "#34D399", "#6EE7B7"]
    });
  };

  return (
    <section className="py-24 bg-gray-50/50 border-t border-gray-100 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">Automated Onboarding</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Paperless Digital Onboarding</h2>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Turn a tedious Day 1 into a delightful welcome experience. Automate the entire journey from &quot;Candidate&quot; to &quot;Employee&quot;.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`
                    group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer
                    ${isActive 
                      ? 'bg-white border-green-200 shadow-md shadow-green-600/5 scale-[1.02]' 
                      : 'bg-white/40 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-sm'
                    }
                  `}
                >
                  {/* Step Icon Indicator */}
                  <div className="relative flex flex-col items-center">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300
                      ${isActive 
                        ? 'bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/30' 
                        : isCompleted
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                          : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600'
                      }
                    `}>
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                    </div>
                    {/* Vertical Connector line */}
                    {index < steps.length - 1 && (
                      <div className={`
                        w-0.5 h-12 mt-4 -mb-8 transition-colors duration-300
                        ${isCompleted ? 'bg-emerald-300' : 'bg-slate-100'}
                      `}></div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md ${
                        isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className={`font-bold text-base transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Fidelity Mockup Container */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col justify-between min-h-[480px] h-full relative overflow-hidden">
              
              {/* Header bar of mockup */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] text-slate-500 font-mono ml-2">portal.hrniti.com/onboard</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-md text-[10px] font-mono text-emerald-400">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>SSL SECURE</span>
                </div>
              </div>

              {/* Dynamic Content based on activeStep */}
              <div className="flex-1 flex flex-col justify-center z-10">
                
                {/* STEP 0: OFFER ACCEPTANCE MOCKUP */}
                {activeStep === 0 && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-emerald-400" />
                          <span className="font-bold text-sm text-slate-200">Employment Offer Letter</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">PDF v1.4</span>
                      </div>
                      
                      <div className="space-y-1.5 text-xs text-slate-400 border-t border-slate-800/50 pt-3">
                        <p><strong className="text-slate-300">Candidate Name:</strong> Aarav Sharma</p>
                        <p><strong className="text-slate-300">Designation:</strong> Software Engineer</p>
                        <p><strong className="text-slate-300">Joining Date:</strong> July 15, 2026</p>
                        <p><strong className="text-slate-300">CTC Offered:</strong> INR 12,500,000 per annum</p>
                      </div>

                      {/* Signature Field */}
                      <div className="bg-slate-900 border border-dashed border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center min-h-[90px] relative transition-all duration-300">
                        {isSigned ? (
                          <div className="text-center animate-scale-up">
                            <span className="text-2xl text-emerald-400 block tracking-widest rotate-[-3deg] font-semibold italic">Aarav Sharma</span>
                            <span className="text-[9px] text-slate-500 font-mono mt-1 block">Signed digitally • {new Date().toLocaleDateString()}</span>
                          </div>
                        ) : (
                          <div className="text-center text-slate-500 space-y-1.5 cursor-pointer" onClick={handleSignOffer}>
                            <p className="text-xs font-semibold">Sign Digitally Here</p>
                            <p className="text-[9px] text-slate-600">Click the button below to sign this offer</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleSignOffer}
                      disabled={isSigned}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white disabled:text-slate-500 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/10 transition-all cursor-pointer"
                    >
                      {isSigned ? "Offer Accepted Successfully!" : "Accept & Sign Offer Letter"}
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* STEP 1: DOC UPLOAD MOCKUP */}
                {activeStep === 1 && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-slate-200">KYC & Certificate Uploads</span>
                        <span className="text-[10px] text-slate-400">Allowed: PDF, JPG (Max 5MB)</span>
                      </div>

                      <div className="space-y-2.5">
                        {/* Aadhar (Complete) */}
                        <div className="bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-slate-300 font-medium">Aadhar_Card.pdf</span>
                          </div>
                          <div className="flex items-center gap-1 text-emerald-400 font-mono text-[10px]">
                            <Check className="w-3.5 h-3.5" />
                            <span>100%</span>
                          </div>
                        </div>

                        {/* PAN Card (Complete) */}
                        <div className="bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-slate-300 font-medium">PAN_Card.pdf</span>
                          </div>
                          <div className="flex items-center gap-1 text-emerald-400 font-mono text-[10px]">
                            <Check className="w-3.5 h-3.5" />
                            <span>100%</span>
                          </div>
                        </div>

                        {/* Graduation Degree (In Progress / Completed) */}
                        <div className="bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 flex flex-col gap-2 text-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-amber-400" />
                              <span className="text-slate-300 font-medium">Graduation_Degree.pdf</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-300 ${isUploadComplete ? 'bg-emerald-500' : 'bg-amber-500'}`}
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSimulateUpload}
                      disabled={isUploadComplete}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white disabled:text-slate-500 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/10 transition-all cursor-pointer"
                    >
                      {isUploadComplete ? "All Documents Uploaded!" : "Simulate Document Upload Progress"}
                      <Upload className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* STEP 2: VERIFICATION MOCKUP */}
                {activeStep === 2 && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-slate-200">Compliance & verification checks</span>
                        {verificationStatus === 'verified' ? (
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold font-mono">PASSED</span>
                        ) : (
                          <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-bold font-mono">COMPLIANCE QUEUE</span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {/* Check 1 */}
                        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">Aadhar KYC check</span>
                          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">VERIFIED</span>
                        </div>
                        {/* Check 2 */}
                        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">PAN Verification</span>
                          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">VERIFIED</span>
                        </div>
                        {/* Check 3 */}
                        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between col-span-2">
                          <span className="text-slate-300">Prior Work Verification API</span>
                          {verificationStatus === 'verified' ? (
                            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">VERIFIED</span>
                          ) : verificationStatus === 'verifying' ? (
                            <span className="text-[10px] text-amber-400 font-mono flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 animate-spin" />
                              <span>CHECKING...</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-500 font-mono">PENDING QUEUE</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSimulateVerification}
                      disabled={verificationStatus !== 'pending'}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white disabled:text-slate-500 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/10 transition-all cursor-pointer"
                    >
                      {verificationStatus === 'verified' 
                        ? "Verification Completed!" 
                        : verificationStatus === 'verifying'
                          ? "Running verification algorithms..."
                          : "Run Automated Verification APIs"
                      }
                      <Fingerprint className="w-4 h-4 animate-pulse" />
                    </button>
                  </div>
                )}

                {/* STEP 3: READY TO WORK MOCKUP */}
                {activeStep === 3 && (
                  <div className="space-y-5 animate-fade-in flex flex-col items-center">
                    {/* Badge UI Card */}
                    <div className="bg-gradient-to-b from-slate-800 to-slate-950 p-6 rounded-2xl border border-slate-700/60 shadow-xl max-w-sm w-full flex flex-col items-center relative overflow-hidden">
                      {/* Top ribbon glow */}
                      <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
                      
                      {/* Logo header */}
                      <div className="text-[10px] font-black text-emerald-400 tracking-widest uppercase mb-4">HR NITI ID</div>

                      {/* Photo Placeholder */}
                      <div className={`
                        w-20 h-20 rounded-full border-4 flex items-center justify-center text-white relative transition-all duration-500
                        ${isBadgeActivated 
                          ? 'bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-105' 
                          : 'bg-slate-900 border-slate-800'
                        }
                      `}>
                        <User className={`w-8 h-8 ${isBadgeActivated ? 'text-emerald-400' : 'text-slate-650'}`} />
                        {isBadgeActivated && (
                          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 rounded-full p-1 animate-scale-up">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      {/* Employee details */}
                      <div className="text-center mt-4 space-y-1">
                        <h4 className="font-bold text-sm text-slate-200">Aarav Sharma</h4>
                        <p className="text-[10px] text-slate-500 font-medium">Software Engineer • Engineering</p>
                      </div>

                      {/* Barcode representation */}
                      <div className="mt-5 space-y-1 w-full flex flex-col items-center border-t border-slate-900 pt-4">
                        <div className="flex gap-0.5 justify-center items-stretch h-6 w-32 opacity-70">
                          {[1,2,1,3,1,4,1,2,1,3,2,1,4,1,2].map((w, i) => (
                            <div key={i} className="bg-slate-450" style={{ width: `${w}px` }}></div>
                          ))}
                        </div>
                        <span className="text-[8px] font-mono text-slate-500">ID: HRN-2026-042</span>
                      </div>
                    </div>

                    <button
                      onClick={handleActivateBadge}
                      disabled={isBadgeActivated}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white disabled:text-slate-500 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/10 transition-all cursor-pointer"
                    >
                      {isBadgeActivated ? "Employee Account Activated!" : "Activate Employee ID & System Accounts"}
                      <UserCheck className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>

              {/* Bottom detail text */}
              <div className="text-center text-[10px] text-slate-400 border-t border-slate-800/50 pt-4 mt-6 z-10">
                {steps[activeStep].details}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
