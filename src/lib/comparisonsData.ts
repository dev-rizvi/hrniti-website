export interface ComparisonFeature {
    name: string;
    hrniti: boolean | string;
    competitor: boolean | string;
    notes: string;
}

export interface CompetitorComparison {
    slug: string;
    slugAlt?: string;
    competitorName: string;
    competitorCategory: string;
    title: string;
    metaDescription: string;
    keywords: string;
    heroSubtitle: string;
    executiveSummary: string;
    whyChooseHRNiti: string[];
    whyChooseCompetitor: string[];
    featuresTable: ComparisonFeature[];
    pricingOverview: {
        hrnitiPrice: string;
        competitorPrice: string;
        details: string;
    };
    faqs: { q: string; a: string }[];
}

export const comparisonsData: CompetitorComparison[] = [
    // 1. HR Niti vs Keka HR
    {
        slug: "hrniti-vs-keka-hr",
        competitorName: "Keka HR",
        competitorCategory: "Mid-Market Tech HRMS",
        title: "HR Niti vs Keka HR Comparison — Features, Pricing & Payroll Engine (2026)",
        metaDescription: "Objective comparison of HR Niti vs Keka HR. Compare Indian statutory payroll, mobile GPS geofencing, selfie attendance, AI assistant, and pricing tiers.",
        keywords: "HR Niti vs Keka, HR Niti vs Keka HR, Keka HR alternative India, compare HR Niti Keka, best payroll software India",
        heroSubtitle: "An in-depth, objective feature and pricing analysis comparing HR Niti and Keka HR for growing Indian businesses.",
        executiveSummary: "While both HR Niti and Keka HR offer robust Indian statutory payroll and attendance management, HR Niti stands out with built-in Generative AI HR assistant capabilities, selfie attendance verification, an integrated free HR tool hub, and flexible pricing tailored for startups to mid-market enterprises.",
        whyChooseHRNiti: [
            "Native Conversational GenAI HR Assistant for automated employee self-service and policy inquiries.",
            "Mobile Selfie Attendance with GPS geofencing and anti-spoofing location verification.",
            "Code on Social Security 2020 Gratuity Engine with automatic 1-year fixed-term eligibility rules.",
            "Public HR Tool & Calculator suite (Payslip Generator, ID Card Maker, CTC & Tax Calculators).",
            "Cost-effective per-employee pricing with zero hidden implementation charges for SMBs.",
        ],
        whyChooseCompetitor: [
            "Extensive third-party developer API marketplace.",
            "Established brand presence in mid-market IT & tech companies.",
            "Deep project time-tracking and billable hours modules.",
        ],
        featuresTable: [
            { name: "Indian Statutory Payroll (PF, ESIC, PT, TDS)", hrniti: true, competitor: true, notes: "Both handle full statutory compliance for India." },
            { name: "State-Specific Tax Rules (All 28 States & UTs)", hrniti: true, competitor: true, notes: "Covers Professional Tax across Maharashtra, Karnataka, WB, etc." },
            { name: "Mobile GPS Geofenced Attendance", hrniti: true, competitor: true, notes: "Real-time location tagging on mobile punch." },
            { name: "Selfie Attendance Verification", hrniti: true, competitor: false, notes: "HR Niti includes mandatory selfie verification for field staff." },
            { name: "Conversational GenAI HR Chatbot", hrniti: true, competitor: false, notes: "HR Niti includes GenAI chatbot for automated employee queries." },
            { name: "Code on Social Security 2020 Gratuity Engine", hrniti: true, competitor: true, notes: "Automated 15/26 formula and 1-year fixed term rules." },
            { name: "Full & Final (F&F) Exit Settlement", hrniti: true, competitor: true, notes: "Automates leave encashment, notice period recovery, and exit clearance." },
            { name: "Free Public HR Calculators Suite", hrniti: true, competitor: false, notes: "HR Niti provides 9 free online tools and PDF generators." },
            { name: "Print-Ready ID Card PDF Maker", hrniti: true, competitor: false, notes: "HR Niti provides built-in CR80 standard ID card designer." },
            { name: "Performance Management & OKRs", hrniti: true, competitor: true, notes: "Both support goal tracking, 360-degree feedback, and appraisals." },
        ],
        pricingOverview: {
            hrnitiPrice: "Starting from ₹49 / employee / month",
            competitorPrice: "Starting from ₹6,999 / month + ₹60+ per employee",
            details: "HR Niti offers straightforward, scalable per-user pricing with free setup options, whereas Keka requires a higher monthly base platform fee before adding per-employee charges.",
        },
        faqs: [
            { q: "Is HR Niti a good alternative to Keka HR?", a: "Yes. HR Niti offers comparable core HRMS, payroll, and attendance capabilities with additional AI features (GenAI HR chatbot), mobile selfie attendance, and more accessible pricing for Indian startups and SMEs." },
            { q: "Which software is better for field or remote staff attendance?", a: "HR Niti includes native GPS geofencing AND photo/selfie verification on mobile check-in, making it superior for multi-location or field team attendance tracking." },
            { q: "Does HR Niti handle Form 16 and statutory tax filings like Keka?", a: "Yes. HR Niti generates Form 16 Part A & B, Form 24Q quarterly statements, PF ECR files, ESIC returns, and Professional Tax reports across all Indian states." },
        ],
    },

    // 2. HR Niti vs greytHR
    {
        slug: "hrniti-vs-greythr",
        slugAlt: "hrniti-vs-greythr",
        competitorName: "greytHR",
        competitorCategory: "Traditional Small Business Payroll",
        title: "HR Niti vs greytHR Comparison — HRMS Features, Payroll & Compliance (2026)",
        metaDescription: "Compare HR Niti vs greytHR for Indian payroll, employee management, mobile attendance geofencing, leave tracking, and overall usability.",
        keywords: "HR Niti vs greytHR, greytHR alternative India, compare HR Niti greytHR, best payroll software India for small business",
        heroSubtitle: "A complete feature, mobile experience, and compliance comparison between HR Niti and greytHR.",
        executiveSummary: "greytHR is a legacy payroll provider widely used in India, but HR Niti provides a modern cloud experience featuring a GenAI conversational HR assistant, modern mobile app with selfie GPS attendance, built-in ID card maker, and intuitive self-service portal.",
        whyChooseHRNiti: [
            "Modern, intuitive UI designed for fast onboarding without heavy training.",
            "Conversational GenAI HR Chatbot for instant policy, leave, and payslip inquiries.",
            "Advanced Mobile Attendance with GPS geofencing & selfie photo verification.",
            "Free Printable Employee ID Card Maker & PDF Payslip Designer.",
            "Code on Social Security 2020 updated gratuity rules built-in.",
        ],
        whyChooseCompetitor: [
            "Decades-long brand presence in Indian small business payroll.",
            "Large network of chartered accountants and payroll outsourcing partners.",
            "Extensive legacy knowledge base for basic compliance.",
        ],
        featuresTable: [
            { name: "Indian Statutory Payroll (PF, ESIC, PT, TDS)", hrniti: true, competitor: true, notes: "Both handle full statutory compliance for India." },
            { name: "Modern UX / UI Design", hrniti: "Modern & Clean", competitor: "Legacy Interface", notes: "HR Niti features a clean, responsive modern dashboard." },
            { name: "Mobile GPS Geofenced Attendance", hrniti: true, competitor: true, notes: "Location-tagged check-ins on mobile." },
            { name: "Selfie Attendance Verification", hrniti: true, competitor: false, notes: "HR Niti verifies check-in identity with live selfie photos." },
            { name: "GenAI Conversational Assistant", hrniti: true, competitor: false, notes: "HR Niti includes AI chatbot for instant employee self-service." },
            { name: "Automated F&F Exit Settlement Engine", hrniti: true, competitor: true, notes: "Calculates unpaid salary, leave encashment, and notice recovery." },
            { name: "Built-In ID Card Designer", hrniti: true, competitor: false, notes: "HR Niti exports print-ready CR80 standard ID cards." },
            { name: "Free Public HR Tools Suite", hrniti: true, competitor: false, notes: "9 free public tools and statutory calculators." },
            { name: "Recruitment ATS & Offer Letters", hrniti: true, competitor: "Basic / Add-on", notes: "HR Niti includes applicant tracking and offer letter workflows." },
            { name: "Performance Management OKRs", hrniti: true, competitor: "Basic / Add-on", notes: "HR Niti supports continuous feedback and 360-degree reviews." },
        ],
        pricingOverview: {
            hrnitiPrice: "Transparent per-employee monthly pricing starting at ₹49/emp",
            competitorPrice: "Tiered plans starting at ~₹3,495/month + per-user fee",
            details: "HR Niti offers clear, transparent per-employee pricing with full access to HRMS and AI features, avoiding complex add-on module surcharges.",
        },
        faqs: [
            { q: "Is HR Niti easier to use than greytHR?", a: "Yes. HR Niti is built on modern web standards with an intuitive, clutter-free user interface that requires zero formal training for HR administrators and employees." },
            { q: "Can I migrate employee data from greytHR to HR Niti?", a: "Yes! HR Niti provides bulk Excel/CSV import templates for employee master data, past salary structures, leave balances, and attendance logs." },
            { q: "Does HR Niti generate Form 16 and PF ECR files?", a: "Yes. HR Niti generates official government-compliant PF ECR text files for EPFO upload, ESIC monthly returns, Professional Tax statements, and Form 16 TDS certificates." },
        ],
    },

    // 3. HR Niti vs Zoho Payroll / Zoho People
    {
        slug: "hrniti-vs-zoho-payroll",
        competitorName: "Zoho Payroll & People",
        competitorCategory: "SaaS Ecosystem Suite",
        title: "HR Niti vs Zoho Payroll & People Comparison — HRMS & Compliance (2026)",
        metaDescription: "Compare HR Niti vs Zoho Payroll and Zoho People. Detailed analysis of Indian statutory compliance, mobile GPS attendance, F&F settlement, and pricing.",
        keywords: "HR Niti vs Zoho Payroll, HR Niti vs Zoho People, Zoho Payroll alternative, compare HR Niti Zoho, Indian payroll software comparison",
        heroSubtitle: "A detailed comparison of HR Niti against Zoho's HR & Payroll offerings for Indian businesses.",
        executiveSummary: "While Zoho offers a broad global SaaS suite, HR Niti is specifically built for Indian HR and statutory compliance from the ground up — providing deeper support for state-specific Professional Tax, Code on Social Security 2020 gratuity rules, mobile selfie GPS attendance, and GenAI employee self-service.",
        whyChooseHRNiti: [
            "100% focused on Indian labor laws, state-specific tax rules, and local HR workflows.",
            "Unified single-platform experience for HRMS, Payroll, Attendance, and Performance without needing separate Zoho apps.",
            "Mobile Selfie Verification with GPS geofencing for remote and field workforces.",
            "Built-in GenAI HR Assistant for instant policy, leave, and payroll responses.",
            "Free public suite of Indian HR tools and statutory calculators.",
        ],
        whyChooseCompetitor: [
            "Native integration with Zoho CRM, Zoho Books, and Zoho One ecosystem.",
            "Global multi-currency support for non-Indian subsidiaries.",
            "Extensive custom workflow builder for developers.",
        ],
        featuresTable: [
            { name: "Single Unified HRMS & Payroll", hrniti: true, competitor: "Requires Zoho People + Zoho Payroll", notes: "HR Niti provides HRMS and payroll in one unified platform." },
            { name: "Indian Statutory Tax Rules (28 States & UTs)", hrniti: true, competitor: "Partial State PT Rules", notes: "HR Niti covers all state-specific Professional Tax rules." },
            { name: "Mobile GPS Geofenced Attendance", hrniti: true, competitor: true, notes: "Location check-in capabilities." },
            { name: "Selfie Attendance Verification", hrniti: true, competitor: false, notes: "HR Niti requires photo proof on check-in to prevent buddy punching." },
            { name: "GenAI HR Assistant", hrniti: true, competitor: "Zoho Zia (General)", notes: "HR Niti provides domain-trained HR conversational assistant." },
            { name: "Code on Social Security 2020 Gratuity Engine", hrniti: true, competitor: false, notes: "HR Niti automates new labor code 1-year FTE gratuity rules." },
            { name: "Full & Final (F&F) Exit Settlement Engine", hrniti: true, competitor: true, notes: "Automated exit payout calculation." },
            { name: "Free Employee ID Card Maker (PDF)", hrniti: true, competitor: false, notes: "HR Niti exports CR80 standard printable ID cards." },
            { name: "Free Public HR Tools Suite", hrniti: true, competitor: false, notes: "9 interactive statutory calculators and PDF generators." },
        ],
        pricingOverview: {
            hrnitiPrice: "Starting from ₹49 / employee / month (HRMS + Payroll unified)",
            competitorPrice: "Zoho People + Zoho Payroll combined per-user costs",
            details: "Zoho requires purchasing Zoho People and Zoho Payroll separately for full HRMS + Payroll capability, whereas HR Niti includes core HRMS, attendance, leave, and payroll in one unified plan.",
        },
        faqs: [
            { q: "Why choose HR Niti over Zoho Payroll and Zoho People?", a: "HR Niti eliminates the need to buy and manage two separate applications. It offers a single unified HRMS + Payroll portal purpose-built for Indian compliance, mobile selfie attendance, and GenAI self-service." },
            { q: "Does HR Niti handle Professional Tax for all Indian states?", a: "Yes! HR Niti supports state-specific Professional Tax slabs and rules for Maharashtra, Karnataka, West Bengal, Tamil Nadu, Telangana, Gujarat, Madhya Pradesh, and all other applicable states." },
        ],
    },

    // 4. HR Niti vs HROne
    {
        slug: "hrniti-vs-hrone",
        competitorName: "HROne",
        competitorCategory: "Enterprise HR Automation",
        title: "HR Niti vs HROne Comparison — Features, Mobile Experience & Pricing (2026)",
        metaDescription: "Compare HR Niti vs HROne HR software. Evaluate Indian payroll, attendance geofencing, employee self-service, GenAI assistant, and value for money.",
        keywords: "HR Niti vs HROne, HROne alternative, HROne software comparison, best HRMS India, HR Niti HROne compare",
        heroSubtitle: "An objective feature and usability analysis comparing HR Niti and HROne HR software.",
        executiveSummary: "Both HR Niti and HROne focus on HR inbox automation and employee experience. HR Niti offers a more accessible, modern solution with built-in Generative AI assistant support, mobile selfie geofencing attendance, a free public HR calculator hub, and transparent pricing for startups and SMEs.",
        whyChooseHRNiti: [
            "Conversational GenAI HR Assistant for automated employee self-service.",
            "Mobile Selfie & GPS Geofenced Attendance for field and office staff.",
            "Free public suite of statutory calculators and PDF generators.",
            "Rapid deployment — go live in days without months of enterprise setup.",
            "Transparent, scalable per-employee pricing tiers.",
        ],
        whyChooseCompetitor: [
            "Long-standing presence in large enterprise HR automation.",
            "Established inbox-based action notification system.",
            "Custom enterprise on-premise deployment options.",
        ],
        featuresTable: [
            { name: "Indian Statutory Payroll (PF, ESIC, PT, TDS)", hrniti: true, competitor: true, notes: "Both support Indian statutory compliance." },
            { name: "Mobile GPS Geofenced Attendance", hrniti: true, competitor: true, notes: "Mobile check-in with GPS location tags." },
            { name: "Selfie Attendance Verification", hrniti: true, competitor: false, notes: "HR Niti adds photo verification on check-in." },
            { name: "GenAI HR Assistant", hrniti: true, competitor: false, notes: "HR Niti includes conversational AI chatbot." },
            { name: "Full & Final Settlement (F&F)", hrniti: true, competitor: true, notes: "Automated exit payout calculation." },
            { name: "Code on Social Security 2020 Gratuity", hrniti: true, competitor: true, notes: "Statutory gratuity calculations." },
            { name: "Free Employee ID Card Maker", hrniti: true, competitor: false, notes: "Built-in CR80 PDF badge designer." },
            { name: "Free Public HR Tools & Calculators", hrniti: true, competitor: false, notes: "HR Niti provides 9 free statutory calculators." },
            { name: "Implementation Time", hrniti: "1-3 Days", competitor: "2-4 Weeks", notes: "HR Niti offers instant self-serve onboarding." },
        ],
        pricingOverview: {
            hrnitiPrice: "Starting from ₹49 / employee / month",
            competitorPrice: "Custom enterprise quote based on module selection",
            details: "HR Niti provides instant, transparent pricing with no hidden setup fees, whereas HROne primarily uses custom enterprise quotation models.",
        },
        faqs: [
            { q: "Is HR Niti suitable for small to mid-sized Indian companies?", a: "Yes! HR Niti is designed to scale seamlessly from 10 employees to 5,000+ employees, providing enterprise-grade HRMS features at accessible pricing." },
            { q: "How fast can an organization get started with HR Niti?", a: "Organizations can set up company details, import employee records via Excel, and run their first payroll in as little as 1 to 3 days." },
        ],
    },

    // 5. HR Niti vs PagarBook
    {
        slug: "hrniti-vs-pagarbook",
        competitorName: "PagarBook",
        competitorCategory: "Micro Business Attendance & Wage App",
        title: "HR Niti vs PagarBook Comparison — Full HRMS vs Basic Wage Tracking (2026)",
        metaDescription: "Compare HR Niti vs PagarBook. See why growing companies upgrade from basic PagarBook wage apps to HR Niti's full HRMS & statutory payroll platform.",
        keywords: "HR Niti vs PagarBook, PagarBook alternative, PagarBook vs HRMS, upgrade from PagarBook, full HRMS India",
        heroSubtitle: "Understand the differences between basic wage tracking apps like PagarBook and HR Niti's complete HRMS platform.",
        executiveSummary: "PagarBook is designed primarily for micro-businesses tracking daily wage workers and basic attendance. Growing businesses upgrade to HR Niti for complete HRMS capabilities: statutory PF/ESIC/PT payroll, Form 16, leave policy engines, recruitment ATS, performance OKRs, and GenAI employee self-service.",
        whyChooseHRNiti: [
            "Complete HRMS suite: HRMS, Payroll, Attendance, Leave, Recruitment, Performance, and Analytics.",
            "Full Indian Statutory Compliance: Automated PF, ESIC, Professional Tax, MLWF, Form 16, and Form 24Q filings.",
            "Automated Full & Final Exit Settlement and Code on Social Security 2020 Gratuity Engine.",
            "GenAI HR Assistant for automated employee self-service and policy inquiries.",
            "Free PDF tools: Payslip Generator & Printable ID Card Maker.",
        ],
        whyChooseCompetitor: [
            "Ultra-simple mobile app for micro shops with daily/hourly wage workers.",
            "Basic daily staff entry without complex HR policies.",
            "Low barrier for informal worker tracking.",
        ],
        featuresTable: [
            { name: "Target Business Size", hrniti: "10 to 5,000+ Employees", competitor: "1 to 20 Workers (Micro Shops)", notes: "HR Niti scales with growing corporate teams." },
            { name: "Full Indian Statutory Payroll (PF, ESIC, PT, TDS)", hrniti: true, competitor: "Basic Wage Record Only", notes: "HR Niti computes statutory deductions and government files." },
            { name: "Form 16 & Form 24Q TDS Generation", hrniti: true, competitor: false, notes: "HR Niti generates official income tax certificates." },
            { name: "Mobile GPS Geofenced Attendance", hrniti: true, competitor: "Basic GPS", notes: "HR Niti adds geofencing boundaries & selfie photo proof." },
            { name: "Leave Policy Rule Engine (Earned, Sick, Casual)", hrniti: true, competitor: "Basic Days Off", notes: "HR Niti automates accruals, carryovers, and encashments." },
            { name: "Recruitment ATS & Offer Letters", hrniti: true, competitor: false, notes: "HR Niti manages hiring funnels and offer letter templates." },
            { name: "Performance Management OKRs", hrniti: true, competitor: false, notes: "HR Niti supports appraisals and continuous feedback." },
            { name: "GenAI HR Chatbot Assistant", hrniti: true, competitor: false, notes: "HR Niti provides automated conversational AI self-service." },
            { name: "Print-Ready ID Card PDF Maker", hrniti: true, competitor: false, notes: "HR Niti exports CR80 standard printable staff badges." },
        ],
        pricingOverview: {
            hrnitiPrice: "Starting from ₹49 / employee / month (Full HRMS + Payroll)",
            competitorPrice: "Basic micro app subscription",
            details: "While basic wage apps cost less for informal micro shops, HR Niti provides a full statutory-compliant HRMS platform necessary for formal businesses.",
        },
        faqs: [
            { q: "Why should a company upgrade from PagarBook to HR Niti?", a: "As a company hires formal salaried employees, it becomes legally required to process PF, ESIC, Professional Tax, Income Tax TDS, and Form 16 certificates. HR Niti automates all of these statutory HR & payroll requirements seamlessly." },
            { q: "Can HR Niti handle both salaried and contract staff?", a: "Yes! HR Niti supports monthly salaried employees, fixed-term contractors, and daily/shift-based staff in one unified payroll and attendance engine." },
        ],
    },
];
