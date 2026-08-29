import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TimesheetHero from "@/components/timesheet/TimesheetHero";
import IntegrationHighlights from "@/components/timesheet/IntegrationHighlights";
import ProjectTrackingVisual from "@/components/timesheet/ProjectTrackingVisual";
import TimesheetFeatures from "@/components/timesheet/TimesheetFeatures";
import TimesheetFAQ, { faqs } from "@/components/timesheet/TimesheetFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: "Timesheet & Project Time Tracking Software",
  description: "Natively track task hours and billable time with HR Niti's integrated timesheet software. Sync overtime directly with payroll and check GPS geofencing punches.",
  keywords: "timesheet management software, online timesheet India, employee time tracking, work hours tracker, payroll synced timesheet, project time tracking software",
  openGraph: {
    title: "Integrated Timesheet Management Software in India 2026 | HR Niti",
    description: "Natively track task hours and billable time with HR Niti's integrated timesheet software. Sync overtime directly with payroll and check GPS geofencing punches.",
    url: "https://www.hrniti.com/timesheet-management",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Timesheet Management Software India - HR Niti | Track Work Hours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrated Timesheet Management Software in India 2026 | HR Niti",
    description: "Natively track task hours and billable time with HR Niti's integrated timesheet software.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "https://www.hrniti.com/timesheet-management" },
};

export default function TimesheetPage() {
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
              "name": "HR Niti Timesheet Management Software",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Android, iOS",
              "description": "An integrated timesheet and productivity tracking software for managing project task hours, GPS geofenced customer visits, and payroll-integrated overtime.",
              "url": "https://www.hrniti.com/timesheet-management",
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
                  "name": "Timesheet Management",
                  "item": "https://www.hrniti.com/timesheet-management"
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

      {/* Hero with interactive timer */}
      <TimesheetHero />

      {/* Synergistic HRMS and Payroll Integrations */}
      <IntegrationHighlights />

      {/* Gantt Interactive Visual */}
      <ProjectTrackingVisual />

      {/* Core Timesheet Features */}
      <TimesheetFeatures />

      {/* AEO Optimized FAQs */}
      <TimesheetFAQ />

      {/* Call to Action */}
      <CTASection />

      <Footer />
    </main>
  );
}
