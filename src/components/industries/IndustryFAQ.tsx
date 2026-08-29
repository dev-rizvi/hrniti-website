"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/industriesData";

// Only plain, serializable data (no icon components) can cross the
// Server -> Client Component boundary, so this takes primitives/FAQ[]
// rather than the full Industry object.
export default function IndustryFAQ({ title, faqs }: { title: string; faqs: FAQ[] }) {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {title} HR Software — FAQs
                    </h2>
                    <p className="text-slate-600">Answers to common questions about using HR Niti in {title.toLowerCase()}.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={faq.q} className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-100/60 transition-colors"
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
            </div>
        </section>
    );
}
