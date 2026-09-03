import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DelhiLandingClient from "./DelhiLandingClient";

const BASE_URL = "https://www.hrniti.com";
const PAGE_URL = `${BASE_URL}/hrms-payroll-software-in-delhi`;

export const metadata: Metadata = {
    title: "HRMS & Payroll Software in Delhi NCR | HR Niti",
    description: "HRMS and payroll software for Delhi NCR businesses. Automate payroll, attendance, leave, employee self-service and HR reporting with HR Niti. Book a free demo.",
    keywords: [
        "HRMS Software Delhi",
        "Payroll Software Delhi NCR",
        "HRMS and Payroll Software in Delhi",
        "Multi-State Payroll Delhi Gurgaon Noida",
        "Delhi Labour Welfare Fund Payroll",
        "Biometric Attendance Delhi NCR",
        "Employee Self Service Delhi",
        "HR Software Okhla Connaught Place Nehru Place"
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: "HRMS & Payroll Software in Delhi NCR | HR Niti",
        description: "HRMS and payroll software for Delhi NCR businesses. Automate payroll, attendance, leave, employee self-service and HR reporting with HR Niti. Book a free demo.",
        url: PAGE_URL,
        type: "website",
        siteName: "HR Niti",
        locale: "en_IN",
        images: [
            {
                url: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
                width: 1200,
                height: 630,
                alt: "HRMS & Payroll Software in Delhi NCR - HR Niti",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "HRMS & Payroll Software in Delhi NCR | HR Niti",
        description: "HRMS and payroll software for Delhi NCR businesses. Automate payroll, attendance, leave, employee self-service and HR reporting with HR Niti.",
        images: [`${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`],
    },
};

export default function DelhiLandingPage() {
    const faqSchemaData = [
        {
            q: "What is HRMS software?",
            a: "HRMS software is a system used to manage employee information, attendance, leave, payroll, recruitment, HR workflows and workforce reporting from one platform."
        },
        {
            q: "What is payroll software?",
            a: "Payroll software automates salary calculation, deductions, payslips, payroll reports and other recurring payroll processes."
        },
        {
            q: "What is the best HRMS software for a Delhi company?",
            a: "The right HRMS depends on employee count, payroll complexity, attendance requirements, locations, integrations and HR workflows. Businesses should compare payroll automation, attendance, employee self-service, statutory reporting, security and support."
        },
        {
            q: "What is the cost of HRMS software in Delhi?",
            a: "HRMS software in Delhi typically ranges based on team size, deployed modules, and implementation scope. Small businesses (1–50 employees) generally choose standard cloud subscriptions, mid-sized firms (51–250 employees) opt for multi-state payroll and attendance packages, and enterprises require custom integrations. Contact HR Niti for a transparent, customized quote."
        },
        {
            q: "Which payroll software is best for 100 employees in Delhi?",
            a: "For a 100-employee company in Delhi NCR, the best payroll software automates salary processing, integrates biometric/GPS attendance, handles Delhi Labour Welfare Fund (DLWF) and multi-state compliance (for Gurgaon/Noida staff), and provides mobile Employee Self-Service (ESS) for instant payslip downloads."
        },
        {
            q: "Can HRMS software manage Delhi, Gurgaon and Noida employees?",
            a: "Yes. HR Niti allows organizations to manage cross-NCR workforces under a single account, applying location-specific payroll rules, state statutory deductions (Delhi, Haryana, Uttar Pradesh), and regional holiday calendars automatically."
        },
        {
            q: "What payroll compliance does a Delhi company need to manage?",
            a: "Delhi employers must manage Delhi Minimum Wages (revised semi-annually by the Delhi Labour Department), Delhi Labour Welfare Fund (DLWF) contributions, Employees' Provident Fund (EPF), Employees' State Insurance (ESIC), Tax Deducted at Source (TDS/Form 24Q), and annual Form 16 issuance."
        },
        {
            q: "How do I choose payroll software for a Delhi business?",
            a: "When evaluating payroll software in Delhi, check for: (1) native support for Delhi statutory rules and multi-state NCR configurations, (2) biometric and mobile GPS attendance integration, (3) automated salary computation and one-click payslip distribution, (4) robust employee self-service (web and mobile), and (5) responsive local customer onboarding and support."
        },
        {
            q: "Can HR Niti manage employees in Delhi, Gurgaon and Noida?",
            a: "Yes. HR Niti is designed to support organizations with employees across multiple locations and allows payroll and HR configurations to be managed according to workforce requirements."
        },
        {
            q: "Does HR Niti support payroll compliance?",
            a: "HR Niti provides payroll workflows, configured statutory calculations and payroll/statutory reporting features for Indian businesses. Organizations should verify configurations against the latest applicable government requirements."
        },
        {
            q: "Does HR Niti support biometric attendance?",
            a: "Yes. HR Niti supports attendance workflows that can integrate biometric attendance and other supported attendance methods."
        },
        {
            q: "Does HR Niti support GPS attendance?",
            a: "HR Niti provides location-based attendance capabilities for organizations that need workforce attendance visibility outside traditional office environments."
        },
        {
            q: "Can employees access their payslips online?",
            a: "Yes. Employees can access HR information and supported payroll documents through the employee self-service platform."
        },
        {
            q: "Does HR Niti have a mobile app?",
            a: "HR Niti provides mobile employee self-service capabilities for supported HR workflows."
        },
        {
            q: "Can HR Niti manage payroll for multiple states?",
            a: "Yes. HR Niti is designed for multi-location and multi-state workforce management with location-based payroll configurations."
        },
        {
            q: "Can HR Niti integrate with attendance machines?",
            a: "HR Niti supports attendance integration workflows for compatible biometric and attendance systems."
        },
        {
            q: "Can HR Niti manage full and final settlement?",
            a: "Yes. HR Niti includes workflows for employee exit and full-and-final settlement."
        },
        {
            q: "Can HR Niti manage recruitment?",
            a: "Yes. HR Niti includes recruitment and applicant-tracking capabilities including candidate management and recruitment workflows."
        },
        {
            q: "Does HR Niti have AI features?",
            a: "Yes. HR Niti includes AI-powered capabilities across areas such as HR assistance, recruitment, analytics and workforce automation."
        },
        {
            q: "Is HR Niti suitable for small businesses?",
            a: "Yes. HR Niti offers HRMS capabilities for organizations of different sizes, including small and growing businesses."
        },
        {
            q: "Is HR Niti suitable for manufacturing companies?",
            a: "Yes. Manufacturing organizations can use HR Niti for employee management, attendance, shifts, payroll and workforce reporting."
        },
        {
            q: "Is HR Niti suitable for pharma companies?",
            a: "Yes. Pharma organizations can use HR Niti to manage employee records, attendance, payroll, recruitment and HR workflows."
        },
        {
            q: "How long does HRMS implementation take?",
            a: "Implementation time depends on employee count, payroll complexity, integrations, data migration and configuration requirements. HR Niti follows a structured setup and testing process before go-live."
        },
        {
            q: "How can I get a demo of HR Niti?",
            a: "You can request a personalized HRMS and payroll demonstration from the HR Niti team."
        },
        {
            q: "Does HR Niti support Delhi-specific payroll requirements?",
            a: "HR Niti can be configured for relevant Delhi payroll workflows and statutory reporting requirements. Specific statutory configurations should be reviewed against the latest applicable government notifications."
        }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HR Niti",
            url: BASE_URL,
            logo: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
            description: "Indian cloud HRMS and payroll software platform helping businesses manage employee records, attendance, payroll, recruitment and workforce analytics.",
            sameAs: [
                "https://www.linkedin.com/company/hrniti",
                "https://twitter.com/hrniti",
                "https://www.instagram.com/hr_niti/"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "HR Niti",
            url: BASE_URL,
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: "HRMS & Payroll Software in Delhi NCR", item: PAGE_URL },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "HRMS & Payroll Software in Delhi NCR",
            description: "Cloud HRMS and automated payroll software for Delhi NCR businesses with multi-state statutory compliance, biometric/GPS attendance, and employee self-service.",
            url: PAGE_URL,
            provider: {
                "@type": "Organization",
                name: "HR Niti",
                url: BASE_URL,
                logo: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
            },
            areaServed: {
                "@type": "City",
                name: "Delhi",
                containedInPlace: {
                    "@type": "State",
                    name: "National Capital Region (Delhi NCR)"
                }
            },
            serviceType: "HRMS & Payroll Software Automation",
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "HR Niti HRMS - Delhi NCR",
            operatingSystem: "Web, iOS, Android",
            applicationCategory: "BusinessApplication",
            description: "Comprehensive HRMS & Payroll platform configured for Delhi, Gurgaon, and Noida multi-location workforces.",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: "HR Niti" },
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchemaData.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
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
            <DelhiLandingClient />
            <Footer />
        </main>
    );
}
