import React from 'react';
import { experienceData } from '../data';
import { Briefcase, Calendar, Building2, CheckCircle, Trophy, Rocket, Terminal } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            CAREER PATH & EXPERIENCE
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Kinh nghiệm Làm việc & Thành tựu
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Quá trình trưởng thành qua các vị trí phát triển Game Unity chuyên nghiệp.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/80 before:via-purple-500/40 before:to-transparent">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Timeline Icon Badge */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/20 z-10 shrink-0 absolute left-4 sm:left-1/2 -translate-x-1/2">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    {exp.company}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Highlight Stats / Achievements */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 mx-auto flex items-center justify-center text-cyan-400 mb-3">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-3xl text-white">5,000,000+</div>
            <div className="text-xs text-slate-400">Tổng lượt tải trên App Store & Google Play</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400 mb-3">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-3xl text-white">60 FPS</div>
            <div className="text-xs text-slate-400">Target mượt mà trên 98% thiết bị di động tầm trung</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-500/30 mx-auto flex items-center justify-center text-purple-400 mb-3">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-3xl text-white">100% Clean</div>
            <div className="text-xs text-slate-400">Tuân thủ SOLID & Quy trình kiểm thử GC Strict</div>
          </div>
        </div>

      </div>
    </section>
  );
}
