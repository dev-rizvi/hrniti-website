"use server";

import { createClient } from '@supabase/supabase-js';
import { prisma } from '@/lib/prisma';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tpfkfjlpafhlfaovrern.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_bNRrR39A0REONQBYJIWQJg_2SME02mj';

const supabase = createClient(supabaseUrl, supabaseKey);

function normalizeBlog(b: any) {
    if (!b) return null;
    return {
        ...b,
        created_at: b.created_at ? new Date(b.created_at) : new Date(),
        updated_at: b.updated_at ? new Date(b.updated_at) : (b.created_at ? new Date(b.created_at) : new Date()),
    };
}

export async function getPublishedBlogs() {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
            return { success: true, data: data.map(normalizeBlog) };
        }
        if (error) {
            console.warn("Supabase query error, falling back to Prisma:", error.message);
        }
    } catch (sbErr: any) {
        console.warn("Supabase connection error, falling back to Prisma:", sbErr.message);
    }

    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
            orderBy: { created_at: 'desc' }
        });
        return { success: true, data: blogs.map(normalizeBlog) };
    } catch (error: any) {
        console.error("Error fetching published blogs via Prisma fallback:", error);
        return { success: false, error: error.message };
    }
}

export async function getBlogBySlug(slug: string) {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .maybeSingle();

        if (!error && data) {
            return { success: true, data: normalizeBlog(data) };
        }
        if (error) {
            console.warn("Supabase query error, falling back to Prisma:", error.message);
        }
    } catch (sbErr: any) {
        console.warn("Supabase connection error, falling back to Prisma:", sbErr.message);
    }

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
        return { success: true, data: normalizeBlog(blog) };
    } catch (error: any) {
        console.error("Error fetching blog by slug via Prisma fallback:", error);
        return { success: false, error: error.message };
    }
}

export async function getRecentBlogs(limit = 5) {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false })
            .limit(limit);

        if (!error && data && data.length > 0) {
            return { success: true, data: data.map(normalizeBlog) };
        }
        if (error) {
            console.warn("Supabase query error, falling back to Prisma:", error.message);
        }
    } catch (sbErr: any) {
        console.warn("Supabase connection error, falling back to Prisma:", sbErr.message);
    }

    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
            orderBy: { created_at: 'desc' },
            take: limit
        });
        return { success: true, data: blogs.map(normalizeBlog) };
    } catch (error: any) {
        console.error("Error fetching recent blogs via Prisma fallback:", error);
        return { success: false, error: error.message };
    }
}

