import { Landmark, Database, Cloud, Bot, Sparkles, Languages } from "lucide-react";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
}

const milestones: TimelineItem[] = [
    {
        year: "2004",
        title: "Desktop App Launch",
        description: "Started our operations as a lightweight offline desktop payroll system catering to local manufacturing industrial units.",
        icon: Landmark
    },
    {
        year: "2008",
        title: "HCM Transformation",
        description: "Expanded code functionality to a comprehensive Human Capital Management suite, tracking complete lifecycle activities.",
        icon: Database
    },
    {
        year: "2015",
        title: "Next-Gen Cloud Suite",
        description: "Migrated from legacy systems to a secure, multi-tenant cloud-based SaaS suite, enabling anywhere web check-ins.",
        icon: Cloud
    },
    {
        year: "2018",
        title: "Niti AI Chatbot Integration",
        description: "Introduced our native conversational assistant module to resolve basic HR ticket questions automatically.",
        icon: Bot
    },
    {
        year: "2023",
        title: "Generative AI Reimagination",
        description: "Incorporated Microsoft OpenAI endpoints into the core chat interface, enabling deep contextual compliance query deflection.",
        icon: Sparkles
    },
    {
        year: "2026",
        title: "Autonomous HR Copilot",
        description: "Leading the industry with multi-language capabilities, predictive budget expense metrics, and proactive voice check-ins.",
        icon: Languages
    }
];

export default function AboutTimeline() {
    return (
        <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Soft backdrop grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Our Growth Journey
                    </h2>
                    <p className="text-slate-600">
                        From simple desktop databases to conversational GenAI Copilots, here is how we have driven HR automation.
                    </p>
                </div>

                {/* Vertical Timeline Wrapper */}
                <div className="relative max-w-4xl mx-auto mt-12">
                    {/* Center Line for Desktop */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 pointer-events-none"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {milestones.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;
                            
                            return (
                                <div 
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-stretch gap-8 md:gap-0
                                        ${isEven ? 'md:flex-row-reverse' : ''}
                                    `}
                                >
                                    {/* Dotted indicator point */}
                                    <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                                        <div className="w-9 h-9 bg-emerald-600 border-4 border-white rounded-full shadow-lg flex items-center justify-center text-white text-xs font-bold font-sans">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                    </div>

                                    {/* Card column */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                                        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] inline-block w-full">
                                            <span className="inline-block text-xs font-black bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 mb-2 font-sans">
                                                {item.year}
                                            </span>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Empty Spacer Column for Desktop */}
                                    <div className="hidden md:block w-[10%]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
