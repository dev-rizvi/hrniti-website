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
  TrendingUp,
  Target,
  Heading,
  Layers,
  Link2,
  Image as ImageIcon,
  FileText,
  Wand2,
  BookOpen
} from 'lucide-react';

export interface SeoDataProps {
  title: string;
  slug: string;
  summary: string;
  content: string;
  featured_image?: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  focusKeyword?: string;
  onFocusKeywordChange?: (kw: string) => void;
  onApplyMetaTitle?: (title: string) => void;
  onApplyMetaDescription?: (desc: string) => void;
  onContentChange?: (content: string) => void;
}

export type SeoCategory = 'all' | 'headings' | 'keywords' | 'content' | 'links';
export type SeoStatusFilter = 'all' | 'error' | 'warning' | 'pass';

export default function BlogSeoAnalyzer({
  title,
  slug,
  summary,
  content,
  featured_image,
  meta_title,
  meta_description,
  meta_keywords,
  focusKeyword: externalFocusKeyword,
  onFocusKeywordChange,
  onApplyMetaTitle,
  onApplyMetaDescription,
  onContentChange,
}: SeoDataProps) {
  const [previewTab, setPreviewTab] = useState<'desktop' | 'mobile' | 'social'>('desktop');
  const [internalFocusKeyword, setInternalFocusKeyword] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<SeoCategory>('all');
  const [statusFilter, setStatusFilter] = useState<SeoStatusFilter>('all');

  const focusKeyword = externalFocusKeyword !== undefined ? externalFocusKeyword : internalFocusKeyword;
  const setKeyword = (kw: string) => {
    if (onFocusKeywordChange) {
      onFocusKeywordChange(kw);
    } else {
      setInternalFocusKeyword(kw);
    }
  };

  // Derive active values for display
  const displayTitle = meta_title.trim() ? meta_title.trim() : (title.trim() ? title.trim() : 'Title of your blog post');
  const displayDescription = meta_description.trim() 
    ? meta_description.trim() 
    : (summary.trim() ? summary.trim() : 'Please provide a meta description or summary. A concise, compelling description helps your article stand out in search results.');
  const displaySlug = slug.trim() ? slug.trim() : 'your-blog-slug';
  const displayUrl = `https://www.hrniti.com/blog/${displaySlug}`;

  // Content text extraction
  const plainText = useMemo(() => {
    if (!content) return '';
    return content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }, [content]);

  // Word count & reading time
  const wordCount = useMemo(() => {
    return plainText ? plainText.split(/\s+/).length : 0;
  }, [plainText]);

  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // --- HEADING AUDIT (H1, H2, H3) ---
  const contentH1Matches = useMemo(() => {
    if (!content) return [];
    return content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  }, [content]);

  const contentH1Count = contentH1Matches.length;
  // Note: Hero section on public page always renders exactly 1 main H1 for blog.title
  const totalH1Count = 1 + contentH1Count;

  const h2Matches = useMemo(() => {
    if (!content) return [];
    return content.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
  }, [content]);

  const h3Matches = useMemo(() => {
    if (!content) return [];
    return content.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || [];
  }, [content]);

  // Quick fix: Convert all content H1s to H2s
  const handleConvertH1ToH2 = () => {
    if (!onContentChange || !content) return;
    const updated = content.replace(/<h1(\s*[^>]*)>([\s\S]*?)<\/h1>/gi, (_match, attrs, inner) => {
      return `<h2${attrs}>${inner}</h2>`;
    });
    onContentChange(updated);
  };

  // Quick fix: Remove duplicate title H1 from beginning of content
  const handleRemoveDuplicateH1 = () => {
    if (!onContentChange || !content) return;
    const updated = content.replace(/<h1(\s*[^>]*)>([\s\S]*?)<\/h1>/i, '');
    onContentChange(updated.trim());
  };

  // --- PARAGRAPH READABILITY AUDIT ---
  const longParagraphCount = useMemo(() => {
    if (!content) return 0;
    const paragraphs = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
    let count = 0;
    for (const p of paragraphs) {
      const pText = p.replace(/<[^>]+>/g, '').trim();
      const pWords = pText.split(/\s+/).filter(Boolean).length;
      if (pWords > 120) count++;
    }
    return count;
  }, [content]);

  // --- IMAGES & ALT TEXT AUDIT ---
  const imageAudit = useMemo(() => {
    if (!content) return { count: 0, missingAlt: 0, withAlt: 0 };
    const imgMatches = content.match(/<img[^>]*>/gi) || [];
    let missingAlt = 0;
    for (const img of imgMatches) {
      const altMatch = img.match(/alt=["']([^"']*)["']/i);
      if (!altMatch || !altMatch[1].trim()) {
        missingAlt++;
      }
    }
    return {
      count: imgMatches.length,
      missingAlt,
      withAlt: imgMatches.length - missingAlt,
    };
  }, [content]);

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

  // --- FOCUS KEYWORD AUDIT ---
  const kw = focusKeyword.trim().toLowerCase();
  const kwWords = kw ? kw.split(/\s+/).filter(Boolean).length : 0;
  
  const kwInTitle = kw ? displayTitle.toLowerCase().includes(kw) : false;
  const kwAtTitleStart = kw ? displayTitle.toLowerCase().startsWith(kw) : false;
  const kwInDesc = kw ? displayDescription.toLowerCase().includes(kw) : false;
  const kwInSlug = kw ? displaySlug.toLowerCase().includes(kw.replace(/\s+/g, '-')) : false;

  // Keyword in first 10% of content
  const kwInIntro = useMemo(() => {
    if (!kw || !plainText) return false;
    const introPortion = plainText.slice(0, Math.max(300, Math.floor(plainText.length * 0.15))).toLowerCase();
    return introPortion.includes(kw);
  }, [kw, plainText]);

  // Keyword in subheadings
  const kwInHeadings = useMemo(() => {
    if (!kw || !content) return false;
    const headingsText = [...h2Matches, ...h3Matches].join(' ').replace(/<[^>]+>/g, '').toLowerCase();
    return headingsText.includes(kw);
  }, [kw, content, h2Matches, h3Matches]);

  // Keyword occurrences and density
  const { kwOccurrences, kwDensity } = useMemo(() => {
    if (!kw || !plainText || wordCount === 0) return { kwOccurrences: 0, kwDensity: 0 };
    const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = plainText.match(regex);
    const count = matches ? matches.length : 0;
    const density = ((count * kwWords) / wordCount) * 100;
    return { kwOccurrences: count, kwDensity: Number(density.toFixed(2)) };
  }, [kw, plainText, wordCount, kwWords]);

  // --- COMPREHENSIVE SEO AUDIT CHECKLIST ---
  const checklist = useMemo(() => {
    const items: Array<{
      id: string;
      category: SeoCategory;
      title: string;
      description: string;
      status: 'pass' | 'warning' | 'error';
      points: number;
      maxPoints: number;
      actionType?: 'convert_h1' | 'remove_h1';
    }> = [];

    // ==================== 1. HEADINGS & HIERARCHY ====================
    // 1A. H1 Count (CRITICAL)
    if (contentH1Count > 0) {
      items.push({
        id: 'heading_multiple_h1',
        category: 'headings',
        title: `Multiple H1 Tags Detected (${totalH1Count} H1 tags total)`,
        description: `Your article has ${contentH1Count} <h1> tag(s) inside the content body, plus 1 main <h1> in the hero title. Google expects exactly ONE <h1> per page. Content subheadings must be <h2> or <h3>.`,
        status: 'error',
        points: 0,
        maxPoints: 15,
        actionType: 'convert_h1',
      });
    } else {
      items.push({
        id: 'heading_single_h1',
        category: 'headings',
        title: 'Single H1 Tag (Optimal Hierarchy)',
        description: 'Only 1 H1 tag exists on the page (the main title in the hero banner). Clean on-page hierarchy.',
        status: 'pass',
        points: 15,
        maxPoints: 15,
      });
    }

    // 1B. H2 Subheadings
    if (h2Matches.length >= 2) {
      items.push({
        id: 'heading_h2_optimal',
        category: 'headings',
        title: `H2 Subheadings Present (${h2Matches.length} H2 tags)`,
        description: 'Great job! Multiple H2 subheadings structure your article for both users and search crawlers.',
        status: 'pass',
        points: 10,
        maxPoints: 10,
      });
    } else if (h2Matches.length === 1) {
      items.push({
        id: 'heading_h2_few',
        category: 'headings',
        title: 'Only 1 H2 Subheading Found',
        description: 'Consider adding more H2 subheadings to break long sections into scannable blocks.',
        status: 'warning',
        points: 6,
        maxPoints: 10,
      });
    } else {
      items.push({
        id: 'heading_h2_missing',
        category: 'headings',
        title: 'No H2 Subheadings Found',
        description: 'Articles without H2 subheadings are hard to read and score poorly for organic queries.',
        status: wordCount > 250 ? 'error' : 'warning',
        points: 0,
        maxPoints: 10,
      });
    }

    // 1C. H3 Subheadings (if H3 exists without H2)
    if (h3Matches.length > 0 && h2Matches.length === 0) {
      items.push({
        id: 'heading_skipped_level',
        category: 'headings',
        title: 'Skipped Heading Levels (H3 without H2)',
        description: 'Found H3 subheadings without parent H2 headings. Keep hierarchical order: H1 → H2 → H3.',
        status: 'warning',
        points: 2,
        maxPoints: 5,
      });
    }

    // ==================== 2. KEYWORDS & SNIPPET ====================
    // 2A. Meta Title Length
    const titleLen = displayTitle.length;
    if (!meta_title.trim() && !title.trim()) {
      items.push({
        id: 'title_missing',
        category: 'keywords',
        title: 'Meta Title is Missing',
        description: 'Provide a descriptive meta title for search engine snippet indexing.',
        status: 'error',
        points: 0,
        maxPoints: 15,
      });
    } else if (titleLen >= 50 && titleLen <= 60) {
      items.push({
        id: 'title_optimal',
        category: 'keywords',
        title: `Meta Title Length is Optimal (${titleLen} / 60 chars)`,
        description: 'Fits perfectly within the standard Google 600px desktop and mobile display width.',
        status: 'pass',
        points: 15,
        maxPoints: 15,
      });
    } else if (titleLen > 60) {
      items.push({
        id: 'title_long',
        category: 'keywords',
        title: `Meta Title is Long (${titleLen} chars)`,
        description: 'Titles over 60 characters will be truncated with an ellipsis "..." in Google SERPs.',
        status: 'warning',
        points: 9,
        maxPoints: 15,
      });
    } else if (titleLen >= 35) {
      items.push({
        id: 'title_acceptable',
        category: 'keywords',
        title: `Meta Title is Slightly Short (${titleLen} / 60 chars)`,
        description: 'Acceptable length, but expanding towards 50-60 chars allows adding target keywords.',
        status: 'warning',
        points: 11,
        maxPoints: 15,
      });
    } else {
      items.push({
        id: 'title_too_short',
        category: 'keywords',
        title: `Meta Title is Too Short (${titleLen} chars)`,
        description: 'Title should be at least 35 characters long (sweet spot: 50-60 chars).',
        status: 'error',
        points: 4,
        maxPoints: 15,
      });
    }

    // 2B. Meta Description Length
    const descLen = displayDescription.length;
    if (!meta_description.trim() && !summary.trim()) {
      items.push({
        id: 'desc_missing',
        category: 'keywords',
        title: 'Meta Description is Missing',
        description: 'Add a search snippet description so search engines don\'t guess your article summary.',
        status: 'error',
        points: 0,
        maxPoints: 15,
      });
    } else if (descLen >= 120 && descLen <= 160) {
      items.push({
        id: 'desc_optimal',
        category: 'keywords',
        title: `Meta Description Length is Optimal (${descLen} / 160 chars)`,
        description: 'Fits cleanly in desktop and mobile snippets without being cut off.',
        status: 'pass',
        points: 15,
        maxPoints: 15,
      });
    } else if (descLen > 160) {
      items.push({
        id: 'desc_long',
        category: 'keywords',
        title: `Meta Description is Long (${descLen} / 160 chars)`,
        description: 'Descriptions exceeding 160 characters will be truncated in search results.',
        status: 'warning',
        points: 9,
        maxPoints: 15,
      });
    } else if (descLen >= 70) {
      items.push({
        id: 'desc_short',
        category: 'keywords',
        title: `Meta Description is Short (${descLen} / 160 chars)`,
        description: 'Add more benefit-driven information to reach the 120-160 character range.',
        status: 'warning',
        points: 9,
        maxPoints: 15,
      });
    } else {
      items.push({
        id: 'desc_too_short',
        category: 'keywords',
        title: `Meta Description is Too Short (${descLen} chars)`,
        description: 'Descriptions under 70 characters offer poor CTR in organic search results.',
        status: 'error',
        points: 4,
        maxPoints: 15,
      });
    }

    // 2C. Clean URL Slug
    if (!slug.trim()) {
      items.push({
        id: 'slug_missing',
        category: 'keywords',
        title: 'URL Slug is Missing',
        description: 'A URL slug is required to generate the public web address.',
        status: 'error',
        points: 0,
        maxPoints: 10,
      });
    } else {
      const isClean = /^[a-z0-9-]+$/.test(slug.trim());
      const isCleanLen = slug.length <= 60;
      if (isClean && isCleanLen) {
        items.push({
          id: 'slug_optimal',
          category: 'keywords',
          title: `SEO-Friendly URL Slug (${slug.length} chars)`,
          description: 'Uses lowercase alphanumeric characters separated by single hyphens.',
          status: 'pass',
          points: 10,
          maxPoints: 10,
        });
      } else if (!isClean) {
        items.push({
          id: 'slug_special',
          category: 'keywords',
          title: 'Slug Contains Invalid Characters',
          description: 'URL slugs should only use lowercase letters, numbers, and single hyphens.',
          status: 'warning',
          points: 5,
          maxPoints: 10,
        });
      } else {
        items.push({
          id: 'slug_long',
          category: 'keywords',
          title: 'URL Slug is Unusually Long',
          description: 'Shorter slugs (< 60 chars) are easier for users to share and memorize.',
          status: 'warning',
          points: 7,
          maxPoints: 10,
        });
      }
    }

    // 2D. Target Focus Keyword checks (if provided)
    if (kw) {
      // In title
      if (kwInTitle) {
        items.push({
          id: 'kw_in_title',
          category: 'keywords',
          title: `Focus Keyword in Meta Title (${kwAtTitleStart ? 'Near Beginning' : 'Present'})`,
          description: `"${kw}" is included in the title, which is a vital Google ranking factor.`,
          status: 'pass',
          points: 5,
          maxPoints: 5,
        });
      } else {
        items.push({
          id: 'kw_title_missing',
          category: 'keywords',
          title: 'Focus Keyword Missing from Title',
          description: `Include "${kw}" in your meta title for direct search query relevance.`,
          status: 'warning',
          points: 0,
          maxPoints: 5,
        });
      }

      // In description
      if (kwInDesc) {
        items.push({
          id: 'kw_in_desc',
          category: 'keywords',
          title: 'Focus Keyword in Meta Description',
          description: `"${kw}" is in the description. Search engines will bold it in results.`,
          status: 'pass',
          points: 5,
          maxPoints: 5,
        });
      } else {
        items.push({
          id: 'kw_desc_missing',
          category: 'keywords',
          title: 'Focus Keyword Missing from Description',
          description: `Include "${kw}" in the meta description to increase click-through rate.`,
          status: 'warning',
          points: 0,
          maxPoints: 5,
        });
      }

      // In slug
      if (kwInSlug) {
        items.push({
          id: 'kw_in_slug',
          category: 'keywords',
          title: 'Focus Keyword in URL Slug',
          description: `URL path contains "${kw.replace(/\s+/g, '-')}".`,
          status: 'pass',
          points: 5,
          maxPoints: 5,
        });
      } else {
        items.push({
          id: 'kw_slug_missing',
          category: 'keywords',
          title: 'Focus Keyword Missing from Slug',
          description: `Consider including "${kw.replace(/\s+/g, '-')}" in the URL slug.`,
          status: 'warning',
          points: 0,
          maxPoints: 5,
        });
      }

      // In intro / first 10%
      if (kwInIntro) {
        items.push({
          id: 'kw_in_intro',
          category: 'keywords',
          title: 'Focus Keyword in Article Introduction',
          description: `"${kw}" appears early in the first 10% of content. Great for search intent.`,
          status: 'pass',
          points: 5,
          maxPoints: 5,
        });
      } else {
        items.push({
          id: 'kw_intro_missing',
          category: 'keywords',
          title: 'Focus Keyword Not in Introduction',
          description: `Mention "${kw}" in the opening 1-2 paragraphs of your article.`,
          status: 'warning',
          points: 0,
          maxPoints: 5,
        });
      }

      // In Subheadings
      if (kwInHeadings) {
        items.push({
          id: 'kw_in_headings',
          category: 'keywords',
          title: 'Focus Keyword in Subheadings',
          description: `"${kw}" appears in at least one H2/H3 subheading.`,
          status: 'pass',
          points: 5,
          maxPoints: 5,
        });
      } else {
        items.push({
          id: 'kw_headings_missing',
          category: 'keywords',
          title: 'Focus Keyword Missing from Subheadings',
          description: `Include "${kw}" in at least one H2 subheading.`,
          status: 'warning',
          points: 0,
          maxPoints: 5,
        });
      }

      // Keyword Density
      if (kwDensity >= 0.5 && kwDensity <= 2.5) {
        items.push({
          id: 'kw_density_good',
          category: 'keywords',
          title: `Optimal Keyword Density (${kwDensity}% - ${kwOccurrences} times)`,
          description: 'Keyword is mentioned naturally without keyword stuffing.',
          status: 'pass',
          points: 5,
          maxPoints: 5,
        });
      } else if (kwDensity > 2.5) {
        items.push({
          id: 'kw_density_high',
          category: 'keywords',
          title: `High Keyword Density (${kwDensity}% - ${kwOccurrences} times)`,
          description: 'Keyword density exceeds 2.5%. Reduce repetitions to prevent keyword stuffing penalties.',
          status: 'warning',
          points: 2,
          maxPoints: 5,
        });
      } else if (kwOccurrences > 0) {
        items.push({
          id: 'kw_density_low',
          category: 'keywords',
          title: `Low Keyword Density (${kwDensity}% - ${kwOccurrences} times)`,
          description: 'Found only a few times. Aim for 0.8% - 2.0% density in your article.',
          status: 'warning',
          points: 2,
          maxPoints: 5,
        });
      }
    }

    // ==================== 3. CONTENT & READABILITY ====================
    // 3A. Word Count
    if (wordCount >= 600) {
      items.push({
        id: 'content_depth_high',
        category: 'content',
        title: `Comprehensive Content Length (${wordCount} words)`,
        description: `Substantive in-depth content (estimated ${readingTimeMinutes} min read). Articles with 600+ words rank highest on Google.`,
        status: 'pass',
        points: 15,
        maxPoints: 15,
      });
    } else if (wordCount >= 300) {
      items.push({
        id: 'content_depth_mod',
        category: 'content',
        title: `Moderate Content Length (${wordCount} words)`,
        description: 'Meets minimum requirement (300+ words). Expand to 600+ words for competitive keywords.',
        status: 'warning',
        points: 9,
        maxPoints: 15,
      });
    } else if (wordCount > 0) {
      items.push({
        id: 'content_thin',
        category: 'content',
        title: `Thin Content Alert (${wordCount} words)`,
        description: 'Articles with fewer than 300 words are considered thin and struggle to rank.',
        status: 'error',
        points: 3,
        maxPoints: 15,
      });
    } else {
      items.push({
        id: 'content_none',
        category: 'content',
        title: 'Article Content is Empty',
        description: 'Add blog content using the visual editor.',
        status: 'error',
        points: 0,
        maxPoints: 15,
      });
    }

    // 3B. Paragraph Length (Readability)
    if (longParagraphCount > 0) {
      items.push({
        id: 'paragraph_dense',
        category: 'content',
        title: `${longParagraphCount} Paragraph(s) Exceed 120 Words`,
        description: 'Dense walls of text increase bounce rate. Break long paragraphs into 2-4 sentences.',
        status: 'warning',
        points: 4,
        maxPoints: 8,
      });
    } else if (wordCount > 100) {
      items.push({
        id: 'paragraph_good',
        category: 'content',
        title: 'Paragraph Lengths are Well-Spaced',
        description: 'Paragraphs are bite-sized and easy for mobile readers to scan.',
        status: 'pass',
        points: 8,
        maxPoints: 8,
      });
    }

    // ==================== 4. LINKS & MEDIA ====================
    // 4A. Featured Image
    if (featured_image) {
      items.push({
        id: 'media_featured_img',
        category: 'links',
        title: 'Featured Image Set',
        description: 'Enables rich Google Discover cards and Open Graph social sharing thumbnails.',
        status: 'pass',
        points: 10,
        maxPoints: 10,
      });
    } else {
      items.push({
        id: 'media_no_featured',
        category: 'links',
        title: 'No Featured Image Assigned',
        description: 'Posts without a featured image receive significantly lower engagement on SERPs.',
        status: 'warning',
        points: 0,
        maxPoints: 10,
      });
    }

    // 4B. Image Alt Attributes
    if (imageAudit.count > 0) {
      if (imageAudit.missingAlt === 0) {
        items.push({
          id: 'media_alt_pass',
          category: 'links',
          title: `All Images Have Alt Attributes (${imageAudit.count} images)`,
          description: 'Great for accessibility and Google Image Search ranking.',
          status: 'pass',
          points: 8,
          maxPoints: 8,
        });
      } else {
        items.push({
          id: 'media_alt_missing',
          category: 'links',
          title: `Missing Alt Text on ${imageAudit.missingAlt} of ${imageAudit.count} Image(s)`,
          description: 'Add descriptive alt="..." attributes to all content images for accessibility and SEO.',
          status: 'warning',
          points: 3,
          maxPoints: 8,
        });
      }
    }

    // 4C. Internal Links
    if (linkAudit.internal >= 1) {
      items.push({
        id: 'links_internal_pass',
        category: 'links',
        title: `${linkAudit.internal} Internal Link(s) Detected`,
        description: 'Internal linking helps search crawlers index related pages and passes page authority.',
        status: 'pass',
        points: 8,
        maxPoints: 8,
      });
    } else {
      items.push({
        id: 'links_internal_missing',
        category: 'links',
        title: 'No Internal Links Found',
        description: 'Add links to other relevant HR Niti products or articles to improve link equity.',
        status: 'warning',
        points: 2,
        maxPoints: 8,
      });
    }

    // 4D. Broken/Empty links
    if (linkAudit.empty > 0) {
      items.push({
        id: 'links_empty_warning',
        category: 'links',
        title: `${linkAudit.empty} Placeholder or Empty Link(s) Found`,
        description: 'Found anchor links with empty or "#" href attributes. Update them with valid URLs.',
        status: 'warning',
        points: 2,
        maxPoints: 5,
      });
    }

    return items;
  }, [
    contentH1Count,
    totalH1Count,
    h2Matches,
    h3Matches,
    wordCount,
    readingTimeMinutes,
    displayTitle,
    displayDescription,
    meta_title,
    title,
    meta_description,
    summary,
    slug,
    kw,
    kwInTitle,
    kwAtTitleStart,
    kwInDesc,
    kwInSlug,
    kwInIntro,
    kwInHeadings,
    kwDensity,
    kwOccurrences,
    longParagraphCount,
    featured_image,
    imageAudit,
    linkAudit,
  ]);

  // Overall Score
  const { totalScore, scoreGrade, scoreColor, scoreBg, scoreBorder } = useMemo(() => {
    const earned = checklist.reduce((sum, item) => sum + item.points, 0);
    const max = checklist.reduce((sum, item) => sum + item.maxPoints, 0);
    const normalized = max > 0 ? Math.min(100, Math.round((earned / max) * 100)) : 0;

    if (normalized >= 80) {
      return {
        totalScore: normalized,
        scoreGrade: 'Good SEO',
        scoreColor: 'text-emerald-700',
        scoreBg: 'bg-emerald-50',
        scoreBorder: 'border-emerald-200',
      };
    } else if (normalized >= 50) {
      return {
        totalScore: normalized,
        scoreGrade: 'Needs Work',
        scoreColor: 'text-amber-700',
        scoreBg: 'bg-amber-50',
        scoreBorder: 'border-amber-200',
      };
    } else {
      return {
        totalScore: normalized,
        scoreGrade: 'Poor SEO',
        scoreColor: 'text-rose-700',
        scoreBg: 'bg-rose-50',
        scoreBorder: 'border-rose-200',
      };
    }
  }, [checklist]);

  // Filtered Checklist
  const filteredChecklist = useMemo(() => {
    return checklist.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchCat && matchStatus;
    });
  }, [checklist, activeCategory, statusFilter]);

  const passedCount = checklist.filter((c) => c.status === 'pass').length;
  const warningCount = checklist.filter((c) => c.status === 'warning').length;
  const errorCount = checklist.filter((c) => c.status === 'error').length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-6">
      
      {/* Top Banner: SEO Score + Status Breakdown */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-4">
          
          {/* Circular Score Gauge */}
          <div className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border ${scoreBg} ${scoreBorder} shadow-xs`}>
            <div className="relative flex items-center justify-center">
              <svg className="w-12 h-12 transform -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-slate-200 fill-none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - totalScore / 100)}`}
                  className={`${scoreColor} fill-none transition-all duration-700 ease-out`}
                  strokeLinecap="round"
                />
              </svg>
              <span className={`absolute font-black text-sm ${scoreColor}`}>
                {totalScore}
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">SEO Score</div>
              <div className={`text-sm font-extrabold ${scoreColor}`}>{scoreGrade}</div>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setStatusFilter(statusFilter === 'pass' ? 'all' : 'pass')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                statusFilter === 'pass'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/80'
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> {passedCount} Passed
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter(statusFilter === 'warning' ? 'all' : 'warning')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                statusFilter === 'warning'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100/80'
              }`}
            >
              <AlertTriangle className="h-3.5 w-3.5" /> {warningCount} Warnings
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter(statusFilter === 'error' ? 'all' : 'error')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                statusFilter === 'error'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100/80'
              }`}
            >
              <XCircle className="h-3.5 w-3.5" /> {errorCount} Errors
            </button>
          </div>
        </div>

        {/* Quick Helper Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {onApplyMetaTitle && title && (
            <button
              type="button"
              onClick={() => onApplyMetaTitle(title)}
              className="text-xs font-semibold px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Copy the main blog title to meta title"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Use Blog Title
            </button>
          )}
          {onApplyMetaDescription && summary && (
            <button
              type="button"
              onClick={() => onApplyMetaDescription(summary)}
              className="text-xs font-semibold px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Copy summary to meta description"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Use Summary
            </button>
          )}
        </div>
      </div>

      {/* Heading Structure Bar (H1, H2, H3 Live Monitor) */}
      <div className={`p-4 rounded-xl border transition-all ${
        contentH1Count > 0 
          ? 'bg-rose-50/70 border-rose-200' 
          : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg ${contentH1Count > 0 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'}`}>
              <Heading className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Page Heading Hierarchy
                </span>
                {contentH1Count > 0 ? (
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-600 text-white animate-pulse">
                    Multiple H1 Tags Alert!
                  </span>
                ) : (
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Optimal Hierarchy
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Google requires exactly one H1 per page. The hero title is the primary H1.
              </p>
            </div>
          </div>

          {/* Heading Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200" title="Rendered automatically by Hero section">
              Main H1: 1
            </span>
            <span className={`px-2.5 py-1 rounded-lg border ${
              contentH1Count > 0 
                ? 'bg-rose-100 text-rose-800 border-rose-300 font-bold' 
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`} title="H1 tags found inside the content body">
              Body H1: {contentH1Count}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200" title="H2 subheadings inside content">
              H2: {h2Matches.length}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200" title="H3 subheadings inside content">
              H3: {h3Matches.length}
            </span>
          </div>
        </div>

        {/* Quick Actions if Multiple H1s are detected */}
        {contentH1Count > 0 && onContentChange && (
          <div className="mt-3 pt-3 border-t border-rose-200/80 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-rose-800 font-medium flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-rose-600 shrink-0" />
              Found {contentH1Count} extra &lt;h1&gt; tag(s) in content body. Click below to fix instantly:
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleConvertH1ToH2}
                className="text-xs font-bold px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                title="Convert all <h1> tags in content to <h2>"
              >
                <Wand2 className="h-3.5 w-3.5" /> Convert Content H1 to H2
              </button>
              <button
                type="button"
                onClick={handleRemoveDuplicateH1}
                className="text-xs font-semibold px-3 py-1.5 bg-white hover:bg-rose-50 text-rose-700 border border-rose-300 rounded-lg transition-all cursor-pointer"
                title="Remove the top duplicate H1 heading from content"
              >
                Remove Duplicate H1
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Target Focus Keyword & Density Analyzer */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Focus Target Keyword
            </span>
          </div>
          <div className="relative flex-1 sm:max-w-xs">
            <input
              type="text"
              value={focusKeyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. payroll in india 2026"
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 bg-slate-50/50"
            />
          </div>
        </div>

        {focusKeyword.trim() && (
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs">
            <div className={`p-2 rounded-lg border flex flex-col justify-between ${kwInTitle ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Title</span>
              <span className="font-semibold flex items-center gap-1 mt-1">
                {kwInTitle ? <CheckCircle2 className="h-3 w-3 text-emerald-600" /> : <XCircle className="h-3 w-3 text-slate-400" />} {kwInTitle ? 'Present' : 'Missing'}
              </span>
            </div>
            <div className={`p-2 rounded-lg border flex flex-col justify-between ${kwInDesc ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Description</span>
              <span className="font-semibold flex items-center gap-1 mt-1">
                {kwInDesc ? <CheckCircle2 className="h-3 w-3 text-emerald-600" /> : <XCircle className="h-3 w-3 text-slate-400" />} {kwInDesc ? 'Present' : 'Missing'}
              </span>
            </div>
            <div className={`p-2 rounded-lg border flex flex-col justify-between ${kwInSlug ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Slug</span>
              <span className="font-semibold flex items-center gap-1 mt-1">
                {kwInSlug ? <CheckCircle2 className="h-3 w-3 text-emerald-600" /> : <XCircle className="h-3 w-3 text-slate-400" />} {kwInSlug ? 'Present' : 'Missing'}
              </span>
            </div>
            <div className={`p-2 rounded-lg border flex flex-col justify-between ${kwInIntro ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Intro (10%)</span>
              <span className="font-semibold flex items-center gap-1 mt-1">
                {kwInIntro ? <CheckCircle2 className="h-3 w-3 text-emerald-600" /> : <XCircle className="h-3 w-3 text-slate-400" />} {kwInIntro ? 'Found' : 'Missing'}
              </span>
            </div>
            <div className={`p-2 rounded-lg border flex flex-col justify-between ${kwInHeadings ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Headings (H2)</span>
              <span className="font-semibold flex items-center gap-1 mt-1">
                {kwInHeadings ? <CheckCircle2 className="h-3 w-3 text-emerald-600" /> : <XCircle className="h-3 w-3 text-slate-400" />} {kwInHeadings ? 'Present' : 'Missing'}
              </span>
            </div>
            <div className={`p-2 rounded-lg border flex flex-col justify-between ${
              kwDensity >= 0.5 && kwDensity <= 2.5 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Density</span>
              <span className="font-semibold mt-1">
                {kwDensity}% ({kwOccurrences}x)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Real-Time SERP Snippet Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        
        {/* Preview Tabs Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-500" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Search Engine & Social Preview
            </span>
          </div>

          <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setPreviewTab('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                previewTab === 'desktop'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" /> Desktop
            </button>
            <button
              type="button"
              onClick={() => setPreviewTab('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                previewTab === 'mobile'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" /> Mobile
            </button>
            <button
              type="button"
              onClick={() => setPreviewTab('social')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                previewTab === 'social'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Share2 className="h-3.5 w-3.5" /> Social Card
            </button>
          </div>
        </div>

        {/* Snippet Card Contents */}
        <div className="p-6 bg-white">
          {previewTab === 'desktop' && (
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

          {previewTab === 'mobile' && (
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

          {previewTab === 'social' && (
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

          {/* Character Counters Bar */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-slate-600 mb-1">
                <span>Meta Title Length</span>
                <span className={displayTitle.length > 60 ? 'text-amber-600 font-bold' : displayTitle.length >= 50 ? 'text-emerald-600 font-bold' : 'text-slate-500'}>
                  {displayTitle.length} / 60 characters
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    displayTitle.length > 60
                      ? 'bg-amber-500'
                      : displayTitle.length >= 50
                      ? 'bg-emerald-500'
                      : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(100, (displayTitle.length / 60) * 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-600 mb-1">
                <span>Meta Description Length</span>
                <span className={displayDescription.length > 160 ? 'text-amber-600 font-bold' : displayDescription.length >= 120 ? 'text-emerald-600 font-bold' : 'text-slate-500'}>
                  {displayDescription.length} / 160 characters
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    displayDescription.length > 160
                      ? 'bg-amber-500'
                      : displayDescription.length >= 120
                      ? 'bg-emerald-500'
                      : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(100, (displayDescription.length / 160) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Built-in SEO Standards Audit & Actionable Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-2xs">
        
        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              On-Page SEO Standards Audit
            </h4>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                activeCategory === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All ({checklist.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('headings')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                activeCategory === 'headings' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Headings ({checklist.filter(i => i.category === 'headings').length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('keywords')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                activeCategory === 'keywords' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Snippet & Keywords ({checklist.filter(i => i.category === 'keywords').length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('content')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                activeCategory === 'content' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Readability ({checklist.filter(i => i.category === 'content').length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('links')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                activeCategory === 'links' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Links & Media ({checklist.filter(i => i.category === 'links').length})
            </button>
          </div>
        </div>

        {/* Audit List Items */}
        <div className="divide-y divide-slate-100">
          {filteredChecklist.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs font-semibold">
              No items matching current filter.
            </div>
          ) : (
            filteredChecklist.map((item) => {
              const isPass = item.status === 'pass';
              const isWarn = item.status === 'warning';
              const isErr = item.status === 'error';

              return (
                <div key={item.id} className="py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="mt-0.5 shrink-0">
                      {isPass && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
                      {isWarn && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                      {isErr && <XCircle className="h-4 w-4 text-rose-500" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-bold ${isPass ? 'text-slate-800' : isWarn ? 'text-amber-900' : 'text-rose-900'}`}>
                          {item.title}
                        </span>
                        <span className={`text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded ${
                          isPass
                            ? 'bg-emerald-50 text-emerald-700'
                            : isWarn
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-slate-500 mt-0.5 text-[11px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Quick Fix Button (if applicable) */}
                  {item.actionType === 'convert_h1' && onContentChange && (
                    <div className="sm:shrink-0 self-start sm:self-center pl-7 sm:pl-0">
                      <button
                        type="button"
                        onClick={handleConvertH1ToH2}
                        className="text-xs font-bold px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-all shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        <Wand2 className="h-3 w-3" /> Convert to H2
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Tips Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/80 -mx-5 -mb-5 p-4 rounded-b-2xl flex items-start gap-2.5 text-xs text-slate-600">
          <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-normal">
            <strong>Standard SEO Protocol:</strong> 1 single H1 per page (hero), descriptive H2 subheadings every 250-300 words, meta title between 50-60 characters, description between 120-160 characters, and at least 1 internal link and image alt attribute.
          </p>
        </div>
      </div>

    </div>
  );
}
