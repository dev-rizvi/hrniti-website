import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationHero from "@/components/location/LocationHero";
import LocalHubs from "@/components/location/LocalHubs";
import StatutorySection from "@/components/location/StatutorySection";
import LocalPresence from "@/components/location/LocalPresence";
import SmHRtFeatures from "@/components/location/SmHRtFeatures";
import WhyChoose from "@/components/location/WhyChoose";
import CityFaqAccordion from "@/components/location/CityFaqAccordion";
import CTASection from "@/components/about/CTASection";
import InterCityNav from "@/components/location/InterCityNav";
import { getCityDataBySlug, allCityRouteSlugs } from "@/data/cityData";

const BASE_URL = "https://www.hrniti.com";

// Generate static params for all configured city slugs
export async function generateStaticParams() {
    return allCityRouteSlugs.map((slug) => ({
        city: slug,
    }));
}

// Generate rich SEO/AEO metadata per city
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city } = await params;
    const cityData = getCityDataBySlug(city);

    if (!cityData) {
        return {
            title: "Location Not Found | HR Niti",
        };
    }

    const title = `Best HRMS & Payroll Software in ${cityData.name} | HR Niti`;
    const url = `${BASE_URL}/${cityData.seoSlug}`;

    return {
        title,
        description: cityData.metaDescription,
        keywords: cityData.keywords,
        alternates: { canonical: url },
        openGraph: {
            title,
            description: cityData.metaDescription,
            url,
            type: "website",
            siteName: "HR Niti",
            locale: "en_IN",
            images: [
                {
                    url: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
                    width: 1200,
                    height: 630,
                    alt: `Best HRMS & Payroll Software in ${cityData.name} - HR Niti`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: cityData.metaDescription,
            images: [`${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`],
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const cityData = getCityDataBySlug(city);

    if (!cityData) {
        notFound();
    }

    const url = `${BASE_URL}/${cityData.seoSlug}`;

    // Construct comprehensive JSON-LD Schemas for SEO, AEO & Organization Entity Knowledge Graph
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HR Niti",
            url: BASE_URL,
            logo: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
            description: "India's leading AI-powered HRMS & Payroll Software Platform",
            sameAs: [
                "https://www.linkedin.com/company/hrniti",
                "https://twitter.com/hrniti"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: `HRMS Software in ${cityData.name}`, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `HRMS & Payroll Software in ${cityData.name}`,
            description: cityData.metaDescription,
            url,
            provider: {
                "@type": "Organization",
                name: "HR Niti",
                url: BASE_URL,
                logo: `${BASE_URL}/uploads/1781778053575-HRNITI_LOGO.png`,
            },
            areaServed: {
                "@type": "City",
                name: cityData.name,
                containedInPlace: {
                    "@type": "State",
                    name: cityData.state,
                },
            },
            serviceType: "HRMS & Payroll Software Automation",
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `HR Niti HRMS - ${cityData.name}`,
            operatingSystem: "Web, iOS, Android",
            applicationCategory: "BusinessApplication",
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
            mainEntity: cityData.faqs.map((faq) => ({
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
            {/* Inject JSON-LD Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Navbar />

            <LocationHero cityData={cityData} />

            <LocalHubs cityData={cityData} />

            <StatutorySection cityData={cityData} />

            <SmHRtFeatures cityName={cityData.name} />

            <WhyChoose cityName={cityData.name} />

            <LocalPresence />

            <CityFaqAccordion cityName={cityData.name} faqs={cityData.faqs} />

            <CTASection cityName={cityData.name} />

            <InterCityNav currentCity={cityData.slug} />

            <Footer />
        </main>
    );
}
