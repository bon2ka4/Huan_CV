import React from 'react';
import { personalData } from '../data';
import { Gamepad2, FileCode2, Github, Linkedin, Mail, Send, Award, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
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
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Senior Unity Developer / Lead Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              KTS Game & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Unity Architect
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
              {["Unity 3D/2D", "WebGL 60FPS", "GPU Instancing", "Zero GC Alloc", "Addressables", "URP Shader Graph"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <Gamepad2 className="w-5 h-5" />
                Trải nghiệm Game Demo (WebGL)
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#skills"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-cyan-400 transition-all duration-300"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                Xem Kỹ Năng Core
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/60">
              <span className="text-xs text-slate-400 font-mono">Kết nối:</span>
              <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalData.socials.email} className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Card / Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Card Outer Container */}
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
              
              {/* Main Card */}
              <div className="relative glass-panel rounded-2xl p-6 border border-slate-700/50 space-y-6">
                
                {/* Header Profile */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={personalData.avatar}
                      alt={personalData.name}
                      className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-cyan-400/50 p-1 object-cover"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-950 flex items-center justify-center" title="Online & Ready" />
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">{personalData.name}</h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">{personalData.title}</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{personalData.location}</span>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {personalData.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-900/70 rounded-xl p-3.5 border border-slate-800/80 text-center">
                      <div className="font-heading font-extrabold text-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Performance Promise */}
                <div className="bg-cyan-950/40 rounded-xl p-3.5 border border-cyan-500/20 text-xs text-cyan-200/90 flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Cam kết chất lượng Code:</strong>
                    Tối đa hóa tái sử dụng bộ nhớ, GPU Instancing cho Draw calls cực thấp, kiến trúc SOLID dễ mở rộng.
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
