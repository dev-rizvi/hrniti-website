"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Check, 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck, 
  Zap, 
  Layers, 
  Info, 
  ArrowRight, 
  TrendingUp, 
  X, 
  HelpCircle, 
  Package as PackageIcon, 
  User, 
  Mail, 
  Phone, 
  Send, 
  Download, 
  CheckCircle2, 
  Lock, 
  Building, 
  ExternalLink,
  Users,
  Sliders,
  CreditCard,
  Clock,
  Award,
  Star,
  CheckCheck,
  Plus,
  Minus
} from "lucide-react";
import { createContactInquiry, validateContactInquiry, createDemoSubscription } from "./actions";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import Script from "next/script";

export interface AddonModule {
  id: string;
  name: string;
  badge?: string;
  desc: string;
  price_per_user?: number;
  pricePerUser?: number;
  category: string;
}

const DEFAULT_ADDONS: AddonModule[] = [
  { id: "pms_standard", name: "PMS Standard", badge: "PUPM", desc: "Goals, reviews, appraisals ? per user per month", price_per_user: 35, category: "performance" },
  { id: "pms_advanced", name: "PMS Advanced", badge: "PUPM", desc: "Full performance suite ? included on Premium", price_per_user: 45, category: "performance" },
  { id: "timesheets", name: "Time Sheets", badge: "PUPM", desc: "Project-level time tracking ? included on Premium", price_per_user: 35, category: "attendance" },
  { id: "geomark_plus", name: "GeoMark+", badge: "PUPM", desc: "Map-based geo-fenced attendance ? included on Premium", price_per_user: 50, category: "attendance" },
  { id: "gps_live", name: "GPS Live Tracking", badge: "PUPM", desc: "Real-time field-employee tracking (includes GeoMark)", price_per_user: 140, category: "attendance" },
  { id: "expense_claims", name: "Expense & Claims", badge: "PUPM", desc: "Multi-level approvals, receipt OCR & reimbursements", price_per_user: 30, category: "hr_expense" },
  { id: "recruitment_ats", name: "Recruitment & ATS", badge: "PUPM", desc: "Candidate funnel, job portals, digital offer letters", price_per_user: 40, category: "hr_expense" },
  { id: "biometric_sync", name: "Biometric API Sync", badge: "PUPM", desc: "Direct integration with Essl, ZKTeco & Matrix devices", price_per_user: 25, category: "integration" }
];

const PRESET_TEAMS = [
  { label: "10-25", value: 25, sub: "Small team" },
  { label: "50", value: 50, sub: "Standard" },
  { label: "100", value: 100, sub: "Growing" },
  { label: "250", value: 250, sub: "Mid-size" },
  { label: "500", value: 500, sub: "Scaling" },
  { label: "1,000+", value: 1000, sub: "Enterprise" }
];

const STEPS = [
  { step: 1, title: "Team Size", desc: "Employees count" },
  { step: 2, title: "Base Plan", desc: "Core package" },
  { step: 3, title: "Add-ons", desc: "Modular features" },
  { step: 4, title: "Your Details", desc: "Instant activation" }
];

interface PricingCalculatorProps {
  packages?: any[];
  initialAddons?: AddonModule[];
  currencySymbol?: string;
  demoDays?: number;
  razorpayEnabled?: boolean;
  razorpayKey?: string | null;
}

export default function PricingCalculator({
  packages = [],
  initialAddons = [],
  currencySymbol = "₹",
  demoDays = 14,
  razorpayEnabled = false,
  razorpayKey = null
}: PricingCalculatorProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlPackageParam = searchParams ? (searchParams.get("package") || searchParams.get("plan")) : null;

  const addonsList: AddonModule[] = useMemo(() => {
    if (initialAddons && initialAddons.length > 0) {
      return initialAddons.map(a => ({
        ...a,
        price_per_user: typeof a.price_per_user !== "undefined" ? Number(a.price_per_user) : (typeof a.pricePerUser !== "undefined" ? Number(a.pricePerUser) : 0),
        badge: a.badge || "PUPM",
        category: a.category || "all"
      }));
    }
    return DEFAULT_ADDONS;
  }, [initialAddons]);

  const planList = useMemo(() => {
    if (packages && packages.length > 0) {
      return packages.map(pkg => {
        const monthly = Number(pkg.discounted_monthly_price ?? pkg.monthly_price ?? 2495);
        const yearly = Number(pkg.discounted_yearly_price ?? pkg.yearly_price ?? (monthly * 12));
        const overage = typeof pkg.price_per_employee !== "undefined" && Number(pkg.price_per_employee) > 0
          ? Number(pkg.price_per_employee)
          : (pkg.name.toLowerCase().includes("growth") ? 85 : pkg.name.toLowerCase().includes("essential") ? 45 : 30);

        return {
          id: pkg.id?.toString() || pkg.name.toLowerCase(),
          raw_db_id: pkg.id,
          name: pkg.name,
          description: pkg.description || "Comprehensive HR & operations management suite.",
          monthlyPrice: monthly,
          yearlyPrice: yearly,
          maxEmployees: Number(pkg.max_employees) || 50,
          perEmpOverage: overage,
          isPopular: pkg.name.toLowerCase().includes("growth") || pkg.name.toLowerCase().includes("pro") || pkg.name.toLowerCase().includes("standard"),
          isCustomQuote: pkg.name.toLowerCase().includes("enterprise") || pkg.name.toLowerCase().includes("quote"),
          features: pkg.features || []
        };
      });
    }
    return [
      { id: "essential", raw_db_id: 2, name: "Essential", description: "Payroll, leave, core HR basics.", monthlyPrice: 2495, yearlyPrice: 25449, maxEmployees: 50, perEmpOverage: 45, isPopular: false, isCustomQuote: false, features: [] },
      { id: "growth", raw_db_id: 3, name: "Growth", description: "Advanced attendance, shifts & core HR.", monthlyPrice: 4495, yearlyPrice: 45849, maxEmployees: 50, perEmpOverage: 85, isPopular: true, isCustomQuote: false, features: [] },
      { id: "premium", raw_db_id: 4, name: "Premium", description: "Full suite with PMS & live tracking.", monthlyPrice: 7995, yearlyPrice: 81549, maxEmployees: 50, perEmpOverage: 110, isPopular: false, isCustomQuote: true, features: [] }
    ];
  }, [packages]);

  // Step Wizard State: 1 (Team Size), 2 (Plan), 3 (Addons), 4 (Form/Details)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [teamSize, setTeamSize] = useState<number>(25);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");

  // Select package from URL param, then cleanly remove ?package=... from browser address bar
  useEffect(() => {
    if (planList.length > 0) {
      if (urlPackageParam) {
        const found = planList.find(p => p.id === urlPackageParam || p.raw_db_id?.toString() === urlPackageParam || p.name.toLowerCase() === urlPackageParam.toLowerCase());
        if (found) {
          setSelectedPlanId(found.id);
          // Hide/clean query param from address bar without reloading
          if (typeof window !== "undefined") {
            window.history.replaceState(null, "", window.location.pathname);
          }
          return;
        }
      }
      if (!selectedPlanId) {
        const popularOrFirst = planList.find(p => p.isPopular) || planList[0];
        setSelectedPlanId(popularOrFirst.id);
      }
    }
  }, [planList, urlPackageParam, selectedPlanId]);

  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeAction, setActiveAction] = useState<"demo" | "buy" | null>(null);
  const [successData, setSuccessData] = useState<any>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const currentPlan = useMemo(() => {
    return planList.find(p => p.id === selectedPlanId) || planList[0];
  }, [planList, selectedPlanId]);

  const packageIncludedFeatureKeys = useMemo(() => {
    const included = new Set<string>();

    if (currentPlan?.features && Array.isArray(currentPlan.features)) {
      currentPlan.features.forEach((f: any) => {
        if (f.slug) included.add(f.slug.toLowerCase());
        if (f.name) included.add(f.name.toLowerCase());
        if (f.id) included.add(f.id.toString());
      });
    }

    return included;
  }, [currentPlan]);

  useEffect(() => {
    setSelectedAddonIds(prev => {
      return prev.filter(id => {
        const addon = addonsList.find(a => a.id === id);
        if (!addon) return false;
        const idLower = (addon.id || "").toLowerCase();
        const nameLower = (addon.name || "").toLowerCase();
        return !packageIncludedFeatureKeys.has(idLower) && !packageIncludedFeatureKeys.has(nameLower);
      });
    });
  }, [packageIncludedFeatureKeys, addonsList]);

  const availableAddons = useMemo(() => {
    return addonsList.filter(addon => {
      const idLower = (addon.id || "").toLowerCase();
      const nameLower = (addon.name || "").toLowerCase();
      if (packageIncludedFeatureKeys.has(idLower) || packageIncludedFeatureKeys.has(nameLower)) {
        return false;
      }
      return true;
    });
  }, [addonsList, packageIncludedFeatureKeys]);

  const filteredAddons = useMemo(() => {
    if (activeTab === "all") return availableAddons;
    return availableAddons.filter(m => {
      const cat = (m.category || "").toLowerCase();
      if (activeTab === "hr_expense") return cat === "hr_expense" || cat === "hr" || cat === "finance" || cat.includes("expense");
      return cat === activeTab.toLowerCase() || cat.includes(activeTab.toLowerCase());
    });
  }, [activeTab, availableAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleEmployeeChange = (val: number) => {
    const clamped = Math.max(1, Math.min(10000, val || 1));
    setTeamSize(clamped);
  };

  const handleIncrement = (amount: number = 1) => {
    setTeamSize(prev => Math.min(10000, prev + amount));
  };

  const handleDecrement = (amount: number = 1) => {
    setTeamSize(prev => Math.max(1, prev - amount));
  };

  const selectedAddonsBreakdown = useMemo(() => {
    return selectedAddonIds.map(id => {
      const addon = addonsList.find(m => m.id === id);
      if (!addon) return null;
      const rate = Number(addon.price_per_user ?? 0);
      const itemTotal = rate * teamSize;
      return {
        id: addon.id,
        name: addon.name,
        rate,
        itemTotal,
        teamSize
      };
    }).filter(Boolean) as { id: string; name: string; rate: number; itemTotal: number; teamSize: number }[];
  }, [selectedAddonIds, addonsList, teamSize]);

  const calculations = useMemo(() => {
    if (!currentPlan) {
      return { 
        basePrice: 0, 
        baseSlots: 50, 
        extraEmpCount: 0, 
        extraEmpCost: 0, 
        planSubtotal: 0, 
        addonsTotal: 0, 
        finalDisplayTotal: 0, 
        effectivePerEmpYear: "0.0",
        effectivePerEmpMonth: "0.0"
      };
    }

    const basePrice = currentPlan.yearlyPrice;
    const baseSlots = currentPlan.maxEmployees > 0 ? currentPlan.maxEmployees : 50;
    const extraEmpCount = Math.max(0, teamSize - baseSlots);
    const extraPerEmpRate = currentPlan.perEmpOverage || 0;
    const extraEmpCost = extraEmpCount * extraPerEmpRate;
    const planSubtotal = basePrice + extraEmpCost;

    const addonsTotal = selectedAddonsBreakdown.reduce((sum, item) => sum + item.itemTotal, 0);
    const finalDisplayTotal = planSubtotal + addonsTotal;
    const effectivePerEmpYear = (finalDisplayTotal / (teamSize || 1)).toFixed(0);
    const effectivePerEmpMonth = ((finalDisplayTotal / 12) / (teamSize || 1)).toFixed(1);

    return { 
      basePrice, 
      baseSlots, 
      extraEmpCount, 
      extraEmpCost, 
      planSubtotal, 
      addonsTotal, 
      finalDisplayTotal, 
      effectivePerEmpYear,
      effectivePerEmpMonth
    };
  }, [teamSize, currentPlan, selectedAddonsBreakdown]);

  const coveredModulesList = useMemo(() => {
    const list: { name: string; isAddon: boolean; badge?: string }[] = [];
    const addedNames = new Set<string>();

    if (currentPlan?.features && Array.isArray(currentPlan.features) && currentPlan.features.length > 0) {
      currentPlan.features.forEach((f: any) => {
        const name = f.name || f.slug;
        if (name && !addedNames.has(name.toLowerCase())) {
          list.push({ name, isAddon: false });
          addedNames.add(name.toLowerCase());
        }
      });
    }

    selectedAddonIds.forEach(id => {
      const addon = addonsList.find(a => a.id === id);
      if (addon && !addedNames.has(addon.name.toLowerCase())) {
        list.push({ name: addon.name, isAddon: true, badge: "Add-on" });
        addedNames.add(addon.name.toLowerCase());
      }
    });

    return list;
  }, [currentPlan, selectedAddonIds, addonsList]);

  const handleProceed = async (type: "demo" | "buy") => {
    setFormError(null);
    setFieldErrors({});

    const errors: Record<string, string[]> = {};
    if (!fullName.trim()) errors.name = ["Please enter your full name."];
    if (!email.trim()) errors.email = ["Please enter a valid work email."];
    if (!phone.trim()) errors.phone = ["Please enter your contact phone number."];

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormError("Please provide your contact information to set up your account.");
      return;
    }

    setIsLoading(true);
    setActiveAction(type);

    const formData = new FormData();
    formData.append("name", fullName.trim());
    formData.append("email", email.trim());
    formData.append("phone", phone.trim());
    formData.append("package", (currentPlan?.raw_db_id || currentPlan?.id || "").toString());
    formData.append("billing", type === "demo" ? "yearly_autopay" : "yearly");
    formData.append("trial_days", type === "demo" ? "7" : "0");
    formData.append("is_autopay", type === "demo" ? "true" : "false");
    formData.append("team_size", teamSize.toString());
    formData.append("selected_addons", JSON.stringify(selectedAddonIds));
    formData.append("estimated_total", calculations.finalDisplayTotal.toString());

    // 1. AUTO-PAY MANDATE FLOW FOR 7-DAY FREE TRIAL
    if (type === "demo") {
      if (razorpayEnabled && razorpayKey) {
        const validation = await validateContactInquiry(formData);
        if (!validation.success) {
          if (validation.fieldErrors) setFieldErrors(validation.fieldErrors);
          setFormError(validation.error || "Validation failed. Please verify your details.");
          setIsLoading(false);
          setActiveAction(null);
          return;
        }

        try {
          const subRes = await createDemoSubscription(formData);
          if (subRes && subRes.success && subRes.subscription_id) {
            formData.append("razorpay_subscription_id", subRes.subscription_id);

            if ((window as any).Razorpay) {
              const options = {
                key: subRes.razorpay_key || razorpayKey,
                subscription_id: subRes.subscription_id,
                name: "HR Niti HRMS",
                description: "7-Day Free Trial + Yearly Auto-Pay (" + currentPlan?.name + ")",
                handler: async function (response: any) {
                  if (response.razorpay_payment_id) formData.append("razorpay_payment_id", response.razorpay_payment_id);
                  if (response.razorpay_subscription_id) formData.append("razorpay_subscription_id", response.razorpay_subscription_id);
                  if (response.razorpay_signature) formData.append("razorpay_signature", response.razorpay_signature);
                  executeCreation(formData);
                },
                prefill: { name: fullName, email: email, contact: phone },
                theme: { color: "#4f46e5" },
                modal: { 
                  ondismiss: () => {
                    setIsLoading(false);
                    setActiveAction(null);
                  }
                }
              };

              try {
                const rzp = new (window as any).Razorpay(options);
                rzp.on("payment.failed", (resp: any) => {
                  console.warn("Razorpay mandate popup warning:", resp);
                  // Fallback: Proceed with created trial subscription
                  executeCreation(formData);
                });
                rzp.open();
                return;
              } catch (rzpOpenErr) {
                console.warn("Razorpay iframe blocked by browser, continuing direct creation:", rzpOpenErr);
              }
            }
          }
        } catch (subErr) {
          console.warn("Auto-Pay subscription creation error:", subErr);
        }
      }

      // Proceed with 7-Day trial workspace setup
      executeCreation(formData);
      return;
    }

    // 2. DIRECT ONE-TIME YEARLY PURCHASE FLOW
    if (type === "buy" && razorpayEnabled && razorpayKey) {
      const validation = await validateContactInquiry(formData);
      if (!validation.success) {
        if (validation.fieldErrors) setFieldErrors(validation.fieldErrors);
        setFormError(validation.error || "Validation failed. Please verify your details.");
        setIsLoading(false);
        setActiveAction(null);
        return;
      }

      if (!(window as any).Razorpay) {
        setFormError("Payment gateway is loading. Please retry in a few seconds.");
        setIsLoading(false);
        setActiveAction(null);
        return;
      }

      const amountInPaise = Math.round(calculations.finalDisplayTotal * 100);
      const options = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: "INR",
        name: "HR Niti HRMS",
        description: "Yearly Plan: " + currentPlan?.name + " (" + teamSize + " Employees)",
        handler: async function (response: any) {
          formData.append("razorpay_payment_id", response.razorpay_payment_id);
          executeCreation(formData);
        },
        prefill: { name: fullName, email: email, contact: phone },
        theme: { color: "#4f46e5" },
        modal: { 
          ondismiss: () => {
            setIsLoading(false);
            setActiveAction(null);
          }
        }
      };

      try {
        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", (resp: any) => {
          setFormError("Payment failed: " + resp.error.description);
          setIsLoading(false);
          setActiveAction(null);
        });
        rzp.open();
      } catch (err) {
        setFormError("Unable to open payment modal: " + String(err));
        setIsLoading(false);
        setActiveAction(null);
      }
    } else {
      executeCreation(formData);
    }
  };

  const executeCreation = async (formData: FormData) => {
    const res = await createContactInquiry(formData);
    if (res.success) {
      const creds = {
        ...res.credentials,
        plan: currentPlan?.name || "Standard",
        teamSize: teamSize.toString()
      };
      
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("demo_credentials", JSON.stringify(creds));
        } catch (e) {
          console.error("Storage error:", e);
        }
      }

      // Reset form state completely
      setFullName("");
      setEmail("");
      setPhone("");
      setSelectedAddonIds([]);
      setFieldErrors({});
      setFormError(null);
      setCurrentStep(1);

      // Redirect to welcome confirmation page
      router.push("/demo/welcome");
    } else {
      if (res.fieldErrors) setFieldErrors(res.fieldErrors);
      setFormError(res.error || "Registration failed. Please try again.");
    }
    setIsLoading(false);
    setActiveAction(null);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("credentials-card");
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
      pdf.text("Your admin login credentials and workspace link are below.", pdf.internal.pageSize.getWidth() / 2, 36, { align: "center" });
      const props = pdf.getImageProperties(imgData);
      const margin = 20;
      const pdfWidth = pdf.internal.pageSize.getWidth() - (margin * 2);
      const pdfHeight = (props.height * pdfWidth) / props.width;
      pdf.addImage(imgData, "PNG", margin, 48, pdfWidth, pdfHeight);
      pdf.save((successData?.company || "HRMS").replace(/\s+/g, "_") + "_Login_Credentials.pdf");
    } catch (e) {
      console.error("PDF generation error:", e);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-4 font-sans text-slate-800">
      {razorpayEnabled && (
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      )}

      {/* CREDENTIALS SUCCESS MODAL */}
      {successData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-500/10 border border-emerald-100">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Your Portal Is Ready!</h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Workspace activated for <span className="font-extrabold text-indigo-600">{currentPlan?.name} Plan</span> ({teamSize} Employees).
              </p>
            </div>

            <div id="credentials-card" className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 mb-6 space-y-3">
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/70">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-indigo-600" /> Company</span>
                <span className="text-xs font-black text-slate-900">{successData.company}</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/70">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-indigo-600" /> Admin Email</span>
                <span className="text-xs font-black text-slate-900">{successData.email}</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/70">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-indigo-600" /> Password</span>
                <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">{successData.password}</span>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleDownloadPDF}
                className="py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button
                type="button"
                onClick={() => setSuccessData(null)}
                className="py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= LEFT COLUMN: STEP-BY-STEP MULTI-STEP WIZARD ================= */}
        <div className="lg:col-span-7 space-y-6">

          {/* STEPPER PROGRESS BAR */}
          <div className="bg-white rounded-3xl p-4 md:p-5 shadow-xs border border-slate-200/80">
            <div className="grid grid-cols-4 gap-2">
              {STEPS.map((s) => {
                const isActive = currentStep === s.step;
                const isCompleted = currentStep > s.step;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setCurrentStep(s.step)}
                    className={"flex flex-col items-center text-center p-2 rounded-2xl transition-all cursor-pointer " + (
                      isActive 
                        ? "bg-indigo-50 border border-indigo-200 text-indigo-900 shadow-xs" 
                        : isCompleted
                        ? "bg-emerald-50/60 border border-emerald-100 text-slate-700 hover:bg-emerald-50"
                        : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                    )}
                  >
                    <div className={"w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-1 transition-all " + (
                      isActive
                        ? "bg-indigo-600 text-white shadow-xs"
                        : isCompleted
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-200 text-slate-600"
                    )}>
                      {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : s.step}
                    </div>
                    <span className={"text-xs font-black tracking-tight line-clamp-1 " + (isActive ? "text-indigo-950" : isCompleted ? "text-slate-800" : "text-slate-500")}>
                      {s.title}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-400 hidden sm:block">
                      {s.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 1: TEAM SIZE */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/90 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 font-black text-sm flex items-center justify-center border border-indigo-100 shadow-xs">
                    1
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">How many employees in your team?</h3>
                    <p className="text-xs text-slate-500 font-medium">Type number directly, click presets, or use +/- buttons</p>
                  </div>
                </div>

                {/* Direct Employee Number Input with Stepper */}
                <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-xs">
                  <button
                    type="button"
                    onClick={() => handleDecrement(teamSize > 100 ? 5 : 1)}
                    disabled={teamSize <= 1}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 active:scale-95 text-slate-700 font-black flex items-center justify-center border border-slate-200 shadow-xs transition-all disabled:opacity-30 cursor-pointer"
                    title="Decrease employee count"
                  >
                    <Minus className="w-3.5 h-3.5 stroke-[3]" />
                  </button>

                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      value={teamSize}
                      onChange={(e) => handleEmployeeChange(parseInt(e.target.value))}
                      className="w-20 text-center py-1 bg-white font-black text-base text-indigo-700 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none shadow-inner"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => handleIncrement(teamSize >= 100 ? 5 : 1)}
                    className="w-8 h-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black flex items-center justify-center shadow-sm shadow-indigo-600/20 transition-all cursor-pointer"
                    title="Increase employee count"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                </div>
              </div>

              {/* Quick Presets */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2.5">
                  Popular Team Sizes
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {PRESET_TEAMS.map((preset) => {
                    const isSelected = teamSize === preset.value;
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => setTeamSize(preset.value)}
                        className={"flex flex-col items-center justify-center py-3 px-1 rounded-2xl border transition-all duration-150 cursor-pointer " + (
                          isSelected 
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm shadow-slate-900/20 scale-[1.02]" 
                            : "bg-slate-50/70 text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30"
                        )}
                      >
                        <span className={"text-sm font-black " + (isSelected ? "text-white" : "text-slate-900")}>
                          {preset.label}
                        </span>
                        <span className={"text-[10px] font-semibold " + (isSelected ? "text-slate-300" : "text-slate-400")}>
                          {preset.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Smooth Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Fine-tune slider</span>
                  <span className="text-indigo-600 font-extrabold">{teamSize} Employees</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="2500"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>1 Employee</span>
                  <span>100</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>2,500+</span>
                </div>
              </div>

              {/* Step 1 Next Button */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-2 shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Continue to Base Plan</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT BASE PLAN */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/90 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <span className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 font-black text-sm flex items-center justify-center border border-indigo-100 shadow-xs">
                  2
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Choose your base plan</h3>
                  <p className="text-xs text-slate-500 font-medium">All plans include comprehensive core HR and annual billing discounts</p>
                </div>
              </div>

              <div className="space-y-3">
                {planList.map((plan) => {
                  const isSelected = selectedPlanId === plan.id;
                  return (
                    <div 
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={"p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative " + (
                        isSelected
                          ? "border-indigo-600 bg-indigo-50/25 shadow-md shadow-indigo-600/5 ring-1 ring-indigo-600"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      )}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-3">
                        <div className="flex items-start gap-3.5">
                          <div className={"w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 " + (
                            isSelected ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 bg-white"
                          )}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-black text-slate-900 capitalize">{plan.name}</h4>
                              {plan.isPopular && (
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-indigo-600 to-purple-600 text-white uppercase tracking-wider shadow-xs">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 font-medium mt-1 max-w-md leading-relaxed">
                              {plan.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2.5">
                              <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                                {plan.maxEmployees} base employees included
                              </span>
                              {plan.perEmpOverage > 0 && (
                                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                                  +{currencySymbol}{plan.perEmpOverage}/emp above {plan.maxEmployees}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="text-right pl-6">
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ANNUAL</div>
                          <div className="text-lg font-black text-slate-900">
                            {currencySymbol}{plan.yearlyPrice.toLocaleString()}
                            <span className="text-xs font-semibold text-slate-500 font-normal"> /year</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step 2 Back & Next Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[3]" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-2 shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Continue to Add-ons</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CUSTOMIZE MODULAR ADD-ONS */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/90 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 font-black text-sm flex items-center justify-center border border-indigo-100 shadow-xs">
                    3
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Customize modular add-ons</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Features in <span className="font-bold text-indigo-600">{currentPlan?.name}</span> are bundled. Add any extras below:
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                  {selectedAddonIds.length} Selected
                </span>
              </div>

              {/* Category Filter Pills */}
              {availableAddons.length > 0 && (
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3 overflow-x-auto scrollbar-none text-xs font-bold">
                  {[
                    { id: "all", label: "All Available" },
                    { id: "hr_expense", label: "HR & Finance" },
                    { id: "performance", label: "Performance (PMS)" },
                    { id: "attendance", label: "Attendance & GPS" },
                    { id: "integration", label: "Integrations" }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={"py-1.5 px-3 rounded-full transition-all cursor-pointer " + (
                        activeTab === tab.id
                          ? "bg-slate-900 text-white font-black shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Addon Items Grid */}
              {filteredAddons.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredAddons.map(addon => {
                    const isChecked = selectedAddonIds.includes(addon.id);
                    const price = Number(addon.price_per_user ?? 0);
                    return (
                      <label
                        key={addon.id}
                        className={"flex items-start justify-between p-3.5 rounded-2xl border cursor-pointer transition-all duration-150 select-none " + (
                          isChecked 
                            ? "border-indigo-600 bg-indigo-50/25 shadow-xs" 
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/40"
                        )}
                      >
                        <div className="flex items-start gap-2.5 pr-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleAddon(addon.id)}
                            className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 cursor-pointer accent-indigo-600"
                          />
                          <div>
                            <div className="text-xs font-black text-slate-900">{addon.name}</div>
                            <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-2">{addon.desc}</p>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                            {price === 0 ? "Included" : (currencySymbol + price + "/mo")}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-1.5" />
                  <p className="text-xs font-black text-slate-800">All modules in this category are bundled with your {currentPlan?.name} plan!</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">You have full access to these features at no extra addon cost.</p>
                </div>
              )}

              {/* Step 3 Back & Next Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[3]" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-2 shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Continue to Your Details</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT INFORMATION & INSTANT ACTIVATION */}
          {currentStep === 4 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/90 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <span className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 font-black text-sm flex items-center justify-center border border-indigo-100 shadow-xs">
                  4
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Your Contact Details</h3>
                  <p className="text-xs text-slate-500 font-medium">Takes less than 1 minute to set up your dedicated workspace</p>
                </div>
              </div>

              {formError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs font-bold text-red-600 flex items-center gap-2">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Form Input Fields */}
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={"w-full pl-10 pr-3 py-3 bg-slate-50 border rounded-2xl text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all " + (
                        fieldErrors.name ? "border-red-400" : "border-slate-200"
                      )}
                    />
                  </div>
                  {fieldErrors.name && <p className="text-[10px] text-red-500 font-bold mt-1">{fieldErrors.name[0]}</p>}
                </div>

                {/* Work Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Work Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={"w-full pl-10 pr-3 py-3 bg-slate-50 border rounded-2xl text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all " + (
                          fieldErrors.email ? "border-red-400" : "border-slate-200"
                        )}
                      />
                    </div>
                    {fieldErrors.email && <p className="text-[10px] text-red-500 font-bold mt-1">{fieldErrors.email[0]}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Mobile Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={"w-full pl-10 pr-3 py-3 bg-slate-50 border rounded-2xl text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all " + (
                          fieldErrors.phone ? "border-red-400" : "border-slate-200"
                        )}
                      />
                    </div>
                    {fieldErrors.phone && <p className="text-[10px] text-red-500 font-bold mt-1">{fieldErrors.phone[0]}</p>}
                  </div>
                </div>
              </div>

              {/* Step 4 Actions */}
              <div className="space-y-4 pt-2">
                
                {/* Auto-Pay Guarantee & Trial Information Notice */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-950 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      7-Day Free Trial • Auto-Pay Annual Plan
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                      ₹0 Charged Today
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-900 leading-relaxed font-medium">
                    Start your <strong>7-Day Free Trial</strong> with full feature access at ₹0 today. After 7 days, your annual subscription of <strong>{currencySymbol}{calculations.finalDisplayTotal.toLocaleString()}/year</strong> will be auto-debited. You can easily cancel anytime before Day 7 with zero cancellation fees.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleProceed("demo")}
                    className="py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-md shadow-slate-900/20 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading && activeAction === "demo" ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin my-1" />
                    ) : (
                      <>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-emerald-400" />
                          <span>Start 7-Day Free Trial (Auto-Pay)</span>
                        </div>
                        <span className="text-[10px] text-emerald-300 font-semibold">
                          ₹0 today • Auto-debit after 7 days
                        </span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleProceed("buy")}
                    className="py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-xs shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading && activeAction === "buy" ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin my-1" />
                    ) : (
                      <>
                        <div className="flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-yellow-300" />
                          <span>Buy Yearly Subscription</span>
                        </div>
                        <span className="text-[10px] text-purple-200 font-semibold">
                          Pay {currencySymbol}{calculations.finalDisplayTotal.toLocaleString()} & Activate Now
                        </span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 stroke-[3]" />
                    <span>Back to Add-ons</span>
                  </button>

                  <span className="text-[11px] font-semibold text-slate-400">
                    ⚡ Instant portal credentials generated upon setup
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ================= RIGHT COLUMN: STICKY ESTIMATE SUMMARY (ALWAYS IN VIEW ON SCROLL) ================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-5">
          
          {/* ESTIMATE CARD */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
            
            {/* Top Dark Header */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-black tracking-wider uppercase text-indigo-200">LIVE ESTIMATE</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight mt-1 capitalize">
                    {currentPlan?.name} Plan
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">
                    {teamSize} Employees ? Yearly Billing
                  </p>
                </div>
              </div>
            </div>

            {/* Breakdown Content */}
            <div className="p-6 space-y-4">
              
              {/* Cost Itemization */}
              <div className="space-y-2.5 pb-2 text-xs">
                {/* Base Package Line */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                    <PackageIcon className="w-3.5 h-3.5 text-slate-400" />
                    Base Plan ({calculations.baseSlots} employees)
                  </span>
                  <span className="font-black text-slate-900">
                    {currencySymbol}{calculations.basePrice.toLocaleString()}
                  </span>
                </div>

                {/* Extra Employee Line */}
                {calculations.extraEmpCount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-500" />
                      +{calculations.extraEmpCount} Additional Employees ({calculations.extraEmpCount} &times; {currencySymbol}{currentPlan?.perEmpOverage})
                    </span>
                    <span className="font-black text-amber-700">
                      +{currencySymbol}{calculations.extraEmpCost.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* Itemized Individual Add-on Lines */}
                {selectedAddonsBreakdown.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-indigo-50/40 p-2 rounded-xl border border-indigo-100/80">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5 truncate pr-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({teamSize} &times; {currencySymbol}{item.rate})</span>
                    </span>
                    <span className="font-black text-indigo-700 flex-shrink-0">
                      +{currencySymbol}{item.itemTotal.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* HIGHLIGHTED TOTAL BOX */}
              <div className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 rounded-2xl p-5 text-white shadow-md shadow-indigo-600/20">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-indigo-200">
                      TOTAL ESTIMATED PRICE
                    </div>
                    <div className="text-3xl md:text-4xl font-black mt-1 tracking-tight">
                      {currencySymbol}{calculations.finalDisplayTotal.toLocaleString()}
                      <span className="text-xs font-semibold text-indigo-200 ml-1">/year</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-white/15 px-2.5 py-1 rounded-lg text-[11px] font-extrabold text-white">
                      ~{currencySymbol}{calculations.effectivePerEmpMonth}/emp/mo
                    </span>
                  </div>
                </div>
              </div>

              {/* TRUST ASSURANCE BADGES */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-[10px] font-bold text-slate-500">
                <div className="flex flex-col items-center gap-1 p-1.5 rounded-lg bg-slate-50">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Instant Setup</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-1.5 rounded-lg bg-slate-50">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Encrypted & Safe</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-1.5 rounded-lg bg-slate-50">
                  <Award className="w-3.5 h-3.5 text-purple-600" />
                  <span>Free Onboarding</span>
                </div>
              </div>

            </div>
          </div>

          {/* DYNAMIC COVERED MODULES ACCORDING TO SELECTED PACKAGE + ADDONS */}
          <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-200/80">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Covered Features in {currentPlan?.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">Included in plan + selected add-ons</p>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                {coveredModulesList.length} modules active
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {coveredModulesList.map((item, idx) => (
                <span
                  key={idx}
                  className={"inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all " + (
                    item.isAddon 
                      ? "bg-indigo-50/80 border-indigo-200 text-indigo-800 shadow-xs" 
                      : "bg-slate-50 border-slate-200/80 text-slate-700"
                  )}
                >
                  {item.isAddon ? (
                    <>
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      <span>{item.name}</span>
                      <span className="text-[9px] bg-indigo-600 text-white px-1.5 py-0.2 rounded-full font-black ml-0.5">ADD-ON</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>{item.name}</span>
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
