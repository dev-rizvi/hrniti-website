import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import LMSHero from "@/components/lms/LMSHero";
import IntegrationHighlights from "@/components/lms/IntegrationHighlights";
import CourseCatalog from "@/components/lms/CourseCatalog";
import FAQSection, { faqs } from "@/components/lms/FAQSection";
import { Award, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Learning Management System (LMS) Software",
  description: "Learning management system for employee training. Assign POSH training, track employee learning goals, issue compliance certificates, and integrate with payroll.",
  keywords: "Learning management system for employee training, LMS software India, corporate LMS, POSH training software, employee training system, HRMS integrated LMS",
  openGraph: {
    title: "Learning Management System for Employee Training (LMS) | HR Niti",
    description: "Learning management system for employee training. Assign POSH training, track employee learning goals, issue compliance certificates, and integrate with payroll.",
    url: "https://www.hrniti.com/lms",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Learning Management System for Employee Training - HR Niti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Management System for Employee Training (LMS) | HR Niti",
    description: "Learning management system for employee training. Assign POSH training, track employee learning goals, issue compliance certificates, and integrate with payroll.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://www.hrniti.com/lms",
  }
};

export default function LMSPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Structured Schema Markup for SEO & AEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "HR Niti LMS (Learning Management System)",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Android, iOS",
              "description": "An integrated corporate Learning Management System (LMS) for employee training, POSH compliance, and skill development, natively synced with HRMS and Payroll.",
              "url": "https://www.hrniti.com/lms",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free trial available with HR Niti HRMS suite"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.hrniti.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "LMS Software",
                  "item": "https://www.hrniti.com/lms"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "POSH & Gender Sensitization at Workplace",
              "description": "Statutory workplace safety training as per Indian government regulations. Mandatory for all employee enrollments on Day 1.",
              "provider": {
                "@type": "Organization",
                "name": "HR Niti",
                "sameAs": "https://www.hrniti.com"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Information Security & Data Protection Basics",
              "description": "Core guidelines on data protection, secure password management, and phishing defense in corporate workspaces.",
              "provider": {
                "@type": "Organization",
                "name": "HR Niti",
                "sameAs": "https://www.hrniti.com"
              }
            }
          ])
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <LMSHero />

      {/* Unified HRMS-Payroll Integration Synergy */}
      <IntegrationHighlights />

      {/* Interactive Course Catalog */}
      <CourseCatalog />

      {/* Certificates and Compliance Showcase */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-xs bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-900/60 inline-block">
                Automated Audit Readiness
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Instantly Generate Verifiable Compliance Certificates
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Never fail an audit due to missing training paperwork. As soon as employees pass their assessments and quizzes, HR Niti automatically compiles corporate compliance certificates with verifiable credentials and secure tracking.
              </p>
              
              <ul className="space-y-4">
                {[
                  "100% compliant with annual POSH (Prevention of Sexual Harassment) report filings.",
                  "Secured signatures and customizable corporate certificate templates.",
                  "Verification QR code matching core employee ID in your HRMS directory."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 relative flex justify-center">
              {/* Visual Certificate Mock Widget */}
              <div className="w-full max-w-md bg-white text-slate-800 rounded-3xl p-8 border border-slate-100 shadow-2xl relative select-none transform hover:rotate-1 hover:scale-[1.01] transition-all">
                {/* Certificate border decoration */}
                <div className="absolute inset-4 border-2 border-double border-slate-200 rounded-2xl pointer-events-none"></div>
                
                <div className="text-center space-y-6 relative z-10 pt-4">
                  <div className="flex justify-center">
                    <Award className="h-12 w-12 text-emerald-600" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold tracking-tight text-slate-800">Certificate of Completion</h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Awarded for Professional Development</p>
                  </div>

                  <p className="text-xs text-slate-400 max-w-xs mx-auto italic">This document certifies that</p>
                  <p className="font-bold text-slate-900 border-b border-slate-200 pb-2 max-w-xs mx-auto text-lg">Abhishek Kumar</p>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    has successfully completed all assessment evaluations for the training module
                    <br />
                    <span className="font-extrabold text-slate-800 block mt-1">POSH & Gender Sensitization at Workplace</span>
                  </p>

                  <div className="flex justify-between items-end border-t border-slate-100 pt-6 px-4">
                    <div className="text-left space-y-1">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Date Granted</span>
                      <span className="text-xs font-bold text-slate-800">Jan 18, 2026</span>
                    </div>
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-[10px] text-slate-400 font-mono">
                      QR CODE
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Optimized FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
