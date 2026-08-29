import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FnFHero from "@/components/fnf/FnFHero";
import FnFProcess from "@/components/fnf/FnFProcess";
import FnFFeatures from "@/components/fnf/FnFFeatures";
import FnFFAQ from "@/components/fnf/FnFFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Full & Final (FnF) Settlement Software",
    description: "Automate employee exit process. Calculate gratuity, manage notice periods, recover assets, and generate no-dues certificates seamlessly.",
    openGraph: {
        title: "Full & Final Settlement Software India - HR Niti | Automate Employee Exit",
        description: "Automate employee exit with HR Niti's F&F Settlement Software. Calculate gratuity, manage notice periods, asset recovery, and generate no-dues certificates instantly.",
        url: "https://www.hrniti.com/full-and-final-settlement",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Full & Final Settlement Software India - HR Niti | Automate Employee Exit" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Full & Final Settlement Software India - HR Niti | Automate Employee Exit",
        description: "Automate employee exit with HR Niti's F&F Settlement Software. Calculate gratuity, manage notice periods, asset recovery, and generate no-dues certificates instantly.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/full-and-final-settlement" },
    keywords: "full and final settlement software, FnF settlement India, employee exit management, gratuity calculator software, HR Niti FnF",
};

export default function FnFPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <FnFHero />

            <FnFProcess />

            <FnFFeatures />

            <FnFFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
