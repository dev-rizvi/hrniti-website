'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      setSuccessMsg('Welcome back! Redirecting to dashboard...');
      setTimeout(() => {
        router.push('/admin/dashboard');
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to authenticate. Please check your credentials.');
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F4F7F6] to-[#EBF1EE] flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* Aurora Ambient Glow Blobs */}
      <div className="absolute top-[-25%] left-[-15%] w-[600px] h-[600px] rounded-full bg-emerald-400/15 blur-[130px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-25%] right-[-15%] w-[600px] h-[600px] rounded-full bg-teal-300/10 blur-[130px] pointer-events-none animate-pulse duration-[6000ms]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5ebe8_1px,transparent_1px),linear-gradient(to_bottom,#e5ebe8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="w-full max-w-[430px] px-6 z-10 animate-fadeIn">
        
        {/* Logo and Greeting */}
        <div className="text-center mb-7 flex flex-col items-center">
          
          {/* Logo Donezo Icon Container */}
          <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-[#006B3F] shadow-[0_10px_25px_rgba(0,107,63,0.06)] mb-4 hover:scale-105 transition-transform duration-300">
            <svg className="w-7 h-7 text-[#006B3F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[#006B3F] text-[10px] font-extrabold uppercase tracking-wider mb-3 shadow-sm shadow-emerald-700/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006B3F] animate-ping" />
            Donezo Admin Portal
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sign In to Dashboard
          </h1>
          <p className="text-slate-500 text-xs mt-2 font-medium">
            Enter your admin credentials to access workspace
          </p>
        </div>

        {/* Form Container (Premium Card) */}
        <div className="bg-white/95 backdrop-blur-md border border-white/80 rounded-[28px] p-8 shadow-[0_20px_50px_rgba(0,107,63,0.05)] hover:shadow-[0_20px_50px_rgba(0,107,63,0.1)] transition-all duration-500 relative overflow-hidden">
          {/* Glowing Top line border */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-emerald-400 to-[#006B3F]" />

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Status Messages */}
            {errorMsg && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-150 text-red-800 p-4 rounded-2xl text-xs font-semibold animate-shake shadow-sm">
                <ShieldAlert className="h-4.5 w-4.5 shrink-0 text-red-550" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-150 text-[#006B3F] p-4 rounded-2xl text-xs font-semibold shadow-sm">
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[#006B3F]" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                Email Address
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-slate-400 peer-focus-within:text-[#006B3F] pointer-events-none transition-colors duration-200">
                  <Mail className="h-4 w-4 text-slate-400 peer-focus:text-[#006B3F]" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="admin@hrniti.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full bg-slate-50/80 border border-slate-200/80 focus:bg-white focus:border-[#006B3F] text-slate-800 rounded-2xl pl-10 pr-4 py-3.5 text-xs font-semibold transition-all duration-300 outline-none focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                  Password
                </label>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-slate-400 pointer-events-none transition-colors duration-200">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer w-full bg-slate-50/80 border border-slate-200/80 focus:bg-white focus:border-[#006B3F] text-slate-800 rounded-2xl pl-10 pr-10 py-3.5 text-xs font-semibold transition-all duration-300 outline-none focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 flex items-center text-slate-400 hover:text-[#006B3F] transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#006B3F] to-[#005431] hover:from-[#005431] hover:to-[#004226] text-white font-bold text-xs py-3.5 px-4 rounded-2xl transition-all shadow-[0_4px_18px_rgba(0,107,63,0.18)] hover:shadow-[0_4px_22px_rgba(0,107,63,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none group cursor-pointer uppercase tracking-wider"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-8">
          &copy; {new Date().getFullYear()} HR Niti Portal. All rights reserved.
        </p>
      </div>
    </main>
  );
}




