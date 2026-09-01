import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatbotWrapper from "@/components/ChatbotWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hrniti.com"),
  referrer: "strict-origin-when-cross-origin",
  title: {
    default: "Best HRMS & Payroll Software in India | HR Niti",
    template: "%s | HR Niti",
  },
  description:
    "HR Niti is India's leading cloud-based HRMS & Payroll Software. Automate payroll, attendance, leave, recruitment, and more.",
  keywords: [
    "HRMS software India",
    "payroll software India",
    "HR software",
    "leave management system",
    "attendance management",
    "employee self service portal",
    "HR Niti",
  ],
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/uploads/1781778053575-HRNITI_LOGO.png" }
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  authors: [{ name: "HR Niti", url: "https://www.hrniti.com" }],
  creator: "HR Niti",
  publisher: "HR Niti",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hrniti.com",
    siteName: "HR Niti",
    title: "HR Niti - Best HRMS & Payroll Software in India",
    description:
      "Automate payroll, attendance, leave, and recruitment with HR Niti — India's GenAI-powered HRMS platform.",
    images: [{ url: "/uploads/1781778053575-HRNITI_LOGO.png", width: 1200, height: 630, alt: "HR Niti HRMS Software" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hrniti",
    creator: "@hrniti",
    title: "HR Niti - Best HRMS & Payroll Software in India",
    description:
      "Automate payroll, attendance, leave, and recruitment with HR Niti — India's GenAI-powered HRMS platform.",
    images: ["/uploads/1781778053575-HRNITI_LOGO.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="describedby" href="/llms.txt" type="text/markdown" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preload" as="image" href="/image/homepage/banner.webp" fetchPriority="high" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9R094S1NFG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9R094S1NFG');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ybdlez4c1w");
          `}
        </Script>
        {/* Global Entity Schema for AI Engine Optimization (AEO/GEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.hrniti.com/#organization",
                name: "HR Niti",
                alternateName: ["HRNiti", "HR Niti HRMS"],
                url: "https://www.hrniti.com",
                logo: "https://www.hrniti.com/uploads/1781778053575-HRNITI_LOGO.png",
                image: "https://www.hrniti.com/uploads/1781778053575-HRNITI_LOGO.png",
                description: "HR Niti is an India-focused cloud HRMS and payroll software platform designed for businesses to manage employee records, automated payroll, attendance, leave, recruitment, and statutory compliance.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "5/761, Sector 5, Sector 6, Gomti Nagar",
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "226001",
                  addressCountry: "IN",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-8601489763",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
                sameAs: [
                    "https://www.linkedin.com/company/hrniti/",
                    "https://www.instagram.com/hr_niti/",
                  ],
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://www.hrniti.com/#software",
                name: "HR Niti HRMS & Payroll Software",
                operatingSystem: "All (Cloud Web-Based & Mobile App)",
                applicationCategory: "BusinessApplication",
                url: "https://www.hrniti.com",
                publisher: {
                  "@id": "https://www.hrniti.com/#organization",
                },
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "INR",
                  lowPrice: "49",
                  highPrice: "149",
                  offerCount: "3",
                },
                featureList: [
                  "Indian Payroll Automation & Statutory Compliance (PF, ESIC, PT, MLWF, Form 16)",
                  "Mobile Attendance Management with GPS Geofencing & Biometrics Integration",
                  "Automated Leave Management & Policy Rule Engine",
                  "Full & Final Settlement (F&F) & Gratuity Calculation Engine",
                  "GenAI HR Assistant & Employee Self-Service (ESS) Portal",
                  "Performance Management, OKRs, & Recruitment ATS",
                ],
              },
            ]),
          }}
        />
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}
