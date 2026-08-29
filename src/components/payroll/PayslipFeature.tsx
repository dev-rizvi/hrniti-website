"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle, Download, Sparkles, User, Check } from "lucide-react";
import type { jsPDF } from "jspdf";

interface Template {
    id: string;
    name: string;
    primaryColor: string;
    borderColor: string;
    textColor: string;
    accentBg: string;
}

export default function PayslipFeature() {
    const [selectedTemplate, setSelectedTemplate] = useState<string>("emerald");
    const [isDownloading, setIsDownloading] = useState(false);
    const jsPDFRef = React.useRef<typeof jsPDF | null>(null);

    useEffect(() => {
        // Prefetch jsPDF library in the background
        import("jspdf").then(m => {
            jsPDFRef.current = m.jsPDF || m.default;
        }).catch(err => console.error("Failed to prefetch jsPDF:", err));
    }, []);

    const templates: Record<string, Template> = {
        emerald: {
            id: "emerald",
            name: "Modern Emerald",
            primaryColor: "bg-emerald-600",
            borderColor: "border-emerald-500/20",
            textColor: "text-emerald-600",
            accentBg: "bg-emerald-50"
        },
        violet: {
            id: "violet",
            name: "Startup Tech",
            primaryColor: "bg-violet-600",
            borderColor: "border-violet-500/20",
            textColor: "text-violet-600",
            accentBg: "bg-violet-50"
        },
        blue: {
            id: "blue",
            name: "Classic Corporate",
            primaryColor: "bg-indigo-600",
            borderColor: "border-indigo-500/20",
            textColor: "text-indigo-600",
            accentBg: "bg-indigo-50"
        }
    };

    const activeTemplate = templates[selectedTemplate] || templates.emerald;

    const downloadSamplePDF = async () => {
        setIsDownloading(true);
        try {
            let jsPDFConstructor = jsPDFRef.current;
            if (!jsPDFConstructor) {
                const m = await import("jspdf");
                jsPDFConstructor = m.jsPDF || m.default;
            }
            const pdf = new jsPDFConstructor("p", "mm", "a4");

            // Margins & Outline
            pdf.setDrawColor(218, 224, 233);
            pdf.rect(10, 10, 190, 277);

            // Company Header
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(16);
            pdf.text("HR NITI PRIVATE LIMITED", 15, 25);
            pdf.setFontSize(8);
            pdf.setFont("helvetica", "normal");
            pdf.text("Mumbai Corporate HQ, Maharashtra, India", 15, 30);
            pdf.text("GSTIN: 27AABCH1234F1Z0", 15, 34);

            // Document Title
            pdf.setFontSize(12);
            pdf.setFont("helvetica", "bold");
            pdf.text("SALARY SLIP / STATEMENT", 120, 25);
            pdf.setFontSize(8);
            pdf.setFont("helvetica", "normal");
            pdf.text("Pay Period: June 2026", 120, 30);
            pdf.text("Payment Mode: Bank Transfer", 120, 34);

            pdf.line(10, 40, 200, 40);

            // Employee Info Block
            pdf.setFont("helvetica", "bold");
            pdf.text("Employee Details", 15, 47);
            pdf.setFont("helvetica", "normal");
            pdf.text("Employee Name: Aditya Sen", 15, 52);
            pdf.text("Designation: Senior Software Engineer", 15, 56);
            pdf.text("Department: Engineering", 15, 60);

            pdf.text("Employee ID: NITI-2026-88", 110, 52);
            pdf.text("Bank Name: HDFC Bank", 110, 56);
            pdf.text("Account Number: *******1234", 110, 60);

            pdf.line(10, 66, 200, 66);

            // Earnings & Deductions Tables
            pdf.setFont("helvetica", "bold");
            pdf.text("Earnings", 15, 73);
            pdf.text("Amount (INR)", 75, 73);
            pdf.text("Deductions", 110, 73);
            pdf.text("Amount (INR)", 170, 73);

            pdf.line(10, 76, 200, 76);

            pdf.setFont("helvetica", "normal");
            const rows = [
                { earn: "Basic Salary", earnAmt: "50,000.00", ded: "Provident Fund (PF)", dedAmt: "1,800.00" },
                { earn: "House Rent Allowance", earnAmt: "25,000.00", ded: "Professional Tax (PT)", dedAmt: "200.00" },
                { earn: "Special Allowance", earnAmt: "15,000.00", ded: "TDS / Income Tax", dedAmt: "4,500.00" },
                { earn: "LTA & Reimbursements", earnAmt: "5,000.00", ded: "Security Fund", dedAmt: "0.00" }
            ];

            let currentY = 82;
            rows.forEach((row) => {
                pdf.text(row.earn, 15, currentY);
                pdf.text(row.earnAmt, 75, currentY);
                pdf.text(row.ded, 110, currentY);
                pdf.text(row.dedAmt, 170, currentY);
                currentY += 6;
            });

            pdf.line(10, currentY, 200, currentY);
            currentY += 6;

            pdf.setFont("helvetica", "bold");
            pdf.text("Gross Earnings:", 15, currentY);
            pdf.text("95,000.00", 75, currentY);
            pdf.text("Total Deductions:", 110, currentY);
            pdf.text("6,500.00", 170, currentY);

            currentY += 6;
            pdf.line(10, currentY, 200, currentY);

            // Net salary summary
            currentY += 10;
            pdf.setFillColor(240, 244, 250);
            pdf.rect(15, currentY - 5, 180, 15, "F");
            pdf.setFontSize(10);
            pdf.text("NET SALARY DISBURSED:", 20, currentY + 3);
            pdf.text("INR 88,500.00 (Rupees Eighty Eight Thousand Five Hundred Only)", 70, currentY + 3);

            // Signature block
            currentY += 35;
            pdf.setFontSize(8);
            pdf.text("Employer Signature", 15, currentY);
            pdf.text("Employee Signature", 120, currentY);
            pdf.line(15, currentY + 5, 60, currentY + 5);
            pdf.line(120, currentY + 5, 165, currentY + 5);

            pdf.save("HR_Niti_Payslip_Sample.pdf");
        } catch (err) {
            console.error("PDF generation failed:", err);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <section className="py-20 lg:py-28 overflow-hidden bg-slate-50 border-t border-slate-200/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:flex-row-reverse">

                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4" /> Employee Experience
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Smart Payslip Designer</h2>
                        </div>

                        <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>

                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Why send boring, flat PDFs? Build custom, branded payslips that employees look forward to. Toggle layouts, add digital signature verification, and attach tax declaration progress summaries.
                        </p>

                        <div className="space-y-4 py-2 border-y border-slate-200/65">
                            <div className="text-sm font-bold text-slate-700">Choose Visual Template:</div>
                            <div className="flex gap-3">
                                {Object.values(templates).map(t => (
                                    <button
                                        key={t.id}
                                        onClick={() => setSelectedTemplate(t.id)}
                                        id={`payslip-temp-btn-${t.id}`}
                                        className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center gap-2
                                            ${selectedTemplate === t.id 
                                                ? `${t.primaryColor} text-white border-transparent shadow-sm scale-[1.02]` 
                                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-350 hover:bg-slate-50"
                                            }
                                        `}
                                    >
                                        {selectedTemplate === t.id && <Check className="w-3.5 h-3.5" />}
                                        {t.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <ul className="space-y-3 mt-4">
                            {[
                                "Drag-and-drop template builder",
                                "Corporate brand color presets",
                                "Digital signature verification logs",
                                "Password security & access locks"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                                    <span className="text-slate-700 font-semibold text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={downloadSamplePDF}
                            id="payslip-download-sample-btn"
                            disabled={isDownloading}
                            className="group mt-6 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md cursor-pointer hover:scale-[1.01]"
                        >
                            {isDownloading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
                                    <span>Generating PDF...</span>
                                </>
                            ) : (
                                <>
                                    <Download className="h-4.5 w-4.5 text-emerald-400 transition-transform group-hover:-translate-y-0.5" />
                                    <span>Download Sample Payslip Format</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Visual Content - Interactive Custom Markup Mockup */}
                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xl transition-all duration-300">
                            
                            {/* Window Header */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    <span className="text-xs font-bold text-slate-400 ml-2">Payslip Preview: {activeTemplate.name}</span>
                                </div>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold">Dynamic Preset</span>
                            </div>

                            {/* Branded Sheet Preview */}
                            <div className={`p-6 rounded-xl border ${activeTemplate.borderColor} ${activeTemplate.accentBg} transition-all duration-300`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className={`text-base font-black tracking-tight ${activeTemplate.textColor}`}>HR NITI TECH</div>
                                        <div className="text-[9px] text-slate-450 mt-0.5">Corporate HQ, Maharashtra</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[11px] font-bold text-slate-800">SALARY SLIP</div>
                                        <div className="text-[9px] text-slate-400 mt-0.5">Pay Period: June 2026</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 border-y border-slate-200/60 py-3 mb-6 text-[10px] text-slate-650 font-medium">
                                    <div>
                                        <div><span className="font-bold text-slate-800">Emp Name:</span> Aditya Sen</div>
                                        <div className="mt-1"><span className="font-bold text-slate-800">Department:</span> Engineering</div>
                                    </div>
                                    <div>
                                        <div><span className="font-bold text-slate-800">Emp ID:</span> NITI-2026-88</div>
                                        <div className="mt-1"><span className="font-bold text-slate-800">Bank advice:</span> HDFC Bank</div>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-800 border-b border-slate-200/40 pb-1">
                                        <span>Earnings</span>
                                        <span>Deductions</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-600 font-medium">
                                        <span>Basic: ₹50,000</span>
                                        <span>PF: ₹1,800</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-600 font-medium">
                                        <span>HRA: ₹25,000</span>
                                        <span>TDS: ₹4,500</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-600 font-medium">
                                        <span>Special: ₹15,000</span>
                                        <span>PT: ₹200</span>
                                    </div>
                                </div>

                                <div className={`p-3 rounded-lg border ${activeTemplate.borderColor} bg-white flex justify-between items-center`}>
                                    <div>
                                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Net Salary Disbursed</div>
                                        <div className="text-base font-black text-slate-800">₹88,500.00</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                                            <User className="w-2.5 h-2.5" /> Digitally Verified
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background mesh glow */}
                        <div className="absolute -z-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -bottom-10 -right-10 mix-blend-multiply opacity-60"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
