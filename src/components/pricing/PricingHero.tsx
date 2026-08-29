import { Wallet, ShieldCheck, Zap } from "lucide-react";

interface PricingHeroProps {
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
}

export default function PricingHero({
    title,
    subtitle,
    description
}: PricingHeroProps) {
    const displaySubtitle = subtitle || "Transparent Pricing";
    const displayTitle = title || "Plans that Grow with Your Business";
    const displayDescription = description || "Choose the perfect plan for your team size. No hidden setup fees, no long-term contracts. Just simple, scalable HR software.";

    const words = displayTitle.split(' ');
    let firstPart = displayTitle;
    let highlightedPart = "";
    if (words.length > 2) {
        highlightedPart = words.slice(-2).join(' ');
        firstPart = words.slice(0, -2).join(' ');
    } else if (words.length > 0) {
        highlightedPart = words.pop() || "";
        firstPart = words.join(' ');
    }

    return (
        <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium text-emerald-100">{displaySubtitle}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
                    {firstPart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{highlightedPart}</span>
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {displayDescription}
                </p>

                <div className="flex justify-center gap-8 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-green-400" /> Secure Data
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-400" /> Instant Activation
                    </div>
                    <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-purple-400" /> Money-back Guarantee
                    </div>
                </div>
            </div>
        </section>
    );
}

