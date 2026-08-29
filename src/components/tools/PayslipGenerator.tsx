"use client";
import { useState, useMemo } from "react";
import {
    FileText,
    Download,
    RotateCcw,
    Sparkles,
    Building2,
    User,
    Calendar,
    Plus,
    Trash2,
    Upload,
    X,
} from "lucide-react";

function formatINR(n: number, symbol = "\u20B9") {
    const numStr = Math.round(n).toLocaleString("en-IN");
    if (!symbol) return numStr;
    return symbol.trim() === "Rs." ? `Rs. ${numStr}` : `${symbol}${numStr}`;
}

function numberToWordsINR(num: number): string {
    if (num <= 0) return "Zero Rupees Only";
    const a = [
        "", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ",
        "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen ",
    ];
    const b = ["", "", "Twenty ", "Thirty ", "Forty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "];
    function inWords(n: number): string {
        if (n < 20) return a[n];
        if (n < 100) return b[Math.floor(n / 10)] + a[n % 10];
        if (n < 1000) return a[Math.floor(n / 100)] + "Hundred " + inWords(n % 100);
        if (n < 100000) return inWords(Math.floor(n / 1000)) + "Thousand " + inWords(n % 1000);
        if (n < 10000000) return inWords(Math.floor(n / 100000)) + "Lakh " + inWords(n % 100000);
        return inWords(Math.floor(n / 10000000)) + "Crore " + inWords(n % 10000000);
    }
    return `Rupees ${inWords(Math.floor(num)).trim()} Only`;
}

interface EarningItem { id: string; label: string; amount: string; }
interface DeductionItem { id: string; label: string; amount: string; }

const DEFAULT_EARNINGS: EarningItem[] = [
    { id: "e1", label: "Basic Salary", amount: "45000" },
    { id: "e2", label: "House Rent Allowance (HRA)", amount: "22500" },
    { id: "e3", label: "Conveyance Allowance", amount: "3000" },
    { id: "e4", label: "Medical Allowance", amount: "2000" },
    { id: "e5", label: "Special Allowance", amount: "18000" },
];
const DEFAULT_DEDUCTIONS: DeductionItem[] = [
    { id: "d1", label: "Provident Fund (EPF)", amount: "1800" },
    { id: "d2", label: "Professional Tax", amount: "200" },
    { id: "d3", label: "Income Tax (TDS)", amount: "4200" },
];
const DEMO_FIELDS = {
    companyName: "HR Niti Technologies Pvt Ltd",
    companyAddress: "102 Innovation Park, Koramangala, Bengaluru, Karnataka - 560095",
    companyLogo: "",
    employeeName: "Rahul Sharma",
    employeeId: "HRN-1042",
    designation: "Senior Software Engineer",
    department: "Product Engineering",
    pan: "ABCDE1234F",
    bankAccount: "XXXXXX4892",
    uan: "100987654321",
    pfNumber: "BG/BAN/0012345/000/1042",
    payPeriod: "August 2026",
    payDate: "31-08-2026",
    paidDays: "31",
    lopDays: "0",
};

export default function PayslipGenerator() {
    const [fields, setFields] = useState(DEMO_FIELDS);
    const [earnings, setEarnings] = useState<EarningItem[]>(DEFAULT_EARNINGS);
    const [deductions, setDeductions] = useState<DeductionItem[]>(DEFAULT_DEDUCTIONS);
    const [logoPreview, setLogoPreview] = useState<string>("");
    const [isDownloading, setIsDownloading] = useState(false);

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 1024 * 1024) { alert("File size exceeds 1MB."); return; }
        const reader = new FileReader();
        reader.onload = (ev) => {
            const b64 = ev.target?.result as string;
            setLogoPreview(b64);
            setFields((p) => ({ ...p, companyLogo: b64 }));
        };
        reader.readAsDataURL(file);
    };

    const removeLogo = () => { setLogoPreview(""); setFields((p) => ({ ...p, companyLogo: "" })); };

    const handleEarningChange = (id: string, key: "label" | "amount", val: string) =>
        setEarnings((p) => p.map((i) => i.id === id ? { ...i, [key]: val } : i));
    const addEarning = () => setEarnings((p) => [...p, { id: "e_" + Date.now(), label: "Other Allowance", amount: "0" }]);
    const removeEarning = (id: string) => setEarnings((p) => p.filter((i) => i.id !== id));

    const handleDeductionChange = (id: string, key: "label" | "amount", val: string) =>
        setDeductions((p) => p.map((i) => i.id === id ? { ...i, [key]: val } : i));
    const addDeduction = () => setDeductions((p) => [...p, { id: "d_" + Date.now(), label: "Other Deduction", amount: "0" }]);
    const removeDeduction = (id: string) => setDeductions((p) => p.filter((i) => i.id !== id));

    const grossEarnings = useMemo(() => earnings.reduce((s, i) => s + (parseFloat(i.amount) || 0), 0), [earnings]);
    const totalDeductions = useMemo(() => deductions.reduce((s, i) => s + (parseFloat(i.amount) || 0), 0), [deductions]);
    const netPay = useMemo(() => Math.max(0, grossEarnings - totalDeductions), [grossEarnings, totalDeductions]);
    const netPayInWords = useMemo(() => numberToWordsINR(netPay), [netPay]);

    // Build a standalone self-contained HTML string and open in a hidden iframe, then print that iframe only
    const buildPayslipHTML = () => {
        const earningsRows = earnings.map(e => `
            <tr><td>${e.label || "Allowance"}</td><td class="amt">${formatINR(parseFloat(e.amount) || 0)}</td></tr>
        `).join("");
        const deductionRows = deductions.map(d => `
            <tr><td>${d.label || "Deduction"}</td><td class="amt">${formatINR(parseFloat(d.amount) || 0)}</td></tr>
        `).join("");
        const logoHTML = logoPreview
            ? `<img src="${logoPreview}" alt="Logo" style="height:48px;max-width:130px;object-fit:contain;" />`
            : `<div style="height:48px;width:90px;border:1.5px dashed #aaa;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#aaa;font-weight:bold;">YOUR LOGO</div>`;

        return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Payslip \u2014 ${fields.employeeName} \u2014 ${fields.payPeriod}</title>
<style>
  @page { size: A4 portrait; margin: 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; }
  body { background: #fff; color: #111; font-size: 11px; }
  .wrap { width: 100%; max-width: 780px; margin: 0 auto; padding: 24px; }

  /* Header */
  .hdr { display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 2.5px solid #111; padding-bottom: 12px; margin-bottom: 12px; }
  .company-name { font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; }
  .company-addr { font-size: 10px; color: #555; margin-top: 4px; max-width: 340px; }

  /* Period bar */
  .period-bar { background: #f1f5f9; border: 1px solid #ccc; border-radius: 6px; text-align: center; padding: 5px 10px; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }

  /* Metadata grid */
  .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; border: 1px solid #ddd; border-radius: 8px; padding: 10px 12px; background: #fafafa; margin-bottom: 14px; }
  .meta-row { display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 3px; }
  .meta-row:last-child, .meta-row:nth-last-child(2):nth-child(odd) { border-bottom: none; }
  .meta-lbl { color: #888; font-weight: 500; }
  .meta-val { font-weight: 700; color: #111; text-align: right; }

  /* Earnings / Deductions table */
  .ed-table { width: 100%; border-collapse: collapse; border: 1.5px solid #111; border-radius: 8px; overflow: hidden; margin-bottom: 14px; font-size: 10.5px; }
  .ed-table thead tr { background: #1e293b; color: #fff; }
  .ed-table thead th { padding: 7px 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
  .ed-table thead th.amt { text-align: right; }
  .ed-table thead th.sep { border-left: 1px solid #475569; }
  .ed-table tbody td { padding: 4px 10px; vertical-align: top; }
  .ed-table tbody .sep-col { border-left: 1px solid #e2e8f0; }
  .ed-table tbody tr:nth-child(even) td { background: #f9fafb; }
  td.amt { text-align: right; font-weight: 700; }
  .ed-table tfoot td { background: #f1f5f9; border-top: 1.5px solid #ccc; font-weight: 800; padding: 6px 10px; font-size: 11px; }
  .ed-table tfoot td.green { color: #15803d; }
  .ed-table tfoot td.amber { color: #92400e; }

  /* Net pay */
  .net-pay { background: #1e1b4b; color: #fff; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .net-pay-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #a5f3fc; }
  .net-pay-amount { font-size: 22px; font-weight: 900; color: #fff; }

  /* Words & footer */
  .words { font-size: 10.5px; margin-bottom: 6px; }
  .words span { font-style: italic; font-weight: 700; }
  .note { text-align: center; font-size: 9.5px; color: #aaa; border-top: 1px solid #eee; padding-top: 8px; margin-top: 4px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <div>
      <div class="company-name">${fields.companyName || "COMPANY NAME"}</div>
      <div class="company-addr">${fields.companyAddress || "Company Address Details"}</div>
    </div>
    ${logoHTML}
  </div>

  <div class="period-bar">PAYSLIP FOR \u2014 ${fields.payPeriod || "MONTH YEAR"}</div>

  <div class="meta-grid">
    <div class="meta-row"><span class="meta-lbl">Employee Name</span><span class="meta-val">${fields.employeeName || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">Employee ID</span><span class="meta-val">${fields.employeeId || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">Designation</span><span class="meta-val">${fields.designation || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">Department</span><span class="meta-val">${fields.department || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">PAN</span><span class="meta-val">${fields.pan || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">Bank A/C</span><span class="meta-val">${fields.bankAccount || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">UAN</span><span class="meta-val">${fields.uan || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">PF Number</span><span class="meta-val">${fields.pfNumber || "\u2014"}</span></div>
    <div class="meta-row"><span class="meta-lbl">Paid Days</span><span class="meta-val">${fields.paidDays}</span></div>
    <div class="meta-row"><span class="meta-lbl">LOP Days</span><span class="meta-val">${fields.lopDays}</span></div>
  </div>

  <table class="ed-table">
    <thead>
      <tr>
        <th style="width:25%">EARNINGS</th>
        <th class="amt" style="width:25%">AMOUNT (\u20B9)</th>
        <th class="sep" style="width:25%">DEDUCTIONS</th>
        <th class="amt sep" style="width:25%">AMOUNT (\u20B9)</th>
      </tr>
    </thead>
    <tbody>
      ${(() => {
        const maxLen = Math.max(earnings.length, deductions.length);
        return Array.from({ length: maxLen }).map((_, i) => {
            const e = earnings[i];
            const d = deductions[i];
            return `<tr>
                <td>${e ? e.label || "Allowance" : ""}</td>
                <td class="amt">${e ? formatINR(parseFloat(e.amount) || 0) : ""}</td>
                <td class="sep-col">${d ? d.label || "Deduction" : ""}</td>
                <td class="amt">${d ? formatINR(parseFloat(d.amount) || 0) : ""}</td>
            </tr>`;
        }).join("");
      })()}
    </tbody>
    <tfoot>
      <tr>
        <td><strong>Gross Earnings</strong></td>
        <td class="amt green"><strong>${formatINR(grossEarnings)}</strong></td>
        <td class="sep-col"><strong>Total Deductions</strong></td>
        <td class="amt amber"><strong>${formatINR(totalDeductions)}</strong></td>
      </tr>
    </tfoot>
  </table>

  <div class="net-pay">
    <div class="net-pay-label">NET PAY</div>
    <div class="net-pay-amount">${formatINR(netPay)}</div>
  </div>

  <div class="words">Amount in words: <span>${netPayInWords}</span></div>
  <div class="note">This is a system-generated payslip and does not require a signature. &nbsp;|&nbsp; Generated via HR Niti Payslip Generator \u2014 hrniti.com</div>
</div>
</body>
</html>`;
    };

    // Load a script dynamically if not already loaded
    const loadScript = (src: string): Promise<void> =>
        new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
            const s = document.createElement("script");
            s.src = src;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.body.appendChild(s);
        });

    // Fully programmatic PDF — no html2canvas, no rendering issues, no cropping ever
    const handleDownloadPDF = async () => {
        setIsDownloading(true);
        try {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js");

            const { jsPDF } = (window as any).jspdf;
            const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const W = 210;
            const M = 14;       // left/right margin
            const CW = W - M * 2; // content width = 182mm
            let y = M;

            // ── COMPANY HEADER ──────────────────────────────────────────────
            // Logo (right side)
            if (logoPreview) {
                try { doc.addImage(logoPreview, "PNG", W - M - 28, y - 1, 28, 12); } catch (_) {}
            } else {
                doc.setDrawColor(203, 213, 225);
                doc.setLineWidth(0.3);
                doc.roundedRect(W - M - 28, y - 1, 28, 12, 1, 1);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7);
                doc.setTextColor(148, 163, 184);
                doc.text("YOUR LOGO", W - M - 14, y + 6, { align: "center" });
            }

            // Company name
            doc.setFont("helvetica", "bold");
            doc.setFontSize(15);
            doc.setTextColor(15, 23, 42);
            const compName = (fields.companyName || "COMPANY NAME").toUpperCase();
            doc.text(compName, M, y + 6);
            y += 9;

            // Company address
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(100, 116, 139);
            const addrLines = doc.splitTextToSize(fields.companyAddress || "Company Address", 130);
            doc.text(addrLines, M, y);
            y += addrLines.length * 4 + 3;

            // Horizontal rule
            doc.setDrawColor(15, 23, 42);
            doc.setLineWidth(0.8);
            doc.line(M, y, W - M, y);
            y += 4;

            // ── PERIOD BAR ──────────────────────────────────────────────────
            doc.setFillColor(241, 245, 249);
            doc.setDrawColor(203, 213, 225);
            doc.setLineWidth(0.3);
            doc.roundedRect(M, y, CW, 8, 1, 1, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor(51, 65, 85);
            const period = `PAYSLIP FOR \u2014 ${(fields.payPeriod || "MONTH YEAR").toUpperCase()}`;
            doc.text(period, W / 2, y + 5.4, { align: "center" });
            y += 11;

            // ── METADATA TABLE ──────────────────────────────────────────────
            const metaData = [
                ["Employee Name", fields.employeeName || "\u2014", "Employee ID",  fields.employeeId  || "\u2014"],
                ["Designation",   fields.designation  || "\u2014", "Department",   fields.department  || "\u2014"],
                ["PAN",           fields.pan          || "\u2014", "Bank A/C",     fields.bankAccount || "\u2014"],
                ["UAN",           fields.uan          || "\u2014", "PF Number",    fields.pfNumber    || "\u2014"],
                ["Paid Days",     String(fields.paidDays || "0"), "LOP Days",    String(fields.lopDays || "0")],
            ];

            (doc as any).autoTable({
                startY: y,
                body: metaData,
                margin: { left: M, right: M },
                theme: "plain",
                styles: { fontSize: 8.5, cellPadding: { top: 2.2, bottom: 2.2, left: 2, right: 2 }, lineColor: [226, 232, 240], lineWidth: { bottom: 0.2 } },
                columnStyles: {
                    0: { fontStyle: "normal", textColor: [100, 116, 139], cellWidth: 33 },
                    1: { fontStyle: "bold",   textColor: [15, 23, 42],    cellWidth: 55 },
                    2: { fontStyle: "normal", textColor: [100, 116, 139], cellWidth: 33, lineWidth: { left: 0.3, bottom: 0.2 }, lineColor: [203, 213, 225] },
                    3: { fontStyle: "bold",   textColor: [15, 23, 42],    cellWidth: 61 },
                },
            });
            y = (doc as any).lastAutoTable.finalY + 4;

            // ── EARNINGS / DEDUCTIONS TABLE ─────────────────────────────────
            const maxRows = Math.max(earnings.length, deductions.length);
            const edBody = Array.from({ length: maxRows }, (_, i) => {
                const e = earnings[i];
                const d = deductions[i];
                return [
                    e ? (e.label || "Allowance") : "",
                    e ? formatINR(parseFloat(e.amount) || 0, "Rs.") : "",
                    d ? (d.label || "Deduction") : "",
                    d ? formatINR(parseFloat(d.amount) || 0, "Rs.") : "",
                ];
            });

            (doc as any).autoTable({
                startY: y,
                head: [[
                    { content: "EARNINGS",     styles: { halign: "left" } },
                    { content: "AMOUNT (Rs.)", styles: { halign: "right" } },
                    { content: "DEDUCTIONS",   styles: { halign: "left" } },
                    { content: "AMOUNT (Rs.)", styles: { halign: "right" } },
                ]],
                body: edBody,
                foot: [[
                    { content: "Gross Earnings",   styles: { fontStyle: "bold", textColor: [21, 128, 61] } },
                    { content: formatINR(grossEarnings, "Rs."), styles: { halign: "right", fontStyle: "bold", textColor: [21, 128, 61] } },
                    { content: "Total Deductions",  styles: { fontStyle: "bold", textColor: [146, 64, 14] } },
                    { content: formatINR(totalDeductions, "Rs."), styles: { halign: "right", fontStyle: "bold", textColor: [146, 64, 14] } },
                ]],
                margin: { left: M, right: M },
                theme: "striped",
                headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8.5, cellPadding: { top: 3, bottom: 3, left: 3, right: 3 } },
                footStyles: { fillColor: [241, 245, 249], fontStyle: "bold", fontSize: 8.5, lineColor: [203, 213, 225], lineWidth: { top: 0.5 }, cellPadding: { top: 2.5, bottom: 2.5, left: 3, right: 3 } },
                styles: { fontSize: 8.5, cellPadding: { top: 2.2, bottom: 2.2, left: 3, right: 3 }, lineColor: [226, 232, 240] },
                alternateRowStyles: { fillColor: [249, 250, 251] },
                columnStyles: {
                    0: { cellWidth: 52 },
                    1: { halign: "right", cellWidth: 39 },
                    2: { cellWidth: 52, lineWidth: { left: 0.3 }, lineColor: [203, 213, 225] },
                    3: { halign: "right", cellWidth: 39 },
                },
                showFoot: "lastPage",
            });
            y = (doc as any).lastAutoTable.finalY + 4;

            // ── NET PAY BANNER ───────────────────────────────────────────────
            doc.setFillColor(30, 27, 75);
            doc.roundedRect(M, y, CW, 17, 2, 2, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(165, 243, 252);
            doc.text("NET PAY", M + 5, y + 6.5);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            doc.setTextColor(129, 140, 248);
            doc.text(netPayInWords, M + 5, y + 13);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(19);
            doc.setTextColor(255, 255, 255);
            doc.text(formatINR(netPay, "Rs."), W - M - 3, y + 12, { align: "right" });
            y += 21;

            // ── FOOTER ───────────────────────────────────────────────────────
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            doc.setTextColor(148, 163, 184);
            doc.text(
                "This is a system-generated payslip and does not require a signature.  |  Generated via HR Niti \u2014 hrniti.com",
                W / 2, y, { align: "center" }
            );

            // ── SAVE ─────────────────────────────────────────────────────────
            const empName = (fields.employeeName || "Employee").trim().replace(/\s+/g, "_");
            const payPrd  = (fields.payPeriod   || "Month"   ).trim().replace(/\s+/g, "_");
            doc.save(`Payslip_${empName}_${payPrd}.pdf`);

        } catch (err) {
            console.error("PDF generation failed:", err);
            alert("PDF generation failed. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    const resetAll = () => {
        setFields({ companyName: "", companyAddress: "", companyLogo: "", employeeName: "", employeeId: "", designation: "", department: "", pan: "", bankAccount: "", uan: "", pfNumber: "", payPeriod: "", payDate: "", paidDays: "30", lopDays: "0" });
        setEarnings([{ id: "e1", label: "Basic Salary", amount: "0" }, { id: "e2", label: "House Rent Allowance (HRA)", amount: "0" }]);
        setDeductions([{ id: "d1", label: "Provident Fund (EPF)", amount: "0" }, { id: "d2", label: "Professional Tax", amount: "0" }]);
        setLogoPreview("");
    };

    const loadDemo = () => { setFields(DEMO_FIELDS); setEarnings(DEFAULT_EARNINGS); setDeductions(DEFAULT_DEDUCTIONS); };

    return (
        <div className="payslip-generator-wrapper space-y-10">

            {/* â”€â”€â”€ TOP: INPUT FORM â”€â”€â”€ */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-emerald-600" /> Online Payslip Generator
                        </h2>
                        <p className="text-xs text-slate-500 mt-0.5">Fill in company, employee details, earnings &amp; deductions.</p>
                    </div>
                    <div className="flex gap-2">
                        <button type="button" onClick={loadDemo} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-all flex items-center gap-1">
                            <Sparkles className="h-3.5 w-3.5" /> Demo Data
                        </button>
                        <button type="button" onClick={resetAll} className="px-3 py-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg text-xs font-bold transition-all flex items-center gap-1">
                            <RotateCcw className="h-3.5 w-3.5" /> Clear
                        </button>
                    </div>
                </div>

                <form className="space-y-6 text-xs">
                    {/* â”€â”€ COMPANY + LOGO â”€â”€ */}
                    <div className="space-y-3">
                        <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-slate-500 border-b border-slate-100 pb-1">
                            <Building2 className="h-3.5 w-3.5 text-emerald-600" /> Company Details
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="md:col-span-1">
                                <label className="block font-bold text-slate-700 mb-1">Company Logo</label>
                                {logoPreview ? (
                                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3 h-[70px]">
                                        <img src={logoPreview} alt="Logo" className="h-10 max-w-[100px] object-contain" />
                                        <button type="button" onClick={removeLogo} className="text-amber-700 hover:text-amber-900 font-bold text-xs flex items-center gap-1 ml-auto">
                                            <X className="h-3.5 w-3.5" /> Remove
                                        </button>
                                    </div>
                                ) : (
                                    <label htmlFor="logo-upload" className="border-2 border-dashed border-slate-200 hover:border-emerald-400 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 h-[70px]">
                                        <Upload className="h-4 w-4 text-slate-400 mb-0.5" />
                                        <span className="font-semibold text-slate-600 text-[10px]">Upload PNG / JPG (max 1MB)</span>
                                        <input id="logo-upload" name="company_logo" type="file" accept="image/png,image/jpeg" onChange={handleLogoUpload} className="hidden" />
                                    </label>
                                )}
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="companyName" className="block font-bold text-slate-700 mb-1">Company Name</label>
                                <input id="companyName" name="companyName" type="text" value={fields.companyName} onChange={handleFieldChange} placeholder="e.g. Acme Corp India Pvt Ltd" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="companyAddress" className="block font-bold text-slate-700 mb-1">Company Address</label>
                                <textarea id="companyAddress" name="companyAddress" rows={2} value={fields.companyAddress} onChange={handleFieldChange} placeholder="e.g. 102 Innovation Park, Bengaluru" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                            </div>
                        </div>
                    </div>

                    {/* â”€â”€ EMPLOYEE + PAY PERIOD â”€â”€ */}
                    <div className="space-y-3">
                        <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-slate-500 border-b border-slate-100 pb-1">
                            <User className="h-3.5 w-3.5 text-emerald-600" /> Employee Details &amp; Pay Period
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { id: "employeeName", label: "Employee Name", placeholder: "Rahul Sharma" },
                                { id: "employeeId", label: "Employee ID", placeholder: "EMP-1042" },
                                { id: "designation", label: "Designation", placeholder: "Software Engineer" },
                                { id: "department", label: "Department", placeholder: "Engineering" },
                                { id: "pan", label: "PAN", placeholder: "ABCDE1234F" },
                                { id: "bankAccount", label: "Bank Account No.", placeholder: "XXXXXX4892" },
                                { id: "uan", label: "UAN", placeholder: "100987654321" },
                                { id: "pfNumber", label: "PF Number", placeholder: "BG/BAN/0012345/1042" },
                                { id: "payPeriod", label: "Pay Period", placeholder: "August 2026" },
                                { id: "payDate", label: "Pay Date", placeholder: "31-08-2026" },
                                { id: "paidDays", label: "Paid Days", placeholder: "31" },
                                { id: "lopDays", label: "LOP Days", placeholder: "0" },
                            ].map(({ id, label, placeholder }) => (
                                <div key={id}>
                                    <label htmlFor={id} className="block font-bold text-slate-700 mb-1">{label}</label>
                                    <input id={id} name={id} type="text" value={(fields as any)[id]} onChange={handleFieldChange} placeholder={placeholder}
                                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* â”€â”€ EARNINGS + DEDUCTIONS side by side â”€â”€ */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Earnings */}
                        <div className="space-y-3">
                            <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center justify-between text-slate-500 border-b border-slate-100 pb-1">
                                <span>Earnings</span>
                                <span className="text-emerald-700 font-bold">Gross: {formatINR(grossEarnings)}</span>
                            </h3>
                            <div className="space-y-2">
                                {earnings.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2">
                                        <input type="text" value={item.label} onChange={(e) => handleEarningChange(item.id, "label", e.target.value)} placeholder="Earning Name" className="flex-1 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold" />
                                        <input type="number" inputMode="decimal" value={item.amount} onChange={(e) => handleEarningChange(item.id, "amount", e.target.value)} placeholder="0" className="w-28 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-right" />
                                        <button type="button" onClick={() => removeEarning(item.id)} className="text-slate-400 hover:text-amber-700 p-1"><Trash2 className="h-3.5 w-3.5" /></button>
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={addEarning} className="w-full border border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-xl py-2 font-bold text-xs flex items-center justify-center gap-1 transition-colors">
                                <Plus className="h-3.5 w-3.5" /> Add Earning
                            </button>
                        </div>

                        {/* Deductions */}
                        <div className="space-y-3">
                            <h3 className="font-bold uppercase tracking-wider text-[11px] flex items-center justify-between text-slate-500 border-b border-slate-100 pb-1">
                                <span>Deductions</span>
                                <span className="text-amber-800 font-bold">Total: {formatINR(totalDeductions)}</span>
                            </h3>
                            <div className="space-y-2">
                                {deductions.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2">
                                        <input type="text" value={item.label} onChange={(e) => handleDeductionChange(item.id, "label", e.target.value)} placeholder="Deduction Name" className="flex-1 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold" />
                                        <input type="number" inputMode="decimal" value={item.amount} onChange={(e) => handleDeductionChange(item.id, "amount", e.target.value)} placeholder="0" className="w-28 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-right" />
                                        <button type="button" onClick={() => removeDeduction(item.id)} className="text-slate-400 hover:text-amber-700 p-1"><Trash2 className="h-3.5 w-3.5" /></button>
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={addDeduction} className="w-full border border-dashed border-amber-300 text-amber-800 hover:bg-amber-50 rounded-xl py-2 font-bold text-xs flex items-center justify-center gap-1 transition-colors">
                                <Plus className="h-3.5 w-3.5" /> Add Deduction
                            </button>
                        </div>
                    </div>

                    {/* â”€â”€ DOWNLOAD BUTTON â”€â”€ */}
                    <div className="pt-2">
                        <button type="button" onClick={handleDownloadPDF} disabled={isDownloading}
                            className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                            <Download className="h-4 w-4" />
                            {isDownloading ? "Generating PDFâ€¦" : "Download Payslip as PDF"}
                        </button>
                        <p className="text-[11px] text-slate-500 text-center mt-2">
                            Your payslip PDF downloads directly \u2014 no popups or print dialogs.
                        </p>
                    </div>
                </form>
            </div>

            {/* â”€â”€â”€ BOTTOM: LIVE PREVIEW â”€â”€â”€ */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-emerald-600" /> Live Preview
                    </span>
                    <button type="button" onClick={handleDownloadPDF} disabled={isDownloading}
                        className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all disabled:opacity-50">
                        <Download className="h-3.5 w-3.5" />
                        {isDownloading ? "Generatingâ€¦" : "Download PDF"}
                    </button>
                </div>

                {/* â”€â”€ PAYSLIP DOCUMENT â”€â”€ */}
                <div id="printable-payslip" className="bg-white border border-slate-300 rounded-2xl shadow-xl overflow-hidden font-sans text-slate-900">

                    {/* Company Header */}
                    <div className="flex items-start justify-between gap-6 border-b-[3px] border-slate-800 px-8 pt-8 pb-5">
                        <div className="min-w-0 flex-1">
                            <h2 className="text-2xl font-black uppercase text-slate-900 leading-tight tracking-tight">
                                {fields.companyName || "COMPANY NAME"}
                            </h2>
                            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{fields.companyAddress || "Company Address, City, State - PIN"}</p>
                        </div>
                        {logoPreview
                            ? <img src={logoPreview} alt="Company Logo" className="h-14 max-w-[150px] object-contain shrink-0" />
                            : <div className="h-14 w-28 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Your Logo</div>
                        }
                    </div>

                    {/* Period bar */}
                    <div className="bg-slate-100 border-b border-slate-200 text-slate-700 text-center py-2.5 text-xs font-extrabold uppercase tracking-[0.2em]">
                        Payslip For \u2014 {fields.payPeriod || "Month Year"}
                    </div>

                    {/* Metadata grid \u2014 4 columns: label | value | label | value */}
                    <div className="px-8 py-4 bg-slate-50/70 border-b border-slate-200">
                        <table className="w-full text-sm border-collapse">
                            <tbody>
                                {[
                                    ["Employee Name", fields.employeeName, "Employee ID", fields.employeeId],
                                    ["Designation", fields.designation, "Department", fields.department],
                                    ["PAN", fields.pan, "Bank A/C", fields.bankAccount],
                                    ["UAN", fields.uan, "PF Number", fields.pfNumber],
                                    ["Paid Days", fields.paidDays, "LOP Days", fields.lopDays],
                                ].map(([l1, v1, l2, v2], i) => (
                                    <tr key={i} className="border-b border-slate-100 last:border-0">
                                        <td className="py-2 pr-3 text-slate-500 font-medium text-xs whitespace-nowrap" style={{ width: "20%" }}>{l1}</td>
                                        <td className="py-2 pr-6 font-bold text-slate-900 text-xs" style={{ width: "30%" }}>{v1 || "\u2014"}</td>
                                        <td className="py-2 pr-3 text-slate-500 font-medium text-xs whitespace-nowrap border-l border-slate-200 pl-6" style={{ width: "20%" }}>{l2}</td>
                                        <td className="py-2 font-bold text-slate-900 text-xs" style={{ width: "30%" }}>{v2 || "\u2014"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Earnings / Deductions table */}
                    <div className="border-b border-slate-200">
                        {/* Table header */}
                        <div className="grid grid-cols-2 bg-slate-900 text-white">
                            <div className="flex items-center justify-between px-8 py-3 text-xs font-bold uppercase tracking-wider">
                                <span>Earnings</span>
                                <span>Amount&nbsp;(\u20B9)</span>
                            </div>
                            <div className="flex items-center justify-between px-8 py-3 text-xs font-bold uppercase tracking-wider border-l border-slate-700">
                                <span>Deductions</span>
                                <span>Amount&nbsp;(\u20B9)</span>
                            </div>
                        </div>
                        {/* Table body rows */}
                        <div className="grid grid-cols-2 bg-white">
                            <div className="divide-y divide-slate-100">
                                {earnings.map((item, idx) => (
                                    <div key={item.id} className={`flex items-center justify-between px-8 py-2.5 gap-4 ${idx % 2 === 1 ? "bg-slate-50/50" : ""}`}>
                                        <span className="text-slate-700 text-sm">{item.label || "Allowance"}</span>
                                        <span className="font-bold text-slate-900 text-sm shrink-0">{formatINR(parseFloat(item.amount) || 0)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="divide-y divide-slate-100 border-l border-slate-200">
                                {deductions.map((item, idx) => (
                                    <div key={item.id} className={`flex items-center justify-between px-8 py-2.5 gap-4 ${idx % 2 === 1 ? "bg-slate-50/50" : ""}`}>
                                        <span className="text-slate-700 text-sm">{item.label || "Deduction"}</span>
                                        <span className="font-bold text-slate-900 text-sm shrink-0">{formatINR(parseFloat(item.amount) || 0)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Totals row */}
                        <div className="grid grid-cols-2 bg-slate-100 border-t-2 border-slate-300">
                            <div className="flex items-center justify-between px-8 py-3">
                                <span className="font-bold text-sm text-slate-800">Gross Earnings</span>
                                <span className="font-extrabold text-sm text-emerald-700">{formatINR(grossEarnings)}</span>
                            </div>
                            <div className="flex items-center justify-between px-8 py-3 border-l border-slate-300">
                                <span className="font-bold text-sm text-slate-800">Total Deductions</span>
                                <span className="font-extrabold text-sm text-amber-700">{formatINR(totalDeductions)}</span>
                            </div>
                        </div>
                    </div>

                    {/* NET PAY banner */}
                    <div className="bg-indigo-950 text-white flex items-center justify-between px-8 py-5">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 mb-1">Net Pay</p>
                            <p className="text-[11px] text-indigo-300 italic">{netPayInWords}</p>
                        </div>
                        <p className="text-3xl font-black tracking-tight">{formatINR(netPay)}</p>
                    </div>

                    {/* Footer note */}
                    <div className="px-8 py-3 text-center text-xs text-slate-400 bg-slate-50">
                        This is a system-generated payslip and does not require a signature.&nbsp;&nbsp;|&nbsp;&nbsp;Generated via HR Niti \u2014 hrniti.com
                    </div>
                </div>
            </div>
        </div>
    );
}

