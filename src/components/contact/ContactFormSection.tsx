"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send, Loader2, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { submitContactInquiryAction } from "@/app/contact-us/actions";

interface ContactSettings {
  phone: string;
  whatsapp: string;
  email: string;
  location_address: string;
  location_map_url: string;
  logo_url?: string | null;
  facebook_url?: string | null;
  twitter_url?: string | null;
  linkedin_url?: string | null;
  instagram_url?: string | null;
  copyright_text?: string | null;
}

interface ContactFormSectionProps {
  settings: ContactSettings | null;
}

export default function ContactFormSection({ settings }: ContactFormSectionProps) {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  // Official contact details
  const displayPhone = "+91 8601489763";
  const displayWhatsapp = "+91 8601489763";
  const displayEmail = "support@hrniti.com";
  const displayAddress = "5/761, Sector 5, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh 226001";
  const displayMapUrl = "https://maps.google.com/maps?q=5/761,%20Sector%205,%20Gomti%20Nagar,%20Lucknow,%20Uttar%20Pradesh%20226001&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleWhatsappClick = () => {
    const cleanNumber = displayWhatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    // Client-side validations
    if (!name.trim()) {
      setSubmitResult({ success: false, message: "Please enter your name." });
      return;
    }
    if (!email.trim() || !/^[^s@]+@[^s@]+.[^s@]+$/.test(email)) {
      setSubmitResult({ success: false, message: "Please enter a valid email address." });
      return;
    }
    if (!phone.trim()) {
      setSubmitResult({ success: false, message: "Please enter your phone number." });
      return;
    }
    if (!subject.trim()) {
      setSubmitResult({ success: false, message: "Please select or type a subject." });
      return;
    }
    if (!message.trim()) {
      setSubmitResult({ success: false, message: "Please type your message." });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactInquiryAction({
        name,
        email,
        phone,
        subject,
        message,
      });

      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Thank you! Your inquiry has been submitted successfully. We will contact you shortly.",
        });
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitResult({
          success: false,
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-20 -translate-y-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-20 translate-y-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-12">
            
            {/* Form Section (Left Column) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Send us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below, and our HR consultation experts will reach out to you within 24 hours.
                </p>

                {submitResult && (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl mb-6 border ${
                      submitResult.success
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : "bg-rose-50 border-rose-200 text-rose-800"
                    } animate-fade-in`}
                  >
                    {submitResult.success ? (
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5 shrink-0" />
                    )}
                    <p className="text-sm font-medium leading-relaxed">{submitResult.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. john@company.com"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 9876543210"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900"
                      >
                        <option value="">Select subject...</option>
                        <option value="Product Demo Request">Product Demo Request</option>
                        <option value="Pricing Inquiry">Pricing Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your HR requirements or what you are looking for..."
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Support Query Notice Box - Filling the space below Send Inquiry button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-300">
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-slate-600">
                        For any support related query reach us at
                      </p>
                      <a 
                        href="mailto:support@hrniti.com" 
                        className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1.5 mt-0.5 tracking-tight"
                      >
                        support@hrniti.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 shrink-0 shadow-2xs">
                    <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>10:00 AM to 7:00 PM, Mon - Fri</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Contact & Map Section (Right Column) */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
              {/* Subtle visual decoration */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">Contact Information</h3>

                  <div className="space-y-4">
                    {/* Phone link */}
                    <a
                      href={`tel:${displayPhone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-4 group p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/70 border border-slate-800 hover:border-emerald-500/30 transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone</p>
                        <p className="text-sm font-bold text-slate-100 mt-0.5">{displayPhone}</p>
                      </div>
                    </a>

                    {/* Email link */}
                    <a
                      href={`mailto:${displayEmail}`}
                      className="flex items-center gap-4 group p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/70 border border-slate-800 hover:border-amber-500/30 transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                        <p className="text-sm font-bold text-slate-100 mt-0.5">{displayEmail}</p>
                      </div>
                    </a>

                    {/* WhatsApp link */}
                    <button
                      onClick={handleWhatsappClick}
                      className="flex items-center gap-4 group p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/70 border border-slate-800 hover:border-emerald-500/30 transition-all text-left w-full cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">WhatsApp</p>
                        <p className="text-sm font-bold text-slate-100 mt-0.5">{displayWhatsapp}</p>
                      </div>
                    </button>

                    {/* Address block */}
                    <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Corporate Office</p>
                        <p className="text-xs font-medium leading-relaxed text-slate-200 mt-1">{displayAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Embedded Container */}
                <div className="mt-2 flex-grow flex flex-col justify-end">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Office Map Location</p>
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner group relative">
                    <iframe
                      src={displayMapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="HR Niti Office Location Map"
                      className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
