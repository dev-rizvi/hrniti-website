'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export interface DemoLeadInput {
    name: string;
    email: string;
    phone: string;
    company: string;
    employees: string;
    sourcePage?: string;
    sourceUrl?: string;
    cityName?: string;
}

export async function submitDemoLeadAction(data: DemoLeadInput) {
    try {
        const { name, email, phone, company, employees, sourcePage, sourceUrl, cityName } = data;

        // Server-side validation
        if (!name || !name.trim()) {
            return { success: false, error: 'Full name is required.' };
        }
        if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return { success: false, error: 'A valid email address is required.' };
        }
        if (!phone || !phone.trim()) {
            return { success: false, error: 'Phone number is required.' };
        }
        if (!company || !company.trim()) {
            return { success: false, error: 'Company name is required.' };
        }

        const origin = sourcePage || (cityName ? `${cityName} Location Page` : 'General Demo Form');
        const subject = `Demo Request - ${origin} (${employees} Employees)`;

        const messageLines = [
            `Company: ${company.trim()}`,
            `Team Size: ${employees}`,
            `Source Origin: ${origin}`,
            cityName ? `City Context: ${cityName}` : null,
            sourceUrl ? `Page URL: ${sourceUrl}` : null,
            `Submission Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`
        ].filter(Boolean).join('\n');

        // Store directly into contact_inquiries table in Database
        const inquiry = await prisma.contact_inquiries.create({
            data: {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                subject,
                message: messageLines,
                status: 'new',
            },
        });

        try {
            revalidatePath('/admin/contacts');
        } catch {
            // Ignore revalidatePath warning outside request store context
        }

        return { success: true, id: inquiry.id };
    } catch (error: any) {
        console.error('Error saving demo lead inquiry:', error);
        return {
            success: false,
            error: 'Failed to submit lead. Please check network connection and try again.',
        };
    }
}
