"use client";
import { Check } from "lucide-react";
import Image from "next/image";

export default function EmployeeESS() {
    const benefits = [
        "View & Download Payslips instantly",
        "Apply for Leaves & Regularize Attendance",
        "Upload Investment Proofs for Tax Declarations",
        "Update Personal Contact Information",
        "View Team Calendar & Holidays",
        "Submit Helpdesk Tickets"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual - Mobile App Abstract Representation */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-emerald-50 rounded-full blur-3xl opacity-60"></div>
                        <div className="relative z-10 bg-slate-900 border-8 border-slate-900 rounded-[3rem] shadow-2xl p-2 max-w-xs mx-auto">
                            {/* Screen Content */}
                            <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden h-[500px] flex flex-col relative">
                                {/* Status Bar */}
                                <div className="h-8 bg-slate-800 w-full flex items-center justify-center">
                                    <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                                </div>

                                {/* App Header */}
                                <div className="bg-white p-6 shadow-sm z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">JD</div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-800">Hello, John 👋</div>
                                            <div className="text-xs text-gray-500">Good Morning!</div>
                                        </div>
                                    </div>
                                </div>

                                {/* App Dashboard Grid */}
                                <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                                        <div className="text-xs text-gray-500 mb-1">Leave Balance</div>
                                        <div className="text-2xl font-bold text-green-600">12</div>
                                        <div className="text-xs text-gray-400">Days</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                                        <div className="text-xs text-gray-500 mb-1">Payslip</div>
                                        <div className="text-sm font-bold text-emerald-600 mt-2">Download Oct</div>
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-emerald-600 to-amber-600 p-4 rounded-2xl text-white shadow-lg">
                                        <div className="text-sm font-semibold mb-2">Announcement</div>
                                        <div className="text-xs opacity-90">Townhall meeting at 5 PM. Click to join.</div>
                                    </div>
                                    <div className="col-span-2 bg-white p-4 rounded-2xl shadow-sm">
                                        <div className="flex justify-between items-end">
                                            <div className="text-xs text-gray-500">Attendance</div>
                                            <div className="text-xs text-green-600 font-bold">Present</div>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                            <div className="h-full bg-green-500 w-[95%]"></div>
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">9:15 AM - 6:30 PM</div>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="mt-auto bg-white p-4 flex justify-around border-t">
                                    <div className="w-8 h-8 bg-green-50 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-gray-50 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-gray-50 rounded-lg"></div>
                                </div>

                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow hidden md:block">
                            <div className="font-bold text-gray-800">Mobile First 📱</div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-green-50 inline-block px-3 py-1 rounded-full text-green-700 font-semibold text-sm mb-4">
                            Employee Self Service (ESS)
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                            Empower Employees with <span className="text-green-600">Self-Service</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Reduce HR workload by 60% by allowing employees to manage their own routine tasks. Our mobile-ready ESS portal is intuitive, secure, and available 24/7.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
