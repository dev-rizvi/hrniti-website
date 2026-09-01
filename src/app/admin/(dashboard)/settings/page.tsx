'use client';

import React, { useState, useEffect } from 'react';
import { 
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Save,
  Loader2,
  CheckCircle,
  AlertTriangle,
  Image as ImageIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ShieldAlert,
  FileText,
  Settings
} from 'lucide-react';
import { createClient } from '@/lib/supabase';
import { uploadImageAction } from '../blogs/actions';
import RichTextEditor from '@/components/blog/RichTextEditor';
import { getLegalSettingsAction, updateLegalSettingsAction } from './actions';

export default function SettingsDashboard() {
  const [activeTab, setActiveTab] = useState<'contact' | 'privacy' | 'terms'>('contact');
  
  // Contact settings state
  const [settings, setSettings] = useState({
    phone: '',
    whatsapp: '',
    email: '',
    location_address: '',
    logo_url: '',
    facebook_url: '',
    twitter_url: '',
    linkedin_url: '',
    instagram_url: '',
    copyright_text: '',
  });
  
  // Legal settings state
  const [privacyTitle, setPrivacyTitle] = useState('Privacy Policy');
  const [privacyContent, setPrivacyContent] = useState('');
  const [termsTitle, setTermsTitle] = useState('Terms of Service');
  const [termsContent, setTermsContent] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Fetch settings from database on mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const supabase = createClient();
        
        // 1. Fetch Contact Settings
        const { data: contactData } = await supabase
          .from('contact_settings')
          .select('*')
          .eq('id', 1)
          .single();

        if (contactData) {
          setSettings({
            phone: contactData.phone || '',
            whatsapp: contactData.whatsapp || '',
            email: contactData.email || '',
            location_address: contactData.location_address || '',
            logo_url: contactData.logo_url || '',
            facebook_url: contactData.facebook_url || '',
            twitter_url: contactData.twitter_url || '',
            linkedin_url: contactData.linkedin_url || '',
            instagram_url: contactData.instagram_url || '',
            copyright_text: contactData.copyright_text || '',
          });
        }

        // 2. Fetch Legal Settings
        const legalRes = await getLegalSettingsAction();
        if (legalRes.success && legalRes.legal) {
          setPrivacyTitle(legalRes.legal.privacy_title || 'Privacy Policy');
          setPrivacyContent(legalRes.legal.privacy_content || '');
          setTermsTitle(legalRes.legal.terms_title || 'Terms of Service');
          setTermsContent(legalRes.legal.terms_content || '');
        }
      } catch (err) {
        console.error('Error fetching settings data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAllData();
  }, []);

  // Handle contact settings update
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('contact_settings')
        .update({
          phone: settings.phone,
          whatsapp: settings.whatsapp,
          email: settings.email,
          location_address: settings.location_address,
          logo_url: settings.logo_url,
          facebook_url: settings.facebook_url,
          twitter_url: settings.twitter_url,
          linkedin_url: settings.linkedin_url,
          instagram_url: settings.instagram_url,
          copyright_text: settings.copyright_text,
          updated_at: new Date().toISOString(),
        })
        .eq('id', 1);

      if (error) throw error;
      setMessage({ type: 'success', text: 'Contact settings updated successfully!' });
      setTimeout(() => setMessage(null), 4000);
    } catch (err: any) {
      console.error('Error saving settings:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to save settings.' });
    } finally {
      setSaving(false);
    }
  };

  // Handle legal settings updates
  const handleSaveLegal = async (type: 'privacy' | 'terms') => {
    setSaving(true);
    setMessage(null);
    try {
      const title = type === 'privacy' ? privacyTitle : termsTitle;
      const content = type === 'privacy' ? privacyContent : termsContent;
      
      const res = await updateLegalSettingsAction(type, title, content);
      if (res.success) {
        setMessage({ type: 'success', text: `${type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'} updated successfully!` });
        setTimeout(() => setMessage(null), 4000);
      } else {
        throw new Error(res.error || 'Failed to save changes.');
      }
    } catch (err: any) {
      console.error(`Error saving ${type} settings:`, err);
      setMessage({ type: 'error', text: err.message || `Failed to save ${type} settings.` });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Global Site Settings</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Configure contact details, maps, social networks, privacy rules, and terms.</p>
        </div>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex border-b border-slate-200/60 bg-white rounded-t-3xl px-8 pt-4 shadow-sm">
        <button
          onClick={() => { setActiveTab('contact'); setMessage(null); }}
          className={`flex items-center gap-2 px-5 py-4 font-extrabold text-xs uppercase tracking-wider border-b-2.5 transition-all outline-none cursor-pointer ${
            activeTab === 'contact'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <Settings className="h-4 w-4" /> Contact &amp; General
        </button>
        <button
          onClick={() => { setActiveTab('privacy'); setMessage(null); }}
          className={`flex items-center gap-2 px-5 py-4 font-extrabold text-xs uppercase tracking-wider border-b-2.5 transition-all outline-none cursor-pointer ${
            activeTab === 'privacy'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <ShieldAlert className="h-4 w-4" /> Privacy Policy
        </button>
        <button
          onClick={() => { setActiveTab('terms'); setMessage(null); }}
          className={`flex items-center gap-2 px-5 py-4 font-extrabold text-xs uppercase tracking-wider border-b-2.5 transition-all outline-none cursor-pointer ${
            activeTab === 'terms'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <FileText className="h-4 w-4" /> Terms of Service
        </button>
      </div>

      {/* Main Settings Card */}
      <div className="bg-white border border-t-0 border-slate-100 rounded-b-3xl p-8 shadow-sm w-full">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
            <span className="text-sm font-semibold">Loading settings database...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {message && (
              <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn ${
                message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
              }`}>
                {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
                <span>{message.text}</span>
              </div>
            )}

            {/* TAB 1: CONTACT SETTINGS */}
            {activeTab === 'contact' && (
              <form onSubmit={handleSaveSettings} className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3 mb-6">
                  <h3 className="text-md font-bold text-slate-800">Website Identity &amp; Contact</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Basic properties shown in the header, footer, and contact inquiries pages.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Phone className="h-3.5 w-3.5 text-slate-400" /> Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      value={settings.phone}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      placeholder="e.g. +91 8601489763"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <MessageCircle className="h-3.5 w-3.5 text-slate-400" /> WhatsApp Number
                    </label>
                    <input
                      type="text"
                      required
                      value={settings.whatsapp}
                      onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                      placeholder="e.g. +91 8601489763"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Mail className="h-3.5 w-3.5 text-slate-400" /> Contact Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      placeholder="e.g. support@hrniti.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <ImageIcon className="h-3.5 w-3.5 text-slate-400" /> Website Logo
                    </label>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={settings.logo_url}
                          onChange={(e) => setSettings({ ...settings, logo_url: e.target.value })}
                          placeholder="Enter logo URL or upload..."
                          className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                        />
                        <label className="shrink-0 inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer select-none">
                          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600 mr-1.5" /> : null}
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            disabled={uploading}
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              setUploading(true);
                              try {
                                const formDataObj = new FormData();
                                formDataObj.append('file', file);
                                const result = await uploadImageAction(formDataObj);
                                if (result.success && result.url) {
                                  setSettings(s => ({ ...s, logo_url: result.url }));
                                }
                              } catch (err) {
                                console.error(err);
                              } finally {
                                setUploading(false);
                              }
                            }}
                          />
                        </label>
                      </div>
                      {settings.logo_url && (
                        <div className="h-10 bg-slate-50 rounded border border-slate-200/60 p-2.5 w-max flex items-center justify-center">
                          <img src={settings.logo_url} alt="Logo Preview" className="h-full object-contain" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" /> Head Office Address Location
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={settings.location_address}
                    onChange={(e) => setSettings({ ...settings, location_address: e.target.value })}
                    placeholder="e.g. 301, B Wing, Everest Nivara Infotech Park..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all resize-none font-medium"
                  />
                </div>

                <div className="border-b border-slate-100 pb-3 mb-6 mt-10">
                  <h3 className="text-md font-bold text-slate-800">Social Networks</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Configure URLs mapped to the social icon anchors in the footer.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Facebook className="h-3.5 w-3.5 text-slate-400" /> Facebook URL
                    </label>
                    <input
                      type="text"
                      value={settings.facebook_url}
                      onChange={(e) => setSettings({ ...settings, facebook_url: e.target.value })}
                      placeholder="https://facebook.com/hrniti"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Twitter className="h-3.5 w-3.5 text-slate-400" /> Twitter URL
                    </label>
                    <input
                      type="text"
                      value={settings.twitter_url}
                      onChange={(e) => setSettings({ ...settings, twitter_url: e.target.value })}
                      placeholder="https://twitter.com/hrniti"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Linkedin className="h-3.5 w-3.5 text-slate-400" /> LinkedIn URL
                    </label>
                    <input
                      type="text"
                      value={settings.linkedin_url}
                      onChange={(e) => setSettings({ ...settings, linkedin_url: e.target.value })}
                      placeholder="https://linkedin.com/company/hrniti"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Instagram className="h-3.5 w-3.5 text-slate-400" /> Instagram URL
                    </label>
                    <input
                      type="text"
                      value={settings.instagram_url}
                      onChange={(e) => setSettings({ ...settings, instagram_url: e.target.value })}
                      placeholder="https://instagram.com/hrniti"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-3 mb-6 mt-10">
                  <h3 className="text-md font-bold text-slate-800">Footer Fineprint</h3>
                  <p className="text-xs text-slate-400 mt-0.5">General copyright tags.</p>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Copyright Text
                  </label>
                  <input
                    type="text"
                    value={settings.copyright_text}
                    onChange={(e) => setSettings({ ...settings, copyright_text: e.target.value })}
                    placeholder="© 2026 HR Niti. All rights reserved."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-medium"
                  />
                </div>

                <div className="flex justify-end pt-2">
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
                        <Save className="h-4 w-4" /> Save Contact Settings
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: PRIVACY POLICY EDITOR */}
            {activeTab === 'privacy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3 mb-6">
                  <h3 className="text-md font-bold text-slate-800">Privacy Policy Document</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Edit page contents that load dynamically at `/privacy-policy`.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Page Headline / Title
                    </label>
                    <input
                      type="text"
                      required
                      value={privacyTitle}
                      onChange={(e) => setPrivacyTitle(e.target.value)}
                      placeholder="Privacy Policy"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Document Content (HTML formatted)
                    </label>
                    <RichTextEditor 
                      value={privacyContent} 
                      onChange={(val) => setPrivacyContent(val)} 
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => handleSaveLegal('privacy')}
                      disabled={saving}
                      className="flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/15 cursor-pointer disabled:opacity-55"
                    >
                      {saving ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Saving Policy...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4" /> Save Privacy Policy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TERMS OF SERVICE EDITOR */}
            {activeTab === 'terms' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-3 mb-6">
                  <h3 className="text-md font-bold text-slate-800">Terms of Service Document</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Edit page contents that load dynamically at `/terms-of-service`.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Page Headline / Title
                    </label>
                    <input
                      type="text"
                      required
                      value={termsTitle}
                      onChange={(e) => setTermsTitle(e.target.value)}
                      placeholder="Terms of Service"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-850 outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Document Content (HTML formatted)
                    </label>
                    <RichTextEditor 
                      value={termsContent} 
                      onChange={(val) => setTermsContent(val)} 
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => handleSaveLegal('terms')}
                      disabled={saving}
                      className="flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/15 cursor-pointer disabled:opacity-55"
                    >
                      {saving ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Saving Terms...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4" /> Save Terms of Service
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
