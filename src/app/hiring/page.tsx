import type { Metadata } from "next";
import HiringClient from "./HiringClient";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
  title: "Hiring & Applicant Tracking System (ATS) | HR Niti",
  description: "Streamline sourcing, track applicants seamlessly, automate resume screening, and send digital offer letters with HR Niti's all-in-one ATS.",
  keywords: "hiring software, applicant tracking system, ATS software India, resume screener, recruitment platform",
  alternates: {
    canonical: `${BASE_URL}/hiring`,
  },
  openGraph: {
    title: "Hiring & Applicant Tracking System (ATS) | HR Niti",
    description: "Streamline sourcing, track applicants seamlessly, automate resume screening, and send digital offer letters with HR Niti's all-in-one ATS.",
    url: `${BASE_URL}/hiring`,
    type: "website",
  },
};

export default function HiringPage() {
  return <HiringClient />;
}
