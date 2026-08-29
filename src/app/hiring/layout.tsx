import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at HR Niti - Join Our Team | HR Tech Jobs India",
    description: "Streamline sourcing, track applicants, automate resume screening, and send digital offer letters with HR Niti's all-in-one ATS.",
    keywords: "HR Niti careers, HR tech jobs India, HRMS company jobs, software engineer jobs Pune, product manager jobs HR tech",
    openGraph: {
        title: "Careers at HR Niti - Join Our Team",
        description: "Build the future of HR technology with us. Explore open roles at HR Niti across engineering, design, and business.",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Careers at HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at HR Niti",
        description: "Join our team and build the future of HR technology in India.",
        images: ["/og-default.png"],
    },
};

export default function HiringLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
