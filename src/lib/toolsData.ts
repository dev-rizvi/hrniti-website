import { Calculator, CalendarDays, TrendingUp, FileText, IdCard, ShieldCheck, CalendarClock, LucideIcon } from "lucide-react";

export interface ContentSection {
    heading: string;
    body: string;
}

export interface ToolFAQ {
    q: string;
    a: string;
}

export interface Tool {
    slug: string;
    name: string;
    shortDesc: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    icon: LucideIcon;
    available: boolean;
    badge?: string;
    intro?: string;
    sections?: ContentSection[];
    faqs?: ToolFAQ[];
}

export const tools: Tool[] = [
    {
        slug: "gratuity-calculator",
        name: "Gratuity Calculator",
        shortDesc: "Calculate your estimated gratuity payout online under the Code on Social Security 2020 rules.",
        metaTitle: "Gratuity Calculator India — Code on Social Security 2020 Rules | HR Niti",
        metaDescription: "Free Gratuity Calculator India. Calculate gratuity under Code on Social Security 2020 rules for regular, fixed-term (1 year), and contract employees.",
        keywords: "Gratuity Calculator India, Gratuity rules in India, Indian gratuity calculation, Code on Social Security 2020, gratuity calculation formula",
        icon: Calculator,
        available: true,
        badge: "🇮🇳 Code on Social Security, 2020 Rules (Enforced Nov 21, 2025)",
        intro: "Calculate your estimated gratuity amount online with HR Niti's Gratuity Calculator India. Enter your last-drawn eligible wages and completed years of continuous service to estimate your statutory gratuity payout under the Code on Social Security, 2020.",
        sections: [
            {
                heading: "What Is Gratuity?",
                body: "Gratuity is a lump-sum employment benefit paid by an employer to an eligible employee for qualifying service upon retirement, resignation, or exit. In India, gratuity is governed by social-security legislation, operating under the Code on Social Security, 2020 (which came into force on 21 November 2025, consolidating earlier laws including the Payment of Gratuity Act, 1972). It applies to factories, mines, plantations, ports, railway companies, and all business establishments employing 10 or more workers."
            },
            {
                heading: "How Is Gratuity Calculated?",
                body: "For employees to whom the standard statutory formula applies, Indian gratuity calculation is computed using: Gratuity = (Eligible Wages × 15 × Completed Years of Service) ÷ 26. The statutory framework uses 15 days' wages for every completed year of service, divided by 26 working days in a month.\n\nExample: Suppose eligible last-drawn wages are ₹40,000 per month and completed service is 8 years. Calculation: ₹40,000 × 15 × 8 ÷ 26 = ₹1,84,615 estimated gratuity payout."
            },
            {
                heading: "Gratuity Formula Explained",
                body: "The statutory formula is: Gratuity = (Wages × 15 × Years of Service) ÷ 26.\n\n• Eligible Wages: Basic Salary + Dearness Allowance (DA). Under the 50% wage cap introduced in the Labour Codes, if non-wage allowances exceed 50% of total CTC, the excess amount is added back to eligible wages.\n• 15: Prescribed number of days' wages for each completed year of service.\n• 26: Divisor representing standard working days per month (excluding 4 weekly off days).\n• Completed Years: Continuous service years. Periods exceeding 6 months in the final year are rounded up to the next full year."
            },
            {
                heading: "How Much Gratuity Will I Get After 5 Years?",
                body: "For an employee covered by standard statutory rules, gratuity after 5 years is calculated directly from eligible wages:\n• Eligible wages of ₹40,000: ₹40,000 × 15 × 5 ÷ 26 = ₹1,15,385\n• Eligible wages of ₹50,000: ₹50,000 × 15 × 5 ÷ 26 = ₹1,44,231\n• Eligible wages of ₹1,00,000: ₹1,00,000 × 15 × 5 ÷ 26 = ₹2,88,462"
            },
            {
                heading: "How Much Gratuity Will I Get After 10 Years?",
                body: "For an employee with 10 completed years of continuous service:\n• Eligible wages of ₹40,000: ₹40,000 × 15 × 10 ÷ 26 = ₹2,30,769\n• Eligible wages of ₹50,000: ₹50,000 × 15 × 10 ÷ 26 = ₹2,88,462\n• Eligible wages of ₹1,00,000: ₹1,00,000 × 15 × 10 ÷ 26 = ₹5,76,923"
            },
            {
                heading: "Is Gratuity Calculated on Basic Salary?",
                body: "Yes — gratuity is calculated on Basic Salary + Dearness Allowance (DA), NOT on your total Cost to Company (CTC) or take-home pay. Allowances such as HRA, special allowance, and performance bonuses are excluded unless non-wage components exceed 50% of total CTC under the Code on Social Security 2020."
            },
            {
                heading: "Gratuity Eligibility in India: Is 5 Years Mandatory?",
                body: "No, 5 years is NOT mandatory for all employees. While continuous service of 5 years historically applied to regular permanent employees, the Ministry of Labour clarified under the Code on Social Security, 2020 (effective 21 November 2025) that Fixed-Term Employees (FTE) become eligible for gratuity on a pro-rata basis after completing just 1 year of service from the start of the contract. Furthermore, in cases of death or permanent disablement, the 5-year service requirement is waived completely."
            },
            {
                heading: "Gratuity Rules for Fixed-Term & Contract Employees",
                body: "The legal framework distinguishes between employment types:\n• Fixed-Term Employees (FTE): Eligible for gratuity after completing 1 year of service under contract on a pro-rata basis.\n• Contract Labour: For workers engaged through a contractor, the contractor is responsible for paying gratuity upon completing qualifying service.\n• Deceased Employees: Paid to nominees or legal heirs on a pro-rata basis regardless of service length."
            },
            {
                heading: "Gratuity Calculation Under the New Labour Codes",
                body: "India's Labour Codes introduced a consolidated framework for gratuity under the Code on Social Security, 2020, enforced from 21 November 2025. The Ministry of Labour has clarified that the revised definition of wages and fixed-term employee eligibility apply from this date."
            },
            {
                heading: "Is Gratuity Taxable in India?",
                body: "Tax exemption rules for gratuity under Section 10(10) of the Income Tax Act:\n• Government Employees: 100% tax-free.\n• Non-Government Covered Employees: Exempt up to the statutory ceiling of ₹20,00,000. Gratuity amounts received beyond ₹20 lakh or outside statutory guidelines are subject to income tax at applicable slab rates."
            }
        ],
        faqs: [
            { q: "What is gratuity?", a: "Gratuity is a lump-sum employment benefit paid to an eligible employee for qualifying service under applicable Indian social-security rules." },
            { q: "How is gratuity calculated in India?", a: "For employees covered under statutory rules, gratuity is calculated as: Gratuity = (Eligible Wages × 15 × Completed Years of Service) ÷ 26." },
            { q: "What is the gratuity formula?", a: "The standard formula is: Eligible Wages × 15 × Completed Years ÷ 26, where 15 represents days of wages and 26 represents working days per month." },
            { q: "Is gratuity calculated on basic salary?", a: "Gratuity is calculated on Basic Salary + Dearness Allowance (DA), not on total CTC or monthly take-home salary." },
            { q: "Is gratuity calculated on CTC?", a: "No. Gratuity should not be calculated on total CTC. The statutory wage definition (Basic + DA) determines the eligible wage amount." },
            { q: "How much gratuity will I get after 5 years?", a: "With ₹40,000 eligible wages, gratuity after 5 years is ₹40,000 × 15 × 5 ÷ 26 = ₹1,15,385 under the standard formula." },
            { q: "How much gratuity will I get after 10 years?", a: "With ₹50,000 eligible wages, gratuity after 10 years is ₹50,000 × 15 × 10 ÷ 26 = ₹2,88,462." },
            { q: "Is 5 years mandatory for gratuity?", a: "No. Traditional rules required 5 years for regular employees, but fixed-term employees are eligible after 1 year of service under the Code on Social Security 2020, and the requirement is waived in case of death or disability." },
            { q: "Are fixed-term employees eligible for gratuity?", a: "Yes. Under the Code on Social Security, 2020, fixed-term employees qualify for pro-rata gratuity after completing 1 year of service." },
            { q: "Is gratuity taxable?", a: "For non-government employees, gratuity is exempt from income tax up to the statutory ceiling of ₹20,00,000." },
            { q: "Does gratuity form part of CTC?", a: "An employer may list an estimated gratuity contribution in a CTC offer letter, but gratuity is a statutory exit benefit, not monthly take-home cash." },
            { q: "What happens to gratuity if I resign?", a: "An eligible employee is entitled to receive gratuity upon resignation, provided they satisfy the qualifying service condition (1 year for fixed-term, 5 years for standard employees)." },
            { q: "How is gratuity calculated after 4 years and 7 months?", a: "For completed service, periods over 6 months round up to the next year (5 years). Eligibility depends on your employee category (fixed-term vs permanent)." },
            { q: "Does the new Labour Code change gratuity calculation?", a: "Yes. The Code on Social Security, 2020 (enforced 21 November 2025) revised the definition of wages (50% wage cap) and extended 1-year gratuity eligibility to fixed-term workers." }
        ],
    },
    {
        slug: "leave-encashment-calculator",
        name: "Leave Encashment Calculator India",
        shortDesc: "Calculate unused earned leave payout and tax exemption under Indian rules.",
        metaTitle: "Leave Encashment Calculator India – Calculate Unused Leave Payout | HR Niti",
        metaDescription: "Calculate leave encashment online in India. Estimate unused earned-leave payout using salary, eligible leave days and your employer's calculation basis with HR Niti.",
        keywords: "leave encashment calculator, leave encashment calculator India, leave encashment calculation, leave encashment formula, leave salary calculator, earned leave encashment calculator, leave encashment amount calculator, leave encashment tax calculator, leave encashment on resignation, leave encashment on retirement, leave encashment calculation in India",
        icon: CalendarDays,
        available: true,
        badge: "🇮🇳 Leave Encashment Calculator India",
        intro: "Rather than letting unused earned leave quietly expire, most companies let employees convert it into cash — either as part of an annual policy, or when they exit through resignation or retirement. This calculator estimates that payout in seconds, no spreadsheet needed.",
        sections: [
            {
                heading: "What is Leave Encashment?",
                body: "Leave encashment means turning unused paid leave into money instead of taking the days off. It commonly comes into play at three points: when an employee resigns or is terminated, at retirement or superannuation, or — if company policy allows it — as an annual option to cash out a portion of accumulated leave without leaving the job. In the unfortunate event of an employee's death, any unused leave balance is typically encashed and paid to their legal heirs.",
            },
            {
                heading: "Which Leave Types Qualify?",
                body: "Not all leave is encashable. In most Indian companies, only earned leave (also called privilege leave) counts toward encashment — casual leave and sick leave are usually excluded and simply lapse if unused, though this varies by company policy and, for government employees, by specific service rules.",
            },
            {
                heading: "Leave Encashment Formula",
                body: "The most common formula is: Leave Encashment = (Last drawn Basic Salary + Dearness Allowance ÷ dividing factor) × number of leave days being encashed. The dividing factor represents how many days are counted per month — some companies use 30 (calendar days), others use 26 (working days only) — so always check which convention your employer follows before relying on the result.",
            },
            {
                heading: "Worked Example",
                body: "Say an employee's monthly Basic + DA is ₹45,000, they're encashing 8 unused earned leave days, and their company uses a 30-day divisor. Leave Encashment = (45,000 ÷ 30) × 8 = ₹12,000. Swap in a 26-day divisor instead and the same inputs produce a slightly higher per-day rate — which is exactly why getting this number right for your own company matters.",
            },
            {
                heading: "Is There a Single Law Governing Leave Encashment?",
                body: "Unlike gratuity, leave encashment in India isn't governed by one uniform statute for every employee. It's shaped by a mix of your employer's internal leave policy, whether you're a government or private-sector employee, and the specific leave type in question — so the exact rules can differ meaningfully from one organization to the next.",
            },
        ],
        faqs: [
            { q: "Can I encash leave while still employed, not just when I leave?", a: "Only if your company's policy explicitly allows it — some organizations let employees cash out a capped number of earned leave days annually, while others reserve encashment strictly for exit or retirement." },
            { q: "Does sick leave or casual leave get encashed too?", a: "Generally no. Most policies restrict encashment to earned/privilege leave; sick and casual leave typically lapse at year-end instead." },
            { q: "Why does the choice of 26 vs. 30 as the divisor matter so much?", a: "It directly changes your per-day rate — the same leave balance can produce a noticeably different payout depending on which convention your employer uses, so it's worth confirming rather than assuming." },
            { q: "Is leave encashment taxed the same way every time?", a: "No — tax treatment depends on the circumstances. Encashment received at retirement or resignation typically carries partial exemption up to statutory limits for non-government employees, while encashment taken during active employment is usually fully taxable as regular salary income." },
        ],
    },
    {
        slug: "salary-hike-calculator",
        name: "Salary Hike Calculator",
        shortDesc: "Calculate your salary hike percentage, new CTC, or increment amount instantly.",
        metaTitle: "Salary Hike Calculator — Calculate Increment % Instantly",
        metaDescription: "Free salary hike calculator. Find your hike percentage, new annual CTC, or monthly salary increase in seconds.",
        keywords: "salary hike calculator, increment calculator, CTC hike percentage calculator, salary increase calculator",
        icon: TrendingUp,
        available: true,
        badge: "💰 Instant, No Sign-Up Required",
        intro: "Whether you're sizing up a new job offer, prepping for an appraisal conversation with your manager, or just want to know what a number on an offer letter actually means for your monthly take-home, this calculator gets you there in seconds — no spreadsheet required.",
        sections: [
            {
                heading: "What Counts as a Salary Hike?",
                body: "A salary hike is simply an increase to what an employer pays an employee — whether that's the result of an annual performance appraisal, a promotion, a market-correction adjustment, a new skill or certification, or a fresh job offer altogether. It can be expressed either as a percentage of current pay or as a flat amount added on top.",
            },
            {
                heading: "The Math Behind It",
                body: "The core formula is straightforward: New Salary = Current Salary + (Current Salary × Hike % ÷ 100). Say your current monthly salary is ₹50,000 and you're offered a 10% hike — that's a hike amount of ₹5,000, bringing your new monthly salary to ₹55,000. Flip the calculator's mode and you can just as easily work backwards from a known new salary to find out what percentage hike it actually represents.",
            },
            {
                heading: "Two Ways to Use This Calculator",
                body: "If you know your hike percentage and want to see the resulting salary, switch to \"Find New Salary\" mode and enter your current pay plus the percentage. If instead you've been given a new salary figure — say, in an offer letter — and want to know what hike percentage it works out to, use \"Find Hike %\" mode with both your old and new numbers. Either way, results update instantly as you type, and the Annually/Monthly toggle lets you work in whichever unit your numbers are already in.",
            },
            {
                heading: "Why the Take-Home Number Can Differ",
                body: "This tool calculates change in gross CTC — the full cost-to-company figure — not your actual in-hand pay. Two offers with an identical hike percentage can still land very differently in your bank account depending on how the new CTC is split between basic pay, allowances, and benefits, and which tax slab you fall into as a result.",
            },
        ],
        faqs: [
            { q: "What's considered a good salary hike in India?", a: "It varies a lot by industry, role, and whether the hike comes from an internal appraisal or switching employers — moving companies often produces a noticeably higher percentage hike than staying and waiting for an annual increment." },
            { q: "Does a bigger CTC hike always mean more take-home pay?", a: "Not necessarily. If more of the increase is allocated to non-cash benefits, employer contributions, or other deductions rather than basic salary, your in-hand monthly increase can end up smaller than the headline hike percentage suggests." },
            { q: "Should I compare hikes using CTC or take-home salary?", a: "Both matter, but for day-to-day budgeting, take-home pay is what you'll actually feel — it's worth asking for a full salary breakup before assuming a high hike percentage translates directly into proportionally higher monthly cash in hand." },
        ],
    },
    {
        slug: "in-hand-salary-calculator",
        name: "In-Hand Salary Calculator India",
        shortDesc: "Calculate your monthly in-hand take-home salary from annual CTC in India.",
        metaTitle: "In-Hand Salary Calculator India – CTC to Take-Home Salary | HR Niti",
        metaDescription: "Calculate your estimated in-hand salary from CTC in India. Compare monthly take-home pay after PF, Professional Tax and income tax under the applicable tax regime.",
        keywords: "in hand salary calculator, in hand salary calculator India, take home salary calculator, CTC to in hand salary calculator, salary calculator India, monthly in hand salary calculator, CTC calculator, salary breakup calculator, gross salary calculator, take home salary from CTC, new tax regime salary calculator, old tax regime salary calculator",
        icon: Calculator,
        available: true,
        badge: "Free India Salary & Payroll Tool",
    },
    {
        slug: "ctc-calculator",
        name: "CTC Calculator India",
        shortDesc: "Calculate annual Cost to Company (CTC) salary breakup and components.",
        metaTitle: "CTC Calculator India - Calculate Salary Breakup & In-Hand Pay | HR Niti",
        metaDescription: "Calculate CTC breakup in India with HR Niti's free CTC Calculator. Estimate Basic, HRA, PF, gratuity, gross salary and monthly take-home pay.",
        keywords: "ctc calculator, ctc calculator India, CTC breakup calculator, salary breakup calculator, salary structure calculator, CTC to in-hand salary calculator, CTC calculation, cost to company calculator, CTC salary calculator, how is CTC calculated, how is Basic Salary calculated from CTC, is CTC same as take-home salary, does CTC include PF, does CTC include gratuity",
        icon: Calculator,
        available: true,
        badge: "Free Salary Structure & Payroll Tool",
    },
    {
        slug: "pf-calculator",
        name: "EPF Calculator India",
        shortDesc: "Calculate Provident Fund (PF) monthly deposits, employer share & maturity corpus.",
        metaTitle: "EPF Calculator India - Calculate PF Contribution, Interest & Maturity | HR Niti",
        metaDescription: "Calculate EPF contributions and estimate your PF maturity corpus in India. See employee and employer shares, interest and projected balance with HR Niti.",
        keywords: "EPF calculator, EPF calculator India, PF calculator, Provident Fund calculator, EPF contribution calculator, PF contribution calculator, EPF maturity calculator, EPF interest calculator, EPF balance calculator, PF interest rate, how is EPF interest calculated, how much PF is deducted from salary, how is employer PF contribution split, is EPF maturity tax-free",
        icon: Calculator,
        available: true,
        badge: "Free India Provident Fund Tool",
    },
    {
        slug: "final-settlement-calculator",
        name: "Full & Final Settlement Calculator",
        shortDesc: "Calculate employee exit settlement payout including unpaid salary, leave encashment & gratuity.",
        metaTitle: "Full & Final Settlement Calculator India – F&F Exit Payout | HR Niti",
        metaDescription: "Calculate Full & Final settlement in India. Estimate unpaid salary, leave encashment, gratuity, bonus, reimbursements and notice recovery with HR Niti.",
        keywords: "full and final settlement calculator, final settlement calculator, F&F settlement calculator, full and final calculation, final settlement after resignation, full and final settlement India, employee final settlement calculator, notice period recovery calculator, leave encashment calculation, gratuity calculation in final settlement, final salary calculation after resignation, F&F settlement timeline",
        icon: Calculator,
        available: true,
        badge: "Free Exit Settlement & Payroll Tool",
    },
    {
        slug: "payslip-generator",
        name: "Payslip Generator",
        shortDesc: "Generate professional, ready-to-download employee payslips in PDF format.",
        metaTitle: "Free Payslip Generator India – Create & Download Salary Slips | HR Niti",
        metaDescription: "Generate professional, ready-to-download employee payslips online for free with HR Niti. Input Basic, HRA, PF, PT, TDS & get instant PDF salary slips.",
        keywords: "payslip generator, free payslip generator, salary slip generator, online payslip generator India, employee payslip maker, download salary slip pdf",
        icon: FileText,
        available: true,
        badge: "📄 PDF Salary Slip Maker",
    },
    {
        slug: "id-card-designer",
        name: "Employee ID Card Maker",
        shortDesc: "Design and download print-ready professional employee ID cards online in PDF format.",
        metaTitle: "Free Employee ID Card Maker Online – Design & Download PDF ID Badges | HR Niti",
        metaDescription: "Create professional employee ID cards online for free with HR Niti. Upload logo & photo, pick corporate templates, customize details & download print-ready CR80 PDF ID cards.",
        keywords: "employee ID card maker, free ID card designer online, printable employee ID card template, corporate ID card generator, download ID badge PDF, staff ID card maker India",
        icon: IdCard,
        available: true,
        badge: "🆔 Free Printable Employee ID Badge Maker",
        intro: "Design, customize, and download high-resolution employee ID cards online for free with HR Niti's Employee ID Card Maker. Choose from multiple professional corporate themes, add employee photo, logo, designation, blood group, QR code, and download print-ready CR80 PDF badges instantly.",
        sections: [
            {
                heading: "What Is an Employee ID Card Maker?",
                body: "An Employee ID Card Maker is an online web tool designed for HR managers, startup founders, school administrators, and business owners to create official staff identity badges. It eliminates the need for expensive graphic design software by providing pre-built corporate templates, automatic layout alignment, photo upload, company branding, and instant CR80 standard size PDF downloads."
            },
            {
                heading: "Why Are Employee ID Cards Important for Organizations?",
                body: "Official identity badges play a vital role in workplace security, access control, branding, and professional identity. Key benefits include:\n\n• Workplace Security & Access Control: Easily verify staff identity at entry gates, turnstiles, and restricted security areas.\n• Professional Corporate Branding: Presents a cohesive, trustworthy image when employees meet clients or attend industry conferences.\n• Emergency Information: Displays critical details such as Blood Group, Emergency Contact, and Employee ID for quick access in medical situations.\n• Automated Attendance & Access: Modern ID cards incorporate barcodes or QR codes for seamless HRMS attendance logging and door access systems."
            },
            {
                heading: "Standard ID Card Dimensions (CR80 Standard)",
                body: "The standard size for corporate identity cards, badges, and credit cards worldwide is the CR80 specification:\n\n• Width: 85.6 mm (3.375 inches / 3 3/8 in)\n• Height: 53.98 mm (2.125 inches / 2 1/8 in)\n• Thickness: 30 mil (0.76 mm PVC plastic)\n• Orientation: Available in both Vertical (Portrait badge with top lanyard hole) and Horizontal (Landscape badge) orientations."
            },
            {
                heading: "Key Elements of a Compliant Employee ID Card",
                body: "A well-designed corporate identity badge includes essential front and back details:\n\n1. Front Side:\n   - Company Name & Logo\n   - Employee Passport Photograph\n   - Employee Full Name & Designation\n   - Department & Employee ID Code\n   - Date of Joining / Issue Date\n\n2. Back Side:\n   - Emergency Contact Number & Blood Group\n   - Office Address & Contact Email\n   - QR Code / Barcode for digital scanning\n   - Authorized Signatory & Return Instructions"
            }
        ],
        faqs: [
            { q: "Is HR Niti's Employee ID Card Maker free to use?", a: "Yes, HR Niti's Employee ID Card Maker is 100% free. You can design, preview, and download unlimited high-resolution PDF identity badges without any subscription or hidden fees." },
            { q: "What dimensions are the downloaded ID cards?", a: "Downloaded ID cards follow the international CR80 standard (85.6 mm x 54 mm), making them perfectly sized for standard PVC card printers, lanyard badge holders, and card sleeves." },
            { q: "Can I print the downloaded PDF on standard paper or PVC plastic cards?", a: "Yes! The downloaded PDF is high-resolution (300 DPI equivalent) and can be printed on standard paper, cardstock, photo paper, or directly onto PVC plastic cards using thermal ID card printers (like Zebra, Fargo, or Evolis)." },
            { q: "Can I add my company logo and employee photo?", a: "Yes! You can upload custom PNG or JPG company logos and employee passport photos directly from your device." },
            { q: "Does the ID card include a QR code or Barcode?", a: "Yes, you can enable a dynamic QR code or Barcode on the back side of the card for easy digital scanning, attendance integration, and employee verification." },
            { q: "Which card orientation is better: Vertical or Horizontal?", a: "Vertical (Portrait) ID cards are most popular for lanyards and clip-on badges, while Horizontal (Landscape) ID cards work great for wallet cards and magnetic stripe badges. Our generator supports both orientation options." }
        ],
    },
    {
        slug: "labour-law-compliance-calculator",
        name: "Labour Law Compliance Calculator",
        shortDesc: "Check where your organization stands on Indian labour law compliance.",
        metaTitle: "Labour Law Compliance Calculator",
        metaDescription: "Check your labour law compliance status.",
        keywords: "labour law compliance calculator",
        icon: ShieldCheck,
        available: false,
    },
    {
        slug: "hr-compliance-calendar",
        name: "HR Compliance Calendar",
        shortDesc: "A month-by-month schedule of statutory filings and payment deadlines.",
        metaTitle: "HR Compliance Calendar",
        metaDescription: "Month-by-month statutory compliance deadlines for HR teams.",
        keywords: "HR compliance calendar India",
        icon: CalendarClock,
        available: false,
    },
];
