"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ToolFAQ as ToolFAQItem } from "@/lib/toolsData";

export default function ToolFAQ({ faqs }: { faqs: ToolFAQItem[] }) {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={faq.q} className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50 transition-colors"
                        aria-expanded={open === i}
                    >
                        <span className="font-bold text-slate-900 text-sm md:text-base">{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
