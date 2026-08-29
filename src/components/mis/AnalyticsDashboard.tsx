"use client";
import { useState } from "react";
import { Users, UserMinus, UserPlus, FileBarChart } from "lucide-react";

export default function AnalyticsDashboard() {
    const metrics = [
        { id: "headcount", label: "Total Headcount", value: "850", trend: "+5%", icon: Users, color: "blue" },
        { id: "hired", label: "New Hires", value: "45", trend: "+12%", icon: UserPlus, color: "green" },
        { id: "attrition", label: "Attrition", value: "2.1%", trend: "-0.5%", icon: UserMinus, color: "red" },
        { id: "cost", label: "Payroll Cost", value: "₹4.2Cr", trend: "+2%", icon: FileBarChart, color: "purple" },
    ];

    const [activeMetric, setActiveMetric] = useState(metrics[0]);

    // Mock data for graphs depending on active metric
    const getGraphData = (id: string) => {
        switch (id) {
            case 'hired': return [10, 15, 8, 22, 18, 25, 30, 28, 35, 40, 42, 45];
            case 'attrition': return [40, 35, 38, 30, 25, 20, 15, 18, 12, 10, 8, 5];
            case 'cost': return [20, 22, 25, 24, 28, 30, 32, 35, 34, 38, 40, 42];
            default: return [60, 62, 65, 64, 68, 70, 72, 75, 74, 80, 82, 85]; // headcount
        }
    };

    const graphData = getGraphData(activeMetric.id);
    const maxVal = Math.max(...graphData);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Interactive HR Dashboard</h2>
                    <p className="text-gray-600">Get a real-time snapshot of your organization's health. Click on the metrics below to view trends.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Top Metrics Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
                        {metrics.map((metric) => (
                            <button
                                key={metric.id}
                                onClick={() => setActiveMetric(metric)}
                                className={`p-6 text-left transition-colors hover:bg-gray-50 ${activeMetric.id === metric.id ? 'bg-gray-50/80 outline-none ring-inset ring-2 ring-primary/20' : ''}`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-500">{metric.label}</span>
                                    <metric.icon className={`h-5 w-5 text-${metric.color}-500`} />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                                    <span className={`text-xs font-bold ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                        {metric.trend}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Chart Area */}
                    <div className="p-8 md:p-12">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-secondary">{activeMetric.label} Trend (Last 12 Months)</h3>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-600">Monthly</div>
                                <div className="px-3 py-1 text-xs font-medium hover:bg-gray-100 rounded-full text-gray-400 cursor-pointer">Quarterly</div>
                            </div>
                        </div>

                        {/* CSS Bar Chart */}
                        <div className="h-64 flex items-end justify-between gap-2 md:gap-4">
                            {graphData.map((val, idx) => {
                                const heightPercentage = (val / maxVal) * 100;
                                return (
                                    <div key={idx} className="w-full flex flex-col items-center gap-2 group">
                                        <div
                                            className={`w-full rounded-t-sm transition-all duration-500 ease-out bg-${activeMetric.color}-500 opacity-80 group-hover:opacity-100 relative`}
                                            style={{ height: `${heightPercentage}%` }}
                                        >
                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                {val}
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-gray-400 font-medium">
                                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
