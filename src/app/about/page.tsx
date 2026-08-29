import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import ContentBlock from "@/components/about/ContentBlock";
import StatsSection from "@/components/about/StatsSection";
import AboutNameOriginSection from "@/components/about/AboutNameOriginSection";
import AboutPillarsSection from "@/components/about/AboutPillarsSection";
import AboutWhyChooseUs from "@/components/about/AboutWhyChooseUs";
import CTASection from "@/components/about/CTASection";
import { prisma } from "@/lib/prisma";

export const metadata = {
    title: "About HR Niti - India's Leading HRMS & Payroll Software Company",
    description: "HR Niti builds GenAI-powered HRMS and payroll software for Indian businesses. Learn our story, mission, and why companies trust our platform.",
    openGraph: {
        title: "About HR Niti - India's Leading HRMS & Payroll Software Company",
        description: "Learn about HR Niti's mission to revolutionize HR management in India through AI-powered technology. Serving 500+ companies with end-to-end HRMS and payroll automation.",
        url: "https://www.hrniti.com/about",
        type: "website",
        images: [{ url: "/uploads/1781778053575-HRNITI_LOGO.png", width: 1200, height: 630, alt: "About HR Niti - India's Leading HRMS & Payroll Software Company" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About HR Niti - India's Leading HRMS & Payroll Software Company",
        description: "Learn about HR Niti's mission to revolutionize HR management in India through AI-powered technology. Serving 500+ companies with end-to-end HRMS and payroll automation.",
        images: ["/uploads/1781778053575-HRNITI_LOGO.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/about" },
    keywords: "about HR Niti, HRMS company India, HR software company, payroll software company India",
};

export const revalidate = 3600;

export default async function AboutPage() {
    let settings = null;
    try {
        settings = await prisma.about_settings.findUnique({
            where: { id: 1 }
        });
    } catch (err) {
        console.error("Error loading about page settings from database:", err);
    }

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About HR Niti",
            url: "https://www.hrniti.com/about",
            description: "Learn about HR Niti's mission to revolutionize HR management in India through AI-powered technology.",
            mainEntity: {
                "@type": "Organization",
                name: "HR Niti",
                url: "https://www.hrniti.com",
                logo: "https://www.hrniti.com/uploads/1781778053575-HRNITI_LOGO.png",
                sameAs: [
                    "https://www.linkedin.com/company/hrniti",
                    "https://twitter.com/hrniti"
                ]
            }
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Navbar />

            <AboutHero 
                title={settings?.hero_title}
                subtitle={settings?.hero_subtitle}
                description={settings?.hero_description}
                imageUrl={settings?.hero_image_url}
            />

            <StatsSection />

            <ContentBlock
                title={settings?.story_title || "Empowering Digital India"}
                subtitle={settings?.story_subtitle || "OUR FOUNDATION"}
                description={settings?.story_description || "HR Niti was founded with a unified mission: to empower growing enterprises with digital workflows, automating administrative tasks so team members can dedicate energy towards creative growth. We believe in providing robust cloud software built on trust, transparency, and continuous innovation. Our modular architecture lets you adapt core modules seamlessly as your corporate headcount grows."}
                imageAlt="Team Strategy Meeting"
                showButton={true}
                imageUrl={settings?.story_image_url}
            />

            <AboutNameOriginSection />

            <AboutPillarsSection />

            <ContentBlock
                title={settings?.vision_title || "Vision & Mission"}
                subtitle={settings?.vision_subtitle || "OUR PHILOSOPHY"}
                description={settings?.vision_description || "Our vision is to become the leading HCM platform by merging conversational GenAI capabilities with traditional compliance parameters. We aim to support businesses in setting standard benchmarks for talent retention, workspace equality, and automated audit preparedness. Technology is an extension of standard human empathy, and we are committed to making it accessible to every scaling business."}
                imageAlt="Vision and Mission Concept"
                reversed={true}
                imageUrl={settings?.vision_image_url}
            />

            <AboutWhyChooseUs />

            <CTASection />

            <Footer />
        </main>
    );
}
