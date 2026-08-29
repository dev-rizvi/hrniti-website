import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessSizeHero from "@/components/solutions/BusinessSizeHero";
import BusinessSizeFeatures from "@/components/solutions/BusinessSizeFeatures";
import BusinessSizeComparison from "@/components/solutions/BusinessSizeComparison";
import BusinessSizeFaq from "@/components/solutions/BusinessSizeFaq";
import BusinessSizeNav from "@/components/solutions/BusinessSizeNav";
import { businessSizeData } from "@/data/businessSizeData";

const data = businessSizeData.small;
const BASE_URL = "https://www.hrniti.com";
const url = `${BASE_URL}/${data.seoSlug}`;

export const metadata: Metadata = {
    title: "HRMS & Payroll Software for Small Business",
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
        title: `${data.title} | HR Niti`,
        description: data.metaDescription,
        url,
        type: "website",
        siteName: "HR Niti",
        locale: "en_IN",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
        card: "summary_large_image",
        title: `${data.title} | HR Niti`,
        description: data.metaDescription,
        images: ["/og-default.png"],
    },
};

export default function SmallBusinessPage() {
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
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: data.title, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: data.title,
            description: data.metaDescription,
            url,
            provider: { "@type": "Organization", name: "HR Niti", url: BASE_URL },
            serviceType: "Small Business HRMS & Payroll Automation",
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
            <BusinessSizeHero data={data} />
            <BusinessSizeFeatures data={data} />
            <BusinessSizeComparison data={data} />
            <BusinessSizeFaq employeeRange={data.employeeRange} faqs={data.faqs} />
            <BusinessSizeNav currentScale={data.id} />
            <Footer />
        </main>
    );
}
