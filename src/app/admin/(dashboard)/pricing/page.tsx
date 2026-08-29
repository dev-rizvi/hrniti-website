'use client';

import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Loader2, 
  CheckCircle, 
  AlertTriangle,
  Layers,
  HelpCircle,
  TableProperties,
  Settings,
  Plus,
  Trash2,
  Edit2,
  X,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { 
  getPricingSettingsAction, 
  updatePricingSettingsAction,
  getPricingPlansAction,
  updatePricingPlanAction,
  getComparisonFeaturesAction,
  createComparisonFeatureAction,
  updateComparisonFeatureAction,
  deleteComparisonFeatureAction,
  getPricingFAQsAction,
  createPricingFAQAction,
  updatePricingFAQAction,
  deletePricingFAQAction
} from './actions';

export default function AdminPricingPage() {
  const [activeTab, setActiveTab] = useState<'hero' | 'plans' | 'comparison' | 'faqs'>('hero');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Hero Settings State
  const [heroSettings, setHeroSettings] = useState({
    hero_title: '',
    hero_subtitle: '',
    hero_description: '',
  });

  // Plans State
  const [plans, setPlans] = useState<any[]>([]);
  const [editingPlan, setEditingPlan] = useState<any | null>(null);

  // Comparison State
  const [comparisonFeatures, setComparisonFeatures] = useState<any[]>([]);
  const [editingFeature, setEditingFeature] = useState<any | null>(null);
  const [isAddingFeature, setIsAddingFeature] = useState(false);
  const [newFeature, setNewFeature] = useState({
    category: 'Core HR',
    name: '',
    std_value: '',
    pro_value: '',
    ent_value: '',
    display_order: 10,
  });

  // FAQs State
  const [faqs, setFaqs] = useState<any[]>([]);
  const [editingFaq, setEditingFaq] = useState<any | null>(null);
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [newFaq, setNewFaq] = useState({
    question: '',
    answer: '',
    display_order: 10,
  });

  // Fetch all data on mount
  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [settingsRes, plansRes, compRes, faqsRes] = await Promise.all([
          getPricingSettingsAction(),
          getPricingPlansAction(),
          getComparisonFeaturesAction(),
          getPricingFAQsAction(),
        ]);

        if (settingsRes.success && settingsRes.settings) {
          setHeroSettings({
            hero_title: settingsRes.settings.hero_title || '',
            hero_subtitle: settingsRes.settings.hero_subtitle || '',
            hero_description: settingsRes.settings.hero_description || '',
          });
        }
        if (plansRes.success && plansRes.plans) {
          setPlans(plansRes.plans);
        }
        if (compRes.success && compRes.features) {
          setComparisonFeatures(compRes.features);
        }
        if (faqsRes.success && faqsRes.faqs) {
          setFaqs(faqsRes.faqs);
        }
      } catch (err: any) {
        console.error('Error fetching data:', err);
        setMessage({ type: 'error', text: 'An error occurred loading dashboard data.' });
      } finally {
        setLoading(false);
      }
    };
    loadAllData();
  }, []);

  const triggerNotification = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  // --- Hero Save Handler ---
  const handleSaveHero = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await updatePricingSettingsAction(heroSettings);
      if (res.success) {
        triggerNotification('success', 'Hero settings updated successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to update Hero settings.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error saving settings.');
    } finally {
      setSaving(false);
    }
  };

  // --- Plan Save Handler ---
  const handleSavePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;
    setSaving(true);
    try {
      const res = await updatePricingPlanAction(editingPlan.id, {
        name: editingPlan.name,
        price: editingPlan.price,
        period: editingPlan.period,
        desc: editingPlan.desc,
        features: editingPlan.features,
        cta: editingPlan.cta,
        popular: editingPlan.popular,
        color: editingPlan.color,
        display_order: editingPlan.display_order,
      });

      if (res.success) {
        setPlans(plans.map(p => p.id === editingPlan.id ? res.plan : p));
        setEditingPlan(null);
        triggerNotification('success', 'Plan details saved successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to save plan.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error saving plan.');
    } finally {
      setSaving(false);
    }
  };

  // --- Comparison handlers ---
  const handleCreateFeature = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await createComparisonFeatureAction(newFeature);
      if (res.success && res.feature) {
        setComparisonFeatures(prev => [...prev, res.feature].sort((a, b) => a.display_order - b.display_order));
        setNewFeature({
          category: 'Core HR',
          name: '',
          std_value: '',
          pro_value: '',
          ent_value: '',
          display_order: newFeature.display_order + 1,
        });
        setIsAddingFeature(false);
        triggerNotification('success', 'Comparison feature added successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to create feature.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error adding feature.');
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateFeature = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFeature) return;
    setSaving(true);
    try {
      const res = await updateComparisonFeatureAction(editingFeature.id, {
        category: editingFeature.category,
        name: editingFeature.name,
        std_value: editingFeature.std_value,
        pro_value: editingFeature.pro_value,
        ent_value: editingFeature.ent_value,
        display_order: Number(editingFeature.display_order),
      });
      if (res.success && res.feature) {
        setComparisonFeatures(prev => prev.map(f => f.id === editingFeature.id ? res.feature : f).sort((a, b) => a.display_order - b.display_order));
        setEditingFeature(null);
        triggerNotification('success', 'Feature updated successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to update feature.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error saving feature.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteFeature = async (id: string) => {
    if (!confirm('Are you sure you want to delete this comparison feature?')) return;
    try {
      const res = await deleteComparisonFeatureAction(id);
      if (res.success) {
        setComparisonFeatures(prev => prev.filter(f => f.id !== id));
        triggerNotification('success', 'Feature deleted successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to delete feature.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error deleting feature.');
    }
  };

  // --- FAQs handlers ---
  const handleCreateFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await createPricingFAQAction(newFaq);
      if (res.success && res.faq) {
        setFaqs(prev => [...prev, res.faq].sort((a, b) => a.display_order - b.display_order));
        setNewFaq({
          question: '',
          answer: '',
          display_order: newFaq.display_order + 1,
        });
        setIsAddingFaq(false);
        triggerNotification('success', 'FAQ question added successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to create FAQ.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error adding FAQ.');
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    setSaving(true);
    try {
      const res = await updatePricingFAQAction(editingFaq.id, {
        question: editingFaq.question,
        answer: editingFaq.answer,
        display_order: Number(editingFaq.display_order),
      });
      if (res.success && res.faq) {
        setFaqs(prev => prev.map(f => f.id === editingFaq.id ? res.faq : f).sort((a, b) => a.display_order - b.display_order));
        setEditingFaq(null);
        triggerNotification('success', 'FAQ updated successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to update FAQ.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error saving FAQ.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ question?')) return;
    try {
      const res = await deletePricingFAQAction(id);
      if (res.success) {
        setFaqs(prev => prev.filter(f => f.id !== id));
        triggerNotification('success', 'FAQ deleted successfully!');
      } else {
        triggerNotification('error', res.error || 'Failed to delete FAQ.');
      }
    } catch (err: any) {
      triggerNotification('error', err.message || 'Error deleting FAQ.');
    }
  };

  // Helper features updates
  const addPlanFeature = () => {
    if (!editingPlan) return;
    setEditingPlan({
      ...editingPlan,
      features: [...editingPlan.features, '']
    });
  };

  const removePlanFeature = (idx: number) => {
    if (!editingPlan) return;
    setEditingPlan({
      ...editingPlan,
      features: editingPlan.features.filter((_: any, i: number) => i !== idx)
    });
  };

  const updatePlanFeature = (idx: number, val: string) => {
    if (!editingPlan) return;
    const updated = [...editingPlan.features];
    updated[idx] = val;
    setEditingPlan({ ...editingPlan, features: updated });
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Pricing Configurations</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Configure all plans, feature details, comparison table parameters, and FAQ sections for the pricing page.</p>
        </div>
        <a 
          href="/pricing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          View Live Pricing Page
        </a>
      </div>

      {/* Message Notifications */}
      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
        }`}>
          {message.type === 'success' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-px">
        <button
          onClick={() => { setActiveTab('hero'); setEditingPlan(null); setEditingFeature(null); setEditingFaq(null); }}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'hero' 
              ? 'border-[#006B3F] text-[#006B3F]' 
              : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-350'
          }`}
        >
          <Settings className="h-4 w-4" />
          Hero &amp; Subtitles
        </button>
        <button
          onClick={() => { setActiveTab('plans'); setEditingPlan(null); setEditingFeature(null); setEditingFaq(null); }}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'plans' 
              ? 'border-[#006B3F] text-[#006B3F]' 
              : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-350'
          }`}
        >
          <Layers className="h-4 w-4" />
          Pricing Plans
        </button>
        <button
          onClick={() => { setActiveTab('comparison'); setEditingPlan(null); setEditingFeature(null); setEditingFaq(null); }}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'comparison' 
              ? 'border-[#006B3F] text-[#006B3F]' 
              : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-350'
          }`}
        >
          <TableProperties className="h-4 w-4" />
          Comparison Grid
        </button>
        <button
          onClick={() => { setActiveTab('faqs'); setEditingPlan(null); setEditingFeature(null); setEditingFaq(null); }}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'faqs' 
              ? 'border-[#006B3F] text-[#006B3F]' 
              : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-350'
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          Pricing FAQs
        </button>
      </div>

      {loading ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-20 flex items-center justify-center text-slate-400 gap-2 shadow-sm">
          <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
          <span className="text-sm font-semibold">Loading pricing settings database...</span>
        </div>
      ) : (
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
          
          {/* TAB 1: HERO & SUBTITLES */}
          {activeTab === 'hero' && (
            <form onSubmit={handleSaveHero} className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3">Configure Pricing Header</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Hero Badge Label
                  </label>
                  <input
                    type="text"
                    required
                    value={heroSettings.hero_subtitle}
                    onChange={(e) => setHeroSettings({ ...heroSettings, hero_subtitle: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Hero Title
                  </label>
                  <input
                    type="text"
                    required
                    value={heroSettings.hero_title}
                    onChange={(e) => setHeroSettings({ ...heroSettings, hero_title: e.target.value })}
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
                  rows={3}
                  value={heroSettings.hero_description}
                  onChange={(e) => setHeroSettings({ ...heroSettings, hero_description: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all resize-none font-medium"
                />
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-50">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all disabled:opacity-55 cursor-pointer"
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Save Hero Settings
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: PRICING PLANS */}
          {activeTab === 'plans' && (
            <div className="space-y-8">
              {!editingPlan ? (
                <div>
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3 mb-6">Select a Pricing Tier to Edit</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                      <div 
                        key={plan.id} 
                        className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:shadow-md ${
                          plan.popular ? 'border-purple-300 bg-purple-50/20 ring-1 ring-purple-100' : 'border-slate-200 bg-slate-50/30'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-bold text-slate-800">{plan.name}</h4>
                            <span className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded-md ${
                              plan.color === 'purple' ? 'bg-purple-100 text-purple-700' : 
                              plan.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-800'
                            }`}>
                              {plan.color}
                            </span>
                          </div>
                          <div className="text-3xl font-extrabold text-slate-900 mb-2">{plan.price}</div>
                          <p className="text-xs text-slate-500 font-medium line-clamp-3 mb-4">{plan.desc}</p>
                          <div className="space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Core Features Include:</span>
                            <ul className="text-xs text-slate-600 font-semibold list-disc list-inside space-y-0.5">
                              {plan.features.slice(0, 3).map((f: string, i: number) => (
                                <li key={i} className="truncate">{f}</li>
                              ))}
                              {plan.features.length > 3 && <li className="text-slate-400 font-normal">+{plan.features.length - 3} more...</li>}
                            </ul>
                          </div>
                        </div>
                        <button
                          onClick={() => setEditingPlan(plan)}
                          className="mt-6 flex items-center justify-center gap-1.5 w-full bg-slate-100 hover:bg-slate-250 text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                          Edit Plan Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSavePlan} className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-800">Edit Tier: {editingPlan.name}</h3>
                    <button 
                      type="button" 
                      onClick={() => setEditingPlan(null)}
                      className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Plan Name
                      </label>
                      <input
                        type="text"
                        required
                        value={editingPlan.name}
                        onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Price (e.g. ₹2,995 or Custom)
                      </label>
                      <input
                        type="text"
                        required
                        value={editingPlan.price}
                        onChange={(e) => setEditingPlan({ ...editingPlan, price: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Billing Period (e.g. /month or leave blank)
                      </label>
                      <input
                        type="text"
                        value={editingPlan.period}
                        onChange={(e) => setEditingPlan({ ...editingPlan, period: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        CTA Text
                      </label>
                      <input
                        type="text"
                        required
                        value={editingPlan.cta}
                        onChange={(e) => setEditingPlan({ ...editingPlan, cta: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Color Theme
                      </label>
                      <select
                        value={editingPlan.color}
                        onChange={(e) => setEditingPlan({ ...editingPlan, color: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                      >
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="slate">Slate</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3 pt-6">
                      <input
                        type="checkbox"
                        id="plan-popular"
                        checked={editingPlan.popular}
                        onChange={(e) => setEditingPlan({ ...editingPlan, popular: e.target.checked })}
                        className="h-4.5 w-4.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="plan-popular" className="text-sm font-bold text-slate-700 cursor-pointer">
                        Mark as "Most Popular"
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Description Summary
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={editingPlan.desc}
                      onChange={(e) => setEditingPlan({ ...editingPlan, desc: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all resize-none font-medium"
                    />
                  </div>

                  {/* Feature dynamic items list */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Included Plan Features
                    </label>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                      {editingPlan.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            required
                            value={feature}
                            onChange={(e) => updatePlanFeature(idx, e.target.value)}
                            placeholder={`Feature #${idx + 1}`}
                            className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] focus:ring-1 focus:ring-[#006B3F] transition-all font-medium"
                          />
                          <button
                            type="button"
                            onClick={() => removePlanFeature(idx)}
                            className="inline-flex items-center justify-center p-2.5 rounded-xl border border-red-200 hover:bg-red-50 text-red-650 hover:text-red-700 transition-all cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={addPlanFeature}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-650 hover:text-[#006B3F] transition-all cursor-pointer"
                    >
                      <Plus className="h-4 w-4" /> Add Feature Item
                    </button>
                  </div>

                  <div className="flex justify-end gap-3 pt-6 border-t border-slate-50">
                    <button
                      type="button"
                      onClick={() => setEditingPlan(null)}
                      className="px-5 py-3 text-xs font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all disabled:opacity-55 cursor-pointer"
                    >
                      {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                      Save Tier Details
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: COMPARISON GRID */}
          {activeTab === 'comparison' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                <h3 className="text-lg font-bold text-slate-800">Compare Grid Rows</h3>
                {!isAddingFeature && !editingFeature && (
                  <button
                    onClick={() => setIsAddingFeature(true)}
                    className="inline-flex items-center gap-1.5 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <Plus className="h-4 w-4" /> Add Row
                  </button>
                )}
              </div>

              {/* Add New Grid Row Form */}
              {isAddingFeature && (
                <form onSubmit={handleCreateFeature} className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200 space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-bold text-slate-700">Add New Feature Parameter</h4>
                    <button type="button" onClick={() => setIsAddingFeature(false)} className="text-slate-400 hover:text-slate-650"><X className="h-4 w-4" /></button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Category Group</label>
                      <select
                        value={newFeature.category}
                        onChange={(e) => setNewFeature({ ...newFeature, category: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="Core HR">Core HR</option>
                        <option value="Leave & Attendance">Leave &amp; Attendance</option>
                        <option value="Payroll & Compliance">Payroll &amp; Compliance</option>
                        <option value="Advanced Modules">Advanced Modules</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Feature Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Asset Management"
                        value={newFeature.name}
                        onChange={(e) => setNewFeature({ ...newFeature, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Display Order</label>
                      <input
                        type="number"
                        required
                        value={newFeature.display_order}
                        onChange={(e) => setNewFeature({ ...newFeature, display_order: Number(e.target.value) })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Standard Value</label>
                      <select
                        value={newFeature.std_value === 'true' || newFeature.std_value === 'false' ? newFeature.std_value : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewFeature({ ...newFeature, std_value: val === 'custom' ? '' : val });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="true">Yes (Checkmark)</option>
                        <option value="false">No (Minus Sign)</option>
                        <option value="custom">Custom Text...</option>
                      </select>
                      {(newFeature.std_value !== 'true' && newFeature.std_value !== 'false') && (
                        <input
                          type="text"
                          required
                          placeholder="e.g. 1 GB or Basic"
                          value={newFeature.std_value}
                          onChange={(e) => setNewFeature({ ...newFeature, std_value: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Professional Value</label>
                      <select
                        value={newFeature.pro_value === 'true' || newFeature.pro_value === 'false' ? newFeature.pro_value : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewFeature({ ...newFeature, pro_value: val === 'custom' ? '' : val });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="true">Yes (Checkmark)</option>
                        <option value="false">No (Minus Sign)</option>
                        <option value="custom">Custom Text...</option>
                      </select>
                      {(newFeature.pro_value !== 'true' && newFeature.pro_value !== 'false') && (
                        <input
                          type="text"
                          required
                          placeholder="e.g. 10 GB or Advanced"
                          value={newFeature.pro_value}
                          onChange={(e) => setNewFeature({ ...newFeature, pro_value: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Enterprise Value</label>
                      <select
                        value={newFeature.ent_value === 'true' || newFeature.ent_value === 'false' ? newFeature.ent_value : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewFeature({ ...newFeature, ent_value: val === 'custom' ? '' : val });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="true">Yes (Checkmark)</option>
                        <option value="false">No (Minus Sign)</option>
                        <option value="custom">Custom Text...</option>
                      </select>
                      {(newFeature.ent_value !== 'true' && newFeature.ent_value !== 'false') && (
                        <input
                          type="text"
                          required
                          placeholder="e.g. Unlimited or Custom"
                          value={newFeature.ent_value}
                          onChange={(e) => setNewFeature({ ...newFeature, ent_value: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingFeature(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-500 bg-white hover:bg-slate-50 border border-slate-250 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                      Create Row
                    </button>
                  </div>
                </form>
              )}

              {/* Edit Row Form */}
              {editingFeature && (
                <form onSubmit={handleUpdateFeature} className="p-6 rounded-2xl bg-indigo-50/20 border border-indigo-100 space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-bold text-indigo-850">Edit Comparison Feature: {editingFeature.name}</h4>
                    <button type="button" onClick={() => setEditingFeature(null)} className="text-indigo-400 hover:text-indigo-650"><X className="h-4 w-4" /></button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Category Group</label>
                      <select
                        value={editingFeature.category}
                        onChange={(e) => setEditingFeature({ ...editingFeature, category: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="Core HR">Core HR</option>
                        <option value="Leave & Attendance">Leave &amp; Attendance</option>
                        <option value="Payroll & Compliance">Payroll &amp; Compliance</option>
                        <option value="Advanced Modules">Advanced Modules</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Feature Name</label>
                      <input
                        type="text"
                        required
                        value={editingFeature.name}
                        onChange={(e) => setEditingFeature({ ...editingFeature, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Display Order</label>
                      <input
                        type="number"
                        required
                        value={editingFeature.display_order}
                        onChange={(e) => setEditingFeature({ ...editingFeature, display_order: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Standard Value</label>
                      <select
                        value={editingFeature.std_value === 'true' || editingFeature.std_value === 'false' ? editingFeature.std_value : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEditingFeature({ ...editingFeature, std_value: val === 'custom' ? '' : val });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="true">Yes (Checkmark)</option>
                        <option value="false">No (Minus Sign)</option>
                        <option value="custom">Custom Text...</option>
                      </select>
                      {(editingFeature.std_value !== 'true' && editingFeature.std_value !== 'false') && (
                        <input
                          type="text"
                          required
                          value={editingFeature.std_value}
                          onChange={(e) => setEditingFeature({ ...editingFeature, std_value: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Professional Value</label>
                      <select
                        value={editingFeature.pro_value === 'true' || editingFeature.pro_value === 'false' ? editingFeature.pro_value : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEditingFeature({ ...editingFeature, pro_value: val === 'custom' ? '' : val });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="true">Yes (Checkmark)</option>
                        <option value="false">No (Minus Sign)</option>
                        <option value="custom">Custom Text...</option>
                      </select>
                      {(editingFeature.pro_value !== 'true' && editingFeature.pro_value !== 'false') && (
                        <input
                          type="text"
                          required
                          value={editingFeature.pro_value}
                          onChange={(e) => setEditingFeature({ ...editingFeature, pro_value: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Enterprise Value</label>
                      <select
                        value={editingFeature.ent_value === 'true' || editingFeature.ent_value === 'false' ? editingFeature.ent_value : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEditingFeature({ ...editingFeature, ent_value: val === 'custom' ? '' : val });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      >
                        <option value="true">Yes (Checkmark)</option>
                        <option value="false">No (Minus Sign)</option>
                        <option value="custom">Custom Text...</option>
                      </select>
                      {(editingFeature.ent_value !== 'true' && editingFeature.ent_value !== 'false') && (
                        <input
                          type="text"
                          required
                          value={editingFeature.ent_value}
                          onChange={(e) => setEditingFeature({ ...editingFeature, ent_value: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingFeature(null)}
                      className="px-4 py-2 text-xs font-bold text-slate-500 bg-white hover:bg-slate-50 border border-slate-250 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center gap-1 bg-indigo-650 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                      Update Row
                    </button>
                  </div>
                </form>
              )}

              {/* Grid List View */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                      <th className="p-4">Group Category / Feature Name</th>
                      <th className="p-4 text-center">Standard</th>
                      <th className="p-4 text-center">Professional</th>
                      <th className="p-4 text-center">Enterprise</th>
                      <th className="p-4 text-center">Order</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-250 text-xs font-semibold text-slate-700">
                    {comparisonFeatures.map((feat) => (
                      <tr key={feat.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4">
                          <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded mr-2">
                            {feat.category}
                          </span>
                          <span className="font-bold text-slate-800">{feat.name}</span>
                        </td>
                        <td className="p-4 text-center font-medium">
                          {feat.std_value === 'true' ? '✅' : feat.std_value === 'false' ? '❌' : feat.std_value}
                        </td>
                        <td className="p-4 text-center font-medium bg-purple-50/10">
                          {feat.pro_value === 'true' ? '✅' : feat.pro_value === 'false' ? '❌' : feat.pro_value}
                        </td>
                        <td className="p-4 text-center font-medium">
                          {feat.ent_value === 'true' ? '✅' : feat.ent_value === 'false' ? '❌' : feat.ent_value}
                        </td>
                        <td className="p-4 text-center text-slate-450 font-normal">{feat.display_order}</td>
                        <td className="p-4 text-right space-x-1">
                          <button
                            onClick={() => { setEditingFeature(feat); setIsAddingFeature(false); }}
                            className="inline-flex p-1.5 rounded-lg text-slate-550 hover:bg-slate-150 hover:text-slate-800 transition-all cursor-pointer"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteFeature(feat.id)}
                            className="inline-flex p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-all cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                <h3 className="text-lg font-bold text-slate-800">Frequently Asked Questions</h3>
                {!isAddingFaq && !editingFaq && (
                  <button
                    onClick={() => setIsAddingFaq(true)}
                    className="inline-flex items-center gap-1.5 bg-[#006B3F] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <Plus className="h-4 w-4" /> Add FAQ
                  </button>
                )}
              </div>

              {/* Add New FAQ Form */}
              {isAddingFaq && (
                <form onSubmit={handleCreateFaq} className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200 space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-bold text-slate-700">Add New Question</h4>
                    <button type="button" onClick={() => setIsAddingFaq(false)} className="text-slate-400 hover:text-slate-650"><X className="h-4 w-4" /></button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Question Text</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Do you offer monthly plans?"
                        value={newFaq.question}
                        onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Display Order</label>
                      <input
                        type="number"
                        required
                        value={newFaq.display_order}
                        onChange={(e) => setNewFaq({ ...newFaq, display_order: Number(e.target.value) })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Detailed Answer</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Provide pricing answers..."
                      value={newFaq.answer}
                      onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingFaq(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-500 bg-white hover:bg-slate-50 border border-slate-250 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                      Create FAQ
                    </button>
                  </div>
                </form>
              )}

              {/* Edit FAQ Form */}
              {editingFaq && (
                <form onSubmit={handleUpdateFaq} className="p-6 rounded-2xl bg-indigo-50/20 border border-indigo-100 space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-bold text-indigo-850">Edit FAQ Entry</h4>
                    <button type="button" onClick={() => setEditingFaq(null)} className="text-indigo-400 hover:text-indigo-650"><X className="h-4 w-4" /></button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Question Text</label>
                      <input
                        type="text"
                        required
                        value={editingFaq.question}
                        onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Display Order</label>
                      <input
                        type="number"
                        required
                        value={editingFaq.display_order}
                        onChange={(e) => setEditingFaq({ ...editingFaq, display_order: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Detailed Answer</label>
                    <textarea
                      required
                      rows={3}
                      value={editingFaq.answer}
                      onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-[#006B3F] transition-all font-semibold resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingFaq(null)}
                      className="px-4 py-2 text-xs font-bold text-slate-500 bg-white hover:bg-slate-50 border border-slate-250 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center gap-1 bg-indigo-650 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                      Update FAQ
                    </button>
                  </div>
                </form>
              )}

              {/* FAQ List */}
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="p-5 border border-slate-200 rounded-2xl hover:shadow-sm transition-all flex justify-between gap-6 items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Order {faq.display_order}</span>
                        <h4 className="text-sm font-bold text-slate-800">{faq.question}</h4>
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button
                        onClick={() => { setEditingFaq(faq); setIsAddingFaq(false); }}
                        className="inline-flex p-1.5 rounded-lg text-slate-550 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(faq.id)}
                        className="inline-flex p-1.5 rounded-lg text-red-500 hover:bg-red-550/10 hover:text-red-700 transition-all cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
