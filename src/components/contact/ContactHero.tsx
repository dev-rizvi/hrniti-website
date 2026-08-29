"use client";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 p-48 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm font-medium tracking-wide text-green-100">We&apos;re Here to Help</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Talk!</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Our Team Is Here To Help!
                    </p>

                    {/* Quick Contact Icons */}
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <a href="tel:+918601489763" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-lg px-4 py-3 border border-white/20 group">
                            <Phone className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">Call Us (+91 8601489763)</span>
                        </a>
                        <a href="mailto:sales@hrniti.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-lg px-4 py-3 border border-white/20 group">
                            <Mail className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">Email Us</span>
                        </a>
                        <a href="https://wa.me/918601489763" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-lg px-4 py-3 border border-white/20 group">
                            <MessageCircle className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">WhatsApp (+91 8601489763)</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
