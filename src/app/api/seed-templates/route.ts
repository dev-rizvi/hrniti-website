import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const templatesData = [
    { title: "Offer letter template", description: "An in-depth template on offer letter template — practical guidance for modern HR teams." },
    { title: "Employment contract template", description: "An in-depth template on employment contract template — practical guidance for modern HR teams." },
    { title: "Onboarding checklist template", description: "An in-depth template on onboarding checklist template — practical guidance for modern HR teams." },
    { title: "30/60/90 day plan template", description: "An in-depth template on 30/60/90 day plan template — practical guidance for modern HR teams." },
    { title: "Performance review form template", description: "An in-depth template on performance review form template — practical guidance for modern HR teams." },
    { title: "OKR planning template", description: "An in-depth template on okr planning template — practical guidance for modern HR teams." },
    { title: "Job description template", description: "An in-depth template on job description template — practical guidance for modern HR teams." },
    { title: "Interview scorecard template", description: "An in-depth template on interview scorecard template — practical guidance for modern HR teams." },
    { title: "Leave policy template", description: "An in-depth template on leave policy template — practical guidance for modern HR teams." },
    { title: "Remote work policy template", description: "An in-depth template on remote work policy template — practical guidance for modern HR teams." },
    { title: "Compensation band worksheet", description: "An in-depth template on compensation band worksheet — practical guidance for modern HR teams." },
    { title: "Headcount planning template", description: "An in-depth template on headcount planning template — practical guidance for modern HR teams." },
    { title: "Exit interview template", description: "An in-depth template on exit interview template — practical guidance for modern HR teams." },
    { title: "Employee handbook template", description: "An in-depth template on employee handbook template — practical guidance for modern HR teams." },
    { title: "Probation review template", description: "An in-depth template on probation review template — practical guidance for modern HR teams." },
    { title: "Reference check template", description: "An in-depth template on reference check template — practical guidance for modern HR teams." },
    { title: "Promotion proposal template", description: "An in-depth template on promotion proposal template — practical guidance for modern HR teams." },
    { title: "Diversity hiring scorecard", description: "An in-depth template on diversity hiring scorecard — practical guidance for modern HR teams." },
    { title: "HR audit checklist", description: "An in-depth template on hr audit checklist — practical guidance for modern HR teams." },
    { title: "Payroll calendar template", description: "An in-depth template on payroll calendar template — practical guidance for modern HR teams." },
];

export async function GET() {
    try {
        const count = await prisma.template.count();
        if (count > 0) {
            return NextResponse.json({ success: false, message: "Database already seeded with templates." });
        }

        for (const data of templatesData) {
            const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            await prisma.template.create({
                data: {
                    title: data.title,
                    slug: slug,
                    description: data.description,
                    tag: "Template"
                }
            });
        }

        return NextResponse.json({ success: true, message: "Seeded 20 templates successfully." });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
