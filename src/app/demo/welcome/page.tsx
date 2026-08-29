"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  CheckCircle2, 
  Building, 
  Mail, 
  Lock, 
  Download, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Home,
  Copy,
  Check
} from "lucide-react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

function WelcomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // 1. Try reading from sessionStorage
    const stored = typeof window !== "undefined" ? sessionStorage.getItem("demo_credentials") : null;
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.company) setCompany(parsed.company);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.password) setPassword(parsed.password);
        if (parsed.plan) setPlan(parsed.plan);
        if (parsed.teamSize) setTeamSize(parsed.teamSize);
      } catch (e) {
        console.error("Failed to parse stored credentials:", e);
      }
    }

    // 2. Fallback to URL search params if present
    if (searchParams) {
      const pCompany = searchParams.get("company");
      const pEmail = searchParams.get("email");
      const pPass = searchParams.get("password");
      const pPlan = searchParams.get("plan");
      const pTeam = searchParams.get("team_size");

      if (pCompany) setCompany(pCompany);
      if (pEmail) setEmail(pEmail);
      if (pPass) setPassword(pPass);
      if (pPlan) setPlan(pPlan);
      if (pTeam) setTeamSize(pTeam);
    }
  }, [searchParams]);

  const handleCopyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("welcome-credentials-card");
    if (!element) return;
    try {
      const imgData = await toPng(element, { pixelRatio: 3, backgroundColor: "#ffffff" });
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(22);
      pdf.setTextColor(15, 23, 42);
      pdf.text("Welcome to Your HRMS Portal", pdf.internal.pageSize.getWidth() / 2, 28, { align: "center" });
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      pdf.setTextColor(100, 116, 139);
      pdf.text("Your dedicated workspace credentials have been successfully activated.", pdf.internal.pageSize.getWidth() / 2, 36, { align: "center" });
      const props = pdf.getImageProperties(imgData);
      const margin = 20;
      const pdfWidth = pdf.internal.pageSize.getWidth() - (margin * 2);
      const pdfHeight = (props.height * pdfWidth) / props.width;
      pdf.addImage(imgData, "PNG", margin, 48, pdfWidth, pdfHeight);
      pdf.save((company || "HRMS").replace(/\s+/g, "_") + "_Account_Details.pdf");
    } catch (e) {
      console.error("PDF generation error:", e);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      
      {/* Header Badge */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10 border border-emerald-100 animate-bounce">
          <CheckCircle2 className="w-11 h-11" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Registration Successful</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
          Welcome to Your Workspace!
        </h1>
        
        <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
          Your interactive demo portal has been created and configured with full access. Save your admin credentials below.
        </p>
      </div>

      {/* CREDENTIALS CARD */}
      <div 
        id="welcome-credentials-card"
        className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/60 border border-slate-200/90 mb-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-black text-slate-900">Admin Account Credentials</h3>
            <p className="text-xs text-slate-400 font-medium">Use these details to access your portal</p>
          </div>
          {plan && (
            <span className="text-xs font-black px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 capitalize">
              {plan} Plan {teamSize ? `(${teamSize} Users)` : ""}
            </span>
          )}
        </div>

        <div className="space-y-4">
          
          {/* Company */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
              <Building className="w-4 h-4 text-indigo-600" />
              Company Workspace
            </span>
            <span className="text-xs font-black text-slate-900">{company || "HRMS Portal"}</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-600" />
              Admin Email ID
            </span>
            <span className="text-xs font-black text-slate-900">{email || "admin@company.com"}</span>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-600" />
              Initial Password
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                {password || "????????"}
              </span>
              {password && (
                <button
                  type="button"
                  onClick={handleCopyPassword}
                  className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 transition-all cursor-pointer"
                  title="Copy password"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-slate-100 text-center text-[10px] font-bold text-slate-500">
          <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>14 Days Full Access</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Encrypted Environment</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Instant Activation</span>
          </div>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <button
          type="button"
          onClick={handleDownloadPDF}
          className="py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-xl transition-all cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download Credentials PDF</span>
        </button>

        <Link
          href="/"
          className="py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all text-center"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

    </div>
  );
}

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div className="text-center py-20 font-bold text-slate-400">Loading confirmation...</div>}>
          <WelcomeContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
