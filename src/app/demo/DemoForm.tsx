"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, Tag, Package as PackageIcon, IndianRupee, Download } from "lucide-react";
import { createContactInquiry, validateContactInquiry } from "./actions";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import Script from "next/script";

export default function DemoForm({ packages, demoDays, currencySymbol, razorpayEnabled, razorpayKey }: { packages: any[], demoDays: number, currencySymbol: string, razorpayEnabled?: boolean, razorpayKey?: string | null }) {
  const [selectedPkgId, setSelectedPkgId] = useState("");
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const selectedPkg = packages.find(p => p.id.toString() === selectedPkgId);
  
  let originalPrice: number | null = null;
  let price: number | null = null;
  let discountStr: string | null = null;

  if (selectedPkg) {
    if (billingCycle === "demo") {
      price = 0;
    } else {
      originalPrice = billingCycle === "monthly" ? Number(selectedPkg.monthly_price) : Number(selectedPkg.yearly_price);
      
      // Use the actual discounted prices returned by the backend
      const discountedPrice = billingCycle === "monthly" ? selectedPkg.discounted_monthly_price : selectedPkg.discounted_yearly_price;
      
      if (discountedPrice !== undefined && discountedPrice < originalPrice) {
        price = Number(discountedPrice);
        discountStr = selectedPkg.discount_label || null;
      } else {
        price = originalPrice;
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setFieldErrors({});
    const formData = new FormData(e.currentTarget);
    
    // If not a demo and Razorpay is enabled, process payment first
    if (billingCycle !== "demo" && razorpayEnabled && razorpayKey) {
        // Validate first before opening the payment modal
        const validation = await validateContactInquiry(formData);
        if (!validation.success) {
            if (validation.fieldErrors) setFieldErrors(validation.fieldErrors);
            setError(validation.error || "Validation failed.");
            setIsLoading(false);
            return;
        }

        if (!(window as any).Razorpay) {
            setError("Razorpay SDK not loaded. Please check your connection.");
            setIsLoading(false);
            return;
        }

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        
        // Amount should be in paise
        const amountInPaise = Math.round(Number(price) * 100);

        const options = {
            key: razorpayKey,
            amount: amountInPaise,
            currency: "INR", 
            name: "HRMS Portal",
            description: `Subscription for ${selectedPkg?.name} (${billingCycle})`,
            handler: async function (response: any) {
                // Payment successful
                formData.append("razorpay_payment_id", response.razorpay_payment_id);
                submitForm(formData);
            },
            prefill: {
                name: name,
                email: email,
                contact: phone,
            },
            theme: {
                color: "#4f46e5",
            },
            modal: {
                ondismiss: function() {
                    setIsLoading(false);
                }
            }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any){
            setError("Payment failed: " + response.error.description);
            setIsLoading(false);
        });
        rzp.open();
    } else {
        // Direct submission (Demo or offline payment mode)
        submitForm(formData);
    }
  };

  const submitForm = async (formData: FormData) => {
    const res = await createContactInquiry(formData);
    if (res.success) {
      setSuccessData(res.credentials);
    } else {
      if (res.fieldErrors) setFieldErrors(res.fieldErrors);
      setError(res.error || "An unknown error occurred.");
    }
    setIsLoading(false);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("credentials-card");
    if (!element) return;
    
    try {
      // Capture the element with a slightly larger padding and a clean white background
      const imgData = await toPng(element, { 
        pixelRatio: 3, 
        backgroundColor: "#ffffff",
        style: { margin: "0", transform: "none" } // Reset any weird transforms
      });
      
      const pdf = new jsPDF("p", "mm", "a4");
      
      // Add Header Text to PDF
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(24);
      pdf.setTextColor(15, 23, 42); // slate-900
      pdf.text("Welcome to HRMS", pdf.internal.pageSize.getWidth() / 2, 30, { align: 'center' });
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.setTextColor(100, 116, 139); // slate-500
      pdf.text("Please keep these admin credentials safe.", pdf.internal.pageSize.getWidth() / 2, 40, { align: 'center' });
      
      // Calculate Image Dimensions with Margins
      const props = pdf.getImageProperties(imgData);
      const margin = 25; // 25mm margins on left/right
      const pdfWidth = pdf.internal.pageSize.getWidth() - (margin * 2);
      const pdfHeight = (props.height * pdfWidth) / props.width;
      
      // Add image centered below the text
      pdf.addImage(imgData, "PNG", margin, 55, pdfWidth, pdfHeight);
      
      // Footer text
      pdf.setFontSize(10);
      pdf.setTextColor(148, 163, 184); // slate-400
      pdf.text("Generated automatically by the HRMS portal.", pdf.internal.pageSize.getWidth() / 2, 280, { align: 'center' });

      pdf.save(`${successData.company.replace(/\s+/g, "_")}_Credentials.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
    }
  };

  if (successData) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-10 text-center animate-in zoom-in-95 duration-500 shadow-xl shadow-emerald-500/10">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
          <User className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-emerald-800 mb-2">Welcome Aboard!</h2>
        <p className="text-emerald-600 mb-8">Your admin account and company workspace have been successfully created.</p>
        
        <div id="credentials-card" className="bg-white rounded-2xl p-6 text-left shadow-sm border border-emerald-100 mb-6 max-w-sm mx-auto">
          <div className="mb-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Company Workspace</p>
            <p className="text-lg font-bold text-slate-800">{successData.company}</p>
          </div>
          <div className="mb-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Workspace Login URL</p>
            <a href={`${process.env.NEXT_PUBLIC_BASE_URL || ''}/admin/login`} target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:text-indigo-800 underline font-mono text-sm break-all">
              {process.env.NEXT_PUBLIC_BASE_URL || ''}/admin/login
            </a>
          </div>
          <div className="mb-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Admin Email</p>
            <p className="font-semibold text-slate-700 font-mono text-sm">{successData.email}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Temporary Password</p>
            <p className="font-bold text-emerald-600 font-mono text-lg tracking-widest">{successData.password}</p>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-8">Please copy your temporary password. You can log in to your HRMS dashboard using these credentials.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a href={`${process.env.NEXT_PUBLIC_BASE_URL || ''}/admin/login`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
            Go to Dashboard
          </a>
          <button onClick={handleDownloadPDF} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" /> Download PDF
          </button>
          <button onClick={() => setSuccessData(null)} className="bg-slate-100 text-slate-700 border border-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
            Create Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {razorpayEnabled && (
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      )}
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 text-sm font-semibold">
          Error: {error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-2">
          <User className="w-4 h-4 text-slate-400" /> Full Name
        </label>
        <input required name="name" type="text" placeholder="e.g. John Doe" className={`block w-full rounded-xl border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3.5 bg-slate-50/50 hover:bg-white transition-all duration-200 outline-none placeholder:text-slate-400 ${fieldErrors.name ? 'border-red-400' : 'border-slate-200'}`} />
        {fieldErrors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{fieldErrors.name[0]}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-400" /> Email Address
          </label>
          <input required name="email" type="email" placeholder="john@example.com" className={`block w-full rounded-xl border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3.5 bg-slate-50/50 hover:bg-white transition-all duration-200 outline-none placeholder:text-slate-400 ${fieldErrors.email ? 'border-red-400' : 'border-slate-200'}`} />
          {fieldErrors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{fieldErrors.email[0]}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-2">
            <Phone className="w-4 h-4 text-slate-400" /> Phone Number
          </label>
          <input required name="phone" type="text" placeholder="+1 (555) 000-0000" className={`block w-full rounded-xl border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3.5 bg-slate-50/50 hover:bg-white transition-all duration-200 outline-none placeholder:text-slate-400 ${fieldErrors.phone ? 'border-red-400' : 'border-slate-200'}`} />
          {fieldErrors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{fieldErrors.phone[0]}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-2">
          <PackageIcon className="w-4 h-4 text-slate-400" /> Select Package
        </label>
        <select 
          name="package" 
          value={selectedPkgId}
          onChange={(e) => setSelectedPkgId(e.target.value)}
          className={`block w-full rounded-xl border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3.5 bg-slate-50/50 hover:bg-white transition-all duration-200 outline-none ${fieldErrors.package_id ? 'border-red-400' : 'border-slate-200'}`}
        >
          <option value="">Select a package...</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
          ))}
          {packages.length === 0 && <option disabled>No packages loaded / API unreachable</option>}
        </select>
        {fieldErrors.package_id && <p className="text-red-500 text-xs mt-1 font-semibold">{fieldErrors.package_id[0]}</p>}
      </div>

      {selectedPkg && (
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5 animate-in fade-in slide-in-from-top-2 duration-300">
          
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-3">Choose Your Path</label>
            <div className="grid grid-cols-2 gap-3">
              <label className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${billingCycle === "demo" ? "border-indigo-600 bg-indigo-100/50 text-indigo-700" : "border-slate-200 bg-white text-slate-500 hover:border-indigo-300"}`}>
                <input type="radio" name="path" value="demo" checked={billingCycle === "demo"} onChange={() => setBillingCycle("demo")} className="hidden" />
                <span className="font-bold text-sm">Free Demo ({demoDays} Days)</span>
              </label>
              <label className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${billingCycle !== "demo" ? "border-indigo-600 bg-indigo-100/50 text-indigo-700" : "border-slate-200 bg-white text-slate-500 hover:border-indigo-300"}`}>
                <input type="radio" name="path" value="buy" checked={billingCycle !== "demo"} onChange={() => setBillingCycle("yearly")} className="hidden" />
                <span className="font-bold text-sm">Buy Subscription</span>
              </label>
            </div>
          </div>

          {/* Monthly option removed; only Yearly is available */}
          <input type="hidden" name="billing" value={billingCycle} />
          
          <div className="flex items-center justify-between bg-white px-4 py-4 rounded-lg border border-indigo-100 shadow-sm mt-2">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-600">Total Price</span>
              {discountStr && price !== 0 && (
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md w-max mt-1 border border-emerald-100">
                  {discountStr}
                </span>
              )}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-extrabold text-indigo-700 flex items-center">
                {price === 0 ? (
                  <span className="text-emerald-500">Free</span>
                ) : (
                  <>
                    <span className="text-xl mr-1 font-sans">{currencySymbol}</span>
                    {price}
                    <span className="text-sm text-slate-400 font-medium ml-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </>
                )}
              </span>
              {discountStr && originalPrice && price !== 0 && (
                <span className="text-xs text-slate-400 font-medium line-through mt-0.5">
                  {currencySymbol}{originalPrice}/{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              )}
            </div>
          </div>
          
          {/* Ensure the actual selected billing cycle is sent to the form action */}
          <input type="hidden" name="billing" value={billingCycle} />
          <input type="hidden" name="price" value={price === 0 ? 0 : price || ""} />
        </div>
      )}

      <button disabled={isLoading} type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200 font-bold text-lg mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <><Send className="w-5 h-5" /> {billingCycle === "demo" ? "Start Free Demo" : "Buy Subscription"}</>
        )}
      </button>
    </form>
    </>
  )
}
