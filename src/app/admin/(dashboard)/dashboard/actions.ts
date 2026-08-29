'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getInquiriesAction() {
  try {
    const inquiries = await prisma.contact_inquiries.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
    return { success: true, inquiries };
  } catch (error: any) {
    console.error('Error fetching inquiries:', error);
    return { success: false, error: error.message || 'Failed to fetch inquiries.' };
  }
}

export async function updateInquiryStatusAction(id: number, status: string) {
  try {
    const inquiry = await prisma.contact_inquiries.update({
      where: { id },
      data: { status },
    });
    revalidatePath('/admin/dashboard');
    return { success: true, inquiry };
  } catch (error: any) {
    console.error('Error updating inquiry status:', error);
    return { success: false, error: error.message || 'Failed to update inquiry status.' };
  }
}

export async function deleteInquiryAction(id: number) {
  try {
    const inquiry = await prisma.contact_inquiries.delete({
      where: { id },
    });
    revalidatePath('/admin/dashboard');
    return { success: true, inquiry };
  } catch (error: any) {
    console.error('Error deleting inquiry:', error);
    return { success: false, error: error.message || 'Failed to delete inquiry.' };
  }
}

export async function getDashboardStatsAction() {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const [
      blogsCount,
      inquiriesCount,
      newInquiriesCount,
      pricingPlansCount,
      recentBlogs,
      recentInquiries,
      inProgressCount,
      resolvedCount,
      publishedBlogsCount,
      draftBlogsCount,
      inquiriesLast7Days,
      blogCategoryCounts,
    ] = await Promise.all([
      prisma.blog.count(),
      prisma.contact_inquiries.count(),
      prisma.contact_inquiries.count({ where: { status: 'new' } }),
      prisma.pricing_plan.count(),
      prisma.blog.findMany({
        take: 5,
        orderBy: { created_at: 'desc' },
      }),
      prisma.contact_inquiries.findMany({
        take: 5,
        orderBy: { created_at: 'desc' },
      }),
      prisma.contact_inquiries.count({ where: { status: 'in_progress' } }),
      prisma.contact_inquiries.count({ where: { status: 'resolved' } }),
      prisma.blog.count({ where: { published: true } }),
      prisma.blog.count({ where: { published: false } }),
      prisma.contact_inquiries.findMany({
        where: {
          created_at: {
            gte: sevenDaysAgo,
          },
        },
        select: {
          created_at: true,
        },
      }),
      prisma.blog.groupBy({
        by: ['category'],
        _count: {
          id: true,
        },
      }),
    ]);

    // JavaScript-based grouping for 7 days (date-provider independent)
    const chartData = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      const label = d.toLocaleDateString(undefined, { weekday: 'short' });
      const count = inquiriesLast7Days.filter((inq) => {
        const inqDate = new Date(inq.created_at);
        return (
          inqDate.getFullYear() === d.getFullYear() &&
          inqDate.getMonth() === d.getMonth() &&
          inqDate.getDate() === d.getDate()
        );
      }).length;
      return { label, count };
    });

    return {
      success: true,
      stats: {
        blogsCount,
        inquiriesCount,
        newInquiriesCount,
        pricingPlansCount,
        recentBlogs,
        recentInquiries,
        statusCounts: {
          new: newInquiriesCount,
          in_progress: inProgressCount,
          resolved: resolvedCount,
        },
        blogPublishCounts: {
          published: publishedBlogsCount,
          draft: draftBlogsCount,
        },
        chartData,
        blogCategoryCounts: blogCategoryCounts.map((c) => ({
          category: c.category,
          count: c._count.id,
        })),
      },
    };
  } catch (error: any) {
    console.error('Error fetching dashboard stats:', error);
    return { success: false, error: error.message || 'Failed to fetch dashboard stats.' };
  }
}


