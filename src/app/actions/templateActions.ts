"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getTemplates() {
    try {
        const templates = await prisma.template.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });
        return { success: true, data: templates };
    } catch (error: any) {
        console.error("Error fetching templates:", error);
        return { success: false, error: error.message };
    }
}

export async function getTemplateBySlug(slug: string) {
    try {
        const template = await prisma.template.findUnique({
            where: { slug }
        });
        if (!template) {
            return { success: false, error: "Template not found" };
        }
        return { success: true, data: template };
    } catch (error: any) {
        console.error("Error fetching template:", error);
        return { success: false, error: error.message };
    }
}

export async function createTemplate(data: {
    title: string;
    slug: string;
    description: string;
    tag?: string;
    content?: string;
    file_url?: string;
}) {
    try {
        const template = await prisma.template.create({
            data: {
                ...data,
                tag: data.tag || "Template"
            }
        });
        revalidatePath('/admin/templates');
        revalidatePath('/templates');
        return { success: true, data: template };
    } catch (error: any) {
        console.error("Error creating template:", error);
        return { success: false, error: error.message };
    }
}

export async function updateTemplate(id: string, data: {
    title?: string;
    slug?: string;
    description?: string;
    tag?: string;
    content?: string;
    file_url?: string;
}) {
    try {
        const template = await prisma.template.update({
            where: { id },
            data
        });
        revalidatePath('/admin/templates');
        revalidatePath('/templates');
        revalidatePath(`/templates/${template.slug}`);
        return { success: true, data: template };
    } catch (error: any) {
        console.error("Error updating template:", error);
        return { success: false, error: error.message };
    }
}

export async function deleteTemplate(id: string) {
    try {
        await prisma.template.delete({
            where: { id }
        });
        revalidatePath('/admin/templates');
        revalidatePath('/templates');
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting template:", error);
        return { success: false, error: error.message };
    }
}

export async function getTemplateDownloadLeads() {
    try {
        const leads = await prisma.templateDownloadLead.findMany({
            orderBy: { created_at: 'desc' },
        });
        return { success: true, data: leads };
    } catch (error: any) {
        console.error("Error fetching template download leads:", error);
        return { success: false, error: error.message };
    }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitTemplateDownloadLead(data: {
    email: string;
    company: string;
    phone: string;
    template_slug: string;
    template_title: string;
}) {
    try {
        const email = data.email?.trim();
        const company = data.company?.trim();
        const phone = data.phone?.trim();

        if (!email || !EMAIL_RE.test(email)) {
            return { success: false, error: "Please enter a valid email address." };
        }
        if (!company) {
            return { success: false, error: "Company name is required." };
        }
        if (!phone || phone.replace(/\D/g, "").length < 7) {
            return { success: false, error: "Please enter a valid phone number." };
        }
        if (!data.template_slug || !data.template_title) {
            return { success: false, error: "Missing template information." };
        }

        const lead = await prisma.templateDownloadLead.create({
            data: {
                email,
                company,
                phone,
                template_slug: data.template_slug,
                template_title: data.template_title,
                source: "templates",
            },
        });

        revalidatePath('/admin/template-leads');
        return { success: true, data: lead };
    } catch (error: any) {
        console.error("Error saving template download lead:", error);
        return { success: false, error: error.message };
    }
}
