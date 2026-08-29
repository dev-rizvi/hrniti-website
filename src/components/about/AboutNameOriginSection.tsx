import { Shield, Sparkles, Target, Compass } from "lucide-react";

export default function AboutNameOriginSection() {
    return (
        <section className="py-20 bg-emerald-950 text-white border-y border-emerald-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                        Our Identity &amp; Heritage
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-3">
                        Why Were We Named <span className="text-amber-400">HR Niti?</span>
                    </h2>
                    <p className="text-emerald-100/90 text-base max-w-2xl mx-auto font-medium">
                        In Sanskrit and Indian tradition, <strong className="text-amber-300 font-bold">&quot;Niti&quot; (नीति)</strong> signifies Policy, Strategy, Ethics, and Governance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Reason 1: Strategic Governance */}
                    <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 hover:bg-emerald-900 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-amber-400 border border-emerald-600/40 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-emerald-950 transition-colors">
                            <Compass className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            1. Strategic HR Governance (&quot;Niti&quot;)
                        </h3>
                        <p className="text-sm text-emerald-100/80 leading-relaxed font-medium">
                            Traditional HR software focuses on mere data storage. HR Niti provides actionable strategy (&quot;Niti&quot;) — turning scattered attendance records and payroll inputs into strategic workforce analytics and error-free compliance.
                        </p>
                    </div>

                    {/* Reason 2: Multi-State Compliance Precision */}
                    <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 hover:bg-emerald-900 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-amber-400 border border-emerald-600/40 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-emerald-950 transition-colors">
                            <Shield className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            2. 100% Tax &amp; Statutory Rules (&quot;Niyam&quot;)
                        </h3>
                        <p className="text-sm text-emerald-100/80 leading-relaxed font-medium">
                            We build software based on exact Indian legal regulations (&quot;Niti &amp; Niyam&quot;). From multi-state Professional Tax slabs to PF ECR exports, our platform ensures your business operates with 100% legal integrity.
                        </p>
                    </div>
                </div>

                {/* Micro Guarantee Strip */}
                <div className="mt-12 text-center text-xs font-bold text-emerald-200 flex items-center justify-center gap-2">
                    <Target className="h-4 w-4 text-amber-400" />
                    <span>Configurable from 10 employees to 1,000+ without re-learning UI or changing systems.</span>
                </div>
            </div>
        </section>
    );
}
