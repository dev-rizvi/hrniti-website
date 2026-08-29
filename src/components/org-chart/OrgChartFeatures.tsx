import { Network, Users, TrendingUp, Layers } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Network,
        title: "Live org chart",
        description: "Visualise your whole organisation and reshape it with simple drag-and-drop."
    },
    {
        icon: Users,
        title: "Headcount planning",
        description: "Model future teams and headcount before you commit to a single hire."
    },
    {
        icon: TrendingUp,
        title: "Scenario planning",
        description: "Compare reorganisation what-ifs side by side and pick the structure that works."
    },
    {
        icon: Layers,
        title: "Span analysis",
        description: "Spot management gaps, over-wide spans and the layers that slow decisions down."
    }
];

export default function OrgChartFeatures() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-4 block">What you get</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                        Built for the way <span className="text-emerald-600">org chart & planning</span> really works.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-slate-100">
                            <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                See it in a demo
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform -rotate-3 scale-105 opacity-60"></div>
                            
                            {/* Dashboard widget mock */}
                            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-10 overflow-hidden select-none">
                                {/* Widget Header */}
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                                    <div>
                                        <div className="text-xs font-black text-slate-800">Workforce Analytics & Budgeting</div>
                                        <div className="text-[10px] font-bold text-slate-400 mt-0.5">HR Niti Live Planning Sandbox</div>
                                    </div>
                                    <span className="text-[10px] font-black px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-md">Live View</span>
                                </div>
                                
                                {/* Metrics Row */}
                                <div className="grid grid-cols-3 gap-3 mb-5">
                                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                                        <div className="text-[9px] font-bold text-slate-400 uppercase">Span Ratio</div>
                                        <div className="text-sm font-black text-slate-800 mt-0.5">4.8 : 1</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                                        <div className="text-[9px] font-bold text-slate-400 uppercase">Org Layers</div>
                                        <div className="text-sm font-black text-slate-800 mt-0.5">4 Levels</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                                        <div className="text-[9px] font-bold text-slate-400 uppercase">Planned FTE</div>
                                        <div className="text-sm font-black text-slate-800 mt-0.5">+5 Roles</div>
                                    </div>
                                </div>
                                
                                {/* Core stats block */}
                                <div className="space-y-3.5">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Budget Allocation by Dept</div>
                                    
                                    {/* Eng Bar */}
                                    <div>
                                        <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                                            <span>Engineering</span>
                                            <span>₹9.3L / month (42%)</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-violet-500 rounded-full" style={{ width: '42%' }}></div>
                                        </div>
                                    </div>

                                    {/* Sales Bar */}
                                    <div>
                                        <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                                            <span>Sales & Success</span>
                                            <span>₹5.1L / month (23%)</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-sky-500 rounded-full" style={{ width: '23%' }}></div>
                                        </div>
                                    </div>

                                    {/* Marketing Bar */}
                                    <div>
                                        <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                                            <span>Marketing</span>
                                            <span>₹4.4L / month (20%)</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 rounded-full" style={{ width: '20%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom list mock */}
                                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Scenario Vacancies (Simulated)</div>
                                    <div className="flex items-center justify-between text-xs p-2 bg-purple-50/50 border border-purple-100/50 rounded-lg">
                                        <div className="font-bold text-slate-700">Senior Product Manager (Design Team)</div>
                                        <span className="text-[9px] font-black text-purple-700 uppercase bg-purple-100 px-1.5 py-0.5 rounded">Q3 Hiring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
