import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingAddons from "@/components/pricing/PricingAddons";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "HRMS & Payroll Software Pricing Plans in India - HR Niti",
    description: "Transparent pricing for HR software. Choose from Standard, Professional, or Enterprise plans suited for every business size.",
    openGraph: {
        title: "HRMS & Payroll Software Pricing Plans in India - HR Niti",
        description: "Transparent HRMS pricing for Indian businesses. Choose from Standard, Professional, or Enterprise plans. No hidden fees. Start free trial today with HR Niti.",
        url: "https://www.hrniti.com/pricing",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HRMS & Payroll Software Pricing Plans in India - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HRMS & Payroll Software Pricing Plans in India - HR Niti",
        description: "Transparent HRMS pricing for Indian businesses. Choose from Standard, Professional, or Enterprise plans. No hidden fees. Start free trial today with HR Niti.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/pricing" },
    keywords: "HRMS software pricing India, HR software cost, payroll software pricing, HR Niti pricing plans, HRMS subscription India",
};

export const revalidate = 3600;

export default async function PricingPage() {
    let packages: any[] = [];
    let addons: any[] = [];
    let currencySymbol: string = "₹";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000";
    const packagesUrl = process.env.NEXT_PUBLIC_API_PACKAGES_URL || `${baseUrl}/api/packages`;
    const addonsUrl = process.env.NEXT_PUBLIC_API_ADDONS_URL || `${baseUrl}/api/addons`;
    const settingsUrl = process.env.NEXT_PUBLIC_API_DEMO_SETTINGS_URL || `${baseUrl}/api/demo-settings`;

    // 1. Fetch Dynamic Packages with Features from Backend API (.env)
    try {
        const res = await fetch(packagesUrl, { cache: "no-store" });
        if (res.ok) {
            packages = await res.json();
        }
    } catch (err) {
        console.error("Error loading packages from API:", err);
    }

    // 2. Fetch Dynamic Addons from Backend API (.env)
    try {
        const res = await fetch(addonsUrl, { cache: "no-store" });
        if (res.ok) {
            addons = await res.json();
        }
    } catch (err) {
        console.error("Error loading addons from API:", err);
    }

    // 3. Fetch Currency Symbol from Demo Settings (.env)
    try {
        const res = await fetch(settingsUrl, { cache: "no-store" });
        if (res.ok) {
            const data = await res.json();
            if (data.currency_symbol) currencySymbol = data.currency_symbol;
        }
    } catch (err) {
        console.error("Error loading demo settings from API:", err);
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PricingHero />

            {/* Dynamic Plans from Database API */}
            <PricingPlans packages={packages} currencySymbol={currencySymbol} />

            {/* Dynamic Modular Add-ons from Database API */}
            <PricingAddons addons={addons} />

            {/* Dynamic Comparison Matrix with Live DB Package Columns & Features */}
            <ComparisonTable packages={packages} addons={addons} />

            {/* FAQs */}
            <PricingFAQ />

            {/* CTA */}
            <CTASection />

            <Footer />
        </main>
    );
}
