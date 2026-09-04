import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LargeBusinessSolutionsClient from "./LargeBusinessSolutionsClient";
import { LARGE_BUSINESS_FAQS } from "./largeBusinessData";

const BASE_URL = "https://www.hrniti.com";
const pageUrl = `${BASE_URL}/large-business-solutions`;

export const metadata: Metadata = {
  title: "Enterprise HRMS & Payroll for Large Businesses",
  description:
    "Enterprise HRMS & payroll software for large businesses in India (250–1000+ staff). Automate multi-state payroll, factory shifts, and ERP.",
  keywords: [
    "enterprise HRMS software India",
    "enterprise payroll software India",
    "HRMS for large businesses",
    "HRMS for 250+ employees",
    "HRMS for 500 employees",
    "HRMS for 1000 employees",
    "enterprise payroll management software",
    "multi-state payroll software",
    "multi-location HRMS",
    "multi-factory HRMS",
    "shift management software",
    "overtime payroll software",
    "enterprise attendance management",
    "workforce management software",
    "HRMS with SAP integration",
    "HRMS with Oracle",
    "HRMS with Workday",
    "HRMS API integration",
    "enterprise HRMS API",
    "payroll ERP integration",
    "enterprise HRMS security",
    "role-based HRMS",
    "HR audit trail",
    "payroll data security",
    "HRMS access control",
    "enterprise employee data protection",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Enterprise HRMS & Payroll for Large Businesses | HR Niti",
    description:
      "Enterprise HRMS & payroll software for large businesses in India (250–1000+ staff). Automate multi-state payroll, factory shifts, and ERP.",
    url: pageUrl,
    type: "website",
    siteName: "HR Niti",
    locale: "en_IN",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Enterprise HRMS & Payroll Software for Large Businesses in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise HRMS & Payroll for Large Businesses | HR Niti",
    description:
      "Enterprise HRMS & payroll software for large businesses in India (250–1000+ staff). Automate multi-state payroll, factory shifts, and ERP.",
    images: ["/og-default.png"],
  },
};

export default function LargeBusinessPage() {
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
          item: `${BASE_URL}/large-business-solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Enterprise HRMS & Payroll Software for Large Businesses in India",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HR Niti Enterprise HRMS & Payroll Software",
      operatingSystem: "Cloud / Web / Android / iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Contact for Enterprise Quote",
        availability: "https://schema.org/InStock",
      },
      description:
        "Comprehensive enterprise HRMS and payroll platform for Indian large organizations with 250–1000+ employees. Features 28-state statutory engine, SAP/Oracle/Workday/Dynamics ERP connectors, multi-shift rotational factory rostering, and granular RBAC governance.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: LARGE_BUSINESS_FAQS.map((faq) => ({
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
      <LargeBusinessSolutionsClient />
      <Footer />
    </main>
  );
}
