'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft,
  Save, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  Play,
  Video as VideoIcon
} from 'lucide-react';
import { createVideoAction } from '../actions';

export default function CreateVideoPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    youtubeId: '',
    title: '',
    description: '',
    category: 'demo',
    duration: '',
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    if (!formData.youtubeId.trim()) {
      setMessage({ type: 'error', text: 'YouTube Video ID is required.' });
      setSaving(false);
      return;
    }

    try {
      const result = await createVideoAction({
        youtubeId: formData.youtubeId.trim(),
        title: formData.title,
        description: formData.description,
        category: formData.category,
        duration: formData.duration || '0:00',
      });

      if (!result.success) {
        throw new Error(result.error);
      }
      
      setMessage({ type: 'success', text: 'Video created successfully! Redirecting...' });
      
      setTimeout(() => {
        router.push('/admin/videos');
        router.refresh();
      }, 1500);
    } catch (err: any) {
      console.error('Error creating video:', err);
      setMessage({ type: 'error', text: err.message || 'Error occurred while saving video.' });
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12 w-full">
      
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/admin/videos')}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl transition-all cursor-pointer text-slate-500 hover:text-slate-800"
          title="Go Back"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Add New Video</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Link and configure a new YouTube video resource.</p>
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

      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-1.5">
              <VideoIcon className="h-4 w-4 text-slate-400" /> Video Details
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Video Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. HR Niti – Complete Product Walkthrough & Demo"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Duration (MM:SS)</label>
                <input
                  type="text"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g. 4:32"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-mono"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">YouTube Video ID (or Full URL)</label>
                <input
                  type="text"
                  required
                  value={formData.youtubeId}
                  onChange={(e) => {
                    let val = e.target.value.trim();
                    // Extract video ID from URL if full URL is pasted
                    if (val.includes('youtube.com/watch?v=')) {
                      val = val.split('v=')[1]?.split('&')[0] || val;
                    } else if (val.includes('youtu.be/')) {
                      val = val.split('youtu.be/')[1]?.split('?')[0] || val;
                    } else if (val.includes('youtube.com/embed/')) {
                      val = val.split('embed/')[1]?.split('?')[0] || val;
                    }
                    setFormData({ ...formData, youtubeId: val });
                  }}
                  placeholder="e.g. 0kF4_TfXg3A"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-mono"
                />
                <p className="text-[10px] text-slate-400 mt-1">Accepts direct ID or complete YouTube links.</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium bg-white"
                >
                  <option value="demo">Product Demo</option>
                  <option value="success">Customer Story</option>
                  <option value="ai">AI Innovations</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description / Details</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Write a brief overview of the video's contents..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium animate-fadeIn"
              />
            </div>
            
            {formData.youtubeId && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Thumbnail Preview</label>
                <div className="relative w-64 aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
                  <img
                    src={`https://img.youtube.com/vi/${formData.youtubeId}/hqdefault.jpg`}
                    alt="YouTube Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={() => router.push('/admin/videos')}
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
                  <Save className="h-4.5 w-4.5" /> Save Video
                </>
              )}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
