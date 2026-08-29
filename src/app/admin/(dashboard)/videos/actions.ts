'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createVideoAction(data: {
  youtubeId: string;
  title: string;
  description: string;
  category: string;
  duration: string;
}) {
  try {
    const video = await prisma.video.create({
      data: {
        youtubeId: data.youtubeId,
        title: data.title,
        description: data.description,
        category: data.category,
        duration: data.duration,
      },
    });
    revalidatePath('/resources/videos');
    revalidatePath('/admin/videos');
    return { success: true, video };
  } catch (error: any) {
    console.error('Server Action Error creating video:', error);
    return { success: false, error: error.message || 'Failed to create video.' };
  }
}

export async function updateVideoAction(id: string, data: {
  youtubeId: string;
  title: string;
  description: string;
  category: string;
  duration: string;
}) {
  try {
    const video = await prisma.video.update({
      where: { id },
      data: {
        youtubeId: data.youtubeId,
        title: data.title,
        description: data.description,
        category: data.category,
        duration: data.duration,
      },
    });
    revalidatePath('/resources/videos');
    revalidatePath('/admin/videos');
    return { success: true, video };
  } catch (error: any) {
    console.error('Server Action Error updating video:', error);
    return { success: false, error: error.message || 'Failed to update video.' };
  }
}

export async function deleteVideoAction(id: string) {
  try {
    const video = await prisma.video.delete({
      where: { id },
    });
    revalidatePath('/resources/videos');
    revalidatePath('/admin/videos');
    return { success: true, video };
  } catch (error: any) {
    console.error('Server Action Error deleting video:', error);
    return { success: false, error: error.message || 'Failed to delete video.' };
  }
}
