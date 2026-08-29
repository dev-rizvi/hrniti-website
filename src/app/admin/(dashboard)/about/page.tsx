'use client';

import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  Info,
  BookOpen,
  FileText,
  Eye,
  Image as ImageIcon
} from 'lucide-react';
import { getAboutSettingsAction, updateAboutSettingsAction } from './actions';
import { uploadImageAction } from '../blogs/actions';

export default function AdminAboutSettingsPage() {
  const [settings, setSettings] = useState({
    hero_title: '',
    hero_subtitle: '',
    hero_description: '',
    hero_image_url: '',
    story_title: '',
    story_subtitle: '',
    story_description: '',
    story_image_url: '',
    vision_title: '',
    vision_subtitle: '',
    vision_description: '',
    vision_image_url: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingStory, setUploadingStory] = useState(false);
  const [uploadingVision, setUploadingVision] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Fetch settings from database on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getAboutSettingsAction();
        if (res.success && res.settings) {
          setSettings({
            hero_title: res.settings.hero_title || '',
            hero_subtitle: res.settings.hero_subtitle || '',
            hero_description: res.settings.hero_description || '',
            hero_image_url: res.settings.hero_image_url || '',
            story_title: res.settings.story_title || '',
            story_subtitle: res.settings.story_subtitle || '',
            story_description: res.settings.story_description || '',
            story_image_url: res.settings.story_image_url || '',
            vision_title: res.settings.vision_title || '',
            vision_subtitle: res.settings.vision_subtitle || '',
            vision_description: res.settings.vision_description || '',
            vision_image_url: res.settings.vision_image_url || '',
          });
        } else {
          setMessage({ type: 'error', text: res.error || 'Failed to load about page settings.' });
        }
      } catch (err: any) {
        console.error('Error fetching about settings:', err);
        setMessage({ type: 'error', text: err.message || 'Failed to load settings.' });
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleImageUpload = async (file: File, type: 'hero' | 'story' | 'vision') => {
    if (type === 'hero') setUploadingHero(true);
    if (type === 'story') setUploadingStory(true);
    if (type === 'vision') setUploadingVision(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await uploadImageAction(formData);
      if (res.success && res.url) {
        setSettings(prev => ({
          ...prev,
          [`${type}_image_url`]: res.url || ''
        }));
      } else {
        alert(res.error || 'Failed to upload image.');
      }
    } catch (err: any) {
      alert(err.message || 'An error occurred during file upload.');
    } finally {
      if (type === 'hero') setUploadingHero(false);
      if (type === 'story') setUploadingStory(false);
      if (type === 'vision') setUploadingVision(false);
    }
  };

  // Handle settings update
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const res = await updateAboutSettingsAction(settings);
      if (res.success) {
        setMessage({ type: 'success', text: 'About page settings updated successfully!' });
        setTimeout(() => setMessage(null), 4000);
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to update settings.' });
      }
    } catch (err: any) {
      console.error('Error saving about settings:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to save settings.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">About Us Settings</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Configure all headers, vision/mission statements, stories, and images shown on the public /about page.</p>
        </div>
        <a 
          href="/about" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <Eye className="h-4 w-4" />
          Preview Live About Page
        </a>
      </div>

      {/* Settings Form */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm w-full">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
            <span className="text-sm font-semibold">Loading settings database...</span>
          </div>
        ) : (
          <form onSubmit={handleSaveSettings} className="space-y-8">
            
            {message && (
              <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn ${
                message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
              }`}>
                {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
                <span>{message.text}</span>
              </div>
            )}

            {/* Section 1: Hero Block */}
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#006B3F]" />
                <h3 className="text-lg font-bold text-slate-800">1. Hero Section</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Hero Title
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.hero_title}
                    onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
                    placeholder="e.g. ABOUT US"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Hero Subtitle
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.hero_subtitle}
                    onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })}
                    placeholder="e.g. Building the Future of HR..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Hero Description
                </label>
                <textarea
                  required
                  rows={2}
                  value={settings.hero_description}
                  onChange={(e) => setSettings({ ...settings, hero_description: e.target.value })}
                  placeholder="e.g. We are on a mission to simplify..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all resize-none font-medium"
                />
              </div>

              {/* Hero Image Field */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <ImageIcon className="h-3.5 w-3.5 text-slate-400" /> Hero Section Image
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={settings.hero_image_url}
                      onChange={(e) => setSettings({ ...settings, hero_image_url: e.target.value })}
                      placeholder="Enter Hero image URL or upload..."
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                    />
                    <label className="shrink-0 inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer select-none">
                      {uploadingHero ? <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600 mr-1.5" /> : null}
                      Upload File
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploadingHero}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file, 'hero');
                        }}
                      />
                    </label>
                  </div>
                  {settings.hero_image_url && (
                    <div className="h-24 bg-slate-100 rounded-xl border border-slate-250 p-2 w-max self-start inline-flex items-center justify-center overflow-hidden">
                      <img src={settings.hero_image_url} alt="Hero Preview" className="h-full object-contain" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Why HR Niti / Story Block */}
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#006B3F]" />
                <h3 className="text-lg font-bold text-slate-800">2. Our Story Section</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Story Section Title
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.story_title}
                    onChange={(e) => setSettings({ ...settings, story_title: e.target.value })}
                    placeholder="e.g. Why HR Niti?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Story Section Subtitle
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.story_subtitle}
                    onChange={(e) => setSettings({ ...settings, story_subtitle: e.target.value })}
                    placeholder="e.g. OUR STORY"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Story Description Content
                </label>
                <textarea
                  required
                  rows={4}
                  value={settings.story_description}
                  onChange={(e) => setSettings({ ...settings, story_description: e.target.value })}
                  placeholder="Enter detailed description of the company story..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all resize-none font-medium"
                />
              </div>

              {/* Story Image Field */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <ImageIcon className="h-3.5 w-3.5 text-slate-400" /> Story Section Image
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={settings.story_image_url}
                      onChange={(e) => setSettings({ ...settings, story_image_url: e.target.value })}
                      placeholder="Enter Story image URL or upload..."
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                    />
                    <label className="shrink-0 inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer select-none">
                      {uploadingStory ? <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600 mr-1.5" /> : null}
                      Upload File
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploadingStory}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file, 'story');
                        }}
                      />
                    </label>
                  </div>
                  {settings.story_image_url && (
                    <div className="h-24 bg-slate-100 rounded-xl border border-slate-250 p-2 w-max self-start inline-flex items-center justify-center overflow-hidden">
                      <img src={settings.story_image_url} alt="Story Preview" className="h-full object-contain" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Vision & Mission / Philosophy Block */}
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-[#006B3F]" />
                <h3 className="text-lg font-bold text-slate-800">3. Vision &amp; Mission Section</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Vision Section Title
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.vision_title}
                    onChange={(e) => setSettings({ ...settings, vision_title: e.target.value })}
                    placeholder="e.g. Vision & Mission"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Vision Section Subtitle
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.vision_subtitle}
                    onChange={(e) => setSettings({ ...settings, vision_subtitle: e.target.value })}
                    placeholder="e.g. OUR PHILOSOPHY"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Vision Description Content
                </label>
                <textarea
                  required
                  rows={4}
                  value={settings.vision_description}
                  onChange={(e) => setSettings({ ...settings, vision_description: e.target.value })}
                  placeholder="Enter detailed description of company vision/mission..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all resize-none font-medium"
                />
              </div>

              {/* Vision Image Field */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <ImageIcon className="h-3.5 w-3.5 text-slate-400" /> Vision Section Image
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={settings.vision_image_url}
                      onChange={(e) => setSettings({ ...settings, vision_image_url: e.target.value })}
                      placeholder="Enter Vision image URL or upload..."
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                    />
                    <label className="shrink-0 inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer select-none">
                      {uploadingVision ? <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600 mr-1.5" /> : null}
                      Upload File
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploadingVision}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file, 'vision');
                        }}
                      />
                    </label>
                  </div>
                  {settings.vision_image_url && (
                    <div className="h-24 bg-slate-100 rounded-xl border border-slate-250 p-2 w-max self-start inline-flex items-center justify-center overflow-hidden">
                      <img src={settings.vision_image_url} alt="Vision Preview" className="h-full object-contain" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4 border-t border-slate-50">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/15 cursor-pointer disabled:opacity-55"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Saving Changes...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" /> Save About Settings
                  </>
                )}
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
