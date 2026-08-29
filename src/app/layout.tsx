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
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}
