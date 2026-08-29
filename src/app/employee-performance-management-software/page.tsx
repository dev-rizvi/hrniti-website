import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerformanceHero from "@/components/performance/PerformanceHero";
import IntegrationHighlights from "@/components/performance/IntegrationHighlights";
import NineBoxGrid from "@/components/performance/NineBoxGrid";
import AppraisalFeatures from "@/components/performance/AppraisalFeatures";
import PerformanceFAQ, { faqs } from "@/components/performance/PerformanceFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: "Performance Management & OKR Software",
  description: "Employee performance management software. Set goals, manage KRAs/OKRs, run 360° appraisals, and sync performance increments directly with payroll.",
  keywords: "Employee performance management software, Performance management software for employees, performance appraisal software India, goal tracking software, OKR software, 360 degree feedback",
  openGraph: {
    title: "Employee Performance Management Software & OKR App | HR Niti",
    description: "Employee performance management software. Set goals, manage KRAs/OKRs, run 360° appraisals, and sync performance increments directly with payroll.",
    url: "https://www.hrniti.com/employee-performance-management-software",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Employee Performance Management Software - HR Niti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Performance Management Software & OKR App | HR Niti",
    description: "Employee performance management software. Set goals, manage KRAs/OKRs, run 360° appraisals, and sync performance increments directly with payroll.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "https://www.hrniti.com/employee-performance-management-software" },
};

export default function EmployeePerformanceManagementSoftwarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Structured Schema Markup for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "HR Niti Performance Appraisal & PMS Software",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Android, iOS",
              "description": "An integrated continuous Performance Management System (PMS) that cascades company objectives, handles OKRs & KRAs, coordinates 360-degree peer appraisals, normalizes grades using bell curves, and updates payroll records.",
              "url": "https://www.hrniti.com/employee-performance-management-software",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free trial available with HR Niti suite"
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
                  "name": "Performance Management Software",
                  "item": "https://www.hrniti.com/employee-performance-management-software"
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
            }
          ])
        }}
      />

      <Navbar />

      {/* Hero Section with interactive appraisal cycles visual */}
      <PerformanceHero />

      {/* Synergistic platform integration triggers */}
      <IntegrationHighlights />

      {/* Interactive 9-Box Grid matrix tool */}
      <NineBoxGrid />

      {/* Dynamic continuous features layout list */}
      <AppraisalFeatures />

      {/* AEO Optimized FAQs Accordion details */}
      <PerformanceFAQ />

      {/* Call to Action */}
      <CTASection />

      <Footer />
    </main>
  );
}
