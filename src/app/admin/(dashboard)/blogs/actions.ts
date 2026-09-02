'use server';

import { createClient } from '@supabase/supabase-js';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tpfkfjlpafhlfaovrern.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_bNRrR39A0REONQBYJIWQJg_2SME02mj';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function createBlogAction(data: {
  title: string;
  slug: string;
  content: string;
  summary: string;
  author: string;
  category: string;
  featured_image?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  published: boolean;
}) {
  try {
    const { data: blog, error: sbError } = await supabase
      .from('blogs')
      .insert({
        title: data.title,
        slug: data.slug,
        content: data.content,
        summary: data.summary,
        author: data.author,
        category: data.category,
        featured_image: data.featured_image || null,
        meta_title: data.meta_title || null,
        meta_description: data.meta_description || null,
        meta_keywords: data.meta_keywords || null,
        published: data.published,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (!sbError && blog) {
      revalidatePath('/blog');
      revalidatePath('/admin/blogs');
      return { success: true, blog };
    }
    if (sbError) {
      console.warn('Supabase insert failed, falling back to Prisma:', sbError.message);
    }
  } catch (sbErr: any) {
    console.warn('Supabase insert error, falling back to Prisma:', sbErr.message);
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        summary: data.summary,
        author: data.author,
        category: data.category,
        featured_image: data.featured_image || null,
        meta_title: data.meta_title || null,
        meta_description: data.meta_description || null,
        meta_keywords: data.meta_keywords || null,
        published: data.published,
      },
    });
    revalidatePath('/blog');
    revalidatePath('/admin/blogs');
    return { success: true, blog };
  } catch (error: any) {
    console.error('Server Action Error creating blog via Prisma fallback:', error);
    return { success: false, error: error.message || 'Failed to create blog post.' };
  }
}

export async function updateBlogAction(id: string, data: {
  title: string;
  slug: string;
  content: string;
  summary: string;
  author: string;
  category: string;
  featured_image?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  published: boolean;
}) {
  try {
    const { data: blog, error: sbError } = await supabase
      .from('blogs')
      .update({
        title: data.title,
        slug: data.slug,
        content: data.content,
        summary: data.summary,
        author: data.author,
        category: data.category,
        featured_image: data.featured_image || null,
        meta_title: data.meta_title || null,
        meta_description: data.meta_description || null,
        meta_keywords: data.meta_keywords || null,
        published: data.published,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (!sbError && blog) {
      revalidatePath('/blog');
      revalidatePath(`/blog/${data.slug}`);
      revalidatePath('/admin/blogs');
      return { success: true, blog };
    }
    if (sbError) {
      console.warn('Supabase update failed, falling back to Prisma:', sbError.message);
    }
  } catch (sbErr: any) {
    console.warn('Supabase update error, falling back to Prisma:', sbErr.message);
  }

  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        summary: data.summary,
        author: data.author,
        category: data.category,
        featured_image: data.featured_image || null,
        meta_title: data.meta_title || null,
        meta_description: data.meta_description || null,
        meta_keywords: data.meta_keywords || null,
        published: data.published,
      },
    });
    revalidatePath('/blog');
    revalidatePath(`/blog/${data.slug}`);
    revalidatePath('/admin/blogs');
    return { success: true, blog };
  } catch (error: any) {
    console.error('Server Action Error updating blog via Prisma fallback:', error);
    return { success: false, error: error.message || 'Failed to update blog post.' };
  }
}

export async function deleteBlogAction(id: string) {
  try {
    const { error: sbError } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (!sbError) {
      revalidatePath('/blog');
      revalidatePath('/admin/blogs');
      return { success: true };
    }
    if (sbError) {
      console.warn('Supabase delete failed, falling back to Prisma:', sbError.message);
    }
  } catch (sbErr: any) {
    console.warn('Supabase delete error, falling back to Prisma:', sbErr.message);
  }

  try {
    const blog = await prisma.blog.delete({
      where: { id },
    });
    revalidatePath('/blog');
    revalidatePath('/admin/blogs');
    return { success: true, blog };
  } catch (error: any) {
    console.error('Server Action Error deleting blog via Prisma fallback:', error);
    return { success: false, error: error.message || 'Failed to delete blog post.' };
  }
}

export async function uploadImageAction(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    if (!file) {
      return { success: false, error: 'No file uploaded.' };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure uploads directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const uniqueFilename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = join(uploadDir, uniqueFilename);

    await writeFile(filePath, buffer);
    const url = `/uploads/${uniqueFilename}`;

    return { success: true, url };
  } catch (error: any) {
    console.error('Error in uploadImageAction:', error);
    return { success: false, error: error.message || 'Failed to upload image.' };
  }
}
