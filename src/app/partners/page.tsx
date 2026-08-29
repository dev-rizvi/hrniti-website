import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
    title: "HR Niti Partner & Reseller Network",
    description: "Partner with HR Niti to unlock high margin growth. Join our Referral, Reseller, Tech, or Implementation partner programs with up to 30% revenue share.",
    keywords: "HR software partner, reseller program India, payroll software referral, HR consultant partnership",
    alternates: {
        canonical: `${BASE_URL}/partners`,
    },
    openGraph: {
        title: "HR Niti Partner Network | Referral, Reseller & Tech Partnership Programs",
        description: "Partner with HR Niti to unlock high margin growth. Join our Referral, Reseller, Tech, or Implementation partner programs with up to 30% revenue share.",
        url: `${BASE_URL}/partners`,
        type: "website",
    },
};

export default function PartnersPage() {
    return <PartnersClient />;
}
