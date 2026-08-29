"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getProductUpdates() {
    try {
        const updates = await prisma.productUpdate.findMany({
            orderBy: { created_at: 'desc' }
        });
        return { success: true, data: updates };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getProductUpdateBySlug(slug: string) {
    try {
        const update = await prisma.productUpdate.findUnique({
            where: { slug }
        });
        return { success: true, data: update };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function createProductUpdate(data: any) {
    try {
        const newUpdate = await prisma.productUpdate.create({
            data
        });
        revalidatePath('/admin/product-updates');
        revalidatePath('/product-updates');
        return { success: true, data: newUpdate };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function updateProductUpdate(id: string, data: any) {
    try {
        const updated = await prisma.productUpdate.update({
            where: { id },
            data
        });
        revalidatePath('/admin/product-updates');
        revalidatePath('/product-updates');
        revalidatePath(`/product-updates/${updated.slug}`);
        return { success: true, data: updated };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function deleteProductUpdate(id: string) {
    try {
        const deleted = await prisma.productUpdate.delete({
            where: { id }
        });
        revalidatePath('/admin/product-updates');
        revalidatePath('/product-updates');
        return { success: true, data: deleted };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
