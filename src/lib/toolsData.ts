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
        shortDesc: "Estimate your gratuity payout based on last drawn salary and years of service.",
        metaTitle: "Gratuity Calculator — Estimate Your Gratuity Amount",
        metaDescription: "Free online gratuity calculator for India. Estimate your gratuity payout instantly based on last drawn Basic + DA and years of service, per the Payment of Gratuity Act.",
        keywords: "gratuity calculator, gratuity calculator India, gratuity calculation formula, payment of gratuity act calculator",
        icon: Calculator,
        available: true,
        badge: "🇮🇳 Payment of Gratuity Act, 1972",
        intro: "A simple, reliable tool to calculate gratuity online. If you're a salaried employee — especially in the private sector — this calculator helps you estimate the amount you'll receive at the end of your service, based on the Payment of Gratuity Act, 1972.",
        sections: [
            {
                heading: "What is Gratuity?",
                body: "Gratuity is a statutory benefit paid by an employer to an employee as a reward for long-term service. It's governed by the Payment of Gratuity Act, 1972, which applies to factories, mines, plantations, ports, railway companies, and establishments with 10 or more employees. Gratuity becomes payable when an employee leaves an organization due to retirement, resignation after completing the eligibility period, termination after continuous service, or death or permanent disablement — in which case the minimum service requirement does not apply.",
            },
            {
                heading: "Who is Eligible for Gratuity?",
                body: "An employee generally becomes eligible for gratuity after completing at least 5 years of continuous service with the same employer. Continuous service includes periods of paid leave, maternity leave, and layoffs or strikes not caused by the employee. Fixed-term employees are treated differently — under the Code on Social Security, 2020, they're eligible for gratuity on a pro-rata basis even without completing 5 years.",
            },
            {
                heading: "Formula for Calculation of Gratuity",
                body: "For employees covered under the Act: Gratuity = (Last drawn Basic Salary + Dearness Allowance) × 15 × Years of Service ÷ 26. Here, 15 represents 15 days of salary for each completed year of service, and 26 represents the standard number of working days in a month. Any service period exceeding 6 months in the final year is rounded up to the next full year.",
            },
            {
                heading: "Example Calculation",
                body: "Suppose an employee's last drawn Basic + DA is ₹30,000 and they've completed 10 years of service. Gratuity = (30,000 × 15 × 10) ÷ 26 = approximately ₹1,73,077. Use the calculator above to get this result instantly for your own numbers.",
            },
        ],
        faqs: [
            { q: "Is gratuity taxable?", a: "For employees covered under the Payment of Gratuity Act, gratuity received up to ₹20 lakh is exempt from income tax. Amounts above this statutory ceiling may be taxable — check with a tax professional for your specific situation." },
            { q: "What happens if I resign before completing 5 years?", a: "In most cases, you won't be eligible for gratuity if you resign before completing 5 years of continuous service, unless you're a fixed-term employee (eligible pro-rata) or leaving due to death or disability." },
            { q: "Does gratuity apply to contract or fixed-term employees?", a: "Yes — under the Code on Social Security, 2020, fixed-term employees are entitled to gratuity on a pro-rata basis, without needing to complete 5 years of service." },
            { q: "Is there a maximum limit on gratuity?", a: "Yes, the current statutory ceiling is ₹20,00,000. Employers can choose to pay more, but amounts above the ceiling may not carry the same tax exemption." },
            { q: "Does this calculator give the legally exact amount?", a: "This calculator provides an estimate based on the standard statutory formula. Your actual entitlement can vary based on company policy, state-specific rules, and your exact employment terms — consult your HR team or a professional for a definitive figure." },
        ],
    },
    {
        slug: "leave-encashment-calculator",
        name: "Leave Encashment Calculator",
        shortDesc: "Calculate the payout for unused earned leave based on salary and leave days.",
        metaTitle: "Leave Encashment Calculator — Estimate Your Payout",
        metaDescription: "Free leave encashment calculator. Instantly estimate your leave encashment amount based on Basic + DA and the number of leave days being encashed.",
        keywords: "leave encashment calculator, leave encashment formula, earned leave payout calculator",
        icon: CalendarDays,
        available: true,
        badge: "🇮🇳 Based on Standard Leave Policy Practice",
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
        slug: "payslip-generator",
        name: "Payslip Generator",
        shortDesc: "Generate professional, ready-to-download payslips in a few clicks.",
        metaTitle: "Payslip Generator",
        metaDescription: "Generate professional payslips online.",
        keywords: "payslip generator",
        icon: FileText,
        available: false,
    },
    {
        slug: "id-card-designer",
        name: "ID Card Designer",
        shortDesc: "Design and download professional employee ID cards online.",
        metaTitle: "ID Card Designer",
        metaDescription: "Design employee ID cards online.",
        keywords: "employee ID card designer",
        icon: IdCard,
        available: false,
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
