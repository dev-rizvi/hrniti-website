import { Lock, DatabaseBackup, Activity, KeyRound, ShieldCheck } from "lucide-react";

const practices = [
    { title: "Encrypted Data Storage", desc: "Employee data is encrypted in transit and at rest with SSL & TLS protection.", icon: Lock },
    { title: "Regular Backups", desc: "Automated daily cloud backups safeguard your business against data loss.", icon: DatabaseBackup },
    { title: "System Health Monitoring", desc: "24/7 infrastructure monitoring ensures platform availability & uptime.", icon: Activity },
    { title: "Role-Based Access Control", desc: "Granular RBAC ensures employees only access data relevant to their role.", icon: KeyRound },
];

export default function SecuritySection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" /> Enterprise-Grade Protection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Security Built for <span className="text-emerald-400">Trust &amp; Compliance</span>
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        Protecting your confidential payroll, salary, and employee record data with robust cloud infrastructure and privacy controls.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">

                    {/* Left Column: Security Practices */}
                    <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                        {practices.map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-0.5">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-extrabold text-base mb-1 text-white">{item.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Custom Uploaded Security Image */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950 group">
                            <img
                                src="/image/homepage/secq-design.webp"
                                alt="HR Niti Security Architecture"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold border border-emerald-500/30 flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                                Enterprise SSL &amp; Encrypted Data Architecture
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
