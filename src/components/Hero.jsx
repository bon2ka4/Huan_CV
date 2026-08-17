import React from 'react';
import { personalData } from '../data';
import { Gamepad2, Phone, Mail, MapPin, Award, Cpu, ShieldCheck, ArrowRight, GraduationCap, Briefcase, Download } from 'lucide-react';

export default function Hero() {
  const handleExportPDF = () => {
    window.print();
  };
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              {personalData.name} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {personalData.title}
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalData.subtitle}
            </p>

            <p className="text-sm text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalData.bio}
            </p>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
              {["Unity 2D/3D", "Casual & Hybrid-casual", "Optimization", "Fix Bugs", "Ads & Tracking SDK"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Contact Details Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-mono">Điện thoại</div>
                  <div className="text-xs font-semibold text-slate-200">{personalData.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-mono">Email</div>
                  <div className="text-xs font-semibold text-slate-200 truncate max-w-[180px]">{personalData.email}</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 p-3 rounded-xl glass-card border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-mono">Địa chỉ</div>
                  <div className="text-xs font-semibold text-slate-200">{personalData.address}</div>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#skills"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <Cpu className="w-4 h-4" />
                Kỹ Năng Chuyên Môn
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-cyan-400 transition-all duration-300"
              >
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Kinh Nghiệm & Học Vấn
              </a>

              <button
                onClick={handleExportPDF}
                className="no-print flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-panel border border-cyan-500/40 hover:bg-slate-800/80 hover:text-cyan-400 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Tải CV (PDF)
              </button>
            </div>

          </div>

          {/* Right Column: Clean Profile Photo from CV */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
              
              {/* Main Profile Card */}
              <div className="relative glass-panel rounded-2xl p-4 border border-slate-700/50 space-y-4">
                
                {/* Clean Real CV Profile Photo */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-cyan-400/30 shadow-xl bg-slate-900">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Stats Grid */}
                {personalData.stats && personalData.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {personalData.stats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-900/70 rounded-xl p-3 border border-slate-800/80 text-center">
                        <div className="font-heading font-extrabold text-xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
