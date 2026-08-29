import { FileSpreadsheet, FileText, Download, Printer } from "lucide-react";

export default function ReportTemplatesTiles() {
    const reports = [
        { title: "Monthly Payroll Sheet", category: "Payroll", format: "XLS, PDF" },
        { title: "PF & ESIC Challan", category: "Compliance", format: "TXT, XML" },
        { title: "Employee Master Data", category: "Core HR", format: "XLS" },
        { title: "Leave Register (Form T)", category: "Leave", format: "PDF" },
        { title: "Attendance Muster Roll", category: "Time Office", format: "XLS, PDF" },
        { title: "Full & Final Settlement", category: "Exit", format: "PDF" },
        { title: "TDS Estimation Report", category: "Tax", format: "XLS" },
        { title: "Gratuity Valuation", category: "Actuarial", format: "PDF" },
    ];

    return (
        <section id="templates" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-3">100+ Ready-to-use Templates</h2>
                        <p className="text-gray-600 max-w-xl">
                            Don't waste time building reports from scratch. Our extensive library covers every statutory and operational requirement.
                        </p>
                    </div>
                    <button className="text-primary font-bold hover:underline flex items-center gap-2">
                        View Full Library <ArrowRightIcon />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reports.map((report, idx) => (
                        <div key={idx} className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-gray-50 rounded-lg text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <FileSpreadsheet className="h-6 w-6" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                    {report.category}
                                </span>
                            </div>

                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{report.title}</h3>
                            <p className="text-sm text-gray-500 mb-6">Formats: {report.format}</p>

                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <button className="text-xs font-bold text-gray-600 flex items-center gap-1 hover:text-primary">
                                    <Download className="h-3 w-3" /> Download
                                </button>
                                <button className="text-xs font-bold text-gray-600 flex items-center gap-1 hover:text-primary">
                                    <Printer className="h-3 w-3" /> Print
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}
