import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  imagePath: string;
  category: string;
  publishDate?: string;
}

export default function HomeBlogs({ blogs }: { blogs: BlogPost[] }) {
  if (!blogs || blogs.length === 0) return null;

  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 max-w-7xl mx-auto">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#006B3F] bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50">
              News & Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Featured Articles & HR Tips
            </h2>
            <p className="text-base text-slate-500 mt-2 font-medium max-w-xl">
              Stay ahead with the latest trends in payroll automation, attendance systems, compliance, and human resources.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#006B3F] hover:text-emerald-800 font-bold text-sm mt-4 md:mt-0 transition-colors group"
          >
            Explore all articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Slider Layout (CSS Scroll Snap) */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 max-w-7xl mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogs.map((post, i) => (
            <div 
              key={i} 
              className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 shrink-0">
                <img
                  src={post.imagePath}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-800 px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold mb-3">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{post.publishDate || "June 2026"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#006B3F] transition-colors leading-snug line-clamp-2 mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006B3F] uppercase tracking-wider group-hover:gap-2.5 transition-all"
                  >
                    Read Full Article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
