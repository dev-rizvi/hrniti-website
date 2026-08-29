import { ScanFace, Fingerprint, Smartphone, ShieldCheck } from "lucide-react";

export default function FeatureHighlight() {
    const methodStats = [
        { icon: ScanFace, label: "Face Recognition", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: Fingerprint, label: "Biometric", color: "text-emerald-600", bg: "bg-emerald-50" },
        { icon: Smartphone, label: "Mobile App", color: "text-green-600", bg: "bg-green-50" },
        { icon: ShieldCheck, label: "Card Swipe", color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Touchless & Secure Attendance</h2>
                    <p className="text-lg text-text-light">
                        Adapt to the new normal with our contactless attendance solutions. Whether it's AI-enabled facial recognition at the office or geo-fenced mobile punches for field staff, we have you covered.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {methodStats.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all text-center group">
                            <div className={`w-16 h-16 mx-auto rounded-full ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`h-8 w-8 ${item.color}`} />
                            </div>
                            <h3 className="font-bold text-lg text-secondary">{item.label}</h3>
                        </div>
                    ))}
                </div>

                {/* Integration Note */}
                <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
                    <h3 className="text-2xl font-bold text-secondary mb-4">Seamless Hardware Integration</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        HR Niti integrates effortlessly with nearly all major biometric hardware brands available in the Indian market, ensuring you don't have to discard your existing infrastructure.
                    </p>
                    <div className="inline-flex flex-wrap justify-center gap-4 text-gray-400 font-medium">
                        <span>eSSL</span> • <span>Matrix</span> • <span>ZKTeco</span> • <span>Suprema</span> • <span>Spectra</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
