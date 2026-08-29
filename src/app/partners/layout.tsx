import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program - Referral, Reseller & Tech Partners | HR Niti",
  description: "Join HR Niti's partner ecosystem as a referral, reseller, technology, or implementation partner. Earn recurring commissions and grow with India's leading HRMS platform.",
  keywords: "HR Niti partners, HRMS reseller program, referral partner HR software, HR Niti partner program",
  alternates: { canonical: "https://www.hrniti.com/partners" },
  openGraph: {
    title: "Partner Program - Referral, Reseller & Tech Partners | HR Niti",
    description: "Join HR Niti's partner ecosystem and earn recurring commissions reselling or referring India's leading HRMS platform.",
    url: "https://www.hrniti.com/partners",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Partner Program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Program - Referral, Reseller & Tech Partners | HR Niti",
    description: "Join HR Niti's partner ecosystem and earn recurring commissions reselling or referring India's leading HRMS platform.",
    images: ["/og-default.png"],
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
