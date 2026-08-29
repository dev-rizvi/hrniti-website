"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSlider() {
    const testimonials = [
        {
            quote: "HR Niti has completely transformed how we manage our payroll. The accuracy and speed are unmatched, and the support team is always there when we need them.",
            author: "Rajesh Kumar",
            role: "HR Director, TechFlow Solutions",
        },
        {
            quote: "The implementation was smooth, and the ESS portal has significantly reduced the queries coming to our HR desk. Highly recommended for growing businesses.",
            author: "Sneha Patel",
            role: "Operations Head, GreenLeaf Organics",
        },
        {
            quote: "We were looking for a scalable solution, and HR Niti fitted perfectly. The extensive reporting module helps us make data-backed decisions.",
            author: "Amit Verma",
            role: "CEO, Verma Logistics",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">What Our Clients Say</h2>
                </div>

                <div className="max-w-4xl mx-auto relative">

                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative z-10 transition-all duration-500">
                        <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />

                        <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-8">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        <div className="space-y-1">
                            <div className="font-bold text-secondary text-lg">{testimonials[currentIndex].author}</div>
                            <div className="text-primary text-sm font-medium uppercase tracking-wide">{testimonials[currentIndex].role}</div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white shadow-md text-secondary hover:text-primary hover:scale-110 transition-all"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white shadow-md text-secondary hover:text-primary hover:scale-110 transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
