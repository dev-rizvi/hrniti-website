"use client";

import { useState } from "react";
import {
    IdCard,
    Download,
    RotateCcw,
    Sparkles,
    Building2,
    User,
    Upload,
    X,
    QrCode,
    CreditCard,
    Shield,
    Phone,
    HeartPulse,
    Calendar,
    Layers,
    Palette
} from "lucide-react";

// Theme color definitions
export interface ThemeOption {
    id: string;
    name: string;
    primary: string;       // HEX for jsPDF
    secondary: string;     // HEX for jsPDF
    accentBg: string;      // Tailwind class for web preview
    accentText: string;    // Tailwind class for web preview
    headerGradient: string; // Tailwind class for web preview
}

export const THEMES: ThemeOption[] = [
    {
        id: "corporate",
        name: "Corporate Emerald & Slate",
        primary: "#059669",     // Emerald-600
        secondary: "#0f172a",   // Slate-900
        accentBg: "bg-emerald-600",
        accentText: "text-emerald-600",
        headerGradient: "bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900",
    },
    {
        id: "indigo",
        name: "Royal Indigo & Cyan",
        primary: "#4338ca",     // Indigo-700
        secondary: "#1e1b4b",   // Indigo-950
        accentBg: "bg-indigo-700",
        accentText: "text-indigo-600",
        headerGradient: "bg-gradient-to-r from-indigo-950 via-indigo-800 to-indigo-950",
    },
    {
        id: "navy",
        name: "Executive Navy & Blue",
        primary: "#0284c7",     // Sky-600
        secondary: "#030712",   // Gray-950
        accentBg: "bg-sky-600",
        accentText: "text-sky-600",
        headerGradient: "bg-gradient-to-r from-gray-950 via-sky-900 to-gray-950",
    },
    {
        id: "crimson",
        name: "Modern Crimson & Charcoal",
        primary: "#dc2626",     // Red-600
        secondary: "#18181b",   // Zinc-900
        accentBg: "bg-red-600",
        accentText: "text-red-600",
        headerGradient: "bg-gradient-to-r from-zinc-900 via-red-900 to-zinc-900",
    },
];

const DEFAULT_DETAILS = {
    companyName: "HR Niti Technologies Pvt Ltd",
    companyTagline: "Enterprise HRMS & Payroll Solutions",
    companyAddress: "102 Innovation Park, Koramangala, Bengaluru - 560095",
    companyPhone: "+91 80 4912 3456",
    companyWebsite: "www.hrniti.com",
    companyLogo: "",
    
    employeeName: "Rahul Sharma",
    employeeId: "HRN-1042",
    designation: "Senior Software Engineer",
    department: "Product Engineering",
    joiningDate: "15-01-2024",
    validUntil: "31-12-2027",
    bloodGroup: "O+",
    phone: "+91 98765 43210",
    emergencyContact: "+91 98765 00112",
    photo: "",
    
    qrCodeText: "EMP:HRN-1042|NAME:Rahul Sharma|DEPT:Product Engineering",
    termsText: "This card is the property of HR Niti Technologies. If found, please return to the office address above.",
};

export default function IDCardDesigner() {
    const [fields, setFields] = useState(DEFAULT_DETAILS);
    const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(THEMES[0]);
    const [orientation, setOrientation] = useState<"vertical" | "horizontal">("vertical");
    const [activeSide, setActiveSide] = useState<"front" | "back" | "both">("both");
    const [isDownloading, setIsDownloading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 1024 * 1024) { alert("Company logo size exceeds 1MB."); return; }
        const reader = new FileReader();
        reader.onload = (ev) => {
            setFields((p) => ({ ...p, companyLogo: ev.target?.result as string }));
        };
        reader.readAsDataURL(file);
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) { alert("Photo size exceeds 2MB."); return; }
        const reader = new FileReader();
        reader.onload = (ev) => {
            setFields((p) => ({ ...p, photo: ev.target?.result as string }));
        };
        reader.readAsDataURL(file);
    };

    const loadDemoData = () => {
        setFields(DEFAULT_DETAILS);
        setSelectedTheme(THEMES[0]);
    };

    const clearAll = () => {
        setFields({
            companyName: "", companyTagline: "", companyAddress: "", companyPhone: "", companyWebsite: "", companyLogo: "",
            employeeName: "", employeeId: "", designation: "", department: "", joiningDate: "", validUntil: "",
            bloodGroup: "", phone: "", emergencyContact: "", photo: "", qrCodeText: "", termsText: ""
        });
    };

    const loadScript = (src: string): Promise<void> =>
        new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
            const s = document.createElement("script");
            s.src = src;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.body.appendChild(s);
        });

    // High-precision Programmatic jsPDF ID Card Generation (CR80 Standard: 85.6mm x 53.98mm)
    const handleDownloadPDF = async () => {
        setIsDownloading(true);
        try {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
            const { jsPDF } = (window as any).jspdf;

            const isVert = orientation === "vertical";
            // CR80 dimensions in mm
            const w = isVert ? 54 : 85.6;
            const h = isVert ? 85.6 : 54;

            // Generate 2-page PDF (Page 1 = Front, Page 2 = Back)
            const doc = new jsPDF({
                orientation: isVert ? "portrait" : "landscape",
                unit: "mm",
                format: [w, h],
            });

            // ── DRAW FRONT SIDE ──
            drawFrontSide(doc, w, h, isVert);

            // ── DRAW BACK SIDE ──
            doc.addPage([w, h], isVert ? "portrait" : "landscape");
            drawBackSide(doc, w, h, isVert);

            const fileName = fields.employeeName ? `ID_Card_${fields.employeeName.trim().replace(/\s+/g, "_")}.pdf` : "Employee_ID_Card.pdf";
            doc.save(fileName);
        } catch (err) {
            console.error("ID Card PDF Generation error:", err);
            alert("Failed to generate ID Card PDF. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    // Helper: Hex color to RGB
    const hexToRgb = (hex: string) => {
        const h = hex.replace("#", "");
        return {
            r: parseInt(h.substring(0, 2), 16) || 0,
            g: parseInt(h.substring(2, 4), 16) || 0,
            b: parseInt(h.substring(4, 6), 16) || 0,
        };
    };

    const drawFrontSide = (doc: any, w: number, h: number, isVert: boolean) => {
        const priRgb = hexToRgb(selectedTheme.primary);
        const secRgb = hexToRgb(selectedTheme.secondary);

        // Background
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, w, h, "F");

        if (isVert) {
            // PORTRAIT FRONT SIDE
            // Header bar
            doc.setFillColor(secRgb.r, secRgb.g, secRgb.b);
            doc.rect(0, 0, w, 22, "F");
            doc.setFillColor(priRgb.r, priRgb.g, priRgb.b);
            doc.rect(0, 21, w, 1.5, "F");

            // Company Name & Tagline in Header
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor(255, 255, 255);
            doc.text((fields.companyName || "COMPANY NAME").toUpperCase(), w / 2, 9, { align: "center" });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(5.5);
            doc.setTextColor(203, 213, 225);
            doc.text(fields.companyTagline || "EMPLOYEE IDENTITY CARD", w / 2, 14, { align: "center" });

            // Photo frame (center)
            const photoW = 22;
            const photoH = 26;
            const photoX = (w - photoW) / 2;
            const photoY = 25;

            doc.setFillColor(241, 245, 249);
            doc.setDrawColor(priRgb.r, priRgb.g, priRgb.b);
            doc.setLineWidth(0.6);
            doc.roundedRect(photoX, photoY, photoW, photoH, 1.5, 1.5, "FD");

            if (fields.photo) {
                try { doc.addImage(fields.photo, "JPEG", photoX + 0.5, photoY + 0.5, photoW - 1, photoH - 1); } catch (_) {}
            } else {
                doc.setFont("helvetica", "bold");
                doc.setFontSize(14);
                doc.setTextColor(148, 163, 184);
                doc.text("PHOTO", w / 2, photoY + 15, { align: "center" });
            }

            // Employee Name & Designation
            let curY = photoY + photoH + 5;
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10.5);
            doc.setTextColor(15, 23, 42);
            doc.text((fields.employeeName || "EMPLOYEE NAME").toUpperCase(), w / 2, curY, { align: "center" });

            curY += 3.5;
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.setTextColor(priRgb.r, priRgb.g, priRgb.b);
            doc.text((fields.designation || "Designation").toUpperCase(), w / 2, curY, { align: "center" });

            // Key Details Table
            curY += 5;
            doc.setFontSize(6);
            const details = [
                ["EMP ID:", fields.employeeId || "—"],
                ["DEPT:", fields.department || "—"],
                ["JOINING:", fields.joiningDate || "—"],
                ["BLOOD:", fields.bloodGroup || "—"],
            ];

            details.forEach(([lbl, val]) => {
                doc.setFont("helvetica", "bold");
                doc.setTextColor(100, 116, 139);
                doc.text(lbl, 8, curY);

                doc.setFont("helvetica", "bold");
                doc.setTextColor(15, 23, 42);
                doc.text(val, 24, curY);
                curY += 3.2;
            });

            // Footer accent bar
            doc.setFillColor(secRgb.r, secRgb.g, secRgb.b);
            doc.rect(0, h - 5, w, 5, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(5);
            doc.setTextColor(255, 255, 255);
            doc.text("OFFICIAL IDENTITY CARD", w / 2, h - 1.8, { align: "center" });
        } else {
            // LANDSCAPE FRONT SIDE
            // Left accent banner
            doc.setFillColor(secRgb.r, secRgb.g, secRgb.b);
            doc.rect(0, 0, 26, h, "F");
            doc.setFillColor(priRgb.r, priRgb.g, priRgb.b);
            doc.rect(25, 0, 1.2, h, "F");

            // Photo inside left banner
            const photoW = 20;
            const photoH = 24;
            const photoX = 3;
            const photoY = (h - photoH) / 2;

            doc.setFillColor(241, 245, 249);
            doc.setDrawColor(255, 255, 255);
            doc.setLineWidth(0.5);
            doc.roundedRect(photoX, photoY, photoW, photoH, 1, 1, "FD");

            if (fields.photo) {
                try { doc.addImage(fields.photo, "JPEG", photoX + 0.4, photoY + 0.4, photoW - 0.8, photoH - 0.8); } catch (_) {}
            } else {
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
                doc.setTextColor(255, 255, 255);
                doc.text("PHOTO", photoX + photoW / 2, photoY + photoH / 2 + 1, { align: "center" });
            }

            // Right Header: Company info
            let curX = 30;
            let curY = 8;

            doc.setFont("helvetica", "bold");
            doc.setFontSize(9.5);
            doc.setTextColor(15, 23, 42);
            doc.text((fields.companyName || "COMPANY NAME").toUpperCase(), curX, curY);

            curY += 3.5;
            doc.setFont("helvetica", "normal");
            doc.setFontSize(5.5);
            doc.setTextColor(100, 116, 139);
            doc.text(fields.companyTagline || "Enterprise Identity", curX, curY);

            // Divider line
            curY += 2;
            doc.setDrawColor(priRgb.r, priRgb.g, priRgb.b);
            doc.setLineWidth(0.4);
            doc.line(curX, curY, w - 6, curY);

            // Name & Title
            curY += 6;
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10.5);
            doc.setTextColor(15, 23, 42);
            doc.text((fields.employeeName || "EMPLOYEE NAME").toUpperCase(), curX, curY);

            curY += 3.5;
            doc.setFont("helvetica", "bold");
            doc.setFontSize(6.5);
            doc.setTextColor(priRgb.r, priRgb.g, priRgb.b);
            doc.text((fields.designation || "Designation").toUpperCase(), curX, curY);

            // Details grid
            curY += 5;
            doc.setFontSize(5.8);
            const grid = [
                ["EMP ID:", fields.employeeId || "—", "BLOOD:", fields.bloodGroup || "—"],
                ["DEPT:", fields.department || "—", "JOINING:", fields.joiningDate || "—"],
            ];

            grid.forEach((row) => {
                doc.setFont("helvetica", "bold");
                doc.setTextColor(100, 116, 139);
                doc.text(row[0], curX, curY);
                doc.setTextColor(15, 23, 42);
                doc.text(row[1], curX + 13, curY);

                doc.setTextColor(100, 116, 139);
                doc.text(row[2], curX + 33, curY);
                doc.setTextColor(15, 23, 42);
                doc.text(row[3], curX + 44, curY);
                curY += 3.5;
            });
        }
    };

    const drawBackSide = (doc: any, w: number, h: number, isVert: boolean) => {
        const priRgb = hexToRgb(selectedTheme.primary);
        const secRgb = hexToRgb(selectedTheme.secondary);

        // Background
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, w, h, "F");

        if (isVert) {
            // Header bar
            doc.setFillColor(secRgb.r, secRgb.g, secRgb.b);
            doc.rect(0, 0, w, 8, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(6);
            doc.setTextColor(255, 255, 255);
            doc.text("EMERGENCY & RETURN INFORMATION", w / 2, 5.2, { align: "center" });

            let curY = 13;
            doc.setFontSize(6);

            // Office Address
            doc.setFont("helvetica", "bold");
            doc.setTextColor(priRgb.r, priRgb.g, priRgb.b);
            doc.text("OFFICE ADDRESS", 6, curY);
            curY += 3;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(51, 65, 85);
            const addrLines = doc.splitTextToSize(fields.companyAddress || "Company Address Details", w - 12);
            doc.text(addrLines, 6, curY);
            curY += addrLines.length * 2.8 + 3;

            // Contacts
            doc.setFont("helvetica", "bold");
            doc.setTextColor(priRgb.r, priRgb.g, priRgb.b);
            doc.text("CONTACT & EMERGENCY", 6, curY);
            curY += 3;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(51, 65, 85);
            doc.text(`Phone: ${fields.companyPhone || "—"}`, 6, curY);
            curY += 2.8;
            doc.text(`Emergency: ${fields.emergencyContact || "—"}`, 6, curY);
            curY += 2.8;
            doc.text(`Website: ${fields.companyWebsite || "—"}`, 6, curY);
            curY += 5;

            // Simulated Barcode / QR Code box
            doc.setDrawColor(203, 213, 225);
            doc.setFillColor(248, 250, 252);
            doc.roundedRect(w / 2 - 14, curY, 28, 12, 1, 1, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(5);
            doc.setTextColor(148, 163, 184);
            doc.text("||| || |||| ||| |||| |||", w / 2, curY + 6, { align: "center" });
            doc.text(fields.employeeId || "HRN-1042", w / 2, curY + 10, { align: "center" });
            curY += 15;

            // Signature line
            doc.setDrawColor(148, 163, 184);
            doc.setLineWidth(0.3);
            doc.line(w - 22, curY, w - 6, curY);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(4.5);
            doc.setTextColor(100, 116, 139);
            doc.text("Authorized Signatory", w - 14, curY + 2.5, { align: "center" });

            // Bottom bar
            doc.setFillColor(secRgb.r, secRgb.g, secRgb.b);
            doc.rect(0, h - 3, w, 3, "F");
        } else {
            // LANDSCAPE BACK SIDE
            doc.setFillColor(secRgb.r, secRgb.g, secRgb.b);
            doc.rect(0, 0, w, 7, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(6);
            doc.setTextColor(255, 255, 255);
            doc.text("EMERGENCY & RETURN INFORMATION", w / 2, 4.8, { align: "center" });

            let curY = 12;
            doc.setFontSize(6);

            // Left side details
            doc.setFont("helvetica", "bold");
            doc.setTextColor(priRgb.r, priRgb.g, priRgb.b);
            doc.text("OFFICE ADDRESS & CONTACT", 6, curY);
            curY += 3;

            doc.setFont("helvetica", "normal");
            doc.setTextColor(51, 65, 85);
            const addr = doc.splitTextToSize(fields.companyAddress || "Company Address", 45);
            doc.text(addr, 6, curY);
            curY += addr.length * 2.8 + 2;

            doc.text(`Phone: ${fields.companyPhone || "—"}`, 6, curY);
            curY += 2.8;
            doc.text(`Emergency: ${fields.emergencyContact || "—"}`, 6, curY);

            // Right side QR / Barcode & Signature
            doc.setDrawColor(203, 213, 225);
            doc.setFillColor(248, 250, 252);
            doc.roundedRect(w - 32, 12, 26, 20, 1, 1, "FD");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(5);
            doc.setTextColor(148, 163, 184);
            doc.text("||| || |||| ||| |||", w - 19, 21, { align: "center" });
            doc.text(fields.employeeId || "HRN-1042", w - 19, 27, { align: "center" });

            // Authorized signature line
            doc.setDrawColor(148, 163, 184);
            doc.setLineWidth(0.3);
            doc.line(w - 32, h - 8, w - 6, h - 8);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(4.5);
            doc.setTextColor(100, 116, 139);
            doc.text("Authorized Signatory", w - 19, h - 5, { align: "center" });
        }
    };

    return (
        <div className="id-card-designer-wrapper space-y-8">
            {/* TOP BAR / ACTIONS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <IdCard className="h-5 w-5 text-emerald-600" /> Free Employee ID Card Maker
                        </h2>
                        <p className="text-xs text-slate-500 mt-0.5">Customize details, pick a theme, and download print-ready CR80 PDF badges.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button type="button" onClick={loadDemoData} className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5" /> Sample Data
                        </button>
                        <button type="button" onClick={clearAll} className="px-3.5 py-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
                            <RotateCcw className="h-3.5 w-3.5" /> Clear
                        </button>
                    </div>
                </div>

                {/* CONTROLS: THEME & ORIENTATION */}
                <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    {/* Theme Picker */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Palette className="h-3.5 w-3.5 text-emerald-600" /> Color Theme
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {THEMES.map((theme) => (
                                <button
                                    key={theme.id}
                                    type="button"
                                    onClick={() => setSelectedTheme(theme)}
                                    className={`flex items-center gap-2 p-2 rounded-xl text-xs font-semibold border transition-all text-left ${
                                        selectedTheme.id === theme.id
                                            ? "border-emerald-600 bg-white shadow-sm ring-2 ring-emerald-500/20 text-slate-900"
                                            : "border-slate-200 bg-white/60 hover:bg-white text-slate-600"
                                    }`}
                                >
                                    <span className="h-4 w-4 rounded-full border border-white shadow-sm shrink-0" style={{ backgroundColor: theme.primary }} />
                                    <span className="truncate">{theme.name.split(" ")[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Orientation Picker */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Layers className="h-3.5 w-3.5 text-emerald-600" /> Badge Orientation &amp; View
                        </label>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => setOrientation("vertical")}
                                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                                    orientation === "vertical"
                                        ? "border-emerald-600 bg-white text-emerald-700 shadow-sm ring-2 ring-emerald-500/20"
                                        : "border-slate-200 bg-white/60 text-slate-600 hover:bg-white"
                                }`}
                            >
                                <CreditCard className="h-3.5 w-3.5 rotate-90" /> Vertical (Portrait)
                            </button>
                            <button
                                type="button"
                                onClick={() => setOrientation("horizontal")}
                                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                                    orientation === "horizontal"
                                        ? "border-emerald-600 bg-white text-emerald-700 shadow-sm ring-2 ring-emerald-500/20"
                                        : "border-slate-200 bg-white/60 text-slate-600 hover:bg-white"
                                }`}
                            >
                                <CreditCard className="h-3.5 w-3.5" /> Horizontal (Landscape)
                            </button>
                        </div>
                    </div>
                </div>

                {/* INPUT FORM SECTIONS */}
                <form className="space-y-6 text-xs">
                    {/* 1. COMPANY DETAILS */}
                    <div className="space-y-3">
                        <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-slate-500 border-b border-slate-100 pb-1">
                            <Building2 className="h-3.5 w-3.5 text-emerald-600" /> Company Details
                        </h3>
                        <div className="grid md:grid-cols-3 gap-3">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Company Logo</label>
                                {fields.companyLogo ? (
                                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 h-[38px]">
                                        <img src={fields.companyLogo} alt="Logo" className="h-6 max-w-[80px] object-contain" />
                                        <button type="button" onClick={() => setFields((p) => ({ ...p, companyLogo: "" }))} className="text-amber-700 font-bold text-[10px] ml-auto flex items-center">
                                            <X className="h-3 w-3" /> Remove
                                        </button>
                                    </div>
                                ) : (
                                    <label className="border border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-2 flex items-center justify-center gap-1.5 cursor-pointer bg-slate-50/50 h-[38px] text-slate-500 hover:text-emerald-600">
                                        <Upload className="h-3.5 w-3.5" /> <span className="font-semibold text-[11px]">Upload Logo (PNG/JPG)</span>
                                        <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                    </label>
                                )}
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Company Name</label>
                                <input type="text" name="companyName" value={fields.companyName} onChange={handleInputChange} placeholder="e.g. HR Niti Technologies" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Tagline / Subtitle</label>
                                <input type="text" name="companyTagline" value={fields.companyTagline} onChange={handleInputChange} placeholder="e.g. Corporate Identity Badge" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* 2. EMPLOYEE DETAILS & PHOTO */}
                    <div className="space-y-3">
                        <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-slate-500 border-b border-slate-100 pb-1">
                            <User className="h-3.5 w-3.5 text-emerald-600" /> Employee Information
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="col-span-2 md:col-span-1">
                                <label className="block font-bold text-slate-700 mb-1">Employee Photo</label>
                                {fields.photo ? (
                                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 h-[38px]">
                                        <img src={fields.photo} alt="Photo" className="h-7 w-7 rounded-full object-cover" />
                                        <span className="text-[10px] font-bold text-slate-600 truncate">Photo attached</span>
                                        <button type="button" onClick={() => setFields((p) => ({ ...p, photo: "" }))} className="text-amber-700 font-bold text-[10px] ml-auto flex items-center">
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                ) : (
                                    <label className="border border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-2 flex items-center justify-center gap-1.5 cursor-pointer bg-slate-50/50 h-[38px] text-slate-500 hover:text-emerald-600">
                                        <Upload className="h-3.5 w-3.5" /> <span className="font-semibold text-[11px]">Upload Photo</span>
                                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                                    </label>
                                )}
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                                <input type="text" name="employeeName" value={fields.employeeName} onChange={handleInputChange} placeholder="Rahul Sharma" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Employee ID</label>
                                <input type="text" name="employeeId" value={fields.employeeId} onChange={handleInputChange} placeholder="HRN-1042" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Designation</label>
                                <input type="text" name="designation" value={fields.designation} onChange={handleInputChange} placeholder="Senior Software Engineer" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Department</label>
                                <input type="text" name="department" value={fields.department} onChange={handleInputChange} placeholder="Engineering" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Joining Date</label>
                                <input type="text" name="joiningDate" value={fields.joiningDate} onChange={handleInputChange} placeholder="15-01-2024" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Blood Group</label>
                                <input type="text" name="bloodGroup" value={fields.bloodGroup} onChange={handleInputChange} placeholder="O+" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Emergency Contact</label>
                                <input type="text" name="emergencyContact" value={fields.emergencyContact} onChange={handleInputChange} placeholder="+91 98765 00112" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* 3. CONTACT & ADDRESS FOR BACK SIDE */}
                    <div className="space-y-3">
                        <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-slate-500 border-b border-slate-100 pb-1">
                            <Building2 className="h-3.5 w-3.5 text-emerald-600" /> Office Address &amp; Back Side Info
                        </h3>
                        <div className="grid md:grid-cols-3 gap-3">
                            <div className="md:col-span-2">
                                <label className="block font-bold text-slate-700 mb-1">Office Address</label>
                                <input type="text" name="companyAddress" value={fields.companyAddress} onChange={handleInputChange} placeholder="102 Innovation Park, Koramangala, Bengaluru" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Company Phone / Website</label>
                                <input type="text" name="companyPhone" value={fields.companyPhone} onChange={handleInputChange} placeholder="+91 80 4912 3456" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* DOWNLOAD BUTTON */}
                    <div className="pt-2">
                        <button
                            type="button"
                            onClick={handleDownloadPDF}
                            disabled={isDownloading}
                            className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <Download className="h-4 w-4" />
                            {isDownloading ? "Generating High-Res PDF..." : "Download Print-Ready CR80 ID Card PDF"}
                        </button>
                        <p className="text-[11px] text-slate-500 text-center mt-2">
                            Generates a 2-page print-ready CR80 PDF (Front &amp; Back sides) at standard 300 DPI scale.
                        </p>
                    </div>
                </form>
            </div>

            {/* LIVE PREVIEW SECTION */}
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-emerald-600" /> Interactive Live Preview (CR80 Standard)
                    </span>
                    <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                        <button
                            type="button"
                            onClick={() => setActiveSide("front")}
                            className={`px-3 py-1 rounded-lg transition-all ${activeSide === "front" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-600"}`}
                        >
                            Front
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveSide("back")}
                            className={`px-3 py-1 rounded-lg transition-all ${activeSide === "back" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-600"}`}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveSide("both")}
                            className={`px-3 py-1 rounded-lg transition-all ${activeSide === "both" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-600"}`}
                        >
                            Both Sides
                        </button>
                    </div>
                </div>

                {/* PREVIEW CONTAINER */}
                <div className="flex flex-wrap items-center justify-center gap-8 bg-slate-100/70 p-6 md:p-10 rounded-3xl border border-slate-200/80 min-h-[360px]">
                    {/* FRONT SIDE PREVIEW */}
                    {(activeSide === "front" || activeSide === "both") && (
                        <div className="space-y-2 text-center">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Front Side</span>
                            <div
                                className={`bg-white shadow-2xl rounded-2xl overflow-hidden relative border border-slate-200/90 font-sans flex flex-col justify-between transition-all ${
                                    orientation === "vertical" ? "w-[240px] h-[380px]" : "w-[380px] h-[240px]"
                                }`}
                            >
                                {orientation === "vertical" ? (
                                    /* VERTICAL FRONT PREVIEW */
                                    <>
                                        {/* Header */}
                                        <div className={`${selectedTheme.headerGradient} text-white p-3 text-center border-b-2 border-emerald-500`}>
                                            {fields.companyLogo ? (
                                                <img src={fields.companyLogo} alt="Logo" className="h-6 mx-auto mb-1 object-contain" />
                                            ) : null}
                                            <h3 className="font-extrabold text-xs tracking-wider uppercase leading-tight truncate px-1">{fields.companyName || "COMPANY NAME"}</h3>
                                            <p className="text-[9px] text-slate-300 tracking-wide mt-0.5 truncate">{fields.companyTagline || "IDENTITY BADGE"}</p>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-4 flex-1 flex flex-col items-center justify-center space-y-3">
                                            {/* Photo Frame */}
                                            <div className="h-24 w-20 rounded-xl border-2 border-emerald-600 shadow-md overflow-hidden bg-slate-100 flex items-center justify-center shrink-0">
                                                {fields.photo ? (
                                                    <img src={fields.photo} alt="Employee Photo" className="h-full w-full object-cover" />
                                                ) : (
                                                    <User className="h-10 w-10 text-slate-300" />
                                                )}
                                            </div>

                                            {/* Employee Name & Title */}
                                            <div className="text-center w-full">
                                                <h4 className="font-black text-sm text-slate-900 uppercase tracking-tight truncate">{fields.employeeName || "Rahul Sharma"}</h4>
                                                <p className={`text-[11px] font-bold ${selectedTheme.accentText} uppercase tracking-wider truncate`}>{fields.designation || "Senior Software Engineer"}</p>
                                            </div>

                                            {/* Key Info Grid */}
                                            <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-2 text-[10px] space-y-1">
                                                <div className="flex justify-between border-b border-slate-100 pb-0.5">
                                                    <span className="text-slate-400 font-semibold">EMP ID</span>
                                                    <span className="font-bold text-slate-800">{fields.employeeId || "HRN-1042"}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-100 pb-0.5">
                                                    <span className="text-slate-400 font-semibold">DEPARTMENT</span>
                                                    <span className="font-bold text-slate-800 truncate max-w-[100px]">{fields.department || "Engineering"}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400 font-semibold">BLOOD GROUP</span>
                                                    <span className="font-bold text-red-600">{fields.bloodGroup || "O+"}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer Bar */}
                                        <div className={`${selectedTheme.accentBg} text-white py-1 text-center text-[9px] font-extrabold uppercase tracking-widest`}>
                                            Official Identity Badge
                                        </div>
                                    </>
                                ) : (
                                    /* HORIZONTAL FRONT PREVIEW */
                                    <div className="h-full flex">
                                        {/* Left Side Banner with Photo */}
                                        <div className={`${selectedTheme.headerGradient} w-1/3 text-white p-3 flex flex-col items-center justify-center space-y-2 border-r-2 border-emerald-500 shrink-0`}>
                                            <div className="h-20 w-16 rounded-xl border-2 border-white/80 shadow-md overflow-hidden bg-slate-100 flex items-center justify-center shrink-0">
                                                {fields.photo ? (
                                                    <img src={fields.photo} alt="Photo" className="h-full w-full object-cover" />
                                                ) : (
                                                    <User className="h-8 w-8 text-slate-300" />
                                                )}
                                            </div>
                                            <span className="text-[8px] font-extrabold tracking-widest uppercase text-slate-200">ID BADGE</span>
                                        </div>

                                        {/* Right Side Content */}
                                        <div className="w-2/3 p-4 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
                                                    <div>
                                                        <h3 className="font-extrabold text-xs text-slate-900 uppercase leading-tight truncate">{fields.companyName || "COMPANY NAME"}</h3>
                                                        <p className="text-[8px] text-slate-400 uppercase tracking-wide">{fields.companyTagline || "Corporate Identity"}</p>
                                                    </div>
                                                    {fields.companyLogo ? (
                                                        <img src={fields.companyLogo} alt="Logo" className="h-5 max-w-[50px] object-contain" />
                                                    ) : null}
                                                </div>

                                                <div className="mt-2">
                                                    <h4 className="font-black text-sm text-slate-900 uppercase tracking-tight truncate">{fields.employeeName || "Rahul Sharma"}</h4>
                                                    <p className={`text-[10px] font-bold ${selectedTheme.accentText} uppercase tracking-wider truncate`}>{fields.designation || "Senior Software Engineer"}</p>
                                                </div>
                                            </div>

                                            <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 text-[9.5px] space-y-0.5">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400 font-semibold">EMP ID:</span>
                                                    <span className="font-bold text-slate-800">{fields.employeeId || "HRN-1042"}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400 font-semibold">DEPT:</span>
                                                    <span className="font-bold text-slate-800 truncate">{fields.department || "Engineering"}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400 font-semibold">BLOOD:</span>
                                                    <span className="font-bold text-red-600">{fields.bloodGroup || "O+"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* BACK SIDE PREVIEW */}
                    {(activeSide === "back" || activeSide === "both") && (
                        <div className="space-y-2 text-center">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Back Side</span>
                            <div
                                className={`bg-white shadow-2xl rounded-2xl overflow-hidden relative border border-slate-200/90 font-sans flex flex-col justify-between transition-all ${
                                    orientation === "vertical" ? "w-[240px] h-[380px]" : "w-[380px] h-[240px]"
                                }`}
                            >
                                {orientation === "vertical" ? (
                                    /* VERTICAL BACK PREVIEW */
                                    <>
                                        <div className={`${selectedTheme.headerGradient} text-white py-1.5 px-2 text-center text-[9px] font-extrabold uppercase tracking-widest`}>
                                            Emergency &amp; Office Info
                                        </div>

                                        <div className="p-4 flex-1 flex flex-col justify-between text-left text-[10px] space-y-3">
                                            <div>
                                                <span className="font-extrabold text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">Office Address</span>
                                                <p className="text-slate-700 font-medium leading-relaxed">{fields.companyAddress || "102 Innovation Park, Bengaluru"}</p>
                                            </div>

                                            <div className="space-y-1 bg-slate-50 p-2 rounded-xl border border-slate-100">
                                                <div className="flex items-center gap-1.5 text-slate-600">
                                                    <Phone className="h-3 w-3 text-emerald-600 shrink-0" />
                                                    <span className="font-bold text-slate-800 truncate">{fields.companyPhone || "+91 80 4912 3456"}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-600">
                                                    <HeartPulse className="h-3 w-3 text-red-600 shrink-0" />
                                                    <span className="font-bold text-slate-800 truncate">Emg: {fields.emergencyContact || "+91 98765 00112"}</span>
                                                </div>
                                            </div>

                                            {/* Barcode & QR Code simulation */}
                                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center flex flex-col items-center justify-center space-y-1">
                                                <QrCode className="h-8 w-8 text-slate-800" />
                                                <span className="font-mono text-[8px] font-bold text-slate-500 tracking-widest">{fields.employeeId || "HRN-1042"}</span>
                                            </div>

                                            {/* Signature line */}
                                            <div className="text-right pt-2 border-t border-slate-100">
                                                <div className="h-4 border-b border-dashed border-slate-300 w-24 ml-auto mb-1"></div>
                                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Authorized Signatory</span>
                                            </div>
                                        </div>

                                        <div className={`${selectedTheme.accentBg} h-2`}></div>
                                    </>
                                ) : (
                                    /* HORIZONTAL BACK PREVIEW */
                                    <div className="h-full flex flex-col justify-between">
                                        <div className={`${selectedTheme.headerGradient} text-white py-1.5 px-3 text-center text-[9px] font-extrabold uppercase tracking-widest`}>
                                            Emergency &amp; Return Information
                                        </div>

                                        <div className="p-4 flex-1 grid grid-cols-2 gap-4 text-left text-[10px]">
                                            <div className="space-y-2">
                                                <div>
                                                    <span className="font-extrabold text-[8px] uppercase tracking-wider text-slate-400 block">Office Address</span>
                                                    <p className="text-slate-700 font-medium leading-tight">{fields.companyAddress || "102 Innovation Park, Koramangala, Bengaluru"}</p>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[9px] text-slate-600 font-semibold">Phone: {fields.companyPhone || "+91 80 4912 3456"}</p>
                                                    <p className="text-[9px] text-red-600 font-bold">Emergency: {fields.emergencyContact || "+91 98765 00112"}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end justify-between">
                                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-center flex flex-col items-center justify-center">
                                                    <QrCode className="h-7 w-7 text-slate-800" />
                                                    <span className="font-mono text-[7px] font-bold text-slate-500 tracking-widest mt-0.5">{fields.employeeId || "HRN-1042"}</span>
                                                </div>

                                                <div className="text-right w-full">
                                                    <div className="h-3 border-b border-dashed border-slate-300 w-24 ml-auto mb-0.5"></div>
                                                    <span className="text-[7.5px] font-bold text-slate-400 uppercase">Authorized Signature</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${selectedTheme.accentBg} h-1.5`}></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
