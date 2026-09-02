'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Smartphone, 
  Monitor, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Sparkles, 
  Info, 
  Target, 
  Heading, 
  Link2, 
  Image as ImageIcon, 
  FileText, 
  Wand2, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  X, 
  Code2, 
  Copy, 
  Check, 
  ListOrdered,
  Eye,
  Hash,
  Smile,
  Zap,
  ExternalLink,
  ArrowRight,
  Layers,
  Compass
} from 'lucide-react';
import { 
  INTERNAL_LINK_TARGETS, 
  detectInternalLinkOpportunities, 
  autoLinkKeywords, 
  linkSingleTarget, 
  InternalLinkTarget 
} from '@/lib/internalLinksData';

export interface RankMathTestItem {
  id: string;
  title: string;
  passed: boolean;
  warning?: boolean;
  details: string;
  points: number;
  actionType?: 'convert_h1' | 'insert_toc' | 'add_number' | 'auto_link' | string;
}

export interface RankMathSeoProps {
  title: string;
  slug: string;
  summary: string;
  content: string;
  featured_image?: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  author?: string;
  onApplyMetaTitle?: (title: string) => void;
  onApplyMetaDescription?: (desc: string) => void;
  onContentChange?: (content: string) => void;
  onMetaKeywordsChange?: (keywords: string) => void;
}

// Power words list recommended by Rank Math for boosting CTR
const POWER_WORDS = [
  'best', 'top', 'guide', 'complete', 'ultimate', 'proven', 'essential', 
  'definitive', 'smart', 'simple', 'why', 'how to', 'how', 'strategies', 
  'modern', 'advanced', 'actionable', 'powerful', 'checklist', 'secrets', 
  'step-by-step', 'fast', 'quick', 'free', 'new', 'easy', 'perfect'
];

// Emotional sentiment words
const SENTIMENT_WORDS = [
  'amazing', 'critical', 'danger', 'effortless', 'exclusive', 'guaranteed',
  'incredible', 'massive', 'master', 'revolutionary', 'vital', 'warning',
  'worst', 'mistakes', 'fail', 'growth', 'supercharge', 'exceptional'
];

export default function RankMathSeo({
  title,
  slug,
  summary,
  content,
  featured_image,
  meta_title,
  meta_description,
  meta_keywords,
  author = 'HR Niti Team',
  onApplyMetaTitle,
  onApplyMetaDescription,
  onContentChange,
  onMetaKeywordsChange,
}: RankMathSeoProps) {
  // Tabs & Views
  const [activeTab, setActiveTab] = useState<'general' | 'links' | 'snippet' | 'schema'>('general');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile' | 'social'>('desktop');
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [copiedRoute, setCopiedRoute] = useState<string | null>(null);

  // Internal Link Filter State
  const [linkSearchQuery, setLinkSearchQuery] = useState('');
  const [linkCategoryFilter, setLinkCategoryFilter] = useState<string>('all');
  const [autoLinkMessage, setAutoLinkMessage] = useState<{ type: 'success' | 'info'; text: string } | null>(null);

  // Accordion Section Toggles (Rank Math Style)
  const [openSections, setOpenSections] = useState({
    basic: true,
    additional: true,
    titleReadability: true,
    contentReadability: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Focus Keywords Management (Rank Math allows up to 5 focus keywords)
  const keywordsList = useMemo(() => {
    return (meta_keywords || '')
      .split(',')
      .map(k => k.trim())
      .filter(Boolean);
  }, [meta_keywords]);

  const [newKeywordInput, setNewKeywordInput] = useState('');
  const [activeFocusKeywordIndex, setActiveFocusKeywordIndex] = useState<number>(0);

  const activeFocusKeyword = keywordsList[activeFocusKeywordIndex] || keywordsList[0] || '';

  const addKeyword = (kw: string) => {
    const trimmed = kw.trim();
    if (!trimmed) return;
    if (!keywordsList.includes(trimmed)) {
      const updated = [...keywordsList, trimmed];
      if (onMetaKeywordsChange) {
        onMetaKeywordsChange(updated.join(', '));
      }
    }
    setNewKeywordInput('');
  };

  const removeKeyword = (indexToRemove: number) => {
    const updated = keywordsList.filter((_, idx) => idx !== indexToRemove);
    if (onMetaKeywordsChange) {
      onMetaKeywordsChange(updated.join(', '));
    }
    if (activeFocusKeywordIndex >= updated.length) {
      setActiveFocusKeywordIndex(Math.max(0, updated.length - 1));
    }
  };

  // Active display values
  const displayTitle = meta_title.trim() ? meta_title.trim() : (title.trim() ? title.trim() : 'Title of your blog post');
  const displayDescription = meta_description.trim() 
    ? meta_description.trim() 
    : (summary.trim() ? summary.trim() : 'Please enter a search description snippet so Google can showcase your article effectively.');
  const displaySlug = slug.trim() ? slug.trim() : 'your-blog-slug';
  const displayUrl = `https://www.hrniti.com/blog/${displaySlug}`;

  // Content text extraction
  const plainText = useMemo(() => {
    if (!content) return '';
    return content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }, [content]);

  // Word count & reading time
  const wordCount = useMemo(() => {
    return plainText ? plainText.split(/\s+/).filter(Boolean).length : 0;
  }, [plainText]);

  // --- HEADING AUDIT (H1, H2, H3) ---
  const contentH1Matches = useMemo(() => {
    if (!content) return [];
    return content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  }, [content]);

  const contentH1Count = contentH1Matches.length;
  // Hero section already renders exactly 1 main H1 for blog.title
  const totalH1Count = 1 + contentH1Count;

  const h2Matches = useMemo(() => {
    if (!content) return [];
    return content.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
  }, [content]);

  const h3Matches = useMemo(() => {
    if (!content) return [];
    return content.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || [];
  }, [content]);

  // --- INTERNAL LINK OPPORTUNITIES SCANNER ---
  const linkOpportunities = useMemo(() => {
    return detectInternalLinkOpportunities(content);
  }, [content]);

  const unlinkedOpportunities = useMemo(() => {
    return linkOpportunities.filter(opp => !opp.isAlreadyLinked);
  }, [linkOpportunities]);

  // 1-Click Auto Link Handler (All detected keywords)
  const handleAutoLinkAll = () => {
    if (!onContentChange || !content) return;
    const { updatedContent, linkedCount, linkedRoutes } = autoLinkKeywords(content);
    if (linkedCount > 0) {
      onContentChange(updatedContent);
      setAutoLinkMessage({
        type: 'success',
        text: `⚡ Auto-linked ${linkedCount} keyword(s) to: ${linkedRoutes.join(', ')}`
      });
      setTimeout(() => setAutoLinkMessage(null), 5000);
    } else {
      setAutoLinkMessage({
        type: 'info',
        text: 'All detected keywords in your article are already linked to their pages!'
      });
      setTimeout(() => setAutoLinkMessage(null), 4000);
    }
  };

  // 1-Click Link Single Target Route
  const handleLinkSingle = (target: InternalLinkTarget) => {
    if (!onContentChange || !content) return;
    const { updatedContent, linkedCount } = autoLinkKeywords(content, [target]);
    if (linkedCount > 0) {
      onContentChange(updatedContent);
      setAutoLinkMessage({
        type: 'success',
        text: `Linked keyword in text to ${target.route}!`
      });
      setTimeout(() => setAutoLinkMessage(null), 3500);
    } else {
      setAutoLinkMessage({
        type: 'info',
        text: `No unlinked occurrences of "${target.keywords[0]}" found in text.`
      });
      setTimeout(() => setAutoLinkMessage(null), 3500);
    }
  };

  // 1-Click Insert Related Service Card Box
  const handleInsertLinkBox = (target: InternalLinkTarget) => {
    if (!onContentChange || !content) return;
    const boxHtml = `\n<div class="my-6 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <div>
    <div class="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">Recommended HR Niti Solution</div>
    <div class="text-sm font-extrabold text-slate-900 mt-0.5">${target.title}</div>
    <div class="text-xs text-slate-600 mt-0.5">Explore how our cloud platform automates statutory compliance &amp; operations.</div>
  </div>
  <a href="${target.route}" class="inline-flex items-center gap-1.5 px-4 py-2 bg-[#006B3F] hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shrink-0 transition-all shadow-xs">
    <span>View Solution</span>
    <span>&rarr;</span>
  </a>
</div>\n`;
    onContentChange(content + boxHtml);
    setAutoLinkMessage({
      type: 'success',
      text: `Appended interactive feature box for ${target.route} to article body!`
    });
    setTimeout(() => setAutoLinkMessage(null), 3500);
  };

  const copyRouteToClipboard = (route: string) => {
    navigator.clipboard.writeText(route);
    setCopiedRoute(route);
    setTimeout(() => setCopiedRoute(null), 2000);
  };

  // Quick fix: Convert all content H1s to H2s
  const handleConvertH1ToH2 = () => {
    if (!onContentChange || !content) return;
    const updated = content.replace(/<h1(\s*[^>]*)>([\s\S]*?)<\/h1>/gi, (_match, attrs, inner) => {
      return `<h2${attrs}>${inner}</h2>`;
    });
    onContentChange(updated);
  };

  // Quick fix: Insert Table of Contents
  const handleInsertToc = () => {
    if (!onContentChange || !content || h2Matches.length === 0) return;
    
    const tocItems = h2Matches.map((h2) => {
      const text = h2.replace(/<[^>]+>/g, '').trim();
      const anchor = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      return `<li style="margin-bottom: 6px;"><a href="#${anchor}" style="color: #006b3f; text-decoration: underline;">${text}</a></li>`;
    }).join('\n');

    const tocHtml = `
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px 24px; margin: 24px 0;">
  <div style="font-weight: 700; font-size: 15px; margin-bottom: 12px; color: #0f172a; display: flex; align-items: center; gap: 8px;">
    <span>📑 Table of Contents</span>
  </div>
  <ol style="padding-left: 20px; margin: 0; color: #334155; font-size: 14px; line-height: 1.6;">
    ${tocItems}
  </ol>
</div>
`;
    const firstH2Index = content.indexOf('<h2');
    let newContent = '';
    if (firstH2Index !== -1) {
      newContent = content.slice(0, firstH2Index) + tocHtml + content.slice(firstH2Index);
    } else {
      newContent = tocHtml + content;
    }
    onContentChange(newContent);
  };

  // Quick fix: Add Current Year (2026) to Title
  const handleAddYearToTitle = () => {
    if (!onApplyMetaTitle) return;
    const current = displayTitle;
    if (!/\b202\d\b/.test(current)) {
      onApplyMetaTitle(`${current} (2026 Guide)`);
    }
  };

  // --- IMAGES & ALT ATTRIBUTES ---
  const imageAudit = useMemo(() => {
    if (!content) return { count: 0, missingAlt: 0, withKwAlt: false };
    const imgMatches = content.match(/<img[^>]*>/gi) || [];
    let missingAlt = 0;
    let withKwAlt = false;

    for (const img of imgMatches) {
      const altMatch = img.match(/alt=["']([^"']*)["']/i);
      const altText = altMatch ? altMatch[1].trim() : '';
      if (!altText) {
        missingAlt++;
      } else if (activeFocusKeyword && altText.toLowerCase().includes(activeFocusKeyword.toLowerCase())) {
        withKwAlt = true;
      }
    }
    return {
      count: imgMatches.length,
      missingAlt,
      withKwAlt,
    };
  }, [content, activeFocusKeyword]);

  // --- LINKS AUDIT (INTERNAL & EXTERNAL) ---
  const linkAudit = useMemo(() => {
    if (!content) return { internal: 0, external: 0, empty: 0 };
    const aMatches = content.match(/<a[^>]*href=["']([^"']*)["'][^>]*>/gi) || [];
    let internal = 0;
    let external = 0;
    let empty = 0;

    for (const a of aMatches) {
      const hrefMatch = a.match(/href=["']([^"']*)["']/i);
      const href = hrefMatch ? hrefMatch[1].trim() : '';
      if (!href || href === '#' || href === 'javascript:void(0)') {
        empty++;
      } else if (href.startsWith('/') || href.includes('hrniti.com') || href.includes('localhost')) {
        internal++;
      } else if (href.startsWith('http://') || href.startsWith('https://')) {
        external++;
      }
    }
    return { internal, external, empty };
  }, [content]);

  // Table of Contents Check
  const hasToc = useMemo(() => {
    if (!content) return false;
    return /table of contents/i.test(content) || /toc-box/i.test(content) || /href="#/i.test(content);
  }, [content]);

  // Paragraph length check
  const longParagraphsCount = useMemo(() => {
    if (!content) return 0;
    const paragraphs = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
    let count = 0;
    for (const p of paragraphs) {
      const pWords = p.replace(/<[^>]+>/g, '').trim().split(/\s+/).filter(Boolean).length;
      if (pWords > 120) count++;
    }
    return count;
  }, [content]);

  // --- KEYWORD CHECKS (Rank Math Core) ---
  const kw = activeFocusKeyword.trim().toLowerCase();
  const kwWords = kw ? kw.split(/\s+/).filter(Boolean).length : 0;

  const kwInTitle = kw ? displayTitle.toLowerCase().includes(kw) : false;
  const kwAtTitleStart = kw ? displayTitle.toLowerCase().startsWith(kw) || displayTitle.toLowerCase().indexOf(kw) <= 15 : false;
  const kwInDesc = kw ? displayDescription.toLowerCase().includes(kw) : false;

  const kwInSlug = useMemo(() => {
    if (!kw || !displaySlug) return false;
    const directSlug = kw.replace(/\s+/g, '-');
    if (displaySlug.toLowerCase().includes(directSlug)) return true;
    const words = kw.split(/\s+/).filter(w => w.length >= 3);
    return words.length > 0 && words.every(w => displaySlug.toLowerCase().includes(w));
  }, [kw, displaySlug]);

  const kwInFirst10Percent = useMemo(() => {
    if (!kw || !plainText) return false;
    const firstPortion = plainText.slice(0, Math.max(300, Math.floor(plainText.length * 0.15))).toLowerCase();
    return firstPortion.includes(kw);
  }, [kw, plainText]);

  const kwInSubheadings = useMemo(() => {
    if (!kw || !content) return false;
    const headingsText = [...h2Matches, ...h3Matches].join(' ').replace(/<[^>]+>/g, '').toLowerCase();
    return headingsText.includes(kw);
  }, [kw, content, h2Matches, h3Matches]);

  const { kwCount, kwDensity } = useMemo(() => {
    if (!kw || !plainText || wordCount === 0) return { kwCount: 0, kwDensity: 0 };
    const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = plainText.match(regex);
    const count = matches ? matches.length : 0;
    const density = ((count * kwWords) / wordCount) * 100;
    return { kwCount: count, kwDensity: Number(density.toFixed(2)) };
  }, [kw, plainText, wordCount, kwWords]);

  // --- TITLE READABILITY CHECKS (Rank Math Pro) ---
  const titleHasNumber = useMemo(() => {
    return /\d+/.test(displayTitle);
  }, [displayTitle]);

  const titleHasPowerWord = useMemo(() => {
    const lower = displayTitle.toLowerCase();
    return POWER_WORDS.some(pw => lower.includes(pw));
  }, [displayTitle]);

  const titleHasSentiment = useMemo(() => {
    const lower = displayTitle.toLowerCase();
    return SENTIMENT_WORDS.some(sw => lower.includes(sw));
  }, [displayTitle]);

  // ==========================================
  // RANK MATH 4-PILLAR SCORE & AUDIT ITEMS
  // ==========================================

  // Pillar 1: Basic SEO
  const basicSeoTests: RankMathTestItem[] = useMemo(() => {
    return [
      {
        id: 'basic_kw_title',
        title: 'Focus Keyword in SEO Title',
        passed: kwInTitle,
        details: kwInTitle ? `"${kw}" is in the SEO title.` : `Add "${kw || 'focus keyword'}" to the meta title.`,
        points: 8,
      },
      {
        id: 'basic_kw_desc',
        title: 'Focus Keyword in Meta Description',
        passed: kwInDesc,
        details: kwInDesc ? `"${kw}" appears in the search snippet.` : `Include "${kw || 'focus keyword'}" in the meta description.`,
        points: 7,
      },
      {
        id: 'basic_kw_slug',
        title: 'Focus Keyword in URL Slug',
        passed: kwInSlug,
        details: kwInSlug ? `URL contains "${kw.replace(/\s+/g, '-')}".` : `Add "${kw.replace(/\s+/g, '-') || 'keyword'}" to your URL slug.`,
        points: 7,
      },
      {
        id: 'basic_kw_intro',
        title: 'Focus Keyword in First 10% of Content',
        passed: kwInFirst10Percent,
        details: kwInFirst10Percent ? `"${kw}" appears early in the opening paragraphs.` : `Introduce "${kw || 'focus keyword'}" in the first 100-150 words.`,
        points: 6,
      },
      {
        id: 'basic_kw_content',
        title: 'Focus Keyword Found in Content Body',
        passed: kwCount > 0,
        details: kwCount > 0 ? `Found ${kwCount} times in article.` : `Mention "${kw || 'focus keyword'}" throughout your article.`,
        points: 6,
      },
      {
        id: 'basic_word_count',
        title: `Content Length (${wordCount} words)`,
        passed: wordCount >= 600,
        warning: wordCount >= 300 && wordCount < 600,
        details: wordCount >= 600 
          ? `Great! Content is ${wordCount} words (minimum 600 words recommended for ranking).`
          : wordCount >= 300 
          ? `Content is ${wordCount} words. Aim for 600+ words to compete with top articles.`
          : `Content is only ${wordCount} words. Search engines prefer in-depth articles.`,
        points: wordCount >= 600 ? 8 : (wordCount >= 300 ? 4 : 0),
      },
    ];
  }, [kwInTitle, kwInDesc, kwInSlug, kwInFirst10Percent, kwCount, wordCount, kw]);

  // Pillar 2: Additional SEO
  const additionalSeoTests: RankMathTestItem[] = useMemo(() => {
    return [
      {
        id: 'add_h1_check',
        title: 'Single H1 Heading on Page',
        passed: contentH1Count === 0,
        actionType: 'convert_h1',
        details: contentH1Count === 0
          ? 'Perfect. Only 1 primary H1 on the page (the hero title).'
          : `Critical: Found ${contentH1Count} additional <h1> tag(s) inside content! Convert to <h2>.`,
        points: contentH1Count === 0 ? 8 : 0,
      },
      {
        id: 'add_kw_subheadings',
        title: 'Focus Keyword in Subheadings (H2, H3)',
        passed: kwInSubheadings,
        details: kwInSubheadings 
          ? `"${kw}" appears in your section subheadings.`
          : `Include "${kw || 'focus keyword'}" in at least one H2 heading.`,
        points: kwInSubheadings ? 6 : 0,
      },
      {
        id: 'add_kw_image_alt',
        title: 'Focus Keyword in Image Alt Attribute',
        passed: imageAudit.withKwAlt || (imageAudit.count === 0 && !!featured_image),
        details: imageAudit.withKwAlt
          ? `Found image alt text containing "${kw}".`
          : imageAudit.count === 0 
          ? 'Add images with focus keyword in the alt attribute.'
          : `None of your content images have "${kw}" in alt text.`,
        points: imageAudit.withKwAlt ? 6 : 2,
      },
      {
        id: 'add_kw_density',
        title: `Keyword Density (${kwDensity}%)`,
        passed: kwDensity >= 0.8 && kwDensity <= 2.5,
        warning: kwDensity > 2.5 || (kwDensity > 0 && kwDensity < 0.8),
        details: kwDensity >= 0.8 && kwDensity <= 2.5
          ? `Optimal density (${kwDensity}% - ${kwCount} occurrences).`
          : kwDensity > 2.5 
          ? `High density (${kwDensity}%). Reduce keyword mentions to avoid over-optimization.`
          : `Low density (${kwDensity}%). Aim for 0.8% - 2.5%.`,
        points: (kwDensity >= 0.8 && kwDensity <= 2.5) ? 6 : 2,
      },
      {
        id: 'add_slug_length',
        title: `URL Slug Length (${slug.length} chars)`,
        passed: slug.length > 0 && slug.length <= 60 && /^[a-z0-9-]+$/.test(slug),
        details: slug.length <= 60 && /^[a-z0-9-]+$/.test(slug)
          ? 'URL slug is concise and clean.'
          : 'Keep URL slugs under 60 characters with only lowercase letters and hyphens.',
        points: 5,
      },
      {
        id: 'add_internal_links',
        title: `Internal Links (${linkAudit.internal} found)`,
        passed: linkAudit.internal >= 1,
        actionType: 'auto_link',
        details: linkAudit.internal >= 1 
          ? `Great! Found ${linkAudit.internal} internal link(s) to pass link authority.`
          : 'Link to other relevant HR Niti pages or products in your article.',
        points: linkAudit.internal >= 1 ? 5 : 0,
      },
      {
        id: 'add_featured_image',
        title: 'Featured Image Set',
        passed: !!featured_image,
        details: featured_image 
          ? 'Featured image set for rich Google Discover and OpenGraph cards.'
          : 'Add a featured image to boost click-through rate.',
        points: featured_image ? 5 : 0,
      },
    ];
  }, [contentH1Count, kwInSubheadings, imageAudit, featured_image, kwDensity, kwCount, slug, linkAudit, kw]);

  // Pillar 3: Title Readability
  const titleReadabilityTests: RankMathTestItem[] = useMemo(() => {
    return [
      {
        id: 'title_kw_start',
        title: 'Focus Keyword Near Beginning of SEO Title',
        passed: kwAtTitleStart,
        details: kwAtTitleStart
          ? `"${kw}" is placed prominently near the start of the title.`
          : 'Placing your keyword within the first 2-3 words increases CTR.',
        points: 5,
      },
      {
        id: 'title_has_number',
        title: 'SEO Title Contains a Number',
        passed: titleHasNumber,
        actionType: 'add_number',
        details: titleHasNumber 
          ? 'Contains numbers (e.g. 2026, 5, 10). Titles with numbers get 36% higher CTR.'
          : 'Add a number (e.g. current year "2026" or "5 Tips") to improve CTR.',
        points: titleHasNumber ? 5 : 0,
      },
      {
        id: 'title_power_word',
        title: 'Title Contains a Power Word',
        passed: titleHasPowerWord,
        details: titleHasPowerWord
          ? 'Includes a high-converting power word (e.g. Best, Guide, Proven, Complete, Modern).'
          : 'Add a power word like "Best", "Guide", "Complete", or "Proven" to make title enticing.',
        points: titleHasPowerWord ? 5 : 0,
      },
      {
        id: 'title_sentiment',
        title: 'Title Has Emotional Hook / Sentiment',
        passed: titleHasSentiment || titleHasPowerWord,
        details: titleHasSentiment || titleHasPowerWord
          ? 'Title carries emotional pull that appeals to searchers.'
          : 'Use an engaging hook word to stand out on Google.',
        points: 3,
      },
      {
        id: 'title_char_length',
        title: `SEO Title Length (${displayTitle.length} / 60 chars)`,
        passed: displayTitle.length >= 50 && displayTitle.length <= 60,
        warning: displayTitle.length > 60 || (displayTitle.length >= 35 && displayTitle.length < 50),
        details: displayTitle.length >= 50 && displayTitle.length <= 60
          ? 'Optimal length (fits without truncation on Google SERPs).'
          : displayTitle.length > 60 
          ? 'Title is over 60 characters and will be truncated with "...".'
          : 'Title is a bit short. Aim for 50-60 characters for maximum search visibility.',
        points: (displayTitle.length >= 50 && displayTitle.length <= 60) ? 5 : 2,
      },
    ];
  }, [kwAtTitleStart, titleHasNumber, titleHasPowerWord, titleHasSentiment, displayTitle, kw]);

  // Pillar 4: Content Readability
  const contentReadabilityTests: RankMathTestItem[] = useMemo(() => {
    return [
      {
        id: 'content_toc',
        title: 'Table of Contents Detected',
        passed: hasToc,
        actionType: 'insert_toc',
        details: hasToc 
          ? 'Table of contents found. Google will generate rich sitelink jump links.'
          : 'Add a Table of Contents to help readers and search engines navigate.',
        points: hasToc ? 5 : 0,
      },
      {
        id: 'content_paragraphs',
        title: 'Bite-Sized Paragraph Lengths',
        passed: longParagraphsCount === 0 && wordCount > 0,
        details: longParagraphsCount === 0
          ? 'Paragraphs are short and well spaced for easy mobile reading.'
          : `${longParagraphsCount} paragraph(s) have over 120 words. Break them up.`,
        points: longParagraphsCount === 0 ? 4 : 1,
      },
      {
        id: 'content_subheading_distribution',
        title: `Subheading Distribution (${h2Matches.length} H2s)`,
        passed: h2Matches.length >= 2,
        details: h2Matches.length >= 2 
          ? `Text is split into ${h2Matches.length} digestible sections with H2 headings.`
          : 'Add H2 subheadings every 250-300 words to improve reader retention.',
        points: h2Matches.length >= 2 ? 4 : 1,
      },
      {
        id: 'content_has_media',
        title: 'Content Contains Media (Images / Visuals)',
        passed: imageAudit.count > 0 || !!featured_image,
        details: imageAudit.count > 0 || !!featured_image
          ? `Article has ${imageAudit.count + (featured_image ? 1 : 0)} visual elements.`
          : 'Articles with visual media achieve 94% higher social shares.',
        points: (imageAudit.count > 0 || !!featured_image) ? 4 : 0,
      },
    ];
  }, [hasToc, longParagraphsCount, wordCount, h2Matches, imageAudit, featured_image]);

  // Calculate Overall Rank Math Score (0-100)
  const allTests = useMemo(() => {
    return [
      ...basicSeoTests,
      ...additionalSeoTests,
      ...titleReadabilityTests,
      ...contentReadabilityTests,
    ];
  }, [basicSeoTests, additionalSeoTests, titleReadabilityTests, contentReadabilityTests]);

  const { rankMathScore, scoreBadgeColor, scoreBadgeBg, scoreText } = useMemo(() => {
    const earned = allTests.reduce((acc, t) => acc + (t.passed ? t.points : (t.warning ? Math.floor(t.points / 2) : 0)), 0);
    const max = allTests.reduce((acc, t) => acc + t.points, 0);
    const score = max > 0 ? Math.min(100, Math.round((earned / max) * 100)) : 0;

    if (score >= 80) {
      return {
        rankMathScore: score,
        scoreBadgeColor: 'text-emerald-600',
        scoreBadgeBg: 'bg-emerald-50 border-emerald-300',
        scoreText: 'Good',
      };
    } else if (score >= 50) {
      return {
        rankMathScore: score,
        scoreBadgeColor: 'text-amber-600',
        scoreBadgeBg: 'bg-amber-50 border-amber-300',
        scoreText: 'Needs Work',
      };
    } else {
      return {
        rankMathScore: score,
        scoreBadgeColor: 'text-rose-600',
        scoreBadgeBg: 'bg-rose-50 border-rose-300',
        scoreText: 'Poor',
      };
    }
  }, [allTests]);

  // Filtered internal link routes
  const filteredRoutes = useMemo(() => {
    return INTERNAL_LINK_TARGETS.filter(target => {
      const matchesCategory = linkCategoryFilter === 'all' || target.category === linkCategoryFilter;
      const matchesSearch = !linkSearchQuery.trim() || 
        target.title.toLowerCase().includes(linkSearchQuery.toLowerCase()) ||
        target.route.toLowerCase().includes(linkSearchQuery.toLowerCase()) ||
        target.keywords.some(k => k.toLowerCase().includes(linkSearchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [linkCategoryFilter, linkSearchQuery]);

  // JSON-LD Schema Structured Data
  const schemaJson = useMemo(() => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": displayTitle,
      "description": displayDescription,
      "image": featured_image ? [featured_image] : undefined,
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": author || "HR Niti Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "HR Niti",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.hrniti.com/uploads/1781778053575-HRNITI_LOGO.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": displayUrl
      }
    }, null, 2);
  }, [displayTitle, displayDescription, featured_image, author, displayUrl]);

  const copySchemaToClipboard = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden font-sans">
      
      {/* Rank Math Pro Top Header Bar */}
      <div className="bg-slate-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#006B3F] to-emerald-400 flex items-center justify-center shadow-md">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">Rank Math SEO</span>
              <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-slate-400">Advanced On-Page, Auto-Linking &amp; Schema Engine</p>
          </div>
        </div>

        {/* Score Ring / Pill */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl border ${scoreBadgeBg} bg-white/10 backdrop-blur-sm`}>
            <div className="relative flex items-center justify-center">
              <svg className="w-11 h-11 transform -rotate-90">
                <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="3.5" className="fill-none" />
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeDasharray={`${2 * Math.PI * 18}`}
                  strokeDashoffset={`${2 * Math.PI * 18 * (1 - rankMathScore / 100)}`}
                  className={`${scoreBadgeColor} fill-none transition-all duration-700 ease-out`}
                  strokeLinecap="round"
                />
              </svg>
              <span className={`absolute font-black text-xs ${scoreBadgeColor}`}>
                {rankMathScore}
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">SEO Score</div>
              <div className={`text-sm font-black ${scoreBadgeColor}`}>
                {scoreText} ({rankMathScore}/100)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1 px-6 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs font-bold">
        <button
          type="button"
          onClick={() => setActiveTab('general')}
          className={`py-3.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'general'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Target className="h-4 w-4" /> Checklist &amp; Focus Keywords
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('links')}
          className={`py-3.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'links'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Link2 className="h-4 w-4" /> 1-Click Internal Linker
          {unlinkedOpportunities.length > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold animate-pulse">
              {unlinkedOpportunities.length} ready
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('snippet')}
          className={`py-3.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'snippet'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Eye className="h-4 w-4" /> SERP Snippet Preview
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('schema')}
          className={`py-3.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'schema'
              ? 'border-[#006B3F] text-[#006B3F]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Code2 className="h-4 w-4" /> Schema (JSON-LD)
        </button>
      </div>

      {/* Action Notification Toast Banner */}
      {autoLinkMessage && (
        <div className={`mx-6 mt-4 p-3.5 rounded-xl text-xs font-bold flex items-center gap-2 border animate-fadeIn ${
          autoLinkMessage.type === 'success' 
            ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
            : 'bg-blue-50 text-blue-800 border-blue-300'
        }`}>
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{autoLinkMessage.text}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: CHECKLIST & FOCUS KEYWORDS */}
      {/* ========================================================================= */}
      {activeTab === 'general' && (
        <div className="p-6 space-y-6">
          
          {/* Multiple Focus Keywords Tag Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-[#006B3F]" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Rank Math Focus Keywords
                </span>
                <span className="text-[11px] text-slate-400 font-normal">
                  (Up to 5 target queries)
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Active keyword evaluated below: <strong className="text-slate-900">{activeFocusKeyword || 'None'}</strong>
              </span>
            </div>

            {/* Keyword Pills & Add input */}
            <div className="flex flex-wrap items-center gap-2">
              {keywordsList.map((keyword, idx) => (
                <div
                  key={keyword + idx}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    activeFocusKeywordIndex === idx
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                  onClick={() => setActiveFocusKeywordIndex(idx)}
                >
                  <span>{idx === 0 && '⭐ '}{keyword}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeKeyword(idx);
                    }}
                    className="hover:text-rose-500 rounded-full p-0.5"
                    title="Remove keyword"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}

              {keywordsList.length < 5 && (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={newKeywordInput}
                    onChange={(e) => setNewKeywordInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addKeyword(newKeywordInput);
                      }
                    }}
                    placeholder="+ Add focus keyword..."
                    className="text-xs font-medium px-3 py-1.5 rounded-xl border border-dashed border-slate-300 bg-white focus:outline-none focus:border-[#006B3F] w-44"
                  />
                  {newKeywordInput.trim() && (
                    <button
                      type="button"
                      onClick={() => addKeyword(newKeywordInput)}
                      className="px-2 py-1.5 bg-[#006B3F] text-white rounded-xl text-xs font-bold hover:bg-emerald-800"
                    >
                      Add
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Critical Multiple H1 Alert (if found in content) */}
          {contentH1Count > 0 && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-rose-600 text-white shrink-0 mt-0.5">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-rose-900 uppercase tracking-wider flex items-center gap-2">
                    Multiple H1 Headings Detected ({totalH1Count} total)
                  </h4>
                  <p className="text-xs text-rose-700 mt-0.5 leading-relaxed">
                    Hero title already renders 1 primary H1. Found {contentH1Count} extra &lt;h1&gt; in content body. Having multiple H1 tags hurts keyword signals and SEO ranking.
                  </p>
                </div>
              </div>

              {onContentChange && (
                <button
                  type="button"
                  onClick={handleConvertH1ToH2}
                  className="shrink-0 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Wand2 className="h-3.5 w-3.5" /> Convert Content H1 to H2
                </button>
              )}
            </div>
          )}

          {/* ACCORDION PILLARS (RANK MATH STRUCTURE) */}
          <div className="space-y-4">

            {/* PILLAR 1: BASIC SEO */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
              <button
                type="button"
                onClick={() => toggleSection('basic')}
                className="w-full px-5 py-3.5 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between transition-all cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                    1. Basic SEO
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ({basicSeoTests.filter(t => t.passed).length} of {basicSeoTests.length} passed)
                  </span>
                </div>
                {openSections.basic ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
              </button>

              {openSections.basic && (
                <div className="p-5 divide-y divide-slate-100">
                  {basicSeoTests.map(test => (
                    <div key={test.id} className="py-3 flex items-start gap-3 text-xs">
                      {test.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : test.warning ? (
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className={`font-bold ${test.passed ? 'text-slate-800' : test.warning ? 'text-amber-900' : 'text-rose-900'}`}>
                          {test.title}
                        </div>
                        <p className="text-slate-500 mt-0.5 text-[11px] leading-relaxed">
                          {test.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* PILLAR 2: ADDITIONAL SEO */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
              <button
                type="button"
                onClick={() => toggleSection('additional')}
                className="w-full px-5 py-3.5 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between transition-all cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                    2. Additional SEO
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ({additionalSeoTests.filter(t => t.passed).length} of {additionalSeoTests.length} passed)
                  </span>
                </div>
                {openSections.additional ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
              </button>

              {openSections.additional && (
                <div className="p-5 divide-y divide-slate-100">
                  {additionalSeoTests.map(test => (
                    <div key={test.id} className="py-3 flex items-start justify-between gap-3 text-xs">
                      <div className="flex items-start gap-3">
                        {test.passed ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className={`font-bold ${test.passed ? 'text-slate-800' : 'text-rose-900'}`}>
                            {test.title}
                          </div>
                          <p className="text-slate-500 mt-0.5 text-[11px] leading-relaxed">
                            {test.details}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons inside tests */}
                      {test.actionType === 'convert_h1' && !test.passed && onContentChange && (
                        <button
                          type="button"
                          onClick={handleConvertH1ToH2}
                          className="shrink-0 px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                        >
                          <Wand2 className="h-3 w-3" /> Fix H1
                        </button>
                      )}

                      {test.actionType === 'auto_link' && onContentChange && (
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={handleAutoLinkAll}
                            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                            title="1-Click Auto-Link keywords to website pages"
                          >
                            <Zap className="h-3 w-3" /> Auto-Link ({unlinkedOpportunities.length})
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTab('links')}
                            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold"
                          >
                            Explore Routes &rarr;
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* PILLAR 3: TITLE READABILITY */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
              <button
                type="button"
                onClick={() => toggleSection('titleReadability')}
                className="w-full px-5 py-3.5 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between transition-all cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                    3. Title Readability
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ({titleReadabilityTests.filter(t => t.passed).length} of {titleReadabilityTests.length} passed)
                  </span>
                </div>
                {openSections.titleReadability ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
              </button>

              {openSections.titleReadability && (
                <div className="p-5 divide-y divide-slate-100">
                  {titleReadabilityTests.map(test => (
                    <div key={test.id} className="py-3 flex items-start justify-between gap-3 text-xs">
                      <div className="flex items-start gap-3">
                        {test.passed ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : test.warning ? (
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className={`font-bold ${test.passed ? 'text-slate-800' : test.warning ? 'text-amber-900' : 'text-rose-900'}`}>
                            {test.title}
                          </div>
                          <p className="text-slate-500 mt-0.5 text-[11px] leading-relaxed">
                            {test.details}
                          </p>
                        </div>
                      </div>

                      {test.actionType === 'add_number' && !test.passed && onApplyMetaTitle && (
                        <button
                          type="button"
                          onClick={handleAddYearToTitle}
                          className="shrink-0 px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                        >
                          <Plus className="h-3 w-3" /> Add 2026
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* PILLAR 4: CONTENT READABILITY */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
              <button
                type="button"
                onClick={() => toggleSection('contentReadability')}
                className="w-full px-5 py-3.5 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between transition-all cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                    4. Content Readability
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ({contentReadabilityTests.filter(t => t.passed).length} of {contentReadabilityTests.length} passed)
                  </span>
                </div>
                {openSections.contentReadability ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
              </button>

              {openSections.contentReadability && (
                <div className="p-5 divide-y divide-slate-100">
                  {contentReadabilityTests.map(test => (
                    <div key={test.id} className="py-3 flex items-start justify-between gap-3 text-xs">
                      <div className="flex items-start gap-3">
                        {test.passed ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className={`font-bold ${test.passed ? 'text-slate-800' : 'text-amber-900'}`}>
                            {test.title}
                          </div>
                          <p className="text-slate-500 mt-0.5 text-[11px] leading-relaxed">
                            {test.details}
                          </p>
                        </div>
                      </div>

                      {test.actionType === 'insert_toc' && !test.passed && onContentChange && h2Matches.length > 0 && (
                        <button
                          type="button"
                          onClick={handleInsertToc}
                          className="shrink-0 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                        >
                          <ListOrdered className="h-3 w-3" /> Insert TOC
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: 1-CLICK INTERNAL LINKER & SITE ROUTES CATALOG */}
      {/* ========================================================================= */}
      {activeTab === 'links' && (
        <div className="p-6 space-y-6">
          
          {/* Hero Action Station */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-400" />
                <h3 className="font-extrabold text-base tracking-tight text-white">
                  1-Click Auto Internal Linker
                </h3>
              </div>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Automatically connects your blog content to official HR Niti pages based on matched keywords. Links only the first unlinked occurrence safely without nested tags.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleAutoLinkAll}
                disabled={!onContentChange}
                className="px-5 py-3 bg-[#006B3F] hover:bg-emerald-600 active:scale-95 text-white rounded-2xl text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer disabled:opacity-50"
              >
                <Zap className="h-4 w-4 text-emerald-300" />
                <span>Auto-Link All ({unlinkedOpportunities.length} detected)</span>
              </button>
            </div>
          </div>

          {/* Opportunities Counter Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Detected In Article</div>
              <div className="text-xl font-black text-slate-900 mt-0.5">{linkOpportunities.length}</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Matched HR Niti topic terms</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="text-emerald-700 font-bold uppercase tracking-wider text-[10px]">Already Linked</div>
              <div className="text-xl font-black text-emerald-800 mt-0.5">
                {linkOpportunities.filter(o => o.isAlreadyLinked).length}
              </div>
              <p className="text-[11px] text-emerald-600 mt-0.5">Internal links active in body</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 col-span-2 sm:col-span-1">
              <div className="text-amber-700 font-bold uppercase tracking-wider text-[10px]">Unlinked Opportunities</div>
              <div className="text-xl font-black text-amber-800 mt-0.5">{unlinkedOpportunities.length}</div>
              <p className="text-[11px] text-amber-600 mt-0.5">Can be linked with 1-click</p>
            </div>
          </div>

          {/* Section A: Detected Opportunities in This Article */}
          <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-4 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#006B3F]" />
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Keywords Detected in Current Content
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {linkOpportunities.length} keywords matched
              </span>
            </div>

            {linkOpportunities.length === 0 ? (
              <div className="py-6 text-center text-slate-400 text-xs font-semibold">
                No matching product keywords detected in this article yet. Type terms like "payroll software", "attendance", or "leave management".
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-3">
                {linkOpportunities.map(opp => (
                  <div
                    key={opp.target.route}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                      opp.isAlreadyLinked
                        ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                        : 'bg-white border-slate-200 text-slate-800 shadow-2xs'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 truncate">
                          "{opp.matchedKeyword}"
                        </span>
                        {opp.isAlreadyLinked ? (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            Linked
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                            Unlinked
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
                        &rarr; {opp.target.route} ({opp.target.title})
                      </div>
                    </div>

                    {!opp.isAlreadyLinked && onContentChange && (
                      <button
                        type="button"
                        onClick={() => handleLinkSingle(opp.target)}
                        className="shrink-0 px-2.5 py-1.5 bg-[#006B3F] hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-2xs flex items-center gap-1 cursor-pointer"
                      >
                        <Zap className="h-3 w-3" /> Link
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section B: All Website Routes Catalog (Search & One-Click Linker) */}
          <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#006B3F]" />
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Official Website Routes Directory ({INTERNAL_LINK_TARGETS.length} Pages)
                </h4>
              </div>

              {/* Search Bar */}
              <div className="relative sm:w-64">
                <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={linkSearchQuery}
                  onChange={(e) => setLinkSearchQuery(e.target.value)}
                  placeholder="Filter routes or keywords..."
                  className="w-full text-xs font-medium pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#006B3F] focus:bg-white"
                />
              </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1 text-xs font-semibold">
              {['all', 'Core HRMS & Payroll', 'HR Modules & Productivity', 'Solutions by Size', 'Commercial & Resources'].map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setLinkCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    linkCategoryFilter === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? `All (${INTERNAL_LINK_TARGETS.length})` : cat}
                </button>
              ))}
            </div>

            {/* Route Cards */}
            <div className="grid md:grid-cols-2 gap-3 pt-2">
              {filteredRoutes.map(target => (
                <div
                  key={target.route}
                  className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-slate-50/50 transition-all flex flex-col justify-between gap-3 group text-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-slate-900 group-hover:text-emerald-800 text-sm">
                        {target.title}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0">
                        {target.category.split(' ')[0]}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-emerald-700 mt-1 font-semibold">
                      {target.route}
                    </div>

                    <div className="flex flex-wrap items-center gap-1 mt-2">
                      {target.keywords.slice(0, 3).map(kw => (
                        <span key={kw} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          {kw}
                        </span>
                      ))}
                      {target.keywords.length > 3 && (
                        <span className="text-[10px] text-slate-400 font-medium">
                          +{target.keywords.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions for this route */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => copyRouteToClipboard(target.route)}
                        className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-bold flex items-center gap-1"
                        title="Copy route URL"
                      >
                        {copiedRoute === target.route ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                        <span>{copiedRoute === target.route ? 'Copied' : 'Copy'}</span>
                      </button>

                      {onContentChange && (
                        <button
                          type="button"
                          onClick={() => handleInsertLinkBox(target)}
                          className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-bold flex items-center gap-1"
                          title="Append a feature card at bottom of article"
                        >
                          <Plus className="h-3 w-3" /> Card Box
                        </button>
                      )}
                    </div>

                    {onContentChange && (
                      <button
                        type="button"
                        onClick={() => handleLinkSingle(target)}
                        className="px-3 py-1 bg-[#006B3F] hover:bg-emerald-800 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                        title="Search and link keyword in article text"
                      >
                        <Zap className="h-3 w-3 text-emerald-300" /> Auto-Link Text
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: SERP & SOCIAL SNIPPET PREVIEWS */}
      {/* ========================================================================= */}
      {activeTab === 'snippet' && (
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Google &amp; Social Meta Snippets
            </span>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setPreviewDevice('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  previewDevice === 'desktop'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="h-3.5 w-3.5" /> Desktop
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  previewDevice === 'mobile'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" /> Mobile
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice('social')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  previewDevice === 'social'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Share2 className="h-3.5 w-3.5" /> Social Card
              </button>
            </div>
          </div>

          {/* Display Preview */}
          <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200">
            {previewDevice === 'desktop' && (
              <div className="max-w-2xl font-sans text-left space-y-1">
                <div className="flex items-center gap-2 text-[12px] text-[#202124] mb-1">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 shrink-0">
                    <img src="/icon.png" alt="Favicon" className="w-4 h-4 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </div>
                  <div className="leading-tight overflow-hidden">
                    <div className="font-medium text-[13px] text-[#202124]">HR Niti</div>
                    <div className="text-[12px] text-[#4d5156] truncate">{displayUrl}</div>
                  </div>
                </div>

                <h3 className="text-[#1a0dab] hover:underline text-[19px] leading-[1.3] font-normal cursor-pointer line-clamp-1">
                  {displayTitle}
                </h3>

                <p className="text-[#4d5156] text-[14px] leading-[1.58] line-clamp-2 pt-0.5">
                  {displayDescription}
                </p>
              </div>
            )}

            {previewDevice === 'mobile' && (
              <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-2xl p-4 shadow-xs font-sans text-left space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 shrink-0">
                    <img src="/icon.png" alt="Favicon" className="w-4 h-4 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-semibold text-slate-800">hrniti.com</div>
                    <div className="text-[11px] text-slate-500 truncate">https://www.hrniti.com › blog</div>
                  </div>
                </div>

                <h4 className="text-[#1a0dab] text-[17px] font-medium leading-snug line-clamp-2">
                  {displayTitle}
                </h4>

                <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-3">
                  {displayDescription}
                </p>
              </div>
            )}

            {previewDevice === 'social' && (
              <div className="max-w-lg mx-auto rounded-xl border border-slate-200 overflow-hidden shadow-xs bg-white font-sans">
                {featured_image ? (
                  <div className="h-52 w-full bg-slate-100 overflow-hidden relative">
                    <img src={featured_image} alt="Featured" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="h-44 w-full bg-gradient-to-br from-emerald-800 to-slate-900 flex items-center justify-center text-white/80 text-sm font-semibold p-4 text-center">
                    No featured image selected. (Using default branding card)
                  </div>
                )}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    hrniti.com • blog
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                    {displayTitle}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {displayDescription}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Character and Pixel Progress Indicators */}
          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Meta Title Length</span>
                <span className={displayTitle.length > 60 ? 'text-amber-600 font-bold' : displayTitle.length >= 50 ? 'text-emerald-600 font-bold' : 'text-slate-500'}>
                  {displayTitle.length} / 60 chars
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    displayTitle.length > 60 ? 'bg-amber-500' : displayTitle.length >= 50 ? 'bg-emerald-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(100, (displayTitle.length / 60) * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Ideal: 50–60 characters. Truncated on Google beyond ~60 characters.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Meta Description Length</span>
                <span className={displayDescription.length > 160 ? 'text-amber-600 font-bold' : displayDescription.length >= 120 ? 'text-emerald-600 font-bold' : 'text-slate-500'}>
                  {displayDescription.length} / 160 chars
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    displayDescription.length > 160 ? 'bg-amber-500' : displayDescription.length >= 120 ? 'bg-emerald-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(100, (displayDescription.length / 160) * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Ideal: 120–160 characters. Truncated on Google beyond ~160 characters.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SCHEMA INSPECTOR (JSON-LD) */}
      {/* ========================================================================= */}
      {activeTab === 'schema' && (
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Article &amp; BlogPosting JSON-LD Schema
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Automatically rendered into the HTML head to power Google Rich Snippets &amp; AI Engine Optimization (AEO).
              </p>
            </div>

            <button
              type="button"
              onClick={copySchemaToClipboard}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copiedSchema ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              {copiedSchema ? 'Copied!' : 'Copy Schema'}
            </button>
          </div>

          <div className="bg-slate-900 rounded-2xl p-4 overflow-x-auto text-emerald-400 font-mono text-xs leading-relaxed max-h-96">
            <pre>{schemaJson}</pre>
          </div>
        </div>
      )}

    </div>
  );
}
