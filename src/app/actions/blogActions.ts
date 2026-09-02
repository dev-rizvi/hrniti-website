"use server";

import { prisma } from '@/lib/prisma';

export async function getPublishedBlogs() {
    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
            orderBy: { created_at: 'desc' }
        });
        return { success: true, data: blogs };
    } catch (error: any) {
        console.error("Error fetching published blogs:", error);
        return { success: false, error: error.message };
    }
}

export async function getBlogBySlug(slug: string) {
    try {
        const blog = await prisma.blog.findFirst({
            where: { 
                slug,
                published: true 
            }
        });
        if (!blog) {
            return { success: false, error: "Blog not found" };
        }
        return { success: true, data: blog };
    } catch (error: any) {
        console.error("Error fetching blog by slug:", error);
        return { success: false, error: error.message };
    }
}

export async function getRecentBlogs(limit = 5) {
    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
            orderBy: { created_at: 'desc' },
            take: limit
        });
        return { success: true, data: blogs };
    } catch (error: any) {
        console.error("Error fetching recent blogs:", error);
        return { success: false, error: error.message };
    }
}
