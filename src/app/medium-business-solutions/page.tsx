import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediumBusinessSolutionsClient from "./MediumBusinessSolutionsClient";
import { MEDIUM_BUSINESS_FAQS } from "./mediumBusinessData";

const BASE_URL = "https://www.hrniti.com";
const pageUrl = `${BASE_URL}/medium-business-solutions`;

export const metadata: Metadata = {
  title: "HRMS & Payroll for Medium Businesses in India",
  description:
    "Scale HR operations with HR Niti for 50–250 employees. Manage multi-branch payroll, approvals, attendance, HR MIS, employee self-service and accounting integrations.",
  keywords: [
    "HRMS software for medium business",
    "HRMS software for mid-sized companies",
    "HRMS for 50–250 employees",
    "payroll software for medium businesses",
    "payroll software for mid-sized companies",
    "HRMS software India",
    "multi-branch HRMS software",
    "multi-location payroll software India",
    "multi-level HR approval software",
    "HR MIS software",
    "HR analytics software",
    "Tally payroll integration",
    "QuickBooks payroll integration",
    "employee self-service for medium businesses",
    "performance management software for mid-sized companies",
    "HRMS for 100 employees",
    "HRMS for 200 employees",
    "payroll software for multiple branches",
    "payroll software for multiple states India",
    "HRMS for multi-location companies",
    "HR software for growing companies",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "HRMS & Payroll for Medium Businesses in India | HR Niti",
    description:
      "Scale HR operations with HR Niti for 50–250 employees. Manage multi-branch payroll, approvals, attendance, HR MIS, employee self-service and accounting integrations.",
    url: pageUrl,
    type: "website",
    siteName: "HR Niti",
    locale: "en_IN",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "HRMS & Payroll for Medium Businesses in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRMS & Payroll for Medium Businesses in India | HR Niti",
    description:
      "Scale HR operations with HR Niti for 50–250 employees. Manage multi-branch payroll, approvals, attendance, HR MIS, employee self-service and accounting integrations.",
    images: ["/og-default.png"],
  },
};

export default function MediumBusinessPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HR Niti",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${BASE_URL}/medium-business-solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "HRMS & Payroll Software for Medium Businesses in India",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HR Niti Medium Business HRMS & Payroll Software",
      operatingSystem: "Cloud / Web / Android / iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Contact for Pricing",
        availability: "https://schema.org/InStock",
      },
      description:
        "Comprehensive HRMS and payroll software tailored for Indian mid-market enterprises with 50–250 employees. Automates multi-branch attendance, multi-state payroll, multi-tier approvals, Tally sync, and HR MIS.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: MEDIUM_BUSINESS_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Navbar />
      <MediumBusinessSolutionsClient />
      <Footer />
    </main>
  );
}
