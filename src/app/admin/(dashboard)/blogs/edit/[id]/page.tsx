'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  ArrowLeft,
  Save, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  User,
  Image as ImageIcon,
  Globe,
  Tag
} from 'lucide-react';
import { createClient } from '@/lib/supabase';
import { updateBlogAction, uploadImageAction } from '../../actions';
import RichTextEditor from '@/components/blog/RichTextEditor';

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    content: '',
    author: 'HR Niti Team',
    category: 'General',
    featured_image: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    published: false,
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Fetch blog data by ID on mount
  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (!blogId) return;
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', blogId)
          .single();

        if (error) throw error;
        if (data) {
          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            summary: data.summary || '',
            content: data.content || '',
            author: data.author || 'HR Niti Team',
            category: data.category || 'General',
            featured_image: data.featured_image || '',
            meta_title: data.meta_title || '',
            meta_description: data.meta_description || '',
            meta_keywords: data.meta_keywords || '',
            published: data.published || false,
          });
        }
      } catch (err: any) {
        console.error('Error fetching blog details:', err);
        setMessage({ type: 'error', text: err.message || 'Failed to load blog post details.' });
      } finally {
        setLoading(false);
      }
    };
    fetchBlogDetails();
  }, [blogId]);

  // Helper to generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // collapse duplicate hyphens
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug === generateSlug(prev.title) || !prev.slug ? generateSlug(title) : prev.slug
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append('file', file);

      const result = await uploadImageAction(formDataObj);
      if (!result.success || !result.url) {
        throw new Error(result.error || 'Failed to get image URL');
      }

      setFormData(prev => ({ ...prev, featured_image: result.url }));
      setMessage({ type: 'success', text: 'Image uploaded successfully!' });
    } catch (err: any) {
      console.error('Upload error:', err);
      setMessage({ type: 'error', text: err.message || 'Image upload failed.' });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    if (!formData.slug.trim()) {
      setMessage({ type: 'error', text: 'Slug is required.' });
      setSaving(false);
      return;
    }

    try {
      const result = await updateBlogAction(blogId, {
        title: formData.title,
        slug: formData.slug.trim(),
        summary: formData.summary,
        content: formData.content,
        author: formData.author,
        category: formData.category,
        featured_image: formData.featured_image || null,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
        meta_keywords: formData.meta_keywords || null,
        published: formData.published,
      });

      if (!result.success) {
        throw new Error(result.error);
      }
      
      setMessage({ type: 'success', text: 'Blog post updated successfully! Redirecting...' });
      
      setTimeout(() => {
        router.push('/admin/blogs');
        router.refresh();
      }, 1500);
    } catch (err: any) {
      console.error('Error updating blog:', err);
      setMessage({ type: 'error', text: err.message || 'Error occurred while saving blog.' });
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12 w-full">
      
      {/* Header with back navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/admin/blogs')}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl transition-all cursor-pointer text-slate-500 hover:text-slate-800"
          title="Go Back"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Edit Blog Post</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Update blog content and SEO metadata configurations.</p>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
        }`}>
          {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
          <span>{message.text}</span>
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-2 py-12 text-slate-400">
          <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
          <span className="text-sm font-semibold">Loading blog details from database...</span>
        </div>
      ) : (
        /* Editor Panel Card */
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8 animate-fadeIn">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Content details */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-slate-400" /> Content Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Blog Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. 5 exceptional features of LMS"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">SEO Slug</label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                    placeholder="e.g. features-of-hrms"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-mono"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="h-4 w-4 text-slate-400" /> Author Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="e.g. HR Niti Team"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-slate-400" /> Category
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g. Technology"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4 text-slate-400" /> Featured Image (Upload or URL)
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.featured_image}
                      onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                      placeholder="Enter image URL or choose a file..."
                      className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                    <label className="shrink-0 inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer select-none">
                      {uploading ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600 mr-1.5" /> Uploading...
                        </>
                      ) : (
                        <>Upload File</>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={uploading}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {formData.featured_image && (
                    <div className="w-24 h-16 rounded-lg overflow-hidden border border-slate-200 shrink-0 relative bg-slate-50 self-start">
                      <img
                        src={formData.featured_image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Short Summary / Excerpt (displayed in grid listings)</label>
                <textarea
                  required
                  rows={2}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Provide a brief summary of the blog post to attract readers..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all resize-none font-medium"
                />
              </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Blog Content (Visual Rich Editor)</label>
              <RichTextEditor
                value={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
              />
            </div>
            </div>

            {/* Section 2: SEO metadata */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-slate-400" /> SEO Metadata (Search Engine Optimization)
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Meta Title</label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                    placeholder="e.g. Exceptional LMS features for corporate training"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-slate-400" /> Meta Keywords
                  </label>
                  <input
                    type="text"
                    value={formData.meta_keywords}
                    onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                    placeholder="e.g. LMS, Learning Management System, HR Niti"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Meta Description</label>
                <textarea
                  rows={2}
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  placeholder="Provide a search snippet meta description. Keep it under 160 characters..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all resize-none font-medium"
                />
              </div>

              <div className="flex items-center gap-2.5 pt-2 select-none">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4.5 h-4.5 rounded text-emerald-600 border-slate-200 outline-none focus:ring-emerald-600 cursor-pointer"
                />
                <label htmlFor="published" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Publish immediately (publicly visible on website blog page)
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => router.push('/admin/blogs')}
                className="px-5 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/10 cursor-pointer disabled:opacity-55"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4.5 w-4.5" /> Save Changes
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
