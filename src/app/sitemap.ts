import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { industries } from "@/lib/industriesData";
import { tools } from "@/lib/toolsData";
import { glossaryTerms } from "@/lib/glossaryData";
import { cityList } from "@/data/cityData";

const BASE_URL = "https://www.hrniti.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    let templateRoutes: MetadataRoute.Sitemap = [];

    try {
        const templates = await prisma.template.findMany({
            select: { slug: true, updated_at: true },
        });
        templateRoutes = templates.map((t) => ({
            url: `${BASE_URL}/templates/${t.slug}`,
            lastModified: t.updated_at ?? now,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        }));
    } catch (err) {
        console.error("sitemap: failed to load templates", err);
    }

    const industryRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        ...industries.map((industry) => ({
            url: `${BASE_URL}/industries/${industry.slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];

    const toolRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        ...tools
            .filter((t) => t.available)
            .map((tool) => ({
                url: `${BASE_URL}/tools/${tool.slug}`,
                lastModified: now,
                changeFrequency: "monthly" as const,
                priority: 0.7,
            })),
    ];

    const glossaryRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/resources/hr-glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        ...glossaryTerms.map((term) => ({
            url: `${BASE_URL}/resources/hr-glossary/${term.slug}`,
            lastModified: now,
            changeFrequency: "yearly" as const,
            priority: 0.5,
        })),
    ];

    const staticRoutes: MetadataRoute.Sitemap = [
        // Core Pages
        { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/hrms-software`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

        // Business Size Scale Solutions
        { url: `${BASE_URL}/small-business-solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/medium-business-solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/large-business-solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

        // Core Product Pages
        { url: `${BASE_URL}/payroll-software`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/attendance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/leave-management`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/employee-management`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/employee-self-service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/recruitment-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/employee-performance-management-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/timesheet-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/expense-management-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/full-and-final-settlement`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hr-mis-reports`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hrms-mobile-app`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/org-chart`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hr-chatbot`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/lms`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/analytics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/jobposting`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/employee-tracking`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hiring`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/reports`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/partners`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

        // Entity, Comparisons & AI Knowledge Layer
        { url: `${BASE_URL}/company/hr-niti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/best-hrms-software-india`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/hrniti-vs-keka-hr`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hrniti-vs-greythr`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hrniti-vs-zoho-payroll`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hrniti-vs-hrone`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hrniti-vs-pagarbook`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

        // Resources & Content
        { url: `${BASE_URL}/templates`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },

        // Legal
        { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ];

    const cityRoutes: MetadataRoute.Sitemap = cityList.map((city) => ({
        url: `${BASE_URL}/${city.seoSlug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        ...staticRoutes,
        ...industryRoutes,
        ...toolRoutes,
        ...glossaryRoutes,
        ...cityRoutes,
        ...templateRoutes,
    ];
}
