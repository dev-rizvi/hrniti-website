import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import OfficeLocations from "@/components/contact/OfficeLocations";
import { prisma } from "@/lib/prisma";
import { officeLocations } from "@/lib/officeData";

const BASE_URL = "https://www.hrniti.com";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Contact Us - HR Niti | Head Office Lucknow",
    description: "Contact HR Niti for HR and payroll software solutions. Call us at +91 8601489763 or email support@hrniti.com. Head Office: 5/761, Sector 5, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh 226001.",
    keywords: "contact HR Niti, HR software support, payroll software inquiry, demo request, HR Niti Lucknow office",
    alternates: { canonical: `${BASE_URL}/contact-us` },
};

export default async function ContactUsPage() {
    let settings = null;
    try {
        settings = await prisma.contact_settings.findUnique({
            where: { id: 1 },
        });
    } catch (err) {
        console.error("Error loading contact settings from DB:", err);
    }

    // Real, verifiable office addresses — genuine local-SEO signal for
    // "HRMS software in [city]" searches and Google's local pack, as opposed
    // to the Service/areaServed schema on the /[city] landing pages (which
    // don't correspond to physical offices).
    const officeSchemas = officeLocations.map((office) => ({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `HR Niti - ${office.city} Office`,
        parentOrganization: { "@type": "Organization", name: "HR Niti", url: BASE_URL },
        address: {
            "@type": "PostalAddress",
            streetAddress: office.address,
            addressLocality: office.city,
            addressCountry: "IN",
        },
        telephone: office.phone,
        email: office.email,
        url: `${BASE_URL}/contact-us`,
    }));

    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(officeSchemas) }} />
            <Navbar />
            <ContactHero />
            <ContactFormSection settings={settings} />
            {/* <OfficeLocations /> */}
            <Footer />
        </main>
    );
}
