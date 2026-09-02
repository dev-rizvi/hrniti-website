'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash, 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  ExternalLink
} from 'lucide-react';
import { createClient } from '@/lib/supabase';
import { deleteBlogAction } from './actions';

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string;
  author: string;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  published: boolean;
  created_at: string;
}

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const ITEMS_PER_PAGE = 10;

  // Fetch blogs from Supabase
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err: any) {
      console.error('Error fetching blogs:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to load blogs.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle Delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    
    try {
      const result = await deleteBlogAction(id);
      if (!result.success) {
        throw new Error(result.error);
      }

      setMessage({ type: 'success', text: 'Blog post deleted successfully!' });
      fetchBlogs();
      setTimeout(() => setMessage(null), 4000);
    } catch (err: any) {
      console.error('Error deleting blog:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to delete blog post.' });
    }
  };

  // Reset page on search query change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filtered list
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* Header and Add Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Blogs</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Create and publish SEO-friendly articles for the marketing blog.</p>
        </div>
        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md shadow-emerald-700/10 transition-all cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Blog Post
        </Link>
      </div>

      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold w-full animate-fadeIn ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
        }`}>
          {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Toolbar & Search */}
      <div className="flex items-center bg-white border border-slate-100 rounded-2xl px-4 py-3 max-w-md shadow-sm">
        <Search className="h-4.5 w-4.5 text-slate-400 mr-3 shrink-0" />
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-xs text-slate-800 bg-transparent outline-none placeholder-slate-400 font-medium"
        />
      </div>

      {/* Blogs List */}
      {loading ? (
        <div className="flex items-center gap-2 py-12 text-slate-400">
          <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
          <span className="text-sm font-semibold">Loading blogs database...</span>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center w-full shadow-sm space-y-3">
          <FileText className="h-12 w-12 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800">No blog posts found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">Create a new blog post to share announcements, articles, and industry insights with your visitors.</p>
        </div>
      ) : (
        <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">SEO Slug</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Created At</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/60 text-xs font-semibold text-slate-700">
              {paginatedBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="px-6 py-4 max-w-xs">
                    <p className="text-slate-800 font-bold truncate" title={blog.title}>{blog.title}</p>
                    <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5" title={blog.summary}>{blog.summary}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{blog.author}</td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-[10px] truncate max-w-[150px]" title={blog.slug}>{blog.slug}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {blog.published ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                        <Eye className="h-3 w-3 text-emerald-600" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                        <EyeOff className="h-3 w-3 text-slate-400" /> Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate-400 whitespace-nowrap">
                    {new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      {blog.published && (
                        <a
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 inline-flex items-center justify-center hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors cursor-pointer"
                          title="View on Website"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="p-1.5 inline-flex items-center justify-center hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-lg transition-colors cursor-pointer"
                        title="Edit Post"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-1.5 inline-flex items-center justify-center hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                        title="Delete Post"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-slate-100 bg-slate-50/20">
              <p className="text-xs text-slate-500 font-medium">
                Showing <span className="font-bold text-slate-800">{Math.min(filteredBlogs.length, (currentPage - 1) * ITEMS_PER_PAGE + 1)}</span> to{' '}
                <span className="font-bold text-slate-800">{Math.min(filteredBlogs.length, currentPage * ITEMS_PER_PAGE)}</span> of{' '}
                <span className="font-bold text-slate-800">{filteredBlogs.length}</span> blog posts
              </p>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all disabled:opacity-50 disabled:hover:bg-white cursor-pointer select-none"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1.5 px-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                        currentPage === page
                          ? 'bg-[#006B3F] text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all disabled:opacity-50 disabled:hover:bg-white cursor-pointer select-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
